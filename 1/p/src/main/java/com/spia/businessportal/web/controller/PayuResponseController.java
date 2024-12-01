/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  23 de mar. de 2016 - 4:30:06 p. m.
 */
package com.spia.businessportal.web.controller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.spia.businessportal.common.entities.InvoicePortal;
import com.spia.businessportal.common.filters.InvoicePortalFilter;
import com.spia.businessportal.service.InvoiceByReferenceCodeService;
import com.spia.services.entities.billing.Invoice;
import com.spia.services.entities.billing.InvoiceFlexFields;
import com.spia.services.entities.billing.RecordPaymentRequest;
import com.spia.services.exception.BOException;
import com.spia.services.util.PaymentMethodConstants;

import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;

/**
 * Controlador encargado de manejar la respuesta de payu (tanto la página de
 * confirmación como la de respuesta).
 * 
 * En la página de respuesta sólo mostrará los datos de la transacción y
 * linkeará con el portal. La página de confirmación no tiene interfaz visual,
 * se encargará de actualizar N4 con los datos de la transacción.
 * 
 * @author leandro
 */
@Controller
@RequestMapping("/api/payuresponse")
public class PayuResponseController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(PayuResponseController.class);

	@Value("#{payu['api-key']}")
	private String apiKey;

	@Value("#{payu['api-login']}")
	private String apiLogin;

	@Value("#{payu['portal-receipt-pdf']}")
	private String urlPortalReceipt;

	@Value("#{payu['reference-code-suffix']}")
	private String referenceCodeSuffix;

	@Value("#{payu['collectingbankprefix']}")
	private String collectingBankPrefix;

	@Value("#{payu['cuentaContableId']}")
	private String cuentaContableId;

	@Autowired
	private InvoiceByReferenceCodeService invoiceByReferenceCodeService;

	/**
	 * Página de respuesta de payu.
	 * 
	 * @param request
	 * @param response
	 * @param payuParams
	 * @throws BOException
	 */
	@RequestMapping(value = { "" }, method = RequestMethod.GET)
	public ModelAndView showPayuResponse(HttpServletRequest request, HttpServletResponse response,
			@RequestParam Map<String, String> payuParams) throws BOException {
		ModelAndView mav = new ModelAndView("payuResponse");
		try {
			List<Invoice> invoices = this.getInvoiceMdwBO().getInvoicesByReferenceCode(payuParams.get("referenceCode"));
			String referenceCode = invoices.get(0).getReferenceCode();
			boolean pending = true;
			if (invoices != null && "PENDING".equals(invoices.get(0).getPaymentStatus())) {
				mav.addObject("invoices", invoices);
				mav.addObject("error", "La transacción se encuentra pendiente.");
				mav.addObject("pending", pending);
			} else {
				// mostrar el comprobante de pago
				pending = false;
				mav.addObject("pending", pending);
				mav.addObject("urlReceipt", urlPortalReceipt + referenceCode);
			}

			// mav.addObject("urlPortal",
			// "http://localhost:8080/businessPortal/agent#/bills");

		} catch (BOException e) {
			e.printStackTrace();
			LOG.error(e.getMessage());
			LOG.error(e.getCause());
			LOG.error(e.getStackTrace(), e);
			throw (e);
		}
		return mav;
	}

	/**
	 * Se encarga de actualizar N4 con los datos de respuesta enviados por payu.
	 * 
	 * @param request
	 * @param response
	 * @param payuTransactionResponse
	 * @throws NoSuchAlgorithmException
	 * @throws BOException
	 */
	@RequestMapping(value = { "" }, method = RequestMethod.POST)
	public void updatePaymentData(HttpServletRequest request, HttpServletResponse response)
			throws NoSuchAlgorithmException, BOException {
		HashMap<String, String[]> params = (HashMap<String, String[]>) request.getParameterMap();
		String[] strParams = {};
		String msg = null;
		InvoicePortal invoicePortal = null;
		try {
			List<InvoicePortal> invoicesPortal = this.getInvoicesNotAttended(params.get("reference_sale")[0]);
			// Procesar solicitudes atendidas que primero fueron declinadas, pero luego
			// aceptadas.
			if (invoicesPortal == null) {
				invoicesPortal = this.getInvoicesDeclined(params.get("reference_sale")[0]);
			}
			LOG.info("Llegó el request de payu");
			if (invoicesPortal != null && !invoicesPortal.isEmpty()) {
				LOG.info("Atiendo el request de payu");
				invoicePortal = invoicesPortal.get(0);
				invoicePortal.setPayuAttended("ATTENDED");
				saveInvoice(invoicePortal);
				String state = request.getParameter("state_pol");
				String merchantId = params.get("merchant_id")[0];
				String referenceSale = params.get("reference_sale")[0];
				String value = String.valueOf(params.get("value")[0]);
				String decimals = value.split("\\.")[1];
				if (decimals.endsWith("0")) {
					value = value.substring(0, value.length() - 1);
				}
				String currency = request.getParameter("currency");
				String stateDescription = request.getParameter("response_message_pol");
				// para N4 se estaba guardando response_code_pol, lo cambiamos por reference_pol
				String approvalNumber = params.get("reference_pol")[0];
				Double amount = Double.parseDouble(params.get("amount")[0]);
				String mask = apiKey + "~" + merchantId + "~" + referenceSale + "~" + value + "~" + currency + "~"
						+ state;
				String paymentDescription = request.getParameter("description");
				String cardNumber = null;

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

				LOG.info("mask: " + mask);
				LOG.info("encode: " + encode);
				LOG.info("sign: " + request.getParameter("sign"));

				if (encode.equals(request.getParameter("sign"))) {
					invoicePortal.setStatus(stateDescription);
					invoicePortal.setIp(params.get("ip")[0]);
					invoicePortal.setAmmount(new Float(params.get("value")[0]));
					invoicePortal.setApprovalNumber(params.get("reference_pol")[0]); // para N4 se guarda
																						// response_code_pol
					SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.ENGLISH);
					invoicePortal.setDate(dateformat.parse(params.get("transaction_date")[0]));
					invoicePortal.setPaymentMethod(
							PaymentMethodConstants.PaymentMethodPayu.get(params.get("payment_method_type")[0]));

					// PSE
					if ("4".equals(params.get("payment_method_type")[0])) {
						if (params.get("pse_bank") != null) {
							invoicePortal.setBank(params.get("pse_bank")[0]);
						}
						if (params.get("cus") != null) {
							invoicePortal.setCus(params.get("cus")[0]);
						}
					}
					// Tarjeta de crédito
					if ("2".equals(params.get("payment_method_type")[0])) {
						invoicePortal.setCreditCard(params.get("franchise")[0]);
						invoicePortal.setQuotas(Integer.parseInt(params.get("installments_number")[0]));
						cardNumber = params.get("cc_number")[0];
					}

					if (params.containsKey("errorCode")) {
						invoicePortal.setErrorCode(params.get("errorCode")[0]);
					}
					if (params.containsKey("errorMessage")) {
						invoicePortal.setErrorMessage(params.get("errorMessage")[0]);
					}
					this.getInvoicePortalBO().saveOrUpdate(invoicePortal);
					if ("4".equals(state)) {
						RecordPaymentRequest recordPaymentRequest = new RecordPaymentRequest();
						recordPaymentRequest.setApprovalNumber(approvalNumber);
						recordPaymentRequest.setPaymentMethod(invoicePortal.getPaymentMethod());
						recordPaymentRequest.setReferenceCode(referenceSale);
						recordPaymentRequest.setStatus(stateDescription);
						recordPaymentRequest.setBankName(invoicePortal.getBank());
						recordPaymentRequest.setPaymentDescription(paymentDescription);
						recordPaymentRequest.setAmount(amount);
						if ("2".equals(params.get("payment_method_type")[0]))
							recordPaymentRequest.setCardNumber(cardNumber);
						recordPaymentRequest.setCuentaContableId(cuentaContableId);
						try {
							/*
							 * TODO llamar a la funcion query para recuperar las facturas con un reference
							 * code Modificar record payment
							 **/
							String invoiceByReferenceCodeList = invoiceByReferenceCodeService
									.getAll(params.get("reference_sale")[0]);
							recordPaymentRequest.setN4FinalNbrs(invoiceByReferenceCodeList);
							if (!this.getInvoiceMdwBO().recordPayment(recordPaymentRequest,
									invoiceByReferenceCodeList)) {
								this.rolledBackPay(invoicePortal);
								LOG.error("Ocurrió un error al registrar el pago en Billing");
							}
						} catch (Exception e) {
							this.rolledBackPay(invoicePortal);
						}
					} else {
						InvoiceFlexFields invoiceFlexFields = new InvoiceFlexFields();
						invoiceFlexFields.setReferenceCode(referenceSale);
						invoiceFlexFields.setApprovalNumber(approvalNumber);
						invoiceFlexFields.setStatus(stateDescription);
						invoiceFlexFields.setPaymentDescription(paymentDescription);
						if ("2".equals(params.get("payment_method_type")[0]))
							invoiceFlexFields.setCardNumber(cardNumber);

						try {
							this.getInvoiceMdwBO().updateFlexFieldsByReferenceCode(invoiceFlexFields);
						} catch (Exception e) {
							this.rolledBackPay(invoicePortal);
						}
					}
				} else {
					this.rolledBackPay(invoicePortal);
					msg = getProperty("Controller.PayuSignError", strParams, getApplicationContext());
					LOG.error(msg);
					throw new BOException(msg);
				}
			} else {
				LOG.info("No atiendo el request de payu");
				msg = getProperty("Controller.PayuReferenceCodeNotFoundError", strParams, getApplicationContext());
				LOG.error(msg);
				throw new BOException(msg);
			}
		} catch (Exception e) {
			this.rolledBackPay(invoicePortal);
			LOG.error(e.getMessage(), e);
			throw new BOException(e);
		}
	}

	@Transactional(propagation = Propagation.REQUIRES_NEW)
	private List<InvoicePortal> getInvoicesDeclined(String referenceCode) throws BusinessException {
		InvoicePortalFilter filter = new InvoicePortalFilter();
		filter.setReferenceCode(referenceCode);
		filter.setPayuAttended("ATTENDED");
		List<InvoicePortal> result = this.getInvoicePortalBO().search(filter, new Page(1, 0)).getResult();
		if (result != null) {
			InvoicePortal invoice = result.get(0);
			if (invoice != null && !"APPROVED".equalsIgnoreCase(invoice.getStatus())
					&& !"PENDING".equalsIgnoreCase(invoice.getStatus()))
				return result;
		}
		return result;

	}

	@Transactional(propagation = Propagation.REQUIRES_NEW)
	private void saveInvoice(InvoicePortal invoicePortal) throws BusinessException {
		this.getInvoicePortalBO().saveOrUpdate(invoicePortal);
	}

	@Transactional(propagation = Propagation.REQUIRES_NEW)
	private List<InvoicePortal> getInvoicesNotAttended(String referenceCode) throws BusinessException {
		InvoicePortalFilter filter = new InvoicePortalFilter();
		filter.setReferenceCode(referenceCode);
		// para forzar a que el filtro lleve "and payu_attended = null"
		filter.setPayuAttended("null");
		return this.getInvoicePortalBO().search(filter, new Page(1, 0)).getResult();
	}

	/**
	 * Se encarga de actualizar datos de pago y generar reference code con los datos
	 * de respuesta enviados por banco recaudador.
	 * 
	 * @param request
	 * @param response
	 * @param payuTransactionResponse
	 * @return
	 * @throws NoSuchAlgorithmException
	 * @throws BOException
	 */

	@RequestMapping(value = { "recordpaymentforcollectingbank" }, method = RequestMethod.POST)
	public @ResponseBody InvoicePortal recordPaymentDataForCollectingBank(@RequestBody RecordPaymentRequest request)
			throws NoSuchAlgorithmException, BOException {
		String msg = null;
		try {
			InvoicePortalFilter filter = null;
			List<InvoicePortal> invoicePortalList = null;
			InvoicePortal invoicePortal = new InvoicePortal();
			
			filter = new InvoicePortalFilter();
			filter.setN4FinalNbrs(request.getN4FinalNbrs());
			
			invoicePortalList = this.getInvoicePortalBO().search(filter, new Page(1, 0))
					.getResult();
			
			filter = new InvoicePortalFilter();
			filter.setLastId(true);
			if (invoicePortalList != null && !invoicePortalList.isEmpty()) {
				String referenceCode = invoicePortalList.get(0).getReferenceCode();
				String status = invoicePortalList.get(0).getStatus();
				if(!referenceCode.contains(collectingBankPrefix) && status.equals("PENDING"))
				{
					invoicePortal = this.saveInvoicePortal(filter, request);
				}
			}
			else
			{
				invoicePortal = this.saveInvoicePortal(filter, request);
			}
	
            return invoicePortal;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            throw new BOException(e);
        }
    }

	/**
	 * Se encarga de actualizar datos de pago y generar reference code con los datos
	 * de respuesta enviados por banco recaudador.
	 * 
	 * @param request
	 * @param response
	 * @param payuTransactionResponse
	 * @return
	 * @throws NoSuchAlgorithmException
	 * @throws BOException
	 */

	@RequestMapping(value = { "deletepaymentforcollectingbank/{id}" }, method = RequestMethod.DELETE)
	public @ResponseBody void deletePaymentDataForCollectingBank(@PathVariable("id") Long invoiceID)
			throws NoSuchAlgorithmException, BOException {
		try {

			InvoicePortalFilter filter = new InvoicePortalFilter();
			filter.setId(invoiceID);
			filter.setPaymentMethod("CASH");
			List<InvoicePortal> invoicePortalList = this.getInvoicePortalBO().search(filter, new Page(1, 0))
					.getResult();
			if (invoicePortalList != null && !invoicePortalList.isEmpty()) {
				InvoicePortal invoicePortal = invoicePortalList.get(0);
				if (invoicePortal != null) {
					this.getInvoicePortalBO().delete(invoicePortal);
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			throw new BOException(e);

		}
	}

	/**
	 * Realiza el rolledBack de un pago determinado en base de datos
	 * 
	 * @param invoicePortal
	 * @author Andrés Falla
	 */
	private void rolledBackPay(InvoicePortal invoicePortal) {

		if (invoicePortal != null) {
			invoicePortal.setPayuAttended(null);
			invoicePortal.setStatus("PENDING");
			try {
				saveInvoice(invoicePortal);
			} catch (BusinessException e) {
				LOG.error("Ocurrió un error al realizar el rolled Back del pago: " + invoicePortal.getReferenceCode(),
						e);
			}
		}
	}
	
	private InvoicePortal saveInvoicePortal(InvoicePortalFilter filter, RecordPaymentRequest request) throws BusinessException {
		List<InvoicePortal> invoicePortalList = null;
		InvoicePortal invoicePortal = new InvoicePortal();
		filter = new InvoicePortalFilter();
		filter.setLastId(true);
		invoicePortalList = this.getInvoicePortalBO().search(filter, new Page(1, 0))
				.getResult();
		Long maxId = 1L;
		if (invoicePortalList != null && !invoicePortalList.isEmpty()) {
			maxId = invoicePortalList.get(0).getId() + 1;
		}
		// Guardo en base de datos para generar la secuencia.
		
		invoicePortal.createReferenceCode(collectingBankPrefix, maxId);
		invoicePortal
				.setBank((request.getBankPrefix() != null ? request.getBankPrefix() : "") + request.getBankName());
		invoicePortal.setPaymentMethod(request.getPaymentMethod());
		invoicePortal.setAmmount(request.getAmount().floatValue());
		invoicePortal.setApprovalNumber(request.getApprovalNumber());
		invoicePortal.setCreditCard(request.getCardNumber());
		invoicePortal.setStatus(request.getStatus());
		invoicePortal.setDate(new Date());
		// OVD se agrega seteo de campo
		invoicePortal.setN4FinalNbrs(request.getN4FinalNbrs());

        invoicePortal = this.getInvoicePortalBO().saveOrUpdate(invoicePortal);

        return invoicePortal;

	}

}