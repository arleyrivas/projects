package com.spia.businessportal.common.entities.dto;

import java.util.Date;
import java.util.List;

public class InvoiceDetailReportDTO {
	
//	private Long invoiceDraftNbr;
	//Datos generales de la factura
	private String invoiceFinalNbr;
	private Date invoiceFinalizedDate;
	private Date invoiceDueDate;
	
	//Totales de taxes
	private Double totalBase16;
	private Double totalBase5;
	private Double totalBase0;
	private Double totalBaseExcluido;
	private Double totalIva16;
	private Double totalIva5;
	private Double totalIva0;
	private Double totalIvaExcluido;	
	
	//Totales de la factura
	private String totalLetters;
	private Double invoiceTotalCharges;
	private Double invoiceTotalTaxes;
	private Double invoiceTotalTotal;
	private String invoiceCurrencyId;
	
	//Código de barras
	private String barCode;
	private String barCodeLabel;
	
	//Datos del customer
	private String invoiceContractCustomerName;
	private String invoiceContractCustomerTaxId;
	private String invoiceContractCustomerAddress1;
	private String invoiceContractCustomerCity;
	private String invoiceContractCustomerTel;
	
	//Datos del pagador
	private String invoicePayeeCustomerCity;
	private String invoicePayeeCustomerTel;
	private String invoicePayeeCustomerName;
	private String invoicePayeeCustomerAddress1;
	private String invoicePayeeCustomerTaxId;
	
	//Datos de la línea, buque, bl o booking y visita.
	private String invoiceInvEventLineOperatorName;
	private String invoiceParmInvIbVisitId;
	private String invoiceParmInvObVisitId;
	private String invoiceInvEventBlNbr;
	private String invoiceInvEventBookingNbr;
	private String invoiceInvEventCategory;
	private String invoiceInvEventIbVisitId;
	private Date invoiceInvEventUfvTimeIn;
	private String invoiceInvEventIbCarrierName;
	private String vesselName;
	private String vesselVisitId;
	
	//Tasa de cambio
	private double trm;
	
	//Detalle de factura, ítems
	private List<ItemInvoiceReportDTO> items;
	
	//Fecha y hora de liquidación
	private String itemFechaLiquidacion;
	
	//Pié de página, número habilitado
	private String numberEnabled;
	
	private String notes;
	
	private String formaPago1;
	private String formaPago2;
	private String formaPago3;
	
	public String getInvoiceFinalNbr() {
		return invoiceFinalNbr;
	}

	public void setInvoiceFinalNbr(String invoiceFinalNbr) {
		this.invoiceFinalNbr = invoiceFinalNbr;
	}

	public Date getInvoiceFinalizedDate() {
		return invoiceFinalizedDate;
	}

	public void setInvoiceFinalizedDate(Date invoiceFinalizedDate) {
		this.invoiceFinalizedDate = invoiceFinalizedDate;
	}

	public Date getInvoiceDueDate() {
		return invoiceDueDate;
	}

