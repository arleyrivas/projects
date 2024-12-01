package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.dto.BlServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.BillOfLadingService;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite
 * realizar operaciones con Booking .
 * 
 */

public class BillOfLadingServiceImpl implements BillOfLadingService {

	private static final Log LOG = LogFactory.getLog(BillOfLadingServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Override
	public BlServiceDTO[] searchBl(String blNbr, String companyId, String userType) throws Exception {

		QuerysDTO request = new QuerysDTO();
		BlServiceDTO[] blServiceDTO = null;
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO blParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO typeParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO userTypeParameterDTO = new QuerysParameterDTO();

		blParameterDTO.setValue(blNbr.toUpperCase());
		blParameterDTO.setType(type);
		blParameterDTO.setParameterId(1);

		typeParameterDTO.setValue(companyId);
		typeParameterDTO.setType(type);
		typeParameterDTO.setParameterId(2);

		userTypeParameterDTO.setValue(userType);
		userTypeParameterDTO.setType(type);
		userTypeParameterDTO.setParameterId(3);
		
		parameters.add(blParameterDTO);
		parameters.add(typeParameterDTO);
		parameters.add(userTypeParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("searchBl");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		blServiceDTO = gson.fromJson(jsonInString, BlServiceDTO[].class);

		return blServiceDTO;
	}
	
	@SuppressWarnings("unchecked")
	@Override
    public Map<String,String> searchPins(String unitNbr) throws Exception {

        QuerysDTO request = new QuerysDTO();
        Map<String, String> unitsPin = new HashMap<>();

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO unitsParameterDTO = new QuerysParameterDTO();

        unitsParameterDTO.setValue(unitNbr);
        unitsParameterDTO.setType("String");
        unitsParameterDTO.setParameterId(1);

        parameters.add(unitsParameterDTO);
        
        request.setParameters(parameters);
        request.setQueryName("validatePinByUnit");
        
        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        if (jsonInString.length() > 0) {
            List<Map<String, String>> unitsList = gson.fromJson(jsonInString, ArrayList.class);
            
            for (Map<String, String> unit : unitsList) {
            	unitsPin.put(unit.get("unitNbr"), unit.get("truckName"));
    		}        	
        }
        
        return unitsPin;
    }
}
