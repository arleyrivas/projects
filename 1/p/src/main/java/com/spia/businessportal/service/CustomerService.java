package com.spia.businessportal.service;

import java.util.List;

import com.spia.businessportal.common.entities.dto.CustomerServiceDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailNotificationDTO;

/**
 * Author: Elvis Fontalvo - 
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Fecha: 12/05/2020 
 */
public interface CustomerService {

	public CustomerServiceDTO[] getCustomer( String search, String type) throws Exception;

	public List<TemplateEmailNotificationDTO> getShippersMailsByContainersOrHbls(String containerList, String type) throws Exception;


}
