package com.spia.businessportal.backend.bo;

import java.util.List;

import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.services.entities.UnitFacilityVisitDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;


/**
 * Interfaz genérica para consumir los servicios del mdw, aquí se declaran las
 * operaciones primitivas para consumir los servicios del mdw
 * 
 */
public interface GenericMdwBO<T> {

	/**
	 * Invocación al servicio que retorna todos los resultados para la entidad
	 * correspondientes.
	 * 
	 * @return {@link T}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	List<T> all() throws BusinessException;

	/**
	 * Invocación al servicio que retorna todos los resultados para la entidad
	 * correspondientes y permite setear el path del servicio.
	 * 
	 * @param path del servicio de mdw
	 * @return {@link T}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	List<T> all(String path) throws BusinessException;

	/**
	 * Invocación al servicio que retorna el resultado del id para la entidad
	 * correspondiente.
	 * 
	 * @param id id de la entidad
	 * @return {@link T}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	T get(String id) throws BusinessException;

	/**
	 * Invocación al servicio que guarda la entidad correspondiente.
	 * 
	 * @param entity objeto a guardar
	 * @return {@link T}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	T save(T entity) throws BusinessException;

	/**
	 * Invocación al servicio que actualiza la entidad correspondiente.
	 * 
	 * @param id     id de la entidad
	 * @param entity objeto que se va a actualizar
	 * @return {@link T}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	T update(String id, T entity) throws BusinessException;

	/**
	 * Setea el path al servicio del mdw.
	 * 
	 * @param path
	 * @Override path del servicio de mdw
	 */
	void setPath(String path);

	/**
	 * Setea la clase de retorno del servicio de mdw
	 * 
	 * @param clazz clase de retorno
	 */
	void setClazz(Class<T> clazz);

	/**
	 * Setea la clase de lista de retorno del servicio de mdw.
	 * 
	 * @param arrayClazz clase de retorno de lista
	 */
	void setArrayClazz(Class<T[]> arrayClazz);

	/**
	 * retorna la url del path del servicio mdw.
	 * 
	 * @return {@link String}
	 */
	String getMiddlewareUrl();

	/**
	 * Invocación al servicio que actualiza la entidad correspondiente.
	 * 
	 * @param reference del Booking Item
	 * @param entity    objeto que se va a actualizar
	 * @return {@link T}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	T saveUfvReference(String reference, T entity) throws BusinessException;

	/**
	 * Invocación al servicio que retorna el resultado del id para la entidad
	 * correspondiente.
	 * 
	 * @param id   id de la entidad
	 * @param name nombre de la entidad
	 * @return {@link T}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	List<T> getAgentsByIdOrName(String id, String name) throws BusinessException;

	/**
	 * Invocación al servicio que retorna el resultado del id para la entidad
	 * correspondiente.
	 * 
	 * @param id id de la entidad
	 * @return {@link T}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	T getShipperExporter(T entity) throws BusinessException;

	List<T> getShipperByIdOrName(String id, String name) throws BusinessException;

	T saveUfv(UnitFacilityVisitDTO unitFacilityVisitDTO) throws BusinessException;

	T saveUfv(T entity) throws BusinessException;

	GenericResponseDTO<String> updateUfv(UnitFacilityVisitDTO unitFacilityVisitDTO) throws BusinessException;

	GenericResponseDTO<String> getUfv(UnitFacilityVisitDTO unitFacilityVisitDTO) throws BusinessException;

	// ASSIST 13-04-2022
	/**
	 * Invocación al servicio que retorna el reporte del unitId/agentId para la entidad
	 * correspondiente.
	 * 
	 * @param unitId de la entidad
	 * @param agentId de la entidad
	 * @return {@link T}
	 * @throws BusinessException cuando ocurre un error en los servicios de mdw
	 */
	T getReporter(String unitId, String agentId) throws BusinessException;

	

}
