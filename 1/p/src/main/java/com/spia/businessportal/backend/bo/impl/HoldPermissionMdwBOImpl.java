/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  10 de ago. de 2016 - 2:06:13 p. m.
 */
package com.spia.businessportal.backend.bo.impl;

import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

import com.spia.businessportal.backend.bo.HoldPermissionMdwBO;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 */
public class HoldPermissionMdwBOImpl<T> extends GenericMdwBOImpl<T>  implements HoldPermissionMdwBO<T>{

	@Override
	public Boolean addHold(String unitId) throws BusinessException {
		ResponseEntity<Boolean> re = this.getRestTemplate().exchange(getServiceUrl()+"/add/{id}", HttpMethod.PUT, null, Boolean.class, unitId);
		return re.getBody();
	}

	@Override
	public Boolean grantHold(String unitId) throws BusinessException {
		ResponseEntity<Boolean> re = this.getRestTemplate().exchange(getServiceUrl()+"/grant/{id}", HttpMethod.PUT, null, Boolean.class, unitId);
		return re.getBody();
	}

	@Override
	public Boolean grantHold(String unitId, String hold) throws BusinessException {
		ResponseEntity<Boolean> re = this.getRestTemplate().exchange(getServiceUrl()+"/grant/{id}/{hold}", HttpMethod.PUT, null, Boolean.class, unitId, hold);
		return re.getBody();
	}

}
