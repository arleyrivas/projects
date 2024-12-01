package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
@JsonAutoDetect
public class SendEmailResquestDTO implements Serializable {

	@JsonProperty
	private String templateName;
	@JsonProperty
	private String data;
	@JsonProperty
	private List<TemplateEmailDTO> mails;

	public SendEmailResquestDTO() {
	}

	public String getTemplateName() {
		return templateName;
	}

	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public List<TemplateEmailDTO> getMails() {
		return mails;
	}

	public void setMails(List<TemplateEmailDTO> mails) {
		this.mails = mails;
	}

}
