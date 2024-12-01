package com.spia.businessportal.common.entities.dto;

import java.util.List;
import ar.com.fluxit.framework.entities.user.DiaRestriccionDTO;

public class ResticcionPrivilegioEmpresaResponseDTO {

	private String success;
	private List<PrivilegioDiaRestriccionDTO> result;

	public String getSuccess() {
		return success;
	}

	public void setSuccess(String success) {
		this.success = success;
	}

	public List<PrivilegioDiaRestriccionDTO> getResult() {
		return result;
	}

	public void setResult(List<PrivilegioDiaRestriccionDTO> result) {
		this.result = result;
	}
}