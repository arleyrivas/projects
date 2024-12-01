/**
 * 
 */
package com.spia.businessportal.backend.bo.impl;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.security.auth.Subject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.spia.businessportal.common.entities.dto.autentication.ldap.EmpresaDTO;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
/* import org.springframework.security.authentication.dao.SaltSource; YA NO VA*/
import org.springframework.security.authentication.jaas.JaasAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
/* import org.springframework.security.crypto.password.PasswordEncoder; YA NO VA*/
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import com.spia.businessportal.backend.bo.SecurityEsbBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.entities.dto.PrivilegeInfoDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioDiaRestriccionDTO;
import com.spia.businessportal.common.entities.dto.PrivilegiosNotificablesEmpresaDTO;
import com.spia.businessportal.web.auth.UserPrincipal;
import com.spia.entity.entities.login.ldap.CompanyTypeDTO;
import com.spia.services.security.esb.entities.LdapUserResult;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.services.security.esb.entities.UserValidation;

import ar.com.fluxit.framework.business.generic.impl.GenericServiceImpl;
import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.security.user.FluxitSecurityUser;
import ar.com.fluxit.framework.spring.context.ContextHolder;



/**
 * @author diego
 *
 *         Implementación de la interfaz UserBO
 */
public class UserBOJAASImpl extends GenericServiceImpl<User> implements UserBO {

	private static final Log LOG = LogFactory.getLog(UserBO.class);

	/* @Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private SaltSource saltSource;  YA NO VA*/
	//////////////////////////////
	// Bean de ESB de seguridad //
	//////////////////////////////
	@Autowired
	private SecurityEsbBO<SecurityEsbResponse> securityEsbBO;

	/**
	 * 
	 */
	public UserBOJAASImpl() {
		super();
	}

	public Principal getPrincipal() {
		Principal principal = null;
		if (RequestContextHolder.getRequestAttributes() != null) {
			HttpServletRequest r = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes())
					.getRequest();
			principal = r.getUserPrincipal();
		}
		return principal;
	}

	public UsuarioLoginDTO getBackupUser() {
		UsuarioLoginDTO u = null;
		u = new UsuarioLoginDTO();

		Principal principal = getPrincipal();
		LOG.info("> principal");
		LOG.info(principal);

		if (principal instanceof JaasAuthenticationToken) {
			Subject s = ((JaasAuthenticationToken) principal).getLoginContext().getSubject();
			for (Principal rol : s.getPrincipals()) {
				LOG.info("> userSession Name");
				LOG.info(rol.getName());
				if (rol.getName().equals("backupUser")) {
					UserPrincipal user = new UserPrincipal();
					user = (UserPrincipal) rol;
					UsuarioLoginDTO userSession = new UsuarioLoginDTO();
					userSession = user.getUser();
					LOG.info("> userSession");
					LOG.info(userSession);
					u = userSession;
				}
			}
		}

		return u;
	}

	public void setUserPrincipal(UsuarioLoginDTO newUser) {
		Principal principal = getPrincipal();

		if (principal instanceof JaasAuthenticationToken) {
			Subject s = ((JaasAuthenticationToken) principal).getLoginContext().getSubject();
			for (Principal rol : s.getPrincipals()) {
				if (rol.getName().equals("User")) {
					UserPrincipal user = new UserPrincipal();
					user.setUser(newUser);
					LOG.info("> setUserPrincipal user");
					LOG.info(user);
				}
			}
		}
	}

	@Override
	public UsuarioLoginDTO getCurrentUser() {
		UsuarioLoginDTO u = null;
		u = new UsuarioLoginDTO();
		u.setPrivileges(new ArrayList());
		// Persisto el usuario en la sesión
		HttpSession session = null;
		if (RequestContextHolder.getRequestAttributes() != null) {
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			session = servletRequestAttributes.getRequest().getSession();
		}

		if (session != null && session.getAttribute("user") != null) {
			u = (UsuarioLoginDTO) session.getAttribute("user");
		} else {

			Principal principal = getPrincipal();
			if (principal == null) {
				return null;
			}

			if (principal instanceof JaasAuthenticationToken) {
				Subject s = ((JaasAuthenticationToken) principal).getLoginContext().getSubject();
				for (Principal rol : s.getPrincipals()) {
					if (rol.getName().equals("User")) {
						UserPrincipal user = new UserPrincipal();
						user = (UserPrincipal) rol;
						UsuarioLoginDTO userSession = new UsuarioLoginDTO();
						userSession = user.getUser();
						u = userSession;
					}

					if (rol.getName().equals("backupUser")) {
						UserPrincipal user = new UserPrincipal();
						user = (UserPrincipal) rol;
						UsuarioLoginDTO userSession = new UsuarioLoginDTO();
						userSession = user.getUser();

						session.setAttribute("backupUser", userSession);
						session.setAttribute("priusnotaatt", userSession.getPrivileges());
					}
				}
			} else {
				u = (UsuarioLoginDTO) ContextHolder.getContext().getCurrentUser();
				LOG.info("Sacado del contexto");
			}
			
			if (session != null) {
				session.setAttribute("user", u);
			}
		}

		return u;
	}

	@Override
	public boolean hasPermission(String tipoEmpresa) {

		boolean hasPermission = false;
		HttpSession session = null;

		if (RequestContextHolder.getRequestAttributes() != null) {
			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			session = servletRequestAttributes.getRequest().getSession();
		}

		List<CompanyTypeDTO> userSession = (List<CompanyTypeDTO>) ((UsuarioLoginDTO) session.getAttribute("user")).getEmpresa().getTiposEmpresas();

		for (CompanyTypeDTO str : userSession) {
			if (str.getCompanyTypeId().equalsIgnoreCase(tipoEmpresa)) {
				if(str.getSelected()) {
					hasPermission = true;
					break;
				}
			}
		}

		return hasPermission;
	}

	@Override
	public UsuarioLoginDTO getByUsername(String username) throws BusinessException {
		UsuarioLoginDTO user = null;
		try {
			SecurityEsbResponse<UserValidation> userInfo = this.getSecurityEsbBO().getUserInfo(username);
			if (userInfo != null) {
				user = new UsuarioLoginDTO();
				user.setEmpresa(new EmpresaDTO());

				user.setUserName(((UserValidation) userInfo.getResult()).getUserName());
				user.setNombres(((UserValidation) userInfo.getResult()).getName());
				user.setEmail(((UserValidation) userInfo.getResult()).getUserEmail());
				user.getEmpresa().setId(((UserValidation) userInfo.getResult()).getCompanyId());
				user.getEmpresa().setCompanyName(((UserValidation) userInfo.getResult()).getCompanyName());
			}
		} catch (BusinessException e) {
			e.printStackTrace();
		}
		return user;
	}
