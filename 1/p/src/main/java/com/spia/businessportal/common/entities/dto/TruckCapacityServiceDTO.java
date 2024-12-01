package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 08/07/2019 Servicio que permite consultar la capacidad de un
 * camion
 * 
 */
public class TruckCapacityServiceDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String vehcapacidad;

    public String getVehcapacidad() {
        return vehcapacidad;
    }

    public void setVehcapacidad(String vehcapacidad) {
        this.vehcapacidad = vehcapacidad;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

}
