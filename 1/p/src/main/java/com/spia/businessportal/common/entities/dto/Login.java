package com.spia.businessportal.common.entities.dto;

/**
 * 
 * DTO para el objeto LoginInfo, datos para la autenticación
 *
 */
public class Login {

	private String username;
	private String password;
	private String appname;

	public Login() {
		super();
	}

	public Login(String username, String password, String appname) {
		super();
		this.username = username;
		this.password = password;
		this.appname = appname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the appname
	 */
	public String getAppname() {
		return appname;
	}

	/**
	 * @param appname the appname to set
	 */
	public void setAppname(String appname) {
		this.appname = appname;
	}
	
	
}