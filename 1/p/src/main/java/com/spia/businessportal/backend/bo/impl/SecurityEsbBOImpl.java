/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  21 de oct. de 2015 - 9:41:58 a. m.
 */
package com.spia.businessportal.backend.bo.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spia.businessportal.backend.bo.SecurityEsbBO;
import com.spia.businessportal.common.entities.dto.AuditLogRegisterRequestDTO;
import com.spia.businessportal.common.entities.dto.EmailParameterDTO;
import com.spia.businessportal.common.entities.dto.EmailRequestDTO;
import com.spia.businessportal.common.entities.dto.EmailResponseDTO;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.entities.dto.MobileNotificationInfoDTO;
import com.spia.businessportal.common.entities.dto.NotificationPrivilegesDTO;
import com.spia.businessportal.common.entities.dto.PrivilegeInfoDTO;
import com.spia.businessportal.common.entities.dto.PrivilegeListResponseDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioDiaRestriccionDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioResponseDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioResponseUpdateDTO;
import com.spia.businessportal.common.entities.dto.PrivilegiosNotificablesEmpresaDTO;
import com.spia.businessportal.common.entities.dto.RequestDTO;
import com.spia.businessportal.common.entities.dto.ResponseDTO;
import com.spia.businessportal.common.entities.dto.ResticcionPrivilegioEmpresaDTO;
import com.spia.businessportal.common.entities.dto.SecondPasswordGenerateRequestDTO;
import com.spia.businessportal.common.entities.dto.SendEmailResquestDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailDTO;
import com.spia.businessportal.common.entities.dto.UpdateMobileRequestDTO;
import com.spia.businessportal.common.entities.dto.ValidateCodeRequestDTO;
import ar.com.fluxit.framework.entities.user.CompanyTypeDTO;
import com.spia.businessportal.common.ldap.proxy.dto.EmpresaDTO;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.common.utils.StringUtil;
import com.spia.services.entities.UnitFacilityVisitDTO;
import com.spia.services.notification.LdapUsersRequest;
import com.spia.services.security.esb.entities.ChangePasswordRequest;
import com.spia.services.security.esb.entities.CompanyRequest;
import com.spia.services.security.esb.entities.CompanyType;
import com.spia.services.security.esb.entities.CompanyTypeRequest;
import com.spia.services.security.esb.entities.ForgotPasswordRequest;
import com.spia.services.security.esb.entities.LdapUserResult;
import com.spia.services.security.esb.entities.LdapUsersInfoRequest;
import com.spia.services.security.esb.entities.Privilege;
import com.spia.services.security.esb.entities.PrivilegeRequest;
import com.spia.services.security.esb.entities.PrivilegeRequestHelper;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.services.security.esb.entities.UserNotificationEsb;
import com.spia.services.security.esb.entities.UserNotificationPinEsb;
import com.spia.services.security.esb.entities.UserValidation;
import com.spia.services.security.esb.entities.ValidateUserRequest;
import com.spia.businessportal.common.entities.dto.ValidateUserRequestDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 *         Implementación de la interfaz SecurityEsbBO
 * @param <EsbEntity>
 * @param <EsbEntity>
 */
