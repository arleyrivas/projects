package com.spia.businessportal.common.utils;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.spia.businessportal.backend.bo.SecurityEsbBO;
import com.spia.services.security.esb.entities.SecurityEsbResponse;

public class NotificationUtils {

	@Autowired
	private SecurityEsbBO<SecurityEsbResponse> securityEsbBO;

	private static final Log LOG = LogFactory.getLog(NotificationUtils.class);

	/**
	 * Valida si un privilegio es notificable
	 * 
	 * @param privilegeId
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-28
	 */
	public static Boolean isPrivilegeNotificable(String privilegeId) {

		List<String> privilegiosNotificacionEmpresa = NotificationUtils.getPrivilegeNotificable();

		for (String notificablePrivilege : privilegiosNotificacionEmpresa) {
			if (notificablePrivilege.equalsIgnoreCase(privilegeId)) {
				return Boolean.TRUE;
			}
		}

		return Boolean.FALSE;
	}

	/**
	 * Recupera de la session los privilegios notificables por empresa
	 * 
	 * @return {@link List<String>} Listado de los privilegios
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-28
	 */
	public static List<String> getPrivilegeNotificable() {
		List<String> privilegiosNotificacionEmpresa = new ArrayList<>();

		HttpSession session = null;
		if (RequestContextHolder.getRequestAttributes() != null) {
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			session = servletRequestAttributes.getRequest().getSession();
			try {
				privilegiosNotificacionEmpresa = (List<String>) (List<?>) session
						.getAttribute("privilegiosNotificacionEmpresa");
			} catch (Exception e) {
				LOG.error("Error al consultar los privilegios notificables por empresa");
			}
		}

		return privilegiosNotificacionEmpresa;
	}
	
	/**
	 * Valida si un privilegio es notificable
	 * 
	 * @param privilegeId
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Elvis Fontalvo
	 * @since 2019-08-28
	 */
	public static Boolean isPrivilegeNotificableShipper(String privilegeId) {

		List<String> privilegiosNotificacionEmpresa = NotificationUtils.getPrivilegeNotificableShipper();

		for (String notificablePrivilege : privilegiosNotificacionEmpresa) {
			if (notificablePrivilege.equalsIgnoreCase(privilegeId)) {
				return Boolean.TRUE;
			}
		}

		return Boolean.FALSE;
	}
	
	/**
	 * Recupera de la session los privilegios notificables por empresa
	 * 
	 * @return {@link List<String>} Listado de los privilegios
	 * @company Assert Solutions S.A.S.
	 * @author Elvis Fontalvo
	 * @since 2019-08-28
	 */
	public static List<String> getPrivilegeNotificableShipper() {
		List<String> privilegiosNotificacionEmpresa = new ArrayList<>();

		HttpSession session = null;
		if (RequestContextHolder.getRequestAttributes() != null) {
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			session = servletRequestAttributes.getRequest().getSession();
			try {
				privilegiosNotificacionEmpresa = (List<String>) (List<?>) session
						.getAttribute("privilegiosNotificacionCliente");
			} catch (Exception e) {
				LOG.error("Error al consultar los privilegios notificables por empresa");
			}
		}

		return privilegiosNotificacionEmpresa;
	}

}
