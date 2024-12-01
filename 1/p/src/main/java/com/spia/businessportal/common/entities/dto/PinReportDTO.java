package com.spia.businessportal.common.entities.dto;

import java.util.List;

/**
 * Entidad para la impresión del reporte de pin.
 * 
 * @author leandro
 *
 */
public class PinReportDTO {

		private String agentName;
		private String truckingCompanyName;
		private String blNbr;
		private List<String> unitNbr;
		private String pinNbr;
		private List<String> unitType;
		private String conductor;
		private String placa;
		private List<String> quantity;
		private List<String> commodity;
		private List<String> weight;
		
		
		/**
		 * 
		 */
		public PinReportDTO() {
			super();
		}
		public List<String> getUnitType() {
			return unitType;
		}
		public void setUnitType(List<String> unitType) {
			this.unitType = unitType;
		}
		public String getAgentName() {
			return agentName;
		}
		public void setAgentName(String agentName) {
			this.agentName = agentName;
		}
		public String getTruckingCompanyName() {
			return truckingCompanyName;
		}
		public void setTruckingCompanyName(String truckingCompanyName) {
			this.truckingCompanyName = truckingCompanyName;
		}
		public String getBlNbr() {
			return blNbr;
		}
		public void setBlNbr(String blNbr) {
			this.blNbr = blNbr;
		}
		public List<String> getUnitNbr() {
			return unitNbr;
		}
		public void setUnitNbr(List<String> unitNbr) {
			this.unitNbr = unitNbr;
		}
		public String getPinNbr() {
			return pinNbr;
		}
		public void setPinNbr(String pinNbr) {
			this.pinNbr = pinNbr;
		}
		public String getConductor() {
			return conductor;
		}
		public void setConductor(String conductor) {
			this.conductor = conductor;
		}
		public String getPlaca() {
			return placa;
		}
		public void setPlaca(String placa) {
			this.placa = placa;
		}
		public List<String> getQuantity() {
			return quantity;
		}
		public void setQuantity(List<String> quantity) {
			this.quantity = quantity;
		}
		public List<String> getCommodity() {
			return commodity;
		}
		public void setCommodity(List<String> commodity) {
			this.commodity = commodity;
		}
		public List<String> getWeight() {
			return weight;
		}
		public void setWeight(List<String> weight) {
			this.weight = weight;
		}
	}
	
