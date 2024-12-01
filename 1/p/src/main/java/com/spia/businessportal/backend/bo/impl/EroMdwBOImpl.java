/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  17 de mar. de 2016 - 4:50:58 p. m.
 */
package com.spia.businessportal.backend.bo.impl;

import org.apache.commons.lang.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;

import com.spia.businessportal.backend.bo.EdoMdwBO;
import com.spia.businessportal.backend.bo.EroMdwBO;
import com.spia.services.entities.Edo;
import com.spia.services.entities.Ero;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 */
public class EroMdwBOImpl <T> extends GenericMdwBOImpl<T> implements EroMdwBO<T> {

	@Override
	public Ero getByAgent(@PathVariable("nbr") String nbr, @PathVariable("agent") String agent) throws BusinessException {
		Ero ero = null;
		if (!StringUtils.isEmpty(nbr) && !StringUtils.isEmpty(agent)) {
			ero = (Ero) this.getRestTemplate().getForObject(getServiceUrl() + "/{nbr}/agent/{agent}", this.getClazz(), nbr, agent);
		}
		return ero;
	}

	@Override
	public Ero getByTruckingCompany(@PathVariable("nbr") String nbr, @PathVariable("truckingCompany") String truckingCompany) throws BusinessException {
		Ero ero = null;		
		if (!StringUtils.isEmpty(nbr) && !StringUtils.isEmpty(truckingCompany)) {
			ero = (Ero) this.getRestTemplate().getForObject(getServiceUrl() + "/{nbr}/trucking-company/{trucking-company}", this.getClazz(), nbr, truckingCompany);
		}
		return ero;
	}
}
