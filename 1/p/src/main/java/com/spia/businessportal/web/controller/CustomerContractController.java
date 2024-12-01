package com.spia.businessportal.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.constant.DateFormatConstant;
import com.spia.services.entities.billing.CustomerContract;
import com.spia.services.exception.BOException;

@RequestMapping("/api/customer-contract")
@Controller
public class CustomerContractController extends AbstractController{
	
	private static final Log LOG = LogFactory.getLog(CustomerContractController.class);
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> get(@PathVariable String id) throws BOException {
		ResponseEntity<?> re = null;
		try {
			SimpleDateFormat dateformat = new SimpleDateFormat("yy-MMM-dd", Locale.ENGLISH);
			//SimpleDateFormat dateformat = new SimpleDateFormat("yy-MMM-dd"); //16-Nov-01
			String date = dateformat.format(new Date());
			List<CustomerContract> contracts= this.getCustomerContractMdwBO().getContractByCustomerAndDate(id, date);
			//Quedarse con el contrato de fecha mayor
			if(contracts != null && !contracts.isEmpty()){
				CustomerContract contract = null;
				if(contracts.size() == 1){
					contract = contracts.get(0);
				}else{
					contract = getLastCustomerContract(contracts);
				}
				re = new ResponseEntity<CustomerContract>(contract, HttpStatus.OK);
			}else{
				
			}
		}catch (Exception e) {
			LOG.error("Se produjo un error al obtener los contratos ", e);
			ResponseError error = new ResponseError();
			String[] strParams={id};
			error.setError(getProperty("Controller.CustomerContractError", strParams , getApplicationContext()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
	
	private CustomerContract getLastCustomerContract(List<CustomerContract> contracts){
		CustomerContract contract = null;
		for(CustomerContract customerContract : contracts){
			if(contract == null){
				contract = customerContract;
			}else{
				Date customerContractDate = new Date(customerContract.getDate());
				Date contractDate = new Date(contract.getDate());
				if(customerContractDate.after(contractDate)){
					contract = customerContract;
				}
			}
		}
		return contract;
	}

}
