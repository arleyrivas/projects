package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;


public class QuerysDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String queryName;

	private List<QuerysParameterDTO> parameters;

	/**
	 * @return the queryName
	 */
	public String getQueryName() {
		return queryName;
	}

	/**
	 * @return the parameters
	 */
	public List<QuerysParameterDTO> getParameters() {
		return parameters;
	}

	/**
	 * @param queryName
	 *            the queryName to set
	 */
	public void setQueryName(String queryName) {
		this.queryName = queryName;
	}

	/**
	 * @param parameters
	 *            the parameters to set
	 */
	public void setParameters(List<QuerysParameterDTO> parameters) {
		this.parameters = parameters;
	}

}
