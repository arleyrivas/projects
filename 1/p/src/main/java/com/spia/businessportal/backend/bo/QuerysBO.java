/*
 * Assert Solutions S.A.S
 * Colombia - Bogota 
 * http://www.assertsolutions.com
 * Author: Assert Solutions
 * Date:  01 de mar. de 2018 - 2:49:17 p. m.
 */
package com.spia.businessportal.backend.bo;

import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite realizar operaciones con Edo
 * 
 */
public interface QuerysBO {

    /**
     * 
     * @param query
     * @return QuerysResponseDTO
     * @throws BusinessException
     * 
     */
    public QuerysResponseDTO executeQuery(QuerysDTO query) throws BusinessException;

}
