package com.spia.businessportal.web.controller;

import java.io.IOException;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.HttpServerErrorException;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import ar.com.fluxit.framework.entities.user.PrivilegeDTO;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.PinContainerized;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.businessportal.common.entities.TruckVisitAppointmentBreakBulk;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.AppointmentBreakBulkServiceDTO;
import com.spia.businessportal.common.entities.dto.CargoValidationDTO;
import com.spia.businessportal.common.entities.dto.DraftServiceDTO;
import com.spia.businessportal.common.entities.dto.HBLPinDTO;
import com.spia.businessportal.common.entities.dto.HBLServiceDTO;
import com.spia.businessportal.common.entities.dto.HistoryServiceDTO;
import com.spia.businessportal.common.entities.dto.PinBreakBulkServiceDTO;
import com.spia.businessportal.common.entities.dto.RequestRemoveTvaById;
import com.spia.businessportal.common.entities.dto.ResponseTvaService;
import com.spia.businessportal.common.entities.dto.StorageBBDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailNotificationDTO;
import com.spia.businessportal.common.entities.dto.TruckCapacityServiceDTO;
import com.spia.businessportal.common.entities.dto.TruckVisitAppointmentBreakBulkNotifications;
import com.spia.businessportal.common.entities.dto.TruckVisitAppointmentDTO;
import com.spia.businessportal.common.entities.dto.TruckVisitAppointmentServiceDTO;
import com.spia.businessportal.common.entities.dto.WeightDTO;
import com.spia.businessportal.common.entities.dto.WeightServiceDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.filters.PinContainerizedFilter;
import com.spia.businessportal.common.filters.PinFilter;
import com.spia.businessportal.common.filters.TruckVisitAppointmentBreakBulkFilter;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.BreakBulkService;
import com.spia.businessportal.service.CustomerService;
import com.spia.businessportal.service.DriverService;
import com.spia.businessportal.service.HBLService;
import com.spia.businessportal.service.TruckVisitAppointmentService;
import com.spia.businessportal.service.impl.ValoresPorDefectoDummy;
import com.spia.services.entities.Agent;
import com.spia.services.entities.CancelTransactedAppointmentRequest;
import com.spia.services.entities.CargoLot;
import com.spia.services.entities.Driver;
import com.spia.services.entities.HoldItem;
import com.spia.services.entities.HoldsList;
import com.spia.services.entities.Truck;
import com.spia.services.entities.TruckVisitAppointment;
import com.spia.services.entities.Unit;
import com.spia.services.entities.UpdateTruckVisitBbkRequest;
import com.spia.services.entities.billing.Customer;
import com.spia.services.exception.BOException;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;
import com.google.gson.Gson;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import org.springframework.beans.factory.annotation.Value;
import com.spia.businessportal.common.entities.dto.AppointmentBreakBulkServiceCSDTO;

