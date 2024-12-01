package com.spia.businessportal.common.entities.dto;

import java.util.List;

public class AuthorityTypeInfoDTO {
	
	private String authority_type;
	private List<InspectionTypeDTO> inspection_type;
	private String min_staff;
	private String max_staff;
	private String requires_documentation;
	
	public String getAuthority_type() {
		return authority_type;
	}
	public void setAuthority_type(String authority_type) {
		this.authority_type = authority_type;
	}
	public List<InspectionTypeDTO> getInspection_type() {
		return inspection_type;
	}
	public void setInspection_type(List<InspectionTypeDTO> inspection_type) {
		this.inspection_type = inspection_type;
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
	public String getRequires_documentation() {
		return requires_documentation;
	}
	public void setRequires_documentation(String requires_documentation) {
		this.requires_documentation = requires_documentation;
	}
	
}
