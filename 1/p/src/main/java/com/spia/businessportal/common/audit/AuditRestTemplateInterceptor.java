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

import com.google.gson.Gson;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.AuditListDTO;
import com.spia.businessportal.common.utils.AuditLogRegisterUtil;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/**
 * Interceptor para registrar cada llamada http del portal hacia el mdw.
 * 
 * @author leandro
 */
public class AuditRestTemplateInterceptor implements ClientHttpRequestInterceptor {

	private static final Log LOG = LogFactory.getLog(AuditRestTemplateInterceptor.class);
	// private static AuditListDTO auditListDTO;

	SessionFactory sessionFactory;
	@Autowired
	UserBO userBO;

	@Autowired
	AuditConfig auditConfig;

	UsuarioLoginDTO currentUser = null;

	@Override
	public ClientHttpResponse intercept(final HttpRequest request, byte[] body, ClientHttpRequestExecution execution)
			throws IOException {

		UsuarioLoginDTO user = null;

		if (user == null && userBO != null && !request.getURI().toString().contains("/user/info")) {
			user = userBO.getCurrentUser();
			LOG.info(new Gson().toJson(user));
		}

		ClientHttpResponse response = new WrappenClientHttpResponse(execution.execute(request, body));

		logResponse(response);

		LOG.info("> request.getURI()");
		LOG.info(request.getURI());

		if (request.getURI() != null && !request.getURI().toString().contains("audit-log-register")) {
			LOG.info("> AuditRestTemplateInterceptor.java");
			String bodyRequest = new String(body, "UTF-8");
			String bodyResponse = StreamUtils.copyToString(response.getBody(), Charset.defaultCharset());
			try {
				AuditListDTO jsonConfig = new AuditListDTO();
				jsonConfig = auditConfig.getAuditConfig();
				LOG.info("> AuditRestTemplateInterceptor auditLogRegister");
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

	private void logResponse(ClientHttpResponse response) throws IOException {
		// if (LOG.isDebugEnabled()) {
		// 	LOG.debug("============================response begin==========================================");
		// 	LOG.debug("Status code  : {}" + response.getStatusCode());
		// 	LOG.debug("Status text  : {}" + response.getStatusText());
		// 	LOG.debug("Headers      : {}" + response.getHeaders());
		// 	LOG.debug("Response body: {}" + StreamUtils.copyToString(response.getBody(), Charset.defaultCharset()));
		// 	LOG.debug("=======================response end=================================================");
		// }
	}

	/**
	 * Genera la envoltura para {@link ClientHttpResponse}
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
			InputStream inputStream = null;
			try {
				// traceResponse(delegate);
				int value = delegate.getStatusCode().value();
				inputStream = delegate.getBody();
//				if(delegate.getStatusCode().value() != 500)
//				{
//					inputStream = delegate.getBody();
//				}
//				else {
//					LOG.error("::::::::::::::::::::::::::Disficulades");
//					inputStream = delegate.getBody();
//				}
			} catch (Exception e) {
				LOG.error("", e);
			}

			if (bytes == null) {
				if (inputStream != null) {
					bytes = FileCopyUtils.copyToByteArray(inputStream);
				}
			}
			return new ByteArrayInputStream(bytes);
		}

		@Override
		public HttpHeaders getHeaders() {
			return delegate.getHeaders();
		}

		/**
		 * Espera la respuesta
		 * 
		 * @param request
		 * @company Assert Solutions S.A.S.
		 * @author Elvis Fontalvo
		 * @since 2019-12-19
		 */
		/*
		 * private void traceResponse(ClientHttpResponse response) throws IOException {
		 * StringBuilder inputStringBuilder = new StringBuilder(); BufferedReader
		 * bufferedReader = new BufferedReader(new InputStreamReader(response.getBody(),
		 * "UTF-8")); String line = bufferedReader.readLine(); while (line != null) {
		 * inputStringBuilder.append(line); inputStringBuilder.append('\n'); line =
		 * bufferedReader.readLine(); } LOG.
		 * debug("============================response begin=========================================="
		 * ); LOG.debug("Status code  : {}"+ response.getStatusCode());
		 * LOG.debug("Status text  : {}"+ response.getStatusText());
		 * LOG.debug("Headers      : {}"+ response.getHeaders());
		 * LOG.debug("Response body: {}"+ inputStringBuilder.toString()); LOG.
		 * debug("=======================response end================================================="
		 * ); }
		 */
	}

}
