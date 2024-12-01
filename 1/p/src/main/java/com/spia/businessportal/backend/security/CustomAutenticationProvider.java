package com.spia.businessportal.backend.security;

import java.security.Principal;
import java.util.Arrays;
import java.util.List;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.authentication.jaas.JaasGrantedAuthority;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.spia.businessportal.common.entities.User;

public class CustomAutenticationProvider extends DaoAuthenticationProvider implements AuthenticationProvider {

	private AuthenticationProvider delegate;
	
	public CustomAutenticationProvider(AuthenticationProvider delegate) {
		this.delegate = delegate;
	}
	
	@Override
	public Authentication authenticate(Authentication authentication) {
		Authentication a = delegate.authenticate(authentication);
		
		if(a.isAuthenticated()) {
			a = super.authenticate(a);
		} else {
			throw new BadCredentialsException(messages.getMessage(
                    "AbstractUserDetailsAuthenticationProvider.badCredentials",
                    "Bad credentials"));
		}
		return a;
	}
	
	class UserPrincipal implements Principal {

		private String name;
		
		public UserPrincipal(String name) {
			super();
			this.name = name;
		}

		@Override
		public String getName() {
			return this.name;
		}
		
	}
	
	private List<GrantedAuthority> loadRoles(String name){
		GrantedAuthority grantedAuthority = new JaasGrantedAuthority(name, new UserPrincipal(name));
		return Arrays.asList(grantedAuthority);
	}
	
	@Override
	public boolean supports(Class<?> authentication) {
        return delegate.supports(authentication);
    }
	
	@Override
    protected void additionalAuthenticationChecks(UserDetails userDetails,
            UsernamePasswordAuthenticationToken authentication)
                    throws AuthenticationException {


        if(!authentication.isAuthenticated())
            throw new BadCredentialsException(messages.getMessage(
                    "AbstractUserDetailsAuthenticationProvider.badCredentials",
                    "Bad credentials"));


    }
}
