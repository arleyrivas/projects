/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de abr. de 2016 - 1:43:38 p. m.
 */
package com.spia.businessportal.backend.bo;

import java.util.List;

import com.spia.businessportal.common.entities.FailedNotification;
import com.spia.servicies.entities.notification.Notification;
import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 */
public interface NotificationBO<FailedNotification>  {

	/**
	 * Recuperar una notificacion desde el módulo de notificaciones
	 * @param id
	 * @return
	 * @throws BusinessException
	 */
	FailedNotification getById(Long id) throws BusinessException;
	
	/**
	 * Recuperar las notificaciones que no se enviaron al módulo de notificaciones y se almacenaron en base de datos de portal
	 * @param userName
	 * @return
	 * @throws BusinessException
	 */
	List<FailedNotification> getFailedNotifications(String userName) throws BusinessException;

	/**
	 * Borrar un confunto de notificaciones que no fueron enviadas de base de datos del portal
	 * @param notifications
	 * @throws BusinessException
	 */
	void deleteFailedNotifications(List<FailedNotification> notifications) throws BusinessException;
	
	/**
	 * Guardar una lista de notificaciones que no se pudieron enviar al módulo de notificaciones
	 * @param notifications
	 * @throws BusinessException
	 */
	void saveFailedNotifications(List<FailedNotification> notifications) throws BusinessException;

		
}
