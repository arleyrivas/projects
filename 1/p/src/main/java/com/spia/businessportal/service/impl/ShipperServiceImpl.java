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
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.ShipperServiceDTO;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.ShipperService;
import com.spia.services.entities.AgentRepresentations.AgentRepresentation;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite
 * realizar operaciones con Booking .
 * 
 */

public class ShipperServiceImpl implements ShipperService {

	private static final Log LOG = LogFactory.getLog(ShipperServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Override
	public List<AgentRepresentation> getShippersByIdOrName(String agentGkey, String search) throws Exception {

		QuerysDTO request = new QuerysDTO();
		ShipperServiceDTO[] response = null;
		List<AgentRepresentation> agentRepresentationList = new ArrayList<>();
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO agentParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO shipperParameterDTO = new QuerysParameterDTO();

		agentParameterDTO.setValue(agentGkey);
		agentParameterDTO.setType(type);
		agentParameterDTO.setParameterId(1);

		shipperParameterDTO.setValue(search);
		shipperParameterDTO.setType(type);
		shipperParameterDTO.setParameterId(2);

		parameters.add(agentParameterDTO);
		parameters.add(shipperParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("getShipperByIdOrNamePortal");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, ShipperServiceDTO[].class);
		for (ShipperServiceDTO s : response) {
			AgentRepresentation agentRepresentation = new AgentRepresentation();
			agentRepresentation.setAgentId(s.getId());
			agentRepresentation.setAgentName(s.getName());
			agentRepresentation.setStartDate(s.getStart_date());
			agentRepresentation.setEndDate(s.getEnd_date());
			agentRepresentation.setOea(s.getOea());
			agentRepresentation.setOnAccount(s.getOnAccount());
			agentRepresentationList.add(agentRepresentation);
		}
		return agentRepresentationList;
	}

}
