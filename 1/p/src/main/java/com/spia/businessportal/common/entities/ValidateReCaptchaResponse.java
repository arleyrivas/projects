/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  4 de mar. de 2016 - 2:42:25 p. m.
 */
package com.spia.businessportal.common.entities;

import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author leandro
 *
 */
public class ValidateReCaptchaResponse {

    @JsonProperty("success")
    private boolean success;
    @JsonProperty("error-codes")
    private Collection<String> errorCodes;
    @JsonProperty("challenge_ts")
    private String challengeTs;
    @JsonProperty("hostname")
    private String hostName;
    
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public Collection<String> getErrorCodes() {
		return errorCodes;
	}
	public void setErrorCodes(Collection<String> errorCodes) {
		this.errorCodes = errorCodes;
	}
	public String getChallengeTs() {
		return challengeTs;
	}
	public void setChallengeTs(String challengeTs) {
		this.challengeTs = challengeTs;
	}
	public String getHostName() {
		return hostName;
	}
	public void setHostName(String hostName) {
		this.hostName = hostName;
	}		
	
}
