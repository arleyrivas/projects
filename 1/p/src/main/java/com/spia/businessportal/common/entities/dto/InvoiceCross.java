/*
 * Author: Elvis Fontalvo  
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Date: 15/03/2021 
 */
package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;

public class InvoiceCross extends Cross implements Serializable {

	private static final long serialVersionUID = 1L;
	private List<CreditNoteCross> credits;

	public InvoiceCross() {
		super();
	}

	public List<CreditNoteCross> getCredits() {
		return credits;
	}

	public void setCredits(List<CreditNoteCross> credits) {
		this.credits = credits;
	}

}
