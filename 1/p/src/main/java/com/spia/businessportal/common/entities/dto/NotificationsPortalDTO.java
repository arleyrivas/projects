package com.spia.businessportal.common.entities.dto;

import com.google.gson.annotations.SerializedName;
import java.io.Serializable;
import java.util.Date;

public class NotificationsPortalDTO implements Serializable{
    private Long id;
    private String privilegess;
    private String message;

    @SerializedName("start_date")
    private String startDate;

    @SerializedName("end_date")
    private String endDate;

    @SerializedName("type_modal")
    private String typeModal;

    @SerializedName("type_sidebar")
    private String typeSidebar;

     // Getter y Setter para id
     public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter y Setter para privilegess
    public String getPrivilegess() {
        return privilegess;
    }

    public void setPrivilegess(String privilegess) {
        this.privilegess = privilegess;
    }

    // Getter y Setter para message
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    // Getter y Setter para startDate
    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    // Getter y Setter para endDate
    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    // Getter y Setter para typeModal
    public String getTypeModal() {
        return typeModal;
    }

    public void setTypeModal(String typeModal) {
        this.typeModal = typeModal;
    }

    // Getter y Setter para typeSidebar
    public String getTypeSidebar() {
        return typeSidebar;
    }

    public void setTypeSidebar(String typeSidebar) {
        this.typeSidebar = typeSidebar;
    }

}
