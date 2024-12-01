/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  4 de nov. de 2015 - 4:25:23 p. m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.Date;
import java.util.List;

/**
 * Request para generar los invoice
 * 
 * @author leandro
 *
 */
public class GenerateInvoiceRequestDTO {

	private List<String> units;
	private Date date;
	private String customerId;
	private String bl;
	private String bkg;
	private String notes;
	
	/**
	 * 
	 */
	public GenerateInvoiceRequestDTO() {
		super();
	}
	public List<String> getUnits() {
		return units;
	}
	public void setUnits(List<String> units) {
		this.units = units;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getBkg() {
		return bkg;
	}
	public void setBkg(String bkg) {
		this.bkg = bkg;
	}
	public String getBl() {
		return bl;
	}
	public void setBl(String bl) {
		this.bl = bl;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}	
	
	
	
}
