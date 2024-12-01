package com.spia.businessportal.common.entities.dto;

import com.spia.services.entities.Agent;
import com.spia.services.entities.Booking;

public class SaveUfvMailDTO {
	
	private Booking booking;
	private Agent agent;
	private String observation;
	
	
	public Booking getBooking() {
		return booking;
	}
	public void setBooking(Booking booking) {
		this.booking = booking;
	}
	public Agent getAgent() {
		return agent;
	}
	public void setAgent(Agent agent) {
		this.agent = agent;
	}
	public String getObservation() {
		return observation;
	}
	public void setObservation(String observation) {
		this.observation = observation;
	}
	
	
	
	

}
