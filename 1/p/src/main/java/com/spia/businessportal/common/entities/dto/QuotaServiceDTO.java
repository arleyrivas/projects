package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 09/04/2019 Objeto respuesta de la consulta que permite
 * validate los horarios de las citas
 * 
 * 
 * 
 * {
"quota_rule_gkey":"10",
"appt_hour":"10:00",
"Retiro":"2",
"RetiroDTA":"0",
"Ingreso":"2",
"Contenedores":[{"tipo":"CMA_A","valor":"2"},{"tipo":"ONE_A","valor":"0"}]
}
 */
public class QuotaServiceDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String rule_type;
    private int quota_rule_gkey; //X
    private int dlv_full_quota;
    private int rcv_full_quota;
    private int dlv_mty_quota;
    private int rcv_mty_quota;
    private int quota;
    private String start_date;
    private int slot_duration_min;
    private int countRF;
    private int countDF;
    private int countREM;
    private int countDEM;
    private int yardBolkQ;
    private String appt_hour; //X
    private int Retiro; //X
    private int RetiroDTA; //X
    private int Ingreso; //X
    private String Contenedores; 
    



	public String getContenedores() {
        return Contenedores;
    }

    public String getAppt_hour() {
        return appt_hour;
    }

    public void setAppt_hour(String appt_hour) {
        this.appt_hour = appt_hour;
    }

    public void setContenedores(String contenedores) {
        this.Contenedores = contenedores;
    }

    public int getRetiro() {
		return Retiro;
	}

	public void setRetiro(int retiro) {
		Retiro = retiro;
	}

	public int getRetiroDTA() {
		return RetiroDTA;
	}

	public void setRetiroDTA(int retiroDTA) {
		RetiroDTA = retiroDTA;
	}

	public int getIngreso() {
		return Ingreso;
	}

	public void setIngreso(int ingreso) {
		Ingreso = ingreso;
	}

	
	public String getRule_type() {
        return rule_type;
    }

    public void setRule_type(String rule_type) {
        this.rule_type = rule_type;
    }

    public int getQuota_rule_gkey() {
        return quota_rule_gkey;
    }

    public void setQuota_rule_gkey(int quota_rule_gkey) {
        this.quota_rule_gkey = quota_rule_gkey;
    }

    public int getDlv_full_quota() {
        return dlv_full_quota;
    }

    public void setDlv_full_quota(int dlv_full_quota) {
        this.dlv_full_quota = dlv_full_quota;
    }

    public int getRcv_full_quota() {
        return rcv_full_quota;
    }

    public void setRcv_full_quota(int rcv_full_quota) {
        this.rcv_full_quota = rcv_full_quota;
    }

    public int getDlv_mty_quota() {
        return dlv_mty_quota;
    }

    public void setDlv_mty_quota(int dlv_mty_quota) {
        this.dlv_mty_quota = dlv_mty_quota;
    }

    public int getRcv_mty_quota() {
        return rcv_mty_quota;
    }

    public void setRcv_mty_quota(int rcv_mty_quota) {
        this.rcv_mty_quota = rcv_mty_quota;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public int getSlot_duration_min() {
        return slot_duration_min;
    }

    public void setSlot_duration_min(int slot_duration_min) {
        this.slot_duration_min = slot_duration_min;
    }

    public int getCountRF() {
        return countRF;
    }

    public void setCountRF(int countRF) {
        this.countRF = countRF;
    }

    public int getCountDF() {
        return countDF;
    }

    public void setCountDF(int countDF) {
        this.countDF = countDF;
    }

    public int getCountREM() {
        return countREM;
    }

    public void setCountREM(int countREM) {
        this.countREM = countREM;
    }

    public int getCountDEM() {
        return countDEM;
    }

    public void setCountDEM(int countDEM) {
        this.countDEM = countDEM;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public int getQuota() {
        return quota;
    }

    public void setQuota(int quota) {
        this.quota = quota;
    }

    public int getYardBolkQ() {
        return yardBolkQ;
    }

    public void setYardBolkQ(int yardBolkQ) {
        this.yardBolkQ = yardBolkQ;
    }

}
