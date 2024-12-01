package com.spia.businessportal.common.ldap.proxy.dto;

import java.io.Serializable;

/**
 * 
 * DTO para el objeto Usuario, objeto que se carga en sesión.
 *
 */

public final class InactivarUsuarioDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private String userName;

	public InactivarUsuarioDTO() {
		super();
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}
