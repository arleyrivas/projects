package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;


import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 22/10/2019
 * 
 */
public class RevisionDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String user;
	private String date;
	private String note;

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
