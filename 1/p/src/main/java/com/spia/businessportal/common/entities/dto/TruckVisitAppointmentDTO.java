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
public class TruckVisitAppointmentDTO {

	private String pinNbr;
	private Date appointmentDate;
	private Driver driver;
	private String truck;
	private List<AppointmentBreakBulkDTO> breakbulk;
	private List<UnitOrderDTO> unitsImport;
	private List<UnitOrderDTO> unitsExport;
	private List<UnitOrderDTO> unitsEro;
	private List<UnitOrderDTO> unitsEdo;
	private List<CargoLot> cargoLots;
	private List<String> pinInfoList;
	private String manifestNbr;
	private String rule;	
	private String isHazard;
	

	/**
	 * 
	 */
	public TruckVisitAppointmentDTO() {
		super();
	}
	
	public String getIsHazard() {
		return isHazard;
	}

	public void setIsHazard(String isHazard) {
		this.isHazard = isHazard;
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

	public List<UnitOrderDTO> getUnitsEro() {
		return unitsEro;
	}

	public void setUnitsEro(List<UnitOrderDTO> unitsEro) {
		this.unitsEro = unitsEro;
	}

	public List<UnitOrderDTO> getUnitsEdo() {
		return unitsEdo;
	}

	public void setUnitsEdo(List<UnitOrderDTO> unitsEdo) {
		this.unitsEdo = unitsEdo;
	}

	public List<UnitOrderDTO> getUnitsImport() {
		return unitsImport;
	}

	public void setUnitsImport(List<UnitOrderDTO> unitsImport) {
		this.unitsImport = unitsImport;
	}

	public List<UnitOrderDTO> getUnitsExport() {
		return unitsExport;
	}

	public void setUnitsExport(List<UnitOrderDTO> unitsExport) {
		this.unitsExport = unitsExport;
	}

	public List<AppointmentBreakBulkDTO> getBreakbulk() {
		return breakbulk;
	}

	public void setBreakbulk(List<AppointmentBreakBulkDTO> breakbulk) {
		this.breakbulk = breakbulk;
	}

	public List<CargoLot> getCargoLots() {
		return cargoLots;
	}

	public void setCargoLots(List<CargoLot> cargoLots) {
		this.cargoLots = cargoLots;
	}

	public List<String> getPinInfoList() {
		return pinInfoList;
	}

	public void setPinInfoList(List<String> pinInfoList) {
		this.pinInfoList = pinInfoList;
	}

	public String getManifestNbr() {
		return manifestNbr;
	}

	public void setManifestNbr(String manifestNbr) {
		this.manifestNbr = manifestNbr;
	}

	public String getRule() {
		return rule;
	}

	public void setRule(String rule) {
		this.rule = rule;
	}

}
