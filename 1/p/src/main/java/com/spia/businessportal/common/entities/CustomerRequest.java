package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.spia.businessportal.common.audit.IAuditLog;


public class CustomerRequest implements IAuditLog {

	private static final Log LOG = LogFactory.getLog(CustomerRequest.class);

	private Long id;
	private Long idCustomer;
	private Long idCustomerCreate;
	private String createUser;
	private String approvalUser;
	private String mail;
	private String contactUser;
	private String phone;
	private String state;
    private Date createdAt;
    private Date approvedAt;
    private Date finalizedAt;


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdCustomer() {
		return this.idCustomer;
	}

	public void setIdCustomer(Long idCustomer) {
		this.idCustomer = idCustomer;
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

	public String getApprovalUser() {
		return this.approvalUser;
	}

	public void setApprovalUser(String approvalUser) {
		this.approvalUser = approvalUser;
	}

	public String getMail() {
		return this.mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getContactUser() {
		return this.contactUser;
	}

	public void setContactUser(String contactUser) {
		this.contactUser = contactUser;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Date getCreatedAt() {
		return this.createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getApprovedAt() {
		return this.approvedAt;
	}

	public void setApprovedAt(Date approvedAt) {
		this.approvedAt = approvedAt;
	}

	public Date getFinalizedAt() {
		return this.finalizedAt;
	}

	public void setFinalizedAt(Date finalizedAt) {
		this.finalizedAt = finalizedAt;
	}

	
	

	@JsonIgnore
	@Override
	public String getLogDetail() {
		String[] arr = {};
		List<String> excludedFields = Arrays.asList(arr);
		StringBuilder sb = new StringBuilder();
		Field[] fields = this.getClass().getDeclaredFields();
		for (Field field : fields) {
			try {
				if (field.get(this) != null && !excludedFields.contains(field.getName()))
					sb.append(field.getName()).append(":").append(field.get(this).toString()).append("\n");
			} catch (IllegalArgumentException | IllegalAccessException e) {
				LOG.error(e.getStackTrace());
			}
		}
		return sb.toString();
	}

	@JsonIgnore
	@Override
	public String getClassName() {
		return this.getClass().getName();
	}
}
