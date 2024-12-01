package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.spia.entity.entities.login.ldap.CompanyTypeDTO;


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
	
	

	public String getAutorizado() {
		return autorizado;
	}

	public void setAutorizado(String autorizado) {
		this.autorizado = autorizado;
	}

	public EmpresaDTO() {
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public List<String> getTiposEmpresas() {
		return tiposEmpresas;
	}

	public void setTiposEmpresas(List<String> tiposEmpresas) {
		this.tiposEmpresas = tiposEmpresas;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<String> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<String> usuarios) {
		this.usuarios = usuarios;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
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

	public void setTipoEmpresasDTO(List<CompanyTypeDTO> tipoEmpresasDTO) {
		this.tipoEmpresasDTO = tipoEmpresasDTO;
	}

	public void setNumMaxEmpleado(String numMaxEmpleado) {
		this.numMaxEmpleado = numMaxEmpleado;
	}

	public String getNumMaxEmpleado() {
		return numMaxEmpleado;
	}

	public List<String> getPrivilegiosNotificables() {
		return privilegiosNotificables;
	}

	public void setPrivilegiosNotificables(List<String> privilegiosNotificables) {
		this.privilegiosNotificables = privilegiosNotificables;
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

	@Override
	public String toString() {
		return this.getClass().getSimpleName() + " {id:" + this.getId() + ", nombre:" + this.getNombre() + "}";
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
	
	
}
