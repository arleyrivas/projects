package com.spia.businessportal.backend.bo;

import org.apache.poi.hssf.record.formula.functions.T;

import ar.com.fluxit.framework.common.exception.BusinessException;

public interface PrivilegesInfoBO {

	T getPrivilegeList() throws BusinessException;
	
}
