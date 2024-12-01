package com.spia.businessportal.common.entities.dto;

public class RequestCustomerDTO {

    private String gkeyRequest;
    private String request;
    private String last_update;
    private String creator;
    private String status;
    private String nit;
    private String name;
    private String information;
    private String info_status;
    private String request_flow;


    public RequestCustomerDTO() {
    }

    public RequestCustomerDTO(String gkeyRequest, String request, String last_update, String creator, String status, String nit, String name, String information, String info_status, String request_flow) {
        this.gkeyRequest = gkeyRequest;
        this.request = request;
        this.last_update = last_update;
        this.creator = creator;
        this.status = status;
        this.nit = nit;
        this.name = name;
        this.information = information;
        this.info_status = info_status;
        this.request_flow = request_flow;
    }

    public String getGkeyRequest() {
        return gkeyRequest;
    }

    public void setGkeyRequest(String gkeyRequest) {
        this.gkeyRequest = gkeyRequest;
    }

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }

    public String getLast_update() {
        return last_update;
    }

    public void setLast_update(String last_update) {
        this.last_update = last_update;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInformation() {
        return information;
    }

    public void setInformation(String information) {
        this.information = information;
    }

    public String getInfo_status() {
        return info_status;
    }

    public void setInfo_status(String info_status) {
        this.info_status = info_status;
    }

    public String getRequest_flow() {
        return request_flow;
    }

    public void setRequest_flow(String request_flow) {
        this.request_flow = request_flow;
    }
}