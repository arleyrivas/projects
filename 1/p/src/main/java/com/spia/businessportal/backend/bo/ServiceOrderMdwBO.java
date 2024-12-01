package com.spia.businessportal.backend.bo;

import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.services.entities.ServiceOrder;
import com.spia.services.entities.ServiceOrderServiceDTO;
import com.spia.services.exception.BOException;

public interface ServiceOrderMdwBO<T> extends GenericMdwBO<T> {

	;
	public @ResponseBody ServiceOrder saveServiceOrder(ServiceOrderServiceDTO serviceOrderServiceDTO) throws BOException;

}
