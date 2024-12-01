/**
 * 
 */
package com.spia.businessportal.web.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.time.DateUtils;
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

import com.spia.businessportal.common.entities.AppointmentQuota;
import com.spia.businessportal.common.entities.Quota;
import com.spia.businessportal.common.entities.dto.CheckHoursServiceDTO;
import com.spia.businessportal.common.entities.dto.QuotaServiceBbkDTO;
import com.spia.businessportal.common.entities.dto.QuotaServiceDTO;
import com.spia.businessportal.common.entities.dto.SOResponseDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.Time;
import com.spia.businessportal.service.BreakBulkService;
import com.spia.businessportal.service.ValidateHoursService;
import com.spia.services.entities.HoldItem;
import com.spia.services.entities.HoldsList;
import com.spia.services.entities.Unit;
import com.spia.services.entities.appointment.QuotaRule;
import com.spia.services.entities.appointment.TimeSlot;
import com.spia.services.entities.appointment.TruckVisitAppointmentResponse;

import ar.com.fluxit.framework.common.exception.BusinessException;
import com.google.gson.Gson;
import com.spia.businessportal.common.utils.AESEncryptionUtil;


/**
 * @author diego Controlador donde se expone la api de negocios del portal para
 *         la configuración de turnos.
 */
@RequestMapping("/api/truckVisitConfiguration")
@Controller

