package com.spia.businessportal.common.entities.dto;

import java.util.Date;

/**
 * Criterio de búsqueda para las consultas de citas.
 *
 */

public class HistoryAppointmentsCriteria {
    

    
    private String fromDate;
    private String toDate;
    private String plate;
    private String appointmentNbr;
    private String frghtKind;

    public String getFromDate(){
        return fromDate;
    }

    public void setFromDate(String fromDate){
        this.fromDate = fromDate;
    }

    public String getToDate(){
        return toDate;
    }

    public void setToDate(String toDate){
        this.toDate = toDate;
    }

    public String getPlate(){
        return plate;
    }

    public void setPlate(String plate){
        this.plate = plate;
    }

    public String getAppointmentNbr(){
        return appointmentNbr;
    }

    public void setAppointmentNbr(String appointmentNbr){
        this.appointmentNbr = appointmentNbr;
    }

    public String getFrghtKind(){
        return frghtKind;
    }

    public void setFrghtKind(String frghtKind){
        this.frghtKind = frghtKind;
    }


}
