/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: marcelo
 * Date:  28 de dic. de 2015 - 10:49:33 a. m.
 */
package com.spia.businessportal.web.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.spia.businessportal.common.utils.AESEncryptionUtil;

import org.eclipse.jetty.util.ajax.JSON;

import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EncoderDecoder;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * @author marcelo
 *
 *         controlador de la api de negocios del portal que devuelve el archivo con las traducciones para el frontend.
 * 
 */

@RequestMapping("/api")
@Controller
public class ApplicationController extends AbstractController {

    private static final Log LOG = LogFactory.getLog(ApplicationController.class);

    @Value("${application.version}")
    private String version;

    @Value("#{payu['payu.gateway.url']}")
    private String payuGateway;

    @Value("#{bookingVacios['agente']}")
    private String agenteVacios;

    @Value("#{bookingVacios['cliente']}")
    private String clienteVacios;

    @Value("${idle.timeout}")
    private String idleTimeout;

    @Value("${documentos.maxFilesize}")
    private String maxAllowedDocumentSize;
    
    @Value("${spia.notification.mails.sac}")
    private String emailsSacToNotification;

    @Value("${documentos.ftp.url}")
    private String documentosFtpUrl;

    @Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;

    @RequestMapping(value = "/application/idle-timeout", method = RequestMethod.GET)
    public @ResponseBody String getIdleTimeout() throws BusinessException {
        return idleTimeout;
    }

    @RequestMapping(value = "/application/max-allowed-document-size", method = RequestMethod.GET)
    public @ResponseBody String getMaxAllowedDocumentSize() throws BusinessException {
        return maxAllowedDocumentSize;
    }

    @RequestMapping(value = "/application/notification-mails-sac", method = RequestMethod.GET)
    public @ResponseBody String getEmailsSacToNotification() throws BusinessException {
        return AESEncryptionUtil.getInstance(initVector, key).encrypt(emailsSacToNotification, "GET /application/notification-mails-sac");
    }
   
    @RequestMapping(value = "/application/ftp-server-ip", method = RequestMethod.GET)
    public @ResponseBody String getFtpServerIp() throws BusinessException {
        return AESEncryptionUtil.getInstance(initVector, key).encrypt(documentosFtpUrl, "GET /application/ftp-server-ip");
    }



    /**
     * GET /application/version versión de la aplicación
     * 
     * @return versión de la aplicación
     * @throws BusinessException
     *             cuando ocurre un fallo en el servidor
     */
    @RequestMapping(value = "/application/version", method = RequestMethod.GET)
    public @ResponseBody String get() throws BusinessException {
        return version;
    }

    /**
     * GET /application/version versión de la aplicación
     * 
     * @return versión de la aplicación
     * @throws BusinessException
     *             cuando ocurre un fallo en el servidor
     */
    @RequestMapping(value = "/application/payu-gateway", method = RequestMethod.GET)
    public @ResponseBody String getPayuGateway() throws BusinessException {
        return payuGateway;
    }

    /**
     * GET /application/agente-vacios id del agente para vacios
     * 
     * @return id del agente para vacios
     * @throws BusinessException
     *             cuando ocurre un fallo en el servidor
     */
    @RequestMapping(value = "/application/agente-vacios", method = RequestMethod.GET)
    public @ResponseBody String getAgenteVacios() throws BusinessException {
        return agenteVacios;
    }

    /**
     * GET /application/version id del cliente para vacios
     * 
     * @return id del cliente para vacios
     * @throws BusinessException
     *             cuando ocurre un fallo en el servidor
     */
    @RequestMapping(value = "/application/cliente-vacios", method = RequestMethod.GET)
    public @ResponseBody String getClienteVacios() throws BusinessException {
        return clienteVacios;
    }

