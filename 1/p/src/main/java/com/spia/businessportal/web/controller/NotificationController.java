/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  15 de abr. de 2016 - 4:21:53 p. m.
 */
package com.spia.businessportal.web.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.businessportal.common.entities.FailedNotification;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.EmailResponseDTO;
import com.spia.businessportal.common.entities.dto.SendEmailResquestDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.service.NotificationService;
import com.spia.businessportal.service.RequestManagementService;
import com.spia.servicies.entities.notification.Notification;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import com.spia.services.exception.BOException;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import java.io.IOException;
import com.spia.businessportal.common.entities.dto.NotificationsPortalDTO;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import java.util.Map;


/**
 * @author leandro
 * 
 * controlador de la api de negocios del portal que maneja las peticiones para las notificaciones.
 */
@RequestMapping("/api/notification")
@Controller
public class NotificationController extends AbstractController {
	private static final Log LOG = LogFactory.getLog(NotificationController.class);


	@Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;
	
	@Autowired
	private NotificationService notificationService;
	
	/**
	 * Retorna todas las notificaciones para el usuario
	 * 
	 * @return
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getNotificaciones() throws BusinessException{
		ResponseEntity<?> re = null;
		try{
			UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
			List<Notification> notifications = this.getNotificationMdwBO().getUserNotifications(currentUser.getUserName());
			re = new ResponseEntity<List<Notification>>(notifications, HttpStatus.OK);
		}catch(Exception e){
			String[] strParams={};
			String msg = getProperty("Controller.Notification.RequestError", strParams , getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
			LOG.error(e.getMessage(), e);
		}
		return re;
	}
	/**
	 * Pingea con la aplicación que recupera las notificaciones.
	 * 
	 * @return
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/ping", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> pingNotificaciones() throws BusinessException{
		ResponseEntity<Boolean> re = null;
		re = new ResponseEntity<Boolean>(new Boolean(false), HttpStatus.OK);
		return re;
	}
	/**
	 * retorna true si pudo eliminar la notificación, un mensaje de error si no.
	 * 
	 * @param notificationId
	 * @return {@link Boolean}
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/{notificationId}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> removeNotification(@PathVariable Long notificationId) throws BusinessException{
		ResponseEntity<?> re = null;
		try{
			Boolean eliminated = this.getNotificationMdwBO().removeNotification(notificationId);
			re = new ResponseEntity<Boolean>(eliminated, HttpStatus.OK);
		}catch(Exception e){
			ResponseError error = new ResponseError();
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
	/**
	 * Marca las notificaciones como vistas
	 * 
	 * @return
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/watch", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> watch() throws BusinessException{
		ResponseEntity<Boolean> re = null;
		re = new ResponseEntity<Boolean>(new Boolean(true), HttpStatus.OK);
		return re;
	}
	/**
	 * Marca como vistas todas las notificaciones
	 * 
	 * @param notifications
	 * @return
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/watch-all", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> watchAll(@RequestBody List<Notification> notifications) throws BusinessException{
		ResponseEntity<?> re = null;
		try{
			Boolean watched = this.getNotificationMdwBO().watchAll(notifications);
			re = new ResponseEntity<Boolean>(watched, HttpStatus.OK);
		}catch(Exception e){
			ResponseError error = new ResponseError();
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
	
	/**
	 * Retorna todas las notificaciones que fallaron en el envío al modulo de notificacion
	 * 
	 * @return
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/getFailed/{userName}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getFailedNotifications(@PathVariable String userName) throws BusinessException{
		ResponseEntity<?> re = null;
		try{
			String user= userName != null?userName : this.getUserBO().getCurrentUser().getUserName();  

			List<FailedNotification> notifications = this.getNotificationBO().getFailedNotifications(user);
			if(notifications != null && !notifications.isEmpty()){
				re = new ResponseEntity<List<FailedNotification>>(notifications, HttpStatus.OK);
			}
		}catch(Exception e){
			ResponseError error = new ResponseError();
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
	
	/**
	 * Elimina las notificaciones que fallaron en el envío al modulo de notificacion
	 * 
	 * @return
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/deleteFailed/{notificationId}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> deleteFailedNotifications(@PathVariable Long notificationId) throws BusinessException{
		try{
			FailedNotification f= (FailedNotification) this.getNotificationBO().getById(notificationId);
			List<FailedNotification> l = new ArrayList<FailedNotification>();
			l.add(f);
			this.getNotificationBO().deleteFailedNotifications(l);
			return  new ResponseEntity<String>("success", HttpStatus.OK);
		}catch(Exception e){
			//TODO
			LOG.error(e.getMessage(), e);
			return  new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

	@RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> sendEmail(@RequestBody SendEmailResquestDTO sendEmailResquestDTO) throws BusinessException{
		try{
			EmailResponseDTO emailResponseDTO = new EmailResponseDTO();
			emailResponseDTO = notificationService.sendEmail(sendEmailResquestDTO);
			return  new ResponseEntity<EmailResponseDTO>(emailResponseDTO, HttpStatus.OK);
		}catch(Exception e){
			//TODO
			LOG.error(e.getMessage(), e);
			return  new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/filterNotificationsByPrivileges", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody ResponseEntity<?> filterNotificationsByPrivileges(@RequestBody  Map<String, String> privilegesList) throws Exception {
		ResponseEntity<?> re = null;
		try{
			NotificationsPortalDTO[] notificationsLst = {};
			String encryptedString = AESEncryptionUtil.getInstance(initVector, key).decrypt(privilegesList.get("data"), "POST /filterNotificationsByPrivileges NotificationController");
			JsonObject jsonObject = new Gson().fromJson(encryptedString, JsonObject.class);
			String privilegesListString = jsonObject.get("privilegesList").getAsString();
			notificationsLst = notificationService.filterNotificationsByPrivileges(privilegesListString);
			LOG.info("notificationsLst =>"+ notificationsLst);
			String parsedResponse = new Gson().toJson(notificationsLst);
			String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET notification/filterNotificationsByPrivileges NotificationController"); 
			return new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
				

		}catch(Exception e){
			LOG.error(e.getMessage(), e);
			return  new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
