/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  4 de mar. de 2016 - 11:02:16 a. m.
 */
package com.spia.businessportal.common.utils;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;

/**
 * @author leandro
 *
 */
public final class LoginAttemptsSingleton {

	private static LoginAttemptsSingleton instance = null;
	private Map<String, Map<String,Integer>> loginAttepmts = null;
    @Value("${recaptcha.show-captcha-attempts}")
    private int showCaptchaAttempts;
	
	private LoginAttemptsSingleton(){
	}
	
	public static LoginAttemptsSingleton getInstance(){
		if(instance == null){
			instance = new LoginAttemptsSingleton();
			instance.setLoginAttempts(new HashMap<String, Map<String,Integer>>());
		}
		return instance;
	}

	private void setLoginAttempts(Map<String, Map<String, Integer>> loginAttepmts) {
		this.loginAttepmts = loginAttepmts; 
	}

	public Map<String, Map<String, Integer>> getLoginAttepmts() {
		return loginAttepmts;
	}

	public int getShowCaptchaAttempts() {
		return showCaptchaAttempts;
	}

	public void setShowCaptchaAttempts(int showCaptchaAttempts) {
		this.showCaptchaAttempts = showCaptchaAttempts;
	}
	
}
