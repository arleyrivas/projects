/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  23 de mar. de 2016 - 8:28:32 a. m.
 */
package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spia.businessportal.common.audit.IAuditLog;

/**
 * @author leandro
 *
 */
public class InvoicePortal implements IAuditLog {

    private static final Log LOG = LogFactory.getLog(InvoicePortal.class);

    private Long id;
    private String status;
    private String referenceCode;
    private Float ammount;
    private Date date;
    private String paymentMethod;
    private String bank;
    private String cus;
    private String creditCard;
    private Integer quotas;
    private String errorCode;
    private String errorMessage;
    private String approvalNumber;
    private Integer paymentAttempt;
    private Date lastPaymentAttempt;
    private String ip;
    private String n4FinalNbrs;
    private String companyName;
    private String payuAttended;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getReferenceCode() {
        return referenceCode;
    }

    public void setReferenceCode(String referenceCode) {
        this.referenceCode = referenceCode;
    }

    public Float getAmmount() {
        return ammount;
    }

    public void setAmmount(Float ammount) {
        this.ammount = ammount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public String getCus() {
        return cus;
    }

    public void setCus(String cus) {
        this.cus = cus;
    }

    public String getCreditCard() {
        return creditCard;
    }

    public void setCreditCard(String creditCard) {
        this.creditCard = creditCard;
    }

    public Integer getQuotas() {
        return quotas;
    }

    public void setQuotas(Integer quotas) {
        this.quotas = quotas;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public void createReferenceCode(String suffix, Long maxId) {
        this.referenceCode = suffix + "-" + maxId;
    }

    public String getApprovalNumber() {
        return approvalNumber;
    }

    public void setApprovalNumber(String approvalNumber) {
        this.approvalNumber = approvalNumber;
    }

    public Integer getPaymentAttempt() {
        return paymentAttempt;
    }

    public void setPaymentAttempt(Integer paymentAttempt) {
        this.paymentAttempt = paymentAttempt;
    }

    public Date getLastPaymentAttempt() {
        return lastPaymentAttempt;
    }

    public void setLastPaymentAttempt(Date lastPaymentAttempt) {
        this.lastPaymentAttempt = lastPaymentAttempt;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getN4FinalNbrs() {
        return n4FinalNbrs;
    }

    public void setN4FinalNbrs(String n4FinalNbrs) {
        this.n4FinalNbrs = n4FinalNbrs;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getPayuAttended() {
        return payuAttended;
    }

    public void setPayuAttended(String payuAttended) {
        this.payuAttended = payuAttended;
    }

    @Override
    @JsonIgnore
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

    @Override
    @JsonIgnore
    public String getClassName() {
        return this.getClass().getName();
    }

}