    /**
     * GET /application/i18n/{locale}.json i18n para el frontend
     * 
     * @param locale:
     *            lenguaje de traducción
     * @return archivo de traducción
     * @throws BusinessException
     *             cuando ocurre un fallo en el servidor
     * @throws UnsupportedEncodingException 
     */
    @RequestMapping(
            value = "/application/i18n/{locale}.json",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<?> i18n(@PathVariable String locale) throws BusinessException, UnsupportedEncodingException {
        String confDir = System.getProperty("jboss.server.config.dir");
        String path = confDir + "/portal/i18n/locale-" + locale + ".json";

        File result = new File(path);
        BufferedReader reader = null;
        try {            
            reader = new BufferedReader(new FileReader(result));
            StringBuilder sbb = new StringBuilder();
            String str = null;
            
            BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(result), "UTF8"));
            try {
            	while ((str = in.readLine()) != null) {
            		sbb.append(str);
        		}
            } catch (IOException e) {
                LOG.error(e.getStackTrace());
            }
            
            return new ResponseEntity<Object>(JSON.parse(sbb.toString()), HttpStatus.OK);
        } catch (FileNotFoundException e) {
            String[] strParams = null;
            String msg = getProperty("Controller.Application", strParams, getApplicationContext());
            LOG.error(msg, e);
            LOG.error(e.getStackTrace());
            ResponseError error = new ResponseError();
            error.setError(msg);
            return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException e) {
                LOG.error(e.getStackTrace());
            }
        }

    }

    /**
     * GET /application/securityConfig.json configuración de seguridad para el frontend
     * 
     * @param locale:
     *            lenguaje de traducción
     * @return archivo de traducción
     * @throws BusinessException
     *             cuando ocurre un fallo en el servidor
     * @throws UnsupportedEncodingException 
     */
    @RequestMapping(
            value = "/application/securityConfig.json",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<?> securityConfig() throws BusinessException, UnsupportedEncodingException {
        String confDir = System.getProperty("jboss.server.config.dir");
        String path = confDir + "/portal/security/securityConfig.json";
          
        
        File result = new File(path);
        BufferedReader reader = null;
        try {
            
            reader = new BufferedReader(new FileReader(result));
            StringBuilder sbb = new StringBuilder();
            String str = null;
            
            BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(result), "UTF8"));
            try {
            	while ((str = in.readLine()) != null) {
            		sbb.append(str);
        		}
            } catch (IOException e) {
                LOG.error(e.getStackTrace());
            }
            return new ResponseEntity<Object>(JSON.parse(sbb.toString()), HttpStatus.OK);
        } catch (FileNotFoundException e) {
            String[] strParams = null;
            String msg = getProperty("Controller.Application", strParams, getApplicationContext());
            LOG.error(msg, e);
            LOG.error(e.getStackTrace());
            ResponseError error = new ResponseError();
            error.setError(msg);
            return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException e) {
                LOG.error(e.getStackTrace());
            }
        }

    }
    
    /**
     * GET /application/{fileName} configuración del modulo de consultas
     * 
     * @param locale:
     *            lenguaje de traducción
     * @return archivo de tipos de busquedas
     * @throws BusinessException
     *             cuando ocurre un fallo en el servidor
     * @throws UnsupportedEncodingException 
     */
    @RequestMapping(
            value = "/application/{fileName}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<?> getQuerys(@PathVariable String fileName) throws BusinessException, UnsupportedEncodingException {
        String confDir = System.getProperty("jboss.server.config.dir");
        fileName = EncoderDecoder.decodeBase64(fileName);
        String path = confDir + "/portal/modules/" + fileName;
                 
        File result = new File(path);
        BufferedReader reader = null;
        try {
            
            reader = new BufferedReader(new FileReader(result));
            StringBuilder sbb = new StringBuilder();
            String str = null;
            
            BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(result), "UTF8"));
            try {
            	while ((str = in.readLine()) != null) {
            		sbb.append(str);
        		}
            } catch (IOException e) {
                LOG.error(e.getStackTrace());
            }
            return new ResponseEntity<Object>(JSON.parse(sbb.toString()), HttpStatus.OK);
        } catch (FileNotFoundException e) {
            String[] strParams = null;
            String msg = getProperty("Controller.Application", strParams, getApplicationContext());
            LOG.error(msg, e);
            LOG.error(e.getStackTrace());
            ResponseError error = new ResponseError();
            error.setError(msg);
            return new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException e) {
                LOG.error(e.getStackTrace());
            }
        }

    }

}
