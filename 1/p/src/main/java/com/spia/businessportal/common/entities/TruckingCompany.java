package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spia.businessportal.common.audit.IAuditLog;

/**
 * @author leandro
 *
 */
public class TruckingCompany implements IAuditLog {

    private static final Log LOG = LogFactory.getLog(TruckingCompany.class);

    private Long id;
    private String truckingId;
    private String name;

    public TruckingCompany() {
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTruckingId() {
        return truckingId;
    }

    public void setTruckingId(String truckingId) {
        this.truckingId = truckingId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TruckingCompany(String truckingId, String name) {
        super();
        this.truckingId = truckingId;
        this.name = name;
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
