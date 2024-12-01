/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  3 de may. de 2016 - 2:15:46 p. m.
 */
package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Transient;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.spia.businessportal.common.audit.IAuditLog;

/**
 * @author leandro
 *
 */
public class Documentation implements IAuditLog {

	private static final Log LOG = LogFactory.getLog(Documentation.class);

	private Long id;
	private String nbr;
	private String path;
	private Date createdAt;
	private boolean active = true;
	private boolean locked = false;
	private Date lockedDate;
	private DocumentationType type;
	@JsonManagedReference
	private Set<DocumentationFile> files = new HashSet<DocumentationFile>(0);
	@Transient
	private String companyName;
	private String comments;
	private String observations;
	private String createdBy;
	private String companyId;
	private String owner;
	private String ownerId;
	private Date lastUploadFileDate;
	private int revised = 1;
	private String role;
	private String notificador;
	private boolean newRegister = true;
	private String lockedBy;
	private boolean approved = false;
	private String typeCompany;
	private String mail;
	private String contactPerson;
	private String phoneNumber;
	private boolean rejected = false;
	private String requestTime;
	private Long idCustomerRequest;
	
	
	

	public Long getIdCustomerRequest() {
		return idCustomerRequest;
	}

	public void setIdCustomerRequest(Long idCustomerRequest) {
		this.idCustomerRequest = idCustomerRequest;
	}

	public String getRequestTime() {
		return requestTime;
	}

	public void setRequestTime(String requestTime) {
		this.requestTime = requestTime;
	}

	public boolean isRejected() {
		return rejected;
	}

	public void setRejected(boolean rejected) {
		this.rejected = rejected;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNbr() {
		return nbr;
	}

	public void setNbr(String nbr) {
		this.nbr = nbr;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public DocumentationType getType() {
		return type;
	}

	public void setType(DocumentationType type) {
		this.type = type;
	}

	public Set<DocumentationFile> getFiles() {
		return files;
	}

	public void setFiles(Set<DocumentationFile> files) {
		this.files = files;
	}

	public boolean isLocked() {
		return locked;
	}

	public void setLocked(boolean locked) {
		this.locked = locked;
	}

	public Date getLockedDate() {
		return lockedDate;
	}

	public void setLockedDate(Date lockedDate) {
		this.lockedDate = lockedDate;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getObservations() {
		return observations;
	}

	public void setObservations(String observations) {
		this.observations = observations;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public Date getLastUploadFileDate() {
		return lastUploadFileDate;
	}

	public void setLastUploadFileDate(Date lastUploadFileDate) {
		this.lastUploadFileDate = lastUploadFileDate;
	}

	public int getRevised() {
		return revised;
	}

	public void setRevised(int revised) {
		this.revised = revised;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(String ownerId) {
		this.ownerId = ownerId;
	}

	public String getNotificador() {
		return notificador;
	}

	public void setNotificador(String notificador) {
		this.notificador = notificador;
	}

	public String getLockedBy() {
		return lockedBy;
	}

	public void setLockedBy(String lockedBy) {
		this.lockedBy = lockedBy;
	}

	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}

	public String getTypeCompany() {
		return typeCompany;
	}

	public void setTypeCompany(String typeCompany) {
		this.typeCompany = typeCompany;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getContactPerson() {
		return contactPerson;
	}

	public void setContactPerson(String contactPerson) {
		this.contactPerson = contactPerson;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	/**
	 * @return the newRegister
	 */
	public boolean isNewRegister() {
		return newRegister;
	}

	/**
	 * @param newRegister the newRegister to set
	 */
	public void setNewRegister(boolean newRegister) {
		this.newRegister = newRegister;
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
