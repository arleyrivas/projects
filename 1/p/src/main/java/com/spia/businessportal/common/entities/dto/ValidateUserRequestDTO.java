package com.spia.businessportal.common.entities.dto;

public class ValidateUserRequestDTO {

	private String userName;
	private String email;
	private String application;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

    public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

    public String getApplication() {
		return application;
	}

	public void setApplication(String application) {
		this.application = application;
	}
}
