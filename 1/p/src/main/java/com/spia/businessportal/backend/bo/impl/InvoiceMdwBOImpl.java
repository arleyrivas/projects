/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  3 de nov. de 2015 - 5:39:56 p. m.
 */
package com.spia.businessportal.backend.bo.impl;

import java.util.Arrays;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.InvoiceMdwBO;
import com.spia.businessportal.common.entities.dto.InvoiceNbrServiceDTO;
import com.spia.businessportal.web.controller.ApplicationManagerController;
import com.spia.services.entities.BlAgentAndConsigneeDTO;
import com.spia.services.entities.billing.CancelInvoiceRequest;
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
import com.spia.services.entities.billing.RecordPaymentRequestWithReference;
import com.spia.services.entities.billing.UnitsValidationRequest;
import com.spia.services.entities.billing.UnitsValidationResponse;
import com.spia.services.entities.payu.GenerateOnlineInvoiceMdwRequest;
import com.spia.services.entities.payu.PayuRequest;
import com.spia.services.exception.BOException;

/**
 * @author leandro
 *
 *         Implementación de la interfaz InvoiceMdwBO
 */
public class InvoiceMdwBOImpl<T> extends GenericMdwBOImpl<T> implements InvoiceMdwBO<T> {
	private static final Log LOG = LogFactory.getLog(ApplicationManagerController.class);
	
	@Autowired
	private RestTemplate restTemplate;
    /**
     * 
     */
    public InvoiceMdwBOImpl() {
        super();
    }

    @Override
    public Invoice getDraft(@PathVariable("draft") String draft) throws BOException {
        Invoice invoice = null;
        if (!StringUtils.isEmpty(draft)) {
            invoice = (Invoice) this.getRestTemplate().getForObject(getServiceUrl() + "/{draft}", Invoice.class, draft);
        }
        return invoice;
    }

    @Override
    public Invoice unmergeAndCancelInvoice(String draftNbr) throws BOException {
        CancelInvoiceRequest request = new CancelInvoiceRequest();
        request.setDraftNbr(draftNbr);
        Invoice invoice = null;
        if (!StringUtils.isEmpty(draftNbr)) {
            invoice = (Invoice) this.getRestTemplate().postForObject(getServiceUrl() + "/unmerge-and-cancel", request,
                    Invoice.class);
        }
        return invoice;
    }

    @Override
    public Invoice create(List<GenerateInvoiceRequest> generateInvoiceRequest) throws BOException {
        return (Invoice) this.getRestTemplate().postForObject(getServiceUrl() + "/create", generateInvoiceRequest,
                Invoice.class);
    }
    
    @Override
    public Invoice createBbk(List<GenerateInvoiceRequest> generateInvoiceRequest) throws BOException {
        return (Invoice) this.getRestTemplate().postForObject(getServiceUrl() + "/createBbk", generateInvoiceRequest,
                Invoice.class);
    }

    @Override
    public FinalizeInvoiceResponse finalizeInvoice(FinalizeInvoiceBilling finalizeInvoiceBilling) throws BOException {
        return (FinalizeInvoiceResponse) this.getRestTemplate().postForObject(getServiceUrl() + "/finalize",
                finalizeInvoiceBilling, FinalizeInvoiceResponse.class);
    }

    @Override
    public List<InvoiceNumber> getFinalizedByContainer(@RequestBody List<String> units) throws BOException {
        List<InvoiceNumber> invoices = null;
        if (units != null && !units.isEmpty()) {
            invoices = Arrays.asList(this.getRestTemplate().postForObject(getServiceUrl() + "/get-by-units", units,
                    InvoiceNumber[].class));
        }
        return invoices;
    }

    @Override
    public List<Invoice> getDraftsByAgentAndCustomer(InvoiceCriteria invoiceCriteria) throws BOException {
        return Arrays.asList(this.getRestTemplate().postForObject(getServiceUrl() + "/getbyagentandcustomer",
                invoiceCriteria, Invoice[].class));
    }

    @Override
    public InvoiceInformation getInvoiceInformation(@PathVariable("id") String id, @PathVariable("role") String role)
            throws BOException {
        InvoiceInformation info = null;
        if (!StringUtils.isEmpty(id) && !StringUtils.isEmpty(role)) {
            info = (InvoiceInformation) this.getRestTemplate().getForObject(
                    getServiceUrl() + "/invoiceinformation/{id}/{role}", InvoiceInformation.class, id, role);
        }
        return info;
    }

    @Override
    public List<Invoice> getByAgent(@PathVariable("agent") String agent) throws BOException {
        List<Invoice> invoices = null;
        if (!StringUtils.isEmpty(agent)) {
            invoices = Arrays.asList(
                    this.getRestTemplate().getForObject(getServiceUrl() + "/agent/{agent}", Invoice[].class, agent));
            if (invoices == null || invoices.isEmpty()) {
                invoices = null;
            }
        }
        return invoices;
    }

    @Override
    public List<Invoice> getByShipperOrConsigne(String customer) throws BOException {
        List<Invoice> invoices = null;
        if (!StringUtils.isEmpty(customer)) {
            invoices = Arrays.asList(this.getRestTemplate().getForObject(getServiceUrl() + "/customer/{customer}",
                    Invoice[].class, customer));
            if (invoices == null || invoices.isEmpty()) {
                invoices = null;
            }
        }
        return invoices;
    }

