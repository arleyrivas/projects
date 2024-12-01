/*
 * Author: Elvis Fontalvo  
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Date: 15/03/2021 
 */
package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class ManisfestRequestDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String manifestNbr;
	private String nitCompany;

	public String getManifestNbr() {
		return manifestNbr;
	}

	public void setManifestNbr(String manifestNbr) {
		this.manifestNbr = manifestNbr;
	}

	public String getNitCompany() {
		return nitCompany;
	}

	public void setNitCompany(String nitCompany) {
		this.nitCompany = nitCompany;
	}

}
