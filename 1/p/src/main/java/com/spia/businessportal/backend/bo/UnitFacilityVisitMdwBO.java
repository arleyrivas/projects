/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  21 de oct. de 2015 - 9:40:09 a. m.
 */
package com.spia.businessportal.backend.bo;

import java.util.List;

import com.spia.services.entities.UnitFacilityVisit;
import com.spia.services.entities.UnitStorageAndReeferDaysResponse;
import com.spia.services.exception.BOException;

import ar.com.fluxit.framework.common.exception.BusinessException;
/**
 * @author leandro
 *
* Interfaz para consumir los servicios de Unit Facility Visit.
 * Si bien por el uso de generics normalmente no hace falta declarar estas interfaces,
 * en este caso fue necesario dado que se realizan numerosas operaciones que no están comprendidas dentro de las primitivas.
 */
public interface UnitFacilityVisitMdwBO<T> extends GenericMdwBO<T> {

	
	/**
	 * Retorna un unit filtrando sólamente por el id del unit
	 * 
	 * @param id
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException
	 */
	public UnitFacilityVisit getSingleUnitById(String id, String storage) throws BusinessException;
	/**
	 * Invoca al servicio que retorna un unit facility visit sólo si es de impo.
	 * 
	 * @param id número del unit que se solicita
	 * @param user usuario logueado
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException cuando ocurre un error en los servicios mdw.
	 */
	public UnitFacilityVisit getUnitForImport(String id, String user) throws BusinessException;
	
	/**
	 * Invoca al servicio que retorna un unit facility visit sólo si es de expo.
	 * 
	 * @param id número del unit que se solicita
	 * @param user usuario logueado
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException cuando ocurre un error en los servicios mdw.
	 */
	public UnitFacilityVisit getUnitForExport(String id) throws BusinessException;
	
	/**
	 * Invoca al servicio que retorna un unit facility visit sólo si es para ingresio de vacíos.
	 * 
	 * @param id número del unit que se solicita
	 * @return {@link UnitFacilityVisit}
	 * @throws BusinessException cuando ocurre un error en los servicios mdw.
	 */
	public UnitFacilityVisit getUnitForEro(String id) throws BusinessException;
	
	/**
	 * Invoca al servicio que retorna si un unit está en alguna orden.
	 * 
	 * @param id número de unit
	 * @return true si el unit está en otra órden
	 * @throws BusinessException cuando ocurre un error en los servicios mdw.
	 */
	public boolean isInOrder(String id) throws BusinessException;
	
	/**
	 * Invoca al servicio que retorna si un unit está preavisado.
	 * 
	 * @param id número del unit que se va a validar
	 * @return true si el unit está preavisado
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	public boolean isUnitAdvised(String id) throws BusinessException;
	
	/**
	 * Invoca al servicio que retorna la lista de units por su consignatario.
	 * 
	 * @param consignee consignatario del unit
	 * @return {@link String} 
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	public List<String> getByConsignee(String consignee) throws BusinessException;
	
	/**
	 * Invoca al servicio que retorna si un unit está activo
	 * 
	 * @param nbr número de un UFV
	 * @return true si se encuentra el UFV en estado active
	 * @throws BusinessException  cuando ocurre un error en los servicios de mdw
	 */
	public boolean isActivated(String nbr) throws BusinessException;

	/**
	 * Invoca al servicio que retorna un ufv por id y vesselId
	 * @param nbr
	 * @param vesselId
	 * @return
	 * @throws BusinessException
	 */
	public UnitFacilityVisit getByVesselId(String nbr, String vesselId)
			throws BusinessException;
	
	/**
	 * Invoca al servicio que retorna los dias de storage y de enchufado de reefer para un unit.
	 * 
	 * @param id
	 * @return {@link UnitStorageAndReeferDaysResponse}
	 * @throws BusinessException
	 */
	public UnitStorageAndReeferDaysResponse getUnitStorageAndReeferDays(String id) throws BusinessException;
	
	/**
	 * Invoca al servicio que cancela el preaviso de un contenedor
	 * 
	 * @param nbr número de un UFV
	 * @return true si se encuentra el UFV en estado active
	 * @throws BusinessException  cuando ocurre un error en los servicios de mdw
	 */
	public Boolean cancelPreadvise(String unitNbr) throws BusinessException;
	
	/**
	 * Invoca al servicio que recupera una unit si cumple con las
	 * reglas para ser asociado a un booking.
	 * @param nbr
	 * @return {@linf UnitFacilityVisit}
	 */
	public UnitFacilityVisit getUnitForAssociateBooking(String nbr) throws BusinessException;
	
	public List<String> getStorage(List<String> hblList) throws BusinessException;

}
