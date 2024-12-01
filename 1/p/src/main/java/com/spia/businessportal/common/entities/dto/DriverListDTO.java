package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.List;

public class DriverListDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private List<DriverDTO> validacion;

    public List<DriverDTO> getValidacion() {
        return validacion;
    }

    public void setValidacion(List<DriverDTO> validacion) {
        this.validacion = validacion;
    }

}
