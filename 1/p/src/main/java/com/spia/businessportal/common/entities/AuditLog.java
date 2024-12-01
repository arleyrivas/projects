/**
 * 
 */
package com.spia.businessportal.common.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlTransient;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * @author darian
 * Entidad para persistir un registro de auditoría
 */
public class AuditLog {
	
	private Long id;
	private String action;
	private String detail;
	private Date createdAt;
	private Long entityId;
	private String entityName;
	private String createdByLDAP;

	
	public AuditLog(){}
	
	public AuditLog(String action, String detail, Date createdAt, Long entityId, String entityName, String createdByLDAP){
		this.action=action;
		this.detail=detail;
		this.createdAt=createdAt;
		this.entityId=entityId;
		this.entityName=entityName;
		this.createdByLDAP = createdByLDAP;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Long getEntityId() {
		return entityId;
	}

	public void setEntityId(Long entityId) {
		this.entityId = entityId;
	}

	public String getEntityName() {
		return entityName;
	}
	public void setEntityName(String entityName) {
		this.entityName = entityName;
	}


	/**
	 * @return the createdByLDAP
	 */
	public String getCreatedByLDAP() {
		return createdByLDAP;
	}

	/**
	 * @param createdByLDAP the createdByLDAP to set
	 */
	public void setCreatedByLDAP(String createdByLDAP) {
		this.createdByLDAP = createdByLDAP;
	}
}
