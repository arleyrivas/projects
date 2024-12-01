package com.spia.businessportal.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.dto.DriverDTO;
import com.spia.businessportal.common.entities.dto.DriverValidationDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.DriverService;
import com.spia.services.entities.Driver;

public class DriverServiceImpl implements DriverService {
	@Autowired
	private QuerysBO querysBO;

	@Override
	public DriverDTO[] driverValidation(String driver) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO driverParameterDTO = new QuerysParameterDTO();

		driverParameterDTO.setValue(driver);
		driverParameterDTO.setType("String");
		driverParameterDTO.setParameterId(1);

		request.setQueryName("driver");
		parameters.add(driverParameterDTO);

		request.setParameters(parameters);

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		Gson gson = new Gson();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		DriverDTO[] driverList = gson.fromJson(jsonInString, DriverDTO[].class);
		return driverList;
	}

	@Override
	public DriverValidationDTO[] driverValidationService(String driver) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO driverParameterDTO = new QuerysParameterDTO();

		driverParameterDTO.setValue(driver);
		driverParameterDTO.setType("String");
		driverParameterDTO.setParameterId(1);

		request.setQueryName("driverValidation");
		parameters.add(driverParameterDTO);
		request.setParameters(parameters);

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		Gson gson = new Gson();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		DriverValidationDTO[] driverList = gson.fromJson(jsonInString, DriverValidationDTO[].class);
		return driverList;
	}
	
	@Override
	public DriverValidationDTO[] driverValidationByDateService(String driver, Date tvaDate, String isHazard) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO driverParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO dateParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO isHazardParameterDTO = new QuerysParameterDTO();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = sdf.format(tvaDate);
        
		driverParameterDTO.setValue(driver);
		driverParameterDTO.setType("String");
		driverParameterDTO.setParameterId(1);
		
		dateParameterDTO.setValue(date);
        dateParameterDTO.setType("String");
        dateParameterDTO.setParameterId(2);
        
        isHazardParameterDTO.setValue(isHazard);
        isHazardParameterDTO.setType("String");
        isHazardParameterDTO.setParameterId(3);

		request.setQueryName("driverValidationByDate");
		parameters.add(driverParameterDTO);
		parameters.add(dateParameterDTO);
		parameters.add(isHazardParameterDTO);
		request.setParameters(parameters);

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		Gson gson = new Gson();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		DriverValidationDTO[] driverList = gson.fromJson(jsonInString, DriverValidationDTO[].class);
		return driverList;
	}

	@Override
	public List<Driver> getDrivers(String search) throws Exception {

		QuerysDTO request = new QuerysDTO();
		Driver[] response = null;
		String idOrName = EncoderDecoder.decodeBase64(search);
		List<Driver> driverList = new ArrayList<>();
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO driverParameterDTO = new QuerysParameterDTO();

		driverParameterDTO.setValue(idOrName);
		driverParameterDTO.setType(type);
		driverParameterDTO.setParameterId(1);

		parameters.add(driverParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("getDrivers");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, Driver[].class);
		for (Driver d : response) {
			driverList.add(d);
		}
		return driverList;
	}

}
