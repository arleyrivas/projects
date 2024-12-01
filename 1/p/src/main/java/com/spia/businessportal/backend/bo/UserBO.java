/**
 * 
 */
package com.spia.businessportal.backend.bo;

import com.spia.businessportal.common.entities.User;

import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import ar.com.fluxit.framework.business.generic.GenericService;
import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author diego
 * 
 *         Interfaz de base de datos para User. Si bien por el uso de generics
 *         normalmente no hace falta declarar estas interfaces, en este caso fue
 *         necesario dado que se realizan numerosas operaciones que no están
 *         comprendidas dentro de las primitivas.
 */
public interface UserBO extends GenericService<User> {
	/**
	 * Retorna el usuario actual de la aplicacion
	 * 
	 * @return {@link User}
	 */
	UsuarioLoginDTO getCurrentUser();

	/**
	 * Determina si el usuario logueado posee un permiso determinado
	 * 
	 * @param permission para el currentUser
	 * @return boolean
	 */
	boolean hasPermission(String permission);

	/**
	 * Recupera un usuario a traves del nombre de usuario
	 * 
	 * @param username nombre de usuario
	 * @return {@link User}
	 * @throws BusinessException cuando ocurre un error en la base de datos.
	 */
	UsuarioLoginDTO getByUsername(String username) throws BusinessException;

	/**
	 * Modifica la password de un usuario almacenandola como una encoded password
	 * 
	 * @param user                 usuario al que se le va a modificar la contraseña
	 * @param oldPassword          password viejo
	 * @param password             nuevo password
	 * @param confirmationPassword confirmación del password
	 * @return {@link User}
	 * @throws BusinessException cuando ocurre un error en la base de datos.
	 */
	/* User changePassword(User user, String password, String oldPassword, String confirmationPassword)
			throws BusinessException; YA NO SE VA*/

	/**
	 * Genera un password codificado y lo retorna.
	 * 
	 * @param password sin codificar
	 * @return String
	 */
	/* String generatePassword(String password); YA NO SE VA*/

	/**
	 * Obtiene los usuarios de la empresa y los guarda en session en la variable
	 * "usersCompany"
	 * 
	 * @param companyId
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-30
	 */
	public void getUsersCompany();

}