@RequestMapping("/api/breakbulk")
@Controller
public class BreakBulkController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(BreakBulkController.class);
	private static DecimalFormat df2 = new DecimalFormat("#.##");

	@Autowired
	private BreakBulkService breakBulkService;

	@Autowired
	private HBLService hBLService;

	@Autowired
	private CustomerService customerService;

	@Autowired
	private DriverService driverService;

	@Autowired
	private TruckVisitAppointmentService truckVisitAppointmentService;

	@Autowired
	private UserBO userBO;

	private List<TruckVisitAppointmentDTO> lstTruckVisit;

	private List<HBLPinDTO> lstHbl;

	private Integer pin;

	private Integer pinAppoimnet;

	@Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;

	/**
	 * GET /breakbulk/ invocación al servicio que retorna todos los Cargo-Lot
	 * asociados a un HBL de N4
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link List<CargoLot>}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "/search", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getCargoLot(@RequestBody Map<String, String> body) throws BOException {
		ResponseEntity<?> re = null;

		String hbl = body.get("data");

		try {
			HBLServiceDTO[] cargoLots = null;

			if (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT)) {
				cargoLots = hBLService.searchCargoLots(hbl, "Agent");
			} else if (userBO.hasPermission(User.COMPANY_TYPE_CUSTOMER)) {
				cargoLots = hBLService.searchCargoLots(hbl, "Customer");
			}

			if (cargoLots != null && cargoLots.length > 0) {
				List<String> unitsNbrList = new ArrayList<>();
				for (HBLServiceDTO hblInfo : cargoLots) {
					unitsNbrList.add(hblInfo.getUnitNbr());
				}

				String unitsNbr = StringUtils.join(unitsNbrList, ',');

				// Inserta el número de días que se deben por Storage y calcula si tiene o no
				// holds
				if (unitsNbr.equals("")) {
					Map<String, String> unitsPin = hBLService.searchPins(hbl);
					for (HBLServiceDTO cargo : cargoLots) {
						if (unitsPin.containsKey(cargo.getUnitNbr())) {
							cargo.setHasPin(true);
							cargo.setTruckName(unitsPin.get(cargo.getUnitNbr()));
						} else {
							cargo.setHasPin(false);
							cargo.setTruckName(null);
						}
					}
				} else {
					HoldsList holds = this.getTruckVisitAppointmentMdwBO().getHoldsList(unitsNbr);
					Map<String, String> unitsPin = hBLService.searchPins(hbl);
					for (HBLServiceDTO cargo : cargoLots) {
						if (unitsPin.containsKey(cargo.getUnitNbr())) {
							cargo.setHasPin(true);
							cargo.setTruckName(unitsPin.get(cargo.getUnitNbr()));
						} else {
							cargo.setHasPin(false);
							cargo.setTruckName(null);
						}
					}
					for (Unit unit : holds.getUnits()) {
						for (HBLServiceDTO hblService : cargoLots) {
							if (hblService.getUnitNbr().equals(unit.getUnitNbr())) {
								hblService.setStorageDaysOwed(Integer.valueOf(
										unit.getUfvStorageDaysOwed() == null ? "0" : unit.getUfvStorageDaysOwed()));
								if (unit.getUfvStorageDaysOwed() != null
										&& Integer.valueOf(unit.getUfvStorageDaysOwed()) > 0) {
									hblService.setHasChargeableUnitEvents(true);
								}
								if (unit.getHolds() != null && !unit.getHolds().isEmpty()) {
									hblService.setHasHolds(true);
								} else {
									hblService.setHasHolds(false);
								}
								if (unit.getHolds() != null && !unit.getHolds().isEmpty()) {
									List<String> holdDescriptions = new ArrayList<>();
									hblService.setHoldConsigneeActive(false);
									for (HoldItem holdItem : unit.getHolds()) {
										if (holdItem.getHoldId().equals("HOLD_CONSIGNEE")) {
											if (unit.getHolds().size() == 1) {
												hblService.setHasHolds(false);
											}
											if (holdItem.getHoldStatus() != null
													&& holdItem.getHoldStatus().equalsIgnoreCase("REQUIRED")) {
												hblService.setHoldConsigneeActive(true);
											}
										} else {
											holdDescriptions.add(holdItem.getHoldDescription());
										}
									}
									hblService.setHoldDescription(StringUtils.join(holdDescriptions, ", "));
								}
								break;
							}
						}
					}
				}

				String stringifyJson = new Gson().toJson(cargoLots);

				String encryptedLots = AESEncryptionUtil.getInstance(initVector, key).encrypt(stringifyJson, "POST /search BreakBulkController");

				re = new ResponseEntity<String>(encryptedLots, HttpStatus.OK);
			}
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener el HBL ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/truckCompany/{search}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getTruckCompany(@PathVariable String search) throws BOException {
		ResponseEntity<?> re = null;
		try {
			Customer[] customers;
			customers = hBLService.searchTruckCompany(search);
			re = new ResponseEntity<Customer[]>(customers, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener costumers ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * 
	 * @param plate
	 * @return
	 * @throws BOException
	 */
	@RequestMapping(value = "/getTruck/{plate}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getTruck(@PathVariable String plate) throws BOException {
		ResponseEntity<?> re = null;
		try {
			Truck truckResponse = breakBulkService.getTruck(EncoderDecoder.decodeBase64(plate));
			re = new ResponseEntity<Truck>(truckResponse, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener el Truck ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * 
	 * @param plate
	 * @return
	 * @throws BOException
	 */
	@RequestMapping(value = "/saveTruckVisit", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> saveTruckVisit(@RequestBody TruckVisitAppointmentDTO truckVisit)
			throws BOException {
		ResponseEntity<?> re = null;

		if (this.pinAppoimnet == null) {
			this.pinAppoimnet = 0;
		}
		this.pinAppoimnet++;

		try {

			if (this.lstTruckVisit == null) {
				this.lstTruckVisit = new ArrayList<>();
			}
			truckVisit.setPinNbr("111111" + this.pinAppoimnet.toString());
			this.lstTruckVisit.add(truckVisit);
			re = new ResponseEntity<TruckVisitAppointmentDTO>(truckVisit, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al guardar la visita ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Edita la cita para carga suelta
	 * 
	 * @param truckVisit
	 * @return
	 * @throws BOException
	 */
	@RequestMapping(value = "/editTruckVisit", method = RequestMethod.PUT)
	public @ResponseBody ResponseEntity<?> editTruckVisit(@RequestBody TruckVisitAppointmentDTO truckVisit)
			throws BOException {
		ResponseEntity<?> re = null;
		List<TruckVisitAppointmentDTO> lstTruckVisitTmp = new ArrayList<>();

		try {

			for (TruckVisitAppointmentDTO truckVisitAppointment : this.lstTruckVisit) {

				if (truckVisitAppointment != null && truckVisitAppointment.getPinNbr().equals(truckVisit.getPinNbr())) {
					lstTruckVisitTmp.add(truckVisit);
				} else {
					lstTruckVisitTmp.add(truckVisitAppointment);
				}
			}

			this.lstTruckVisit = lstTruckVisitTmp;
			re = new ResponseEntity<TruckVisitAppointmentDTO>(truckVisit, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al guardar la visita ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Elimina del listado de citas la correspondiente cita
	 * 
	 * @param plate
	 * @return {@link ResponseEntity}
	 * @throws BOException
	 */
	@RequestMapping(value = "/searchTvaBbk/{tvaNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> searchTvaBbk(@PathVariable String tvaNbr) throws BOException {
		ResponseEntity<?> re = null;
		try {
			tvaNbr = EncoderDecoder.decodeBase64(tvaNbr);
			HistoryServiceDTO[] tvaInfo = null;
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			tvaInfo = breakBulkService.getTvaBbk(userlogin.getEmpresa().getId(), tvaNbr);
			if (tvaInfo != null && tvaInfo.length != 0) {
				re = new ResponseEntity<HistoryServiceDTO[]>(tvaInfo, HttpStatus.OK);
			}
		} catch (Exception e) {
			LOG.error("Se produjo un error al consultar la cita ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}

		return re;

	}

	/**
	 * Elimina del listado de citas la correspondiente cita
	 * 
	 * @param plate
	 * @return {@link ResponseEntity}
	 * @throws BOException
	 */
	@RequestMapping(value = "/removeAppointment/{tvaNbr}/{causalCanAppointment}/{causalCanDescription}", method = RequestMethod.DELETE)
	public @ResponseBody ResponseEntity<?> removeAppointment(@PathVariable String tvaNbr, @PathVariable String causalCanAppointment, @PathVariable String causalCanDescription) throws BOException {
		ResponseEntity<?> re = null;
		try {
			TruckVisitAppointmentBreakBulk truckVisitAppointmentBreakBulk = null;
			TruckVisitAppointmentBreakBulkNotifications truckVisitAppointmentBreakBulkNotifications = new TruckVisitAppointmentBreakBulkNotifications();
			tvaNbr = EncoderDecoder.decodeBase64(tvaNbr);
			HistoryServiceDTO[] tvaInfo = null;
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			tvaInfo = breakBulkService.getTvaBbk(userlogin.getEmpresa().getId(), tvaNbr);
			if (tvaInfo != null && tvaInfo.length != 0) {
				truckVisitAppointmentBreakBulk = executeCancelTruckVisit(tvaNbr, tvaInfo,causalCanAppointment,causalCanDescription);
			}
			if (truckVisitAppointmentBreakBulk != null) {
				re = new ResponseEntity<TruckVisitAppointmentBreakBulk>(truckVisitAppointmentBreakBulk, HttpStatus.OK);
			} else {
				re = new ResponseEntity<Boolean>(true, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error("Se produjo un error al eliminar la cita ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}

		return re;

	}

	/**
	 * Elimina un cargo lot de la cita
	 * 
	 * @param plate
	 * @return {@link ResponseEntity}
	 * @throws BOException
	 */
	@RequestMapping(value = "/removeCargoAppointment/{cargoLot}/from/{tvaNbr}", method = RequestMethod.DELETE)
	public @ResponseBody ResponseEntity<?> removeCargoAppointment(@PathVariable String tvaNbr,
			@PathVariable String cargoLot) throws BOException {
		ResponseEntity<?> re = null;
		try {
			TruckVisitAppointment truckVisitAppointment = null;
			tvaNbr = EncoderDecoder.decodeBase64(tvaNbr);
			cargoLot = EncoderDecoder.decodeBase64(cargoLot);
			LOG.error("Eliminando cargo-lot " + cargoLot + " de la cita " + tvaNbr);
			HistoryServiceDTO[] tvaInfo = null;
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			tvaInfo = breakBulkService.getTvaBbk(userlogin.getEmpresa().getId(), tvaNbr);
			if (tvaInfo != null && tvaInfo.length != 0) {
				truckVisitAppointment = executeCancelCargoLotTruckVisit(tvaNbr, tvaInfo, cargoLot);
			}
			if (truckVisitAppointment != null) {
				truckVisitAppointment.setTruckingCompany(userlogin.getNombres());
				re = new ResponseEntity<TruckVisitAppointment>(truckVisitAppointment, HttpStatus.OK);
			} else {
				re = new ResponseEntity<Boolean>(true, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error("Se produjo un error al eliminar el cargo lot de la cita ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}

		return re;

	}

	/**
	 * 
	 * @param plate
	 * @return
	 * @throws BOException
	 */

	@RequestMapping(value = "/saveHbl", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> saveHbl(@RequestBody List<HBLPinDTO> hbl) throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<HBLPinDTO> listHbl = new ArrayList<>();
			if (this.pin == null) {
				this.pin = 0;
			}
			if (this.lstHbl == null) {
				this.lstHbl = new ArrayList<>();
			}

			for (HBLPinDTO ohbl : hbl) {
				this.pin++;
				ohbl.setPin("00000" + this.pin.toString());
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
				String date = sdf.format(new Date());
				ohbl.setPinCreationDate(date);
				listHbl.add(ohbl);
				this.lstHbl.add(ohbl);
			}

			re = new ResponseEntity<List<HBLPinDTO>>(listHbl, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al generar pin hbl ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * 
	 * @param plate
	 * @return
	 * @throws BOException
	 */
	@RequestMapping(value = "/getHbl/{pin}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getHbl(@PathVariable String pin) throws BOException {
		ResponseEntity<?> re = null;
		HBLPinDTO hblResponse = new HBLPinDTO();

		pin = EncoderDecoder.decodeBase64(pin);
		try {
			for (HBLPinDTO hbl : this.lstHbl) {
				if (hbl.getPin().equals(pin)) {
					hblResponse = hbl;
				}
			}
			re = new ResponseEntity<HBLPinDTO>(hblResponse, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al generar pin hbl ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	public BreakBulkController() {
		super();
		this.lstHbl = new ArrayList<>();
		this.lstHbl.add(ValoresPorDefectoDummy.LlenarValoresPorDefectoDummy());
		this.lstHbl.add(ValoresPorDefectoDummy.LlenarValoresPorDefectoDummy2());
	}

	/**
	 * @author Elvis Fontalvo Retorna lacapacidad del camion GET
	 *         /api/breakbulk/capacity
	 * 
	 * @return {@link com.spia.businessportal.common.entities.dto.TruckCapacityServiceDTO}
	 * @throws BusinessException cuando hay un error en los servicios mdw.
	 */

	@RequestMapping(value = "/capacity/{truck}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> truckCapacityService(@PathVariable String truck) {
		ResponseEntity<?> re = null;
		try {
			TruckCapacityServiceDTO[] response = breakBulkService.getTruckCapacity(truck);
			if (response != null && response.length != 0) {
				//re = new ResponseEntity<TruckCapacityServiceDTO[]>(response, HttpStatus.OK);
				String parsedResponse = new Gson().toJson(response); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET breakbulk/capacity/{truck} BreakBulkController");
				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.BreakBulkError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * @author Elvis Fontalvo Retorna lacapacidad del camion GET /api/breakbulk/pin
	 * 
	 * @return {@link com.spia.businessportal.common.entities.dto.TruckCapacityServiceDTO}
	 * @throws BusinessException cuando hay un error en los servicios mdw.
	 */

	@RequestMapping(value = "/pin/{pin}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> searchPin(@PathVariable String pin) {
		ResponseEntity<?> re = null;
		try {
			PinBreakBulkServiceDTO[] response = breakBulkService.getPinBreakBulk(pin);
			if (response != null && response.length != 0) {
				String parsedResponse = new Gson().toJson(response); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET breakbulk/pin/{pin} BreakBulkController");
				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.BreakBulkError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * @author Elvis Fontalvo Retorna lacapacidad del camion POST /api/breakbulk/pin
	 * 
	 * @return {@link com.spia.businessportal.common.entities.dto.TruckCapacityServiceDTO}
	 * @throws BusinessException cuando hay un error en los servicios mdw.
	 */

	@RequestMapping(value = "/validation", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> searchPinValidation(@RequestBody CargoValidationDTO cargo) {
		ResponseEntity<?> re = null;
		try {
			HBLServiceDTO[] cargoLots = null;
			int isGroup = 0;
			if (cargo.getIsGroup().equals("1")) {
				isGroup = 1;
			}

			if (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT) || this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK)) {
				cargoLots = breakBulkService.searchCargoLots(cargo.getHbl(), cargo.getAgente(), cargo.getDestination(),
						isGroup, "Agent");
			} else if (userBO.hasPermission(User.COMPANY_TYPE_CUSTOMER)) {
				cargoLots = breakBulkService.searchCargoLots(cargo.getHbl(), cargo.getAgente(), cargo.getDestination(),
						isGroup, "Customer");
			}

			if (cargoLots != null && cargoLots.length > 0) {
				List<String> unitsNbrList = new ArrayList<>();
				for (HBLServiceDTO hblInfo : cargoLots) {
					unitsNbrList.add(hblInfo.getUnitNbr());
				}

				String unitsNbr = StringUtils.join(unitsNbrList, ',');

				// Inserta el número de días que se deben por Storage y calcula si tiene o no
				// holds
				HoldsList holds = this.getTruckVisitAppointmentMdwBO().getHoldsList(unitsNbr);
				for (Unit unit : holds.getUnits()) {
					for (HBLServiceDTO hblService : cargoLots) {
						if (hblService.getUnitNbr().equals(unit.getUnitNbr())) {
							hblService.setStorageDaysOwed(Integer.valueOf(
									unit.getUfvStorageDaysOwed() == null ? "0" : unit.getUfvStorageDaysOwed()));
							if (unit.getUfvStorageDaysOwed() == null) {
								unit.setUfvStorageDaysOwed("0");
							}
							if (Integer.valueOf(unit.getUfvStorageDaysOwed()) > 0) {
								hblService.setHasChargeableUnitEvents(true);
							}
							/*
							 * if (unit.getHolds() != null && !unit.getHolds().isEmpty()) {
							 * hblService.setHasHolds(true); } else { hblService.setHasHolds(false); }
							 */
							if (unit.getHolds() != null && !unit.getHolds().isEmpty()) {
								List<String> holdDescriptions = new ArrayList<>();
								for (HoldItem holdItem : unit.getHolds()) {
									if (holdItem.getHoldId().equals("HOLD_CONSIGNEE")) {
										if (holdItem.getHoldStatus() != null
												&& holdItem.getHoldStatus().equalsIgnoreCase("REQUIRED")) {
											hblService.setHoldUnitActive(true);
										} else {
											hblService.setHoldUnitActive(false);
										}
										hblService.setHoldConsigneeActive(true);
										/*
										 * { holdDescriptions.add(holdItem.getHoldDescription()); }
										 */
									} else {
										hblService.setHasHolds(true);
										holdDescriptions.add(holdItem.getHoldDescription());
									}
								}
								hblService.setHoldDescription(StringUtils.join(holdDescriptions, ", "));
							} else {
								hblService.setHasHolds(false);
							}
							break;
						}
					}
				}
				
				//re = new ResponseEntity<HBLServiceDTO[]>(cargoLots, HttpStatus.OK);
				String parsedResponse = new Gson().toJson(cargoLots); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /validation} BreakBulkController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.BreakBulkError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * @author Elvis Fontalvo Retorna lacapacidad del camion GET
	 *         /api/breakbulk/appointment
	 * 
	 * @return {@link com.spia.businessportal.common.entities.dto.AppointmentBreakBulkServiceDTO}
	 * @throws BusinessException cuando hay un error en los servicios querys.
	 */

	/* @RequestMapping(value = "/appointment/{tvaNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> searchAppointment(@PathVariable String tvaNbr) {
		ResponseEntity<?> re = null;
		try {
			AppointmentBreakBulkServiceDTO[] response = breakBulkService.searchAppointment(tvaNbr);
			if (response != null && response.length != 0) {
				String parsedResponse = new Gson().toJson(response); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /appointment/{tvaNbr} BreakBulkController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.BreakBulkError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	} */

	@RequestMapping(value = "/appointment/{tvaNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> searchAppointment(@PathVariable String tvaNbr) {
		ResponseEntity<?> re = null;
		try {
			AppointmentBreakBulkServiceCSDTO[] response = breakBulkService.searchAppointmentCS(tvaNbr);
			if (response != null && response.length != 0) {
				String parsedResponse = new Gson().toJson(response); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /appointment/{tvaNbr} BreakBulkController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.BreakBulkError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	} 

	/**
	 * @author Elvis Fontalvo POST /api/breakbulk/weight
	 * 
	 *         Retorna la capacidad del camion ocupada y si este tiene una cita
	 *         previa a la misma hora
	 * 
	 * 
	 * @param WeightDTO contiene placa y fecha
	 * @return {@link TruckVisit}
	 * @throws BusinessException    cuando ocurre un error en los servicios mdw
	 * @throws JsonParseException   cuando ocurre un error de parseo
	 * @throws JsonMappingException cuando ocurre un error de mapeo.
	 * @throws IOException          cuando ocurre un error de base de datos.
	 */
	@RequestMapping(value = "/weight", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> searchWeight(@RequestBody WeightDTO weightDTO)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		ResponseEntity<?> re = null;
		try {
			WeightServiceDTO[] response = breakBulkService.getWeightControl(weightDTO.getTruck(),
					weightDTO.getAppointmentDate());
			if (response != null && response.length != 0) {
				re = new ResponseEntity<WeightServiceDTO[]>(response, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.BreakBulkError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Ejecuta la cancelación del truckVisitAppointment.
	 * 
	 * @param truckVisit
	 * @throws BOException
	 * @throws Exception
	 */
	private TruckVisitAppointmentBreakBulk executeCancelTruckVisit(String tvaNbr, HistoryServiceDTO[] tvaInfo, String causalCanAppointment, String causalCanDescription,String appointmentsNbr)
			throws BOException, BusinessException {
		// mapeo el trackVisit al request
		CancelTransactedAppointmentRequest request = new CancelTransactedAppointmentRequest();
		request.setTruckVisitappointment(tvaNbr);
		request.setcCACode(causalCanAppointment);
		request.setcCADescription(causalCanDescription);
		request.setApptBbkList(appointmentsNbr);
		// llamado del cancelar a N4
		this.getTruckVisitAppointmentMdwBO().cancelTransactedAppointmentBbk(request);

		PinContainerizedFilter filter = new PinContainerizedFilter();
		TruckVisitAppointmentBreakBulkFilter filterBbk = new TruckVisitAppointmentBreakBulkFilter();
		filterBbk.setTruckVisitAppointmentNbr(tvaNbr);
		List<TruckVisitAppointmentBreakBulk> tvaBbk = this.getTruckVisitAppointmentBreakBulkBO()
				.search(filterBbk, new Page(1, 0)).getResult();
		TruckVisitAppointmentBreakBulk tvaResponse = null;
		if (tvaBbk.size() > 0) {

			for (TruckVisitAppointmentBreakBulk tva : tvaBbk) {
				filter.setTruckVisitAppointmetId(Long.parseLong(tva.getId().toString()));
				List<PinContainerized> pinsContainerized = this.getPinContainerizedBO().search(filter, new Page(1, 0))
						.getResult();
				for (PinContainerized pinContainerized : pinsContainerized) {
					PinContainerized newPinContainerized = new PinContainerized();
					newPinContainerized = pinContainerized;
					newPinContainerized.setTruckVisitAppointmetId(null);
					this.getPinContainerizedBO().saveOrUpdate(newPinContainerized);
				}

				TruckVisitAppointmentBreakBulk newTva = new TruckVisitAppointmentBreakBulk();
				newTva = tva;
				newTva.setState("Canceled");
				tvaResponse = this.getTruckVisitAppointmentBreakBulkBO().saveOrUpdate(newTva);
			}

			return tvaResponse;

		}
		return tvaResponse;

	}
	private TruckVisitAppointmentBreakBulk executeCancelTruckVisit(String tvaNbr, HistoryServiceDTO[] tvaInfo, String causalCanAppointment, String causalCanDescription)
			throws BOException, BusinessException {
		// mapeo el trackVisit al request
		CancelTransactedAppointmentRequest request = new CancelTransactedAppointmentRequest();
		request.setTruckVisitappointment(tvaNbr);
		request.setcCACode(causalCanAppointment);
		request.setcCADescription(causalCanDescription);
		// llamado del cancelar a N4
		this.getTruckVisitAppointmentMdwBO().cancelTransactedAppointmentBbk(request);

		PinContainerizedFilter filter = new PinContainerizedFilter();
		TruckVisitAppointmentBreakBulkFilter filterBbk = new TruckVisitAppointmentBreakBulkFilter();
		filterBbk.setTruckVisitAppointmentNbr(tvaNbr);
		List<TruckVisitAppointmentBreakBulk> tvaBbk = this.getTruckVisitAppointmentBreakBulkBO()
				.search(filterBbk, new Page(1, 0)).getResult();
		TruckVisitAppointmentBreakBulk tvaResponse = null;
		if (tvaBbk.size() > 0) {

			for (TruckVisitAppointmentBreakBulk tva : tvaBbk) {
				filter.setTruckVisitAppointmetId(Long.parseLong(tva.getId().toString()));
				List<PinContainerized> pinsContainerized = this.getPinContainerizedBO().search(filter, new Page(1, 0))
						.getResult();
				for (PinContainerized pinContainerized : pinsContainerized) {
					PinContainerized newPinContainerized = new PinContainerized();
					newPinContainerized = pinContainerized;
					newPinContainerized.setTruckVisitAppointmetId(null);
					this.getPinContainerizedBO().saveOrUpdate(newPinContainerized);
				}

				TruckVisitAppointmentBreakBulk newTva = new TruckVisitAppointmentBreakBulk();
				newTva = tva;
				newTva.setState("Canceled");
				tvaResponse = this.getTruckVisitAppointmentBreakBulkBO().saveOrUpdate(newTva);
			}

			return tvaResponse;

		}
		return tvaResponse;

	}


	/**
	 * Ejecuta la cancelación de un cargolot del truckVisitAppointment.
	 * 
	 * @param truckVisit
	 * @throws BOException
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws Exception
	 */
	private TruckVisitAppointment executeCancelCargoLotTruckVisit(String tvaNbr, HistoryServiceDTO[] tvaInfo,
			String cargoLot)
			throws BOException, BusinessException, JsonParseException, JsonMappingException, IOException {
		String referenceNbr = "";
		PinContainerizedFilter filter = new PinContainerizedFilter();
		PinContainerized pinContainerized = null;
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		TruckVisitAppointmentBreakBulkFilter filterBbk = new TruckVisitAppointmentBreakBulkFilter();
		filterBbk.setTruckVisitAppointmentNbr(tvaNbr);
		List<TruckVisitAppointmentBreakBulk> tvaBbk = this.getTruckVisitAppointmentBreakBulkBO()
				.search(filterBbk, new Page(1, 0)).getResult();
		if (tvaBbk.size() > 0) {
			for (TruckVisitAppointmentBreakBulk truckVisitAppointmentBreakBulk : tvaBbk) {
				filter.setTruckVisitAppointmetId(Long.parseLong(truckVisitAppointmentBreakBulk.getId().toString()));
				List<PinContainerized> pinsContainerized = this.getPinContainerizedBO().search(filter, new Page(1, 0))
						.getResult();

				if (pinsContainerized.size() > 0) {
					PinFilter pinFilter = new PinFilter();
					pinFilter.setActive(true);
					pinFilter.setId(pinsContainerized.get(0).getPin().getId());
					pinFilter.setTruckingCompanyLDAP(currentUser.getEmpresa().getId());
					List<Pin> pins = this.getPinBO().search(pinFilter, new Page(1, 0)).getResult();
					for (Pin pin : pins) {
						try {
							for (PinContainerized pinCont : pin.getPinContainerized()) {
								pinContainerized = new PinContainerized();
								pinContainerized = pinCont;
								if (pinContainerized.getUnitNbr().equals(cargoLot)) {
									PinContainerized newPinContainerized = new PinContainerized();
									newPinContainerized = pinContainerized;
									newPinContainerized.setTruckVisitAppointmetId(null);
									this.getPinContainerizedBO().saveOrUpdate(newPinContainerized);
								}
							}

						} catch (Exception e) {
							String[] strParams = {};
							String msg = getProperty("Controller.TruckVisitAppCreationError", strParams,
									getApplicationContext());
							LOG.error(msg, e);
							ResponseError r = new ResponseError();
							String error = e.getMessage();
							LOG.error(error, e);
							r.setError(error);
						}

					}
				}
			}
		}
		try {
			//ResponseTvaService[] responseTvaService = truckVisitAppointmentService.deleteCargoLotTVA(tvaNbr, cargoLot);
			//if(responseTvaService.length > 0 && responseTvaService[0].getResult().equals("1"))
			//{
				AppointmentBreakBulkServiceDTO[] response = breakBulkService.searchAppointment(tvaNbr);
				if (response != null && response.length != 0) {
					String pintList = "";
					for (AppointmentBreakBulkServiceDTO appointmentBreakBulkServiceDTO : response) {
						String pin = String.valueOf(appointmentBreakBulkServiceDTO.getPin_id());
						String blNbr = appointmentBreakBulkServiceDTO.getBl_nbr();
						if (pintList.equals("")) {
							pintList = String.valueOf(pin);
							referenceNbr = getReferenceNbr(response, pin, currentUser, blNbr);
						} else {
							if (!pintList.contains(pin)) {
								pintList = pintList.concat(",").concat(pin);
								String newReferenceNbr = getReferenceNbr(response, pin, currentUser, blNbr);
								referenceNbr = referenceNbr.concat("//").concat(newReferenceNbr);
							}
						}
					}
					String[] pinCount = pintList.split(",");
					String init = pinCount.length + "~" + tvaNbr + "|";
					referenceNbr = init.concat(referenceNbr);
				}
			//}
			
			// referenceNbr = responseTvaService[0].getReference();
			if (!referenceNbr.equals("")) {
				UpdateTruckVisitBbkRequest updateTruckVisitBbkRequest = new UpdateTruckVisitBbkRequest();
				updateTruckVisitBbkRequest.setTvaNbr(tvaNbr);
				updateTruckVisitBbkRequest.setReferenceNbr(referenceNbr);
				updateTruckVisitBbkRequest.setType("DELETE");
				TruckVisitAppointment truckVisitAppointmentBbk = this.getTruckVisitAppointmentMdwBO()
						.updatReferenceNbr(updateTruckVisitBbkRequest);
				return truckVisitAppointmentBbk;
			}
		} catch (Exception e) {
			String error = e.getMessage();
			LOG.error(error, e);
		}
		return null;

	}

	/**
	 * GET /breakbulk/ invocación al servicio que retorna todos los Draft asociados
	 * a un HBL de BILLING
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link List<CargoLot>}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "/draft/{hbl}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getDraftByHbl(@PathVariable String hbl) throws BOException {
		ResponseEntity<?> re = null;
		try {
			DraftServiceDTO[] draftList;
			hbl = EncoderDecoder.decodeBase64(hbl);
			draftList = breakBulkService.getDraftByHbl(hbl);
			re = new ResponseEntity<DraftServiceDTO[]>(draftList, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtenerlos Draft ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * @author Elvis Fontalvo POST /api/breakbulk/getStorage
	 * 
	 *         Retorna las fechas del storage relacionadas con los hbls
	 * 
	 * 
	 * @param List<String> contiene la lista de los hbl a validar
	 * @return {@link TruckVisit}
	 * @throws BusinessException    cuando ocurre un error en los servicios mdw
	 * @throws JsonParseException   cuando ocurre un error de parseo
	 * @throws JsonMappingException cuando ocurre un error de mapeo.
	 * @throws IOException          cuando ocurre un error de base de datos.
	 */
	@RequestMapping(value = "/getStorage", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getStorage(@RequestBody StorageBBDTO storageBBDTO)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		ResponseEntity<?> re = null;
		try {
			List<String> dateList = this.getUnitFacilityVisitMdwBo().getStorage(storageBBDTO.getHblList());
			for (String date : dateList) {
				date = date.replaceAll("\\[", "").replaceAll("\\]", "");
				Date dateForm = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S").parse(date);
				Date appointmentDate = storageBBDTO.getDateTva();
				if (dateForm.compareTo(appointmentDate) < 0) {
					String[] strParams = { date };
					String msg = getProperty("Controller.TruckVisitAppBBErrorStorageDate", strParams,
							getApplicationContext());
					ResponseError r = new ResponseError();
					r.setError(msg);
					re = (new ResponseEntity<ResponseError>(r, HttpStatus.BAD_REQUEST));
					return re;
				}
			}
			re = new ResponseEntity<Boolean>(true, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.BreakBulkError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Elimina del listado de citas la correspondiente cita
	 * 
	 * @param plate
	 * @return {@link ResponseEntity}
	 * @throws BOException
	 */
	@RequestMapping(value = "/removeAppointmentById/{tvaNbr}/{causalCanAppointment}/drive/{causalCanDescription}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> removeAppointmentById(@PathVariable String tvaNbr,@PathVariable String causalCanAppointment, @PathVariable String causalCanDescription,
			@RequestBody RequestRemoveTvaById req) throws BOException {
		ResponseEntity<?> re = null;
		try {
			Driver driver = req.getDriver();
			TruckVisitAppointmentBreakBulk truckVisitAppointmentBreakBulk = null;
			TruckVisitAppointmentBreakBulkNotifications truckVisitAppointmentBreakBulkNotifications = new TruckVisitAppointmentBreakBulkNotifications();
			tvaNbr = EncoderDecoder.decodeBase64(tvaNbr);
			HistoryServiceDTO[] tvaInfo = null;
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
			tvaInfo = breakBulkService.getTvaBbk(userlogin.getEmpresa().getId(), tvaNbr);
			AppointmentBreakBulkServiceDTO[] aBBSList = breakBulkService.searchAppointment(tvaNbr);
			if (tvaInfo != null && tvaInfo.length != 0) {
				truckVisitAppointmentBreakBulk = executeCancelTruckVisit(tvaNbr, tvaInfo, causalCanAppointment, causalCanDescription,req.getAppointmentsNbr());
			}
			if (truckVisitAppointmentBreakBulk != null) {
				truckVisitAppointmentBreakBulkNotifications = copyTruckVisitBreakBulk(truckVisitAppointmentBreakBulk,
						emailsNotifications, driver, aBBSList);

				re = (new ResponseEntity<TruckVisitAppointmentBreakBulkNotifications>(
						truckVisitAppointmentBreakBulkNotifications, HttpStatus.OK));
			} else {
				re = new ResponseEntity<Boolean>(true, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error("Se produjo un error al eliminar la cita ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}

		return re;

	}

	private TruckVisitAppointmentBreakBulkNotifications copyTruckVisitBreakBulk(TruckVisitAppointmentBreakBulk tVABB,
			List<TemplateEmailDTO> emailsNotifications, Driver driver, AppointmentBreakBulkServiceDTO[] aBBSList)
			throws Exception {
		TruckVisitAppointmentBreakBulkNotifications truckVisitAppointmentBreakBulkNotifications = new TruckVisitAppointmentBreakBulkNotifications();
		UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
		String hblList = "";
		List<String> hbls = new ArrayList<>();
		List<TemplateEmailNotificationDTO> emailsNotificationsClient = new ArrayList<>();

		truckVisitAppointmentBreakBulkNotifications.setId(tVABB.getId());
		truckVisitAppointmentBreakBulkNotifications.setTruckVisitAppointmentNbr(tVABB.getTruckVisitAppointmentNbr());
		truckVisitAppointmentBreakBulkNotifications.setPin(tVABB.getPin());
		truckVisitAppointmentBreakBulkNotifications.setState(tVABB.getState());
		truckVisitAppointmentBreakBulkNotifications.setTruck(tVABB.getTruck());
		truckVisitAppointmentBreakBulkNotifications.setCompanyIdLdap(tVABB.getCompanyIdLdap());
		truckVisitAppointmentBreakBulkNotifications.setAppointmentDate(tVABB.getAppointmentDate());
		truckVisitAppointmentBreakBulkNotifications.setCreatedByLdap(tVABB.getCreatedByLdap());
		truckVisitAppointmentBreakBulkNotifications.setLicense(tVABB.getLicense());
		truckVisitAppointmentBreakBulkNotifications.setMailsNotifications(emailsNotifications);
		truckVisitAppointmentBreakBulkNotifications.setCreatedByCompanyNameLDAP(user.getEmpresa().getCompanyName());
		truckVisitAppointmentBreakBulkNotifications.setCargoLots(aBBSList);
		truckVisitAppointmentBreakBulkNotifications.setDriver(driver);
		if (aBBSList != null && aBBSList.length > 0) {
			for (AppointmentBreakBulkServiceDTO o : aBBSList) {
				if (!hblList.contains(o.getBl_nbr())) {
					hbls.add(o.getBl_nbr());
					if (hblList.equals("")) {
						hblList = hblList.concat(o.getBl_nbr());
					} else {
						hblList = hblList.concat(",").concat(o.getBl_nbr());
					}
				}
			}
		}
		truckVisitAppointmentBreakBulkNotifications.setHbls(hbls);
		if (!hblList.equals("") && emailsNotifications.size() == 0) {
			emailsNotificationsClient = customerService.getShippersMailsByContainersOrHbls(hblList, "Hbl");
			truckVisitAppointmentBreakBulkNotifications.setMailsNotificationsClient(emailsNotificationsClient);
		}
		return truckVisitAppointmentBreakBulkNotifications;
	}

	/**
	 * GET /agent/ Retorna la informacion de las citas dado un listado de sus Id
	 * 
	 * @param idList: List Ids TVA
	 * @return {@link TruckVisitAppointmentServiceDTO[]}
	 * @throws IOException
	 */
	@RequestMapping(value = "/tvaByIds/{idList}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> validatedTVAByIds(@PathVariable String idList) throws IOException {
		ResponseEntity re = null;
		try {
			idList = EncoderDecoder.decodeBase64(idList);
			String[] ids = idList.split(",");
			String agentId = this.getUserBO().getCurrentUser().getEmpresa().getId();
			TruckVisitAppointmentServiceDTO[] truckVisitAppointmentServiceDTO = truckVisitAppointmentService
					.getTVABbkByIds(idList);
			Agent agent = new Agent();
			if (truckVisitAppointmentServiceDTO != null && truckVisitAppointmentServiceDTO.length > 0) {
				re = new ResponseEntity<TruckVisitAppointmentServiceDTO[]>(truckVisitAppointmentServiceDTO,
						HttpStatus.OK);
			}

		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	private String getReferenceNbr(AppointmentBreakBulkServiceDTO[] aBBSList, String pinSelected, UsuarioLoginDTO currentUser, String blNbr) {
		String referenceNbr = "";
		long quantity = 0;
		double weigth = 0;
		DecimalFormatSymbols simbolos = new DecimalFormatSymbols();
		simbolos.setDecimalSeparator('.');
		DecimalFormat formateador = new DecimalFormat("#.##", simbolos);
		for (AppointmentBreakBulkServiceDTO appointmentBreakBulkServiceDTO : aBBSList) {
			String pin = String.valueOf(appointmentBreakBulkServiceDTO.getPin_id());
			if (pinSelected.equals(pin)) {
				quantity = quantity + appointmentBreakBulkServiceDTO.getCargo_quantity();
				weigth = weigth + appointmentBreakBulkServiceDTO.getCargo_weigth();
			}
		}

		referenceNbr = referenceNbr.concat(blNbr + ",Q-" + quantity + ",P-" + formateador.format(weigth) + ",T-"
				+ currentUser.getEmpresa().getCompanyName());

		return referenceNbr;
	}
}
