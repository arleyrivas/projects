package com.spia.businessportal.common.entities.dto;

import java.util.Date;

public class UDRequestDTO {

	private Long idCustomerRequest;
	private Date createdAt;
	private String nbr;
	private String state;

	public Long getIdCustomerRequest() {
		return this.idCustomerRequest;
	}

	public void setIdCustomerRequest(Long idCustomerRequest) {
		this.idCustomerRequest = idCustomerRequest;
	}

	public Date getCreatedAt() {
		return this.createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public String getNbr() {
		return this.nbr;
	}

	public void setNbr(String nbr) {
		this.nbr = nbr;
	}

	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	
}
