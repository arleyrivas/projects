package com.spia.businessportal.service;

import java.util.List;

import com.spia.services.entities.Agent;

/**
 * Author: Elvis Fontalvo - 
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Fecha: 12/05/2020 
 */
public interface AgentService {

	public List<Agent> getAgentsByIdOrName(String search) throws Exception;

}
