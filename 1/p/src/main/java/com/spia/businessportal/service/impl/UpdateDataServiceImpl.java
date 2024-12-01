package com.spia.businessportal.service.impl;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.AssociatedClientDTO;
import com.spia.businessportal.common.entities.dto.InfoCompanyAndContactsDTO;
import com.spia.businessportal.common.entities.dto.InfoGeographyDTO;
import com.spia.businessportal.common.entities.dto.CountryDTO;
import com.spia.businessportal.common.entities.dto.UDRequestDTO;
import com.spia.businessportal.common.entities.dto.HistoryUDSacReqDTO;
import com.spia.businessportal.service.UpdateDataService;


public class UpdateDataServiceImpl implements UpdateDataService {

	private static final Log LOG = LogFactory.getLog(UpdateDataServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Override
	public List<AssociatedClientDTO> getAssociatedClientsByIdOrName(String nitUserlogin, String idOrName) throws Exception {

		List<AssociatedClientDTO> response = null;

        QuerysDTO request = new QuerysDTO();
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO parameter1 = new QuerysParameterDTO();
		QuerysParameterDTO parameter2 = new QuerysParameterDTO();

        parameter1.setParameterId(1);
		parameter1.setType("String");
		parameter1.setValue(nitUserlogin);
		parameters.add(parameter1);

		parameter2.setParameterId(2);
		parameter2.setType("String");
		parameter2.setValue(idOrName);
		parameters.add(parameter2);

        request.setQueryName("searchInAssociatedClients");
		request.setParameters(parameters);
		
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<ArrayList<AssociatedClientDTO>>() {}.getType();
		response = gson.fromJson(jsonInString, listType);

		return response;
	}

    @Override
	public InfoCompanyAndContactsDTO getCustomerData(String nit) throws Exception {

		List<InfoCompanyAndContactsDTO> response = null;

        QuerysDTO request = new QuerysDTO();
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO parameter = new QuerysParameterDTO();

        parameter.setParameterId(1);
		parameter.setType("String");
		parameter.setValue(nit);
		parameters.add(parameter);

        request.setQueryName("getCustomerData");
		request.setParameters(parameters);
		
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<List<InfoCompanyAndContactsDTO>>() {}.getType();
		response = gson.fromJson(jsonInString, listType);

        if (response.size() > 0) {
            return response.get(0);
        } else {
            return null;
        }
	}

	@Override
	public UDRequestDTO searchIdCustomerRequest(String nit) throws Exception {

		List<UDRequestDTO> response = null;

        QuerysDTO request = new QuerysDTO();
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO parameter = new QuerysParameterDTO();

        parameter.setParameterId(1);
		parameter.setType("String");
		parameter.setValue(nit);
		parameters.add(parameter);

        request.setQueryName("searchIdCustomerRequest");
		request.setParameters(parameters);
		
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<List<UDRequestDTO>>() {}.getType();
		response = gson.fromJson(jsonInString, listType);

        if (response.size() > 0) {
            return response.get(0);
        } else {
            return null;
        }
	}

    @Override
	public List<InfoGeographyDTO> getListInfoGeographyByCity(String city) throws Exception {

		List<InfoGeographyDTO> response = null;

        QuerysDTO request = new QuerysDTO();
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO parameter = new QuerysParameterDTO();

        parameter.setParameterId(1);
		parameter.setType("String");
		parameter.setValue(city);
		parameters.add(parameter);

        request.setQueryName("getListInfoGeography");
		request.setParameters(parameters);
		
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<ArrayList<InfoGeographyDTO>>() {}.getType();
		response = gson.fromJson(jsonInString, listType);

		return response;
	}

	@Override
	public List<CountryDTO> getListCountryByletterInitial(String letterInitial) throws Exception {

		List<CountryDTO> response = null;

        QuerysDTO request = new QuerysDTO();
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO parameter = new QuerysParameterDTO();

        parameter.setParameterId(1);
		parameter.setType("String");
		parameter.setValue(letterInitial);
		parameters.add(parameter);

        request.setQueryName("getListCountry");
		request.setParameters(parameters);
		
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<ArrayList<CountryDTO>>() {}.getType();
		response = gson.fromJson(jsonInString, listType);

		return response;
	}

	@Override
	public List<HistoryUDSacReqDTO> getHistoryRequest (Integer page) throws Exception {

    	Integer offset = page * 20;
		
		QuerysParameterDTO paginationParameterDTO = new QuerysParameterDTO();
		paginationParameterDTO.setValue(offset.toString());
		paginationParameterDTO.setType("Integer");
		paginationParameterDTO.setParameterId(1);

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		parameters.add(paginationParameterDTO);

		QuerysDTO request = new QuerysDTO();
		request.setQueryName("searchUpdateDataSac");
		request.setParameters(parameters);

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<ArrayList<HistoryUDSacReqDTO>>() {}.getType();

		List<HistoryUDSacReqDTO> response = gson.fromJson(jsonInString, listType);

		return response;
	}

	@Override
	public List<HistoryUDSacReqDTO> getHistoryRequestByDates (String dateFrom, String dateTo) throws Exception {
		
		QuerysParameterDTO dateFromParameterDTO = new QuerysParameterDTO();
		dateFromParameterDTO.setValue(dateFrom);
		dateFromParameterDTO.setType("String");
		dateFromParameterDTO.setParameterId(1);

		QuerysParameterDTO dateToParameterDTO = new QuerysParameterDTO();
		dateToParameterDTO.setValue(dateTo);
		dateToParameterDTO.setType("String");
		dateToParameterDTO.setParameterId(2);

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		parameters.add(dateFromParameterDTO);
		parameters.add(dateToParameterDTO);

		QuerysDTO request = new QuerysDTO();
		request.setQueryName("searchUpdateDataSacByDates");
		request.setParameters(parameters);

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<ArrayList<HistoryUDSacReqDTO>>() {}.getType();

		List<HistoryUDSacReqDTO> response = gson.fromJson(jsonInString, listType);

		return response;
	}

}
