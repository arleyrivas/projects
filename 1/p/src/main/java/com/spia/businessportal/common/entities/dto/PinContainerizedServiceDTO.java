package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

public class PinContainerizedServiceDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String unitNbr;
    private Boolean twenty;
    private String isoType;

    public String getUnitNbr() {
        return unitNbr;
    }

    public void setUnitNbr(String unitNbr) {
        this.unitNbr = unitNbr;
    }

    public Boolean getTwenty() {
        return twenty;
    }

    public void setTwenty(Boolean twenty) {
        this.twenty = twenty;
    }

    public String getIsoType() {
        return isoType;
    }

    public void setIsoType(String isoType) {
        this.isoType = isoType;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

}
