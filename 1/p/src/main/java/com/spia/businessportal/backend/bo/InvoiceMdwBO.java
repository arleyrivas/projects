/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  3 de nov. de 2015 - 5:38:17 p. m.
 */
package com.spia.businessportal.backend.bo;

import java.util.List;

import com.spia.services.entities.billing.FinalizeInvoiceBilling;
import com.spia.services.entities.billing.FinalizeInvoiceResponse;
import com.spia.services.entities.billing.GenerateInvoiceRequest;
import com.spia.services.entities.billing.Invoice;
import com.spia.services.entities.billing.InvoiceCriteria;
import com.spia.services.entities.billing.InvoiceFlexFields;
import com.spia.services.entities.billing.InvoiceInformation;
import com.spia.services.entities.billing.InvoicesByContainerNbrResponse.InvoiceNumber;
import com.spia.services.entities.billing.InvoicesCriteriaRequest;
import com.spia.services.entities.billing.RecordPaymentRequest;
import com.spia.services.entities.billing.UnitsValidationResponse;
import com.spia.services.entities.payu.GenerateOnlineInvoiceMdwRequest;
import com.spia.services.entities.payu.PayuRequest;
import com.spia.services.exception.BOException;
import com.spia.services.exception.ServiceException;

/**
 * @author leandro
 *
 *         Interfaz para consumir los servicios de Invoice. Si bien por el uso de generics normalmente no hace falta declarar estas interfaces, en
 *         este caso fue necesario dado que se realizan numerosas operaciones que no están comprendidas dentro de las primitivas.
 */
public interface InvoiceMdwBO<T> extends GenericMdwBO<T> {

    /**
     * Invoca al servicio que devuelve el invoice por su nro de draft
     * 
     * @param draft
     *            número de draft de la factura
     * @return {@link Invoice}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public Invoice getDraft(String draft) throws BOException;

    /**
     * Invoca al servicio que devuelve el invoice por su nro.
     * 
     * @param finalNbr
     *            número final de la factura
     * @return {@link Invoice}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public Invoice getByFinalNbr(String finalNbr) throws BOException;

    /**
     * Recupera la información para generar la factura electrónica.
     * 
     * @param finalNbr
     *            número final de la factura
     * @return {@link GenerateOnlineInvoiceMdwRequest}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw
     */
    public GenerateOnlineInvoiceMdwRequest getOnlineInvoiceInformation(String finalNbr) throws BOException;

    /**
     * Invoca al servicio que que crea un invoice.
     * 
     * @param generateInvoiceRequest
     *            request para generar el invoice.
     * @return {@link Invoice}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public Invoice create(List<GenerateInvoiceRequest> generateInvoiceRequest) throws BOException;

    /**
     * Invoca al servicio que finaliza un invoice
     * 
     * @param finalizeInvoiceBilling
     *            request para finalizar el invoice
     * @return {@link FinalizeInvoiceResponse}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public FinalizeInvoiceResponse finalizeInvoice(FinalizeInvoiceBilling finalizeInvoiceBilling) throws BOException;

    /**
     * Invoca al servicio que retorna todos los invoice para los units.
     * 
     * @param units
     *            units de los cuales se solicita el invoice.
     * @return {@link InvoiceNumber}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public List<InvoiceNumber> getFinalizedByContainer(List<String> units) throws BOException;

    /**
     * Invoca al servicio que retorna los invoice por agente y cliente.
     * 
     * @param invoiceCriteria
     *            criterio de búsqueda para los invoice
     * @return {@link Invoice}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public List<Invoice> getDraftsByAgentAndCustomer(InvoiceCriteria invoiceCriteria) throws BOException;

    /**
     * Invoca al servicio que retorna los invoice por su shipper o consignee
     * 
     * @param payee
     *            usuario pagador del invoice
     * @return {@link Invoice}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public List<Invoice> getByShipperOrConsigne(String shipperConsignee) throws BOException;

    /**
     * Invoca al servicio que retorna los invoice por su agente
     * 
     * @param payee
     *            usuario pagador del invoice
     * @return {@link Invoice}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public List<Invoice> getByAgent(String payee) throws BOException;

    /**
     * Invoca al servicio que retorna información del invoice por su id y rol.
     * 
     * @param id
     *            id del invoice
     * @param role
     *            rol
     * @return {@link InvoiceInformation}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public InvoiceInformation getInvoiceInformation(String id, String role) throws BOException;

    /**
     * Invoca al servicio que deshace el merge y elmina un invoice por su nro de draft.
     * 
     * @param draftNbr
     *            número de draft de la factura que se va a cancelar.
     * @return {@link Invoice}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public Invoice unmergeAndCancelInvoice(String draftNbr) throws BOException;

    /**
     * Invoca al servicio que retorna los invoice por los filtros del criterio de búsqueda.
     * 
     * @param criteria
     *            criterio de búsqueda de las facturas.
     * @return {@link Invoice}
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public List<Invoice> getDraftsByFilter(InvoicesCriteriaRequest criteria) throws BOException;

    /**
     * Invoca al servicio que retorna si el invoice tiene deudas.
     * 
     * @param nbr
     *            número de unit
     * @return true si el unit tiene deuda
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public boolean unitHasDebts(String nbr) throws BOException;

    /**
     * Invoca al servicio que retorna si el invoice tiene deudas.
     * 
     * @param lista
     *            de units separados por coma
     * @param inboundVessel
     *            Visita de entrada
     * @param outboundVessel
     *            Visita de salida
     * @return true si el unit tiene deuda
     * @throws BOException
     *             cuando ocurre un error en los servicios de mdw.
     */
    public UnitsValidationResponse unistHasDebts(String nbr, String outboundVessel, String inboundVessel)
            throws BOException;

