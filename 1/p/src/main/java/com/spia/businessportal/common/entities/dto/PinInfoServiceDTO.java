package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class PinInfoServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String bookingNbr;
	private Boolean departed;
	private String edoNbr;
	private String eroNbr;
	private Boolean hasChargeableUnitEvents;
	private Boolean hasDebt;
	private Boolean hasHolds;
	private Boolean hasPin;
	private Boolean hasTruckVisitAppointment;
	private HoldListDTO holds;
	private String holdsTooltip;
	private Boolean inbound;
	private String isoType;
	private Boolean onAccount;
	private String pin;
	private String pinTooltip;
	private int storageDaysOwed;
	private String truckVisit;
	private String truckVisitAppointmentTooltip;
	private Boolean twenty;
	private String unitNbr;
	private Boolean yard;
	private String line;
	private String shipperId;
	private String vesselVisitId;
	private String oea;
	private Boolean holdConsigneeActive;
	private Boolean holdUnitActive;
	//private Boolean emptyRuleActive;
	private String description;
	private String manifestNbr;
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

	public Boolean getIsHazard() {
		return isHazard;
	}

	public void setIsHazard(Boolean isHazard) {
		this.isHazard = isHazard;
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

	public Boolean getHasHolds() {
		return hasHolds;
	}

	public void setHasHolds(Boolean hasHolds) {
		this.hasHolds = hasHolds;
	}

	public Boolean getHasPin() {
		return hasPin;
	}

	public void setHasPin(Boolean hasPin) {
		this.hasPin = hasPin;
	}

	public Boolean getHasTruckVisitAppointment() {
		return hasTruckVisitAppointment;
	}

	public void setHasTruckVisitAppointment(Boolean hasTruckVisitAppointment) {
		this.hasTruckVisitAppointment = hasTruckVisitAppointment;
	}

	public HoldListDTO getHolds() {
		return holds;
	}

	public void setHolds(HoldListDTO holds) {
		this.holds = holds;
	}

	public String getHoldsTooltip() {
		return holdsTooltip;
	}

	public void setHoldsTooltip(String holdsTooltip) {
		this.holdsTooltip = holdsTooltip;
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

	public Boolean getOnAccount() {
		return onAccount;
	}

	public void setOnAccount(Boolean onAccount) {
		this.onAccount = onAccount;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public String getPinTooltip() {
		return pinTooltip;
	}

	public void setPinTooltip(String pinTooltip) {
		this.pinTooltip = pinTooltip;
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

	public String getTruckVisitAppointmentTooltip() {
		return truckVisitAppointmentTooltip;
	}

	public void setTruckVisitAppointmentTooltip(String truckVisitAppointmentTooltip) {
		this.truckVisitAppointmentTooltip = truckVisitAppointmentTooltip;
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

	public Boolean getYard() {
		return yard;
	}

	public void setYard(Boolean yard) {
		this.yard = yard;
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

	public String getOea() {
		return oea;
	}

	public void setOea(String oea) {
		this.oea = oea;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Boolean getHoldConsigneeActive() {
		return holdConsigneeActive;
	}

	public void setHoldConsigneeActive(Boolean holdConsigneeActive) {
		this.holdConsigneeActive = holdConsigneeActive;
	}

	public Boolean getHoldUnitActive() {
		return holdUnitActive;
	}

	public void setHoldUnitActive(Boolean holdUnitActive) {
		this.holdUnitActive = holdUnitActive;
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

}
