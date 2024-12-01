/*
 * Assert Solutions
 * Bogota - Colombia
 * http://www.assertsolutions.com
 * Author: Elvis Fontalvo
 * Date:  27 de mar. de 2021 - 10:26:03 p.m.
 */
package com.spia.businessportal.service.impl;

import java.lang.reflect.Type;
import java.util.ArrayList;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.ValidateReCaptchaResponse;
import com.spia.businessportal.common.entities.dto.CreditNotesDTO;
import com.spia.businessportal.common.entities.dto.FormResponseDTO;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.entities.dto.Login;
import com.spia.businessportal.service.LoginService;
import com.spia.businessportal.service.UnitFacilityVisitService;
import com.spia.entity.entities.login.ldap.LoginResponseDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

@Service
public class UnitFacilityVisitServiceImpl implements UnitFacilityVisitService {

	private static final Log LOG = LogFactory.getLog(UnitFacilityVisitServiceImpl.class);

	public UnitFacilityVisitServiceImpl() {
		super();
	}

	private String urlServicio;

	@Autowired
	private RestTemplate restTemplate;

	@SuppressWarnings("rawtypes")
	@Override
	public FormResponseDTO getTransferForm(String transferTemplateNbr) throws Exception {
		Boolean validate = false;
		try {
			FormResponseDTO response = null;
			@SuppressWarnings({ "unchecked"})
			GenericResponseDTO<FormResponseDTO> genericResponseDTO = restTemplate.getForEntity(getUrlServicio() + transferTemplateNbr, GenericResponseDTO.class).getBody();
			GsonBuilder builder = new GsonBuilder();
			builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
			builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
			Gson gson = builder.create();
			if (genericResponseDTO.getSuccess().equals("true")) {
				String jsonInString = gson.toJson(genericResponseDTO.getResult());
				response = gson.fromJson(jsonInString, FormResponseDTO.class);
			} else {
				String jsonInString = gson.toJson(genericResponseDTO);
				response = gson.fromJson(jsonInString, FormResponseDTO.class);
				validate = true;
				//throw new BusinessException(genericResponseDTO.getError());
			}
			return response;
		} catch (Exception ex) {
			if (validate) {
				throw new BusinessException(ex.getMessage());
			} else {
				return null;
			}

		}
	}

	/**
	 * @return the urlServicio
	 */
	public String getUrlServicio() {
		return urlServicio;
	}

	/**
	 * @param urlServicio the urlServicio to set
	 */
	public void setUrlServicio(String urlServicio) {
		this.urlServicio = urlServicio;
	}
}
