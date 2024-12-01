package com.spia.businessportal.service;

import java.util.Date;

import com.spia.businessportal.common.entities.dto.QuotaServiceDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 09/04/2019 Servicio que permite validar las quotas de cada
 * horario .
 * 
 */
public interface ValidateHoursService {
   
	public QuotaServiceDTO[] searchQuotasCC(Date date, String rule, String units) throws Exception;

	public QuotaServiceDTO[] searchQuotas(Date startDate, Date endDate, String rule) throws Exception;


}
