package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * Author: Elvis Fontalvo - 18-09-2019 - DTO de la información de Draft
 * 
 */
public class DraftServiceDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer draft_nbr;

	public Integer getDraft_nbr() {
		return draft_nbr;
	}

	public void setDraft_nbr(Integer draft_nbr) {
		this.draft_nbr = draft_nbr;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
