package com.spia.businessportal.backend.bo;

import com.spia.businessportal.backend.bo.GenericMdwBO;
import com.spia.services.entities.navis.ShipperInfo;
import com.spia.services.exception.ServiceException;

public interface ShipperMdwBO<T> extends GenericMdwBO<T>{
	
	public ShipperInfo getById(String id) throws ServiceException;

}
