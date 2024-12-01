package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * Author: Elvis Fontalvo - 12-07-2019 - DTO de la información de Cargo lots para validacion
 * 
 */
public class CargoValidationDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String hbl;
    private String agente;
    private String destination;
    private String isGroup;

    public String getHbl() {
        return hbl;
    }

    public void setHbl(String hbl) {
        this.hbl = hbl;
    }

    public String getAgente() {
        return agente;
    }

    public void setAgente(String agente) {
        this.agente = agente;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getIsGroup() {
        return isGroup;
    }

    public void setIsGroup(String isGroup) {
        this.isGroup = isGroup;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

}
