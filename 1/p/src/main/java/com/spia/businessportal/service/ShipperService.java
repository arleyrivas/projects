package com.spia.businessportal.service;

import java.util.List;

import com.spia.services.entities.AgentRepresentations.AgentRepresentation;

/**
 * Author: Elvis Fontalvo - 
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Fecha: 12/05/2020 
 */
public interface ShipperService {

	public List<AgentRepresentation> getShippersByIdOrName(String agentGkey, String search) throws Exception;



}
