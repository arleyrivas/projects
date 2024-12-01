package com.spia.businessportal.service.impl;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.dto.CreditNotesDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.RequestManagementDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailDTO;
import com.spia.businessportal.service.RequestManagementService;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 20/08/2021 Request Management
 */

public class RequestManagementServiceImpl implements RequestManagementService {

	private static final Log LOG = LogFactory.getLog(RequestManagementServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Autowired
	private UserBO userBO;
	
	private String notificationEmails;
	

	public String getNotificationEmails() {
		return notificationEmails;
	}

	public void setNotificationEmails(String notificationEmails) {
		this.notificationEmails = notificationEmails;
	}

	@Override
	public List<RequestManagementDTO> getAgentRequestByNbr(String nbr, String agentId) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<RequestManagementDTO> response = null;
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO nbrParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO agentParameterDTO = new QuerysParameterDTO();

		nbrParameterDTO.setType(type);
		nbrParameterDTO.setParameterId(1);
		nbrParameterDTO.setValue(nbr);
		parameters.add(nbrParameterDTO);

		agentParameterDTO.setType(type);
		agentParameterDTO.setParameterId(2);
		agentParameterDTO.setValue(agentId);
		parameters.add(agentParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("getAgentRequestByNbr");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<ArrayList<RequestManagementDTO>>() {
		}.getType();
		response = gson.fromJson(jsonInString, listType);

		return response;
	}

	@Override
	public List<RequestManagementDTO> getClientRequestByNbr(String nbr, String clientId) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<RequestManagementDTO> response = null;
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO nbrParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO clienteParameterDTO = new QuerysParameterDTO();

		nbrParameterDTO.setType(type);
		nbrParameterDTO.setParameterId(1);
		nbrParameterDTO.setValue(nbr);
		parameters.add(nbrParameterDTO);

		clienteParameterDTO.setType(type);
		clienteParameterDTO.setParameterId(2);
		clienteParameterDTO.setValue(clientId);
		parameters.add(clienteParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("getClientRequestByNbr");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<ArrayList<RequestManagementDTO>>() {
		}.getType();
		response = gson.fromJson(jsonInString, listType);

		return response;
	}
	
	@Override
	public List<TemplateEmailDTO> getEmails() throws Exception {

		List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
		String[] mailsSAC = this.getNotificationEmails().split(","); 
		for(String mail:mailsSAC)
		{
			TemplateEmailDTO templateEmailDTO = new TemplateEmailDTO();
			templateEmailDTO.setMail(mail);
			templateEmailDTO.setName("SAC");
			emailsNotifications.add(templateEmailDTO);
		}
		return emailsNotifications;
	}

}
