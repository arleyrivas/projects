package com.spia.businessportal.common.ldap.proxy.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import ar.com.fluxit.framework.entities.user.CompanyTypeDTO;


public class EmpresaDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String id;
	private String nombre;
	private String descripcion;
	private List<String> tiposEmpresas = new ArrayList<>();
	private List<String> usuarios = new ArrayList<>();
	private String companyName;
	private String adminName;
	private String adminEmail;
	private List<CompanyTypeDTO> tipoEmpresasDTO = new ArrayList<>();
	private String numMaxEmpleado;
	private List<String> privilegiosNotificables = new ArrayList<>();
	private String lockCompany;
	private String lockCompanyJustification;
	private String allowStaffAnotherAgency;
	private String ipRestriction;
	private List<String> ipsRestricted = new ArrayList<>();
	private String autorizado;
	private String celular;	

	
	
	
	public String getCelular() {
		return celular;
	}
	public void setCelular(String celular) {
		this.celular = celular;
	}
	public String getAutorizado() {
		return autorizado;
	}
	public void setAutorizado(String autorizado) {
		this.autorizado = autorizado;
	}
	public String getLockCompany() {
		return lockCompany;
	}
	public void setLockCompany(String lockCompany) {
		this.lockCompany = lockCompany;
	}
	public String getLockCompanyJustification() {
		return lockCompanyJustification;
	}
	public void setLockCompanyJustification(String lockCompanyJustification) {
		this.lockCompanyJustification = lockCompanyJustification;
	}
	public String getAllowStaffAnotherAgency() {
		return allowStaffAnotherAgency;
	}
	public void setAllowStaffAnotherAgency(String allowStaffAnotherAgency) {
		this.allowStaffAnotherAgency = allowStaffAnotherAgency;
	}
	public String getIpRestriction() {
		return ipRestriction;
	}
	public void setIpRestriction(String ipRestriction) {
		this.ipRestriction = ipRestriction;
	}
	public List<String> getIpsRestricted() {
		return ipsRestricted;
	}
	public void setIpsRestricted(List<String> ipsRestricted) {
		this.ipsRestricted = ipsRestricted;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public List<String> getTiposEmpresas() {
		return tiposEmpresas;
	}
	public void setTiposEmpresas(List<String> tiposEmpresas) {
		this.tiposEmpresas = tiposEmpresas;
	}
	public List<String> getUsuarios() {
		return usuarios;
	}
	public void setUsuarios(List<String> usuarios) {
		this.usuarios = usuarios;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	public String getAdminEmail() {
		return adminEmail;
	}
	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}
	public List<CompanyTypeDTO> getTipoEmpresasDTO() {
		return tipoEmpresasDTO;
	}
	public void setTipoEmpresasDTO(List<CompanyTypeDTO> listCompanyTypeDTO) {
		this.tipoEmpresasDTO = listCompanyTypeDTO;
	}
	public String getNumMaxEmpleado() {
		return numMaxEmpleado;
	}
	public void setNumMaxEmpleado(String numMaxEmpleado) {
		this.numMaxEmpleado = numMaxEmpleado;
	}
	public List<String> getPrivilegiosNotificables() {
		return privilegiosNotificables;
	}
	public void setPrivilegiosNotificables(List<String> privilegiosNotificables) {
		this.privilegiosNotificables = privilegiosNotificables;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
