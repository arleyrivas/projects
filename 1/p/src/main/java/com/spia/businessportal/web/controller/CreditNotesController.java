/*
 * Assert Solutions
 * Bogota - Colombia
 * http://www.assertsolutions.com
 * Author: Elvis Fontalvo
 * Date:  23 de mar. de 2021 - 17:26:03 p.m.
 */
package com.spia.businessportal.web.controller;

import java.text.SimpleDateFormat;
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


import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.CreditNotesByDateDTO;
import com.spia.businessportal.common.entities.dto.CreditNotesDTO;
import com.spia.businessportal.common.entities.dto.InvoiceServiceDTO;
import com.spia.businessportal.common.entities.dto.InvoicesCNDTO;
import com.spia.businessportal.common.entities.dto.SOResponseDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.AgentService;
import com.spia.businessportal.service.CreditNotesService;
import com.spia.services.entities.billing.Crossing;
import com.spia.services.exception.BOException;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import com.google.gson.Gson;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import org.springframework.beans.factory.annotation.Value;
import java.util.Map;

@RequestMapping("/api/creditNotes")
@Controller
public class CreditNotesController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(CreditNotesController.class);
	
	@Autowired
	private UserBO userBO;

	@Autowired
	private CreditNotesService creditNotesService;

	@Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;

	@RequestMapping(value = "/searchByClient/{clientId}/{page}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> searchByClient(@PathVariable String clientId, @PathVariable Integer page)
			throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<CreditNotesDTO> response = null;
			clientId = EncoderDecoder.decodeBase64(clientId);
			response = creditNotesService.getCreditNotesByClient(clientId, page);

			LOG.info("> clientId");
			LOG.info(clientId);

			LOG.info("new Gson().toJson(response)");
			LOG.info(new Gson().toJson(response));

			String JSONResponse = new Gson().toJson(response);
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(JSONResponse, "POST /searchByClient/{clientId}/{page} CreditNotesController");

			re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);

		} catch (Exception e) {
			String[] strParams = null;
			String msg = getProperty("Controller.credit.note.search.ERRROR", strParams, getApplicationContext());
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/getInvoices/{clientId}/{page}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getInvoices(@PathVariable String clientId, @PathVariable Integer page)
			throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<InvoicesCNDTO> response = null;
			clientId = EncoderDecoder.decodeBase64(clientId);
			response = creditNotesService.getInvoices(clientId, page);
			for(InvoicesCNDTO invoicesCNDTO:response)
			{
				Double balance = invoicesCNDTO.getTotalTotal() - invoicesCNDTO.getCredits();
				balance = Math.round(balance * 100.0) / 100.0;
				invoicesCNDTO.setBalance(balance);
			}

			String JSONResponse = new Gson().toJson(response);
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(JSONResponse, "POST /getInvoices/{clientId}/{page} CreditNotesController");

			re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);

		} catch (Exception e) {
			String[] strParams = null;
			String msg = getProperty("Controller.credit.note.search.ERRROR", strParams, getApplicationContext());
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/crossing", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> crossing(@RequestBody Map<String,String> value) throws BOException {
		ResponseEntity<?> re = null;

		String encryptedCrossing = value.get("data");
		String bodyEncrypted = AESEncryptionUtil.getInstance(initVector, key).decrypt(encryptedCrossing, "POST /crossing CreditNotesController");
		Crossing crossing = new Gson().fromJson(bodyEncrypted, Crossing.class);

		String[] strParams = null;
		String msg = getProperty("Controller.credit.note.search.ERRROR", strParams, getApplicationContext());
		ResponseError error = new ResponseError();
		error.setError(msg);
		try {
			SOResponseDTO response = new SOResponseDTO();
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			String companyId = userlogin.getEmpresa().getId();
			crossing.setUser(userlogin.getUserName());
			if (userBO.hasPermission(User.COMPANY_TYPE_CUSTOMER) && !userBO.hasPermission(User.COMPANY_TYPE_AGENT)) {
				crossing.setClientId(companyId);
			} 
			crossing.setCreatorId(companyId);

			response = this.getCreditNoteMdwBO().crossing(crossing);
			if(response.getSuccess().equals("true"))
			{
				re = new ResponseEntity<SOResponseDTO>(response, HttpStatus.OK);
			}
			else
			{
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}	
		} catch (Exception e) {		
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
}
