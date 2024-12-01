package com.spia.businessportal.backend.batch;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;

import com.spia.businessportal.service.DocumentalService;

/**
 * @author Leandro Padrón.
 *
 *         Procesa las documentaciones bloqueadas.
 */
public class DocumentationProcessQueueJob extends QuartzJobBean {

    private DocumentalService documentalService;

    public DocumentationProcessQueueJob() {
        super();
    }

    public DocumentalService getDocumentalService() {
        return documentalService;
    }

    public void setDocumentalService(DocumentalService documentalService) {
        this.documentalService = documentalService;
    }

    @Override
    protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
        getDocumentalService().processQueue();
    }

}