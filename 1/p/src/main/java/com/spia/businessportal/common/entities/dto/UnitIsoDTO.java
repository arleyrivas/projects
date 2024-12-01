package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 19/12/2018 DTO para registrar las unidades y los Isos de un
 * Bill Of Lading
 * 
 */
public class UnitIsoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String reference;
    private String equipmentType;
    private String unit;
    private String hazard;
    private String sequence;

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getEquipmentType() {
        return equipmentType;
    }

    public void setEquipmentType(String equipmentType) {
        this.equipmentType = equipmentType;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getHazard() {
        return hazard;
    }

    public void setHazard(String hazard) {
        this.hazard = hazard;
    }

    public String getSequence() {
        return sequence;
    }

    public void setSequence(String sequence) {
        this.sequence = sequence;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

}
