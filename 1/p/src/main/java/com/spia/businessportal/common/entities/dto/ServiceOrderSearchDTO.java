package com.spia.businessportal.common.entities.dto;

import java.util.Date;

public class ServiceOrderSearchDTO {
	
	private String service;
	private String blhblbook;
	private String container;
	private String state;
	private Date dateFrom;
	private Date dateTo;
	
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public String getBlhblbook() {
		return blhblbook;
	}
	public void setBlhblbook(String blhblbook) {
		this.blhblbook = blhblbook;
	}
	public String getContainer() {
		return container;
	}
	public void setContainer(String container) {
		this.container = container;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Date getDateFrom() {
		return dateFrom;
	}
	public void setDateFrom(Date dateFrom) {
		this.dateFrom = dateFrom;
	}
	public Date getDateTo() {
		return dateTo;
	}
	public void setDateTo(Date dateTo) {
		this.dateTo = dateTo;
	}
	
}
