package com.spia.businessportal.service;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 13/07/2018 Servicio que permite realizar operaciones con
 * Facturas .
 * 
 */
public interface InvoiceByReferenceCodeService {

    public String getAll(String referenceCode) throws Exception;

}
