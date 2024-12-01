/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  26 de ene. de 2016 - 9:22:56 a. m.
 */
package com.spia.businessportal.common.entities.dto;

/**
 * @author leandro
 *
 */
public class AppointmentBreakBulkDTO {

	private String pinNbr;
	private Long quantity;
	
	public String getPinNbr() {
		return pinNbr;
	}
	public void setPinNbr(String pinNbr) {
		this.pinNbr = pinNbr;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}
	
	
}
