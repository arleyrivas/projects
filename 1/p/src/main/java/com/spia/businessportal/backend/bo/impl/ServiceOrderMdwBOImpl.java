package com.spia.businessportal.backend.bo.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.ServiceOrderMdwBO;
import com.spia.services.entities.ServiceOrder;
import com.spia.services.entities.ServiceOrderServiceDTO;
import com.spia.services.exception.BOException;

public class ServiceOrderMdwBOImpl<T> extends GenericMdwBOImpl<T> implements ServiceOrderMdwBO<T> {

	@Autowired
	private RestTemplate restTemplate;

	public ServiceOrderMdwBOImpl() {
		super();
	}

	@Override
	public ServiceOrder saveServiceOrder(ServiceOrderServiceDTO serviceOrderServiceDTO) throws BOException {
		ServiceOrder serviceOrder = new ServiceOrder();
		serviceOrder = this.getRestTemplate().postForObject(getServiceUrl() + "/saveServiceOrder", serviceOrderServiceDTO,
				ServiceOrder.class);
		return serviceOrder;
	}

	public RestTemplate getRestTemplate() {
		return restTemplate;
	}

	public void setRestTemplate(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

}
