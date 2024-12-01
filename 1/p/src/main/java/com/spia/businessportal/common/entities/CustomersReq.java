package com.spia.businessportal.common.entities;

import com.spia.businessportal.common.entities.CustomerRequest;


public class CustomersReq {
    
    private CustomerRequest customerRequest;
    private String info;
	private String approval;

	public CustomerRequest getCustomerRequest() {
		return this.customerRequest;
	}

	public void setCustomerRequest(CustomerRequest customerRequest) {
		this.customerRequest = customerRequest;
	}

	public String getInfo() {
		return this.info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public String getApproval() {
		return this.approval;
	}

	public void setApproval(String approval) {
		this.approval = approval;
	}

}