/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  17 de mar. de 2016 - 4:49:17 p. m.
 */
package com.spia.businessportal.backend.bo;

import com.spia.services.entities.Ero;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 */
public interface EroMdwBO <T> extends GenericMdwBO<T> {

	/**
	 * Devuelve ero si y solo si el agent es el dueño.
	 * 
	 * @param nbr numero del ero
	 * @param agent agente logueado
	 * @return {@link Ero}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	public Ero getByAgent(String nbr, String agent) throws BusinessException;
	
	/**
	 * Devuelve el ero si y sólo si el truckingCompany es el dueño 
	 * 
	 * @param nbr numero del ero
	 * @param truckingCompany truckingCompany logueado
	 * @return {@link Ero}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	public Ero getByTruckingCompany(String nbr, String truckingCompany) throws BusinessException;
}
