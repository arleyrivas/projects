/**
 * 
 */
package com.spia.businessportal.common.audit;

import java.util.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.spia.businessportal.common.entities.AuditLog;
import com.spia.businessportal.common.entities.User;

/**
 * @author darian Ejecutor de log de auditoria
 */
public class AuditLogUtil {

	public static AuditLog logIt(String action, IAuditLog entity, User user, SessionFactory sessionFactory) {

		Session session = null;
		Transaction tx = null;

		try {
			session = sessionFactory.openSession();
			tx = session.beginTransaction();
			String username = user != null && user.getUserName() != null ? user.getUserName() : null;
			AuditLog auditRecord = new AuditLog(action, entity.getLogDetail(), new Date(), entity.getId(),
					entity.getClassName(), username);
			// TODO ver como evitar el lock que se produce al auditar una operación sobre la
			// tabla de user

			session.save(auditRecord);
			tx.commit();

			return auditRecord;
		} finally {
			if (session != null) {
				session.close();
			}

		}
	}
}
