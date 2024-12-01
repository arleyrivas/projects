package com.spia.businessportal.backend.bo;

import java.util.Date;

import com.spia.businessportal.common.entities.CustomerRequest;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.business.generic.GenericService;

public interface CustomerRequestBO extends GenericService<CustomerRequest> {

    public void updateCustomerRequest(Long id, String approvalUser, Date approvedAt) throws BusinessException;

}