package com.spia.businessportal.backend.bo;

import java.io.IOException;

import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.services.entities.BillOfLading;
import com.spia.services.entities.BlAgentAndConsigneeDTO;
import com.spia.services.entities.CreateHbl;
import com.spia.services.entities.CreateHblServiceDTO;
import com.spia.services.entities.UpdateBlRequest;
import com.spia.services.exception.BOException;

public interface BillOfLadingMdwBO<T> extends GenericMdwBO<T> {

	public @ResponseBody BillOfLading getByIdAndAgent(String id, String agent) throws BOException;
	/**
	 * Actualiza un bl con los datos del consignee y el agente.
	 * 
	 * @param id
	 * @param request
	 * @return
	 * @throws BOException
	 */
	public @ResponseBody BillOfLading update(String id, UpdateBlRequest request) throws BOException;
	public @ResponseBody CreateHbl saveHbl(CreateHblServiceDTO createHblServiceDTO) throws BOException;
	public void updateModalityDian(String id) throws BOException;

	/**
	 * @author Elvis Fontalvo
	 * @param BlAgentAndConsigneeDTO blNbr, AgentId and nitConsignee
	 * @return {@link String}
	 * @throws IOException when the process has errors
	 */
	public String updateAgentAndConsigneeInBl(com.spia.services.entities.BlAgentAndConsigneeDTO blAngentAndConsigeeDTO)
			throws BOException;
	public String updateConsigneeCancelDraftBbk(String hblNbr) throws BOException;

}
