package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;

public class PrivilegiosNotificablesEmpresaDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String companyId;
	private List<String> privilegios;

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public List<String> getPrivilegios() {
		return privilegios;
	}

	public void setPrivilegios(List<String> privilegios) {
		this.privilegios = privilegios;
	}

}
