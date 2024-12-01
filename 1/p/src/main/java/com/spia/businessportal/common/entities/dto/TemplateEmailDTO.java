package com.spia.businessportal.common.entities.dto;

public class TemplateEmailDTO {
	private String name;
	private String mail;

	public TemplateEmailDTO() {
		super();
	}

	public TemplateEmailDTO(String name, String mail) {
		super();
		this.name = name;
		this.mail = mail;
	}

	public synchronized String getName() {
		return name;
	}

	public synchronized void setName(String name) {
		this.name = name;
	}

	public synchronized String getMail() {
		return mail;
	}

	public synchronized void setMail(String mail) {
		this.mail = mail;
	}
}
