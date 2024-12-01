package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * 
 * DTO para el objeto Privilegio, objeto que se carga en sesión.
 *
 */

public final class PrivilegioDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String nombre;
	private String descripcion;

	public PrivilegioDTO() {
		super();
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

}
