package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;



public class EmailRequestDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	@JsonProperty
	private String templateName;

	@JsonProperty
	private List<EmailParameterDTO> parameters;

	@JsonProperty
	private List<TemplateEmailDTO> mails;

	public EmailRequestDTO() {
		super();
	}

	public EmailRequestDTO(String templateName, List<EmailParameterDTO> parameters, List<TemplateEmailDTO> mails) {
		super();
		this.templateName = templateName;
		this.parameters = parameters;
		this.mails = mails;
	}

	public String getTemplateName() {
		return templateName;
	}

	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}

	public List<EmailParameterDTO> getParameters() {
		return parameters;
	}

	public void setParameters(List<EmailParameterDTO> parameters) {
		this.parameters = parameters;
	}

	public List<TemplateEmailDTO> getMails() {
		return mails;
	}

	public void setMails(List<TemplateEmailDTO> mails) {
		this.mails = mails;
	}

}
