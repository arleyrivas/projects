/**
 * 
 */
package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.spia.businessportal.common.audit.IAuditLog;
import com.spia.businessportal.web.binding.CustomDateTimeSerializer;
import com.spia.services.entities.Driver;

/**
 * @author diego
 *
 */
public class TruckVisit implements IAuditLog {

    private static final Log LOG = LogFactory.getLog(TruckVisit.class);

    private Long id;
    private String truckVisitNbr;
    private String firstAppointmentImport;
    private String firstContainerImport;
    private Boolean firstContainerImportTwenty;
    private String firstAppointmentImportOrder;
    private String firstTransTypeImport;
    private String secondAppointmentImport;
    private String secondContainerImport;
    private Boolean secondContainerImportTwenty;
    private String secondAppointmentImportOrder;
    private String secondTransTypeImport;
    private String firstAppointmentExport;
    private String firstContainerExport;
    private Boolean firstContainerExportTwenty;
    private String firstAppointmentExportOrder;
    private String secondAppointmentExport;
    private String secondContainerExport;
    private Boolean secondContainerExportTwenty;
    private String secondAppointmentExportOrder;

    private String firstAppointmentEdo;
    private String firstContainerEdo;
    private Boolean firstContainerEdoTwenty;
    private String secondAppointmentEdo;
    private String secondContainerEdo;
    private Boolean secondContainerEdoTwenty;
    private String firstAppointmentEro;
    private String firstContainerEro;
    private Boolean firstContainerEroTwenty;
    private String secondAppointmentEro;
    private String secondContainerEro;
    private Boolean secondContainerEroTwenty;

    private String firstEdoNbr;
    private String secondEdoNbr;
    private String firstEroNbr;
    private String secondEroNbr;

    private Date appointmentDate;
    private Driver driver;
    private String truck;
    private String pinNbr;
    private String createdByLDAP;
    private String companyIdLdap;
    private String isHazard; 
    
    private Boolean skipEmptyRule;
    
    public String getFirstTransTypeImport() {
		return firstTransTypeImport;
	}

	public void setFirstTransTypeImport(String firstTransTypeImport) {
		this.firstTransTypeImport = firstTransTypeImport;
	}

    public String getSecondTransTypeImport() {
		return secondTransTypeImport;
	}

	public void setSecondTransTypeImport(String secondTransTypeImport) {
		this.secondTransTypeImport = secondTransTypeImport;
	}

    public String getIsHazard() {
		return isHazard;
	}

	public void setIsHazard(String isHazard) {
		this.isHazard = isHazard;
	}

    private Boolean canceled = false;
    @JsonManagedReference
    private Set<TruckVisitAppointmentBreakBulk> truckVisitAppointmentBreakBulk = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTruckVisitNbr() {
        return truckVisitNbr;
    }

    public void setTruckVisitNbr(String truckVisitNbr) {
        this.truckVisitNbr = truckVisitNbr;
    }

    public String getFirstAppointmentImport() {
        return firstAppointmentImport;
    }

    public void setFirstAppointmentImport(String firstAppointmentImport) {
        this.firstAppointmentImport = firstAppointmentImport;
    }

    public String getSecondAppointmentImport() {
        return secondAppointmentImport;
    }

    public void setSecondAppointmentImport(String secondAppointmentImport) {
        this.secondAppointmentImport = secondAppointmentImport;
    }

