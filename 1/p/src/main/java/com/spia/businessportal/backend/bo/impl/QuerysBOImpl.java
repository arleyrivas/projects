package com.spia.businessportal.backend.bo.impl;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

public class QuerysBOImpl implements QuerysBO {

	private static final Logger LOG = LoggerFactory.getLogger(QuerysBOImpl.class);

	private String urlQuerys;
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private UserBO userBO;
	@Override
	public QuerysResponseDTO executeQuery(QuerysDTO query) throws BusinessException {
		LOG.info("URL Service Querys: {}", urlQuerys);
		UsuarioLoginDTO userlogin= userBO.getCurrentUser();
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-Type", MediaType.APPLICATION_JSON.toString());
		headers.add("Accept", MediaType.APPLICATION_JSON.toString());
		
		List<QuerysParameterDTO> parameters = query.getParameters();
		List<QuerysParameterDTO> parameterss = new ArrayList<QuerysParameterDTO>();
		
		for (QuerysParameterDTO o : parameters) {
			if(o.getValue().equals("USERCONTROLLER"))
			{
				//User currentUser = this.getUserBO().getCurrentUser();
				o.setValue(String.valueOf(userlogin.getEmpresa().getId()));
			}
			parameterss.add(o);
		}
		query.setParameters(parameterss);
		HttpEntity<QuerysDTO> entity = new HttpEntity<QuerysDTO>(query, headers);
		ResponseEntity<QuerysResponseDTO> responsee = null;
		try {
			responsee = restTemplate.exchange(urlQuerys, HttpMethod.POST, entity, QuerysResponseDTO.class);
			LOG.info("Response Service Querys: {}", responsee);
		} catch (Exception e) {
			throw new BusinessException(e.getMessage(), e);
		}
		if (responsee.getStatusCode() != HttpStatus.OK) {
			throw new BusinessException("Se presento un error al ejecutar el query");
		}
		return responsee.getBody();
	}

	/**
	 * @return the urlQuerys
	 */
	public String getUrlQuerys() {
		return urlQuerys;
	}

	/**
	 * @param urlQuerys
	 *            the urlQuerys to set
	 */
	public void setUrlQuerys(String urlQuerys) {
		this.urlQuerys = urlQuerys;
	}

}
