package com.spia.businessportal.backend.bo.impl;

import java.util.Collections;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.LdapProxyEsbBO;
import com.spia.businessportal.backend.bo.SecurityEsbBO;
import com.spia.businessportal.common.entities.dto.CompanyIdAndUserDTO;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.entities.dto.NotificationPrivilegesDTO;
import com.spia.businessportal.common.ldap.proxy.dto.InactivarUsuarioDTO;
import com.spia.businessportal.common.ldap.proxy.dto.SecondPasswordMethodDTO;
import com.spia.businessportal.common.ldap.proxy.dto.UsuarioDTO;
import com.spia.businessportal.common.ldap.proxy.dto.UsuarioRolesDTO;
import com.spia.services.entities.UnitFacilityVisitDTO;
import com.spia.services.security.esb.entities.SecurityEsbResponse;

import ar.com.fluxit.framework.common.exception.BusinessException;

public class LdapProxyEsbBOImpl<EsbEntity> implements LdapProxyEsbBO<EsbEntity> {

	private static final Log LOG = LogFactory.getLog(SecurityEsbBO.class);
	private String middlewareUrl;
	private String path;
	@Autowired
	private RestTemplate ldapProxyRestTemplate;
	private Class<EsbEntity> clazz;
	private Class<EsbEntity[]> arrayClazz;

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
	public void setPath(String path) {
		this.path = path;

	}

	public String getPath() {
		return path;
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

	@Override
	public EsbEntity saveUfvReference(String reference, EsbEntity entity) throws BusinessException {
		return null;
	}

	public RestTemplate getLdapProxyRestTemplate() {
		return ldapProxyRestTemplate;
	}

	public void setLdapProxyRestTemplate(RestTemplate ldapProxyRestTemplate) {
		this.ldapProxyRestTemplate = ldapProxyRestTemplate;
	}

	@Override
	public SecurityEsbResponse<GenericResponseDTO> crearUsuario(UsuarioDTO usuario) throws BusinessException {
		SecurityEsbResponse u = null;

		try {

			u = this.getLdapProxyRestTemplate().postForObject(this.getMiddlewareUrl() + "/usuario", usuario,
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
	public SecurityEsbResponse<GenericResponseDTO> editarUsuario(Object usuario) throws BusinessException {
		SecurityEsbResponse u = null;

		try {
			u = this.getLdapProxyRestTemplate().postForObject(this.getMiddlewareUrl() + "usuario/editar", usuario,
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
	public SecurityEsbResponse<GenericResponseDTO> asignarRoles(UsuarioRolesDTO usuarioRoles) throws BusinessException {
		SecurityEsbResponse u = null;

		try {

			u = this.getLdapProxyRestTemplate().postForObject(this.getMiddlewareUrl() + "usuario/asignarRoles",
					usuarioRoles, SecurityEsbResponse.class);

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
	public SecurityEsbResponse<GenericResponseDTO> inactivarUsuario(InactivarUsuarioDTO inactivarUsuarioDTO)
			throws BusinessException {
		SecurityEsbResponse u = null;

		try {

			u = this.getLdapProxyRestTemplate().postForObject(this.getMiddlewareUrl() + "usuario/inactivar",
					inactivarUsuarioDTO, SecurityEsbResponse.class);

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
	public SecurityEsbResponse<GenericResponseDTO> saveSecondPasswordMethod(
			SecondPasswordMethodDTO secondPasswordMethod) throws BusinessException {
		SecurityEsbResponse u = null;

		try {

			u = this.getLdapProxyRestTemplate().postForObject(this.getMiddlewareUrl() + "company/secondPasswordMethod",
					secondPasswordMethod, SecurityEsbResponse.class);

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
	public SecurityEsbResponse<GenericResponseDTO> getSecondPasswordMethod(String companyId) throws BusinessException {
		SecurityEsbResponse u = null;

		try {

			NotificationPrivilegesDTO request = new NotificationPrivilegesDTO();
			request.setCompanyId(companyId);

			u = this.getLdapProxyRestTemplate().postForObject(
					this.getMiddlewareUrl() + "company/getSecondPasswordMethod", request, SecurityEsbResponse.class);

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
	public SecurityEsbResponse<GenericResponseDTO> getRolesByCompanyId(String companyId) throws BusinessException {
		SecurityEsbResponse u = null;

		try {

			NotificationPrivilegesDTO request = new NotificationPrivilegesDTO();
			request.setCompanyId(companyId);

			u = this.getLdapProxyRestTemplate().postForObject(this.getMiddlewareUrl() + "rol/getRolesByCompanyId",
					request, SecurityEsbResponse.class);

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
	public SecurityEsbResponse<GenericResponseDTO> getRolesByCompanyIdAndUser(String companyId, String user)
			throws BusinessException {
		SecurityEsbResponse u = null;

		try {

			CompanyIdAndUserDTO request = new CompanyIdAndUserDTO();
			request.setCompanyId(companyId);
			request.setUserName(user);
			u = this.getLdapProxyRestTemplate().postForObject(
					this.getMiddlewareUrl() + "rol/getRolesByCompanyIdAndUser", request, SecurityEsbResponse.class);

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
	public SecurityEsbResponse<GenericResponseDTO> getInfoUserByUsernameAndEmail(String username, String email)
			throws BusinessException {
		SecurityEsbResponse u = null;

		try {

			UsuarioRolesDTO request = new UsuarioRolesDTO();
			request.setCorreo(email);
			request.setUserName(username);
			u = this.getLdapProxyRestTemplate().postForObject(
					this.getMiddlewareUrl() + "usuario/getInfoUserByUsernameAndEmail", request,
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
	public SecurityEsbResponse<GenericResponseDTO> resetPasswordUser(String username) throws BusinessException {
		SecurityEsbResponse u = null;

		try {

			UsuarioRolesDTO request = new UsuarioRolesDTO();
			request.setUserName(username);
			u = this.getLdapProxyRestTemplate().postForObject(this.getMiddlewareUrl() + "password/resetPasswordUser",
					request, SecurityEsbResponse.class);

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
	public EsbEntity saveUfv(EsbEntity entity) throws BusinessException {
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

	// ASSIST 13-04-2022
	@Override
	public EsbEntity getReporter(String unitId, String agentId) throws BusinessException {
		return null;
	}

}
