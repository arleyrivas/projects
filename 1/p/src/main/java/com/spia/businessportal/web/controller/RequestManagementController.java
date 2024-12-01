package com.spia.businessportal.web.controller;

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

import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.NotificationPrivilegesDTO;
import com.spia.businessportal.common.entities.dto.RequestManagementDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.NotificationService;
import com.spia.businessportal.service.RequestManagementService;
import com.spia.services.exception.BOException;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

@RequestMapping("/api/request-management")
@Controller
public class RequestManagementController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(RequestManagementController.class);

	@Autowired
	private RequestManagementService requestManagementService;

	@Autowired
	private NotificationService notificationService;

	@Autowired
	private UserBO userBO;


	@Value("#{soHistory['service.order.history.results']}")
	private String historyAmmount;

	/**
	 * GET /request-management/requestNbr/
	 *
	 * @return {@link Long}
	 * @throws BOException
	 */
	@RequestMapping(value = "/{requestNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getAgentRequestByNbr(@PathVariable String requestNbr) throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<RequestManagementDTO> response = new ArrayList<>();
			requestNbr = EncoderDecoder.decodeBase64(requestNbr);
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			response = requestManagementService.getAgentRequestByNbr(requestNbr, userlogin.getUserName());
			re = new ResponseEntity<List<RequestManagementDTO>>(response, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener la información de la solicitud", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.AgentError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * GET /request-management/requestNbr/type
	 *
	 * @return {@link Long}
	 * @throws BOException
	 */
	@RequestMapping(value = "/{requestNbr}/{type}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getClientRequestByNbr(@PathVariable String requestNbr, @PathVariable String type) throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<RequestManagementDTO> response = new ArrayList<>();
			requestNbr = EncoderDecoder.decodeBase64(requestNbr);
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			response = requestManagementService.getClientRequestByNbr(requestNbr, userlogin.getEmpresa().getId());
			re = new ResponseEntity<List<RequestManagementDTO>>(response, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener la información de la solicitud", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.AgentError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * GET /request-management/notificationEmails
	 *
	 * @return {@link Long}
	 * @throws BOException
	 */
	@RequestMapping(value = "/notificationEmails", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getNotificationEmails() throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<TemplateEmailDTO> emailsNotifications = new ArrayList<>();
			emailsNotifications = requestManagementService.getEmails();
			re = new ResponseEntity<List<TemplateEmailDTO>>(emailsNotifications, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener la información de la solicitud", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.AgentError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}


}
