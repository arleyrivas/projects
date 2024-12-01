/*
 * Author: Elvis Fontalvo  
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Date: 15/03/2021 
 */
package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;

public class HistoryCrossDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long transNbr;
	private String status;
	private String invoice;
	private String tranDate;
	private Double invAmount;
	private Double invBalance;
	private String totPayAmt;
	private String agentShip;
	private String credit;
	private Double parPayAmt;
	private Double creBalance;
	private String payState;

	public Long getTransNbr() {
		return transNbr;
	}

	public void setTransNbr(Long transNbr) {
		this.transNbr = transNbr;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getInvoice() {
		return invoice;
	}

	public void setInvoice(String invoice) {
		this.invoice = invoice;
	}

	public String getTranDate() {
		return tranDate;
	}

	public void setTranDate(String tranDate) {
		this.tranDate = tranDate;
	}

	public Double getInvAmount() {
		return invAmount;
	}

	public void setInvAmount(Double invAmount) {
		this.invAmount = invAmount;
	}

	public Double getInvBalance() {
		return invBalance;
	}

	public void setInvBalance(Double invBalance) {
		this.invBalance = invBalance;
	}

	public String getTotPayAmt() {
		return totPayAmt;
	}

	public void setTotPayAmt(String totPayAmt) {
		this.totPayAmt = totPayAmt;
	}

	public String getAgentShip() {
		return agentShip;
	}

	public void setAgentShip(String agentShip) {
		this.agentShip = agentShip;
	}

	public String getCredit() {
		return credit;
	}

	public void setCredit(String credit) {
		this.credit = credit;
	}

	public Double getParPayAmt() {
		return parPayAmt;
	}

	public void setParPayAmt(Double parPayAmt) {
		this.parPayAmt = parPayAmt;
	}

	public Double getCreBalance() {
		return creBalance;
	}

	public void setCreBalance(Double creBalance) {
		this.creBalance = creBalance;
	}

	public String getPayState() {
		return payState;
	}

	public void setPayState(String payState) {
		this.payState = payState;
	}

}
