package com.spia.businessportal.common.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spia.businessportal.common.audit.IAuditLog;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

public class CustomerNV implements IAuditLog {

   private static final Log LOG = LogFactory.getLog(CustomerNV.class);
    private Long id;

    private String nit;              // 'nit'
    private String treatment;                // 'tratamiento'
    private String personType;                // 'tipoPersona'
    private String initials;                   // 'sigla'
    private String districtCode;              // 'codigoDistrito'
    private String representativeEmail;       // 'correoRepresentante'
    private String operationalContactName;    // 'nombreContactoOperativo'
    private String operationalContactMobile;  // 'telefonoMovilContacto'
    private String operationalContactEmail;   // 'correoContacto'
    private String treasuryContactName;       // 'nombreContactoTesoreria'
    private String treasuryContactMobile;     // 'telefonoMovilTesoreria'
    private String secondaryTreasuryEmail;    // 'correoTesoreria2'
    private String requestNumber;             // 'requestNumber'
    private Date lastSapUpdate;             // 'lastUpdateSap'
    private Date lastCompletedUpdateDate;             // 'LastCompletedUpdateDate'


    public CustomerNV() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getTreatment() {
        return treatment;
    }

    public void setTreatment(String treatment) {
        this.treatment = treatment;
    }

    public String getPersonType() {
        return personType;
    }

    public void setPersonType(String personType) {
        this.personType = personType;
    }

    public String getInitials() {
        return initials;
    }

    public void setInitials(String initials) {
        this.initials = initials;
    }

    public String getDistrictCode() {
        return districtCode;
    }

    public void setDistrictCode(String districtCode) {
        this.districtCode = districtCode;
    }

    public String getRepresentativeEmail() {
        return representativeEmail;
    }

    public void setRepresentativeEmail(String representativeEmail) {
        this.representativeEmail = representativeEmail;
    }

    public String getOperationalContactName() {
        return operationalContactName;
    }

    public void setOperationalContactName(String operationalContactName) {
        this.operationalContactName = operationalContactName;
    }

    public String getOperationalContactMobile() {
        return operationalContactMobile;
    }

    public void setOperationalContactMobile(String operationalContactMobile) {
        this.operationalContactMobile = operationalContactMobile;
    }

    public String getOperationalContactEmail() {
        return operationalContactEmail;
    }

    public void setOperationalContactEmail(String operationalContactEmail) {
        this.operationalContactEmail = operationalContactEmail;
    }

    public String getTreasuryContactName() {
        return treasuryContactName;
    }

    public void setTreasuryContactName(String treasuryContactName) {
        this.treasuryContactName = treasuryContactName;
    }

    public String getTreasuryContactMobile() {
        return treasuryContactMobile;
    }

    public void setTreasuryContactMobile(String treasuryContactMobile) {
        this.treasuryContactMobile = treasuryContactMobile;
    }

    public String getSecondaryTreasuryEmail() {
        return secondaryTreasuryEmail;
    }

    public void setSecondaryTreasuryEmail(String secondaryTreasuryEmail) {
        this.secondaryTreasuryEmail = secondaryTreasuryEmail;
    }

    public String getRequestNumber() {
        return requestNumber;
    }

    public void setRequestNumber(String requestNumber) {
        this.requestNumber = requestNumber;
    }

    public Date getLastSapUpdate() {
        return lastSapUpdate;
    }

    public void setLastSapUpdate(Date lastSapUpdate) {
        this.lastSapUpdate = lastSapUpdate;
    }

    public Date getLastCompletedUpdateDate() {
        return lastCompletedUpdateDate;
    }

    public void setLastCompletedUpdateDate(Date lastCompletedUpdateDate) {
        this.lastCompletedUpdateDate = lastCompletedUpdateDate;
    }

    @JsonIgnore
    @Override
    public String getLogDetail() {
        String[] arr = {};
        List<String> excludedFields = Arrays.asList(arr);
        StringBuilder sb = new StringBuilder();
        Field[] fields = this.getClass().getDeclaredFields();
        for (Field field : fields) {
            try {
                if (field.get(this) != null && !excludedFields.contains(field.getName()))
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
