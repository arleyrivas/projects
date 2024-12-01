/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  8 de abr. de 2016 - 9:56:23 a. m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.Date;
import java.util.List;

/**
 * @author leandro
 *
 */
public class InvoiceReportDTO {

	private Long invoiceDraftNbr;
	private String invoiceFinalNbr;
	private String invoicePayeeCustomerName;
	private Date invoiceEffectiveDate;
	private Double invoiceTotalCharges;
	private String invoicePayeeCustomerAddress1;
	private String invoiceFlexString06;
	private Date invoiceFinalizedDate;
	private String invoiceInvEventLineOperatorName;
	private Date invoiceDueDate;
	private String invoicePayeeCustomerTaxId;
	private Double invoiceTotalTaxes;
	private Double itemExchangeRate;
	private String invoiceCreatedBy;
	private String invoiceInvEventCategory;
	private String invoiceInvEventIbVisitId;
	private Date invoiceInvEventUfvTimeIn;
	private String invoiceInvEventBlNbr;
	private String invoiceInvEventBookingNbr;
	private Double invoiceTotalTotal;
	private String invoiceInvEventIbCarrierName;
	private String invoiceCurrencyId;
	private String invoicePayeeCustomerCity;
	private String invoicePayeeCustomerTel;
	private String invoiceContractCustomerName;
	private String invoiceContractCustomerTaxId;
	private String invoiceContractCustomerAddress1;
	private String invoiceContractCustomerCity;
	private String invoiceContractCustomerTel;
	private String invoiceParmInvIbVisitId;
	private String invoiceParmInvObVisitId;
	private Double itemDivisorQty;
	private Double itemFlatRateAmount;
	private Double taxRate;
	private String taxItem;
	private Double totalBase16;
	private Double totalBase5;
	private Double totalBase0;
	private Double totalBaseExcluido;
	private Double totalIva16;
	private Double totalIva5;
	private Double totalIva0;
	private Double totalIvaExcluido;	
	
	private String itemEventTypeId;
	private String itemTariffDescription;
	private Double itemQuantityBilled;
	private String itemQuantityUnit;
	private Double itemRateBilled;
	private Double itemAmount;
	
	private String itemDescription;
	private String itemEventEntityId;
	
	private String barCode;
	private String barCodeLabel;
	
	private String totalLetters;
	
