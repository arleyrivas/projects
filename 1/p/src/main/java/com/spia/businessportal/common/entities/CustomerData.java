package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.spia.businessportal.common.audit.IAuditLog;

public class CustomerData implements IAuditLog {
    
    private static final Log LOG = LogFactory.getLog(CustomerData.class);

    private Long id;
    private Long idCustomerRequest;
    private String info;
    private String approval;
	private String justification;

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdCustomerRequest() {
		return this.idCustomerRequest;
	}

	public void setIdCustomerRequest(Long idCustomerRequest) {
		this.idCustomerRequest = idCustomerRequest;
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

	public String getJustification() {
		return this.justification;
	}

	public void setJustification(String justification) {
		this.justification = justification;
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