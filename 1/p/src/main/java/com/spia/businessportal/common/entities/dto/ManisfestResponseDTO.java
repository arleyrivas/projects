/*
 * Author: Elvis Fontalvo  
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Date: 15/03/2021 
 */
package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;

public class ManisfestResponseDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String validate;
	private List<ManisfestDTO> info;

	public String getValidate() {
		return validate;
	}

	public void setValidate(String validate) {
		this.validate = validate;
	}

	public List<ManisfestDTO> getInfo() {
		return info;
	}

	public void setInfo(List<ManisfestDTO> info) {
		this.info = info;
	}

}
