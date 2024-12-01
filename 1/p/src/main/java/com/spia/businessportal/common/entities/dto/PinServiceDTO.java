package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;

public class PinServiceDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String id;
    private Date createdAt;
    private String createdByLDAP;
    private String blNbr;
    private String createdByCompanyLDAP;
    private String pinNbr;
    private String bkgNbr;
    private String eroNbr;
    private String edoNbr;
    private Boolean active;
    private Boolean deleted;
    private String unitNbr;
    private Boolean twenty;
    private String isoType;
    private String truckingCompanyLDAP;
    private String truckingCompanyNameLDAP;
    private String type_pin;
    

    public String getType_pin() {
        return type_pin;
    }

    public void setType_pin(String type_pin) {
        this.type_pin = type_pin;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getCreatedByLDAP() {
        return createdByLDAP;
    }

    public void setCreatedByLDAP(String createdByLDAP) {
        this.createdByLDAP = createdByLDAP;
    }

    public String getBlNbr() {
        return blNbr;
    }

    public void setBlNbr(String blNbr) {
        this.blNbr = blNbr;
    }

    public String getCreatedByCompanyLDAP() {
        return createdByCompanyLDAP;
    }

    public void setCreatedByCompanyLDAP(String createdByCompanyLDAP) {
        this.createdByCompanyLDAP = createdByCompanyLDAP;
    }

    public String getPinNbr() {
        return pinNbr;
    }

    public void setPinNbr(String pinNbr) {
        this.pinNbr = pinNbr;
    }

    public String getBkgNbr() {
        return bkgNbr;
    }

    public void setBkgNbr(String bkgNbr) {
        this.bkgNbr = bkgNbr;
    }

    public String getEroNbr() {
        return eroNbr;
    }

    public void setEroNbr(String eroNbr) {
        this.eroNbr = eroNbr;
    }

    public String getEdoNbr() {
        return edoNbr;
    }

    public void setEdoNbr(String edoNbr) {
        this.edoNbr = edoNbr;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

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

    public String getTruckingCompanyLDAP() {
        return truckingCompanyLDAP;
    }

    public void setTruckingCompanyLDAP(String truckingCompanyLDAP) {
        this.truckingCompanyLDAP = truckingCompanyLDAP;
    }

    public String getTruckingCompanyNameLDAP() {
        return truckingCompanyNameLDAP;
    }

    public void setTruckingCompanyNameLDAP(String truckingCompanyNameLDAP) {
        this.truckingCompanyNameLDAP = truckingCompanyNameLDAP;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

}
