/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  9 de may. de 2016 - 3:46:00 p. m.
 */
package com.spia.businessportal.backend.bo;

/**
 * Servicio invocado para desactivar los pines que haya sido creados hace mas de un mes.
 * 
 * @author juan.torrengo@fluxit.com.ar
 *
 */
public interface PinService{

	/**
	 * Desactiva todos los pines activos  que hayan sido creados hace mas de un mes.
	 * 
	 */
	void processQueue();
}
