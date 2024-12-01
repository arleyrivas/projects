package com.spia.businessportal.service;

import com.spia.businessportal.common.entities.dto.FormResponseDTO;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.entities.dto.ManisfestResponseDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Date: 26/06/2020 Servicio que permite Login .
 * 
 */
public interface UnitFacilityVisitService {
	
	public FormResponseDTO getTransferForm(String transferTemplateNbr) throws Exception;

}
