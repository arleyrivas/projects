/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  11 de dic. de 2015 - 2:44:43 p. m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.Date;

/**
 * Criterio de búsqueda para las consultas de pin.
 * 
 * @author leandro
 *
 */
public class PinCriteria {

	private String consignee;
	private String tipo;
	private Integer state;
	private Date fromDate;
	private Date toDate;
	private String bl;
	private String hbl;
	private String frghtKind;
	
	public String getConsignee() {
		return consignee;
	}
	public void setConsignee(String consignee) {
		this.consignee = consignee;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public Date getFromDate() {
		return fromDate;
	}
	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}
	public Date getToDate() {
		return toDate;
	}
	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}
	public String getBl() {
		return bl;
	}
	public void setBl(String bl) {
		this.bl = bl;
	}
	public String getHbl() {
		return hbl;
	}
	public void setHbl(String hbl) {
		this.hbl = hbl;
	}
	public String getFrghtKind() {
		return frghtKind;
	}
	public void setFrghtKind(String frghtKind) {
		this.frghtKind = frghtKind;
	}
}
