package com.spia.businessportal.web.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.AuthorityTypesDTO;
import com.spia.businessportal.common.entities.dto.BlChildrensByBlMasterDTO;
import com.spia.businessportal.common.entities.dto.ContainersByBlDTO;
import com.spia.businessportal.common.entities.dto.PackageTypeDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.ResponseEmptyAndDecoDTO;
import com.spia.businessportal.common.entities.dto.SOResponseDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderHistoryResponseDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderImoDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderInfoDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderSearchDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderStaffDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrdersHistoryDTO;
import com.spia.businessportal.common.entities.dto.ServiceTypeDTO;
import com.spia.businessportal.common.entities.dto.TruckCapacityServiceDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.entities.dto.GenericResponseDTO;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.AgentService;
import com.spia.businessportal.service.ServicesService;
import com.spia.businessportal.service.ShipperService;
import com.spia.services.entities.Agent;
import com.spia.services.entities.AgentRepresentations;
import com.spia.services.entities.AgentRepresentations.AgentRepresentation;
import com.spia.services.entities.CreateHbl;
import com.spia.services.entities.CreateHblServiceDTO;
import com.spia.services.entities.SORequestDTO;
import com.spia.services.entities.ServiceOrder;
import com.spia.services.entities.ServiceOrderServiceDTO;
import com.spia.services.entities.ShipperConsignee;
import com.spia.services.exception.BOException;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import java.util.Map;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import com.spia.businessportal.common.entities.dto.ShippersWithRulerDTO;

/* import com.spia.businessportal.backend.bo.ServicesExtBO; */

import ar.com.fluxit.framework.common.exception.BusinessException;

