/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de oct. de 2015 - 2:39:06 p. m.
 */
package com.spia.businessportal.backend.bo.impl;

import org.apache.commons.lang.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;

import com.spia.businessportal.backend.bo.EdoMdwBO;
import com.spia.services.entities.Edo;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 * Implementación de la interfaz EdoMdwBO
 */
public class EdoMdwBOImpl <T> extends GenericMdwBOImpl<T> implements EdoMdwBO<T>{

	
	/**
	 * 
	 */
	public EdoMdwBOImpl() {
		super();
	}

	@Override
	public Edo getByAgent(@PathVariable("nbr") String nbr, @PathVariable("agent") String agent) throws BusinessException {
		Edo edo = null;
		if (!StringUtils.isEmpty(nbr) && !StringUtils.isEmpty(agent)) {
			edo = (Edo) this.getRestTemplate().getForObject(getServiceUrl() + "/agent/{nbr}/{agent}", this.getClazz(), nbr, agent);
		}
		return edo;
	}

	@Override
	public Edo getByTruckingCompany(@PathVariable("nbr") String nbr, @PathVariable("truckingCompany") String truckingCompany) throws BusinessException {
		Edo edo = null;		
		if (!StringUtils.isEmpty(nbr) && !StringUtils.isEmpty(truckingCompany)) {
			edo = (Edo) this.getRestTemplate().getForObject(getServiceUrl() + "/trucking-company/{nbr}/{trucking-company}", this.getClazz(), nbr, truckingCompany);
		}
		return edo;
	}

}
