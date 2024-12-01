/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  21 de oct. de 2015 - 9:40:09 a. m.
 */
package com.spia.businessportal.backend.bo;

import java.util.List;

import com.spia.businessportal.common.entities.dto.AuditLogRegisterRequestDTO;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.entities.dto.MobileNotificationInfoDTO;
import com.spia.businessportal.common.entities.dto.NotificationPrivilegesDTO;
import com.spia.businessportal.common.entities.dto.PrivilegeInfoDTO;
import com.spia.businessportal.common.entities.dto.PrivilegeListResponseDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioDiaRestriccionDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioResponseDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioResponseUpdateDTO;
import com.spia.businessportal.common.entities.dto.PrivilegiosNotificablesEmpresaDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.RequestDTO;
import com.spia.businessportal.common.entities.dto.ResponseDTO;
import com.spia.businessportal.common.entities.dto.ResticcionPrivilegioEmpresaDTO;
import com.spia.businessportal.common.entities.dto.SecondPasswordGenerateRequestDTO;
import com.spia.businessportal.common.entities.dto.ValidateCodeRequestDTO;
import com.spia.entity.entities.login.ldap.EmpresaDTO;
import com.spia.services.security.esb.entities.CompanyType;
import com.spia.services.security.esb.entities.ForgotPasswordRequest;
import com.spia.services.security.esb.entities.LdapUserResult;
import com.spia.services.security.esb.entities.Privilege;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.services.security.esb.entities.UserNotificationEsb;
import com.spia.services.security.esb.entities.UserNotificationPinEsb;
import com.spia.services.security.esb.entities.UserValidation;
import com.spia.businessportal.common.entities.dto.ValidateUserRequestDTO;
import com.spia.businessportal.common.entities.dto.ActionRestrictionHourDTO;
import com.spia.businessportal.common.entities.dto.ActionPrivilegeDTO;
import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 *         Interfaz para consumir los servicios de Unit Facility Visit. Si bien
 *         por el uso de generics normalmente no hace falta declarar estas
 *         interfaces, en este caso fue necesario dado que se realizan numerosas
 *         operaciones que no están comprendidas dentro de las primitivas.
 */
public interface SecurityEsbBO<EsbEntity> extends GenericMdwBO<EsbEntity> {

	SecurityEsbResponse<Privilege> getPrivileges(List<String> rolesIds) throws BusinessException;

	SecurityEsbResponse<String> changePassword(String userName, String oldPassword, String newPassword)
			throws BusinessException;

	SecurityEsbResponse<LdapUserResult> getCompanyUsers(String companyId) throws BusinessException;

	SecurityEsbResponse<UserValidation> validateUser(String email, String userName) throws BusinessException;

	SecurityEsbResponse<CompanyType> getCompanyType(String company) throws BusinessException;

	SecurityEsbResponse<CompanyType> getCompanyTypes() throws BusinessException;

	SecurityEsbResponse<CompanyType> getCompaniesByType(String type) throws BusinessException;

	SecurityEsbResponse<Privilege> getCompanyTypePrivileges(String companyTypeId) throws BusinessException;
	
	SecurityEsbResponse<Privilege> getCompanyTypePrivilegesByMemp(String companyTypeId) throws BusinessException;

	SecurityEsbResponse<UserNotificationEsb> getUserNotification(String companyId) throws BusinessException;

	SecurityEsbResponse<UserValidation> getUserInfo(String userId) throws BusinessException;

	SecurityEsbResponse forgotPassword(ValidateUserRequestDTO forgotPasswordRequest) throws BusinessException;

	SecurityEsbResponse<UserNotificationPinEsb> getUserNotificationPin(String companyId) throws BusinessException;

	/**
	 * 
	 * @param nit
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-10
	 */
	public SecurityEsbResponse<List<PrivilegioDiaRestriccionDTO>> getRestrictionPrivilegesCompany(String nit)
			throws BusinessException;

	/**
	 * 
	 * @param idCompany
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-10
	 */
	public SecurityEsbResponse<List<PrivilegioResponseDTO>> getConfigPrivileges(String idCompany, boolean isMemp)
			throws BusinessException;

	/**
	 * 
	 * @param userName
	 * @param newPassword
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-10
	 */
	SecurityEsbResponse<String> changeMobile(String userName, String newPassword) throws BusinessException;

	/**
	 * 
	 * @param resticcionPrivilegioEmpresa
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-10
	 */
	public SecurityEsbResponse<GenericResponseDTO> saveRestrictionPrivilegeCompany(
			ResticcionPrivilegioEmpresaDTO resticcionPrivilegioEmpresa) throws BusinessException;