    @Override
    public List<Invoice> getDraftsByFilter(InvoicesCriteriaRequest criteria) throws BOException {
        return Arrays
                .asList(this.getRestTemplate().postForObject(getServiceUrl() + "/filter", criteria, Invoice[].class));
    }

    @Override
    public boolean unitHasDebts(String nbr) throws BOException {
        boolean hasDebts = this.getRestTemplate().getForObject(getServiceUrl() + "/has-debts/{nbr}", Boolean.class,
                nbr);
        return hasDebts;
    }

    @Override
    public UnitsValidationResponse unistHasDebts(String nbr, String outboundVisit, String inboundVisit)
            throws BOException {
        UnitsValidationResponse unistHasDebts = null;
        if (!StringUtils.isEmpty(nbr)) {
            UnitsValidationRequest request = new UnitsValidationRequest();
            request.setUnitList(nbr);
            request.setInboundVisit(inboundVisit);
            request.setOutboundVisit(outboundVisit);
            unistHasDebts = this.getRestTemplate().postForObject(getServiceUrl() + "/units-has-debts", request,
                    UnitsValidationResponse.class);
        }
        return unistHasDebts;
    }

    @Override
    public Invoice getByFinalNbr(@PathVariable("finalNbr") String finalNbr) throws BOException {
        Invoice invoice = null;
        if (!StringUtils.isEmpty(finalNbr)) {
            invoice = (Invoice) this.getRestTemplate().getForObject(getServiceUrl() + "/final/{finalNbr}",
                    Invoice.class, finalNbr);
        }
        return invoice;
    }

    @Override
    public GenerateOnlineInvoiceMdwRequest getOnlineInvoiceInformation(@PathVariable("finalNbr") String finalNbr)
            throws BOException {
        GenerateOnlineInvoiceMdwRequest request = null;
        if (!StringUtils.isEmpty(finalNbr)) {
            request = (GenerateOnlineInvoiceMdwRequest) this.getRestTemplate().getForObject(
                    getServiceUrl() + "/online-invoice-information/{finalNbr}", GenerateOnlineInvoiceMdwRequest.class,
                    finalNbr);
        }
        return request;
    }

    @Override
    public List<Invoice> getInvoicesByUnitNbr(String unitNbr) throws BOException {
        List<Invoice> invoices = null;
        if (!StringUtils.isEmpty(unitNbr)) {
            invoices = Arrays.asList(this.getRestTemplate().getForObject(getServiceUrl() + "/unit-nbr/{unitNbr}",
                    Invoice[].class, unitNbr));
        }
        return invoices;
    }

    @Override
    public boolean recordPayment(RecordPaymentRequest recordPaymentRequest, String invoiceByReferenceCodeList)
            throws BOException {
        RecordPaymentRequestWithReference recordPaymentRequestWithReference = new RecordPaymentRequestWithReference();
        recordPaymentRequestWithReference.setRecordPaymentRequest(recordPaymentRequest);
        recordPaymentRequestWithReference.setInvoiceByReferenceCodeList(invoiceByReferenceCodeList);
        return this.getRestTemplate().postForObject(getServiceUrl() + "/record-payment",
                recordPaymentRequestWithReference, Boolean.class);
    }

    @Override
    public boolean updateFlexFieldsByReferenceCode(InvoiceFlexFields invoiceFlexFields) throws BOException {
        return this.getRestTemplate().postForObject(getServiceUrl() + "/update-flex-fields-by-reference-code",
                invoiceFlexFields, Boolean.class);
    }

    @Override
    public boolean updateFlexFieldsByDraftNbr(InvoiceFlexFields invoiceFlexFields) throws BOException {
        return this.getRestTemplate().postForObject(getServiceUrl() + "/update-flex-fields-by-draft-nbr",
                invoiceFlexFields, Boolean.class);
    }

    @Override
    public List<String> loockedInvoices(PayuRequest payuRequest) throws BOException {
        return Arrays.asList(
                this.getRestTemplate().postForObject(getServiceUrl() + "/payu-locked", payuRequest, String[].class));
    }

    @Override
    public List<Invoice> getInvoicesByReferenceCode(String referenceCode) throws BOException {
        return Arrays.asList(this.getRestTemplate().getForObject(getServiceUrl() + "/reference-code/{referenceCode}",
                Invoice[].class, referenceCode));
    }

    @Override
    public List<Invoice> getInvoicesByReferenceCodeAndRole(String referenceCode, String role) throws BOException {
        return Arrays.asList(this.getRestTemplate().getForObject(getServiceUrl() + "/reference-code/{referenceCode}/{role}",
                Invoice[].class, referenceCode, role));
    }
    
    @Override
    public String finalizeInvoice(String drftInvoiceNbr) throws BOException {
    	InvoiceNbrServiceDTO result =this.getRestTemplate().getForObject(getServiceUrl() + "/finalize/{drftInvoiceNbr}",
                InvoiceNbrServiceDTO.class, drftInvoiceNbr);	
        return result.getInvoiceNbr();
    }
    
    public RestTemplate getRestTemplate() {
		return restTemplate;
	}

	public void setRestTemplate(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

}
