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
import com.spia.businessportal.common.entities.dto.AgentServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.AgentService;
import com.spia.services.entities.Agent;
import com.spia.services.entities.ContactInfo;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite
 * realizar operaciones con Booking .
 * 
 */

public class AgentServiceImpl implements AgentService {

	private static final Log LOG = LogFactory.getLog(AgentServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Override
	public List<Agent> getAgentsByIdOrName(String search) throws Exception {

		QuerysDTO request = new QuerysDTO();
		AgentServiceDTO[] response = null;
		String idOrName = EncoderDecoder.decodeBase64(search);
		List<Agent> agentList = new ArrayList<>();
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO agentParameterDTO = new QuerysParameterDTO();

		agentParameterDTO.setValue(idOrName);
		agentParameterDTO.setType(type);
		agentParameterDTO.setParameterId(1);

		parameters.add(agentParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("getAgentsByIdOrName");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, AgentServiceDTO[].class);
		for (AgentServiceDTO a : response) {
			Agent agent = new Agent();
			ContactInfo contactInfo = new ContactInfo();
			agent.setId(a.getId());
			agent.setName(a.getName());
			contactInfo.setContactEmail(a.getContactEmail());
			contactInfo.setContactAddress(a.getContactAddress());
			contactInfo.setContactPhone(a.getContactPhone());
			contactInfo.setContactCity(a.getContactCity());
			agent.setContactInfo(contactInfo);
			agent.setCreditStatus(a.getCreditStatus());
			agent.setNotes(a.getGkey());
			agentList.add(agent);
		}
		return agentList;
	}

}
