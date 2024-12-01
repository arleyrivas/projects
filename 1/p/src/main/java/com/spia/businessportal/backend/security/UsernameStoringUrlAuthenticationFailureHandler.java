package com.spia.businessportal.backend.security;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

/**
 * Interceptor de seguridad de la aplicación.
 *
 */
public class UsernameStoringUrlAuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler
{
    @Override
    public void onAuthenticationFailure (HttpServletRequest request, HttpServletResponse response,
            AuthenticationException exception) throws IOException, ServletException
    {
        request.getSession (true).setAttribute ("SPRING_SECURITY_LAST_USERNAME", request.getParameter ("j_u"));
        super.onAuthenticationFailure (request, response, exception);
    }
}