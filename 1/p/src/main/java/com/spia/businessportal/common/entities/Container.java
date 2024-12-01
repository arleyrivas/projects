/**
 * 
 */
package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spia.businessportal.common.audit.IAuditLog;

/**
 * @author diego
 *
 */
public class Container implements IAuditLog {

    private static final Log LOG = LogFactory.getLog(Container.class);

    public static final String TRANS_IMPORT = "Import";
    public static final String TRANS_EXPORT = "Export";
    public static final String TRANS_EMPTY = "Empty";

    private Long id;
    private String nbr;
    private String bl;
    private String vessel;
    private String category;
    private String isoGroup;
    private String shipper;
    private double grossWeight;
    private double height;
    private double length;
    private String customer;
    private boolean Reefer = false;
    private boolean Oog = false;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNbr() {
        return nbr;
    }

    public void setNbr(String nbr) {
        this.nbr = nbr;
    }

    public String getBl() {
        return bl;
    }

    public void setBl(String bl) {
        this.bl = bl;
    }

    public String getVessel() {
        return vessel;
    }

    public void setVessel(String vessel) {
        this.vessel = vessel;
    }

    public boolean isReefer() {
        return Reefer;
    }

    public void setReefer(boolean reefer) {
        Reefer = reefer;
    }

    public boolean isOog() {
        return Oog;
    }

    public void setOog(boolean oog) {
        Oog = oog;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getIsoGroup() {
        return isoGroup;
    }

    public void setIsoGroup(String isoGroup) {
        this.isoGroup = isoGroup;
    }

    public String getShipper() {
        return shipper;
    }

    public void setShipper(String shipper) {
        this.shipper = shipper;
    }

    public double getGrossWeight() {
        return grossWeight;
    }

    public void setGrossWeight(double grossWeight) {
        this.grossWeight = grossWeight;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    @JsonIgnore
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

    @JsonIgnore
    @Override
    public String getClassName() {
        return this.getClass().getName();
    }

}
