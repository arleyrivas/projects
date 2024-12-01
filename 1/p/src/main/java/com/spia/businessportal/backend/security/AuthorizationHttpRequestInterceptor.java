package com.spia.businessportal.backend.security;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

import org.springframework.http.HttpRequest;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.http.client.support.HttpRequestWrapper;
import org.springframework.security.crypto.codec.Base64;

/**
 * Interceptor de seguridad de la aplicación.
 *
 */
public class AuthorizationHttpRequestInterceptor implements ClientHttpRequestInterceptor {
	
	private String username;
		
	private String password;
	
	private String authorization;
	
	
	
    /**
	 * 
	 */
	public AuthorizationHttpRequestInterceptor() {
		super();
	}

	@Override
    public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution) throws IOException {   	
        HttpRequest wrapper = new HttpRequestWrapper(request);      
        wrapper.getHeaders().set("Authorization", getAuthorization());
        wrapper.getHeaders().setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        wrapper.getHeaders().setContentType(MediaType.APPLICATION_JSON);        
        return execution.execute(wrapper, body);
    }
  
	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAuthorization() {
		if (this.authorization == null) {
			String auth = this.username + ":" + this.password;
	        byte[] encodedAuth = Base64.encode(auth.getBytes(StandardCharsets.UTF_8));
	        this.authorization = "Basic " + new String(encodedAuth);
		}
		return authorization;
	}
	
}