package com.spia.businessportal.service;

import java.util.Date;
import java.util.List;

import com.spia.businessportal.common.entities.dto.CreditNotesDTO;
import com.spia.businessportal.common.entities.dto.InvoiceServiceDTO;
import com.spia.businessportal.common.entities.dto.InvoicesCNDTO;

/**
 * Author: Elvis Fontalvo - 
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Fecha: 15/03/2021 
 */
public interface CreditNotesService {

	public List<CreditNotesDTO> getCreditNotesByClient(String clientId, Integer page) throws Exception;

	public  List<InvoicesCNDTO> getInvoices(String cliente, Integer page) throws Exception;

}
