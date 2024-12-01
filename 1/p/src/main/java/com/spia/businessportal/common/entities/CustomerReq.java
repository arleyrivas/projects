package com.spia.businessportal.common.entities;

public class CustomerReq {

    private String principalNit;
    private String secondaryNit;

    public String getPrincipalNit() {
        return principalNit;
    }

    public void setPrincipalNit(String principalNit) {
        this.principalNit = principalNit;
    }

    public String getSecondaryNit() {
        return secondaryNit;
    }

    public void setSecondaryNit(String secondaryNit) {
        this.secondaryNit = secondaryNit;
    }
}

