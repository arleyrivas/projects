package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.ReferencecodeDTO;
import com.spia.businessportal.service.InvoiceByReferenceCodeService;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 13/07/2018 Implementacion del Servicio que permite realizar
 * operaciones con Facturas .
 * 
 */

public class InvoiceByReferenceCodeServiceImpl implements InvoiceByReferenceCodeService {

    private static final Log LOG = LogFactory.getLog(InvoiceByReferenceCodeServiceImpl.class);

    @Autowired
    private QuerysBO querysBO;
    @Autowired
    private UserBO userBO;

    @Override
    public String getAll(String referenceCode) throws Exception {

        QuerysDTO request = new QuerysDTO();

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO referenceCodeParameterDTO = new QuerysParameterDTO();

        UsuarioLoginDTO userlogin = userBO.getCurrentUser();

        referenceCodeParameterDTO.setValue(referenceCode);
        referenceCodeParameterDTO.setType("String");
        referenceCodeParameterDTO.setParameterId(1);

        parameters.add(referenceCodeParameterDTO);

        request.setParameters(parameters);
        request.setQueryName("referencecode");
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
        Gson gson = new Gson();

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        ReferencecodeDTO[] invoices = gson.fromJson(jsonInString, ReferencecodeDTO[].class);

        return invoices[0].getN4_final_nbrs();
    }

}
