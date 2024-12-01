/*
 * Author: Elvis Fontalvo  
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Date: 15/03/2021 
 */
package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class ManisfestDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String nbrTruck;
	private String nbrTruckTrailer;
	private String idDriverTruck;
	private String idDriverTrailer;
	private String status;
	private String manifestIssueDate;
	private String idOrigin;
	private String origin;
	private String idDestination;
	private String destination;
	private String nameOperationTransport;
	private String shortProductDescription;

	public String getNbrTruck() {
		return nbrTruck;
	}

	public void setNbrTruck(String nbrTruck) {
		this.nbrTruck = nbrTruck;
	}

	public String getNbrTruckTrailer() {
		return nbrTruckTrailer;
	}

	public void setNbrTruckTrailer(String nbrTruckTrailer) {
		this.nbrTruckTrailer = nbrTruckTrailer;
	}

	public String getIdDriverTruck() {
		return idDriverTruck;
	}

	public void setIdDriverTruck(String idDriverTruck) {
		this.idDriverTruck = idDriverTruck;
	}

	public String getIdDriverTrailer() {
		return idDriverTrailer;
	}

	public void setIdDriverTrailer(String idDriverTrailer) {
		this.idDriverTrailer = idDriverTrailer;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getManifestIssueDate() {
		return manifestIssueDate;
	}

	public void setManifestIssueDate(String manifestIssueDate) {
		this.manifestIssueDate = manifestIssueDate;
	}

	public String getIdOrigin() {
		return idOrigin;
	}

	public void setIdOrigin(String idOrigin) {
		this.idOrigin = idOrigin;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getIdDestination() {
		return idDestination;
	}

	public void setIdDestination(String idDestination) {
		this.idDestination = idDestination;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getNameOperationTransport() {
		return nameOperationTransport;
	}

	public void setNameOperationTransport(String nameOperationTransport) {
		this.nameOperationTransport = nameOperationTransport;
	}

	public String getShortProductDescription() {
		return shortProductDescription;
	}

	public void setShortProductDescription(String shortProductDescription) {
		this.shortProductDescription = shortProductDescription;
	}

}
