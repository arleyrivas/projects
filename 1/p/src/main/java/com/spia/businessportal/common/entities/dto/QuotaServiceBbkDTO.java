package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 18/07/2019 Objeto respuesta de la consulta que permite
 * validate los horarios de las citas para Carga suelta
 * 
 */
public class QuotaServiceBbkDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private int quota_rule_gkey;
    private int dlv_quota;
    private String start_date_f;
    private int slot_duration_min;
    private int count;

    public int getQuota_rule_gkey() {
        return quota_rule_gkey;
    }

    public void setQuota_rule_gkey(int quota_rule_gkey) {
        this.quota_rule_gkey = quota_rule_gkey;
    }

    public int getDlv_quota() {
        return dlv_quota;
    }

    public void setDlv_quota(int dlv_quota) {
        this.dlv_quota = dlv_quota;
    }

    public String getStart_date_f() {
        return start_date_f;
    }

    public void setStart_date_f(String start_date_f) {
        this.start_date_f = start_date_f;
    }

    public int getSlot_duration_min() {
        return slot_duration_min;
    }

    public void setSlot_duration_min(int slot_duration_min) {
        this.slot_duration_min = slot_duration_min;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }
}
