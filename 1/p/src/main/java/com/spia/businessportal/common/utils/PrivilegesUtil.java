package com.spia.businessportal.common.utils;

import java.util.ArrayList;
import java.util.List;

import ar.com.fluxit.framework.entities.user.CompanyTypeDTO;
import com.google.gson.Gson;

import javax.servlet.http.HttpSession;

import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spia.businessportal.backend.bo.impl.UserBOImpl;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.backend.bo.impl.UserBOJAASImpl;
import com.spia.businessportal.common.entities.User;
import ar.com.fluxit.framework.entities.user.DiaRestriccionDTO;
import com.spia.businessportal.common.entities.dto.PrivilegeInfoDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioDiaRestriccionDTO;
import com.spia.businessportal.constant.BusinessPortalConstant;
import ar.com.fluxit.framework.entities.user.PrivilegeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import com.spia.businessportal.common.entities.dto.ActionRestrictionHourDTO;
import com.spia.businessportal.common.entities.dto.ActionPrivilegeDTO;

public class PrivilegesUtil {

	private static final Log LOG = LogFactory.getLog(PrivilegesUtil.class);

	public static final String CURRENT_PRIVILEGE_ID = "currentPrivilegeId";
	public static final String SESSION_ERROR = "Error al consultar la sesion.";
	public static final String LST_PRIVILEGES_SECOND_PASS_GRANTED = "lstPrivilegesSeconPassGranted";
	public static final String PRIVILEGE_ID = "privilegeId";

	/**
	 * Valida si en privilegio tiene restricines de privilegio y horas configuradas,
	 * si esta restringida retorna false
	 * 
	 * @param request
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-03
	 */
	public static Boolean isPrivilegeTrue(javax.servlet.http.HttpServletRequest request) {

		// Sacar la inormacion de los privilegios
		request.getSession();

		// sacar el nombre del privilegio y la accion a ejecutar
		String privilegio = request.getHeader("X-PRIVILEGES");

		// Si en el header no viene reotrno true
		if (privilegio == null || privilegio.equals(BusinessPortalConstant.EMPTY_STR)
				|| privilegio.equals(BusinessPortalConstant.NULL_STR)) {
			return true;
		}

		UserBOJAASImpl userBOJAASImpl = new UserBOJAASImpl();

		userBOJAASImpl.getCurrentUser();

		ObjectMapper mapper = new ObjectMapper();

		List<PrivilegeDTO> privilegioDiaRestriccionList = getResrtrictionPrivilegesCompany();

		List<PrivilegeDTO> accountList = mapper.convertValue(privilegioDiaRestriccionList,
				new TypeReference<List<PrivilegeDTO>>() {
				});

		if (accountList == null || accountList.isEmpty()) {
			LOG.debug("El la empresa no tiene privilegios restringidos ");
			return true;
		}

		// Si en el header viene hago la comparacion
		return !PrivilegesUtil.compareRestrcitionPrivilege(accountList, PrivilegesUtil.clearPrivilege(privilegio));

	}

	/**
	 * Obtain the privilege restrictions for the user's company that is logged in
	 * 
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-03
	 */
	@SuppressWarnings("unchecked")
	public static List<PrivilegeDTO> getResrtrictionPrivilegesCompany() {

		List<PrivilegeDTO> privilegioDiaRestriccionList = new ArrayList<>();
		HttpSession session = null;

		try {
			if (RequestContextHolder.getRequestAttributes() != null) {
				ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
						.currentRequestAttributes();
				session = servletRequestAttributes.getRequest().getSession();
			}

			privilegioDiaRestriccionList = (List<PrivilegeDTO>) ((UsuarioLoginDTO) session.getAttribute("user")).getPrivileges();
			LOG.info("> getResrtrictionPrivilegesCompany privileges");
			LOG.info(new Gson().toJson(privilegioDiaRestriccionList));
		} catch (Exception e) {
			LOG.error(e);
			LOG.error("Error al consultar las restricciones de privilegios para la empresa ");
		}
	
		return privilegioDiaRestriccionList;
	}

