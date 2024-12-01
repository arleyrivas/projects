package com.spia.businessportal.web.auth;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.management.relation.RoleList;
import javax.security.auth.Subject;
import javax.security.auth.callback.Callback;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.callback.NameCallback;
import javax.security.auth.callback.PasswordCallback;
import javax.security.auth.login.LoginException;
import javax.security.auth.spi.LoginModule;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.spia.businessportal.common.entities.dto.autentication.ldap.MockUpUsuario;
import com.spia.businessportal.common.entities.dto.autentication.ldap.ResponseDTO;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import com.spia.businessportal.common.entities.dto.UsuarioLoginGatewayResultDTO;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.utils.AuditLogRegisterUtil;
import com.spia.businessportal.service.LoginService;
import com.spia.entity.entities.login.ldap.CompanyTypeDTO;
import com.spia.entity.entities.login.ldap.LoginResponseDTO;
import com.spia.entity.entities.login.ldap.RolDTO;
import com.spia.entity.entities.login.ldap.UsuarioDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;
import com.google.gson.Gson;
import com.spia.businessportal.common.utils.LoginAttemptsSingleton;


public class Login implements LoginModule {

	@Value("#{showCaptchaAttempts['recaptcha.show-captcha-attempts']}")
	private int showCaptchaAttempts;

	private String password;
	private String username;
	private Subject subject;
	private static final Log LOG = LogFactory.getLog(Login.class);
	private static LoginService loginService;

	private ResponseDTO mockUpUsuario1;



	public boolean login() throws LoginException {
		UserPrincipal userLogin = new UserPrincipal();
		UserPrincipal tipoEmpresa = new UserPrincipal();
		UserPrincipal backupUser = new UserPrincipal();

		List<CompanyTypeDTO> tipoEmpresaList = new ArrayList<CompanyTypeDTO>();
		UsuarioDTO usuario = null;
		UsuarioLoginDTO usuarioMockup = null;
		String ipClient = AuditLogRegisterUtil.getClienIp();

		ipClient = ipClient.replaceAll("\\s","");

		String[] clientAddress = ipClient.split(",");

		LOG.info(":::::::::::::::::::::IP:::::::::::::::::::::::"+ipClient);

		boolean ipValidated=false;
		String ipAddress="";

		try {
			ipValidated = loginService.validated();
			ipAddress = loginService.address();
			ipAddress = ipAddress.replaceAll("\\s","");
		} catch (Exception e1) {
			LOG.error("Error al procesar los datos de prueba");
		}
		try {
			if (username.contains("<") || username.contains(">") || username.contains("=")) {
				// Ingresar caracteres validos
				LOG.error("Se ingresaron caracteres no permitidos al formulario.");
				return false;
			}else {
				UsuarioLoginGatewayResultDTO responseDTO = loginService.login(username, password, ipAddress);

				ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
						.currentRequestAttributes();
				HttpSession session = servletRequestAttributes.getRequest().getSession();

				backupUser.setUser(responseDTO.getResult());
				backupUser.setName("backupUser");
				subject.getPrincipals().add(backupUser);

				if (responseDTO != null && "true".equalsIgnoreCase(responseDTO.getSuccess())) {
					tipoEmpresaList = responseDTO.getResult().getEmpresa().getTiposEmpresas();

					for(CompanyTypeDTO tipoEmpresaItem : tipoEmpresaList) {
						tipoEmpresaItem.setSelected(true);
					}

					if (responseDTO != null) {
						tipoEmpresa.setMembers(tipoEmpresaList);
						tipoEmpresa.setName("tipoEmpresa");
						subject.getPrincipals().add(tipoEmpresa);

						userLogin.setUser(responseDTO.getResult());
						userLogin.setName("User");
						subject.getPrincipals().add(userLogin);
						return true;
					} else {
						this.showCaptcha(ipClient, username);
					}
				} else {
					LOG.error(responseDTO.getError());
			        session.setAttribute("Error", responseDTO.getError());	
					this.showCaptcha(ipClient, username);
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage());
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean abort() throws LoginException {
		return false;
	}

	@Override
	public boolean commit() throws LoginException {
		return true;
	}

	@Override
	public boolean logout() throws LoginException {
		return false;
	}

	public void initialize(Subject subject, CallbackHandler callbackHandler, Map<String, ?> state,
						   Map<String, ?> options) {
		this.subject = subject;

		try {
			NameCallback nameCallback = new NameCallback("prompt");
			PasswordCallback passwordCallback = new PasswordCallback("prompt", false);

			callbackHandler.handle(new Callback[] { nameCallback, passwordCallback });
			password = new String(passwordCallback.getPassword());
			username = nameCallback.getName();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
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

	private boolean showCaptcha(String ipAddress, String user) {
		boolean showCaptcha = false;
		if (LoginAttemptsSingleton.getInstance().getLoginAttepmts().containsKey(ipAddress)) {
			// Si la ip y el usuario ya existen en la variable, verifico la cantidad de
			// intentos fallidos.
			Map<String, Integer> ipMap = LoginAttemptsSingleton.getInstance().getLoginAttepmts().get(ipAddress);
			// Si la ip ya existía pero el usuario no, agrego sólo la entrada del usuario
			if (ipMap.containsKey(user)) {
				Integer loginAttepmts = ipMap.get(user);
				loginAttepmts++;
				if (loginAttepmts >= this.getShowCaptchaAttempts()) {
					// Si hubo más de 3 intentos fallidos, muestro el captcha.
					ipMap.put(user, loginAttepmts);
					showCaptcha = true;
				} else {
					// Si no tuvo más de 3 intentos, sólo incremento en uno el nro de intentos
					ipMap.put(user, loginAttepmts);
				}
			} else {
				ipMap.put(user, 1);
			}
		} else {
			// Si la ip no existía, la agrego al mapa.
			Map<String, Integer> userMap = new HashMap<String, Integer>();
			userMap.put(user, 1);
			LoginAttemptsSingleton.getInstance().getLoginAttepmts().put(ipAddress, userMap);
		}
		LOG.info("001.LoginAttemptsSingleton.getInstance().getLoginAttepmts(): " + LoginAttemptsSingleton.getInstance().getLoginAttepmts());
		return showCaptcha;
	}

	public int getShowCaptchaAttempts() {
		return showCaptchaAttempts;
	}

	public void setShowCaptchaAttempts(int showCaptchaAttempts) {
		this.showCaptchaAttempts = showCaptchaAttempts;
	}



	/**
	 * @return the loginService
	 */
	public static LoginService getLoginService() {
		return loginService;
	}

	/**
	 * @param loginService the loginService to set
	 */
	public static void setLoginService(LoginService loginService) {
		Login.loginService = loginService;
	}

}