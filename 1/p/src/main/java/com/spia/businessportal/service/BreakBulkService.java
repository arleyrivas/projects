package com.spia.businessportal.service;

import java.util.Date;

import com.spia.businessportal.common.entities.dto.AppointmentBreakBulkServiceDTO;
import com.spia.businessportal.common.entities.dto.DraftServiceDTO;
import com.spia.businessportal.common.entities.dto.HBLPinDTO;
import com.spia.businessportal.common.entities.dto.HBLServiceDTO;
import com.spia.businessportal.common.entities.dto.HistoryServiceDTO;
import com.spia.businessportal.common.entities.dto.PinBreakBulkServiceDTO;
import com.spia.businessportal.common.entities.dto.QuotaServiceBbkDTO;
import com.spia.businessportal.common.entities.dto.TruckCapacityServiceDTO;
import com.spia.businessportal.common.entities.dto.WeightServiceDTO;
import com.spia.services.entities.Truck;
import com.spia.businessportal.common.entities.dto.AppointmentBreakBulkServiceCSDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 06/05/2019 Servicio que permite realizar operaciones con HBL
 * .
 * 
 */
public interface BreakBulkService {

    public HBLPinDTO getCargoLot(String hbl) throws Exception;

    public Truck getTruck(String plate) throws Exception;

    public TruckCapacityServiceDTO[] getTruckCapacity(String truck) throws Exception;

    public PinBreakBulkServiceDTO[] getPinBreakBulk(String pin) throws Exception;

    public HBLServiceDTO[] searchCargoLots(String hbl, String agente, String destination, int isGroup, String type) throws Exception;

    public AppointmentBreakBulkServiceDTO[] searchAppointment(String tvaNbr) throws Exception;

    public QuotaServiceBbkDTO[] getHoursValidateBBK(Date startDate, String truck) throws Exception;

    public WeightServiceDTO[] getWeightControl(String truck, Date tvadate) throws Exception;

    public HistoryServiceDTO[] getTvaBbk(String user, String tvaNbr) throws Exception;
    
    void processExpire();

    public DraftServiceDTO[] getDraftByHbl(String hbl) throws Exception;

    public AppointmentBreakBulkServiceCSDTO[] searchAppointmentCS(String tvaNbr) throws Exception;

}
