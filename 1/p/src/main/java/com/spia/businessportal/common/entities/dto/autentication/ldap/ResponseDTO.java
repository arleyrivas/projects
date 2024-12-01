package com.spia.businessportal.common.entities.dto.autentication.ldap;

import java.io.Serializable;

public class ResponseDTO implements Serializable {

    private String success;
    private UsuarioLoginDTO result;
    private String error;

    public ResponseDTO() {
    }

    public ResponseDTO(String success, UsuarioLoginDTO result, String error) {
        this.success = success;
        this.result = result;
        this.error = error;
    }

    public String getSuccess() {
        return success;
    }

    public void setSuccess(String success) {
        this.success = success;
    }

    public UsuarioLoginDTO getResult() {
        return result;
    }

    public void setResult(UsuarioLoginDTO result) {
        this.result = result;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}