package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 09/07/2019 Servicio que permite
 * consultar el pin para crear cita camion
 * 
 */
public class PinBreakBulkServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String hbl;
	private String unit;
	private String cargoQuantity;
	private String cargoWeigth;
	private String agent;
	private String tvabbId;
	private String isGroup;
	private String destination;
	private String manifestNbr;

	public String getHbl() {
		return hbl;
	}

	public void setHbl(String hbl) {
		this.hbl = hbl;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public String getCargoQuantity() {
		return cargoQuantity;
	}

	public void setCargoQuantity(String cargoQuantity) {
		this.cargoQuantity = cargoQuantity;
	}

	public String getCargoWeigth() {
		return cargoWeigth;
	}

	public void setCargoWeigth(String cargoWeigth) {
		this.cargoWeigth = cargoWeigth;
	}

	public String getAgent() {
		return agent;
	}

	public void setAgent(String agent) {
		this.agent = agent;
	}

	public String getTvabbId() {
		return tvabbId;
	}

	public void setTvabbId(String tvabbId) {
		this.tvabbId = tvabbId;
	}

	public String getIsGroup() {
		return isGroup;
	}

	public void setIsGroup(String isGroup) {
		this.isGroup = isGroup;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getManifestNbr() {
		return manifestNbr;
	}

	public void setManifestNbr(String manifestNbr) {
		this.manifestNbr = manifestNbr;
	}

}
