package com.spia.businessportal.backend.bo.impl;

import java.util.Date;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.backend.bo.CustomerRequestBO;
import com.spia.businessportal.common.entities.CustomerRequest;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.business.generic.impl.GenericServiceImpl;

public class CustomerRequestBOImpl extends GenericServiceImpl<CustomerRequest> implements CustomerRequestBO {

	private static final Log LOG = LogFactory.getLog(CustomerRequestBOImpl.class);

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public void updateCustomerRequest(Long id, String approvalUser, Date approvedAt) throws BusinessException {
		Session session = sessionFactory.openSession();
		try {
			Query query = session.createQuery("update CustomerRequest set approvalUser = :approvalUser, approvedAt = :approvedAt where id = :id");
			query.setParameter("id", id);
			query.setParameter("approvalUser", approvalUser);
			query.setParameter("approvedAt", approvedAt);
			query.executeUpdate();
		} catch (Exception e) {
			LOG.error("Se produjo un error al actualizar", e);
		} finally {
			session.close();
		}

	}
		
}
		