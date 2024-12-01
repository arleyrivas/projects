package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;

/**
 * Author: John Campaz - Puerto Aguadulce:
 * jcampaz@puertoaguadulce.com Fecha: 05/01/2022
 * 
 */
public class TiempoSolicitudDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String user;
	private String name;
	private Date date_begin;
	private Date date_end;
	private String end_state;

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	
	public Date getDate_begin() {
		return date_begin;
	}

	public void setDate_begin(Date date_begin) {
		this.date_begin = date_begin;
	}

	public Date getDate_end() {
		return date_end;
	}

	public void setDate_end(Date date_end) {
		this.date_end = date_end;
	}

	public String getEnd_state() {
		return end_state;
	}

	public void setEnd_state(String end_state) {
		this.end_state = end_state;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
