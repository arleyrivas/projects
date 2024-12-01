/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  26 de may. de 2016 - 11:05:36 a. m.
 */
package com.spia.businessportal.backend.onlineinvoice.bo.impl;

import com.spia.businessportal.backend.bo.impl.GenericMdwBOImpl;
import com.spia.businessportal.backend.onlineinvoice.bo.OnlineInvoiceMdwBO;
import com.spia.services.entities.carvajal.CarvajalOnlineInvoiceRequest;
import com.spia.services.entities.payu.BaseResponse;
import com.spia.services.entities.payu.GenerateOnlineInvoiceMdwRequest;
import com.spia.services.entities.payu.OnlineInvoiceResponse;
import com.spia.services.exception.ServiceException;

/**
 * @author leandro
 *
 */
public class OnlineInvoiceMdwBOImpl<T> extends GenericMdwBOImpl<T> implements OnlineInvoiceMdwBO<T> {

	@Override
	public BaseResponse ping() throws ServiceException {
		return (BaseResponse)this.getRestTemplate().getForObject(getServiceUrl() + "/ping", BaseResponse.class);
	}

	@Override
	public OnlineInvoiceResponse generateOnlineInvoice(GenerateOnlineInvoiceMdwRequest request) throws ServiceException {
		return (OnlineInvoiceResponse)this.getRestTemplate().postForObject(getServiceUrl() + "/generate", request, OnlineInvoiceResponse.class);
	}

	@Override
	public CarvajalOnlineInvoiceRequest downloadOnlineInvoice(String documentNumber) throws ServiceException {
		return (CarvajalOnlineInvoiceRequest)this.getRestTemplate().getForObject(getServiceUrl() + "/download/{documentNumber}", CarvajalOnlineInvoiceRequest.class, documentNumber);
	}
}
