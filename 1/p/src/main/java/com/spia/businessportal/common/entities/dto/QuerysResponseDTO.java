package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;




public class QuerysResponseDTO implements Serializable {
	private static final long serialVersionUID = -8622214703635158641L;

	private String success;
	
	private Object result;

	private String error;

	public String getSuccess() {
		return success;
	}

	/**
	 * @return the result
	 */
	public Object getResult() {
		return result;
	}

	/**
	 * @param result
	 *            the result to set
	 */
	public void setResult(Object result) {
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
