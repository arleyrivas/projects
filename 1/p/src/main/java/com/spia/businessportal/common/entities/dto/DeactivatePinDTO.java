/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de abr. de 2016 - 8:25:07 a. m.
 */
package com.spia.businessportal.common.entities.dto;

/**
 * @author leandro
 *
 */
public class DeactivatePinDTO {

	private String pinNbr;
	private Long id;
	private String observation;
	
	public String getPinNbr() {
		return pinNbr;
	}
	public void setPinNbr(String pinNbr) {
		this.pinNbr = pinNbr;
	}
	public String getObservation() {
		return observation;
	}
	public void setObservation(String observation) {
		this.observation = observation;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
}
