/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  26 de may. de 2016 - 10:53:18 a. m.
 */
package com.spia.businessportal.backend.onlineinvoice.bo;

import com.spia.businessportal.backend.bo.GenericMdwBO;
import com.spia.services.entities.carvajal.CarvajalOnlineInvoiceRequest;
import com.spia.services.entities.payu.BaseResponse;
import com.spia.services.entities.payu.GenerateOnlineInvoiceMdwRequest;
import com.spia.services.entities.payu.OnlineInvoiceResponse;
import com.spia.services.exception.ServiceException;

/**
 * Interface que expone los servicios para conectarse con los servicios de factura electrónica.
 * 
 * @author leandro
 */
public interface OnlineInvoiceMdwBO<T> extends GenericMdwBO<T> {

	/**
	 * Servicio que verifica si el servicio está disponible
	 * 
	 * @return {@link BaseResponse}
	 * @throws ServiceException
	 */
	public BaseResponse ping() throws ServiceException;
	/**
	 * Servicio que permite generar la factura electrónica realizada por el proveedor en
	 * este caso el CEM financiero de Carvajal Información.
	 * 
	 * @throws ServiceException 
	 * @param invoice factura de N4
	 * @param customer cliente
	 * @param units lista de units que se facturan.
	 * @return {@link OnlineInvoiceResponse}
	 * @throws ServiceException
	 */
	public OnlineInvoiceResponse generateOnlineInvoice(GenerateOnlineInvoiceMdwRequest request) throws ServiceException;
	/**
	 * 
	 * Servicio que permite descargar la información en XML de la factura electrónica.
	 * 
	 * @return {@link OnlineInvoiceResponse}
	 * @param documentNumber  
	 * @throws ServiceException
	 */
	public CarvajalOnlineInvoiceRequest downloadOnlineInvoice(String documentNumber) throws ServiceException;
}
