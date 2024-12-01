package com.spia.businessportal.web.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
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
import com.spia.businessportal.common.entities.TruckUser;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.DeactivatePinDTO;
import com.spia.businessportal.common.entities.dto.PinCriteria;
import com.spia.businessportal.common.entities.dto.PinReportDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.filters.PinContainerizedFilter;
import com.spia.businessportal.common.filters.PinFilter;
import com.spia.businessportal.common.filters.TruckVisitFilter;
import com.spia.businessportal.common.utils.JasperUtils;
import com.spia.services.entities.EquipmentType;
import com.spia.services.entities.Hazard;
import com.spia.services.entities.billing.Invoice;
import com.spia.servicies.entities.notification.Notification;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;
import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

/**
 * @author facundo Controlador donde se expone la api de negocios del portal
 *         para {@link com.spia.businessportal.common.entities.Pin}
 */
@RequestMapping("/api/hazards")
@Controller
public class HazardController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(ApplicationManagerController.class);

	/**
	 * 
	 * GET hazards/{hazardNbr}
	 * 
	 * Retorna todos los hazards.
	 * 
	 * @return {@link com.spia.businessportal.common.entities.Hazard}
	 */

	@RequestMapping(value = "", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity getAllHazards() {
		ResponseEntity re = null;
		try {
				List<Hazard> hazards= this.getHazardMdwBO().getAllHazards();
				re = new ResponseEntity<List<Hazard>>(hazards,HttpStatus.OK);
			
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.HazardRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
	
	@RequestMapping(value = "/{unUna:.+}",method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> get(@PathVariable String unUna) throws BusinessException{	
		ResponseEntity re = null;
		try {
			Hazard hazard = this.getHazardMdwBO().get(unUna);
			re = new ResponseEntity<Hazard>(hazard,HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = {unUna};
			String msg = getProperty("Controller.HazardExistRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	

}
