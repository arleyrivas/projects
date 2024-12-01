/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  2 de dic. de 2015 - 11:03:19 a. m.
 */
package com.spia.businessportal.backend.bo.impl;

import java.util.Arrays;
import java.util.List;

import com.spia.businessportal.backend.bo.ChargeableUnitEventsMdwBO;
import com.spia.services.entities.ChargeableUnitEvents;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 * Implementación de la interfaz ChargeableUnitEventsMdwBO 
 */
public class ChargeableUnitEventsMdwBOImpl <T> extends GenericMdwBOImpl<T> implements ChargeableUnitEventsMdwBO<T>{

	
	/**
	 * 
	 */
	public ChargeableUnitEventsMdwBOImpl() {
		super();
	}

	@Override
	public List<ChargeableUnitEvents> hasChargeableUnitEvents(String unitNbr) throws BusinessException {
		return Arrays.asList(this.getRestTemplate().getForObject(getServiceUrl()+"/{unitNbr}", ChargeableUnitEvents[].class, unitNbr));
	}

	@Override
	public List<ChargeableUnitEvents> getStorageEventByUnitId(String unitNbr, String date) throws BusinessException {
		return Arrays.asList(this.getRestTemplate().getForObject(getServiceUrl()+"/storage/{unitNbr}/{date}", ChargeableUnitEvents[].class, unitNbr, date));
	}

}
