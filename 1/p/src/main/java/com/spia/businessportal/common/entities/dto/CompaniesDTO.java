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
public class CompaniesDTO {
	private String type;
	private String filter;
	private Boolean validate;

	/**
	 * @return the type
	 */
	public String getType() {
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(String type) {
		this.type = type;
	}

	/**
	 * @return the filter
	 */
	public String getFilter() {
		return filter;
	}

	/**
	 * @param filter the filter to set
	 */
	public void setFilter(String filter) {
		this.filter = filter;
	}

	/**
	 * @return the validate
	 */
	public Boolean getValidate() {
		return validate;
	}

	/**
	 * @param validate the validate to set
	 */
	public void setValidate(Boolean validate) {
		this.validate = validate;
	}

}
