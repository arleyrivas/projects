package com.spia.businessportal.common.entities.dto.autentication.ldap;


import java.io.Serializable;

import java.util.List;

import com.spia.entity.entities.login.ldap.CompanyTypeDTO;

public class EmpresaDTO implements Serializable {

    private String id;
    private String companyName;
    private boolean allowStaffAnotherAgency;
    private List<CompanyTypeDTO> tiposEmpresas;

    public EmpresaDTO() {}

    public EmpresaDTO(
        String id, 
        String companyName, 
        boolean allowStaffAnotherAgency, 
        List<CompanyTypeDTO> tiposEmpresas
    ) {
        this.id = id;
        this.companyName = companyName;
        this.allowStaffAnotherAgency = allowStaffAnotherAgency;
        this.tiposEmpresas = tiposEmpresas;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public boolean isAllowStaffAnotherAgency() {
        return allowStaffAnotherAgency;
    }

    public void setAllowStaffAnotherAgency(boolean allowStaffAnotherAgency) {
        this.allowStaffAnotherAgency = allowStaffAnotherAgency;
    }

    public List<CompanyTypeDTO> getTiposEmpresas() {
        return tiposEmpresas;
    }

    public void setTiposEmpresas(List<CompanyTypeDTO> tiposEmpresas) {
        this.tiposEmpresas = tiposEmpresas;
    }
}
