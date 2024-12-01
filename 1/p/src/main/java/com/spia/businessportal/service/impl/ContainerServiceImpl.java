/*
 * Author: Elvis Fontalvo - Assert Solutions 
 * Email: efontalvo@aassertsolutions.com 
 * Date: 29/03/2021 
 * Service Implement to carry out operations with Booking
 * 
 */
package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.dto.CheckDigitApprovedDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.service.ContainerService;

public class ContainerServiceImpl implements ContainerService {

	private static final Log LOG = LogFactory.getLog(ContainerServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Override
	public CheckDigitApprovedDTO[] getVerificationDigitCheck(String containerNbr) throws Exception {

		QuerysDTO request = new QuerysDTO();
		CheckDigitApprovedDTO[] response = null;
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO containerParameterDTO = new QuerysParameterDTO();

		containerParameterDTO.setValue(containerNbr);
		containerParameterDTO.setType(type);
		containerParameterDTO.setParameterId(1);

		parameters.add(containerParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("getVerificationDigitCheck");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, CheckDigitApprovedDTO[].class);

		return response;
	}

}
