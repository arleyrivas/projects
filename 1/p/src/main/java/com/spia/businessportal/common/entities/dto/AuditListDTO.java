package com.spia.businessportal.common.entities.dto;

import java.util.List;

public class AuditListDTO {

	private List<AuditDTO> audit;

	/**
	 * @return the audit
	 */
	public List<AuditDTO> getAudit() {
		return audit;
	}

	/**
	 * @param audit the audit to set
	 */
	public void setAudit(List<AuditDTO> audit) {
		this.audit = audit;
	}

}
