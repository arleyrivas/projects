package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class FinancialDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String idInvoice;
    private Boolean uploadCEN;
    private Boolean generateProforma;

    public String getIdInvoice() {
        return idInvoice;
    }

    public void setIdInvoice(String idInvoice) {
        this.idInvoice = idInvoice;
    }

    public Boolean getUploadCEN() {
        return uploadCEN;
    }

    public void setUploadCEN(Boolean uploadCEN) {
        this.uploadCEN = uploadCEN;
    }

    public Boolean getGenerateProforma() {
        return generateProforma;
    }

    public void setGenerateProforma(Boolean generateProforma) {
        this.generateProforma = generateProforma;
    }

}
