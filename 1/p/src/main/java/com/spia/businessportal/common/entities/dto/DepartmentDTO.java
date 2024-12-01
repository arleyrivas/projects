package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class DepartmentDTO implements Serializable {

    private String depCode;
    private String depName;


    public DepartmentDTO(String depCode, String depName) {
        this.depCode = depCode;
        this.depName = depName;
    }

    public DepartmentDTO() {
    }

    public String getDepCode() {
        return depCode;
    }

    public void setDepCode(String depCode) {
        this.depCode = depCode;
    }

    public String getDepName() {
        return depName;
    }

    public void setDepName(String depName) {
        this.depName = depName;
    }


}
