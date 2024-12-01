/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de abr. de 2016 - 2:25:33 p. m.
 */
package com.spia.businessportal.backend.bo.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.jfree.util.Log;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.NotificationMdwBO;
import com.spia.businessportal.common.entities.Documentation;
import com.spia.businessportal.common.entities.DocumentationFile;
import com.spia.businessportal.common.entities.DocumentationSpecificFile;
import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.PinBreakBulk;
import com.spia.businessportal.common.entities.PinContainerized;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.services.notification.CreateNotificationRequest;
import com.spia.servicies.entities.notification.Notification;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 */
public class NotificationMdwBOImpl<T> extends GenericMdwBOImpl<T> implements NotificationMdwBO<T> {

    private static final Logger LOG = LoggerFactory.getLogger(NotificationMdwBOImpl.class);
    @Autowired
    private RestTemplate notificationRestTemplate;

    @Override
    public void notificate(Pin pin, Collection<PinContainerized> pinContainerized, String type,
            List<Map<String, String>> messages) throws BusinessException {
        CreateNotificationRequest request = new CreateNotificationRequest();
        Notification notification = this.createNotification(pin, pinContainerized, type, pin.getTruckingCompanyLDAP());
        request.setNotification(notification);
        request.setUser(pin.getTruckingCompanyLDAP());
        request.setMessages(messages);
        
        this.getNotificationRestTemplate().postForObject(getServiceUrl() + "/save-all", request, Notification[].class);
    }

    @Override
    public void notificatePin(Pin pin, Collection<PinContainerized> pinContainerized, String type,
            List<Map<String, String>> messages) throws BusinessException {
        CreateNotificationRequest request = new CreateNotificationRequest();
        Notification notification = this.createNotification(pin, pinContainerized, type, pin.getTruckingCompanyLDAP());
        request.setNotification(notification);
        request.setUser(pin.getCreatedByCompanyLDAP());
        request.setMessages(messages);
        
        this.getNotificationRestTemplate().postForObject(getServiceUrl() + "/save-and-send-notification", request,
                Notification[].class);
    }

    @Override
    public void notificateAppointment(TruckVisit truckVisit, String type, List<Map<String, String>> messages)
            throws BusinessException {
        CreateNotificationRequest request = new CreateNotificationRequest();
        Notification notification = this.createAppointmentNotification(truckVisit, type);
        request.setNotification(notification);
        request.setUser(truckVisit.getCompanyIdLdap());
        request.setMessages(messages);
     
        this.getNotificationRestTemplate().postForObject(getServiceUrl() + "/create-appointment-notification", request,
                Notification[].class);
    }

    @Override
    public void notificate(Documentation doc, List<DocumentationSpecificFile> updatedRevisions)
            throws BusinessException {
        Map<String, List<Notification>> notificationMap = new HashMap<String, List<Notification>>();
        for (DocumentationSpecificFile d : updatedRevisions) {
            Notification notification = new Notification();
            notification.setData(doc.getNbr() + " -- " + d.getFileName());
            String content = "";
            if (d.getRejectReason() != null) {
                content += d.getRejectReason() + "</br>";
            }
            for (DocumentationFile documentationFile : doc.getFiles()) {
                for (DocumentationSpecificFile documentationSpecificFile : documentationFile.getFiles()) {
                    if (documentationSpecificFile.isRejected() && documentationSpecificFile.getRejectReason() != null) {
                        content += documentationSpecificFile.getRejectReason() + "</br>";
                    }
                }
            }
            notification.setContent(content);
            notification.setDate(new Date());
            notification.setDeleted(false);
            notification.setTitle("Notificación actualizada");
            notification.setType("DOCUMENTATION_UPDATED");
            notification.setUser(d.getCreatedBy());
            notification.setWatched(false);
            if (notificationMap.containsKey(d.getCreatedBy())) {
                List<Notification> notificationList = notificationMap.get(d.getCreatedBy());
                notificationList.add(notification);
                notificationMap.put(d.getCreatedBy(), notificationList);
            } else {
                List<Notification> notificationList = new ArrayList<Notification>();
                notificationList.add(notification);
                notificationMap.put(d.getCreatedBy(), notificationList);
            }
        }
        for (String user : notificationMap.keySet()) {
            for (Notification n : notificationMap.get(user)) {
                CreateNotificationRequest request = new CreateNotificationRequest();
                request.setUser(user);
                request.setNotification(n);
                this.getNotificationRestTemplate().postForObject(getServiceUrl() + "/save-all", request,
                        Notification[].class);
            }
        }
    }

