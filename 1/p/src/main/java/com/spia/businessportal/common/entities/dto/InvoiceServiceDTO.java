package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class InvoiceServiceDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String gkey;
    private String finalNumber;
    private String finalizedDate;
    private String totalTotal;
    private String statusPay;
    private String customergkey;
    private String name;

    public String getGkey() {
        return gkey;
    }

    public void setGkey(String gkey) {
        this.gkey = gkey;
    }

    public String getFinalNumber() {
        return finalNumber;
    }

    public void setFinalNumber(String finalNumber) {
        this.finalNumber = finalNumber;
    }

    public String getFinalizedDate() {
        return finalizedDate;
    }

    public void setFinalizedDate(String finalizedDate) {
        this.finalizedDate = finalizedDate;
    }

    public String getTotalTotal() {
        return totalTotal;
    }

    public void setTotalTotal(String totalTotal) {
        this.totalTotal = totalTotal;
    }

    public String getStatusPay() {
        return statusPay;
    }

    public void setStatusPay(String statusPay) {
        this.statusPay = statusPay;
    }

    public String getCustomergkey() {
        return customergkey;
    }

    public void setCustomergkey(String customergkey) {
        this.customergkey = customergkey;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

}
