package com.spia.businessportal.common.entities.dto;

import java.util.Date;

public class DocumentationHibernateDTO {

	private Long id;
	private String nbr;
	private Integer pendientes;
	private Integer revisada;
	private String companyName;
	private Date lastUploadFileDate;
	private Integer archivos;
	private String estado;
	private String notificador;
	
	public String getNbr() {
		return nbr;
	}

	public void setNbr(String nbr) {
		this.nbr = nbr;
	}

	public Date getLastUploadFileDate() {
		return lastUploadFileDate;
	}

	public void setLastUploadFileDate(Date lastUploadFileDate) {
		this.lastUploadFileDate = lastUploadFileDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getPendientes() {
		return pendientes;
	}

	public void setPendientes(Integer pendientes) {
		this.pendientes = pendientes;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public Integer getArchivos() {
		return archivos;
	}

	public void setArchivos(Integer archivos) {
		this.archivos = archivos;
	}

	public Integer getRevisada() {
		return revisada;
	}

	public void setRevisada(Integer revisada) {
		this.revisada = revisada;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getNotificador() {
		return notificador;
	}

	public void setNotificador(String notificador) {
		this.notificador = notificador;
	}
	
}
