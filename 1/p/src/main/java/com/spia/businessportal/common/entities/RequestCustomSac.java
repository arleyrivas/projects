package com.spia.businessportal.common.entities;

public class RequestCustomSac {

    private String requestType;
    private String requestStatus;
    private String startDate;
    private String endDate;


    public RequestCustomSac(String requestType, String requestStatus, String startDate, String endDate) {
        this.requestType = requestType;
        this.requestStatus = requestStatus;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public RequestCustomSac() {
    }

    public String getRequestType() {
        return requestType;
    }

    public void setRequestType(String requestType) {
        this.requestType = requestType;
    }

    public String getRequestStatus() {
        return requestStatus;
    }

    public void setRequestStatus(String requestStatus) {
        this.requestStatus = requestStatus;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}