	/**
	 * Valid with the privilege list of privileges of the user's company if the
	 * privilege is restricted
	 * 
	 * @param privilegioDiaRestriccionList
	 * @param privilege
	 * @return {@link Boolean}
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-03
	 */
	public static Boolean compareRestrcitionPrivilege(List<PrivilegeDTO> privilegioDiaRestriccionList,
			String privilege) {

		for (PrivilegeDTO privilegioDiaRestriccion : privilegioDiaRestriccionList) {
			if (privilegioDiaRestriccion.getPrivilegeId().equalsIgnoreCase(privilege)) {
				return PrivilegesUtil.isDayAndHourRestricted(privilegioDiaRestriccion.getDiasRestriccion());
			}
		}
		return false;
	}

	/**
	 * Valid if the current day and time are restricted
	 * 
	 * @param diasRestriccionList
	 * @return {@link Boolean}
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-03
	 */
	public static Boolean isDayAndHourRestricted(List<DiaRestriccionDTO> diasRestriccionList) {

		for (DiaRestriccionDTO diaRestriccion : diasRestriccionList) {
			if (diaRestriccion.getDiaRestriccion().equals(DateUtil.getPrivilegeDay())) {
				return !DateUtil.isCurrenHourBetween(diaRestriccion.getHoraDesde(), diaRestriccion.getHoraHasta());
			}
		}
		return false;
	}

	/**
	 * Clear privilege value
	 * 
	 * @param privilege
	 * @return {@link String}
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-03
	 */
	public static String clearPrivilege(String privilege) {

		if (!privilege.contains(".")) {
			return privilege;
		}

		String[] privilegeLst = privilege.split("\\.");

		return privilegeLst[1];
	}

	/**
	 * Revisa los privilegios actuales de la empresa y agrega o sustituye el nuevo
	 * 
	 * @param lstPrivilegioDiaRestriccion
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-12
	 */
	public static List<PrivilegioDiaRestriccionDTO> mergeListPrivilegioDiaRestriccion(
			List<PrivilegioDiaRestriccionDTO> lstPrivilegioDiaRestriccion,
			List<PrivilegioDiaRestriccionDTO> basePrivileges
	) {

		List<PrivilegioDiaRestriccionDTO> lstPrivilegioDiaRestriccionCurrent = basePrivileges;

		if (lstPrivilegioDiaRestriccion == null || lstPrivilegioDiaRestriccion.isEmpty()) {
			return lstPrivilegioDiaRestriccion;
		}

		List<PrivilegioDiaRestriccionDTO> lstPrivilegioDiaRestriccionTarget = new ArrayList<>();

		String accion = lstPrivilegioDiaRestriccion.get(0).getPrivilegio();

		boolean isContained = false;

		ObjectMapper mapper = new ObjectMapper();
		List<PrivilegioDiaRestriccionDTO> accountList = mapper.convertValue(lstPrivilegioDiaRestriccionCurrent,
				new TypeReference<List<PrivilegioDiaRestriccionDTO>>() {
				});

		if (accountList != null) {
			for (PrivilegioDiaRestriccionDTO privilegioDiaRestriccionCurrent : accountList) {
				if (privilegioDiaRestriccionCurrent.getPrivilegio().equals(accion)) {
					lstPrivilegioDiaRestriccionTarget.add(lstPrivilegioDiaRestriccion.get(0));
					isContained = true;
				} else {
					lstPrivilegioDiaRestriccionTarget.add(privilegioDiaRestriccionCurrent);
				}
			}
		}

		if (!isContained) {
			lstPrivilegioDiaRestriccionTarget.add(lstPrivilegioDiaRestriccion.get(0));
		}

		return lstPrivilegioDiaRestriccionTarget;
	}

	public static ActionPrivilegeDTO toActionPrivilege(PrivilegeDTO basePrivileges) {
		ActionPrivilegeDTO actionPrivilegeDTO = new ActionPrivilegeDTO();

		actionPrivilegeDTO.setPrivilegio(basePrivileges.getPrivilegeId());
		actionPrivilegeDTO.setDiasRestriccion(basePrivileges.getDiasRestriccion());

		return actionPrivilegeDTO;
	}

