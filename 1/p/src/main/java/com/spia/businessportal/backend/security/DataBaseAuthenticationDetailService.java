/**
 * 
 */
package com.spia.businessportal.backend.security;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.security.user.FluxitSecurityUser;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/**
 * @author diego
 *
 */
public class DataBaseAuthenticationDetailService implements UserDetailsService {

	private static final Log LOG = LogFactory.getLog(DataBaseAuthenticationDetailService.class);

	private UserBO userBO;
	
	
	/**
	 * 
	 */
	public DataBaseAuthenticationDetailService() {
		super();
	}

	@Override
	public UserDetails loadUserByUsername(String username) {
		FluxitSecurityUser userWrapper = null;
		try {
			UsuarioLoginDTO user = this.getUserBO().getByUsername(username);
			if(user != null){
				userWrapper = new FluxitSecurityUser(user, null);
			}
		} catch (BusinessException e){
			LOG.error("Error en el servicio de busqueda de usuario", e);
		}		 
		return userWrapper;
	}


	/**
	 * @return the userService
	 */
	public UserBO getUserBO()
	{
		return userBO;
	}

	/**
	 * @param userBO the UserBO to set
	 */
	public void setUserBO(UserBO userBO)
	{
		this.userBO = userBO;
	}

}
