package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;

public class HistoryServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String appointmentNbr;
	private String placa;
	private String conductor;
	private String license;
	private Date cita;
	private String status;
	private String tipoTrx;
	//private String manifestNbr;

	public String getAppointmentNbr() {
		return appointmentNbr;
	}

	public void setAppointmentNbr(String appointmentNbr) {
		this.appointmentNbr = appointmentNbr;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public String getConductor() {
		return conductor;
	}

	public void setConductor(String conductor) {
		this.conductor = conductor;
	}

	public String getLicense() {
		return license;
	}

	public void setLicense(String license) {
		this.license = license;
	}

	public Date getCita() {
		return cita;
	}

	public void setCita(Date cita) {
		this.cita = cita;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getTipoTrx() {
		return tipoTrx;
	}

	public void setTipoTrx(String tipoTrx) {
		this.tipoTrx = tipoTrx;
	}

	/* public static long getSerialversionuid() {
		return serialVersionUID;
	} */

	/* public String getManifestNbr() {
		return manifestNbr;
	}

	public void setManifestNbr(String manifestNbr) {
		this.manifestNbr = manifestNbr;
	} */

}
