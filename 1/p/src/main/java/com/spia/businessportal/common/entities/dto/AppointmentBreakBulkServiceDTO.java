/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  26 de ene. de 2016 - 9:22:56 a. m.
 */
package com.spia.businessportal.common.entities.dto;

/**
 * @author leandro
 *
 */
public class AppointmentBreakBulkServiceDTO {

    private int id;
    private String unit_nbr;
    private String iso_type;
    private Boolean is_active;
    private Boolean is_deleted;
    private Boolean is_twenty;
    private int pin_id;
    private int trucking_company_id;
    private String observation;
    private String trucking_company_ldap;
    private String trucking_company_name_ldap;
    private int cargo_quantity;
    private Double cargo_weigth;
    private String destination;
    private int truck_visit_appointmentbbk_id;
    private String bl_nbr;
   

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUnit_nbr() {
        return unit_nbr;
    }

    public void setUnit_nbr(String unit_nbr) {
        this.unit_nbr = unit_nbr;
    }

    public String getIso_type() {
        return iso_type;
    }

    public void setIso_type(String iso_type) {
        this.iso_type = iso_type;
    }

    public Boolean getIs_active() {
        return is_active;
    }

    public void setIs_active(Boolean is_active) {
        this.is_active = is_active;
    }

    public Boolean getIs_deleted() {
        return is_deleted;
    }

    public void setIs_deleted(Boolean is_deleted) {
        this.is_deleted = is_deleted;
    }

    public Boolean getIs_twenty() {
        return is_twenty;
    }

    public void setIs_twenty(Boolean is_twenty) {
        this.is_twenty = is_twenty;
    }

    public int getPin_id() {
        return pin_id;
    }

    public void setPin_id(int pin_id) {
        this.pin_id = pin_id;
    }

    public int getTrucking_company_id() {
        return trucking_company_id;
    }

    public void setTrucking_company_id(int trucking_company_id) {
        this.trucking_company_id = trucking_company_id;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }

    public String getTrucking_company_ldap() {
        return trucking_company_ldap;
    }

    public void setTrucking_company_ldap(String trucking_company_ldap) {
        this.trucking_company_ldap = trucking_company_ldap;
    }

    public String getTrucking_company_name_ldap() {
        return trucking_company_name_ldap;
    }

    public void setTrucking_company_name_ldap(String trucking_company_name_ldap) {
        this.trucking_company_name_ldap = trucking_company_name_ldap;
    }

    public int getCargo_quantity() {
        return cargo_quantity;
    }

    public void setCargo_quantity(int cargo_quantity) {
        this.cargo_quantity = cargo_quantity;
    }

    public Double getCargo_weigth() {
        return cargo_weigth;
    }

    public void setCargo_weigth(Double cargo_weigth) {
        this.cargo_weigth = cargo_weigth;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public int getTruck_visit_appointmentbbk_id() {
        return truck_visit_appointmentbbk_id;
    }

    public void setTruck_visit_appointmentbbk_id(int truck_visit_appointmentbbk_id) {
        this.truck_visit_appointmentbbk_id = truck_visit_appointmentbbk_id;
    }

    public String getBl_nbr() {
        return bl_nbr;
    }

    public void setBl_nbr(String bl_nbr) {
        this.bl_nbr = bl_nbr;
    }



}
