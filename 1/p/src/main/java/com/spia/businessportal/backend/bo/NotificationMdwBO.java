/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de abr. de 2016 - 1:43:38 p. m.
 */
package com.spia.businessportal.backend.bo;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.spia.businessportal.common.entities.Documentation;
import com.spia.businessportal.common.entities.DocumentationSpecificFile;
import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.PinContainerized;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.servicies.entities.notification.Notification;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 */
public interface NotificationMdwBO<T> extends GenericMdwBO<T> {

    /**
     * Invoca al módulo de notificaciones para crear una notificacion de pin
     * 
     * @param pin
     *            el pin del cuál se creará una notifiación
     * @param pinContainerized
     *            los units del pin sobre los cuáles se va a notificar.
     * @param type
     *            el tipo de notificacion (eliminado)
     * @throws BusinessException
     */
    void notificate(Pin pin, Collection<PinContainerized> pinContainerized, String type,
            List<Map<String, String>> messages) throws BusinessException;

    /**
     * Invoca al módulo de notificaciones sólo para enviar mensajes a la cola jms (no guarda notificación)
     * 
     * @param user
     *            usuario al que se va enviar el mensaje
     * @param messages
     *            mensajes que serán enviados
     * @throws BusinessException
     */
    void notificate(String user, List<Map<String, String>> messages) throws BusinessException;

    /**
     * Invoca al módulo de notificaciones para crear una notificación de revisión de documentación.
     * 
     * @param doc
     *            documentación revisada
     * @throws BusinessException
     */
    void notificate(Documentation doc, List<DocumentationSpecificFile> updatedRevisions) throws BusinessException;

    /**
     * Invoca al módulo de notificaciones para crear una notificación de revisión de documentación.
     * 
     * @param doc
     *            documentación
     * @param title
     *            titulo de la notificacion
     */
    void notificate(Documentation doc, String title, String body, String observation, boolean notApproved,
            Set<String> userSet, List<Map<String, String>> messages) throws BusinessException;

    /**
     * Retorna todas las notificaciones para el usuario logueado
     * 
     * @param userName
     *            del usuario logueado
     * @return {@link Notification}
     * @throws BusinessException
     */
    List<Notification> getUserNotifications(String userName) throws BusinessException;

    /**
     * Invoica al servicio que elimina una notificación
     * 
     * @param notificationId
     *            id de la notificación
     * @return {@link Boolean}
     * @throws BusinessException
     */
    Boolean removeNotification(Long notificationId) throws BusinessException;

    /**
     * Invoca al servicio que marca como vistas todas las notificaciones
     * 
     * @param notifications
     * @return {@link Boolean}
     */
    Boolean watchAll(List<Notification> notifications);

    /**
     * Crear notificaciones a partir de un pin
     * 
     * @param {@link
     *            Pin}
     * @param Collection<{@link
     *            PinContainerized}>
     * @param {@link
     *            type}
     * @param String
     *            user
     * @return {@link Notification}
     * @throws BusinessException
     */
    Notification createNotification(Pin pin, Collection<PinContainerized> pinContainerized, String type, String user)
            throws BusinessException;

    /**
     * Invoca al módulo de notificaciones para crear una notificacion de pin
     * 
     * @param pin
     *            el pin del cuál se creará una notifiación
     * @param pinContainerized
     *            los units del pin sobre los cuáles se va a notificar.
     * @param type
     *            el tipo de notificacion (eliminado)
     * @throws BusinessException
     */
    void notificatePin(Pin pin, Collection<PinContainerized> pinContainerized, String type,
            List<Map<String, String>> messages) throws BusinessException;

    /**
     * Invoca al módulo de notificaciones para crear una notificacion de pin
     * 
     * @param pin
     *            el pin del cuál se creará una notifiación
     * @param pinContainerized
     *            los units del pin sobre los cuáles se va a notificar.
     * @param type
     *            el tipo de notificacion (eliminado)
     * @throws BusinessException
     */
    void notificateAppointment(TruckVisit truckVisit, String type, List<Map<String, String>> messages)
            throws BusinessException;

    Notification createAppointmentNotification(TruckVisit truckVisit, String type) throws BusinessException;

}
