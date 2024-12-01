package com.spia.businessportal.web.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.spia.businessportal.common.entities.dto.TruckVisitAppointmentServiceDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.AgentService;
import com.spia.businessportal.service.ShipperService;
import com.spia.businessportal.service.TruckVisitAppointmentService;
import com.spia.services.entities.Agent;
import com.spia.services.entities.AgentRepresentations;
import com.spia.services.entities.AgentRepresentations.AgentRepresentation;
import com.spia.services.exception.BOException;

import ar.com.fluxit.framework.common.exception.BusinessException;

@RequestMapping("/api/agent")
@Controller
public class AgentController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(AgentController.class);

	@Autowired
	private AgentService agentService;

	@Autowired
	private ShipperService shipperService;

	@Autowired
	private TruckVisitAppointmentService truckVisitAppointmentService;

	/**
	 * GET /agent/:nbr/ invocación al servicio que retorna un Agente
	 * 
	 * @param nbr:      número de booking
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link Agent}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "/{nbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> get(@PathVariable("nbr") String nbr, HttpServletRequest request,
			HttpServletResponse response)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		ResponseEntity re = null;
		try {
			Agent agent = this.getAgentMdwBo().get(EncoderDecoder.decodeBase64(nbr));
			re = new ResponseEntity<Agent>(agent, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * GET /agent/ invocación al servicio que retorna todos los agentes de N4
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link List<Agent>}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> all() throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<Agent> agents = this.getAgentMdwBo().all();
			re = new ResponseEntity<List<Agent>>(agents, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los agentes ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.AgentError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * GET /agent/ invocación al servicio que retorna un Agente
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link Agent}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getCurrentAgent(HttpServletRequest request, HttpServletResponse response)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		ResponseEntity re = null;
		try {
			String agentId = this.getUserBO().getCurrentUser().getEmpresa().getId();
			Agent agent = this.getAgentMdwBo().get(agentId);
			re = new ResponseEntity<Agent>(agent, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * GET /agent/idOrName/ invocación al servicio que retorna un Agente
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link Agent}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "/idOrName/{idOrName}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getAgentsByIdOrName(@PathVariable String idOrName) throws BOException {
		ResponseEntity<?> re = null;
		try {
			String agent = EncoderDecoder.decodeBase64(idOrName);
			// List<Agent> agents = this.getAgentMdwBo().getAgentsByIdOrName(agent, agent);
			List<Agent> agents = agentService.getAgentsByIdOrName(idOrName);
			re = new ResponseEntity<List<Agent>>(agents, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los agentes ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.AgentError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * GET /agent/exporter invocación al servicio que retorna una lista Shippers
	 * 
	 * @RequestBody {@link Agent}
	 * @return {@link Agent}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "/exporter", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getShipperExporter(@RequestBody Agent agent)
			throws JsonParseException, JsonMappingException, IOException {
		ResponseEntity<?> re = new ResponseEntity<Boolean>(true, HttpStatus.OK);

		try {
			Agent agentResponse = this.getAgentMdwBo().getShipperExporter(agent);
			re = new ResponseEntity<Agent>(agentResponse, HttpStatus.OK);
		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * GET /agent/ invocación al servicio que retorna un Agente
	 * 
	 * @param request:  petición http
	 * @param response: respuesta http
	 * @return {@link Agent}
	 * @throws BusinessException    cuando ocurre un fallo en servicio del mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 * @throws BOException
	 */
	@RequestMapping(value = "/consignee", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getConsignee(HttpServletRequest request, HttpServletResponse response)
			throws BusinessException, JsonParseException, JsonMappingException, IOException {
		ResponseEntity re = null;
		try {
			String agentId = this.getUserBO().getCurrentUser().getEmpresa().getId();
			List<Agent> agents = agentService.getAgentsByIdOrName(EncoderDecoder.encodeBase64(agentId));
			Agent agent = new Agent();
			if (agents != null && !agents.isEmpty()) {
				agent = agents.get(0);
				List<AgentRepresentation> agentRepresentationList = shipperService.getShippersByIdOrName(
						EncoderDecoder.encodeBase64(agent.getNotes()), EncoderDecoder.encodeBase64(""));
				AgentRepresentations agentRepresentations = new AgentRepresentations();
				agentRepresentations.setAgentRepresentation(agentRepresentationList);
				agent.setAgentRepresentations(agentRepresentations);
				re = new ResponseEntity<Agent>(agent, HttpStatus.OK);
			}

		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

	/**
	 * GET /agent/ Retorna la informacion de las citas dado un listado de sus Id
	 * 
	 * @param idList:  List Ids TVA
	 * @return {@link TruckVisitAppointmentServiceDTO[]}
	 * @throws IOException
	 */
	@RequestMapping(value = "/tvaByIds/{idList}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> validatedTVAByIds(@PathVariable String idList) throws IOException {
		ResponseEntity re = null;
		try {
			idList = EncoderDecoder.decodeBase64(idList);
			String[] ids = idList.split(",");
			String agentId = this.getUserBO().getCurrentUser().getEmpresa().getId();
			TruckVisitAppointmentServiceDTO[] truckVisitAppointmentServiceDTO = truckVisitAppointmentService
					.getTVAByIds(idList);
			Agent agent = new Agent();
			if (truckVisitAppointmentServiceDTO != null && truckVisitAppointmentServiceDTO.length > 0) {
				re = new ResponseEntity<TruckVisitAppointmentServiceDTO[]>(truckVisitAppointmentServiceDTO,
						HttpStatus.OK);
			}

		} catch (Exception e) {
			ResponseError error = extractMdwMessageException(e);
			re = (new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST));
		}
		return re;
	}

}
