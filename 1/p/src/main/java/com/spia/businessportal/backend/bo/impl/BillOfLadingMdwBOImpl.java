package com.spia.businessportal.backend.bo.impl;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.BillOfLadingMdwBO;

import com.spia.services.entities.BillOfLading;
import com.spia.services.entities.BlAgentAndConsigneeDTO;
import com.spia.services.entities.CreateHbl;
import com.spia.services.entities.CreateHblServiceDTO;
import com.spia.services.entities.UpdateBlRequest;
import com.spia.services.exception.BOException;

public class BillOfLadingMdwBOImpl<T> extends GenericMdwBOImpl<T> implements BillOfLadingMdwBO<T> {

	@Autowired
	private RestTemplate restTemplate;

	public BillOfLadingMdwBOImpl() {
		super();
	}

	@Override
	public BillOfLading getByIdAndAgent(String id, String agent) throws BOException {
		BillOfLading bl = null;
		if (!StringUtils.isEmpty(id) && !StringUtils.isEmpty(agent)) {
			bl = (BillOfLading) this.getRestTemplate().getForObject(getServiceUrl() + "/{id}/agent/{agent}",
					BillOfLading.class, id, agent);
		}
		return bl;
	}

	@Override
	public BillOfLading update(String id, UpdateBlRequest request) throws BOException {
		BillOfLading bl = null;
		if (!StringUtils.isEmpty(id)) {
			HttpEntity<UpdateBlRequest> requestEntity = new HttpEntity<UpdateBlRequest>(request);
			ResponseEntity<BillOfLading> re = restTemplate.exchange(getServiceUrl() + "/{id}", HttpMethod.PUT,
					requestEntity, BillOfLading.class, id);
			bl = re.getBody();
		}
		return bl;
	}

	@Override
	public CreateHbl saveHbl(CreateHblServiceDTO createHblServiceDTO) throws BOException {
		CreateHbl createHbl = new CreateHbl();
		createHbl = this.getRestTemplate().postForObject(getServiceUrl() + "/saveHbl", createHblServiceDTO,
				CreateHbl.class);
		return createHbl;
	}

	@Override
	public void updateModalityDian(String id) throws BOException {
		this.getRestTemplate().getForObject(getServiceUrl() + "/updateModalityDian/{id}", void.class, id);
	}

	public RestTemplate getRestTemplate() {
		return restTemplate;
	}

	public void setRestTemplate(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	@Override
	public String updateAgentAndConsigneeInBl(BlAgentAndConsigneeDTO blAngentAndConsigeeDTO) throws BOException {
		String response = null;
		HttpEntity<BlAgentAndConsigneeDTO> requestEntity = new HttpEntity<BlAgentAndConsigneeDTO>(
				blAngentAndConsigeeDTO);
		ResponseEntity<String> re = restTemplate.exchange(getServiceUrl() + "/updateAgentAndConsigneeInBl", HttpMethod.POST,
				requestEntity, String.class);
		response= re.getBody();
		return response;
	}
	
	@Override
	public String updateConsigneeCancelDraftBbk(String hblNbr) throws BOException {
		String response = null;
		response =(String) this.getRestTemplate().getForObject(getServiceUrl() + "/updateConsigneeCancelDraftBbk/{hblNbr}",
				String.class, hblNbr);
		return response;
	}

}
