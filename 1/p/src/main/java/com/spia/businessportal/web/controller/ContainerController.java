/**
 * 
 */
package com.spia.businessportal.web.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
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
import org.springframework.web.client.HttpServerErrorException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fluxit.n4api.snx.model.TUnitEro;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.CheckDigitApprovedDTO;
import com.spia.businessportal.common.entities.dto.EroDTO;
import com.spia.businessportal.common.entities.dto.FormResponseDTO;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.entities.dto.GrantUnitHoldsDTO;
import com.spia.businessportal.common.entities.dto.GrantUnitsHoldsDTO;
import com.spia.businessportal.common.entities.dto.InvoicesCNDTO;
import com.spia.businessportal.common.entities.dto.SaveUfvMailDTO;
import com.spia.businessportal.common.entities.dto.SaveUfvMailReferenceDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.filters.TruckVisitFilter;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.ContainerService;
import com.spia.businessportal.service.CreditNotesService;
import com.spia.businessportal.service.UnitFacilityVisitService;
import com.spia.services.entities.BKItem;
import com.spia.services.entities.Bkg;
import com.spia.services.entities.Booking;
import com.spia.services.entities.BookingFlexFields;
import com.spia.services.entities.BookingReference;
import com.spia.services.entities.BKItemReference;
import com.spia.services.entities.Carrier;
import com.spia.services.entities.Category;
import com.spia.services.entities.Container;
import com.spia.services.entities.Routing;
import com.spia.services.entities.UnitFacilityVisit;
import com.spia.services.entities.UnitFacilityVisitDTO;
import com.spia.services.exception.BOException;
import com.spia.services.util.Constants;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.services.entities.EquipmentType;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;

/**
 * @author diego controlador donde se expone la api de negocios del portal para
 *         {@link UnitFacilityVisit}
 */
