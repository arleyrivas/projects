/**
 * 
 */
package com.spia.businessportal.web.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.BookingByTransportServiceDTO;
import com.spia.businessportal.common.entities.dto.BookingServiceDTO;
import com.spia.businessportal.common.entities.dto.EroServiceDTO;
import com.spia.businessportal.common.entities.dto.HazardServiceDTO;
import com.spia.businessportal.common.entities.dto.UnitIsoDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.BookingService;
import com.spia.services.entities.Booking;
import com.spia.services.entities.BookingFlexFields;
import com.spia.services.entities.HoldItem;
import com.spia.services.entities.HoldsList;
import com.spia.services.entities.Unit;
import com.spia.services.entities.UnitFacilityVisit;
import com.spia.services.entities.billing.UnitsValidationResponse;
import com.spia.services.entities.billing.UnitsValidationResponse.UnitValidationResponseElement;
import com.spia.services.exception.BOException;
import com.spia.services.util.Constants;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;
import com.google.gson.Gson;
import com.spia.businessportal.common.utils.AESEncryptionUtil;

/**
 * @author diego controlador donde se expone la api de negocios del portal para
 *         {@link Booking}
 */
@RequestMapping("/api/booking")
@Controller
public class BookingController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(BookingController.class);

	private String roleAgent = "Agent";
	private String roleTruck = "Trucking Company";
	private String roleMEmp = "Customs";
	@Value("#{edi['bookingNbr']}")
	private String ediBookingNbr;
	@Autowired
	private BookingService bookingService;
	@Autowired
	private UserBO userBO;
	@Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;

	/**
	 * GET /booking/:nbr/:lineOperator invocación al servicio que retorna un un
	 * Booking
	 * 
	 * @param nbr:          número de booking
	 * @param lineOperator: línea operadora del booking
	 * @param request:      petición http
	 * @param response:     respuesta http
	 * @return {@link Booking}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "/{nbr:.+}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> get(@PathVariable("nbr") String nbr, HttpServletRequest request,
			HttpServletResponse response)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		ResponseEntity re = null;
		String role = null;
		try {
			if (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT))
				role = Constants.Billing.ROLES.get(roleAgent);
			else if (this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK))
				role = Constants.Billing.ROLES.get(roleTruck);

			Booking bkg = this.getBookingMdwBo().get(EncoderDecoder.decodeBase64(nbr), null, null,
					this.getUserBO().getCurrentUser().getEmpresa().getId(), role);

			re = new ResponseEntity<Booking>(bkg, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * Retorna un booking solo con los units pertenecientes a la empresa de
	 * transporte.
	 * 
	 * @param nbr
	 * @param request
	 * @param response
	 * @return {@link Booking}
	 * @throws BusinessException
	 * @throws JsonParseException
	 * @throws JsonMappingException
	 * @throws IOException
	 */
	@RequestMapping(value = "/trucking-company/{nbr:.+}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getForTruckingCompany(@PathVariable("nbr") String nbr,
			HttpServletRequest request, HttpServletResponse response)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		ResponseEntity re = null;
		try {
			String truckingCompany = this.getUserBO().getCurrentUser().getEmpresa().getId();
			Booking bkg = this.getBookingMdwBo().get(EncoderDecoder.decodeBase64(nbr), null, null, truckingCompany,
					Constants.Billing.ROLES.get(roleTruck));
			if (bkg != null) {
				for (int i = bkg.getUnits().size() - 1; i >= 0; i--) {
					// Carrier debe comenzar con DUMMY (ediBookingNbr)
					if ((bkg.getCarrierVisit() != null && !bkg.getCarrierVisit().startsWith(ediBookingNbr))
							&& (bkg.getUnits().get(i).getTruckingCompany() == null
									|| !truckingCompany.equalsIgnoreCase(bkg.getUnits().get(i).getTruckingCompany()))) {
						bkg.getUnits().remove(i);
					}
				}
				re = new ResponseEntity<Booking>(bkg, HttpStatus.OK);
			}
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * GET /booking/:nbr/unit/:unit invocación al servicio que retorna un un Booking
	 * sólo con el unit deseado.
	 * 
	 * @param nbr: número de booking
	 * @param unit que se quiera retornar
	 * @return {@link Booking}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "/{nbr}/unit/{unit}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getWithSingleUnit(@PathVariable("nbr") String nbr,
			@PathVariable("unit") String unit)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		ResponseEntity re = null;
		try {
			Booking bkg = this.getBookingMdwBo().get(EncoderDecoder.decodeBase64(nbr), null, unit, null, null);
			re = new ResponseEntity<Booking>(bkg, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * Actualiza el agente para una empresa de transporte
	 * 
	 * @param id
	 * @param bookingFlexFields
	 * @return {@link Booking}
	 * @throws JsonParseException
	 * @throws JsonMappingException
	 * @throws IOException
	 */
	@RequestMapping(value = "/flex/{id:.+}", method = RequestMethod.PUT)
	public @ResponseBody ResponseEntity<?> updateBookingFlexFields(@PathVariable("id") String id,
			@RequestBody BookingFlexFields bookingFlexFields)
			throws JsonParseException, JsonMappingException, IOException {
		ResponseEntity<?> re = null;
		try {
			this.getBookingMdwBo().updateFlexFields(id, bookingFlexFields);
			re = new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * Retorna true si los contenedores enviados (pertenecientes a un booking)
	 * pertenecen al mismo agente que el logueado. Caso contrario retorna un mensaje
	 * de error.
	 * 
	 * @param units
	 * @return
	 * @throws JsonParseException
	 * @throws JsonMappingException
	 * @throws IOException
	 */
	@RequestMapping(value = "/validate-billing-units", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> validateUnitAgents(@RequestBody List<String> units)
			throws JsonParseException, JsonMappingException, IOException {
		ResponseEntity<?> re = new ResponseEntity<Boolean>(true, HttpStatus.OK);
		Set<String> unitsSet = new HashSet<String>(units);
		// FIXME vamos a tener que usar el ESB
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		String message = "";
		String bookingNbr = "";
		try {
			for (String unit : unitsSet) {
				UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().getUnitForExport(unit);
				if (ufv != null) {
					// Valido que el booking del unit pertenezca al mismo agente.
					if (ufv.getBooking() != null && !"".equals(ufv.getBooking().getId())) {
						bookingNbr = ufv.getBooking().getId();
						Booking bkg = this.getBookingMdwBo().get(ufv.getBooking().getId(), null, ufv.getId(), null,
								null);
						if (bkg.getAgentId() == null || !bkg.getAgentId().equals(currentUser.getEmpresa().getId())) {
							if (bkg.getAgentId() == null) {
								String[] strParams = { bkg.getNbr() };
								message += "<p>" + getProperty("Controller.BookingNotAgentAsigned", strParams,
										getApplicationContext()) + "</p>";
							} else {
								String[] strParams = { bkg.getNbr(), bkg.getAgentId() };
								message += "<p>" + getProperty("Controller.BookingOtherAgent", strParams,
										getApplicationContext()) + "</p>";
							}

						}
					}
					// Valido que el unit no esté en yard
					// if(ufv.getTransitState() != null &&
					// !"YARD".equals(ufv.getTransitState().toUpperCase())){
					// String[] strParams = { ufv.getId() };
					// message += "<p>"+getProperty("Controller.BookingUnitNotInYard", strParams,
					// getApplicationContext())+"</p>";
					// }
				}
			}
			if (!"".equals(message)) {
				ResponseError error = new ResponseError();
				error.setError(message);
				error.setMessage(message);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.OK);
			}
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * Retorna el booking si no está en estado (vessel-phase) closed, departed o
	 * canceled.
	 * 
	 * @param nbr
	 * @param request
	 * @param response
	 * @return
	 * @throws BusinessException
	 * @throws JsonParseException
	 * @throws JsonMappingException
	 * @throws IOException
	 */

	@RequestMapping(value = "/vessel-phase/{nbr:.+}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getByUserAndVesselPhase(@PathVariable("nbr") String nbr,
			HttpServletRequest request, HttpServletResponse response)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		ResponseEntity re = null;
		String role = null;
		try {
			Booking bkg = this.getBookingMdwBo().get(EncoderDecoder.decodeBase64(nbr), null, null,
					this.getUserBO().getCurrentUser().getEmpresa().getId(), null);
			re = new ResponseEntity<Booking>(bkg, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * 
	 * GET ero/search/{eroNbr}
	 * 
	 * Retorna todos los contenedores que esten relacionados al edoNbr.
	 * 
	 * @param eroNbr numero del Ero
	 * @return {@link com.spia.businessportal.common.entities.dto.EroServiceDTO}
	 */

	@RequestMapping(value = "search/{bookingNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> searchPins(@PathVariable String bookingNbr) {
		EroServiceDTO[] eroLst = {};
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();
		String companyId = userlogin.getEmpresa().getId();
		// TODO

		bookingNbr = EncoderDecoder.decodeBase64(bookingNbr);

		try {
			// '8300048614'
			eroLst = bookingService.searchBooking(bookingNbr, companyId);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		if (eroLst == null) {
			return null;
		}
		if (eroLst.length == 0){
			return null;
		}

		String parsedResponse = new Gson().toJson(eroLst);
		String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET booking/search/{bookingNbr} BookingController"); 
		return new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
	}

	/**
	 * 
	 * GET booking/searchBlItemUnitIso/{blNbr}
	 * 
	 * Retorna todos los contenedores que esten relacionados al edoNbr.
	 * 
	 * @param eroNbr numero del Ero
	 * @return {@link com.spia.businessportal.common.entities.dto.EroServiceDTO}
	 */

	@RequestMapping(value = "searchBlItemUnitIso/{bookingNbr}", method = RequestMethod.GET)
	public @ResponseBody UnitIsoDTO[] searchBlItemUnitIso(@PathVariable String bookingNbr) {
		UnitIsoDTO[] unitIsoLst = {};

		try {
			unitIsoLst = bookingService.searchBlItemUnitIso(EncoderDecoder.decodeBase64(bookingNbr));
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		if (unitIsoLst == null) {
			return null;
		}
		return unitIsoLst.length != 0 ? unitIsoLst : null;
	}

	/**
	 * GET /booking/getBookingByAgent/:nbr-> get Booking by agent
	 * 
	 * @param {string} nbr id to Booking
	 */
	@RequestMapping(value = "/getBookingByAgent/{nbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getBookingByAgent(@PathVariable String nbr) throws BusinessException {

		BookingServiceDTO[] bookingServiceDTO = {};
		String agentId = this.getUserBO().getCurrentUser().getEmpresa().getId();
		ResponseEntity<?> re = null;
		String unitsList = "";
		try {
			bookingServiceDTO = bookingService.getBookingByAgent(EncoderDecoder.decodeBase64(nbr), agentId);
			if (bookingServiceDTO != null && bookingServiceDTO.length != 0) {
				for (BookingServiceDTO bServiceDTO : bookingServiceDTO) {
					if (bServiceDTO.getUnitNbr() != null && !unitsList.contains(bServiceDTO.getUnitNbr())) {
						unitsList += bServiceDTO.getUnitNbr() + ",";
					}
				}
				if (!unitsList.equals("")) {
					unitsList = unitsList.substring(0, unitsList.length() - 1);
					// Este codigo comentariado puede eliminarse a partir del 30/07/2022
					// Se elimina esta validación que consume groovy SPIAContainersHasDebts el cual
					// REvalidaba la información obtenida por el SP getBookingByAgent
					// UnitsValidationResponse unitsValidationList = this.getInvoiceMdwBO().unistHasDebts(unitsList, bookingServiceDTO[0].getCarrierVisit(), null);
					// for (BookingServiceDTO bServiceDTO : bookingServiceDTO) {
					// 	for (UnitValidationResponseElement ure : unitsValidationList.getUnits()) {
					// 		if (bServiceDTO.getUnitNbr() != null && bServiceDTO.getUnitNbr().equals(ure.getUnit())) {
					// 			bServiceDTO.setHasDebt(ure.getStatus());
					// 			break;
					// 		}
					// 	}
					// }
						
					HoldsList holds = this.getTruckVisitAppointmentMdwBO().getHoldsList(unitsList);
					LOG.info("unitsList: " + unitsList);
					for (BookingServiceDTO bServiceDTO : bookingServiceDTO) {
						for (Unit unit : holds.getUnits()) {
							if (bServiceDTO.getUnitNbr() != null
									&& bServiceDTO.getUnitNbr().equals(unit.getUnitNbr())) {
								if (unit.getHolds() != null && !unit.getHolds().isEmpty()) {
									bServiceDTO.setHasHolds(true);
								} else {
									bServiceDTO.setHasHolds(false);
								}
								if (unit.getHolds() != null && !unit.getHolds().isEmpty()) {
									List<String> holdDescriptions = new ArrayList<>();
									for (HoldItem holdItem : unit.getHolds()) {
										if(holdItem.getHoldId().equals("HOLD_CONSIGNEE"))
										{
											if(holdItem.getHoldStatus() != null && holdItem.getHoldStatus().equalsIgnoreCase("REQUIRED"))
											{
												holdDescriptions.add(holdItem.getHoldDescription());
											}
										}
										else
										{
											holdDescriptions.add(holdItem.getHoldDescription());
										}
									}
									bServiceDTO.setHoldDescription(StringUtils.join(holdDescriptions, ", "));
								}
								// bServiceDTO.setStorageDaysOwed(Integer.valueOf(
								// unit.getUfvStorageDaysOwed() == null ? "0" : unit.getUfvStorageDaysOwed()));
								break;
							}
						}
					}

					//Se valida si las units tienen pin
					for (BookingServiceDTO bServiceDTO : bookingServiceDTO) {	
						Map<String, String> unitsPin = bookingService.searchPins(bServiceDTO.getUnitNbr());
						if (unitsPin.containsKey(bServiceDTO.getUnitNbr())) {
							bServiceDTO.setHasPin(true);
						} else {
							bServiceDTO.setHasPin(false);
						}
					}
				} else {
					for (BookingServiceDTO bServiceDTO : bookingServiceDTO) {
						bServiceDTO.setHasDebt(false);
						bServiceDTO.setHasHolds(false);
					}
				}
			}
			re = new ResponseEntity<BookingServiceDTO[]>(bookingServiceDTO, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = { nbr };
			String msg = getProperty("Error al obtener la informacion del Booking:" + EncoderDecoder.decodeBase64(nbr),
					strParams, getApplicationContext());
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}

		return re;
	}

	/*
	 * @param {string} nbr id to Booking
	 */
	@RequestMapping(value = "/getBookingById/{nbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getBookingById(@PathVariable String nbr) throws BusinessException {

		BookingByTransportServiceDTO[] bookingByTransportServiceDTO = {};
		ResponseEntity<?> re = null;
		String unitsList = "";
		try {
			bookingByTransportServiceDTO = bookingService.getBookingById(EncoderDecoder.decodeBase64(nbr));
			if (bookingByTransportServiceDTO != null && bookingByTransportServiceDTO.length != 0) {
				for (BookingByTransportServiceDTO bServiceDTO : bookingByTransportServiceDTO) {
					if (bServiceDTO.getUnitNbr() != null && !unitsList.contains(bServiceDTO.getUnitNbr())) {
						unitsList += bServiceDTO.getUnitNbr() + ",";
					}
				}
				if (!unitsList.equals("")) {
					unitsList = unitsList.substring(0, unitsList.length() - 1);
					UnitsValidationResponse unitsValidationList = this.getInvoiceMdwBO().unistHasDebts(unitsList,
							bookingByTransportServiceDTO[0].getCarrierVisit(), null);
					for (BookingByTransportServiceDTO bServiceDTO : bookingByTransportServiceDTO) {
						for (UnitValidationResponseElement ure : unitsValidationList.getUnits()) {
							if (bServiceDTO.getUnitNbr() != null && bServiceDTO.getUnitNbr().equals(ure.getUnit())) {
								bServiceDTO.setHasDebt(ure.getStatus());
								break;
							}
						}
					}

				} else {
					for (BookingByTransportServiceDTO bServiceDTO : bookingByTransportServiceDTO) {
						bServiceDTO.setHasDebt(false);
						bServiceDTO.setHasHolds(false);
					}
				}
			}
			re = new ResponseEntity<BookingByTransportServiceDTO[]>(bookingByTransportServiceDTO, HttpStatus.OK);
			String parsedResponse = new Gson().toJson(re);
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET booking/getBookingById/{nbr} BookingController"); 
			return new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = { nbr };
			String msg = getProperty("Error al obtener la informacion del Booking:" + EncoderDecoder.decodeBase64(nbr),
					strParams, getApplicationContext());
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			String parsedResponse = new Gson().toJson(re);
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET booking/getBookingById/{nbr} BookingController"); 
			return new ResponseEntity<String>(encryptedResponse, HttpStatus.BAD_REQUEST);
		}
       
	}

	/*
	 * @param {string} nbr id to Booking
	 */
	@RequestMapping(value = "/getHazardsByBooking/{nbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getHazardsByBooking(@PathVariable String nbr) throws BusinessException {

		HazardServiceDTO[] hazardServiceDTO = {};
		ResponseEntity<?> re = null;
		String unitsList = "";
		try {
			hazardServiceDTO = bookingService.getHazardsByBooking(EncoderDecoder.decodeBase64(nbr));
			re = new ResponseEntity<HazardServiceDTO[]>(hazardServiceDTO, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = { nbr };
			String msg = getProperty(
					"Error al obtener la informacion de los Hazards para el Booking" + EncoderDecoder.decodeBase64(nbr),
					strParams, getApplicationContext());
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}

		return re;
	}

}