    @JsonSerialize(using = CustomDateTimeSerializer.class)
    public Date getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(Date appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public String getTruck() {
        return truck;
    }

    public void setTruck(String truck) {
        this.truck = truck;
    }

    public String getFirstContainerImport() {
        return firstContainerImport;
    }

    public void setFirstContainerImport(String firstContainerImport) {
        this.firstContainerImport = firstContainerImport;
    }

    public String getSecondContainerImport() {
        return secondContainerImport;
    }

    public void setSecondContainerImport(String secondContainerImport) {
        this.secondContainerImport = secondContainerImport;
    }

    public String getPinNbr() {
        return pinNbr;
    }

    public void setPinNbr(String pinNbr) {
        this.pinNbr = pinNbr;
    }

    public String getFirstAppointmentExport() {
        return firstAppointmentExport;
    }

    public void setFirstAppointmentExport(String firstAppointmentExport) {
        this.firstAppointmentExport = firstAppointmentExport;
    }

    public String getFirstContainerExport() {
        return firstContainerExport;
    }

    public void setFirstContainerExport(String firstContainerExport) {
        this.firstContainerExport = firstContainerExport;
    }

    public String getSecondAppointmentExport() {
        return secondAppointmentExport;
    }

    public void setSecondAppointmentExport(String secondAppointmentExport) {
        this.secondAppointmentExport = secondAppointmentExport;
    }

    public String getSecondContainerExport() {
        return secondContainerExport;
    }

    public void setSecondContainerExport(String secondContainerExport) {
        this.secondContainerExport = secondContainerExport;
    }

    public String getFirstAppointmentEdo() {
        return firstAppointmentEdo;
    }

    public void setFirstAppointmentEdo(String firstAppointmentEdo) {
        this.firstAppointmentEdo = firstAppointmentEdo;
    }

    public String getFirstContainerEdo() {
        return firstContainerEdo;
    }

    public void setFirstContainerEdo(String firstContainerEdo) {
        this.firstContainerEdo = firstContainerEdo;
    }

    public String getSecondAppointmentEdo() {
        return secondAppointmentEdo;
    }

    public void setSecondAppointmentEdo(String secondAppointmentEdo) {
        this.secondAppointmentEdo = secondAppointmentEdo;
    }

    public String getSecondContainerEdo() {
        return secondContainerEdo;
    }

    public void setSecondContainerEdo(String secondContainerEdo) {
        this.secondContainerEdo = secondContainerEdo;
    }

    public String getFirstAppointmentEro() {
        return firstAppointmentEro;
    }

    public void setFirstAppointmentEro(String firstAppointmentEro) {
        this.firstAppointmentEro = firstAppointmentEro;
    }

    public String getFirstContainerEro() {
        return firstContainerEro;
    }

    public void setFirstContainerEro(String firstContainerEro) {
        this.firstContainerEro = firstContainerEro;
    }

    public String getSecondAppointmentEro() {
        return secondAppointmentEro;
    }

    public void setSecondAppointmentEro(String secondAppointmentEro) {
        this.secondAppointmentEro = secondAppointmentEro;
    }

    public String getSecondContainerEro() {
        return secondContainerEro;
    }

    public void setSecondContainerEro(String secondContainerEro) {
        this.secondContainerEro = secondContainerEro;
    }

    public String getFirstEdoNbr() {
        return firstEdoNbr;
    }

    public void setFirstEdoNbr(String firstEdoNbr) {
        this.firstEdoNbr = firstEdoNbr;
    }

    public String getSecondEdoNbr() {
        return secondEdoNbr;
    }

    public void setSecondEdoNbr(String secondEdoNbr) {
        this.secondEdoNbr = secondEdoNbr;
    }

    public String getFirstEroNbr() {
        return firstEroNbr;
    }

    public void setFirstEroNbr(String firstEroNbr) {
        this.firstEroNbr = firstEroNbr;
    }

    public String getSecondEroNbr() {
        return secondEroNbr;
    }

    public void setSecondEroNbr(String secondEroNbr) {
        this.secondEroNbr = secondEroNbr;
    }

    public Boolean getCanceled() {
        return canceled;
    }

    public void setCanceled(Boolean canceled) {
        this.canceled = canceled;
    }

    public Set<TruckVisitAppointmentBreakBulk> getTruckVisitAppointmentBreakBulk() {
        return truckVisitAppointmentBreakBulk;
    }

    public void setTruckVisitAppointmentBreakBulk(Set<TruckVisitAppointmentBreakBulk> truckVisitAppointmentBreakBulk) {
        this.truckVisitAppointmentBreakBulk = truckVisitAppointmentBreakBulk;
    }

    public Boolean getFirstContainerImportTwenty() {
        return firstContainerImportTwenty;
    }

    public void setFirstContainerImportTwenty(Boolean firstContainerImportTwenty) {
        this.firstContainerImportTwenty = firstContainerImportTwenty;
    }

    public Boolean getSecondContainerImportTwenty() {
        return secondContainerImportTwenty;
    }

    public void setSecondContainerImportTwenty(Boolean secondContainerImportTwenty) {
        this.secondContainerImportTwenty = secondContainerImportTwenty;
    }

    public Boolean getFirstContainerExportTwenty() {
        return firstContainerExportTwenty;
    }

    public void setFirstContainerExportTwenty(Boolean firstContainerExportTwenty) {
        this.firstContainerExportTwenty = firstContainerExportTwenty;
    }

    public Boolean getSecondContainerExportTwenty() {
        return secondContainerExportTwenty;
    }

    public void setSecondContainerExportTwenty(Boolean secondContainerExportTwenty) {
        this.secondContainerExportTwenty = secondContainerExportTwenty;
    }

    public Boolean getFirstContainerEdoTwenty() {
        return firstContainerEdoTwenty;
    }

    public void setFirstContainerEdoTwenty(Boolean firstContainerEdoTwenty) {
        this.firstContainerEdoTwenty = firstContainerEdoTwenty;
    }

    public Boolean getSecondContainerEdoTwenty() {
        return secondContainerEdoTwenty;
    }

    public void setSecondContainerEdoTwenty(Boolean secondContainerEdoTwenty) {
        this.secondContainerEdoTwenty = secondContainerEdoTwenty;
    }

    public Boolean getFirstContainerEroTwenty() {
        return firstContainerEroTwenty;
    }

    public void setFirstContainerEroTwenty(Boolean firstContainerEroTwenty) {
        this.firstContainerEroTwenty = firstContainerEroTwenty;
    }

    public Boolean getSecondContainerEroTwenty() {
        return secondContainerEroTwenty;
    }

    public void setSecondContainerEroTwenty(Boolean secondContainerEroTwenty) {
        this.secondContainerEroTwenty = secondContainerEroTwenty;
    }

    public String getFirstAppointmentImportOrder() {
        return firstAppointmentImportOrder;
    }

    public void setFirstAppointmentImportOrder(String firstAppointmentImportOrder) {
        this.firstAppointmentImportOrder = firstAppointmentImportOrder;
    }

    public String getSecondAppointmentImportOrder() {
        return secondAppointmentImportOrder;
    }

    public void setSecondAppointmentImportOrder(String secondAppointmentImportOrder) {
        this.secondAppointmentImportOrder = secondAppointmentImportOrder;
    }

    public String getFirstAppointmentExportOrder() {
        return firstAppointmentExportOrder;
    }

    public void setFirstAppointmentExportOrder(String firstAppointmentExportOrder) {
        this.firstAppointmentExportOrder = firstAppointmentExportOrder;
    }

    public String getSecondAppointmentExportOrder() {
        return secondAppointmentExportOrder;
    }

    public void setSecondAppointmentExportOrder(String secondAppointmentExportOrder) {
        this.secondAppointmentExportOrder = secondAppointmentExportOrder;
    }

    public String getCompanyIdLdap() {
        return companyIdLdap;
    }

    public void setCompanyIdLdap(String companyIdLdap) {
        this.companyIdLdap = companyIdLdap;
    }

    public Boolean getSkipEmptyRule() {
        return skipEmptyRule;
    }

    public void setSkipEmptyRule(Boolean skipEmptyRule) {
        this.skipEmptyRule = skipEmptyRule;
    }

    // returna true si hay un appointment de un unitNbr
    public Boolean containAppointment(String unitNbr) {
        return getFirstContainerEdo() != null && getFirstContainerEdo().equals(unitNbr)
                || getFirstContainerEro() != null && getFirstContainerEro().equals(unitNbr)
                || getFirstContainerExport() != null && getFirstContainerExport().equals(unitNbr)
                || getFirstContainerImport() != null && getFirstContainerImport().equals(unitNbr)
                || getSecondContainerEdo() != null && getSecondContainerEdo().equals(unitNbr)
                || getSecondContainerEro() != null && getSecondContainerEro().equals(unitNbr)
                || getSecondContainerExport() != null && getSecondContainerExport().equals(unitNbr)
                || getSecondContainerImport() != null && getSecondContainerImport().equals(unitNbr);
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

    /**
     * @return the createdByLDAP
     */
    public String getCreatedByLDAP() {
        return createdByLDAP;
    }

    /**
     * @param createdByLDAP
     *            the createdByLDAP to set
     */
    public void setCreatedByLDAP(String createdByLDAP) {
        this.createdByLDAP = createdByLDAP;
    }

}
