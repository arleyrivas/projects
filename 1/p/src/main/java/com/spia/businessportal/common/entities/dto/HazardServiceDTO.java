package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;

/**
 * Author: Elvis Fontalvo - Assert Solutions
 * Email:efontalvo@aassertsolutions.com Date: 28/07/2020 Servicio que permite
 * realizar operaciones con Hazarts (IMO)
 * 
 */
public class HazardServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String reference;
	private String hazard;
	private String imdg;
	private String imdgDescription;
	private String ltdQtyFlag;

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
	}

	public String getHazard() {
		return hazard;
	}

	public void setHazard(String hazard) {
		this.hazard = hazard;
	}

	public String getImdg() {
		return imdg;
	}

	public void setImdg(String imdg) {
		this.imdg = imdg;
	}

	public String getImdgDescription() {
		return imdgDescription;
	}

	public void setImdgDescription(String imdgDescription) {
		this.imdgDescription = imdgDescription;
	}

	public String getLtdQtyFlag() {
		return ltdQtyFlag;
	}

	public void setLtdQtyFlag(String ltdQtyFlag) {
		this.ltdQtyFlag = ltdQtyFlag;
	}

}
