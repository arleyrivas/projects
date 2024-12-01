package com.spia.businessportal.web.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import java.util.Map;
import com.google.gson.Gson;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import org.springframework.beans.factory.annotation.Value;

import ar.com.fluxit.framework.common.exception.BusinessException;

@RestController
public class QuerysController {
	private static final Logger LOG = LoggerFactory.getLogger(QuerysController.class);

	@Autowired
	private QuerysBO querysBO;

	@Value("#{esb['esb.password.key']}")
	private String key;

	@Value("#{esb['esb.password.initialVector']}")
	private String initVector;

	@RequestMapping(value = "/api/execute", consumes = { "application/json" }, produces = {
			"application/json" }, method = RequestMethod.POST)
	public ResponseEntity<?> execute(@RequestBody Map<String, String> body, HttpServletRequest request,
			HttpServletResponse response)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		ResponseEntity<?> responseEntity = null;
		QuerysDTO requestt = null;

		String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /api/execute QuerysController");
		requestt = new Gson().fromJson(decryptedResponse, QuerysDTO.class); 

		try {
			QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(requestt);
			responseEntity = new ResponseEntity<>(querysResponseDTO, HttpStatus.OK);
		} catch (Exception e) {
			QuerysResponseDTO error = new QuerysResponseDTO();
			error.setError(e.getMessage());
			responseEntity = new ResponseEntity<QuerysResponseDTO>(error, HttpStatus.INTERNAL_SERVER_ERROR);
			LOG.error(e.getMessage(), e);
		}
		return responseEntity;
	}
}
