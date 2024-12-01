/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de abr. de 2016 - 2:25:33 p. m.
 */
package com.spia.businessportal.backend.bo.impl;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.HazardMdwBO;
import com.spia.services.entities.Hazard;
import com.spia.services.entities.billing.Invoice;
import com.spia.servicies.entities.notification.Notification;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 */
public class HazardMdwBOImpl <T> extends GenericMdwBOImpl<T> implements HazardMdwBO<T>{

	@Autowired
	private RestTemplate restTemplate;
	
	
	
	@Override
	public List<Hazard> getAllHazards() throws BusinessException {
		return Arrays.asList(this.getRestTemplate().getForObject(getServiceUrl(),Hazard[].class));
	}
	
	public RestTemplate getRestTemplate(){
		return restTemplate;
	}
	
	public void setRestTemplate(RestTemplate restT){
		restTemplate= restT;
	}

	
}
