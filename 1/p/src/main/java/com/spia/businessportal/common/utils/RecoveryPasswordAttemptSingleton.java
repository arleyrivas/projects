/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  10 de nov. de 2016 - 12:07:09 a. m.
 */
package com.spia.businessportal.common.utils;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;

/**
 * @author leandro
 *
 */
public class RecoveryPasswordAttemptSingleton {

	private static RecoveryPasswordAttemptSingleton instance = null;
	private Map<String, Map<String,Integer>> loginAttepmts = null;
    @Value("${recaptcha.show-captcha-attempts}")
    private int showCaptchaAttempts;
	
	private RecoveryPasswordAttemptSingleton(){
	}
	
	public static RecoveryPasswordAttemptSingleton getInstance(){
		if(instance == null){
			instance = new RecoveryPasswordAttemptSingleton();
			instance.setRecoveryAttempts(new HashMap<String, Map<String,Integer>>());
		}
		return instance;
	}

	private void setRecoveryAttempts(Map<String, Map<String, Integer>> loginAttepmts) {
		this.loginAttepmts = loginAttepmts; 
	}

	public Map<String, Map<String, Integer>> getRecoveryAttempts() {
		return loginAttepmts;
	}

	public int getShowCaptchaAttempts() {
		return showCaptchaAttempts;
	}

	public void setShowCaptchaAttempts(int showCaptchaAttempts) {
		this.showCaptchaAttempts = showCaptchaAttempts;
	}
}
