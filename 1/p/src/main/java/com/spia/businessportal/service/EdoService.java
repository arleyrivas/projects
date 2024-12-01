package com.spia.businessportal.service;

import com.spia.businessportal.common.entities.dto.PinInfoServiceDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite realizar operaciones con Edo
 * .
 * 
 */
public interface EdoService {

    public PinInfoServiceDTO[] searchEdo(String edoNbr, String cliTransp) throws Exception;

}
