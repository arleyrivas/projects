/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de abr. de 2016 - 2:25:33 p. m.
 */
package com.spia.businessportal.backend.bo.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.backend.bo.NotificationBO;
import com.spia.businessportal.common.filters.NotificationFilter;

import ar.com.fluxit.framework.business.generic.GenericService;
import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;
import ar.com.fluxit.framework.dao.generic.GenericDAO;

/**
 * @author leandro
 *
 */
public class NotificationBOImpl <FailedNotification> implements NotificationBO<FailedNotification>
	{

	private GenericDAO<FailedNotification> dao;
	
	
	@Override
	public List<FailedNotification> getFailedNotifications(String userName) throws BusinessException {
		
		NotificationFilter f = new NotificationFilter();
		f.setUser(userName);
		return this.getDao().search(f, new Page(1,0)).getResult();
	}
	
	@Override
	public void deleteFailedNotifications(List<FailedNotification> notifications) throws BusinessException {
		
		for (FailedNotification notification : notifications) {
			getDao().delete(notification);
		}
	}

	@Override
	public void saveFailedNotifications(List<FailedNotification> notifications) throws BusinessException {

		for (FailedNotification notification : notifications) {
			getDao().saveNew(notification);
		}
		
	}

	public GenericDAO<FailedNotification> getDao() {
		return dao;
	}

	public void setDao(GenericDAO<FailedNotification> dao) {
		this.dao = dao;
	}

	@Override
	public FailedNotification getById(Long id) throws BusinessException {
		return this.getDao().getById(id);
	}

	





	
}
