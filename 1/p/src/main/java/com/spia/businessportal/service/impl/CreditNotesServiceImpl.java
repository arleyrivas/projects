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
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.CreditNotesDTO;
import com.spia.businessportal.common.entities.dto.InvoicesCNDTO;
import com.spia.businessportal.common.entities.dto.PinServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.service.CreditNotesService;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 15/03/2021 Service to carry out
 * operations with credit notes
 */

public class CreditNotesServiceImpl implements CreditNotesService {

	private static final Log LOG = LogFactory.getLog(CreditNotesServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Autowired
	private UserBO userBO;

	@Override
	public List<CreditNotesDTO> getCreditNotesByClient(String clientId, Integer page) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<CreditNotesDTO> response = null;
		String type = "String";
		String type2 = "Integer";
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO agenteParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO clienteParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO paginationParameterDTO = new QuerysParameterDTO();
		
		Integer offset = 0;
		if (page == 0) {
			offset = page;
		} else {
			for (int factor = 0; factor < page; factor++) {
				offset = offset + 20;
			}
		}

		if (userBO.hasPermission(User.COMPANY_TYPE_CUSTOMER) && !userBO.hasPermission(User.COMPANY_TYPE_AGENT)) {
			agenteParameterDTO.setValue("null");
			clienteParameterDTO.setValue((String) (userlogin.getEmpresa().getId()));
		} else {
			agenteParameterDTO.setValue((String) (userlogin.getEmpresa().getId()));
			if (clientId != null && !clientId.equals("null")) {
				clienteParameterDTO.setValue(clientId);
			} else {
				clienteParameterDTO.setValue("null");
			}
		}

		agenteParameterDTO.setType(type);
		agenteParameterDTO.setParameterId(1);
		parameters.add(clienteParameterDTO);

		clienteParameterDTO.setType(type);
		clienteParameterDTO.setParameterId(2);
		parameters.add(agenteParameterDTO);

		paginationParameterDTO.setValue(offset.toString());
		paginationParameterDTO.setType(type2);
		paginationParameterDTO.setParameterId(3);
		parameters.add(paginationParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("getCreditNotesByClient");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<ArrayList<CreditNotesDTO>>(){}.getType();
		response = gson.fromJson(jsonInString, listType);

		return response;
	}

	@Override
	public List<InvoicesCNDTO> getInvoices(String cliente, Integer page) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<InvoicesCNDTO> invoices = null;
		List<QuerysParameterDTO> parameters = new ArrayList<>();

		QuerysParameterDTO agenteParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO clienteParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO pageParameterDTO = new QuerysParameterDTO();
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();

		Integer offset = 0;
		if (page == 0) {
			offset = page;
		} else {
			for (int factor = 0; factor < page; factor++) {
				offset = offset + 20;
			}
		}

		if (userBO.hasPermission(User.COMPANY_TYPE_CUSTOMER) && !userBO.hasPermission(User.COMPANY_TYPE_AGENT)) {
			agenteParameterDTO.setValue("null");
			clienteParameterDTO.setValue((String) (userlogin.getEmpresa().getId()));
		} else {
			agenteParameterDTO.setValue((String) (userlogin.getEmpresa().getId()));
			if (cliente != null && !cliente.equals("null")) {
				clienteParameterDTO.setValue(cliente);
			} else {
				clienteParameterDTO.setValue("null");
			}
		}

		agenteParameterDTO.setType("String");
		agenteParameterDTO.setParameterId(1);
		clienteParameterDTO.setType("String");
		clienteParameterDTO.setParameterId(2);
		pageParameterDTO.setValue(offset.toString());
		pageParameterDTO.setType("Integer");
		pageParameterDTO.setParameterId(3);

		request.setQueryName("getInvoicesForCreditNotes");
		parameters.add(agenteParameterDTO);
		parameters.add(clienteParameterDTO);
		parameters.add(pageParameterDTO);

		request.setParameters(parameters);
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy/MM/dd");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		Type listType = new TypeToken<ArrayList<InvoicesCNDTO>>(){}.getType();
		invoices = gson.fromJson(jsonInString, listType);
		return invoices;
	}

}
