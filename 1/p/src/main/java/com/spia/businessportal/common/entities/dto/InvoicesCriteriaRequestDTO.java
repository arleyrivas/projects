/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  16 de nov. de 2015 - 3:09:01 p. m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.Date;

/**
 * Criterio de búsqueda para los invoice, especifica por qué valores se va a consultar en la lista de invoice disponibles.
 * 
 * @author leandro
 *
 */
public class InvoicesCriteriaRequestDTO {

	private String client;
	private String finalNbr;
	private String container;
	private String state;
	private Date fromDate;
	private Date toDate;
	private Integer page;
	
	/**
	 * 
	 */
	public InvoicesCriteriaRequestDTO() {
		super();
	}
	public String getClient() {
		return client;
	}
	public void setClient(String client) {
		this.client = client;
	}
	public Integer getPage() {
		return page;
	}
	public void setPage(Integer page) {
		this.page = page;
	}
	public String getContainer() {
		return container;
	}
	public void setContainer(String container) {
		this.container = container;
	}
	public String getFinalNbr() {
		return finalNbr;
	}
	public void setFinalNbr(String finalNbr) {
		this.finalNbr = finalNbr;
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
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}		
}
