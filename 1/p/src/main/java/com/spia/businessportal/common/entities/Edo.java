/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  14 de oct. de 2015 - 2:33:57 p. m.
 */
package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spia.businessportal.common.audit.IAuditLog;
import com.spia.services.entities.UnitFacilityVisit;

/**
 * @author leandro
 *
 */
public class Edo implements IAuditLog {

    private static final Log LOG = LogFactory.getLog(Edo.class);

    private String nbr;
    private List<UnitFacilityVisit> units;

    public String getNbr() {
        return nbr;
    }

    public void setNbr(String nbr) {
        this.nbr = nbr;
    }

    public List<UnitFacilityVisit> getUnits() {
        return units;
    }

    public void setUnits(List<UnitFacilityVisit> units) {
        this.units = units;
    }

    @Override
    public Long getId() {
        return null;
    }

    @JsonIgnore
    @Override
    public String getLogDetail() {
        StringBuilder sb = new StringBuilder();
        Field[] fields = this.getClass().getDeclaredFields();
        for (Field field : fields) {
            try {
                if (field.get(this) != null)
                    sb.append(field.getName()).append(":").append(field.get(this).toString()).append("\n");
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
