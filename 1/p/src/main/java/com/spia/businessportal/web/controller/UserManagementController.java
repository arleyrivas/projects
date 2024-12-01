package com.spia.businessportal.web.controller;

import java.util.ArrayList;
import java.util.List;

import javax.naming.Name;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.ldap.proxy.dto.EmpresaDTO;
import com.spia.businessportal.common.ldap.proxy.dto.InactivarUsuarioDTO;
import com.spia.businessportal.common.ldap.proxy.dto.SecondPasswordMethodDTO;
import com.spia.businessportal.common.ldap.proxy.dto.UsuarioDTO;
import com.spia.businessportal.common.ldap.proxy.dto.UsuarioRolesDTO;
import com.spia.businessportal.common.utils.PrivilegesUtil;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.businessportal.common.entities.dto.AdministrationNotificationDTO;
import ar.com.fluxit.framework.common.exception.BusinessException;
import com.fasterxml.jackson.core.type.TypeReference;
import java.util.Map;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Value;

@RequestMapping("/api/user-management")
@Controller
public class UserManagementController extends AbstractController {
	private static final Log LOG = LogFactory.getLog(UserManagementController.class);

	@Value("${encrypt.messages.initialVector}") public String initVector;
	@Value("${encrypt.messages.key}") public String key;

