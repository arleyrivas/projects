/*
 * Assert Solutions
 * Bogota - Colombia
 * http://www.assertsolutions.com
 * Author: Elvis Fontalvo
 * Date:  26 de may. de 2021 - 10:26:03 p.m.
 */
package com.spia.businessportal.backend.bo.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.spia.businessportal.backend.bo.NotificationApiBO;
import com.spia.businessportal.common.entities.Notification;

import ar.com.fluxit.framework.business.generic.impl.GenericServiceImpl;

public class NotificationApiBOImpl extends GenericServiceImpl<Notification> implements NotificationApiBO {
	private static final Log LOG = LogFactory.getLog(NotificationApiBOImpl.class);

}
