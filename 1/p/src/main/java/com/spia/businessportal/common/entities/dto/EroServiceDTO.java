package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite
 * realizar operaciones con Edo
 * 
 */
public class EroServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String gkey;
	private String bl;
	private String bookingNbr;
	private Boolean departed;
	private String edoNbr;
	private String eroNbr;
	private Boolean hasChargeableUnitEvents;
	private Boolean hasDebt;
	private String finalNbr;
	private Boolean hasHolds;
	private Boolean hasTruckVisitAppointment;
	private Boolean holdId;
	private Boolean holdDescription;
	private Boolean inbound;
	private String isoType;
	private int storageDaysOwed;
	private String truckVisit;
	private Boolean twenty;
	private String unitNbr;
	private String yard;
	private Date earlyArrival;
	private String carrier;
	private Date fechaCierreDocumental;
	private String line;
	private String shipperId;
	private String vesselVisitId;
	private String tva;
	private String oea;
	//private Boolean emptyRuleActive;
	private String description;
	private String manifestNbr;
	private String gate;
	private Boolean isReefer;
	private Boolean isHazard;
	private String typeDocument;
    private String siteAppointment;
    
    
    
	




	public String getSiteAppointment() {
		return siteAppointment;
	}

	public void setSiteAppointment(String siteAppointment) {
		this.siteAppointment = siteAppointment;
	}

	public String getTypeDocument() {
		return typeDocument;
	}

	public void setTypeDocument(String typeDocument) {
		this.typeDocument = typeDocument;
	}

	public Boolean getIsReefer() {
		return isReefer;
	}

	public void setIsReefer(Boolean isReefer) {
		this.isReefer = isReefer;
	}

	public Boolean getIsHazard() {
		return isHazard;
	}

	public void setIsHazard(Boolean isHazard) {
		this.isHazard = isHazard;
	}

	public String getGkey() {
		return gkey;
	}

	public void setGkey(String gkey) {
		this.gkey = gkey;
	}

	public String getBl() {
		return bl;
	}

	public void setBl(String bl) {
		this.bl = bl;
	}

	public String getBookingNbr() {
		return bookingNbr;
	}

	public void setBookingNbr(String bookingNbr) {
		this.bookingNbr = bookingNbr;
	}

	public Boolean getDeparted() {
		return departed;
	}

	public void setDeparted(Boolean departed) {
		this.departed = departed;
	}

	public String getEdoNbr() {
		return edoNbr;
	}

	public void setEdoNbr(String edoNbr) {
		this.edoNbr = edoNbr;
	}

	public String getEroNbr() {
		return eroNbr;
	}

	public void setEroNbr(String eroNbr) {
		this.eroNbr = eroNbr;
	}

	public Boolean getHasChargeableUnitEvents() {
		return hasChargeableUnitEvents;
	}

	public void setHasChargeableUnitEvents(Boolean hasChargeableUnitEvents) {
		this.hasChargeableUnitEvents = hasChargeableUnitEvents;
	}

	public Boolean getHasDebt() {
		return hasDebt;
	}

	public void setHasDebt(Boolean hasDebt) {
		this.hasDebt = hasDebt;
	}

	@JsonProperty("Final_Nbr")
	public String getFinalNbr() {
		return finalNbr;
	}

	@JsonProperty("Final_Nbr")
	public void setFinalNbr(String finalnbr) {
		finalNbr = finalnbr;
	}

	public Boolean getHasHolds() {
		return hasHolds;
	}

	public void setHasHolds(Boolean hasHolds) {
		this.hasHolds = hasHolds;
	}

	public Boolean getHasTruckVisitAppointment() {
		return hasTruckVisitAppointment;
	}

	public void setHasTruckVisitAppointment(Boolean hasTruckVisitAppointment) {
		this.hasTruckVisitAppointment = hasTruckVisitAppointment;
	}

	public Boolean getHoldId() {
		return holdId;
	}

	public void setHoldId(Boolean holdId) {
		this.holdId = holdId;
	}

	public Boolean getHoldDescription() {
		return holdDescription;
	}

	public void setHoldDescription(Boolean holdDescription) {
		this.holdDescription = holdDescription;
	}

	public Boolean getInbound() {
		return inbound;
	}

	public void setInbound(Boolean inbound) {
		this.inbound = inbound;
	}

	public String getIsoType() {
		return isoType;
	}

	public void setIsoType(String isoType) {
		this.isoType = isoType;
	}

	public int getStorageDaysOwed() {
		return storageDaysOwed;
	}

	public void setStorageDaysOwed(int storageDaysOwed) {
		this.storageDaysOwed = storageDaysOwed;
	}

	public String getTruckVisit() {
		return truckVisit;
	}

	public void setTruckVisit(String truckVisit) {
		this.truckVisit = truckVisit;
	}

	public Boolean getTwenty() {
		return twenty;
	}

	public void setTwenty(Boolean twenty) {
		this.twenty = twenty;
	}

	public String getUnitNbr() {
		return unitNbr;
	}

	public void setUnitNbr(String unitNbr) {
		this.unitNbr = unitNbr;
	}

	public String getYard() {
		return yard;
	}

	public void setYard(String yard) {
		this.yard = yard;
	}

	public Date getEarlyArrival() {
		return earlyArrival;
	}

	public void setEarlyArrival(Date earlyArrival) {
		this.earlyArrival = earlyArrival;
	}

	public String getCarrier() {
		return carrier;
	}

	public void setCarrier(String carrier) {
		this.carrier = carrier;
	}

	public Date getFechaCierreDocumental() {
		return fechaCierreDocumental;
	}

	public void setFechaCierreDocumental(Date fechaCierreDocumental) {
		this.fechaCierreDocumental = fechaCierreDocumental;
	}

	public String getLine() {
		return line;
	}

	public void setLine(String line) {
		this.line = line;
	}

	public String getShipperId() {
		return shipperId;
	}

	public void setShipperId(String shipperId) {
		this.shipperId = shipperId;
	}

	public String getVesselVisitId() {
		return vesselVisitId;
	}

	public void setVesselVisitId(String vesselVisitId) {
		this.vesselVisitId = vesselVisitId;
	}

	public String getTva() {
		return tva;
	}

	public void setTva(String tva) {
		this.tva = tva;
	}

	public String getOea() {
		return oea;
	}

	public void setOea(String oea) {
		this.oea = oea;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getManifestNbr() {
		return manifestNbr;
	}

	public void setManifestNbr(String manifestNbr) {
		this.manifestNbr = manifestNbr;
	}

	public String getGate() {
		return gate;
	}

	public void setGate(String gate) {
		this.gate = gate;
	}

}
