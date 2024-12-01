/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de oct. de 2015 - 5:27:01 p. m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.Date;

/**
 * DTO que representa el unit para el guardado de appointment, donde el unitNbr es el número de unit y el order representa el edo/ero/pin según corresponda.
 * @author leandro
 *
 */
public class UnitOrderDTO {
	
	private String unitNbr;
	private String orderNbr;
	private boolean twenty;
	private String vesselVisitId;
	private String shipperId;
	private Date fechaCierreDocumental;
	private Date earlyArrival;
	private String line;
	private Boolean isDropOffExport;

	/**
	 * 
	 */
	public UnitOrderDTO() {
		super();
	}
	
	public Boolean getIsDropOffExport() {
		return isDropOffExport;
	}
	public void setIsDropOffExport(Boolean isDropOffExport) {
		this.isDropOffExport = isDropOffExport;
	}
	public String getUnitNbr() {
		return unitNbr;
	}
	public void setUnitNbr(String unitNbr) {
		this.unitNbr = unitNbr;
	}
	public String getOrderNbr() {
		return orderNbr;
	}
	public void setOrderNbr(String orderNbr) {
		this.orderNbr = orderNbr;
	}
	public boolean isTwenty() {
		return twenty;
	}
	public void setTwenty(boolean twenty) {
		this.twenty = twenty;
	}

	public String getVesselVisitId() {
		return vesselVisitId;
	}

	public void setVesselVisitId(String vesselVisitId) {
		this.vesselVisitId = vesselVisitId;
	}

	public String getShipperId() {
		return shipperId;
	}

	public void setShipperId(String shipperId) {
		this.shipperId = shipperId;
	}

	public Date getFechaCierreDocumental() {
		return fechaCierreDocumental;
	}

	public void setFechaCierreDocumental(Date fechaCierreDocumental) {
		this.fechaCierreDocumental = fechaCierreDocumental;
	}

	public Date getEarlyArrival() {
		return earlyArrival;
	}

	public void setEarlyArrival(Date earlyArrival) {
		this.earlyArrival = earlyArrival;
	}

	public String getLine() {
		return line;
	}

	public void setLine(String line) {
		this.line = line;
	}		
	
	
}
