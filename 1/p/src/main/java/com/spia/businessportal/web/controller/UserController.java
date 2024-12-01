/**
 * 
 */
package com.spia.businessportal.web.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.switchuser.SwitchUserFilter;
import org.springframework.security.web.authentication.switchuser.SwitchUserGrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.HistoryServiceDTO;
import com.spia.businessportal.common.entities.dto.ImpersonalizatedDataDTO;
import com.spia.businessportal.common.entities.dto.MobileNotificationInfoDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.filters.TruckVisitFilter;
import com.spia.businessportal.common.utils.PrivilegesUtil;
import com.spia.businessportal.common.utils.SecurityUtils;
import com.spia.businessportal.service.HistoryService;
import com.spia.services.security.esb.entities.LdapUserResult;
import com.spia.services.security.esb.entities.SecurityEsbResponse;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;
import java.util.Map;

import com.google.gson.Gson;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import org.springframework.beans.factory.annotation.Value;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.businessportal.common.entities.dto.HistoryAppointmentsCriteria;

/**
 * @author diego Controlador que contiene las operaciones asociadas a usuarios,
 *         roles, y permisos de los mismos
 */
@RequestMapping("/api/user")
@Controller
public class UserController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(UserController.class);
	@Autowired
	private HistoryService historyService;
	@Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;

	/**
	 * GET /user -> obtener el usuario actual (logueado)
	 * 
	 * @return un usuario
	 * @throws BusinessException
	 */
	@RequestMapping(value = "", method = RequestMethod.GET)
	public @ResponseBody String getUser() throws BusinessException {
		UsuarioLoginDTO user = this.getUserBO().getCurrentUser();

		String parsedResponse = new Gson().toJson(user);
		String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /user UserController");

		return encryptedResponse;
	}

	@RequestMapping(value = "/username/{username}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getUserByUserName(@PathVariable("username") String username)
			throws BusinessException {
		ResponseEntity<?> re = null;
		try {
			UsuarioLoginDTO user = this.getUserBO().getByUsername(username);
			re = new ResponseEntity<UsuarioLoginDTO>(user, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			String msg = getProperty("Controller.NonExistentUserError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * GET /role -> obtiene los roles del usuario actual
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws BusinessException
	 */
	// @RequestMapping(value = "/role", method = RequestMethod.GET)
	// public @ResponseBody String getRole(HttpServletRequest request, HttpServletResponse response)
	// 		throws BusinessException {
	// 	List<Permission> listPermission = this.getUserBO().getCurrentUser().getPrivileges();// .get(0).getCode();
	// 	String listPermissionSTR = new Gson().toJson(listPermission);
	// 	String bodyEncrypted = AESEncryptionUtil.getInstance(initVector, key).encrypt(listPermissionSTR);
	// 	return bodyEncrypted; 
	// }

	/**
	 * GET /activity -> obtiene las activities del agente
	 */
	@RequestMapping(value = "/activity/agent", method = RequestMethod.GET)
	public @ResponseBody List<Pin> getActivitiesAgent(HttpServletRequest request, HttpServletResponse response)
			throws BusinessException {
		return this.getPinBO().filterPin(false, false, true, this.getUserBO().getCurrentUser(), null, false, false,
				false, true, true, null, null, null);
	}

	/**
	 * GET /activity -> obtiene las activities del truckingCompany
	 */
	@RequestMapping(value = "/activity/truck/{page}/{amount}", method = RequestMethod.GET)
	public @ResponseBody List<TruckVisit> getActivitiesTruck(HttpServletRequest request, HttpServletResponse response,
			@PathVariable Integer page, @PathVariable Integer amount) throws BusinessException {
		TruckVisitFilter truckVisitFilter = new TruckVisitFilter();
		List<TruckVisit> truckVisitList = new ArrayList<TruckVisit>();
		if (this.getUserBO().getCurrentUser().getEmpresa().getId() != null
				&& this.getUserBO().getCurrentUser().getEmpresa().getId() != "") {
			truckVisitFilter.setN4UserIdLdap(this.getUserBO().getCurrentUser().getEmpresa().getId());
			truckVisitFilter.setCanceled(false);
			truckVisitList = this.getTruckVisitBO()
					.search(truckVisitFilter, new Page(page < 1 ? 1 : page, amount < 0 ? 0 : amount)).getResult();
		}
		return truckVisitList;
	}

	private void sendAccountActivationEmail(User user) {

	}

	/**
	 * GET /ImpersonalizatedDataDTO -> devuelvo el nombre de usuario del autenticado
	 * y el imitador
	 * 
	 * @return un usuario
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/impersonalizated", method = RequestMethod.GET)
	public @ResponseBody ImpersonalizatedDataDTO getImpersonalizated() throws BusinessException {
		ImpersonalizatedDataDTO data = null;
		if (SecurityUtils.isImpersonating()) {
			data = new ImpersonalizatedDataDTO();
			Collection<? extends GrantedAuthority> authorities = SecurityContextHolder.getContext().getAuthentication()
					.getAuthorities();
			for (GrantedAuthority grantedAuthority : authorities) {
				if (SwitchUserFilter.ROLE_PREVIOUS_ADMINISTRATOR.equals(grantedAuthority.getAuthority())) {
					data.setImpersonator(
							((String) (((SwitchUserGrantedAuthority) grantedAuthority).getSource().getPrincipal())));
				}
			}
			data.setImpersonated(this.getUserBO().getCurrentUser().getEmpresa().getCompanyName());
		}
		return data;
	}

	/**
	 * GET /activity -> obtiene las activities del truckingCompany
	 */
	@RequestMapping(value = "/history/{page}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getHistory(@RequestBody HistoryAppointmentsCriteria criteria, @PathVariable Integer page) {
		ResponseEntity<?> re = null;
		try {
			List<HistoryServiceDTO> history = historyService.getHistory(criteria, page);
			if (history != null && !history.isEmpty()) {
				//re = new ResponseEntity<List<HistoryServiceDTO>>(history, HttpStatus.OK);
				String parsedResponse = new Gson().toJson(history); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /history/{page} UserController");
				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);	 
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.HistoryError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

//    @RequestMapping(value = "/restriction/company", method = RequestMethod.GET)
//    public @ResponseBody ResponseEntity<?> getRestrictionPrivilegesCompany(@PathVariable Integer page) {
//        ResponseEntity<?> re = null;
//        try {
//            List<HistoryServiceDTO> history = historyService.getHistory(page);
//            if (history != null && !history.isEmpty()) {
//                re = new ResponseEntity<List<HistoryServiceDTO>>(history, HttpStatus.OK);
//            }
//
//        } catch (Exception e) {
//            LOG.error(e.getMessage(), e);
//            ResponseError error = new ResponseError();
//            String[] strParams = null;
//            String msg = getProperty("Controller.HistoryError", strParams, getApplicationContext());
//            error.setError(msg);
//            re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
//        }
//        return re;
//    }

	/**
	 * Servicio que permite traer los usuario de una empresa.
	 * 
	 * @company Assert Solutions S.A.S.
	 * @author Kevin Ronderos
	 * @since 22 jul. 2019
	 *
	 */
	@RequestMapping(value = "/company", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getUserByCompany() {
		ResponseEntity<?> re = null;
		try {

			// String nit = this.getUserBO().getCurrentUser().getNit();

			// SecurityEsbResponse<LdapUserResult> usersCompany =
			// this.getSecurityEsbBO().getCompanyUsers(nit);
			SecurityEsbResponse<LdapUserResult> usersCompany = new SecurityEsbResponse<>();

			HttpSession session = null;
			if (RequestContextHolder.getRequestAttributes() != null) {
				ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
						.currentRequestAttributes();
				session = servletRequestAttributes.getRequest().getSession();

				//if (session != null && session.getAttribute("usersCompany") == null) {
					this.getUserBO().getUsersCompany();
				//}

				usersCompany = (SecurityEsbResponse<LdapUserResult>) session.getAttribute("usersCompany");
			}

			String parsedResponse = new Gson().toJson(usersCompany); 
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /company UserController");

			re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.PrivilegeRestrictedNoSavedError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
//    

	/**
	 * .
	 * 
	 * @company Assert Solutions S.A.S.
	 * @author Kevin Ronderos
	 * @since 22 jul. 2019
	 *
	 */

	@RequestMapping(value = "/notification/mobile/{userName}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getMobileNotificationInfo(@PathVariable String userName)
			throws BusinessException {
		ResponseEntity<?> re = null;
		try {

			SecurityEsbResponse<MobileNotificationInfoDTO> mobileUserInfo = this.getSecurityEsbBO()
					.getMobileNotificationInfo(userName);
			re = new ResponseEntity<SecurityEsbResponse<MobileNotificationInfoDTO>>(mobileUserInfo, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Config.views.config-notificaction.NOT_FOUND_RESULT", strParams,
					getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Servicio que actualiza el usario.
	 * 
	 * @company Assert Solutions S.A.S.
	 * @author Kevin Ronderos
	 * @since 23 jul. 2019
	 *
	 */
	@RequestMapping(value = "/mobile/info/update", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> updateMobileNotificationInfo(
			@RequestBody MobileNotificationInfoDTO mobileNotificationInfo) throws BusinessException {
		ResponseEntity<?> re = null;
		try {

			SecurityEsbResponse<Boolean> mobileUserInfo = this.getSecurityEsbBO()
					.updateMobileNotificationInfo(mobileNotificationInfo);

			String parsedResponse = new Gson().toJson(mobileUserInfo); 
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /mobile/info/update UserController");

			re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Config.views.config-notificaction.NOT_FOUND_RESULT", strParams,
					getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/exists-admin-Company",method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> existsAdminCompany() throws BusinessException {
		ResponseEntity<?> re = null;
		try {
			// TODO realizar el response y consumirlo desde la nueva directiva
			Boolean existsAdminCompany = PrivilegesUtil.existsAdminCompany();
			re = new ResponseEntity<Boolean>(existsAdminCompany, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Config.views.config-notificaction.NOT_FOUND_RESULT", strParams,
					getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

}
