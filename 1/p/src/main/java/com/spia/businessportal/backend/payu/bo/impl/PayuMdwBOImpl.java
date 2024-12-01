package com.spia.businessportal.backend.payu.bo.impl;

import org.springframework.web.bind.annotation.RequestBody;

import com.spia.businessportal.backend.bo.impl.GenericMdwBOImpl;
import com.spia.businessportal.backend.payu.bo.PayuMdwBO;
import com.spia.services.entities.payu.PayuRequest;
import com.spia.services.entities.payu.PayuResponse;
import com.spia.services.exception.BOException;

public class PayuMdwBOImpl<T> extends GenericMdwBOImpl<T> implements PayuMdwBO<T>{

	@Override
	public PayuResponse payInvoices(@RequestBody PayuRequest payuRequest) throws BOException {
		
		return (PayuResponse)this.getRestTemplate().postForObject(getServiceUrl() + "/payInvoices", payuRequest, PayuResponse.class);
		
	}
}
