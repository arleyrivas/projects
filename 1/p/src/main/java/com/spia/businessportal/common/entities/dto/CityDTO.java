package com.spia.businessportal.common.entities.dto;
import java.io.Serializable;

public class CityDTO implements Serializable {
    private String depCode;
    private String munName;

    public CityDTO() {
    }

    public CityDTO(String code, String name) {
        this.depCode = code;
        this.munName = name;
    }


    public String getCode() {
        return depCode;
    }

    public void setCode(String code) {
        this.depCode = code;
    }

    public String getName() {
        return munName;
    }

    public void setName(String name) {
        this.munName = name;
    }
}
