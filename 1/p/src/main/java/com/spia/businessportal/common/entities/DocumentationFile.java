/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  4 de may. de 2016 - 1:26:50 p. m.
 */
package com.spia.businessportal.common.entities;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * @author leandro
 *
 * Entidad que representa un archivo de la documentación.
 */
public class DocumentationFile {

	private Long id;
	@JsonBackReference
	private Documentation documentation;
	private DocumentationFileState state;
	@JsonManagedReference
	private Set<DocumentationSpecificFile> files = new HashSet<DocumentationSpecificFile>(0);
	private DocumentationFileNameForType fileName;
	private List<String> addedFiles;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public DocumentationFileState getState() {
		return state;
	}
	public void setState(DocumentationFileState state) {
		this.state = state;
	}
	public Documentation getDocumentation() {
		return documentation;
	}
	public void setDocumentation(Documentation documentation) {
		this.documentation = documentation;
	}
	public Set<DocumentationSpecificFile> getFiles() {
		return files;
	}
	public void setFiles(Set<DocumentationSpecificFile> files) {
		this.files = files;
	}
	public DocumentationFileNameForType getFileName() {
		return fileName;
	}
	public void setFileName(DocumentationFileNameForType fileName) {
		this.fileName = fileName;
	}
	public List<String> getAddedFiles() {
		return addedFiles;
	}
	public void setAddedFiles(List<String> addedFiles) {
		this.addedFiles = addedFiles;
	}
	@Override
	public String toString() {
		return "DocumentationFile [id=" + id + ", state=" + state + ", files="
				+ files + ", fileName=" + fileName + ", addedFiles=" + addedFiles + "]";
	}	
	
	
	
}
