package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class DriverDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String validacion;

    public String getValidacion() {
        return validacion;
    }

    public void setValidacion(String validacion) {
        this.validacion = validacion;
    }

}
