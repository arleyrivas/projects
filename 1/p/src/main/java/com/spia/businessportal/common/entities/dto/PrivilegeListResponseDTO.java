package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class PrivilegeListResponseDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String success;
	private List<PrivilegeInfoDTO> result = new ArrayList<>();
	private String error;

	public PrivilegeListResponseDTO() {
		super();
	}

	public String getSuccess() {
		return success;
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

	public List<PrivilegeInfoDTO> getResult() {
		return result;
	}

	public void setResult(List<PrivilegeInfoDTO> result) {
		this.result = result;
	}
}