	@RequestMapping(value = "/user", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody ResponseEntity<?> saveUser(@RequestBody UsuarioDTO usuario) throws BusinessException {
		ResponseEntity<?> re = null;		
		try {

			EmpresaDTO empresa = new EmpresaDTO();
			empresa.setId(this.getUserBO().getCurrentUser().getEmpresa().getId());
			usuario.setEmpresa(empresa);
			usuario.setCreateUser(this.getUserBO().getCurrentUser().getUserName());
			@SuppressWarnings("unused")
			Boolean create=true;
			
			SecurityEsbResponse<GenericResponseDTO> response = this.getLdapProxyEsbBO().getInfoUserByUsernameAndEmail(usuario.getUserName(), "");			
			
				if (response.isSuccess()) {
				ResponseError error = new ResponseError();				
				List<Object> results = (List<Object>) response.getResult();
				for (Object result : results) {	
					String users = result.toString();					
						if (users.contains("userName="+usuario.getUserName()+",")) {
							create=false;
							}					
				}
				if (create.equals(false)) {
					String[] strParams = {usuario.getUserName()};				
					String msg = getProperty("Config.views.config-notificaction.USER_EXIST", strParams,
							getApplicationContext());
					error.setError(msg);
					re = new ResponseEntity<ResponseError>(error, HttpStatus.OK);
				}
				
			}
			if (create.equals(true)) { 
				SecurityEsbResponse<GenericResponseDTO> responseSaveUser = this.getLdapProxyEsbBO().crearUsuario(usuario);
				re = new ResponseEntity<SecurityEsbResponse<GenericResponseDTO>>(responseSaveUser, HttpStatus.OK);
			}
			

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

	@RequestMapping(value = "/user", method = RequestMethod.PUT, consumes = "application/json")
	public @ResponseBody ResponseEntity<?> updateUser(@RequestBody Map<String, String> body) throws BusinessException {
		ResponseEntity<?> re = null;

		String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "PUT /user-management/user UserManagementController");
		UsuarioDTO usuario = new Gson().fromJson(decryptedResponse, UsuarioDTO.class); 

		try {
			UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
			PrivilegesUtil.setPrivilegeId("ADM_GU_EU_SAVE");
			String[] mailAdmin = usuario.getCorreo().split("~");
			String[] phoneAdmin = usuario.getTelexNumber().split("~");
			if (user.getUserName().equals(usuario.getUserName())) {
				usuario.setCorreo(mailAdmin[0]);
				usuario.setTelexNumber(phoneAdmin[0]);
			}
			SecurityEsbResponse<GenericResponseDTO> responseSaveUser = this.getLdapProxyEsbBO().editarUsuario(usuario);
			re = new ResponseEntity<SecurityEsbResponse<GenericResponseDTO>>(responseSaveUser, HttpStatus.OK);

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

	@RequestMapping(value = "/user/assign-roles", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody ResponseEntity<?> assignRolesUser(@RequestBody Map<String, String> body)
			throws BusinessException {
		ResponseEntity<?> re = null;

		String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /user/assign-roles UserManagementController");
		UsuarioRolesDTO usuarioRoles = new Gson().fromJson(decryptedResponse, UsuarioRolesDTO.class); 

		try {
			SecurityEsbResponse<GenericResponseDTO> responseSaveUser = this.getLdapProxyEsbBO()
					.asignarRoles(usuarioRoles);

			re = new ResponseEntity<SecurityEsbResponse<GenericResponseDTO>>(responseSaveUser, HttpStatus.OK);

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

	@RequestMapping(value = "/user/disable", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody ResponseEntity<?> assignRolesUser(@RequestBody InactivarUsuarioDTO inactivarUsuario)
			throws BusinessException {
		ResponseEntity<?> re = null;
		try {

			SecurityEsbResponse<GenericResponseDTO> responseSaveUser = this.getLdapProxyEsbBO()
					.inactivarUsuario(inactivarUsuario);
			// this.getUserBO().getUsersCompany();
			re = new ResponseEntity<SecurityEsbResponse<GenericResponseDTO>>(responseSaveUser, HttpStatus.OK);

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

	@RequestMapping(value = "/company/second-password-method/{companyId}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getSecondPasswordMethod(@PathVariable String companyId)
			throws BusinessException {
		ResponseEntity<?> re = null;
		try {

			SecurityEsbResponse<GenericResponseDTO> response = this.getLdapProxyEsbBO()
					.getSecondPasswordMethod(companyId);

			re = new ResponseEntity<SecurityEsbResponse<GenericResponseDTO>>(response, HttpStatus.OK);

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

	@RequestMapping(value = "/company/second-password-method", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody ResponseEntity<?> saveSecondPasswordMethod(
			@RequestBody SecondPasswordMethodDTO secondPasswordMethod) throws BusinessException {
		ResponseEntity<?> re = null;
		try {

			SecurityEsbResponse<GenericResponseDTO> response = this.getLdapProxyEsbBO()
					.saveSecondPasswordMethod(secondPasswordMethod);

			re = new ResponseEntity<SecurityEsbResponse<GenericResponseDTO>>(response, HttpStatus.OK);

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

	@RequestMapping(value = "/rol/roles-by-company-id/{companyId}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getRolesByCompanyId(@PathVariable String companyId)
			throws BusinessException {
		ResponseEntity<?> re = null;
		try {
			List<AdministrationNotificationDTO> administrationNotificationDTO = new ArrayList<>();

			SecurityEsbResponse<GenericResponseDTO> response = this.getLdapProxyEsbBO().getRolesByCompanyId(companyId);
			List<AdministrationNotificationDTO> notificationEsbResponse = (List<AdministrationNotificationDTO>) response.getResult();

			ObjectMapper mapper = new ObjectMapper();
			List<AdministrationNotificationDTO> accountList = mapper.convertValue(notificationEsbResponse,
				new TypeReference<List<AdministrationNotificationDTO>>() {
			});

			if (accountList != null) {
				for (AdministrationNotificationDTO administrationNotification : accountList) {
					AdministrationNotificationDTO resultAdministrationNotification = new AdministrationNotificationDTO();

					resultAdministrationNotification.setId(administrationNotification.getId());
					resultAdministrationNotification.setNombre(administrationNotification.getNombre());
					resultAdministrationNotification.setCode(administrationNotification.getDescripcion().split("~")[0]);
					resultAdministrationNotification.setDescripcion(administrationNotification.getDescripcion().split("~")[1]);
					resultAdministrationNotification.setBusinessCategory(administrationNotification.getBusinessCategory());

					administrationNotificationDTO.add(resultAdministrationNotification);
				}
			}

			GenericResponseDTO<List<AdministrationNotificationDTO>> genericResponse = new GenericResponseDTO();
			genericResponse.setResult(administrationNotificationDTO);

			String parsedResponse = new Gson().toJson(genericResponse); 
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /rol/roles-by-company-id/{companyId} UserManagementController");

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

	@RequestMapping(value = "/rol/roles-by-company-id-and-user/{companyId}/{user}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getRolesByCompanyIdAndUser(@PathVariable String companyId,
			@PathVariable String user) throws BusinessException {
		ResponseEntity<?> re = null;
		try {

			SecurityEsbResponse<GenericResponseDTO> response = this.getLdapProxyEsbBO()
					.getRolesByCompanyIdAndUser(companyId, user);
			re = new ResponseEntity<SecurityEsbResponse<GenericResponseDTO>>(response, HttpStatus.OK);

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

	@RequestMapping(value = "/user/get-info-user-by-username-and-email/{username}/{email}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getInfoUserByUsernameAndEmail(@PathVariable String username,
			@PathVariable String email) throws BusinessException {
		ResponseEntity<?> re = null;
		try {
			SecurityEsbResponse<GenericResponseDTO> response = this.getLdapProxyEsbBO()
					.getInfoUserByUsernameAndEmail(username, "");

			String parsedResponse = new Gson().toJson(response); 
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /privileges-notifiable-company UserManagementController");

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

	@RequestMapping(value = "/password/reset-password-user/{username}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> resetPasswordUser(@PathVariable String username) throws BusinessException {
		ResponseEntity<?> re = null;
		try {

			SecurityEsbResponse<GenericResponseDTO> response = this.getLdapProxyEsbBO().resetPasswordUser(username);
			re = new ResponseEntity<SecurityEsbResponse<GenericResponseDTO>>(response, HttpStatus.OK);

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
