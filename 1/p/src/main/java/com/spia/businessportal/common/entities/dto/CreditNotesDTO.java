/*
 * Author: Elvis Fontalvo  
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Date: 15/03/2021 
 */
package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;

public class CreditNotesDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String final_nbr;
	private Date finalized_date;
	private String status_used;
	private String customer_gkey;
	private String gkey;
	private String draft_nbr;
	private Float CUSTDFF_BALANCECREDIT;
	private Float TOTAL;
	private String currency_gkey;
	private String currency_id;
	private String name;
	private String CUSTDFF_CUSTOMS_AGENCY;
	private String customerNit;

	public String getFinal_nbr() {
		return final_nbr;
	}

	public void setFinal_nbr(String final_nbr) {
		this.final_nbr = final_nbr;
	}

	public Date getFinalized_date() {
		return finalized_date;
	}

	public void setFinalized_date(Date finalized_date) {
		this.finalized_date = finalized_date;
	}

	public String getStatus_used() {
		return status_used;
	}

	public void setStatus_used(String status_used) {
		this.status_used = status_used;
	}

	public String getCustomer_gkey() {
		return customer_gkey;
	}

	public void setCustomer_gkey(String customer_gkey) {
		this.customer_gkey = customer_gkey;
	}

	public String getGkey() {
		return gkey;
	}

	public void setGkey(String gkey) {
		this.gkey = gkey;
	}

	public String getDraft_nbr() {
		return draft_nbr;
	}

	public void setDraft_nbr(String draft_nbr) {
		this.draft_nbr = draft_nbr;
	}

	public Float getCUSTDFF_BALANCECREDIT() {
		return CUSTDFF_BALANCECREDIT;
	}

	public void setCUSTDFF_BALANCECREDIT(Float cUSTDFF_BALANCECREDIT) {
		CUSTDFF_BALANCECREDIT = cUSTDFF_BALANCECREDIT;
	}

	public Float getTOTAL() {
		return TOTAL;
	}

	public void setTOTAL(Float tOTAL) {
		TOTAL = tOTAL;
	}

	public String getCurrency_gkey() {
		return currency_gkey;
	}

	public void setCurrency_gkey(String currency_gkey) {
		this.currency_gkey = currency_gkey;
	}

	public String getCurrency_id() {
		return currency_id;
	}

	public void setCurrency_id(String currency_id) {
		this.currency_id = currency_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCUSTDFF_CUSTOMS_AGENCY() {
		return CUSTDFF_CUSTOMS_AGENCY;
	}

	public void setCUSTDFF_CUSTOMS_AGENCY(String cUSTDFF_CUSTOMS_AGENCY) {
		CUSTDFF_CUSTOMS_AGENCY = cUSTDFF_CUSTOMS_AGENCY;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getCustomerNit() {
		return customerNit;
	}

	public void setCustomerNit(String customerNit) {
		this.customerNit = customerNit;
	}
	
	

}
