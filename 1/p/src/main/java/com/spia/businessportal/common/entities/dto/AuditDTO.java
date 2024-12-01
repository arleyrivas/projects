package com.spia.businessportal.common.entities.dto;

import java.util.List;

public class AuditDTO {

	private String name;
	private Boolean app;
	private Boolean route;
	private List<AuditServiceDTO> service;
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the app
	 */
	public Boolean getApp() {
		return app;
	}
	/**
	 * @param app the app to set
	 */
	public void setApp(Boolean app) {
		this.app = app;
	}
	/**
	 * @return the route
	 */
	public Boolean getRoute() {
		return route;
	}
	/**
	 * @param route the route to set
	 */
	public void setRoute(Boolean route) {
		this.route = route;
	}
	/**
	 * @return the service
	 */
	public List<AuditServiceDTO> getService() {
		return service;
	}
	/**
	 * @param service the service to set
	 */
	public void setService(List<AuditServiceDTO> service) {
		this.service = service;
	}

	
}
