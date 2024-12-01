package com.spia.businessportal.backend.payu.bo;

import com.spia.businessportal.backend.bo.GenericMdwBO;
import com.spia.services.entities.payu.PayuRequest;
import com.spia.services.entities.payu.PayuResponse;
import com.spia.services.exception.BOException;
/** 
 * Interfaz para realizar las operaciones de PayU
 * 
 */
public interface PayuMdwBO<T> extends GenericMdwBO<T>{
	
	/**
	 * Se realiza el pago de facturas por PayU
	 * @param invoicesToPay
	 * @return
	 * @throws BOException
	 */
	public PayuResponse payInvoices(PayuRequest payuRequest) throws BOException;

}
