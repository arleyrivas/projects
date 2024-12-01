package com.spia.businessportal.common.utils;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.switchuser.SwitchUserGrantedAuthority;

import java.util.Collection;

/**
 * Clase utilitaria para la impersonalización
 * 
 * @author leandro
 *
 */
public class SecurityUtils {

    public static boolean isImpersonating() {
        return (getImpersonator() != null);
    }

    public static UserDetails getImpersonator() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        if (securityContext == null) {
            return null;
        }

        Authentication authWorkFor = securityContext.getAuthentication();
        if (authWorkFor == null) {
            return null;
        }

        Authentication authActual = getSourceAuthentication(authWorkFor);
        if (authActual == null) {
            return null;
        }

        return (UserDetails) authWorkFor.getPrincipal();
    }

    private static Authentication getSourceAuthentication(Authentication current) {
        Authentication original = null;

        // iterate over granted authorities and find the 'switch user' authority
        Collection<? extends GrantedAuthority> authorities = current.getAuthorities();

        for (GrantedAuthority auth : authorities) {
            // check for switch user type of authority
            if (auth instanceof SwitchUserGrantedAuthority) {
                original = ((SwitchUserGrantedAuthority) auth).getSource();
            }
        }

        return original;
    }

}
