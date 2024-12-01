package com.spia.businessportal.web.controller;

import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import java.lang.reflect.Type;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.spia.businessportal.common.entities.InvoicePortal;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.filters.InvoicePortalFilter;
import com.spia.services.entities.billing.InvoiceFlexFields;
import com.spia.services.entities.billing.RecordPaymentRequest;
import com.spia.services.entities.payu.InvoicePayment;
import com.spia.services.entities.payu.PaymentPayuRequest;
import com.spia.services.entities.payu.PayuRequest;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/***
 * Controlador para la api de PayU
 */
@RequestMapping("/api/payu")
@Controller
public class PayuController extends AbstractController {

    private static final Log LOG = LogFactory.getLog(PayuController.class);

    @Value("#{payu['api-key']}")
    private String apiKey;

    @Value("#{payu['api-login']}")
    private String apiLogin;

    @Value("#{payu['response-url']}")
    private String responseUrl;

    @Value("#{payu['confirmation-url']}")
    private String confirmationUrl;

    @Value("${payu.response-new-url}")
    private String responseNewUrl;

    @Value("${payu.confirmation-new-url}")
    private String confirmationNewUrl;

    @Value("#{payu['reference-code-suffix']}")
    private String referenceCodeSuffix;

    @Value("#{payu['merchant-id']}")
    private String merchantId;

    @Value("#{payu['account-id']}")
    private String accountId;

    @Value("#{payu['test']}")
    private int test;

    @Value("#{payu['tax']}")
    private Float tax;

    @Value("#{payu['taxReturnBase']}")
    private Float taxReturnBase;

    @Value("#{payu['description']}")
    private String description;

    private String PayuError = "Controller.PayuError";

    @Value("#{esb['esb.password.key']}")
    private String key;

