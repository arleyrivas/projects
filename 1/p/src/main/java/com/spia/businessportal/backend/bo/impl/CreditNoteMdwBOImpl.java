/*
 * Assert Solutions
 * Bogota - Colombia
 * http://www.assertsolutions.com
 * Author: Elvis Fontalvo
 * Date:  23 de mar. de 2021 - 17:26:03 p.m.
 */
package com.spia.businessportal.backend.bo.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.CreditNoteMdwBO;
import com.spia.businessportal.common.entities.dto.SOResponseDTO;
import com.spia.businessportal.web.controller.ApplicationManagerController;
import com.spia.services.entities.billing.Crossing;
import com.spia.services.exception.BOException;

public class CreditNoteMdwBOImpl<T> extends GenericMdwBOImpl<T> implements CreditNoteMdwBO<T> {
	private static final Log LOG = LogFactory.getLog(ApplicationManagerController.class);

	@Autowired
	private RestTemplate restTemplate;

	/**
	 * 
	 */
	public CreditNoteMdwBOImpl() {
		super();
	}

	@Override
	public SOResponseDTO crossing(Crossing crossing) throws BOException {
		LOG.info(":::::::::::::::::::::::::::::::::::"+getServiceUrl());
		return this.getRestTemplate().postForObject(getServiceUrl() + "/crossing", crossing, SOResponseDTO.class);
	}

	public RestTemplate getRestTemplate() {
		return restTemplate;
	}

	public void setRestTemplate(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

}
