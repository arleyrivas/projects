package com.spia.businessportal.common.entities.dto;

import com.spia.businessportal.common.entities.dto.ActionPrivilegeDTO;
import java.util.List;

public class ActionRestrictionHourDTO {

    private String nit;
    private List<ActionPrivilegeDTO> privilegios;

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public List<ActionPrivilegeDTO> getPrivilegios() {
        return privilegios;
    }

    public void setPrivilegios(List<ActionPrivilegeDTO> privilegios) {
        this.privilegios = privilegios;
    }
}
