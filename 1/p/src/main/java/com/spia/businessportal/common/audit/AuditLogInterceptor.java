/**
 * 
 */
package com.spia.businessportal.common.audit;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.HibernateException;
import org.hibernate.CallbackException;
import org.hibernate.EmptyInterceptor;
import org.hibernate.SessionFactory;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import org.hibernate.type.Type;
import org.springframework.beans.factory.annotation.Autowired;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.spring.context.ContextHolder;

import com.google.gson.Gson;
import com.spia.businessportal.backend.bo.SecurityEsbBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.AuditLog;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.AuditLogRegisterRequestDTO;
import com.spia.businessportal.common.utils.AuditLogRegisterUtil;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.common.utils.PrivilegesUtil;
import com.spia.businessportal.constant.BusinessPortalConstant;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.businessportal.backend.bo.impl.UserBOJAASImpl;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/**
 * @author darian Interceptor para auditar los accesos a base de datos
 */
public class AuditLogInterceptor extends EmptyInterceptor {

//	@Autowired
	SessionFactory sessionFactory;

	private SecurityEsbBO<SecurityEsbResponse> securityEsbBO;

	private static final Log LOG = LogFactory.getLog(AuditLogInterceptor.class);

	private Set<Object> inserts = new HashSet<Object>();
	private Set<Object> updates = new HashSet<Object>();
	private Set<Object> deletes = new HashSet<Object>();

	@Autowired
	private UserBO userBO;

	@Override
	public boolean onSave(Object entity, Serializable id, Object[] state, String[] propertyNames, Type[] types)
			throws CallbackException {

		if (entity instanceof IAuditLog) {
			inserts.add(entity);
		}
		return false;

	}

	@Override
	public boolean onFlushDirty(Object entity, Serializable id, Object[] currentState, Object[] previousState,
			String[] propertyNames, Type[] types) throws CallbackException {

		if (entity instanceof IAuditLog) {
			updates.add(entity);
		}
		return false;

	}

	@Override
	public void onDelete(Object entity, Serializable id, Object[] state, String[] propertyNames, Type[] types) {

		if (entity instanceof IAuditLog) {
			deletes.add(entity);
		}
	}

	// called before commit into database
	public void preFlush(Iterator iterator) {
	}

	// called after committed into database
	@Override
	public void postFlush(Iterator iterator) {
		/*
		LOG.info("Size inserts: " + inserts.size() + ", Size updates: " + updates.size() + ", Size deletes: " + deletes.size());
		try {
			UserBOJAASImpl userBOJAASImpl = new UserBOJAASImpl();

			UsuarioLoginDTO user;

			for (Iterator<Object> it = inserts.iterator(); it.hasNext();) {
				IAuditLog entity = (IAuditLog) it.next();
				user = userBOJAASImpl.getCurrentUser();
				AuditLogUtil.logIt("SAVE", entity, user, sessionFactory);
				this.saveAudit("SAVE", entity, user, sessionFactory);
			}

			for (Iterator<Object> it = updates.iterator(); it.hasNext();) {
				IAuditLog entity = (IAuditLog) it.next();
				user = userBOJAASImpl.getCurrentUser();
				AuditLogUtil.logIt("UPDATE", entity, user, sessionFactory);
				this.saveAudit("UPDATE", entity, user, sessionFactory);
			}

			for (Iterator<Object> it = deletes.iterator(); it.hasNext();) {
				IAuditLog entity = (IAuditLog) it.next();
				user = userBOJAASImpl.getCurrentUser();
				AuditLogUtil.logIt("DELETE", entity, user, sessionFactory);
				this.saveAudit("DELETE", entity, user, sessionFactory);
			}
		} catch (BusinessException e) {
			LOG.info("Ocurrio un error al registrar la auditoria" + e);
		} catch (HibernateException e) {
			LOG.info("Ocurrio un error al registrar la auditoria" + e);
		} finally {
			inserts.clear();
			updates.clear();
			deletes.clear();
		}
		*/
	}

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public UserBO getUserBO() {
		return userBO;
	}

	public void setUserBO(UserBO userBO) {
		this.userBO = userBO;
	}

	public SecurityEsbBO<SecurityEsbResponse> getSecurityEsbBO() {
		return securityEsbBO;
	}

	public void setSecurityEsbBO(SecurityEsbBO<SecurityEsbResponse> securityEsbBO) {
		this.securityEsbBO = securityEsbBO;
	}

	public void saveAudit(String action, IAuditLog entity, User user, SessionFactory sessionFactory)
			throws BusinessException {
		UserBOJAASImpl userBOJAASImpl = new UserBOJAASImpl();

		UsuarioLoginDTO currentUser = userBOJAASImpl.getCurrentUser();

		String username = user != null && user.getUserName() != null ? user.getUserName() : null;
		AuditLog auditRecord = new AuditLog(action, entity.getLogDetail(), new Date(), entity.getId(),
				entity.getClassName(), username);
		AuditLogRegisterRequestDTO auditLogRegisterRequest = new AuditLogRegisterRequestDTO();
		
		if(currentUser != null && currentUser.getUserName() !=null)
		{
			auditLogRegisterRequest.setUsername(currentUser.getUserName());
		}
		else
		{
			auditLogRegisterRequest.setUsername("Payu Response");
		}
		
		auditLogRegisterRequest.setApp("portal");
		
		Gson gson = new Gson();
		
        String[] ary = auditRecord.getDetail().split("\n");
        HashMap<String, String> holder = new HashMap();
        for(String object:ary)
        {
        	String[] parts = object.split(":",2);
        	holder.put(parts[0],parts[1]);
        }
        String jsonInString = gson.toJson(holder);
        
		String bodyRequestBase64 = BusinessPortalConstant.EMPTY_STR;

		if (!jsonInString.equals(BusinessPortalConstant.EMPTY_STR)) {
			bodyRequestBase64 = EncoderDecoder.encodeBase64(jsonInString);
		}

		String bodyResponseBase64 = BusinessPortalConstant.EMPTY_STR;
		if (!"".equals(BusinessPortalConstant.EMPTY_STR)) {
			bodyResponseBase64 = EncoderDecoder.encodeBase64("");
		}

		auditLogRegisterRequest.setIp(AuditLogRegisterUtil.getClienIp());
		auditLogRegisterRequest.setMethod("POST");
		if(currentUser != null && currentUser.getUserName() !=null)
		{
			auditLogRegisterRequest.setCompanyId(currentUser.getEmpresa().getId());
		}
		else
		{
			auditLogRegisterRequest.setCompanyId("Payu Response");
		}
		
		if(PrivilegesUtil.getPrivilegeId() == null || PrivilegesUtil.getPrivilegeId() == "")
		{
			auditLogRegisterRequest.setPrivilegeId(PrivilegesUtil.getCurrentPrivilegeSession());
		}
		else
		{
			auditLogRegisterRequest.setPrivilegeId(PrivilegesUtil.getPrivilegeId());
		}
		//auditLogRegisterRequest.setPrivilegeId(PrivilegesUtil.getPrivilegeId());
		auditLogRegisterRequest.setUrl("/");
		String date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SSS").format(auditRecord.getCreatedAt());
		auditLogRegisterRequest.setCreatedAt(date);
		
		
		auditLogRegisterRequest.setRequestPayload(bodyRequestBase64);
		auditLogRegisterRequest.setResponsePayload(bodyResponseBase64);

		SecurityEsbResponse rep = securityEsbBO.auditLogRegister(auditLogRegisterRequest);
	}

}
