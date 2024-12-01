package com.spia.businessportal.backend.bo;

import java.util.List;

import com.spia.services.entities.billing.Customer;
import com.spia.services.exception.ServiceException;

public interface CustomerMdwBO <T> extends GenericMdwBO<T>{
	/**
	 * Retorna todos los customer que tengan como rol shipper.
	 * 
	 * @return {@link com.spia.services.entities.billing.Customer}
	 * @throws ServiceException cuando se produce un error en la invocación al servicio de n4.
	 */
	public List<Customer> shippers()throws ServiceException;
	
	/**
	 * Retorna todos un customer dado su id y rol
	 * 
	 * @return {@link com.spia.services.entities.billing.Customer}
	 * @throws ServiceException cuando se produce un error en la invocación al servicio de n4.
	 */
	public Customer getByIdAndRole(String id, String role)throws ServiceException;
}
