package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class IpRestrictionDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	String address;
	String description;
	String type;

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
