/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de ene. de 2016 - 11:08:30 a. m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.List;

/**
 * @author leandro
 *
 */
public class PinBreakBulkDTO {

	private String blNbr;
	private List<BreakBulkTruckDTO> breakBulksDTO;
	
	public String getBlNbr() {
		return blNbr;
	}
	public void setBlNbr(String blNbr) {
		this.blNbr = blNbr;
	}
	public List<BreakBulkTruckDTO> getBreakBulksDTO() {
		return breakBulksDTO;
	}
	public void setBreakBulksDTO(List<BreakBulkTruckDTO> breakBulksDTO) {
		this.breakBulksDTO = breakBulksDTO;
	}	
}
