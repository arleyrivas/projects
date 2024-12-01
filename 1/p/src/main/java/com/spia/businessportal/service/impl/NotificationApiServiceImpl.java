/*
 * Assert Solutions
 * Bogota - Colombia
 * http://www.assertsolutions.com
 * Author: Elvis Fontalvo
 * Date:  26 de may. de 2021 - 10:26:03 p.m.
 */
package com.spia.businessportal.service.impl;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.common.entities.Notification;
import com.spia.businessportal.service.NotificationApiService;

import ar.com.fluxit.framework.business.generic.GenericService;
import ar.com.fluxit.framework.common.exception.BusinessException;

public class NotificationApiServiceImpl implements NotificationApiService {

	private static final Log LOG = LogFactory.getLog(NotificationApiServiceImpl.class);

	@Autowired
	private GenericService<Notification> notificationApiBO;
	@Autowired
	private SessionFactory sessionFactory;

	private String urlService;

	@Override
	public void processQueue() {
		LOG.info(":::::::::::::::::::::::::::::BORRAR NOTIFICACIONES::::::::::::::::::::::::::::::::::");
		Session session = sessionFactory.openSession();
		List<Notification> notifications = null;
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.MONTH, -1);
		Date monthAgo = cal.getTime();
		try {
			String queryString = "FROM Notification ";
			String where = "WHERE date < :monthAgo";
			queryString = queryString + where;
			Query query = session.createQuery(queryString);
			query.setDate("monthAgo", monthAgo);
			notifications = query.list();
		} catch (Exception e) {
			LOG.error("Se produjo un error al recuperar las notificaciones", e);
		} finally {
			session.close();
		}
		if (notifications != null && notifications.size() > 0) {
			for (Notification notification : notifications) {
				try {
					this.getNotificationApiBO().delete(notification);
				} catch (BusinessException e) {
					LOG.error("Se produjo un error al actualizar las noticaciones con más de un mes de creación", e);
				}
			}
		}

	}

	public GenericService<Notification> getNotificationApiBO() {
		return notificationApiBO;
	}

	public void setNotificationApiBO(GenericService<Notification> notificationApiBO) {
		this.notificationApiBO = notificationApiBO;
	}

}
