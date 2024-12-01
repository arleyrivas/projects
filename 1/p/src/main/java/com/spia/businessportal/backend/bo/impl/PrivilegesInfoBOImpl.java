package com.spia.businessportal.backend.bo.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.hssf.record.formula.functions.T;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.PrivilegesInfoBO;
import com.spia.businessportal.web.controller.DataValidationController;

import ar.com.fluxit.framework.common.exception.BusinessException;

public class PrivilegesInfoBOImpl implements PrivilegesInfoBO {

    private String middlewareUrl;
    private String path;
    @Autowired
    private RestTemplate restTemplate;
    private Class<T> clazz;
    private Class<T[]> arrayClazz;
    private static final Log LOG = LogFactory.getLog(DataValidationController.class);
	
	@Override
	public T getPrivilegeList() throws BusinessException {

		T t = null;
        LOG.info((getServiceUrl()) + "/" );
        
        t = restTemplate.getForObject(getServiceUrl() + "/{id}", clazz);
        return t;

	}
	

    protected String getServiceUrl() {
        System.out.println("########################## PATH #######################");
        System.out.println(getPath());
        System.out.println("########################## PATH #######################");
        return middlewareUrl + getPath();
    }

    public void setRestTemplate(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    protected RestTemplate getRestTemplate() {
        return restTemplate;
    }

    public String getMiddlewareUrl() {
        return middlewareUrl;
    }

    public void setMiddlewareUrl(String middlewareUrl) {
        this.middlewareUrl = middlewareUrl;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Class<T> getClazz() {
        return clazz;
    }

    public void setClazz(Class<T> clazz) {
        this.clazz = clazz;
    }

    public void setArrayClazz(Class<T[]> arrayClazz) {
        this.arrayClazz = arrayClazz;
    }

    public Class<T[]> getArrayClazz() {
        return this.arrayClazz;
    }
    
}
