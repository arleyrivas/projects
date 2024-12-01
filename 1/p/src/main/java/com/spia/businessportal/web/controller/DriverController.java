/**
 * 
 */
package com.spia.businessportal.web.controller;

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

import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.DriverDTO;
import com.spia.businessportal.common.entities.dto.DriverValidationDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.service.DriverService;
import com.spia.services.entities.Driver;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;
import com.google.gson.Gson;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import org.springframework.beans.factory.annotation.Value;

/**
 * controlador donde se expone la api de negocios del portal para
 * {@link com.spia.services.entities.Driver}
 * 
 * @author diego
 *
 */
@RequestMapping("/api/driver")
@Controller
public class DriverController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(DriverController.class);

	@Autowired
	private QuerysBO querysBO;
	@Autowired
	private DriverService driverService;

	@Value("${encrypt.messages.initialVector}") public String initVector;
    @Value("${encrypt.messages.key}") public String key;

	/**
	 * Retorna todos los conductores para la empresa de transporte logueada en el
	 * portal. GET /api/driver
	 * 
	 * @return {@link com.spia.services.entities.Driver}
	 * @throws Exception
	 */
	@RequestMapping(value = "{value}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getDriversByTruckingCompany(@PathVariable String value) throws Exception {
		ResponseEntity<?> re = null;
		UsuarioLoginDTO currentUser = this.getUserBO().getCurrentUser();
		List<Driver> drivers = null;
		LOG.info("N4 User Id: " + currentUser.getEmpresa().getId());
		if (currentUser.getEmpresa().getId() != null) {
			//drivers = driverService.getDrivers(value);
			 drivers = this.getDriverMdwBo().allByTruckingCompany(currentUser.getEmpresa().getId() +"/driver", value);
		}
		String stringifyJson = new Gson().toJson(drivers);
        String encrypted = AESEncryptionUtil.getInstance(initVector, key).encrypt(stringifyJson, "POST /driver DriverController");
		re = new ResponseEntity<String>(encrypted, HttpStatus.OK);
		return re;
		//return drivers;
	}

	/**
	 * Retorna todos los conductores para la empresa de transporte logueada en el
	 * portal. GET /api/driver
	 * 
	 * @return {@link com.spia.services.entities.Driver}
	 * @throws BusinessException cuando hay un error en los servicios mdw.
	 */

	@RequestMapping(value = "/validation/{driver}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> driverValidation(@PathVariable String driver) {
		ResponseEntity<?> re = null;
		try {
			DriverDTO[] response = driverService.driverValidation(driver);
			if (response != null && response.length != 0) {
				//re = new ResponseEntity<DriverDTO[]>(response, HttpStatus.OK);
				String stringifyJson = new Gson().toJson(response);
				String encrypted = AESEncryptionUtil.getInstance(initVector, key).encrypt(stringifyJson, "POST /validation/{driver} DriverController");
				re = new ResponseEntity<String>(encrypted, HttpStatus.OK);
				
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Retorna todos los conductores para la empresa de transporte logueada en el
	 * portal. GET /api/driver/validation/service
	 * 
	 * @return {@link com.spia.services.entities.Driver}
	 * @throws BusinessException cuando hay un error en los servicios mdw.
	 */

	@RequestMapping(value = "/validation/service/{driver}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> driverValidationService(@PathVariable String driver) {
		ResponseEntity<?> re = null;
		try {
			DriverValidationDTO[] response = driverService.driverValidationService(driver);
			if (response != null && response.length != 0) {
				//re = new ResponseEntity<DriverValidationDTO[]>(response, HttpStatus.OK);
				String stringifyJson = new Gson().toJson(response);
				String encrypted = AESEncryptionUtil.getInstance(initVector, key).encrypt(stringifyJson, "POST /validation/service/{driver} DriverController");
				re = new ResponseEntity<String>(encrypted, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
}
