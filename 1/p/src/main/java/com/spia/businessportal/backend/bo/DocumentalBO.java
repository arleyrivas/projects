package com.spia.businessportal.backend.bo;

import java.util.List;

import com.spia.businessportal.common.entities.Documentation;
import com.spia.businessportal.common.entities.dto.DocumentationHibernateDTO;

import ar.com.fluxit.framework.business.generic.GenericService;
import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;

public interface DocumentalBO extends GenericService<Documentation> {

	public List<DocumentationHibernateDTO> getDocumentalList(Page page) throws BusinessException;
}