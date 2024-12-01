package com.spia.businessportal.backend.bo;

import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.ldap.proxy.dto.InactivarUsuarioDTO;
import com.spia.businessportal.common.ldap.proxy.dto.SecondPasswordMethodDTO;
import com.spia.businessportal.common.ldap.proxy.dto.UsuarioDTO;
import com.spia.businessportal.common.ldap.proxy.dto.UsuarioRolesDTO;
import com.spia.services.security.esb.entities.SecurityEsbResponse;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * Interfaz para consimir servicios expuesto del getor LDAP a travez de un proxy
 * en el ESB
 * 
 * @company Assert Solutions S.A.S.
 * @author Andres Falla
 * @since 2019-09-25
 * @param <EsbEntity>
 */
public interface LdapProxyEsbBO<EsbEntity> extends GenericMdwBO<EsbEntity> {

	/**
	 * Servicio para creacion de nuevo usuario en el ldap
	 * 
	 * @param usuario
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-25
	 */
	public SecurityEsbResponse<GenericResponseDTO> crearUsuario(UsuarioDTO usuario) throws BusinessException;

	/**
	 * Servicio para edicion de nuevo usuario en el ldap
	 * 
	 * @param usuario
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-26
	 */
	public SecurityEsbResponse<GenericResponseDTO> editarUsuario(Object usuario) throws BusinessException;

	/**
	 * Servicio para asignar roles a un usuario en el ldap
	 * 
	 * @param usuarioRoles
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-26
	 */
	public SecurityEsbResponse<GenericResponseDTO> asignarRoles(UsuarioRolesDTO usuarioRoles) throws BusinessException;

	/**
	 * Servicio para inactivar un suario en el LDAP
	 * 
	 * @param inactivarUsuarioDTO
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-26
	 */
	public SecurityEsbResponse<GenericResponseDTO> inactivarUsuario(InactivarUsuarioDTO inactivarUsuarioDTO)
			throws BusinessException;

	/**
	 * Servico que guarda los metodos de envio por empresa y los persiste en el LDAP
	 * 
	 * @param secondPasswordMethod
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-27
	 */
	public SecurityEsbResponse<GenericResponseDTO> saveSecondPasswordMethod(
			SecondPasswordMethodDTO secondPasswordMethod) throws BusinessException;

	/**
	 * Servicio para obtener los metodos de envio de seguncda clave de una empresa
	 * 
	 * @param companyId
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-27
	 */
	public SecurityEsbResponse<GenericResponseDTO> getSecondPasswordMethod(String companyId) throws BusinessException;

	/**
	 * Servicio para consultar los roles por empresa
	 * 
	 * @param companyId
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-27
	 */
	public SecurityEsbResponse<GenericResponseDTO> getRolesByCompanyId(String companyId) throws BusinessException;

	/**
	 * Obtiene los roles por empresa y usuario
	 * 
	 * @param companyId
	 * @param user
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-27
	 */
	public SecurityEsbResponse<GenericResponseDTO> getRolesByCompanyIdAndUser(String companyId, String user)
			throws BusinessException;

	/**
	 * Obtiene la informacion del usuario por username y email
	 * 
	 * @param username
	 * @param email
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-01
	 */
	public SecurityEsbResponse<GenericResponseDTO> getInfoUserByUsernameAndEmail(String username, String email)
			throws BusinessException;

	/**
	 * Servicio que resetea el correo del usuario
	 * 
	 * @param username
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-02
	 */
	public SecurityEsbResponse<GenericResponseDTO> resetPasswordUser(String username) throws BusinessException;
}
