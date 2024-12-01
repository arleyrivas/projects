package com.spia.businessportal.service;

import java.util.Map;

import com.spia.businessportal.common.entities.dto.HBLServiceDTO;
import com.spia.services.entities.billing.Customer;

/**
 * Author: Santiago Ariza Clavijo  
 * Fecha: 28/06/2019
 * 
 */
public interface HBLService {

    public HBLServiceDTO[] searchCargoLots(String hbl, String type) throws Exception;

	Map<String, String> searchPins(String units) throws Exception;

	Customer[] searchTruckCompany(String search) throws Exception;

}
