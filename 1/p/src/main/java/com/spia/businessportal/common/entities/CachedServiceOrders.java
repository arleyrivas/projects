package com.spia.businessportal.common.entities;

import java.util.ArrayList;
import java.util.List;

import com.spia.businessportal.common.entities.dto.ServiceOrderHistoryResponseDTO;
import com.spia.services.entities.billing.Invoice;

public class CachedServiceOrders {

	private static List<ServiceOrderHistoryResponseDTO> serviceOrders;
	
	public static List<ServiceOrderHistoryResponseDTO> getServiceOrders() {
		return serviceOrders;
	}
	public static void setServiceOrders(List<ServiceOrderHistoryResponseDTO> serviceOrders) {
		CachedServiceOrders.serviceOrders = serviceOrders;
	}

	public static List<ServiceOrderHistoryResponseDTO> getSubList(int page, int ammount){
		List<ServiceOrderHistoryResponseDTO> soSublist = new ArrayList<ServiceOrderHistoryResponseDTO>();
		if(serviceOrders.size() > 0) {
			int fromIndex = page*ammount;
			int toIndex = (page + 1) * ammount;	
			
			if(fromIndex >= serviceOrders.size()) {
				return soSublist;
			}
			
			if(toIndex > serviceOrders.size()) {
				toIndex = serviceOrders.size();
			}
			soSublist = serviceOrders.subList(fromIndex, toIndex);
		}
		return soSublist;
	}
	
}
