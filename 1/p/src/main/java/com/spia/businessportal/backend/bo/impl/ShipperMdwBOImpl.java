package com.spia.businessportal.backend.bo.impl;

import com.spia.businessportal.backend.bo.ShipperMdwBO;
import com.spia.services.entities.navis.ShipperInfo;
import com.spia.services.exception.ServiceException;

public class ShipperMdwBOImpl<T>  extends GenericMdwBOImpl<T> implements ShipperMdwBO<T>{

	@Override
	public ShipperInfo getById(String id) throws ServiceException {
		return (ShipperInfo)(this.getRestTemplate().getForObject(getServiceUrl() + "/info/{id}", ShipperInfo.class, id));
	}

}