/*
	@Override
	public void getUsersCompany() { }
 	@Override
	public User changePassword(User user, String password, String oldPassword, String confirmationPassword)
			throws BusinessException {

		if (password.equals(confirmationPassword)) {
			String encodedPassword = this.generateEncodedPassword(password);
			if (oldPassword.equals(user.getPassword())) {
				user.setActive(true);
				user.setPassword(encodedPassword);
				this.saveOrUpdate(user);
				return user;
			} else {
				LOG.info("El password ingresado (" + oldPassword
						+ ") no corresponde con el password actual del usuario.");
				throw new BusinessException("La contraseña actual no es válida");
			}
		} else {
			LOG.info("El password ingresado (" + oldPassword + ") no corresponde con el password actual del usuario.");
			throw new BusinessException("La contraseña actual no es válida");
		}
	} ya no va */

	/**
	 * Consulta en el LDAP las resticciones de la empresa por NIT y guarda las
	 * restricciones en session
	 * 
	 * @param nit
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-15
	 */
	/* public void getRestrictionPrivilegesCompany(String nit, HttpSession session) {
		try {
			SecurityEsbResponse<List<PrivilegioDiaRestriccionDTO>> userInfo = this.getSecurityEsbBO()
					.getRestrictionPrivilegesCompany(nit);
			List<PrivilegioDiaRestriccionDTO> variable = new ArrayList<>();

			variable = (List<PrivilegioDiaRestriccionDTO>) (List<?>) userInfo.getResult();

			if (variable != null && !variable.isEmpty()) {
				session.setAttribute("privilegiosEmpresa", variable);
			}

		} catch (BusinessException e) {
			LOG.info("Ocurrió un error al consultar las reticciones de privilegios de la empresa '" + nit + "'.");
		}
	}
 */
	/**
	 * Consulta los privilegios de notificacion por NIT de empresa
	 * 
	 * @param nit
	 * @company Assert Solutions S.A.S.
	 * @author Daniel Sanchez
	 * @since 2019-07-30
	 */
	/* public void getPrivilegesCompanyNotification(String nit, String type, HttpSession session) {
		try {
			SecurityEsbResponse<PrivilegiosNotificablesEmpresaDTO> privilegiosInfo = this.getSecurityEsbBO()
					.getPrivilegesNotifByCompanyList(nit, type);
			List<String> variable = new ArrayList<>();

			variable = (List<String>) (List<?>) privilegiosInfo.getResult();

			if (variable != null) {
				session.setAttribute("privilegiosNotificacionEmpresa", variable);
			}

		} catch (BusinessException e) {
			LOG.info("Ocurrió un error al consultar las reticciones de privilegios de la empresa '" + nit + "'.");
		}
	} */

	/**
	 * Servicio de obtener la descripción de los privilegios y los guarde en una
	 * variable de session "privilegesDescription"
	 * 
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-15
	 */
	/* public void getPrivilegesDescription(HttpSession session) {
		try {
			SecurityEsbResponse<List<PrivilegeInfoDTO>> privilegiosInfo = this.getSecurityEsbBO()
					.getPrivilegesDescription();

			List<PrivilegeInfoDTO> variable = new ArrayList<>();

			variable = (List<PrivilegeInfoDTO>) (List<?>) privilegiosInfo.getResult();

			if (variable != null) {
				session.setAttribute("privilegesDescription", variable);
			}

		} catch (BusinessException e) {
			LOG.info("Ocurrió un error al consultar la descripcion de los privilegios de la empresa ");
		}
	} */

