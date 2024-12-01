/**
 * 
 */
package com.spia.businessportal.common.entities.dto;

import java.util.Date;

import com.spia.services.entities.Driver;

/**
 * DTO para el guardado de appointments.
 * 
 * @author diego
 *
 */
public class TruckVisitAppointmentBreakBulkPrintDTO {

    private String tvabbk;
    private Date appointmentDate;
    private Driver driver;
    private String truck;
    private AppointmentBreakBulkServiceDTO[] cargoLots;

    /**
     * 
     */
    public TruckVisitAppointmentBreakBulkPrintDTO() {
        super();
    }

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

    public String getTvabbk() {
        return tvabbk;
    }

    public void setTvabbk(String tvabbk) {
        this.tvabbk = tvabbk;
    }

    public AppointmentBreakBulkServiceDTO[] getCargoLots() {
        return cargoLots;
    }

    public void setCargoLots(AppointmentBreakBulkServiceDTO[] cargoLots) {
        this.cargoLots = cargoLots;
    }

}
