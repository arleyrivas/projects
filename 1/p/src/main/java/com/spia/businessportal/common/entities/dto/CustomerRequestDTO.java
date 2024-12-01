package com.spia.businessportal.common.entities.dto;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.util.Date;

public class CustomerRequestDTO {

    private static final Log LOG = LogFactory.getLog(CustomerRequestDTO.class);

    private String requestId;
    private String customerId;
    private String creatorId;
    private String creatorUserId;
    private Date createdAt;
    private String contactName;
    private String contactEmail;
    private String contactPhone;
    private String requestStatus;
    private String requestInfo;
    private String infoStatus;
    private String requestFlow;
    private Date finalizedAt;
    private Integer representedByAgent;
    private String requestType;




    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(String creatorId) {
        this.creatorId = creatorId;
    }

    public String getCreatorUserId() {
        return creatorUserId;
    }

    public void setCreatorUserId(String creatorUserId) {
        this.creatorUserId = creatorUserId;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getRequestStatus() {
        return requestStatus;
    }

    public void setRequestStatus(String requestStatus) {
        this.requestStatus = requestStatus;
    }

    public String getRequestInfo() {
        return requestInfo;
    }

    public void setRequestInfo(String requestInfo) {
        this.requestInfo = requestInfo;
    }

    public String getInfoStatus() {
        return infoStatus;
    }

    public void setInfoStatus(String infoStatus) {
        this.infoStatus = infoStatus;
    }

    public String getRequestFlow() {
        return requestFlow;
    }

    public void setRequestFlow(String requestFlow) {
        this.requestFlow = requestFlow;
    }

    public Date getFinalizedAt() {
        return finalizedAt;
    }

    public void setFinalizedAt(Date finalizedAt) {
        this.finalizedAt = finalizedAt;
    }

    public Integer getRepresentedByAgent() {
        return representedByAgent;
    }

    public void setRepresentedByAgent(Integer representedByAgent) {
        this.representedByAgent = representedByAgent;
    }

    public String getRequestType() {
        return requestType;
    }

    public void setRequestType(String requestType) {
        this.requestType = requestType;
    }

    @Override
    public String toString() {
        return "CustomerRequestDTO{" +
                "requestId='" + requestId + '\'' +
                ", customerId='" + customerId + '\'' +
                ", creatorId='" + creatorId + '\'' +
                ", creatorUserId='" + creatorUserId + '\'' +
                ", createdAt=" + createdAt +
                ", contactName='" + contactName + '\'' +
                ", contactEmail='" + contactEmail + '\'' +
                ", contactPhone='" + contactPhone + '\'' +
                ", requestStatus='" + requestStatus + '\'' +
                ", requestInfo='" + requestInfo + '\'' +
                ", infoStatus='" + infoStatus + '\'' +
                ", requestFlow='" + requestFlow + '\'' +
                ", finalizedAt=" + finalizedAt +
                ", representedByAgent=" + representedByAgent +
                ", requestType='" + requestType + '\'' +
                '}';
    }
}
