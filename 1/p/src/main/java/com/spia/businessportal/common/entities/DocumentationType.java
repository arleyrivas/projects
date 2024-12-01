/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  3 de may. de 2016 - 4:36:19 p. m.
 */
package com.spia.businessportal.common.entities;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * @author leandro
 *
 */
public class DocumentationType{

	private Long id;
	private String type;
	@JsonManagedReference
	private Set<DocumentationFileNameForType> filesName = new HashSet<DocumentationFileNameForType>(0);
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Set<DocumentationFileNameForType> getFilesName() {
		return filesName;
	}
	public void setFilesName(Set<DocumentationFileNameForType> filesName) {
		this.filesName = filesName;
	}
	@Override
	public String toString() {
		return "DocumentationType [id=" + id + ", type=" + type + ", filesName=" + filesName + "]";
	}		
}
