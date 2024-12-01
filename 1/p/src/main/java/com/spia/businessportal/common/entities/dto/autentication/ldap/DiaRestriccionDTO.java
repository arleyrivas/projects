
package com.spia.businessportal.common.entities.dto.autentication.ldap;
import java.io.Serializable;



public class DiaRestriccionDTO implements Serializable{
    
    private String diaRestriccion;
    private String horaDesde;
    private String horaHasta;

    public DiaRestriccionDTO() {
    }

    public DiaRestriccionDTO(String diaRestriccion, String horaDesde, String horaHasta) {
        this.diaRestriccion = diaRestriccion;
        this.horaDesde = horaDesde;
        this.horaHasta = horaHasta;
    }

    public String getDiaRestriccion() {
        return diaRestriccion;
    }

    public void setDiaRestriccion(String diaRestriccion) {
        this.diaRestriccion = diaRestriccion;
    }

    public String getHoraDesde() {
        return horaDesde;
    }

    public void setHoraDesde(String horaDesde) {
        this.horaDesde = horaDesde;
    }

    public String getHoraHasta() {
        return horaHasta;
    }

    public void setHoraHasta(String horaHasta) {
        this.horaHasta = horaHasta;
    }
}
