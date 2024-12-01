package com.spia.businessportal.common.entities.dto;

/**
 * DTO para cambiar el password del usuario.
 * 
 * @author leandro
 *
 */
public class PasswordDTO {
	
	private String oldPassword;
	private String newPassword;
	private String confirmationPassword;
	
	/**
	 * 
	 */
	public PasswordDTO() {
		super();
	}
	public String getOldPassword() {
		return oldPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public String getConfirmationPassword() {
		return confirmationPassword;
	}
	public void setConfirmationPassword(String confirmationPassword) {
		this.confirmationPassword = confirmationPassword;
	}
	
	

}
