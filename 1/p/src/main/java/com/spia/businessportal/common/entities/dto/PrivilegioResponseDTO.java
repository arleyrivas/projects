package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 
 * @author Daniel Perdomo
 *
 */
@XmlRootElement
@XmlType(propOrder = { "success", "result", "error" })
public class PrivilegioResponseDTO implements Serializable {

	private String success;
	private List<PrivilegioDTO> result = new ArrayList<>();
	private String error;

	public PrivilegioResponseDTO() {
	}

	public String getSuccess() {
		return success;
	}

	public void setSuccess(String success) {
		this.success = success;
	}

	public List<PrivilegioDTO> getResult() {
		return result;
	}

	public void setResult(List<PrivilegioDTO> result) {
		this.result = result;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}
}
