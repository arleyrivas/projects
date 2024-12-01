package com.spia.businessportal.common.entities.dto;

import java.util.List;
import ar.com.fluxit.framework.entities.user.DiaRestriccionDTO;

public class PrivilegioDiaRestriccionDTO {

	private String privilegio;
	private List<DiaRestriccionDTO> diasRestriccion;

	public String getPrivilegio() {
		return privilegio;
	}

	public void setPrivilegio(String privilegio) {
		this.privilegio = privilegio;
	}

	public List<DiaRestriccionDTO> getDiasRestriccion() {
		return diasRestriccion;
	}

	public void setDiasRestriccion(List<DiaRestriccionDTO> diasRestriccion) {
		this.diasRestriccion = diasRestriccion;
	}

}
