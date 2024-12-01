/**
 * 
 */
package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spia.businessportal.common.audit.IAuditLog;

/**
 * @author diego
 *
 */
public class BillOfLading implements IAuditLog {

    private static final Log LOG = LogFactory.getLog(BillOfLading.class);

    private Long id;
    private String nbr;
    private List<String> units;

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

    public List<String> getUnits() {
        return units;
    }

    public void setUnits(List<String> units) {
        this.units = units;
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
