/**
 * 
 */
package com.spia.businessportal.backend.security;

import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.security.user.FluxitSecurityUser;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/**
 * @author diego
 *
 */
public class SPIADomainAuthenticationDetailService implements UserDetailsService {

    private static final Log LOG = LogFactory.getLog(SPIADomainAuthenticationDetailService.class);

    private UserBO userBO;

    /**
     * 
     */
    public SPIADomainAuthenticationDetailService() {
        super();
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        FluxitSecurityUser userWrapper = null;
        UsuarioLoginDTO user;
        try {
            user = this.getUserBO().getByUsername(username);
            LOG.info("2.Aqui Guarda el usuario logueado: " + user.getUserName());
            // Persisto el usuario en la sesión
            ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
                    .currentRequestAttributes();
            HttpSession session = servletRequestAttributes.getRequest().getSession();
            session.setAttribute("user", user);

            if (user != null) {
                userWrapper = new FluxitSecurityUser(user, null);
            }
        } catch (BusinessException e) {
            LOG.error(e.getStackTrace());
        }
        return userWrapper;
    }

    /**
     * @return the userService
     */
    public UserBO getUserBO() {
        return userBO;
    }

    /**
     * @param userBO
     *            the UserBO to set
     */
    public void setUserBO(UserBO userBO) {
        this.userBO = userBO;
    }

}