public class TruckVisitConfigurationController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(TruckVisitConfigurationController.class);

	@Value("#{hoursBeforeForBbkAppointment['hoursBeforeForAppointment']}")
	private Integer hoursBeforeForAppointment;

	@Value("#{hoursBeforeForBbkAppointment['hoursBeforeForAppointmentByConsignee']}")
	private Integer hoursBeforeForAppointmentByConsignee;

	@Autowired
	private ValidateHoursService validateHoursService;

	@Autowired
	private BreakBulkService breakBulkService;

	@Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;

	/**
	 * Retorna la lista de turnos disponibles formateados para mostrarlos en el
	 * calendario del appointment.
	 * 
	 * @return {@link com.spia.businessportal.common.entities.AppointmentQuota}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	@RequestMapping(value = "/{checkHoldConsignee}/{type}", method = RequestMethod.GET)
	public @ResponseBody  ResponseEntity<?>  getAppointmentRule(@PathVariable Boolean checkHoldConsignee, @PathVariable String type)
			throws BusinessException {
		TruckVisitAppointmentResponse truckVisitRule = this.getAppointmentConfigurationMdwBo()
				.get("getTruckVisitAppointmentconfiguration/REGLA GENERAL/WEEKDAY");

		AppointmentQuota appQuota = new AppointmentQuota();
		ResponseEntity<?> re = null;
		appQuota.setQuotas(new ArrayList<Quota>());
		Set<Quota> appQuotaSet = new HashSet<Quota>();
		// Veo que regla tengo que tomar para cada día.
		Map<String, QuotaRule> mapQuota = new HashMap<String, QuotaRule>();
		for (QuotaRule quotaRule : truckVisitRule.getQuotaRule()) {
			if (quotaRule.getActiveDays().indexOf(",") != -1) {
				String[] quotaKeys = quotaRule.getActiveDays().split(",");
				for (int i = 0; i < quotaKeys.length; i++) {
					mapQuota.put(quotaKeys[i], quotaRule);
				}
			} else {
				mapQuota.put(quotaRule.getActiveDays(), quotaRule);
			}
		}

		DateFormat dateDayFormat = new SimpleDateFormat("EEE", Locale.ENGLISH);
		Calendar cal = Calendar.getInstance();
		int todayHour = cal.get(Calendar.HOUR_OF_DAY);
		int todayMinute = cal.get(Calendar.MINUTE);
		if (todayMinute > 0) {
			todayHour = todayHour + 1;
		}

		if (checkHoldConsignee) {
			if(type.equals("CC"))
			{
				todayHour = todayHour + hoursBeforeForAppointmentByConsignee;
			}
			else
			{
				if(hoursBeforeForAppointment <= hoursBeforeForAppointmentByConsignee)
				{
					todayHour = todayHour + hoursBeforeForAppointmentByConsignee;
				}
				else
				{
					todayHour = todayHour + hoursBeforeForAppointment;
				}
			}				
		}
		else
		{
			if(type.equals("CS"))
			{
				todayHour = todayHour + hoursBeforeForAppointment;
			}
		}

		cal.set(Calendar.HOUR, 0);
		cal.set(Calendar.MINUTE, 0);
		Date dateIterated = Calendar.getInstance().getTime();
		List<AppointmentQuota> appointmentQuotas = new ArrayList<AppointmentQuota>();

		for (int i = 0; i < 30; i++) {
			// Recupero la regla del día actual
			QuotaRule quotaRule = mapQuota.get(dateDayFormat.format(dateIterated));
			// int navis = quotaRule.getSlotDuration()/60;
			// Calculo la cantidad de turnos por día
			int quotaQantity = 1440 / quotaRule.getSlotDuration();

			AppointmentQuota appointmentQuota = new AppointmentQuota();
			appointmentQuota.setQuotas(new ArrayList<Quota>());
			Set<Quota> quotaSets = new HashSet<Quota>();
			SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
			appointmentQuota.setDate(sdf.format(dateIterated));

			Time start = new Time(quotaRule.getStartHour());
			Time end = new Time(quotaRule.getEndHour());
			Quota quota;
			Time startAux = start.addNew(quotaRule.getSlotDuration());
			for (int j = 0; j < quotaQantity; j++) {
				while (startAux.compareTo(end) < 0) {
					quota = new Quota();
					quota.setStart(start.toString());
					startAux.subtract(1);
					quota.setEnd(startAux.toString());
					quota.setCount(quotaQantity);
					//quota.setHoursBefore(hoursBeforeForAppointment);
					quotaSets.add(quota);
					start.add(quotaRule.getSlotDuration());
					startAux = start.addNew(quotaRule.getSlotDuration());
				}
				if (startAux.compareTo(end) > 0) {
					quota = new Quota();
					quota.setStart(start.toString());
					quota.setEnd(end.toString());
					quota.setCount(quotaQantity);
					//quota.setHoursBefore(hoursBeforeForAppointment);
					quotaSets.add(quota);
				}
			}
			appointmentQuota.getQuotas().addAll(quotaSets);
			Collections.sort(appointmentQuota.getQuotas(), Quota.COMPARE_BY_START_TIME);
			if (i == 0) {
				appointmentQuota.removeNotAvailable(todayHour);
			}
			if (i == 1 && todayHour > 24) {
				int differenceTime = todayHour -24;
				appointmentQuota.removeNotAvailable(differenceTime);
			}
			appointmentQuotas.add(appointmentQuota);
			cal.add(Calendar.DATE, 1);
			dateIterated = cal.getTime();
		}
		String parsedResponse = new Gson().toJson(appointmentQuotas); 
		String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /{checkHoldConsignee}/{type} TruckVisiConfigurationController");

		re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
		//return appointmentQuotas;
		return re;
	}

	/**
	 * Completar el appointment quota day con la configuración de la parametrización
	 * 
	 * @param quotas
	 * @param date
	 * @param appointmentQuota
	 */
	private void completeAppointmentQuota(Map<String, List<TimeSlot>> quotas, Date date,
			AppointmentQuota appointmentQuota) {
		if (quotas != null) {
			SimpleDateFormat sdf1 = new SimpleDateFormat("dd-MMM-yy");
			List<TimeSlot> timeSlots = quotas.get(sdf1.format(date));
			if (timeSlots != null) {
				for (TimeSlot timeSlot : timeSlots) {
					Quota qta = appointmentQuota.quota(Time.getTime(timeSlot.getStartTime()));
					if (qta != null) {
						qta.setCount(qta.getCount() - Integer.valueOf(timeSlot.getAppointmentCount()));
					}
				}
			}
		}
	}

	/**
	 * @author Elvis Fontalvo Retorna todas los conductores para la empresa de
	 *         transporte logueada en el portal. GET /api/truck/validation/service
	 * 
	 * @return {@link com.spia.services.entities.Truck}
	 * @throws BusinessException cuando hay un error en los servicios mdw.
	 */

	@RequestMapping(value = "/validation/{timestamp}/{rule}/{units}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getValidation(@PathVariable String timestamp, @PathVariable String rule, @PathVariable String units) {
		ResponseEntity<?> re = null;
		QuotaServiceDTO[] quotaServiceDTO = {};
		try {
			LOG.info("Llego:::::::" + timestamp);
			Date date1 = new Date(Long.parseLong(timestamp) * 1000L);

			Calendar calStar = Calendar.getInstance();
			calStar.setTime(date1);
			calStar.set(Calendar.HOUR_OF_DAY, 0);
			calStar.set(Calendar.MINUTE, 0);
			calStar.set(Calendar.SECOND, 0);

			Calendar calEnd = Calendar.getInstance();
			calEnd.setTime(date1);
			calEnd.set(Calendar.HOUR_OF_DAY, 23);
			calEnd.set(Calendar.MINUTE, 59);
			calEnd.set(Calendar.SECOND, 59);

			Date startDate = calStar.getTime();
			Date endDate = calEnd.getTime();
			LOG.info("startDate:::::::" + startDate.toString());
			LOG.info("endDate:::::::" + endDate.toString());

			//quotaServiceDTO = validateHoursService.searchQuotas(startDate, endDate, rule); Query anterior
			if (units.equals("null")) {
				units = "";
			}
			
			quotaServiceDTO = validateHoursService.searchQuotasCC(startDate, rule, units); 
			if (quotaServiceDTO != null && quotaServiceDTO.length != 0) {
				re = new ResponseEntity<QuotaServiceDTO[]>(quotaServiceDTO, HttpStatus.OK);
				//String parsedResponse = new Gson().toJson(quotaServiceDTO); 
				//String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /validation/{timestamp}/{rule}/{units} TruckVisiConfigurationController");

				//re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/validation/breakbulk/{date}/{truck}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getValidationBbk(@PathVariable String date, @PathVariable String truck) {
		ResponseEntity<?> re = null;
		QuotaServiceBbkDTO[] quotaServiceBbkDTO = {};
		try {
			Date date1 = new Date(Long.parseLong(date) * 1000L);

			Calendar calStar = Calendar.getInstance();
			calStar.setTime(date1);
			calStar.set(Calendar.HOUR_OF_DAY, 0);
			calStar.set(Calendar.MINUTE, 0);
			calStar.set(Calendar.SECOND, 0);

			Date startDate = calStar.getTime();

			quotaServiceBbkDTO = breakBulkService.getHoursValidateBBK(startDate, truck);

			if (quotaServiceBbkDTO != null && quotaServiceBbkDTO.length != 0) {
				//re = new ResponseEntity<QuotaServiceBbkDTO[]>(quotaServiceBbkDTO, HttpStatus.OK);
				String parsedResponse = new Gson().toJson(quotaServiceBbkDTO); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /validation/breakbulk/{date}/{truck} TruckVisiConfigurationController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/checkHours", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> checkHours(@RequestBody CheckHoursServiceDTO checkHoursServiceDTO) {
		ResponseEntity<?> re = null;
		try {
			String units = checkHoursServiceDTO.getUnits();
			String[] unitArray = units.split(",");
			SOResponseDTO response = new SOResponseDTO();
			Boolean unitActive = false;
			Boolean consigneeActive = false;
			response.setError("false");
			response.setSuccess("true");
			response.setResult("OK");
			HoldsList holds = this.getTruckVisitAppointmentMdwBO().getHoldsList(units);
			for (Unit o : holds.getUnits()) {
				for (String unitNbr : unitArray) {
					if (o.getUnitNbr().equals(unitNbr) && o.getHolds() != null) {
						for (HoldItem hold : o.getHolds()) {
							if (hold.getHoldId().equals("HOLD_CONSIGNEE")) {
								consigneeActive = true;
								if (hold.getHoldStatus() != null
										&& !hold.getHoldStatus().equalsIgnoreCase("REQUIRED")) {
									unitActive = true;
								}
							}
						}
						break;
					}
				}
			}
			if (consigneeActive) {
				Date requestDate = checkHoursServiceDTO.getAppointmentDate();
				Date dateIterated = Calendar.getInstance().getTime();
				dateIterated=DateUtils.addHours(dateIterated, 3);
				if (dateIterated.compareTo(requestDate) > 0) {
					response.setError("true");
					response.setSuccess("false");
					response.setResult("TIME");
				}
			}
			
			if(unitActive)
			{
				response.setError("true");
				response.setSuccess("false");
				response.setResult("HOLD");
			}

			re = new ResponseEntity<SOResponseDTO>(response, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
}
