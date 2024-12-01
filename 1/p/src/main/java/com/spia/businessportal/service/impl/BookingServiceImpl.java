package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.dto.BookingByTransportServiceDTO;
import com.spia.businessportal.common.entities.dto.BookingServiceDTO;
import com.spia.businessportal.common.entities.dto.EroServiceDTO;
import com.spia.businessportal.common.entities.dto.HazardServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.UnitIsoDTO;
import com.spia.businessportal.service.BookingService;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite
 * realizar operaciones con Booking .
 * 
 */

public class BookingServiceImpl implements BookingService {

	private static final Log LOG = LogFactory.getLog(BookingServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Override
	public EroServiceDTO[] searchBooking(String bookingNbr, String cliTransp) throws Exception {

		QuerysDTO request = new QuerysDTO();
		EroServiceDTO[] eros = null;
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO eroParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO cliParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO typeParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO unitListParameterDTO = new QuerysParameterDTO();

		eroParameterDTO.setValue(bookingNbr.toUpperCase());
		eroParameterDTO.setType(type);
		eroParameterDTO.setParameterId(1);

		cliParameterDTO.setValue(cliTransp);
		cliParameterDTO.setType(type);
		cliParameterDTO.setParameterId(2);

		typeParameterDTO.setValue("0");
		typeParameterDTO.setType(type);
		typeParameterDTO.setParameterId(3);

		unitListParameterDTO.setValue("");
		unitListParameterDTO.setType(type);
		unitListParameterDTO.setParameterId(4);

		parameters.add(eroParameterDTO);
		parameters.add(cliParameterDTO);
		parameters.add(typeParameterDTO);
		parameters.add(unitListParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("searchBooking");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		eros = gson.fromJson(jsonInString, EroServiceDTO[].class);

		return eros;
	}

	@Override
	public UnitIsoDTO[] searchBlItemUnitIso(String bookingNbr) throws Exception {

		QuerysDTO request = new QuerysDTO();
		UnitIsoDTO[] unitIso = null;
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO billOfLandingParameterDTO = new QuerysParameterDTO();

		billOfLandingParameterDTO.setValue(bookingNbr.toUpperCase());
		billOfLandingParameterDTO.setType(type);
		billOfLandingParameterDTO.setParameterId(1);

		parameters.add(billOfLandingParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("searchBlItemUnitIso");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		unitIso = gson.fromJson(jsonInString, UnitIsoDTO[].class);

		return unitIso;
	}

	@Override
	public BookingServiceDTO[] getBookingByAgent(String nbr, String agent) throws Exception {

		QuerysDTO request = new QuerysDTO();
		BookingServiceDTO[] bookingServiceDTO = null;
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO nbrParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO agentParameterDTO = new QuerysParameterDTO();

		nbrParameterDTO.setValue(nbr.toUpperCase());
		nbrParameterDTO.setType(type);
		nbrParameterDTO.setParameterId(1);

		agentParameterDTO.setValue(agent);
		agentParameterDTO.setType(type);
		agentParameterDTO.setParameterId(2);

		parameters.add(nbrParameterDTO);
		parameters.add(agentParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("getBookingByAgent");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		bookingServiceDTO = gson.fromJson(jsonInString, BookingServiceDTO[].class);

		return bookingServiceDTO;
	}

	@Override
	public BookingByTransportServiceDTO[] getBookingById(String nbr) throws Exception {

		QuerysDTO request = new QuerysDTO();
		BookingByTransportServiceDTO[] bookingByTransportServiceDTO = null;
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO nbrParameterDTO = new QuerysParameterDTO();

		nbrParameterDTO.setValue(nbr.toUpperCase());
		nbrParameterDTO.setType(type);
		nbrParameterDTO.setParameterId(1);

		parameters.add(nbrParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("getBookingByIdForASC");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		bookingByTransportServiceDTO = gson.fromJson(jsonInString, BookingByTransportServiceDTO[].class);

		return bookingByTransportServiceDTO;
	}
	
	@Override
	public HazardServiceDTO[] getHazardsByBooking(String nbr) throws Exception {

		QuerysDTO request = new QuerysDTO();
		HazardServiceDTO[] hazardServiceDTO = null;
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO nbrParameterDTO = new QuerysParameterDTO();

		nbrParameterDTO.setValue(nbr.toUpperCase());
		nbrParameterDTO.setType(type);
		nbrParameterDTO.setParameterId(1);

		parameters.add(nbrParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("getHazardsByBooking");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		hazardServiceDTO = gson.fromJson(jsonInString, HazardServiceDTO[].class);

		return hazardServiceDTO;
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
