/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  17 de nov. de 2015 - 3:59:27 p. m.
 */
package com.spia.businessportal.backend.bo;

import java.util.List;

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
 *         Interfaz para consumir los servicios de TruckVisitAppointment. Si bien por el uso de generics normalmente no hace falta declarar estas
 *         interfaces, en este caso fue necesario dado que se realizan numerosas operaciones que no están comprendidas dentro de las primitivas.
 */
public interface TruckVisitAppointmentMdwBO<T> extends GenericMdwBO<T> {

    /**
     * Invoca el servicio que cancela el truck visit con sus appointments.
     * 
     * @param request
     *            request de cancelación de appointment
     * @return {@link CancelTransactedAppointmentResponse}
     * @throws BOException
     *             cuando ocurre un error en el mdw.
     */
    public CancelTransactedAppointmentResponse cancelTransactedAppointment(CancelTransactedAppointmentRequest request)
            throws BOException;

    /**
     * Invoca al servicio que cancela el appointment.
     * 
     * @param truckVisitAppointmentNbr
     *            truck visit dueño del appointment a cancelar.
     * @param appointmentNbr
     *            appointment que se va a cancelar.
     * @return true si la cancelación tuvo éxito.
     * @throws BOException
     *             cuando ocurre un error en el mdw.
     */
    public Integer cancelAppointment(String truckVisitAppointmentNbr, String appointmentNbr) throws BOException;

    /**
     * Invoca al servicio que devuelve si un unit tiene o no tiene holds permissions insuficientes para generar el appointment.
     * 
     * @param nbr
     *            número de unit
     * @return true si el unit tiene holds/permissions insuficientes para generar el appointment
     * @throws BOException
     *             cuando ocurre un error en el mdw.
     */
    public boolean unitHasHolds(String nbr) throws BOException;

    /**
     * Invoca al servicio que guarda un truck visit y sus appointments.
     * 
     * @param truckVisitAppointmentRequest
     *            request de creación del appointment.
     * @return {@link com.spia.services.entities.TruckVisitAppointment}
     * @throws BOException
     *             cuando ocurre un error en el mdw.
     */
    public TruckVisitAppointment saveAppointment(TruckVisitAppointmentRequest truckVisitAppointmentRequest)
            throws BOException;

    /**
     * Invoca el servicio que actualiza y recupera el truckVisitAppointment
     * 
     * @param truckVisitDTO
     *            contiene el truckVisit a actualizar junto con la licencia del conductor y la patente del camión.
     * @return {@link com.spia.services.entities.TruckVisitAppointment}
     */
    public TruckVisitAppointment updateTruckVisit(UpdateTruckVisitRequest updateTruckVisitRequest);

    /**
     * Invoca el servicio que recupera el id y descripción de holds de una unit
     * 
     * @param id
     *            contiene el nro de unit
     * @return {@link com.spia.services.entities.Holds}
     */
    public Holds getHolds(String id);

    /**
     * Invoca el servicio que recupera el id y descripción de holds de una lista unit
     * 
     * @param id
     *            contiene el la lista de nro de unit
     * @return {@link com.spia.services.entities.Holds}
     */
    public HoldsList getHoldsList(String idList);

    /**
     * Invoca al servicio que guarda un truck visit y sus appointments.
     * 
     * @param truckVisitAppointmentRequest
     *            request de creación del appointment.
     * @return {@link com.spia.services.entities.TruckVisitAppointment}
     * @throws BOException
     *             cuando ocurre un error en el mdw.
     */
    public TruckVisitAppointmentPortal saveAppointmentBreakBulk(TruckVisitAppointmentRequest truckVisitAppointmentRequest)
            throws BOException;

    /**
     * Invoca el servicio que cancela el truck visit con sus appointments.
     * 
     * @param request
     *            request de cancelación de appointment
     * @return {@link CancelTransactedAppointmentResponse}
     * @throws BOException
     *             cuando ocurre un error en el mdw.
     */
    public CancelTransactedAppointmentResponse cancelTransactedAppointmentBbk(
            CancelTransactedAppointmentRequest request) throws BOException;

    /**
     * Invoca el servicio que actualiza y recupera el truckVisitAppointment
     * 
     * @param truckVisitDTO
     *            contiene el truckVisit a actualizar junto con la licencia del conductor y la patente del camión.
     * @return {@link com.spia.services.entities.TruckVisitAppointment}
     * @throws BOException 
     */
    public TruckVisitAppointmentPortal updateTruckVisitBbk(UpdateTruckVisitRequestPortal updateTruckVisitRequest) throws BOException;

    /**
     * Invoca el servicio que actualiza truckVisitAppointment Bbk
     * 
     * @param truckVisitDTO
     *            contiene el truckVisit a actualizar junto con la licencia del conductor y la patente del camión.
     * @return {@link com.spia.services.entities.TruckVisitAppointment}
     * @throws BOException 
     */
    public TruckVisitAppointment updatReferenceNbr(UpdateTruckVisitBbkRequest updateTruckVisitBbkRequest) throws BOException;

    public SOResponseDTO updateHoldByUnits(UpdateHoldRequest updateHoldRequest) throws BOException;

}
