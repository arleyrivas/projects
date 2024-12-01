package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class ResponsePrivilegesNotifiableCompanyDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String privilegeName;
	private String description;
	private Boolean activo;
	private String action;

	public String getPrivilegeName() {
		return privilegeName;
	}

	public void setPrivilegeName(String privilegeName) {
		this.privilegeName = privilegeName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getActivo() {
		return activo;
	}

	public void setActivo(Boolean activo) {
		this.activo = activo;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

}
