/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de ene. de 2016 - 11:22:52 a. m.
 */
package com.spia.businessportal.common.entities.dto;

/**
 * Author: Elvis Fontalvo Assert Solutions Email:efontalvo@aassertsolutions.com
 * Fecha: 07/05/2020
 */
public class CustomerServiceDTO {
	private String id;
	private String name;
	private String CUSTDFF_EMAIL;
	private String CUSTDFF_EMAIL_PIN;

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	public String getCUSTDFF_EMAIL() {
		return CUSTDFF_EMAIL;
	}

	public void setCUSTDFF_EMAIL(String cUSTDFF_EMAIL) {
		CUSTDFF_EMAIL = cUSTDFF_EMAIL;
	}

	public String getCUSTDFF_EMAIL_PIN() {
		return CUSTDFF_EMAIL_PIN;
	}

	public void setCUSTDFF_EMAIL_PIN(String cUSTDFF_EMAIL_PIN) {
		CUSTDFF_EMAIL_PIN = cUSTDFF_EMAIL_PIN;
	}

}
