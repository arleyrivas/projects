package com.spia.businessportal.web.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.spia.businessportal.common.entities.FailedNotification;
import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.PinBreakBulk;
import com.spia.businessportal.common.entities.PinContainerized;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.BreakBulkTruckDTO;
import com.spia.businessportal.common.entities.dto.CustomerServiceDTO;
import com.spia.businessportal.common.entities.dto.DeactivatePinDTO;
import com.spia.businessportal.common.entities.dto.HoldDTO;
import com.spia.businessportal.common.entities.dto.HoldListDTO;
import com.spia.businessportal.common.entities.dto.PinBreakBulkDTO;
import com.spia.businessportal.common.entities.dto.PinContainerizedNotifications;
import com.spia.businessportal.common.entities.dto.PinCriteria;
import com.spia.businessportal.common.entities.dto.HistoryPinCriteria;
import com.spia.businessportal.common.entities.dto.PinDTO;
import com.spia.businessportal.common.entities.dto.PinImportServiceDTO;
import com.spia.businessportal.common.entities.dto.PinInfoServiceDTO;
import com.spia.businessportal.common.entities.dto.PinNotification;
import com.spia.businessportal.common.entities.dto.PinReportDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailDTO;
import com.spia.businessportal.common.entities.dto.UnitTruckDTO;
import com.spia.businessportal.common.entities.dto.UnitValidationDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.filters.PinContainerizedFilter;
import com.spia.businessportal.common.filters.PinFilter;
import com.spia.businessportal.common.filters.TruckVisitFilter;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.common.utils.JasperUtils;
import com.spia.businessportal.common.utils.PrivilegesUtil;
import com.spia.businessportal.service.CustomerService;
import com.spia.businessportal.service.PinService;
import com.spia.services.entities.BillOfLading;
import com.spia.services.entities.BillOfLading.Items.Item;
import com.spia.services.entities.HoldItem;
import com.spia.services.entities.HoldsList;
import com.spia.services.entities.Unit;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.services.security.esb.entities.UserNotificationEsb;
import com.spia.servicies.entities.notification.Notification;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;
import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.entity.entities.login.ldap.CompanyTypeDTO;
import com.google.gson.Gson;
import com.spia.businessportal.common.utils.AESEncryptionUtil;

/**
 * @author leandro Controlador donde se expone la api de negocios del portal
 *         para {@link com.spia.businessportal.common.entities.Pin}
 */