	/**
	 * Obtiene la configuracion horaria por nombre de privilegio
	 * 
	 * @param namePrivilege
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-15
	 */
	public static List<DiaRestriccionDTO> getConfigPrivilegesByName(String namePrivilege, List<PrivilegioDiaRestriccionDTO> basePrivileges) {

		List<DiaRestriccionDTO> diasRestriccion = new ArrayList<>();

		if (namePrivilege != null && !namePrivilege.isEmpty()) {
			List<PrivilegioDiaRestriccionDTO> lstPrivilegioDiaRestriccionCurrent = basePrivileges;

			ObjectMapper mapper = new ObjectMapper();
			List<PrivilegioDiaRestriccionDTO> lstPrivilegioDiaRestriccion = mapper.convertValue(
					lstPrivilegioDiaRestriccionCurrent, new TypeReference<List<PrivilegioDiaRestriccionDTO>>() {
					});

			if (lstPrivilegioDiaRestriccion != null && !lstPrivilegioDiaRestriccion.isEmpty()) {

				for (PrivilegioDiaRestriccionDTO privilegioDiaRestriccion : lstPrivilegioDiaRestriccion) {
					if (privilegioDiaRestriccion.getPrivilegio().equals(namePrivilege)) {
						diasRestriccion = privilegioDiaRestriccion.getDiasRestriccion();
						break;
					}
				}
			}
		}

		return diasRestriccion;
	}

	/**
	 * Valid if the privilege requires a second key
	 * 
	 * @param request
	 * @return {@link Boolean} if the privilege is required returns true
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-15
	 */
	public static Boolean isSecondPasswordRequired(javax.servlet.http.HttpServletRequest request) {

		String privilegio = PrivilegesUtil.getPrivilege(request);
		if (privilegio == null || privilegio.equals(BusinessPortalConstant.EMPTY_STR)
				|| privilegio.equals(BusinessPortalConstant.NULL_STR)) {
			return false;
		}
		return PrivilegesUtil.isPrivegeSecondPassRequired(privilegio);
	}

	/**
	 * Get the privilege name through the header
	 * 
	 * @param request
	 * @return {@link String} String with the privilege name
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-15
	 */
	public static String getPrivilege(javax.servlet.http.HttpServletRequest request) {
		request.getSession();
		String privilegio = request.getHeader("X-PRIVILEGES");
		LOG.debug("El permiso es: " + privilegio);
		return privilegio;
	}

	/**
	 * Obtain the description of the privileges
	 * 
	 * @return {@link List<PrivilegeInfoDTO>}
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-03
	 */
	@SuppressWarnings("unchecked")
	public static List<PrivilegeInfoDTO> getPrivilegesDescription() {

		List<PrivilegeInfoDTO> privilegesDescription = new ArrayList<>();

		HttpSession session = null;
		if (RequestContextHolder.getRequestAttributes() != null) {
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			session = servletRequestAttributes.getRequest().getSession();
			try {
				privilegesDescription = (List<PrivilegeInfoDTO>) session.getAttribute("privilegesDescription");
			} catch (Exception e) {
				LOG.error("Error al consultar las restricciones de privilegios para la empresa ");
			}
		}

		return privilegesDescription;
	}

	/**
	 * Returns if the privilege sent by parameter requires a second password
	 * 
	 * @param privilege
	 * @return True if the privilege requires a second password
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-15
	 */
	public static Boolean isPrivegeSecondPassRequired(String privilege) {

		if (!PrivilegesUtil.existsAdminCompany()) {
			return false;
		}

		Boolean isPrivegeSecondPassRequired = false;
		List<PrivilegeInfoDTO> privilegesDescription = PrivilegesUtil.getPrivilegesDescription();

		for (PrivilegeInfoDTO privilegeInfo : privilegesDescription) {

			if (privilegeInfo.getPrivilegeName() != null && privilegeInfo.getPrivilegeName().equals(privilege)) {
				isPrivegeSecondPassRequired = Boolean.valueOf(privilegeInfo.getIsEnabledSecondPassword());
			}
		}

		return isPrivegeSecondPassRequired;
	}

	/**
	 * Get the second password validation directive
	 * 
	 * @param request
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-20
	 */
	public static String getSecondPasswordDirective(javax.servlet.http.HttpServletRequest request) {
		request.getSession();
		String secondPasswordDirective = request.getHeader("SECOND_PASSWORD");
		LOG.debug("El permiso es: " + secondPasswordDirective);
		return secondPasswordDirective;
	}

