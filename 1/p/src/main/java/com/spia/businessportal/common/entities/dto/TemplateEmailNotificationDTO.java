package com.spia.businessportal.common.entities.dto;

public class TemplateEmailNotificationDTO {
	private String name;
	private String mail;
	private String information;

	public TemplateEmailNotificationDTO() {
		super();
	}

	public TemplateEmailNotificationDTO(String name, String mail, String information) {
		super();
		this.name = name;
		this.mail = information;
		this.information = information;
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

	public String getInformation() {
		return information;
	}

	public void setInformation(String information) {
		this.information = information;
	}

}
