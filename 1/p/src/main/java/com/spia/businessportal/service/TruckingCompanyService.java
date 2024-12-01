package com.spia.businessportal.service;

import java.util.List;

import com.spia.services.entities.Driver;
import com.spia.services.entities.TruckingCompany;

/**
 * Author: Elvis Fontalvo - 
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Fecha: 12/05/2020 
 */
public interface TruckingCompanyService {

	public List<TruckingCompany> getTruckingCompaniesByConsigneeAndIdOrName(String search, String consignee) throws Exception;


}
