package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 
 * @author Daniel Perdomo
 *
 */
@SuppressWarnings("serial")
@XmlRootElement
@XmlType(propOrder = { "success", "result", "error" })
public class GenericResponseDTO<T> implements Serializable {

	private String success;
	private T result;
	private String error;

	public GenericResponseDTO() {
	}

	public String getSuccess() {
		return success;
	}

	public void setSuccess(String success) {
		this.success = success;
	}

	public T getResult() {
		return result;
	}

	public void setResult(T result) {
		this.result = result;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

}