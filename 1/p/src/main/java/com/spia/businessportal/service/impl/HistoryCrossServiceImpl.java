package com.spia.businessportal.service.impl;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.dto.CreditNotesDTO;
import com.spia.businessportal.common.entities.dto.HistoryCrossDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.service.HistoryCrossService;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 11/05/2021 Service to carry out
 * operations with credit notes
 */

public class HistoryCrossServiceImpl implements HistoryCrossService {

	private static final Log LOG = LogFactory.getLog(HistoryCrossServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Override
	public List<HistoryCrossDTO> getHistoryCross(String type, String nit, Integer page) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<HistoryCrossDTO> response = null;
		String str = "String";
		String inte = "Integer";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO typeParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO nitParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO paginationParameterDTO = new QuerysParameterDTO();

		Integer offset = 0;
		if (page == 0) {
			offset = page;
		} else {
			for (int factor = 0; factor < page; factor++) {
				offset = offset + 20;
			}
		}

		typeParameterDTO.setType(str);
		typeParameterDTO.setParameterId(1);
		typeParameterDTO.setValue(type);

		nitParameterDTO.setType(str);
		nitParameterDTO.setParameterId(2);
		nitParameterDTO.setValue(nit);

		paginationParameterDTO.setValue(offset.toString());
		paginationParameterDTO.setType(inte);
		paginationParameterDTO.setParameterId(3);

		parameters.add(typeParameterDTO);
		parameters.add(nitParameterDTO);
		parameters.add(paginationParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("getHistoryCross");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<ArrayList<HistoryCrossDTO>>() {
		}.getType();
		response = gson.fromJson(jsonInString, listType);

		return response;
	}

}
