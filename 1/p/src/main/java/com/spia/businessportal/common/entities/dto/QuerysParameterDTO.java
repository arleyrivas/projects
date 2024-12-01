package com.spia.businessportal.common.entities.dto;



public class QuerysParameterDTO {


	private Integer parameterId;

	private String value;

	private String type;

	/**
	 * @return the parameterId
	 */
	public Integer getParameterId() {
		return parameterId;
	}

	/**
	 * @param parameterId
	 *            the parameterId to set
	 */
	public void setParameterId(Integer parameterId) {
		this.parameterId = parameterId;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	/**
	 * @return the type
	 */
	public String getType() {
		return type;
	}

	/**
	 * @param type
	 *            the type to set
	 */
	public void setType(String type) {
		this.type = type;
	}
}
