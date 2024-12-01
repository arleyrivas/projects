package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: Email:
 * efontalvo@aassertsolutions.com Date: 22/07/2020 Service by Update Agent and
 * consignee in Bl
 * 
 */
public class BlAgentAndConsigneeDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String blNbr;
	private String agentId;
	private String nitConsignee;

	/**
	 * @return the blNbr
	 */
	public String getBlNbr() {
		return blNbr;
	}

	/**
	 * @param blNbr the blNbr to set
	 */
	public void setBlNbr(String blNbr) {
		this.blNbr = blNbr;
	}

	/**
	 * @return the agentId
	 */
	public String getAgentId() {
		return agentId;
	}

	/**
	 * @param agentId the agentId to set
	 */
	public void setAgentId(String agentId) {
		this.agentId = agentId;
	}

	/**
	 * @return the nitConsignee
	 */
	public String getNitConsignee() {
		return nitConsignee;
	}

	/**
	 * @param nitConsignee the nitConsignee to set
	 */
	public void setNitConsignee(String nitConsignee) {
		this.nitConsignee = nitConsignee;
	}

}
