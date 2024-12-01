package com.spia.businessportal.common.entities.dto;

import java.util.Date;

public class HistoryUDSacReqDTO {

	private Long idCustomerData;
	private Long idCustomerRequest;
	private Date createAt;
	private Long idCustomer;
	private String nameCompanyCustomer;
	private Long idCustomerCreate;
	private String createUser;
	private String approvUser;
	private String approvalValue;
	private String info;
	private String contactUSer;
	private String phone;
	private String email;
	private String path;
	private String justify;

public String getJustify() {
		return this.justify;
	}

	public void setJustify(String justify) {
		this.justify = justify;
	}

	public Long getIdCustomerData() {
		return this.idCustomerData;
	}

	public void setIdCustomerData(Long idCustomerData) {
		this.idCustomerData = idCustomerData;
	}

	public Long getIdCustomerRequest() {
		return this.idCustomerRequest;
	}

	public void setIdCustomerRequest(Long idCustomerRequest) {
		this.idCustomerRequest = idCustomerRequest;
	}

	public Date getCreateAt() {
		return this.createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

	public Long getIdCustomer() {
		return this.idCustomer;
	}

	public void setIdCustomer(Long idCustomer) {
		this.idCustomer = idCustomer;
	}

	public String getNameCompanyCustomer() {
		return this.nameCompanyCustomer;
	}

	public void setNameCompanyCustomer(String nameCompanyCustomer) {
		this.nameCompanyCustomer = nameCompanyCustomer;
	}

	public Long getIdCustomerCreate() {
		return this.idCustomerCreate;
	}

	public void setIdCustomerCreate(Long idCustomerCreate) {
		this.idCustomerCreate = idCustomerCreate;
	}

	public String getCreateUser() {
		return this.createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public String getApprovUser() {
		return this.approvUser;
	}

	public void setApprovUser(String approvUser) {
		this.approvUser = approvUser;
	}

	public String getApprovalValue() {
		return this.approvalValue;
	}

	public void setApprovalValue(String approvalValue) {
		this.approvalValue = approvalValue;
	}

	public String getInfo() {
		return this.info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public String getContactUSer() {
		return this.contactUSer;
	}

	public void setContactUSer(String contactUSer) {
		this.contactUSer = contactUSer;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPath() {
		return this.path;
	}

	public void setPath(String path) {
		this.path = path;
	}



}