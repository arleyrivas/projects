/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  6 de nov. de 2015 - 3:41:20 p. m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.Date;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;

import com.spia.services.entities.billing.Charges;
import com.spia.services.entities.billing.Discounts;
import com.spia.services.entities.billing.Invoice;
import com.spia.services.entities.billing.Parameters;
import com.spia.services.entities.billing.Payments;

/**
 * DTO del invoice
 * 
 * @author leandro
 *
 */

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "invoice")
@XmlRootElement(name = "invoice")
public class InvoiceDTO{
	@XmlElement
	private String error;
	@XmlElement
	private Charges charges;
	@XmlElement
	private Payments payments;
	@XmlElement
	private Discounts discounts;
	@XmlElement
	private Integer draftNumber;
	@XmlElement
	private String finalNumber;
	@XmlElement
	@XmlSchemaType(name = "dateTime")
	private Date finalizedDate;
	@XmlElement
	private String status;
	@XmlElement
	private String isMerged;
	@XmlElement
	@XmlSchemaType(name = "dateTime")
	private Date effectiveDate;
	@XmlElement
	private String invoiceTypeId;
	@XmlElement
	private String currency;
	@XmlElement
	private String payeeCustomerId;
	@XmlElement
	private String payeeCustomerName;
	@XmlElement
	private String payeeCustomerRole;
	@XmlElement
	private Double totalCharges;
	@XmlElement
	private Double totalDiscounts;
	@XmlElement
	private Double totalTaxes;
	@XmlElement
	private Double totalTotal;
	@XmlElement
	private Double totalCredits;
	@XmlElement
	private Double totalCreditTaxes;
	@XmlElement
	private Double totalPaid;
	@XmlElement
	private Double totalOwed;
	@XmlElement
	private Double totalUnRounded;
	@XmlElement
	private String customerReference;
	@XmlElement
	private String contactName;
	@XmlElement
	private String addressLine1;
	@XmlElement
	private String addressLine2;
	@XmlElement
	private String addressLine3;
	@XmlElement
	private String city;
	@XmlElement
	private String mailCode;
	@XmlElement
	private String emailAddress;
	@XmlElement
	private String facilityId;
	@XmlElement
	private String facilityName;
	@XmlElement
	private String notes;
	@XmlElement
	@XmlSchemaType(name = "dateTime")
	private Date created;
	@XmlElement
	private String creator;
	@XmlElement
	@XmlSchemaType(name = "dateTime")
	private Date changed;
	@XmlElement
	private String changer;
	@XmlElement
	private String vesselVisitId;
	@XmlElement
	private String agentId;
	@XmlElement
	private String bookingOrBl;
	@XmlElement
	private Date paidThruDay;
	@XmlElement
	private Parameters parameters;
		
	public InvoiceDTO(){
		
	}
	