public class SecurityEsbBOImpl<EsbEntity>
		// extends GenericServiceImpl<SecurityEsbResponse>
		implements SecurityEsbBO<EsbEntity> {

	private static final Log LOG = LogFactory.getLog(SecurityEsbBO.class);
	private String middlewareUrl;
	
	/**
	 *Rutas Desarrollo Punto 4 ASSIST-TI
	 */
	
	private String esbUserList;
	
	public String getEsbUserList() {
		return esbUserList;
	}

	public void setEsbUserList(String esbUserList) {
		this.esbUserList = esbUserList;
	}

	private String esbPrivilegeList;
	public String getEsbPrivilegeList() {
		return esbPrivilegeList;
	}

	public void setEsbPrivilegeList(String esbPrivilegeList) {
		this.esbPrivilegeList = esbPrivilegeList;
	}

	private String esbUserChangePassword;
	public String getEsbUserChangePassword() {
		return esbUserChangePassword;
	}

	public void setEsbUserChangePassword(String esbUserChangePassword) {
		this.esbUserChangePassword = esbUserChangePassword;
	}

	private String esbUserValidate;
	public String getEsbUserValidate() {
		return esbUserValidate;
	}

	public void setEsbUserValidate(String esbUserValidate) {
		this.esbUserValidate = esbUserValidate;
	}

	private String esbCompanyType;
	public String getEsbCompanyType() {
		return esbCompanyType;
	}

	public void setEsbCompanyType(String esbCompanyType) {
		this.esbCompanyType = esbCompanyType;
	}

	private String esbCompanyTypeList;
	public String getEsbCompanyTypeList() {
		return esbCompanyTypeList;
	}

	public void setEsbCompanyTypeList(String esbCompanyTypeList) {
		this.esbCompanyTypeList = esbCompanyTypeList;
	}

	private String esbCompanyTypePrivilegeList;
	public String getEsbCompanyTypePrivilegeList() {
		return esbCompanyTypePrivilegeList;
	}

	public void setEsbCompanyTypePrivilegeList(String esbCompanyTypePrivilegeList) {
		this.esbCompanyTypePrivilegeList = esbCompanyTypePrivilegeList;
	}

	private String esbCompanyTypeCompanyList;
	public String getEsbCompanyTypeCompanyList() {
		return esbCompanyTypeCompanyList;
	}

	public void setEsbCompanyTypeCompanyList(String esbCompanyTypeCompanyList) {
		this.esbCompanyTypeCompanyList = esbCompanyTypeCompanyList;
	}

	private String esbCompanyUserNotification;
	public String getEsbCompanyUserNotification() {
		return esbCompanyUserNotification;
	}

	public void setEsbCompanyUserNotification(String esbCompanyUserNotification) {
		this.esbCompanyUserNotification = esbCompanyUserNotification;
	}

	private String esbUserInfo;
	public String getEsbUserInfo() {
		return esbUserInfo;
	}

	public void setEsbUserInfo(String esbUserInfo) {
		this.esbUserInfo = esbUserInfo;
	}

	private String esbUserForgotPassword;
	public String getEsbUserForgotPassword() {
		return esbUserForgotPassword;
	}

	public void setEsbUserForgotPassword(String esbUserForgotPassword) {
		this.esbUserForgotPassword = esbUserForgotPassword;
	}

	private String esbUserChangeMobile;
	public String getEsbUserChangeMobile() {
		return esbUserChangeMobile;
	}

	public void setEsbUserChangeMobile(String esbUserChangeMobile) {
		this.esbUserChangeMobile = esbUserChangeMobile;
	}

	private String esbCompanyUserNotificationPin;
	public String getEsbCompanyUserNotificationPin() {
		return esbCompanyUserNotificationPin;
	}

	public void setEsbCompanyUserNotificationPin(String esbCompanyUserNotificationPin) {
		this.esbCompanyUserNotificationPin = esbCompanyUserNotificationPin;
	}

	private String esbRestrictionPrivilegesCompany;
	public String getEsbRestrictionPrivilegesCompany() {
		return esbRestrictionPrivilegesCompany;
	}

	public void setEsbRestrictionPrivilegesCompany(String esbRestrictionPrivilegesCompany) {
		this.esbRestrictionPrivilegesCompany = esbRestrictionPrivilegesCompany;
	}

	private String esbConfigPrivilegesCompany;
	public String getEsbConfigPrivilegesCompany() {
		return esbConfigPrivilegesCompany;
	}

	public void setEsbConfigPrivilegesCompany(String esbConfigPrivilegesCompany) {
		this.esbConfigPrivilegesCompany = esbConfigPrivilegesCompany;
	}

	private String esbCreateRestrictionPrivilegesCompany;
	public String getEsbCreateRestrictionPrivilegesCompany() {
		return esbCreateRestrictionPrivilegesCompany;
	}

	public void setEsbCreateRestrictionPrivilegesCompany(String esbCreateRestrictionPrivilegesCompany) {
		this.esbCreateRestrictionPrivilegesCompany = esbCreateRestrictionPrivilegesCompany;
	}

	private String esbUsuarioNotificationMobile;
	public String getEsbUsuarioNotificationMobile() {
		return esbUsuarioNotificationMobile;
	}

	public void setEsbUsuarioNotificationMobile(String esbUsuarioNotificationMobile) {
		this.esbUsuarioNotificationMobile = esbUsuarioNotificationMobile;
	}

	private String esbUsuarioMobileInfoUpdate;
	public String getEsbUsuarioMobileInfoUpdate() {
		return esbUsuarioMobileInfoUpdate;
	}

	public void setEsbUsuarioMobileInfoUpdate(String esbUsuarioMobileInfoUpdate) {
		this.esbUsuarioMobileInfoUpdate = esbUsuarioMobileInfoUpdate;
	}

	private String esbNotificationByCompany;
	public String getEsbNotificationByCompany() {
		return esbNotificationByCompany;
	}

	public void setEsbNotificationByCompany(String esbNotificationByCompany) {
		this.esbNotificationByCompany = esbNotificationByCompany;
	}

	private String esbPrivilegesNotificationCompany;
	public String getEsbPrivilegesNotificationCompany() {
		return esbPrivilegesNotificationCompany;
	}

	public void setEsbPrivilegesNotificationCompany(String esbPrivilegesNotificationCompany) {
		this.esbPrivilegesNotificationCompany = esbPrivilegesNotificationCompany;
	}

	private String esbPrivilegesNotificationCompanyUpdate;
	public String getEsbPrivilegesNotificationCompanyUpdate() {
		return esbPrivilegesNotificationCompanyUpdate;
	}

	public void setEsbPrivilegesNotificationCompanyUpdate(String esbPrivilegesNotificationCompanyUpdate) {
		this.esbPrivilegesNotificationCompanyUpdate = esbPrivilegesNotificationCompanyUpdate;
	}

	private String esbNotificationPrivilegesService;
	public String getEsbNotificationPrivilegesService() {
		return esbNotificationPrivilegesService;
	}

	public void setEsbNotificationPrivilegesService(String esbNotificationPrivilegesService) {
		this.esbNotificationPrivilegesService = esbNotificationPrivilegesService;
	}

	private String esbPrivilegesDescription;
	public String getEsbPrivilegesDescription() {
		return esbPrivilegesDescription;
	}

	public void setEsbPrivilegesDescription(String esbPrivilegesDescription) {
		this.esbPrivilegesDescription = esbPrivilegesDescription;
	}

	private String esbSecondPasswordGenerate;
	public String getEsbSecondPasswordGenerate() {
		return esbSecondPasswordGenerate;
	}

	public void setEsbSecondPasswordGenerate(String esbSecondPasswordGenerate) {
		this.esbSecondPasswordGenerate = esbSecondPasswordGenerate;
	}

	private String esbPrivilegesSecondPasswordValidation;
	public String getEsbPrivilegesSecondPasswordValidation() {
		return esbPrivilegesSecondPasswordValidation;
	}

	public void setEsbPrivilegesSecondPasswordValidation(String esbPrivilegesSecondPasswordValidation) {
		this.esbPrivilegesSecondPasswordValidation = esbPrivilegesSecondPasswordValidation;
	}

	private String esbUsuarioExistsAdminCompany;
	public String getEsbUsuarioExistsAdminCompany() {
		return esbUsuarioExistsAdminCompany;
	}

	public void setEsbUsuarioExistsAdminCompany(String esbUsuarioExistsAdminCompany) {
		this.esbUsuarioExistsAdminCompany = esbUsuarioExistsAdminCompany;
	}

	private String esbAuditLogRegister;
	public String getEsbAuditLogRegister() {
		return esbAuditLogRegister;
	}

	public void setEsbAuditLogRegister(String esbAuditLogRegister) {
		this.esbAuditLogRegister = esbAuditLogRegister;
	}

	private String esbConfigIpRestrictionCompany;
	public String getEsbConfigIpRestrictionCompany() {
		return esbConfigIpRestrictionCompany;
	}

	public void setEsbConfigIpRestrictionCompany(String esbConfigIpRestrictionCompany) {
		this.esbConfigIpRestrictionCompany = esbConfigIpRestrictionCompany;
	}

	private String esbCompanyName;
	public String getEsbCompanyName() {
		return esbCompanyName;
	}

	public void setEsbCompanyName(String esbCompanyName) {
		this.esbCompanyName = esbCompanyName;
	}

	private String esbPrivilegioTime;
	public String getEsbPrivilegioTime() {
		return esbPrivilegioTime;
	}

	public void setEsbPrivilegioTime(String esbPrivilegioTime) {
		this.esbPrivilegioTime = esbPrivilegioTime;
	}

	private String spiaAppUrl;
	private String path;
	@Autowired
	private RestTemplate securityRestTemplate;
	private Class<EsbEntity> clazz;
	private Class<EsbEntity[]> arrayClazz;

	private String urlService;

	public String getUrlService() {
		return urlService;
	}

	public void setUrlService(String urlService) {
		this.urlService = urlService;
	}
	
	private String notificationEmails;
	

	public String getNotificationEmails() {
		return notificationEmails;
	}

	public void setNotificationEmails(String notificationEmails) {
		this.notificationEmails = notificationEmails;
	}
	/*
	 * @Autowired private NotificationService notificationService;
	 */

	/**
	 * 
	 */

	public SecurityEsbBOImpl() {
		super();
	}

	public String getSpiaAppUrl() {
		return spiaAppUrl;
	}

	public void setSpiaAppUrl(String spiaAppUrl) {
		this.spiaAppUrl = spiaAppUrl;
	}

	@Override
	public SecurityEsbResponse<LdapUserResult> getCompanyUsers(String companyId) throws BusinessException {
		SecurityEsbResponse u = null;
		if (!StringUtils.isEmpty(companyId)) {
			try {
				CompanyRequest h = new CompanyRequest();
				h.setCompanyId(companyId);
				// getMiddlewareUrl() + "user/list"
				u = this.getSecurityRestTemplate().postForObject(getEsbUserList(), h,
						SecurityEsbResponse.class);

				ObjectMapper mapper = new ObjectMapper();
				u.setResult((List) mapper.convertValue(u.getResult(), new TypeReference<List<LdapUserResult>>() {
				}));
				return u;

			} catch (HttpClientErrorException e) {
				LOG.info(e.getResponseBodyAsString());
				LOG.error(e.getStackTrace());
				throw new BusinessException(e);
			} catch (Exception e) {
				LOG.error(e.getStackTrace());
				throw new BusinessException(e);
			}

		}
		return u;
	}

	@Override
	public SecurityEsbResponse<Privilege> getPrivileges(List<String> rolesIds) throws BusinessException {
		SecurityEsbResponse u = null;
		PrivilegeRequest h = new PrivilegeRequest();
		ArrayList<PrivilegeRequestHelper> arr = new ArrayList<PrivilegeRequestHelper>();
		for (String id : rolesIds)
			if (!StringUtils.isEmpty(id)) {

				PrivilegeRequestHelper p = new PrivilegeRequestHelper();
				p.setRolId(id);
				arr.add(p);

			}
		PrivilegeRequestHelper[] a = new PrivilegeRequestHelper[arr.size()];
		for (int i = 0; i < arr.size(); i++)
			a[i] = arr.get(i);
		h.setRolesId(a);
		try {
				// getMiddlewareUrl() + "/privilege/list"
			u = this.getSecurityRestTemplate().postForObject(getEsbPrivilegeList(), h,
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();
			u.setResult((List) mapper.convertValue(u.getResult(), new TypeReference<List<Privilege>>() {
			}));
		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<String> changePassword(String userName, String oldPassword, String newPassword)
			throws BusinessException {
		SecurityEsbResponse u = null;

		try {
			ChangePasswordRequest request = new ChangePasswordRequest();
			request.setUserName(userName);
			request.setPassword(oldPassword);
			request.setNewPassword(newPassword);
				// getMiddlewareUrl() + "/user/changePassword"
			u = this.getSecurityRestTemplate().postForObject(getEsbUserChangePassword(), request,
					SecurityEsbResponse.class);

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<UserValidation> validateUser(String email, String userName) throws BusinessException {
		SecurityEsbResponse u = null;

		try {
			ValidateUserRequest request = new ValidateUserRequest();
			request.setUserName(userName);
			request.setEmail(email);
				// getMiddlewareUrl() + "/user/validate"
			u = this.getSecurityRestTemplate().postForObject(getEsbUserValidate(), request,
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();
			u.setResult((UserValidation) mapper.convertValue(u.getResult(), UserValidation.class));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<CompanyType> getCompanyType(String company) throws BusinessException {
		SecurityEsbResponse u = null;

		try {
			LdapUsersRequest request = new LdapUsersRequest();
			request.setCompanyId(company);
				// getMiddlewareUrl() + "/company/type"
			u = this.getSecurityRestTemplate().postForObject(getEsbCompanyType(), request,
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult((CompanyType) mapper.convertValue(u.getResult(), CompanyType.class));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<CompanyType> getCompanyTypes() throws BusinessException {
		SecurityEsbResponse u = null;

		try {
			LdapUsersRequest request = new LdapUsersRequest();
			// + "/companyType/list"
			u = this.getSecurityRestTemplate().getForObject(getEsbCompanyTypeList(),
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult((List) mapper.convertValue(u.getResult(), new TypeReference<List<CompanyType>>() {
			}));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<Privilege> getCompanyTypePrivileges(String companyTypeId) throws BusinessException {
		SecurityEsbResponse u = null;

		try {
			CompanyTypeRequest request = new CompanyTypeRequest();
			request.setCompanyTypeId(companyTypeId);
			//  + "/companyType/privilegeList"
			u = this.getSecurityRestTemplate().postForObject(getEsbCompanyTypePrivilegeList(), request,
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult((List) mapper.convertValue(u.getResult(), new TypeReference<List<Privilege>>() {
			}));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<CompanyType> getCompaniesByType(String type) throws BusinessException {
		SecurityEsbResponse u = null;
		try {
			CompanyTypeRequest request = new CompanyTypeRequest();
			request.setCompanyTypeId(type);
			//  + "/companyType/companyList"
			u = this.getSecurityRestTemplate().postForObject(getEsbCompanyTypeCompanyList(), request,
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult((List) mapper.convertValue(u.getResult(), new TypeReference<List<CompanyType>>() {
			}));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<CompanyType> getCompaniesByTypeAndFilter(String type, String filter)
			throws BusinessException {
		SecurityEsbResponse u = null;
		try {
			CompanyTypeRequest request = new CompanyTypeRequest();
			request.setCompanyTypeId(type);
			request.setFilter(filter);
			//  + "/companyType/companyList"
			u = this.getSecurityRestTemplate().postForObject(getEsbCompanyTypeCompanyList(), request,
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult((List) mapper.convertValue(u.getResult(), new TypeReference<List<CompanyType>>() {
			}));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<UserNotificationEsb> getUserNotification(String companyId) throws BusinessException {
		SecurityEsbResponse u = null;
		try {
			LdapUsersRequest request = new LdapUsersRequest();
			request.setCompanyId(companyId);
			//LOG.debug(getMiddlewareUrl() + "/company/user/notification");
			// LOG.debug(request.toString());
			u = this.getSecurityRestTemplate().postForObject(getEsbCompanyUserNotification(), request,
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult((List) mapper.convertValue(u.getResult(), new TypeReference<List<UserNotificationEsb>>() {
			}));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<UserValidation> getUserInfo(String userId) throws BusinessException {
		SecurityEsbResponse u = null;
		try {
			LdapUsersInfoRequest request = new LdapUsersInfoRequest();
			request.setUserId(userId);
			//  + "/user/info"
			u = this.getSecurityRestTemplate().postForObject(getEsbUserInfo(), request,
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult((UserValidation) mapper.convertValue(u.getResult(), UserValidation.class));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse forgotPassword(ValidateUserRequestDTO request) throws BusinessException {
		try {
			// + "/user/forgot/password"
			return this.getSecurityRestTemplate().postForObject(getEsbUserForgotPassword(), request,
					SecurityEsbResponse.class);
		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}

	}
	/*
	 * Metodo para cambiar el numero de celular.
	 */

	@Override
	public SecurityEsbResponse<String> changeMobile(String userName, String mobile) throws BusinessException {
		SecurityEsbResponse u = null;

		try {
			/* Ojo preguntar ChangePasswordRequest */
			UpdateMobileRequestDTO request = new UpdateMobileRequestDTO();
			request.setUserName(userName);
			request.setMobile(mobile);
				//  + "/user/change/mobile"
			u = this.getSecurityRestTemplate().postForObject(getEsbUserChangeMobile(), request,
					SecurityEsbResponse.class);

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public void setPath(String path) {
		this.path = path;

	}

	@Override
	public void setClazz(Class<EsbEntity> clazz) {
		this.clazz = clazz;

	}

	@Override
	public void setArrayClazz(Class<EsbEntity[]> arrayClazz) {
		this.arrayClazz = arrayClazz;

	}

	@Override
	public String getMiddlewareUrl() {
		return this.middlewareUrl;
	}

	public void setMiddlewareUrl(String s) {
		this.middlewareUrl = s;
	}

	public RestTemplate getSecurityRestTemplate() {
		return securityRestTemplate;
	}

	public void setSecurityRestTemplate(RestTemplate securityRestTemplate) {
		this.securityRestTemplate = securityRestTemplate;
	}

	public static Log getLog() {
		return LOG;
	}

	public String getPath() {
		return path;
	}

	

	@Override
	public List<EsbEntity> all() throws BusinessException {
		return Collections.emptyList();
	}

	@Override
	public List<EsbEntity> all(String path) throws BusinessException {
		return Collections.emptyList();
	}

	@Override
	public EsbEntity get(String id) throws BusinessException {
		return null;
	}

	@Override
	public EsbEntity save(EsbEntity entity) throws BusinessException {
		return null;
	}

	@Override
	public EsbEntity update(String id, EsbEntity entity) throws BusinessException {
		return null;
	}

	@Override
	public EsbEntity saveUfvReference(String reference, EsbEntity entity) throws BusinessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SecurityEsbResponse<UserNotificationPinEsb> getUserNotificationPin(String companyId)
			throws BusinessException {
		SecurityEsbResponse u = null;
		try {
			LdapUsersRequest request = new LdapUsersRequest();
			request.setCompanyId(companyId);
			//LOG.debug(getMiddlewareUrl() + "/company/user/notificationPin");
			LOG.debug(request.toString());
			//  + "/company/user/notificationPin"
			u = this.getSecurityRestTemplate().postForObject(getEsbCompanyUserNotificationPin(),
					request, SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult((List) mapper.convertValue(u.getResult(), new TypeReference<List<UserNotificationPinEsb>>() {
			}));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<List<PrivilegioDiaRestriccionDTO>> getRestrictionPrivilegesCompany(String nit)
			throws BusinessException {
		SecurityEsbResponse u = null;
		try {

			u = this.getSecurityRestTemplate().getForObject(
				//  + "restriction/privileges/company/" 
				getEsbRestrictionPrivilegesCompany() + nit, SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			List<PrivilegioDiaRestriccionDTO> variable = new ArrayList<>();

			variable = (List<PrivilegioDiaRestriccionDTO>) (List<?>) mapper.convertValue(u.getResult(),
					variable.getClass());

			u.setResult(variable);

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<List<PrivilegioResponseDTO>> getConfigPrivileges(String idCompany, boolean isMemp)
			throws BusinessException {
		SecurityEsbResponse u = null;
		try {

			u = this.getSecurityRestTemplate().getForObject(
				// + "config/privileges/company/"
				getEsbConfigPrivilegesCompany() + idCompany + "?isMemp=" + isMemp,
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			List<PrivilegioResponseDTO> variable = new ArrayList<>();

			variable = (List<PrivilegioResponseDTO>) (List<?>) mapper.convertValue(u.getResult(), variable.getClass());

			u.setResult(variable);

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<GenericResponseDTO> saveRestrictionPrivilegeCompany(
			ResticcionPrivilegioEmpresaDTO resticcionPrivilegioEmpresa) throws BusinessException {
		SecurityEsbResponse u = null;
		try {
			u = this.getSecurityRestTemplate().postForObject(
				// + "create/restriction/privileges/company"
				getEsbCreateRestrictionPrivilegesCompany(), resticcionPrivilegioEmpresa,
					SecurityEsbResponse.class);

			ObjectMapper mapper = new ObjectMapper();
			u.setResult(mapper.convertValue(u.getResult(), new TypeReference<GenericResponseDTO>() {
			}));

			return u;

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
	}

	/**
	 * Metodo para el celular del usuario
	 * 
	 * @company Assert Solutions S.A.S.
	 * @author Kevin Ronderos
	 * @since 22 jul. 2019
	 */

	@Override
	public SecurityEsbResponse<MobileNotificationInfoDTO> getMobileNotificationInfo(String userName)
			throws BusinessException {

		SecurityEsbResponse u = null;
		try {

			u = this.getSecurityRestTemplate().getForObject(
				//  + "/usuario/notification/mobile/"
				getEsbUsuarioNotificationMobile() + userName, SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult(mapper.convertValue(u.getResult(), new TypeReference<MobileNotificationInfoDTO>() {
			}));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	/**
	 * Actualiza el celular del usuario selecionado
	 * 
	 * @company Assert Solutions S.A.S.
	 * @author Kevin Ronderos
	 * @since 23 jul. 2019
	 */

	@Override
	public SecurityEsbResponse<Boolean> updateMobileNotificationInfo(MobileNotificationInfoDTO mobileNotificationInfo)
			throws BusinessException {

		SecurityEsbResponse<Boolean> u = new SecurityEsbResponse<>();
		try {
				//  + "/usuario/mobile/info/update"
			this.getSecurityRestTemplate().put(getEsbUsuarioMobileInfoUpdate(),
					mobileNotificationInfo);

			u.setSuccess(true);
			u.setResult(true);

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<PrivilegiosNotificablesEmpresaDTO> getPrivilegesNotifByCompanyList(String idcompany,
			String type) throws BusinessException {
		SecurityEsbResponse u = null;
		try {

			u = this.getSecurityRestTemplate().getForObject(
				//  + "notification/by/company/"
				getEsbNotificationByCompany() + idcompany + "/" + type,
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();
			u.setResult((List) mapper.convertValue(u.getResult(), new TypeReference<List<String>>() {
			}));
		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<PrivilegeListResponseDTO> getPrivilegesNotificableList() throws BusinessException {
		SecurityEsbResponse u = null;
		try {
			//  + "privileges/notification/company"
			u = this.getSecurityRestTemplate().getForObject(getEsbPrivilegesNotificationCompany(),
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult(mapper.convertValue(u.getResult(), new TypeReference<List<PrivilegeInfoDTO>>() {
			}));
		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<PrivilegioResponseUpdateDTO> updatePrivilegeNotificationCompany(
			PrivilegiosNotificablesEmpresaDTO privilegio) throws BusinessException {
		SecurityEsbResponse u = null;
		try {

			u = this.getSecurityRestTemplate().postForObject(
				//  + "privileges/notification/company/update"
				getEsbPrivilegesNotificationCompanyUpdate(), privilegio,
					SecurityEsbResponse.class);

			ObjectMapper mapper = new ObjectMapper();
			mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			u.setResult(mapper.convertValue(u, new TypeReference<PrivilegioResponseUpdateDTO>() {
			}));
		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse notificationPrivileges(NotificationPrivilegesDTO notificationPrivileges)
			throws BusinessException {
		SecurityEsbResponse u = null;
		try {
				//  + "notification/privileges/service"
			u = this.getSecurityRestTemplate().postForObject(getEsbNotificationPrivilegesService(),
					notificationPrivileges, SecurityEsbResponse.class);

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<List<PrivilegeInfoDTO>> getPrivilegesDescription() throws BusinessException {
		SecurityEsbResponse u = null;
		try {
			//  + "privileges/description"
			u = this.getSecurityRestTemplate().getForObject(getEsbPrivilegesDescription(),
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();
			u.setResult(mapper.convertValue(u.getResult(), new TypeReference<List<PrivilegeInfoDTO>>() {
			}));
		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse secondPasswordGenerate(SecondPasswordGenerateRequestDTO secondPasswordGenerateRequest)
			throws BusinessException {
		SecurityEsbResponse u = null;
		try {
			//  + "second-password-generate"
			u = this.getSecurityRestTemplate().postForObject(getEsbSecondPasswordGenerate(),
					secondPasswordGenerateRequest, SecurityEsbResponse.class);

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse secondPasswordValidation(ValidateCodeRequestDTO validateCodeRequest)
			throws BusinessException {
		SecurityEsbResponse u = null;
		try {

			u = this.getSecurityRestTemplate().postForObject(
				// + "privileges/second-password-validation"
				getEsbPrivilegesSecondPasswordValidation(), validateCodeRequest,
					SecurityEsbResponse.class);

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<GenericResponseDTO> existsAdminCompany(String userName, String companyId)
			throws BusinessException {
				try {
					SecurityEsbResponse u = null;
					
			// getMiddlewareUrl() + "usuario/exists-admin-company/"  getMiddlewareUsuarioExistsAdminCompany()
			u = this.getSecurityRestTemplate().getForObject(
				getEsbUsuarioExistsAdminCompany() + userName + "/" + companyId,
					SecurityEsbResponse.class);

			GenericResponseDTO<Boolean> genericResponse = new GenericResponseDTO<>();
			if (u != null && u.getResult() != null && u.getResult() instanceof Boolean) {
				genericResponse.setSuccess(Boolean.TRUE.toString());
				genericResponse.setResult((Boolean) u.getResult());

			} else {
				genericResponse.setSuccess(Boolean.FALSE.toString());
				genericResponse.setResult(false);
			}

			ObjectMapper mapper = new ObjectMapper();
			if (u != null && u.getResult() != null) {
				u.setResult(mapper.convertValue(genericResponse, new TypeReference<GenericResponseDTO>() {
				}));
			}

			return u;

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
	}

	@Override
	public SecurityEsbResponse<GenericResponseDTO> auditLogRegister(AuditLogRegisterRequestDTO auditLogRegisterRequest)
			throws BusinessException {

		SecurityEsbResponse u = null;
		try {
				//  + "audit-log-register"
			u = this.getSecurityRestTemplate().postForObject(getEsbAuditLogRegister(),
					auditLogRegisterRequest, SecurityEsbResponse.class);

			GenericResponseDTO<Boolean> genericResponse = new GenericResponseDTO<>();
			if (u != null && u.getResult() != null && u.getResult() instanceof Boolean) {
				genericResponse.setSuccess(Boolean.TRUE.toString());
				genericResponse.setResult((Boolean) u.getResult());

			} else {
				genericResponse.setSuccess(Boolean.FALSE.toString());
				genericResponse.setResult(false);
			}

			ObjectMapper mapper = new ObjectMapper();
			u.setResult(mapper.convertValue(genericResponse, new TypeReference<GenericResponseDTO>() {
			}));

			return u;

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}

	}

	@Override
	public SecurityEsbResponse<Privilege> getCompanyTypePrivilegesByMemp(String companyTypeId)
			throws BusinessException {
		SecurityEsbResponse u = null;

		try {
			CompanyTypeRequest request = new CompanyTypeRequest();
			request.setCompanyTypeId(companyTypeId);

			u = this.getSecurityRestTemplate().postForObject(
				//  + "/companyType/privilegeList?isMemp=true"
				getEsbCompanyTypePrivilegeList() + "?isMemp=true", request, SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult((List) mapper.convertValue(u.getResult(), new TypeReference<List<Privilege>>() {
			}));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public List<EsbEntity> getAgentsByIdOrName(String id, String name) throws BusinessException {
		return Collections.emptyList();
	}

	@Override
	public EsbEntity getShipperExporter(EsbEntity entity) throws BusinessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<EsbEntity> getShipperByIdOrName(String id, String name) throws BusinessException {
		return Collections.emptyList();
	}

	@Override
	public SecurityEsbResponse<ResponseDTO> getIpRestriptions(RequestDTO requestDTO) throws BusinessException {
		SecurityEsbResponse u = null;
		try {
			//  + "config/ip/restriction/company/"
			u = this.getSecurityRestTemplate().postForObject(getEsbConfigIpRestrictionCompany(),
					requestDTO, SecurityEsbResponse.class);

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<String> getCompanyNameById(String companyId) throws BusinessException {
		SecurityEsbResponse u = null;

		try {
			CompanyRequest request = new CompanyRequest();
			request.setCompanyId(companyId);
//  + "/company/name"
			u = this.getSecurityRestTemplate().postForObject(getEsbCompanyName(), request,
					SecurityEsbResponse.class);
			ObjectMapper mapper = new ObjectMapper();

			u.setResult(mapper.convertValue(u.getResult(), new TypeReference<String>() {
			}));

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@Override
	public SecurityEsbResponse<PrivilegioDiaRestriccionDTO> getTimeRestrictionByPrivilege(String id)
			throws BusinessException {
		SecurityEsbResponse u = null;
		try {
			// + "/privilegio/time/" 
			u = this.getSecurityRestTemplate().getForObject(getEsbPrivilegioTime() + id,
					SecurityEsbResponse.class);
		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	@SuppressWarnings("unchecked")
	@Override
	public SecurityEsbResponse<EmpresaDTO> registerCompanyTemp(String nit, String email, String businessName,
			String cellphone, String contact) throws BusinessException {
		SecurityEsbResponse u = null;

		try {
			LOG.info("INICIO REGISTRO EMPRESA TEMPORAL");
			LOG.info("NIT: " + nit);
			LOG.info("EMAIL: " + email);
			LOG.info("BUSINESSNAME: " + businessName);
			LOG.info("CELLPHONE: " + cellphone);
			LOG.info("CONTACT: " + contact);
			EmpresaDTO request = new EmpresaDTO();
			request.setId(nit);
			request.setAdminName(contact);
			request.setAdminEmail(email);
			request.setNombre("tmp-" + nit);
			request.setDescripcion("Empresa temporal " + businessName);
			List<CompanyTypeDTO> listCompanyTypeDTO = new ArrayList<>();
			CompanyTypeDTO companyTypeDTO = new CompanyTypeDTO();
			companyTypeDTO.setCompanyTypeId("tmp");
			companyTypeDTO.setCompanyTypeName("Empresa temporal");
			listCompanyTypeDTO.add(companyTypeDTO);
			request.setTipoEmpresasDTO(listCompanyTypeDTO);
			request.setNumMaxEmpleado("1");
			List<String> listPrivilegiosNotificables = new ArrayList<>();
			request.setPrivilegiosNotificables(listPrivilegiosNotificables);
			request.setAllowStaffAnotherAgency("false");
			request.setAutorizado("false");
			request.setCelular(cellphone);
			request.setCompanyName(businessName);
			request.setNumMaxEmpleado("1");
			
			u = this.getSecurityRestTemplate().postForObject(getSpiaAppUrl() + "proxy/spia-transversal/security/register/companyTemp", request,	SecurityEsbResponse.class);
			u.setResult(request);

			//TODO: Ajustar llamado para apuntar a Spia-APP, ip y puerto pasar a variable configurable
			// u = this.getSecurityRestTemplate().postForObject("http://172.20.115.30:12082/spia-app/rest/empresas", request,	SecurityEsbResponse.class);
			// u.setResult(request);



			this.sendEmailClient(request);
			this.sendEmailSac(request);

		} catch (HttpClientErrorException e) {
			LOG.info(e.getResponseBodyAsString());
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		} catch (Exception e) {
			LOG.error(e.getStackTrace());
			throw new BusinessException(e);
		}
		return u;
	}

	/* Arley Rivas 
	 * Spia 07-2024
	 */
	@Override
	public SecurityEsbResponse<String> sendEmailUsersPortal(NotificationPrivilegesDTO notificationPrivilegesDTO) throws BusinessException {

		this.sendEmailUsers(notificationPrivilegesDTO);
		return null;
	}


	@Override
	public EsbEntity saveUfv(EsbEntity entity) throws BusinessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EsbEntity saveUfv(UnitFacilityVisitDTO unitFacilityVisitDTO) throws BusinessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public GenericResponseDTO<String> updateUfv(UnitFacilityVisitDTO unitFacilityVisitDTO) throws BusinessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public GenericResponseDTO<String> getUfv(UnitFacilityVisitDTO unitFacilityVisitDTO) throws BusinessException {
		// TODO Auto-generated method stub
		return null;
	}
	
	public void sendEmailClient(EmpresaDTO request)  {
		SendEmailResquestDTO sendEmailResquestDTO = new SendEmailResquestDTO();
		List<TemplateEmailDTO> mails = new ArrayList();
		TemplateEmailDTO templateEmailDTO = new TemplateEmailDTO();
		templateEmailDTO.setName(request.getAdminName());
		templateEmailDTO.setMail(request.getAdminEmail());
		mails.add(templateEmailDTO);
		
		EmailRequestDTO emailRequestDTO = new EmailRequestDTO();
		List<EmailParameterDTO> parameters = new ArrayList<>();
		EmailParameterDTO emailParameter = new EmailParameterDTO();
		String notificationInfo = StringUtil.getTextByBase64Decoded(EncoderDecoder.encodeBase64("{}"), "*-*");

		emailParameter.setParameterId("notificationInfo");
		emailParameter.setValue(notificationInfo);
		parameters.add(emailParameter);
		emailRequestDTO.setTemplateName("REQ_MAN_NEW_COM");
		emailRequestDTO.setParameters(parameters);
		emailRequestDTO.setMails(mails);
		this.getSecurityRestTemplate().postForObject(urlService, emailRequestDTO, EmailResponseDTO.class);
	}
	
	public void sendEmailSac(EmpresaDTO request)  {
		List<TemplateEmailDTO> mails = new ArrayList();
		String[] mailsSAC = this.getNotificationEmails().split(","); 
		for(String mail:mailsSAC)
		{
			TemplateEmailDTO templateEDTO = new TemplateEmailDTO();
			templateEDTO.setMail(mail);
			templateEDTO.setName("SAC");
			mails.add(templateEDTO);
		}
			
		EmailRequestDTO emailRequestDTO = new EmailRequestDTO();
		List<EmailParameterDTO> parameters = new ArrayList<>();
		EmailParameterDTO emailParameter = new EmailParameterDTO();
		String notificationInfo = StringUtil.getTextByBase64Decoded(EncoderDecoder.encodeBase64("{\"nit\":\""+request.getId()+"\",\"name\":\""+request.getNombre()+"\"}"), "*-*");

		emailParameter.setParameterId("notificationInfo");
		emailParameter.setValue(notificationInfo);
		parameters.add(emailParameter);
		emailRequestDTO.setTemplateName("REQ_MAN_NEW_COM_SAC");
		emailRequestDTO.setParameters(parameters);
		emailRequestDTO.setMails(mails);
		this.getSecurityRestTemplate().postForObject(urlService, emailRequestDTO, EmailResponseDTO.class);
	}

	/* Arley Rivas 
	 * Spia 07-2024
	 */
	public void sendEmailUsers(NotificationPrivilegesDTO request)  {
		List<TemplateEmailDTO> mails = new ArrayList();
		String[] mailsSAC = request.getMailsNotifications().split(",");
		for(String mail:mailsSAC)
		{
			TemplateEmailDTO templateEDTO = new TemplateEmailDTO();
			templateEDTO.setMail(mail);
			templateEDTO.setName("SAC");
			mails.add(templateEDTO);
		}

		EmailRequestDTO emailRequestDTO = new EmailRequestDTO();
		List<EmailParameterDTO> parameters = new ArrayList<>();
		EmailParameterDTO emailParameter = new EmailParameterDTO();
		LOG.info("Informacion de ENTRADA ::    " + request.getNotificationInfo());
		String strDecoded = EncoderDecoder.decodeBase64(request.getNotificationInfo());

		LOG.info("Informacion de strDecoded ::  " + strDecoded);

		String notificationInfo = StringUtil.getTextByBase64Decoded(EncoderDecoder.encodeBase64(strDecoded), "*-*");

		LOG.info("INFORMACION A NOTIFICAR EN sendEmailUsers notificationInfo" +  notificationInfo);
		emailParameter.setParameterId("notificationInfo");
		emailParameter.setValue(notificationInfo);
		parameters.add(emailParameter);

		emailRequestDTO.setTemplateName(request.getPrivilegeId());
		emailRequestDTO.setParameters(parameters); 
		emailRequestDTO.setMails(mails);

		LOG.info("INFORMACION A NOTIFICAR EN sendEmailUsers emailRequestDTO.getTemplateName()" +  emailRequestDTO.getTemplateName());
		this.getSecurityRestTemplate().postForObject(urlService, emailRequestDTO, EmailResponseDTO.class);
	}

	// ASSIST 13-04-2022
	@Override
	public EsbEntity getReporter(String unitId, String agentId) throws BusinessException {
		return null;
	}


	public static String escapeJsonString(String jsonString) {
		if (jsonString == null || jsonString.isEmpty()) {
			return jsonString;
		}

		// Create a StringBuilder for constructing the escaped JSON
		StringBuilder escapedStringBuilder = new StringBuilder();

		boolean insideKey = true;  // To keep track of whether we are inside a key

		// Loop through each character in the original JSON string
		for (int i = 0; i < jsonString.length(); i++) {
			char currentChar = jsonString.charAt(i);

			switch (currentChar) {
				case '{':
					// Add opening brace
					escapedStringBuilder.append("{\"");
					insideKey = true; // Reset inside key flag
					break;
				case '}':
					// Add closing brace
					escapedStringBuilder.append("\"}");
					break;
				case ':':
					// Add colon with escaped quotes
					if (insideKey) {
						escapedStringBuilder.append("\":");
					} else {
						escapedStringBuilder.append(":");
					}
					insideKey = false; // Now inside value
					break;
				case ',':
					// Add comma with escaped quotes for next key
					escapedStringBuilder.append(",\"");
					insideKey = true; // Now inside key
					break;
				case '"':
					// Escape quotes inside string values
					escapedStringBuilder.append("\\\"");
					break;
				default:
					// Add regular characters and handle null values
					if (insideKey) {
						// Wrap keys with escaped quotes
						escapedStringBuilder.append(currentChar);
					} else {
						if (jsonString.startsWith("null", i)) {
							escapedStringBuilder.append("\"null\"");
							i += 3; // Skip the rest of "null"
						} else if (Character.isDigit(currentChar)) {
							// Detect numbers and do not add quotes
							int start = i;
							while (i < jsonString.length() && Character.isDigit(jsonString.charAt(i))) {
								i++;
							}
							// Add the number as is
							escapedStringBuilder.append(jsonString, start, i);
							i--; // Adjust i to account for loop increment
						} else {
							// Wrap string values with quotes
							escapedStringBuilder.append("\"").append(currentChar);
							int start = i + 1;
							while (i < jsonString.length() && jsonString.charAt(i) != ',' && jsonString.charAt(i) != '}') {
								i++;
							}
							escapedStringBuilder.append(jsonString, start, i).append("\"");
							i--; // Adjust i to account for loop increment
						}
					}
					break;
			}
		}

		return escapedStringBuilder.toString();
	}
}
