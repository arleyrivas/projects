package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class DocumentTypesDTO implements Serializable {

    private String name;
    private String Obligatorio;
    private int file_order;
    private String request_type;

    public DocumentTypesDTO() {
    }


    public DocumentTypesDTO(String name, String Obligatorio, int file_order, String request_type) {
        this.name = name;
        this.Obligatorio = Obligatorio;
        this.file_order = file_order;
        this.request_type = request_type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getObligatorio() {
        return Obligatorio;
    }

    public void setObligatorio(String obligatorio) {
        this.Obligatorio = obligatorio;
    }

    public int getFile_order() {
        return file_order;
    }

    public void setFile_order(int file_order) {
        this.file_order = file_order;
    }

    public String getRequest_type() {
        return request_type;
    }

    public void setRequest_type(String request_type) {
        this.request_type = request_type;
    }
}
