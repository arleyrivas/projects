package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.TruckingCompanyDTO;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.TruckingCompanyService;
import com.spia.services.entities.ContactInfo;
import com.spia.services.entities.TruckingCompany;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite
 * realizar operaciones con Booking .
 * Modificado 26-04-2024 por Jorge Solis
 */

public class TruckingCompanyServiceImpl implements TruckingCompanyService {

	private static final Log LOG = LogFactory.getLog(TruckingCompanyServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Autowired
	private UserBO userBO;

	@Override
	public List<TruckingCompany> getTruckingCompaniesByConsigneeAndIdOrName(String idOrName, String consignee) throws Exception {

		QuerysDTO request = new QuerysDTO();
		TruckingCompanyDTO[] response = null;		
		List<TruckingCompany> truckingCompanyList = new ArrayList<>();
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO truckingCompanyListParameterDTO = new QuerysParameterDTO();

		truckingCompanyListParameterDTO.setValue(consignee);
		truckingCompanyListParameterDTO.setType(type);
		truckingCompanyListParameterDTO.setParameterId(1);

		parameters.add(truckingCompanyListParameterDTO);
		truckingCompanyListParameterDTO = new QuerysParameterDTO();
		
		truckingCompanyListParameterDTO.setValue(idOrName);
		truckingCompanyListParameterDTO.setType(type);
		truckingCompanyListParameterDTO.setParameterId(2);
		parameters.add(truckingCompanyListParameterDTO);
		
		request.setParameters(parameters);
		request.setQueryName("getTruckingCompanies");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, TruckingCompanyDTO[].class);
		for (TruckingCompanyDTO tC : response) {
			TruckingCompany truckingCompany = new TruckingCompany();
			ContactInfo contactInfo = new ContactInfo();
			truckingCompany.setId(tC.getId());
			truckingCompany.setName(tC.getName());
			truckingCompany.setCreditStatus(tC.getCreditStatus());
			truckingCompany.setInsuranceExpires(tC.getInsuranceExpires());
			contactInfo.setContactEmail(tC.getContactEmail());
			contactInfo.setContactAddress(tC.getContactAddress());
			contactInfo.setContactPhone(tC.getContactPhone());
			contactInfo.setContactCity(tC.getContactCity());
			truckingCompany.setContactInfo(contactInfo);
			truckingCompanyList.add(truckingCompany);
		}
		return truckingCompanyList;
	}
}
