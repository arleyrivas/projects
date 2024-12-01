package com.spia.businessportal.common.entities.dto;

import java.util.Date;
import java.util.List;

public class ReceiptReportDTO {
	
	/*Información del pago en común*/
	private String transactionId;
	private String status;
	private String referenceCode;
	private String payDescription;
	private Double totalAmmount;
	private String currency;
	private Date payDate;
	private String paymentMethod;
	private String creditNumber;
	
	/*Información de cada factura*/
	private List<String> finalNbrs;
	private List<String> customers;
	private List<Double> ammounts;
	
	public String getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getReferenceCode() {
		return referenceCode;
	}
	public void setReferenceCode(String referenceCode) {
		this.referenceCode = referenceCode;
	}
	public String getPayDescription() {
		return payDescription;
	}
	public void setPayDescription(String payDescription) {
		this.payDescription = payDescription;
	}
	public Double getTotalAmmount() {
		return totalAmmount;
	}
	public void setTotalAmmount(Double totalAmmount) {
		this.totalAmmount = totalAmmount;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	public Date getPayDate() {
		return payDate;
	}
	public void setPayDate(Date payDate) {
		this.payDate = payDate;
	}
	public String getPaymentMethod() {
		return paymentMethod;
	}
	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	public String getCreditNumber() {
		return creditNumber;
	}
	public void setCreditNumber(String creditNumber) {
		this.creditNumber = creditNumber;
	}
	public List<String> getFinalNbrs() {
		return finalNbrs;
	}
	public void setFinalNbrs(List<String> finalNbrs) {
		this.finalNbrs = finalNbrs;
	}
	public List<String> getCustomers() {
		return customers;
	}
	public void setCustomers(List<String> customers) {
		this.customers = customers;
	}
	public List<Double> getAmmounts() {
		return ammounts;
	}
	public void setAmmounts(List<Double> ammounts) {
		this.ammounts = ammounts;
	}
	
}
