package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;

/**
 * 
 * DTO para el objeto PrivilegesNotificationCompanyDTO,
 *
 */
public class NotificationPrivilegesDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String companyId;
	private String privilegeId;
	private String notificationInfo;
	private String mailsNotifications;

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getPrivilegeId() {
		return privilegeId;
	}

	public void setPrivilegeId(String privilegeId) {
		this.privilegeId = privilegeId;
	}

	public String getNotificationInfo() {
		return notificationInfo;
	}

	public void setNotificationInfo(String notificationInfo) {
		this.notificationInfo = notificationInfo;
	}

	public String getMailsNotifications() {
		return mailsNotifications;
	}

	public void setMailsNotifications(String mailsNotifications) {
		this.mailsNotifications = mailsNotifications;
	}
	
}
