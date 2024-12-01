/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de oct. de 2015 - 2:37:23 p. m.
 */
package com.spia.businessportal.backend.bo;


import com.spia.services.entities.Edo;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 * Interfaz para consumir los servicios de Edo.
 * Si bien por el uso de generics normalmente no hace falta declarar estas interfaces,
 * en este caso fue necesario dado que obtenemos el EDO por el id del edo y el dueño de la órden,
 * lo que no es una operación primitiva. 
 */
public interface EdoMdwBO <T> extends GenericMdwBO<T>{
	
	/**
	 * Devuelve edo si y solo si el agent es el dueño.
	 * 
	 * @param nbr numero del edo
	 * @param agent agente logueado
	 * @return {@link Edo}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	public Edo getByAgent(String nbr, String agent) throws BusinessException;
	
	/**
	 * Devuelve el edo si y sólo si el truckingCompany es el dueño 
	 * 
	 * @param nbr numero del edo
	 * @param truckingCompany truckingCompany logueado
	 * @return {@link Edo}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	public Edo getByTruckingCompany(String nbr, String truckingCompany) throws BusinessException;

}
