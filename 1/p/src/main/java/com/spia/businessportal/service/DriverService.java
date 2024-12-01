package com.spia.businessportal.service;

import java.util.Date;
import java.util.List;

import com.spia.businessportal.common.entities.dto.DriverDTO;
import com.spia.businessportal.common.entities.dto.DriverValidationDTO;
import com.spia.services.entities.Driver;

public interface DriverService {

    public DriverDTO[] driverValidation(String driver) throws Exception;

    public DriverValidationDTO[] driverValidationService(String driver) throws Exception;

    public List<Driver> getDrivers(String search) throws Exception;

    public DriverValidationDTO[] driverValidationByDateService(String driver, Date tvaDate, String isHazard) throws Exception;

}
