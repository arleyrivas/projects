package com.spia.businessportal.common.entities.dto;

public class EmailParameterDTO {

	private String parameterId;
	private String value;

	public EmailParameterDTO() {
		super();

	}

	public EmailParameterDTO(String parameterId, String value) {
		super();
		this.parameterId = parameterId;
		this.value = value;
	}

	public String getParameterId() {
		return parameterId;
	}

	public void setParameterId(String parameterId) {
		this.parameterId = parameterId;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}
