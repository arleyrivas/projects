package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;

public class InvoicesCNDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String gkey;
	private String finalNumber;
	private Date finalizedDate;
	private Double totalTotal;
	private String statusPay;
	private String draftNumber;
	private Double credits;
	private String currency_gkey;
	private String currency_id;
	private String customergkey;
	private String name;
	private Double balance;
	private String customerNit;

	public String getGkey() {
		return gkey;
	}

	public void setGkey(String gkey) {
		this.gkey = gkey;
	}

	public String getFinalNumber() {
		return finalNumber;
	}

	public void setFinalNumber(String finalNumber) {
		this.finalNumber = finalNumber;
	}

	public Date getFinalizedDate() {
		return finalizedDate;
	}

	public void setFinalizedDate(Date finalizedDate) {
		this.finalizedDate = finalizedDate;
	}

	public Double getTotalTotal() {
		return totalTotal;
	}

	public void setTotalTotal(Double totalTotal) {
		this.totalTotal = totalTotal;
	}

	public String getStatusPay() {
		return statusPay;
	}

	public void setStatusPay(String statusPay) {
		this.statusPay = statusPay;
	}

	public String getDraftNumber() {
		return draftNumber;
	}

	public void setDraftNumber(String draftNumber) {
		this.draftNumber = draftNumber;
	}

	public Double getCredits() {
		return credits;
	}

	public void setCredits(Double credits) {
		this.credits = credits;
	}

	public String getCurrency_gkey() {
		return currency_gkey;
	}

	public void setCurrency_gkey(String currency_gkey) {
		this.currency_gkey = currency_gkey;
	}

	public String getCurrency_id() {
		return currency_id;
	}

	public void setCurrency_id(String currency_id) {
		this.currency_id = currency_id;
	}

	public String getCustomergkey() {
		return customergkey;
	}

	public void setCustomergkey(String customergkey) {
		this.customergkey = customergkey;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getBalance() {
		return balance;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}

	public String getCustomerNit() {
		return customerNit;
	}

	public void setCustomerNit(String customerNit) {
		this.customerNit = customerNit;
	}
	

}