@RequestMapping("/api/container")
@Controller
public class ContainerController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(ApplicationManagerController.class);

	@Value("#{userDocumentalProperties['mail.userDocumental']}")
	private String userDocumental;
	@Value("#{holds['pago.port']}")
	private String hold;
	@Value("#{templates['diffCreatePreadvise']}")
	private String diffCreatePreadviceTemplate;

	@Autowired
	private ContainerService containerService;

	@Autowired
	private UnitFacilityVisitService unitFacilityVisitService;

	/**
	 * GET /api/container/:nbr invocación al servicio que retorna un Unit Facility
	 * Visit
	 * 
	 * @param nbr:      número de unit
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/{nbr}", method = RequestMethod.GET)
	public @ResponseBody UnitFacilityVisit getContainer(@PathVariable String nbr, HttpServletRequest request,
			HttpServletResponse response) throws BusinessException {
		return this.getUnitFacilityVisitMdwBo().get(nbr);
	}

	/**
	 * GET /container/import/:nbr invocación al servicio que retorna un Unit
	 * Facility Visit para importación
	 * 
	 * @param nbr:      número de unit
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/import/{nbr}", method = RequestMethod.GET)
	public @ResponseBody UnitFacilityVisit getImportContainer(@PathVariable String nbr, HttpServletRequest request,
			HttpServletResponse response) throws BusinessException {
		String userID = this.getUserBO().getCurrentUser().getEmpresa().getId();

		if (this.getUserBO().hasPermission(User.COMPANY_TYPE_CUSTOMER)) {
			userID = userID.concat("|Cl");
		}
		return this.getUnitFacilityVisitMdwBo().getUnitForImport(nbr, userID);
	}

	/**
	 * GET /container/import/:nbr invocación al servicio que retorna un Unit
	 * Facility Visit para ingreso de vacíos (ERO)
	 * 
	 * @param nbr:      número de unit
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/ero/{nbr}", method = RequestMethod.GET)
	public @ResponseBody UnitFacilityVisit getEroContainer(@PathVariable String nbr, HttpServletRequest request,
			HttpServletResponse response) throws BusinessException {
		return this.getUnitFacilityVisitMdwBo().getUnitForImport(nbr, null);
	}

	/**
	 * GET /container/is-in-edo-ero/:nbr Invocación al servicio que retorna si el
	 * unit está en otra orden.
	 * 
	 * @param nbr:      número de unit
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return true si el unit está en otro edo/ero/booking
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/is-in-order/{nbr}", method = RequestMethod.GET)
	public @ResponseBody boolean getIsInEdiEro(@PathVariable String nbr, HttpServletRequest request,
			HttpServletResponse response) throws BusinessException {
		return this.getUnitFacilityVisitMdwBo().isInOrder(nbr);
	}

	/**
	 * GET /api/container/is-advised/:nbr Invocación al servicio que retorna si el
	 * unit está preavisado
	 * 
	 * @param nbr:      número de unit
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return true si el unit está preavisado.
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/is-advised/{nbr}", method = RequestMethod.GET)
	public @ResponseBody boolean getIsAdvised(@PathVariable String nbr, HttpServletRequest request,
			HttpServletResponse response) throws BusinessException {
		return this.getUnitFacilityVisitMdwBo().isUnitAdvised(nbr);
	}

	/**
	 * GET /api/container/is-advised/:nbr Invocación al servicio que retorna si el
	 * unit está activo.
	 * 
	 * @param nbr:      número de unit
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return true si está activo
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/is-activated/{nbr}", method = RequestMethod.GET)
	public @ResponseBody boolean getIsActivated(@PathVariable String nbr, HttpServletRequest request,
			HttpServletResponse response) throws BusinessException {
		return this.getUnitFacilityVisitMdwBo().isActivated(nbr);
	}

	/**
	 * GET /api/container/physical/:nbr Invocación al servicio que el contenedor
	 * físico.
	 * 
	 * @param nbr: número de unit
	 * @return {@link Container}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/physical/{nbr}", method = RequestMethod.GET)
	public @ResponseBody Container getContainer(@PathVariable String nbr) throws BusinessException {
		return this.getContainerMdwBO().get(nbr);
	}

	/**
	 * POST /api/container save or update de un UnitFacilityVisit, si el container
	 * no existe lo crea
	 * 
	 * @param booking: booking al cuál se va a agregar el unit
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 */
	@RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> save(@RequestBody Booking booking)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {

		ResponseEntity<?> re = save(booking);
		if ((booking.getAgentId() != null || booking.getShipperId() != null)
				&& (HttpStatus.OK.equals(re.getStatusCode()))) {
			saveAgent(booking, re);
		}
		return re;

	}

	/**
	 * PUT /api/container/cancel-preadvise cancela el preaviso de un contenedor
	 * 
	 * @param nbr
	 * @return
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/cancel-preadvise/{nbr}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> cancelPreadvise(@PathVariable String nbr, @RequestBody Booking booking)
			throws BusinessException {
		ResponseEntity<?> re = null;
		try {
			// Primero chequeo si tiene citas creadas.
			nbr = EncoderDecoder.decodeBase64(nbr);
			TruckVisitFilter truckVisitFilter = new TruckVisitFilter();
			truckVisitFilter.setUnitNbr(nbr);
			Calendar cal = Calendar.getInstance();
			cal.setTime(new Date());
			cal.add(Calendar.HOUR_OF_DAY, -2);
			cal.getTime();
			truckVisitFilter.setMinAppointmentDate(cal.getTime());
			truckVisitFilter.setCanceled(false);
			List<TruckVisit> truckVisits = this.getTruckVisitBO().search(truckVisitFilter, new Page(1, 0)).getResult();
			if (truckVisits != null && !truckVisits.isEmpty()) {
				String[] strParams = { nbr };
				String msg = getProperty("Controller.UnitHasAppointmentError", strParams, getApplicationContext());
				ResponseError responseError = new ResponseError();
				responseError.setCode("VALIDATION");
				responseError.setMessage(msg);
				responseError.setError(msg);
				re = new ResponseEntity<ResponseError>(responseError, HttpStatus.OK);
			} else {
				Boolean cancelled = this.getUnitFacilityVisitMdwBo().cancelPreadvise(nbr);
				if (cancelled) {
					int index = 0;
					boolean found = false;
					for (UnitFacilityVisit ufv : booking.getUnits()) {
						found = ufv.getId().equals(nbr);
						if (found) {
							break;
						}
						index++;

					}
					booking.getUnits().remove(index);

					found = false;
					List<BKItem> LstBKItem = new ArrayList<BKItem>();
					LstBKItem = booking.getItems();
					index = 0;
					for (BKItem item : LstBKItem) {
						List<String> unitNbr = item.getReservedContainers();
						if (unitNbr != null && !unitNbr.isEmpty()) {
							int i = 0;
							for (String number : unitNbr) {
								if (number.equals(nbr)) {
									item.getReservedContainers().remove(i);
									item.setAvailableQuantity(String.valueOf(item.getAvailableQuantity() + 1));
									found = true;
									break;
								} else {
									i++;
								}
							}
							if (!found) {
								index++;
							}
						}
						if (found) {
							break;
						}
					}
				}
				re = new ResponseEntity<Booking>(booking, HttpStatus.OK);
			}
		} catch (Exception e) {
			String[] strParams = { nbr };
			String msg = getProperty("Controller.CancelPreadviseError", strParams, getApplicationContext());
			ResponseError responseError = new ResponseError();
			responseError.setCode("ERROR");
			responseError.setMessage(msg);
			responseError.setError(msg);
			LOG.error(e.getMessage(), e);
			re = new ResponseEntity<ResponseError>(responseError, HttpStatus.OK);
		}
		return re;
	}

	private void saveAgent(Booking booking, ResponseEntity<?> re) throws IOException {

		try {
			BookingFlexFields bookingFlexFields = new BookingFlexFields();
			bookingFlexFields.setAgent(booking.getAgentId());
			bookingFlexFields.setShipperId(booking.getShipperId());
			bookingFlexFields.setShipperName(booking.getShipperName());
			String nbr = booking.getNbr();
			String mynbr = nbr.replaceAll("/", "%2F");
			this.getBookingMdwBo().updateFlexFields(mynbr, bookingFlexFields);
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			LOG.error(ContainerController.class, e);
			// re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}

	}

	private void saveAgentReference(BookingReference booking, ResponseEntity<?> re) throws IOException {

		try {
			BookingFlexFields bookingFlexFields = new BookingFlexFields();
			bookingFlexFields.setAgent(booking.getAgentId());
			bookingFlexFields.setShipperId(booking.getShipperId());
			bookingFlexFields.setShipperName(booking.getShipperName());
			String nbr = booking.getNbr();
			String mynbr = nbr.replaceAll("/", "%2F");
			this.getBookingMdwBo().updateFlexFields(mynbr, bookingFlexFields);
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			LOG.error(ContainerController.class, e);
			// re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}

	}

	private ResponseEntity<?> saveUfv(Booking booking) throws JsonParseException, JsonMappingException, IOException {

		ResponseEntity<?> re = null;
		try {
			// nuevo unit para guardar
			UnitFacilityVisit unitFacilityVisit = booking.getUnits().get(0);

			// Carriers
			unitFacilityVisit.setRouting(new Routing());
			unitFacilityVisit.getRouting().setCarriers(new ArrayList<Carrier>());

			Carrier carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_IB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_DECLARED);
			carrier.setMode(Constants.UFV.MODE_TRUCK);
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_IB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_ACTUAL);
			carrier.setMode(Constants.UFV.MODE_TRUCK);
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_OB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_DECLARED);
			carrier.setMode(Constants.UFV.MODE_VESSEL);
			carrier.setId(booking.getCarrierVisit());
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_OB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_ACTUAL);
			carrier.setMode(Constants.UFV.MODE_VESSEL);
			carrier.setId(booking.getCarrierVisit());
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			// unitFacilityVisit.setAgent1(agentId);

			// unitFacilityVisit.setFreightKind("FCL");
			unitFacilityVisit.setTransitState(Constants.UFV.TRANSIT_INBOUND);
			unitFacilityVisit.setCategory(Category.EXPORT);

			// booking
			unitFacilityVisit.setBooking(new Bkg());
			unitFacilityVisit.getBooking().setId(booking.getNbr());

			// line Op
			unitFacilityVisit.setLine(booking.getLine());

			unitFacilityVisit.setTruckingCompany(this.getUserBO().getCurrentUser().getEmpresa().getId().toUpperCase());

			// guarda en unit freight kind
			unitFacilityVisit.setFreightKind(booking.getEqStatus());

			// Agrego el shipperId
			unitFacilityVisit.getContents().setShipperId(booking.getShipperId());
			this.getUnitFacilityVisitMdwBo().save(unitFacilityVisit);
			re = new ResponseEntity<UnitFacilityVisit>(unitFacilityVisit, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError responseError = new ResponseError();
			if (e instanceof HttpServerErrorException) {
				responseError = extractMdwMessageException(e);
			}
			re = (new ResponseEntity<ResponseError>(responseError, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	private ResponseEntity<?> saveUfvReference(BookingReference booking, String reference)
			throws JsonParseException, JsonMappingException, IOException {

		ResponseEntity<?> re = null;
		try {
			// nuevo unit para guardar
			UnitFacilityVisit unitFacilityVisit = booking.getUnits().get(0);

			// Carriers
			unitFacilityVisit.setRouting(new Routing());
			unitFacilityVisit.getRouting().setCarriers(new ArrayList<Carrier>());

			Carrier carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_IB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_DECLARED);
			carrier.setMode(Constants.UFV.MODE_TRUCK);
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_IB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_ACTUAL);
			carrier.setMode(Constants.UFV.MODE_TRUCK);
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_OB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_DECLARED);
			carrier.setMode(Constants.UFV.MODE_VESSEL);
			carrier.setId(booking.getCarrierVisit());
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_OB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_ACTUAL);
			carrier.setMode(Constants.UFV.MODE_VESSEL);
			carrier.setId(booking.getCarrierVisit());
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			// unitFacilityVisit.setAgent1(agentId);

			// unitFacilityVisit.setFreightKind("FCL");
			unitFacilityVisit.setTransitState(Constants.UFV.TRANSIT_INBOUND);
			unitFacilityVisit.setCategory(Category.EXPORT);

			// booking
			unitFacilityVisit.setBooking(new Bkg());
			unitFacilityVisit.getBooking().setId(booking.getNbr());

			// unitFacilityVisit.set

			// line Op
			unitFacilityVisit.setLine(booking.getLine());

			unitFacilityVisit.setTruckingCompany(this.getUserBO().getCurrentUser().getEmpresa().getId().toUpperCase());

			// guarda en unit freight kind
			unitFacilityVisit.setFreightKind(booking.getEqStatus());

			// Agrego el shipperId
			unitFacilityVisit.getContents().setShipperId(booking.getShipperId());

			// unitFacilityVisit.ge
			// this.getUnitFacilityVisitMdwBo().save(unitFacilityVisit);
			this.getUnitFacilityVisitMdwBo().saveUfvReference(reference, unitFacilityVisit);
			re = new ResponseEntity<UnitFacilityVisit>(unitFacilityVisit, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError responseError = new ResponseError();
			if (e instanceof HttpServerErrorException) {
				responseError = extractMdwMessageException(e);
			}
			re = (new ResponseEntity<ResponseError>(responseError, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * POST /api/container-send-mail save or update de un UnitFacilityVisit, si el
	 * container no existe lo crea. Y envía un mail al agente y al usuario de
	 * documental porque hay diferencias al crear el preaviso.
	 * 
	 * @param booking: booking al cuál se va a agregar el unit
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 */
	@RequestMapping(value = "/save-send-mail", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> saveAndSendMail(@RequestBody SaveUfvMailDTO bookingMail)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {

		// Se crea ufv
		Booking booking = bookingMail.getBooking();
		ResponseEntity<?> re = this.saveUfv(booking);
		// se guarda agent
		if ((booking.getAgentId() != null) && (HttpStatus.OK.equals(re.getStatusCode()))) {
			saveAgent(booking, re);
		}
		// Si se pudo crear ufv, se envía mail
		if (re.getStatusCode().equals(HttpStatus.OK)) {
			// Recupera el usuario por el agentID, para obtener el mail
			try {
				String observation = bookingMail.getObservation();
				String bookingNbr = booking.getNbr();
				UnitFacilityVisit unitFacilityVisit = booking.getUnits().get(0);
				String container = unitFacilityVisit.getId();
				// Mensaje para cada usuario de companyId
				List<Map<String, String>> messages = new ArrayList<Map<String, String>>();
				messages.add(buildMessage(observation, bookingNbr, container, null));
				// Mensaje para el usuario de documental
				messages.add(buildMessage(observation, bookingNbr, container, userDocumental));
				this.getNotificationMdwBO().notificate(bookingMail.getBooking().getAgentId(), messages);
			} catch (Exception e) {
				String[] strParams = {};
				String msg = getProperty("Controller.Container.CANT_SEND_PREADVISE_MAIL", strParams,
						getApplicationContext());
				LOG.error(ContainerController.class, e);
				LOG.error(msg);
				ResponseError error = new ResponseError();
				error.setCode("NOT_BLOCKING");
				error.setError(msg);
				error.setMessage(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		return re;
	}

	@RequestMapping(value = {
			"grant-units-holds" }, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> grantUnitsHolds(@RequestBody GrantUnitsHoldsDTO grantUnitsHoldsDTO)
			throws JsonParseException, JsonMappingException, IOException {
		ResponseEntity<?> re = null;
		try {
			for (GrantUnitHoldsDTO u : grantUnitsHoldsDTO.getGrantUnitHoldsDTO()) {
				// La propiedad hasChargeableUnitEvents viene en true si:
				// 1) hay algún evento facturable en estado DRAFT o QUEUED
				// 2) debe día de storage o storage refeer
				// Debo levantar el hold cuando no hay eventos facturables ni deudas, o, en el
				// caso de que haya deuda, el cliente es a crédito y no
				// tiene cargos facturables.
				if (!u.isHasChargeableUnitEvents() && (!u.isHasDebt() || u.isOnAccount())) {
					if (u.isHasHolds()) {
						/***
						 * Provisoriamente no levantar el el hold de pago
						 */
						// this.getHoldPermissionMdwBO().grantHold(u.getUnitNbr(), hold);
						u.setHasHolds(this.getTruckVisitAppointmentMdwBO().unitHasHolds(u.getUnitNbr()));
					}
				}
			}
			re = new ResponseEntity<List<GrantUnitHoldsDTO>>(grantUnitsHoldsDTO.getGrantUnitHoldsDTO(), HttpStatus.OK);
		} catch (Exception e) {
			ResponseError responseError = new ResponseError();
			if (e instanceof HttpServerErrorException) {
				responseError = extractMdwMessageException(e);
			}
			re = (new ResponseEntity<ResponseError>(responseError, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * GET /api/container/:nbr invocación al servicio que retorna un Unit Facility
	 * Visit
	 * 
	 * @param nbr:      número de unit
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/for-booking/{nbr}", method = RequestMethod.GET)
	public @ResponseBody UnitFacilityVisit getUnitForAssociateBooking(@PathVariable String nbr,
			HttpServletRequest request, HttpServletResponse response) throws BusinessException {
		UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().getUnitForAssociateBooking(nbr);
		if (ufv != null) {

		}

		return ufv;
	}

	/**
	 * POST /api/container/preadvise-ero save or update de un UnitFacilityVisit, si
	 * el container no existe lo crea
	 * 
	 * @param ero: ero al cuál se va a agregar el unit
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 */

	@RequestMapping(value = "/preadvise-ero", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> saveEro(@RequestBody EroDTO eroDTO)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {

		ResponseEntity<?> re = null;
		try {
			// nuevo unit para guardar
			UnitFacilityVisit unitFacilityVisit = eroDTO.getUnit();

			unitFacilityVisit.setFreightKind("MTY");
			unitFacilityVisit.setTransitState(Constants.UFV.TRANSIT_INBOUND);
			unitFacilityVisit.setCategory(Category.STORAGE);

			// booking
			ArrayList<TUnitEro> equipmentReceiveOrder = new ArrayList<TUnitEro>();
			TUnitEro tEro = new TUnitEro();
			tEro.setId(eroDTO.getNumber());
			equipmentReceiveOrder.add(tEro);
			unitFacilityVisit.setEquipmentReceiveOrder(equipmentReceiveOrder);

			// line Op
			unitFacilityVisit.setLine(eroDTO.getLine());

			unitFacilityVisit.setTruckingCompany(this.getUserBO().getCurrentUser().getEmpresa().getId().toUpperCase());

			this.getUnitFacilityVisitMdwBo().save(unitFacilityVisit);
			re = new ResponseEntity<UnitFacilityVisit>(unitFacilityVisit, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError responseError = new ResponseError();
			if (e instanceof HttpServerErrorException) {
				responseError = extractMdwMessageException(e);
			}
			re = (new ResponseEntity<ResponseError>(responseError, HttpStatus.BAD_REQUEST));
		}
		return re;

	}

	private Map<String, String> buildMessage(String observation, String bookingNbr, String container, String to) {
		String[] strParams = { bookingNbr };
		String subject = getProperty("Controller.DifferenceCreatedPreadviseEmailSubject", strParams,
				getApplicationContext());
		Map<String, String> message = new HashMap<String, String>();
		if (to != null) {
			message.put("to", to);
		}
		message.put("subject", subject);
		message.put("template", diffCreatePreadviceTemplate);
		message.put("observaciones", observation);
		message.put("container", container);
		return message;
	}

	/**
	 * GET /api/container/validate/:nbr Funcion que Validate el digite de
	 * verificacion del contenedor.
	 * 
	 * @param nbr: número de unit
	 * @return {@link Container}
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/validate/{nbr}", method = RequestMethod.GET)
	public @ResponseBody Integer validate(@PathVariable String nbr) throws BusinessException {
		char[] s;
		String[] ary = new String[11];
		for (int n = 0; n < nbr.length(); n++) {
			char c = nbr.charAt(n);
			ary[n] = String.valueOf(c);
		}
		s = new char[26];
		int k = 0;
		int ki = 0;
		double suma = 0;
		double diferencia = 0;
		for (int i = 0; i < 26; i++) {
			s[i] = (char) ('A' + i);
		}
		for (int i = 0; i < 11; i++) {
			k = 0;
			ki = 0;
			for (int j = 0; j < 26; j++) {
				String caracter = String.valueOf(s[j]);
				if (ary[i].equals(caracter)) {
					suma = suma + ((j + 10 + k) * Math.pow(2, i));
					break;
				}
				if (((j + 10) % 10) == 0) {
					k = (j + 10) / 10;
				}
				ki++;
			}
			if (ki == 26 && i != 10) {
				suma = suma + ((Integer.parseInt(ary[i])) * Math.pow(2, i));
			}
		}
		diferencia = suma % 11;
		if (diferencia == 10) {
			diferencia = 0;
		}
		Integer digito = Integer.parseInt(ary[10]);
		if (diferencia == digito) {
			return 10;
		}
		return (int) diferencia;
	}

	/**
	 * POST /api/container save or update de un UnitFacilityVisit, si el container
	 * no existe lo crea
	 * 
	 * @param booking: booking al cuál se va a agregar el unit
	 * @return {@link UnitFacilityVisit}
	 * @throws Exception
	 */
	@SuppressWarnings({ "unlikely-arg-type", "unused", "unchecked", "null" })
	@RequestMapping(value = "/reference/{reference}/{transferTemplateNbr}/{documenType}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> saveUfvreference(@PathVariable String reference,
			@PathVariable String transferTemplateNbr, @PathVariable String documenType,
			@RequestBody BookingReference booking) throws Exception {

		ResponseEntity<?> re = null;
		String[] params = null;
		ResponseError error = new ResponseError();
		

		try {
			
			transferTemplateNbr = EncoderDecoder.decodeBase64(transferTemplateNbr);
			documenType = EncoderDecoder.decodeBase64(documenType);
			@SuppressWarnings("rawtypes")
			FormResponseDTO formResponseDTO = null;
			List<String> numeroDocumentoSalida = new ArrayList<>();
			Double totalNumeroBultos = 0.0;
			UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();

			
			UnitFacilityVisit unitFacilityVisit = booking.getUnits().get(0);
			
			EquipmentType itemEquipmentType = this.getEquipmentTypeMdwBo().get(unitFacilityVisit.getContainer().getType());
			
			List<BKItemReference> LstBKItem = new ArrayList<BKItemReference>();
			LstBKItem = booking.getItems();
			int index = 0;
			boolean found = false;
			for (BKItemReference item : LstBKItem) {
				String archiso = item.getArchiso();
				
				if (archiso.equals(itemEquipmentType.getArchetype())) {
					found = true;
					break;
				}
			}
			if(!found) {
				//String msg = getProperty("Controller.TruckVisitApp.planilla.NOT_FOUND", params, getApplicationContext());
				error.setError("El Equipment Type ingresado no es válido para el booking");
				re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
				return re;
			}

			if (transferTemplateNbr.equals("null") || transferTemplateNbr == null || documenType.equals("1")
					|| documenType.equals("2") || documenType.equals("3") || documenType.equals("5") || documenType.equals("6")) {
				re = saveUfv(booking, reference, numeroDocumentoSalida, totalNumeroBultos, transferTemplateNbr,
						documenType);
				if ((booking.getAgentId() != null || booking.getShipperId() != null)
						&& (HttpStatus.OK.equals(re.getStatusCode()))) {
					saveAgentReference(booking, re);
				}
			} else {

				if (!transferTemplateNbr.equals("null")) {
					formResponseDTO = unitFacilityVisitService.getTransferForm(transferTemplateNbr);
				}

				if (formResponseDTO != null) {

					if (formResponseDTO.getSuccess() != null) {

						if (formResponseDTO.getSuccess().equals("false")) {

							if (formResponseDTO.getError().contains("Timed Out")) {
								re = saveUfv(booking, reference, numeroDocumentoSalida, totalNumeroBultos,
										transferTemplateNbr, documenType);
								if ((booking.getAgentId() != null || booking.getShipperId() != null)
										&& (HttpStatus.OK.equals(re.getStatusCode()))) {
									saveAgentReference(booking, re);
								}
							}
							

							if (!formResponseDTO.getError().contains("Timed Out")) {
								String msg = getProperty("Controller.TruckVisitApp.planilla.NOT_FOUND", params,
										getApplicationContext());
								error.setError(msg);
								re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
							}

						}
					}

					else {
						numeroDocumentoSalida.addAll(formResponseDTO.getNumeroDocumentoSalida());
						totalNumeroBultos = formResponseDTO.getTotalNumeroBultos();

						if (!formResponseDTO.getCodigoLugarEmbarque().equals("3855") && documenType.equals("4")) {
							String msg = getProperty("Controller.TruckVisitApp.planilla.NOT_BUENAVENTURA", params,
									getApplicationContext());
							error.setError(msg);
							re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
						}

						if ((!formResponseDTO.getAgenciaNumeroIdentificacion().equals(booking.getAgentId()) && !formResponseDTO.getAgenciaNumeroIdentificacion().equals(booking.getAgentId().substring(0, booking.getAgentId().length()-1)))
							//	|| !formResponseDTO.getTransporteNumeroIdentificacion().equals(currentUser.getN4UserId())
								&& documenType.equals("4")) {
							String msg = getProperty("Controller.TruckVisitApp.planilla.NOT_FOUND", params,	getApplicationContext());
							error.setError(msg);
							re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
						}

						if (!formResponseDTO.getNumeroContenedor().replace("-", "")
								.equals(booking.getUnits().get(0).getId()) && documenType.equals("4")) {
							String msg = getProperty("Controller.TruckVisitApp.planilla.NOT_FOUND_CONTAINER", params,
									getApplicationContext());
							error.setError(msg);
							re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
						}

						if (formResponseDTO.getCodigoLugarEmbarque().equals("3855")
								&& (formResponseDTO.getAgenciaNumeroIdentificacion().equals(booking.getAgentId().substring(0, booking.getAgentId().length()-1))	|| formResponseDTO.getAgenciaNumeroIdentificacion().equals(booking.getAgentId()))
								&& documenType.equals("4")) {
							re = saveUfv(booking, reference, numeroDocumentoSalida, totalNumeroBultos,
									transferTemplateNbr, documenType);
							if ((booking.getAgentId() != null || booking.getShipperId() != null)
									&& (HttpStatus.OK.equals(re.getStatusCode()))) {
								saveAgentReference(booking, re);
							}

						}
	
					}

				}
				else if (formResponseDTO == null) {
					re = saveUfv(booking, reference, numeroDocumentoSalida, totalNumeroBultos, transferTemplateNbr,
							documenType);
					if ((booking.getAgentId() != null || booking.getShipperId() != null)
							&& (HttpStatus.OK.equals(re.getStatusCode()))) {
						saveAgentReference(booking, re);
					}
				}
			}

		} catch (Exception e) {
			String msg = e.getMessage();
			LOG.error("::::ERROR::::" + msg);
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return re;

	}

	/**
	 * POST /api/container save or update de un UnitFacilityVisit, si el container
	 * no existe lo crea
	 * 
	 * @param booking: booking al cuál se va a agregar el unit
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 */
	@SuppressWarnings({ "rawtypes", "unlikely-arg-type" })
	@RequestMapping(value = "/save-send-mail/reference/{reference}/{transferTemplateNbr}/{documenType}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> saveAndSendMailReference(@PathVariable String reference,
			@PathVariable String transferTemplateNbr, @PathVariable String documenType,
			@RequestBody SaveUfvMailReferenceDTO saveUfvMailReferenceDTO) throws Exception {
		
		ResponseEntity<?> re = null;
		ResponseError error = new ResponseError();
		String[] params = null;		
		
		try {
			transferTemplateNbr = EncoderDecoder.decodeBase64(transferTemplateNbr);
			documenType = EncoderDecoder.decodeBase64(documenType);
			FormResponseDTO formResponseDTO = null;				
			BookingReference booking = saveUfvMailReferenceDTO.getBooking();
			UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
			

			if (transferTemplateNbr.equals("null") || transferTemplateNbr == null || documenType.equals("1")
					|| documenType.equals("2") || documenType.equals("3") || documenType.equals("5") || documenType.equals("6")) {
				// Se crea ufv

				re = saveUfvReference(booking, reference);
				// se guarda agent
				if ((booking.getAgentId() != null) && (HttpStatus.OK.equals(re.getStatusCode()))) {
					saveAgentReference(booking, re);
				}
			
			} else {
				if (!transferTemplateNbr.equals("null")) {
					formResponseDTO = unitFacilityVisitService.getTransferForm(transferTemplateNbr);
				}
				if (formResponseDTO != null) {

					if (formResponseDTO.getSuccess() != null) {

						if (formResponseDTO.getSuccess().equals("false")) {

							if (formResponseDTO.getError().contains("Timed Out")) {
								re = saveUfvReference(booking, reference);
								
								if ((booking.getAgentId() != null) && (HttpStatus.OK.equals(re.getStatusCode()))) {
									saveAgentReference(booking, re);
								}
							}

							if (!formResponseDTO.getError().contains("Timed Out")) {
								String msg = getProperty("Controller.TruckVisitApp.planilla.NOT_FOUND", params,
										getApplicationContext());
								error.setError(msg);
								re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
							}

						}
					}

					else {

						if (!formResponseDTO.getCodigoLugarEmbarque().equals("3855") && documenType.equals("4")) {
							String msg = getProperty("Controller.TruckVisitApp.planilla.NOT_BUENAVENTURA", params,
									getApplicationContext());
							error.setError(msg);
							re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
						}

						if ((!formResponseDTO.getAgenciaNumeroIdentificacion().equals(booking.getAgentId()) && !formResponseDTO.getAgenciaNumeroIdentificacion().equals(booking.getAgentId().substring(0, booking.getAgentId().length()-1)))
							//	|| !formResponseDTO.getTransporteNumeroIdentificacion().equals(currentUser.getN4UserId()))
								&& documenType.equals("4")) {
							String msg = getProperty("Controller.TruckVisitApp.planilla.NOT_FOUND", params,
									getApplicationContext());
							error.setError(msg);
							re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
						}

						if (!formResponseDTO.getNumeroContenedor().replace("-", "")
								.equals(booking.getUnits().get(0).getId()) && documenType.equals("4")) {
							String msg = getProperty("Controller.TruckVisitApp.planilla.NOT_FOUND_CONTAINER", params,
									getApplicationContext());
							error.setError(msg);
							re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
						}

						if (formResponseDTO.getCodigoLugarEmbarque().equals("3855")
								&& (formResponseDTO.getAgenciaNumeroIdentificacion().equals(booking.getAgentId().substring(0, booking.getAgentId().length()-1))	|| formResponseDTO.getAgenciaNumeroIdentificacion().equals(booking.getAgentId()))					
								&& documenType.equals("4")) {
							re = saveUfvReference(booking, reference);
							if ((booking.getAgentId() != null || booking.getShipperId() != null)
									&& (HttpStatus.OK.equals(re.getStatusCode()))) {
								saveAgentReference(booking, re);
							}

						}
					}

				}
				
				else if (formResponseDTO == null) {
					// Se crea ufv

					re = saveUfvReference(booking, reference);
					// se guarda agent
					if ((booking.getAgentId() != null) && (HttpStatus.OK.equals(re.getStatusCode()))) {
						saveAgentReference(booking, re);
					}
				
				}

			}
			// Si se pudo crear ufv, se envía mail
			if (re.getStatusCode().equals(HttpStatus.OK)) {
				// Recupera el usuario por el agentID, para obtener el mail
				try {
					String observation = saveUfvMailReferenceDTO.getObservation();
					String bookingNbr = booking.getNbr();
					UnitFacilityVisit unitFacilityVisit = booking.getUnits().get(0);
					String container = unitFacilityVisit.getId();
					// Mensaje para cada usuario de companyId
					List<Map<String, String>> messages = new ArrayList<Map<String, String>>();
					messages.add(buildMessage(observation, bookingNbr, container, null));
					// Mensaje para el usuario de documental
					messages.add(buildMessage(observation, bookingNbr, container, userDocumental));
					this.getNotificationMdwBO().notificate(saveUfvMailReferenceDTO.getBooking().getAgentId(),
							messages);
				} catch (Exception e) {
					String[] strParams = {};
					String msg = getProperty("Controller.Container.CANT_SEND_PREADVISE_MAIL", strParams,
							getApplicationContext());
					LOG.error(ContainerController.class, e);
					LOG.error(msg);
					error.setCode("NOT_BLOCKING");
					error.setError(msg);
					error.setMessage(msg);
					re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
				}
			}

		} catch (Exception e) {
			String msg = e.getMessage();
			LOG.error("::::ERROR::::" + msg);
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return re;

	}

	/**
	 * Get /api/container/validate/digitCheck/ Get verification digit check
	 * 
	 * @param String containerNbr: Id new container
	 * @return {@link CheckDigitApprovedDTO[]}
	 * @throws BusinessException
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 */
	@RequestMapping(value = "/validate/digitCheck/{containerNbr}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getVerificationDigitCheck(@PathVariable String containerNbr)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		ResponseEntity<?> re = null;
		CheckDigitApprovedDTO[] response = null;
		try {
			containerNbr = EncoderDecoder.decodeBase64(containerNbr);
			response = containerService.getVerificationDigitCheck(containerNbr);
			if (response.length > 0) {
				re = new ResponseEntity<Boolean>(true, HttpStatus.OK);
				return re;
			}
			re = new ResponseEntity<Boolean>(false, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = { containerNbr };
			String msg = getProperty("Controller.container.validate.digit.check.ERROR", strParams,
					getApplicationContext());
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;

	}

	private ResponseEntity<?> saveUfv(BookingReference booking, String reference, List<String> numeroDocumentoSalida,
			Double totalNumeroBultos, String transferTemplateNbr, String documenType)
			throws JsonParseException, JsonMappingException, IOException {

		ResponseEntity<?> re = null;
		try {
			UnitFacilityVisitDTO unitFacilityVisitDTO = new UnitFacilityVisitDTO();
			// nuevo unit para guardar
			UnitFacilityVisit unitFacilityVisit = booking.getUnits().get(0);

			String documenTypeName = null;
			if (documenType != null && documenType != "") {
				if (documenType.equals("1")) {
					documenTypeName = "Declaracion DUTA";
				} else if (documenType.equals("2")) {
					documenTypeName = "Guia de Transito";
				} else if (documenType.equals("3")) {
					documenTypeName = "Memorial Radicado DIAN";
				} else if (documenType.equals("4")) {
					documenTypeName = "Planilla de traslado";
				} else if (documenType.equals("5")) {
					documenTypeName = "Movimiento de Mercancias";
				}
				else if (documenType.equals("6")) {
					documenTypeName = "Planilla de envío manual";
				}
			}

			// Carriers
			unitFacilityVisit.setRouting(new Routing());
			unitFacilityVisit.getRouting().setCarriers(new ArrayList<Carrier>());

			Carrier carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_IB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_DECLARED);
			carrier.setMode(Constants.UFV.MODE_TRUCK);
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_IB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_ACTUAL);
			carrier.setMode(Constants.UFV.MODE_TRUCK);
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_OB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_DECLARED);
			carrier.setMode(Constants.UFV.MODE_VESSEL);
			carrier.setId(booking.getCarrierVisit());
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			carrier = new Carrier();
			carrier.setDirection(Constants.UFV.DIRECTION_OB);
			carrier.setQualifier(Constants.UFV.QUALIFIER_ACTUAL);
			carrier.setMode(Constants.UFV.MODE_VESSEL);
			carrier.setId(booking.getCarrierVisit());
			unitFacilityVisit.getRouting().getCarriers().add(carrier);

			// unitFacilityVisit.setAgent1(agentId);

			// unitFacilityVisit.setFreightKind("FCL");
			unitFacilityVisit.setTransitState(Constants.UFV.TRANSIT_INBOUND);
			unitFacilityVisit.setCategory(Category.EXPORT);

			// booking
			unitFacilityVisit.setBooking(new Bkg());
			unitFacilityVisit.getBooking().setId(booking.getNbr());

			// unitFacilityVisit.set

			// line Op
			unitFacilityVisit.setLine(booking.getLine());

			unitFacilityVisit.setTruckingCompany(this.getUserBO().getCurrentUser().getEmpresa().getId().toUpperCase());

			// guarda en unit freight kind
			unitFacilityVisit.setFreightKind(booking.getEqStatus());

			// Agrego el shipperId
			unitFacilityVisit.getContents().setShipperId(booking.getShipperId());

			unitFacilityVisitDTO.setReference(reference);
			unitFacilityVisitDTO.setUnitFacilityVisit(unitFacilityVisit);
			unitFacilityVisitDTO.setNumeroDocumentoSalida(numeroDocumentoSalida);
			unitFacilityVisitDTO.setTotalNumeroBultos(totalNumeroBultos);
			unitFacilityVisitDTO.setTransferTemplateNbr(transferTemplateNbr);
			unitFacilityVisitDTO.setDocumenType(documenTypeName);
			unitFacilityVisitDTO.setType("CREATE");
			this.getUnitFacilityVisitMdwBo().saveUfv(unitFacilityVisitDTO);
			re = new ResponseEntity<UnitFacilityVisit>(unitFacilityVisit, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError responseError = new ResponseError();
			if (e instanceof HttpServerErrorException) {
				responseError = extractMdwMessageException(e);
			}
			re = (new ResponseEntity<ResponseError>(responseError, HttpStatus.BAD_REQUEST));
		}
		return re;
	}
	
	
	@RequestMapping(value = "/get-transfer-template/{unitNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getTransferTemplateNbrByUnit(@PathVariable String unitNbr)
			throws BOException {
		ResponseEntity<?> re = null;
		try {
			GenericResponseDTO<String> response = null;
			unitNbr = EncoderDecoder.decodeBase64(unitNbr);
			UnitFacilityVisitDTO unitFacilityVisitDTO = new UnitFacilityVisitDTO();
			unitFacilityVisitDTO.setUnitNbr(unitNbr);
			unitFacilityVisitDTO.setType("GET");
			response = this.getUnitFacilityVisitMdwBo().getUfv(unitFacilityVisitDTO);
			re = new ResponseEntity<GenericResponseDTO<String>>(response, HttpStatus.OK);

		} catch (Exception e) {
			String[] strParams = null;
			String msg = getProperty("Controller.ufv.TransferTemplateNbr.Get.Error", strParams, getApplicationContext());
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/update-transfer-template/{unitNbr}/{transferTemplateNbr}", method = RequestMethod.PUT)
	public @ResponseBody ResponseEntity<?> updateTransferTemplateNbr(@PathVariable String unitNbr,
			@PathVariable String transferTemplateNbr) throws BOException {
		ResponseEntity<?> re = null;
		try {
			GenericResponseDTO<String> response = null;
			unitNbr = EncoderDecoder.decodeBase64(unitNbr);
			transferTemplateNbr = EncoderDecoder.decodeBase64(transferTemplateNbr);
			UnitFacilityVisitDTO unitFacilityVisitDTO = new UnitFacilityVisitDTO();
			@SuppressWarnings("rawtypes")
			FormResponseDTO formResponseDTO = null;
			formResponseDTO = unitFacilityVisitService.getTransferForm(transferTemplateNbr);

			List<String> numeroDocumentoSalida = new ArrayList<>();
			Double totalNumeroBultos = 0.0;
			if (formResponseDTO != null) {
				if (formResponseDTO.getSuccess() != null) {
					if (formResponseDTO.getSuccess().equals("false")) {

						if (formResponseDTO.getError().contains("Timed Out")) {

							unitFacilityVisitDTO.setNumeroDocumentoSalida(numeroDocumentoSalida);
							unitFacilityVisitDTO.setTotalNumeroBultos(totalNumeroBultos);
							unitFacilityVisitDTO.setTransferTemplateNbr(transferTemplateNbr);
							unitFacilityVisitDTO.setUnitNbr(unitNbr);
							unitFacilityVisitDTO.setType("UPDATE");
							response = this.getUnitFacilityVisitMdwBo().updateUfv(unitFacilityVisitDTO);
							re = new ResponseEntity<GenericResponseDTO<String>>(response, HttpStatus.OK);
						}

						if (!formResponseDTO.getError().contains("Timed Out")) {
							String[] params = null;
							String msg = getProperty("Controller.TruckVisitApp.planilla.NOT_FOUND", params,
									getApplicationContext());
							ResponseError error = new ResponseError();
							error.setError(msg);
							re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
						}

					}
				} else {
					numeroDocumentoSalida.addAll(formResponseDTO.getNumeroDocumentoSalida());
					totalNumeroBultos = formResponseDTO.getTotalNumeroBultos();

					unitFacilityVisitDTO.setNumeroDocumentoSalida(numeroDocumentoSalida);
					unitFacilityVisitDTO.setTotalNumeroBultos(totalNumeroBultos);
					unitFacilityVisitDTO.setTransferTemplateNbr(transferTemplateNbr);
					unitFacilityVisitDTO.setUnitNbr(unitNbr);
					unitFacilityVisitDTO.setType("UPDATE");
					response = this.getUnitFacilityVisitMdwBo().updateUfv(unitFacilityVisitDTO);
					re = new ResponseEntity<GenericResponseDTO<String>>(response, HttpStatus.OK);
				}

			}

		} catch (Exception e) {
			String[] strParams = null;
			String msg = getProperty("Controller.ufv.TransferTemplateNbr.Update.Error", strParams, getApplicationContext());
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	// RECIBE LA PETICION ENVIADA DESDE EL FRONT CODIGO ASSIST 13-04-2022
	/**
	 * GET /api/container/getContainerDamageReport/{unitId}/{agentId}
	 * 
	 * @param unitIdEncode: número de unit
	 * @param agentIdEncode: nit de agente logueado
	 * @return ResponseEntity<?>
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/getContainerDamageReport/{unitIdEncode}/{agentIdEncode}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getContainerDamageReport(@PathVariable String unitIdEncode, @PathVariable String agentIdEncode) throws BusinessException {
		ResponseEntity<?> re = null;
		try {
			String unitId = EncoderDecoder.decodeBase64(unitIdEncode);
			String agentId = EncoderDecoder.decodeBase64(agentIdEncode);
			com.spia.services.entities.GenericResponseDTO<String> response = this.getContainerDamageReportMdwBO().getReporter(unitId, agentId);
			re = new ResponseEntity<com.spia.services.entities.GenericResponseDTO<String>>(response, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError error = new ResponseError();
			error.setError("Error Backend Portal");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * GET /api/container/getPDFByLink/{linkEncode}
	 * 
	 * @param link: enlace de recurso compartido donde se ubica el PDF
	 * @return ResponseEntity<?>
	 * @throws BusinessException cuando ocurre un fallo en servicio del mdw.
	 */
	@RequestMapping(value = "/getPDFByLink/{linkEncode}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getPDFByLink(@PathVariable String linkEncode) throws BusinessException {
		ResponseEntity<?> re = null;
		String response = null;
		
		try {
			String link = EncoderDecoder.decodeBase64(linkEncode);
			File file = new File(link);
			if (file.exists()) {
				response = EncoderDecoder.getFileStr(link);
				re = new ResponseEntity<String>(response, HttpStatus.OK);
			} else {
				ResponseError error = new ResponseError();
				error.setError("El Archivo no existe"+link);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			ResponseError error = new ResponseError();
			error.setError("Error Backend Portal");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
}
