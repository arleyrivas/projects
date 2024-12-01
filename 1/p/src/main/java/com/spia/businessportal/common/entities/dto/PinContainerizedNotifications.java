/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  4 de abr. de 2016 - 4:39:04 p.m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.spia.businessportal.common.entities.Pin;

/**
 * @author leandro
 *
 */
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class PinContainerizedNotifications {

	private Long id;
	private String unitNbr;
	private String isoType;
	private boolean active = true;
	private boolean deleted = false;
	private boolean twenty = false;
	private Long cargoQuantity;
	private Double cargoWeigth;
	private String destination;
	private Long truckVisitAppointmetId;
	@JsonBackReference
	private Pin pin;
	private String observation;
	private String truckingCompanyLDAP;
	private String truckingCompanyNameLDAP;
	private String createdByLDAP;
	private String createdByCompanyNameLDAP;
	private List<TemplateEmailDTO> mailsNotifications;
	private String observations;
	private String createdDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUnitNbr() {
		return unitNbr;
	}

	public void setUnitNbr(String unitNbr) {
		this.unitNbr = unitNbr;
	}

	public String getIsoType() {
		return isoType;
	}

	public void setIsoType(String isoType) {
		this.isoType = isoType;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	public boolean isTwenty() {
		return twenty;
	}

	public void setTwenty(boolean twenty) {
		this.twenty = twenty;
	}

	public Pin getPin() {
		return pin;
	}

	public void setPin(Pin pin) {
		this.pin = pin;
	}

	public String getObservation() {
		return observation;
	}

	public void setObservation(String observation) {
		this.observation = observation;
	}

	public Long getCargoQuantity() {
		return cargoQuantity;
	}

	public void setCargoQuantity(Long cargoQuantity) {
		this.cargoQuantity = cargoQuantity;
	}

	public Double getCargoWeigth() {
		return cargoWeigth;
	}

	public void setCargoWeigth(Double cargoWeigth) {
		this.cargoWeigth = cargoWeigth;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public Long getTruckVisitAppointmetId() {
		return truckVisitAppointmetId;
	}

	public void setTruckVisitAppointmetId(Long truckVisitAppointmetId) {
		this.truckVisitAppointmetId = truckVisitAppointmetId;
	}

	/**
	 * @return the truckingCompanyLDAP
	 */
	public String getTruckingCompanyLDAP() {
		return truckingCompanyLDAP;
	}

	/**
	 * @param truckingCompanyLDAP the truckingCompanyLDAP to set
	 */
	public void setTruckingCompanyLDAP(String truckingCompanyLDAP) {
		this.truckingCompanyLDAP = truckingCompanyLDAP;
	}

	public String getTruckingCompanyNameLDAP() {
		return truckingCompanyNameLDAP;
	}

	public void setTruckingCompanyNameLDAP(String truckingCompanyNameLDAP) {
		this.truckingCompanyNameLDAP = truckingCompanyNameLDAP;
	}

	@Override
	public String toString() {
		return "PinContainerized [id: " + id + ", unitNbr: " + unitNbr + ", isoType: " + isoType + ", active: " + active
				+ ", deleted: " + deleted + ", twenty: " + twenty + ", observation: " + observation
				+ ", truckingCompanyLDAP: " + truckingCompanyLDAP + ", truckingCompanyNameLDAP: "
				+ truckingCompanyNameLDAP + "]";
	}

	public String getCreatedByLDAP() {
		return createdByLDAP;
	}

	public void setCreatedByLDAP(String createdByLDAP) {
		this.createdByLDAP = createdByLDAP;
	}

	public String getCreatedByCompanyNameLDAP() {
		return createdByCompanyNameLDAP;
	}

	public void setCreatedByCompanyNameLDAP(String createdByCompanyNameLDAP) {
		this.createdByCompanyNameLDAP = createdByCompanyNameLDAP;
	}

	public List<TemplateEmailDTO> getMailsNotifications() {
		return mailsNotifications;
	}

	public void setMailsNotifications(List<TemplateEmailDTO> mailsNotifications) {
		this.mailsNotifications = mailsNotifications;
	}

	public String getObservations() {
		return observations;
	}

	public void setObservations(String observations) {
		this.observations = observations;
	}

	public String getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}

}
