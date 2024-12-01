package com.spia.businessportal.common.entities.dto;

import java.util.Date;
import java.util.List;

public class StorageBBDTO {

	private List<String> hblList;
	private Date dateTva;

	/**
	 * @return the hblList
	 */
	public List<String> getHblList() {
		return hblList;
	}

	/**
	 * @param hblList the hblList to set
	 */
	public void setHblList(List<String> hblList) {
		this.hblList = hblList;
	}

	/**
	 * @return the dateTva
	 */
	public Date getDateTva() {
		return dateTva;
	}

	/**
	 * @param dateTva the dateTva to set
	 */
	public void setDateTva(Date dateTva) {
		this.dateTva = dateTva;
	}

}
