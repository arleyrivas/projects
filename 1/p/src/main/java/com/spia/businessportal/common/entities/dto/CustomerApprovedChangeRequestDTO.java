package com.spia.businessportal.common.entities.dto;

public class CustomerApprovedChangeRequestDTO {
    private String requestNumber;
    private String requestDateTime;
    private String nit;
    private String updatedCompany;
    private String requestInfo;
    private String requestFlow;


    public CustomerApprovedChangeRequestDTO() {
    }

    public String getRequestNumber() {
        return requestNumber;
    }

    public void setRequestNumber(String requestNumber) {
        this.requestNumber = requestNumber;
    }

    public String getRequestDateTime() {
        return requestDateTime;
    }

    public void setRequestDateTime(String requestDateTime) {
        this.requestDateTime = requestDateTime;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getUpdatedCompany() {
        return updatedCompany;
    }

    public void setUpdatedCompany(String updatedCompany) {
        this.updatedCompany = updatedCompany;
    }

    public String getRequestInfo() {
        return requestInfo;
    }

    public void setRequestInfo(String requestInfo) {
        this.requestInfo = requestInfo;
    }

    public String getRequestFlow() {
        return requestFlow;
    }

    public void setRequestFlow(String requestFlow) {
        this.requestFlow = requestFlow;
    }
}
