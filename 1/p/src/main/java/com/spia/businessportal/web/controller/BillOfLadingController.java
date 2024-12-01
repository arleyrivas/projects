/**
 * 
 */
package com.spia.businessportal.web.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.businessportal.common.entities.User;

import com.spia.businessportal.common.entities.dto.BlServiceDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.BillOfLadingService;
import com.spia.services.entities.BillOfLading;
import com.spia.services.entities.BillOfLading.Items.Item;
import com.spia.services.entities.BlAgentAndConsigneeDTO;
import com.spia.services.entities.HoldItem;
import com.spia.services.entities.HoldsList;
import com.spia.services.entities.Unit;
import com.spia.services.entities.UpdateBlRequest;
import com.spia.services.entities.billing.UnitsValidationResponse;
import com.spia.services.entities.billing.UnitsValidationResponse.UnitValidationResponseElement;
import com.spia.services.exception.BOException;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;
import com.google.gson.Gson;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import org.springframework.beans.factory.annotation.Value;

/**
 * controlador donde se expone la api de negocios del portal para
 * {@link com.spia.services.entities.BillOfLading}
 * 
 * @author diego
 *
 */
@RequestMapping("/api/billOfLading")
@Controller
public class BillOfLadingController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(BillOfLadingController.class);
	@Autowired
	private BillOfLadingService billOfLadingService;
	@Autowired
	private UserBO userBO;
	@Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;

	/**
	 * GET /billOfLading/:nbr -> Retorna un BillOfLading
	 * 
	 * @param nbr: numero de Bl
	 * @return {@link com.spia.services.entities.BillOfLading}
	 * @throws BusinessException cuando ocurre un fallo en el servicio del mdw.
	 */
	@RequestMapping(value = "/{nbr:.+}", method = RequestMethod.GET)
	public @ResponseBody BillOfLading get(@PathVariable String nbr) throws BusinessException {
		String agent = this.getUserBO().getCurrentUser().getEmpresa().getId();
		BillOfLading bl = null;
		try {
			bl = this.getBillOfLadingMdwBo().getByIdAndAgent(nbr, agent);
		} catch (BOException e) {
			LOG.error(e.toString());
		}
		return bl;
	}

	/**
	 * GET /billOfLading/break-bulk/:nbr?category=:category -> obtengo un
	 * BillOfLading de brake-bulk
	 * 
	 * @param {string} nbr El identificador del BL
	 * @param {string} category Categoria del BL los valores pueden ser: IMPORT,
	 *                 EXPORT
	 */
	@RequestMapping(value = "/break-bulk/{nbr}", params = { "category" }, method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getBreakBulk(@PathVariable String nbr,
			@RequestParam(value = "category") String category) throws BusinessException {

		BillOfLading bl = this.getBillOfLadingMdwBo().get(nbr);
		ResponseEntity<?> response = null;

		if (bl != null) {
			List<Item> items = bl.getItems().getItem();

			// El bl puede ser de impo o expo
			if (bl.getCategory().name().equals(category)) {

				// El bl buscado debe tener un item
				if (items.size() == 0) {

					// el bl solo tiene que tener un booking item
					if (items.size() == 0) {

						// El item debe tener un commodity
						response = new ResponseEntity<BillOfLading>(bl, HttpStatus.OK);

					} else {
						String[] strParams = null;
						String msg = getProperty("Controller.BlItemGreaterThanOne", strParams, getApplicationContext());
						LOG.error(msg);
						ResponseError error = new ResponseError();
						error.setError(msg);
						response = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
					}
				} else {
					String[] strParams = null;
					String msg = getProperty("Controller.BlNoHasItem", strParams, getApplicationContext());
					LOG.error(msg);
					ResponseError error = new ResponseError();
					error.setError(msg);
					response = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
				}
			} else {
				String[] strParams = { bl.getCategory().name() };
				String msg = getProperty("Controller.BlCategoryIs", strParams, getApplicationContext());
				LOG.error(msg);
				ResponseError error = new ResponseError();
				error.setError(msg);
				response = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} else {
			String[] strParams = { nbr };
			String msg = getProperty("Controller.BlNotFound", strParams, getApplicationContext());
			if ("EXPORT".equals(category)) {
				msg = getProperty("Controller.BookingNotFound", strParams, getApplicationContext());
			}
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			response = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return response;
	}

	/**
	 * PUT /billOfLading/:nbr -> Retorna un BillOfLading
	 * 
	 * @param nbr: numero de Bl
	 * @return {@link com.spia.services.entities.BillOfLading}
	 * @throws BusinessException cuando ocurre un fallo en el servicio del mdw.
	 */
	@RequestMapping(value = "/{nbr:.+}", method = RequestMethod.PUT)
	public @ResponseBody BillOfLading update(@PathVariable String nbr, @RequestBody BillOfLading bl)
			throws BusinessException {
		return this.getBillOfLadingMdwBo().update(nbr, bl);
	}

	/**
	 * PUT /billOfLading/:nbr/:cosigneeId -> Retorna un BillOfLading Actualiza el
	 * consignee y el agente de un bl según corresponda.
	 * 
	 * 
	 * @param nbr
	 * @param consigneeId
	 * @return {@link BillOfLading}
	 * @throws BusinessException
	 * @throws BOException
	 */
	@RequestMapping(value = "/{nbr:.+}/{consigneeId}", method = RequestMethod.PUT)
	public @ResponseBody BillOfLading update(@PathVariable String nbr, @PathVariable String consigneeId)
			throws BusinessException {
		BillOfLading bl = null;
		try {
			String agentId = this.getUserBO().getCurrentUser().getEmpresa().getId();
			UpdateBlRequest request = new UpdateBlRequest();
			request.setAgentId(agentId);
			if (consigneeId != null && !consigneeId.equals("vacio")) {
				request.setConsigneeId(consigneeId);
			} else {
				request.setConsigneeId("");
			}

			bl = this.getBillOfLadingMdwBo().update(nbr, request);
		} catch (BOException e) {
			LOG.error("Ocurrió un error al actualizar el consignee y/o agente del BL: " + nbr, e);
		}
		return bl;
	}

	/**
	 * 
	 * GET billOfLading/search/{blNbr}
	 * TODO: ENCRYPT
	 * Retorna la informacion de un Bl dado.
	 * 
	 * @param blNbr number of BillOfLading
	 * @return {@link com.spia.businessportal.common.entities.dto.BlServiceDTO}
	 */

	@RequestMapping(value = "search", method = RequestMethod.POST)
	public @ResponseBody String searchBl(@RequestBody Map<String, String> body) {
		BlServiceDTO[] blServiceDTOList = {};

		String blNbr = EncoderDecoder.decodeBase64(body.get("data"));

		UsuarioLoginDTO userlogin = userBO.getCurrentUser();
		String companyId = userlogin.getEmpresa().getId();
		String unitsList = "";

		try {
			if (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT)) {
				blServiceDTOList = billOfLadingService.searchBl(blNbr, companyId, "Agent");
			} else if (userBO.hasPermission(User.COMPANY_TYPE_CUSTOMER)) {
				blServiceDTOList = billOfLadingService.searchBl(blNbr, companyId, "Customer");
			}

			if (blServiceDTOList.length > 0) {
				for (BlServiceDTO blServiceDTO : blServiceDTOList) {
					if (blServiceDTO.getDeparted().equals("0")) {
						unitsList += blServiceDTO.getUnitNbr() + ",";
					}
				}
				unitsList = unitsList.substring(0, unitsList.length() - 1);
				//Comentado: 23-05-2022
				//UnitsValidationResponse unitsValidationList = this.getInvoiceMdwBO().unistHasDebts(unitsList, blServiceDTOList[0].getCarrierVisit(), null);
				
				//Comentado: mucho antes del 23-05-2022
				/*for (BlServiceDTO blServiceDTO : blServiceDTOList) {
					for (UnitValidationResponseElement ure : unitsValidationList.getUnits()) {
						Map<String, String> unitsPin = billOfLadingService.searchPins(ure.getUnit());
						if (unitsPin.containsKey(ure.getUnit())) {
							blServiceDTO.setHasPin(true);
						} else {
							blServiceDTO.setHasPin(false);
						}
						if (blServiceDTO.getUnitNbr().equals(ure.getUnit()) && blServiceDTO.getHasDebt()) {
							blServiceDTO.setHasDebt(ure.getStatus());
							break;
						}
					}
				}*/	
					for (BlServiceDTO blServiceDTO : blServiceDTOList) {	
					Map<String, String> unitsPin = billOfLadingService.searchPins(blServiceDTO.getUnitNbr());
					if (unitsPin.containsKey(blServiceDTO.getUnitNbr())) {
						blServiceDTO.setHasPin(true);
					} else {
						blServiceDTO.setHasPin(false);
					}

					//Comentado: 23-05-2022, esta validacion de las facturas pendientes ya lo hace la query searchBl
					/* for (UnitValidationResponseElement ure : unitsValidationList.getUnits()) {						
						if (blServiceDTO.getUnitNbr().equals(ure.getUnit()) && blServiceDTO.getHasDebt()) {
							blServiceDTO.setHasDebt(ure.getStatus());
							break;
						}
					} */
					
				}									   

				HoldsList holds = this.getTruckVisitAppointmentMdwBO().getHoldsList(unitsList);
				for (BlServiceDTO blServiceDTO : blServiceDTOList) {
					for (Unit unit : holds.getUnits()) {
						if (blServiceDTO.getUnitNbr().equals(unit.getUnitNbr())) {
							if (unit.getHolds() != null && !unit.getHolds().isEmpty()) {
								if (unit.getHolds().size() == 1
										&& unit.getHolds().get(0).getHoldId().equalsIgnoreCase("HOLD_CONSIGNEE")) {
									blServiceDTO.setHasHolds(false);
								} else {
									blServiceDTO.setHasHolds(true);
								}
							} else {
								blServiceDTO.setHasHolds(false);
							}
							if (unit.getHolds() != null && !unit.getHolds().isEmpty()) {
								List<String> holdDescriptions = new ArrayList<>();
								for (HoldItem holdItem : unit.getHolds()) {
									if (holdItem.getHoldId().equals("HOLD_CONSIGNEE")) {
										if (holdItem.getHoldStatus().equalsIgnoreCase("REQUIRED")) {
											// holdDescriptions.add(holdItem.getHoldDescription());
											blServiceDTO.setHoldConsigneeActive(true);
										} else {
											blServiceDTO.setHoldConsigneeActive(false);
										}
									} else {
										holdDescriptions.add(holdItem.getHoldDescription());
									}
								}
								blServiceDTO.setHoldDescription(StringUtils.join(holdDescriptions, ", "));
							}
							blServiceDTO.setStorageDaysOwed(Integer.valueOf(
									unit.getUfvStorageDaysOwed() == null ? "0" : unit.getUfvStorageDaysOwed()));
							break;
						}
					}
					// Nuevo
					if (blServiceDTO.getStorageDaysOwed() == null) {
						blServiceDTO.setStorageDaysOwed(0);
					}
				}
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}

		if (blServiceDTOList == null) {
			return null;
		}

		String containers = new Gson().toJson(blServiceDTOList);
		String bodyEncrypted = AESEncryptionUtil.getInstance(initVector, key).encrypt(containers, "POST /search BillOfLandingController");

		if(blServiceDTOList.length != 0) return bodyEncrypted;
		else return null;
	}

	/**
	 * @author Elvis Fontalvo POST /api/billOfLading/updateConsigneeInBl
	 * 
	 * @param List<String> contiene la lista de los hbl a validar
	 * @return {@link TruckVisit}
	 * @throws IOException cuando ocurre un error de base de datos.
	 */
	@RequestMapping(value = "/updateAgentAndConsigneeInBl", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> updateAgentAndConsigneeInBl(
			@RequestBody BlAgentAndConsigneeDTO blAngentAndConsigeeDTO) throws IOException {
		ResponseEntity<?> re = null;
		try {
			String agentId = this.getUserBO().getCurrentUser().getEmpresa().getId();
			String nitConsignee = blAngentAndConsigeeDTO.getNitConsignee();
			blAngentAndConsigeeDTO.setAgentId(agentId);
			if (nitConsignee != null && nitConsignee.equals("vacio")) {
				blAngentAndConsigeeDTO.setNitConsignee("");
			}

			System.out.println("########################## Prueba LOG #######################");
			LOG.info("Request de SPIAUpdateShipperConsigneeOrAgentInBillOfLading: Bl:" + blAngentAndConsigeeDTO.getBlNbr() +", Consignee:"+
			blAngentAndConsigeeDTO.getNitConsignee() +", AgentID:"+ blAngentAndConsigeeDTO.getAgentId() +", LoadAgentId:" + blAngentAndConsigeeDTO.getLoadAgentId());
			System.out.println("########################## Prueba LOG #######################");

			String responseSTR = this.getBillOfLadingMdwBo().updateAgentAndConsigneeInBl(blAngentAndConsigeeDTO);
			re = new ResponseEntity<String>(responseSTR, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Ocurrió un error al actualizar el consignee y/o agente del BL: "
					+ blAngentAndConsigeeDTO.getBlNbr(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Ocurrió un error al actualizar el consignee y/o agente del BL: "
					+ blAngentAndConsigeeDTO.getBlNbr(), strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * @author Elvis Fontalvo POST /api/billOfLading/updateConsigneeInBl
	 * 
	 * @param List<String> contiene la lista de los hbl a validar
	 * @return {@link TruckVisit}
	 * @throws IOException cuando ocurre un error de base de datos.
	 */
	@RequestMapping(value = "/updateConsigneeCancelDraftBbk/{hblNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> updateConsigneeCancelDraftBbk(@PathVariable String hblNbr)
			throws IOException {
		ResponseEntity<?> re = null;
		String response = null;
		try {
			response = this.getBillOfLadingMdwBo().updateConsigneeCancelDraftBbk(hblNbr);
			if(response == null)
			{
				re = new ResponseEntity<Boolean>(true, HttpStatus.OK);
			}
			else
			{
				ResponseError error = new ResponseError();
				String[] strParams = null;
				String msg = getProperty("Ocurrió un error al actualizar el consignee y/o agente del HBL: "
						+ EncoderDecoder.decodeBase64(hblNbr), strParams, getApplicationContext());
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
			
		} catch (Exception e) {
			LOG.error("Ocurrió un error al actualizar el consignee y/o agente del HBL: "
					+ EncoderDecoder.decodeBase64(hblNbr), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Ocurrió un error al actualizar el consignee y/o agente del HBL: "
					+ EncoderDecoder.decodeBase64(hblNbr), strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
}
