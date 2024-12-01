/**
 * 
 */
package com.spia.businessportal.common.entities.dto;

/**
 * @author diego
 *
 */
public class UnitTruckDTO implements Comparable<UnitTruckDTO>{

	private String nbr;
	private String truckId;
	private String truckName;
	private boolean twenty = false;
	private String isoType;
	private Long quantity;
	private String commodity;
	private Long cargoQuantity;
	private Double cargoWeigth;
	private String destination;
	private Long truckVisitAppointmetId;
	
	/**
	 * 
	 */
	public UnitTruckDTO() {
		super();
	}
	public String getNbr() {
		return nbr;
	}
	public void setNbr(String nbr) {
		this.nbr = nbr;
	}

	public String getTruckId() {
		return truckId;
	}
	public void setTruckId(String truckId) {
		this.truckId = truckId;
	}
	
	public String getTruckName() {
		return truckName;
	}
	public void setTruckName(String truckName) {
		this.truckName = truckName;
	}
	public boolean isTwenty() {
		return twenty;
	}
	public void setTwenty(boolean twenty) {
		this.twenty = twenty;
	}
	public String getIsoType() {
		return isoType;
	}
	public void setIsoType(String isoType) {
		this.isoType = isoType;
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
	@Override
	public int compareTo(UnitTruckDTO other) {
		return truckName.compareTo(other.truckName);
	}
	public Long getCargoQuantity() {
		return cargoQuantity;
	}
	public void setCargoQuantity(Long cargoQuantity) {
		this.cargoQuantity = cargoQuantity;
	}
	public Double getCargoWeigth() {
		return cargoWeigth;
	}
	public void setCargoWeigth(Double cargoWeigth) {
		this.cargoWeigth = cargoWeigth;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public Long getTruckVisitAppointmetId() {
		return truckVisitAppointmetId;
	}
	public void setTruckVisitAppointmetId(Long truckVisitAppointmetId) {
		this.truckVisitAppointmetId = truckVisitAppointmetId;
	}

	
}
