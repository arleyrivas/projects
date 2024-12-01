package com.spia.businessportal.service;

import com.spia.businessportal.common.entities.dto.CausalCancellationAppointment;
import com.spia.businessportal.common.entities.dto.ResponseTvaService;
import com.spia.businessportal.common.entities.dto.TruckVisitAppointmentServiceDTO;
import com.spia.services.entities.TruckVisitAppointment;
import com.spia.services.entities.TruckVisitAppointmentRequest;


/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 13/07/2018 Servicio que permite realizar operaciones con
 * Facturas .
 * 
 */
public interface TruckVisitAppointmentService {

    public TruckVisitAppointmentServiceDTO[] getInfo(String tva) throws Exception;
    
    public TruckVisitAppointmentServiceDTO[] getTVAByIds(String idList) throws Exception;
    
    public TruckVisitAppointmentServiceDTO[] getTVABbkByIds(String idList) throws Exception;
    
    public ResponseTvaService[] cancelTVABB(String tvaNbr) throws Exception;
    
    public ResponseTvaService[] deleteCargoLotTVA(String tvaNbr, String unitNbr) throws Exception;
    
    public CausalCancellationAppointment[] getCausalCancellationAppointment() throws Exception;
    
	boolean validateHazardApp(String units) throws Exception;
    
    public TruckVisitAppointment appointmentValidate(TruckVisitAppointmentRequest tv) throws Exception;
    
    public TruckVisitAppointment updateAppointmentValidate(  String secondImportAppointmentContainer, String firstImportAppointmentContainer, String secondExportAppointmentContainer, String firstExportAppointmentContainer, String truckingCompanyId, String AppointmentDate, String AppointmentHour,  String getTruckVisitNbr,  String getDriverCardId,  String getLicense, String rule) throws Exception;

}