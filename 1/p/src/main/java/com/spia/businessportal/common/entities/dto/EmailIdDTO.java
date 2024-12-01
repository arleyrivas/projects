package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

/**
 * 
 * @author Daniel Perdomo
 *
 */
@JsonSerialize
@JsonAutoDetect
public class EmailIdDTO implements Serializable {

	@JsonProperty
	private String email;
	@JsonProperty
	private String userName;

	public EmailIdDTO() {
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}
