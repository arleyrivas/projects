/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de ene. de 2016 - 10:18:22 a. m.
 */
package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.spia.businessportal.common.audit.IAuditLog;

/**
 * @author leandro Entidad para relacionar Pin con elementos de carga suelta
 */
public class PinBreakBulk implements IAuditLog {

    private static final Log LOG = LogFactory.getLog(PinBreakBulk.class);

    private Long id;
    @JsonBackReference
    private Pin pin;
    private Long quantity;
    private String commodity;
    private String category;
    private boolean active;
    private String observation;
    private String truckingCompanyLDAP;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Pin getPin() {
        return pin;
    }

    public void setPin(Pin pin) {
        this.pin = pin;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public String getCommodity() {
        return commodity;
    }

    public void setCommodity(String commodity) {
        this.commodity = commodity;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }

    @Override
    public String getLogDetail() {
        StringBuilder sb = new StringBuilder();
        Field[] fields = this.getClass().getDeclaredFields();
        for (Field field : fields) {
            try {
                if (field.get(this) != null) {
                    sb.append(field.getName()).append(":").append(field.get(this).toString()).append("\n");
                }
            } catch (IllegalArgumentException | IllegalAccessException e) {
                LOG.error(e.getStackTrace());
            }
        }
        return sb.toString();
    }

    @Override
    public String getClassName() {
        return this.getClass().getName();
    }

    /**
     * @return the truckingCompanyLDAP
     */
    public String getTruckingCompanyLDAP() {
        return truckingCompanyLDAP;
    }

    /**
     * @param truckingCompanyLDAP
     *            the truckingCompanyLDAP to set
     */
    public void setTruckingCompanyLDAP(String truckingCompanyLDAP) {
        this.truckingCompanyLDAP = truckingCompanyLDAP;
    }

}
