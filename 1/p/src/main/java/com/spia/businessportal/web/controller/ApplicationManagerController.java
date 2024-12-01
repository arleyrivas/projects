/**
 * 
 */
package com.spia.businessportal.web.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.naming.CommunicationException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.audit.Auditable;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.LoginAttemptsSingleton;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author diego
 *
 *         controlador frontal de la aplicación, se encargar de autorizar y
 *         rutear al path adecuado al usuario logueado.
 *
 */
@RequestMapping("/")
@Controller
@Auditable("ApplicationManagerController")
public class ApplicationManagerController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(ApplicationManagerController.class);
	private static final String INDEX = "app/es/index";
	@Autowired
	private UserBO userBO;
	@Value("#{showCaptchaAttempts['recaptcha.show-captcha-attempts']}")
	private int showCaptchaAttempts;
	@Value("#{showCaptchaAttempts['recaptcha.site-key']}")
	private String siteKey;

	@Value("#{showCaptchaAttempts['cookie.httpOnly']}")
	private boolean httpOnly;

	@Value("#{showCaptchaAttempts['cookie.secure']}")
	private boolean secure;

	/**
	 * Login de la aplicación, rutea al usuario agent, truck, admin o redirecciona
	 * al login si las credenciales son erroneas.
	 * 
	 * @param request:  petición htt.
	 * @param response: respuesta http
	 */
	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView root(HttpServletRequest request, HttpServletResponse response) {
		try {
			UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
			if (currentUser == null) {
				LOG.info("-> Usuario no autenticado");
				response.sendRedirect(request.getContextPath() + "/index");
			} else {
				String sessionid = request.getSession().getId();
				String contextPath = request.getContextPath();
				Cookie cookie = new Cookie("JSESSIONID", sessionid);

				cookie.setMaxAge(60);
				cookie.setPath(contextPath);
				cookie.setSecure(secure);
				cookie.setHttpOnly(httpOnly);
				response.addCookie(cookie);

				if (LoginAttemptsSingleton.getInstance().getLoginAttepmts().containsKey(request.getRemoteAddr())) {
					LoginAttemptsSingleton.getInstance().getLoginAttepmts().remove(request.getRemoteAddr());
				}



				if ((this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT) && this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK)) || (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT) && userBO.hasPermission(User.COMPANY_TYPE_CUSTOMER)) || userBO.hasPermission(User.COMPANY_TYPE_CUSTOMER) && this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK)) {
					response.sendRedirect(request.getContextPath() + "/multiempresas");
				} else if (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT)) {
					LOG.info("-> Current User: " + currentUser.getUserName());
					response.sendRedirect(request.getContextPath() + "/agent");
				} else if (this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK)) {
					LOG.info("-> Current User: " + currentUser.getUserName());
					response.sendRedirect(request.getContextPath() + "/truck");
				} else if (this.getUserBO().hasPermission(User.COMPANY_TYPE_TERMINAL)) {
					response.sendRedirect(request.getContextPath() + "/documental");
				} else if (userBO.hasPermission(User.COMPANY_TYPE_CUSTOMER) || this.getUserBO().hasPermission(User.COMPANY_TYPE_TERMINAL)) {
					response.sendRedirect(request.getContextPath() + "/customersrv");
				} else if (userBO.hasPermission(User.COMPANY_TYPE_TEMPORAL)) {
					LOG.info("-> Current User: " + currentUser.getUserName());
					response.sendRedirect(request.getContextPath() + "/gestion-empresa");
				} else {
					response.sendRedirect(request.getContextPath() + "/index");
				}
			}
		} catch (Exception e) {
			LOG.error("Error al acceder a la aplicación", e);
		}
		return null;
	}

	/**
	 * Redirección al recurso public/index.jsp cuando el path es /index
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return ModelAndView: index
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 */
	@Auditable("index")
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public ModelAndView index(HttpServletRequest request, HttpServletResponse response,
			@ModelAttribute("message") String message) throws BusinessException {
		ModelAndView mav = new ModelAndView("public/index");
		if (!"".equals(message) && message != null) {
			mav.addObject("message", message);
		}
		return mav;
	}

	/**
	 * redirección al loginFailed cuando las credenciales son erróneas.
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return ModelAndView: fallo de login
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 * @throws IOException
	 */
	@RequestMapping(value = "/loginFailed", method = { RequestMethod.GET, RequestMethod.POST })
	public ModelAndView loginFailed(HttpServletRequest request, HttpServletResponse response)
			throws BusinessException, IOException {
		String exceptionReason = "";
		String lockCompany = "";
		String ipRestription = "";
		Exception exception = (Exception) request.getSession().getAttribute("SPRING_SECURITY_LAST_EXCEPTION");
		exceptionReason = (String) request.getSession().getAttribute("Error");
		lockCompany = (String) request.getSession().getAttribute("LOCK_COMPANY");
		ipRestription = (String) request.getSession().getAttribute("IP_RESTRIPTION");

		boolean invalidCredentials = false;
		if (exception != null) {
			LOG.error("-> Error al autenticar: " + exception.getMessage());
			if (exception.getMessage().contains("AUTHENTICATION ERROR:"))
				invalidCredentials = true;
		}
		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
		ModelAndView mav = new ModelAndView("public/login_failed");
		LOG.error("-> exceptionReason: " + exceptionReason);

		mav.addObject("loginRemoteError", exceptionReason);

		// Obtengo la ip
		String ipAddress = request.getRemoteAddr();
		LOG.info("ip: " + ipAddress);
		// this.showCaptcha(ipAddress,"mpereat")
		if ((lockCompany != null && lockCompany.equals("TRUE"))
				|| (exceptionReason != null)
				|| (invalidCredentials && request.getSession().getAttribute("SPRING_SECURITY_LAST_USERNAME") != null
						&& this.showCaptcha(ipAddress,
								request.getSession().getAttribute("SPRING_SECURITY_LAST_USERNAME").toString()))) {
			mav.addObject("showCaptcha", "show");
			mav.addObject("sitekey", siteKey);
		} else if (!invalidCredentials
				&& !(exception != null && exception.getCause() instanceof CommunicationException)) {
			response.sendRedirect(request.getContextPath() + "/logout");
			return new ModelAndView("public/index");
		}
		return mav;

	}

	/**
	 * mensaje de error cuando se quiere acceder a un recurso no autorizado.
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return ModelAndView: acceso denegado al recurso
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 */
	
	@RequestMapping(value = "/accessDenied", method = { RequestMethod.GET, RequestMethod.POST })
	public ModelAndView accessDenied(HttpServletRequest request, HttpServletResponse response)
			throws BusinessException {
		Exception exception = (Exception) request.getSession().getAttribute("SPRING_SECURITY_LAST_EXCEPTION");

		ModelAndView mav = new ModelAndView("public/login_failed");
		mav.addObject("error", "IntroPage.LoginError.TOKEN");
		
		if(exception != null)
		{
			LOG.error("-> Error al autenticar: " + exception.getMessage());
		}
		return mav;

	}

	/**
	 * redirección al index para agent
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return ModelAndView: index del agent
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 * @throws IOException
	 */
	@RequestMapping(value = "/agent", method = RequestMethod.GET)
	public String homeAgent(HttpServletRequest request, HttpServletResponse response)
			throws BusinessException, IOException {
		return INDEX;
	}

	/**
	 * redirección al index para el truck.
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return ModelAndView: index del truck
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 * @throws IOException
	 */
	@RequestMapping(value = "/truck", method = RequestMethod.GET)
	public String homeTruck(HttpServletRequest request, HttpServletResponse response)
			throws BusinessException, IOException {
		return INDEX;
	}

	/**
	 * redirección al index para el customersrv
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return ModelAndView: del customersrv
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 */
	@RequestMapping(value = "/customersrv", method = RequestMethod.GET)
	public String homeCS(HttpServletRequest request, HttpServletResponse response) throws BusinessException {
		return INDEX;
	}

	/**
	 * redirección al index de logs
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return ModelAndView: index de los logs
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 */
	@RequestMapping(value = "/logs", method = RequestMethod.GET)
	public String homeLogs(HttpServletRequest request, HttpServletResponse response) throws BusinessException {
		return INDEX;
	}

	/**
	 * redirección al index de documental
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return ModelAndView: index de los logs
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 */
	@RequestMapping(value = "/documental", method = RequestMethod.GET)
	public String homeDocumental(HttpServletRequest request, HttpServletResponse response) throws BusinessException {
		return INDEX;
	}

	/**
	 * redirección al index de multiempresa
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return ModelAndView: index de los multiempresa
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 */
	@RequestMapping(value = "/multiempresa", method = RequestMethod.GET)
	public String homeMultiempresa(HttpServletRequest request, HttpServletResponse response) throws BusinessException {
		return INDEX;
	}

	/**
	 * redirección al index de agente y transportista
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return ModelAndView: index de los agentes y transportistas
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 */
	@RequestMapping(value = "/multiempresas", method = RequestMethod.GET)
	public String homeMultiempresas(HttpServletRequest request, HttpServletResponse response) throws BusinessException {
		return INDEX;
	}

	/**
	 * redirección al index de gestion-empresa
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return ModelAndView: index de los gestion-empresa
	 * @throws BusinessException cuando ocurre un fallo en el servidor
	 */
	@RequestMapping(value = "/gestion-empresa", method = RequestMethod.GET)
	public String homeGestionEmpresa(HttpServletRequest request, HttpServletResponse response) throws BusinessException {
		return INDEX;
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
		LOG.info("01.LoginAttemptsSingleton.getInstance().getLoginAttepmts(): " + LoginAttemptsSingleton.getInstance().getLoginAttepmts());
		return showCaptcha;
	}

	/**
	 * Mensaje de error cuando se quiere acceder a un recurso no autorizado.
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-08
	 */
	@RequestMapping(value = "/privilegeRestricted", method = { RequestMethod.GET, RequestMethod.POST })
	public @ResponseBody ResponseEntity<?> privilegeRestricted(HttpServletRequest request, HttpServletResponse response)
			throws BusinessException {

		ResponseError error = new ResponseError();
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		String[] strParams = { currentUser.getUserName() };
		error.setError(getProperty("Controller.PrivilegeRestricted", strParams, getApplicationContext()));
		return new ResponseEntity<ResponseError>(error, HttpStatus.FORBIDDEN);

	}

	@RequestMapping(value = "/privilegeSecondPassword", method = { RequestMethod.GET, RequestMethod.POST })
	public ModelAndView privilegeSecondPassword(HttpServletRequest request, HttpServletResponse response)
			throws BusinessException, IOException {
		response.setStatus(204);
		ModelAndView mav = new ModelAndView("public/login_failed");

		return mav;

	}

	@Auditable("getuser")
	public UserBO getUserBO() {
		return userBO;
	}

	@Auditable("setuser")
	public void setUserBO(UserBO userBO) {
		this.userBO = userBO;
	}

	public int getShowCaptchaAttempts() {
		return showCaptchaAttempts;
	}

	public void setShowCaptchaAttempts(int showCaptchaAttempts) {
		this.showCaptchaAttempts = showCaptchaAttempts;
	}

	// Logout mapping
	@RequestMapping("/logout")
	public ModelAndView logout(HttpServletRequest request, HttpServletResponse response) throws IOException {
		// request.getSession().invalidate();
		response.sendRedirect(request.getContextPath() + "/index");
		return null;
	}

}
