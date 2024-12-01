package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.dto.PinContainerizedServiceDTO;
import com.spia.businessportal.common.entities.dto.PinInfoServiceDTO;
import com.spia.businessportal.common.entities.dto.PinServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.service.EdoService;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 13/07/2018 Implementacion del Servicio que permite realizar
 * operaciones con Edo .
 * 
 */

public class EdoServiceImpl implements EdoService {

    private static final Log LOG = LogFactory.getLog(EdoServiceImpl.class);

    @Autowired
    private QuerysBO querysBO;

    @Override
    public PinInfoServiceDTO[] searchEdo(String edoNbr, String cliTransp) throws Exception {

        QuerysDTO request = new QuerysDTO();
        PinInfoServiceDTO pin = new PinInfoServiceDTO();
        PinInfoServiceDTO[] pins = null;

        List<PinContainerizedServiceDTO> pinContainerizedServiceDTOList = new ArrayList<>();
        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO pinParameterDTO = new QuerysParameterDTO();

        pinParameterDTO.setValue(edoNbr.toUpperCase());
        pinParameterDTO.setType("String");
        pinParameterDTO.setParameterId(1);

        parameters.add(pinParameterDTO);

        request.setParameters(parameters);
        request.setQueryName("searchPin");
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
        Gson gson = new Gson();

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        PinServiceDTO[] pinList = gson.fromJson(jsonInString, PinServiceDTO[].class);

        return pins;
    }

}
