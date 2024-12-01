package com.spia.businessportal.common.filters;

import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;

import com.spia.businessportal.common.entities.TruckUser;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import ar.com.fluxit.framework.common.filter.Filter;

/**
 * Implementación de {@link ar.com.fluxit.framework.common.filter.Filter} para la clase Pin
 * 
 * @author leandro
 *
 */
public class PinFilter implements Filter {

    private Long id;
    private String hashValue;
    private UsuarioLoginDTO createdBy;
    private TruckUser truckingCompany;
    private String pinNbr;
    private String unitNbr;
    private String blNbr;
    private List<String> unitList;
    private String edo;
    private String ero;
    private Boolean deleted;
    private Boolean active;
    private Boolean pinContainerizedActive;
    private String consignee;
    private boolean isExpo;
    private boolean isImpo;
    private boolean isEdo;
    private boolean isEro;
    private boolean isBreakBulk;
    private boolean isNotBreakBulk;
    private Boolean isBreakBulkActive;
    private String category;
    private Date fromDate;
    private Date toDate;
    private String createdByLDAP;
    private String createdByCompanyLDAP;
    private String truckingCompanyLDAP;
    private String frghtKind;

    /**
     * 
     */
    public PinFilter() {
        super();
    }

    /*
     * (non-Javadoc)
     * 
     * @see ar.com.fluxit.framework.common.filter.Filter#fillCriteria(org.hibernate.Criteria)
     */
    @Override
    public void fillCriteria(Criteria criteria) {
        criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
        criteria.createAlias("this.pinContainerized", "pinContainerized", CriteriaSpecification.LEFT_JOIN);
        criteria.createAlias("this.pinBreakBulk", "pinBreakBulk", CriteriaSpecification.LEFT_JOIN);

        if (this.getId() != null) {
            criteria.add(Restrictions.eq("id", this.getId()));
        }

        if (this.getHashValue() != null) {
            criteria.add(Restrictions.like("hashValue", this.getHashValue(), MatchMode.END));
        }
        if (this.getPinNbr() != null) {
            criteria.add(Restrictions.eq("pinNbr", this.getPinNbr()));
        }

        if (this.getDeleted() != null) {
            criteria.add(Restrictions.eq("deleted", false));
        }

        if (this.getActive() != null) {
            criteria.add(Restrictions.eq("active", this.getActive().booleanValue()));
        }

        if (this.getPinContainerizedActive() != null) {
            criteria.add(Restrictions.eq("pinContainerized.active", true));
        }

        if (this.getTruckingCompany() != null) {
            criteria.add(Restrictions.eq("truckingCompany", this.getTruckingCompany()));
        }

        if (this.getTruckingCompanyLDAP() != null) {
            criteria.add(Restrictions.eq("truckingCompanyLDAP", this.getTruckingCompanyLDAP()));
        }

        if (this.getCreatedByLDAP() != null) {
            criteria.add(Restrictions.eq("createdByLDAP", this.getCreatedByLDAP()));
        }

        if (this.getCreatedByCompanyLDAP() != null) {
            criteria.add(Restrictions.eq("createdByCompanyLDAP", this.getCreatedByCompanyLDAP()));
        }

        if (this.getUnitNbr() != null) {
            criteria.add(Restrictions.eq("pinContainerized.unitNbr", this.getUnitNbr()));
        }

        if (this.getUnitList() != null) {
            criteria.add(Restrictions.in("pinContainerized.unitNbr", this.getUnitList()));
        }

        if (this.getEdo() != null) {
            criteria.add(Restrictions.eq("edoNbr", this.getEdo()));
        }

        if (this.getEro() != null) {
            criteria.add(Restrictions.eq("eroNbr", this.getEro()));
        }

        if (this.isEdo) {
            criteria.add(Restrictions.isNotNull("edoNbr"));
        }

        if (this.isEro) {
            criteria.add(Restrictions.isNotNull("eroNbr"));
        }

        if (this.isExpo) {
            criteria.add(Restrictions.isNotNull("bkgNbr"));
        }

        if (this.isImpo) {
            criteria.add(Restrictions.isNull("edoNbr"));
            criteria.add(Restrictions.isNull("bkgNbr"));
            criteria.add(Restrictions.isNull("eroNbr"));
            criteria.add(Restrictions.isEmpty("pinBreakBulk"));
        }

        if (this.getBlNbr() != null) {
            criteria.add(Restrictions.eq("blNbr", this.getBlNbr()));
        }

        if (this.isBreakBulk()) {
            criteria.add(Restrictions.isNotEmpty("pinBreakBulk"));
        }

        if (this.isNotBreakBulk()) {
            criteria.add(Restrictions.isEmpty("pinBreakBulk"));
        }

        if (this.getCategory() != null) {
            criteria.add(Restrictions.eq("pinBreakBulk.category", this.getCategory()));
        }

        if (this.isBreakBulkActive() != null) {
            criteria.add(Restrictions.eq("pinBreakBulk.active", this.isBreakBulkActive().booleanValue()));
        }

        if (this.getToDate() != null) {
            criteria.add(Restrictions.le("createdAt", this.getToDate()));
        }

        if (this.getFromDate() != null) {
            criteria.add(Restrictions.ge("createdAt", this.getFromDate()));
        }

        if (this.getConsignee() != null) {
            criteria.add(Restrictions.eq("consignee", this.getConsignee()));
        }

        if (this.getFrghtKind() != null) {
            criteria.add(Restrictions.eq("frghtKind", this.getFrghtKind()));
        }
    }

