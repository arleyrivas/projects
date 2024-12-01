/*
 * Author: Elvis Fontalvo  
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Date: 15/03/2021 
 */
package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class HistoryCross implements Serializable {

	private static final long serialVersionUID = 1L;
	private String transNbr;
	private String tranDate;
	private String agentShip;
	private List<InvoiceCross> invoices;

	public String getTransNbr() {
		return transNbr;
	}

	public void setTransNbr(String transNbr) {
		this.transNbr = transNbr;
	}

	public String getTranDate() {
		return tranDate;
	}

	public String getAgentShip() {
		return agentShip;
	}

	public void setAgentShip(String agentShip) {
		this.agentShip = agentShip;
	}

	public void setTranDate(String tranDate) {
		this.tranDate = tranDate;
	}

	public List<InvoiceCross> getInvoices() {
		return invoices;
	}

	public void setInvoices(List<InvoiceCross> invoices) {
		this.invoices = invoices;
	}

}
