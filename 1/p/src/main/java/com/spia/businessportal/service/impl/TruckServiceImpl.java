package com.spia.businessportal.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.dto.DriverValidationDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.TruckValidationDTO;
import com.spia.businessportal.service.TruckService;

public class TruckServiceImpl implements TruckService {
	@Autowired
	private QuerysBO querysBO;

	@Override
	public TruckValidationDTO[] truckValidationService(String truck, String nit) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<DriverValidationDTO> responseList = new ArrayList<>();

		String response = null;
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO driverParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO agenteParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO nitParameterDTO = new QuerysParameterDTO();

		driverParameterDTO.setValue(truck);
		driverParameterDTO.setType("String");
		driverParameterDTO.setParameterId(1);

		nitParameterDTO.setValue(nit);
		nitParameterDTO.setType("String");
		nitParameterDTO.setParameterId(2);

		request.setQueryName("truckValidation");
		parameters.add(driverParameterDTO);
		parameters.add(nitParameterDTO);

		request.setParameters(parameters);

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		Gson gson = new Gson();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		TruckValidationDTO[] driverList = gson.fromJson(jsonInString, TruckValidationDTO[].class);
		return driverList;
	}

	@Override
	public TruckValidationDTO[] truckValidationByDateService(String truck, Date tvaDate) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO driverParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO dateParameterDTO = new QuerysParameterDTO();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String date = sdf.format(tvaDate);

		driverParameterDTO.setValue(truck);
		driverParameterDTO.setType("String");
		driverParameterDTO.setParameterId(1);

		dateParameterDTO.setValue(date);
		dateParameterDTO.setType("String");
		dateParameterDTO.setParameterId(2);

		request.setQueryName("truckValidationByDate");
		parameters.add(driverParameterDTO);
		parameters.add(dateParameterDTO);

		request.setParameters(parameters);

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		Gson gson = new Gson();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		TruckValidationDTO[] truckList = gson.fromJson(jsonInString, TruckValidationDTO[].class);
		return truckList;
	}

	@Override
	public String validationMessageFP() throws Exception {

		QuerysDTO request = new QuerysDTO();
		request.setQueryName("validateNotificationMensajeFP");
		request.setParameters(new ArrayList<>());

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = new Gson().toJson(querysResponseDTO.getResult());
		
		return jsonInString;
	}

}
