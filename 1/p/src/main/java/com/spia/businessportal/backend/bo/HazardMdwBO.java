/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de abr. de 2016 - 1:43:38 p. m.
 */
package com.spia.businessportal.backend.bo;

import java.util.List;

import com.spia.services.entities.Hazard;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author facundo
 *
 */
public interface HazardMdwBO<T> extends GenericMdwBO<T>{

	/**
	 * Invoca al servicio que obtiene todos los hazards
	 * 
	 * @param notifications
	 * @return {@link Boolean}
	 */
	List<Hazard> getAllHazards() throws BusinessException;
			
}
