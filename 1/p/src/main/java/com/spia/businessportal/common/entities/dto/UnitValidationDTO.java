/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  18 de nov. de 2015 - 1:56:12 p. m.
 */
package com.spia.businessportal.common.entities.dto;

import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.services.entities.Holds;

/**
 * DTO que contiene las validaciones para un unit:
 * Su nro.
 * Si es de 20 o 40 pulgadas.
 * El iso type.
 * Si tiene deudas.
 * Si tiene truck visit appointment.
 * Si tiene pin.
 * Si tiene holds/permissions activos.
 * Si tiene Chargeable unit events.
 * Su nro de edo.
 * Su nro de ero.
 * Si pertenece a un cliente a crédito. 
 * @author leandro
 *
 */
public class UnitValidationDTO {

	private String unitNbr;
	private boolean isTwenty = false;
	private String isoType;
	private boolean hasDebt = false;
	private boolean hasTruckVisitAppointment = false;
	private String truckVisitAppointmentTooltip;
	private TruckVisit truckVisit;
	private boolean hasPin = false;
	private String pinTooltip;
	private Pin pin;
	private boolean hasHolds = false;
	private String holdsTooltip;
	private boolean hasChargeableUnitEvents = false;
	private int storageDaysOwed = 0;
	private String edoNbr;
	private String eroNbr;
	private String bookingNbr;
	private boolean onAccount;
	private Holds holds;
	private boolean yard;
	private boolean departed = false;
	private boolean inbound = false;
	private boolean hasHoldConsigneeFlag = false;
	
	/**
	 * 
	 */
	public UnitValidationDTO() {
		super();
	}
	
	public String getUnitNbr() {
		return unitNbr;
	}
	public void setUnitNbr(String unitNbr) {
		this.unitNbr = unitNbr;
	}
	public boolean isHasDebt() {
		return hasDebt;
	}
	public void setHasDebt(boolean hasDebt) {
		this.hasDebt = hasDebt;
	}
	public boolean isHasTruckVisitAppointment() {
		return hasTruckVisitAppointment;
	}
	public void setHasTruckVisitAppointment(boolean hasTruckVisitAppointment) {
		this.hasTruckVisitAppointment = hasTruckVisitAppointment;
	}
	public String getTruckVisitAppointmentTooltip() {
		return truckVisitAppointmentTooltip;
	}
	public void setTruckVisitAppointmentTooltip(String truckVisitAppointmentTooltip) {
		this.truckVisitAppointmentTooltip = truckVisitAppointmentTooltip;
	}
	public boolean isHasPin() {
		return hasPin;
	}
	public void setHasPin(boolean hasPin) {
		this.hasPin = hasPin;
	}
	public String getPinTooltip() {
		return pinTooltip;
	}
	public void setPinTooltip(String pinTooltip) {
		this.pinTooltip = pinTooltip;
	}
	public boolean isHasHolds() {
		return hasHolds;
	}
	public void setHasHolds(boolean hasHolds) {
		this.hasHolds = hasHolds;
	}
	public String getHoldsTooltip() {
		return holdsTooltip;
	}
	public void setHoldsTooltip(String holdsTooltip) {
		this.holdsTooltip = holdsTooltip;
	}
	public Pin getPin() {
		return pin;
	}
	public void setPin(Pin pin) {
		this.pin = pin;
	}
	public boolean isTwenty() {
		return isTwenty;
	}
	public void setTwenty(boolean isTwenty) {
		this.isTwenty = isTwenty;
	}
	public String getIsoType() {
		return isoType;
	}
	public void setIsoType(String isoType) {
		this.isoType = isoType;
	}
	public TruckVisit getTruckVisit() {
		return truckVisit;
	}
	public void setTruckVisit(TruckVisit truckVisit) {
		this.truckVisit = truckVisit;
	}

	public boolean isHasChargeableUnitEvents() {
		return hasChargeableUnitEvents;
	}

	public void setHasChargeableUnitEvents(boolean hasChargeableUnitEvents) {
		this.hasChargeableUnitEvents = hasChargeableUnitEvents;
	}

	public String getEdoNbr() {
		return edoNbr;
	}

	public void setEdoNbr(String edoNbr) {
		this.edoNbr = edoNbr;
	}

	public String getEroNbr() {
		return eroNbr;
	}

	public void setEroNbr(String eroNbr) {
		this.eroNbr = eroNbr;
	}

	public String getBookingNbr() {
		return bookingNbr;
	}

	public void setBookingNbr(String bookingNbr) {
		this.bookingNbr = bookingNbr;
	}

	public boolean isOnAccount() {
		return onAccount;
	}

	public void setOnAccount(boolean onAccount) {
		this.onAccount = onAccount;
	}

	/**
	 * @return the holds
	 */
	public Holds getHolds() {
		return holds;
	}

	/**
	 * @param holds the holds to set
	 */
	public void setHolds(Holds holds) {
		this.holds = holds;
	}

	public boolean isYard() {
		return yard;
	}

	public void setYard(boolean yard) {
		this.yard = yard;
	}

	public int getStorageDaysOwed() {
		return storageDaysOwed;
	}

	public void setStorageDaysOwed(int storageDaysOwed) {
		this.storageDaysOwed = storageDaysOwed;
	}

	public boolean isDeparted() {
		return departed;
	}

	public void setDeparted(boolean departed) {
		this.departed = departed;
	}

	public boolean isInbound() {
		return inbound;
	}

	public void setInbound(boolean inbound) {
		this.inbound = inbound;
	}

	public boolean isHasHoldConsigneeFlag() {
		return hasHoldConsigneeFlag;
	}

	public void setHasHoldConsigneeFlag(boolean hasHoldConsigneeFlag) {
		this.hasHoldConsigneeFlag = hasHoldConsigneeFlag;
	}
	
}
