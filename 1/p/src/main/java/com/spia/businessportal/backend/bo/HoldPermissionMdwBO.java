/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  10 de ago. de 2016 - 2:02:29 p. m.
 */
package com.spia.businessportal.backend.bo;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 */
public interface HoldPermissionMdwBO<T> extends GenericMdwBO<T>{

	/**
	 * Invoca al servicio que agrega un hold de policía antinarcóticos al contenedor
	 * 
	 * @param unitId
	 * @return {@link Boolean}
	 * @throws BusinessException
	 */
	Boolean addHold(String unitId) throws BusinessException;
	/**
	 * Invoca al servicio que retira un hold de policía antinarcóticos al contenedor
	 * 
	 * @param unitId
	 * @return
	 * @throws BusinessException
	 */
	Boolean grantHold(String unitId) throws BusinessException;
	/**
	 * Invoca al servicio que retira un hold de policía antinarcóticos al contenedor
	 * 
	 * @param unitId
	 * @return
	 * @throws BusinessException
	 */
	Boolean grantHold(String unitId, String hold) throws BusinessException;

}
