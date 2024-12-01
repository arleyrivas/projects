package com.spia.businessportal.common.ldap.proxy.dto;

import java.io.Serializable;

public class SecondPasswordMethodDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String idCompany;
	private String isSecondPasswordSMS;
	private String isSecondPasswordMail;

	public String getIdCompany() {
		return idCompany;
	}

	public void setIdCompany(String idCompany) {
		this.idCompany = idCompany;
	}

	public String getIsSecondPasswordSMS() {
		return isSecondPasswordSMS;
	}

	public void setIsSecondPasswordSMS(String isSecondPasswordSMS) {
		this.isSecondPasswordSMS = isSecondPasswordSMS;
	}

	public String getIsSecondPasswordMail() {
		return isSecondPasswordMail;
	}

	public void setIsSecondPasswordMail(String isSecondPasswordMail) {
		this.isSecondPasswordMail = isSecondPasswordMail;
	}

}
