package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class TruckValidationDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String data;

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

}
