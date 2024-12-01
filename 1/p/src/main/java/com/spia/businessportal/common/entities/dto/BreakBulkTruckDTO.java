/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de ene. de 2016 - 11:22:52 a. m.
 */
package com.spia.businessportal.common.entities.dto;

/**
 * @author leandro
 *
 */
public class BreakBulkTruckDTO {

	private String truckingId;
	private Long quantity;
	private String commodity;
	
	public String getTruckId() {
		return truckingId;
	}
	public void setTruckingId(String truckingId) {
		this.truckingId = truckingId;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}
	public String getCommodity() {
		return commodity;
	}
	public void setCommodity(String commodity) {
		this.commodity = commodity;
	}	
	
}
