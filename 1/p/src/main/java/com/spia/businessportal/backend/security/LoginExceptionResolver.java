package com.spia.businessportal.backend.security;

import javax.security.auth.login.LoginException;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;

public class LoginExceptionResolver implements org.springframework.security.authentication.jaas.LoginExceptionResolver {

    private static final Logger LOG = LogManager.getLogger(LoginExceptionResolver.class);

    @Override
    public AuthenticationException resolveException(LoginException paramLoginException) {

        String msgError;

        if (paramLoginException.getCause() != null) {
            msgError = paramLoginException.getCause().getMessage();
        } else {
            msgError = paramLoginException.getMessage();
        }

        LOG.error(paramLoginException.getStackTrace());

        return new AuthenticationServiceException("AUTHENTICATION ERROR: " + msgError, paramLoginException.getCause());
    }

}
