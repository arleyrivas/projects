package com.spia.businessportal.web.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import java.util.Date;
import java.time.LocalDate;

import com.google.gson.Gson;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.spia.businessportal.common.entities.CustomersReq;
import com.spia.businessportal.common.entities.CustomerRequest;
import com.spia.businessportal.common.entities.CustomerData;
import com.spia.businessportal.common.entities.dto.AssociatedClientDTO;
import com.spia.businessportal.common.entities.dto.InfoCompanyAndContactsDTO;
import com.spia.businessportal.common.entities.dto.InfoGeographyDTO;
import com.spia.businessportal.common.entities.dto.CountryDTO;
import com.spia.businessportal.common.entities.dto.UDRequestDTO;
import com.spia.businessportal.common.entities.dto.HistoryUDSacReqDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.UpdateDataService;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import com.spia.services.entities.billing.UpdateData;
import com.spia.services.entities.GenericResponseDTO;

import com.spia.services.exception.BOException;

@RequestMapping("/api/update-data")
@Controller
public class UpdateDataController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(UpdateDataController.class);

	@Autowired
	private UpdateDataService updateDataService;

    @Autowired
	private UserBO userBO;

	/**
	 * GET /update-data/{idOrName} 
	 */
	@RequestMapping(value = "/{idOrName}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getAssociatedClients(@PathVariable String idOrName) throws BOException {
		ResponseEntity<?> re = null;

        System.out.println("****************************************************");
        LOG.info("getAssociatedClients: " + EncoderDecoder.decodeBase64(idOrName));
        System.out.println("****************************************************");

		try {
			List<AssociatedClientDTO> response = new ArrayList<>();
			idOrName = EncoderDecoder.decodeBase64(idOrName);
			UsuarioLoginDTO userlogin = userBO.getCurrentUser();
			response = updateDataService.getAssociatedClientsByIdOrName(userlogin.getEmpresa().getId(), idOrName);
			re = new ResponseEntity<List<AssociatedClientDTO>>(response, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener la información de la solicitud", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError("Se produjo un error al obtener la información de la solicitud");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

    /**
	 * GET /update-data/customerData/{nit}
	 */
	@RequestMapping(value = "/customerData/{nit}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getCustomerData(@PathVariable String nit) throws BOException {
		ResponseEntity<?> re = null;

        System.out.println("****************************************************");
        LOG.info("getCustomerData: " + EncoderDecoder.decodeBase64(nit));
        System.out.println("****************************************************");

		try {
			nit = EncoderDecoder.decodeBase64(nit);
            if (nit.equals("Actualizar mi empresa")) {
                UsuarioLoginDTO userlogin = userBO.getCurrentUser();
                String jsonInString = new Gson().toJson(userlogin);
                System.out.println("***jsonInString*** " + jsonInString);
                nit = userlogin.getEmpresa().getId();
            }
			
			UDRequestDTO respUDR = updateDataService.searchIdCustomerRequest(nit);
			InfoCompanyAndContactsDTO respICAC = updateDataService.getCustomerData(nit);

			Map<String, Object> map = new HashMap<String, Object>();
			map.put("UDRequest",respUDR);
			map.put("InfoCompanyAndContacts",respICAC);
			re = new ResponseEntity<Map<String, Object>>(map, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener la información de la solicitud", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError("Se produjo un error al obtener la información de la solicitud");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
	

    /**
	 * GET /update-data/ListInfoGeography/{city}
	 */
	@RequestMapping(value = "/ListInfoGeography/{city}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> listInfoGeography(@PathVariable String city) throws BOException {
		ResponseEntity<?> re = null;

        System.out.println("****************************************************");
        LOG.info("listInfoGeography: " + EncoderDecoder.decodeBase64(city));
        System.out.println("****************************************************");

		try {
			List<InfoGeographyDTO> response = new ArrayList<>();
			city = EncoderDecoder.decodeBase64(city);
			response = updateDataService.getListInfoGeographyByCity(city);
			re = new ResponseEntity<List<InfoGeographyDTO>>(response, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener la información de la solicitud", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError("Se produjo un error al obtener la información de la solicitud");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}


	/**
	 * GET /update-data/ListCountry/{letterInitial}
	 */
	@RequestMapping(value = "/ListCountry/{letterInitial}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> ListCountry(@PathVariable String letterInitial) throws BOException {
		ResponseEntity<?> re = null;

        System.out.println("****************************************************");
        LOG.info("ListCountry: " + EncoderDecoder.decodeBase64(letterInitial));
        System.out.println("****************************************************");

		try {
			List<CountryDTO> response = new ArrayList<>();
			letterInitial = EncoderDecoder.decodeBase64(letterInitial);
			response = updateDataService.getListCountryByletterInitial(letterInitial);
			re = new ResponseEntity<List<CountryDTO>>(response, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener la información de la solicitud", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError("Se produjo un error al obtener la información de la solicitud");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * POST /update-data/updateCustomers
	 */
	@RequestMapping(value = "/updateCustomers", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> updateCustomers(@RequestBody CustomersReq customersReq) throws BOException {
		ResponseEntity<?> re = null;

		try {
			//Se consulta si la empresa tiene solicitudes pendientes y se retorna id_customer_request
			UDRequestDTO response = updateDataService.searchIdCustomerRequest(customersReq.getCustomerRequest().getIdCustomer().toString());
			if (response == null) {
				CustomerRequest custReq = this.getCustomerRequestBO().saveOrUpdate(customersReq.getCustomerRequest());
				response = new UDRequestDTO();
				response.setIdCustomerRequest(custReq.getId());
				response.setNbr("REQUEST");
				response.setState("");

				CustomerData customerData = new CustomerData();
				customerData.setIdCustomerRequest(custReq.getId());
				customerData.setInfo(customersReq.getInfo() != null ? customersReq.getInfo() : "");
				customerData.setApproval(customersReq.getApproval() != null ? customersReq.getApproval() : "");
				CustomerData customerDataRegister = this.getCustomerDataBO().saveOrUpdate(customerData);
			}

			re = new ResponseEntity<UDRequestDTO>(response, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error("Se produjo un error al obtener la información de la solicitud", e);
			ResponseError error = new ResponseError();
			String[] strParams = {};
			error.setError("Se produjo un error al obtener la información de la solicitud");
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * POST /update-data/getHistoryRequest
	 */
	@RequestMapping(value = "/getHistoryRequest/{page}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getHistoryRequest(@PathVariable Integer page) throws BOException {
		ResponseEntity<?> re = null;
		try {
			List<HistoryUDSacReqDTO> response = updateDataService.getHistoryRequest(page);

			re = new ResponseEntity<List<HistoryUDSacReqDTO>>(response, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = null;
			String msg = "Se produjo un error al obtener la información de la solicitud";
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * POST /update-data/applyChanges
	 */
	@RequestMapping(value = "/applyChanges/{encodeData}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> applyChanges(@PathVariable String encodeData, @RequestBody CustomerData customerData) throws BOException {
		ResponseEntity<?> re = null;
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();
		Boolean response = false;
		
		LOG.info("USUARIO LOGUEADO: " + userlogin.getUserName());
		String userLogin_STR = new Gson().toJson(userlogin);
		LOG.info("USUARIO LOGUEADO: " + userLogin_STR);

		try {
			CustomerRequest customerRequest = this.getCustomerRequestBO().getById(customerData.getIdCustomerRequest());

			if (customerData.getInfo().isEmpty() && customerData.getApproval().isEmpty()) {
				//this.getCustomerDataBO().saveOrUpdate(customerData);
				//this.getCustomerRequestBO().updateCustomerRequest(customerData.getIdCustomerRequest(), userlogin.getUserName(), new Date());
				customerRequest.setApprovalUser(userlogin.getUserName());
				customerRequest.setApprovedAt(new Date());
				this.getCustomerRequestBO().saveOrUpdate(customerRequest);
				response = true;
			} else {
				String STRdata = EncoderDecoder.decodeBase64(encodeData);
				UpdateData updateData = new Gson().fromJson(STRdata, UpdateData.class);
				GenericResponseDTO<String> respMdw = this.getUpdateDataMdwBO().applyChanges(updateData);
				response = Boolean.valueOf(respMdw.getSuccess());
				if (Boolean.valueOf(respMdw.getSuccess())) {
					this.getCustomerDataBO().saveOrUpdate(customerData);
					//this.getCustomerRequestBO().updateCustomerRequest(customerData.getIdCustomerRequest(), userlogin.getUserName(), new Date());
					customerRequest.setApprovalUser(userlogin.getUserName());
					customerRequest.setApprovedAt(new Date());
					this.getCustomerRequestBO().saveOrUpdate(customerRequest);
				}
			}

			

			re = new ResponseEntity<Boolean>(response, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = null;
			String msg = "Se produjo un error al obtener la información de la solicitud";
			LOG.error(msg + e.toString());
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * POST /update-data/getHistoryRequestByDates/{dateFrom}/{dateTo}
	 */
	@RequestMapping(value = "/getHistoryRequestByDates/{dateFrom}/{dateTo}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> getHistoryRequestByDates(@PathVariable String dateFrom, @PathVariable String dateTo) throws BOException {
		ResponseEntity<?> re = null;
		try {
			dateFrom = EncoderDecoder.decodeBase64(dateFrom);
			dateTo = EncoderDecoder.decodeBase64(dateTo);
			List<HistoryUDSacReqDTO> response = updateDataService.getHistoryRequestByDates(dateFrom,dateTo);

			re = new ResponseEntity<List<HistoryUDSacReqDTO>>(response, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = null;
			String msg = "Se produjo un error al obtener la información de la solicitud";
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

}
