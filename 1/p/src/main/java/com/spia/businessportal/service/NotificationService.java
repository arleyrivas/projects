package com.spia.businessportal.service;

import java.util.List;

import com.spia.businessportal.common.entities.dto.EmailResponseDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioResponseUpdateDTO;
import com.spia.businessportal.common.entities.dto.SendEmailResquestDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailDTO;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.businessportal.common.entities.dto.NotificationsPortalDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 17/07/2018 Servicio que permite
 * realizar operaciones con Facturas .
 * 
 */
public interface NotificationService {

	public SecurityEsbResponse<PrivilegioResponseUpdateDTO> notificartionPrivileges(String action, String companyId,
			String userName) throws Exception;

	public EmailResponseDTO sendEmail(SendEmailResquestDTO sendEmailResquestDTO) throws Exception;

	public NotificationsPortalDTO[] filterNotificationsByPrivileges(String privilegesList) throws Exception;


}
