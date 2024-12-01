package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;

/**
 * Author: Elvis Fontalvo - Assert Solutions
 * Email:efontalvo@aassertsolutions.com Date: 28/07/2020 Servicio que permite
 * realizar operaciones con Booking
 * 
 */
public class BookingServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String nbr;
	private String line;
	private String shipperId;
	private String shipperName;
	private String agent;
	private String carrierVisit;
	private String carrierVisitName;
	private String inVoyNbr;
	private String outVoyNbr;
	private String vesselId;
	private String vesselName;
	private String visitPhase;
	private String portOfLoading;
	private String portOfDischarge1;
	private String itemId;
	private String quantity;
	private String availableQuantity;
	private String equipmentType;
	private String equipmentTypeDescription;
	private String eqIsoGroup;
	private String isOog;
	private String seqNbr;
	private String unitNbr;
	private String transitState;
	private String isoType;
	private Boolean twenty;
	private String truckingCompany;
	private Boolean hasDebt;
	private Boolean hasChargeableUnitEvents;
	private String category;
	private Boolean hasPin;
	private Boolean hasTruckVisitAppointment;
	private Boolean onAccount;
	private Boolean hasHolds;
	private String pin;
	private String holdDescription;
	private Boolean yard;
	private Boolean departed;
	private Date powerPaidThruDay;
	private Boolean Retiro;
	private Date storagePaidthruDay;


	public String getNbr() {
		return nbr;
	}

	public void setNbr(String nbr) {
		this.nbr = nbr;
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

	public String getShipperName() {
		return shipperName;
	}

	public void setShipperName(String shipperName) {
		this.shipperName = shipperName;
	}

	public String getAgent() {
		return agent;
	}

	public void setAgent(String agent) {
		this.agent = agent;
	}

	public String getCarrierVisit() {
		return carrierVisit;
	}

	public void setCarrierVisit(String carrierVisit) {
		this.carrierVisit = carrierVisit;
	}

	public String getCarrierVisitName() {
		return carrierVisitName;
	}

	public void setCarrierVisitName(String carrierVisitName) {
		this.carrierVisitName = carrierVisitName;
	}

	public String getInVoyNbr() {
		return inVoyNbr;
	}

	public void setInVoyNbr(String inVoyNbr) {
		this.inVoyNbr = inVoyNbr;
	}

	public String getOutVoyNbr() {
		return outVoyNbr;
	}

	public void setOutVoyNbr(String outVoyNbr) {
		this.outVoyNbr = outVoyNbr;
	}

	public String getVesselId() {
		return vesselId;
	}

	public void setVesselId(String vesselId) {
		this.vesselId = vesselId;
	}

	public String getVesselName() {
		return vesselName;
	}

	public void setVesselName(String vesselName) {
		this.vesselName = vesselName;
	}

	public String getVisitPhase() {
		return visitPhase;
	}

	public void setVisitPhase(String visitPhase) {
		this.visitPhase = visitPhase;
	}

	public String getPortOfLoading() {
		return portOfLoading;
	}

	public void setPortOfLoading(String portOfLoading) {
		this.portOfLoading = portOfLoading;
	}

	public String getPortOfDischarge1() {
		return portOfDischarge1;
	}

	public void setPortOfDischarge1(String portOfDischarge1) {
		this.portOfDischarge1 = portOfDischarge1;
	}

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getAvailableQuantity() {
		return availableQuantity;
	}

	public void setAvailableQuantity(String availableQuantity) {
		this.availableQuantity = availableQuantity;
	}

	public String getEquipmentType() {
		return equipmentType;
	}

	public void setEquipmentType(String equipmentType) {
		this.equipmentType = equipmentType;
	}

	public String getEquipmentTypeDescription() {
		return equipmentTypeDescription;
	}

	public void setEquipmentTypeDescription(String equipmentTypeDescription) {
		this.equipmentTypeDescription = equipmentTypeDescription;
	}

	public String getEqIsoGroup() {
		return eqIsoGroup;
	}

	public void setEqIsoGroup(String eqIsoGroup) {
		this.eqIsoGroup = eqIsoGroup;
	}

	public String getIsOog() {
		return isOog;
	}

	public void setIsOog(String isOog) {
		this.isOog = isOog;
	}

	public String getSeqNbr() {
		return seqNbr;
	}

	public void setSeqNbr(String seqNbr) {
		this.seqNbr = seqNbr;
	}

	public String getUnitNbr() {
		return unitNbr;
	}

	public void setUnitNbr(String unitNbr) {
		this.unitNbr = unitNbr;
	}

	public String getTransitState() {
		return transitState;
	}

	public void setTransitState(String transitState) {
		this.transitState = transitState;
	}

	public String getIsoType() {
		return isoType;
	}

	public void setIsoType(String isoType) {
		this.isoType = isoType;
	}

	public Boolean getTwenty() {
		return twenty;
	}

	public void setTwenty(Boolean twenty) {
		this.twenty = twenty;
	}

	public String getTruckingCompany() {
		return truckingCompany;
	}

	public void setTruckingCompany(String truckingCompany) {
		this.truckingCompany = truckingCompany;
	}

	public Boolean getHasDebt() {
		return hasDebt;
	}

	public void setHasDebt(Boolean hasDebt) {
		this.hasDebt = hasDebt;
	}

	public Boolean getHasChargeableUnitEvents() {
		return hasChargeableUnitEvents;
	}

	public void setHasChargeableUnitEvents(Boolean hasChargeableUnitEvents) {
		this.hasChargeableUnitEvents = hasChargeableUnitEvents;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
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

	public Boolean getOnAccount() {
		return onAccount;
	}

	public void setOnAccount(Boolean onAccount) {
		this.onAccount = onAccount;
	}

	public Boolean getHasHolds() {
		return hasHolds;
	}

	public void setHasHolds(Boolean hasHolds) {
		this.hasHolds = hasHolds;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public String getHoldDescription() {
		return holdDescription;
	}

	public void setHoldDescription(String holdDescription) {
		this.holdDescription = holdDescription;
	}

	public Boolean getYard() {
		return yard;
	}

	public void setYard(Boolean yard) {
		this.yard = yard;
	}

	public Boolean getDeparted() {
		return departed;
	}

	public void setDeparted(Boolean departed) {
		this.departed = departed;
	}

	public Date getPowerPaidThruDay() {
		return powerPaidThruDay;
	}

	public void setPowerPaidThruDay(Date powerPaidThruDay) {
		this.powerPaidThruDay = powerPaidThruDay;
	}

	public Boolean getRetiro() {
		return Retiro;
	}

	public void setRetiro(Boolean Retiro) {
		this.Retiro = Retiro;
	}

	public Date getStoragePaidthruDay() {
		return storagePaidthruDay;
	}

	public void setStoragePaidthruDay(Date storagePaidthruDay) {
		this.storagePaidthruDay = storagePaidthruDay;
	}

}
