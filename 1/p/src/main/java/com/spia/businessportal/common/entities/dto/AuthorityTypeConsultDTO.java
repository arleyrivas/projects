package com.spia.businessportal.common.entities.dto;

public class AuthorityTypeConsultDTO {
	
	private String authority_type;
	private String inspection_type;
	private String requires_crew;
	private String min_staff;
	private String max_staff;
	private String event_type;
	private String requires_documentation;
	
	public String getAuthority_type() {
		return authority_type;
	}
	public void setAuthority_type(String authority_type) {
		this.authority_type = authority_type;
	}
	public String getInspection_type() {
		return inspection_type;
	}
	public void setInspection_type(String inspection_type) {
		this.inspection_type = inspection_type;
	}
	public String getRequires_crew() {
		return requires_crew;
	}
	public void setRequires_crew(String requires_crew) {
		this.requires_crew = requires_crew;
	}
	public String getMin_staff() {
		return min_staff;
	}
	public void setMin_staff(String min_staff) {
		this.min_staff = min_staff;
	}
	public String getMax_staff() {
		return max_staff;
	}
	public void setMax_staff(String max_staff) {
		this.max_staff = max_staff;
	}
	public String getEvent_type() {
		return event_type;
	}
	public void setEvent_type(String event_type) {
		this.event_type = event_type;
	}
	public String getRequires_documentation() {
		return requires_documentation;
	}
	public void setRequires_documentation(String requires_documentation) {
		this.requires_documentation = requires_documentation;
	}
	
}
