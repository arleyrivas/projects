/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  18 de nov. de 2015 - 8:27:29 a. m.
 */
package com.spia.businessportal.backend.bo.impl;

import com.spia.businessportal.backend.bo.TruckVisitAppointmentMdwBO;
import com.spia.businessportal.common.entities.dto.SOResponseDTO;
import com.spia.services.entities.CancelTransactedAppointmentRequest;
import com.spia.services.entities.Holds;
import com.spia.services.entities.HoldsList;
import com.spia.services.entities.TruckVisitAppointment;
import com.spia.services.entities.TruckVisitAppointmentPortal;
import com.spia.services.entities.TruckVisitAppointmentRequest;
import com.spia.services.entities.UpdateHoldRequest;
import com.spia.services.entities.UpdateTruckVisitBbkRequest;
import com.spia.services.entities.UpdateTruckVisitRequest;
import com.spia.services.entities.navis.CancelTransactedAppointmentResponse;
import com.spia.services.exception.BOException;
import com.spia.services.entities.UpdateTruckVisitRequestPortal;

/**
 * @author leandro
 *
 *         Implementación de la interfaz TruckVisitAppointmentMdwBO
 */
public class TruckVisitAppointmentMdwBOImpl<T> extends GenericMdwBOImpl<T> implements TruckVisitAppointmentMdwBO<T> {

    /**
     * 
     */
    public TruckVisitAppointmentMdwBOImpl() {
        super();
    }

    @Override
    public CancelTransactedAppointmentResponse cancelTransactedAppointment(CancelTransactedAppointmentRequest request)
            throws BOException {
        return (CancelTransactedAppointmentResponse) this.getRestTemplate().postForObject(getServiceUrl() + "/cancel",
                request, CancelTransactedAppointmentResponse.class);
    }

    @Override
    public boolean unitHasHolds(String nbr) throws BOException {
        return this.getRestTemplate().getForObject(getServiceUrl() + "/holds/{nbr}", Boolean.class, nbr);
    }

    @Override
    public Integer cancelAppointment(String truckVisitAppointmentNbr, String appointmentNbr) throws BOException {
        return this.getRestTemplate().getForObject(
                getServiceUrl() + "/cancel/{appointmentNbr}/from/{truckVisitAppointmentNbr}", Integer.class,
                truckVisitAppointmentNbr, appointmentNbr);
    }

    @Override
    public TruckVisitAppointment saveAppointment(TruckVisitAppointmentRequest truckVisitAppointmentRequest)
            throws BOException {
        return this.getRestTemplate().postForObject(getServiceUrl(), truckVisitAppointmentRequest,
                TruckVisitAppointment.class);
    }

    @Override
    public TruckVisitAppointment updateTruckVisit(UpdateTruckVisitRequest updateTruckVisitRequest) {
        return this.getRestTemplate().postForObject(getServiceUrl() + "/update", updateTruckVisitRequest,
                TruckVisitAppointment.class);
    }

    @Override
    public Holds getHolds(String unitNbr) {
        return this.getRestTemplate().getForObject(getServiceUrl() + "/getholds/{unitNbr}", Holds.class, unitNbr);
    }

    @Override
    public HoldsList getHoldsList(String unitNbrList) {

        return this.getRestTemplate().getForObject(getServiceUrl() + "/getholdslist/{unitNbrList}", HoldsList.class,
                unitNbrList);

    }

    @Override
    public TruckVisitAppointmentPortal saveAppointmentBreakBulk(TruckVisitAppointmentRequest truckVisitAppointmentRequest)
            throws BOException {
        return this.getRestTemplate().postForObject(getServiceUrl() + "/breakbulkPortal", truckVisitAppointmentRequest,
                TruckVisitAppointmentPortal.class);
    }

    @Override
    public CancelTransactedAppointmentResponse cancelTransactedAppointmentBbk(
            CancelTransactedAppointmentRequest request) throws BOException {
        return (CancelTransactedAppointmentResponse) this.getRestTemplate().postForObject(
                getServiceUrl() + "/cancel", request, CancelTransactedAppointmentResponse.class);
    }

    @Override
    public TruckVisitAppointmentPortal updateTruckVisitBbk(UpdateTruckVisitRequestPortal updateTruckVisitRequest) throws BOException {
        return this.getRestTemplate().postForObject(getServiceUrl() + "/update/breakbulkPortal", updateTruckVisitRequest,
                TruckVisitAppointmentPortal.class);
    }
    
    @Override
    public TruckVisitAppointment updatReferenceNbr(UpdateTruckVisitBbkRequest updateTruckVisitBbkRequest) throws BOException {
        return this.getRestTemplate().postForObject(getServiceUrl() + "/update/breakbulk/reference/", updateTruckVisitBbkRequest, TruckVisitAppointment.class);

    }
    
    @Override
    public SOResponseDTO updateHoldByUnits(UpdateHoldRequest updateHoldRequest) throws BOException {
        return this.getRestTemplate().postForObject(getServiceUrl() + "/updateHoldByUnits/", updateHoldRequest, SOResponseDTO.class);

    }

}
