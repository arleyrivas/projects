package com.spia.businessportal.web.controller;

import java.io.IOException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.service.PingService;
import com.spia.services.exception.BOException;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro Controlador donde se expone la api de negocios del portal
 *         para {@link com.spia.businessportal.common.entities.Pin}
 */
@RequestMapping("/services/ping")
@Controller
public class PingController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(ApplicationManagerController.class);

	@Autowired
	private PingService pingService;

	/**
	 * GET /pingApp/ 
	 * 
	 * @return {@link String}
	 * @throws BusinessException  
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "/pingApp", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getPingApp() throws BOException {
		ResponseEntity<?> re = null;
		try {
			String pingAppRespoonse;
			pingAppRespoonse = pingService.pingApp();
			re = new ResponseEntity<String>(pingAppRespoonse, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError error = new ResponseError();
			error.setError("Se produjo un error:"+ e);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
	
	/**
	 * GET /pingBD/ 
	 * 
	 * @return {@link String}
	 * @throws BusinessException  
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "/pingBD", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getpingBD() throws BOException {
		ResponseEntity<?> re = null;
		try {
			String pingAppRespoonse;
			pingAppRespoonse = pingService.pingBD();
			re = new ResponseEntity<String>(pingAppRespoonse, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError error = new ResponseError();
			error.setError("Se produjo un error:"+ e);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
}