    /**
     * Invoica al servicio que retorna todos los invoices de un unit por su nbr.
     * 
     * @param unitNbr
     * @return {@link com.spia.services.entities.billing.Invoice}
     * @throws BOException
     */
    public List<Invoice> getInvoicesByUnitNbr(String unitNbr) throws BOException;

    /**
     * Invoca al servicio que registra un pago en N4
     * 
     * @param recordPaymentRequest
     * @param invoiceByReferenceCodeList
     * @return {@link com.spia.services.entities.billing.Invoice}
     * @throws ServiceException
     */
    public boolean recordPayment(RecordPaymentRequest recordPaymentRequest, String invoiceByReferenceCodeList)
            throws BOException;

    /**
     * Invoca al servicio que actualiza los flex fields de las factura por su referenceCode.
     * 
     * @param recordPaymentRequest
     * @return {@link com.spia.services.entities.billing.Invoice}
     * @throws ServiceException
     */
    public boolean updateFlexFieldsByReferenceCode(InvoiceFlexFields invoiceFlexFields) throws BOException;

    /**
     * Invoca al servicio que actualiza los flex fields de las factura por su draftNbr
     * 
     * @param recordPaymentRequest
     * @return {@link com.spia.services.entities.billing.Invoice}
     * @throws ServiceException
     */
    public boolean updateFlexFieldsByDraftNbr(InvoiceFlexFields invoiceFlexFields) throws BOException;

    /**
     * Retorna todas los invoices que se encuentren durante un proceso de pago (PAYMENT STATUS = 'PENDING')
     * 
     * @param payuRequest
     * @return
     * @throws ServiceException
     */
    public List<String> loockedInvoices(PayuRequest payuRequest) throws BOException;

    /**
     * Retorna todos los invoices asociados al reference Code
     * 
     * @param referenceCode
     * @return
     * @throws ServiceException
     */
    public List<Invoice> getInvoicesByReferenceCode(String referenceCode) throws BOException;

	public Invoice createBbk(List<GenerateInvoiceRequest> generateInvoiceRequest) throws BOException;

	public String finalizeInvoice(String drftInvoiceNbr) throws BOException;


         /**
     * Retorna todos los invoices asociados al reference Code
     * 
     * @param referenceCode
     * @param role
     * @return
     * @throws ServiceException
     */
        public List<Invoice> getInvoicesByReferenceCodeAndRole (String referenceCode, String role) throws BOException;
}
