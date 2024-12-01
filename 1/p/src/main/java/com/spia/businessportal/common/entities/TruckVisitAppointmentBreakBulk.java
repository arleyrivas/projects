/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  25 de ene. de 2016 - 1:52:53 p. m.
 */
package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;
import java.util.Date;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.spia.businessportal.common.audit.IAuditLog;

/**
 * @author leandro Entidad para relacionar TruckVisitAppointment con elementos
 *         de carga suelta
 * 
 */
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class TruckVisitAppointmentBreakBulk implements IAuditLog {

	private static final Log LOG = LogFactory.getLog(TruckVisitAppointmentBreakBulk.class);

	private Long id;
	private String truckVisitAppointmentNbr;
	private String pin;
	private String state;
	private String truck;
	private String companyIdLdap;
	private Date appointmentDate;
	private String createdByLdap;
	private String license;
	private String manifestNbr;

	public String getTruckVisitAppointmentNbr() {
		return truckVisitAppointmentNbr;
	}

	public void setTruckVisitAppointmentNbr(String truckVisitAppointmentNbr) {
		this.truckVisitAppointmentNbr = truckVisitAppointmentNbr;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getTruck() {
		return truck;
	}

	public void setTruck(String truck) {
		this.truck = truck;
	}

	public Date getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	@Override
	public String getLogDetail() {
		StringBuilder sb = new StringBuilder();
		Field[] fields = this.getClass().getDeclaredFields();
		for (Field field : fields) {
			try {
				if (field.get(this) != null) {
					sb.append(field.getName()).append(":").append(field.get(this).toString()).append("\n");
				}
			} catch (IllegalArgumentException | IllegalAccessException e) {
				LOG.error(e.getStackTrace());
			}
		}
		return sb.toString();
	}

	@Override
	public String getClassName() {
		return this.getClass().getName();
	}

	public String getCompanyIdLdap() {
		return companyIdLdap;
	}

	public void setCompanyIdLdap(String companyIdLdap) {
		this.companyIdLdap = companyIdLdap;
	}

	public String getCreatedByLdap() {
		return createdByLdap;
	}

	public void setCreatedByLdap(String createdByLdap) {
		this.createdByLdap = createdByLdap;
	}

	public String getLicense() {
		return license;
	}

	public void setLicense(String license) {
		this.license = license;
	}

	public String getManifestNbr() {
		return manifestNbr;
	}

	public void setManifestNbr(String manifestNbr) {
		this.manifestNbr = manifestNbr;
	}

}
