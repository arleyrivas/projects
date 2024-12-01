package com.spia.businessportal.backend.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import com.spia.businessportal.common.entities.User;

@Component
public class AuthUserDetailsService implements UserDetailsService {
	
	 @Override
	    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	        System.out.println("loadUserByUsername called !!");
	        UsuarioLoginDTO user = new UsuarioLoginDTO();
	        user.setNombres(username);

	        return null;
	    }
}
