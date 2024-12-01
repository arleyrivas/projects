/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  26 de may. de 2016 - 11:31:15 a. m.
 */
package com.spia.businessportal.web.controller;

import java.io.IOException;
import java.io.StringReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.HttpServerErrorException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.services.entities.carvajal.CarvajalOnlineInvoiceRequest;
import com.spia.services.entities.payu.BaseResponse;
import com.spia.services.entities.payu.GenerateOnlineInvoiceMdwRequest;
import com.spia.services.entities.payu.OnlineInvoiceResponse;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author leandro
 *
 */
@RequestMapping("/api/online-invoice")
@Controller
public class OnlineInvoiceController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(OnlineInvoiceController.class);

	/**
	 * Pinguea el esb de la factura electrónica.
	 * 
	 * @return
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/ping", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> ping() throws BusinessException{
		ResponseEntity<?> re = null;
		try{
			BaseResponse response = this.getOnlineInvoiceMdwBO().ping();
			if(response != null && response.isSuccess()){
				re = new ResponseEntity<BaseResponse>(response, HttpStatus.OK);
			}
		}catch(HttpServerErrorException e){
			ResponseError error = new ResponseError();
			ObjectMapper mapper = new ObjectMapper();
			LOG.error(e.getMessage(), e);
			String msj = e.getResponseBodyAsString();
			String exception = "com.spia.services.exception.ServiceException: 500";
			int start = msj.indexOf(exception);
			String subMsg = msj.substring(start+exception.length(), msj.length());
			String errorMsg = subMsg.substring(0, subMsg.indexOf(System.getProperty("line.separator")));
			LOG.info(errorMsg);			 
			error.setError(errorMsg);
			error.setCode(e.getStatusCode().toString());
			error.setMessage(errorMsg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
		}catch(Exception e){
			String[] strParams={};
			String msg = getProperty("Controller.CarvajalEsb.Error", strParams , getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
			LOG.error(e.getMessage(), e);
		}
		return re;
	}
	/**
	 * Descarga la factura electrónica correspondiente al transactionId
	 * 
	 * @param transactionId
	 * @return
	 * @throws BusinessException
	 * @throws IOException 
	 * @throws JsonMappingException 
	 * @throws JsonParseException 
	 */
	@RequestMapping(value = "/download/{documentNumber}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> download(@PathVariable("documentNumber") String documentNumber , HttpServletRequest request,HttpServletResponse response) throws BusinessException{
		ResponseEntity<?> re = null;
		try{
			CarvajalOnlineInvoiceRequest responseCarvajal = this.getOnlineInvoiceMdwBO().downloadOnlineInvoice(documentNumber);
			if(responseCarvajal != null ){
				re = new ResponseEntity<CarvajalOnlineInvoiceRequest>(responseCarvajal, HttpStatus.OK);
			}else{
				String[] strParams={};
				String msg = getProperty("Controller.Notification.RequestError", strParams , getApplicationContext());
				ResponseError error = new ResponseError();
				error.setError(msg);
				LOG.error(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}catch(HttpServerErrorException e){
			ResponseError error = new ResponseError();
			ObjectMapper mapper = new ObjectMapper();
			LOG.error(e.getMessage(), e);
			String msj = e.getResponseBodyAsString();
			String exception = "com.spia.services.exception.ServiceException: 500";
			int start = msj.indexOf(exception);
			String subMsg = msj.substring(start+exception.length(), msj.length());
			String errorMsg = subMsg.substring(0, subMsg.indexOf(System.getProperty("line.separator")));
			LOG.info(errorMsg);			 
			error.setError(errorMsg);
			error.setCode(e.getStatusCode().toString());
			error.setMessage(errorMsg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
		}catch(Exception e){
			String[] strParams={};
			String msg = getProperty("Controller.CarvajalEsb.Error", strParams , getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
			LOG.error(e.getMessage(), e);
		}
		return re;
	}
	/**
	 * Genera la factura electrónica correspondiente al finalNbr
	 * 
	 * @param finalNbr
	 * @return
	 * @throws BusinessException
	 */
	@RequestMapping(value = "/generate/{finalNbr}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> generate(@PathVariable("finalNbr") String finalNbr) throws BusinessException{
		ResponseEntity<?> re = null;
		try{
			GenerateOnlineInvoiceMdwRequest request = this.getInvoiceMdwBO().getOnlineInvoiceInformation(finalNbr);
			OnlineInvoiceResponse response = this.getOnlineInvoiceMdwBO().generateOnlineInvoice(request);
			if(response != null && response.isSuccess()){
				JAXBContext jaxbContext = JAXBContext.newInstance(CarvajalOnlineInvoiceRequest.class);
				Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
				StringReader reader = new StringReader(response.getResult().getResultData());
				CarvajalOnlineInvoiceRequest o = (CarvajalOnlineInvoiceRequest) unmarshaller.unmarshal(reader);
				re = new ResponseEntity<CarvajalOnlineInvoiceRequest>(o, HttpStatus.OK);
			}		
		}catch(HttpServerErrorException e){
			ResponseError error = new ResponseError();
			ObjectMapper mapper = new ObjectMapper();
			LOG.error(e.getMessage(), e);
			String msj = e.getResponseBodyAsString();
			String exception = "com.spia.services.exception.ServiceException: 500";
			int start = msj.indexOf(exception);
			String subMsg = msj.substring(start+exception.length(), msj.length());
			String errorMsg = subMsg.substring(0, subMsg.indexOf(System.getProperty("line.separator")));
			LOG.info(errorMsg);			 
			error.setError(errorMsg);
			error.setCode(e.getStatusCode().toString());
			error.setMessage(errorMsg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
		}catch(Exception e){
			String[] strParams={};
			String msg = getProperty("Controller.CarvajalEsb.Error", strParams , getApplicationContext());
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
			LOG.error(e.getMessage(), e);
		}
		return re;
	}
}
