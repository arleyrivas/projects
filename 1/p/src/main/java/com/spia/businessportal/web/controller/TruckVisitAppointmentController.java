/**
 * 
 */
package com.spia.businessportal.web.controller;

import com.google.gson.Gson;

import java.io.IOException;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.time.ZoneId;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.DateUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.StreamingHttpOutputMessage.Body;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.annotation.MatrixVariable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spia.businessportal.common.entities.FailedNotification;
import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.PinBreakBulk;
import com.spia.businessportal.common.entities.PinContainerized;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.businessportal.common.entities.TruckVisitAppointmentBreakBulk;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.AppointmentBreakBulkServiceDTO;
import com.spia.businessportal.common.entities.dto.CausalCancellationAppointment;
import com.spia.businessportal.common.entities.dto.DriverDTO;
import com.spia.businessportal.common.entities.dto.DriverValidationDTO;
import com.spia.businessportal.common.entities.dto.HistoryServiceDTO;
import com.spia.businessportal.common.entities.dto.ManisfestDTO;
import com.spia.businessportal.common.entities.dto.ManisfestResponseDTO;
import com.spia.businessportal.common.entities.dto.QuotaServiceDTO;
import com.spia.businessportal.common.entities.dto.SOResponseDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailNotificationDTO;
import com.spia.businessportal.common.entities.dto.TruckValidationDTO;
import com.spia.businessportal.common.entities.dto.TruckVisitAppointmentBreakBulkDTO;
import com.spia.businessportal.common.entities.dto.TruckVisitAppointmentBreakBulkNotifications;
import com.spia.businessportal.common.entities.dto.TruckVisitAppointmentDTO;
import com.spia.businessportal.common.entities.dto.TruckVisitAppointmentServiceDTO;
import com.spia.businessportal.common.entities.dto.TruckVisitNotifications;
import com.spia.businessportal.common.entities.dto.TruckVisitReportDTO;
import com.spia.businessportal.common.entities.dto.UnitOrderDTO;
import com.spia.businessportal.common.entities.dto.WeightDTO;
import com.spia.businessportal.common.entities.dto.WeightServiceDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.filters.PinFilter;
import com.spia.businessportal.common.filters.TruckVisitAppointmentBreakBulkFilter;
import com.spia.businessportal.common.filters.TruckVisitFilter;
import com.spia.businessportal.common.utils.EmptyUtils;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.common.utils.JasperUtils;
import com.spia.businessportal.constant.DateFormatConstant;
import com.spia.businessportal.service.BreakBulkService;
import com.spia.businessportal.service.CustomerService;
import com.spia.businessportal.service.DriverService;
import com.spia.businessportal.service.ManifestService;
import com.spia.businessportal.service.TruckService;
import com.spia.businessportal.service.TruckVisitAppointmentService;
import com.spia.services.entities.AppointmentData;
import com.spia.services.entities.BillOfLading;
import com.spia.services.entities.CancelTransactedAppointmentRequest;
import com.spia.services.entities.CargoLot;
import com.spia.services.entities.Category;
import com.spia.services.entities.Driver;
import com.spia.services.entities.Edo;
import com.spia.services.entities.EqOrderItems.Item;
import com.spia.services.entities.EquipmentType;
import com.spia.services.entities.Ero;
import com.spia.services.entities.GateAppointment;
import com.spia.services.entities.HoldItem;
import com.spia.services.entities.HoldsList;
import com.spia.services.entities.Truck;
import com.spia.services.entities.TruckVisitAppointment;
import com.spia.services.entities.TruckVisitAppointmentPortal;
import com.spia.services.entities.TruckVisitAppointmentRequest;
import com.spia.services.entities.TruckingCompany;
import com.spia.services.entities.Unit;
import com.spia.services.entities.UnitFacilityVisit;
import com.spia.services.entities.UpdateHoldRequest;
import com.spia.services.entities.UpdateTruckVisitBbkRequest;
import com.spia.services.entities.UpdateTruckVisitRequest;
import com.spia.services.entities.UpdateTruckVisitRequestPortal;
import com.spia.services.entities.appointment.TruckVisitAppointmentResponse;
import com.spia.services.entities.billing.Customer;
import com.spia.services.exception.BOException;
import com.spia.services.exception.ServiceException;
import com.spia.services.util.Constants;
import com.spia.servicies.entities.notification.Notification;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;
import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

import com.google.gson.Gson;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import org.springframework.beans.factory.annotation.Value;

import com.google.gson.Gson;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import org.springframework.beans.factory.annotation.Value;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/**
 * @author diego Controlador donde se expone la api de negocios del portal para
 *         los truck visits
 */
