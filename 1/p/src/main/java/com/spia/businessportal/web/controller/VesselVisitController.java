/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  30 de jun. de 2016 - 10:13:03 a. m.
 */
package com.spia.businessportal.web.controller;

import java.io.IOException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.services.entities.VesselVisit;
import com.google.gson.Gson;
import ar.com.fluxit.framework.common.exception.BusinessException;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;

/**
 * @author leandro Controlador que contiene las operaciones asociadas a vessel
 *         visit.
 *
 */
@RequestMapping("/api/vessel-visit")
@Controller
public class VesselVisitController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(VesselVisitController.class);

	@Value("${encrypt.messages.initialVector}") public String initVector;
	@Value("${encrypt.messages.key}") public String key;

	/**
	 * GET /user -> obtiene la visita
	 * 
	 * @return {@link VesselVisit}
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> get(@PathVariable String id) throws BusinessException {
		ResponseEntity re = null;
		try {
			VesselVisit vesselVisit = this.getVesselVisitMdwBO().get(id);
			if (vesselVisit != null) {
				String parsedResponse = new Gson().toJson(vesselVisit); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /vessel-visit/{id} VesselVisitController");
				LOG.info("/api/vessel-visit/{id}");
				LOG.info(parsedResponse);

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			} else {
				String[] strParams = null;
				String msg = getProperty("Controller.VesselVisitNotFound", strParams, getApplicationContext());
				LOG.error(msg);
				ResponseError error = new ResponseError();
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} catch (Exception e) {
			String[] strParams = null;
			LOG.error(e.getMessage(), e);
			String msg = getProperty("Controller.VesselVisitError", strParams, getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return re;
	}

	@RequestMapping(value = "/booking/{bookingNbr}", method = RequestMethod.GET)
	public ResponseEntity<?> getBookingVesselVisit(@PathVariable("bookingNbr") String bookingNbr)
			throws JsonParseException, JsonMappingException, IOException {
		ResponseEntity<?> re = null;

		try {
			bookingNbr = EncoderDecoder.decodeBase64(bookingNbr);
			VesselVisit visit = this.getBookingMdwBo().getBookingVesselVisit(bookingNbr);
			re = new ResponseEntity<VesselVisit>(visit, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

}
