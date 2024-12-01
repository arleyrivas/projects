/**
 * 
 */
package com.spia.businessportal.common.entities.dto;

import java.util.Date;

/**
 * DTO para el guardado de appointments.
 * 
 * @author diego
 *
 */
public class WeightDTO {

    private String truck;
    private Date appointmentDate;

    /**
     * 
     */
    public WeightDTO() {
        super();
    }

    public Date getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(Date appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getTruck() {
        return truck;
    }

    public void setTruck(String truck) {
        this.truck = truck;
    }

}
