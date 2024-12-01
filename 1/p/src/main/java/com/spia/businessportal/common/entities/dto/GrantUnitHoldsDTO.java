package com.spia.businessportal.common.entities.dto;

public class GrantUnitHoldsDTO {

	private boolean hasChargeableUnitEvents;
	private boolean hasHolds;
	private boolean hasDebt;
	private boolean onAccount;
	private int storageDaysOwed = 0;
	private String unitNbr;
	
	public boolean isHasChargeableUnitEvents() {
		return hasChargeableUnitEvents;
	}
	public void setHasChargeableUnitEvents(boolean hasChargeableUnitEvents) {
		this.hasChargeableUnitEvents = hasChargeableUnitEvents;
	}
	public boolean isHasHolds() {
		return hasHolds;
	}
	public void setHasHolds(boolean hasHolds) {
		this.hasHolds = hasHolds;
	}
	public boolean isHasDebt() {
		return hasDebt;
	}
	public void setHasDebt(boolean hasDebt) {
		this.hasDebt = hasDebt;
	}
	public boolean isOnAccount() {
		return onAccount;
	}
	public void setOnAccount(boolean onAccount) {
		this.onAccount = onAccount;
	}
	public String getUnitNbr() {
		return unitNbr;
	}
	public void setUnitNbr(String unitNbr) {
		this.unitNbr = unitNbr;
	}
	public int getStorageDaysOwed() {
		return storageDaysOwed;
	}
	public void setStorageDaysOwed(int storageDaysOwed) {
		this.storageDaysOwed = storageDaysOwed;
	}	
	
}
