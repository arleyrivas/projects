package com.spia.businessportal.web.controller;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import com.spia.businessportal.backend.bo.SecurityEsbBO;
import com.spia.businessportal.common.entities.dto.AuditLogRegisterRequestDTO;
import com.spia.businessportal.common.utils.AuditLogRegisterUtil;
import com.spia.businessportal.common.utils.PrivilegesUtil;
import com.spia.services.security.esb.entities.SecurityEsbResponse;

import ar.com.fluxit.framework.common.exception.BusinessException;
import com.google.gson.Gson;

@Component
public class GeneralInterceptor extends GenericFilterBean {

	private static final Log LOG = LogFactory.getLog(GeneralInterceptor.class);

	private RequestCache requestCache = new HttpSessionRequestCache();

	//////////////////////////////
	// Bean de ESB de seguridad //
	//////////////////////////////
	@Autowired
	private SecurityEsbBO<SecurityEsbResponse> securityEsbBO;

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		final HttpServletRequest req = (HttpServletRequest) request;

		HttpServletRequest httpServletRequest = (HttpServletRequest) request;
		String requestURI = httpServletRequest.getRequestURI();

		if (requestURI.contains("user-activate-token") || requestURI.contains("user-token") || requestURI.contains("mobile-token")) {
			httpServletRequest.getSession(true);
		}

		try {
			chain.doFilter(request, response);
		} catch (MaxUploadSizeExceededException e) {
			handle(request, response, e);
		} catch (ServletException e) {
			if (e.getRootCause() instanceof MaxUploadSizeExceededException) {
				handle(request, response, (MaxUploadSizeExceededException) e.getRootCause());
			} else {
				throw e;
			}
		}

		if (AuditLogRegisterUtil.getClienIp() == null) {
			String valueHeader = String.valueOf(req.getHeader("X-Forwarded-For"));
			if (!valueHeader.equals("null")) {
				// LOG.info("X-Forwarded-For: " + valueHeader);
				AuditLogRegisterUtil.setClienIp(valueHeader);
			} else {
				// LOG.info("Remote Address: " + request.getRemoteAddr());
				AuditLogRegisterUtil.setClienIp(request.getRemoteAddr());
			}
		}

		if (req.getRequestURI() != null && !req.getRequestURI().contains("audit-log-register")) {
			AuditLogRegisterRequestDTO auditLogRegisterRequest = AuditLogRegisterUtil.getAuditLogRegisterRequest();

			if (auditLogRegisterRequest != null) {
				this.auditLogRegister(request, auditLogRegisterRequest);
			}
		}

		if (requestURI.contains("logout")) {
			httpServletRequest.getSession().invalidate();
		}
	}

	public void handle(ServletRequest request, ServletResponse response, MaxUploadSizeExceededException e)
			throws ServletException, IOException {
		LOG.error("Ocurrio un error al registrar los archivos:::" + e);
		/*
		 * String redirect = UrlUtils.buildFullRequestUrl(request) + "?error";
		 * response.sendRedirect(redirect);
		 */
	}

	/**
	 * Registra en base de datos las peticiones salientes del portal
	 * 
	 * @param request
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-21
	 */
	public void auditLogRegister(ServletRequest request, AuditLogRegisterRequestDTO auditLogRegisterRequest) {

		if (securityEsbBO == null) {
			ServletContext servletContext = request.getServletContext();
			WebApplicationContext webApplicationContext = WebApplicationContextUtils
					.getWebApplicationContext(servletContext);
			securityEsbBO = webApplicationContext.getBean(SecurityEsbBO.class);
		}

		try {
			if (auditLogRegisterRequest.getPrivilegeId() == null || auditLogRegisterRequest.getPrivilegeId() == "") {
				auditLogRegisterRequest.setPrivilegeId(PrivilegesUtil.getCurrentPrivilegeSession());
			}
			request.getRemoteAddr();
			if(auditLogRegisterRequest.getIp() == null)
			{
				final HttpServletRequest req = (HttpServletRequest) request;
				String valueHeader = String.valueOf(req.getHeader("X-Forwarded-For"));
				if (!valueHeader.equals("null")) {
					auditLogRegisterRequest.setIp(valueHeader);
				} else {
					auditLogRegisterRequest.setIp(request.getRemoteAddr());
				}
			}
			SecurityEsbResponse rep = securityEsbBO.auditLogRegister(auditLogRegisterRequest);
			if (rep.isSuccess()) {
				AuditLogRegisterUtil.setAuditLogRegisterRequest(null);
			}
		} catch (BusinessException e) {
			LOG.error("Ocurrio un error al registrar la auditoria");
		}
	}

}