	/**
	 * Permite traer los usuario de una empresa.
	 * 
	 * @company Assert Solutions S.A.S.
	 * @author Kevin Ronderos
	 * @since 22 jul. 2019
	 *
	 */

	SecurityEsbResponse<MobileNotificationInfoDTO> getMobileNotificationInfo(String userName) throws BusinessException;

	/**
	 * Permite actualizar los datos del del usuario
	 * 
	 * @company Assert Solutions S.A.S.
	 * @author Kevin Ronderos
	 * @since 22 jul. 2019
	 *
	 */
	SecurityEsbResponse<Boolean> updateMobileNotificationInfo(MobileNotificationInfoDTO mobileNotificationInfo)
			throws BusinessException;

	/**
	 * Consume el servicio de consulta de privilegios notificables por empresa.
	 * 
	 * @param idcompany
	 * @return {@link SecurityEsbResponse<Privilege>}
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @since 30 jul. 2019
	 * @author Daniel Sanchez
	 */
	public SecurityEsbResponse<PrivilegiosNotificablesEmpresaDTO> getPrivilegesNotifByCompanyList(String idcompany, String type)
			throws BusinessException;

	/**
	 * 
	 * @return PrivilegeListResponseDTO
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @since 30 jul. 2019
	 * @author Daniel Sanchez
	 */
	public SecurityEsbResponse<PrivilegeListResponseDTO> getPrivilegesNotificableList() throws BusinessException;

	/**
	 * 
	 * @return PrivilegioResponseUpdateDTO
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @since 30 jul. 2019
	 * @author Daniel Sanchez
	 */
	public SecurityEsbResponse<PrivilegioResponseUpdateDTO> updatePrivilegeNotificationCompany(
			PrivilegiosNotificablesEmpresaDTO privilegio) throws BusinessException;

	public SecurityEsbResponse<PrivilegioResponseUpdateDTO> notificationPrivileges(
			NotificationPrivilegesDTO notificationPrivileges) throws BusinessException;

	/**
	 * Obtiene la descripción de los privilegios
	 * 
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-15
	 */
	public SecurityEsbResponse<List<PrivilegeInfoDTO>> getPrivilegesDescription() throws BusinessException;

	/**
	 * Envia el request para la generacion del segundo password
	 * 
	 * @param secondPasswordGenerateRequest
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-19
	 */
	public SecurityEsbResponse secondPasswordGenerate(SecondPasswordGenerateRequestDTO secondPasswordGenerateRequest)
			throws BusinessException;

	/**
	 * Envia el request para la validacion del segundo password
	 * 
	 * @param validateCodeRequest
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-19
	 */
	public SecurityEsbResponse secondPasswordValidation(ValidateCodeRequestDTO validateCodeRequest)
			throws BusinessException;

	/**
	 * Servicio que indica si la empresa de un usuario determinado tiene
	 * administrador de portal
	 * 
	 * @param userName
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-13
	 */
	public SecurityEsbResponse<GenericResponseDTO> existsAdminCompany(String userName, String companyId) throws BusinessException;

	/**
	 * 
	 * @param auditLogRegisterRequest
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-18
	 */
	public SecurityEsbResponse<GenericResponseDTO> auditLogRegister(AuditLogRegisterRequestDTO auditLogRegisterRequest)
			throws BusinessException;

	/**
	 * 
	 * @param type
	 * @param filter
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Elvis Fontalvo
	 * @since 2020-05-18
	 */
	public SecurityEsbResponse<CompanyType> getCompaniesByTypeAndFilter(String type, String filter) throws BusinessException;

	public SecurityEsbResponse<ResponseDTO> getIpRestriptions(RequestDTO requestDTO) throws BusinessException;

	public SecurityEsbResponse<String> getCompanyNameById(String companyId) throws BusinessException;

	public SecurityEsbResponse<PrivilegioDiaRestriccionDTO> getTimeRestrictionByPrivilege(String id)
			throws BusinessException;

	public SecurityEsbResponse<com.spia.businessportal.common.ldap.proxy.dto.EmpresaDTO> registerCompanyTemp(String nit, String email,
			String businessName,String cellphone,String contact)
			throws BusinessException;

	public SecurityEsbResponse<String> sendEmailUsersPortal(NotificationPrivilegesDTO notificationPrivilegesDTO)
			throws BusinessException;

}
