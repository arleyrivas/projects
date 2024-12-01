/**
 * 
 */
package com.spia.businessportal.common.entities.dto;

import java.util.Date;
import java.util.List;

import com.spia.services.entities.CargoLot;
import com.spia.services.entities.Driver;

/**
 * DTO para el guardado de appointments.
 * 
 * @author diego
 *
 */
public class TruckVisitAppointmentBreakBulkDTO {

	private String pinNbr;
	private Date appointmentDate;
	private Driver driver;
	private String truck;
	private List<CargoLot> cargoLots;
	private String truckVisitNbr;
	private List<String> pinInfoList;
	private Double initialWeight;
	private Double weight;
	private String manifestNbr;
	private String cCACode;
	private String cCADescription;
	private String isHazard;
	private String typeDocument;
	private String informationAppointment;
	
	
	public String getTypeDocument() {
		return typeDocument;
	}

	public void setTypeDocument(String typeDocument) {
		this.typeDocument = typeDocument;
	}

	public String getcCADescription() {
		return cCADescription;
	}

	public void setcCADescription(String cCADescription) {
		this.cCADescription = cCADescription;
	}

	public String getIsHazard() {
		return isHazard;
	}

	public void setIsHazard(String isHazard) {
		this.isHazard = isHazard;
	}

	/**
	 * 
	 */
	public TruckVisitAppointmentBreakBulkDTO() {
		super();
	}

	public String getPinNbr() {
		return pinNbr;
	}

	public void setPinNbr(String pinNbr) {
		this.pinNbr = pinNbr;
	}

	public Date getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public Driver getDriver() {
		return driver;
	}

	public void setDriver(Driver driver) {
		this.driver = driver;
	}

	public String getTruck() {
		return truck;
	}

	public void setTruck(String truck) {
		this.truck = truck;
	}

	public List<CargoLot> getCargoLots() {
		return cargoLots;
	}

	public void setCargoLots(List<CargoLot> cargoLots) {
		this.cargoLots = cargoLots;
	}

	public String getTruckVisitNbr() {
		return truckVisitNbr;
	}

	public void setTruckVisitNbr(String truckVisitNbr) {
		this.truckVisitNbr = truckVisitNbr;
	}

	public List<String> getPinInfoList() {
		return pinInfoList;
	}

	public void setPinInfoList(List<String> pinInfoList) {
		this.pinInfoList = pinInfoList;
	}

	public Double getInitialWeight() {
		return initialWeight;
	}

	public void setInitialWeight(Double initialWeight) {
		this.initialWeight = initialWeight;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public String getManifestNbr() {
		return manifestNbr;
	}

	public void setManifestNbr(String manifestNbr) {
		this.manifestNbr = manifestNbr;
	}

	public String getcCACode() {
		return cCACode;
	}

	public void setcCACode(String cCACode) {
		this.cCACode = cCACode;
	}

	public String getInformationAppointment() {
		return informationAppointment;
	}

	public void setInformationAppointment(String informationAppointment) {
		this.informationAppointment = informationAppointment;
	}

}
