package com.spia.businessportal.common.ldap.proxy.dto;

import java.io.Serializable;

/**
 * 
 * DTO para el objeto Usuario, objeto que se carga en sesión.
 *
 */

public final class UsuarioDTO implements Serializable {

	private String userName;
	private String nombres;
	private String apellidos;
	private String cargo;
	private String correo;
	private String celular;
	private String licencia;
	private String activo;
	private String info;
	private String telexNumber;
	private String shadowFlag;
	private String createUser;
	private String email;

	private static final long serialVersionUID = 1L;

	private EmpresaDTO empresa;

	// private List<RolDTO> roles = new ArrayList<>();

	private Boolean createdBySAC;

	public UsuarioDTO() {
		super();
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombre) {
		this.nombres = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public String getLicencia() {
		return licencia;
	}

	public void setLicencia(String licencia) {
		this.licencia = licencia;
	}

//	public List<RolDTO> getRoles() {
//		return roles;
//	}
//
//	public void setRoles(List<RolDTO> roles) {
//		this.roles = roles;
//	}

	public EmpresaDTO getEmpresa() {
		return empresa;
	}

	public void setEmpresa(EmpresaDTO empresa) {
		this.empresa = empresa;
	}

	public String getActivo() {
		return activo;
	}

	public void setActivo(String activo) {
		this.activo = activo;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public String getTelexNumber() {
		return telexNumber;
	}

	public void setTelexNumber(String telexNumber) {
		this.telexNumber = telexNumber;
	}

	public String getShadowFlag() {
		return shadowFlag;
	}

	public void setShadowFlag(String shadowFlag) {
		this.shadowFlag = shadowFlag;
	}

	public Boolean getCreatedBySAC() {
		return createdBySAC;
	}

	public void setCreatedBySAC(Boolean createdBySAC) {
		this.createdBySAC = createdBySAC;
	}

	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
