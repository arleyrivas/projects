package com.spia.businessportal.common.entities;

public class JwtUserTokenInfoMobile {

	private String user;
	private String email;
	private String mobile;

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the password
	 */
	public String getMobile() {
		return mobile;
	}

	/**
	 * @param password the password to set
	 */
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
	
}
