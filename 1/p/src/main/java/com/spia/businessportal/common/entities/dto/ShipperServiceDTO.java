/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de ene. de 2016 - 11:22:52 a. m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.Date;

/**
 * Author: Elvis Fontalvo Assert Solutions Email:efontalvo@aassertsolutions.com
 * Fecha: 07/05/2020
 */
public class ShipperServiceDTO {
	private String id;
	private String name;
	private String contactEmail;
	private String contactAddress;
	private String contactCity;
	private String contactPhone;
	private String creditStatus;
	private Date start_date;
	private Date end_date;
	private Boolean oea;
	private Boolean onAccount;

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setOnAccount(Boolean onAccount) {
		this.onAccount = onAccount;
	}

	public Boolean getOnAccount() {
		return onAccount;
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

	/**
	 * @return the contactEmail
	 */
	public String getContactEmail() {
		return contactEmail;
	}

	/**
	 * @param contactEmail the contactEmail to set
	 */
	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}

	/**
	 * @return the contactAddress
	 */
	public String getContactAddress() {
		return contactAddress;
	}

	/**
	 * @param contactAddress the contactAddress to set
	 */
	public void setContactAddress(String contactAddress) {
		this.contactAddress = contactAddress;
	}

	/**
	 * @return the contactCity
	 */
	public String getContactCity() {
		return contactCity;
	}

	/**
	 * @param contactCity the contactCity to set
	 */
	public void setContactCity(String contactCity) {
		this.contactCity = contactCity;
	}

	/**
	 * @return the contactPhone
	 */
	public String getContactPhone() {
		return contactPhone;
	}

	/**
	 * @param contactPhone the contactPhone to set
	 */
	public void setContactPhone(String contactPhone) {
		this.contactPhone = contactPhone;
	}

	/**
	 * @return the creditStatus
	 */
	public String getCreditStatus() {
		return creditStatus;
	}

	/**
	 * @param creditStatus the creditStatus to set
	 */
	public void setCreditStatus(String creditStatus) {
		this.creditStatus = creditStatus;
	}

	/**
	 * @return the start_date
	 */
	public Date getStart_date() {
		return start_date;
	}

	/**
	 * @param start_date the start_date to set
	 */
	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	/**
	 * @return the end_date
	 */
	public Date getEnd_date() {
		return end_date;
	}

	/**
	 * @param end_date the end_date to set
	 */
	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public Boolean getOea() {
		return oea;
	}

	public void setOea(Boolean oea) {
		this.oea = oea;
	}





}
