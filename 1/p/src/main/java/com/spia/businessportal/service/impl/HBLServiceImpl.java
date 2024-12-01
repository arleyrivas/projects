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
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.HBLServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.HBLService;
import com.spia.services.entities.billing.Customer;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/**
 * 
 * Autor: Santiago Ariza Clavijo - 04-07-2019 - Búsqueda de  cargo lots desde HBL 
 */

public class HBLServiceImpl implements HBLService {

    private static final Log LOG = LogFactory.getLog(HBLServiceImpl.class);

    @Autowired
    private QuerysBO querysBO;
    @Autowired
    private UserBO userBO;

    @Override
    public HBLServiceDTO[] searchCargoLots(String hbl, String type) throws Exception {

        QuerysDTO request = new QuerysDTO();
        UsuarioLoginDTO userlogin = userBO.getCurrentUser();
        HBLServiceDTO[] cargoLots;

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO hblParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO agentParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO destinationParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO transitStateParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO typeParameterDTO = new QuerysParameterDTO();

        hblParameterDTO.setValue(EncoderDecoder.decodeBase64(hbl));
        hblParameterDTO.setType("String");
        hblParameterDTO.setParameterId(1);

        agentParameterDTO.setValue(userlogin.getEmpresa().getId());
        agentParameterDTO.setType("String");
        agentParameterDTO.setParameterId(2);

        destinationParameterDTO.setValue("");
        destinationParameterDTO.setType("String");
        destinationParameterDTO.setParameterId(3);
        
        transitStateParameterDTO.setValue("");
        transitStateParameterDTO.setType("String");
        transitStateParameterDTO.setParameterId(4);
        
        typeParameterDTO.setValue(type);
        typeParameterDTO.setType("String");
        typeParameterDTO.setParameterId(5);
        
        parameters.add(hblParameterDTO);
        parameters.add(agentParameterDTO);
        parameters.add(destinationParameterDTO);
        parameters.add(transitStateParameterDTO);
        parameters.add(typeParameterDTO);
        
        request.setParameters(parameters);
        request.setQueryName("executeCargoLotByHblSP");
        
        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        cargoLots = gson.fromJson(jsonInString, HBLServiceDTO[].class);
        
        return cargoLots;
    }
    
    @SuppressWarnings("unchecked")
	@Override
    public Map<String,String> searchPins(String hbl) throws Exception {

        QuerysDTO request = new QuerysDTO();
        Map<String, String> unitsPin = new HashMap<>();

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO unitsParameterDTO = new QuerysParameterDTO();

        unitsParameterDTO.setValue(EncoderDecoder.decodeBase64(hbl));
        unitsParameterDTO.setType("String");
        unitsParameterDTO.setParameterId(1);

        parameters.add(unitsParameterDTO);
        
        request.setParameters(parameters);
        request.setQueryName("unitsPins");
        
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
    
    @Override
    public Customer[] searchTruckCompany(String search) throws Exception {

    	Customer[] customers = null;
    	
        QuerysDTO request = new QuerysDTO(); 

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO searchParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO search2ParameterDTO = new QuerysParameterDTO();

        searchParameterDTO.setValue(search);
        searchParameterDTO.setType("String");
        searchParameterDTO.setParameterId(1);
        
        search2ParameterDTO.setValue(search);
        search2ParameterDTO.setType("String");
        search2ParameterDTO.setParameterId(2);

        parameters.add(searchParameterDTO);
        parameters.add(search2ParameterDTO);
        
        request.setParameters(parameters);
        request.setQueryName("bbkTruckCompany");
        
        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        
        if (jsonInString.length() > 0) {
        	customers = gson.fromJson(jsonInString, Customer[].class);
        }
        
        return customers;
    }
}
