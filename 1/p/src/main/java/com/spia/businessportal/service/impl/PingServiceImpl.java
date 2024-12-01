package com.spia.businessportal.service.impl;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.backend.bo.PingBO;
import com.spia.businessportal.constant.BusinessPortalConstant;
import com.spia.businessportal.service.PingService;

@WebService(name = "Ping", targetNamespace = "")
public class PingServiceImpl implements PingService {

	private static final Log LOG = LogFactory.getLog(PingServiceImpl.class);
	@Autowired
	private PingBO pingBO;

	public PingBO getPingBO() {
		return pingBO;
	}

	public void setPingBO(PingBO pingBO) {
		this.pingBO = pingBO;
	}

	
	/*
	 * @GET
	 * 
	 * @Path("/pingApp")
	 * 
	 * @WebMethod
	 * 
	 * @Produces({ MediaType.TEXT_HTML, MediaType.TEXT_HTML })
	 */
	@Override
	public String pingApp() {
		LOG.debug("Connetion App OK");
		return BusinessPortalConstant.CONNECTION_OK;
	}

	
	/*
	 * @GET
	 * 
	 * @Path("/pingBD")
	 * 
	 * @WebMethod
	 * 
	 * @Produces({ MediaType.TEXT_HTML, MediaType.TEXT_HTML })
	 */
	@Override
	public String pingBD() {

		try {

			if (pingBO.isConntectedBD()) {
				LOG.debug("Connetion App to database is OK");
				return BusinessPortalConstant.CONNECTION_OK;
			}
		} catch (Exception e) {
			LOG.debug("Connetion App to database is FAILTURE");
			return BusinessPortalConstant.CONNECTION_FAILTURE;
		}
		LOG.debug("Connetion App to database is FAILTURE");
		return BusinessPortalConstant.CONNECTION_FAILTURE;
	}

}
