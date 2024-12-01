package com.spia.businessportal.service;

import java.util.List;

import com.spia.businessportal.common.entities.dto.PinImportServiceDTO;
import com.spia.businessportal.common.entities.dto.PinInfoServiceDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 13/07/2018 Servicio que permite realizar operaciones con
 * Facturas .
 * 
 */
public interface PinService {

    public List<PinImportServiceDTO> searchPin(String pinNbr) throws Exception;

    public PinInfoServiceDTO[] searchPinInfo(String pinNbr, String pinUnitList) throws Exception;

    /**
     * Desactiva todos los pines activos que hayan sido creados hace mas de un mes.
     * 
     */
    void processQueue();

}
