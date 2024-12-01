/**
 * 
 */
package com.spia.businessportal.backend.bo.impl;

import java.util.Iterator;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
/* import org.springframework.security.authentication.dao.SaltSource;
import org.springframework.security.crypto.password.PasswordEncoder; YA NO VA*/

import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.entity.entities.login.ldap.CompanyTypeDTO;

import ar.com.fluxit.framework.business.generic.impl.GenericServiceImpl;
import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.spring.context.ContextHolder;
//import ar.com.fluxit.framework.entities.user.CompanyTypeDTO;

/**
 * @author diego
 *
 *         Implementación de la interfaz UserBO
 */
public class UserBOImpl extends GenericServiceImpl<User> implements UserBO {

	private static final Log LOG = LogFactory.getLog(UserBO.class);

	/* @Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private SaltSource saltSource; YA NO VA*/

	/**
	 * 
	 */
	public UserBOImpl() {
		super();
	}

	@Override
	public UsuarioLoginDTO getCurrentUser() {
		return (UsuarioLoginDTO) ContextHolder.getContext().getCurrentUser();
	}

	@Override
	public boolean hasPermission(String permission) {
		boolean hasPermission = false;
		List<CompanyTypeDTO> permissions = this.getCurrentUser().getEmpresa().getTiposEmpresas();
		Iterator<CompanyTypeDTO> iterator = permissions.iterator();
		while (iterator.hasNext() && !hasPermission) {
			CompanyTypeDTO p = iterator.next();
			hasPermission = p.getCompanyTypeId().equals(permission);
		}
		return hasPermission;
	}

/* 	@Override
	public User changePassword(User user, String password, String oldPassword, String confirmationPassword)
			throws BusinessException {

		if (password.equals(confirmationPassword)) {
			String encodedPassword = this.generateEncodedPassword(password);
			if (oldPassword.equals(user.getPassword())) {
				user.setActive(true);
				user.setPassword(encodedPassword);
				this.saveOrUpdate(user);
				return user;
			} else {
				LOG.info("El password ingresado (" + oldPassword
						+ ") no corresponde con el password actual del usuario.");
				throw new BusinessException("La contraseña actual no es válida");
			}
		} else {
			LOG.info("El password ingresado (" + oldPassword + ") no corresponde con el password actual del usuario.");
			throw new BusinessException("La contraseña actual no es válida");
		}
	} YA NO VA*/

/* 	@Override
	public String generatePassword(String password) {
		return this.generateEncodedPassword(password);
	}

    private String generateEncodedPassword(String password) {
        return this.getPasswordEncoder().encode(password);
    }

	public PasswordEncoder getPasswordEncoder() {
		return passwordEncoder;
	}

	public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
		this.passwordEncoder = passwordEncoder;
	}

	public SaltSource getSaltSource() {
		return saltSource;
	}

	public void setSaltSource(SaltSource saltSource) {
		this.saltSource = saltSource;
	} YA NO VA*/

	@Override
	public UsuarioLoginDTO getByUsername(String username) throws BusinessException {
		return null;
	}

	@Override
	public void getUsersCompany() {

	}

}