	public InvoiceDTO(Invoice invoice, String error){
		this.setAddressLine1(invoice.getAddressLine1());
		this.setAddressLine2(invoice.getAddressLine2());
		this.setAddressLine3(invoice.getAddressLine3());
		this.setAgentId(invoice.getAgentId());
		this.setBookingOrBl(invoice.getBookingOrBl());
		this.setChanged(invoice.getChanged());
		this.setChanger(invoice.getChanger());
		this.setCharges(invoice.getCharges());
		this.setCity(invoice.getCity());
		this.setContactName(invoice.getContactName());
		this.setCreated(invoice.getCreated());
		this.setCreator(invoice.getCreator());
		this.setCurrency(invoice.getCurrency());
		this.setCustomerReference(invoice.getCustomerReference());
		this.setDiscounts(invoice.getDiscounts());
		this.setDraftNumber(invoice.getDraftNumber());
		this.setEffectiveDate(invoice.getEffectiveDate());
		this.setEmailAddress(invoice.getEmailAddress());
		this.setFacilityId(invoice.getFacilityId());
		this.setFinalizedDate(invoice.getFinalizedDate());
		this.setFinalNumber(invoice.getFinalNumber());
		this.setInvoiceTypeId(invoice.getInvoiceTypeId());
		this.setIsMerged(invoice.getIsMerged());
		this.setMailCode(invoice.getMailCode());
		this.setNotes(invoice.getNotes());
		this.setParameters(invoice.getParameters());
		this.setPayeeCustomerId(invoice.getPayeeCustomerId());
		this.setPayeeCustomerName(invoice.getPayeeCustomerName());
		this.setPayeeCustomerRole(invoice.getPayeeCustomerRole());
		this.setPayments(invoice.getPayments());
		this.setStatus(invoice.getStatus());
		this.setTotalCharges(invoice.getTotalCharges());
		this.setTotalCredits(invoice.getTotalCredits());
		this.setTotalCreditTaxes(invoice.getTotalCreditTaxes());
		this.setTotalDiscounts(invoice.getTotalDiscounts());
		this.setTotalOwed(invoice.getTotalOwed());
		this.setTotalPaid(invoice.getTotalPaid());
		this.setTotalTaxes(invoice.getTotalTaxes());
		this.setTotalTotal(invoice.getTotalTotal());
		this.setTotalUnRounded(invoice.getTotalUnRounded());
		this.setVesselVisitId(invoice.getVesselVisitId());
		this.setPaidThruDay(invoice.getPaidThruDay());
		this.setError(error);
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public Charges getCharges() {
		return charges;
	}

	public void setCharges(Charges charges) {
		this.charges = charges;
	}

	public Payments getPayments() {
		return payments;
	}

	public void setPayments(Payments payments) {
		this.payments = payments;
	}

	public Discounts getDiscounts() {
		return discounts;
	}

	public void setDiscounts(Discounts discounts) {
		this.discounts = discounts;
	}

	public Integer getDraftNumber() {
		return draftNumber;
	}

	public void setDraftNumber(Integer draftNumber) {
		this.draftNumber = draftNumber;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getIsMerged() {
		return isMerged;
	}

	public void setIsMerged(String isMerged) {
		this.isMerged = isMerged;
	}

	public Date getEffectiveDate() {
		return effectiveDate;
	}

	public void setEffectiveDate(Date effectiveDate) {
		this.effectiveDate = effectiveDate;
	}

	public String getInvoiceTypeId() {
		return invoiceTypeId;
	}

	public void setInvoiceTypeId(String invoiceTypeId) {
		this.invoiceTypeId = invoiceTypeId;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getPayeeCustomerId() {
		return payeeCustomerId;
	}

	public void setPayeeCustomerId(String payeeCustomerId) {
		this.payeeCustomerId = payeeCustomerId;
	}

	public String getPayeeCustomerName() {
		return payeeCustomerName;
	}

	public void setPayeeCustomerName(String payeeCustomerName) {
		this.payeeCustomerName = payeeCustomerName;
	}

	public String getPayeeCustomerRole() {
		return payeeCustomerRole;
	}

	public void setPayeeCustomerRole(String payeeCustomerRole) {
		this.payeeCustomerRole = payeeCustomerRole;
	}

	public Double getTotalCharges() {
		return totalCharges;
	}

	public void setTotalCharges(Double totalCharges) {
		this.totalCharges = totalCharges;
	}

	public Double getTotalDiscounts() {
		return totalDiscounts;
	}

	public void setTotalDiscounts(Double totalDiscounts) {
		this.totalDiscounts = totalDiscounts;
	}

	public Double getTotalTaxes() {
		return totalTaxes;
	}

	public void setTotalTaxes(Double totalTaxes) {
		this.totalTaxes = totalTaxes;
	}

	public Double getTotalTotal() {
		return totalTotal;
	}

	public void setTotalTotal(Double totalTotal) {
		this.totalTotal = totalTotal;
	}

	public Double getTotalCredits() {
		return totalCredits;
	}

	public void setTotalCredits(Double totalCredits) {
		this.totalCredits = totalCredits;
	}

	public Double getTotalCreditTaxes() {
		return totalCreditTaxes;
	}

	public void setTotalCreditTaxes(Double totalCreditTaxes) {
		this.totalCreditTaxes = totalCreditTaxes;
	}

	public Double getTotalPaid() {
		return totalPaid;
	}

	public void setTotalPaid(Double totalPaid) {
		this.totalPaid = totalPaid;
	}

	public Double getTotalOwed() {
		return totalOwed;
	}

	public void setTotalOwed(Double totalOwed) {
		this.totalOwed = totalOwed;
	}

	public Double getTotalUnRounded() {
		return totalUnRounded;
	}

	public void setTotalUnRounded(Double totalUnRounded) {
		this.totalUnRounded = totalUnRounded;
	}

	public String getCustomerReference() {
		return customerReference;
	}

	public void setCustomerReference(String customerReference) {
		this.customerReference = customerReference;
	}

	public String getContactName() {
		return contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public String getAddressLine3() {
		return addressLine3;
	}

	public void setAddressLine3(String addressLine3) {
		this.addressLine3 = addressLine3;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getMailCode() {
		return mailCode;
	}

	public void setMailCode(String mailCode) {
		this.mailCode = mailCode;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getFacilityId() {
		return facilityId;
	}

	public void setFacilityId(String facilityId) {
		this.facilityId = facilityId;
	}

	public String getFacilityName() {
		return facilityName;
	}

	public void setFacilityName(String facilityName) {
		this.facilityName = facilityName;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public Date getChanged() {
		return changed;
	}

	public void setChanged(Date changed) {
		this.changed = changed;
	}

	public String getChanger() {
		return changer;
	}

	public void setChanger(String changer) {
		this.changer = changer;
	}

	public String getVesselVisitId() {
		return vesselVisitId;
	}

	public void setVesselVisitId(String vesselVisitId) {
		this.vesselVisitId = vesselVisitId;
	}

	public String getAgentId() {
		return agentId;
	}

	public void setAgentId(String agentId) {
		this.agentId = agentId;
	}

	public String getBookingOrBl() {
		return bookingOrBl;
	}

	public void setBookingOrBl(String bookingOrBl) {
		this.bookingOrBl = bookingOrBl;
	}

	public Parameters getParameters() {
		return parameters;
	}

	public void setParameters(Parameters parameters) {
		this.parameters = parameters;
	}

	public Date getPaidThruDay() {
		return paidThruDay;
	}

	public void setPaidThruDay(Date paidThruDay) {
		this.paidThruDay = paidThruDay;
	}	
}
