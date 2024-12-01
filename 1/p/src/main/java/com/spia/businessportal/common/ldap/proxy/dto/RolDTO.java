package com.spia.businessportal.common.ldap.proxy.dto;

import java.io.Serializable;

/**
 * 
 * DTO para el objeto Rol
 *
 */

public class RolDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String id;
	private String nombre;
	private String descripcion;

	public RolDTO() {
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "" + nombre;
	}

}
