/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  4 de may. de 2016 - 1:29:28 p. m.
 */
package com.spia.businessportal.common.entities;

/**
 * @author leandro
 *
 * Representa los estados de un archivo.
 */
public class DocumentationFileState {

	private Long id;
	private String state;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	
}
