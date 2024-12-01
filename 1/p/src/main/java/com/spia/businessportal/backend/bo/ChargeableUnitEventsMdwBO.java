/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  2 de dic. de 2015 - 11:01:55 a. m.
 */
package com.spia.businessportal.backend.bo;

import java.util.List;

import com.spia.services.entities.ChargeableUnitEvents;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 * Interfaz para consumir los servicios de Chargeable Unit Events (Eventos facturables).
 * Si bien por el uso de generics normalmente no hace falta declarar estas interfaces,
 * en este caso fue necesario dado que obtenemos una lista de eventos facturables por el nro de contenedor,
 * lo que no es una operación primitiva. 
 */
public interface ChargeableUnitEventsMdwBO<T> extends GenericMdwBO<T>{

	/**
	 * Retorna todos los ChargeableUnitEvents para el unit.
	 * 
	 * @param unitNbr numero de unit
	 * @return {@link com.spia.services.entities.ChargeableUnitEvents}
	 * @throws BusinessException cuando ocurre un error en los servicios mdw
	 */
	public List<ChargeableUnitEvents> hasChargeableUnitEvents(String unitNbr) throws BusinessException;
	/**
	 * Retorna todos los ChargeableUnitEvents de storage para el unit cuya fecha de pago sea anterior a la enviada por parámetro.
	 * 
	 * @param unitNbr numero de unit 
	 * @return {@link com.spia.services.entities.ChargeableUnitEvents}
	 * @throws BusinessException cuando ocurre un error en los servicios mdw
	 */
	public List<ChargeableUnitEvents> getStorageEventByUnitId(String unitNbr, String date) throws BusinessException;
}
