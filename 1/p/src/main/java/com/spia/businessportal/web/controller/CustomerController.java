/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  17 de nov. de 2015 - 10:10:31 a. m.
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

import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.BlChildrensByBlMasterDTO;
import com.spia.businessportal.common.entities.dto.ContainersByBlDTO;
import com.spia.businessportal.common.entities.dto.CustomerServiceDTO;
import com.spia.businessportal.common.entities.dto.ResponseEmptyAndDecoDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.service.CustomerService;
import com.spia.services.entities.billing.Customer;
import com.spia.services.exception.BOException;
import com.spia.services.util.Constants;

/**
 * @author leandro
 *
 */
@RequestMapping("/api/customer")
@Controller
public class CustomerController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(CustomerController.class);

	@Autowired
	private CustomerService customerService;

	private String roleAgent = "Agent";
	private String roleTruck = "Trucking Company";
	private String roleShipperConsignee = "Shipper/Consignee";

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> all() throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<Customer> customers = this.getCustomerMdwBO().all();
			re = new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener customers ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.CustomerError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/shippers", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> shippers() throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<Customer> customers = this.getCustomerMdwBO().shippers();
			re = new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener customers ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.CustomerError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> get(@PathVariable String id) throws BOException {
		ResponseEntity<?> re = null;
		String role = null;
		try {
			if (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT))
				role = Constants.Billing.ROLES.get(roleAgent);
			else if (this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK))
				role = Constants.Billing.ROLES.get(roleTruck);
			Customer customer = this.getCustomerMdwBO().getByIdAndRole(id, role);
			re = new ResponseEntity<Customer>(customer, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener customers ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.CustomerError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/shipper/{id}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getShipper(@PathVariable String id) throws BOException {
		ResponseEntity<?> re = null;
		String role = null;
		try {
			role = Constants.Billing.ROLES.get(roleShipperConsignee);
			Customer customer = this.getCustomerMdwBO().getByIdAndRole(id, role);
			re = new ResponseEntity<Customer>(customer, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener customers ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.CustomerError", strParams, getApplicationContext()));
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
	@RequestMapping(value = "/search/{search}/type/{type}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getCustomer(@PathVariable String search, @PathVariable String type) throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<Customer> customers = new ArrayList<>();
			CustomerServiceDTO[] customerServiceDTOList = null;
			customerServiceDTOList = customerService.getCustomer(search, type);
			if (customerServiceDTOList.length > 0) {
				for (CustomerServiceDTO o : customerServiceDTOList) {
					Customer customer = new Customer();
					customer.setId(o.getId());
					customer.setName(o.getName());
					customers.add(customer);
				}
				re = new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
			}
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener los customers ", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.CustomerError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

}