	public Long getInvoiceDraftNbr() {
		return invoiceDraftNbr;
	}
	public void setInvoiceDraftNbr(Long invoiceDraftNbr) {
		this.invoiceDraftNbr = invoiceDraftNbr;
	}
	public String getInvoiceFinalNbr() {
		return invoiceFinalNbr;
	}
	public void setInvoiceFinalNbr(String invoiceFinalNbr) {
		this.invoiceFinalNbr = invoiceFinalNbr;
	}
	public String getInvoicePayeeCustomerName() {
		return invoicePayeeCustomerName;
	}
	public void setInvoicePayeeCustomerName(String invoicePayeeCustomerName) {
		this.invoicePayeeCustomerName = invoicePayeeCustomerName;
	}
	public Date getInvoiceEffectiveDate() {
		return invoiceEffectiveDate;
	}
	public void setInvoiceEffectiveDate(Date invoiceEffectiveDate) {
		this.invoiceEffectiveDate = invoiceEffectiveDate;
	}
	public Double getInvoiceTotalCharges() {
		return invoiceTotalCharges;
	}
	public void setInvoiceTotalCharges(Double invoiceTotalCharges) {
		this.invoiceTotalCharges = invoiceTotalCharges;
	}
	public String getInvoicePayeeCustomerAddress1() {
		return invoicePayeeCustomerAddress1;
	}
	public void setInvoicePayeeCustomerAddress1(String invoicePayeeCustomerAddress1) {
		this.invoicePayeeCustomerAddress1 = invoicePayeeCustomerAddress1;
	}
	public String getInvoiceFlexString06() {
		return invoiceFlexString06;
	}
	public void setInvoiceFlexString06(String invoiceFlexString06) {
		this.invoiceFlexString06 = invoiceFlexString06;
	}
	public Date getInvoiceFinalizedDate() {
		return invoiceFinalizedDate;
	}
	public void setInvoiceFinalizedDate(Date invoiceFinalizedDate) {
		this.invoiceFinalizedDate = invoiceFinalizedDate;
	}
	public String getInvoiceInvEventLineOperatorName() {
		return invoiceInvEventLineOperatorName;
	}
	public void setInvoiceInvEventLineOperatorName(String invoiceInvEventLineOperatorName) {
		this.invoiceInvEventLineOperatorName = invoiceInvEventLineOperatorName;
	}
	public Date getInvoiceDueDate() {
		return invoiceDueDate;
	}
	public void setInvoiceDueDate(Date invoiceDueDate) {
		this.invoiceDueDate = invoiceDueDate;
	}
	public String getInvoicePayeeCustomerTaxId() {
		return invoicePayeeCustomerTaxId;
	}
	public void setInvoicePayeeCustomerTaxId(String invoicePayeeCustomerTaxId) {
		this.invoicePayeeCustomerTaxId = invoicePayeeCustomerTaxId;
	}
	public Double getInvoiceTotalTaxes() {
		return invoiceTotalTaxes;
	}
	public void setInvoiceTotalTaxes(Double invoiceTotalTaxes) {
		this.invoiceTotalTaxes = invoiceTotalTaxes;
	}
	public Double getItemExchangeRate() {
		return itemExchangeRate;
	}
	public void setItemExchangeRate(Double itemExchangeRate) {
		this.itemExchangeRate = itemExchangeRate;
	}
	public String getInvoiceCreatedBy() {
		return invoiceCreatedBy;
	}
	public void setInvoiceCreatedBy(String invoiceCreatedBy) {
		this.invoiceCreatedBy = invoiceCreatedBy;
	}
	public String getInvoiceInvEventCategory() {
		return invoiceInvEventCategory;
	}
	public void setInvoiceInvEventCategory(String invoiceInvEventCategory) {
		this.invoiceInvEventCategory = invoiceInvEventCategory;
	}
	public String getInvoiceInvEventIbVisitId() {
		return invoiceInvEventIbVisitId;
	}
	public void setInvoiceInvEventIbVisitId(String invoiceInvEventIbVisitId) {
		this.invoiceInvEventIbVisitId = invoiceInvEventIbVisitId;
	}
	public Date getInvoiceInvEventUfvTimeIn() {
		return invoiceInvEventUfvTimeIn;
	}
	public void setInvoiceInvEventUfvTimeIn(Date invoiceInvEventUfvTimeIn) {
		this.invoiceInvEventUfvTimeIn = invoiceInvEventUfvTimeIn;
	}
	public String getInvoiceInvEventBlNbr() {
		return invoiceInvEventBlNbr;
	}
	public void setInvoiceInvEventBlNbr(String invoiceInvEventBlNbr) {
		this.invoiceInvEventBlNbr = invoiceInvEventBlNbr;
	}
	public String getInvoiceInvEventBookingNbr() {
		return invoiceInvEventBookingNbr;
	}
	public void setInvoiceInvEventBookingNbr(String invoiceInvEventBookingNbr) {
		this.invoiceInvEventBookingNbr = invoiceInvEventBookingNbr;
	}
	public Double getInvoiceTotalTotal() {
		return invoiceTotalTotal;
	}
	public void setInvoiceTotalTotal(Double invoiceTotalTotal) {
		this.invoiceTotalTotal = invoiceTotalTotal;
	}
	public String getInvoiceInvEventIbCarrierName() {
		return invoiceInvEventIbCarrierName;
	}
	public void setInvoiceInvEventIbCarrierName(String invoiceInvEventIbCarrierName) {
		this.invoiceInvEventIbCarrierName = invoiceInvEventIbCarrierName;
	}
	public String getInvoiceCurrencyId() {
		return invoiceCurrencyId;
	}
	public void setInvoiceCurrencyId(String invoiceCurrencyId) {
		this.invoiceCurrencyId = invoiceCurrencyId;
	}
	public String getInvoicePayeeCustomerCity() {
		return invoicePayeeCustomerCity;
	}
	public void setInvoicePayeeCustomerCity(String invoicePayeeCustomerCity) {
		this.invoicePayeeCustomerCity = invoicePayeeCustomerCity;
	}
	public String getInvoiceContractCustomerName() {
		return invoiceContractCustomerName;
	}
	public void setInvoiceContractCustomerName(String invoiceContractCustomerName) {
		this.invoiceContractCustomerName = invoiceContractCustomerName;
	}
	public String getInvoiceContractCustomerTaxId() {
		return invoiceContractCustomerTaxId;
	}
	public void setInvoiceContractCustomerTaxId(String invoiceContractCustomerTaxId) {
		this.invoiceContractCustomerTaxId = invoiceContractCustomerTaxId;
	}
	public String getInvoiceContractCustomerAddress1() {
		return invoiceContractCustomerAddress1;
	}
	public void setInvoiceContractCustomerAddress1(String invoiceContractCustomerAddress1) {
		this.invoiceContractCustomerAddress1 = invoiceContractCustomerAddress1;
	}
	public String getInvoiceContractCustomerCity() {
		return invoiceContractCustomerCity;
	}
	public void setInvoiceContractCustomerCity(String invoiceContractCustomerCity) {
		this.invoiceContractCustomerCity = invoiceContractCustomerCity;
	}
	public String getInvoiceParmInvIbVisitId() {
		return invoiceParmInvIbVisitId;
	}
	public void setInvoiceParmInvIbVisitId(String invoiceParmInvIbVisitId) {
		this.invoiceParmInvIbVisitId = invoiceParmInvIbVisitId;
	}
	public String getInvoiceParmInvObVisitId() {
		return invoiceParmInvObVisitId;
	}
	public void setInvoiceParmInvObVisitId(String invoiceParmInvObVisitId) {
		this.invoiceParmInvObVisitId = invoiceParmInvObVisitId;
	}
	public Double getItemDivisorQty() {
		return itemDivisorQty;
	}
	public void setItemDivisorQty(Double itemDivisorQty) {
		this.itemDivisorQty = itemDivisorQty;
	}
	public Double getItemFlatRateAmount() {
		return itemFlatRateAmount;
	}
	public void setItemFlatRateAmount(Double itemFlatRateAmount) {
		this.itemFlatRateAmount = itemFlatRateAmount;
	}
	public Double getTaxRate() {
		return taxRate;
	}
	public void setTaxRate(Double taxRate) {
		this.taxRate = taxRate;
	}
	public String getItemEventTypeId() {
		return itemEventTypeId;
	}
	public void setItemEventTypeId(String itemEventTypeId) {
		this.itemEventTypeId = itemEventTypeId;
	}
	public String getItemTariffDescription() {
		return itemTariffDescription;
	}
	public void setItemTariffDescription(String itemTariffDescription) {
		this.itemTariffDescription = itemTariffDescription;
	}
	public Double getItemQuantityBilled() {
		return itemQuantityBilled;
	}
	public void setItemQuantityBilled(Double itemQuantityBilled) {
		this.itemQuantityBilled = itemQuantityBilled;
	}
	public String getItemQuantityUnit() {
		return itemQuantityUnit;
	}
	public void setItemQuantityUnit(String itemQuantityUnit) {
		this.itemQuantityUnit = itemQuantityUnit;
	}
	public Double getItemRateBilled() {
		return itemRateBilled;
	}
	public void setItemRateBilled(Double itemRateBilled) {
		this.itemRateBilled = itemRateBilled;
	}
	public Double getItemAmount() {
		return itemAmount;
	}
	public void setItemAmount(Double itemAmount) {
		this.itemAmount = itemAmount;
	}
	public String getItemDescription() {
		return itemDescription;
	}
	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}
	public String getItemEventEntityId() {
		return itemEventEntityId;
	}
	public void setItemEventEntityId(String itemEventEntityId) {
		this.itemEventEntityId = itemEventEntityId;
	}
	public String getBarCode() {
		return barCode;
	}
	public void setBarCode(String barCode) {
		this.barCode = barCode;
	}
	public String getBarCodeLabel() {
		return barCodeLabel;
	}
	public void setBarCodeLabel(String barCodeLabel) {
		this.barCodeLabel = barCodeLabel;
	}
	public String getInvoicePayeeCustomerTel() {
		return invoicePayeeCustomerTel;
	}
	public void setInvoicePayeeCustomerTel(String invoicePayeeCustomerTel) {
		this.invoicePayeeCustomerTel = invoicePayeeCustomerTel;
	}
	public String getInvoiceContractCustomerTel() {
		return invoiceContractCustomerTel;
	}
	public void setInvoiceContractCustomerTel(String invoiceContractCustomerTel) {
		this.invoiceContractCustomerTel = invoiceContractCustomerTel;
	}
	public String getTaxItem() {
		return taxItem;
	}
	public void setTaxItem(String taxItem) {
		this.taxItem = taxItem;
	}
	public Double getTotalBase16() {
		return totalBase16;
	}
	public void setTotalBase16(Double totalBase16) {
		this.totalBase16 = totalBase16;
	}
	public Double getTotalBase5() {
		return totalBase5;
	}
	public void setTotalBase5(Double totalBase5) {
		this.totalBase5 = totalBase5;
	}
	public Double getTotalBase0() {
		return totalBase0;
	}
	public void setTotalBase0(Double totalBase0) {
		this.totalBase0 = totalBase0;
	}
	public Double getTotalBaseExcluido() {
		return totalBaseExcluido;
	}
	public void setTotalBaseExcluido(Double totalBaseExcluido) {
		this.totalBaseExcluido = totalBaseExcluido;
	}
	public Double getTotalIva16() {
		return totalIva16;
	}
	public void setTotalIva16(Double totalIva16) {
		this.totalIva16 = totalIva16;
	}
	public Double getTotalIva5() {
		return totalIva5;
	}
	public void setTotalIva5(Double totalIva5) {
		this.totalIva5 = totalIva5;
	}
	public Double getTotalIva0() {
		return totalIva0;
	}
	public void setTotalIva0(Double totalIva0) {
		this.totalIva0 = totalIva0;
	}
	public Double getTotalIvaExcluido() {
		return totalIvaExcluido;
	}
	public void setTotalIvaExcluido(Double totalIvaExcluido) {
		this.totalIvaExcluido = totalIvaExcluido;
	}
	public String getTotalLetters() {
		return totalLetters;
	}
	public void setTotalLetters(String totalLetters) {
		this.totalLetters = totalLetters;
	}
	
	
	
	
}