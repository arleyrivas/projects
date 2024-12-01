package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class SOResponseDTO implements Serializable {
	private static final long serialVersionUID = -8622214703635158641L;

	private String success;

	private String result;

	private String error;

	public String getSuccess() {
		return success;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public void setSuccess(String success) {
		this.success = success;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

}
