package com.spia.businessportal.backend.batch;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;

import com.spia.businessportal.service.BreakBulkService;
import com.spia.businessportal.service.PinService;

/**
 * @author Elvis Fontalvo- Assert Solutions - elvis.fontalvo@assertsolutions.com
 */
public class AppointmentBbkProcessExpireJob extends QuartzJobBean {

    private BreakBulkService appointmentService;

    public AppointmentBbkProcessExpireJob() {
        super();
    }

    @Override
    protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
        getAppointmentService().processExpire();
    }

    public BreakBulkService getAppointmentService() {
        return appointmentService;
    }

    public void setAppointmentService(BreakBulkService appointmentService) {
        this.appointmentService = appointmentService;
    }

}
