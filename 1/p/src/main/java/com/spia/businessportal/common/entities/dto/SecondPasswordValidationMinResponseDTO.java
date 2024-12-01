package com.spia.businessportal.common.entities.dto;

public class SecondPasswordValidationMinResponseDTO {

	private boolean success;
	private String message;

	public boolean getSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

    public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
