package com.spia.businessportal.common.utils;

import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.businessportal.common.entities.User;

public class UserUtils {

	private static final Log LOG = LogFactory.getLog(UserUtils.class);

	/**
	 * Retorna el objeto actual del Usuario
	 * 
	 * @return {@link User}
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-21
	 */
	public static User getCurrentUser() {

		User currentUser = new User();

		HttpSession session = PrivilegesUtil.getCurrentSession();

		if (session != null) {
			currentUser = (User) session.getAttribute("user");
			if (currentUser != null) {
				return currentUser;
			}

		} else {
			LOG.error("Ocurrio un error consultado lod datos de session.");
		}
		return currentUser;

	}

}