	/**
	 * 
	 * @param privilegeId
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-20
	 */
	public static void savePrivilegesSeconPassGrantedSession(String privilegeId) {
		HttpSession session = PrivilegesUtil.getCurrentSession();

		List<String> lstPrivilegesSeconPassGranted = PrivilegesUtil.getlstPrivilegesSeconPassGranted();

		if (lstPrivilegesSeconPassGranted == null || lstPrivilegesSeconPassGranted.isEmpty()) {
			lstPrivilegesSeconPassGranted = new ArrayList<>();
		}

		if (!lstPrivilegesSeconPassGranted.contains(privilegeId)) {
			lstPrivilegesSeconPassGranted.add(privilegeId);
		}

		if (session != null) {
			session.setAttribute(LST_PRIVILEGES_SECOND_PASS_GRANTED, lstPrivilegesSeconPassGranted);
		} else {
			LOG.error(SESSION_ERROR);
		}
	}

	/**
	 * 
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-20
	 */
	public static List<String> getlstPrivilegesSeconPassGranted() {
		HttpSession session = PrivilegesUtil.getCurrentSession();

		List<String> lstPrivilegesSeconPassGranted = (List<String>) session
				.getAttribute(LST_PRIVILEGES_SECOND_PASS_GRANTED);

		if (lstPrivilegesSeconPassGranted == null || lstPrivilegesSeconPassGranted.isEmpty()) {
			lstPrivilegesSeconPassGranted = new ArrayList<>();
		}

		return lstPrivilegesSeconPassGranted;
	}

	/**
	 * 
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-20
	 */
	public static HttpSession getCurrentSession() {
		HttpSession session = null;
		if (RequestContextHolder.getRequestAttributes() != null) {
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			session = servletRequestAttributes.getRequest().getSession();
		}

		return session;
	}

	/**
	 * 
	 * @param privilegeId
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-20
	 */
	public static Boolean isSecondPassGrantedPreviously(String privilegeId) {
		List<String> lstPrivilegesSeconPassGranted = PrivilegesUtil.getlstPrivilegesSeconPassGranted();

		return lstPrivilegesSeconPassGranted.contains(privilegeId);
	}

	/**
	 * Save the current privilege in session at attribute 'currentPrivilegeId'
	 * 
	 * @param request
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-21
	 */
	public static void saveCurrentPrivilegeSession(String privilege) {

		HttpSession session = PrivilegesUtil.getCurrentSession();
		if (session != null) {
			session.setAttribute(CURRENT_PRIVILEGE_ID, privilege);
		} else {
			LOG.error(SESSION_ERROR);
		}

	}

	/**
	 * Get the current privilege from the session
	 * 
	 * @return {@link String}
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-21
	 */
	public static String getCurrentPrivilegeSession() {
		HttpSession session = PrivilegesUtil.getCurrentSession();
		String currentPrivilegeSession = null;

		if (session != null) {
			currentPrivilegeSession = (String) session.getAttribute(CURRENT_PRIVILEGE_ID);
		} else {
			LOG.error(SESSION_ERROR);
		}
		return currentPrivilegeSession;
	}

	public static String getCurrentUser() {

		HttpSession session = PrivilegesUtil.getCurrentSession();
		String username = "";

		if (session != null) {
			User u = (User) session.getAttribute("user");
			if (u != null) {
				username = u.getUserName();
			}

		} else {
			LOG.error(SESSION_ERROR);
		}
		return username;

	}

