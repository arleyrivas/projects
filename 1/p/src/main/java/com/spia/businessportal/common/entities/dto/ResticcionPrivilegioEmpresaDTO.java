package com.spia.businessportal.common.entities.dto;

import java.util.List;
import ar.com.fluxit.framework.entities.user.DiaRestriccionDTO;

public class ResticcionPrivilegioEmpresaDTO {

	private String nit;
	private List<PrivilegioDiaRestriccionDTO> privilegios;

	public String getNit() {
		return nit;
	}

	public void setNit(String nit) {
		this.nit = nit;
	}

	public List<PrivilegioDiaRestriccionDTO> getPrivilegios() {
		return privilegios;
	}

	public void setPrivilegios(List<PrivilegioDiaRestriccionDTO> privilegios) {
		this.privilegios = privilegios;
	}
}
