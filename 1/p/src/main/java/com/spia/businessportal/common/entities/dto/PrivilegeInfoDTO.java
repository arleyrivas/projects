package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class PrivilegeInfoDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String privilegeName;
	private String action;
	private String description;
	private String isEnabledSecondPassword;
	private String isEnabledNotification;
	private String isEnabledMultiEmpresa;
	private String isEnabledNotificationClient;
	private String isTimeRestriction;

	public String getPrivilegeName() {
		return privilegeName;
	}

	public void setPrivilegeName(String privilegeName) {
		this.privilegeName = privilegeName;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getIsEnabledSecondPassword() {
		return isEnabledSecondPassword;
	}

	public void setIsEnabledSecondPassword(String isEnabledSecondPassword) {
		this.isEnabledSecondPassword = isEnabledSecondPassword;
	}

	public String getIsEnabledNotification() {
		return isEnabledNotification;
	}

	public void setIsEnabledNotification(String isEnabledNotification) {
		this.isEnabledNotification = isEnabledNotification;
	}

	public String getIsEnabledMultiEmpresa() {
		return isEnabledMultiEmpresa;
	}

	public void setIsEnabledMultiEmpresa(String isEnabledMultiEmpresa) {
		this.isEnabledMultiEmpresa = isEnabledMultiEmpresa;
	}

	public String getIsEnabledNotificationClient() {
		return isEnabledNotificationClient;
	}

	public void setIsEnabledNotificationClient(String isEnabledNotificationClient) {
		this.isEnabledNotificationClient = isEnabledNotificationClient;
	}

	public String getIsTimeRestriction() {
		return isTimeRestriction;
	}

	public void setIsTimeRestriction(String isTimeRestriction) {
		this.isTimeRestriction = isTimeRestriction;
	}
	
	

}
