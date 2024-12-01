package com.spia.businessportal.service.impl;

import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.businessportal.common.entities.dto.autentication.ldap.GatewayQueryDTO;
import com.spia.businessportal.common.entities.dto.UsuarioLoginGatewayResultDTO;
import com.google.gson.Gson;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.common.entities.dto.Login;
import com.spia.businessportal.service.LoginService;
import com.spia.entity.entities.login.ldap.LoginResponseDTO;

import com.spia.businessportal.common.utils.AESEncryptionUtil;
import org.springframework.beans.factory.annotation.Value;
import com.spia.businessportal.common.entities.dto.EncryptedGatewayDataDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Date: 26/06/2020 Servicio que permite Login .
 * 
 */
@Service
public class LoginServiceImpl implements LoginService {

	private static final Log LOG = LogFactory.getLog(LoginServiceImpl.class);
	@Value("${encrypt.bus.initialVector}") public String BUSInitVector;
    @Value("${encrypt.bus.key}") public String BUSKey;

	public LoginServiceImpl() {
		super();
	}

	private String urlServicioLogin;
	private boolean ipValidated;
	private String ipAddress;

	@Autowired
	private RestTemplate restTemplate;

	@Override
	public UsuarioLoginGatewayResultDTO login(String username, String password, String ip) throws Exception {
		final String appname = "portal";

		try {
			GatewayQueryDTO decryptedBody = new GatewayQueryDTO(username, password, appname, ip);

			String JSONDecryptedBody = new Gson().toJson(decryptedBody);	

			String encryptedBody = AESEncryptionUtil.getInstance(BUSInitVector, BUSKey).encrypt(JSONDecryptedBody, "POST /login LoginServiceImpl");

			UsuarioLoginGatewayResultDTO responseDTO = restTemplate.exchange(urlServicioLogin, HttpMethod.POST,
					new HttpEntity<>(new EncryptedGatewayDataDTO(encryptedBody)), UsuarioLoginGatewayResultDTO.class).getBody();

			return responseDTO;
		} catch (Exception ex) {
			LOG.error(ex.getMessage());
		}

		return null;
	}

	@Override
	public boolean validated() throws Exception {
		return isIpValidated();
	}
	
	@Override
	public String address() throws Exception {
		return getIpAddress();
	}

	/**
	 * @return the urlServicioLogin
	 */
	public String getUrlServicioLogin() {
		return urlServicioLogin;
	}

	/**
	 * @param urlServicioLogin the urlServicioLogin to set
	 */
	public void setUrlServicioLogin(String urlServicioLogin) {
		this.urlServicioLogin = urlServicioLogin;
	}

	public boolean isIpValidated() {
		return ipValidated;
	}

	public void setIpValidated(boolean ipValidated) {
		this.ipValidated = ipValidated;
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

}
