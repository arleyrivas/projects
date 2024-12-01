/**
 * 
 */
package com.spia.businessportal.common.entities.dto;

import java.util.List;

/**
 * DTO para el guardado de pin.
 * 
 * @author diego
 *
 */
public class PinDTO {

	private String nbr;
	private boolean isUnit;
	private boolean isBooking = false;
	private boolean isEdo = false;
	private boolean isEro = false;
	private String breakBulkCategory;
	private List<UnitTruckDTO> unitsTrucks;
	private String consignee;
	private String frghtKind;
	private Long isGroup;
	private TemplateEmailDTO emailNotification;

	/**
	 * 
	 */
	public PinDTO() {
		super();
	}

	public String getNbr() {
		return nbr;
	}

	public void setNbr(String nbr) {
		this.nbr = nbr;
	}

	public boolean getIsUnit() {
		return isUnit;
	}

	public void setIsUnit(boolean isUnit) {
		this.isUnit = isUnit;
	}

	public List<UnitTruckDTO> getUnitsTrucks() {
		return unitsTrucks;
	}

	public void setUnitsTrucks(List<UnitTruckDTO> unitsTrucks) {
		this.unitsTrucks = unitsTrucks;
	}

	public boolean getIsBooking() {
		return isBooking;
	}

	public void setIsBooking(boolean isBooking) {
		this.isBooking = isBooking;
	}

	public boolean getIsEdo() {
		return isEdo;
	}

	public void setIsEdo(boolean isEdo) {
		this.isEdo = isEdo;
	}

	public boolean getIsEro() {
		return isEro;
	}

	public void setIsEro(boolean isEro) {
		this.isEro = isEro;
	}

	public String getBreakBulkCategory() {
		return breakBulkCategory;
	}

	public void setBreakBulkCategory(String breakBulkCategory) {
		this.breakBulkCategory = breakBulkCategory;
	}

	public String getConsignee() {
		return consignee;
	}

	public void setConsignee(String consignee) {
		this.consignee = consignee;
	}

	public String getFrghtKind() {
		return frghtKind;
	}

	public void setFrghtKind(String frghtKind) {
		this.frghtKind = frghtKind;
	}

	public Long getIsGroup() {
		return isGroup;
	}

	public void setIsGroup(Long isGroup) {
		this.isGroup = isGroup;
	}

	public TemplateEmailDTO getEmailNotification() {
		return emailNotification;
	}

	public void setEmailNotification(TemplateEmailDTO emailNotification) {
		this.emailNotification = emailNotification;
	}

}
