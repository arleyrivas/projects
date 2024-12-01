/*
 * Assert Solutions
 * Bogota - Colombia
 * http://www.assertsolutions.com
 * Author: Elvis Fontalvo
 * Date:  23 de mar. de 2021 - 17:26:03 p.m.
 */
package com.spia.businessportal.backend.bo;

import com.spia.businessportal.common.entities.dto.SOResponseDTO;
import com.spia.services.entities.billing.Crossing;
import com.spia.services.exception.BOException;

public interface CreditNoteMdwBO<T> extends GenericMdwBO<T> {

	/**
	 * Invoke the service to cross bills and credit notes
	 * 
	 * @param crossing
	 * @return {@link String}
	 * @throws BOException cuando ocurre un error en los servicios de mdw.
	 */
	public SOResponseDTO crossing(Crossing crossing) throws BOException;

}