/* 	@Override
	public String generatePassword(String password) {
		return this.generateEncodedPassword(password);
	}

	private String generateEncodedPassword(String password) {
		return this.getPasswordEncoder().encode(password);
	}

	public PasswordEncoder getPasswordEncoder() {
		return passwordEncoder;
	}

	public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
		this.passwordEncoder = passwordEncoder;
	}

	public SaltSource getSaltSource() {
		return saltSource;
	}

	public void setSaltSource(SaltSource saltSource) {
		this.saltSource = saltSource;
	} YA NO VA*/

	/**
	 * @return the securityEsbBO
	 */
	 public SecurityEsbBO<SecurityEsbResponse> getSecurityEsbBO() {
		return securityEsbBO;
	}

	/**
	 * @param securityEsbBO the securityEsbBO to set
	 */
	public void setSecurityEsbBO(SecurityEsbBO<SecurityEsbResponse> securityEsbBO) {
		this.securityEsbBO = securityEsbBO;
	}

	/**
	 * Consume el eervicio que indica si la empresa de un usuario determinado tiene
	 * administrador de portal y guarda el resultado en sesion
	 * 
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-13
	 */
	/* public void existsAdminCompany(String userName, String companyId, HttpSession session) {
		try {
			SecurityEsbResponse<GenericResponseDTO> securityEsbResponse = this.getSecurityEsbBO()
					.existsAdminCompany(userName, companyId);

			GenericResponseDTO<Boolean> existsAdminCompany = (GenericResponseDTO) securityEsbResponse.getResult();

			if (existsAdminCompany != null && existsAdminCompany.getSuccess() != null
					&& existsAdminCompany.getSuccess().equals(Boolean.TRUE.toString()) && session != null) {
				session.setAttribute("existsAdminCompany", existsAdminCompany.getResult());
			} else if (session != null) {
				session.setAttribute("existsAdminCompany", false);
			}
		} catch (BusinessException e) {
			LOG.info("Ocurrió un error al consultar la descripcion de los privilegios de la empresa ");
		}
		//session.setAttribute("existsAdminCompany", true);
	}
 */
	//MARK
	@Override
	public void getUsersCompany() {

		UsuarioLoginDTO user = this.getCurrentUser();
		String companyId = user.getEmpresa().getId();

		SecurityEsbResponse<LdapUserResult> usersCompany;
		try {
			usersCompany = this.getSecurityEsbBO().getCompanyUsers(companyId);

			HttpSession session = null;
			if (RequestContextHolder.getRequestAttributes() != null) {
				ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
						.currentRequestAttributes();
				session = servletRequestAttributes.getRequest().getSession();
				session.setAttribute("usersCompany", usersCompany);
			}

		} catch (BusinessException e) {
			LOG.error("Ocurrió un error al consultar los usuarios de la empresa ");
		}

	}	
	/**
	 * Consulta los privilegios de notificacion por NIT de empresa
	 * 
	 * @param nit
	 * @company Assert Solutions S.A.S.
	 * @author Elvis Fontalvo
	 * @since 2020-10-05
	 */
	/* public void getPrivilegesCompanyNotificationShipper(String nit, String type, HttpSession session) {
		try {
			SecurityEsbResponse<PrivilegiosNotificablesEmpresaDTO> privilegiosInfo = this.getSecurityEsbBO()
					.getPrivilegesNotifByCompanyList(nit, type);
			List<String> variable = new ArrayList<>();

			variable = (List<String>) (List<?>) privilegiosInfo.getResult();

			if (variable != null) {
				session.setAttribute("privilegiosNotificacionCliente", variable);
			}

		} catch (BusinessException e) {
			LOG.info("Ocurrió un error al consultar las reticciones de privilegios de la empresa '" + nit + "'.");
		}
	}
	 */
	/**
	 * Consulta en el LDAP las resticciones delprivilegio por id 
	 * 
	 * @param id
	 * @company Assert Solutions S.A.S.
	 * @author Elvis Fontalvo
	 * @since 2021-05-18
	 */
/* 	public PrivilegioDiaRestriccionDTO getTimeRestrictionByPrivilege(String id) {
		PrivilegioDiaRestriccionDTO privilegioDiaRestriccionDTO = new PrivilegioDiaRestriccionDTO();
		try {
			SecurityEsbResponse<PrivilegioDiaRestriccionDTO>  securityEsbResponse = this.getSecurityEsbBO().getTimeRestrictionByPrivilege(id);
			privilegioDiaRestriccionDTO = (PrivilegioDiaRestriccionDTO) securityEsbResponse.getResult();

		} catch (BusinessException e) {
			LOG.info("Ocurrió un error al consultar las reticciones del privilegios'" + id + "'.");
		}
		return privilegioDiaRestriccionDTO;
	} */
}