    @Override
    public void fillCriteriaNotPagination(Criteria criteria) {
        criteria.addOrder(Property.forName("createdAt").desc());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHashValue() {
        return hashValue;
    }

    public void setHashValue(String hashValue) {
        this.hashValue = hashValue;
    }

    public UsuarioLoginDTO getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(UsuarioLoginDTO createdBy) {
        this.createdBy = createdBy;
    }

    public String getPinNbr() {
        return pinNbr;
    }

    public void setPinNbr(String pinNbr) {
        this.pinNbr = pinNbr;
    }

    public String getUnitNbr() {
        return unitNbr;
    }

    public void setUnitNbr(String unitNbr) {
        this.unitNbr = unitNbr;
    }

    public List<String> getUnitList() {
        return unitList;
    }

    public void setUnitList(List<String> unitList) {
        this.unitList = unitList;
    }

    public TruckUser getTruckingCompany() {
        return truckingCompany;
    }

    public void setTruckingCompany(TruckUser truckingCompany) {
        this.truckingCompany = truckingCompany;
    }

    public String getEdo() {
        return edo;
    }

    public void setEdo(String edo) {
        this.edo = edo;
    }

    public String getEro() {
        return ero;
    }

    public void setEro(String ero) {
        this.ero = ero;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public boolean isExpo() {
        return isExpo;
    }

    public void setExpo(boolean isExpo) {
        this.isExpo = isExpo;
    }

    public boolean isImpo() {
        return isImpo;
    }

    public void setImpo(boolean isImpo) {
        this.isImpo = isImpo;
    }

    public boolean getIsEdo() {
        return isEdo;
    }

    public boolean getIsEro() {
        return isEro;
    }

    public void setIsEdo(boolean isEdo) {
        this.isEdo = isEdo;
    }

    public void setIsEro(boolean isEro) {
        this.isEro = isEro;
    }

    public String getBlNbr() {
        return blNbr;
    }

    public void setBlNbr(String blNbr) {
        this.blNbr = blNbr;
    }

    public boolean isBreakBulk() {
        return isBreakBulk;
    }

    public void setBreakBulk(boolean isBreakBulk) {
        this.isBreakBulk = isBreakBulk;
    }

    public boolean isNotBreakBulk() {
        return isNotBreakBulk;
    }

    public void setNotBreakBulk(boolean isNotBreakBulk) {
        this.isNotBreakBulk = isNotBreakBulk;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Boolean isBreakBulkActive() {
        return isBreakBulkActive;
    }

    public void setBreakBulkActive(Boolean isBreakBulkActive) {
        this.isBreakBulkActive = isBreakBulkActive;
    }

    public String getConsignee() {
        return consignee;
    }

    public void setConsignee(String consignee) {
        this.consignee = consignee;
    }

    public Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }

    public Date getToDate() {
        return toDate;
    }

    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }

    public Boolean getPinContainerizedActive() {
        return pinContainerizedActive;
    }

    public void setPinContainerizedActive(Boolean pinContainerizedActive) {
        this.pinContainerizedActive = pinContainerizedActive;
    }

    public String getCreatedByLDAP() {
        return createdByLDAP;
    }

    public void setCreatedByLDAP(String createdByLDAP) {
        this.createdByLDAP = createdByLDAP;
    }

    public String getTruckingCompanyLDAP() {
        return truckingCompanyLDAP;
    }

    public void setTruckingCompanyLDAP(String truckingCompanyLDAP) {
        this.truckingCompanyLDAP = truckingCompanyLDAP;
    }

    public String getCreatedByCompanyLDAP() {
        return createdByCompanyLDAP;
    }

    public void setCreatedByCompanyLDAP(String createdByCompanyLDAP) {
        this.createdByCompanyLDAP = createdByCompanyLDAP;
    }

	public String getFrghtKind() {
		return frghtKind;
	}

	public void setFrghtKind(String frghtKind) {
		this.frghtKind = frghtKind;
	}

}
