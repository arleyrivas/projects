/*
 * Assert Solutions
 * Bogota - Colombia
 * http://www.assertsolutions.com
 * Author: Elvis Fontalvo
 * Date:  11 de may. de 2021 - 17:26:03 p.m.
 */
package com.spia.businessportal.web.controller;

import java.util.ArrayList;
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

import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.CreditNoteCross;
import com.spia.businessportal.common.entities.dto.HistoryCross;
import com.spia.businessportal.common.entities.dto.HistoryCrossDTO;
import com.spia.businessportal.common.entities.dto.InvoiceCross;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.service.HistoryCrossService;
import com.spia.services.exception.BOException;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

@RequestMapping("/api/historyCross")
@Controller
public class HistoryCrossController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(HistoryCrossController.class);

	@Autowired
	private UserBO userBO;

	@Autowired
	private HistoryCrossService historyCrossService;

	@RequestMapping(value = "/getHistoryCross/{userNit}/{role}/{page}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getHistoryCross(@PathVariable String userNit, @PathVariable String role, @PathVariable Integer page) throws BOException {
		ResponseEntity<?> re = null;
		try {
			String type = "";
			String nit = "";
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			String companyId = userNit;
			List<HistoryCrossDTO> responseService = null;
			List<HistoryCross> response = new ArrayList<>();
			List<Long> tranList = new ArrayList<>();

			type = role;
			nit = companyId;

			LOG.info("> type");
			LOG.info(type);

			LOG.info("> nit");
			LOG.info(nit);
			
			LOG.info(">page");
			LOG.info(page);
			
			responseService = historyCrossService.getHistoryCross(type, nit, page);
			for (HistoryCrossDTO historyCrossDTO : responseService) {
				Long transNbr = historyCrossDTO.getTransNbr();
				if (!tranList.contains(transNbr)) {
					HistoryCross historyCross = new HistoryCross();
					List<InvoiceCross> invoiceCrosses = null;
					tranList.add(transNbr);
					historyCross.setTransNbr(String.format("%07d", transNbr));
					historyCross.setTranDate(historyCrossDTO.getTranDate());
					historyCross.setAgentShip(historyCrossDTO.getAgentShip());
					invoiceCrosses = this.getInvocie(transNbr, responseService);
					historyCross.setInvoices(invoiceCrosses);
					response.add(historyCross);
				}
			}

			re = new ResponseEntity<List<HistoryCross>>(response, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = null;
			String msg = getProperty("Controller.history.cross.search.ERRROR", strParams, getApplicationContext());
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	List<InvoiceCross> getInvocie(Long transNbr, List<HistoryCrossDTO> responseService) {
		List<InvoiceCross> invoiceCrosses = new ArrayList<>();
		List<String> finalNbrList = new ArrayList<>();
		for (HistoryCrossDTO historyCrossDTO : responseService) {
			String invoiceNbr = historyCrossDTO.getInvoice();
			if (transNbr == historyCrossDTO.getTransNbr() && !finalNbrList.contains(invoiceNbr)) {
				finalNbrList.add(invoiceNbr);
				InvoiceCross invoiceCross = new InvoiceCross();
				List<CreditNoteCross> noteCrosses = null;
				invoiceCross.setAmount(historyCrossDTO.getInvAmount());
				invoiceCross.setBalance(historyCrossDTO.getInvBalance());
				invoiceCross.setStatus(historyCrossDTO.getStatus());
				invoiceCross.setFinalNbr(invoiceNbr);
				noteCrosses = this.getCreditNotes(transNbr, invoiceNbr, responseService);
				invoiceCross.setCredits(noteCrosses);
				invoiceCrosses.add(invoiceCross);
			}
		}
		return invoiceCrosses;
	}
	
	List<CreditNoteCross> getCreditNotes(Long transNbr, String finalNbr, List<HistoryCrossDTO> responseService) {
		List<CreditNoteCross> noteCrosses = new ArrayList<>();
		List<String> finalNbrList = new ArrayList<>();
		for (HistoryCrossDTO historyCrossDTO : responseService) {
			String creditNoteNbr = historyCrossDTO.getCredit();
			if (transNbr == historyCrossDTO.getTransNbr() && finalNbr.equals(historyCrossDTO.getInvoice()) && !finalNbrList.contains(creditNoteNbr)) {
				finalNbrList.add(creditNoteNbr);
				CreditNoteCross creditNoteCross = new CreditNoteCross();
				creditNoteCross.setAmount(historyCrossDTO.getParPayAmt());
				creditNoteCross.setBalance(historyCrossDTO.getCreBalance());
				creditNoteCross.setFinalNbr(creditNoteNbr);
				creditNoteCross.setStatus(historyCrossDTO.getPayState());
				noteCrosses.add(creditNoteCross);
			}
		}
		return noteCrosses;
	}

}
