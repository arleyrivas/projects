package com.spia.businessportal.service;

import java.util.Map;

import com.spia.businessportal.common.entities.dto.BookingByTransportServiceDTO;
import com.spia.businessportal.common.entities.dto.BookingServiceDTO;
import com.spia.businessportal.common.entities.dto.EroServiceDTO;
import com.spia.businessportal.common.entities.dto.HazardServiceDTO;
import com.spia.businessportal.common.entities.dto.UnitIsoDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite realizar operaciones con
 * Booking .
 * 
 */
public interface BookingService {

    public EroServiceDTO[] searchBooking(String bookingNbr, String cliTransp) throws Exception;

    public UnitIsoDTO[] searchBlItemUnitIso(String blNbr) throws Exception;

    public BookingServiceDTO[] getBookingByAgent(String nbr, String agent) throws Exception;

    public BookingByTransportServiceDTO[] getBookingById(String nbr) throws Exception;

    public HazardServiceDTO[] getHazardsByBooking(String nbr) throws Exception;

    public Map<String, String> searchPins(String unitNbr) throws Exception;

}
