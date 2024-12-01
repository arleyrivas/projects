package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 
 * DTO para el objeto Privilegio, objeto que se carga en sesión.
 *
 */
@XmlRootElement
@XmlType(propOrder = { "success", "result", "error" })
public final class PrivilegioResponseUpdateDTO<T> implements Serializable {

	private static final long serialVersionUID = 1L;

	private String success;
	private T result;
	private String error;

	public PrivilegioResponseUpdateDTO() {
		super();
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
