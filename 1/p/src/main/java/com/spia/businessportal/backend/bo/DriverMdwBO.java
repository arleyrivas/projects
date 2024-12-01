/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  19 de ene. de 2016 - 11:01:01 a. m.
 */
package com.spia.businessportal.backend.bo;

import java.util.List;

import com.spia.services.entities.Driver;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 * Interfaz para consumir los servicios de Driver.
 * Si bien por el uso de generics normalmente no hace falta declarar estas interfaces,
 * en este caso fue necesario dado que los conductores se obtienen a partir de la empresa de transporte, con lo cual se estarían usando 2 url distintas
 * para obtener los conductores (truckingCompany para obtener todos los conductores de una empresa de transporte, y driver para obtener un único conductor).
 */
public interface DriverMdwBO <T> extends GenericMdwBO<T>{

	/**
	 * Retorna los drivers de una truckingCompany
	 * 
	 * @param path ruta al webService.
	 * @param truckingCompany empresa de transporte
	 * @return {@link com.spia.services.entities.Driver}
	 * @throws BusinessException
	 */
	List<Driver> allByTruckingCompany(String truckingCompany, String value) throws BusinessException;
}