@RequestMapping("/api/services")
@Controller
public class ServicesController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(ServicesController.class);

	@Autowired
	private ServicesService servicesService;

	@Autowired
	private UserBO userBO;

	/* @Autowired
	private ServicesExtBO servicesExtBO; */

	@Autowired
	private ShipperService shipperService;

	@Autowired
	private AgentService agentService;
	
	@Value("#{soHistory['service.order.history.results']}")
	private String historyAmmount;

	@Value("#{esb['esb.password.key']}")
	private String key;

	@Value("#{esb['esb.password.initialVector']}")
	private String initVector;
	/**
	 * GET /services/bl invocación al servicio que retorna todos los Contenedores
	 * asociados a un BL de N4
	 * 
	 * @param bl: bl Master
	 * @return {@link ContainersByBlDTO[]}
	 * @throws BOException
	 */
	@RequestMapping(value = "/bl", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getCargoLot(@RequestBody Map<String, String> body) throws BOException {
		ResponseEntity<?> re = null;

		try {
			String bl = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /bl ServicesController");

			ContainersByBlDTO[] containersByBlDTO;
			BlChildrensByBlMasterDTO[] blChildrensByBlMasterDTO;
			ResponseEmptyAndDecoDTO responseEmptyAndDecoDTO = new ResponseEmptyAndDecoDTO();
			int active = 0;
			int inactive = 0;
			List<String> activeList = new ArrayList<>();
			List<String> inactiveList = new ArrayList<>();
			List<BlChildrensByBlMasterDTO> blChildrensByBlMasterDTOList = new ArrayList<>();
			containersByBlDTO = servicesService.getBlMaster(bl);
			if (containersByBlDTO.length > 0) {
				blChildrensByBlMasterDTO = servicesService.getBlChildrenByBlMaster(bl);
				for (ContainersByBlDTO o : containersByBlDTO) {
					if (o.getEstado().equalsIgnoreCase("ACTIVO")) {
						active++;
						activeList.add(o.getContainer());
					} else {
						inactive++;
						inactiveList.add(o.getContainer());
					}
				}
				responseEmptyAndDecoDTO.setCantActive(active);
				responseEmptyAndDecoDTO.setCantInactive(inactive);
				responseEmptyAndDecoDTO.setActives(activeList);
				responseEmptyAndDecoDTO.setInactives(inactiveList);
				if (blChildrensByBlMasterDTO.length > 0) {
					responseEmptyAndDecoDTO.setVesselVisit(blChildrensByBlMasterDTO[0].getVisit());
					responseEmptyAndDecoDTO.setLineOperator(blChildrensByBlMasterDTO[0].getLineOp());

					for (BlChildrensByBlMasterDTO o : blChildrensByBlMasterDTO) {
						if (o.getNbr() != null) {
							blChildrensByBlMasterDTOList.add(o);
						}

					}
				}
				responseEmptyAndDecoDTO.setHbls(blChildrensByBlMasterDTOList);

				String parsedResponse = new Gson().toJson(responseEmptyAndDecoDTO); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /bl ServicesController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los contenedores por BL ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
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
	@RequestMapping(value = "/shippers/idOrName/{idOrName}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getShippersByIdOrName(@PathVariable String idOrName) throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<ShipperConsignee> shipperConsignee = this.getShipperConsigneeMdwBo().getShipperByIdOrName(idOrName,
					idOrName);
			re = new ResponseEntity<List<ShipperConsignee>>(shipperConsignee, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los clientes ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.AgentError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * GET /services/bl invocación al servicio que retorna todos los Contenedores
	 * asociados a un BL de N4
	 * 
	 * @param bl: bl Master
	 * @return {@link ContainersByBlDTO[]}
	 * @throws BOException
	 */
	@RequestMapping(value = "/packagetypes", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getPackageTypes() throws BOException {
		ResponseEntity<?> re = null;
		try {
			PackageTypeDTO[] packageTypeDTO;
			packageTypeDTO = servicesService.getPackageTypes();
			if (packageTypeDTO.length > 0) {
				String parsedResponse = new Gson().toJson(packageTypeDTO); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /packagetypes ServicesController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los tipos de paquetes ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * 
	 * @RequestBody CreateHblServiceDTO
	 * @return
	 * @throws BOException
	 */

	@RequestMapping(value = "/saveHbl", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> saveHbl(@RequestBody Map<String, String> body)
			throws BOException {
		ResponseEntity<?> re = null;

		String encryptedString = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /saveHbl ServicesController");
		CreateHblServiceDTO createHblServiceDTO = new Gson().fromJson(encryptedString, CreateHblServiceDTO.class);

		try {
			CreateHbl createHbl = new CreateHbl();
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			createHblServiceDTO.setAgentId(userlogin.getEmpresa().getId());
			createHbl = this.getBillOfLadingMdwBo().saveHbl(createHblServiceDTO);
			if (createHbl.getResponse() != null) {
				String parsedResponse = new Gson().toJson(createHbl); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /saveHbl ServicesController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}
		} catch (Exception e) {
			LOG.error("Se produjo un error al crear el nuevo hbl ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * 
	 * @PathVariable String bl
	 * @return
	 * @throws BOException
	 */

	@RequestMapping(value = "/getBlChildrenByBlMaster/{bl}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getBlChildrenByBlMaster(@PathVariable String bl) throws BOException {
		ResponseEntity<?> re = null;
		try {
			BlChildrensByBlMasterDTO[] blChildrensByBlMasterDTO;
			blChildrensByBlMasterDTO = servicesService.getBlChildrenByBlMaster(EncoderDecoder.decodeBase64(bl));
			if (blChildrensByBlMasterDTO.length != 0) {
				re = new ResponseEntity<BlChildrensByBlMasterDTO[]>(blChildrensByBlMasterDTO, HttpStatus.OK);
			}
		} catch (Exception e) {
			LOG.error("Se produjo un error al actualizar los contenedores del BL ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * 
	 * @return
	 * @throws BOException
	 */

	@RequestMapping(value = "/getServiceType", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getServiceType() throws BOException {
		ResponseEntity<?> re = null;
		try {
			ServiceTypeDTO[] serviceTypeList = null;
			serviceTypeList = servicesService.getServiceTypeList();

			if (serviceTypeList.length != 0) {
				String parsedResponse = new Gson().toJson(serviceTypeList); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /getServiceType ServicesController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los tipos de servicio ", e);
			ResponseError error = new ResponseError();
			error.setError("Error obteniendo los tipos de servicio");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/getInfoForServiceOrder", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getInfoForServiceOrder(@RequestBody Map<String, String> body) throws BOException {
		ResponseEntity<?> re = null;
		try {
			ServiceOrderInfoDTO[] serviceOrderInfo = null;

			String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /getInfoForServiceOrder ServicesController");
			Map<String, String> parsedRequest = new Gson().fromJson(decryptedResponse, Map.class); 

			serviceOrderInfo = servicesService.getInfoForServiceOrder(EncoderDecoder.decodeBase64(parsedRequest.get("criteria")),
					EncoderDecoder.decodeBase64(parsedRequest.get("serviceType")));
					
			String parsedResponse = new Gson().toJson(serviceOrderInfo); 
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /getInfoForServiceOrder ServicesController");

			re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener la información de la búsqueda", e);
			ResponseError error = new ResponseError();
			error.setError("Error obteniendo la información de la búsqueda");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/getServiceInfo", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getServiceInfo(@RequestBody Map<String, String> body)
			throws BOException {
		ResponseEntity<?> re = null;
		try {
			String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /getServiceInfo ServicesController");
			Map<String, String> parsedRequest = new Gson().fromJson(decryptedResponse, Map.class); 

			AuthorityTypesDTO authorityTypes = new AuthorityTypesDTO();

			authorityTypes = servicesService.getServiceInfo(EncoderDecoder.decodeBase64(parsedRequest.get("serviceType")),
					EncoderDecoder.decodeBase64(parsedRequest.get("chargeType")));

			String parsedResponse = new Gson().toJson(authorityTypes); 
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /getServiceInfo ServicesController");

			re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener la información del servicio", e);
			ResponseError error = new ResponseError();
			error.setError("Error obteniendo la información del servicio");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/getStaff", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getStaff(@RequestBody Map<String, String> body) throws BOException {
		ResponseEntity<?> re = null;
		try {
			String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /getStaff ServicesController");
			Map<String, String> parsedRequest = new Gson().fromJson(decryptedResponse, Map.class); 

			ServiceOrderStaffDTO[] serviceOrderStaffDto = null;

			serviceOrderStaffDto = servicesService.getStaff(EncoderDecoder.decodeBase64(parsedRequest.get("customer")));

			if (serviceOrderStaffDto != null && serviceOrderStaffDto.length != 0) {
				if (serviceOrderStaffDto[0].getMessage().length() == 0) {
					String parsedResponse = new Gson().toJson(serviceOrderStaffDto); 
					String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /getStaff ServicesController");

					re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
				} else {
					ResponseError error = new ResponseError();
					error.setError(serviceOrderStaffDto[0].getMessage());
					re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
				}
			} else {
				ResponseError error = new ResponseError();
				error.setError("Error obteniendo la información del Funcionario");
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener la información del Funcionario", e);
			ResponseError error = new ResponseError();
			error.setError("Error obteniendo la información del Funcionario");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/shippersWithRuler", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getShippersByIdOrNameWithRuler(@RequestBody Map<String, String> body) throws BOException {
		ResponseEntity<?> re = null;
		try {
			String encryptedString = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /shippersWithRuler ServicesController");
			ShippersWithRulerDTO shippersWithRulerDTO = new Gson().fromJson(encryptedString, ShippersWithRulerDTO.class);
			List<AgentRepresentation> agentRepresentationList = shipperService.getShippersByIdOrName(
				shippersWithRulerDTO.getAgentGkey(),
				shippersWithRulerDTO.getIdOrName()
			);
			AgentRepresentations agentRepresentations = new AgentRepresentations();
			agentRepresentations.setAgentRepresentation(agentRepresentationList);

			String parsedResponse = new Gson().toJson(agentRepresentations); 
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /shippersWithRuler ServicesController");

			re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los clientes ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.AgentError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/agents/idOrName", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getAgentsByIdOrName() throws BOException {
		ResponseEntity<?> re = null;
		try {
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			String agent = EncoderDecoder.encodeBase64(userlogin.getEmpresa().getId());
			List<Agent> agents = agentService.getAgentsByIdOrName(agent);
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
	 * 
	 * @RequestBody CreateHblServiceDTO
	 * @return
	 * @throws BOException
	 */

	@RequestMapping(value = "/saveServiceOrder", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> saveServiceOrder(@RequestBody Map<String, String> body)
			throws BOException {
		ResponseEntity<?> re = null;
		
		try {
			String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /saveServiceOrder ServicesController");
			ServiceOrderServiceDTO serviceOrderServiceDTO = new Gson().fromJson(decryptedResponse, ServiceOrderServiceDTO.class); 

			ServiceOrder serviceOrder = new ServiceOrder();
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			SOResponseDTO sOResponseDTO = new SOResponseDTO();
			serviceOrderServiceDTO.setAgent(userlogin.getEmpresa().getId());
			serviceOrderServiceDTO.setCreatorWebPortal(userlogin.getUserName().concat("-").concat(userlogin.getEmpresa().getId()));
			serviceOrder = this.getServiceOrderMdwBo().saveServiceOrder(serviceOrderServiceDTO);
			if (serviceOrder.getResponse() != null) {
				String response = serviceOrder.getResponse();
				GsonBuilder builder = new GsonBuilder();
				builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
				builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
				Gson gson = builder.create();
				sOResponseDTO = gson.fromJson(response, SOResponseDTO.class);
				if (sOResponseDTO.getSuccess().equals("true")) {
					String parsedResponse = new Gson().toJson(sOResponseDTO); 
					String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /saveServiceOrder ServicesController");

					re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
				} else {
					ResponseError error = new ResponseError();
					error.setError(sOResponseDTO.getResult());
					re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
				}
			} else {
				ResponseError error = new ResponseError();
				error.setError("Se produjo un error al crear la nueva order de servicio");
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			LOG.error("Se produjo un error al crear la nueva order de servicio ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.ServiceOrderError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/searchServiceHistory/{page}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> searchServiceHistory(
			@RequestBody ServiceOrderSearchDTO serviceOrderSearchDTO, @PathVariable Integer page) throws BOException {
		ResponseEntity<?> re = null;
		try {
			ServiceOrdersHistoryDTO serviceOrders = null;
			serviceOrders = servicesService.getServiceOrderHistory(serviceOrderSearchDTO, page, Integer.valueOf(historyAmmount));
			String parsedResponse = new Gson().toJson(serviceOrders); 
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /searchServiceHistory/{page}");

			re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los tipos de servicio ", e);
			ResponseError error = new ResponseError();
			error.setError("Error obteniendo los tipos de servicio");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;

	}
	
	@RequestMapping(value = "/searchServiceHistoryScroll/{page}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> searchServiceHistoryScroll(@PathVariable Integer page) throws BOException {
		ResponseEntity<?> re = null;
		try {
			ServiceOrdersHistoryDTO serviceOrders = null;
			serviceOrders = servicesService.getServiceOrderHistoryScroll(page, Integer.valueOf(historyAmmount));

			re = new ResponseEntity<ServiceOrdersHistoryDTO>(serviceOrders, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los tipos de servicio ", e);
			ResponseError error = new ResponseError();
			error.setError("Error obteniendo los tipos de servicio");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;

	}
	
	@SuppressWarnings("unlikely-arg-type")
	@RequestMapping(value = "/bl/imo", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getImo(@RequestBody Map<String, String> body) throws BOException {
		ResponseEntity<?> re = null;

		String un = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /bl/imo ServicesController");

		try {
			ServiceOrderImoDTO[] serviceOrderImoDto = null;
			un = EncoderDecoder.decodeBase64(un);	
			serviceOrderImoDto = servicesService.getImo(un);
			if (serviceOrderImoDto != null && serviceOrderImoDto.length != 0) {		
				String parsedResponse = new Gson().toJson(serviceOrderImoDto); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /bl/imo ServicesController");
		
				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			} else {
				ResponseError error = new ResponseError();
				String[] strParams = { un };
				error.setError(getProperty("Controller.ImoNotFound", strParams, getApplicationContext()));
				re = new ResponseEntity<ResponseError>(error, HttpStatus.OK);
			}
			
			
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener el UN Number", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.ImoError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/* Esta validación contra la DIAN causo errores en producción */
	/**
	 * GET /validateDocumentTransport/{nroDoc1166} invocación al servicio validación ante DIAN
	 */
	/* @RequestMapping(value = "/validateDocumentTransport/{nroDoc1166}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> validateDocumentTransport(@PathVariable String nroDoc1166) throws BOException {
		ResponseEntity<?> re = null;
		try {
			GenericResponseDTO response = servicesExtBO.validateDocumentTransport(nroDoc1166);
			re = new ResponseEntity<GenericResponseDTO>(response, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.ImoError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	} */

}
