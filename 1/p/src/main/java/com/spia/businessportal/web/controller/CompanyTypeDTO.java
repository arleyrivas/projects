package com.spia.businessportal.web.controller;

import java.io.Serializable;

public class CompanyTypeDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String companyTypeId;
	private String companyTypeName;

	public CompanyTypeDTO() {
	}

	public String getCompanyTypeId() {
		return companyTypeId;
	}

	public void setCompanyTypeId(String companyTypeId) {
		this.companyTypeId = companyTypeId;
	}

	public String getCompanyTypeName() {
		return companyTypeName;
	}

	public void setCompanyTypeName(String companyTypeName) {
		this.companyTypeName = companyTypeName;
	}

}
