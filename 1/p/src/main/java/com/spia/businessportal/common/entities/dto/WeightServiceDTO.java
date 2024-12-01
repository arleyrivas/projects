package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 23/07/2019 Objeto respuesta de la
 * consulta que permite validar si existen citas previas del mismo camion a la
 * misma hora
 * 
 */
public class WeightServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private double weigth;
	private int existsCompany;
	private String truck;
	private String license;

	public double getWeigth() {
		return weigth;
	}

	public void setWeigth(double weigth) {
		this.weigth = weigth;
	}

	public int getExistsCompany() {
		return existsCompany;
	}

	public void setExistsCompany(int existsCompany) {
		this.existsCompany = existsCompany;
	}

	public String getTruck() {
		return truck;
	}

	public void setTruck(String truck) {
		this.truck = truck;
	}

	public String getLicense() {
		return license;
	}

	public void setLicense(String license) {
		this.license = license;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
