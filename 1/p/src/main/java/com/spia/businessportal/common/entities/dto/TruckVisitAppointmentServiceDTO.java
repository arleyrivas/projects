package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class TruckVisitAppointmentServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String appointmentDate;
	private Boolean canceled;
	private String companyIdLdap;
	private String createdByLDAP;
	private String cardId;
	private String license;
	private String name;
	private String firstAppointmentEdo;
	private String firstAppointmentEro;
	private String firstAppointmentExport;
	private String firstAppointmentExportOrder;
	private String firstAppointmentImport;
	private String firstAppointmentImportOrder;
	private String firstTransTypeImport;
	private String firstContainerEdo;
	private String firstContainerEdoTwenty;
	private String firstContainerEro;
	private String firstContainerEroTwenty;
	private String firstContainerExport;
	private String firstContainerExportTwenty;
	private String firstContainerImport;
	private String firstContainerImportTwenty;
	private String firstEdoNbr;
	private String firstEroNbr;
	private String id;
	private String pinNbr;
	private String secondAppointmentEdo;
	private String secondAppointmentEro;
	private String secondAppointmentExport;
	private String secondAppointmentExportOrder;
	private String secondAppointmentImport;
	private String secondAppointmentImportOrder;
	private String secondTransTypeImport;
	private String secondContainerEdo;
	private String secondContainerEdoTwenty;
	private String secondContainerEro;
	private String secondContainerEroTwenty;
	private String secondContainerExport;
	private String secondContainerExportTwenty;
	private String secondContainerImport;
	private String secondContainerImportTwenty;
	private String secondEdoNbr;
	private String secondEroNbr;
	private String truck;
	private String truckVisitNbr;
	private String manifestNbr;
	private String isHazard;
	private Boolean skipEmptyRule;
	
	
	public String getFirstTransTypeImport() {
		return firstTransTypeImport;
	}

	public void setFirstTransTypeImport(String firstTransTypeImport) {
		this.firstTransTypeImport = firstTransTypeImport;
	}

    public String getSecondTransTypeImport() {
		return secondTransTypeImport;
	}

	public void setSecondTransTypeImport(String secondTransTypeImport) {
		this.secondTransTypeImport = secondTransTypeImport;
	}

	public String getIsHazard() {
		return isHazard;
	}

	public void setIsHazard(String isHazard) {
		this.isHazard = isHazard;
	}

	public String getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(String appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public Boolean getCanceled() {
		return canceled;
	}

	public void setCanceled(Boolean canceled) {
		this.canceled = canceled;
	}

	public String getCompanyIdLdap() {
		return companyIdLdap;
	}

	public void setCompanyIdLdap(String companyIdLdap) {
		this.companyIdLdap = companyIdLdap;
	}

	public String getCreatedByLDAP() {
		return createdByLDAP;
	}

	public void setCreatedByLDAP(String createdByLDAP) {
		this.createdByLDAP = createdByLDAP;
	}

	public String getCardId() {
		return cardId;
	}

	public void setCardId(String cardId) {
		this.cardId = cardId;
	}

	public String getLicense() {
		return license;
	}

	public void setLicense(String license) {
		this.license = license;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFirstAppointmentEdo() {
		return firstAppointmentEdo;
	}

	public void setFirstAppointmentEdo(String firstAppointmentEdo) {
		this.firstAppointmentEdo = firstAppointmentEdo;
	}

	public String getFirstAppointmentEro() {
		return firstAppointmentEro;
	}

	public void setFirstAppointmentEro(String firstAppointmentEro) {
		this.firstAppointmentEro = firstAppointmentEro;
	}

	public String getFirstAppointmentExport() {
		return firstAppointmentExport;
	}

	public void setFirstAppointmentExport(String firstAppointmentExport) {
		this.firstAppointmentExport = firstAppointmentExport;
	}

	public String getFirstAppointmentExportOrder() {
		return firstAppointmentExportOrder;
	}

	public void setFirstAppointmentExportOrder(String firstAppointmentExportOrder) {
		this.firstAppointmentExportOrder = firstAppointmentExportOrder;
	}

	public String getFirstAppointmentImport() {
		return firstAppointmentImport;
	}

	public void setFirstAppointmentImport(String firstAppointmentImport) {
		this.firstAppointmentImport = firstAppointmentImport;
	}

	public String getFirstAppointmentImportOrder() {
		return firstAppointmentImportOrder;
	}

	public void setFirstAppointmentImportOrder(String firstAppointmentImportOrder) {
		this.firstAppointmentImportOrder = firstAppointmentImportOrder;
	}

	public String getFirstContainerEdo() {
		return firstContainerEdo;
	}

	public void setFirstContainerEdo(String firstContainerEdo) {
		this.firstContainerEdo = firstContainerEdo;
	}

	public String getFirstContainerEdoTwenty() {
		return firstContainerEdoTwenty;
	}

	public void setFirstContainerEdoTwenty(String firstContainerEdoTwenty) {
		this.firstContainerEdoTwenty = firstContainerEdoTwenty;
	}

	public String getFirstContainerEro() {
		return firstContainerEro;
	}

	public void setFirstContainerEro(String firstContainerEro) {
		this.firstContainerEro = firstContainerEro;
	}

	public String getFirstContainerEroTwenty() {
		return firstContainerEroTwenty;
	}

	public void setFirstContainerEroTwenty(String firstContainerEroTwenty) {
		this.firstContainerEroTwenty = firstContainerEroTwenty;
	}

	public String getFirstContainerExport() {
		return firstContainerExport;
	}

	public void setFirstContainerExport(String firstContainerExport) {
		this.firstContainerExport = firstContainerExport;
	}

	public String getFirstContainerExportTwenty() {
		return firstContainerExportTwenty;
	}

	public void setFirstContainerExportTwenty(String firstContainerExportTwenty) {
		this.firstContainerExportTwenty = firstContainerExportTwenty;
	}

	public String getFirstContainerImport() {
		return firstContainerImport;
	}

	public void setFirstContainerImport(String firstContainerImport) {
		this.firstContainerImport = firstContainerImport;
	}

	public String getFirstContainerImportTwenty() {
		return firstContainerImportTwenty;
	}

	public void setFirstContainerImportTwenty(String firstContainerImportTwenty) {
		this.firstContainerImportTwenty = firstContainerImportTwenty;
	}

	public String getFirstEdoNbr() {
		return firstEdoNbr;
	}

	public void setFirstEdoNbr(String firstEdoNbr) {
		this.firstEdoNbr = firstEdoNbr;
	}

	public String getFirstEroNbr() {
		return firstEroNbr;
	}

	public void setFirstEroNbr(String firstEroNbr) {
		this.firstEroNbr = firstEroNbr;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPinNbr() {
		return pinNbr;
	}

	public void setPinNbr(String pinNbr) {
		this.pinNbr = pinNbr;
	}

	public String getSecondAppointmentEdo() {
		return secondAppointmentEdo;
	}

	public void setSecondAppointmentEdo(String secondAppointmentEdo) {
		this.secondAppointmentEdo = secondAppointmentEdo;
	}

	public String getSecondAppointmentEro() {
		return secondAppointmentEro;
	}

	public void setSecondAppointmentEro(String secondAppointmentEro) {
		this.secondAppointmentEro = secondAppointmentEro;
	}

	public String getSecondAppointmentExport() {
		return secondAppointmentExport;
	}

	public void setSecondAppointmentExport(String secondAppointmentExport) {
		this.secondAppointmentExport = secondAppointmentExport;
	}

	public String getSecondAppointmentExportOrder() {
		return secondAppointmentExportOrder;
	}

	public void setSecondAppointmentExportOrder(String secondAppointmentExportOrder) {
		this.secondAppointmentExportOrder = secondAppointmentExportOrder;
	}

	public String getSecondAppointmentImport() {
		return secondAppointmentImport;
	}

	public void setSecondAppointmentImport(String secondAppointmentImport) {
		this.secondAppointmentImport = secondAppointmentImport;
	}

	public String getSecondAppointmentImportOrder() {
		return secondAppointmentImportOrder;
	}

	public void setSecondAppointmentImportOrder(String secondAppointmentImportOrder) {
		this.secondAppointmentImportOrder = secondAppointmentImportOrder;
	}

	public String getSecondContainerEdo() {
		return secondContainerEdo;
	}

	public void setSecondContainerEdo(String secondContainerEdo) {
		this.secondContainerEdo = secondContainerEdo;
	}

	public String getSecondContainerEdoTwenty() {
		return secondContainerEdoTwenty;
	}

	public void setSecondContainerEdoTwenty(String secondContainerEdoTwenty) {
		this.secondContainerEdoTwenty = secondContainerEdoTwenty;
	}

	public String getSecondContainerEro() {
		return secondContainerEro;
	}

	public void setSecondContainerEro(String secondContainerEro) {
		this.secondContainerEro = secondContainerEro;
	}

	public String getSecondContainerEroTwenty() {
		return secondContainerEroTwenty;
	}

	public void setSecondContainerEroTwenty(String secondContainerEroTwenty) {
		this.secondContainerEroTwenty = secondContainerEroTwenty;
	}

	public String getSecondContainerExport() {
		return secondContainerExport;
	}

	public void setSecondContainerExport(String secondContainerExport) {
		this.secondContainerExport = secondContainerExport;
	}

	public String getSecondContainerExportTwenty() {
		return secondContainerExportTwenty;
	}

	public void setSecondContainerExportTwenty(String secondContainerExportTwenty) {
		this.secondContainerExportTwenty = secondContainerExportTwenty;
	}

	public String getSecondContainerImport() {
		return secondContainerImport;
	}

	public void setSecondContainerImport(String secondContainerImport) {
		this.secondContainerImport = secondContainerImport;
	}

	public String getSecondContainerImportTwenty() {
		return secondContainerImportTwenty;
	}

	public void setSecondContainerImportTwenty(String secondContainerImportTwenty) {
		this.secondContainerImportTwenty = secondContainerImportTwenty;
	}

	public String getSecondEdoNbr() {
		return secondEdoNbr;
	}

	public void setSecondEdoNbr(String secondEdoNbr) {
		this.secondEdoNbr = secondEdoNbr;
	}

	public String getSecondEroNbr() {
		return secondEroNbr;
	}

	public void setSecondEroNbr(String secondEroNbr) {
		this.secondEroNbr = secondEroNbr;
	}

	public String getTruck() {
		return truck;
	}

	public void setTruck(String truck) {
		this.truck = truck;
	}

	public String getTruckVisitNbr() {
		return truckVisitNbr;
	}

	public void setTruckVisitNbr(String truckVisitNbr) {
		this.truckVisitNbr = truckVisitNbr;
	}

	public String getManifestNbr() {
		return manifestNbr;
	}

	public void setManifestNbr(String manifestNbr) {
		this.manifestNbr = manifestNbr;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Boolean getSkipEmptyRule() {
        return skipEmptyRule;
    }

    public void setSkipEmptyRule(Boolean skipEmptyRule) {
        this.skipEmptyRule = skipEmptyRule;
    }

}
