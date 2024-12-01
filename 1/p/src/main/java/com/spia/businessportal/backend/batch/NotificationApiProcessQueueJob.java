package com.spia.businessportal.backend.batch;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;

import com.spia.businessportal.service.NotificationApiService;

public class NotificationApiProcessQueueJob extends QuartzJobBean {

	private NotificationApiService notificationApiService;

	public NotificationApiProcessQueueJob() {
		super();
	}

	@Override
	protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
		getNotificationApiService().processQueue();
	}

	public NotificationApiService getNotificationApiService() {
		return notificationApiService;
	}

	public void setNotificationApiService(NotificationApiService notificationApiService) {
		this.notificationApiService = notificationApiService;
	}

}
