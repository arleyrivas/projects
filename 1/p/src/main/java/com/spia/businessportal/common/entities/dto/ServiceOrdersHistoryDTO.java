package com.spia.businessportal.common.entities.dto;

import java.util.List;

public class ServiceOrdersHistoryDTO {
	
	private List<ServiceOrderHistoryResponseDTO> serviceOrders;

	public List<ServiceOrderHistoryResponseDTO> getServiceOrders() {
		return serviceOrders;
	}

	public void setServiceOrders(List<ServiceOrderHistoryResponseDTO> serviceOrders) {
		this.serviceOrders = serviceOrders;
	}
	
	
}
