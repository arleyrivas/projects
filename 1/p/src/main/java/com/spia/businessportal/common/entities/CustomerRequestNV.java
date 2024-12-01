package com.spia.businessportal.common.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spia.businessportal.common.audit.IAuditLog;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

public class CustomerRequestNV implements IAuditLog {

    private static final Log LOG = LogFactory.getLog(CustomerRequestNV.class);

    private Long id;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    @JsonIgnore
    @Override
    public String getLogDetail() {
        String[] arr = {};
        List<String> excludedFields = Arrays.asList(arr);
        StringBuilder sb = new StringBuilder();
        Field[] fields = this.getClass().getDeclaredFields();
        for (Field field : fields) {
            try {
                if (field.get(this) != null && !excludedFields.contains(field.getName()))
                    sb.append(field.getName()).append(":").append(field.get(this).toString()).append("\n");
            } catch (IllegalArgumentException | IllegalAccessException e) {
                LOG.error(e.getStackTrace());
            }
        }
        return sb.toString();
    }

    @JsonIgnore
    @Override
    public String getClassName() {
        return this.getClass().getName();
    }
}
