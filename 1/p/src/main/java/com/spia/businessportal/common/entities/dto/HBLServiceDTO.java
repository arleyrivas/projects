package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * Author: Santiago Ariza Clavijo - 04-07-2019 - DTO de la información de cargo
 * lots
 * 
 */
public class HBLServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer unitSequence;
	private Double cargoWeigth;
	private Double cargoQuantity;
	private String destination;
	private Boolean hasDebt;
	private String finalNbr;
	private Boolean hasChargeableUnitEvents;
	private Integer ufvGkey;
	private String bl;
	private Boolean departed;
	private Boolean hasTruckVisitAppointment;
	private Boolean inbound;
	private Integer storageDaysOwed;
	private String truckVisit;
	private String unitNbr;
	private Integer yard;
	private String line;
	private String vesselVisitId;
	private String hbl;
	private Integer vesselDetailId;
	private String consigneeName;
	private String loadAgentId;
	private String loadAgentName;
	private String nbr;
	private String id;
	private String groupCargo;
	private Integer avdGkey;
	private String name;
	private Boolean hasHolds;
	private String holdDescription;
	private String truckId;
	private String truckName;
	private Boolean hasPin;
	private Boolean billable;
	private String emailCustomer;
	private String requested_time;
	private String truck_license_nbr;
	private String driver_name;
	private Boolean hasHoldConsignee;
	private String truck_visit_appt_nbr;
	private String driver_license_nbr;
	private Boolean holdConsigneeActive;
	private Boolean holdUnitActive;
	private Boolean isHazard;
	private String typeDocument;
	private String siteAppointment;
	private Boolean onAccount;

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

	public Integer getUnitSequence() {
		return unitSequence;
	}

	public void setUnitSequence(Integer unitSequence) {
		this.unitSequence = unitSequence;
	}

	public Double getCargoWeigth() {
		return cargoWeigth;
	}

	public void setCargoWeigth(Double cargoWeigth) {
		this.cargoWeigth = cargoWeigth;
	}

	public Double getCargoQuantity() {
		return cargoQuantity;
	}

	public void setCargoQuantity(Double cargoQuantity) {
		this.cargoQuantity = cargoQuantity;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public Boolean getHasDebt() {
		return hasDebt;
	}

	public void setHasDebt(Boolean hasDebt) {
		this.hasDebt = hasDebt;
	}

	public String getFinalNbr() {
		return finalNbr;
	}

	public void setFinalNbr(String finalNbr) {
		this.finalNbr = finalNbr;
	}

	public Boolean getHasChargeableUnitEvents() {
		return hasChargeableUnitEvents;
	}

	public void setHasChargeableUnitEvents(Boolean hasChargeableUnitEvents) {
		this.hasChargeableUnitEvents = hasChargeableUnitEvents;
	}

	public Integer getUfvGkey() {
		return ufvGkey;
	}

	public void setUfvGkey(Integer ufvGkey) {
		this.ufvGkey = ufvGkey;
	}

	public String getBl() {
		return bl;
	}

	public void setBl(String bl) {
		this.bl = bl;
	}

	public Boolean getDeparted() {
		return departed;
	}

	public void setDeparted(Boolean departed) {
		this.departed = departed;
	}

	public Boolean getHasTruckVisitAppointment() {
		return hasTruckVisitAppointment;
	}

	public void setHasTruckVisitAppointment(Boolean hasTruckVisitAppointment) {
		this.hasTruckVisitAppointment = hasTruckVisitAppointment;
	}

	public Boolean getInbound() {
		return inbound;
	}

	public void setInbound(Boolean inbound) {
		this.inbound = inbound;
	}

	public Integer getStorageDaysOwed() {
		return storageDaysOwed;
	}

	public void setStorageDaysOwed(Integer storageDaysOwed) {
		this.storageDaysOwed = storageDaysOwed;
	}

	public String getTruckVisit() {
		return truckVisit;
	}

	public void setTruckVisit(String truckVisit) {
		this.truckVisit = truckVisit;
	}

	public String getUnitNbr() {
		return unitNbr;
	}

	public void setUnitNbr(String unitNbr) {
		this.unitNbr = unitNbr;
	}

	public Integer getYard() {
		return yard;
	}

	public void setYard(Integer yard) {
		this.yard = yard;
	}

	public String getLine() {
		return line;
	}

	public void setLine(String line) {
		this.line = line;
	}

	public String getVesselVisitId() {
		return vesselVisitId;
	}

	public void setVesselVisitId(String vesselVisitId) {
		this.vesselVisitId = vesselVisitId;
	}

	public String getHbl() {
		return hbl;
	}

	public void setHbl(String hbl) {
		this.hbl = hbl;
	}

	public Integer getVesselDetailId() {
		return vesselDetailId;
	}

	public void setVesselDetailId(Integer vesselDetailId) {
		this.vesselDetailId = vesselDetailId;
	}

	public String getConsigneeName() {
		return consigneeName;
	}

	public void setConsigneeName(String consigneeName) {
		this.consigneeName = consigneeName;
	}

	public String getLoadAgentName() {
		return loadAgentName;
	}

	public void setLoadAgentName(String loadAgentName) {
		this.loadAgentName = loadAgentName;
	}

	public String getLoadAgentId() {
		return loadAgentId;
	}

	public void setLoadAgentId(String loadAgentId) {
		this.loadAgentId = loadAgentId;
	}

	public String getNbr() {
		return nbr;
	}

	public void setNbr(String nbr) {
		this.nbr = nbr;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getGroupCargo() {
		return groupCargo;
	}

	public void setGroupCargo(String groupCargo) {
		this.groupCargo = groupCargo;
	}

	public Integer getAvdGkey() {
		return avdGkey;
	}

	public void setAvdGkey(Integer avdGkey) {
		this.avdGkey = avdGkey;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Boolean getHasHolds() {
		return hasHolds;
	}

	public void setHasHolds(Boolean hasHolds) {
		this.hasHolds = hasHolds;
	}

	public String getHoldDescription() {
		return holdDescription;
	}

	public void setHoldDescription(String holdDescription) {
		this.holdDescription = holdDescription;
	}

	public String getTruckId() {
		return truckId;
	}

	public void setTruckId(String truckId) {
		this.truckId = truckId;
	}

	public String getTruckName() {
		return truckName;
	}

	public void setTruckName(String truckName) {
		this.truckName = truckName;
	}

	public Boolean getHasPin() {
		return hasPin;
	}

	public void setHasPin(Boolean hasPin) {
		this.hasPin = hasPin;
	}

	public Boolean getBillable() {
		return billable;
	}

	public void setBillable(Boolean billable) {
		this.billable = billable;
	}

	public String getEmailCustomer() {
		return emailCustomer;
	}

	public void setEmailCustomer(String emailCustomer) {
		this.emailCustomer = emailCustomer;
	}

	public String getRequested_time() {
		return requested_time;
	}

	public void setRequested_time(String requested_time) {
		this.requested_time = requested_time;
	}

	public String getTruck_license_nbr() {
		return truck_license_nbr;
	}

	public void setTruck_license_nbr(String truck_license_nbr) {
		this.truck_license_nbr = truck_license_nbr;
	}

	public String getDriver_name() {
		return driver_name;
	}

	public void setDriver_name(String driver_name) {
		this.driver_name = driver_name;
	}

	public Boolean getHasHoldConsignee() {
		return hasHoldConsignee;
	}

	public void setHasHoldConsignee(Boolean hasHoldConsignee) {
		this.hasHoldConsignee = hasHoldConsignee;
	}

	public String getTruck_visit_appt_nbr() {
		return truck_visit_appt_nbr;
	}

	public void setTruck_visit_appt_nbr(String truck_visit_appt_nbr) {
		this.truck_visit_appt_nbr = truck_visit_appt_nbr;
	}

	public String getDriver_license_nbr() {
		return driver_license_nbr;
	}

	public void setDriver_license_nbr(String driver_license_nbr) {
		this.driver_license_nbr = driver_license_nbr;
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

	public Boolean getOnAccount() {
		return onAccount;
	}

	public void setOnAccount(Boolean onAccount) {
		this.onAccount = onAccount;
	}
	
}
