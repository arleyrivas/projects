/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  3 de mar. de 2016 - 11:24:53 a. m.
 */
package com.spia.businessportal.backend.security;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.common.entities.ValidateReCaptchaResponse;
import com.spia.businessportal.common.utils.LoginAttemptsSingleton;

/**
 * @author leandro
 *
 */
public class CaptchaFilter extends UsernamePasswordAuthenticationFilter {

	@Autowired
	private RestTemplate restTemplate;
	private static final String POST = "POST";
	private static final Logger LOG = LogManager.getLogger(UsernamePasswordAuthenticationFilter.class);

	@Value("${recaptcha.url}")
	private String recaptchaUrl;

	@Value("${recaptcha.secret-key}")
	private String recaptchaSecretKey;

	@Value("${recaptcha.show-captcha-attempts}")
	private int showCaptchaAttempts;

	@Value("${cookie.httpOnly}")
	private boolean httpOnly;

	@Value("${cookie.secure}")
	private boolean secure;

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		request.getParameterMap();
		request.getParameterNames();

		return super.attemptAuthentication(request, response);
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		final HttpServletRequest request = (HttpServletRequest) req;
		final HttpServletResponse response = (HttpServletResponse) res;
		Cookie[] allCookies = request.getCookies();
		String ipAddress = request.getRemoteAddr();
		String userName = null;
		String password = null;
		CsrfToken csrf = (CsrfToken) request.getAttribute(CsrfToken.class.getName());

		String requestURI = request.getRequestURI();

		if (requestURI.contains("logout")) {
			request.getSession(true);
		}

		if (csrf != null) {
			Cookie cookie = new Cookie("XSRF-TOKEN", csrf.getToken());
			cookie.setPath("/");
			cookie.setSecure(secure);
			//cookie.setHttpOnly(httpOnly);
			response.addCookie(cookie);
		}
		/*if (allCookies != null) {
			Cookie session = Arrays.stream(allCookies).filter(x -> x.getName().equals("JSESSIONID")).findFirst()
					.orElse(null);

			if (session != null) {
				session.setHttpOnly(httpOnly);
				session.setSecure(secure);
				response.addCookie(session);
			}
		}*/
		/*
		 * Cookie[] allCookies = request.getCookies(); if (allCookies != null) {
		 * for(Cookie co : allCookies){ if(co.getName().equals("JSESSIONID")){
		 * co.setHttpOnly(httpOnly); co.setSecure(secure); response.addCookie(co);
		 * break; } } }
		 */

		if (request.getRequestURI().indexOf("login") != -1 && request.getMethod().equals(POST)) {
			userName = request.getParameter("j_u");
			LOG.info("1.LoginAttemptsSingleton: " + LoginAttemptsSingleton.getInstance().getLoginAttepmts());
			if (LoginAttemptsSingleton.getInstance().getLoginAttepmts().containsKey(ipAddress)
					&& LoginAttemptsSingleton.getInstance().getLoginAttepmts().get(ipAddress).containsKey(userName)
					&& LoginAttemptsSingleton.getInstance().getLoginAttepmts().get(ipAddress).get(userName) >= showCaptchaAttempts) {
				// Si me estoy logueando, valido el captcha
				LOG.info("1.gRecaptchaResponse: " + request.getParameter("g-recaptcha-response"));
				if (request.getParameter("g-recaptcha-response") != null
						&& !"".equals(request.getParameter("g-recaptcha-response"))) {
					// Como google se encarga de la validación  si viene algún valor en g-recaptcha-response significa que el captcha es válido, lo valido contra google para chequear que no sea inyectado.
					ValidateReCaptchaResponse captchaResponse = restTemplate
							.getForEntity(
									recaptchaUrl + "?" + "secret=" + recaptchaSecretKey + "&response="
											+ request.getParameter("g-recaptcha-response"),
									ValidateReCaptchaResponse.class)
							.getBody();
					if (captchaResponse.isSuccess()) {
						chain.doFilter(request, response);
					} else {
						response.sendRedirect(request.getContextPath() + "/loginFailed");
					}
				} else {
					// Si no existe el parámetro g-recaptcha-response, redirecciono a loginFailed
					response.sendRedirect(request.getContextPath() + "/loginFailed");
				}
			} else {
				// Si no estoy yendo al login, el filtro no debería hacer nada.
				chain.doFilter(request, response);
			}
		} else {
			// Si no estoy yendo al login, el filtro no debería hacer nada.
			chain.doFilter(request, response);
		}
	}

	public RestTemplate getRestTemplate() {
		return restTemplate;
	}

	public void setRestTemplate(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

}
