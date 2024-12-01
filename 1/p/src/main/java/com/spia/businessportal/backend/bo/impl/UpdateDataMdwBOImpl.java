package com.spia.businessportal.backend.bo.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.UpdateDataMdwBO;
import com.spia.services.entities.GenericResponseDTO;
import com.spia.services.entities.billing.UpdateData;
import com.spia.services.exception.BOException;

public class UpdateDataMdwBOImpl<T> extends GenericMdwBOImpl<T> implements UpdateDataMdwBO<T> {
	private static final Log LOG = LogFactory.getLog(UpdateDataMdwBOImpl.class);

	@Autowired
	private RestTemplate restTemplate;
	
	public UpdateDataMdwBOImpl() {
		super();
	}

	@Override
	public GenericResponseDTO applyChanges(UpdateData updateData) throws BOException {
		LOG.info(":::::::::::::::::::::::::::::::::::"+getServiceUrl());
		return this.getRestTemplate().postForObject(getServiceUrl() + "/update", updateData, GenericResponseDTO.class);
	}

	public RestTemplate getRestTemplate() {
		return restTemplate;
	}

	public void setRestTemplate(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

}
