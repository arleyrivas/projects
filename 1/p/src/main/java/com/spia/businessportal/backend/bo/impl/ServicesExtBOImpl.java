package com.spia.businessportal.backend.bo.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.ServicesExtBO;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

public class ServicesExtBOImpl implements ServicesExtBO {

	private static final Logger LOG = LoggerFactory.getLogger(ServicesExtBOImpl.class);
    
	private String urlExternalDocTransp;
	@Autowired
	private RestTemplate restTemplate;
    
    @Override
    public GenericResponseDTO validateDocumentTransport(String id) throws BusinessException {
        ResponseEntity<GenericResponseDTO> response = null;
		try {
            LOG.info("PATH: ", urlExternalDocTransp);
            HttpHeaders headers = new HttpHeaders();
		    headers.add("Content-Type", MediaType.APPLICATION_JSON.toString());
		    headers.add("Accept", MediaType.APPLICATION_JSON.toString());
            HttpEntity<?> entity = new HttpEntity<>(headers);
			response = restTemplate.exchange(urlExternalDocTransp + id, HttpMethod.GET, entity, GenericResponseDTO.class);
			LOG.info("Response Service: {}", response);
		} catch (Exception e) {
			throw new BusinessException(e.getMessage(), e);
		}
        return response.getBody();
    }



	public String getUrlExternalDocTransp() {
		return urlExternalDocTransp;
	}
	public void setUrlExternalDocTransp(String urlExternalDocTransp) {
		this.urlExternalDocTransp = urlExternalDocTransp;
	}
}
