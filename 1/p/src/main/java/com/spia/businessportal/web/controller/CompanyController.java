package com.spia.businessportal.web.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.CompaniesDTO;
import com.spia.businessportal.common.entities.dto.TruckVisitAppointmentDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.services.exception.BOException;
import com.spia.services.security.esb.entities.CompanyType;
import com.spia.services.security.esb.entities.Privilege;
import com.spia.services.security.esb.entities.SecurityEsbResponse;

/**
 * @author facundo Controlador donde se expone la api de negocios del portal
 *         para {@link com.spia.businessportal.common.entities.Pin}
 */
@RequestMapping("/api/company")
@Controller
public class CompanyController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(ApplicationManagerController.class);

	@RequestMapping(value = "/types", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity getAllCompanyTypes() {
		ResponseEntity re = null;
		try {
			SecurityEsbResponse<CompanyType> companies = this.getSecurityEsbBO().getCompanyTypes();
			re = new ResponseEntity<List<CompanyType>>((List<CompanyType>) companies.getResult(), HttpStatus.OK);

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.HazardRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/companyType/{company}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity getCompanyType(@PathVariable("company") String company) {
		ResponseEntity re = null;
		try {
			SecurityEsbResponse<CompanyType> companies = this.getSecurityEsbBO().getCompanyType(company);
			re = new ResponseEntity<CompanyType>((CompanyType) companies.getResult(), HttpStatus.OK);

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.HazardRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/companiesByType/{type}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity getAllCompaniesByType(@PathVariable("type") String type) {
		ResponseEntity re = null;
		try {
			SecurityEsbResponse<CompanyType> companies = this.getSecurityEsbBO().getCompaniesByType(type);
			re = new ResponseEntity<List<CompanyType>>((List<CompanyType>) companies.getResult(), HttpStatus.OK);

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.HazardRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/companiesByType/{type}/filter/{filter}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity getAllCompaniesByTypeAndFilter(@PathVariable("type") String type,
			@PathVariable("filter") String filter) {
		ResponseEntity re = null;
		try {
			SecurityEsbResponse<CompanyType> companies = this.getSecurityEsbBO().getCompaniesByTypeAndFilter(type,
					filter);
			re = new ResponseEntity<List<CompanyType>>((List<CompanyType>) companies.getResult(), HttpStatus.OK);

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.HazardRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/companiesTypePrivileges/{type}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity getAllHazards(@PathVariable("type") String type) {
		ResponseEntity re = null;
		try {
			SecurityEsbResponse<Privilege> companies = this.getSecurityEsbBO().getCompanyTypePrivileges(type);
			re = new ResponseEntity<List<Privilege>>((List<Privilege>) companies.getResult(), HttpStatus.OK);

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.HazardRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/privilegeRestricted/{message}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity privilegeRestricted(@PathVariable("message") String message) {
		ResponseEntity re = null;
		ResponseError error = new ResponseError();
		message = EncoderDecoder.decodeBase64(message);
		error.setError(message);
		re = new ResponseEntity<ResponseError>(error, HttpStatus.FORBIDDEN);

		return re;
	}
	

	/**
	 * 
	 * @param plate
	 * @return
	 * @throws BOException
	 */
	@RequestMapping(value = "/companiesByTypeAndFilter", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> saveTruckVisit(@RequestBody CompaniesDTO companiesDTO) throws BOException {
		ResponseEntity<?> re = null;
		SecurityEsbResponse<CompanyType> companies = null;
		try {
			if (companiesDTO.getValidate()) {
				companies = this.getSecurityEsbBO().getCompaniesByTypeAndFilter(companiesDTO.getType(),
						companiesDTO.getFilter());
				re = new ResponseEntity<List<CompanyType>>((List<CompanyType>) companies.getResult(), HttpStatus.OK);
			}
			else
			{
				ResponseError error = new ResponseError();
				String[] strParams = {};
				error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
				re = new ResponseEntity<ResponseError>(error, HttpStatus.METHOD_NOT_ALLOWED);
			}
		} catch (Exception e) {
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError(getProperty("Controller.BreakBulkError", strParams, getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
	
	@RequestMapping(value = "/companiesTypeByUser", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity getCompaniesTypeByUser() {
		ResponseEntity re = null;
		try {
			List<String> companiesTypeList = new ArrayList<String>();
			if(this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT)) {
				companiesTypeList.add("06");
			}
			if(this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK)) {
				companiesTypeList.add("09");
			}
			if(this.getUserBO().hasPermission(User.COMPANY_TYPE_CUSTOMER)) {
				companiesTypeList.add("05");
			}
			
			re = new ResponseEntity<List<String>>((List<String>) companiesTypeList, HttpStatus.OK);

		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.HazardRetrievalError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

}
