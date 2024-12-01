package com.spia.businessportal.backend.bo;

import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import ar.com.fluxit.framework.common.exception.BusinessException;

public interface ServicesExtBO {

	public GenericResponseDTO validateDocumentTransport(String id) throws BusinessException;

}
