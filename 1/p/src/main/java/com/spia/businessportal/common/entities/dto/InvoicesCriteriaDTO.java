/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  13 de nov. de 2015 - 4:14:09 p. m.
 */
package com.spia.businessportal.common.entities.dto;

/**
 * Criterio de búsqueda para los invoice
 * 
 * @author leandro
 *
 */
public class InvoicesCriteriaDTO {

	private String client;
	private String finalNbr;
	private String container;
	
	/**
	 * 
	 */
	public InvoicesCriteriaDTO() {
		super();
	}
	public String getClient() {
		return client;
	}
	public void setClient(String client) {
		this.client = client;
	}
	public String getFinalNbr() {
		return finalNbr;
	}
	public void setFinalNbr(String finalNbr) {
		this.finalNbr = finalNbr;
	}
	public String getContainer() {
		return container;
	}
	public void setContainer(String container) {
		this.container = container;
	}
}
