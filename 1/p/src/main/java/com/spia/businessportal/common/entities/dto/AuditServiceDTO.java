package com.spia.businessportal.common.entities.dto;

public class AuditServiceDTO {

	private String url;
	private Boolean request;
	private Boolean response;

	/**
	 * @return the url
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * @param url the url to set
	 */
	public void setUrl(String url) {
		this.url = url;
	}

	/**
	 * @return the request
	 */
	public Boolean getRequest() {
		return request;
	}

	/**
	 * @param request the request to set
	 */
	public void setRequest(Boolean request) {
		this.request = request;
	}

	/**
	 * @return the response
	 */
	public Boolean getResponse() {
		return response;
	}

	/**
	 * @param response the response to set
	 */
	public void setResponse(Boolean response) {
		this.response = response;
	}

}
