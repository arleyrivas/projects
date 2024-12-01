package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

/**
 * Objeto para recepción del servicio SPIA::BUS::Second Password Generate
 * 
 * @company Assert Solutions S.A.S.
 * @author Andres Falla
 * @since 2019-08-13
 *
 */
/**
 * 
 * DTO para el objeto PrivilegesNotificationCompanyDTO,
 *
 */
@JsonAutoDetect
@JsonSerialize
public class SecondPasswordGenerateRequestDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String privilegeId;
	private String username;

	public String getPrivilegeId() {
		return privilegeId;
	}

	public void setPrivilegeId(String privilegeId) {
		this.privilegeId = privilegeId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

}
