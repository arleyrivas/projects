
package com.spia.businessportal.common.entities.dto.autentication.ldap;
import ar.com.fluxit.framework.entities.user.DiaRestriccionDTO;
import java.io.Serializable;
import java.util.List;

public class PrivilegeDTO implements Serializable{

    private String privilegeId;
    private boolean dobleFactorAutenticacion;
    private boolean notificable;
    private List<DiaRestriccionDTO> diasRestriccion;


    public PrivilegeDTO() {
    }

    public PrivilegeDTO(String privilegeId, boolean dobleFactorAutenticacion, boolean notificable, List<DiaRestriccionDTO> diasRestriccion) {
        this.privilegeId = privilegeId;
        this.dobleFactorAutenticacion = dobleFactorAutenticacion;
        this.notificable = notificable;
        this.diasRestriccion = diasRestriccion;
    }

    public String getPrivilegeId() {
        return privilegeId;
    }

    public void setPrivilegeId(String privilegeId) {
        this.privilegeId = privilegeId;
    }

    public boolean isDobleFactorAutenticacion() {
        return dobleFactorAutenticacion;
    }

    public void setDobleFactorAutenticacion(boolean dobleFactorAutenticacion) {
        this.dobleFactorAutenticacion = dobleFactorAutenticacion;
    }

    public boolean isNotificable() {
        return notificable;
    }

    public void setNotificable(boolean notificable) {
        this.notificable = notificable;
    }

    public List<DiaRestriccionDTO> getDiasRestriccion() {
        return diasRestriccion;
    }

    public void setDiasRestriccion(List<DiaRestriccionDTO> diasRestriccion) {
        this.diasRestriccion = diasRestriccion;
    }
}
