/*
 * Assert Solutions S.A.S
 * Colombia - Bogota 
 * http://www.assertsolutions.com
 * Author: Assert Solutions
 * Date:  01 de mar. de 2018 - 2:49:17 p. m.
 */
package com.spia.businessportal.backend.bo;

import com.spia.businessportal.common.entities.dto.FinancialDTO;
import com.spia.businessportal.common.entities.dto.FinancialResponseDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author Assert Solutions
 *
 */
public interface FinancialBO<T> {

    /**
     * 
     * @param financial
     * @return FinancialResponseDTO
     * @throws BusinessException
     * 
     */
    public FinancialResponseDTO executeFinancial(FinancialDTO financial) throws BusinessException;

}
