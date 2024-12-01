/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  26 de ene. de 2016 - 10:14:01 a. m.
 */
package com.spia.businessportal.common.filters;

import org.hibernate.Criteria;
import org.hibernate.Hibernate;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.type.Type;

import ar.com.fluxit.framework.common.filter.Filter;

/**
 * @author leandro
 *
 */
public class TruckVisitAppointmentBreakBulkFilter implements Filter {

    private String pin;
    private boolean sum;
    private boolean active;
    private String state;
    private String truckVisitAppointmentNbr;

    @Override
    public void fillCriteria(Criteria criteria) {

        if (this.isSum()) {
            criteria.setProjection(Projections.sqlProjection("COALESCE(sum(quantity),0) as quantity",
                    new String[] { "quantity" }, new Type[] { Hibernate.INTEGER }));
        }
        if (this.getPin() != null) {
            criteria.add(Restrictions.eq("pin", this.getPin()));
        }
        /*
         * if(this.getPinNbr() != null){ criteria.createAlias("this.pin", "pin"); criteria.add(Restrictions.eq("pin.pinNbr", this.getPinNbr())); }
         */

        if (this.isActive()) {
            criteria.add(Restrictions.eq("active", this.isActive()));
        }
        if (this.getState() != null) {
            criteria.add(Restrictions.eq("state", this.getState()));
        }
        if (getTruckVisitAppointmentNbr() != null) {
            criteria.add(Restrictions.eq("truckVisitAppointmentNbr", this.getTruckVisitAppointmentNbr()));
        }

    }

    @Override
    public void fillCriteriaNotPagination(Criteria criteria) {

    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public boolean isSum() {
        return sum;
    }

    public void setSum(boolean sum) {
        this.sum = sum;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getTruckVisitAppointmentNbr() {
        return truckVisitAppointmentNbr;
    }

    public void setTruckVisitAppointmentNbr(String truckVisitAppointmentNbr) {
        this.truckVisitAppointmentNbr = truckVisitAppointmentNbr;
    }

}
