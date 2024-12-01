package com.spia.businessportal.common.entities.errorHandling;

/**
 * Entidad que representa un error de negocio de la aplicación (pero que no es un error por falla de la misma).
 *
 */
public class ResponseError {
	
	String error;
	String message;
	String code;

	/**
	 * 
	 */
	public ResponseError() {
		super();
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

}
