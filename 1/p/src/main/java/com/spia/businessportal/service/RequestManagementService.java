package com.spia.businessportal.service;

import java.util.List;

import com.spia.businessportal.common.entities.dto.RequestManagementDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions
 * Email:efontalvo@aassertsolutions.com Fecha: 20/08/2021
 */
public interface RequestManagementService {
	
	public List<RequestManagementDTO> getAgentRequestByNbr(String nbr, String agentId) throws Exception;
	public List<RequestManagementDTO> getClientRequestByNbr(String nbr,  String clientId) throws Exception;
	public List<TemplateEmailDTO> getEmails() throws Exception;


}
