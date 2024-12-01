package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;

/**
 * Author: Santiago Ariza Clavijo - 04-07-2019 - DTO de la información de pines
 * 
 */
public class HBLPinDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String pin;
    private String pinCreationDate;
    private List<HBLServiceDTO> cargolots;
    
	public String getPin() {
		return pin;
	}
	public void setPin(String pin) {
		this.pin = pin;
	}
	public String getPinCreationDate() {
		return pinCreationDate;
	}
	public void setPinCreationDate(String pinCreationDate) {
		this.pinCreationDate = pinCreationDate;
	}
	public List<HBLServiceDTO> getCargolots() {
		return cargolots;
	}
	public void setCargolots(List<HBLServiceDTO> cargolots) {
		this.cargolots = cargolots;
	}
	
    
}
