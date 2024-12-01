package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.dto.EroServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.service.EroService;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 13/07/2018 Implementacion del Servicio que permite realizar
 * operaciones con Edo .
 * 
 */

public class EroServiceImpl implements EroService {

    private static final Log LOG = LogFactory.getLog(EroServiceImpl.class);

    @Autowired
    private QuerysBO querysBO;

    @Override
    public EroServiceDTO[] searchEro(String eroNbr, String cliTransp) throws Exception {

        QuerysDTO request = new QuerysDTO();
        EroServiceDTO[] eros = {};

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO eroParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO cliParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO typeParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO unitListParameterDTO = new QuerysParameterDTO();

        eroParameterDTO.setValue(eroNbr.toUpperCase());
        eroParameterDTO.setType("String");
        eroParameterDTO.setParameterId(1);

        cliParameterDTO.setValue(cliTransp);
        cliParameterDTO.setType("String");
        cliParameterDTO.setParameterId(2);

        typeParameterDTO.setValue("0");
        typeParameterDTO.setType("String");
        typeParameterDTO.setParameterId(3);

        unitListParameterDTO.setValue("");
        unitListParameterDTO.setType("String");
        unitListParameterDTO.setParameterId(4);

        parameters.add(eroParameterDTO);
        parameters.add(cliParameterDTO);
        parameters.add(typeParameterDTO);
        parameters.add(unitListParameterDTO);
        request.setParameters(parameters);
        request.setQueryName("searchEro");
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
        // Gson gson = new Gson();
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss.S").create();

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        eros = gson.fromJson(jsonInString, EroServiceDTO[].class);

        return eros;
    }

}
