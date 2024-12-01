package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * 
 * DTO para el objeto MobileNotificationInfo, informacion del celular de
 * notificaciones
 *
 */
public class MobileNotificationInfoDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String username;
	private String mobileNotification;
	private String isLocked;

	public MobileNotificationInfoDTO() {
		super();
	}

	public MobileNotificationInfoDTO(String username, String mobileNotification, String isLocked) {
		super();
		this.username = username;
		this.mobileNotification = mobileNotification;
		this.isLocked = isLocked;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getMobileNotification() {
		return mobileNotification;
	}

	public void setMobileNotification(String mobileNotification) {
		this.mobileNotification = mobileNotification;
	}

	public String getIsLocked() {
		return isLocked;
	}

	public void setIsLocked(String isLocked) {
		this.isLocked = isLocked;
	}

}
