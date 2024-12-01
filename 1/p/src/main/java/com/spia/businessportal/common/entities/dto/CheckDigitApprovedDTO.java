/*
 * Author: Elvis Fontalvo - Assert Solutions 
 * Email: efontalvo@aassertsolutions.com 
 * Date: 29/03/2021 
 * Entity by table check_digit_approved
 * 
 */
package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class CheckDigitApprovedDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private int id;
	private String container;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getContainer() {
		return container;
	}

	public void setContainer(String container) {
		this.container = container;
	}

}
