package com.spia.businessportal.service;

import java.util.List;

import com.spia.businessportal.common.entities.dto.HistoryServiceDTO;
import com.spia.businessportal.common.entities.dto.HistoryAppointmentsCriteria;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 04/02/2019 Servicio que permite realizar operaciones con
 * Facturas .
 * 
 */
public interface HistoryService {

    public List<HistoryServiceDTO> getHistory(HistoryAppointmentsCriteria criteria, int page) throws Exception;

}
