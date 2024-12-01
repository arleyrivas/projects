package com.spia.businessportal.backend.bo;

import com.spia.services.entities.GenericResponseDTO;
import com.spia.services.entities.billing.UpdateData;
import com.spia.services.exception.BOException;

public interface UpdateDataMdwBO<T> extends GenericMdwBO<T> {

	public GenericResponseDTO applyChanges(UpdateData updateData) throws BOException;

}
