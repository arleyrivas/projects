/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  5 de abr. de 2016 - 1:59:12 p. m.
 */
package com.spia.businessportal.common.filters;

import org.hibernate.Criteria;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;

import ar.com.fluxit.framework.common.filter.Filter;

/**
 * @author leandro
 *
 */
public class PinContainerizedFilter implements Filter {

    private String unitNbr;
    private Boolean active;
    private Long id;
    private Long TruckVisitAppointmetId;

    @Override
    public void fillCriteria(Criteria criteria) {
        if (this.getId() != null) {
            criteria.add(Restrictions.eq("id", this.getId()));
        }
        if (this.getActive() != null) {
            criteria.add(Restrictions.eq("active", this.getActive().booleanValue()));
        }
        if (this.getUnitNbr() != null) {
            criteria.add(Restrictions.eq("unitNbr", this.getUnitNbr()));
        }
        if (this.getTruckVisitAppointmetId() != null) {
            criteria.add(Restrictions.eq("TruckVisitAppointmetId", this.getTruckVisitAppointmetId()));
        }
    }

    @Override
    public void fillCriteriaNotPagination(Criteria criteria) {
        criteria.addOrder(Property.forName("id").desc());
    }

    public String getUnitNbr() {
        return unitNbr;
    }

    public void setUnitNbr(String unitNbr) {
        this.unitNbr = unitNbr;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTruckVisitAppointmetId() {
        return TruckVisitAppointmetId;
    }

    public void setTruckVisitAppointmetId(Long truckVisitAppointmetId) {
        TruckVisitAppointmetId = truckVisitAppointmetId;
    }

}
