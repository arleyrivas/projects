package com.spia.businessportal.common.entities.dto;

import com.spia.services.entities.UnitFacilityVisit;

public class EroDTO {
	
	private String number;
	private UnitFacilityVisit unit;
	private String line;
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public UnitFacilityVisit getUnit() {
		return unit;
	}
	public void setUnit(UnitFacilityVisit unit) {
		this.unit = unit;
	}
	public String getLine() {
		return line;
	}
	public void setLine(String line) {
		this.line = line;
	}
	
	

}
