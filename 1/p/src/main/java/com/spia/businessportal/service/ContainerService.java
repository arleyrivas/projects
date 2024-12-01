/*
 * Author: Elvis Fontalvo - Assert Solutions 
 * Email: efontalvo@aassertsolutions.com 
 * Date: 29/03/2021 
 * Service to carry out operations with Booking
 * 
 */
package com.spia.businessportal.service;

import com.spia.businessportal.common.entities.dto.CheckDigitApprovedDTO;

public interface ContainerService {

	public CheckDigitApprovedDTO[] getVerificationDigitCheck(String containerNbr) throws Exception;

}
