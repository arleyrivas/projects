/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de ene. de 2016 - 11:22:52 a. m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.Date;

/**
 * Author: Elvis Fontalvo Assert Solutions Email:efontalvo@aassertsolutions.com
 * Fecha: 07/05/2020
 */
public class CheckHoursServiceDTO {
	private String units;
	private Date appointmentDate;

	public String getUnits() {
		return units;
	}

	public void setUnits(String units) {
		this.units = units;
	}

	public Date getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

}
