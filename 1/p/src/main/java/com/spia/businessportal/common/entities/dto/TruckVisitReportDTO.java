/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  15 de dic. de 2015 - 12:29:27 p. m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.List;

/**
 * Entidad para la impresión del reporte de truck visit.
 * 
 * @author leandro
 *
 */
public class TruckVisitReportDTO {

	private String truckVisitNbr;
	private String truckVisitFechaYHora;
	private String truckingCompanyId;
	private String truckingCompanyName;
	private String conductor;
	private String conductorId;
	private String conductorLicencia;
	private String placa;
	private List<String> contenedores;
	private List<String> modalidades;
	private List<String> unidades;
	private List<String> commodities;
	private List<String> ingresosSalidas;
	private List<String> pesos;
	private String location;
	private String siteAppointment;
	
	

	public String getSiteAppointment() {
		return siteAppointment;
	}

	public void setSiteAppointment(String siteAppointment) {
		this.siteAppointment = siteAppointment;
	}

	public String getTruckVisitNbr() {
		return truckVisitNbr;
	}

	public void setTruckVisitNbr(String truckVisitNbr) {
		this.truckVisitNbr = truckVisitNbr;
	}

	public String getTruckVisitFechaYHora() {
		return truckVisitFechaYHora;
	}

	public void setTruckVisitFechaYHora(String truckVisitFechaYHora) {
		this.truckVisitFechaYHora = truckVisitFechaYHora;
	}

	public String getTruckingCompanyId() {
		return truckingCompanyId;
	}

	public void setTruckingCompanyId(String truckingCompanyId) {
		this.truckingCompanyId = truckingCompanyId;
	}

	public String getTruckingCompanyName() {
		return truckingCompanyName;
	}

	public void setTruckingCompanyName(String truckingCompanyName) {
		this.truckingCompanyName = truckingCompanyName;
	}

	public String getConductor() {
		return conductor;
	}

	public void setConductor(String conductor) {
		this.conductor = conductor;
	}

	public String getConductorId() {
		return conductorId;
	}

	public void setConductorId(String conductorId) {
		this.conductorId = conductorId;
	}

	public String getConductorLicencia() {
		return conductorLicencia;
	}

	public void setConductorLicencia(String conductorLicencia) {
		this.conductorLicencia = conductorLicencia;
	}

	public List<String> getContenedores() {
		return contenedores;
	}

	public void setContenedores(List<String> contenedores) {
		this.contenedores = contenedores;
	}

	public List<String> getModalidades() {
		return modalidades;
	}

	public void setModalidades(List<String> modalidades) {
		this.modalidades = modalidades;
	}

	public List<String> getIngresosSalidas() {
		return ingresosSalidas;
	}

	public void setIngresosSalidas(List<String> ingresosSalidas) {
		this.ingresosSalidas = ingresosSalidas;
	}

	public List<String> getPesos() {
		return pesos;
	}

	public void setPesos(List<String> pesos) {
		this.pesos = pesos;
	}

	public List<String> getUnidades() {
		return unidades;
	}

	public void setUnidades(List<String> unidades) {
		this.unidades = unidades;
	}

	public List<String> getCommodities() {
		return commodities;
	}

	public void setCommodities(List<String> commodities) {
		this.commodities = commodities;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

}
