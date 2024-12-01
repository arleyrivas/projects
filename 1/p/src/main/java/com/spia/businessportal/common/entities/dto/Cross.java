/*
 * Author: Elvis Fontalvo  
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Date: 15/03/2021 
 */
package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class Cross implements Serializable {

	private static final long serialVersionUID = 1L;
	private String finalNbr;
	private Double amount;
	private Double balance;
	private String status;

	public String getFinalNbr() {
		return finalNbr;
	}

	public void setFinalNbr(String finalNbr) {
		this.finalNbr = finalNbr;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public Double getBalance() {
		return balance;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
