/*
 * Assert Solutions
 * Bogota - Colombia
 * http://www.assertsolutions.com
 * Author: Elvis Fontalvo
 * Date:  27 de mar. de 2021 - 10:26:03 p.m.
 */
package com.spia.businessportal.service.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.entities.dto.ManisfestRequestDTO;
import com.spia.businessportal.common.entities.dto.ManisfestResponseDTO;
import com.spia.businessportal.service.ManifestService;
import com.spia.businessportal.service.UnitFacilityVisitService;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

@Service
public class ManifestServiceImpl implements ManifestService {

	private static final Log LOG = LogFactory.getLog(ManifestServiceImpl.class);

	public ManifestServiceImpl() {
		super();
	}

	private String urlServicio;

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private UserBO userBO;

	@Override
	public ManisfestResponseDTO validate(String manifestNbr) throws Exception {
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();
		Boolean validate = false;
		try {
			ManisfestResponseDTO response = null;
			HttpHeaders headers = new HttpHeaders();
			headers.add("Content-Type", MediaType.APPLICATION_JSON.toString());
			headers.add("Accept", MediaType.APPLICATION_JSON.toString());
			ManisfestRequestDTO manisfestRequestDTO = new ManisfestRequestDTO();
			manisfestRequestDTO.setManifestNbr(manifestNbr);
			manisfestRequestDTO.setNitCompany(userlogin.getEmpresa().getId());
			HttpEntity<ManisfestRequestDTO> entity = new HttpEntity<ManisfestRequestDTO>(manisfestRequestDTO, headers);

			GenericResponseDTO<ManisfestResponseDTO> genericResponseDTO = restTemplate
					.exchange(getUrlServicio(), HttpMethod.POST, entity, GenericResponseDTO.class).getBody();
			GsonBuilder builder = new GsonBuilder();
			builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
			builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
			Gson gson = builder.create();
			if (genericResponseDTO.getSuccess().equals("true")) {
				String jsonInString = gson.toJson(genericResponseDTO.getResult());
				response = gson.fromJson(jsonInString, ManisfestResponseDTO.class);
			} 			
			else {
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