@RequestMapping("/api/truckVisitAppointment")
@Controller
public class TruckVisitAppointmentController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(TruckVisitAppointmentController.class);
	
	@Value("#{selectUnitSecurity['tva.activar.seguridad']}")
	private String selectUnitSecurity;
	
	@Value("#{selectUnitReefer['tva.activar.temperatura']}")
	private String selectUnitReefer;
	
	@Value("#{templates['createAppointment']}")
	private String createAppointment;

	@Autowired
	private DriverService driverService;

	@Autowired
	private TruckService truckService;

	@Autowired
	private CustomerService customerService;

	@Autowired
	private ManifestService manifestService;

	@Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;
	

	/**
	 * Banderas para notificaciones por creacion de cita
	 */
	@Value("#{notificationStates['isCreateAppointmentEnabled']}")
	private Boolean isCreateAppointmentEnabled;

	@Autowired
	private BreakBulkService breakBulkService;

	private String roleShipperConsignee = "Shipper/Consignee";
	// Error de N4 a customizar
	private String errorN4 = "There are no appointment openings available for the entered date";
	@Autowired
	private TruckVisitAppointmentService truckVisitAppointmentService;

	@RequestMapping(value = "/{truckVisitNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getTruckVisitByNbr(@PathVariable String truckVisitNbr)
			throws BusinessException {
		ResponseEntity<?> re = null;
		if (this.getTruckVisitAppointmentMdwBO().get(truckVisitNbr) != null) {

			TruckVisitFilter filter = new TruckVisitFilter();
			filter.setNbr(truckVisitNbr);
			filter.setN4UserIdLdap(this.getUserBO().getCurrentUser().getEmpresa().getId());
			List<TruckVisit> truckVisits = this.getTruckVisitBO().search(filter, new Page(1, 0)).getResult();
			if (truckVisits != null && truckVisits.size() > 0) {
				Set<TruckVisitAppointmentBreakBulk> tvabToRemove = new HashSet<TruckVisitAppointmentBreakBulk>();
				truckVisits.get(0).getTruckVisitAppointmentBreakBulk().removeAll(tvabToRemove);
				re = new ResponseEntity<TruckVisit>(truckVisits.get(0), HttpStatus.OK);
			} else {
				ResponseError error = new ResponseError();
				String[] strParams = {};
				String msg = getProperty("MDW.BO.TruckVisitAppointmentRecoveryError", strParams,
						getApplicationContext());
				error.setError(msg);
				error.setMessage(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} else {
			ResponseError error = new ResponseError();
			String[] strParams = {};
			String msg = getProperty("MDW.BO.TruckVisitAppointmentRecoveryError", strParams, getApplicationContext());
			error.setError(msg);
			error.setMessage(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/save-validate", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> saveValidate(@RequestBody TruckVisitAppointmentDTO truckVisitAppointmentDTO)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
		try {LOG.info("PETICION: " + new Gson().toJson(truckVisitAppointmentDTO));} catch (Exception e) {LOG.info("PETICION CATCH: " + e.toString());}
		//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022

		ResponseEntity<?> re = null;
		

		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();

		try {
			// Valido la fecha de reefer y la fecha de storage
			LOG.info("N4 User Id: " + currentUser.getEmpresa().getId());
			re = validateDriverAndTruckByTva(truckVisitAppointmentDTO);
			if (re != null) {
				return re;
			}

			if (truckVisitAppointmentDTO.getUnitsImport() != null
					&& !truckVisitAppointmentDTO.getUnitsImport().isEmpty()) {
				for (UnitOrderDTO unit : truckVisitAppointmentDTO.getUnitsImport()) {
					UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().getSingleUnitById(unit.getUnitNbr(), "1");
					if (ufv != null) {
						Customer customer = null;
						boolean credit = false;
						if (ufv.getBillsOfLading() != null && !ufv.getBillsOfLading().isEmpty()
								&& ufv.getBillsOfLading().get(0).getConsigneeId() != null) {
							customer = this.getCustomerMdwBO().getByIdAndRole(
									ufv.getBillsOfLading().get(0).getConsigneeId(),
									Constants.Billing.ROLES.get(roleShipperConsignee));
							credit = "on account".equals(customer.getStatus().toLowerCase())
									&& "add days to invoice finalized date"
											.equals(customer.getDueDateRule().toLowerCase());
						}

						re = getStorageError(ufv, customer, credit, truckVisitAppointmentDTO.getAppointmentDate());

						if (re != null) {
							return re;
						}
					}
				}
			}
			
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.TruckVisitAppCreationError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError r = new ResponseError();
			String error = e.getMessage();
			LOG.error(error, e);
			r.setError(error);
			if (e instanceof TransactionSystemException) {
				r.setError(msg);
			}
			if (e instanceof HttpServerErrorException) {
				ObjectMapper mapper = new ObjectMapper();
				error = ((HttpServerErrorException) e).getResponseBodyAsString();
				r = mapper.readValue(error, ResponseError.class);
				if (r.getMessage().contains(errorN4))
					r.setError(getProperty("Controller.TruckVisitAppCreationErrorOpeningsNotAvailable", strParams,
							getApplicationContext()));
				else
					r.setError(r.getMessage());
			}
			re = (new ResponseEntity<ResponseError>(r, HttpStatus.BAD_REQUEST));
		}

		//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
		try {LOG.info("RESPUESTA: " + new Gson().toJson(re));} catch (Exception e) {LOG.info("RESPUESTA CATCH: " + e.toString());}
		//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022

		return re;
	}

	/**
	 * Crea y retorna un truck visit con, como máximo, 4 appointments. Dos de
	 * ingreso (Importación y EDO) Dos de egreso (Exportación y ERO) En el caso de
	 * que sean units de un EDO/ERO, si son genéricos no enviará el nro de
	 * contenedor, si no que asociará el appointment al EDO/ERO correspondiente.
	 * Cuando el appointment es para un unit perteneciente a un ERO, también valida
	 * que la fecha de coordinación esté comprendida entre las permitidas por el
	 * ERO.
	 * 
	 * @param truckVisitAppointmentDTO contiene todos el conductor, chofer, fecha y
	 *                                 contenedores que se van a coordinar
	 * @param string TODO
	 * @return {@link TruckVisit}
	 * @throws BusinessException    cuando ocurre un error en los servicios mdw
	 * @throws JsonParseException   cuando ocurre un error de parseo
	 * @throws JsonMappingException cuando ocurre un error de mapeo.
	 * @throws IOException          cuando ocurre un error de base de datos.
	 */
	@RequestMapping(value = "", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> save(@RequestBody TruckVisitAppointmentDTO truckVisitAppointmentDTO, String string)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
		try {
			String str__truckVisitAppointmentDTO = new Gson().toJson(truckVisitAppointmentDTO);
			LOG.info("PETICION: " + string + " : " + str__truckVisitAppointmentDTO);
		} catch(Exception e){
			LOG.info("PETICION CATCH: " + e.toString());
		}
		//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
		
		ResponseEntity<?> re = null;
		TruckVisit truckVisit = null;
		UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
		TruckVisitNotifications truckVisitNotifications = new TruckVisitNotifications();
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
		List<TemplateEmailNotificationDTO> emailsNotificationsClient = new ArrayList<>();
		String containers = "";
		try {
			// Valido la fecha de reefer y la fecha de storage
			LOG.info("N4 User Id: " + currentUser.getEmpresa().getId());
			re = validateDriverAndTruckByTva(truckVisitAppointmentDTO);
			if (re != null) {
				return re;
			}
			TruckVisitAppointmentRequest tv = new TruckVisitAppointmentRequest();

			tv.setAppointmentDate(truckVisitAppointmentDTO.getAppointmentDate());

			tv.getDriver().setCardId(truckVisitAppointmentDTO.getDriver().getCardId());
			tv.getTruck().setLicenseNbr(truckVisitAppointmentDTO.getTruck());
			tv.getTruck().setTruckingCoId(currentUser.getEmpresa().getId());
			

			// Variables auxiliares para guardar los contenedores de edo.
			String firstEdoContainer = null;
			String secondEdoContainer = null;
			String firstEdoNbr = null;
			String secondEdoNbr = null;
			String firstEroContainer = null;
			String secondEroContainer = null;
			String firstEroNbr = null;
			String secondEroNbr = null;

			// Units para impo
			for (UnitOrderDTO unit : truckVisitAppointmentDTO.getUnitsImport()) {
				if (tv.getFirstImportAppointmentContainer().getId() == null) {
					tv.getFirstImportAppointmentContainer().setId(unit.getUnitNbr());
				} else {
					tv.getSecondImportAppointmentContainer().setId(unit.getUnitNbr());
				}
			}

			// Units para expo
			for (UnitOrderDTO unit : truckVisitAppointmentDTO.getUnitsExport()) {
				if (tv.getFirstExportAppointmentContainer().getId() == null) {
					tv.getFirstExportAppointmentContainer().setId(unit.getUnitNbr());
					tv.setFirstVesselVisitId(unit.getVesselVisitId());
					tv.setFirstExportShipperId(unit.getShipperId());
					tv.setFirstExportAppointmentBooking(unit.getOrderNbr());
					tv.setFirstExportAppointmentBookingLine(unit.getLine());
				} else {
					tv.getSecondExportAppointmentContainer().setId(unit.getUnitNbr());
					tv.setSecondVesselVisitId(unit.getVesselVisitId());
					tv.setSecondExportShipperId(unit.getShipperId());
					tv.setSecondExportAppointmentBooking(unit.getOrderNbr());
					tv.setSecondExportAppointmentBookingLine(unit.getLine());
				}
			}

			// Units para edo
			for (UnitOrderDTO unit : truckVisitAppointmentDTO.getUnitsEdo()) {
				if (tv.getFirstEdoNbr() == null) {
					firstEdoContainer = unit.getUnitNbr();
					firstEdoNbr = unit.getOrderNbr();
					if (unit.getUnitNbr().toLowerCase().indexOf("c.") == -1) {
						tv.getFirstEdoAppointmentContainer().setId(unit.getUnitNbr());
					}
					tv.setFirstEdoNbr(unit.getOrderNbr());
				} else {
					secondEdoContainer = unit.getUnitNbr();
					secondEdoNbr = unit.getOrderNbr();
					if (unit.getUnitNbr().toLowerCase().indexOf("c.") == -1) {
						tv.getSecondEdoAppointmentContainer().setId(unit.getUnitNbr());
					}
					tv.setSecondEdoNbr(unit.getOrderNbr());
				}
			}

			// Units para ero
			for (UnitOrderDTO unit : truckVisitAppointmentDTO.getUnitsEro()) {
				if (tv.getFirstEroNbr() == null) {
					firstEroContainer = unit.getUnitNbr();
					firstEroNbr = unit.getOrderNbr();
					Ero ero = this.getEroMdwBo().get(EncoderDecoder.encodeBase64(unit.getOrderNbr()));
					if (ero == null) {
						String[] strParams = { unit.getOrderNbr() };
						String error = getProperty("Controller.EroNoDateConfiguredError", strParams,
								getApplicationContext());
						LOG.error(error);
						ResponseError r = new ResponseError();
						r.setError(error);
						re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
						return re;
					} else if (ero.getEarliestDate() == null || ero.getLatestDate() == null) {
						String[] strParams = { ero.getNumber() };
						String error = getProperty("Controller.EroNoDateConfiguredError", strParams,
								getApplicationContext());
						LOG.error(error);
						ResponseError r = new ResponseError();
						r.setError(error);
						re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
						return re;
					} else {
						if (truckVisitAppointmentDTO.getAppointmentDate().before(ero.getEarliestDate().getTime())
								|| truckVisitAppointmentDTO.getAppointmentDate().after(ero.getLatestDate().getTime())) {
							SimpleDateFormat format1 = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm,
									Locale.ENGLISH);
							String date1 = format1.format(ero.getEarliestDate().getTime());
							String date2 = format1.format(ero.getLatestDate().getTime());
							String[] strParams = { date1, date2 };
							String error = getProperty("Controller.TruckVisitAppDateError", strParams,
									getApplicationContext());
							LOG.error(error);
							ResponseError r = new ResponseError();
							r.setError(error);
							re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
							return re;
						}
						// Valido que no sea un contenedor genérico para agregarlo a los containers del
						// appointment
						if (unit.getUnitNbr().toLowerCase().indexOf("c.") == -1) {
							tv.getFirstEroAppointmentContainer().setId(unit.getUnitNbr());
						}
						tv.setFirstEroNbr(unit.getOrderNbr());
					}
				} else {
					secondEroContainer = unit.getUnitNbr();
					secondEroNbr = unit.getOrderNbr();
					Ero ero = this.getEroMdwBo().get(unit.getOrderNbr());
					if (ero.getEarliestDate() == null || ero.getLatestDate() == null) {
						String[] strParams = { ero.getNumber() };
						String error = getProperty("Controller.EroNoDateConfiguredError", strParams,
								getApplicationContext());
						LOG.error(error);
						ResponseError r = new ResponseError();
						r.setError(error);
						re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
						return re;
					} else {
						if (ero.getEarliestDate().after(truckVisitAppointmentDTO.getAppointmentDate())
								|| ero.getLatestDate().before(truckVisitAppointmentDTO.getAppointmentDate())) {
							SimpleDateFormat format1 = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm,
									Locale.ENGLISH);
							String date1 = format1.format(ero.getEarliestDate().getTime());
							String date2 = format1.format(ero.getLatestDate().getTime());
							String[] strParams = { date1, date2 };
							String error = getProperty("Controller.TruckVisitAppDateError", strParams,
									getApplicationContext());
							LOG.error(error);
							ResponseError r = new ResponseError();
							r.setError(error);
							re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
							return re;
						}
						if (unit.getUnitNbr().toLowerCase().indexOf("c.") == -1) {
							tv.getSecondEroAppointmentContainer().setId(unit.getUnitNbr());
						}
						tv.setSecondEroNbr(unit.getOrderNbr());
					}
				}
			}
			tv.setManifestNbr(truckVisitAppointmentDTO.getManifestNbr());
			if (truckVisitAppointmentDTO.getRule().equals("null") || truckVisitAppointmentDTO.getRule().equals("AGUADULCE")) {
				tv.setRule("SPIA MANUAL");
			} 
			if (truckVisitAppointmentDTO.getRule().equals("EXTERNO1")) {
				tv.setRule("SPIA_EXTERNO");
			} 
			if (truckVisitAppointmentDTO.getRule().equals("EXTERNO2")) {
				tv.setRule("SPIA_EXT_2");
			}
			if (truckVisitAppointmentDTO.getRule().equals("EXTERNO3")) {
				tv.setRule("SPIA_EXT_3");
			}

			// ASSIST-IT 01-07-2022
			//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
			try {LOG.info("PETICION: " + new Gson().toJson(tv));} catch (Exception e) {LOG.info("PETICION CATCH: " + e.toString());}
			//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
			TruckVisitAppointment truckVisitAppointmentValidation = this.truckVisitAppointmentService.appointmentValidate(tv);
			//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
			try {LOG.info("RESPUESTA: " + new Gson().toJson(truckVisitAppointmentValidation));} catch (Exception e) {LOG.info("RESPUESTA CATCH: " + e.toString());}
			//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022

			if(  truckVisitAppointmentValidation != null && truckVisitAppointmentValidation.getError() == null ){

				//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
				try {LOG.info("PETICION: " + new Gson().toJson(tv));} catch (Exception e) {LOG.info("PETICION CATCH: " + e.toString());}
				//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022			
				TruckVisitAppointment truckVisitAppointment = this.getTruckVisitAppointmentMdwBO().saveAppointment(tv);
				//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
				try {LOG.info("RESPUESTA: " + new Gson().toJson(truckVisitAppointment));} catch (Exception e) {LOG.info("RESPUESTA CATCH: " + e.toString());}
				//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022

				String notificationUnits = null;
				if (truckVisitAppointment != null && (truckVisitAppointment.getError() == null
						|| (truckVisitAppointment.getError() != null && truckVisitAppointment.getError().isEmpty()))) {
					truckVisit = new TruckVisit();
					truckVisit.setPinNbr(truckVisitAppointmentDTO.getPinNbr());
					truckVisit.setTruckVisitNbr(truckVisitAppointment.getNbr());
					truckVisit.setDriver(truckVisitAppointmentDTO.getDriver());
					truckVisit.setTruck(tv.getTruck().getLicenseNbr().trim());
	
					for (GateAppointment app : truckVisitAppointment.getGateApptSet()) {
						if (app.getCtrId().equals(tv.getFirstImportAppointmentContainer().getId())) {
							LOG.info("Setea first app de impo");
							notificationUnits = notificationUnitsString(app.getCtrId(), notificationUnits);
							truckVisit.setFirstAppointmentImport(app.getNbr());
							truckVisit.setFirstContainerImport(app.getCtrId());
							truckVisit.setFirstContainerImportTwenty(
									truckVisitAppointmentDTO.getUnitsImport().get(0).isTwenty());
							truckVisit.setFirstAppointmentImportOrder(
									truckVisitAppointmentDTO.getUnitsImport().get(0).getOrderNbr());
							if (truckVisitAppointmentDTO.getUnitsImport().get(0).getIsDropOffExport()) {
								truckVisit.setFirstTransTypeImport("PUE");
							}
						}
						if (app.getCtrId().equals(tv.getSecondImportAppointmentContainer().getId())) {
							LOG.info("Setea second app de impo");
							notificationUnits = notificationUnitsString(app.getCtrId(), notificationUnits);
							truckVisit.setSecondAppointmentImport(app.getNbr());
							truckVisit.setSecondContainerImport(app.getCtrId());
							truckVisit.setSecondContainerImportTwenty(
									truckVisitAppointmentDTO.getUnitsImport().get(1).isTwenty());
							truckVisit.setSecondAppointmentImportOrder(
									truckVisitAppointmentDTO.getUnitsImport().get(1).getOrderNbr());
							if (truckVisitAppointmentDTO.getUnitsImport().get(1).getIsDropOffExport()) {
								truckVisit.setSecondTransTypeImport("PUE");
							}
						}
						if (app.getCtrId().equals(tv.getFirstExportAppointmentContainer().getId())) {
							LOG.info("Setea first app de expo");
							notificationUnits = notificationUnitsString(app.getCtrId(), notificationUnits);
							truckVisit.setFirstAppointmentExport(app.getNbr());
							truckVisit.setFirstContainerExport(app.getCtrId());
							truckVisit.setFirstContainerExportTwenty(
									truckVisitAppointmentDTO.getUnitsExport().get(0).isTwenty());
							truckVisit.setFirstAppointmentExportOrder(
									truckVisitAppointmentDTO.getUnitsExport().get(0).getOrderNbr());
						}
						if (app.getCtrId().equals(tv.getSecondExportAppointmentContainer().getId())) {
							LOG.info("Setea second app de expo");
							notificationUnits = notificationUnitsString(app.getCtrId(), notificationUnits);
							truckVisit.setSecondAppointmentExport(app.getNbr());
							truckVisit.setSecondContainerExport(app.getCtrId());
							truckVisit.setSecondContainerExportTwenty(
									truckVisitAppointmentDTO.getUnitsExport().get(1).isTwenty());
							truckVisit.setSecondAppointmentExportOrder(
									truckVisitAppointmentDTO.getUnitsExport().get(1).getOrderNbr());
						}
						if (app.getCtrId().equals(tv.getFirstEdoAppointmentContainer().getId())) {
							LOG.info("Setea first app de edo");
							notificationUnits = notificationUnitsString(app.getCtrId(), notificationUnits);
							truckVisit.setFirstAppointmentEdo(app.getNbr());
							truckVisit.setFirstEdoNbr(firstEdoNbr);
							truckVisit.setFirstContainerEdo(firstEdoContainer);
							truckVisit.setFirstContainerEdoTwenty(truckVisitAppointmentDTO.getUnitsEdo().get(0).isTwenty());
						}
						if (app.getCtrId().equals(tv.getSecondEdoAppointmentContainer().getId())) {
							LOG.info("Setea second app de edo");
							notificationUnits = notificationUnitsString(app.getCtrId(), notificationUnits);
							truckVisit.setSecondAppointmentEdo(app.getNbr());
							truckVisit.setSecondEdoNbr(secondEdoNbr);
							truckVisit.setSecondContainerEdo(secondEdoContainer);
							truckVisit
									.setSecondContainerEdoTwenty(truckVisitAppointmentDTO.getUnitsEdo().get(1).isTwenty());
						}
						if (app.getCtrId().equals(tv.getFirstEroAppointmentContainer().getId())) {
							LOG.info("Setea first app de ero");
							notificationUnits = notificationUnitsString(app.getCtrId(), notificationUnits);
							truckVisit.setFirstAppointmentEro(app.getNbr());
							truckVisit.setFirstEroNbr(firstEroNbr);
							truckVisit.setFirstContainerEro(firstEroContainer);
							truckVisit.setFirstContainerEroTwenty(truckVisitAppointmentDTO.getUnitsEro().get(0).isTwenty());
						}
						if (app.getCtrId().equals(tv.getSecondEroAppointmentContainer().getId())) {
							LOG.info("Setea second app de ero");
							notificationUnits = notificationUnitsString(app.getCtrId(), notificationUnits);
							truckVisit.setSecondAppointmentEro(app.getNbr());
							truckVisit.setSecondEroNbr(secondEroNbr);
							truckVisit.setSecondContainerEro(secondEroContainer);
							truckVisit
									.setSecondContainerEroTwenty(truckVisitAppointmentDTO.getUnitsEro().get(1).isTwenty());
						}
						// FIXME refactorizar urgente
						if (app.getCtrId().isEmpty()) {
							if ("pick up empty".equals(app.getTransType().toLowerCase())) {
								if (!truckVisitAppointmentDTO.getUnitsEdo().isEmpty()) {
									if (truckVisit.getFirstAppointmentEdo() == null) {
										truckVisit.setFirstAppointmentEdo(app.getNbr());
										truckVisit.setFirstEdoNbr(firstEdoNbr);
										truckVisit.setFirstContainerEdo(firstEdoContainer);
										truckVisit.setFirstContainerEdoTwenty(
												truckVisitAppointmentDTO.getUnitsEdo().get(0).isTwenty());
									} else {
										if (truckVisitAppointmentDTO.getUnitsEdo().size() > 1) {
											truckVisit.setSecondAppointmentEdo(app.getNbr());
											truckVisit.setSecondEdoNbr(secondEdoNbr);
											truckVisit.setSecondContainerEdo(secondEdoContainer);
											truckVisit.setSecondContainerEdoTwenty(
													truckVisitAppointmentDTO.getUnitsEdo().get(1).isTwenty());
										}
									}
								}
							}
							if ("drop off empty".equals(app.getTransType().toLowerCase())) {
								if (!truckVisitAppointmentDTO.getUnitsEro().isEmpty()) {
									if (truckVisit.getFirstAppointmentEro() == null) {
										truckVisit.setFirstAppointmentEro(app.getNbr());
										truckVisit.setFirstEroNbr(firstEroNbr);
										truckVisit.setFirstContainerEro(firstEroContainer);
										truckVisit.setFirstContainerEroTwenty(
												truckVisitAppointmentDTO.getUnitsEro().get(0).isTwenty());
									} else {
										if (truckVisitAppointmentDTO.getUnitsEro().size() > 1) {
											truckVisit.setSecondAppointmentEro(app.getNbr());
											truckVisit.setSecondEroNbr(secondEroNbr);
											truckVisit.setSecondContainerEro(secondEroContainer);
											truckVisit.setSecondContainerEroTwenty(
													truckVisitAppointmentDTO.getUnitsEro().get(1).isTwenty());
										}
									}
								}
							}
						}
					}
					truckVisit.setCreatedByLDAP(currentUser.getUserName());
					truckVisit.setCompanyIdLdap(currentUser.getEmpresa().getId());
					String[] date = StringUtils.split(truckVisitAppointment.getDate(), " ");
					SimpleDateFormat format = new SimpleDateFormat("yy-MMM-dd HH:mm", Locale.ENGLISH);
					Date truckVisitDate = format
							.parse(date[0] + " " + StringUtils.left(date[1], 2) + ":" + StringUtils.right(date[1], 2));
					truckVisit.setAppointmentDate(truckVisitDate);
					try {
						
						// Marca que indica que la cita se tomo con salto de regla
						truckVisit.setSkipEmptyRule(truckVisitAppointment.getSkipEmptyRule());

						//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
						try {LOG.info("PETICION: " + new Gson().toJson(truckVisit));} catch (Exception e) {LOG.info("PETICION CATCH: " + e.toString());}
						//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
						TruckVisit tvr = this.getTruckVisitBO().saveNew(truckVisit); // creando la cita
						//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
						try {LOG.info("RESPUESTA: " + new Gson().toJson(tvr));} catch (Exception e) {LOG.info("RESPUESTA CATCH: " + e.toString());}
						//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022

						//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
						try {LOG.info("BANDERA isCreateAppointmentEnabled: " + isCreateAppointmentEnabled);} catch (Exception e) {LOG.info("BANDERA CATCH: " + e.toString());}
						//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
	
						// TODO Email Notification
						if (isCreateAppointmentEnabled) {
							try {
								sendNotificationAppointment(truckVisit, "APPOINTMENT_CREATE",
										this.buildMessages(truckVisit));
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
						if (truckVisit.getFirstContainerImport() != null && truckVisit.getSecondContainerImport() != null) {
							containers = containers.concat(truckVisit.getFirstContainerImport()).concat(",")
									.concat(truckVisit.getSecondContainerImport());
						} else if (truckVisit.getFirstContainerImport() != null) {
							containers = containers.concat(truckVisit.getFirstContainerImport()).concat(",");
						} else if (truckVisit.getSecondContainerImport() != null) {
							containers = containers.concat(truckVisit.getSecondContainerImport()).concat(",");
						}
	
						if (truckVisit.getFirstContainerExport() != null && truckVisit.getSecondContainerExport() != null) {
							containers = containers.concat(truckVisit.getFirstContainerExport()).concat(",")
									.concat(truckVisit.getSecondContainerExport());
						} else if (truckVisit.getFirstContainerExport() != null) {
							containers = containers.concat(truckVisit.getFirstContainerExport()).concat(",");
						} else if (truckVisit.getSecondContainerExport() != null) {
							containers = containers.concat(truckVisit.getSecondContainerExport().concat(","));
						}
	
						emailsNotificationsClient = customerService.getShippersMailsByContainersOrHbls(containers,
								"Container");
	
						truckVisitNotifications = copyTruckVisit(truckVisit, emailsNotifications, emailsNotificationsClient,
								containers);
						if (truckVisitAppointmentDTO.getRule().equals("null") || truckVisitAppointmentDTO.getRule().equals("AGUADULCE")) {
							truckVisitNotifications.setLocation("Puerto Aguadulce");
							truckVisitNotifications.setSiteAppointment("AGUADULCE");
						} else if (truckVisitAppointmentDTO.getRule().equals("EXTERNO1")){
							truckVisitNotifications.setLocation("Zona Franca Celpa");
							truckVisitNotifications.setSiteAppointment("EXTERNO1");
						}
						else if (truckVisitAppointmentDTO.getRule().equals("EXTERNO2")){
							truckVisitNotifications.setLocation("Patio ZAL");
							truckVisitNotifications.setSiteAppointment("EXTERNO2");
						}
						else if (truckVisitAppointmentDTO.getRule().equals("EXTERNO3")){
							truckVisitNotifications.setLocation("CY de Colombia SAS");
							truckVisitNotifications.setSiteAppointment("EXTERNO3");
						}
						truckVisit.setIsHazard(truckVisitAppointmentDTO.getIsHazard());
						re = (new ResponseEntity<TruckVisitNotifications>(truckVisitNotifications, HttpStatus.OK));
						// re = (new ResponseEntity<TruckVisit>(truckVisit, HttpStatus.OK));
					} catch (TransactionSystemException transactionSystemException) {
						this.executeCancelTruckVisit(truckVisit, "000","");
						String[] strParams = { truckVisit.getTruckVisitNbr() };
						LOG.error(getProperty("Controller.TruckVisitSynchronizationError", strParams,
								getApplicationContext()), transactionSystemException);
					}
				} else {
					if (truckVisitAppointment != null && truckVisitAppointment.getError() != null
							&& !truckVisitAppointment.getError().isEmpty()) {
						String[] strParams = { truckVisitAppointment.getError() };
						String error = getProperty("Controller.TruckVisitAppCreationError", strParams,
								getApplicationContext());
						LOG.error(error);
						ResponseError r = new ResponseError();
						r.setError(truckVisitAppointment.getError());
						re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
					}
				}
			} else {
				if (truckVisitAppointmentValidation != null && truckVisitAppointmentValidation.getError() != null
						&& !truckVisitAppointmentValidation.getError().isEmpty()) {
					String[] strParams = { truckVisitAppointmentValidation.getError() };
					String error = getProperty("Controller.TruckVisitAppCreationError", strParams,
							getApplicationContext());
					LOG.error(error);
					ResponseError r = new ResponseError();
					r.setError(truckVisitAppointmentValidation.getError());
					re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
				}
			}
		 
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.TruckVisitAppCreationError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError r = new ResponseError();
			String error = e.getMessage();
			System.out.println("**********ERROR AL CREAR CITA*************************");
			LOG.error(error, e);
			System.out.println("*******************************************************");
			r.setError(error);
			if (e instanceof TransactionSystemException) {
				r.setError(msg);
			}
			if (e instanceof HttpServerErrorException) {
				ObjectMapper mapper = new ObjectMapper();
				error = ((HttpServerErrorException) e).getResponseBodyAsString();
				r = mapper.readValue(error, ResponseError.class);
				if (r.getMessage().contains(errorN4))
					r.setError(getProperty("Controller.TruckVisitAppCreationErrorOpeningsNotAvailable", strParams,
							getApplicationContext()));
				else
					r.setError(r.getMessage());
			}
			re = (new ResponseEntity<ResponseError>(r, HttpStatus.BAD_REQUEST));
		}

		//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
		try {LOG.info("RESPUESTA: " + new Gson().toJson(re));} catch (Exception e) {LOG.info("RESPUESTA CATCH: " + e.toString());}
		//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
		return re;
	}

	private ResponseEntity<ResponseError> getStorageError(UnitFacilityVisit ufv, Customer customer, boolean credit,
			Date appointmentDate) {
		ResponseEntity<ResponseError> re = null;
		boolean validateError = false;
		Date date = null;
		String errorStr = null;
		String unitNbr = null;
		if (ufv.getReefer() != null && customer != null && customer.getStatus() != null) {
			if (ufv.getPowerPaidThruDay() != null) {
				Calendar cal = Calendar.getInstance();
				cal.setTime(ufv.getPowerPaidThruDay());
				cal.set(Calendar.HOUR_OF_DAY, 23);
				cal.set(Calendar.MINUTE, 59);
				cal.set(Calendar.SECOND, 59);
				Date storageDate = cal.getTime();
				validateError = appointmentDate.after(storageDate);
				date = ufv.getPowerPaidThruDay();
				errorStr = "Controller.PowerPaidThruDayError";
			} else {
				if (ufv.getPowerLastFreeDay() != null) {
					Calendar cal = Calendar.getInstance();
					cal.setTime(ufv.getPowerLastFreeDay());
					cal.set(Calendar.HOUR_OF_DAY, 23);
					cal.set(Calendar.MINUTE, 59);
					cal.set(Calendar.SECOND, 59);
					Date storageDate = cal.getTime();
					validateError = appointmentDate.after(storageDate);
					date = ufv.getPowerLastFreeDay();
					errorStr = "Controller.PowerPaidThruDayError";
				}
			}
			unitNbr = ufv.getId();
		} else {
			// valida fecha de storage
			if (ufv.getStorage() != null && customer != null && customer.getStatus() != null) {
				if (ufv.getStorage().getStoragePaidthruDay() != null) {
					Calendar cal = Calendar.getInstance();
					cal.setTime(ufv.getStorage().getStoragePaidthruDay());
					cal.set(Calendar.HOUR_OF_DAY, 23);
					cal.set(Calendar.MINUTE, 59);
					cal.set(Calendar.SECOND, 59);
					Date storageDate = cal.getTime();
					validateError = appointmentDate.after(storageDate);
					date = ufv.getStorage().getStoragePaidthruDay();
					errorStr = "Controller.TruckVisitAppUpdateErrorStorageDate";
				} else {
					if (ufv.getStorage().getStorageLastFreeDay() != null) {
						Calendar cal = Calendar.getInstance();
						cal.setTime(ufv.getStorage().getStorageLastFreeDay());
						cal.set(Calendar.HOUR_OF_DAY, 23);
						cal.set(Calendar.MINUTE, 59);
						cal.set(Calendar.SECOND, 59);
						Date storageDate = cal.getTime();
						validateError = appointmentDate.after(storageDate);
						date = ufv.getStorage().getStorageLastFreeDay();
						errorStr = "Controller.TruckVisitAppUpdateErrorStorageDate";
					}
				}
				unitNbr = ufv.getId();
			}
		}

		if (validateError) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
			ResponseError responseError = new ResponseError();
			String[] strParams = { unitNbr, sdf.format(date) };
			String error = getProperty(errorStr, strParams, getApplicationContext());
			responseError.setMessage(error);
			responseError.setError(error);
			re = new ResponseEntity<ResponseError>(responseError, HttpStatus.OK);
		}

		return re;
	}

	/**
	 * POST /api/truckVisitAppointment/breakbulk
	 * 
	 * Crea y retorna un truck visit para carga suelta en N4 y guarda en la base de
	 * datos la información de los bl de impo y expo con sus cantidades
	 * 
	 * 
	 * @param truckVisitAppointmentDTO contiene todos el conductor, chofer, fecha y
	 *                                 cantidades que se van a coordinar
	 * @return {@link TruckVisit}
	 * @throws BusinessException    cuando ocurre un error en los servicios mdw
	 * @throws JsonParseException   cuando ocurre un error de parseo
	 * @throws JsonMappingException cuando ocurre un error de mapeo.
	 * @throws IOException          cuando ocurre un error de base de datos.
	 * @throws ParseException
	 */
	@RequestMapping(value = "/break-bulk", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> saveBreakbulk(
			@RequestBody TruckVisitAppointmentBreakBulkDTO truckVisitAppointmentBreakBulkDTO)
			throws BusinessException, JsonParseException, JsonMappingException, IOException, ParseException {
		ResponseEntity<?> re = null;
		//LOG.info("Inicia el proceso de creación de la cita de carga suelta");
		//LOG.info("fecha: " + truckVisitAppointmentBreakBulkDTO.getAppointmentDate());
		TruckVisitAppointmentBreakBulk truckVisitAppointmentBreakBulk = null;
		TruckVisitAppointmentBreakBulk truckVisitAppointmentBreakBulkResponse = new TruckVisitAppointmentBreakBulk();
		PinContainerized pinContainerized = null;
		String referenceNbr = "";
		DecimalFormatSymbols simbolos = new DecimalFormatSymbols();
		simbolos.setDecimalSeparator('.');
		DecimalFormat formateador = new DecimalFormat("#.##", simbolos);
		TruckVisitAppointmentBreakBulkNotifications truckVisitAppointmentBreakBulkNotifications = new TruckVisitAppointmentBreakBulkNotifications();
		List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
		//LOG.info("Inicia el proceso de creación de la cita de carga suelta 2");
		try {
			//LOG.info("Inicia el proceso de creación de la cita de carga suelta 3");
			WeightDTO weightDTO = new WeightDTO();
			weightDTO.setTruck(truckVisitAppointmentBreakBulkDTO.getTruck());
			weightDTO.setAppointmentDate(truckVisitAppointmentBreakBulkDTO.getAppointmentDate());
			WeightServiceDTO[] response = breakBulkService.getWeightControl(weightDTO.getTruck(),
					weightDTO.getAppointmentDate());
			Boolean validate = validateTva(response, truckVisitAppointmentBreakBulkDTO);
			List<String> pinInfoList = truckVisitAppointmentBreakBulkDTO.getPinInfoList();
			//LOG.info("Inicia el proceso de creación de la cita de carga suelta 4");
			if (validate) {
				ResponseError error = new ResponseError();
				String[] strParams = null;
				String msg = getProperty("Controller.TruckVisitAppCreationError", strParams, getApplicationContext());
				error.setError(msg);
				return re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
			//LOG.info("Inicia el proceso de creación de la cita de carga suelta 5");
			UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
			DriverDTO[] responseDriver = null;
			DriverValidationDTO[] responseD = null;
			responseDriver = driverService.driverValidation(truckVisitAppointmentBreakBulkDTO.getDriver().getCardId());
			List<CargoLot> cargoLotsList = truckVisitAppointmentBreakBulkDTO.getCargoLots();
			String cargoLots = "";		
			//LOG.info("Inicia el proceso de creación de la cita de carga suelta 6");	
			if (cargoLotsList != null ) {
				for (CargoLot o : cargoLotsList) {
					if (!cargoLots.contains(o.getCargoLotId())) {						
						if (cargoLots.equals("")) {
							cargoLots = cargoLots.concat(o.getCargoLotId());
						} else {
							cargoLots = cargoLots.concat(",").concat(o.getCargoLotId());
						}
					}
				}
			}	
			//LOG.info("Inicia el proceso de creación de la cita de carga suelta 7");							
			truckVisitAppointmentBreakBulkDTO.setIsHazard(this.validateHazardApp(cargoLots));	
			responseD = driverService.driverValidationByDateService(
					truckVisitAppointmentBreakBulkDTO.getDriver().getCardId(),
					truckVisitAppointmentBreakBulkDTO.getAppointmentDate(), truckVisitAppointmentBreakBulkDTO.getIsHazard() );
			//LOG.info("Inicia el proceso de creación de la cita de carga suelta 8");
			if ((responseDriver != null && responseDriver.length > 0 && responseDriver[0].getValidacion() != null)
					|| (responseD != null && responseD.length > 0 && responseD[0].getData() != null)) {
				String[] strParams = null;
				List<String> strParamss = new ArrayList<>();
				strParamss.add(truckVisitAppointmentBreakBulkDTO.getDriver().getName());
				for (DriverDTO driverDTO : responseDriver) {
					if (driverDTO.getValidacion() != null) {
						strParamss.add(driverDTO.getValidacion());
					}

				}
				for (DriverValidationDTO driverValidationDTO : responseD) {
					if (driverValidationDTO.getData() != null) {
						strParamss.add(driverValidationDTO.getData());
					}
				}
				strParams = strParamss.toArray(new String[strParamss.size()]);
				String error = "";
				if (strParamss.toString().contains("peligrosa")) {
					error = getProperty("Controller.TruckVisitAppointment.error.DRIVER_WITHOUT_PERMISSION_HAZARD", strParams,getApplicationContext());
				}
					
				else {error = getProperty("Controller.TruckVisitAppointment.error.DRIVER_NOT_EXIST", strParams,	getApplicationContext());
				}
				LOG.error(error);
				ResponseError r = new ResponseError();
				r.setError(error);
				re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
				return re;
			}
			//LOG.info("Inicia el proceso de creación de la cita de carga suelta 9");

		} catch (Exception e) {
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.TruckVisitAppCreationError", strParams, getApplicationContext());
			error.setError(msg);
			LOG.error(msg, e);
			return re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}

		try {
			//LOG.info("Inicia el proceso de creación de la cita de carga suelta 10");
			UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
			//LOG.info("Inicia el proceso de creación de la cita de carga suelta 11");
			/* Crear la Truck Visit Appointment */
			//LOG.info("linea 984");
			TruckVisitAppointmentRequest tv = new TruckVisitAppointmentRequest();
			tv.setAppointmentDate(truckVisitAppointmentBreakBulkDTO.getAppointmentDate());
			tv.getDriver().setCardId(truckVisitAppointmentBreakBulkDTO.getDriver().getCardId());
			tv.getTruck().setLicenseNbr(truckVisitAppointmentBreakBulkDTO.getTruck());
			tv.getTruck().setTruckingCoId(currentUser.getEmpresa().getId());
			tv.setManifestNbr(truckVisitAppointmentBreakBulkDTO.getManifestNbr());
			//LOG.info("linea 990");
			tv.setInformationAppointment(truckVisitAppointmentBreakBulkDTO.getInformationAppointment());
			//LOG.info("linea 992");
			TruckVisitAppointmentPortal truckVisitAppointment = this.getTruckVisitAppointmentMdwBO()
					.saveAppointmentBreakBulk(tv);
			//LOG.info("linea 995");

			/* Crear la cita en la tabla truck_visit_appointment_breakbulk */
			//LOG.info("error: " + truckVisitAppointment.getError());
			

			if (truckVisitAppointment != null && (truckVisitAppointment.getError() == null
					|| (truckVisitAppointment.getError() != null && truckVisitAppointment.getError().isEmpty()))) {
				String[] arrOfPins = truckVisitAppointmentBreakBulkDTO.getPinNbr().split(",");
				//LOG.info("arrOfPins: " + arrOfPins);
				for (String pinItem : arrOfPins) {
					PinFilter pinFilter = new PinFilter();
					pinFilter.setActive(true);
					pinFilter.setPinNbr(pinItem);
					pinFilter.setTruckingCompanyLDAP(currentUser.getEmpresa().getId());
					List<Pin> pins = this.getPinBO().search(pinFilter, new Page(1, 0)).getResult();

					for (Pin pin : pins) {
						truckVisitAppointmentBreakBulk = new TruckVisitAppointmentBreakBulk();
						truckVisitAppointmentBreakBulk.setTruckVisitAppointmentNbr(truckVisitAppointment.getNbr());
						truckVisitAppointmentBreakBulk.setPin(pin.getId().toString());
						truckVisitAppointmentBreakBulk.setState(truckVisitAppointment.getState());
						truckVisitAppointmentBreakBulk.setTruck(truckVisitAppointmentBreakBulkDTO.getTruck());
						truckVisitAppointmentBreakBulk.setCompanyIdLdap(currentUser.getEmpresa().getId());
						truckVisitAppointmentBreakBulk
								.setLicense(truckVisitAppointmentBreakBulkDTO.getDriver().getCardId());
						String[] date = StringUtils.split(truckVisitAppointment.getDate(), " ");
						SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm", Locale.ENGLISH);
						//LOG.info("date date " + date);
						Date truckVisitDate = format.parse(
								date[0] + " " + StringUtils.left(date[1], 2) + ":" + StringUtils.right(date[1], 2));
						truckVisitAppointmentBreakBulk.setAppointmentDate(truckVisitDate);
						truckVisitAppointmentBreakBulk.setCreatedByLdap(currentUser.getUserName());
						truckVisitAppointmentBreakBulk
								.setManifestNbr(truckVisitAppointmentBreakBulkDTO.getManifestNbr());
						try {
							long quantity = 0;
							double weigth = 0;
							truckVisitAppointmentBreakBulkResponse = this.getTruckVisitAppointmentBreakBulkBO()
									.saveNew(truckVisitAppointmentBreakBulk);
							for (PinContainerized pinCont : pin.getPinContainerized()) {
								pinContainerized = new PinContainerized();
								pinContainerized = pinCont;
								for (CargoLot cargoLot : truckVisitAppointmentBreakBulkDTO.getCargoLots()) {
									if (cargoLot.getCargoLotId().equals(pinCont.getUnitNbr())) {
										pinContainerized.setTruckVisitAppointmetId(Long
												.parseLong(truckVisitAppointmentBreakBulkResponse.getId().toString()));
										this.getPinContainerizedBO().saveOrUpdate(pinContainerized);
										quantity = quantity + pinContainerized.getCargoQuantity();
										weigth = weigth + pinContainerized.getCargoWeigth();
									}
								}
							}
							/* if (referenceNbr.equals("")) {
								referenceNbr = referenceNbr
										.concat(arrOfPins.length + "~" + truckVisitAppointment.getNbr() + "|"
												+ pin.getBlNbr().toString() + ",Q-" + quantity + ",P-"
												+ formateador.format(weigth) + ",T-" + currentUser.getEmpresa().getCompanyName());
							} else {
								referenceNbr = referenceNbr.concat("//" + pin.getBlNbr().toString() + ",Q-" + quantity
										+ ",P-" + formateador.format(weigth) + ",T-" + currentUser.getEmpresa().getCompanyName());
							} */

						} catch (TransactionSystemException transactionSystemException) {
							this.executeCancelTruckVisitBreakBulk(truckVisitAppointmentBreakBulk);
						}

					}

				}
				/* UpdateTruckVisitBbkRequest updateTruckVisitBbkRequest = new UpdateTruckVisitBbkRequest();
				updateTruckVisitBbkRequest.setTvaNbr(truckVisitAppointment.getNbr());
				updateTruckVisitBbkRequest.setReferenceNbr(referenceNbr);
				updateTruckVisitBbkRequest.setType("CREATED"); 
				TruckVisitAppointment truckVisitAppointmentBbk = this.getTruckVisitAppointmentMdwBO()
						.updatReferenceNbr(updateTruckVisitBbkRequest);*/
				truckVisitAppointmentBreakBulkNotifications = copyTruckVisitBreakBulk(truckVisitAppointmentBreakBulk,
						emailsNotifications, truckVisitAppointmentBreakBulkDTO.getDriver());

				re = (new ResponseEntity<TruckVisitAppointmentPortal>(truckVisitAppointment, HttpStatus.OK));
				// re = (new ResponseEntity<TruckVisit>(truckVisit, HttpStatus.OK));
				// re = (new
				// ResponseEntity<TruckVisitAppointmentBreakBulk>(truckVisitAppointmentBreakBulk,
				// HttpStatus.OK));

			}else 
			{
				LOG.error(truckVisitAppointment.getError());
				ResponseError r = new ResponseError();
				r.setError(truckVisitAppointment.getError());
				re = (new ResponseEntity<ResponseError>(r, HttpStatus.BAD_REQUEST));
			} 

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.TruckVisitAppCreationError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError r = new ResponseError();
			String error = e.getMessage();
			LOG.error(error, e);
			r.setError(error);
			if (e instanceof TransactionSystemException) {
				r.setError(msg);
			}
			if (e instanceof HttpServerErrorException) {
				ObjectMapper mapper = new ObjectMapper();
				error = ((HttpServerErrorException) e).getResponseBodyAsString();
				r = mapper.readValue(error, ResponseError.class);
				r.setError(r.getMessage());
			}
			re = (new ResponseEntity<ResponseError>(r, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	@RequestMapping(value = "/break-bulk/quantity-coordinated/{pinNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getQuantityCoordinated(@PathVariable String pinNbr)
			throws BusinessException {
		ResponseEntity re = null;
		TruckVisitAppointmentBreakBulkFilter filter = new TruckVisitAppointmentBreakBulkFilter();
		filter.setPin(pinNbr);
		filter.setSum(true);
		filter.setActive(true);
		List<?> quantityList = this.getTruckVisitAppointmentBreakBulkBO().search(filter, new Page(1, 0)).getResult();
		Integer quantity = (Integer) quantityList.get(0);
		re = new ResponseEntity<Integer>(quantity, HttpStatus.OK);
		return re;
	}

	private void cancelPin(List<UnitOrderDTO> units) throws BusinessException {
		List<String> unitNbrs = new ArrayList<String>();
		for (UnitOrderDTO u : units) {
			unitNbrs.add(u.getUnitNbr());
		}
		this.getPinBO().cancelPinForUnits(unitNbrs);

	}

	/**
	 * Cancela un appointment. Si es el último appointment del truck visit, entonces
	 * también cancela el truckVisit
	 * 
	 * @param appointment appointment que se va a cancelar.
	 * @param truckVisit  truck visit que es el dueño del appointment que se va a
	 *                    cancelar.
	 * @return String
	 */
	@RequestMapping(value = "/cancel/{appointment}/from/{truckVisit}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity cancelAppointment(@PathVariable String appointment, @PathVariable String truckVisit) {
		ResponseEntity re = null;
		try {
			TruckVisitFilter truckVisitFilter = new TruckVisitFilter();
			truckVisitFilter.setNbr(truckVisit);
			truckVisitFilter.setCanceled(false);
			List<TruckVisit> truckVisits = this.getTruckVisitBO().search(truckVisitFilter, new Page(1, 0)).getResult();
			if (truckVisits != null && !truckVisit.isEmpty()) {
				TruckVisit tv = truckVisits.get(0);
				// Si es el último appointment tengo que cancelar todo.
				if (isLastAppointment(tv)) {
					executeCancelTruckVisit(tv, "49", "Otros");
					String[] strParams = {};
					String msg = getProperty("Controller.TruckVisitAppCancelOK", strParams, getApplicationContext());
					re = new ResponseEntity<String>(msg, HttpStatus.OK);
				} else {
					// Primero lo elimino de N4
					Integer cancel = this.getTruckVisitAppointmentMdwBO().cancelAppointment(truckVisit, appointment);
					LOG.info("Valor de cancel: "+cancel);
					if (cancel != -1 && cancel != -2) {
						String[] strParams = {};
						String msg = getProperty("Controller.AppointmentCancelOK", strParams, getApplicationContext());
						re = new ResponseEntity<String>(msg, HttpStatus.OK);
					} else {
						String[] strParams = {};
						String arg = cancel == -1 ? "Controller.AppointmentCancelError" : "Controller.AppointmentCancelError2";
						String msg = getProperty(arg, strParams, getApplicationContext());
						re = new ResponseEntity<String>(msg, HttpStatus.BAD_REQUEST);
					}
					// Después de la base, hacer refactoring de esto ya que la idea es tomarlo solo
					// de N4
					if (appointment.equals(tv.getFirstAppointmentEdo())) {
						tv.setFirstAppointmentEdo(null);
						tv.setFirstContainerEdo(null);
						tv.setFirstContainerEdoTwenty(null);
						tv.setFirstEdoNbr(null);
					}
					if (appointment.equals(tv.getSecondAppointmentEdo())) {
						tv.setSecondAppointmentEdo(null);
						tv.setSecondContainerEdo(null);
						tv.setSecondContainerEdoTwenty(null);
						tv.setSecondEdoNbr(null);
					}
					if (appointment.equals(tv.getFirstAppointmentEro())) {
						tv.setFirstAppointmentEro(null);
						tv.setFirstContainerEro(null);
						tv.setFirstContainerEroTwenty(null);
						tv.setFirstEroNbr(null);
					}
					if (appointment.equals(tv.getSecondAppointmentEro())) {
						tv.setSecondAppointmentEro(null);
						tv.setSecondContainerEro(null);
						tv.setSecondContainerEroTwenty(null);
						tv.setSecondEroNbr(null);
					}
					if (appointment.equals(tv.getFirstAppointmentImport())) {
						tv.setFirstAppointmentImport(null);
						tv.setFirstContainerImport(null);
						tv.setFirstContainerImportTwenty(null);
						tv.setFirstAppointmentImportOrder(null);
					}
					if (appointment.equals(tv.getSecondAppointmentImport())) {
						tv.setSecondAppointmentImport(null);
						tv.setSecondContainerImport(null);
						tv.setSecondContainerImportTwenty(null);
						tv.setSecondAppointmentImportOrder(null);
					}
					if (appointment.equals(tv.getFirstAppointmentExport())) {
						tv.setFirstAppointmentExport(null);
						tv.setFirstContainerExport(null);
						tv.setFirstContainerExportTwenty(null);
						tv.setFirstAppointmentExportOrder(null);
					}
					if (appointment.equals(tv.getSecondAppointmentExport())) {
						tv.setSecondAppointmentExport(null);
						tv.setSecondContainerExport(null);
						tv.setSecondContainerExportTwenty(null);
						tv.setSecondAppointmentExportOrder(null);
					}
					if (tv.getSkipEmptyRule() != null) {
						if (cancel == 0) { tv.setSkipEmptyRule(false); }
						else if (cancel == 1) { tv.setSkipEmptyRule(true); }
					}
					this.getTruckVisitBO().saveOrUpdate(tv);
				}
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.AppointmentDeleteError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setMessage(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Cancela el truckVisit con todos sus appointments.
	 * 
	 * @param truckVisitNbr truck visit que se va a cancelar
	 * @return String
	 * @throws Exception
	 */
	@RequestMapping(value = "/cancel/truckVisitAppointment/{truckVisitNbr}/{causalCanAppointment}/{causalCanDescription}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity cancelTruckVisitAppointment(@PathVariable String truckVisitNbr,
			@PathVariable String causalCanAppointment, @PathVariable String causalCanDescription) throws Exception {
		ResponseEntity re = null;
		try {
			// verifica si el contenedor tiene truck visit
			TruckVisitFilter truckVisitFilter = new TruckVisitFilter();
			TruckVisitNotifications truckVisitNotifications = new TruckVisitNotifications();
			List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
			List<TemplateEmailNotificationDTO> emailsNotificationsClient = new ArrayList<>();
			truckVisitNbr = EncoderDecoder.decodeBase64(truckVisitNbr);
			truckVisitFilter.setNbr(truckVisitNbr);
			truckVisitFilter.setCanceled(false);
			List<TruckVisit> truckVisits = this.getTruckVisitBO().search(truckVisitFilter, new Page(1, 0)).getResult();
			if (truckVisits != null && !truckVisits.isEmpty()) {
				// mapeo el trackVisit al request
				TruckVisit truckVisit = truckVisits.get(0);
				String containers = "";
				if (truckVisit.getFirstContainerImport() != null && truckVisit.getSecondContainerImport() != null) {
					containers = containers.concat(truckVisit.getFirstContainerImport()).concat(",")
							.concat(truckVisit.getSecondContainerImport());
				} else if (truckVisit.getFirstContainerImport() != null) {
					containers = containers.concat(truckVisit.getFirstContainerImport());
				} else if (truckVisit.getSecondContainerImport() != null) {
					containers = containers.concat(truckVisit.getSecondContainerImport());
				}
				if (truckVisit.getFirstContainerExport() != null && truckVisit.getSecondContainerExport() != null) {
					containers = containers.concat(truckVisit.getFirstContainerExport()).concat(",")
							.concat(truckVisit.getSecondContainerExport());
				} else if (truckVisit.getFirstContainerExport() != null) {
					containers = containers.concat(truckVisit.getFirstContainerExport());
				} else if (truckVisit.getSecondContainerExport() != null) {
					containers = containers.concat(truckVisit.getSecondContainerExport());
				}
				emailsNotificationsClient = customerService.getShippersMailsByContainersOrHbls(containers, "Container");
				// emailsNotifications =
				// customerService.getShippersMailsByContainers(containers);
				truckVisitNotifications = copyTruckVisit(truckVisit, emailsNotifications, emailsNotificationsClient,
						containers);
				/*
				 * if(truckVisitAppointmentDTO.getRule().equals("null")) {
				 * truckVisitNotifications.setLocation("SPIA MANUAL"); } else {
				 * truckVisitNotifications.setLocation("SPIA_EXTERNO"); }
				 */
				executeCancelTruckVisit(truckVisit, causalCanAppointment, causalCanDescription);
				String[] strParams = {};
				String msg = getProperty("Controller.AppointmentCancelOK", strParams, getApplicationContext());

				re = new ResponseEntity<TruckVisitNotifications>(truckVisitNotifications, HttpStatus.OK);
			}
		} catch (BusinessException e) {
			String[] strParams = {};
			String msg = getProperty("Controller.AppointmentDeleteError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setMessage(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Retorna si true si el appointment a eliminar es el último del truckVisit.
	 * 
	 * @param tv
	 * @return true si es el último appointment del truckVisit
	 */
	private boolean isLastAppointment(TruckVisit tv) {
		int appointments = 0;
		if (tv.getFirstAppointmentEdo() != null) {
			appointments++;
		}
		if (tv.getFirstAppointmentEro() != null) {
			appointments++;
		}
		if (tv.getFirstAppointmentImport() != null) {
			appointments++;
		}
		if (tv.getFirstAppointmentExport() != null) {
			appointments++;
		}
		if (tv.getSecondAppointmentEdo() != null) {
			appointments++;
		}
		if (tv.getSecondAppointmentEro() != null) {
			appointments++;
		}
		if (tv.getSecondAppointmentImport() != null) {
			appointments++;
		}
		if (tv.getSecondAppointmentExport() != null) {
			appointments++;
		}
		return appointments <= 1;
	}

	/**
	 * Cancela las unidades de carga sueltas correspondientes al id enviado. En el
	 * caso de que el truckVisit no tenga más cargas sueltas, también lo cancela en
	 * N4.
	 * 
	 * @param id identificador de la tabla truck-visit-appointment-breakbulk, donde
	 *           se guardan las cantidades de carga suelta para el truck visit.
	 * @return {Boolean} true si es el último breakBulk (para redirigir al
	 *         histórico) false si no es el último (para recargar el detalle).
	 * @throws BusinessException cuando ocurre un error en la base de datos o en el
	 *                           llamado al servicio de N4 para cancelar el
	 *                           appointment.
	 */
	@RequestMapping(value = "/cancel/truck-visit-breakbulk/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> cancelTruckVisitBreakBulk(@PathVariable String id) throws BusinessException {
		ResponseEntity re = null;
		try {
			UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
			TruckVisitAppointmentBreakBulk breakBulk = this.getTruckVisitAppointmentBreakBulkBO().getById(new Long(id));
			// if
			// (breakBulk.getTruckVisit().getCreatedByLDAP().equals(currentUser.getUserName()))
			// {
			// boolean isLast = isLastBreakActiveBreakBulk(breakBulk);
			// if (isLast) {
			// // this.executeCancelTruckVisit(breakBulk.getTruckVisit());
			// } else {
			// breakBulk.setActive(false);
			// this.getTruckVisitAppointmentBreakBulkBO().saveOrUpdate(breakBulk);
			// }
			// re = new ResponseEntity<Boolean>(isLast, HttpStatus.OK);
			// } else {
			// ResponseError error = new ResponseError();
			// String msg = getProperty("Controller.AppointmentDeleteError", null,
			// getApplicationContext());
			// error.setError(msg);
			// error.setMessage(msg);
			// re = new ResponseEntity<ResponseError>(error, HttpStatus.OK);
			// }
		} catch (Exception e) {
			ResponseError error = new ResponseError();
			String msg = getProperty("Controller.AppointmentDeleteError", null, getApplicationContext());
			error.setError(msg);
			error.setMessage(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.OK);
		}
		return re;
	}

	private boolean isLastBreakActiveBreakBulk(TruckVisitAppointmentBreakBulk truckVisitAppointmentBreakBulk) {
		boolean isLast = true;
		// for (TruckVisitAppointmentBreakBulk t :
		// truckVisitAppointmentBreakBulk.getTruckVisit()
		// .getTruckVisitAppointmentBreakBulk()) {
		// if (!t.getId().equals(truckVisitAppointmentBreakBulk.getId()) &&
		// t.isActive()) {
		// isLast = false;
		// }
		// }
		return isLast;
	}

	/**
	 * Ejecuta la cancelación del truckVisitAppointment.
	 * 
	 * @param truckVisit
	 * @throws BOException
	 * @throws BusinessException
	 */
	private void executeCancelTruckVisit(TruckVisit truckVisit, String causalCanAppointment, String causalCanDescription)
			throws BOException, BusinessException {
		CancelTransactedAppointmentRequest request = new CancelTransactedAppointmentRequest();
		request.setFirstEdoAppointment(truckVisit.getFirstAppointmentEdo());
		request.setFirstEroAppointment(truckVisit.getFirstAppointmentEro());
		request.setFirstExportAppointment(truckVisit.getFirstAppointmentExport());
		request.setFirstImportAppointment(truckVisit.getFirstAppointmentImport());
		request.setSecondEdoAppointment(truckVisit.getSecondAppointmentEdo());
		request.setSecondEroAppointment(truckVisit.getSecondAppointmentEro());
		request.setSecondExportAppointment(truckVisit.getSecondAppointmentExport());
		request.setSecondImportAppointment(truckVisit.getSecondAppointmentImport());
		request.setTruckVisitappointment(truckVisit.getTruckVisitNbr());
		request.setcCACode(causalCanAppointment);	
		request.setcCADescription(causalCanDescription);
		// llamado del cancelar a N4
		this.getTruckVisitAppointmentMdwBO().cancelTransactedAppointment(request);
		// marcar como cancelado en la base de datos
		truckVisit.setCanceled(true);
		// Si tiene breakBulks, tmb los marco como cancelados
		for (TruckVisitAppointmentBreakBulk breakBulk : truckVisit.getTruckVisitAppointmentBreakBulk()) {
			// breakBulk.setActive(false);
		}
		this.getTruckVisitBO().saveOrUpdate(truckVisit);
	}

	/**
	 * Ejecuta la cancelación del truckVisitAppointment.
	 * 
	 * @param truckVisit
	 * @throws BOException
	 * @throws BusinessException
	 */
	private void executeCancelTruckVisitBreakBulk(TruckVisitAppointmentBreakBulk truckVisitAppointmentBreakBulk)
			throws BOException, BusinessException {
		CancelTransactedAppointmentRequest request = new CancelTransactedAppointmentRequest();
		request.setTruckVisitappointment(truckVisitAppointmentBreakBulk.getTruckVisitAppointmentNbr());
		this.getTruckVisitAppointmentMdwBO().cancelTransactedAppointment(request);
		TruckVisit truckVisit = new TruckVisit();
		truckVisit.setCanceled(true);
		this.getTruckVisitBO().saveOrUpdate(truckVisit);
	}

	/**
	 * Imprime el pdf del truckVisit appointment.
	 * 
	 * @param appNbr   lista de appointments
	 * @param units    lista de units
	 * @param request  petición http
	 * @param response respuesta http
	 * @return ModelAndView
	 */
	@RequestMapping(value = "/pdf/{location}/{appNbr:.+}", method = RequestMethod.GET)
	public ModelAndView pdf(@PathVariable List<String> appNbr, @PathVariable String location,
			@MatrixVariable Map<String, List<String>> units, HttpServletRequest request, HttpServletResponse response) {
		List<TruckVisit> truckVisits = new ArrayList<TruckVisit>();
		String reporte = "Appointment.jrxml";
		List<String> unitsList = (new ArrayList<String>());
		String[] arr = new String[units.get("units").size()];
		arr = units.get("units").toArray(arr);
		for (int i = 0; i < arr.length; i++)
			unitsList.add(arr[i]);
		try {
			for (String nbr : appNbr) {
				UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
				TruckVisitFilter truckVisitFilter = new TruckVisitFilter();

				truckVisitFilter.setN4UserIdLdap(this.getUserBO().getCurrentUser().getEmpresa().getId());
				truckVisitFilter.setNbr(nbr);

				if (units.size() > 0) {
					truckVisitFilter.setUnits(unitsList);
				}

				truckVisits.addAll(this.getTruckVisitBO().search(truckVisitFilter, new Page(1, 0)).getResult());
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinPDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		if (!truckVisits.isEmpty()) {
			generatePDF(truckVisits, unitsList, request, response, reporte, location);
		}
		ModelAndView modal = new ModelAndView("");
		return modal;
		// return new ModelAndView("");
	}

	/**
	 * Imprime el pdf del truckVisit appointment de carga suelta.
	 * 
	 * @param appNbr   lista de appointments
	 * @param request  petición http
	 * @param response respuesta http
	 * @return {@link ModelAndView}
	 */
	@RequestMapping(value = "/break-bulk/pdf/{appNbr:.+}", method = RequestMethod.GET)
	public ModelAndView pdfBreakBulk(@PathVariable List<String> appNbr, HttpServletRequest request,
			HttpServletResponse response) {
		List<TruckVisit> truckVisits = new ArrayList<TruckVisit>();
		String reporte = "AppointmentBreakBulk.jrxml";
		List<String> unitsList = (new ArrayList<String>());
		try {
			for (String nbr : appNbr) {
				UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
				TruckVisitFilter truckVisitFilter = new TruckVisitFilter();
				truckVisitFilter.setCreatedByLdap(this.getUserBO().getCurrentUser().getUserName());
				truckVisitFilter.setNbr(nbr);
				truckVisits.addAll(this.getTruckVisitBO().search(truckVisitFilter, new Page(1, 0)).getResult());
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinPDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		if (!truckVisits.isEmpty()) {
			generateBreakBulkPDF(truckVisits, request, response, reporte);
		}
		return new ModelAndView("");
	}

	/**
	 * Genera el pdf del truckVisit appointment.
	 * 
	 * @param truckVisits
	 * @param units
	 * @param request
	 * @param response
	 * @param reporte
	 */
	private void generatePDF(List<TruckVisit> truckVisits, List<String> units, HttpServletRequest request,
			HttpServletResponse response, String reporte, String location) {

		HashMap<String, Object> parameterMap = new HashMap<String, Object>();

		parameterMap.put("SPIA_LOGO", request.getSession().getServletContext().getRealPath("/WEB-INF/img/bg.jpg"));
		parameterMap.put("SUPEPUERTOS",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/superpuertos.jpg"));

		JasperReport jasperReport = null;
		try {
			TruckVisitAppointmentResponse truckVisitRule = this.getAppointmentConfigurationMdwBo()
					.get("getTruckVisitAppointmentconfiguration/REGLA GENERAL/WEEKDAY");
			JasperPrint jasperPrint = null;

			List<TruckVisitReportDTO> truckVisitReports = new ArrayList<TruckVisitReportDTO>();
			TruckVisitReportDTO truckVisitReport = new TruckVisitReportDTO();

			truckVisitReport.setTruckVisitNbr(truckVisits.get(0).getTruckVisitNbr());
			SimpleDateFormat dateFormat = new SimpleDateFormat(DateFormatConstant.MMM_dd_yyyy);
			Date toDate = DateUtils.addMinutes(truckVisits.get(0).getAppointmentDate(),
					truckVisitRule.getQuotaRule().get(0).getSlotDuration());
			String date = dateFormat.format(truckVisits.get(0).getAppointmentDate());

			SimpleDateFormat hourFormat = new SimpleDateFormat(DateFormatConstant.HH_mm);
			String fromHour = hourFormat.format(truckVisits.get(0).getAppointmentDate());
			String toHour = hourFormat.format(toDate);
			String fechaYHora = date + " Desde las " + fromHour + " a las " + toHour;

			truckVisitReport.setTruckVisitFechaYHora(fechaYHora);

			TruckVisitAppointment n4TruckVisit = this.getTruckVisitAppointmentMdwBO()
					.get(truckVisits.get(0).getTruckVisitNbr());
			TruckingCompany truckingCompany = this.getTruckingCompanyMdwBo().get(n4TruckVisit.getTruckingCompany());

			truckVisitReport.setTruckingCompanyId(truckingCompany.getId());
			truckVisitReport.setTruckingCompanyName(truckingCompany.getName());
			truckVisitReport.setConductor(truckVisits.get(0).getDriver().getName());
			truckVisitReport.setConductorId(truckVisits.get(0).getDriver().getCardId());
			truckVisitReport.setConductorLicencia(truckVisits.get(0).getDriver().getLicense());
			truckVisitReport.setPlaca(truckVisits.get(0).getTruck());

			truckVisitReport.setContenedores(new ArrayList<String>());
			truckVisitReport.setModalidades(new ArrayList<String>());
			truckVisitReport.setIngresosSalidas(new ArrayList<String>());
			truckVisitReport.setPesos(new ArrayList<String>());
			if (location.equals("SPIA MANUAL") || location.equals("SPIA%MANUAL") || location.equals("AGUADULCE")) {
				truckVisitReport.setLocation("PUERTO AGUADULCE");
				truckVisitReport.setSiteAppointment("AGUADULCE");
			}
			else if (location.equals("SPIA_EXTERNO") || location.equals("EXTERNO1")) {
				truckVisitReport.setLocation("Patio Externo Agunsa");
				truckVisitReport.setSiteAppointment("EXTERNO1");
			}
			else if (location.equals("SPIA_EXT_2") || location.equals("EXTERNO2")) {
				truckVisitReport.setLocation("Patio ZAL Km. 13 Vía Alterna Interna");
				truckVisitReport.setSiteAppointment("EXTERNO2");
			}
			else if (location.equals("SPIA_EXT_3") || location.equals("EXTERNO3")) {
				truckVisitReport.setLocation("CY DE COLOMBIA SAS - Calle 7ª # 12 vía alterna/interna al lado de Coltanques después de Centracar");
				truckVisitReport.setSiteAppointment("EXTERNO3");
			}
			
			for (TruckVisit t : truckVisits) {
				if (t.getFirstContainerEdo() != null) {
					this.setReport(t.getFirstContainerEdo(), t.getFirstEdoNbr(), null, true, truckVisitReport);
				}
				if (t.getSecondContainerEdo() != null) {
					this.setReport(t.getSecondContainerEdo(), t.getSecondEdoNbr(), null, true, truckVisitReport);
				}
				if (t.getFirstContainerEro() != null) {
					this.setReport(t.getFirstContainerEro(), null, t.getFirstEroNbr(), false, truckVisitReport);
				}
				if (t.getSecondContainerEro() != null) {
					this.setReport(t.getSecondContainerEro(), null, t.getSecondEroNbr(), false, truckVisitReport);
				}
				if (t.getFirstContainerImport() != null) {
					this.setReport(t.getFirstContainerImport(), null, null, true, truckVisitReport);
				}
				if (t.getSecondContainerImport() != null) {
					this.setReport(t.getSecondContainerImport(), null, null, true, truckVisitReport);
				}
				if (t.getFirstContainerExport() != null) {
					this.setReport(t.getFirstContainerExport(), null, null, false, truckVisitReport);
				}
				if (t.getSecondContainerExport() != null) {
					this.setReport(t.getSecondContainerExport(), null, null, false, truckVisitReport);
				}
			}
			truckVisitReports.add(truckVisitReport);
			JRDataSource invoiceDataSource = new JRBeanCollectionDataSource(truckVisitReports);
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
	 * Genera el pdf del truckVisit appointment.
	 * 
	 * @param truckVisits
	 * @param units
	 * @param request
	 * @param response
	 * @param reporte
	 */
	private void generatePDFBbk(List<TruckVisit> truckVisits, AppointmentBreakBulkServiceDTO[] cargoLotsList,
			HttpServletRequest request, HttpServletResponse response, String reporte) {

		HashMap<String, Object> parameterMap = new HashMap<String, Object>();

		parameterMap.put("SPIA_LOGO", request.getSession().getServletContext().getRealPath("/WEB-INF/img/bg.jpg"));

		JasperReport jasperReport = null;
		try {
			TruckVisitAppointmentResponse truckVisitRule = this.getAppointmentConfigurationMdwBo()
					.get("getTruckVisitAppointmentconfiguration/REGLA GENERAL/WEEKDAY");
			JasperPrint jasperPrint = null;

			List<TruckVisitReportDTO> truckVisitReports = new ArrayList<TruckVisitReportDTO>();
			TruckVisitReportDTO truckVisitReport = new TruckVisitReportDTO();

			truckVisitReport.setTruckVisitNbr(truckVisits.get(0).getTruckVisitNbr());
			SimpleDateFormat dateFormat = new SimpleDateFormat(DateFormatConstant.MMM_dd_yyyy);
			Date toDate = DateUtils.addMinutes(truckVisits.get(0).getAppointmentDate(),
					truckVisitRule.getQuotaRule().get(0).getSlotDuration());
			String date = dateFormat.format(truckVisits.get(0).getAppointmentDate());

			SimpleDateFormat hourFormat = new SimpleDateFormat(DateFormatConstant.HH_mm);
			String fromHour = hourFormat.format(truckVisits.get(0).getAppointmentDate());
			String toHour = hourFormat.format(toDate);
			String fechaYHora = date + " Desde las " + fromHour + " a las " + toHour;

			truckVisitReport.setTruckVisitFechaYHora(fechaYHora);

			TruckVisitAppointment n4TruckVisit = this.getTruckVisitAppointmentMdwBO()
					.get(truckVisits.get(0).getTruckVisitNbr());
			TruckingCompany truckingCompany = this.getTruckingCompanyMdwBo().get(n4TruckVisit.getTruckingCompany());

			truckVisitReport.setTruckingCompanyId(truckingCompany.getId());
			truckVisitReport.setTruckingCompanyName(truckingCompany.getName());
			truckVisitReport.setConductor(truckVisits.get(0).getDriver().getName());
			truckVisitReport.setConductorId(truckVisits.get(0).getDriver().getCardId());
			truckVisitReport.setConductorLicencia(truckVisits.get(0).getDriver().getLicense());
			truckVisitReport.setPlaca(truckVisits.get(0).getTruck());

			truckVisitReport.setContenedores(new ArrayList<String>());
			truckVisitReport.setModalidades(new ArrayList<String>());
			truckVisitReport.setIngresosSalidas(new ArrayList<String>());
			truckVisitReport.setPesos(new ArrayList<String>());

			int cont = 0;
			for (AppointmentBreakBulkServiceDTO cargo : cargoLotsList) {
				cont++;
				truckVisitReport.getContenedores().add(String.valueOf(cont));
				truckVisitReport.getModalidades().add(String.valueOf(cargo.getBl_nbr()));
				truckVisitReport.getIngresosSalidas().add(String.valueOf(cargo.getCargo_quantity()));
				truckVisitReport.getPesos().add(String.valueOf(cargo.getCargo_weigth()));
			}

			truckVisitReports.add(truckVisitReport);
			JRDataSource invoiceDataSource = new JRBeanCollectionDataSource(truckVisitReports);
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
	 * Genera el pdf del truckVisit appointment de carga suelta.
	 * 
	 * @param truckVisits
	 * @param units
	 * @param request
	 * @param response
	 * @param reporte
	 */
	private void generateBreakBulkPDF(List<TruckVisit> truckVisits, HttpServletRequest request,
			HttpServletResponse response, String reporte) {

		HashMap<String, Object> parameterMap = new HashMap<String, Object>();

		parameterMap.put("SPIA_LOGO",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/logoComprobante.jpg"));
		parameterMap.put("SUPERPUERTOS",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/superpuertos.jpg"));

		JasperReport jasperReport = null;
		try {
			TruckVisitAppointmentResponse truckVisitRule = this.getAppointmentConfigurationMdwBo()
					.get("getTruckVisitAppointmentconfiguration/REGLA GENERAL/WEEKDAY");
			JasperPrint jasperPrint = null;

			List<TruckVisitReportDTO> truckVisitReports = new ArrayList<>();
			TruckVisitReportDTO truckVisitReport = new TruckVisitReportDTO();

			truckVisitReport.setTruckVisitNbr(truckVisits.get(0).getTruckVisitNbr());
			SimpleDateFormat dateFormat = new SimpleDateFormat(DateFormatConstant.MMM_dd_yyyy);
			Date toDate = DateUtils.addMinutes(truckVisits.get(0).getAppointmentDate(),
					truckVisitRule.getQuotaRule().get(0).getSlotDuration());
			String date = dateFormat.format(truckVisits.get(0).getAppointmentDate());

			SimpleDateFormat hourFormat = new SimpleDateFormat(DateFormatConstant.HH_mm);
			String fromHour = hourFormat.format(truckVisits.get(0).getAppointmentDate());
			String toHour = hourFormat.format(toDate);
			String fechaYHora = date + " Desde las " + fromHour + " a las " + toHour;

			truckVisitReport.setTruckVisitFechaYHora(fechaYHora);
			UsuarioLoginDTO userTruckVisit = this.getUserBO().getByUsername(truckVisits.get(0).getCreatedByLDAP());
			truckVisitReport.setTruckingCompanyId(userTruckVisit.getEmpresa().getId());
			truckVisitReport.setTruckingCompanyName(userTruckVisit.getEmpresa().getCompanyName());
			truckVisitReport.setConductor(truckVisits.get(0).getDriver().getName());
			truckVisitReport.setConductorId(truckVisits.get(0).getDriver().getCardId());
			truckVisitReport.setConductorLicencia(truckVisits.get(0).getDriver().getLicense());
			truckVisitReport.setPlaca(truckVisits.get(0).getTruck());

			truckVisitReport.setUnidades(new ArrayList<String>());
			truckVisitReport.setCommodities(new ArrayList<String>());
			truckVisitReport.setIngresosSalidas(new ArrayList<String>());
			for (TruckVisit t : truckVisits) {
				for (TruckVisitAppointmentBreakBulk tvb : t.getTruckVisitAppointmentBreakBulk()) {
					// truckVisitReport.getUnidades().add(String.valueOf(tvb.getQuantity()));
					// PinBreakBulk pinBreakBulk = tvb.getPin().getPinBreakBulk().iterator().next();
					PinBreakBulk pinBreakBulk = new PinBreakBulk();
					truckVisitReport.getCommodities().add(pinBreakBulk.getCommodity());
					truckVisitReport.getIngresosSalidas()
							.add("IMPORT".equals(pinBreakBulk.getCategory()) ? "SALIDA" : "INGRESO");
				}
			}
			truckVisitReports.add(truckVisitReport);
			JRDataSource invoiceDataSource = new JRBeanCollectionDataSource(truckVisitReports);
			JasperUtils.exportReport(reporte, jasperReport, parameterMap, invoiceDataSource, jasperPrint, request,
					response);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinPDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
			LOG.error(e.getStackTrace());
		}
	}

	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "/update", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> updateTruckVisit(
			@RequestBody UpdateTruckVisitRequest updateTruckVisitRequest) throws Exception {
		
		ResponseEntity re = null;
		List<Driver> drivers = null;
		List<Truck> trucks = null;
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		DriverDTO[] responseDriver = null;
		DriverValidationDTO[] response = null;
		TruckValidationDTO[] responsetruck = null;
		TruckVisitAppointmentServiceDTO[] truckVisitAppointmentLst = {};
		TruckVisitAppointmentServiceDTO tvLst = new TruckVisitAppointmentServiceDTO();
		TruckVisitNotifications truckVisitNotifications = new TruckVisitNotifications();
		try {
			LOG.info("N4 User Id: " + currentUser.getEmpresa().getId());
			if (currentUser.getEmpresa().getId() != null) {
				responseDriver = driverService.driverValidation(updateTruckVisitRequest.getDriverCardId());
				truckVisitAppointmentLst = truckVisitAppointmentService.getInfo(updateTruckVisitRequest.getTruckVisitNbr());
				tvLst = truckVisitAppointmentLst[0];
				String units = tvLst.getFirstContainerEdo()+","+tvLst.getFirstContainerEdoTwenty()+","+tvLst.getFirstContainerEro()+","+tvLst.getFirstContainerEroTwenty()+","+tvLst.getFirstContainerExport()+","+tvLst.getFirstContainerExportTwenty()+","+tvLst.getFirstContainerImport()+","+tvLst.getFirstContainerImportTwenty()+","+tvLst.getSecondContainerEdo()+","+tvLst.getSecondContainerEdoTwenty()+","+tvLst.getSecondContainerEro()+","+tvLst.getSecondContainerExport()+","+tvLst.getSecondContainerExportTwenty()+","+","+tvLst.getSecondContainerImport()+","+tvLst.getSecondContainerImportTwenty();
				if (!updateTruckVisitRequest.getIsHazard().equals("true")) {
					updateTruckVisitRequest.setIsHazard(this.validateHazardApp(units));
				}
				response = driverService.driverValidationByDateService(updateTruckVisitRequest.getDriverCardId(),
						updateTruckVisitRequest.getDate(),updateTruckVisitRequest.getIsHazard());
				if ((responseDriver != null && responseDriver.length > 0 && responseDriver[0].getValidacion() != null)
						|| (response != null && response.length > 0 && response[0].getData() != null)) {
					String[] strParams = null;
					List<String> strParamss = new ArrayList<>();
					// Adiciona el Nuevo Conductor a la Cita
					strParamss.add(updateTruckVisitRequest.getDriverCardId());
					for (DriverDTO driverDTO : responseDriver) {
						if (driverDTO.getValidacion() != null) {
							strParamss.add(driverDTO.getValidacion());
						}
					}
					for (DriverValidationDTO driverValidationDTO : response) {
						if (driverValidationDTO.getData() != null) {
							strParamss.add(driverValidationDTO.getData());
						}
					}
					strParams = strParamss.toArray(new String[strParamss.size()]);

					String error = "";
					if (strParamss.toString().contains("peligrosa")) {
						error = getProperty("Controller.TruckVisitAppointment.error.DRIVER_WITHOUT_PERMISSION_HAZARD", strParams,getApplicationContext());

					}
						
					else {error = getProperty("Controller.TruckVisitAppointment.error.DRIVER_NOT_EXIST", strParams,	getApplicationContext());
					}
					LOG.error(error);
					ResponseError r = new ResponseError();
					r.setError(error);
					re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
					return re;
				}

				responsetruck = truckService.truckValidationByDateService(updateTruckVisitRequest.getLicense(),
						updateTruckVisitRequest.getDate());
				if (responsetruck != null && responsetruck.length > 0 && responsetruck[0].getData() != null) {
					String[] strParams = null;
					List<String> strParamss = new ArrayList<>();
					// Adiciona la Placa del Camion a la Edicion de la Cita
					strParamss.add(updateTruckVisitRequest.getLicense());
					for (TruckValidationDTO truckValidationDTO : responsetruck) {
						strParamss.add(truckValidationDTO.getData());
					}
					strParams = strParamss.toArray(new String[strParamss.size()]);
					String error = getProperty("Controller.TruckVisitAppointment.error.TRUCK_NOT_EXIST", strParams,
							getApplicationContext());
					LOG.error(error);
					ResponseError r = new ResponseError();
					r.setError(error);
					re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
					return re;
				}

			}

			TruckVisitFilter filterByShipper = new TruckVisitFilter();
			filterByShipper.setNbr(updateTruckVisitRequest.getTruckVisitNbr());
			filterByShipper.setN4UserIdLdap(this.getUserBO().getCurrentUser().getEmpresa().getId());
			List<TruckVisit> lastTruckVisits = this.getTruckVisitBO().search(filterByShipper, new Page(1, 0))
					.getResult();
			TruckVisit lastTruckVisit = new TruckVisit();
			if (lastTruckVisits != null && lastTruckVisits.size() > 0) {
				lastTruckVisit = lastTruckVisits.get(0);
			}

			TruckVisitAppointment truckVisitApp = this.getTruckVisitAppointmentMdwBO()
					.get(updateTruckVisitRequest.getTruckVisitNbr());
			// Validar para impo si el consignee es contado y la fecha elegida es >
			// storagePaidThroughDay -->error y no dejar adicionar contenedor.
			List<String> errorValidateImport = validateImpoStoragePaidThroughDay(truckVisitApp.getDate(),
					updateTruckVisitRequest.getAppointmentData());
			if (errorValidateImport == null) {

				if (truckVisitApp != null && (truckVisitApp.getError() == null
						|| (truckVisitApp.getError() != null && truckVisitApp.getError().isEmpty()))) {

					// Valido la fecha de reefer
					if (updateTruckVisitRequest.getAppointmentData() != null
							&& !updateTruckVisitRequest.getAppointmentData().isEmpty()) {
						for (AppointmentData appointmentData : updateTruckVisitRequest.getAppointmentData()) {
							if ("PUI".equals(appointmentData.getTransType().toUpperCase())) {
								UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo()
										.getSingleUnitById(appointmentData.getUnitNbr(), "1");
								Customer customer = null;
								boolean credit = false;
								if (ufv.getBillsOfLading() != null && ufv.getBillsOfLading().isEmpty()) {
									customer = this.getCustomerMdwBO().getByIdAndRole(
											ufv.getBillsOfLading().get(0).getConsigneeId(),
											Constants.Billing.ROLES.get(roleShipperConsignee));
									credit = "on account".equals(customer.getStatus().toLowerCase())
											&& "add days to invoice finalized date"
													.equals(customer.getDueDateRule().toLowerCase());
								} else {
									customer = this.getCustomerMdwBO().getByIdAndRole(
											ufv.getContents().getConsigneeId(),
											Constants.Billing.ROLES.get(roleShipperConsignee));
									credit = "on account".equals(customer.getStatus().toLowerCase())
											&& "add days to invoice finalized date"
													.equals(customer.getDueDateRule().toLowerCase());
								}
								SimpleDateFormat df = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm,
										Locale.ENGLISH);
								re = getStorageError(ufv, customer, credit, df.parse(truckVisitApp.getDate()));
								if (re != null) {
									return re;
								}
							}
						}
					}
					if (updateTruckVisitRequest.getLicense() != null) {
						updateTruckVisitRequest.setLicense(updateTruckVisitRequest.getLicense().trim());
					}
					if (updateTruckVisitRequest.getDriverCardId() != null) {
						updateTruckVisitRequest.setDriverCardId(updateTruckVisitRequest.getDriverCardId().trim());
					}

					if (updateTruckVisitRequest.getRule().equals("null") || updateTruckVisitRequest.getRule().equals("AGUADULCE")) {
						updateTruckVisitRequest.setRule("SPIA MANUAL");
						truckVisitNotifications.setSiteAppointment("AGUADULCE");
					} else if (updateTruckVisitRequest.getRule().equals("EXTERNO1")) {
						updateTruckVisitRequest.setRule("SPIA_EXTERNO");
						truckVisitNotifications.setSiteAppointment("EXTERNO1");
					}
					 else if (updateTruckVisitRequest.getRule().equals("EXTERNO2")) {
							updateTruckVisitRequest.setRule("SPIA_EXT_2");
							truckVisitNotifications.setSiteAppointment("EXTERNO2");
						}
					 else if (updateTruckVisitRequest.getRule().equals("EXTERNO3")) {
							updateTruckVisitRequest.setRule("SPIA_EXT_3");
							truckVisitNotifications.setSiteAppointment("EXTERNO3");
						}

						// ASSIST-TI 05-07-2022

					SimpleDateFormat fchCita = new SimpleDateFormat(DateFormatConstant.yyyy_MM_dd,Locale.ENGLISH);
					SimpleDateFormat horaCita = new SimpleDateFormat(DateFormatConstant.HH_mm_ssSS,Locale.ENGLISH);
					
					int ListaDeDatos = updateTruckVisitRequest.getAppointmentData().size();
					
					Map<String,String> unitsImport = new HashMap<String,String>();
					Map<String,String> unitsExport = new HashMap<String,String>();
					
					if (!"".equals(tvLst.getFirstContainerImport()) && tvLst.getFirstContainerImport() != null) {
						unitsImport.put("firstImport", tvLst.getFirstContainerImport());
					}
					if (!"".equals(tvLst.getSecondContainerImport()) && tvLst.getSecondContainerImport() != null) {
						unitsImport.put("secondImport", tvLst.getSecondContainerImport());
					}
					if (!"".equals(tvLst.getFirstContainerExport()) && tvLst.getFirstContainerExport() != null) {
						unitsExport.put("firstExport", tvLst.getFirstContainerExport());
					}
					if (!"".equals(tvLst.getSecondContainerExport()) && tvLst.getSecondContainerExport() != null) {
						unitsExport.put("secondExport", tvLst.getSecondContainerExport());
					}

					for (AppointmentData appointmentData : updateTruckVisitRequest.getAppointmentData()) {
						if ("PUI".equals(appointmentData.getTransType()) || "PUE".equals(appointmentData.getTransType())) {
							if (!unitsImport.containsKey("firstImport")){
								unitsImport.put("firstImport", appointmentData.getUnitNbr());
							} else if (!unitsImport.containsKey("secondImport")){
								unitsImport.put("secondImport", appointmentData.getUnitNbr());
							} else {
								//Este caso, solo sucede si en el front falla la validación de capacidad de camion
								//Se configura campo para contenedores excedentes (contendra el ultimo empujado)
								unitsImport.put("excedenteImport", appointmentData.getUnitNbr());
							}
						} else if ("DOE".equals(appointmentData.getTransType())) {
							if (!unitsExport.containsKey("firstExport")){
								unitsExport.put("firstExport", appointmentData.getUnitNbr());
							} else if (!unitsExport.containsKey("secondExport")){
								unitsExport.put("secondExport", appointmentData.getUnitNbr());
							} else {
								//Este caso, solo sucede si en el front falla la validación de capacidad de camion
								//Se configura campo para contenedores excedentes (contendra el ultimo empujado)
								unitsExport.put("excedenteExport", appointmentData.getUnitNbr());
							}
						}
					}
					
					TruckVisitAppointment truckVisitAppointmentvalidateUpdate = new TruckVisitAppointment();

					if (unitsImport.containsKey("excedenteImport") && unitsImport.containsKey("excedenteExport")) {
						//Este caso, solo sucede si en el front falla la validación de capacidad de camion
						truckVisitAppointmentvalidateUpdate.setError(getProperty("Controller.TruckVisitAppUpdateError.ExcedeImportAndExport", null, getApplicationContext()));
					} else if (unitsImport.containsKey("excedenteImport")) {
						//Este caso, solo sucede si en el front falla la validación de capacidad de camion
						truckVisitAppointmentvalidateUpdate.setError(getProperty("Controller.TruckVisitAppUpdateError.ExcedeImport", null, getApplicationContext()));
					} else if (unitsImport.containsKey("excedenteExport")) {
						//Este caso, solo sucede si en el front falla la validación de capacidad de camion
						truckVisitAppointmentvalidateUpdate.setError(getProperty("Controller.TruckVisitAppUpdateError.ExcedeExport", null, getApplicationContext()));
					} else {
						String getTruckVisitNbr = updateTruckVisitRequest.getTruckVisitNbr();
						String getDriverCardId = updateTruckVisitRequest.getDriverCardId();
						String getLicense = updateTruckVisitRequest.getLicense();
						String truckingCompanyId = tvLst.getCompanyIdLdap();
						String firstExportAppointmentContainer = "".equals(tvLst.getFirstContainerExport()) ? unitsExport.get("firstExport") : tvLst.getFirstContainerExport();
						String secondExportAppointmentContainer = "".equals(tvLst.getSecondContainerExport()) ? unitsExport.get("secondExport") : tvLst.getSecondContainerExport();
						String firstImportAppointmentContainer = "".equals(tvLst.getFirstContainerImport()) ? unitsImport.get("firstImport") : tvLst.getFirstContainerImport();
						String secondImportAppointmentContainer = "".equals(tvLst.getSecondContainerImport()) ? unitsImport.get("secondImport") : tvLst.getSecondContainerImport();
						String rule = updateTruckVisitRequest.getRule();
						String AppointmentDate = fchCita.format(updateTruckVisitRequest.getDate());
						String AppointmentHour = horaCita.format(updateTruckVisitRequest.getDate());

						truckVisitAppointmentvalidateUpdate = this.truckVisitAppointmentService.updateAppointmentValidate(secondImportAppointmentContainer,firstImportAppointmentContainer,
										  secondExportAppointmentContainer,firstExportAppointmentContainer,truckingCompanyId,AppointmentDate,AppointmentHour, getTruckVisitNbr, getDriverCardId, getLicense,rule);
					}
					

					if ( truckVisitAppointmentvalidateUpdate != null && truckVisitAppointmentvalidateUpdate.getError() == null ){

						TruckVisitAppointment tv = this.getTruckVisitAppointmentMdwBO().updateTruckVisit(updateTruckVisitRequest);
	
						if (tv != null && (tv.getError() == null || (tv.getError() != null && tv.getError().isEmpty()))) {
							TruckVisitFilter filter = new TruckVisitFilter();
							filter.setNbr(tv.getNbr());
							List<TruckVisit> truckVisits = this.getTruckVisitBO().search(filter, new Page(1, 0))
									.getResult();
	
							if (truckVisits != null && !truckVisits.isEmpty()) {
								Driver driver = this.getDriverMdwBo().get(tv.getDriverCardId());
								TruckVisit truckVisit = truckVisits.get(0);
								truckVisit.setDriver(driver);
								truckVisit.setTruck(updateTruckVisitRequest.getLicense().trim());
								
								if (updateTruckVisitRequest.getAppointmentData() != null
									&& !updateTruckVisitRequest.getAppointmentData().isEmpty()) {
									for (GateAppointment ga : tv.getGateApptSet()) {
										// IMPO
										if ("pick up import".equals(ga.getTransType().toLowerCase())
												&& !ga.getCtrId().equals(truckVisit.getFirstContainerImport())
												&& !ga.getCtrId().equals(truckVisit.getSecondContainerImport())) {
											if (truckVisit.getFirstContainerImport() == null
													|| "".equals(truckVisit.getFirstContainerImport())) {
												truckVisit.setFirstContainerImport(ga.getCtrId());
												truckVisit.setFirstContainerImportTwenty(
														isTwenty(updateTruckVisitRequest.getAppointmentData(),
																ga.getCtrId(), "PUI"));
												truckVisit.setFirstAppointmentImport(ga.getNbr());
												truckVisit.setFirstAppointmentImportOrder(
														getOrder(updateTruckVisitRequest.getAppointmentData(),
																ga.getCtrId(), "PUI"));
											} else if (truckVisit.getSecondContainerImport() == null
													|| "".equals(truckVisit.getSecondContainerImport())) {
												truckVisit.setSecondContainerImport(ga.getCtrId());
												truckVisit.setSecondAppointmentImport(ga.getNbr());
												truckVisit.setSecondAppointmentImportOrder(
														getOrder(updateTruckVisitRequest.getAppointmentData(),
																ga.getCtrId(), "PUI"));
												truckVisit.setSecondContainerImportTwenty(true);
											}
										}
										// EXPO
										if ("drop off export".equals(ga.getTransType().toLowerCase())
												&& !ga.getCtrId().equals(truckVisit.getFirstContainerExport())
												&& !ga.getCtrId().equals(truckVisit.getSecondContainerExport())) {
											if (truckVisit.getFirstContainerExport() == null
													|| "".equals(truckVisit.getFirstContainerExport())) {
												truckVisit.setFirstContainerExport(ga.getCtrId());
												truckVisit.setFirstContainerExportTwenty(
														isTwenty(updateTruckVisitRequest.getAppointmentData(),
																ga.getCtrId(), "DOE"));
												truckVisit.setFirstAppointmentExport(ga.getNbr());
												truckVisit.setFirstAppointmentExportOrder(
														getOrder(updateTruckVisitRequest.getAppointmentData(),
																ga.getCtrId(), "DOE"));
											} else if (truckVisit.getSecondContainerExport() == null
													|| "".equals(truckVisit.getSecondContainerExport())) {
												truckVisit.setSecondContainerExport(ga.getCtrId());
												truckVisit.setSecondAppointmentExport(ga.getNbr());
												truckVisit.setSecondAppointmentExportOrder(
														getOrder(updateTruckVisitRequest.getAppointmentData(),
																ga.getCtrId(), "DOE"));
												truckVisit.setSecondContainerExportTwenty(true);
											}
										}
										//EXPO RETIRO
										if ("pick up export dray off".equals(ga.getTransType().toLowerCase())
												&& !ga.getCtrId().equals(truckVisit.getFirstContainerImport())
												&& !ga.getCtrId().equals(truckVisit.getSecondContainerImport())) {
											if (truckVisit.getFirstContainerImport() == null
													|| "".equals(truckVisit.getFirstContainerImport())) {
												truckVisit.setFirstContainerImport(ga.getCtrId());
												truckVisit.setFirstContainerImportTwenty(
														isTwenty(updateTruckVisitRequest.getAppointmentData(),
																ga.getCtrId(), "PUE"));
												truckVisit.setFirstAppointmentImport(ga.getNbr());
												truckVisit.setFirstAppointmentImportOrder(
														getOrder(updateTruckVisitRequest.getAppointmentData(),
																ga.getCtrId(), "PUE"));
												truckVisit.setFirstTransTypeImport("PUE");
											} else if (truckVisit.getSecondContainerImport() == null
													|| "".equals(truckVisit.getSecondContainerImport())) {
												truckVisit.setSecondContainerImport(ga.getCtrId());
												truckVisit.setSecondAppointmentImport(ga.getNbr());
												truckVisit.setSecondAppointmentImportOrder(
														getOrder(updateTruckVisitRequest.getAppointmentData(),
																ga.getCtrId(), "PUE"));
												truckVisit.setSecondContainerImportTwenty(true);
												truckVisit.setSecondTransTypeImport("PUE");
											}
										}
										// EDO
										if ("pick up empty".equals(ga.getTransType().toLowerCase())) {
											if (!ga.getNbr().equals(truckVisit.getFirstAppointmentEdo())
													&& !ga.getNbr().equals(truckVisit.getSecondAppointmentEdo())) {
												if (truckVisit.getFirstContainerEdo() == null) {
													truckVisit.setFirstContainerEdo(getEmptyContainer(ga,
															updateTruckVisitRequest.getAppointmentData(), null));
													truckVisit.setFirstContainerImportTwenty(
															isTwenty(updateTruckVisitRequest.getAppointmentData(),
																	ga.getCtrId(), "PUM"));
													truckVisit.setFirstAppointmentEdo(ga.getNbr());
													truckVisit.setFirstEdoNbr(ga.getReceiveEmpty());
												} else {
													truckVisit.setSecondContainerEdo(getEmptyContainer(ga,
															updateTruckVisitRequest.getAppointmentData(),
															truckVisit.getFirstContainerEdo()));
													truckVisit.setSecondAppointmentEdo(ga.getNbr());
													truckVisit.setSecondEdoNbr(
															getOrder(updateTruckVisitRequest.getAppointmentData(),
																	ga.getCtrId(), "PUM"));
													truckVisit.setSecondContainerEdoTwenty(true);
													truckVisit.setSecondEdoNbr(ga.getReceiveEmpty());
												}
											}
										}
										// ERO
										if ("drop off empty".equals(ga.getTransType().toLowerCase())) {
											if (!ga.getNbr().equals(truckVisit.getFirstAppointmentEro())
													&& !ga.getNbr().equals(truckVisit.getSecondAppointmentEro())) {
												if (truckVisit.getFirstContainerEro() == null) {
													truckVisit.setFirstContainerEro(getEmptyContainer(ga,
															updateTruckVisitRequest.getAppointmentData(), null));
													truckVisit.setFirstContainerEroTwenty(
															isTwenty(updateTruckVisitRequest.getAppointmentData(),
																	ga.getCtrId(), "DOM"));
													truckVisit.setFirstAppointmentEro(ga.getNbr());
													truckVisit.setFirstEroNbr(ga.getReceiveEmpty());
												} else {
													truckVisit.setSecondContainerEro(getEmptyContainer(ga,
															updateTruckVisitRequest.getAppointmentData(),
															truckVisit.getFirstContainerEro()));
													truckVisit.setSecondAppointmentEro(ga.getNbr());
													truckVisit.setSecondEroNbr(
															getOrder(updateTruckVisitRequest.getAppointmentData(),
																	ga.getCtrId(), "DOM"));
													truckVisit.setSecondContainerEroTwenty(true);
													truckVisit.setSecondEroNbr(ga.getReceiveEmpty());
												}
											}
										}
									}
								}

								// Marca que indica que la cita se tomo con salto de regla
								truckVisit.setSkipEmptyRule(tv.getSkipEmptyRule());
								TruckVisit truckVisitUpdated = this.getTruckVisitBO().saveOrUpdate(truckVisit);							
								List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
								List<TemplateEmailNotificationDTO> emailsNotificationsClient = new ArrayList<>();
								String containers = "";
								if (truckVisit.getFirstContainerImport() != null
										&& truckVisit.getSecondContainerImport() != null) {
									containers = containers.concat(truckVisit.getFirstContainerImport()).concat(",")
											.concat(truckVisit.getSecondContainerImport());
								} else if (truckVisit.getFirstContainerImport() != null) {
									containers = containers.concat(truckVisit.getFirstContainerImport());
								} else if (truckVisit.getSecondContainerImport() != null) {
									containers = containers.concat(truckVisit.getSecondContainerImport());
								}
	
								if (truckVisit.getFirstContainerExport() != null
										&& truckVisit.getSecondContainerExport() != null) {
									containers = containers.concat(truckVisit.getFirstContainerExport()).concat(",")
											.concat(truckVisit.getSecondContainerExport());
								} else if (truckVisit.getFirstContainerExport() != null) {
									containers = containers.concat(truckVisit.getFirstContainerExport());
								} else if (truckVisit.getSecondContainerExport() != null) {
									containers = containers.concat(truckVisit.getSecondContainerExport());
								}
	
								emailsNotificationsClient = customerService.getShippersMailsByContainersOrHbls(containers,
										"Container");
								// emailsNotifications =
								// customerService.getShippersMailsByContainers(containers);
								truckVisitNotifications = copyTruckVisit(truckVisitUpdated, emailsNotifications,
										emailsNotificationsClient, containers);
								if (updateTruckVisitRequest.getRule().equals("null") || updateTruckVisitRequest.getRule().equals("AGUADULCE") || updateTruckVisitRequest.getRule().equals("SPIA MANUAL")) {
									truckVisitNotifications.setLocation("Puerto Aguadulce");
									truckVisitNotifications.setSiteAppointment("AGUADULCE");
								} else if (updateTruckVisitRequest.getRule().equals("EXTERNO1") || updateTruckVisitRequest.getRule().equals("SPIA_EXTERNO")) {
									truckVisitNotifications.setLocation("Zona Franca Celpa");
									truckVisitNotifications.setSiteAppointment("EXTERNO1");
								}							
								else if (updateTruckVisitRequest.getRule().equals("EXTERNO2") || updateTruckVisitRequest.getRule().equals("SPIA_EXT_2")) {
									truckVisitNotifications.setLocation("Patio ZAL");
									truckVisitNotifications.setSiteAppointment("EXTERNO2");
								}
								else if (updateTruckVisitRequest.getRule().equals("EXTERNO3") || updateTruckVisitRequest.getRule().equals("SPIA_EXT_3")) {
									truckVisitNotifications.setLocation("CY de Colombia SAS");
									truckVisitNotifications.setSiteAppointment("EXTERNO3");
								}
								truckVisitNotifications.setDriverNotification(lastTruckVisit.getDriver());
								truckVisitNotifications.setTruckNotification(lastTruckVisit.getTruck());
								re = new ResponseEntity<TruckVisitNotifications>(truckVisitNotifications, HttpStatus.OK);
								// re = new ResponseEntity<TruckVisit>(truckVisitUpdated, HttpStatus.OK);
								
							} else {
								ResponseError error = new ResponseError();
								error.setMessage(getProperty("Controller.TruckVisitAppUpdateErrorDataBaseReturn", null,
										getApplicationContext()));
								error.setError(getProperty("Controller.TruckVisitAppUpdateErrorDataBaseReturn", null,
										getApplicationContext()));
								re = new ResponseEntity<ResponseError>(error, HttpStatus.OK);
							}
	
						} else {
							ResponseError error = new ResponseError();
							error.setMessage(getProperty("Controller.TruckVisitAppUpdateError", null, getApplicationContext()));
							error.setError(tv.getError());
							re = new ResponseEntity<ResponseError>(error, HttpStatus.OK);
						}
					} else {
						ResponseError error = new ResponseError();
						error.setMessage(getProperty("Controller.TruckVisitAppUpdateError", null, getApplicationContext()));
						error.setError(truckVisitAppointmentvalidateUpdate.getError());
						re = new ResponseEntity<ResponseError>(error, HttpStatus.OK);
					}
						
				}
			} else {
				String[] errorStr = { errorValidateImport.get(0), errorValidateImport.get(1) };
				ResponseError error = new ResponseError();
				error.setMessage(getProperty("Controller.TruckVisitAppUpdateErrorStorageDate", errorStr,
						getApplicationContext()));
				error.setError(getProperty("Controller.TruckVisitAppUpdateErrorStorageDate", errorStr,
						getApplicationContext()));
				re = new ResponseEntity<ResponseError>(error, HttpStatus.OK);
			}
		
		} catch (BusinessException e) {
			ResponseError error = new ResponseError();
			error.setMessage(getProperty("Controller.TruckVisitAppUpdateErrorDataBase", null, getApplicationContext()));
			error.setError(getProperty("Controller.TruckVisitAppUpdateErrorDataBase", null, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.OK);
		}
		return re;
	}

	private List<String> validateImpoStoragePaidThroughDay(String dateAppointmentStr, List<AppointmentData> listAppData)
			throws BusinessException, ServiceException {
		boolean valido = true;
		List<String> dataError = null;
		try {
			SimpleDateFormat df = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
			Date dateAppointment = df.parse(dateAppointmentStr);
			// recorre los appointments a crear

			for (AppointmentData appointment : listAppData) {
				// si es import
				UnitFacilityVisit unit = null;
				unit = this.getUnitFacilityVisitMdwBo().getSingleUnitById(appointment.getUnitNbr(), "1");
				if (unit != null && "IMPORT".equals(unit.getCategory().name())) {
					// obtener consignee y si es contado validar que la fecha del apponintment sea <
					// StoragePaidThroughDay, si no false y error
					List<BillOfLading> bls = unit.getBillsOfLading();
					Customer consignee = null;
					if (bls != null)
						consignee = this.getCustomerMdwBO().getByIdAndRole(bls.get(0).getConsigneeId(),
								Constants.Billing.ROLES.get(roleShipperConsignee));
					else
						consignee = this.getCustomerMdwBO().getByIdAndRole(unit.getContents().getConsigneeId(),
								Constants.Billing.ROLES.get(roleShipperConsignee));
					boolean isCash = consignee != null && consignee.getStatus() != null
							&& !"on account".equals(consignee.getStatus().toLowerCase())
							&& !"add days to invoice finalized date".equals(consignee.getDueDateRule().toLowerCase());
					if (unit.getStorage() != null) {
						Date dateStorage = unit.getStorage().getStoragePaidthruDay();
						if (isCash && (dateStorage != null && dateAppointment.compareTo(dateStorage) > 0)) {
							valido = false;
							SimpleDateFormat dsf = new SimpleDateFormat("dd-MM-yyyy");
							String dateStorageStr = dsf.format(dateStorage);
							dataError = new ArrayList<String>();
							dataError.add(appointment.getUnitNbr());
							dataError.add(dateStorageStr);
						}
					}
				}
				if (!valido)
					break;
			}
		} catch (ParseException e) {
			throw new BusinessException();
		}

		return dataError;
	}

	private String getOrder(List<AppointmentData> appointmentData, String unitNbr, String transType) {
		String order = null;
		for (AppointmentData data : appointmentData) {
			if (unitNbr.equals(data.getUnitNbr()) && transType.equals(data.getTransType())) {
				order = data.getOrderNbr();
				break;
			}
		}
		return order;
	}

	private boolean isTwenty(List<AppointmentData> appointmentData, String unitNbr, String transType) {
		boolean isTwenty = true;
		for (AppointmentData data : appointmentData) {
			if (unitNbr.equals(data.getUnitNbr()) && transType.equals(data.getTransType())) {
				isTwenty = data.isTwenty();
				break;
			}
		}
		return isTwenty;
	}

	private String getEmptyContainer(GateAppointment ga, List<AppointmentData> appointmentData, String firstContainer) {
		String unit = "";
		for (AppointmentData data : appointmentData) {
			if (ga.getReceiveEmpty().equals(data.getOrderNbr()) && !data.getUnitNbr().equals(firstContainer)) {
				unit = data.getUnitNbr();
				break;
			}
		}
		return unit;
	}

	/**
	 * Setea en el reporte los datos de los units: su nro, modalidad, si es de
	 * ingreso o salida y el peso.
	 * 
	 * @param unit
	 * @param edoNbr
	 * @param eroNbr
	 * @param importOperation
	 * @param truckVisitReport
	 * @throws BusinessException
	 */
	private void setReport(String unit, String edoNbr, String eroNbr, boolean importOperation,
			TruckVisitReportDTO truckVisitReport) throws BusinessException {
		if (edoNbr != null || eroNbr != null) {
			if (edoNbr != null) {
				Edo edo = this.getEdoMdwBo().get(edoNbr);
				EquipmentType itemEquipmentType = this.getEquipmentTypeMdwBo()
						.get(edo.getItems().getItem().get(0).getEquipmentType());
				truckVisitReport.getContenedores().add(unit);
				truckVisitReport.getModalidades().add("FCL");
				truckVisitReport.getIngresosSalidas().add("Salida");
				truckVisitReport.getPesos().add(String.valueOf(itemEquipmentType.getTareWeightKg()));
			}
			if (eroNbr != null) {
				Ero ero = this.getEroMdwBo().get(eroNbr);
				EquipmentType itemEquipmentType = this.getEquipmentTypeMdwBo()
						.get(ero.getItems().getItem().get(0).getEquipmentType());
				truckVisitReport.getContenedores().add(unit);
				truckVisitReport.getModalidades().add("FCL");
				truckVisitReport.getIngresosSalidas().add("Ingreso");
				truckVisitReport.getPesos().add(String.valueOf(itemEquipmentType.getTareWeightKg()));
			}
		} else {
			UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().getSingleUnitById(unit, "1");
			truckVisitReport.getContenedores().add(unit);
			truckVisitReport.getModalidades().add(ufv.getFreightKind());
			if (importOperation) {
				truckVisitReport.getIngresosSalidas().add("Salida");
			} else {
				truckVisitReport.getIngresosSalidas().add("Ingreso");
			}
			if (ufv.getContents() != null && ufv.getContents().getWeightKg() != 0) {
				truckVisitReport.getPesos().add(String.valueOf(ufv.getContents().getWeightKg()));
			} else {
				truckVisitReport.getPesos().add(String.valueOf(ufv.getContainer().getPhysical().getTareWeightKg()));
			}

		}
	}

	/**
	 * agrega a un edo sus units, en el caso de no tenerlos explícitamente en N4
	 * cosntruye los vacíos.
	 * 
	 * @param edo edo al que se le van a agregar los units
	 * @return {@link Edo}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	public Edo constructEdo(Edo edo) throws BusinessException {
		edo.setUnits(new ArrayList<UnitFacilityVisit>());
		int unitId = 0;
		for (Item item : edo.getItems().getItem()) {
			EquipmentType itemEquipmentType = this.getEquipmentTypeMdwBo().get(item.getEquipmentType());
			int containersQuantity;
			boolean hasContainers = (item.getReservedEmptyContainers() != null
					&& item.getReservedEmptyContainers().getReservedEmptyContainer() != null
					&& item.getReservedEmptyContainers().getReservedEmptyContainer().size() > 0);
			if (hasContainers) {
				containersQuantity = item.getReservedEmptyContainers().getReservedEmptyContainer().size();
			} else {
				containersQuantity = item.getQuantity().intValue();
			}
			for (int i = 0; i < containersQuantity; i++) {
				UnitFacilityVisit ufv = new UnitFacilityVisit();
				if (hasContainers) {
					ufv.setId(item.getReservedEmptyContainers().getReservedEmptyContainer().get(i).getEquipNumber());
				} else {
					unitId++;
					ufv = EmptyUtils.constructForOrder(Category.EXPORT, unitId, edo.getLine(), itemEquipmentType);
				}
				edo.getUnits().add(ufv);
			}
		}
		return edo;
	}

	/**
	 * agrega a un ero sus units, en el caso de no tenerlos explícitamente en N4
	 * cosntruye los vacíos.
	 * 
	 * @param ero ero al que se le van a agregar los units
	 * @return {@link Ero}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw.
	 */
	public Ero constructEro(Ero ero) throws BusinessException {
		ero.setUnits(new ArrayList<UnitFacilityVisit>());
		int unitId = 0;
		for (com.spia.services.entities.OrderItems.Item item : ero.getItems().getItem()) {
			EquipmentType itemEquipmentType = this.getEquipmentTypeMdwBo().get(item.getEquipmentType());
			int containersQuantity;
			boolean hasContainers = (item.getExpectedEmptyContainers() != null
					&& item.getExpectedEmptyContainers().getExpectedEmptyContainer() != null
					&& item.getExpectedEmptyContainers().getExpectedEmptyContainer().size() > 0);
			if (hasContainers) {
				containersQuantity = item.getExpectedEmptyContainers().getExpectedEmptyContainer().size();
			} else {
				containersQuantity = item.getQuantity().intValue();
			}
			for (int i = 0; i < containersQuantity; i++) {
				UnitFacilityVisit ufv = new UnitFacilityVisit();
				if (hasContainers) {
					ufv.setId(item.getExpectedEmptyContainers().getExpectedEmptyContainer().get(i).getEquipNumber());
				} else {
					unitId++;
					ufv = EmptyUtils.constructForOrder(Category.EXPORT, unitId, ero.getLine(), itemEquipmentType);
				}
				ero.getUnits().add(ufv);
			}
		}
		return ero;
	}

	/**
	 * 
	 * GET truckVisitAppointment/info/{tvaNbr}
	 * 
	 * Retorna la informacion relacionada con la truck Visit Appointment.
	 * 
	 * @paramtvaNbr numero de la truck Visit Appointment
	 * @return {@link com.spia.businessportal.common.entities.dto.TruckVisitAppointmentServiceDTO}
	 */

	@RequestMapping(value = "info", method = RequestMethod.POST)
	public @ResponseBody String searchPins(@RequestBody Map<String, String> body) {

		String tvaNbr = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /info TruckVisitAppointment");
		
		TruckVisitAppointmentServiceDTO[] truckVisitAppointmentLst = {};

		try {
			LOG.info("TruckVisitAppointmentServiceDTO tvaNbr: " + tvaNbr);
			truckVisitAppointmentLst = truckVisitAppointmentService.getInfo(tvaNbr);
			LOG.info("TruckVisitAppointmentServiceDTO length: " + truckVisitAppointmentLst.length);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}

		if(truckVisitAppointmentLst.length != 0) {
			String JSONResponse = new Gson().toJson(truckVisitAppointmentLst);
			LOG.info("TruckVisitAppointmentServiceDTO: " + JSONResponse);
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(JSONResponse, "POST /info TruckVisitAppointment");

			return encryptedResponse;
		} else return null;
	}

	/**
	 * Envía un mail al usuario informandole que creó la cita exitosamente.
	 * Autor:Elvis Fontalvo - Assert Solutions SAS
	 * Email:efontalvo@assertsolutions.com Date: 18-01-2018
	 * 
	 * @param user usuario al que se le enviara el mail
	 * @param pin  pin que se creo
	 * @throws BusinessException
	 */
	private void sendNotificationAppointment(TruckVisit truckVisit, String type, List<Map<String, String>> messages)
			throws BusinessException {
		try {
			this.getNotificationMdwBO().notificateAppointment(truckVisit, type, messages);
		} catch (Exception e) {
			Notification n = this.getNotificationMdwBO().createAppointmentNotification(truckVisit, type);
			List<FailedNotification> l = new ArrayList<FailedNotification>();
			FailedNotification fail = new FailedNotification();
			fail.setContent(n.getContent());
			fail.setData(n.getData());
			fail.setDate(n.getDate());
			fail.setDeleted(false);
			fail.setTitle(n.getTitle());
			fail.setType(n.getType());
			fail.setUser(truckVisit.getCreatedByLDAP());
			fail.setWatched(n.getWatched());
			l.add(fail);
			this.getNotificationBO().saveFailedNotifications(l);

			throw new BusinessException("no se pudo notificar");
		}

	}

	/**
	 * Crea un mail haciendo uso de un template previamente configurados.
	 * Autor:Elvis Fontalvo - Assert Solutions SAS
	 * Email:efontalvo@assertsolutions.com Date: 18-01-2018
	 * 
	 * @param truckVisit Datos de la Visita Creada
	 * @throws BusinessException
	 */
	private List<Map<String, String>> buildMessages(TruckVisit truckVisit) throws BusinessException {
		String subject = null;
		String template = null;
		String[] strParams = { truckVisit.getTruckVisitNbr() };
		subject = getProperty("Controller.CreateAppointmentEmailSubject", strParams, getApplicationContext());
		template = createAppointment;
		List<Map<String, String>> messages = new ArrayList<Map<String, String>>();
		Map<String, String> mapMessage = new HashMap<String, String>();
		mapMessage.put("subject", subject);
		mapMessage.put("template", template);
		mapMessage.put("appointmentDate", truckVisit.getAppointmentDate().toString());
		if (truckVisit.getFirstContainerEdo() != null || truckVisit.getSecondContainerEdo() != null) {
			if (truckVisit.getSecondContainerEdo() != null) {
				mapMessage.put("unit", truckVisit.getFirstContainerEdo() + " - " + truckVisit.getSecondContainerEdo());
			} else {
				mapMessage.put("unit", truckVisit.getFirstContainerEdo());
			}
		} else if (truckVisit.getFirstContainerEro() != null || truckVisit.getSecondContainerEro() != null) {
			if (truckVisit.getSecondContainerEro() != null) {
				mapMessage.put("unit", truckVisit.getFirstContainerEro() + " - " + truckVisit.getSecondContainerEro());
			} else {
				mapMessage.put("unit", truckVisit.getFirstContainerEro());
			}
		} else if (truckVisit.getFirstContainerExport() != null || truckVisit.getSecondContainerExport() != null) {
			if (truckVisit.getSecondContainerExport() != null) {
				mapMessage.put("unit",
						truckVisit.getFirstContainerExport() + " - " + truckVisit.getSecondContainerExport());
			} else {
				mapMessage.put("unit", truckVisit.getFirstContainerExport());
			}
		} else if (truckVisit.getFirstContainerImport() != null || truckVisit.getSecondContainerImport() != null) {
			if (truckVisit.getSecondContainerImport() != null) {
				mapMessage.put("unit",
						truckVisit.getFirstContainerImport() + " - " + truckVisit.getSecondContainerImport());
			} else {
				mapMessage.put("unit", truckVisit.getFirstContainerImport());
			}
		}

		mapMessage.put("userName", this.getUserBO().getCurrentUser().getNombres());
		mapMessage.put("ufvNbr", truckVisit.getTruckVisitNbr());
		messages.add(mapMessage);
		return messages;
	}

	private String notificationUnitsString(String unitNbr, String notificationUnits) {
		if (notificationUnits == null) {
			notificationUnits = unitNbr;
		} else {
			notificationUnits += ", " + unitNbr;
		}
		return notificationUnits;
	}

	/**
	 * Imprime el pdf del truckVisit appointment de Craga Suleta.
	 * 
	 * @param appNbr   lista de appointments
	 * @param units    lista de units
	 * @param request  petición http
	 * @param response respuesta http
	 * @return ModelAndView
	 */

	@RequestMapping(value = "/breakbulk/pdf/{tvaNbr}", method = RequestMethod.GET)
	public ModelAndView pdfBbk(@PathVariable List<String> tvaNbr, HttpServletRequest request,
			HttpServletResponse response) {
		List<TruckVisit> truckVisits = new ArrayList<TruckVisit>();

		String reporte = "AppointmentBbk.jrxml";
		AppointmentBreakBulkServiceDTO[] cargoLotsList = null;
		HistoryServiceDTO[] tvaInfo = null;
		List<String> unitsList = (new ArrayList<String>());
		try {
			for (String nbr : tvaNbr) {
				cargoLotsList = breakBulkService.searchAppointment(nbr);
				tvaInfo = breakBulkService.getTvaBbk(this.getUserBO().getCurrentUser().getEmpresa().getId(), nbr);

				for (HistoryServiceDTO tva : tvaInfo) {
					TruckVisit truckVisit = new TruckVisit();
					Driver driver = new Driver();
					driver.setCardId(tva.getLicense());
					driver.setLicense(tva.getLicense());
					driver.setName(tva.getConductor());
					truckVisit.setDriver(driver);
					truckVisit.setTruck(tva.getPlaca());
					truckVisit.setAppointmentDate(tva.getCita());
					truckVisit.setTruckVisitNbr(tva.getAppointmentNbr());

					truckVisits.add(truckVisit);
				}
			}

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinPDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		if (!truckVisits.isEmpty()) {
			generatePDFBbk(truckVisits, cargoLotsList, request, response, reporte);
		}
		ModelAndView modal = new ModelAndView("");
		return modal;
	}

	@RequestMapping(value = "/update/breakbulk", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> updateTruckVisitBbk(
			@RequestBody TruckVisitAppointmentBreakBulkDTO truckVisitAppointmentBreakBulkDTO) throws Exception {
		ResponseEntity<?> re = null;
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		List<Driver> drivers = null;
		List<Truck> trucks = null;
		DriverDTO[] responseDriver = null;
		DriverValidationDTO[] response = null;
		TruckValidationDTO[] responsetruck = null;
		DecimalFormatSymbols simbolos = new DecimalFormatSymbols();
		simbolos.setDecimalSeparator('.');
		DecimalFormat formateador = new DecimalFormat("#.##", simbolos);		
		
		try {
			WeightServiceDTO[] weightServiceDTO = searchWeight(truckVisitAppointmentBreakBulkDTO.getTruck(),
					truckVisitAppointmentBreakBulkDTO.getAppointmentDate());
			boolean validate = validateWeight(weightServiceDTO, truckVisitAppointmentBreakBulkDTO.getWeight(),
					truckVisitAppointmentBreakBulkDTO.getInitialWeight());
			if (validate) {
				String[] strParams = {};
				String error = getProperty("Controller.TruckVisitAppointment.bbk.edit.weight.ERROR", strParams,
						getApplicationContext());
				LOG.error(error);
				ResponseError r = new ResponseError();
				r.setError(error);
				re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
				return re;
			}

			LOG.info("N4 User Id: " + currentUser.getEmpresa().getId());
			Date appointmentDate = truckVisitAppointmentBreakBulkDTO.getAppointmentDate();
        
			LocalDateTime appointmentDateTime = appointmentDate.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime();
        
			// Definir el formateador para el formato yyyy-MM-dd
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
			
			// Formatear la fecha
			String formattedDate = appointmentDateTime.format(formatter);
			DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        
			// Formatear la hora
			String formattedTime = appointmentDateTime.format(timeFormatter);
        
			
			if (currentUser.getEmpresa().getId() != null) {
				responseDriver = driverService
						.driverValidation(truckVisitAppointmentBreakBulkDTO.getDriver().getCardId());				
				AppointmentBreakBulkServiceDTO[] cargoLotsList = breakBulkService.searchAppointment(truckVisitAppointmentBreakBulkDTO.getTruckVisitNbr());
				String cargoLots = "";
				List<String> cargoList = new ArrayList<>();
				if (cargoLotsList != null && cargoLotsList.length > 0) {
					for (AppointmentBreakBulkServiceDTO o : cargoLotsList) {
						if (!cargoLots.contains(o.getUnit_nbr())) {
							cargoList.add(o.getUnit_nbr());
							if (cargoLots.equals("")) {
								cargoLots = cargoLots.concat(o.getUnit_nbr());
							} else {
								cargoLots = cargoLots.concat(",").concat(o.getUnit_nbr());
							}
						}
					}
				}
				String hazard = "false";
				if (truckVisitAppointmentBreakBulkDTO.getIsHazard().equals("true")) {
					hazard = "true";
				}
				else {
						if (truckVisitAppointmentBreakBulkDTO.getIsHazard().contains(",")) {					
						hazard = this.validateHazardApp(cargoLots +","+ truckVisitAppointmentBreakBulkDTO.getIsHazard());
						}
					else {
						hazard = this.validateHazardApp(cargoLots);
						}
					}
				
				response = driverService.driverValidationByDateService(
						truckVisitAppointmentBreakBulkDTO.getDriver().getCardId(),
						truckVisitAppointmentBreakBulkDTO.getAppointmentDate(), hazard);
				if ((responseDriver != null && responseDriver.length > 0 && responseDriver[0].getValidacion() != null)
						|| (response != null && response.length > 0 && response[0].getData() != null)) {
					String[] strParams = null;
					List<String> strParamss = new ArrayList<>();
					strParamss.add(truckVisitAppointmentBreakBulkDTO.getDriver().getName());
					for (DriverDTO driverDTO : responseDriver) {
						if (driverDTO.getValidacion() != null) {
							strParamss.add(driverDTO.getValidacion());
						}
					}
					for (DriverValidationDTO driverValidationDTO : response) {
						if (driverValidationDTO.getData() != null) {
							strParamss.add(driverValidationDTO.getData());
						}
					}
					strParams = strParamss.toArray(new String[strParamss.size()]);
					String error = "";
					if (strParamss.toString().contains("peligrosa")) {
						error = getProperty("Controller.TruckVisitAppointment.error.DRIVER_WITHOUT_PERMISSION_HAZARD", strParams,getApplicationContext());

					}
						
					else {error = getProperty("Controller.TruckVisitAppointment.error.DRIVER_NOT_EXIST", strParams,	getApplicationContext());
					}
					LOG.error(error);
					ResponseError r = new ResponseError();
					r.setError(error);
					re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
					return re;
				}

				responsetruck = truckService.truckValidationByDateService(truckVisitAppointmentBreakBulkDTO.getTruck(),
						truckVisitAppointmentBreakBulkDTO.getAppointmentDate());
				if (responsetruck != null && responsetruck.length > 0 && responsetruck[0].getData() != null) {
					String[] strParams = null;
					List<String> strParamss = new ArrayList<>();
					strParamss.add(truckVisitAppointmentBreakBulkDTO.getTruck());
					for (TruckValidationDTO truckValidationDTO : responsetruck) {
						strParamss.add(truckValidationDTO.getData());
					}
					strParams = strParamss.toArray(new String[strParamss.size()]);
					String error = getProperty("Controller.TruckVisitAppointment.error.TRUCK_NOT_EXIST", strParams,
							getApplicationContext());
					LOG.error(error);
					ResponseError r = new ResponseError();
					r.setError(error);
					re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
					return re;
				}

			}

			UpdateTruckVisitRequestPortal updateTruckVisitRequest = new UpdateTruckVisitRequestPortal();
			updateTruckVisitRequest.setTruckVisitNbr(truckVisitAppointmentBreakBulkDTO.getTruckVisitNbr());
			updateTruckVisitRequest.setDriverCardId(truckVisitAppointmentBreakBulkDTO.getDriver().getCardId());
			updateTruckVisitRequest.setLicense(truckVisitAppointmentBreakBulkDTO.getTruck());
			updateTruckVisitRequest.setAppointmentDate(formattedDate);
			updateTruckVisitRequest.setAppointmentHour(formattedTime);
			updateTruckVisitRequest.setInformationAppointment(truckVisitAppointmentBreakBulkDTO.getInformationAppointment());			

			TruckVisitAppointmentBreakBulkFilter truckVisitAppointmentBreakBulkFilter = new TruckVisitAppointmentBreakBulkFilter();
			truckVisitAppointmentBreakBulkFilter
					.setTruckVisitAppointmentNbr(updateTruckVisitRequest.getTruckVisitNbr());

			TruckVisitAppointment truckVisitApp = this.getTruckVisitAppointmentMdwBO()
					.get(updateTruckVisitRequest.getTruckVisitNbr());
			if (truckVisitApp != null && (truckVisitApp.getError() == null
					|| (truckVisitApp.getError() != null && truckVisitApp.getError().isEmpty()))) {

				if (updateTruckVisitRequest.getLicense() != null) {
					updateTruckVisitRequest.setLicense(updateTruckVisitRequest.getLicense().trim());
				}
				if (updateTruckVisitRequest.getDriverCardId() != null) {
					updateTruckVisitRequest.setDriverCardId(updateTruckVisitRequest.getDriverCardId().trim());
				}
				updateTruckVisitRequest.setManifestNbr(truckVisitAppointmentBreakBulkDTO.getManifestNbr());
				updateTruckVisitRequest.setcCACode(truckVisitAppointmentBreakBulkDTO.getcCACode());
				updateTruckVisitRequest.setcCADescription(truckVisitAppointmentBreakBulkDTO.getcCADescription());
				updateTruckVisitRequest.setIsHazard(truckVisitAppointmentBreakBulkDTO.getIsHazard());
				updateTruckVisitRequest.setRule("SPIA MANUAL");
				TruckVisitAppointmentBreakBulk truckVisitAppointmentBB = null;
				this.getTruckVisitAppointmentMdwBO().updateTruckVisitBbk(updateTruckVisitRequest);

				List<TruckVisitAppointmentBreakBulk> tvaList = this.getTruckVisitAppointmentBreakBulkBO()
						.search(truckVisitAppointmentBreakBulkFilter, new Page(1, 0)).getResult();
				for (TruckVisitAppointmentBreakBulk tva : tvaList) {
					TruckVisitAppointmentBreakBulk newTva = new TruckVisitAppointmentBreakBulk();
					newTva = tva;
					newTva.setTruck(updateTruckVisitRequest.getLicense().trim());
					newTva.setLicense(updateTruckVisitRequest.getDriverCardId().trim());
					truckVisitAppointmentBB = this.getTruckVisitAppointmentBreakBulkBO().saveOrUpdate(newTva);
				}
				try {
					TruckVisitAppointmentBreakBulk truckVisitAppointmentBreakBulk = null;
					TruckVisitAppointmentBreakBulk truckVisitAppointmentBreakBulkResponse = new TruckVisitAppointmentBreakBulk();
					PinContainerized pinContainerized = null;
					String referenceNbr = "";
					List<String> errorList = new ArrayList<String>();
					// User currentUser = this.getUserBO().getCurrentUser();
					// Hash donde la clave es el pin y el valor las cantidades disponibles.
					HashMap<String, Long> pinQuantity = new HashMap<String, Long>();
					// Hash donde la clave es el pin y el valor es la suma de las cantidades quieren
					// coordinar
					HashMap<String, Long> appointmentQuantity = new HashMap<String, Long>();
					/* Crear la Truck Visit Appointment */

					/* Crear la cita en la tabla truck_visit_appointment_breakbulk */

					if (truckVisitAppointmentBB != null) {
						String[] arrOfPins = truckVisitAppointmentBreakBulkDTO.getPinNbr().split(",");
						if (arrOfPins.length > 0 && !arrOfPins[0].equals("")) {
							for (String pinItem : arrOfPins) {
								PinFilter pinFilter = new PinFilter();
								pinFilter.setActive(true);
								pinFilter.setPinNbr(pinItem);
								pinFilter.setTruckingCompanyLDAP(currentUser.getEmpresa().getId());
								List<Pin> pins = this.getPinBO().search(pinFilter, new Page(1, 0)).getResult();

								for (Pin pin : pins) {
									truckVisitAppointmentBreakBulk = new TruckVisitAppointmentBreakBulk();
									truckVisitAppointmentBreakBulk.setTruckVisitAppointmentNbr(
											truckVisitAppointmentBB.getTruckVisitAppointmentNbr());
									truckVisitAppointmentBreakBulk.setPin(pin.getId().toString());
									truckVisitAppointmentBreakBulk.setState(truckVisitAppointmentBB.getState());
									truckVisitAppointmentBreakBulk
											.setTruck(truckVisitAppointmentBreakBulkDTO.getTruck());
									truckVisitAppointmentBreakBulk.setCompanyIdLdap(currentUser.getEmpresa().getId());
									Date truckVisitDate = truckVisitAppointmentBB.getAppointmentDate();
									truckVisitAppointmentBreakBulk.setAppointmentDate(truckVisitDate);
									truckVisitAppointmentBreakBulk.setCreatedByLdap(currentUser.getUserName());
									truckVisitAppointmentBreakBulk
											.setManifestNbr(truckVisitAppointmentBreakBulkDTO.getManifestNbr());
									try {
										truckVisitAppointmentBreakBulkResponse = this
												.getTruckVisitAppointmentBreakBulkBO()
												.saveOrUpdate(truckVisitAppointmentBreakBulk);
										for (PinContainerized pinCont : pin.getPinContainerized()) {
											pinContainerized = new PinContainerized();
											pinContainerized = pinCont;
											for (CargoLot cargoLot : truckVisitAppointmentBreakBulkDTO.getCargoLots()) {
												if (cargoLot.getCargoLotId().equals(pinCont.getUnitNbr())) {
													pinContainerized.setTruckVisitAppointmetId(Long.parseLong(
															truckVisitAppointmentBreakBulkResponse.getId().toString()));
													this.getPinContainerizedBO().saveOrUpdate(pinContainerized);
												}
											}
										}
									} catch (TransactionSystemException transactionSystemException) {
										this.executeCancelTruckVisitBreakBulk(truckVisitAppointmentBreakBulk);
									}

								}

							}

							AppointmentBreakBulkServiceDTO[] searchAppointmentResult = breakBulkService
									.searchAppointment(truckVisitAppointmentBreakBulkDTO.getTruckVisitNbr());
							String pintList = "";
							if (searchAppointmentResult != null && searchAppointmentResult.length != 0) {
								for (AppointmentBreakBulkServiceDTO appointmentBreakBulkServiceDTO : searchAppointmentResult) {
									String pin = String.valueOf(appointmentBreakBulkServiceDTO.getPin_id());
									String blNbr = appointmentBreakBulkServiceDTO.getBl_nbr();
									if (pintList.equals("")) {
										pintList = String.valueOf(pin);
										referenceNbr = getReferenceNbr(searchAppointmentResult, pin, currentUser,
												blNbr);
									} else {
										if (!pintList.contains(pin)) {
											pintList = pintList.concat(",").concat(pin);
											String newReferenceNbr = getReferenceNbr(searchAppointmentResult, pin,
													currentUser, blNbr);
											referenceNbr = referenceNbr.concat("//").concat(newReferenceNbr);
										}
									}
								}
								String[] pinCount = pintList.split(",");

								String init = pinCount.length + "~"
										+ truckVisitAppointmentBreakBulkDTO.getTruckVisitNbr() + "|";
								referenceNbr = init.concat(referenceNbr);
								UpdateTruckVisitBbkRequest updateTruckVisitBbkRequest = new UpdateTruckVisitBbkRequest();
								updateTruckVisitBbkRequest
										.setTvaNbr(truckVisitAppointmentBB.getTruckVisitAppointmentNbr());
								updateTruckVisitBbkRequest.setReferenceNbr(referenceNbr);
								updateTruckVisitBbkRequest.setType("UPDATE");
								this.getTruckVisitAppointmentMdwBO().updatReferenceNbr(updateTruckVisitBbkRequest);
							}
						}
						TruckVisitAppointmentBreakBulkNotifications truckVisitAppointmentBreakBulkNotifications = new TruckVisitAppointmentBreakBulkNotifications();
						List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
						if (truckVisitAppointmentBreakBulk == null) {
							truckVisitAppointmentBreakBulk = new TruckVisitAppointmentBreakBulk();
							truckVisitAppointmentBreakBulk
									.setTruckVisitAppointmentNbr(truckVisitAppointmentBB.getTruckVisitAppointmentNbr());
							truckVisitAppointmentBreakBulk.setState(truckVisitAppointmentBB.getState());
							truckVisitAppointmentBreakBulk.setTruck(truckVisitAppointmentBreakBulkDTO.getTruck());
							truckVisitAppointmentBreakBulk.setCompanyIdLdap(currentUser.getEmpresa().getId());
							Date truckVisitDate = truckVisitAppointmentBB.getAppointmentDate();
							truckVisitAppointmentBreakBulk.setAppointmentDate(truckVisitDate);
							truckVisitAppointmentBreakBulk.setCreatedByLdap(currentUser.getUserName());
							truckVisitAppointmentBreakBulkNotifications = copyTruckVisitBreakBulk(
									truckVisitAppointmentBreakBulk, emailsNotifications,
									truckVisitAppointmentBreakBulkDTO.getDriver());
							drivers = driverService
									.getDrivers(EncoderDecoder.encodeBase64(truckVisitApp.getDriverCardId()));
							truckVisitAppointmentBreakBulkNotifications.setDriverNotification(drivers.get(0));
							truckVisitAppointmentBreakBulkNotifications
									.setTruckNotification(truckVisitApp.getTruckLicense());
						}

						re = (new ResponseEntity<TruckVisitAppointmentBreakBulkNotifications>(
								truckVisitAppointmentBreakBulkNotifications, HttpStatus.OK));
						// re = (new
						// ResponseEntity<TruckVisitAppointmentBreakBulk>(truckVisitAppointmentBreakBulk,HttpStatus.OK));

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
					if (e instanceof TransactionSystemException) {
						r.setError(msg);
					}
					if (e instanceof HttpServerErrorException) {
						ObjectMapper mapper = new ObjectMapper();
						error = ((HttpServerErrorException) e).getResponseBodyAsString();
						r = mapper.readValue(error, ResponseError.class);
						r.setError(r.getMessage());
					}
					re = (new ResponseEntity<ResponseError>(r, HttpStatus.BAD_REQUEST));
				}
				// re = new ResponseEntity<TruckVisitAppointment>(tvv, HttpStatus.OK);
			}

			else{
				LOG.error(truckVisitApp.getError());
				ResponseError r = new ResponseError();
				r.setError(truckVisitApp.getError());
				re = (new ResponseEntity<ResponseError>(r, HttpStatus.BAD_REQUEST));
			}
		} catch (BusinessException e) {
			ResponseError error = new ResponseError();
			error.setMessage(getProperty("Controller.TruckVisitAppUpdateErrorDataBase", null, getApplicationContext()));
			error.setError(getProperty("Controller.TruckVisitAppUpdateErrorDataBase", null, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.OK);
		}
		return re;
	}

	private Boolean validateTva(WeightServiceDTO[] request,
			TruckVisitAppointmentBreakBulkDTO truckVisitAppointmentBreakBulkDTO) {
		if (request != null && request.length != 0) {
			WeightServiceDTO truckWeightValidate = request[0];
			if (!truckWeightValidate.getLicense().equals(truckVisitAppointmentBreakBulkDTO.getDriver().getCardId())) {
				return true;
			}
			if (truckWeightValidate.getExistsCompany() == 1) {
				return true;
			}
		}
		return false;
	}

	private ResponseEntity<?> validateDriverAndTruckByTva(TruckVisitAppointmentDTO truckVisitAppointmentDTO)
			throws Exception {
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		List<Driver> drivers = null;
		DriverDTO[] responseDriver = null;
		DriverValidationDTO[] response = null;
		TruckValidationDTO[] responsetruck = null;
		ResponseEntity<?> re = null;
		LOG.info("N4 User Id: " + currentUser.getEmpresa().getId());
		if (currentUser.getEmpresa().getId() != null) {
			responseDriver = driverService.driverValidation(truckVisitAppointmentDTO.getDriver().getCardId());
			response = driverService.driverValidationByDateService(truckVisitAppointmentDTO.getDriver().getCardId(),
					truckVisitAppointmentDTO.getAppointmentDate(),truckVisitAppointmentDTO.getIsHazard());
			if ((responseDriver != null && responseDriver.length > 0 && responseDriver[0].getValidacion() != null)
					|| (response != null && response.length > 0 && response[0].getData() != null)) {
				String[] strParams = null;
				List<String> strParamss = new ArrayList<>();
				strParamss.add(truckVisitAppointmentDTO.getDriver().getName());
				if (responseDriver != null) {	
					for (DriverDTO driverDTO : responseDriver) {
						if (driverDTO.getValidacion() != null) {
							strParamss.add(driverDTO.getValidacion());
						}
					}
				}
				if (response != null) {
					for (DriverValidationDTO driverValidationDTO : response) {
						if (driverValidationDTO.getData() != null) {
							strParamss.add(driverValidationDTO.getData());
						}
					}
				}
				strParams = strParamss.toArray(new String[strParamss.size()]);
				String error = "";
				if (strParamss.toString().contains("peligrosa")) {
					error = getProperty("Controller.TruckVisitAppointment.error.DRIVER_WITHOUT_PERMISSION_HAZARD", strParams,getApplicationContext());
				}
					
				else {error = getProperty("Controller.TruckVisitAppointment.error.DRIVER_NOT_EXIST", strParams,	getApplicationContext());
				}
				LOG.error(error);
				ResponseError r = new ResponseError();
				r.setError(error);
				re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
				return re;
			}

			responsetruck = truckService.truckValidationByDateService(truckVisitAppointmentDTO.getTruck(),
					truckVisitAppointmentDTO.getAppointmentDate());
			if (responsetruck != null && responsetruck.length > 0 && responsetruck[0].getData() != null) {
				String[] strParams = null;
				List<String> strParamss = new ArrayList<>();
				strParamss.add(truckVisitAppointmentDTO.getTruck());
				for (TruckValidationDTO truckValidationDTO : responsetruck) {
					strParamss.add(truckValidationDTO.getData());
				}
				strParams = strParamss.toArray(new String[strParamss.size()]);
				String error = getProperty("Controller.TruckVisitAppointment.error.TRUCK_NOT_EXIST", strParams,
						getApplicationContext());
				LOG.error(error);
				ResponseError r = new ResponseError();
				r.setError(error);
				re = (new ResponseEntity<ResponseError>(r, HttpStatus.OK));
				return re;
			}

		}
		return re;
	}

	private TruckVisitNotifications copyTruckVisit(TruckVisit truckVisit, List<TemplateEmailDTO> emailsNotifications,
			List<TemplateEmailNotificationDTO> mailsNotificationsClient, String containers) {
		TruckVisitNotifications truckVisitNotifications = new TruckVisitNotifications();
		UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
		String[] containerList = containers.split(",");
		List<String> cList = new ArrayList<>();
		truckVisitNotifications.setId(truckVisit.getId());
		truckVisitNotifications.setTruckVisitNbr(truckVisit.getTruckVisitNbr());
		truckVisitNotifications.setFirstAppointmentImport(truckVisit.getFirstAppointmentImport());
		truckVisitNotifications.setFirstContainerImport(truckVisit.getFirstContainerImport());
		truckVisitNotifications.setFirstContainerImportTwenty(truckVisit.getFirstContainerImportTwenty());
		truckVisitNotifications.setFirstAppointmentImportOrder(truckVisit.getFirstAppointmentImportOrder());
		truckVisitNotifications.setFirstTransTypeImport(truckVisit.getFirstTransTypeImport());
		truckVisitNotifications.setSecondAppointmentImport(truckVisit.getSecondAppointmentImport());
		truckVisitNotifications.setSecondContainerImport(truckVisit.getSecondContainerImport());
		truckVisitNotifications.setSecondContainerImportTwenty(truckVisit.getSecondContainerImportTwenty());
		truckVisitNotifications.setSecondAppointmentImportOrder(truckVisit.getSecondAppointmentImportOrder());
		truckVisitNotifications.setSecondTransTypeImport(truckVisit.getSecondTransTypeImport());
		truckVisitNotifications.setFirstAppointmentExport(truckVisit.getFirstAppointmentExport());
		truckVisitNotifications.setFirstContainerExport(truckVisit.getFirstContainerExport());
		truckVisitNotifications.setFirstContainerExportTwenty(truckVisit.getFirstContainerExportTwenty());
		truckVisitNotifications.setFirstAppointmentExportOrder(truckVisit.getFirstAppointmentExportOrder());
		truckVisitNotifications.setSecondAppointmentExport(truckVisit.getSecondAppointmentExport());
		truckVisitNotifications.setSecondContainerExport(truckVisit.getSecondContainerExport());
		truckVisitNotifications.setSecondContainerExportTwenty(truckVisit.getSecondContainerExportTwenty());
		truckVisitNotifications.setSecondAppointmentExportOrder(truckVisit.getSecondAppointmentExportOrder());
		truckVisitNotifications.setFirstAppointmentEdo(truckVisit.getFirstAppointmentEdo());
		truckVisitNotifications.setFirstContainerEdo(truckVisit.getFirstContainerEdo());
		truckVisitNotifications.setFirstContainerEdoTwenty(truckVisit.getFirstContainerEdoTwenty());
		truckVisitNotifications.setSecondAppointmentEdo(truckVisit.getSecondAppointmentEdo());
		truckVisitNotifications.setSecondContainerEdo(truckVisit.getSecondContainerEdo());
		truckVisitNotifications.setSecondContainerEdoTwenty(truckVisit.getSecondContainerEdoTwenty());
		truckVisitNotifications.setFirstAppointmentEro(truckVisit.getFirstAppointmentEro());
		truckVisitNotifications.setFirstContainerEro(truckVisit.getFirstContainerEro());
		truckVisitNotifications.setFirstContainerEroTwenty(truckVisit.getFirstContainerEroTwenty());
		truckVisitNotifications.setSecondAppointmentEro(truckVisit.getSecondAppointmentEro());
		truckVisitNotifications.setSecondContainerEro(truckVisit.getSecondContainerEro());
		truckVisitNotifications.setSecondContainerEroTwenty(truckVisit.getSecondContainerEroTwenty());
		truckVisitNotifications.setFirstEdoNbr(truckVisit.getFirstEdoNbr());
		truckVisitNotifications.setSecondEdoNbr(truckVisit.getSecondEdoNbr());
		truckVisitNotifications.setFirstEroNbr(truckVisit.getFirstEroNbr());
		truckVisitNotifications.setSecondEroNbr(truckVisit.getSecondEroNbr());
		truckVisitNotifications.setAppointmentDate(truckVisit.getAppointmentDate());
		truckVisitNotifications.setDriver(truckVisit.getDriver());
		truckVisitNotifications.setTruck(truckVisit.getTruck());
		truckVisitNotifications.setPinNbr(truckVisit.getPinNbr());
		truckVisitNotifications.setCreatedByLDAP(truckVisit.getCreatedByLDAP());
		truckVisitNotifications.setCompanyIdLdap(truckVisit.getCompanyIdLdap());
		truckVisitNotifications.setMailsNotifications(emailsNotifications);
		truckVisitNotifications.setCreatedByCompanyNameLDAP(user.getEmpresa().getCompanyName());
		truckVisitNotifications.setCanceled(truckVisit.getCanceled());
		truckVisitNotifications.setMailsNotificationsClient(mailsNotificationsClient);
		if (containerList.length > 0) {
			for (String str : containerList) {
				cList.add(str);
			}
		}

		truckVisitNotifications.setContainers(cList);
		truckVisitNotifications.setSkipEmptyRule(truckVisit.getSkipEmptyRule());
		return truckVisitNotifications;
	}

	private TruckVisitAppointmentBreakBulkNotifications copyTruckVisitBreakBulk(TruckVisitAppointmentBreakBulk tVABB,
			List<TemplateEmailDTO> emailsNotifications, Driver driver) throws Exception {
		TruckVisitAppointmentBreakBulkNotifications truckVisitAppointmentBreakBulkNotifications = new TruckVisitAppointmentBreakBulkNotifications();
		UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
		String hblList = "";
		List<String> hbls = new ArrayList<>();
		AppointmentBreakBulkServiceDTO[] aBBSList = breakBulkService
				.searchAppointment(tVABB.getTruckVisitAppointmentNbr());
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
		// truckVisitAppointmentBreakBulkNotifications.setHbls(hbls);
		if (!hblList.equals("") && emailsNotifications.size() == 0) {
			emailsNotificationsClient = customerService.getShippersMailsByContainersOrHbls(hblList, "Hbl");
			truckVisitAppointmentBreakBulkNotifications.setMailsNotificationsClient(emailsNotificationsClient);
		}
		return truckVisitAppointmentBreakBulkNotifications;
	}

	public WeightServiceDTO[] searchWeight(String truck, Date appointmentDate) throws Exception {
		WeightServiceDTO[] response = null;
		response = breakBulkService.getWeightControl(truck, appointmentDate);
		return response;
	}

	public boolean validateWeight(WeightServiceDTO[] weightServiceDTO, Double weight, Double initialWeight)
			throws Exception {
		Double totalWeight = 0.0;
		boolean errorWeight = false;
		totalWeight = weight;
		for (WeightServiceDTO w : weightServiceDTO) {
			totalWeight = totalWeight + w.getWeigth();
			if (totalWeight > initialWeight) {
				errorWeight = true;
			}
		}
		if (errorWeight) {
			return true;
		}
		return false;
	}
// TODO
	@RequestMapping(value = "/updateHoldByUnits/{type}/{action}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> updateHoldByUnits(@PathVariable String type, @PathVariable String action,
			@RequestBody Map<String,String> value) throws Exception {
		ResponseEntity<?> re = null;

		Gson gson = new Gson();

		String data = value.get("data");

		String stringifyJson = AESEncryptionUtil.getInstance(initVector, key).decrypt(data, "POST /updateHoldByUnits/{type}/{action} TruckVisitAppointment");
		
		UpdateHoldRequest updateHoldRequest = gson.fromJson(stringifyJson, UpdateHoldRequest.class);

		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();

		try {
			updateHoldRequest.setName("HOLD_CONSIGNEE");
			if (action.equals("BLOQ")) {
				updateHoldRequest.setAction("CANCEL_PERMISSION");
			} else {
				updateHoldRequest.setAction("GRANT_PERMISSION");
			}
			updateHoldRequest.setService("UPDATE");
			updateHoldRequest.setType(type);

			// Valido la fecha de reefer y la fecha de storage
			LOG.info("N4 User Id: " + currentUser.getEmpresa().getId());
			SOResponseDTO response = new SOResponseDTO();
			response = this.getTruckVisitAppointmentMdwBO().updateHoldByUnits(updateHoldRequest);
			re = new ResponseEntity<SOResponseDTO>(response, HttpStatus.OK);
			if (re != null) {
				return re;
			}

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.UpdateHolsError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError r = new ResponseError();
			String error = e.getMessage();
			LOG.error(error, e);
			r.setError(error);
			re = (new ResponseEntity<ResponseError>(r, HttpStatus.BAD_REQUEST));
		}

		return re;
	}

	@RequestMapping(value = "/getHoldByUnits/{units}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getHoldByUnits(@PathVariable String units) throws Exception {
		//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
		LOG.info("PETICION: " + units);
		//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
		
		ResponseEntity<?> re = null;
		units = EncoderDecoder.decodeBase64(units);
		String[] unitArray = units.split(",");
		Boolean response = false;
		try {
			HoldsList holds = this.getTruckVisitAppointmentMdwBO().getHoldsList(units);
			for (Unit o : holds.getUnits()) {
				for (String unitNbr : unitArray) {
					if (o.getUnitNbr().equals(unitNbr)) {
						if (o.getHolds() != null && !o.getHolds().isEmpty())
						{
							for (HoldItem hold : o.getHolds()) {
								if (hold.getHoldId().equals("HOLD_CONSIGNEE")) {
									if (hold.getHoldStatus() != null
											&& !hold.getHoldStatus().equalsIgnoreCase("REQUIRED")) {
										response = true;
										re = new ResponseEntity<Boolean>(response, HttpStatus.OK);
									}
								}
							}
						}
						break;
					}
				}
			}
			re = new ResponseEntity<Boolean>(response, HttpStatus.OK);
			if (re != null) {
				return re;
			}

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.UpdateHolsError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError r = new ResponseError();
			String error = e.getMessage();
			LOG.error(error, e);
			r.setError(error);
			re = (new ResponseEntity<ResponseError>(r, HttpStatus.BAD_REQUEST));
		}

		//LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
		LOG.info("RESPUESTA" + re);
		//FIN LOGS DE TRAZABILIDAD, BORRAR DESPUES DEL 11/12/2022
		return re;
	}

	private String getReferenceNbr(AppointmentBreakBulkServiceDTO[] aBBSList, String pinSelected, UsuarioLoginDTO currentUser,
			String blNbr) {
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

		referenceNbr = referenceNbr.concat(
				blNbr + ",Q-" + quantity + ",P-" + formateador.format(weigth) + ",T-" + currentUser.getEmpresa().getCompanyName());

		return referenceNbr;
	}

	@RequestMapping(value = "/getCausalCancellationAppointment", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getCausalCancellationAppointment() throws Exception {
		ResponseEntity<?> re = null;
		try {
			CausalCancellationAppointment[] causalCancellationAppointment = truckVisitAppointmentService
					.getCausalCancellationAppointment();
			re = new ResponseEntity<CausalCancellationAppointment[]>(causalCancellationAppointment, HttpStatus.OK);
			if (re != null) {
				String parsedResponse = new Gson().toJson(causalCancellationAppointment); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /getCausalCancellationAppointment} TruckVisitAppointmentController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
				return re;
			}
		} catch (Exception e) {
			String[] strParams = null;
			String msg = getProperty("Controller.causal.cancellation.appointment.list.ERRROR", strParams,
					getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}

		return re;
	}

	@RequestMapping(value = "/validateManifest", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> validateManifest(
			@RequestBody TruckVisitAppointmentDTO truckVisitAppointmentDTO) throws Exception {
		ResponseEntity<?> re = null;
		try {
			ManisfestResponseDTO manisfestResponseDTO = null;
			//SI ESTA PETICION DEVUELVE NULL, Entonces response true
			manisfestResponseDTO = manifestService.validate(truckVisitAppointmentDTO.getManifestNbr());
			//manisfestResponseDTO = new Gson().fromJson(getProperty("SIMULADOR.VALIDATE.MANIFEST", null, getApplicationContext()), ManisfestResponseDTO.class);
			if(manisfestResponseDTO != null) {
				//SI ESTA VALIDACION DEVUELVE NULL, Entonces response true
				re = validateManifest(manisfestResponseDTO, truckVisitAppointmentDTO);
			}
			if (re != null) {
				return re;
			}
			re = new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = null;
			String msg = getProperty("Controller.TruckVisitApp.manifest.ERROR", strParams, getApplicationContext());
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@SuppressWarnings("unused")
	private ResponseEntity<?> validateManifest(ManisfestResponseDTO manisfestResponseDTO,
			TruckVisitAppointmentDTO truckVisitAppointmentDTO) throws Exception {

		ResponseEntity<?> re = null;
		String[] strParams = null;
		ResponseError error = new ResponseError();
		String truckTva = null;
		String driverTva = null;
		String nbrTruck = null;
		String idDriverTruck = null;
		String idDriverTrailer = null;
		String idOrigin = null;
		String idDestination = null;
		try {
			String validate = "";
			List<ManisfestDTO> info = new ArrayList<>();
			validate = manisfestResponseDTO.getValidate();
			info = manisfestResponseDTO.getInfo();
			if (validate.equals("false")) {
				return re;
			}

			else if (info == null) {
				String msg = getProperty("Controller.TruckVisitApp.manifest.NOT_FOUND", strParams,getApplicationContext());
				error.setError(msg);
				re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
			} else if (info != null && info.size() == 0) {
				String msg = getProperty("Controller.TruckVisitApp.manifest.NOT_FOUND", strParams,
						getApplicationContext());
				error.setError(msg);
				re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
			} else {				
				truckTva = truckVisitAppointmentDTO.getTruck();
				driverTva = truckVisitAppointmentDTO.getDriver().getCardId();
				for (ManisfestDTO manisfestDTO : info) {
					idOrigin = manisfestDTO.getIdOrigin();
					idDestination = manisfestDTO.getIdDestination();
					nbrTruck = manisfestDTO.getNbrTruck();
					idDriverTruck = manisfestDTO.getIdDriverTruck();
					idDriverTrailer = manisfestDTO.getIdDriverTrailer();
					String status = manisfestDTO.getStatus();
					String codBtura = getProperty("Controller.TruckVisitApp.manifest.COD_BUENAVENTURA", strParams, getApplicationContext());
					if (!idOrigin.equals(codBtura) && !idDestination.equals(codBtura)) {
						String msg = getProperty("Controller.TruckVisitApp.manifest.NOT_BUENAVENTURA", strParams,
								getApplicationContext());
						error.setError(msg);
						re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));						
					}
					if (status.equals("CE")) {
						String msg = getProperty("Controller.TruckVisitApp.manifest.CE", strParams,
								getApplicationContext());
						error.setError(msg);
						re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
					} else if (status.equals("AN")) {
						String msg = getProperty("Controller.TruckVisitApp.manifest.AN", strParams,
								getApplicationContext());
						error.setError(msg);
						re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
					} else if (!status.equals("AC")) {
						String[] strPar = { status };
						String msg = getProperty("Controller.TruckVisitApp.manifest.OTHER", strPar,
								getApplicationContext());
						error.setError(msg);
						re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
					} else if (nbrTruck != null && truckTva != null && !nbrTruck.equals(truckTva)) {
						String[] strPar = { nbrTruck, truckVisitAppointmentDTO.getManifestNbr() };
						String msg = getProperty("Controller.TruckVisitApp.manifest.truck.NOT_EQUAL", strPar,
								getApplicationContext());
						error.setError(msg);
						re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
					} else if ((idDriverTruck != null && !idDriverTruck.equals(driverTva))
							|| (idDriverTrailer != null && !idDriverTrailer.equals(driverTva))) {
						String msg = "";
						if (idDriverTruck != null && idDriverTrailer != null) {
							String[] strPar = { truckVisitAppointmentDTO.getManifestNbr(), idDriverTruck, idDriverTrailer };							
							msg = getProperty("Controller.TruckVisitApp.manifest.driver.and.trailer.NOT_EQUAL", strPar,
									getApplicationContext());
						} else if (idDriverTruck != null) {
							String[] strPar = { truckVisitAppointmentDTO.getManifestNbr(), idDriverTruck };
							msg = getProperty("Controller.TruckVisitApp.manifest.driver.NOT_EQUAL", strPar,
									getApplicationContext());
						} else if (idDriverTrailer != null) {
							String[] strPar = { idDriverTrailer, truckVisitAppointmentDTO.getManifestNbr() };
							msg = getProperty("Controller.TruckVisitApp.manifest.driver.NOT_EQUAL", strPar,
									getApplicationContext());
						}
						error.setError(msg);
						re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
					}
				}
			}
		} catch (Exception e) {
			String msg = getProperty("Controller.TruckVisitApp.manifest.ERROR", strParams,
					getApplicationContext());
			error.setError(msg);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}
	
	@RequestMapping(value = "/activeSecurity", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getActiveSecurity() throws Exception {
		ResponseEntity<?> re = null;
		try {
			
			re = new ResponseEntity<String>(selectUnitSecurity, HttpStatus.OK);
			if (re != null) {
				return re;
			}
		} catch (Exception e) {
			String[] strParams = null;
			String msg = getProperty("Controller.truckController.select_unit_hazard.ERROR", strParams,
					getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}

		return re;
	}
	
	@RequestMapping(value = "/activeReefer", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getActiveReefer() throws Exception {
		ResponseEntity<?> re = null;
		try {
			
			re = new ResponseEntity<String>(selectUnitReefer, HttpStatus.OK);
			if (re != null) {
				return re;
			}
		} catch (Exception e) {
			String[] strParams = null;
			String msg = getProperty("Controller.truckController.select_unit_reefer.ERROR", strParams,
					getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}

		return re;
	}
	
	@RequestMapping(value = "validateHazardApp/{units}", method = RequestMethod.GET)
	public @ResponseBody String validateHazardApp(@PathVariable String units) {
		boolean isHazard = false;
		try {
			isHazard = truckVisitAppointmentService.validateHazardApp(units);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.ValidateHazardError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		
		return String.valueOf(isHazard);
	}
	
	
}
