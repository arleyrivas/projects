package com.spia.businessportal.service;

import java.util.List;

import com.spia.businessportal.common.entities.dto.HistoryCrossDTO;

/**
 * Author: Elvis Fontalvo - 
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Fecha: 11/05/2021 
 */
public interface HistoryCrossService {

	public List<HistoryCrossDTO> getHistoryCross(String type, String nit, Integer page) throws Exception;

}
