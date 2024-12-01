package com.spia.businessportal.web.auth;

import java.security.Principal;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.entity.entities.login.ldap.CompanyTypeDTO;
import com.spia.businessportal.common.entities.User;

public class UserPrincipal implements Principal, java.io.Serializable {

	private String name = null;
	private List<CompanyTypeDTO> members;
	private UsuarioLoginDTO user;
	private String error;
	
	@Override
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the members
	 */
	public List<CompanyTypeDTO> getMembers() {
		return members;
	}

	/**
	 * @param members the members to set
	 */
	public void setMembers(List<CompanyTypeDTO> members) {
		this.members = members;
	}

	/**
	 * @return the user
	 */
	public UsuarioLoginDTO getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(UsuarioLoginDTO user) {
		this.user = user;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}
	
	

}