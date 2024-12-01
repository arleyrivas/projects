package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;

import com.spia.services.entities.Driver;

public class RequestRemoveTvaById implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Driver driver;
	private String appointmentsNbr;
	
	public Driver getDriver() {
		return driver;
	}
	public void setDriver(Driver driver) {
		this.driver = driver;
	}
	public String getAppointmentsNbr() {
		return appointmentsNbr;
	}
	public void setAppointmentsNbr(String appointmentsNbr) {
		this.appointmentsNbr = appointmentsNbr;
	}
	

	

}
