package com.spia.businessportal.service;

import com.spia.businessportal.common.entities.dto.EroServiceDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite realizar operaciones con Edo
 * .
 * 
 */
public interface EroService {

    public EroServiceDTO[] searchEro(String eroNbr, String cliTransp) throws Exception;

}
