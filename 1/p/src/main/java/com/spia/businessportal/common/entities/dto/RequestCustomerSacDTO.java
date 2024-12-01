package com.spia.businessportal.common.entities.dto;

public class RequestCustomerSacDTO {

    private String gkeyRequest;
    private String gkeyCustomer;
    private String requestNumber;
    private String requestDateTime;
    private String requestingCompany;
    private String updatedCompany;
    private String request_flow;
    private String status;
    private String documents;
    private String requestInfo;
    private String modifiedByUser;
    private String contactEmail;
    private String requestType;



    public RequestCustomerSacDTO() {
    }


    public RequestCustomerSacDTO(String gkeyRequest, String gkeyCustomer, String requestNumber, String requestDateTime, String requestingCompany, String updatedCompany, String request_flow, String status, String documents, String requestInfo, String modifiedByUser, String contactEmail, String requestType) {
        this.gkeyRequest = gkeyRequest;
        this.gkeyCustomer = gkeyCustomer;
        this.requestNumber = requestNumber;
        this.requestDateTime = requestDateTime;
        this.requestingCompany = requestingCompany;
        this.updatedCompany = updatedCompany;
        this.request_flow = request_flow;
        this.status = status;
        this.documents = documents;
        this.requestInfo = requestInfo;
        this.modifiedByUser = modifiedByUser;
        this.contactEmail = contactEmail;
        this.requestType = requestType;
    }

    public String getGkeyRequest() {
        return gkeyRequest;
    }

    public void setGkeyRequest(String gkeyRequest) {
        this.gkeyRequest = gkeyRequest;
    }

    public String getGkeyCustomer() {
        return gkeyCustomer;
    }

    public void setGkeyCustomer(String gkeyCustomer) {
        this.gkeyCustomer = gkeyCustomer;
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

    public String getRequestingCompany() {
        return requestingCompany;
    }

    public void setRequestingCompany(String requestingCompany) {
        this.requestingCompany = requestingCompany;
    }

    public String getUpdatedCompany() {
        return updatedCompany;
    }

    public void setUpdatedCompany(String updatedCompany) {
        this.updatedCompany = updatedCompany;
    }

    public String getRequest_flow() {
        return request_flow;
    }

    public void setRequest_flow(String request_flow) {
        this.request_flow = request_flow;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDocuments() {
        return documents;
    }

    public void setDocuments(String documents) {
        this.documents = documents;
    }

    public String getRequestInfo() {
        return requestInfo;
    }

    public void setRequestInfo(String requestInfo) {
        this.requestInfo = requestInfo;
    }

    public String getModifiedByUser() {
        return modifiedByUser;
    }

    public void setModifiedByUser(String modifiedByUser) {
        this.modifiedByUser = modifiedByUser;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getRequestType() {
        return requestType;
    }

    public void setRequestType(String requestType) {
        this.requestType = requestType;
    }
}
