/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  1 de oct. de 2015 - 10:31:41 a. m.
 */
package com.spia.businessportal.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.services.entities.Edo;
import com.spia.services.entities.EquipmentType;
import com.spia.services.entities.Ero;

import ar.com.fluxit.framework.common.exception.BusinessException;
import com.google.gson.Gson;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

/**
 * @author leandro
 * Controlador donde se expone la api de negocios del portal para {@link EquipmentType}
 */
@Controller
@RequestMapping(value = "/api/equipment-type")
public class EquipmentTypeController extends AbstractController{
	@Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;
	/**
	 * 
	 * GET api/equipment-type/{equipmentType}
	 * Retorna el EquipmentType.
	 * 
	 * @param equipmentType id del equipment type
	 * @return {@link EquipmentType}
	 * @throws BusinessException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/{equipmentType}",method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> get(@PathVariable String equipmentType) throws BusinessException{	
		ResponseEntity<?> re = null;
		String parsedResponse = new Gson().toJson(this.getEquipmentTypeMdwBo().get(equipmentType)); 
		String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /{equipmentType} EquipmentTypeController");
		re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);	 
		return re;   	    
		//return this.getEquipmentTypeMdwBo().get(equipmentType);
	}
	
}
