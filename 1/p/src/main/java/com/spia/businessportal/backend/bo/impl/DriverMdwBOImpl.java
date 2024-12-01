/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  19 de ene. de 2016 - 11:08:39 a. m.
 */
package com.spia.businessportal.backend.bo.impl;

import java.util.Arrays;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.spia.businessportal.backend.bo.DriverMdwBO;
import com.spia.businessportal.web.controller.DriverController;
import com.spia.services.entities.Driver;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 */
public class DriverMdwBOImpl <T> extends GenericMdwBOImpl<T> implements DriverMdwBO<T>{

	private static final Log LOG = LogFactory.getLog(DriverMdwBOImpl.class);

	@Override
	public List<Driver> allByTruckingCompany(String truckingCompany, String value) throws BusinessException {
		LOG.info("URL DE MDW: "+this.getMiddlewareUrl()+"/truckingcompany/"+truckingCompany);
		return (List<Driver>) Arrays.asList(this.getRestTemplate().getForObject(this.getMiddlewareUrl()+"/truckingcompany/"+truckingCompany+"/"+value, this.getArrayClazz()));		
	}

}