    @Value("#{esb['esb.password.initialVector']}")
    private String initVector;
    /***
     * Se envían las facturas a pagar a PayU Si se realizó el pago con éxito, se realiza el pago en N4
     * 
     * @param payuRequest
     * @return
     */
    @RequestMapping(
            value = "/pay",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> payInvoices(HttpServletRequest request, HttpServletResponse response,
            @RequestBody PayuRequest payuRequest) {
        ResponseEntity<?> re = null;
        String[] strParams = {};
        String msg = "";
        List<String> lockedInvoices = null;
        try {
            lockedInvoices = this.getInvoiceMdwBO().loockedInvoices(payuRequest);
            if (lockedInvoices == null || lockedInvoices.isEmpty()) {
                payuRequest.setCustomerId(payuRequest.getCustomerId());
                payuRequest.setStatus("PENDING");

                InvoiceFlexFields invoiceFlexFields = new InvoiceFlexFields();
                invoiceFlexFields.setApprovalNumber(payuRequest.getApprovalNumber());
                invoiceFlexFields.setReferenceCode(payuRequest.getReferenceCode());
                invoiceFlexFields.setStatus(payuRequest.getStatus());
                invoiceFlexFields.setDraftNbr(new ArrayList<String>());
                for (InvoicePayment i : payuRequest.getInvoicesToPay()) {
                    invoiceFlexFields.getDraftNbr().add(String.valueOf(i.getDraftNbr()));
                }
                re = new ResponseEntity<Boolean>(this.getInvoiceMdwBO().updateFlexFieldsByDraftNbr(invoiceFlexFields),
                        HttpStatus.OK);
            } else {
                msg = getProperty("Controller.PayuLockedInvoicesError", strParams, getApplicationContext());
                LOG.info(msg);
                for (String l : lockedInvoices) {
                    LOG.info("final-nbr : " + l);
                }
                ResponseError error = new ResponseError();
                error.setError(msg);
                re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            msg = getProperty(PayuError, strParams, getApplicationContext());
            LOG.error(msg, e);
            ResponseError error = new ResponseError();
            error.setError(msg);
            re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        }
        return re;
    }

    /***
     * Se envían las facturas a pagar a PayU Si se realizó el pago con éxito, se realiza el pago en N4
     * 
     * @param payuRequest
     * @return
     */
    @RequestMapping(
            value = "/form-data",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> loadFormData(HttpServletRequest request, HttpServletResponse response,
            @RequestBody PayuRequest payuRequest) {
        ResponseEntity<?> re = null;
        String[] strParams = {};
        String msg = "";
        boolean pay;
        List<Long> lockedInvoices = null;
        try {
            String userEmail = null;
            userEmail = this.getUserBO().getCurrentUser().getEmail();
            // Recupero el último id de la base.
            InvoicePortalFilter filter = new InvoicePortalFilter();
            filter.setLastId(true);
            // Guardo en base de datos para generar la secuencia.
            InvoicePortal invoicePortal = new InvoicePortal();

            invoicePortal.setStatus("PENDING");
            invoicePortal.setDate(new Date());
            invoicePortal.setAmmount(new Float(payuRequest.getTotalAmount()));
            String finalNbrs = "";
            for (InvoicePayment payment : payuRequest.getInvoicesToPay()) {
                finalNbrs += payment.getFinalNbr() + ",";
            }
            finalNbrs = finalNbrs.substring(0, finalNbrs.length() - 1);
            invoicePortal.setN4FinalNbrs(finalNbrs);
            invoicePortal.setCompanyName(this.getUserBO().getCurrentUser().getEmpresa().getCompanyName());
            this.getInvoicePortalBO().saveNew(invoicePortal);

            invoicePortal.createReferenceCode(referenceCodeSuffix, invoicePortal.getId());
            this.getInvoicePortalBO().saveOrUpdate(invoicePortal);

            // Actualizo el request.
            payuRequest.setReferenceCode(invoicePortal.getReferenceCode());
            PaymentPayuRequest paymentPayuRequest = new PaymentPayuRequest(payuRequest);

            String mask = apiKey + "~" + merchantId + "~" + paymentPayuRequest.getReferenceCode() + "~"
                    + payuRequest.getTotalAmount() + "~" + paymentPayuRequest.getCurrency();

            LOG.info("mask_________________________");
            LOG.info(mask);

            final MessageDigest digest = MessageDigest.getInstance("SHA-256");
            final byte[] hash = digest.digest(mask.getBytes("UTF-8"));
            final StringBuilder hexString = new StringBuilder();

            for (int i = 0; i < hash.length; i++) {
                final String hex = Integer.toHexString(0xff & hash[i]);
                if(hex.length() == 1) 
                hexString.append('0');
                hexString.append(hex);
            }

            String encode = hexString.toString();

            paymentPayuRequest.setSignature(encode);
            paymentPayuRequest.setResponseUrl(responseNewUrl);
            paymentPayuRequest.setConfirmationUrl(confirmationNewUrl);
            paymentPayuRequest.setDescription(description);
            if (userEmail != null && !"".equals(userEmail)) {
                paymentPayuRequest.setBuyerEmail(userEmail);
            }
            paymentPayuRequest.setTest(test);
            paymentPayuRequest.setTax(tax);
            paymentPayuRequest.setTaxReturnBase(taxReturnBase);
            paymentPayuRequest.setMerchantId(merchantId);
            paymentPayuRequest.setAccountId(accountId);
            re = new ResponseEntity<PaymentPayuRequest>(paymentPayuRequest, HttpStatus.OK);
        } catch (Exception e) {
            msg = getProperty(PayuError, strParams, getApplicationContext());
            LOG.error(msg, e);
            ResponseError error = new ResponseError();
            error.setError(msg);
            re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        }
        return re;
    }

    private String getDecimalPlaces(Float ammount) {
        String formato = "%.2f";
        String monto = Float.toString(ammount);
        int parteEntera = monto.indexOf('.');
        int parteDecimal = monto.length() - parteEntera - 1;
        if (parteDecimal == 0) {
            formato = "%.0f";
        }
        if (parteDecimal == 1) {
            if (monto.charAt(parteEntera + 1) == '0') {
                formato = "%.0f";
            } else {
                formato = "%.1f";
            }
        }
        if (parteDecimal == 2) {
            if (monto.charAt(parteEntera + 2) == '0') {
                formato = "%.1f";
            } else {
                formato = "%.2f";
            }
        }
        return formato;
    }

    /**
     * Recupera el total a pagar de todas las facturas.
     * 
     * @return
     */
    private Float getTotalAmount(List<InvoicePayment> payments) {
        Float amount = 0F;
        for (InvoicePayment i : payments) {
            amount += i.getTotalTotal();
        }
        return amount;
    }

    /**
     * Actualiza el pago en el portal buscandolo por su referenceCode.
     * 
     * @param invoicePortal
     * @return {@link InvoicePortal}
     * @throws BusinessException
     */
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public ResponseEntity<?> updateInvoicePortalByApiRequest(@RequestBody InvoicePortal invoicePortal)
            throws BusinessException {
        ResponseEntity re = null;
        String[] strParams = {};
        String msg = "";
        try {
            InvoicePortalFilter filter = new InvoicePortalFilter();
            filter.setReferenceCode(invoicePortal.getReferenceCode());
            List<InvoicePortal> storedInvoices = this.getInvoicePortalBO().search(filter, new Page(1, 0)).getResult();
            InvoicePortal invoice = storedInvoices.get(0);
            if (invoicePortal.getAmmount() != null) {
                invoice.setAmmount(invoicePortal.getAmmount());
            }
            if (invoicePortal.getApprovalNumber() != null) {
                invoice.setApprovalNumber(invoicePortal.getApprovalNumber());
            }
            if (invoicePortal.getBank() != null) {
                invoice.setBank(invoicePortal.getBank());
            }
            if (invoicePortal.getCreditCard() != null) {
                invoice.setCreditCard(invoicePortal.getCreditCard());
            }
            if (invoicePortal.getDate() != null) {
                invoice.setDate(invoicePortal.getDate());
            }
            if (invoicePortal.getErrorCode() != null) {
                invoice.setErrorCode(invoicePortal.getErrorCode());
            }
            if (invoicePortal.getErrorMessage() != null) {
                invoice.setErrorMessage(invoicePortal.getErrorMessage());
            }
            if (invoicePortal.getLastPaymentAttempt() != null) {
                invoice.setLastPaymentAttempt(invoicePortal.getLastPaymentAttempt());
            }
            if (invoicePortal.getPaymentMethod() != null) {
                invoice.setPaymentMethod(invoicePortal.getPaymentMethod());
            }
            if (invoicePortal.getQuotas() != null) {
                invoice.setQuotas(invoicePortal.getQuotas());
            }
            if (invoicePortal.getReferenceCode() != null) {
                invoice.setReferenceCode(invoicePortal.getReferenceCode());
            }
            if (invoicePortal.getStatus() != null) {
                invoice.setStatus(invoicePortal.getStatus());
            }
            if (invoicePortal.getLastPaymentAttempt() != null) {
                invoice.setLastPaymentAttempt(invoicePortal.getLastPaymentAttempt());
            }
            invoice.setPaymentAttempt(invoicePortal.getPaymentAttempt());

            this.getInvoicePortalBO().saveOrUpdate(invoice);
            re = new ResponseEntity<InvoicePortal>(invoice, HttpStatus.OK);
        } catch (Exception e) {

        }
        return re;
    }

    /***
     * Se envían las facturas a pagar a PayU Si se realizó el pago con éxito, se realiza el pago en N4
     * 
     * @param payuRequest
     * @return
     */
    @RequestMapping(
            value = "/multiple-form-data",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> loadMultipleFormData(HttpServletRequest request, HttpServletResponse response,
            @RequestBody PayuRequest payuRequest) {
        ResponseEntity<?> re = null;
        String[] strParams = {};
        String msg = "";
        boolean pay;
        List<Long> lockedInvoices = null;
        List<PaymentPayuRequest> paymentPayuRequests = new ArrayList<PaymentPayuRequest>();
        try {

            // Recupero el último id de la base.
            InvoicePortalFilter filter = new InvoicePortalFilter();
            filter.setLastId(true);
            List<InvoicePortal> maxIdInvoicePortal = this.getInvoicePortalBO().search(filter, new Page(1, 0))
                    .getResult();
            Long maxId = 1L;
            if (maxIdInvoicePortal != null && !maxIdInvoicePortal.isEmpty()) {
                maxId = maxIdInvoicePortal.get(0).getId() + 1;
            }
            for (InvoicePayment i : payuRequest.getInvoicesToPay()) {
                String userEmail = null;
                // if(SecurityUtils.isImpersonating()){
                // SecurityEsbResponse<UserNotificationEsb> companyNotification=
                // this.getSecurityEsbBO().getUserNotification(this.getUserBO().getCurrentUser().getN4UserId());
                // List<UserNotificationEsb> usersNotification = (List<UserNotificationEsb>) companyNotification.getResult();
                // SecurityEsbResponse<UserValidation> userInfo = this.getSecurityEsbBO().getUserInfo(usersNotification.get(0).getUserId());
                // UserValidation userValidation = (UserValidation) userInfo.getResult();
                // userEmail = userValidation.getAdminEmail();
                // }else{
                userEmail = this.getUserBO().getCurrentUser().getEmail();
                // }
                // Guardo en base de datos para generar la secuencia.
                InvoicePortal invoicePortal = new InvoicePortal();
                invoicePortal.createReferenceCode(referenceCodeSuffix, maxId);
                this.getInvoicePortalBO().saveNew(invoicePortal);
                maxId++;

                // Actualizo el request.
                payuRequest.setReferenceCode(invoicePortal.getReferenceCode());
                PaymentPayuRequest paymentPayuRequest = new PaymentPayuRequest(payuRequest, i);
                String mask = apiKey + "~" + merchantId + "~" + paymentPayuRequest.getReferenceCode() + "~"
                        + payuRequest.getTotalAmount() + "~" + paymentPayuRequest.getCurrency();

                MessageDigest digest = MessageDigest.getInstance("MD5");
                digest.update(mask.getBytes());
                byte[] d = digest.digest();
                StringBuffer sb = new StringBuffer();
                for (int it = 0; it < d.length; it++) {
                    sb.append(Integer.toString((d[it] & 0xff) + 0x100, 16).substring(1));
                }
                String encode = sb.toString();

                paymentPayuRequest.setSignature(encode);
                paymentPayuRequest.setResponseUrl(responseUrl);
                paymentPayuRequest.setConfirmationUrl(confirmationUrl);
                paymentPayuRequest.setDescription(description);

                if (userEmail != null && !"".equals(userEmail)) {
                    paymentPayuRequest.setBuyerEmail(userEmail);
                }
                paymentPayuRequest.setTax(tax);
                paymentPayuRequest.setTaxReturnBase(taxReturnBase);
                paymentPayuRequest.setTest(test);
                paymentPayuRequest.setMerchantId(merchantId);
                paymentPayuRequest.setAccountId(accountId);
                paymentPayuRequests.add(paymentPayuRequest);
            }

            re = new ResponseEntity<List<PaymentPayuRequest>>(paymentPayuRequests, HttpStatus.OK);
        } catch (Exception e) {
            msg = getProperty(PayuError, strParams, getApplicationContext());
            LOG.error(msg, e);
            ResponseError error = new ResponseError();
            error.setError(msg);
            re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        }
        return re;
    }

    /**
     * Registra el pago en N4
     * 
     * @param request
     * @return
     * @throws BusinessException
     */
    public ResponseEntity<?> updateN4InvoiceByApiRequest(@RequestBody RecordPaymentRequest request)
            throws BusinessException {
        ResponseEntity re = null;
        String[] strParams = {};
        String msg = "";
        String list = "";
        try {
            this.getInvoiceMdwBO().recordPayment(request, list);
        } catch (Exception e) {

        }
        return re;
    }

    /***
     * Botón que genera el request para pago de pse.
     * 
     * @param payuRequest
     * @return
     */
    @RequestMapping(
            value = "/form-data-pse",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> loadFormDataPSE(HttpServletRequest request, HttpServletResponse response,
            @RequestBody PayuRequest payuRequest) {
        ResponseEntity<?> re = null;
        String[] strParams = {};
        String msg = "";
        boolean pay;
        List<Long> lockedInvoices = null;
        try {
            // Recupero el último id de la base.
            InvoicePortalFilter filter = new InvoicePortalFilter();
            filter.setLastId(true);
            List<InvoicePortal> maxIdInvoicePortal = this.getInvoicePortalBO().search(filter, new Page(1, 0))
                    .getResult();
            Long maxId = 1L;
            if (maxIdInvoicePortal != null && !maxIdInvoicePortal.isEmpty()) {
                maxId = maxIdInvoicePortal.get(0).getId() + 1;
            }
            // Guardo en base de datos para generar la secuencia.
            InvoicePortal invoicePortal = new InvoicePortal();
            invoicePortal.createReferenceCode(referenceCodeSuffix, maxId);
            this.getInvoicePortalBO().saveNew(invoicePortal);
            // Actualizo el request.
            payuRequest.setReferenceCode(invoicePortal.getReferenceCode());
            PaymentPayuRequest paymentPayuRequest = new PaymentPayuRequest(payuRequest);
            String mask = apiKey + "~" + merchantId + "~" + paymentPayuRequest.getReferenceCode() + "~"
                    + String.format("%.0f", paymentPayuRequest.getAmount()) + "~" + paymentPayuRequest.getCurrency();

            MessageDigest digest = MessageDigest.getInstance("MD5");
            digest.update(mask.getBytes(), 0, mask.length());
            byte[] d = digest.digest();
            StringBuffer sb = new StringBuffer();
            for (byte b : d) {
                sb.append(String.format("%02x", b & 0xff));
            }
            String encode = sb.toString();

            paymentPayuRequest.setSignature(encode);
            paymentPayuRequest.setResponseUrl(responseUrl);
            paymentPayuRequest.setConfirmationUrl(confirmationUrl);
            paymentPayuRequest.setTest(0);
            paymentPayuRequest.setDescription(description);
            re = new ResponseEntity<PaymentPayuRequest>(paymentPayuRequest, HttpStatus.OK);
        } catch (Exception e) {
            msg = getProperty(PayuError, strParams, getApplicationContext());
            LOG.error(msg, e);
            ResponseError error = new ResponseError();
            error.setError(msg);
            re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        }
        return re;
    }

    @RequestMapping(
            value = "/check-locked",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> checkForLockedInvoices(HttpServletRequest request, HttpServletResponse response,
            @RequestBody PayuRequest payuRequest) {
        ResponseEntity re = null;
        String[] strParams = {};
        String msg = "";
        List<String> lockedInvoices = null;
        try {

            lockedInvoices = this.getInvoiceMdwBO().loockedInvoices(payuRequest);
            if (lockedInvoices == null || lockedInvoices.isEmpty()) {
                re = new ResponseEntity<Boolean>(true, HttpStatus.OK);
            } else {
                msg = getProperty("Controller.PayuLockedInvoicesError", strParams, getApplicationContext());
                LOG.info(msg);
                for (String l : lockedInvoices) {
                    LOG.info("final-nbr : " + l);
                }
                ResponseError error = new ResponseError();
                error.setError(msg);
                re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            msg = getProperty(PayuError, strParams, getApplicationContext());
            LOG.error(msg, e);
            ResponseError error = new ResponseError();
            error.setError(msg);
            re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);

        }
        return re;
    }
}
