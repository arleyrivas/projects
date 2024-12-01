package com.spia.businessportal.common.audit;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StreamUtils;

import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.dto.AuditListDTO;
import com.spia.businessportal.common.utils.AuditLogRegisterUtil;

/**
 * Interceptor para registrar cada llamada http del portal hacia el mdw.
 * 
 * @author leandro
 */
public class LdapProxyAuditRestTemplateInterceptor implements ClientHttpRequestInterceptor {

	private static final Log LOG = LogFactory.getLog(LdapProxyAuditRestTemplateInterceptor.class);

	SessionFactory sessionFactory;
	@Autowired
	UserBO userBO;

	@Autowired
	AuditConfig auditConfig;

	@Override
	public ClientHttpResponse intercept(final HttpRequest request, byte[] body, ClientHttpRequestExecution execution)
			throws IOException {

		ClientHttpResponse response = new WrappenClientHttpResponse(execution.execute(request, body));

		LOG.info("> request.getURI()");
		LOG.info(request.getURI());

		if (request.getURI() != null && !request.getURI().toString().contains("audit-log-register")) {
			LOG.info("> AuditRestTemplateInterceptor.java");
			String bodyRequest = new String(body, "UTF-8");
			String bodyResponse = StreamUtils.copyToString(response.getBody(), Charset.defaultCharset());
			try {
				AuditListDTO jsonConfig = new AuditListDTO();
				AuditLogRegisterUtil.auditLogRegister(request, bodyRequest, bodyResponse, jsonConfig);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		return response;
	}

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public UserBO getUserBO() {
		return userBO;
	}

	public void setUserBO(UserBO userBO) {
		this.userBO = userBO;
	}

	/**
	 * por fin
	 * 
	 * @author USER
	 *
	 */
	private class WrappenClientHttpResponse implements ClientHttpResponse {

		private final ClientHttpResponse delegate;

		private byte[] bytes;

		private WrappenClientHttpResponse(ClientHttpResponse delegate) {
			this.delegate = delegate;
		}

		@Override
		public HttpStatus getStatusCode() throws IOException {
			return delegate.getStatusCode();
		}

		@Override
		public int getRawStatusCode() throws IOException {
			return delegate.getRawStatusCode();
		}

		@Override
		public String getStatusText() throws IOException {
			return delegate.getStatusText();
		}

		@Override
		public void close() {
			delegate.close();
		}

		@Override
		public InputStream getBody() throws IOException {
			if (bytes == null) {
				bytes = FileCopyUtils.copyToByteArray(delegate.getBody());
			}
			return new ByteArrayInputStream(bytes);
		}

		@Override
		public HttpHeaders getHeaders() {
			return delegate.getHeaders();
		}
	}

}
