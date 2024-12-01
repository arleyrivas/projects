/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  5 de may. de 2016 - 9:23:35 a. m.
 */
package com.spia.businessportal.common.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

/**
 * @author leandro
 *
 */
public class DocumentationFileNameForType {

	private Long id;
	private String name;
	@JsonBackReference
	private DocumentationType type;
	private Integer order;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public DocumentationType getType() {
		return type;
	}
	public void setType(DocumentationType type) {
		this.type = type;
	}
	public Integer getOrder() {
		return order;
	}
	public void setOrder(Integer order) {
		this.order = order;
	}
	@Override
	public String toString() {
		return "DocumentationFileNameForType [id=" + id + ", name=" + name + ", order=" + order
				+ "]";
	}		
}
