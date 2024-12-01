package com.spia.businessportal.service;

import java.util.Map;

import com.spia.businessportal.common.entities.dto.BlServiceDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions 
 * Email: efontalvo@aassertsolutions.com 
 * Date: 08/07/2020 
 * Servicio que permite realizar operaciones con Bl .
 * 
 */
public interface BillOfLadingService {

	public BlServiceDTO[] searchBl(String blNbr, String companyId, String userType) throws Exception;

	public Map<String, String> searchPins(String unitNbr) throws Exception;

}
