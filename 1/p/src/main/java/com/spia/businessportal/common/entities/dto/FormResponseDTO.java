/*
 * Author: Elvis Fontalvo  
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Date: 15/03/2021 
 */
package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.xml.bind.annotation.XmlType;
public class FormResponseDTO <T> implements Serializable {

	private static final long serialVersionUID = 1L;

	private String agenciaNumeroIdentificacion;
	private String success;
	private String error;
	private T result;
	private String transporteNumeroIdentificacion;
	private String codigoLugarEmbarque;
	private String numeroContenedor;
	private List<String> numeroDocumentoSalida;
	private String medioTransporte;
	private String numIdentificacionDelMedioTransporte;
	private Double totalNumeroBultos;
	private Double totalPesoBrutoKgs;

	
	public T getResult() {
		return result;
	}

	public void setResult(T result) {
		this.result = result;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public String getSuccess() {
		return success;
	}

	public void setSuccess(String success) {
		this.success = success;
	}
	
	public String getAgenciaNumeroIdentificacion() {
		return agenciaNumeroIdentificacion;
	}

	public void setAgenciaNumeroIdentificacion(String agenciaNumeroIdentificacion) {
		this.agenciaNumeroIdentificacion = agenciaNumeroIdentificacion;
	}

	public String getTransporteNumeroIdentificacion() {
		return transporteNumeroIdentificacion;
	}

	public void setTransporteNumeroIdentificacion(String transporteNumeroIdentificacion) {
		this.transporteNumeroIdentificacion = transporteNumeroIdentificacion;
	}

	public String getCodigoLugarEmbarque() {
		return codigoLugarEmbarque;
	}

	public void setCodigoLugarEmbarque(String codigoLugarEmbarque) {
		this.codigoLugarEmbarque = codigoLugarEmbarque;
	}

	public String getNumeroContenedor() {
		return numeroContenedor;
	}

	public void setNumeroContenedor(String numeroContenedor) {
		this.numeroContenedor = numeroContenedor;
	}

	public List<String> getNumeroDocumentoSalida() {
		return numeroDocumentoSalida;
	}

	public void setNumeroDocumentoSalida(List<String> numeroDocumentoSalida) {
		this.numeroDocumentoSalida = numeroDocumentoSalida;
	}

	public String getMedioTransporte() {
		return medioTransporte;
	}

	public void setMedioTransporte(String medioTransporte) {
		this.medioTransporte = medioTransporte;
	}

	public String getNumIdentificacionDelMedioTransporte() {
		return numIdentificacionDelMedioTransporte;
	}

	public void setNumIdentificacionDelMedioTransporte(String numIdentificacionDelMedioTransporte) {
		this.numIdentificacionDelMedioTransporte = numIdentificacionDelMedioTransporte;
	}

	public Double getTotalNumeroBultos() {
		return totalNumeroBultos;
	}

	public void setTotalNumeroBultos(Double totalNumeroBultos) {
		this.totalNumeroBultos = totalNumeroBultos;
	}

	public Double getTotalPesoBrutoKgs() {
		return totalPesoBrutoKgs;
	}

	public void setTotalPesoBrutoKgs(Double totalPesoBrutoKgs) {
		this.totalPesoBrutoKgs = totalPesoBrutoKgs;
	}

}
