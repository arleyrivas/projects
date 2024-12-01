/*
 * Assert Solutions S.A.S
 * Colombia - Bogota 
 * http://www.assertsolutions.com
 * Author: Assert Solutions
 * Date:  01 de mar. de 2018 - 2:49:17 p. m.
 */
package com.spia.businessportal.backend.bo;

import com.spia.businessportal.common.entities.dto.PrivilegeListResponseDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioResponseDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * 
 * @author Andres Falla
 *
 */
public interface PrivilegesBO {

   /**
    * 
    * @param user
    * @return
    * @throws BusinessException
    * @company Assert Solutions S.A.S.
    * @author Andres Falla
    * @since 2019-07-10
    */
    public PrivilegioResponseDTO getConfigPrivilegesUser(String user) throws BusinessException;

}
