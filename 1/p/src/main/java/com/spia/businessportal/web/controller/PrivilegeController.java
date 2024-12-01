/**
 * 
 */
package com.spia.businessportal.web.controller;

import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Value;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import java.util.Map;
import com.spia.businessportal.common.entities.User;
import ar.com.fluxit.framework.entities.user.DiaRestriccionDTO;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.entities.dto.IpRestrictionDTO;
import com.spia.businessportal.common.entities.dto.NotificationPrivilegesDTO;
import com.spia.businessportal.common.entities.dto.PrivilegeInfoDTO;
import com.spia.businessportal.common.entities.dto.PrivilegeListResponseDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioDiaRestriccionDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioResponseDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioResponseUpdateDTO;
import com.spia.businessportal.common.entities.dto.PrivilegiosNotificablesEmpresaDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.RequestDTO;
import com.spia.businessportal.common.entities.dto.ResponseDTO;
import com.spia.businessportal.common.entities.dto.ResponsePrivilegesNotifiableCompanyDTO;
import com.spia.businessportal.common.entities.dto.ResticcionPrivilegioEmpresaDTO;
import com.spia.businessportal.common.entities.dto.SecondPasswordGenerateRequestDTO;
import com.spia.businessportal.common.entities.dto.TruckCapacityServiceDTO;
import com.spia.businessportal.common.entities.dto.ValidateCodeRequestDTO;
import com.spia.businessportal.common.entities.dto.SecondPasswordValidationMinResponseDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.NotificationUtils;
import com.spia.businessportal.common.utils.PrivilegesUtil;
import com.spia.services.security.esb.entities.CompanyType;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import ar.com.fluxit.framework.entities.user.PrivilegeDTO;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.businessportal.common.entities.dto.ActionRestrictionHourDTO;
import com.spia.businessportal.common.entities.dto.ActionPrivilegeDTO;

import com.spia.entity.entities.login.ldap.CompanyTypeDTO;
import com.spia.businessportal.common.entities.dto.AdministrationActionsResponseDTO;

/**
 * controlador donde se expone la api de negocios del portal para
 * {@link com.spia.services.entities.BillOfLading}
 * 
 * @author diego
 *
 */
