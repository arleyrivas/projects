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
import com.spia.businessportal.common.entities.dto.CustomerServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailNotificationDTO;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.CustomerService;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite
 * realizar operaciones con Booking .
 * 
 */

public class CustomerServiceImpl implements CustomerService {

	private static final Log LOG = LogFactory.getLog(CustomerServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Override
	public CustomerServiceDTO[] getCustomer(String search, String type) throws Exception {

		QuerysDTO request = new QuerysDTO();
		CustomerServiceDTO[] response = null;
		String idOrName = EncoderDecoder.decodeBase64(search);
		String customerType = EncoderDecoder.decodeBase64(type);
		String src = "String";
		if (customerType.equals("1")) {
			customerType = "HAULIER";
		} else {
			customerType = "SHIPPER";
		}

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO customerParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO typeParameterDTO = new QuerysParameterDTO();

		customerParameterDTO.setValue(idOrName);
		customerParameterDTO.setType(src);
		customerParameterDTO.setParameterId(1);

		typeParameterDTO.setValue(customerType);
		typeParameterDTO.setType(src);
		typeParameterDTO.setParameterId(2);

		parameters.add(customerParameterDTO);
		parameters.add(typeParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("getCustomers");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, CustomerServiceDTO[].class);

		return response;
	}

	@Override
	public List<TemplateEmailNotificationDTO> getShippersMailsByContainersOrHbls(String list, String type) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<TemplateEmailNotificationDTO> response = new ArrayList<>();
		TemplateEmailNotificationDTO[] result = null;
		String src = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO listParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO typeParameterDTO = new QuerysParameterDTO();

		listParameterDTO.setValue(list);
		listParameterDTO.setType(src);
		listParameterDTO.setParameterId(1);

		typeParameterDTO.setValue(type);
		typeParameterDTO.setType(src);
		typeParameterDTO.setParameterId(2);


		parameters.add(listParameterDTO);
		parameters.add(typeParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("getShippersMailsByContainersOrHbls");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		result = gson.fromJson(jsonInString, TemplateEmailNotificationDTO[].class);
		for (TemplateEmailNotificationDTO t : result) {
			String[] mails = null;
			if (t.getMail() != null && !t.getMail().equals("")) {
				mails = t.getMail().split(",");
			}
			if (mails != null && mails.length > 1) {
				for (String str : mails) {
					TemplateEmailNotificationDTO templateEmailNotificationDTO = new TemplateEmailNotificationDTO();
					templateEmailNotificationDTO.setMail(str);
					templateEmailNotificationDTO.setName(t.getName());
					templateEmailNotificationDTO.setInformation(t.getInformation());
					response.add(templateEmailNotificationDTO);
				}
			} else if (mails != null && mails.length == 1) {
				TemplateEmailNotificationDTO templateEmailNotificationDTO = new TemplateEmailNotificationDTO();
				templateEmailNotificationDTO.setMail(mails[0]);
				templateEmailNotificationDTO.setName(t.getName());
				templateEmailNotificationDTO.setInformation(t.getInformation());
				response.add(templateEmailNotificationDTO);
			}

		}

		return response;
	}

}
