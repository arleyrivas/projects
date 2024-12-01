package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;

public class RequestDTO implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String companyId;
	private String action;
	private List<IpRestrictionDTO> ips;

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public List<IpRestrictionDTO> getIps() {
		return ips;
	}

	public void setIps(List<IpRestrictionDTO> ips) {
		this.ips = ips;
	}

}
