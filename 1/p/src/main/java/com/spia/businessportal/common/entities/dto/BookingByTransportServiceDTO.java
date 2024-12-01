package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Author: Elvis Fontalvo - Assert Solutions
 * Email:efontalvo@aassertsolutions.com Date: 28/07/2020 Servicio que permite
 * realizar operaciones con Booking
 * 
 */
public class BookingByTransportServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String nbr;
	private String eqStatus;
	private String line;
	private String shipperId;
	private String shipperName;
	private String agentId;
	private String carrierVisit;
	private String carrierVisitName;
	private String inVoyNbr;
	private String outVoyNbr;
	private String vesselId;
	private String vesselName;
	private String visitPhase;
	private String portOfLoading;
	private String portOfDischarge1;
	private String reference;
	private String quantity;
	private String availableQuantity;
	private String equipmentType;
	private String equipmentTypeDescription;
	private int heightMm;
	private int lengthMm;
	private String eqIsoGroup;
	private String isOog;
	private BigDecimal grossWeight;
	private Long oogLeftCm;
	private Long oogRightCm;
	private Long oogTopCm;
	private Long oogFrontCm;
	private Boolean yard;
	private Boolean departed;
	private Boolean twenty;
	private Boolean hasDebt;
	private String seqNbr;
	private String unitNbr;
	private String transitState;
	private String isoType;
	private String truckingCompany;
	private Boolean hasChargeableUnitEvents;
	private String category;
	private Boolean hasPin;
	private Boolean hasTruckVisitAppointment;
	private Boolean onAccount;
	private Boolean hasHolds;
	private String pin;
	private String holdDescription;
	private Date powerPaidThruDay;
	private String archiso;
	private String tempReqdC;

	public String getNbr() {
		return nbr;
	}

	public void setNbr(String nbr) {
		this.nbr = nbr;
	}

	public String getEqStatus() {
		return eqStatus;
	}

	public void setEqStatus(String eqStatus) {
		this.eqStatus = eqStatus;
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

	public String getAgentId() {
		return agentId;
	}

	public void setAgentId(String agentId) {
		this.agentId = agentId;
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

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
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

	public int getHeightMm() {
		return heightMm;
	}

	public void setHeightMm(int heightMm) {
		this.heightMm = heightMm;
	}

	public int getLengthMm() {
		return lengthMm;
	}

	public void setLengthMm(int lengthMm) {
		this.lengthMm = lengthMm;
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

	public BigDecimal getGrossWeight() {
		return grossWeight;
	}

	public void setGrossWeight(BigDecimal grossWeight) {
		this.grossWeight = grossWeight;
	}

	public Long getOogLeftCm() {
		return oogLeftCm;
	}

	public void setOogLeftCm(Long oogLeftCm) {
		this.oogLeftCm = oogLeftCm;
	}

	public Long getOogRightCm() {
		return oogRightCm;
	}

	public void setOogRightCm(Long oogRightCm) {
		this.oogRightCm = oogRightCm;
	}

	public Long getOogTopCm() {
		return oogTopCm;
	}

	public void setOogTopCm(Long oogTopCm) {
		this.oogTopCm = oogTopCm;
	}

	public Long getOogFrontCm() {
		return oogFrontCm;
	}

	public void setOogFrontCm(Long oogFrontCm) {
		this.oogFrontCm = oogFrontCm;
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

	public Boolean getTwenty() {
		return twenty;
	}

	public void setTwenty(Boolean twenty) {
		this.twenty = twenty;
	}

	public Boolean getHasDebt() {
		return hasDebt;
	}

	public void setHasDebt(Boolean hasDebt) {
		this.hasDebt = hasDebt;
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

	public String getTruckingCompany() {
		return truckingCompany;
	}

	public void setTruckingCompany(String truckingCompany) {
		this.truckingCompany = truckingCompany;
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

	public Date getPowerPaidThruDay() {
		return powerPaidThruDay;
	}

	public void setPowerPaidThruDay(Date powerPaidThruDay) {
		this.powerPaidThruDay = powerPaidThruDay;
	}

	public String getArchiso() {
		return archiso;
	}

	public void setArchiso(String archiso) {
		this.archiso = archiso;
	}

	public String getTempReqdC() {
		return tempReqdC;
	}

	public void setTempReqdC(String tempReqdC) {
		this.tempReqdC = tempReqdC;
	}
	

}
