/**
 * 
 */
package com.spia.businessportal.common.filters;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;

import ar.com.fluxit.framework.common.filter.Filter;

/**
 * Implementación de la {@link ar.com.fluxit.framework.common.filter.Filter} para truckingCompany
 * 
 * @author diego
 *
 */
public class TruckingCompanyFilter implements Filter {

    private String truckingId;
    private List<String> truckingIds;

    /**
     * 
     */
    public TruckingCompanyFilter() {
        super();
    }

    @Override
    public void fillCriteria(Criteria criteria) {
        if (this.getTruckingId() != null) {
            criteria.add(Restrictions.eq("truckingId", this.getTruckingId()));
        }

        if (truckingId == null) {
            criteria.add(Restrictions.eq("active", true));
            criteria.createAlias("this.permissions", "permissions");
            criteria.add(Restrictions.eq("permissions.code", "COMPANY_TYPE_TRUCK"));
        }

        if (this.getTruckingIds() != null) {
            criteria.add(Restrictions.in("n4UserId", this.getTruckingIds()));
        }
    }

    @Override
    public void fillCriteriaNotPagination(Criteria criteria) {
    }

    public String getTruckingId() {
        return truckingId;
    }

    public void setTruckingId(String truckingId) {
        this.truckingId = truckingId;
    }

    public List<String> getTruckingIds() {
        return truckingIds;
    }

    public void setTruckingIds(List<String> truckingIds) {
        this.truckingIds = truckingIds;
    }

}
