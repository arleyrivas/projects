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
public class BlServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String blNumber;
	private String carrierVisit;
	private String line;
	private String carrierVisitName;
	private String agent;
	private String inVoyNbr;
	private String id_VV;
	private String outVoyNbr;
	private String operatorId;
	private String vesselId;
	private String vesselName;
	private String visitPhase;
	private String unitNbr;
	private String isoType;
	private Boolean hasDebt;
	private Boolean hasChargeableUnitEvents;
	private Boolean yard;
	private String departed;
	private String inbound;
	private Boolean twenty;
	private String Final_Nbr;
	private String consigneeId;
	private String consigneeName;
	private Boolean hasHolds;
	private String holdDescription;
	private Integer storageDaysOwed;
	private Boolean onAccount;
	private String category;
	private Boolean hasPin;
	private Boolean hasTruckVisitAppointment;
	private String emailCustomer;
	private String requested_time;
	private String truck_license_nbr;
	private String driverName;
	private Boolean hasHoldConsignee;
	private String truck_visit_appt_nbr;
	private Boolean holdConsigneeActive;
	private String loadAgentId;
	private String loadAgentName;
	// ASSIST 23052022
	private String dataType;

	/**
	 * @return the blNumber
	 */
	public String getBlNumber() {
		return blNumber;
	}

	public String getDataType() {
		return dataType;
	}

	public void setDataType(String dataType) {
		this.dataType = dataType;
	}



	/**
	 * @param blNumber the blNumber to set
	 */
	public void setBlNumber(String blNumber) {
		this.blNumber = blNumber;
	}

	/**
	 * @return the carrierVisit
	 */
	public String getCarrierVisit() {
		return carrierVisit;
	}

	/**
	 * @param carrierVisit the carrierVisit to set
	 */
	public void setCarrierVisit(String carrierVisit) {
		this.carrierVisit = carrierVisit;
	}

	/**
	 * @return the line
	 */
	public String getLine() {
		return line;
	}

	/**
	 * @param line the line to set
	 */
	public void setLine(String line) {
		this.line = line;
	}

	/**
	 * @return the carrierVisitName
	 */
	public String getCarrierVisitName() {
		return carrierVisitName;
	}

	/**
	 * @param carrierVisitName the carrierVisitName to set
	 */
	public void setCarrierVisitName(String carrierVisitName) {
		this.carrierVisitName = carrierVisitName;
	}

	/**
	 * @return the agent
	 */
	public String getAgent() {
		return agent;
	}

	/**
	 * @param agent the agent to set
	 */
	public void setAgent(String agent) {
		this.agent = agent;
	}

	/**
	 * @return the inVoyNbr
	 */
	public String getInVoyNbr() {
		return inVoyNbr;
	}

	/**
	 * @param inVoyNbr the inVoyNbr to set
	 */
	public void setInVoyNbr(String inVoyNbr) {
		this.inVoyNbr = inVoyNbr;
	}

	/**
	 * @return the id_VV
	 */
	public String getId_VV() {
		return id_VV;
	}

	/**
	 * @param id_VV the id_VV to set
	 */
	public void setId_VV(String id_VV) {
		this.id_VV = id_VV;
	}

	/**
	 * @return the outVoyNbr
	 */
	public String getOutVoyNbr() {
		return outVoyNbr;
	}

	/**
	 * @param outVoyNbr the outVoyNbr to set
	 */
	public void setOutVoyNbr(String outVoyNbr) {
		this.outVoyNbr = outVoyNbr;
	}

	/**
	 * @return the operatorId
	 */
	public String getOperatorId() {
		return operatorId;
	}

	/**
	 * @param operatorId the operatorId to set
	 */
	public void setOperatorId(String operatorId) {
		this.operatorId = operatorId;
	}

	/**
	 * @return the vesselId
	 */
	public String getVesselId() {
		return vesselId;
	}

	/**
	 * @param vesselId the vesselId to set
	 */
	public void setVesselId(String vesselId) {
		this.vesselId = vesselId;
	}

	/**
	 * @return the vesselName
	 */
	public String getVesselName() {
		return vesselName;
	}

	/**
	 * @param vesselName the vesselName to set
	 */
	public void setVesselName(String vesselName) {
		this.vesselName = vesselName;
	}

	/**
	 * @return the visitPhase
	 */
	public String getVisitPhase() {
		return visitPhase;
	}

	/**
	 * @param visitPhase the visitPhase to set
	 */
	public void setVisitPhase(String visitPhase) {
		this.visitPhase = visitPhase;
	}

	/**
	 * @return the unitNbr
	 */
	public String getUnitNbr() {
		return unitNbr;
	}

	/**
	 * @param unitNbr the unitNbr to set
	 */
	public void setUnitNbr(String unitNbr) {
		this.unitNbr = unitNbr;
	}

	/**
	 * @return the isoType
	 */
	public String getIsoType() {
		return isoType;
	}

	/**
	 * @param isoType the isoType to set
	 */
	public void setIsoType(String isoType) {
		this.isoType = isoType;
	}

	/**
	 * @return the hasDebt
	 */
	public Boolean getHasDebt() {
		return hasDebt;
	}

	/**
	 * @param hasDebt the hasDebt to set
	 */
	public void setHasDebt(Boolean hasDebt) {
		this.hasDebt = hasDebt;
	}

	/**
	 * @return the hasChargeableUnitEvents
	 */
	public Boolean getHasChargeableUnitEvents() {
		return hasChargeableUnitEvents;
	}

	/**
	 * @param hasChargeableUnitEvents the hasChargeableUnitEvents to set
	 */
	public void setHasChargeableUnitEvents(Boolean hasChargeableUnitEvents) {
		this.hasChargeableUnitEvents = hasChargeableUnitEvents;
	}

	/**
	 * @return the yard
	 */
	public Boolean getYard() {
		return yard;
	}

	/**
	 * @param yard the yard to set
	 */
	public void setYard(Boolean yard) {
		this.yard = yard;
	}

	/**
	 * @return the departed
	 */
	public String getDeparted() {
		return departed;
	}

	/**
	 * @param departed the departed to set
	 */
	public void setDeparted(String departed) {
		this.departed = departed;
	}

	/**
	 * @return the inbound
	 */
	public String getInbound() {
		return inbound;
	}

	/**
	 * @param inbound the inbound to set
	 */
	public void setInbound(String inbound) {
		this.inbound = inbound;
	}

	/**
	 * @return the twenty
	 */
	public Boolean getTwenty() {
		return twenty;
	}

	/**
	 * @param twenty the twenty to set
	 */
	public void setTwenty(Boolean twenty) {
		this.twenty = twenty;
	}

	/**
	 * @return the final_Nbr
	 */
	public String getFinal_Nbr() {
		return Final_Nbr;
	}

	/**
	 * @param final_Nbr the final_Nbr to set
	 */
	public void setFinal_Nbr(String final_Nbr) {
		Final_Nbr = final_Nbr;
	}

	/**
	 * @return the consigneeId
	 */
	public String getConsigneeId() {
		return consigneeId;
	}

	/**
	 * @param consigneeId the consigneeId to set
	 */
	public void setConsigneeId(String consigneeId) {
		this.consigneeId = consigneeId;
	}

	/**
	 * @return the consigneeName
	 */
	public String getConsigneeName() {
		return consigneeName;
	}

	/**
	 * @param consigneeName the consigneeName to set
	 */
	public void setConsigneeName(String consigneeName) {
		this.consigneeName = consigneeName;
	}

	/**
	 * @return the hasHolds
	 */
	public Boolean getHasHolds() {
		return hasHolds;
	}

	/**
	 * @param hasHolds the hasHolds to set
	 */
	public void setHasHolds(Boolean hasHolds) {
		this.hasHolds = hasHolds;
	}

	/**
	 * @return the holdDescription
	 */
	public String getHoldDescription() {
		return holdDescription;
	}

	/**
	 * @param holdDescription the holdDescription to set
	 */
	public void setHoldDescription(String holdDescription) {
		this.holdDescription = holdDescription;
	}

	/**
	 * @return the storageDaysOwed
	 */
	public Integer getStorageDaysOwed() {
		return storageDaysOwed;
	}

	/**
	 * @param storageDaysOwed the storageDaysOwed to set
	 */
	public void setStorageDaysOwed(Integer storageDaysOwed) {
		this.storageDaysOwed = storageDaysOwed;
	}

	/**
	 * @return the onAccount
	 */
	public Boolean getOnAccount() {
		return onAccount;
	}

	/**
	 * @param onAccount the onAccount to set
	 */
	public void setOnAccount(Boolean onAccount) {
		this.onAccount = onAccount;
	}

	/**
	 * @return the category
	 */
	public String getCategory() {
		return category;
	}

	/**
	 * @param category the category to set
	 */
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

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
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

	public Boolean getHoldConsigneeActive() {
		return holdConsigneeActive;
	}

	public void setHoldConsigneeActive(Boolean holdConsigneeActive) {
		this.holdConsigneeActive = holdConsigneeActive;
	}

	// ASSIST-TI 13042022 
	public String getLoadAgentId() {
		return loadAgentId;
	}
	public void setLoadAgentId(String loadAgentId) {
		this.loadAgentId = loadAgentId;
	}
	public String getLoadAgentName() {
		return loadAgentName;
	}
	public void setLoadAgentName(String loadAgentName) {
		this.loadAgentName = loadAgentName;
	}

}
