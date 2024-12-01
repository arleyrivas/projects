package com.spia.businessportal.service;

import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.businessportal.common.entities.dto.UsuarioLoginGatewayResultDTO;
import com.spia.entity.entities.login.ldap.LoginResponseDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions 
 * Email: efontalvo@aassertsolutions.com 
 * Date: 26/06/2020 Servicio que permite
 * Login .
 * 
 */
public interface LoginService {

	public UsuarioLoginGatewayResultDTO login(String username, String password, String ip) throws Exception;

	public boolean validated() throws Exception;
	
	public String address() throws Exception;

}
