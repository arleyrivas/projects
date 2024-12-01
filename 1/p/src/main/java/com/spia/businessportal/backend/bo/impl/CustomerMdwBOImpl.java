package com.spia.businessportal.backend.bo.impl;

import java.util.Arrays;
import java.util.List;

import org.apache.poi.hssf.record.formula.functions.T;

import com.spia.businessportal.backend.bo.CustomerMdwBO;
import com.spia.services.entities.BillOfLading;
import com.spia.services.entities.billing.Customer;
import com.spia.services.exception.ServiceException;

public class CustomerMdwBOImpl<T>  extends GenericMdwBOImpl<T> implements CustomerMdwBO<T>{

	@Override
	public List<Customer> shippers() throws ServiceException {
		return Arrays.asList(this.getRestTemplate().getForObject(getServiceUrl() + "/shippers", Customer[].class));
	}

	@Override
	public Customer getByIdAndRole(String id, String role)throws ServiceException {
		return (Customer)(this.getRestTemplate().getForObject(getServiceUrl() + "/{id}/role/{role}", Customer.class, id, role));
	}

}