	/**
	 * Valida si en privilegio tiene restricines de privilegio y horas configuradas,
	 * si esta restringida retorna false
	 * 
	 * @param request
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-03
	 */
	public static Boolean isPrivilegeRestricted(String privilegio) {

		LOG.debug("El permiso es: " + privilegio);
		PrivilegesUtil.setPrivilegeId(privilegio);

		// Si en el header no viene reotrno true
		if (privilegio == null || privilegio.equals(BusinessPortalConstant.EMPTY_STR)
				|| privilegio.equals(BusinessPortalConstant.NULL_STR)) {
			return true;
		}

		ObjectMapper mapper = new ObjectMapper();
		

		List<PrivilegeDTO> privilegioDiaRestriccionList = getResrtrictionPrivilegesCompany();
		List<PrivilegeDTO> selectedPrivilegioDiaRestriccionList = new ArrayList<PrivilegeDTO>();

		for(PrivilegeDTO privilegioDiaRestriccion : privilegioDiaRestriccionList) {
			if(privilegioDiaRestriccion.getDiasRestriccion() != null) {
				if(privilegioDiaRestriccion.getDiasRestriccion().size() >= 1) {
					selectedPrivilegioDiaRestriccionList.add(privilegioDiaRestriccion);
				}
			}
		}

		List<PrivilegeDTO> accountList = mapper.convertValue(selectedPrivilegioDiaRestriccionList,
				new TypeReference<List<PrivilegeDTO>>() {
				});
	
		String privilegeFormate = PrivilegesUtil.clearPrivilege(privilegio);

		if (accountList == null || accountList.isEmpty()) {
			LOG.debug("El la empresa no tiene privilegios restringidos ");
			return true;
		}

		// Si en el header viene hago la comparacion
		return !PrivilegesUtil.compareRestrcitionPrivilege(accountList, PrivilegesUtil.clearPrivilege(privilegio));

	}

	/**
	 * Retona si la ampresa del usuario actual tiene administradord de portal
	 * 
	 * @return 'true' si la empresa del usuario actual tiene administrador portal
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-13
	 */
	public static Boolean existsAdminCompany() {

		HttpSession session = PrivilegesUtil.getCurrentSession();

		if (session != null) {
			Boolean existsAdminCompany = (Boolean) session.getAttribute("existsAdminCompany");
			if (existsAdminCompany != null) {
				return existsAdminCompany;
			}

		} else {
			LOG.error(SESSION_ERROR);
		}
		return false;

	}

	/**
	 * Consulta y gurda en session el privilegio
	 * 
	 * @param request
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-24
	 */
	public static void setPrivilegeId(String privilegeId) {

		HttpSession httpSession = null;
		if (RequestContextHolder.getRequestAttributes() != null) {
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			httpSession = servletRequestAttributes.getRequest().getSession();
			httpSession.setAttribute(PRIVILEGE_ID, privilegeId);
		}

	}

	/**
	 * Obitiene de la session el privilegio actual
	 * 
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-24
	 */
	public static String getPrivilegeId() {
		HttpSession session = AuditLogRegisterUtil.getCurrentSession();

		if (session != null) {
			String clientIp = (String) session.getAttribute(PRIVILEGE_ID);
			if (clientIp != null) {
				return clientIp;
			}

		} else {
			LOG.error(SESSION_ERROR);
		}
		return null;
	}

	/**
	 * Elimina de la sesion el privilegio actual
	 * 
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-24
	 */
	public static void removePrivilegeId() {

		HttpSession httpSession = null;
		if (RequestContextHolder.getRequestAttributes() != null) {
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			httpSession = servletRequestAttributes.getRequest().getSession();
			httpSession.setAttribute(PRIVILEGE_ID, null);
		}

	}

	/**
	 * Returns if the privilege sent by parameter requires a Time Restriction
	 * 
	 * @param privilege
	 * @return True if the privilege Is Time Restriction
	 * @company Assert Solutions S.A.S.
	 * @author Elvis Fontalvo
	 * @since 2021-05-18
	 */
	public static Boolean isTimeRestrictionRequired(String privilege) {

		if (!PrivilegesUtil.existsAdminCompany()) {
			return false;
		}

		Boolean isTimeRestrictionRequired = false;
		List<PrivilegeInfoDTO> privilegesDescription = PrivilegesUtil.getPrivilegesDescription();

		for (PrivilegeInfoDTO privilegeInfo : privilegesDescription) {

			if (privilegeInfo.getPrivilegeName() != null && privilegeInfo.getPrivilegeName().equals(privilege)) {
				isTimeRestrictionRequired = Boolean.valueOf(privilegeInfo.getIsTimeRestriction());
			}
		}

		return isTimeRestrictionRequired;
	}
	

}