	public void setInvoiceDueDate(Date invoiceDueDate) {
		this.invoiceDueDate = invoiceDueDate;
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

	public Double getInvoiceTotalCharges() {
		return invoiceTotalCharges;
	}

	public void setInvoiceTotalCharges(Double invoiceTotalCharges) {
		this.invoiceTotalCharges = invoiceTotalCharges;
	}

	public Double getInvoiceTotalTaxes() {
		return invoiceTotalTaxes;
	}

	public void setInvoiceTotalTaxes(Double invoiceTotalTaxes) {
		this.invoiceTotalTaxes = invoiceTotalTaxes;
	}

	public Double getInvoiceTotalTotal() {
		return invoiceTotalTotal;
	}

	public void setInvoiceTotalTotal(Double invoiceTotalTotal) {
		this.invoiceTotalTotal = invoiceTotalTotal;
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

	public void setInvoiceContractCustomerAddress1(
			String invoiceContractCustomerAddress1) {
		this.invoiceContractCustomerAddress1 = invoiceContractCustomerAddress1;
	}

	public String getInvoiceContractCustomerCity() {
		return invoiceContractCustomerCity;
	}

	public void setInvoiceContractCustomerCity(String invoiceContractCustomerCity) {
		this.invoiceContractCustomerCity = invoiceContractCustomerCity;
	}

	public String getInvoiceContractCustomerTel() {
		return invoiceContractCustomerTel;
	}

	public void setInvoiceContractCustomerTel(String invoiceContractCustomerTel) {
		this.invoiceContractCustomerTel = invoiceContractCustomerTel;
	}

	public String getInvoicePayeeCustomerCity() {
		return invoicePayeeCustomerCity;
	}

	public void setInvoicePayeeCustomerCity(String invoicePayeeCustomerCity) {
		this.invoicePayeeCustomerCity = invoicePayeeCustomerCity;
	}

	public String getInvoicePayeeCustomerTel() {
		return invoicePayeeCustomerTel;
	}

	public void setInvoicePayeeCustomerTel(String invoicePayeeCustomerTel) {
		this.invoicePayeeCustomerTel = invoicePayeeCustomerTel;
	}

	public String getInvoicePayeeCustomerName() {
		return invoicePayeeCustomerName;
	}

	public void setInvoicePayeeCustomerName(String invoicePayeeCustomerName) {
		this.invoicePayeeCustomerName = invoicePayeeCustomerName;
	}

	public String getInvoicePayeeCustomerAddress1() {
		return invoicePayeeCustomerAddress1;
	}

	public void setInvoicePayeeCustomerAddress1(String invoicePayeeCustomerAddress1) {
		this.invoicePayeeCustomerAddress1 = invoicePayeeCustomerAddress1;
	}

	public String getInvoicePayeeCustomerTaxId() {
		return invoicePayeeCustomerTaxId;
	}

	public void setInvoicePayeeCustomerTaxId(String invoicePayeeCustomerTaxId) {
		this.invoicePayeeCustomerTaxId = invoicePayeeCustomerTaxId;
	}

	public String getInvoiceInvEventLineOperatorName() {
		return invoiceInvEventLineOperatorName;
	}

	public void setInvoiceInvEventLineOperatorName(
			String invoiceInvEventLineOperatorName) {
		this.invoiceInvEventLineOperatorName = invoiceInvEventLineOperatorName;
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

	public List<ItemInvoiceReportDTO> getItems() {
		return items;
	}

	public void setItems(List<ItemInvoiceReportDTO> items) {
		this.items = items;
	}

	public String getInvoiceCurrencyId() {
		return invoiceCurrencyId;
	}

	public void setInvoiceCurrencyId(String invoiceCurrencyId) {
		this.invoiceCurrencyId = invoiceCurrencyId;
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

	public String getInvoiceInvEventIbCarrierName() {
		return invoiceInvEventIbCarrierName;
	}

	public void setInvoiceInvEventIbCarrierName(String invoiceInvEventIbCarrierName) {
		this.invoiceInvEventIbCarrierName = invoiceInvEventIbCarrierName;
	}

	public String getItemFechaLiquidacion() {
		return itemFechaLiquidacion;
	}
	public void setItemFechaLiquidacion(String fechaLiquidacion) {
		this.itemFechaLiquidacion = fechaLiquidacion;
	}

	public String getVesselName() {
		return vesselName;
	}

	public void setVesselName(String vesselName) {
		this.vesselName = vesselName;
	}

	public double getTrm() {
		return trm;
	}

	public void setTrm(double trm) {
		this.trm = trm;
	}

	public String getNumberEnabled() {
		return numberEnabled;
	}

	public void setNumberEnabled(String numberEnabled) {
		this.numberEnabled = numberEnabled;
	}

	public String getVesselVisitId() {
		return vesselVisitId;
	}

	public void setVesselVisitId(String vesselVisitId) {
		this.vesselVisitId = vesselVisitId;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getFormaPago1() {
		return formaPago1;
	}

	public void setFormaPago1(String formaPago1) {
		this.formaPago1 = formaPago1;
	}

	public String getFormaPago2() {
		return formaPago2;
	}

	public void setFormaPago2(String formaPago2) {
		this.formaPago2 = formaPago2;
	}

	public String getFormaPago3() {
		return formaPago3;
	}

	public void setFormaPago3(String formaPago3) {
		this.formaPago3 = formaPago3;
	}	
}
