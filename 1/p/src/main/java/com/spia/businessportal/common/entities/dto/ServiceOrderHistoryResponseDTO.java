package com.spia.businessportal.common.entities.dto;

import java.util.List;

public class ServiceOrderHistoryResponseDTO {
	
	private String bl_hbl_booking;
	private String id_cliente;
	private String nombre_cliente;
	private List<ServiceOrderHistoryConsultDTO> serviceOrderInfo;
	
	public String getBl_hbl_booking() {
		return bl_hbl_booking;
	}
	public void setBl_hbl_booking(String bl_hbl_booking) {
		this.bl_hbl_booking = bl_hbl_booking;
	}
	public String getId_cliente() {
		return id_cliente;
	}
	public void setId_cliente(String id_cliente) {
		this.id_cliente = id_cliente;
	}
	public String getNombre_cliente() {
		return nombre_cliente;
	}
	public void setNombre_cliente(String nombre_cliente) {
		this.nombre_cliente = nombre_cliente;
	}
	public List<ServiceOrderHistoryConsultDTO> getServiceOrderInfo() {
		return serviceOrderInfo;
	}
	public void setServiceOrderInfo(List<ServiceOrderHistoryConsultDTO> serviceOrderInfo) {
		this.serviceOrderInfo = serviceOrderInfo;
	}
	
}
