package com.spia.businessportal.common.entities.dto;

import java.util.List;

public class InspectionTypeDTO {
	
	private String inspection_type;
	private List<EventTypeDTO> event_types;
	
	public String getInspection_type() {
		return inspection_type;
	}
	public void setInspection_type(String inspection_type) {
		this.inspection_type = inspection_type;
	}
	public List<EventTypeDTO> getEvent_types() {
		return event_types;
	}
	public void setEvent_types(List<EventTypeDTO> event_types) {
		this.event_types = event_types;
	}
	
}
