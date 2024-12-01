package com.spia.businessportal.backend.bo.impl;

import java.util.Arrays;
import java.util.List;

import com.spia.businessportal.backend.bo.CustomerContractMdwBO;
import com.spia.services.entities.billing.Customer;
import com.spia.services.entities.billing.CustomerContract;
import com.spia.services.exception.ServiceException;

public class CustomerContractMdwBOImpl<T> extends GenericMdwBOImpl<T> implements
		CustomerContractMdwBO<T> {

	@Override
	public List<CustomerContract> getContractByCustomerAndDate(
			String customerId, String date) throws ServiceException {
		return Arrays.asList(this.getRestTemplate().getForObject(getServiceUrl() + "/{id}/date/{date}", CustomerContract[].class, customerId, date));
	}

}
