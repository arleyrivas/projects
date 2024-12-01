package com.spia.businessportal.service.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.InvoiceServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.service.InvoiceService;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 13/07/2018 Implementacion del Servicio
 * que permite realizar operaciones con Facturas .
 * 
 */

public class InvoiceServiceImpl implements InvoiceService {

	private static final Log LOG = LogFactory.getLog(InvoiceServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;
	@Autowired
	private UserBO userBO;

	@Override
	public List<InvoiceServiceDTO> getAll(String factura, String contenedor, Date desde, Date hasta, String estado,
			String cliente, Integer page) throws Exception {

		QuerysDTO request = new QuerysDTO();
		List<InvoiceServiceDTO> invoices = null;
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO facturaParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO contenedorParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO desdeParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO hastaParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO estadoParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO estadoSelectParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO agenteParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO clienteParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO clienteOrAgenteParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO pageParameterDTO = new QuerysParameterDTO();
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
		String desdeString = "null";
		String hastaString = "null";

		if (desde != null) {
			desdeString = dateFormat.format(desde);
		}

		if (hasta != null) {
			hastaString = dateFormat.format(hasta);
		}

		Integer offset = 0;
		if (page == 0) {
			offset = page;
		} else {
			for (int factor = 0; factor < page; factor++) {
				offset = offset + 20;
			}
		}
		desdeParameterDTO.setValue(desdeString);
		desdeParameterDTO.setType("Date");
		desdeParameterDTO.setParameterId(2);

		hastaParameterDTO.setValue(hastaString);
		hastaParameterDTO.setType("Date");
		hastaParameterDTO.setParameterId(3);

		facturaParameterDTO.setValue(factura);
		facturaParameterDTO.setType("String");
		facturaParameterDTO.setParameterId(4);

		estadoParameterDTO.setValue(estado);
		estadoParameterDTO.setType("String");
		estadoParameterDTO.setParameterId(5);

		estadoSelectParameterDTO.setValue(estado);
		estadoSelectParameterDTO.setType("String");
		estadoSelectParameterDTO.setParameterId(6);

		if ((userBO.hasPermission(User.COMPANY_TYPE_CUSTOMER) || (userBO.hasPermission(User.COMPANY_TYPE_TRUCK))) && !userBO.hasPermission(User.COMPANY_TYPE_AGENT)) {
			agenteParameterDTO.setValue("null");
			clienteParameterDTO.setValue((String) (userlogin.getEmpresa().getId()));
			clienteOrAgenteParameterDTO.setValue((String) (userlogin.getEmpresa().getId()));
		} else {
			agenteParameterDTO.setValue((String) (userlogin.getEmpresa().getId()));

			if (cliente != null && !cliente.equals("null")) {
				clienteParameterDTO.setValue(cliente);
				clienteOrAgenteParameterDTO.setValue((String) (cliente));
			} else {
				clienteParameterDTO.setValue("null");
				clienteOrAgenteParameterDTO.setValue((String) (userlogin.getEmpresa().getId()));
			}
		}

		agenteParameterDTO.setType("String");
		agenteParameterDTO.setParameterId(7);
		contenedorParameterDTO.setValue(contenedor);
		contenedorParameterDTO.setType("String");
		contenedorParameterDTO.setParameterId(1);
		clienteParameterDTO.setType("String");
		clienteParameterDTO.setParameterId(8);

		clienteOrAgenteParameterDTO.setType("String");
		clienteOrAgenteParameterDTO.setParameterId(9);

		pageParameterDTO.setValue(offset.toString());
		pageParameterDTO.setType("Integer");
		pageParameterDTO.setParameterId(10);

		request.setQueryName("invoice");
		parameters.add(contenedorParameterDTO);
		parameters.add(desdeParameterDTO);
		parameters.add(hastaParameterDTO);
		parameters.add(facturaParameterDTO);
		parameters.add(estadoParameterDTO);
		parameters.add(estadoSelectParameterDTO);
		parameters.add(agenteParameterDTO);
		parameters.add(clienteParameterDTO);
		parameters.add(clienteOrAgenteParameterDTO);
		parameters.add(pageParameterDTO);

		request.setParameters(parameters);
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		invoices = (List<InvoiceServiceDTO>) querysResponseDTO.getResult();
		return invoices;
	}

}