@RequestMapping("/api/pin")
@Controller
public class PinController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(ApplicationManagerController.class);
	@Value("#{templates['desactivatePinBreakBulk']}")
	private String desactivatePinBreakBulk;
	@Value("#{templates['desactivatePin']}")
	private String desactivatePin;
	@Value("#{templates['createPinBreakBulk']}")
	private String createPinBreakBulk;
	@Value("#{templates['createPin']}")
	private String createPin;

	/**
	 * Banderas para notificaciones por notification Pin
	 */
	@Value("#{notificationStates['isCreatePinNotificationEnabled']}")
	private Boolean isCreatePinNotificationEnabled;
	@Value("#{notificationStates['isDesactivatePinEnabled']}")
	private Boolean isDesactivatePinEnabled;
	@Value("#{notificationStates['isDesactivateContainerPin']}")
	private Boolean isDesactivateContainerPin;


	@Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;

	@Autowired
	private PinService pinService;
	@Autowired
	private CustomerService customerService;

	/**
	 * POST /pin Crea uno o varios pins
	 * 
	 * @param pinDTO información para generar los pin
	 * @return {@link com.spia.businessportal.common.entities.Pin}
	 * @throws Exception 
	 */
	@RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody ResponseEntity<?> generatePin(@RequestBody List<PinDTO> pinDTOList) throws Exception {
		List<Pin> pins = new ArrayList<>();
		List<PinNotification> pinNotifications = new ArrayList<>();
		List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
		TemplateEmailDTO templateEmailDTO = new TemplateEmailDTO();
		UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
		if(pinDTOList.size() > 0 && pinDTOList.get(0).getEmailNotification() != null && pinDTOList.get(0).getEmailNotification().getMail() != null)
		{
			emailsNotifications = getEmailsNotifications(pinDTOList.get(0).getEmailNotification());
		}
		for (PinDTO pinDTO : pinDTOList) {
			try {
				// verificar que no exista pins activos para el contenedor
				
				
				List<String> units = new ArrayList<String>();
				PinFilter pinFilter = new PinFilter();

				for (UnitTruckDTO unitTruckDTO : pinDTO.getUnitsTrucks()) {
					units.add(unitTruckDTO.getNbr());
				}

				pinFilter.setActive(true);
				pinFilter.setPinContainerizedActive(true);
				pinFilter.setUnitList(units);
				if (pinDTO.getIsEdo()) {
					pinFilter.setEdo(pinDTO.getNbr());
				}
				if (pinDTO.getIsEro()) {
					pinFilter.setEro(pinDTO.getNbr());
				}
				List<Pin> pinsForValidate = this.getPinBO().search(pinFilter, new Page(1, 0)).getResult(); // retorna
																											// pins si
																											// estan
																											// activos

				if (!pinsForValidate.isEmpty()) {
					for (Pin pin : pinsForValidate) {
						String[] strParams = { pin.getUnitNbr() };
						String msg = getProperty("Controller.PinActiveError", strParams, getApplicationContext());
						LOG.error(msg);
						ResponseError error = new ResponseError();
						error.setError(msg);
						return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
					}
				}

				// se genera el pin si no existen pins activos
				pins.addAll(this.getPinBO().generate(pinDTO, this.getUserBO().getCurrentUser()));
				

			} catch (Exception e) {
				String[] strParams = {};
				String msg = getProperty("Controller.PinCreationError", strParams, getApplicationContext());
				LOG.error(msg, e);
				ResponseError error = new ResponseError();
				error.setError(msg);
				return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		}
		// Quito los pins inactivos.
		for (Pin p : pins) {
			p.clearUnactive();
		}
		// Guardo el agente si corresponde.
		if (pins != null && !pins.isEmpty()) {
			String blNbr = pins.get(0).getBlNbr();
			if (blNbr != null || pinDTOList.get(0).getIsUnit()) {
				try {
					if (blNbr == null) {
						blNbr = this.getUnitFacilityVisitMdwBo()
								.getSingleUnitById(pinDTOList.get(0).getUnitsTrucks().get(0).getNbr(), "1")
								.getContents().getBlNbr();
					}
					BillOfLading bl = this.getBillOfLadingMdwBo().get(EncoderDecoder.encodeBase64(blNbr));
					if (bl != null && bl.getAgent() == null) {
						bl.setAgent(this.getUserBO().getCurrentUser().getEmpresa().getId());
						this.getBillOfLadingMdwBo().update(blNbr, bl);
					}
				} catch (BusinessException e) {
					LOG.error(e.getMessage(), e);
				}
			}
		}

		// Email Notification
		if (isCreatePinNotificationEnabled) {
			String userName = this.getUserBO().getCurrentUser().getNombres();
			try {
				String notificationUnits = null;
				List<PinContainerized> pinsContainerized = new ArrayList<PinContainerized>();
				for (PinContainerized pc : pins.get(0).getPinContainerized()) {
					pinsContainerized.add(pc);
					if (notificationUnits == null) {
						notificationUnits = pc.getUnitNbr();
					} else {
						notificationUnits += ", " + pc.getUnitNbr();
					}
				}
				sendNotificationPin(pins.get(0), pinsContainerized, "PIN_CREATE",
						this.buildMessagesCreate(userName, pins.get(0), notificationUnits));
			} catch (Exception e) {
				String[] strParams = {};
				String msg = getProperty("Controller.Notification.ERROR", strParams, getApplicationContext());
				LOG.error("No se pudo notificar");
				ResponseError responseError = new ResponseError();
				responseError.setCode("NOTIFICATION_ERROR");
				responseError.setError(msg);
				responseError.setMessage(msg);
				return new ResponseEntity<ResponseError>(responseError, HttpStatus.OK);
			}
		}
		for(Pin p:pins)
		{
			PinNotification pinNotification= new PinNotification();
			pinNotification.setHashValue(p.getHashValue());
			pinNotification.setPinNbr(p.getPinNbr());
			pinNotification.setUnitNbr(p.getUnitNbr());
			pinNotification.setBlNbr(p.getBlNbr());
			pinNotification.setBkgNbr(p.getBkgNbr());
			pinNotification.setEdoNbr(p.getEdoNbr());
			pinNotification.setEroNbr(p.getEroNbr());
			pinNotification.setCreatedByLDAP(p.getCreatedByLDAP());
			pinNotification.setCreatedByCompanyLDAP(p.getCreatedByCompanyLDAP());
			pinNotification.setTruckingCompanyLDAP(p.getTruckingCompanyLDAP());
			pinNotification.setTruckingCompanyNameLDAP(p.getTruckingCompanyNameLDAP());
			pinNotification.setCreatedAt(p.getCreatedAt());
			pinNotification.setConsignee(p.getConsignee());
			pinNotification.setFrghtKind(p.getFrghtKind());
			pinNotification.setIsGroup(p.getIsGroup());
			pinNotification.setActive(p.isActive());
			pinNotification.setDeleted(p.isDeleted());
			pinNotification.setTwenty(p.isTwenty());	
			pinNotification.setPinBreakBulk(p.getPinBreakBulk());
			pinNotification.setTruckVisitBreakBulk(p.getTruckVisitBreakBulk());
			pinNotification.setPinContainerized(p.getPinContainerized());
			pinNotification.setMailsNotifications(emailsNotifications);
			pinNotification.setCreatedByCompanyNameLDAP(user.getEmpresa().getCompanyName());
			pinNotifications.add(pinNotification);
		}

		return new ResponseEntity<>(pinNotifications, HttpStatus.OK);
	}

	/**
	* 
	*/

	/**
	 * POST /pin/break-bulk/ genera pin para el BillOfLading de break-bulk
	 * 
	 * @param pinBreakBulkDTO contiene los datos del bl y de la carga suelta para
	 *                        generar el pin
	 * @return {@link com.spia.businessportal.common.entities.Pin}
	 */
	@RequestMapping(value = "/break-bulk", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody ResponseEntity<?> generateBreakBulkPin(@RequestBody PinBreakBulkDTO pinBreakBulkDTO) {
		ResponseEntity re = null;
		try {
			List<PinNotification> pinNotifications = new ArrayList<>();
			List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
			UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
			// Armo un hash donde la clave es el commodity y el valor la
			// cantidad a reservar.
			HashMap<String, Long> mapQuantityToReserve = new HashMap<String, Long>();
			for (BreakBulkTruckDTO b : pinBreakBulkDTO.getBreakBulksDTO()) {
				if (!mapQuantityToReserve.containsKey(b.getCommodity())) {
					mapQuantityToReserve.put(b.getCommodity(), b.getQuantity());
				} else {
					mapQuantityToReserve.put(b.getCommodity(),
							mapQuantityToReserve.get(b.getCommodity()) + b.getQuantity());
				}
			}

			// Obtengo la cantidad "pineada", esta se la sumo a la cantidad a
			// reservar así puedo compararla con la disponible del bl.
			PinFilter filter = new PinFilter();
			filter.setBreakBulk(true);
			filter.setBlNbr(pinBreakBulkDTO.getBlNbr());
			filter.setActive(true);
			filter.setBreakBulkActive(true);
			List<Pin> pinsBreakBult = this.getPinBO().search(filter, new Page(1, 0)).getResult();

			if (pinsBreakBult != null && pinsBreakBult.size() > 0) {
				for (Pin p : pinsBreakBult) {
					if (p.getPinBreakBulk() != null && p.getPinBreakBulk().size() > 0) {
						for (PinBreakBulk pb : p.getPinBreakBulk()) {
							if (!mapQuantityToReserve.containsKey(pb.getCommodity())) {
								mapQuantityToReserve.put(pb.getCommodity(), pb.getQuantity());
							} else {
								mapQuantityToReserve.put(pb.getCommodity(),
										mapQuantityToReserve.get(pb.getCommodity()) + pb.getQuantity());
							}
						}
					}
				}
			}

			// Obtengo el Bl y me quedo con la cantidad disponible.
			BillOfLading bl = this.getBillOfLadingMdwBo().get(pinBreakBulkDTO.getBlNbr());
			if (bl != null && bl.getItems() != null && bl.getItems().getItem() != null
					&& bl.getItems().getItem().size() > 0) {
				ResponseError error = null;
				String errorMsj = "";
				// Comparo la cantidad disponible con la usada más lo que se
				// quiere reservar
				for (Item item : bl.getItems().getItem()) {
					if (mapQuantityToReserve.containsKey(item.getCommodityId())) {
						if (mapQuantityToReserve.get(item.getCommodityId()).longValue() > item.getQuantity()
								.longValue()) {
							error = new ResponseError();
							String[] strParams = { item.getCommodityId() };
							errorMsj += getProperty("Controller.PinCommodityExceeded", strParams,
									getApplicationContext());
						}
					}
				}
				if (error != null) {
					error.setError(errorMsj);
					re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
				} else {
					// Armo el DTO para generación de pin normal.
					PinDTO pinDTO = new PinDTO();
					// Seteo si es un pin de impo o de expo
					pinDTO.setBreakBulkCategory(bl.getCategory().value().toUpperCase());
					pinDTO.setIsBooking(false);
					pinDTO.setIsEdo(false);
					pinDTO.setIsEro(false);
					pinDTO.setIsUnit(false);
					pinDTO.setNbr(pinBreakBulkDTO.getBlNbr());
					pinDTO.setUnitsTrucks(new ArrayList<UnitTruckDTO>());
					// Armo un map de map, ya que la clave es combinada por
					// truckingCompany-commodity, y el valor es la cantidad que
					// se va a coordinar.
					// De esa forma en el mapa me quedan sumados las cantidades
					// de pin por truckingCompany y commodity
					Map<String, Map<String, Long>> map = new HashMap<String, Map<String, Long>>();
					for (BreakBulkTruckDTO b : pinBreakBulkDTO.getBreakBulksDTO()) {
						// Me fijo si en el mapa ya existe alguna entrada para
						// la trucking company
						if (map.containsKey(b.getTruckId())) {
							// Me fijo si para esa trucking company existe una
							// entrada para el commodity, si es así le sumo la
							// cantidad.
							if (map.get(b.getTruckId()).containsKey(b.getCommodity())) {
								map.get(b.getTruckId()).put(b.getCommodity(),
										map.get(b.getTruckId()).get(b.getCommodity()) + b.getQuantity());
							} else {
								// Si no existe, solo agrego la cantidad para el
								// commodity
								map.get(b.getTruckId()).put(b.getCommodity(), b.getQuantity());
							}
						} else {
							// Si no existe el trucking company agrego todo
							Map<String, Long> commodityMap = new HashMap<String, Long>();
							commodityMap.put(b.getCommodity(), b.getQuantity());
							map.put(b.getTruckId(), commodityMap);
						}
					}
					for (String truckingKey : map.keySet()) {
						for (String commodityKey : map.get(truckingKey).keySet()) {
							UnitTruckDTO u = new UnitTruckDTO();
							u.setIsoType(null);
							u.setNbr(null);
							u.setTruckId(truckingKey);
							u.setQuantity(map.get(truckingKey).get(commodityKey));
							u.setCommodity(commodityKey);
							pinDTO.getUnitsTrucks().add(u);
						}
					}

					List<Pin> pins = this.getPinBO().generate(pinDTO, this.getUserBO().getCurrentUser());

					// Email Notification
					String userName = this.getUserBO().getCurrentUser().getNombres();
					try {
						String notificationUnits = null;
						List<PinContainerized> pinsContainerized = new ArrayList<PinContainerized>();
						for (PinContainerized pc : pins.get(0).getPinContainerized()) {
							pinsContainerized.add(pc);
							if (notificationUnits == null) {
								notificationUnits = pc.getUnitNbr();
							} else {
								notificationUnits += ", " + pc.getUnitNbr();
							}
						}
						sendNotificationPin(pins.get(0), pinsContainerized, "PIN_BREACK_BULK_CREATE",
								this.buildMessagesCreate(userName, pins.get(0), notificationUnits));
					} catch (Exception e) {
						String[] strParams = {};
						String msg = getProperty("Controller.Notification.ERROR", strParams, getApplicationContext());
						LOG.error("No se pudo notificar");
						ResponseError responseError = new ResponseError();
						responseError.setCode("NOTIFICATION_ERROR");
						responseError.setError(msg);
						responseError.setMessage(msg);
						return new ResponseEntity<ResponseError>(responseError, HttpStatus.OK);
					}
					for(Pin p:pins)
					{
						PinNotification pinNotification= new PinNotification();
						pinNotification.setHashValue(p.getHashValue());
						pinNotification.setPinNbr(p.getPinNbr());
						pinNotification.setUnitNbr(p.getUnitNbr());
						pinNotification.setBlNbr(p.getBlNbr());
						pinNotification.setBkgNbr(p.getBkgNbr());
						pinNotification.setEdoNbr(p.getEdoNbr());
						pinNotification.setEroNbr(p.getEroNbr());
						pinNotification.setCreatedByLDAP(p.getCreatedByLDAP());
						pinNotification.setCreatedByCompanyLDAP(p.getCreatedByCompanyLDAP());
						pinNotification.setTruckingCompanyLDAP(p.getTruckingCompanyLDAP());
						pinNotification.setTruckingCompanyNameLDAP(p.getTruckingCompanyNameLDAP());
						pinNotification.setCreatedAt(p.getCreatedAt());
						pinNotification.setConsignee(p.getConsignee());
						pinNotification.setFrghtKind(p.getFrghtKind());
						pinNotification.setIsGroup(p.getIsGroup());
						pinNotification.setActive(p.isActive());
						pinNotification.setDeleted(p.isDeleted());
						pinNotification.setTwenty(p.isTwenty());	
						pinNotification.setPinBreakBulk(p.getPinBreakBulk());
						pinNotification.setTruckVisitBreakBulk(p.getTruckVisitBreakBulk());
						pinNotification.setPinContainerized(p.getPinContainerized());
						pinNotification.setMailsNotifications(emailsNotifications);
						pinNotification.setCreatedByCompanyNameLDAP(user.getEmpresa().getCompanyName());
						pinNotifications.add(pinNotification);
					}

					re =new ResponseEntity<List<PinNotification>>(pinNotifications, HttpStatus.OK);
					//re = new ResponseEntity<List<Pin>>(pins, HttpStatus.OK);
				}
			} else {
				ResponseError error = new ResponseError();
				String[] strParams = { pinBreakBulkDTO.getBlNbr() };
				error.setError(getProperty("Controller.BlNotFound", strParams, getApplicationContext()));
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinCreationError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;

	}

	/**
	 * GET /pin/break-bulk/available-units -> devuelve las unidades o cantidad
	 * disponible de un bl de break-bulk
	 * 
	 * @param blNbr Id BL de breakbulk
	 * @throws BusinessException
	 */
	@RequestMapping(value = "break-bulk/available-units/{blNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> availableUnits(@PathVariable String blNbr) throws BusinessException {

		long quantity = 0;
		PinFilter filter = new PinFilter();
		filter.setBreakBulk(true);
		filter.setBlNbr(EncoderDecoder.decodeBase64(blNbr));
		filter.setActive(true);
		filter.setBreakBulkActive(true);
		List<Pin> pinsBreakBult = this.getPinBO().search(filter, new Page(1, 0)).getResult();

		int quantityNotAvailable = 0;
		if (pinsBreakBult != null && !pinsBreakBult.isEmpty()) {
			for (Pin pin : pinsBreakBult) {
				if (pin.getPinBreakBulk() != null && !pin.getPinBreakBulk().isEmpty()) {
					for (PinBreakBulk pinBreakBulk : pin.getPinBreakBulk()) {
						quantityNotAvailable += pinBreakBulk.getQuantity();
					}
				}
			}
		}
		Long availableUnits = quantity - quantityNotAvailable;
		return new ResponseEntity<Long>(availableUnits, HttpStatus.OK);

	}

	/**
	 * 
	 * GET pin/{pinNbr}
	 * 
	 * Retorna todos los pins que tengan el pinNbr.
	 * 
	 * @param pinNbr numero del pin
	 * @return {@link com.spia.businessportal.common.entities.Pin}
	 */

	@RequestMapping(value = "/{pinNbr}", method = RequestMethod.GET)
	public @ResponseBody List<Pin> getPins(@PathVariable String pinNbr) {
		List<Pin> pins = new ArrayList<Pin>();
		try {
			String[] nbrs = pinNbr.split(",");
			for (String nbr : nbrs) {
				pinNbr = EncoderDecoder.decodeBase64(pinNbr);
				UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
				PinFilter pinFilter = new PinFilter();
				pinFilter.setPinNbr(pinNbr);
				pinFilter.setActive(true);
				pinFilter.setDeleted(false);
				pinFilter.setNotBreakBulk(true);

				if (user.getEmpresa().getTiposEmpresas() != null && this.containsCode(User.COMPANY_TYPE_TRUCK, user.getEmpresa().getTiposEmpresas())) {
					pinFilter.setTruckingCompanyLDAP(user.getEmpresa().getId());
				}
				List<Pin> pinList = this.getPinBO().search(pinFilter, new Page(1, 0)).getResult();
				if (pinList != null && !pinList.isEmpty()) {
					pins.add(pinList.get(0));
				}

			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		return pins.size() != 0 ? pins : null;
	}

	/**
	 * 
	 * GET pin/{pinNbr}
	 * 
	 * Retorna todos los pins que tengan el pinNbr.
	 * 
	 * @param pinNbr numero del pin
	 * @return {@link com.spia.businessportal.common.entities.Pin}
	 */

	@RequestMapping(value = "search/{pinNbr}", method = RequestMethod.GET)
	public @ResponseBody  ResponseEntity<?> searchPins(@PathVariable String pinNbr) {
		List<PinImportServiceDTO> pinLst = new ArrayList<PinImportServiceDTO>();
		try {
			pinLst = pinService.searchPin(EncoderDecoder.decodeBase64(pinNbr));
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		if (pinLst == null) {
			return null;
		}
		if (pinLst.size() == 0) {
			return null;
		}
		String parsedResponse = new Gson().toJson(pinLst);
		String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET pin/search/{pin} PinController"); 
		return new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
	}

	/**
	 * 
	 * GET pin/{pinNbr}
	 * 
	 * Retorna todos los pins que tengan el pinNbr.
	 * 
	 * @param pinNbr numero del pin
	 * @return {@link com.spia.businessportal.common.entities.Pin}
	 */

	@RequestMapping(value = "searchunitsinfo/{pinNbr}/{unitList}", method = RequestMethod.GET)
	public @ResponseBody  ResponseEntity<?> searchPinInfo(@PathVariable String pinNbr, @PathVariable String unitList) {
		PinInfoServiceDTO[] pinLst = {};
		String parameterPinNbr = null;
		String parameterUnitList = null;
		try {
			parameterPinNbr = EncoderDecoder.decodeBase64(pinNbr);
			parameterUnitList = EncoderDecoder.decodeBase64(unitList);
			pinLst = pinService.searchPinInfo(parameterPinNbr, parameterUnitList); 
			//pinLst[0].setEmptyRuleActive(true);
			for (PinInfoServiceDTO pinInfoServiceDTO:pinLst) {
				pinInfoServiceDTO.setHoldConsigneeActive(false);
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		UnitValidationDTO unitValidationDTO = new UnitValidationDTO();
		try {
			HoldsList holds = this.getTruckVisitAppointmentMdwBO().getHoldsList(parameterUnitList);
			for (Unit o : holds.getUnits()) {
				for (int i = 0; i < pinLst.length; i++) {
					if (o.getUnitNbr().equals(pinLst[i].getUnitNbr())) {
						HoldListDTO holdListDTO = new HoldListDTO();
						List<HoldDTO> holdList = new ArrayList<HoldDTO>();
						for (HoldItem hold : o.getHolds()) {
							HoldDTO holdDTO = new HoldDTO();
							holdDTO.setHoldId(hold.getHoldId());
							holdDTO.setHoldDescription(hold.getHoldDescription());
							holdDTO.setHoldStatus(hold.getHoldStatus());
							
							if(holdDTO.getHoldId().equals("HOLD_CONSIGNEE"))
							{
								if(holdDTO.getHoldStatus() != null && holdDTO.getHoldStatus().equalsIgnoreCase("REQUIRED"))
								{
									pinLst[i].setHoldUnitActive(true);
								}
								else
								{
									pinLst[i].setHoldUnitActive(false);
								}
								pinLst[i].setHoldConsigneeActive(true);
							}
							else
							{
								holdList.add(holdDTO);
								holdListDTO.setHolds(holdList);
								pinLst[i].setHasHolds(true);
								pinLst[i].setHolds(holdListDTO);
							}
						}
						
						break;
					}
				}
			}
		} catch (Exception e) {
			LOG.info(e.getMessage(), e);
		}

		if (pinLst.length == 0) {
			return null;
		}
		String parsedResponse = new Gson().toJson(pinLst);
		String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET pin/searchunitsinfo/{pinNbr}/{unitList} PinController"); 
		return new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
	}

	private boolean containsCode(String code, List<CompanyTypeDTO> permissions) {
		boolean contains = false;
		for (CompanyTypeDTO p : permissions) {
			contains = code.equals(p.getCompanyTypeId());
			if (contains) {
				break;
			}
		}
		return contains;
	}

	/**
	 * GET /pin/bill-of-lading/{blNbr}
	 *
	 * Retorna todos los pins de un BL
	 *
	 * @param blNbr nro de bl
	 */
	@RequestMapping(value = "/bill-of-lading/{blNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getBillOfLadingPins(@PathVariable String blNbr) {
		ResponseEntity<?> response = null;
		try {
			PinFilter pinFilter = new PinFilter();
			pinFilter.setBlNbr(blNbr);
			pinFilter.setActive(true);

			List<Pin> pins = this.getPinBO().search(pinFilter, new Page(1, 0)).getResult();
			response = new ResponseEntity<List<Pin>>(pins, HttpStatus.OK);

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			response = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			LOG.error(msg, e);
		}
		return response;
	}

	/**
	 * GET /pin/break-bulk/{pinNbr}/{category}
	 *
	 * Retorna todos los pins de breakbulk con el nro y la categoría enviada. La
	 * categoría tiene que ser 'IMPO' o 'EXPO', si es null retorna el pin sin
	 * importar la categoría.
	 *
	 * @param pinNbr   nro de pin
	 * @param category categoría (IMPO/EXPO/null)
	 */
	@RequestMapping(value = "/break-bulk/{pinNbr}/{category}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getBreakBulkPins(@PathVariable String pinNbr,
			@PathVariable String category) {
		ResponseEntity<?> re = null;
		List<Pin> pins = new ArrayList<Pin>();
		try {
			String[] nbrs = pinNbr.split(",");
			for (String nbr : nbrs) {
				UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
				PinFilter pinFilter = new PinFilter();
				pinFilter.setPinNbr(nbr);
				pinFilter.setActive(true);
				pinFilter.setDeleted(false);
				pinFilter.setBreakBulk(true);
				if (category != null && !"null".equals(category)) {
					if ("IMPORT".equals(category.toUpperCase()) || "EXPORT".equals(category.toUpperCase())) {
						pinFilter.setCategory(category);
					} else {
						ResponseError error = new ResponseError();
						String[] strParams = {};
						String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
						error.setError(msg);
						LOG.error("se envió en el campo categoría el valor: " + category);
						return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
					}
				}

				if (this.containsCode(User.COMPANY_TYPE_TRUCK, user.getEmpresa().getTiposEmpresas())) {
					pinFilter.setTruckingCompanyLDAP(user.getEmpresa().getId());
				}

				pins.addAll(this.getPinBO().search(pinFilter, new Page(1, 0)).getResult());
				if (pins.size() > 0) {
					re = new ResponseEntity<Pin>(pins.get(0), HttpStatus.OK);
				}
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			LOG.error(msg, e);
		}
		return re;
	}

	/**
	 * DELETE /pin/:id -> Se deja al pin como inactivo
	 * 
	 * @param id id (no número) del pin que se va a desactivar
	 * @return HTTP 200
	 * @throws BusinessException cuando ocurre un error en la base de datos.
	 */
	@RequestMapping(value = "/deactivate-partial", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> desactivatePin(@RequestBody DeactivatePinDTO deactivatePinDTO)
			throws BusinessException {

		PinContainerized pinContainerizedInfo = new PinContainerized();
		PinContainerizedNotifications pinContainerizedInfoNotifications = new PinContainerizedNotifications();
		try {
			PinContainerizedFilter filter = new PinContainerizedFilter();
			filter.setId(deactivatePinDTO.getId());
			List<PinContainerized> pinsContainerized = this.getPinContainerizedBO().search(filter, new Page(1, 0))
					.getResult();
			UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
			if (!pinsContainerized.isEmpty() && pinsContainerized.size() == 1) {
				PinContainerized pinContainerized = pinsContainerized.get(0);
				pinContainerized.setObservation(deactivatePinDTO.getObservation());
				Pin pin = pinContainerized.getPin();

				// se verifica que el pin este en un estado activo
				if (!pinContainerized.isActive()) {
					String[] strParams = { pin.getUnitNbr() };
					String msg = getProperty("Controller.PinActiveError", strParams, getApplicationContext());
					LOG.error(msg);
					ResponseError error = new ResponseError();
					error.setError(msg);
					return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
				}

				// verifica si es el creador del pin
				//this.getUserBO().getCurrentUser().getEmpresa().getId()
				//pin.getCreatedByCompanyLDAP()
				UsuarioLoginDTO userCreated = this.getUserBO().getByUsername(pin.getCreatedByLDAP());
				if (pin.getCreatedByCompanyLDAP() != null && pin.getCreatedByCompanyLDAP().equalsIgnoreCase(this.getUserBO().getCurrentUser().getEmpresa().getId())) {
					// verifica si el contenedor tiene truck visit
					TruckVisitFilter truckVisitFilter = new TruckVisitFilter();
					truckVisitFilter.setMinAppointmentDate(new Date());
					truckVisitFilter.setUnitNbr(pinContainerized.getUnitNbr());
					truckVisitFilter.setCanceled(false);
					if (pin.getEdoNbr() != null) {
						truckVisitFilter.setEdoNbr(pin.getEdoNbr());
					}
					if (pin.getEroNbr() != null) {
						truckVisitFilter.setEroNbr(pin.getEroNbr());
					}
					List<TruckVisit> truckVisits = this.getTruckVisitBO().search(truckVisitFilter, new Page(1, 0))
							.getResult();
					if (!truckVisits.isEmpty()) {
						if (truckVisits.size() == 1) {
							truckVisits.get(0);

							/* Para loguear el unit - Hacerla global al método de ser vecesario */
							Iterator<PinContainerized> pinContainerizedIterator = pin.getPinContainerized().iterator();
							PinContainerized firstPin = pinContainerizedIterator.next();

							String[] strParams = { firstPin.getUnitNbr() };
							String msg = getProperty("Controller.PinTruckVisitCancelError", strParams,
									getApplicationContext());
							LOG.error(msg);
							ResponseError error = new ResponseError();
							error.setError(msg);
							return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
						} else {
							String[] strParams = { pin.getBkgNbr(), Integer.toString(truckVisits.size()) };
							String msg = getProperty("Controller.PinMultipleTruckVisitError", strParams,
									getApplicationContext());
							LOG.error(msg);
							ResponseError error = new ResponseError();
							error.setError(msg);
							return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
						}
					}

					// Desactivo el pin
					pinContainerized.setActive(false);
					if (this.isLastActive(pin)) {
						pin.setActive(false);
					}

					this.getPinBO().saveOrUpdate(pin);

					pinContainerizedInfo.setId(deactivatePinDTO.getId());
					pinContainerizedInfo.setObservation(pin.getPinNbr());
					pinContainerizedInfo.setUnitNbr(pinContainerized.getUnitNbr());
					pinContainerizedInfo.setTruckingCompanyLDAP(pinContainerized.getTruckingCompanyLDAP());
					pinContainerizedInfo.setTruckingCompanyNameLDAP(pinContainerized.getTruckingCompanyNameLDAP());
					pinContainerizedInfo.setCargoQuantity(pinContainerized.getCargoQuantity());
					pinContainerizedInfo.setCargoWeigth(pinContainerized.getCargoWeigth());

					// Email Notification para el creador del pin
					if (isDesactivateContainerPin) {
						String userName = pin.getTruckingCompanyLDAP();
						try {
							// Envía la notificación a la api
							sendNotification(pin, pinsContainerized, "PIN_REMOVED",
									this.buildMessages(userName, pin, pinContainerized.getUnitNbr()));
						} catch (Exception e) {
							String[] strParams = {};
							String msg = getProperty("Controller.Notification.ERROR", strParams,
									getApplicationContext());
							LOG.error("No se pudo notificar");
							ResponseError responseError = new ResponseError();
							responseError.setCode("NOTIFICATION_ERROR");
							responseError.setError(msg);
							responseError.setMessage(msg);
							return new ResponseEntity<ResponseError>(responseError, HttpStatus.OK);
						}
					}
					pinContainerizedInfo.setIsoType(pin.getBlNbr());
					
					CustomerServiceDTO[] customerServiceDTOList = null;
					customerServiceDTOList = customerService.getCustomer(EncoderDecoder.encodeBase64(pin.getConsignee()), EncoderDecoder.encodeBase64("SHIPPER"));
					List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
					
					if(customerServiceDTOList != null && customerServiceDTOList.length != 0)
					{
						emailsNotifications = getEmailsNotifications(customerServiceDTOList);						
					}
					
					pinContainerizedInfoNotifications.setId(pinContainerizedInfo.getId());
					pinContainerizedInfoNotifications.setUnitNbr(pinContainerizedInfo.getUnitNbr());
					pinContainerizedInfoNotifications.setIsoType(pinContainerizedInfo.getIsoType());
					pinContainerizedInfoNotifications.setActive(pinContainerizedInfo.isActive());
					pinContainerizedInfoNotifications.setDeleted(pinContainerizedInfo.isDeleted());
					pinContainerizedInfoNotifications.setTwenty(pinContainerizedInfo.isTwenty());
					pinContainerizedInfoNotifications.setCargoQuantity(pinContainerizedInfo.getCargoQuantity());
					pinContainerizedInfoNotifications.setCargoWeigth(pinContainerizedInfo.getCargoWeigth());
					pinContainerizedInfoNotifications.setDestination(pinContainerizedInfo.getDestination());
					pinContainerizedInfoNotifications.setTruckVisitAppointmetId(pinContainerizedInfo.getTruckVisitAppointmetId());
					pinContainerizedInfoNotifications.setPin(pinContainerizedInfo.getPin());
					pinContainerizedInfoNotifications.setObservation(pinContainerizedInfo.getObservation());
					pinContainerizedInfoNotifications.setTruckingCompanyLDAP(pinContainerizedInfo.getTruckingCompanyLDAP());
					pinContainerizedInfoNotifications.setTruckingCompanyNameLDAP(pinContainerizedInfo.getTruckingCompanyNameLDAP());
					pinContainerizedInfoNotifications.setCreatedByLDAP(user.getUserName());
					pinContainerizedInfoNotifications.setCreatedByCompanyNameLDAP(user.getEmpresa().getCompanyName());
					pinContainerizedInfoNotifications.setMailsNotifications(emailsNotifications	);
					pinContainerizedInfoNotifications.setObservations(deactivatePinDTO.getObservation());
					pinContainerizedInfoNotifications.setCreatedDate(pin.getCreatedAt().toString());
					return new ResponseEntity<PinContainerizedNotifications>(pinContainerizedInfoNotifications, HttpStatus.OK);
					//return new ResponseEntity<PinContainerized>(pinContainerizedInfo, HttpStatus.OK);
				} else {
					String[] strParams = { pin.getCreatedByLDAP() };
					String msg = getProperty("Controller.PinContainerDeleteError", strParams, getApplicationContext());
					LOG.error(msg);
					ResponseError error = new ResponseError();
					error.setError(msg);
					return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
				}
			} else {
				String[] strParams = {};
				String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
				LOG.error(msg);
				ResponseError error = new ResponseError();
				error.setError(msg);
				return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinDeactivationError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
	}

	private boolean isLastActive(Pin pin) {
		boolean isLastActive = true;
		for (PinContainerized pc : pin.getPinContainerized()) {
			if (pc.isActive()) {
				isLastActive = false;
				break;
			}
		}
		return isLastActive;
	}

	/**
	 * DELETE /pin/nbr/:pinNbr -> Se deja a todos los pines de un mismo nbr como
	 * inactivo
	 * 
	 * @param pinNbr número de pin que se va a desactivar
	 * @return HTTP 200
	 * @throws BusinessException cuando hay un error de base de datos o en los
	 *                           servicios de mdw.
	 */
	@RequestMapping(value = "/deactivate-total", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> desactivatePinByNbr(@RequestBody DeactivatePinDTO deactivatePinDTO)
			throws BusinessException {
		Pin pinInfo = new Pin();
		PinNotification pinNotification = new PinNotification();
		UsuarioLoginDTO userLogin = this.getUserBO().getCurrentUser();
		pinNotification.setObservations(deactivatePinDTO.getObservation());
		try {
			UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
			PinFilter pinFilter = new PinFilter();
			pinFilter.setActive(true);
			pinFilter.setPinNbr(deactivatePinDTO.getPinNbr());
			pinFilter.setCreatedByCompanyLDAP(currentUser.getEmpresa().getId());
			List<Pin> pins = this.getPinBO().search(pinFilter, new Page(1, 0)).getResult();

			String notificationUnits = null;

			if (!pins.isEmpty()) {

				// verifica si es el creador del pin en todos los pins
				for (Pin pin : pins) {
					
					UsuarioLoginDTO user = this.getUserBO().getByUsername(pin.getCreatedByLDAP());
					//user.getEmpresa().getId()
					//pin.getCreatedByCompanyLDAP()
					//UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
					if (!this.getUserBO().getCurrentUser().getEmpresa().getId().equalsIgnoreCase(pin.getCreatedByCompanyLDAP())) {
						String[] strParams = { pin.getCreatedByLDAP() };
						String msg = getProperty("Controller.PinContainerDeleteError", strParams,
								getApplicationContext());
						LOG.error(msg);
						ResponseError error = new ResponseError();
						error.setError(msg);
						return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
					}
				}

				// Verifica que no existan truckvisits
				List<String> units = new ArrayList<String>();
				for (Pin pin : pins) {
					if(pin.isActive())
					{
						for (PinContainerized pc : pin.getPinContainerized()) {
							if (pc.isActive()) {
								units.add(pc.getUnitNbr());
							}
						}
					}
				}

				if (!units.isEmpty()) {
					TruckVisitFilter truckVisitFilter = new TruckVisitFilter();
					truckVisitFilter.setMinAppointmentDate(new Date());
					truckVisitFilter.setUnits(units);
					truckVisitFilter.setCanceled(false);
					if (pins.get(0).getEdoNbr() != null) {
						truckVisitFilter.setEdoNbr(pins.get(0).getEdoNbr());
					}
					if (pins.get(0).getEroNbr() != null) {
						truckVisitFilter.setEroNbr(pins.get(0).getEroNbr());
					}
					List<TruckVisit> truckVisits = this.getTruckVisitBO().search(truckVisitFilter, new Page(1, 0))
							.getResult();
					if (!truckVisits.isEmpty()) {
						for (TruckVisit truckVisit : truckVisits) {
							for (String unit : units) {
								if (truckVisit.containAppointment(unit)) {
									// este contenedor sera
									// entregado/recepcionado el dia
									// "+appointmentDate+" a las
									// "+appointmentHour+" por la Empresa de
									// Transporte "+$scope.truckVisits[i].truck
									String[] strParams = { unit };
									String msg = getProperty("Controller.PinTruckVisitCancelError", strParams,
											getApplicationContext());
									LOG.error(msg);
									ResponseError error = new ResponseError();
									error.setError(msg);
									return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
								}
							}
						}
					}
				}
				// busco los pins activos
				List<Pin> activePins = new ArrayList<>();
				for (Pin pin : pins) {
					if (pin.isActive())
						activePins.add(pin);
				}

				// mostrar error si no hay pins para activar
				if (activePins.isEmpty()) {
					String[] strParams = {};
					String msg = getProperty("Controller.PinInactiveContainersError", strParams,
							getApplicationContext());
					LOG.error(msg);
					ResponseError error = new ResponseError();
					error.setError(msg);
					return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
				}

				// Desactivo los pins activos
				for (Pin pin : activePins) {
					pin.setActive(false);
					pin.setDeleted(true);
					// Desactivo carga suelta
					if (pin.getPinBreakBulk() != null && !pin.getPinBreakBulk().isEmpty()) {
						PrivilegesUtil.setPrivilegeId("CS_IMP_EPI");
						for (PinBreakBulk bb : pin.getPinBreakBulk()) {
							if (bb.isActive()) {
								bb.setObservation(deactivatePinDTO.getObservation());
								bb.setActive(false);
							}
						}
					}
					List<PinContainerized> pinsContainerized = new ArrayList<PinContainerized>();
					// Desactivo carga contenerizada
					if (pin.getPinContainerized() != null && !pin.getPinContainerized().isEmpty()) {
						PrivilegesUtil.setPrivilegeId("CC_IMP_EPI");
						for (PinContainerized pc : pin.getPinContainerized()) {
							if (pc.isActive()) {
								pc.setObservation(deactivatePinDTO.getObservation());
								pc.setActive(false);
								pinsContainerized.add(pc);
								if (notificationUnits == null) {
									notificationUnits = pc.getUnitNbr();
								} else {
									notificationUnits += ", " + pc.getUnitNbr();
								}
							}
						}
					}

					this.getPinBO().saveOrUpdate(pin);
					PrivilegesUtil.setPrivilegeId("");
					pinInfo.setPinNbr(pin.getPinNbr());
					pinInfo.setCreatedByLDAP(this.getUserBO().getCurrentUser().getNombres());
					pinInfo.setConsignee(this.getUserBO().getCurrentUser().getEmpresa().getCompanyName());
					pinInfo.setBlNbr(pin.getBlNbr());
					// Email Notification
					String userName = pin.getTruckingCompanyLDAP();
					if (isDesactivatePinEnabled) {
						try {
							sendNotification(activePins.get(0), pinsContainerized, "PIN_REMOVED",
									this.buildMessages(userName, pin, notificationUnits));
						} catch (Exception e) {
							String[] strParams = {};
							String msg = getProperty("Controller.Notification.ERROR", strParams,
									getApplicationContext());
							LOG.error("No se pudo notificar");
							ResponseError responseError = new ResponseError();
							responseError.setCode("NOTIFICATION_ERROR");
							responseError.setError(msg);
							responseError.setMessage(msg);
							return new ResponseEntity<ResponseError>(responseError, HttpStatus.OK);
						}
					}
				}
				for(Pin p:pins)
				{
					//PinNotification pinNotification= new PinNotification();
					CustomerServiceDTO[] customerServiceDTOList = null;
					customerServiceDTOList = customerService.getCustomer(EncoderDecoder.encodeBase64(p.getConsignee()), EncoderDecoder.encodeBase64("SHIPPER"));
					List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
					TemplateEmailDTO templateEmailDTO = new TemplateEmailDTO();
					if(customerServiceDTOList != null && customerServiceDTOList.length != 0)
					{
						emailsNotifications = getEmailsNotifications(customerServiceDTOList);
					}
					pinNotification.setHashValue(p.getHashValue());
					pinNotification.setPinNbr(p.getPinNbr());
					pinNotification.setUnitNbr(p.getUnitNbr());
					pinNotification.setBlNbr(p.getBlNbr());
					pinNotification.setBkgNbr(p.getBkgNbr());
					pinNotification.setEdoNbr(p.getEdoNbr());
					pinNotification.setEroNbr(p.getEroNbr());
					pinNotification.setCreatedByLDAP(p.getCreatedByLDAP());
					pinNotification.setCreatedByCompanyLDAP(p.getCreatedByCompanyLDAP());
					pinNotification.setTruckingCompanyLDAP(p.getTruckingCompanyLDAP());
					pinNotification.setTruckingCompanyNameLDAP(p.getTruckingCompanyNameLDAP());
					pinNotification.setCreatedAt(p.getCreatedAt());
					pinNotification.setConsignee(p.getConsignee());
					pinNotification.setFrghtKind(p.getFrghtKind());
					pinNotification.setIsGroup(p.getIsGroup());
					pinNotification.setActive(p.isActive());
					pinNotification.setDeleted(p.isDeleted());
					pinNotification.setTwenty(p.isTwenty());	
					pinNotification.setPinBreakBulk(p.getPinBreakBulk());
					pinNotification.setTruckVisitBreakBulk(p.getTruckVisitBreakBulk());
					pinNotification.setPinContainerized(p.getPinContainerized());
					pinNotification.setMailsNotifications(emailsNotifications);
					pinNotification.setCreatedByCompanyNameLDAP(userLogin.getEmpresa().getCompanyName());
					//pinNotifications.add(pinNotification);
				}
				return new ResponseEntity<PinNotification>(pinNotification, HttpStatus.OK);
				//return new ResponseEntity<Pin>(pinInfo, HttpStatus.OK);

			} else {
				String[] strParams = {};
				String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
				LOG.error(msg);
				ResponseError error = new ResponseError();
				error.setError(msg);
				return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinDeactivationError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
	}

	private void sendNotification(Pin pin, List<PinContainerized> pinsContainerized, String pinRemoved,
			List<Map<String, String>> messages) throws BusinessException {
		try {
			this.getNotificationMdwBO().notificate(pin, pinsContainerized, pinRemoved, messages);
		} catch (Exception e) {
			Notification n = this.getNotificationMdwBO().createNotification(pin, pinsContainerized, pinRemoved,
					this.getUserBO().getCurrentUser().getUserName());
			List<FailedNotification> l = new ArrayList<FailedNotification>();
			FailedNotification fail = new FailedNotification();
			fail.setContent(n.getContent());
			fail.setData(n.getData());
			fail.setDate(n.getDate());
			fail.setDeleted(false);
			fail.setTitle(n.getTitle());
			fail.setType(n.getType());
			fail.setUser(pin.getTruckingCompanyLDAP());
			fail.setWatched(n.getWatched());
			l.add(fail);
			this.getNotificationBO().saveFailedNotifications(l);

			throw new BusinessException("no se pudo notificar");
		}

	}

	private void sendNotificationPin(Pin pin, List<PinContainerized> pinsContainerized, String pinRemoved,
			List<Map<String, String>> messages) throws BusinessException {
		try {
			this.getNotificationMdwBO().notificatePin(pin, pinsContainerized, pinRemoved, messages);
		} catch (Exception e) {
			Notification n = this.getNotificationMdwBO().createNotification(pin, pinsContainerized, pinRemoved,
					this.getUserBO().getCurrentUser().getUserName());
			List<FailedNotification> l = new ArrayList<FailedNotification>();
			FailedNotification fail = new FailedNotification();
			fail.setContent(n.getContent());
			fail.setData(n.getData());
			fail.setDate(n.getDate());
			fail.setDeleted(false);
			fail.setTitle(n.getTitle());
			fail.setType(n.getType());
			fail.setUser(pin.getTruckingCompanyLDAP());
			fail.setWatched(n.getWatched());
			l.add(fail);
			this.getNotificationBO().saveFailedNotifications(l);

			throw new BusinessException("no se pudo notificar");
		}

	}

	/**
	 * Envía un mail al usuario que creó el pin informandole que se desactivó.
	 * 
	 * @param user usuario al que se le enviara el mail
	 * @param pin  pin que se desactivó
	 * @throws BusinessException
	 */
	private List<Map<String, String>> buildMessages(String truckingCompanyId, Pin pin, String units)
			throws BusinessException {

		SecurityEsbResponse<UserNotificationEsb> companyUsers = this.getSecurityEsbBO()
				.getUserNotification(truckingCompanyId);
		List<UserNotificationEsb> usersNotification = (List<UserNotificationEsb>) companyUsers.getResult();

		String subject = null;
		String template = null;
		String unit = null;

		// si el pin es de un break-bulk mostrar un template sino otro
		if (pin.getPinBreakBulk().size() > 0) {
			String[] strParams = { pin.getPinNbr() };
			subject = getProperty("Controller.PinDeactvationBreakBulkEmailSubject", strParams, getApplicationContext());
			template = desactivatePinBreakBulk;
		} else {
			String[] strParams = { units, pin.getPinNbr() };
			subject = getProperty("Controller.PinDeactvationEmailSubject", strParams, getApplicationContext());
			unit = units;
			template = desactivatePin; // TODO template mail según locale
		}
		List<Map<String, String>> messages = new ArrayList<Map<String, String>>();
		if (usersNotification != null) {
			for (UserNotificationEsb user : usersNotification) {
				Map<String, String> mapMessage = new HashMap<String, String>();
				mapMessage.put("to", user.getEmail());
				mapMessage.put("subject", subject);
				mapMessage.put("template", template);
				mapMessage.put("pin", pin.getPinNbr());
				mapMessage.put("userName", this.getUserBO().getCurrentUser().getNombres());
				if (unit != null) {
					mapMessage.put("unit", unit);
				}
				messages.add(mapMessage);
			}
		}
		return messages;
	}

	/**
	 * Imprime el pdf de un pin
	 * 
	 * @param pinNbrs  nbr del pin que se va a imprimir
	 * @param request  petición http
	 * @param response respuesta http
	 * @return ModelAndView
	 */
	@RequestMapping(value = "/pdf/{pinNbrs}", method = RequestMethod.GET)
	public ModelAndView pdf(@PathVariable List<String> pinNbrs, HttpServletRequest request,
			HttpServletResponse response) {
		List<Pin> pins = new ArrayList<Pin>();
		ModelAndView mav = new ModelAndView("");
		String reporte = "Pin.jrxml";
		try {
			for (String nbr : pinNbrs) {
				UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
				PinFilter pinFilter = new PinFilter();
				pinFilter.setPinNbr(nbr);
				pinFilter.setActive(true);

				if (this.containsCode(User.COMPANY_TYPE_TRUCK, user.getEmpresa().getTiposEmpresas())) {
					pinFilter.setTruckingCompanyLDAP(user.getEmpresa().getId());
				}

				pins.add(this.getPinBO().search(pinFilter, new Page(1, 0)).getResult().get(0));
			}
		} catch (Exception e) {

			String[] strParams = {};
			String msg = getProperty("Controller.PinPDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
			mav.setViewName("error");
			mav.addObject("relativePath", "../../");

			msg = getProperty("Controller.InpuError", strParams, getApplicationContext());
			mav.addObject("error", msg);
		}
		if (pins.isEmpty()) {
			mav.setViewName("error");
			mav.addObject("relativePath", "../../");
			String[] strParams = {};
			String msg = getProperty("Controller.PinNotFoundError", strParams, getApplicationContext());
			mav.addObject("error", msg);
		} else {
			if (pins.get(0).getFrghtKind().equals("BBK")) {
				reporte = "PinBreakBulk.jrxml";
			}
			generatePDF(pins, request, response, reporte);
		}
		return mav;
	}

	/**
	 * Genera el pdf de un Pin.
	 * 
	 * @param pins     Lista de pins para agregar al reporte.
	 * @param request  petición HTTP
	 * @param response respuesta HTTP
	 * @param reporte  reporte de jasper
	 */
	private void generatePDF(List<Pin> pins, HttpServletRequest request, HttpServletResponse response, String reporte) {

		HashMap<String, Object> parameterMap = new HashMap<String, Object>();

		parameterMap.put("SPIA_LOGO",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/bg.jpg"));
		parameterMap.put("SUPERPUERTOS",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/superpuertos.jpg"));

		JasperReport jasperReport = null;
		try {
			JasperPrint jasperPrint = null;
			List<PinReportDTO> pinsReport = new ArrayList<PinReportDTO>();
			for (Pin pin : pins) {
				if (pin.getFrghtKind().equals("BBK")) {
					PinReportDTO pinReport = new PinReportDTO();
					pinReport.setAgentName(this.getUserBO().getCurrentUser().getEmpresa().getCompanyName());
					pinReport.setTruckingCompanyName(pin.getTruckingCompanyNameLDAP());
					pinReport.setBlNbr(pin.getBlNbr());
					pinReport.setPinNbr(pin.getPinNbr());
					ArrayList<String> quantity = new ArrayList<String>();
					ArrayList<String> weight = new ArrayList<String>();
					ArrayList<String> commodity = new ArrayList<String>();
					Integer cont = 1;
					for (PinContainerized pinBreakBulk : pin.getPinContainerized()) {
						if (pinBreakBulk.isActive()) {
							quantity.add(String.valueOf(pinBreakBulk.getCargoQuantity()));
							weight.add(String.valueOf(pinBreakBulk.getCargoWeigth()));
							commodity.add(String.valueOf(cont));
							cont++;
						}
					}
					pinReport.setQuantity(quantity);
					pinReport.setWeight(weight);
					pinReport.setCommodity(commodity);
					pinsReport.add(pinReport);
				} else {
					ArrayList<String> unitType = new ArrayList<String>();
					ArrayList<String> unitNbr = new ArrayList<String>();
					PinReportDTO pinReport = new PinReportDTO();
					pinReport.setAgentName(this.getUserBO().getCurrentUser().getEmpresa().getCompanyName());
					pinReport.setBlNbr(pin.getBlNbr());
					pinReport.setPinNbr(pin.getPinNbr());
					pinReport.setTruckingCompanyName(pin.getTruckingCompanyNameLDAP());

					for (PinContainerized pinContainerized : pin.getPinContainerized()) {
						if (pinContainerized.isActive()) {
							unitType.add(pinContainerized.isTwenty() ? "20\"" : "40\"");
							unitNbr.add(pinContainerized.getUnitNbr());
							pinReport.setTruckingCompanyName(pinContainerized.getTruckingCompanyNameLDAP());
							pinReport.setBlNbr(pin.getBlNbr());
							pinReport.setPinNbr(pin.getPinNbr());
						}
					}
					pinReport.setUnitType(unitType);
					pinReport.setUnitNbr(unitNbr);
					pinsReport.add(pinReport);
				}
			}
			JRDataSource invoiceDataSource = new JRBeanCollectionDataSource(pinsReport);
			JasperUtils.exportReport(reporte, jasperReport, parameterMap, invoiceDataSource, jasperPrint, request,
					response);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinPDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
			LOG.error(e.getStackTrace());
		}
	}

	/**
	 * Retorna los pin validos para el criterio de busqueda de {@link PinCriteria}
	 * 
	 * @param criteria criterio de búsqueda de pin.
	 * @return {@link com.spia.businessportal.common.entities.Pin}
	 * @throws BusinessException cuando ocurre un error en la base de datos.
	 */
	@RequestMapping(value = "/filter/{page}/{amount}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private @ResponseBody List<Pin> filterPin(@RequestBody PinCriteria criteria, @PathVariable Integer page,
			@PathVariable Integer amount) throws BusinessException {
		List<Pin> pins = null;
		if (criteria != null && (criteria.getConsignee() != null || criteria.getState() != null
				|| criteria.getFromDate() != null || criteria.getToDate() != null || criteria.getBl() != null
				|| criteria.getFrghtKind() != null || criteria.getHbl() != null)) {
			PinFilter filter = new PinFilter();

			filter.setCreatedByCompanyLDAP(this.getUserBO().getCurrentUser().getEmpresa().getId());
			filter.setImpo(true);
			if (criteria.getState() != null) {
				if (criteria.getState().intValue() == 1) {
					filter.setActive(true);
				} else {
					filter.setActive(false);
				}
			}
			if (criteria.getBl() != null) {
				filter.setUnitNbr(criteria.getBl());
			}
			if (criteria.getHbl() != null) {
				filter.setBlNbr(criteria.getHbl());
			}
			if (criteria.getFrghtKind() != null && criteria.getFrghtKind() != "") {
				filter.setFrghtKind(criteria.getFrghtKind());
			}
			if (criteria.getConsignee() != null) {
				filter.setTruckingCompanyLDAP(criteria.getConsignee());
			}
			if (criteria.getFromDate() != null) {
				filter.setFromDate(criteria.getFromDate());
			}
			if (criteria.getToDate() != null) {
				filter.setToDate(criteria.getToDate());
			}
			pins = this.getPinBO().search(filter, new Page(page, amount)).getResult();
		} else {
			PinFilter pinFilter = new PinFilter();
			pinFilter.setCreatedByCompanyLDAP(this.getUserBO().getCurrentUser().getEmpresa().getId());
			pins = this.getPinBO().search(pinFilter, new Page(page, amount)).getResult();
		}
		return pins;
	}


	/**
	 * Retorna los pin validos para el criterio de busqueda de {@link HistoryPinCriteria}
	 *
	 * @param criteria criterio de búsqueda de pin.
	 * @return {@link com.spia.businessportal.common.entities.Pin}
	 * @throws BusinessException cuando ocurre un error en la base de datos.
	 */
	@RequestMapping(value = "/historyPin/filter/{page}/{amount}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	private @ResponseBody List<Pin> filterPins(@RequestBody HistoryPinCriteria criteria, @PathVariable Integer page,
											  @PathVariable Integer amount) throws BusinessException {
		List<Pin> pins = null;
		if (criteria != null && (criteria.getCompany() != null || criteria.getConsigneeId() != null || criteria.getState() != null
				|| criteria.getFromDate() != null || criteria.getToDate() != null || criteria.getBl() != null
				|| criteria.getFrghtKind() != null || criteria.getHbl() != null)) {
			PinFilter filter = new PinFilter();

			filter.setCreatedByCompanyLDAP(this.getUserBO().getCurrentUser().getEmpresa().getId());
			filter.setImpo(true);
			if (criteria.getState() != null) {
				if (criteria.getState().intValue() == 1) {
					filter.setActive(true);
				} else {
					filter.setActive(false);
				}
			}
			if (criteria.getBl() != null) {
				filter.setUnitNbr(criteria.getBl());
			}
			if (criteria.getHbl() != null) {
				filter.setBlNbr(criteria.getHbl());
			}
			if (criteria.getFrghtKind() != null && criteria.getFrghtKind() != "") {
				filter.setFrghtKind(criteria.getFrghtKind());
			}
			if (criteria.getCompany() != null) {
				filter.setTruckingCompanyLDAP(criteria.getCompany());
			}
			
			if (criteria.getFromDate() != null) {
				filter.setFromDate(criteria.getFromDate());
			}
			if (criteria.getToDate() != null) {
				filter.setToDate(criteria.getToDate());
			}
			if (criteria.getConsigneeId() != null){
				filter.setConsignee(criteria.getConsigneeId());
			}

			pins = this.getPinBO().search(filter, new Page(page, amount)).getResult();
		} else {
			PinFilter pinFilter = new PinFilter();
			pinFilter.setCreatedByCompanyLDAP(this.getUserBO().getCurrentUser().getEmpresa().getId());
			pins = this.getPinBO().search(pinFilter, new Page(page, amount)).getResult();
		}

		return pins;
	}


	/**
	 * Envía un mail al usuario que creó el pin informandole que se desactivófue
	 * creado
	 * 
	 * @param user usuario al que se le enviara el mail
	 * @param pin  pin que se creo
	 * @throws BusinessException
	 */
	private List<Map<String, String>> buildMessagesCreate(String truckingCompanyId, Pin pin, String units)
			throws BusinessException {

		// SecurityEsbResponse<UserNotificationEsb> companyUsers =
		// this.getSecurityEsbBO().getUserNotificationPin(truckingCompanyId);
		// List<UserNotificationEsb> usersNotification = (List<UserNotificationEsb>)
		// companyUsers.getResult();

		String subject = null;
		String template = null;
		String unit = null;

		// si el pin es de un break-bulk mostrar un template sino otro
		if (pin.getPinBreakBulk().size() > 0) {
			String[] strParams = { pin.getPinNbr() };
			subject = getProperty("Controller.PinCreateBreakBulkEmailSubject", strParams, getApplicationContext());
			template = createPinBreakBulk;
		} else {
			String[] strParams = { units, pin.getPinNbr() };
			subject = getProperty("Controller.PinCreateEmailSubject", strParams, getApplicationContext());
			unit = units;
			template = createPin; // TODO template mail según locale
		}
		List<Map<String, String>> messages = new ArrayList<Map<String, String>>();
		// if (usersNotification != null) {
		// for (UserNotificationEsb user : usersNotification) {
		Map<String, String> mapMessage = new HashMap<String, String>();
		// mapMessage.put("to", user.getEmail());
		mapMessage.put("subject", subject);
		mapMessage.put("template", template);
		mapMessage.put("userName", this.getUserBO().getCurrentUser().getNombres());
		mapMessage.put("pin", pin.getPinNbr());
		if (unit != null) {
			mapMessage.put("unit", unit);
		}
		messages.add(mapMessage);
		// }
		// }
		return messages;
	}

	/**
	 * POST /pin Crea uno o varios pins
	 * 
	 * @param pinDTO información para generar los pin
	 * @return {@link com.spia.businessportal.common.entities.Pin}
	 */
	@RequestMapping(value = "/existing", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody ResponseEntity<?> searchExistingPinByHbl(@RequestBody List<PinDTO> pinDTOList) {
		List<Pin> pins = new ArrayList<>();
		for (PinDTO pinDTO : pinDTOList) {
			try {
				// verificar que no exista pins activos para el contenedor

				List<String> units = new ArrayList<String>();
				PinFilter pinFilter = new PinFilter();

				for (UnitTruckDTO unitTruckDTO : pinDTO.getUnitsTrucks()) {
					units.add(unitTruckDTO.getNbr());
				}

				pinFilter.setActive(true);
				pinFilter.setPinContainerizedActive(true);
				pinFilter.setUnitList(units);
				if (pinDTO.getIsEdo()) {
					pinFilter.setEdo(pinDTO.getNbr());
				}
				if (pinDTO.getIsEro()) {
					pinFilter.setEro(pinDTO.getNbr());
				}
				List<Pin> pinsForValidate = this.getPinBO().search(pinFilter, new Page(1, 0)).getResult(); // retorna
																											// pins si
																											// estan
																											// activos

				// se genera el pin si no existen pins activos
				pins.addAll(pinsForValidate);

			} catch (Exception e) {
				String[] strParams = {};
				String msg = getProperty("Controller.PinCreationError", strParams, getApplicationContext());
				LOG.error(msg, e);
				ResponseError error = new ResponseError();
				error.setError(msg);
				return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		}

		return new ResponseEntity<>(pins, HttpStatus.OK);
	}
	
	public List<TemplateEmailDTO> getEmailsNotifications(CustomerServiceDTO[] customerServiceDTOList) throws Exception {
		List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
		String [] mails = null;
		if(customerServiceDTOList[0].getCUSTDFF_EMAIL_PIN() != null && !customerServiceDTOList[0].getCUSTDFF_EMAIL_PIN().equals(""))
		{
			mails = customerServiceDTOList[0].getCUSTDFF_EMAIL_PIN().split(",");
		}
		if(mails != null && mails.length > 1)
		{
			for(String str:mails)
			{
				TemplateEmailDTO templateEmailDTO = new TemplateEmailDTO();
				templateEmailDTO.setMail(str);
				templateEmailDTO.setName(customerServiceDTOList[0].getName());
				emailsNotifications.add(templateEmailDTO);
			}
		}
		else if(mails != null && mails.length == 1)
		{
			TemplateEmailDTO templateEmailDTO = new TemplateEmailDTO();
			templateEmailDTO.setMail(mails[0]);
			templateEmailDTO.setName(customerServiceDTOList[0].getName());
			emailsNotifications.add(templateEmailDTO);
		}

		return emailsNotifications;
	}
	
	public List<TemplateEmailDTO> getEmailsNotifications(TemplateEmailDTO tDTO) throws Exception {
		List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
		String [] mails = null;
		if(tDTO.getMail() != null && !tDTO.getMail().equals(""))
		{
			mails = tDTO.getMail().split(",");
		}
		if(mails != null && mails.length > 1)
		{
			for(String str:mails)
			{
				TemplateEmailDTO templateEmailDTO = new TemplateEmailDTO();
				templateEmailDTO.setMail(str);
				templateEmailDTO.setName(tDTO.getName());
				emailsNotifications.add(templateEmailDTO);
			}
		}
		else if(mails != null && mails.length == 1)
		{
			TemplateEmailDTO templateEmailDTO = new TemplateEmailDTO();
			templateEmailDTO.setMail(mails[0]);
			templateEmailDTO.setName(tDTO.getName());
			emailsNotifications.add(templateEmailDTO);
		}

		return emailsNotifications;
	}

}
