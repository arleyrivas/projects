package com.spia.businessportal.common.entities.dto;

public class ServiceOrderHistoryConsultDTO {
	
	private String bl_hbl_booking;
	private String id_cliente;
	private String nombre_cliente;
	private String contenedor_hbl;
	private String f_solicitud;
	private String tipo;
	private String f_servicio;
	private String lugar;
	private String estado;
	
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
	public String getContenedor_hbl() {
		return contenedor_hbl;
	}
	public void setContenedor_hbl(String contenedor_hbl) {
		this.contenedor_hbl = contenedor_hbl;
	}
	public String getF_solicitud() {
		return f_solicitud;
	}
	public void setF_solicitud(String f_solicitud) {
		this.f_solicitud = f_solicitud;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getF_servicio() {
		return f_servicio;
	}
	public void setF_servicio(String f_servicio) {
		this.f_servicio = f_servicio;
	}
	public String getLugar() {
		return lugar;
	}
	public void setLugar(String lugar) {
		this.lugar = lugar;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	
}
