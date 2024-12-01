package com.spia.businessportal.service;

import java.util.Date;
import java.util.List;

import com.spia.businessportal.common.entities.dto.InvoiceServiceDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 13/07/2018 Servicio que permite realizar operaciones con
 * Facturas .
 * 
 */
public interface InvoiceService {

    public List<InvoiceServiceDTO> getAll(String factura, String contenedor, Date desde, Date hasta, String estado,
            String cliente, Integer page) throws Exception;

}