@RequestMapping("/api/privilege")
@Controller
public class PrivilegeController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(PrivilegeController.class);

	@Autowired
	private SessionFactory sessionFactory;
	
	@Autowired
	private UserBO userBO;

	@Value("${encrypt.messages.initialVector}") public String initVector;
	@Value("${encrypt.messages.key}") public String key;

	/**
	 * Obtiene todos los privilegios que puede configurar el usuario logueado GET
	 * 
	 * @return List<PrivilegioResponseDTO>
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-10 this.containsCode(User.COMPANY_TYPE_TRUCK, user.getEmpresa().getTiposEmpresas())
	 */
	@RequestMapping(value = "", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getConfigPrivileges() {
		List<AdministrationActionsResponseDTO> variable = new ArrayList<>();
		List<AdministrationActionsResponseDTO> target = new ArrayList<>();

		try {
			String nit = this.getUserBO().getCurrentUser().getEmpresa().getId();
			boolean isMemp = false;

			if (this.getUserBO() != null && this.getUserBO().getCurrentUser() != null) {
				for (CompanyTypeDTO perm : this.getUserBO().getCurrentUser().getEmpresa().getTiposEmpresas()) {
					if(perm != null) {
						if (perm.getCompanyTypeId().equals("M_EMP")) {
							isMemp = true;
							break;
						}
					}				
				}
			}

			SecurityEsbResponse<List<PrivilegioResponseDTO>> configPrivileges = this.getSecurityEsbBO()
					.getConfigPrivileges(nit, isMemp);

			variable = (List<AdministrationActionsResponseDTO>) configPrivileges.getResult();

			ObjectMapper mapper = new ObjectMapper();
			List<AdministrationActionsResponseDTO> accountList = mapper.convertValue(variable,
			new TypeReference<List<AdministrationActionsResponseDTO>>() {
			});

		if (accountList != null) {
			for (AdministrationActionsResponseDTO administrationActionsResponse : accountList) {
				AdministrationActionsResponseDTO administrationActionsResponseDTO = new AdministrationActionsResponseDTO();

				administrationActionsResponseDTO.setNombre(administrationActionsResponse.getNombre());
				administrationActionsResponseDTO.setAccion(administrationActionsResponse.getDescripcion().split("~")[0]);
				administrationActionsResponseDTO.setDescripcion(administrationActionsResponse.getDescripcion().split("~")[1]);

				target.add(administrationActionsResponseDTO);
			}
		}

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PrivilegeRestrictedNoGetError", strParams, getApplicationContext());
			LOG.error(e);
			LOG.error(msg);
			ResponseError responseError = new ResponseError();
			responseError.setCode("NOTIFICATION_ERROR");
			responseError.setError(msg);
			responseError.setMessage(msg);
			return new ResponseEntity<ResponseError>(responseError, HttpStatus.OK);
		}

		String parsedResponse = new Gson().toJson(target); 
		String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /privilege PrivilegeController");

		return new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
	}

	/**
	 * Registra la configuracion de la restriccion de privilegios
	 * 
	 * @param resticcionPrivilegioEmpresa
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-12
	 */
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> saveRestrictionPrivilegeCompany(
			@RequestBody Map<String, String> body) {
		ResponseEntity re = null;

		String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /save PrivilegeController");
		ResticcionPrivilegioEmpresaDTO resticcionPrivilegioEmpresa =  new Gson().fromJson(decryptedResponse, ResticcionPrivilegioEmpresaDTO.class); 

		try {
			String nit = this.getUserBO().getCurrentUser().getEmpresa().getId();

			SecurityEsbResponse<List<PrivilegioDiaRestriccionDTO>> userInfo = this.getSecurityEsbBO()
					.getRestrictionPrivilegesCompany(nit);
			List<PrivilegioDiaRestriccionDTO> variable = new ArrayList<>();

			variable = (List<PrivilegioDiaRestriccionDTO>) (List<?>) userInfo.getResult();

			resticcionPrivilegioEmpresa.setNit(nit);

			resticcionPrivilegioEmpresa.setPrivilegios(PrivilegesUtil.mergeListPrivilegioDiaRestriccion(resticcionPrivilegioEmpresa.getPrivilegios(), variable));
			LOG.info("> resticcionPrivilegioEmpresa");
			LOG.info(new Gson().toJson(resticcionPrivilegioEmpresa));
			SecurityEsbResponse<GenericResponseDTO> configPrivileges = this.getSecurityEsbBO()
					.saveRestrictionPrivilegeCompany(resticcionPrivilegioEmpresa);
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

	/**
	 * Obtiene la configuracion horaria por nombre de privilegio
	 * 
	 * @param namePrivilege
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-15
	 */
	@RequestMapping(value = "/name", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getConfigPrivilegesByName(@RequestBody Map<String, String> body) {
		ResponseEntity re = null;

		String nit = this.getUserBO().getCurrentUser().getEmpresa().getId();
		String namePrivilege = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /name PrivilegeController");

		try {
			SecurityEsbResponse<List<PrivilegioDiaRestriccionDTO>> userInfo = this.getSecurityEsbBO()
					.getRestrictionPrivilegesCompany(nit);
			List<PrivilegioDiaRestriccionDTO> variable = new ArrayList<>();

			variable = (List<PrivilegioDiaRestriccionDTO>) (List<?>) userInfo.getResult();
			
			List<DiaRestriccionDTO> diasRestriccion = PrivilegesUtil.getConfigPrivilegesByName(namePrivilege, variable);

			String parsedResponse = new Gson().toJson(diasRestriccion); 
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /name PrivilegeController");

			re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			// String msg = getProperty("Error al consultar configuracion horaria",
			// strParams, getApplicationContext());
			error.setError("Error al consultar configuracion horaria");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}

		return re;
	}

	/**
	 * Guarda en sesion todas las resticiones configuradas por el administrador de
	 * la empresa
	 * 
	 * @param lstPrivilegioDiaRestriccion
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-15
	 */
	private void getRestrictionPrivilegesCompany(List<PrivilegeDTO> lstPrivilegioDiaRestriccion) {

		if (lstPrivilegioDiaRestriccion != null && !lstPrivilegioDiaRestriccion.isEmpty()) {
			HttpSession session = null;
			if (RequestContextHolder.getRequestAttributes() != null) {
				ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
						.currentRequestAttributes();
				session = servletRequestAttributes.getRequest().getSession();
			}
			session.setAttribute("privilegiosEmpresa", lstPrivilegioDiaRestriccion);
		}

	}

	/**
	 * *
	 * 
	 * @param lstPrivilegioDiaRestriccion
	 * @company Assert Solutions S.A.S.
	 * @author Daniel Sánchez
	 * @since 2019-07-29
	 */
	@RequestMapping(value = "/privileges-notifiable-company", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getPrivilegeCompany() {
		ResponseEntity re = null;

		try {
			boolean isMemp = false;
			
			String nit = this.getUserBO().getCurrentUser().getEmpresa().getId();
			for (PrivilegeDTO perm : this.getUserBO().getCurrentUser().getPrivileges()) {
				if(perm.getPrivilegeId() != null) {
					if (perm.getPrivilegeId().equals("M_EMP")) {
						isMemp = true;
						break;
					}
				} 
			}
			
			List<ResponsePrivilegesNotifiableCompanyDTO> listPrivilege = new ArrayList<>();

			PrivilegioDTO[] privilegioDTOTypeList = null;

			SecurityEsbResponse<List<PrivilegioResponseDTO>> configPrivileges = this.getSecurityEsbBO()
					.getConfigPrivileges(nit, isMemp);

			SecurityEsbResponse<PrivilegeListResponseDTO> privilegesList = this.getSecurityEsbBO()
					.getPrivilegesNotificableList();
			
			ArrayList<PrivilegeInfoDTO> listPrivilegeInfo = (ArrayList<PrivilegeInfoDTO>) privilegesList.getResult();

			SecurityEsbResponse<PrivilegiosNotificablesEmpresaDTO> privilegesCompany = this.getSecurityEsbBO()
					.getPrivilegesNotifByCompanyList(nit, "company");

			ArrayList<String> listPrivilegesCompany = (ArrayList<String>) privilegesCompany.getResult();

			if (configPrivileges != null) {
				GsonBuilder builder = new GsonBuilder();
				builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
				builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
				Gson gson = builder.create();
				String jsonInString = gson.toJson(configPrivileges.getResult());
				privilegioDTOTypeList = gson.fromJson(jsonInString, PrivilegioDTO[].class);
			}
			if (listPrivilegeInfo != null) {
				for (PrivilegeInfoDTO privilegeInfo : listPrivilegeInfo) {
					if (Boolean.parseBoolean(privilegeInfo.getIsEnabledNotification())) {

						ResponsePrivilegesNotifiableCompanyDTO objPrivilegeNotification = new ResponsePrivilegesNotifiableCompanyDTO();

						for (PrivilegioDTO privilegioDTO : privilegioDTOTypeList) {

							if (privilegioDTO.getNombre().equals(privilegeInfo.getPrivilegeName())) {
								objPrivilegeNotification.setPrivilegeName(privilegeInfo.getPrivilegeName());
								objPrivilegeNotification.setDescription(privilegeInfo.getDescription());
								objPrivilegeNotification.setActivo(Boolean.FALSE);
								objPrivilegeNotification.setAction(privilegeInfo.getAction());
								for (String privilegeCompany : listPrivilegesCompany) {

									if (privilegeCompany.equals(privilegeInfo.getPrivilegeName())) {
										objPrivilegeNotification.setActivo(Boolean.TRUE);
										break;
									}
								}
								listPrivilege.add(objPrivilegeNotification);
								break;
							}
						}

					}

				}
			} else {
				LOG.warn("No se encontraron privilegios para el nit " + nit);
			}

			String parsedResponse = new Gson().toJson(listPrivilege); 
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /privileges-notifiable-company PrivilegeController");

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

	@RequestMapping(value = "/update-privileges-notifiable-company", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> updatePrivilegeNotificationCompany(
			@RequestBody Map<String, String> body) {
		ResponseEntity re = null;

		String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /update-privileges-notifiable-company PrivilegeController");
		PrivilegiosNotificablesEmpresaDTO privilegio = new Gson().fromJson(decryptedResponse, PrivilegiosNotificablesEmpresaDTO.class); 

		try {
			SecurityEsbResponse<PrivilegioResponseUpdateDTO> responsePrivileges = this.getSecurityEsbBO()
					.updatePrivilegeNotificationCompany(privilegio);
			responsePrivileges.getResult();

			re = new ResponseEntity<PrivilegioResponseUpdateDTO>(new PrivilegioResponseUpdateDTO(), HttpStatus.OK);
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

	@RequestMapping(value = "/notification-privileges", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> notificationPrivilege() {
		ResponseEntity re = null;
		NotificationPrivilegesDTO objNotifPriviDTO = new NotificationPrivilegesDTO();
		objNotifPriviDTO.setCompanyId(this.getUserBO().getCurrentUser().getEmpresa().getId());

		try {
			SecurityEsbResponse<PrivilegioResponseUpdateDTO> responseNotificationPrivileges = this.getSecurityEsbBO()
					.notificationPrivileges(objNotifPriviDTO);
			responseNotificationPrivileges.getResult();

			re = new ResponseEntity<PrivilegioResponseUpdateDTO>(new PrivilegioResponseUpdateDTO(), HttpStatus.OK);
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

	@RequestMapping(value = "/second-password-generate", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> secondPasswordGenerate(
			@RequestBody Map<String, String> body) {
		ResponseEntity re = null;

		String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /second-password-generate PrivilegeController");
		SecondPasswordGenerateRequestDTO secondPasswordGenerateRequest = new Gson().fromJson(decryptedResponse, SecondPasswordGenerateRequestDTO.class);

		try {
			SecurityEsbResponse response = this.getSecurityEsbBO()
					.secondPasswordGenerate(secondPasswordGenerateRequest);
			response.getResult();

			re = new ResponseEntity<SecurityEsbResponse>(response, HttpStatus.OK);
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

	@RequestMapping(value = "/second-password-validation", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<SecondPasswordValidationMinResponseDTO> secondPasswordValidation(
			@RequestBody Map<String, String> body) {
		ResponseEntity re = null;

		String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /second-password-validation PrivilegeController");
		ValidateCodeRequestDTO validateCodeRequest = new Gson().fromJson(decryptedResponse, ValidateCodeRequestDTO.class);

		try {
			SecurityEsbResponse response = this.getSecurityEsbBO().secondPasswordValidation(validateCodeRequest);

			SecondPasswordValidationMinResponseDTO secondPasswordValidationResponse = new SecondPasswordValidationMinResponseDTO();

			secondPasswordValidationResponse.setSuccess(response.isSuccess());

			if(response.isSuccess()) {
				secondPasswordValidationResponse.setMessage("");
			} else {
				secondPasswordValidationResponse.setMessage(response.getError());
			}

			re = new ResponseEntity<>(secondPasswordValidationResponse, HttpStatus.OK);

			if (response.isSuccess()) {
				PrivilegesUtil.savePrivilegesSeconPassGrantedSession(validateCodeRequest.getAction());
			}
		} catch (Exception e) {
			SecondPasswordValidationMinResponseDTO secondPasswordValidationResponse = new SecondPasswordValidationMinResponseDTO();

			secondPasswordValidationResponse.setSuccess(false);
			secondPasswordValidationResponse.setMessage("");

			re = new ResponseEntity<>(secondPasswordValidationResponse, HttpStatus.BAD_REQUEST);
		}

		return re;
	}

	@RequestMapping(value = "/is-required-second-password/{privilegeId}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> isRequredSecondPassword(@PathVariable String privilegeId) {

		ResponseEntity re = null;
		Boolean isRequired = false;
		try {

			if (PrivilegesUtil.isPrivegeSecondPassRequired(privilegeId)) {
				isRequired = true;
				PrivilegesUtil.saveCurrentPrivilegeSession(privilegeId);
			}

			re = new ResponseEntity<Boolean>(isRequired, HttpStatus.OK);
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

	@RequestMapping(value = "/is-privilege-notifiable/{privilegeId}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> isPrivilegeNotifiable(@PathVariable String privilegeId) {
		ResponseEntity re = new ResponseEntity<Boolean>(NotificationUtils.isPrivilegeNotificable(privilegeId),
				HttpStatus.OK);

		return re;

	}
	
	@RequestMapping(value = "/is-privilege-notifiable-shipper/{privilegeId}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> isPrivilegeNotifiableShipper(@PathVariable String privilegeId) {
		ResponseEntity re = new ResponseEntity<Boolean>(NotificationUtils.isPrivilegeNotificableShipper(privilegeId),
				HttpStatus.OK);

		return re;

	}

	@RequestMapping(value = "/notify-privilege", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> notifyPrivilege(
			@RequestBody Map<String, String> body) {
		ResponseEntity re = null;

		String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /notify-privilege PrivilegeController");
		NotificationPrivilegesDTO notificationPrivileges = new Gson().fromJson(decryptedResponse, NotificationPrivilegesDTO.class); 

		notificationPrivileges.setCompanyId(this.getUserBO().getCurrentUser().getEmpresa().getId());

		try {
			SecurityEsbResponse response = this.getSecurityEsbBO().notificationPrivileges(notificationPrivileges);
			response.getResult();

			String parsedResponse = new Gson().toJson(response); 
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /notify-privilege PrivilegeController");

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

	@RequestMapping(value = "/notify-list-users-by-privilege", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> notifyPrivilegeListUsert(
			@RequestBody Map<String, String> body) throws Exception {
		ResponseEntity re = null;

		String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /notify-list-users-by-privilege PrivilegeController");
		NotificationPrivilegesDTO notificationPrivileges = new Gson().fromJson(decryptedResponse, NotificationPrivilegesDTO.class);
		if(notificationPrivileges.getPrivilegeId() == null){
			throw new Exception("Debe especificarse el privilegio");
		}
		if(  notificationPrivileges.getMailsNotifications() == null || notificationPrivileges.getMailsNotifications().isEmpty()){
			throw new Exception("Debe indicar los emails a notificar");
		}

		try {

			LOG.info("Llamado al servicio: sendEmailUsersPortal :   "
					+ " companyId: " + notificationPrivileges.getCompanyId()
					+ " getPrivilegeId: " + notificationPrivileges.getPrivilegeId()
					+ " getNotificationInfo: "  + notificationPrivileges.getNotificationInfo()
					+ " mailsNotifications: " + notificationPrivileges.getMailsNotifications()
			);
			this.getSecurityEsbBO().sendEmailUsersPortal(notificationPrivileges);
			re = new ResponseEntity<String>("Notificacion realizada", HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.PrivilegeNotifyUserError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}

		return re;

	}
	
	@RequestMapping(value = "/notify-privilege-shipper", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> notifyPrivilegeShipper(
			@RequestBody NotificationPrivilegesDTO notificationPrivileges) {
		ResponseEntity re = null;

		try {
			SecurityEsbResponse response = this.getSecurityEsbBO().notificationPrivileges(notificationPrivileges);
			response.getResult();

			re = new ResponseEntity<SecurityEsbResponse>(response, HttpStatus.OK);
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

	@RequestMapping(value = "/is-privilege-restricted", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> isPrivilegeRestricted(@RequestBody Map<String, String> body) {

		GenericResponseDTO<String> response = new GenericResponseDTO();
		ResponseEntity re = null;

		String idPrivilege = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /is-privilege-restricted PrivilegeController");

		try {
			Boolean isPrivilegeRestricted = PrivilegesUtil.isPrivilegeRestricted(idPrivilege);

			response.setSuccess(String.valueOf(isPrivilegeRestricted));
			
			if (!isPrivilegeRestricted) {
				UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
				String[] strParams = { currentUser.getUserName() };
				response.setResult(getProperty("Controller.PrivilegeRestricted", strParams, getApplicationContext()));
			}

			re = new ResponseEntity<GenericResponseDTO<String>>(response, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			// String msg = getProperty("Error al consultar configuracion horaria",
			// strParams, getApplicationContext());
			error.setError("Error al consultar configuracion horaria");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
	
	@RequestMapping(value = "/action-ip-restrictions", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> actionIpRestriptions(@RequestBody RequestDTO requestDTO) {

		ResponseEntity re = null;
		String companyId = this.getUserBO().getCurrentUser().getEmpresa().getId();
		ResponseError error = new ResponseError();
		try {
			List<IpRestrictionDTO> responseDTO = new ArrayList<>();
			requestDTO.setCompanyId(companyId);
			SecurityEsbResponse<ResponseDTO> ipsResponse = this.getSecurityEsbBO().getIpRestriptions(requestDTO);
			if(ipsResponse.isSuccess())
			{
				responseDTO =(List<IpRestrictionDTO>) ipsResponse.getResult();
				re = new ResponseEntity<List<IpRestrictionDTO>>(responseDTO, HttpStatus.OK);
			}
			else
			{
				error.setError("Error al obtener la información de las ips restringidas");
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
			
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			String[] strParams = null;
			error.setError("Error al obtener la información de las ips restringidas");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

}
