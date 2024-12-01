package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class CompanyIdAndUserDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	String companyId;
	String userName;

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}
