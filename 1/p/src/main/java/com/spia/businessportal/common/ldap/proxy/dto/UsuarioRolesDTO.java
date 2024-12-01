package com.spia.businessportal.common.ldap.proxy.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * 
 * DTO para el objeto Usuario, objeto que se carga en sesión.
 *
 */

public final class UsuarioRolesDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private String userName;
	private String correo;
	private List<RolDTO> roles = new ArrayList<>();

	public UsuarioRolesDTO() {
		super();
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public List<RolDTO> getRoles() {
		return roles;
	}

	public void setRoles(List<RolDTO> roles) {
		this.roles = roles;
	}

}
