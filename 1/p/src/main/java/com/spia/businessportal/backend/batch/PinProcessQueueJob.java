package com.spia.businessportal.backend.batch;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;

import com.spia.businessportal.service.PinService;

/**
 * @author Juan Manuel Torrengo - juan.torrengo@fluxit.com.ar
 */
public class PinProcessQueueJob extends QuartzJobBean {

    private PinService pinService;

    public PinProcessQueueJob() {
        super();
    }

    @Override
    protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
        getPinService().processQueue();
    }

    public PinService getPinService() {
        return pinService;
    }

    public void setPinService(PinService pinService) {
        this.pinService = pinService;
    }

}
