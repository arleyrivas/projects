package com.spia.businessportal.common.utils;

import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpRequest;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.google.gson.Gson;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.backend.bo.impl.UserBOJAASImpl;
import com.spia.businessportal.common.entities.dto.AuditDTO;
import com.spia.businessportal.common.entities.dto.AuditListDTO;
import com.spia.businessportal.common.entities.dto.AuditLogRegisterRequestDTO;
import com.spia.businessportal.common.entities.dto.AuditServiceDTO;
import com.spia.businessportal.constant.BusinessPortalConstant;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

public class AuditLogRegisterUtil {

	private static final Log LOG = LogFactory.getLog(AuditLogRegisterUtil.class);

	public static final String SESSION_ERROR = "Error al consultar la sesion.";
	public static final String AUDIT_LOG_REGISTER_REQUEST = "auditLogRegisterRequest";
	public static final String CLIENT_IP = "clientIp";

	/*
	 * @Autowired public static AuditConfig auditConfig;
	 */

//	@Autowired
//	private static AuditListDTO auditConfig;

	/**
	 * Obtiene la session actual
	 * 
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-24
	 */

	public static HttpSession getCurrentSession() {
		HttpSession session = null;
		if (RequestContextHolder.getRequestAttributes() != null) {
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			try {
				if (servletRequestAttributes != null && servletRequestAttributes.getRequest() != null
						&& servletRequestAttributes.getRequest().getSession() != null) {
					session = servletRequestAttributes.getRequest().getSession();
				} else {
					return null;
				}
			} catch (Exception e) {
				LOG.error("Error al crear sesion", e);
			}
			// session = servletRequestAttributes.getRequest().getSession();
		}

		return session;
	}

	/**
	 * Consulta de la sessión los datos que se auditaran posteriormente al servicio
	 * de auditoria
	 * 
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-24
	 */
	public static AuditLogRegisterRequestDTO getAuditLogRegisterRequest() {

		HttpSession session = AuditLogRegisterUtil.getCurrentSession();

		if (session != null) {
			AuditLogRegisterRequestDTO auditLogRegisterRequest = (AuditLogRegisterRequestDTO) session
					.getAttribute(AUDIT_LOG_REGISTER_REQUEST);
			if (auditLogRegisterRequest != null) {
				return auditLogRegisterRequest;
			}

		} else {
			LOG.error(SESSION_ERROR);
		}
		return null;

	}

	/**
	 * Registra en la sessión los datos que se auditaran posteriormente al servicio
	 * de auditoria
	 * 
	 * @param auditLogRegisterRequest
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-24
	 */
	public static void setAuditLogRegisterRequest(AuditLogRegisterRequestDTO auditLogRegisterRequest) {
		HttpSession httpSession = null;
		if (RequestContextHolder.getRequestAttributes() != null) {
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			httpSession = servletRequestAttributes.getRequest().getSession();
			httpSession.setAttribute(AUDIT_LOG_REGISTER_REQUEST, auditLogRegisterRequest);
		}
	}

	/**
	 * Consulta de la sessión los datos del Usuario logueado
	 * 
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-24
	 */
	public static User getCurrentuser() {
		HttpSession session = AuditLogRegisterUtil.getCurrentSession();

		if (session != null) {
			User user = (User) session.getAttribute("user");
			if (user != null) {
				return user;
			}

		} else {
			LOG.error(SESSION_ERROR);
		}
		return null;

	}

	/**
	 * Consulta de la session la direccion IP del cliente
	 * 
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-24
	 */
	public static String getClienIp() {
		HttpSession session = AuditLogRegisterUtil.getCurrentSession();

		if (session != null) {
			String clientIp = (String) session.getAttribute(CLIENT_IP);
			if (clientIp != null) {
				return clientIp;
			}

		} else {
			LOG.error(SESSION_ERROR);
		}
		return null;
	}

	/**
	 * Registra en session la direccion IP del cliente
	 * 
	 * @param clientIp
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-24
	 */
	public static void setClienIp(String clientIp) {
		HttpSession httpSession = null;
		if (RequestContextHolder.getRequestAttributes() != null) {
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			httpSession = servletRequestAttributes.getRequest().getSession();
			httpSession.setAttribute(CLIENT_IP, clientIp);
		}
	}

	/**
	 * Arma el objeto {@link AuditLogRegisterRequestDTO} para registro de auditoria
	 * 
	 * @param request
	 * @param bodyRequest
	 * @param bodyResponse
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @throws Exception
	 * @since 2019-10-24
	 */
	public static void auditLogRegister(HttpRequest request, String bodyRequest, String bodyResponse,
			AuditListDTO jsonConfig) throws Exception {
		UserBOJAASImpl userBOJAASImpl = new UserBOJAASImpl();

		UsuarioLoginDTO currentUser = userBOJAASImpl.getCurrentUser();

		AuditLogRegisterRequestDTO auditLogRegisterRequest = new AuditLogRegisterRequestDTO();

		if (currentUser != null) {
			auditLogRegisterRequest.setUsername(currentUser.getUserName());
			auditLogRegisterRequest.setCompanyId(currentUser.getEmpresa().getId());
		} else {
			auditLogRegisterRequest.setUsername("");
			auditLogRegisterRequest.setCompanyId("");
		}

		auditLogRegisterRequest.setApp("portal");

		String bodyRequestBase64 = BusinessPortalConstant.EMPTY_STR;

		if (!bodyRequest.equals(BusinessPortalConstant.EMPTY_STR)) {
			bodyRequestBase64 = EncoderDecoder.encodeBase64(bodyRequest);
		}

		String bodyResponseBase64 = BusinessPortalConstant.EMPTY_STR;
		if (!bodyResponse.equals(BusinessPortalConstant.EMPTY_STR)) {
			bodyResponseBase64 = EncoderDecoder.encodeBase64(bodyResponse);
		}

		Boolean validate = true;
		if(jsonConfig != null && jsonConfig.getAudit() != null)
		{
			for (AuditDTO auditDTO : jsonConfig.getAudit()) {
				for (AuditServiceDTO auditServiceDTO : auditDTO.getService()) {
					if (request.getURI().toString().contains(auditServiceDTO.getUrl())) {
						validate = false;
						if (auditServiceDTO.getRequest()) {
							auditLogRegisterRequest.setRequestPayload(bodyRequestBase64);
						} else {
							auditLogRegisterRequest.setRequestPayload("");
						}
	
						if (auditServiceDTO.getResponse()) {
							auditLogRegisterRequest.setResponsePayload(bodyResponseBase64);
						} else {
							auditLogRegisterRequest.setResponsePayload("");
						}
						break;
					}
				}
				if (!validate) {
					break;
				}
			}
		}
		if (validate) {
			auditLogRegisterRequest.setRequestPayload(bodyRequestBase64);
			auditLogRegisterRequest.setResponsePayload(bodyResponseBase64);
		}

		auditLogRegisterRequest.setIp(AuditLogRegisterUtil.getClienIp());
		auditLogRegisterRequest.setMethod(request.getMethod().name());
		auditLogRegisterRequest.setPrivilegeId(PrivilegesUtil.getPrivilegeId());
		auditLogRegisterRequest.setUrl(request.getURI().toString());
		auditLogRegisterRequest.setCreatedAt(DateUtil.getCurrentDateyyyMMddHHmmssSSS());
		AuditLogRegisterUtil.setAuditLogRegisterRequest(auditLogRegisterRequest);
		PrivilegesUtil.removePrivilegeId();

	}

}
