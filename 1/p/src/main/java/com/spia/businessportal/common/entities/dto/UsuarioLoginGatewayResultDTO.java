package com.spia.businessportal.common.entities.dto;

import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

public class UsuarioLoginGatewayResultDTO {

    private String success; 
    private UsuarioLoginDTO result;
    private String error; 

    public UsuarioLoginGatewayResultDTO() { }

    public String getSuccess() {
        return success;
    }

    public void setSuccess(String success) {
        this.success = success;
    }

    public void setResult(UsuarioLoginDTO result) {
        this.result = result;
    }

    public UsuarioLoginDTO getResult() {
        return result;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
