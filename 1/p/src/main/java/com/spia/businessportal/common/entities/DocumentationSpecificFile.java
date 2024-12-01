/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  5 de may. de 2016 - 10:06:21 a. m.
 */
package com.spia.businessportal.common.entities;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

/**
 * @author leandro
 *
 */
public class DocumentationSpecificFile {

	private Long id;
	private String fileName;
	private Date createdAt;
	private String createdBy;
	private String companyId;
	private Date updateAt;
	private String updateBy;
	private boolean approved = false;
	private Date approvedAt;
	private String approvedBy;
	private boolean rejected = false;
	private Date rejectedAt;
	private String rejectedBy;
	private String rejectReason;
	private String companyName;
	private String path;
	private Boolean deleted = false;
	@JsonBackReference
	private DocumentationFile documentationFile;		


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getUpdateAt() {
		return updateAt;
	}

	public void setUpdateAt(Date updateAt) {
		this.updateAt = updateAt;
	}

	public String getUpdateBy() {
		return updateBy;
	}

	public void setUpdateBy(String updateBy) {
		this.updateBy = updateBy;
	}

	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}

	public Date getApprovedAt() {
		return approvedAt;
	}

	public void setApprovedAt(Date approvedAt) {
		this.approvedAt = approvedAt;
	}

	public String getApprovedBy() {
		return approvedBy;
	}

	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}

	public boolean isRejected() {
		return rejected;
	}

	public void setRejected(boolean rejected) {
		this.rejected = rejected;
	}

	public Date getRejectedAt() {
		return rejectedAt;
	}

	public void setRejectedAt(Date rejectedAt) {
		this.rejectedAt = rejectedAt;
	}

	public String getRejectedBy() {
		return rejectedBy;
	}

	public void setRejectedBy(String rejectedBy) {
		this.rejectedBy = rejectedBy;
	}

	public String getRejectReason() {
		return rejectReason;
	}

	public void setRejectReason(String rejectReason) {
		this.rejectReason = rejectReason;
	}

	public DocumentationFile getDocumentationFile() {
		return documentationFile;
	}

	public void setDocumentationFile(DocumentationFile documentationFile) {
		this.documentationFile = documentationFile;
	}

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	
	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	@Override
	public String toString() {
		return "DocumentationSpecificFile [id=" + id + ", fileName=" + fileName + ", createdAt=" + createdAt
				+ ", createdBy=" + createdBy + ", companyId=" + companyId + ", updateAt=" + updateAt + ", updateBy="
				+ updateBy + ", approved=" + approved + ", approvedAt=" + approvedAt + ", approvedBy=" + approvedBy
				+ ", rejected=" + rejected + ", rejectedAt=" + rejectedAt + ", rejectedBy=" + rejectedBy
				+ ", rejectReason=" + rejectReason + ", path=" + path + ", deleted=\" + deleted + \"]";
	}

}
