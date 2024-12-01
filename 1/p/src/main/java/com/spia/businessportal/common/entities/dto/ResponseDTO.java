package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ResponseDTO implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String success;

	private List<IpRestrictionDTO> result;

	private String error;

	public ResponseDTO(String success, List<IpRestrictionDTO> result, String error) {
		super();
		this.success = success;
		this.result = result;
		this.error = error;
	}

	public ResponseDTO() {
		super();
		this.result = new ArrayList<>();
	}

	public String getSuccess() {
		return success;
	}

	public void setSuccess(String success) {
		this.success = success;
	}

	public List<IpRestrictionDTO> getResult() {
		return result;
	}

	public void setResult(List<IpRestrictionDTO> result) {
		this.result = result;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	@Override
	public String toString() {
		return "LoginResponseDTO [success=" + success + ", result=" + result + ", error=" + error + "]";
	}

}