    @Override
    public void notificate(String user, List<Map<String, String>> messages) throws BusinessException {
        CreateNotificationRequest request = new CreateNotificationRequest();
        request.setUser(user);
        request.setMessages(messages);
        this.getNotificationRestTemplate().postForObject(getServiceUrl() + "/save-all", request, Notification[].class);
    }

    public void notificate(Documentation doc, String title, String body, String observation, boolean notApproved,
            Set<String> userSet, List<Map<String, String>> messages) throws BusinessException {
        Notification notification = new Notification();
        notification.setData("documentation :" + doc.getId());
        notification.setTitle(title);
        String content = "";
        if (observation != null) {
            content += "Motivo general: " + observation + "\n";
        }
        for (DocumentationFile documentationFile : doc.getFiles()) {
            for (DocumentationSpecificFile documentationSpecificFile : documentationFile.getFiles()) {
                if (documentationSpecificFile.isRejected() && documentationSpecificFile.getRejectReason() != null) {
                    content += "Documento " + documentationSpecificFile.getFileName() + ": "
                            + documentationSpecificFile.getRejectReason() + "\n";
                }
            }
        }
        notification.setContent(content);
        notification.setType("DOCUMENTATION_UPDATED");
        notification.setDate(new Date());
        notification.setDeleted(false);
        notification.setWatched(false);

        for (String user : userSet) {
            notification.setUser(user);
            CreateNotificationRequest request = new CreateNotificationRequest();
            request.setUser(user);
            request.setNotification(notification);
            request.setMessages(messages);
            try {
                this.getNotificationRestTemplate().postForObject(getServiceUrl() + "/save-all", request,
                        Notification[].class);
            } catch (Exception e) {
                Log.error("Servicio de notificaciones no disponible");
            }
        }
    }

    @Override
    public List<Notification> getUserNotifications(String userName) throws BusinessException {
        return Arrays.asList(this.getNotificationRestTemplate().getForObject(
                getServiceUrl() + "/actives/{user}/{page}/{amount}", Notification[].class, userName, "1", "0"));
    }

    @Override
    public Boolean removeNotification(Long notificationId) throws BusinessException {
        Boolean eliminated = new Boolean(true);
        try {
            this.getNotificationRestTemplate().delete(getServiceUrl() + "/{notificationId}", notificationId.toString());
        } catch (Exception e) {
            Log.error(e.getMessage(), e);
            eliminated = new Boolean(false);
        }
        return eliminated;
    }

    @Override
    public Boolean watchAll(List<Notification> notifications) {
        Boolean watched = new Boolean(true);
        try {
            this.getNotificationRestTemplate().put(getServiceUrl() + "/watch-all", notifications);
        } catch (Exception e) {
            Log.error(e.getMessage(), e);
            watched = new Boolean(false);
        }
        return watched;
    }

