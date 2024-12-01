/*

 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  1 de oct. de 2015 - 9:40:28 a. m.
 */
package com.spia.businessportal.web.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.services.entities.LineOperator;
import com.spia.services.entities.billing.Invoice;

import ar.com.fluxit.framework.common.exception.BusinessException;

/**
 * 
 * @author leandro
 * Controlador donde se expone la api de negocios del portal para {@link LineOperator}
 */
@Controller
@RequestMapping(value = "/api/lineoperator")
public class LineOperatorController extends AbstractController{
	
	/**
	 * retorna todos los line opreator
	 * 
	 * @return {@link LineOperator}
	 * @throws BusinessException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "",method = RequestMethod.GET)
	public @ResponseBody List<LineOperator> all() throws BusinessException{		    
		return this.getLineOperatorMdwBo().all();
	}	
	
}
