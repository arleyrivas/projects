package com.spia.businessportal.backend.bo;

import java.util.List;

import com.spia.services.entities.billing.CustomerContract;
import com.spia.services.exception.ServiceException;

public interface CustomerContractMdwBO<T> extends GenericMdwBO<T> {
	
	public List<CustomerContract> getContractByCustomerAndDate(String customerId, String date) throws ServiceException;

}
