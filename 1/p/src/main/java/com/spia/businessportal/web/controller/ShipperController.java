package com.spia.businessportal.web.controller;

import java.io.IOException;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.ShipperService;
import com.spia.services.entities.Agent;
import com.spia.services.entities.AgentRepresentations;
import com.spia.services.entities.AgentRepresentations.AgentRepresentation;
import com.spia.services.exception.BOException;

import ar.com.fluxit.framework.common.exception.BusinessException;

@RequestMapping("/api/shipper")
@Controller
public class ShipperController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(ShipperController.class);

	@Autowired
	private ShipperService shipperService;

	/**
	 * GET /idOrName/{idOrName}/agent/{agentGkey} invocación al servicio que retorna
	 * un Agente
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link AgentRepresentations}
	 * @throws BOException
	 */
	@RequestMapping(value = "/idOrName/{idOrName}/agent/{agentGkey}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getAgentsByIdOrName(@PathVariable String agentGkey,
			@PathVariable String idOrName) throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<AgentRepresentation> agentRepresentationList = shipperService.getShippersByIdOrName(agentGkey,
					idOrName);
			AgentRepresentations agentRepresentations = new AgentRepresentations();
			agentRepresentations.setAgentRepresentation(agentRepresentationList);
			re = new ResponseEntity<AgentRepresentations>(agentRepresentations, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los agentes ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.AgentError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

}
