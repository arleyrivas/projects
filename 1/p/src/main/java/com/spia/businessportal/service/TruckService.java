package com.spia.businessportal.service;

import java.util.Date;

import com.spia.businessportal.common.entities.dto.TruckValidationDTO;

public interface TruckService {

    public TruckValidationDTO[] truckValidationService(String truck, String nit) throws Exception;

    public TruckValidationDTO[] truckValidationByDateService(String truck, Date tvaDate) throws Exception;

    public String validationMessageFP() throws Exception;

}