    /**
     * Crea el objeto notificación del pin
     * 
     * @param pin
     *            el pin del cuál se creará una notifiación
     * @param pinContainerized
     *            los units del pin sobre los cuáles se va a notificar.
     * @param type
     *            el tipo de notificacion (eliminado)
     * @param user
     *            el usuario al cuál se quiere notificar
     * @return
     * @throws BusinessException
     */
    @Override
    public Notification createNotification(Pin pin, Collection<PinContainerized> pinContainerized, String type,
            String user) throws BusinessException {
        Notification notification = new Notification();
        notification.setData(pin.getPinNbr());
        notification.setDate(new Date());
        String content = "";
        if (type.equals("PIN_REMOVED")) {
            if (pinContainerized != null && !pinContainerized.isEmpty()) {
                String units = "";
                Iterator<PinContainerized> i = pinContainerized.iterator();
                while (i.hasNext()) {
                    PinContainerized pc = i.next();
                    if (!"".equals(units)) {
                        units += ", ";
                    }
                    units += pc.getUnitNbr();
                }
                content = "Se han cancelado los siguientes contenedores del pin " + pin.getPinNbr() + " : ";
                content += units;
            }
            if (!pin.getPinBreakBulk().isEmpty()) {
                int quantity = 0;
                for (PinBreakBulk bb : pin.getPinBreakBulk()) {
                    quantity += bb.getQuantity();
                }
                content = "Se han cancelado " + quantity + " unidades del pin " + pin.getPinNbr();
            }
            notification.setTitle("Se ha cancelado un pin.");
            notification.setContent(content);
            notification.setType(type);
            notification.setWatched(false);
        } else if (type.equals("PIN_CREATE")) {
            if (pinContainerized != null && !pinContainerized.isEmpty()) {
                String units = "";
                Iterator<PinContainerized> i = pinContainerized.iterator();
                while (i.hasNext()) {
                    PinContainerized pc = i.next();
                    if (!"".equals(units)) {
                        units += ", ";
                    }
                    units += pc.getUnitNbr();
                }
                content = "Se agregaron los siguientes contenedores al pin " + pin.getPinNbr() + " : ";
                content += units;
            }
            if (!pin.getPinBreakBulk().isEmpty()) {
                int quantity = 0;
                for (PinBreakBulk bb : pin.getPinBreakBulk()) {
                    quantity += bb.getQuantity();
                }
                content = "Se han agregado " + quantity + " unidades al pin " + pin.getPinNbr();
            }
            notification.setTitle("Se ha creado un pin.");
            notification.setContent(content);
            notification.setType(type);
            notification.setWatched(false);
        }
        return notification;
    }

    /**
     * Crea una lista de notificaciones de acuerdo a los usuarios ldp encontrados (una notificación por cada usuario).
     * 
     * @param pin
     *            el pin del cuál se creará una notifiación
     * @param pinContainerized
     *            los units del pin sobre los cuáles se va a notificar.
     * @param type
     *            el tipo de notificacion (eliminado)
     * @return {@link Notification}
     * @throws BusinessException
     */
    private List<Notification> createNotifications(Pin pin, Collection<PinContainerized> pinContainerized, String type)
            throws BusinessException {
        List<Notification> notifications = null;
        return notifications;
    }

    public RestTemplate getNotificationRestTemplate() {
        return notificationRestTemplate;
    }

    public void setNotificationRestTemplate(RestTemplate notificationRestTemplate) {
        this.notificationRestTemplate = notificationRestTemplate;
    }

    /**
     * Crea el objeto notificación del pin
     * 
     * @param pin
     *            el pin del cuál se creará una notifiación
     * @param pinContainerized
     *            los units del pin sobre los cuáles se va a notificar.
     * @param type
     *            el tipo de notificacion (eliminado)
     * @param user
     *            el usuario al cuál se quiere notificar
     * @return
     * @throws BusinessException
     */
    @Override
    public Notification createAppointmentNotification(TruckVisit truckVisit, String type) throws BusinessException {
        Notification notification = new Notification();
        notification.setData(truckVisit.getTruckVisitNbr());
        notification.setDate(new Date());
        String content = "";
        if (type.equals("APPOINTMENT_CREATE")) {

            content = "Se creó exitosamente una nueva cita, con el número de  identificación: "
                    + truckVisit.getTruckVisitNbr();

            notification.setTitle("Se creo una nueva cita.");
            notification.setContent(content);
            notification.setType(type);
            notification.setWatched(false);
        }
        return notification;
    }

}
