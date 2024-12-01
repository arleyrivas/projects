/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  3 de nov. de 2015 - 9:50:06 a. m.
 */
package com.spia.businessportal.web.controller;

import java.io.IOException;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import com.google.gson.Gson;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.spia.businessportal.common.utils.AESEncryptionUtil;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.krysalis.barcode4j.impl.code128.Code128LogicImpl;
import org.krysalis.barcode4j.impl.code128.EAN128Bean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.servlet.ModelAndView;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spia.businessportal.common.entities.CachedInvoices;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.GenerateInvoiceRequestDTO;
import com.spia.businessportal.common.entities.dto.InvoiceDTO;
import com.spia.businessportal.common.entities.dto.InvoiceDetailReportDTO;
import com.spia.businessportal.common.entities.dto.InvoiceServiceDTO;
import com.spia.businessportal.common.entities.dto.InvoicesCriteriaRequestDTO;
import com.spia.businessportal.common.entities.dto.ItemInvoiceReportDTO;
import com.spia.businessportal.common.entities.dto.ReceiptReportDTO;
import com.spia.businessportal.common.entities.dto.UnitValidationDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.ConvertNumberToLetters;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.common.utils.JasperUtils;
import com.spia.businessportal.constant.DateFormatConstant;
import com.spia.businessportal.service.FinancialService;
import com.spia.businessportal.service.InvoiceService;
import com.spia.services.entities.Booking;
import com.spia.services.entities.LineOperator;
import com.spia.services.entities.UnitFacilityVisit;
import com.spia.services.entities.VesselVisit;
import com.spia.services.entities.billing.Charge;
import com.spia.services.entities.billing.CurrencyExchange;
import com.spia.services.entities.billing.Customer;
import com.spia.services.entities.billing.FinalizeInvoiceBilling;
import com.spia.services.entities.billing.FinalizeInvoiceResponse;
import com.spia.services.entities.billing.GenerateInvoiceRequest;
import com.spia.services.entities.billing.Invoice;
import com.spia.services.entities.billing.InvoiceCriteria;
import com.spia.services.entities.billing.InvoiceInformation;
import com.spia.services.entities.billing.InvoiceParameter;
import com.spia.services.entities.billing.InvoicesByContainerNbrResponse.InvoiceNumber;
import com.spia.services.entities.billing.InvoicesCriteriaRequest;
import com.spia.services.entities.billing.Payment;
import com.spia.services.entities.billing.Payments;
import com.spia.services.entities.billing.Tax;
import com.spia.services.entities.billing.TaxesInvoice;
import com.spia.services.exception.BOException;
import com.spia.services.exception.ServiceException;
import com.spia.services.util.Constants;
import com.spia.services.util.PaymentMethodReceiptEnum;
import com.spia.services.util.PaymentStatusReceiptEnum;
import org.springframework.beans.factory.annotation.Value;
import ar.com.fluxit.framework.common.exception.BusinessException;
import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

/**
 * @author leandro
 * Controlador donde se expone la api de negocios del portal para {@link com.spia.services.entities.billing.Invoice}
 */
/**
 * @author leandro
 *
 */
@RequestMapping("/api/invoice")
@Controller
public class InvoiceController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(ApplicationManagerController.class);

	@Value("#{barCodeProperties['appid1']}")
	private String appid1;
	@Value("#{barCodeProperties['appid2']}")
	private String appid2;
	@Value("#{barCodeProperties['appid3']}")
	private String appid3;
	@Value("#{barCodeProperties['appid4']}")
	private String appid4;
	@Value("#{barCodeProperties['ean13']}")
	private String barCodeEan13;
	@Value("#{invoice['fn.preffix']}")
	private String fnPreffix;
	@Value("#{invoice['fo.preffix']}")
	private String foPreffix;
	@Value("#{invoice['forma.pago.1']}")
	private String formaPago1;
	@Value("#{invoice['forma.pago.2']}")
	private String formaPago2;
	@Value("#{invoice['forma.pago.3']}")
	private String formaPago3;

	@Value("#{esb['esb.password.key']}")
	private String key;

	@Value("#{esb['esb.password.initialVector']}")
	private String initVector;

	@Autowired
	private InvoiceService invoiceService;

	@Autowired
	private FinancialService financialService;

	private String roleAgent = "Agent";
	private String roleShipperConsignee = "Shipper/Consignee";

	/**
	 * devuelve el invoice por su nro.
	 * 
	 * @param invoiceNbr número de draft
	 * @return {@link com.spia.services.entities.billing.Invoice}
	 */
	@RequestMapping(value = "/{invoiceNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity get(@PathVariable String invoiceNbr) {
		invoiceNbr = EncoderDecoder.decodeBase64(invoiceNbr);
		Invoice invoice = null;
		ResponseEntity re = null;
		try {
			invoice = this.getInvoiceMdwBO().get(invoiceNbr);
			re = new ResponseEntity<Invoice>(invoice, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.InvoiceRetrievalError", strParams, getApplicationContext());
			LOG.error(msg + invoiceNbr, e);
			ResponseError error = new ResponseError();
			error.setError(msg + invoiceNbr);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Retorna todos los invoice para el cliente pagador logueado.
	 * 
	 * @param invoicesCriteriaDTO request que contiene client, container y final nbr
	 * @return {@link com.spia.services.entities.billing.Invoice}
	 */
	@RequestMapping(value = "/all", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity all(@RequestBody InvoicesCriteriaRequestDTO criteria) {
		ResponseEntity re = null;
		
		try {
			List<InvoiceServiceDTO> invoicesLst = invoiceService.getAll(criteria.getFinalNbr(), criteria.getContainer(),
					criteria.getFromDate(), criteria.getToDate(), criteria.getState(), criteria.getClient(), criteria.getPage());
			if (invoicesLst != null) {
				if (!invoicesLst.isEmpty()) {
					String parsedResponse = new Gson().toJson(invoicesLst); 
					String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /all InvoiceController");

					re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
				} else {
					String[] strParams = {};
					String msg = getProperty("Controller.InvoiceListNotFound", strParams, getApplicationContext());
					ResponseError error = new ResponseError();
					error.setError(msg);
					re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
				}

			} else {
				String[] strParams = {};
				String msg = getProperty("Controller.InvoiceListNotFound", strParams, getApplicationContext());
				ResponseError error = new ResponseError();
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
			}

		} catch (Exception e) {
			String[] strParams = { "invoices", "agent & customer" };
			String msg = getProperty("Controller.InvoiceRetrievalErrorParameterized", strParams,
					getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Retorna un Pdf en base64.
	 * 
	 * @param nbrInvoice
	 * @return {@link com.spia.services.entities.billing.Invoice}
	 */

	@RequestMapping(value = "/financial/pdf/{nbrInvoice}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getFinancialPdf(@PathVariable String nbrInvoice) {

		ResponseEntity re = null;
		try {
			String pdfDTO = financialService.getPdf(nbrInvoice);
			if (pdfDTO != null && !pdfDTO.equals("Error")) {
				re = new ResponseEntity<String>(pdfDTO, HttpStatus.OK);
			} else {
				String[] strParams = {};
				String msg = getProperty("Controller.InvoiceListNotFound", strParams, getApplicationContext());
				ResponseError error = new ResponseError();
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
			}

		} catch (Exception e) {
			String[] strParams = { "invoices", "agent & customer" };
			String msg = getProperty("Controller.InvoiceRetrievalErrorParameterized", strParams,
					getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Retorna un invoice por su nro de draft.
	 * 
	 * @param draft nro de draft del invoice
	 * @return {@link com.spia.services.entities.billing.Invoice}
	 * @throws BOException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/draft/{draft}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity getDraft(@PathVariable("draft") String draft) throws BOException {
		draft = EncoderDecoder.decodeBase64(draft);
		Invoice invoice = null;
		ResponseEntity re = null;
		try {
			invoice = this.getInvoiceMdwBO().getDraft(draft);
			re = new ResponseEntity<Invoice>(invoice, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = { "invoice", "draft" };
			String msg = getProperty("Controller.InvoiceRetrievalErrorParameterized", strParams,
					getApplicationContext());
			LOG.error(msg + draft, e);
			ResponseError error = new ResponseError();
			error.setError(msg + draft);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;

	}

	/**
	 * Crea los invoices en estado draft. En el caso de que alguno falle, crea sólo
	 * los que pudo y retorna también un mensaje de advertencia.
	 * 
	 * @param generateInvoiceRequestDTO request para la creación del invoice
	 * @return {@link com.spia.services.entities.billing.Invoice}
	 * @throws BOException          cuando hay un error en los servicios mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 */
	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity create(@RequestBody GenerateInvoiceRequestDTO generateInvoiceRequestDTO)
			throws BOException, JsonParseException, JsonMappingException, IOException {
		Invoice invoice = null;
		ResponseEntity re = null;
		try {
			String currentN4UserId = this.getUserBO().getCurrentUser().getEmpresa().getId();
			List<GenerateInvoiceRequest> requests = new ArrayList<>();
			for (String unitNbr : generateInvoiceRequestDTO.getUnits()) {
				GenerateInvoiceRequest generateInvoiceRequest = new GenerateInvoiceRequest();

				generateInvoiceRequest.setAction(Constants.Billing.DRAFT);
				generateInvoiceRequest.setRequester(Constants.Billing.QUERY_CHARGES);
				generateInvoiceRequest.setInvoiceTypeId(Constants.Billing.INVOICE_TYPE);
				generateInvoiceRequest.setAgent(currentN4UserId);
				generateInvoiceRequest.getInvoiceFlexFields().setFlexString10(currentN4UserId);
				generateInvoiceRequest.setPayeeCustomerBizRole(Constants.Billing.ROLE_CONSIGNEE);
				generateInvoiceRequest.setCurrencyId(Constants.Billing.MONEDA_COP);
				generateInvoiceRequest.setInvoiceParameters(new ArrayList<InvoiceParameter>());
				generateInvoiceRequest.setNotes(generateInvoiceRequestDTO.getNotes());
				InvoiceParameter invoiceParameter = new InvoiceParameter();
				invoiceParameter.setEquipmentId(unitNbr);
				invoiceParameter.setBexuBlNbr(generateInvoiceRequestDTO.getBl());
				invoiceParameter.setBexuBookingNbr(generateInvoiceRequestDTO.getBkg());
				Calendar cal = Calendar.getInstance();
				// Cuando es expo se debe setear la fecha de actual
				if (generateInvoiceRequestDTO.getDate() == null) {
					VesselVisit visit = this.getBookingMdwBo()
							.getBookingVesselVisit(generateInvoiceRequestDTO.getBkg());
					SimpleDateFormat dateformat = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
					String fecha = dateformat.format(visit.getETA());
					cal.setTime(dateformat.parse(fecha));
				} else
					// Si es impo se eligió la fecha al facturar
					cal.setTime(generateInvoiceRequestDTO.getDate());

				cal.set(Calendar.HOUR_OF_DAY, 23);
				cal.set(Calendar.MINUTE, 59);
				cal.set(Calendar.SECOND, 59);

				invoiceParameter.setPaidThruDay(cal.getTime());
				generateInvoiceRequest.getInvoiceParameters().add(invoiceParameter);
				generateInvoiceRequest.setPayeeCustomerId(generateInvoiceRequestDTO.getCustomerId());
				generateInvoiceRequest.setContractCustomerId(generateInvoiceRequestDTO.getCustomerId());
				requests.add(generateInvoiceRequest);
			}
			invoice = this.getInvoiceMdwBO().create(requests);
			// TODO estaria bueno ver si tiene cargos facturables antes de crear el invoice,
			// no se si se puede
			if (invoice == null) {

				String[] strParams = {};
				String msg = getProperty("Controller.BillableUnitError", strParams, getApplicationContext());
				LOG.info(msg);
				ResponseError error = new ResponseError();
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.NO_CONTENT);
			}
			// Si cree al menos un draft por cada contenedor, devuelvo el invoice sin
			// mensaje de error
			if ((invoice != null && invoice.getCharges() != null) && (generateInvoiceRequestDTO.getUnits()
					.size() == this.unitsResponse(invoice.getCharges().getCharge()))) {
				InvoiceDTO invoiceDTO = new InvoiceDTO(invoice, null);
				re = new ResponseEntity<InvoiceDTO>(invoiceDTO, HttpStatus.CREATED);
			} else {
				// Si cree menos drafts que units enviados (alguno falló) devuelvo una
				// advertencia.
				String[] strParams = {};
				String error = getProperty("Controller.InvoiceDraftError", strParams, getApplicationContext());
				InvoiceDTO invoiceDTO = new InvoiceDTO(invoice, error);
				LOG.info(invoiceDTO.getError());
				re = new ResponseEntity<InvoiceDTO>(invoiceDTO, HttpStatus.CREATED);
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.InvoiceCreationError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			if (e instanceof HttpServerErrorException) {
				ObjectMapper mapper = new ObjectMapper();
				String httpError = ((HttpServerErrorException) e).getResponseBodyAsString();
				error = mapper.readValue(httpError, ResponseError.class);
				error.setError(error.getMessage());
			}
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * POST invoice/finalize finaliza un invoice que se encuentra en estado draft de
	 * carga suelta
	 * 
	 * @param invoice invoice que se va a finalizar
	 * @return un invoice donde se le actualiza el FinalizedDate y FinalNumber
	 * @throws BOException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/finalizeBbk/{draftNbr}", method = RequestMethod.POST)
	public ResponseEntity finalizeInvoiceBbk(@PathVariable Integer draftNbr) throws BOException {
		ResponseEntity re = null;
		try {
			//Invoice invoice = new Invoice();
			//invoice.setFinalizedDate(new Date());
			//SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss Z", Locale.ENGLISH);
			
			String finalizeResponseInvoice = this.getInvoiceMdwBO().finalizeInvoice(draftNbr.toString());
			if (finalizeResponseInvoice != null && !finalizeResponseInvoice.equals("ERROR")) {
				//invoice.setFinalNumber(finalizeResponseInvoice);
				re = new ResponseEntity<String>(finalizeResponseInvoice, HttpStatus.OK);
			} else {
				String[] strParams = {};
				String msg = getProperty("Controller.InvoiceFinalizeError", strParams, getApplicationContext());
				ResponseError error = new ResponseError();
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
			
//			FinalizeInvoiceBilling finalizeInvoiceBilling = new FinalizeInvoiceBilling(draftNbr,
//					dateformat.format(invoice.getFinalizedDate()));
//			FinalizeInvoiceResponse finalizeResponseInvoice = this.getInvoiceMdwBO()
//					.finalizeInvoice(finalizeInvoiceBilling);
//			invoice.setFinalNumber(finalizeResponseInvoice.getInvoiceFinalNbr());
//			re = new ResponseEntity<String>(invoice.getFinalNumber(), HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.InvoiceFinalizeError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;

	}

	/**
	 * Crea los invoices en estado draft para carga suelta. En el caso de que alguno
	 * falle, crea sólo los que pudo y retorna también un mensaje de advertencia.
	 * 
	 * @param generateInvoiceRequestDTO request para la creación del invoice para
	 *                                  carga suelta
	 * @return {@link com.spia.services.entities.billing.Invoice}
	 * @throws BOException          cuando hay un error en los servicios mdw.
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonParseException
	 */
	@RequestMapping(value = "/createBbk", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity createBbk(@RequestBody GenerateInvoiceRequestDTO generateInvoiceRequestDTO)
			throws BOException, JsonParseException, JsonMappingException, IOException {
		Invoice invoice = null;
		ResponseEntity re = null;
		try {
			String currentN4UserId = this.getUserBO().getCurrentUser().getEmpresa().getId();
			List<GenerateInvoiceRequest> requests = new ArrayList<>();
			for (String unitNbr : generateInvoiceRequestDTO.getUnits()) {
				GenerateInvoiceRequest generateInvoiceRequest = new GenerateInvoiceRequest();

				generateInvoiceRequest.setAction(Constants.Billing.DRAFT);
				generateInvoiceRequest.setRequester("");
				generateInvoiceRequest.setInvoiceTypeId(Constants.Billing.INVOICE_TYPE_BBK);
				generateInvoiceRequest.setAgent(currentN4UserId);
				generateInvoiceRequest.getInvoiceFlexFields().setFlexString10(currentN4UserId);
//                generateInvoiceRequest.getInvoiceFlexFields().setFlexString02(generateInvoiceRequestDTO.getBl());
				generateInvoiceRequest.setPayeeCustomerBizRole(Constants.Billing.ROLE_CONSIGNEE);
				generateInvoiceRequest.setCurrencyId(Constants.Billing.MONEDA_COP);
				generateInvoiceRequest.setInvoiceParameters(new ArrayList<InvoiceParameter>());
				generateInvoiceRequest.setNotes(generateInvoiceRequestDTO.getNotes());
				InvoiceParameter invoiceParameter = new InvoiceParameter();
//                invoiceParameter.setEquipmentId(unitNbr);
				invoiceParameter.setBexuBlNbr(generateInvoiceRequestDTO.getBl());
				invoiceParameter.setBexuBookingNbr(null);
				Calendar cal = Calendar.getInstance();
				cal.setTime(generateInvoiceRequestDTO.getDate());
				cal.set(Calendar.HOUR_OF_DAY, 23);
				cal.set(Calendar.MINUTE, 59);
				cal.set(Calendar.SECOND, 59);
				invoiceParameter.setPaidThruDay(cal.getTime());
				generateInvoiceRequest.getInvoiceParameters().add(invoiceParameter);
				generateInvoiceRequest.setPayeeCustomerId(generateInvoiceRequestDTO.getCustomerId());
				generateInvoiceRequest.setContractCustomerId(generateInvoiceRequestDTO.getCustomerId());
				requests.add(generateInvoiceRequest);
			}
			invoice = this.getInvoiceMdwBO().createBbk(requests);
			if (invoice == null) {

				String[] strParams = {};
				String msg = getProperty("Controller.BillableUnitError", strParams, getApplicationContext());
				LOG.info(msg);
				ResponseError error = new ResponseError();
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.NO_CONTENT);
			}
			// Si cree al menos un draft por cada contenedor, devuelvo el invoice sin
			// mensaje de error
			if ((invoice != null && invoice.getCharges() != null) && (generateInvoiceRequestDTO.getUnits()
					.size() == this.unitsResponse(invoice.getCharges().getCharge()))) {
				InvoiceDTO invoiceDTO = new InvoiceDTO(invoice, null);
				re = new ResponseEntity<InvoiceDTO>(invoiceDTO, HttpStatus.CREATED);
			} else {
				// Si cree menos drafts que units enviados (alguno falló) devuelvo una
				// advertencia.
				String[] strParams = {};
				String error = getProperty("Controller.InvoiceDraftError", strParams, getApplicationContext());
				InvoiceDTO invoiceDTO = new InvoiceDTO(invoice, error);
				LOG.info(invoiceDTO.getError());
				re = new ResponseEntity<InvoiceDTO>(invoiceDTO, HttpStatus.CREATED);
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.InvoiceCreationError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			if (e instanceof HttpServerErrorException) {
				ObjectMapper mapper = new ObjectMapper();
				String httpError = ((HttpServerErrorException) e).getResponseBodyAsString();
				error = mapper.readValue(httpError, ResponseError.class);
				error.setError(error.getMessage());
			}
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * retorna la cantidad de cargos del invoice.
	 * 
	 * @param charges cargos del invoice
	 * @return int cantidad de cargos
	 */
	private int unitsResponse(List<Charge> charges) {
		Set<String> units = new HashSet<String>();
		for (Charge charge : charges) {
			units.add(charge.getEntityId());
		}
		return units.size();
	}

	/**
	 * PUT invoice/finalize finaliza un invoice que se encuentra en estado draft
	 * 
	 * @param invoice invoice que se va a finalizar
	 * @return un invoice donde se le actualiza el FinalizedDate y FinalNumber
	 * @throws BOException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/finalize", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity finalizeInv(@RequestBody Invoice invoice) throws BOException {
		ResponseEntity re = null;
		try {
			invoice.setFinalizedDate(new Date());
			SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss Z", Locale.ENGLISH);
			FinalizeInvoiceBilling finalizeInvoiceBilling = new FinalizeInvoiceBilling(invoice.getDraftNumber(),
					dateformat.format(invoice.getFinalizedDate()));
			FinalizeInvoiceResponse finalizeResponseInvoice = this.getInvoiceMdwBO()
					.finalizeInvoice(finalizeInvoiceBilling);
			invoice.setFinalNumber(finalizeResponseInvoice.getInvoiceFinalNbr());
			re = new ResponseEntity<Invoice>(invoice, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.InvoiceFinalizeError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;

	}

	/**
	 * Retorna los
	 * {@link com.spia.services.entities.billing.InvoicesByContainerNbrResponse.InvoiceNumber}
	 * por su nro de unit.
	 * 
	 * @param units units de los cuales se requiere el invoice
	 * @return {@link com.spia.services.entities.billing.InvoicesByContainerNbrResponse.InvoiceNumber}
	 * @throws BOException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/get-invoice-number-by-units", method = RequestMethod.POST)
	public ResponseEntity getFinalizedByContainer(@RequestBody List<String> units) throws BOException {
		List<InvoiceNumber> invoiceNumbers = null;
		ResponseEntity re = null;
		try {
			invoiceNumbers = this.getInvoiceMdwBO().getFinalizedByContainer(units);
			re = new ResponseEntity<List<InvoiceNumber>>(invoiceNumbers, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = { "invoice", "containers" };
			String msg = getProperty("Controller.InvoiceRetrievalErrorParameterized", strParams,
					getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Retorna los invoice por su agente y cliente.
	 * 
	 * @return {@link com.spia.services.entities.billing.Invoice}
	 * @throws BOException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/agent-and-customer", method = RequestMethod.GET)
	public ResponseEntity getDraftsByAgentAndCustomer() throws BOException {
		List<Invoice> invoices = null;
		ResponseEntity re = null;
		try {
			InvoiceCriteria invoiceCriteria = new InvoiceCriteria();
			invoices = this.getInvoiceMdwBO().getDraftsByAgentAndCustomer(invoiceCriteria);
			re = new ResponseEntity<List<Invoice>>(invoices, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = { "invoices", "agent & customer" };
			String msg = getProperty("Controller.InvoiceRetrievalErrorParameterized", strParams,
					getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Retorna la información del invoice porel id y el rol.
	 * 
	 * @param id   id del invoice
	 * @param role rol
	 * @return {@link com.spia.services.entities.billing.InvoiceInformation}
	 * @throws BOException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/information/{id}/{role}", method = RequestMethod.GET)
	public ResponseEntity getInvoiceInformation(@PathVariable("id") String id, @PathVariable("role") String role)
			throws BOException {
		InvoiceInformation invoiceInformation = null;
		ResponseEntity re = null;
		try {
			invoiceInformation = this.getInvoiceMdwBO().getInvoiceInformation(id, role);
			re = new ResponseEntity<InvoiceInformation>(invoiceInformation, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = { "invoice" };
			String msg = getProperty("Controller.InvoiceError", strParams, getApplicationContext());
			LOG.error(msg + " " + id, e);
			ResponseError error = new ResponseError();
			error.setError(msg + " " + id);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Cancela un invoice.
	 * 
	 * @param invoice factura que se va a cancelar
	 * @return String
	 * @throws BOException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/cancel", method = RequestMethod.POST)
	public ResponseEntity cancelInvoice(@RequestBody Invoice invoice) throws BOException {
		ResponseEntity re = null;
		try {
			invoice = this.getInvoiceMdwBO().unmergeAndCancelInvoice(String.valueOf(invoice.getDraftNumber()));
			String msj = "El draft " + invoice.getDraftNumber() + " ha sido cancelado con éxito.";
			re = new ResponseEntity<String>(msj, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = { "invoice" };
			String msg = getProperty("Controller.InvoiceError", strParams, getApplicationContext());
			LOG.error(msg + " " + String.valueOf(invoice.getDraftNumber()), e);
			ResponseError error = new ResponseError();
			error.setError(msg + " " + String.valueOf(invoice.getDraftNumber()));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;

	}

	/**
	 * Cancela un invoice BBK.
	 * 
	 * @param draftNbr N�mero de la factura que se va a cancelar
	 * @return String
	 * @throws BOException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/cancelBBK", method = RequestMethod.POST)
	public ResponseEntity cancelInvoice(@RequestBody Map<String, String> draftNumber) throws BOException {
		ResponseEntity re = null;
		try {
			Invoice invoice = this.getInvoiceMdwBO().unmergeAndCancelInvoice(draftNumber.get("data"));
			String msj = "El draft " + draftNumber + " ha sido cancelado con éxito.";
			re = new ResponseEntity<String>(msj, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = { "invoice" };
			String msg = getProperty("Controller.InvoiceError", strParams, getApplicationContext());
			LOG.error(msg + " " + String.valueOf(draftNumber), e);
			ResponseError error = new ResponseError();
			error.setError(msg + " " + String.valueOf(draftNumber));
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;

	}

	/**
	 * Filtra los invoice por los siguientes criterios: cliente, unit, final number,
	 * rango de fechas, usuario pagador.
	 * 
	 * @param criteria criterio de búsqueda de facturas
	 * @return {@link com.spia.services.entities.billing.Invoice}
	 */
	@RequestMapping(value = "/filter/{page}/{amount}", method = RequestMethod.POST)
	public ResponseEntity filter(@RequestBody InvoicesCriteriaRequestDTO criteria, @PathVariable Integer page,
			@PathVariable Integer amount) {
		ResponseEntity re = null;
		List<Invoice> invoices = null;
		try {
			String n4UserId = this.getUserBO().getCurrentUser().getEmpresa().getId();
			if (criteria.getClient() == null && criteria.getContainer() == null && criteria.getFinalNbr() == null
					&& criteria.getFromDate() == null && criteria.getToDate() == null) {
				invoices = this.getInvoiceMdwBO().getByAgent(n4UserId);
			} else {
				InvoicesCriteriaRequest request = new InvoicesCriteriaRequest();
				request.setClient(criteria.getClient());
				request.setContainer(criteria.getContainer());
				request.setFinalNbr(criteria.getFinalNbr());
				request.setFromDate(criteria.getFromDate());
				request.setToDate(criteria.getToDate());
				if (this.getUserBO().hasPermission(User.COMPANY_TYPE_CUSTOMER)) {
					request.setShipperAndConsignee(n4UserId);
				} else {
					request.setAgent(n4UserId);
				}
				invoices = this.getInvoiceMdwBO().getDraftsByFilter(request);
				if (invoices != null) {
					invoices = new ArrayList<Invoice>(invoices);
					boolean paid = false;
					if (criteria.getState() != null) {
						paid = "paga".equals(criteria.getState().toLowerCase());
					}
					List<Invoice> invoicesToRemove = new ArrayList<Invoice>();
					for (Invoice i : invoices) {
						if (paid) {
							if (i.getTotalOwed() > (0.0) || i.getTotalTotal().equals(0.0)) {
								invoicesToRemove.add(i);
							}
						} else {
							if (i.getTotalOwed().equals(0.0) || i.getTotalTotal().equals(0.0)) {
								invoicesToRemove.add(i);
							}
						}

					}
					invoices.removeAll(invoicesToRemove);
				}
			}
			if (invoices != null && !invoices.isEmpty()) {
				Collections.sort(invoices, Invoice.COMPARE_BY_FINAL_NUMBER);
			}
			CachedInvoices.setInvoices(invoices);
			re = new ResponseEntity<List<Invoice>>(CachedInvoices.getSubList(page, amount), HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = { "invoices" };
			String msg = getProperty("Controller.InvoiceError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Retorna todos los invoices correspondientes al unitNbr
	 * 
	 * @param unitNbr número del unit al cuál se le crearon las facturas.
	 * @return {@link com.spia.services.entities.billing.Invoice}
	 */
	@RequestMapping(value = "/unit-nbr/{unitNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getInvoicesByUnitNbr(@PathVariable String unitNbr) {
		ResponseEntity re = null;
		List<Invoice> invoices = null;
		// unitNbr = EncoderDecoder.decodeBase64(unitNbr);
		try {
			invoices = this.getInvoiceMdwBO().getInvoicesByUnitNbr(unitNbr);
			if (invoices != null && !invoices.isEmpty()) {
				String parsedResponse = new Gson().toJson(invoices); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /unit-nbr/{unitNbr} InvoiceController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			} else {
				String[] strParams = { "invoices" };
				String msg = getProperty("Controller.InvoiceError", strParams, getApplicationContext());
				ResponseError error = new ResponseError();
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			String[] strParams = { "invoices" };
			String msg = getProperty("Controller.InvoiceError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Retorna si un unit tiene deudas.
	 * 
	 * @param nbr nro de unit
	 * @return boolean
	 * @throws BOException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/has-debts/{nbr}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody UnitValidationDTO unitHasDebts(@PathVariable String nbr) throws BOException {
		UnitValidationDTO unitInDebtDTO = new UnitValidationDTO();
		unitInDebtDTO.setUnitNbr(nbr);
		try {
			boolean hasDebts = this.getInvoiceMdwBO().unitHasDebts(nbr);
			unitInDebtDTO.setHasDebt(hasDebts);
		} catch (Exception e) {
			String[] strParams = { nbr };
			String msg = getProperty("Controller.InvoicePaymentStateError", strParams, getApplicationContext());
			LOG.error(msg, e);
			throw new BOException(msg, e);
		}
		return unitInDebtDTO;
	}

	/**
	 * Retorna un invoice por su final number
	 * 
	 * @param nbr nro final de la factura
	 * @return {@link com.spia.services.entities.billing.Invoice}
	 * @throws BOException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/final/{nbr}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity getInvoiceByFinalNbr(@PathVariable String nbr) throws BOException {
		ResponseEntity re = null;
		try {
			Invoice invoice = this.getInvoiceMdwBO().getByFinalNbr(nbr);
			if (invoice != null) {
				re = new ResponseEntity<Invoice>(invoice, HttpStatus.OK);
			} else {
				String[] strParams = {};
				String msg = getProperty("Controller.InvoiceNotFoundError", strParams, getApplicationContext());
				LOG.info(msg);
				ResponseError error = new ResponseError();
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.InvoiceNotFoundError", strParams, getApplicationContext());
			LOG.error(msg);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Imprime la factura
	 * 
	 * @param id       nro de draft del invoice que se va a imprimir
	 * @param request  petición http
	 * @param response respuesta http
	 * @return pdf
	 */
	@RequestMapping(value = "/pdf/{id}", method = RequestMethod.GET)
	public ModelAndView pdf(@PathVariable("id") String id, HttpServletRequest request, HttpServletResponse response) {
		String reporte = "Invoice.jrxml";
		Invoice invoiceInformation = null;
		try {
			invoiceInformation = this.getInvoiceMdwBO().getDraft(id);
			if (invoiceInformation != null) {
				generatePDF(invoiceInformation, request, response, reporte);
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.InvoicePDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		return new ModelAndView("");
	}

	/**
	 * Imprime la factura obteniendola por su final number.
	 * 
	 * @param id       nro final de la factura que se va a imprimir
	 * @param request  petición http
	 * @param response respuesta http
	 * @return ModelAndView
	 */
	@RequestMapping(value = "/pdf/final/{id}", method = RequestMethod.GET)
	public ModelAndView pdfByFinalNbr(@PathVariable("id") String id, HttpServletRequest request,
			HttpServletResponse response) {
		Invoice invoiceInformation = null;
		try {
			invoiceInformation = this.getInvoiceMdwBO().getByFinalNbr(id);
			if (invoiceInformation != null) {
				if ("L. FACTURA_SERVICIOS_EMBALAJE_CAFE_AZUCAR".equals(invoiceInformation.getInvoiceTypeId())) {
					generateCafePDF(invoiceInformation, request, response, "Invoice-portal-cafe-azucar.jrxml");
				}
				if ("I.  FACTURA_SERVICIOS_CARGA_SUELTA".equals(invoiceInformation.getInvoiceTypeId())) {
					generateFacturaCargaSueltaPDF(invoiceInformation, request, response,
							"Invoice-portal-breakbulk.jrxml");
				}
				if ("J.  HIM.FACTURA MANUAL OPERACIONALES".equals(invoiceInformation.getInvoiceTypeId())) {
					generateFacturaManualPDF(invoiceInformation, request, response, "Invoice-portal-manual.jrxml");
				}
				if ("B. FACTURA_SERVICIOS_CONTE_CLIENTES".equals(invoiceInformation.getInvoiceTypeId())) {
					generatePDF(invoiceInformation, request, response, "Invoice.jrxml");
				}
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.InvoicePDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		return new ModelAndView("");
	}

	@RequestMapping(value = "/scroll/{page}/{amount}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> scrollInvoice(@PathVariable Integer page, @PathVariable Integer amount) {
		ResponseEntity<?> re = null;
		List<Invoice> invoiceSubList = null;
		if (CachedInvoices.getInvoices() != null && !CachedInvoices.getInvoices().isEmpty()) {
			invoiceSubList = CachedInvoices.getSubList(page, amount);
		}
		re = new ResponseEntity<List<Invoice>>(invoiceSubList, HttpStatus.OK);
		return re;
	}

	/**
	 * Generación del pdf de la factura.
	 * 
	 * @param invoiceInformation información del la factura
	 * @param request            petición http
	 * @param response           respuesta http
	 * @param reporte            reporte de jasper
	 * @throws Exception
	 */

	private void generatePDF(Invoice invoiceInformation, HttpServletRequest request, HttpServletResponse response,
			String reporte) throws Exception {

		DecimalFormat noDecimalFormat = new DecimalFormat("###");
		SimpleDateFormat dateFormat = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
		HashMap<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("SUPERPUERTOS",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/superpuertosHorizontal.jpg"));
		parameterMap.put("LogoFactura",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/LogoPuertoAguadulceColor.jpg"));
		List<InvoiceDetailReportDTO> invoicesReportDTO = new ArrayList<InvoiceDetailReportDTO>();
		Customer payeeCustomer = this.getCustomerMdwBO().getByIdAndRole(invoiceInformation.getAgent(),
				Constants.Billing.ROLES.get(roleAgent));
		Map<Double, TaxesInvoice> mapTaxes = new HashMap<Double, TaxesInvoice>();

		Invoice mergedInvoice = null;
		UnitFacilityVisit ufv = null;

		// tomo el primer cargo para sacar datos en común
		if (invoiceInformation.getCharges().getCharge() != null) {
			Charge charge = invoiceInformation.getCharges().getCharge().get(0);
			mergedInvoice = this.getInvoiceMdwBO().getDraft(charge.getRelatedInvoiceDraftNumber());
			ufv = this.getUnitFacilityVisitMdwBo().getSingleUnitById(charge.getEntityId(), "1");
		}

		InvoiceDetailReportDTO invoiceDTO = new InvoiceDetailReportDTO();

		invoiceDTO.setInvoiceFinalNbr(invoiceInformation.getFinalNumber());
		invoiceDTO.setInvoiceDueDate(invoiceInformation.getDueDate());
		invoiceDTO.setInvoiceFinalizedDate(invoiceInformation.getCreated());
		invoiceDTO.setInvoiceCurrencyId(invoiceInformation.getCurrency().toUpperCase());

		// contracCustomer
		Customer customer = null;
		if (mergedInvoice != null && mergedInvoice.getContractCustomerId() != null) {
			customer = this.getCustomerMdwBO().getByIdAndRole(mergedInvoice.getContractCustomerId(),
					Constants.Billing.ROLES.get(roleShipperConsignee));
		} else {
			customer = this.getCustomerMdwBO().getByIdAndRole(invoiceInformation.getContractCustomerId(),
					Constants.Billing.ROLES.get(roleShipperConsignee));
		}

		CurrencyExchange changeUSD = null;
		String fechaCreacion = null;
		SimpleDateFormat dtUSD = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
		if (mergedInvoice != null && mergedInvoice.getFinalizedDate() != null) {
			fechaCreacion = dtUSD.format(mergedInvoice.getFinalizedDate());
		} else {
			fechaCreacion = dtUSD.format((invoiceInformation.getFinalizedDate()));
		}
		changeUSD = this.getCurrencyMdwBO().get(fechaCreacion);

		if (customer != null) {
			invoiceDTO.setInvoiceContractCustomerName(customer.getName());
			invoiceDTO.setInvoiceContractCustomerTaxId(customer.getId());
			String dir = "";
			if (customer.getAddressLine1() != null)
				dir = customer.getAddressLine1().concat(" ");
			if (customer.getAddressLine2() != null)
				dir = dir.concat(customer.getAddressLine2()).concat(" ");
			if (customer.getAddressLine3() != null)
				dir = dir.concat(customer.getAddressLine3());
			invoiceDTO.setInvoiceContractCustomerAddress1(dir);
			invoiceDTO.setInvoiceContractCustomerCity(customer.getCity());
			invoiceDTO.setInvoiceContractCustomerTel(customer.getTel());
		}

		// Datos del pagador
		if (payeeCustomer != null) {
			invoiceDTO.setInvoicePayeeCustomerName(payeeCustomer.getName());
			String dir = "";
			if (payeeCustomer.getAddressLine1() != null)
				dir = payeeCustomer.getAddressLine1().concat(" ");
			if (payeeCustomer.getAddressLine2() != null)
				dir = dir.concat(payeeCustomer.getAddressLine2()).concat(" ");
			if (payeeCustomer.getAddressLine3() != null)
				dir = dir.concat(payeeCustomer.getAddressLine3());
			invoiceDTO.setInvoicePayeeCustomerAddress1(dir);
			invoiceDTO.setInvoicePayeeCustomerTaxId(payeeCustomer.getId());
			invoiceDTO.setInvoicePayeeCustomerCity(payeeCustomer.getCity());
			invoiceDTO.setInvoicePayeeCustomerTel(payeeCustomer.getTel());
		}

		// visita id
		String vesselVisitId = null;

		if (ufv != null) {
			// línea
			LineOperator line = this.getLineOperatorMdwBo().get(ufv.getLine());
			invoiceDTO.setInvoiceInvEventLineOperatorName(line.getName());
			// BL
			if (ufv.getBillsOfLading() != null) {
				invoiceDTO.setInvoiceParmInvIbVisitId(ufv.getBillsOfLading().get(0).getBlNumber());
				vesselVisitId = ufv.getBillsOfLading().get(0).getCarrierVisit();
			}
			// conocimiento de embarque
			if (ufv.getBooking() != null) {
				invoiceDTO.setInvoiceParmInvObVisitId(ufv.getBooking().getId());
				Booking booking = this.getBookingMdwBo().get(ufv.getBooking().getId(), null, null, null, null);
				vesselVisitId = booking.getCarrierVisit();
			}
		}

		invoiceDTO.setInvoiceInvEventIbVisitId(vesselVisitId);
		invoiceDTO.setVesselVisitId(vesselVisitId);
		SimpleDateFormat dtFecha = new SimpleDateFormat("dd/MM/yyyy");
		SimpleDateFormat dtHora = new SimpleDateFormat(DateFormatConstant.HH_mm);
		String fechaLiquidacion = null;
		String horaLiquidacion = null;
		if (invoiceInformation.getPaidThruDay() != null) {
			fechaLiquidacion = dtFecha.format(invoiceInformation.getPaidThruDay());
			horaLiquidacion = dtHora.format(invoiceInformation.getDueDate().getTime());
		}
		// buque
		VesselVisit vesselVisit = this.getVesselVisitMdwBO().get(vesselVisitId);
		if (vesselVisit != null) {
			invoiceDTO.setVesselName(vesselVisit.getVesselName());

			if (ufv.getBooking() != null) {
				fechaLiquidacion = dtFecha.format(vesselVisit.getETA());
				horaLiquidacion = dtHora.format(vesselVisit.getETA().getTime());
			}

			invoiceDTO.setItemFechaLiquidacion("LIQUIDACIÓN HASTA " + fechaLiquidacion);
		}

		// TRM
		invoiceDTO.setTrm(changeUSD.getExchangeRate());

		// Totales
		invoiceDTO.setInvoiceTotalCharges(invoiceInformation.getTotalCharges().doubleValue()); // total de cargos sin
																								// iva
		invoiceDTO.setInvoiceTotalTaxes(invoiceInformation.getTotalTaxes().doubleValue()); // total de iva
		invoiceDTO.setInvoiceTotalTotal(invoiceInformation.getTotalTotal().doubleValue()); // total cargos + iva

		// Monto en letras
		String ammountStr = null;
		if (!"".equals(invoiceInformation.getCufe()) && invoiceInformation.getCufe() != null) {
			ammountStr = invoiceInformation.getCufe();
		} else {
			ammountStr = String.valueOf(invoiceInformation.getTotalTotal());
			ConvertNumberToLetters convert = new ConvertNumberToLetters();
			ammountStr = convert.convertir(ammountStr, true);
		}

		invoiceDTO.setTotalLetters(ammountStr);

		invoiceDTO.setNotes(invoiceInformation.getNotes() != null ? invoiceInformation.getNotes() : "");
		String formaPago1 = this.formaPago1 != null ? this.formaPago1 : "";
		String formaPago2 = this.formaPago2 != null ? this.formaPago2 : "";
		String formaPago3 = this.formaPago3 != null ? this.formaPago3 : "";
		invoiceDTO.setFormaPago1(formaPago1);
		invoiceDTO.setFormaPago2(formaPago2);
		invoiceDTO.setFormaPago3(formaPago3);
		// Código de barras
		SimpleDateFormat barcodeDateformat = new SimpleDateFormat("yyyyMMdd");
		String finalNbr = invoiceInformation.getFinalNumber();
		if (finalNbr.startsWith("FO") || finalNbr.startsWith("FN")) {
			finalNbr = finalNbr.substring(2, finalNbr.length()).trim();
		}
		String barcodeFinalNbr = StringUtils.leftPad(String.valueOf(finalNbr), 24, "0");
		String barcodeAmount = StringUtils
				.leftPad(String.valueOf(noDecimalFormat.format(Math.round(invoiceInformation.getTotalTotal())))
						.replaceAll("[\\,\\.]", ""), 14, "0");
		String barcodeDate = barcodeDateformat.format(invoiceInformation.getDueDate());
		final char FNC1 = Code128LogicImpl.FNC_1;
		final char CD = EAN128Bean.DEFAULT_CHECK_DIGIT_MARKER;

		invoiceDTO.setBarCode(
				appid1 + barCodeEan13 + appid2 + barcodeFinalNbr + appid3 + barcodeAmount + appid4 + barcodeDate);
		invoiceDTO.setBarCodeLabel("(" + appid1 + ")" + barCodeEan13 + "(" + appid2 + ")" + barcodeFinalNbr + "("
				+ appid3 + ")" + barcodeAmount + "(" + appid4 + ")" + barcodeDate);

		// Leyenda de resolución
		if (invoiceInformation.getFinalNumber().toUpperCase().startsWith("FO")) {
			invoiceDTO.setNumberEnabled(foPreffix);
		}
		if (invoiceInformation.getFinalNumber().toUpperCase().startsWith("FN")) {
			invoiceDTO.setNumberEnabled(fnPreffix);
		}
		// ítems del detalle
		List<ItemInvoiceReportDTO> items = new ArrayList<ItemInvoiceReportDTO>();
		for (Charge charge : invoiceInformation.getCharges().getCharge()) {
			ItemInvoiceReportDTO item = new ItemInvoiceReportDTO();

			item.setItemEventEntityId(charge.getEntityId());
			if ("STORAGE".equals(charge.getEventTypeId()) || "REEFER".equals(charge.getEventTypeId())
					&& (charge.getEventPerformedFrom() != null && !"".equals(charge.getEventPerformedFrom()))
					&& (charge.getEventPerformedTo() != null && !"".equals(charge.getEventPerformedTo()))) {
				String fromDate = dtFecha.format(charge.getEventPerformedFrom());
				String toDate = dtFecha.format(charge.getEventPerformedTo());
				item.setItemTariffDescription(charge.getDescription() + " - " + fromDate + " al " + toDate);
			} else
				item.setItemTariffDescription(charge.getDescription());
			item.setItemQuantityBilled(charge.getQuantityBilled().doubleValue());
			item.setItemQuantityUnit(charge.getQuantityUnit());
			// Tarifa en USD
			double rateBilledUSD = charge.getRateBilled();
			item.setItemRateBilled(rateBilledUSD); // valor tax en USD
			Double totalMonto = charge.getAmount() + 0D;
			item.setItemAmount(totalMonto.doubleValue()); // valor tax + precio base (item sin taxes)
			String taxItemString = "";
			// Antes de recorrer los impuestos, tengo que controlar si es el primer cargo
			// para no sumar de más en los montos correspondientes a
			// calcular el impuesto.
			boolean firstCharge = true;
			// cada cargo puede tener 1 o más taxes
			for (Tax tax : charge.getTaxes().getTax()) {
				// Datos de los cargos, discriminados por taxes
				// Pueden haber taxes 0.0 que no sean de G0 = Excento. Todos los 0.0 que no son
				// excento se suman como Excluído.
				// Si contiene la clave 0.0, y el item es G0, entonces es excento
				if ((mapTaxes.containsKey(tax.getTaxRate().getRate()) && ("G0".equals(tax.getTaxRate().getTaxId()))) ||
				// ó si el item contiene 0.0, pero no es GO, entonces es excluído y tiene que
				// tener la clave 9999F
						((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))
								&& mapTaxes.containsKey(9999F))
						||
						// ó es algún tax que no es ni excento ni excluído
						((mapTaxes.containsKey(tax.getTaxRate().getRate()))
								&& (!tax.getTaxRate().getRate().equals(0.00D)))) {

					TaxesInvoice taxTotal = null;
					// Si es G0 es excento, pero si tiene 0.0 y no es G0 es excluído.
					if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))) {
						taxTotal = mapTaxes.get(9999D);
						taxItemString = "Excluído";
					} else {
						taxTotal = mapTaxes.get(tax.getTaxRate().getRate());
					}
					Double chargeAmount = 0D;
					if (firstCharge) {
						chargeAmount = charge.getAmount();
					}

					Double totalCharges = taxTotal.getTotalChargeAmmount() + charge.getAmount();
					taxTotal.setTotalChargeAmmount(totalCharges);
					Double totalTaxes = taxTotal.getTotalTaxAmmount() + tax.getAmount();
					taxTotal.setTotalTaxAmmount(totalTaxes);
					firstCharge = false;
				} else {
					TaxesInvoice taxTotal = new TaxesInvoice();
					taxTotal.setTaxAmmount(tax.getAmount());// importe tax
					taxTotal.setChargeAmmount(charge.getAmount()); // importe cargo
					taxTotal.setTotalChargeAmmount(charge.getAmount());
					taxTotal.setTotalTaxAmmount(tax.getAmount());
					// Si no es G0, pero tiene 0.0 es excluído
					if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))) {
						mapTaxes.put(9999D, taxTotal); // excluido es 0.0, necesito otra clave
						taxItemString = "Excluído";
					} else {
						taxItemString = String.valueOf(tax.getTaxRate().getRate() * 100) + "%";
						mapTaxes.put(tax.getTaxRate().getRate(), taxTotal);
					}
				}

				if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D)))
					taxItemString = "Excluído";
				else {
					Double taxItem = tax.getTaxRate().getRate() * 100;
					Integer taxInt = taxItem.intValue();
					item.setTaxItem((Integer.toString(taxInt)).concat("%")); // item iva del detalle
				}

				item.setItemAmount(charge.getAmount().doubleValue());

			} // fin taxes
			if (item.getTaxItem() == null) {
				item.setTaxItem(taxItemString);
			}
			if ("".equals(item.getTaxItem())) {
				item.setTaxItem("Excento");
			}
			items.add(item);

		} // fin cargos
		Collections.sort(items, ItemInvoiceReportDTO.COMPARE_BY_NBR);
		// agrego al final los totales de taxes
		Double key16 = 0.16D;
		if (mapTaxes.containsKey(key16)) {
			TaxesInvoice tax16 = mapTaxes.get(key16);
			invoiceDTO.setTotalBase16(tax16.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva16(tax16.getTotalTaxAmmount().doubleValue());
		}
		Double key5 = 0.05D;
		if (mapTaxes.containsKey(key5)) {
			TaxesInvoice tax5 = mapTaxes.get(key5);
			invoiceDTO.setTotalBase5(tax5.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva5(tax5.getTotalTaxAmmount().doubleValue());
		}
		Double key0 = 0.00D;
		if (mapTaxes.containsKey(key0)) {
			TaxesInvoice tax0 = mapTaxes.get(key0);
			invoiceDTO.setTotalBase0(tax0.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva0(tax0.getTotalTaxAmmount().doubleValue());
		}
		Double keyExc = 9999D;
		if (mapTaxes.containsKey(keyExc)) {
			TaxesInvoice taxExc = mapTaxes.get(keyExc);
			invoiceDTO.setTotalBaseExcluido(taxExc.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIvaExcluido(taxExc.getTotalTaxAmmount().doubleValue());
		}
		// fin totales taxes

		// agrego items al invoice
		invoiceDTO.setItems(items);
		invoicesReportDTO.add(invoiceDTO);
		JasperReport jasperReport = null;
		try {
			JasperPrint jasperPrint = null;

			JRDataSource invoiceDataSource = new JRBeanCollectionDataSource(invoicesReportDTO);
			JasperUtils.exportReport(reporte, jasperReport, parameterMap, invoiceDataSource, jasperPrint, request,
					response);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinPDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
	}

	/**
	 * Generación del pdf de la factura de café y azúcar.
	 * 
	 * @param invoiceInformation información del la factura
	 * @param request            petición http
	 * @param response           respuesta http
	 * @param reporte            reporte de jasper
	 * @throws Exception
	 */

	private void generateCafePDF(Invoice invoiceInformation, HttpServletRequest request, HttpServletResponse response,
			String reporte) throws Exception {

		DecimalFormat noDecimalFormat = new DecimalFormat("###");
		SimpleDateFormat dateFormat = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
		HashMap<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("SUPERPUERTOS",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/superpuertosHorizontal.jpg"));
		parameterMap.put("LogoFactura",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/LogoPuertoAguadulceColor.jpg"));
		List<InvoiceDetailReportDTO> invoicesReportDTO = new ArrayList<InvoiceDetailReportDTO>();
		Customer payeeCustomer = this.getCustomerMdwBO().getByIdAndRole(invoiceInformation.getAgent(),
				Constants.Billing.ROLES.get(roleAgent));
		Map<Double, TaxesInvoice> mapTaxes = new HashMap<Double, TaxesInvoice>();

		Invoice mergedInvoice = null;
		UnitFacilityVisit ufv = null;

		// tomo el primer cargo para sacar datos en común
		if (invoiceInformation.getCharges().getCharge() != null) {
			Charge charge = invoiceInformation.getCharges().getCharge().get(0);
			mergedInvoice = this.getInvoiceMdwBO().getDraft(charge.getRelatedInvoiceDraftNumber());
			ufv = this.getUnitFacilityVisitMdwBo().getSingleUnitById(charge.getEntityId(), "0");
		}

		InvoiceDetailReportDTO invoiceDTO = new InvoiceDetailReportDTO();

		invoiceDTO.setInvoiceFinalNbr(invoiceInformation.getFinalNumber());
		invoiceDTO.setInvoiceDueDate(invoiceInformation.getDueDate());
		invoiceDTO.setInvoiceFinalizedDate(invoiceInformation.getCreated());
		invoiceDTO.setInvoiceCurrencyId(invoiceInformation.getCurrency().toUpperCase());

		// contracCustomer
		Customer customer = null;
		if (mergedInvoice != null && mergedInvoice.getContractCustomerId() != null) {
			customer = this.getCustomerMdwBO().getByIdAndRole(mergedInvoice.getContractCustomerId(),
					Constants.Billing.ROLES.get(roleShipperConsignee));
		} else {
			customer = this.getCustomerMdwBO().getByIdAndRole(invoiceInformation.getContractCustomerId(),
					Constants.Billing.ROLES.get(roleShipperConsignee));
		}

		CurrencyExchange changeUSD = null;
		String fechaCreacion = null;
		SimpleDateFormat dtUSD = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
		if (mergedInvoice != null && mergedInvoice.getFinalizedDate() != null) {
			fechaCreacion = dtUSD.format(mergedInvoice.getFinalizedDate());
		} else {
			fechaCreacion = dtUSD.format((invoiceInformation.getFinalizedDate()));
		}
		changeUSD = this.getCurrencyMdwBO().get(fechaCreacion);

		if (customer != null) {
			invoiceDTO.setInvoiceContractCustomerName(customer.getName());
			invoiceDTO.setInvoiceContractCustomerTaxId(customer.getId());
			String dir = "";
			if (customer.getAddressLine1() != null)
				dir = customer.getAddressLine1().concat(" ");
			if (customer.getAddressLine2() != null)
				dir = dir.concat(customer.getAddressLine2()).concat(" ");
			if (customer.getAddressLine3() != null)
				dir = dir.concat(customer.getAddressLine3());
			invoiceDTO.setInvoiceContractCustomerAddress1(dir);
			invoiceDTO.setInvoiceContractCustomerCity(customer.getCity());
			invoiceDTO.setInvoiceContractCustomerTel(customer.getTel());
		}

		// Datos del pagador
		if (payeeCustomer != null) {
			invoiceDTO.setInvoicePayeeCustomerName(payeeCustomer.getName());
			String dir = "";
			if (payeeCustomer.getAddressLine1() != null)
				dir = payeeCustomer.getAddressLine1().concat(" ");
			if (payeeCustomer.getAddressLine2() != null)
				dir = dir.concat(payeeCustomer.getAddressLine2()).concat(" ");
			if (payeeCustomer.getAddressLine3() != null)
				dir = dir.concat(payeeCustomer.getAddressLine3());
			invoiceDTO.setInvoicePayeeCustomerAddress1(dir);
			invoiceDTO.setInvoicePayeeCustomerTaxId(payeeCustomer.getId());
			invoiceDTO.setInvoicePayeeCustomerCity(payeeCustomer.getCity());
			invoiceDTO.setInvoicePayeeCustomerTel(payeeCustomer.getTel());
		}

		// visita id
		String vesselVisitId = null;

		if (ufv != null) {
			// línea
			LineOperator line = this.getLineOperatorMdwBo().get(ufv.getLine());
			invoiceDTO.setInvoiceInvEventLineOperatorName(line.getId());
			// BL
			if (ufv.getBillsOfLading() != null) {
				invoiceDTO.setInvoiceParmInvIbVisitId(ufv.getBillsOfLading().get(0).getBlNumber());
				vesselVisitId = ufv.getBillsOfLading().get(0).getCarrierVisit();
			}
			// conocimiento de embarque
			if (ufv.getBooking() != null) {
				invoiceDTO.setInvoiceParmInvObVisitId(ufv.getBooking().getId());
				Booking booking = this.getBookingMdwBo().get(ufv.getBooking().getId(), null, null, null, null);
				vesselVisitId = booking.getCarrierVisit();
			}
		}

		invoiceDTO.setInvoiceInvEventIbVisitId(vesselVisitId);

		SimpleDateFormat dtFecha = new SimpleDateFormat("dd/MM/yyyy");
		SimpleDateFormat dtHora = new SimpleDateFormat(DateFormatConstant.HH_mm);
		String fechaLiquidacion = null;
		String horaLiquidacion = null;
		if (invoiceInformation.getPaidThruDay() != null) {
			fechaLiquidacion = dtFecha.format(invoiceInformation.getPaidThruDay());
			horaLiquidacion = dtHora.format(invoiceInformation.getDueDate().getTime());
		}
		// buque
		VesselVisit vesselVisit = this.getVesselVisitMdwBO().get(vesselVisitId);
		invoiceDTO.setVesselVisitId(vesselVisit.getInVoyNbr());
		if (vesselVisit != null) {
			invoiceDTO.setVesselName(vesselVisit.getVesselName());

			if (ufv.getBooking() != null) {
				fechaLiquidacion = dtFecha.format(vesselVisit.getETA());
				horaLiquidacion = dtHora.format(vesselVisit.getETA().getTime());
			}

			invoiceDTO.setItemFechaLiquidacion("LIQUIDACIÓN HASTA " + fechaLiquidacion);
		}

		// TRM
		invoiceDTO.setTrm(changeUSD.getExchangeRate());

		// Totales
		invoiceDTO.setInvoiceTotalCharges(invoiceInformation.getTotalCharges().doubleValue()); // total de cargos sin
																								// iva
		invoiceDTO.setInvoiceTotalTaxes(invoiceInformation.getTotalTaxes().doubleValue()); // total de iva
		invoiceDTO.setInvoiceTotalTotal(invoiceInformation.getTotalTotal().doubleValue()); // total cargos + iva

		// Monto en letras
		String ammountStr = null;
		if (!"".equals(invoiceInformation.getCufe()) && invoiceInformation.getCufe() != null) {
			ammountStr = invoiceInformation.getCufe();
		} else {
			ammountStr = String.valueOf(invoiceInformation.getTotalTotal());
			ConvertNumberToLetters convert = new ConvertNumberToLetters();
			ammountStr = convert.convertir(ammountStr, true);
		}

		invoiceDTO.setTotalLetters(ammountStr);

		invoiceDTO.setNotes(invoiceInformation.getNotes() != null ? invoiceInformation.getNotes() : "");
		String formaPago1 = this.formaPago1 != null ? this.formaPago1 : "";
		String formaPago2 = this.formaPago2 != null ? this.formaPago2 : "";
		String formaPago3 = this.formaPago3 != null ? this.formaPago3 : "";
		invoiceDTO.setFormaPago1(formaPago1);
		invoiceDTO.setFormaPago2(formaPago2);
		invoiceDTO.setFormaPago3(formaPago3);
		// Código de barras
		SimpleDateFormat barcodeDateformat = new SimpleDateFormat("yyyyMMdd");
		String finalNbr = invoiceInformation.getFinalNumber();
		if (finalNbr.startsWith("FO") || finalNbr.startsWith("FN")) {
			finalNbr = finalNbr.substring(2, finalNbr.length()).trim();
		}
		String barcodeFinalNbr = StringUtils.leftPad(String.valueOf(finalNbr), 24, "0");
		String barcodeAmount = StringUtils
				.leftPad(String.valueOf(noDecimalFormat.format(Math.round(invoiceInformation.getTotalTotal())))
						.replaceAll("[\\,\\.]", ""), 14, "0");
		String barcodeDate = barcodeDateformat.format(invoiceInformation.getDueDate());
		final char FNC1 = Code128LogicImpl.FNC_1;
		final char CD = EAN128Bean.DEFAULT_CHECK_DIGIT_MARKER;

		invoiceDTO.setBarCode(
				appid1 + barCodeEan13 + appid2 + barcodeFinalNbr + appid3 + barcodeAmount + appid4 + barcodeDate);
		invoiceDTO.setBarCodeLabel("(" + appid1 + ")" + barCodeEan13 + "(" + appid2 + ")" + barcodeFinalNbr + "("
				+ appid3 + ")" + barcodeAmount + "(" + appid4 + ")" + barcodeDate);

		// Leyenda de resolución
		if (invoiceInformation.getFinalNumber().toUpperCase().startsWith("FO")) {
			invoiceDTO.setNumberEnabled(foPreffix);
		}
		if (invoiceInformation.getFinalNumber().toUpperCase().startsWith("FN")) {
			invoiceDTO.setNumberEnabled(fnPreffix);
		}
		// ítems del detalle
		List<ItemInvoiceReportDTO> items = new ArrayList<ItemInvoiceReportDTO>();
		for (Charge charge : invoiceInformation.getCharges().getCharge()) {
			ItemInvoiceReportDTO item = new ItemInvoiceReportDTO();

			item.setItemEventEntityId(charge.getEntityId());
			if ("STORAGE".equals(charge.getEventTypeId()) || "REEFER".equals(charge.getEventTypeId())
					&& (charge.getEventPerformedFrom() != null && !"".equals(charge.getEventPerformedFrom()))
					&& (charge.getEventPerformedTo() != null && !"".equals(charge.getEventPerformedTo()))) {
				String fromDate = dtFecha.format(charge.getEventPerformedFrom());
				String toDate = dtFecha.format(charge.getEventPerformedTo());
				item.setItemTariffDescription(charge.getDescription() + " - " + fromDate + " al " + toDate);
			} else
				item.setItemTariffDescription(charge.getDescription());
			item.setItemQuantityBilled(charge.getQuantityBilled().doubleValue());
			item.setItemQuantityUnit(charge.getQuantityUnit());
			// Tarifa en USD
			double rateBilledUSD = charge.getRateBilled();
			// rateBilledUSD = Math.round(rateBilledUSD);
			item.setItemRateBilled(rateBilledUSD); // valor tax en USD
			Double totalMonto = charge.getAmount() + 0D;
			item.setItemAmount(totalMonto.doubleValue()); // valor tax + precio base (item sin taxes)
			String taxItemString = "";
			// Antes de recorrer los impuestos, tengo que controlar si es el primer cargo
			// para no sumar de más en los montos correspondientes a
			// calcular el impuesto.
			boolean firstCharge = true;
			// cada cargo puede tener 1 o más taxes
			for (Tax tax : charge.getTaxes().getTax()) {
				// Datos de los cargos, discriminados por taxes
				// Pueden haber taxes 0.0 que no sean de G0 = Excento. Todos los 0.0 que no son
				// excento se suman como Excluído.
				// Si contiene la clave 0.0, y el item es G0, entonces es excento
				if ((mapTaxes.containsKey(tax.getTaxRate().getRate()) && ("G0".equals(tax.getTaxRate().getTaxId()))) ||
				// ó si el item contiene 0.0, pero no es GO, entonces es excluído y tiene que
				// tener la clave 9999F
						((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))
								&& mapTaxes.containsKey(9999F))
						||
						// ó es algún tax que no es ni excento ni excluído
						((mapTaxes.containsKey(tax.getTaxRate().getRate()))
								&& (!tax.getTaxRate().getRate().equals(0.00D)))) {

					TaxesInvoice taxTotal = null;
					// Si es G0 es excento, pero si tiene 0.0 y no es G0 es excluído.
					if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))) {
						taxTotal = mapTaxes.get(9999D);
						taxItemString = "Excluído";
					} else {
						taxTotal = mapTaxes.get(tax.getTaxRate().getRate());
					}
					Double chargeAmount = 0D;
					if (firstCharge) {
						chargeAmount = charge.getAmount();
					}

					Double totalCharges = taxTotal.getTotalChargeAmmount() + charge.getAmount();
					taxTotal.setTotalChargeAmmount(totalCharges);
					Double totalTaxes = taxTotal.getTotalTaxAmmount() + tax.getAmount();
					taxTotal.setTotalTaxAmmount(totalTaxes);
					firstCharge = false;
				} else {
					TaxesInvoice taxTotal = new TaxesInvoice();
					taxTotal.setTaxAmmount(tax.getAmount());// importe tax
					taxTotal.setChargeAmmount(charge.getAmount()); // importe cargo
					taxTotal.setTotalChargeAmmount(charge.getAmount());
					taxTotal.setTotalTaxAmmount(tax.getAmount());
					// Si no es G0, pero tiene 0.0 es excluído
					if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))) {
						mapTaxes.put(9999D, taxTotal); // excluido es 0.0, necesito otra clave
						taxItemString = "Excluído";
					} else {
						taxItemString = String.valueOf(tax.getTaxRate().getRate() * 100) + "%";
						mapTaxes.put(tax.getTaxRate().getRate(), taxTotal);
					}
				}

				if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D)))
					taxItemString = "Excluído";
				else {
					Double taxItem = tax.getTaxRate().getRate() * 100;
					Integer taxInt = taxItem.intValue();
					item.setTaxItem((Integer.toString(taxInt)).concat("%")); // item iva del detalle
				}

				item.setItemAmount(charge.getAmount().doubleValue());

			} // fin taxes
			if (item.getTaxItem() == null) {
				item.setTaxItem(taxItemString);
			}
			if ("".equals(item.getTaxItem())) {
				item.setTaxItem("Excento");
			}
			items.add(item);

		} // fin cargos
		Collections.sort(items, ItemInvoiceReportDTO.COMPARE_BY_NBR);
		// agrego al final los totales de taxes
		Double key16 = 0.16D;
		if (mapTaxes.containsKey(key16)) {
			TaxesInvoice tax16 = mapTaxes.get(key16);
			invoiceDTO.setTotalBase16(tax16.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva16(tax16.getTotalTaxAmmount().doubleValue());
		}
		Double key5 = 0.05D;
		if (mapTaxes.containsKey(key5)) {
			TaxesInvoice tax5 = mapTaxes.get(key5);
			invoiceDTO.setTotalBase5(tax5.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva5(tax5.getTotalTaxAmmount().doubleValue());
		}
		Double key0 = 0.00D;
		if (mapTaxes.containsKey(key0)) {
			TaxesInvoice tax0 = mapTaxes.get(key0);
			invoiceDTO.setTotalBase0(tax0.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva0(tax0.getTotalTaxAmmount().doubleValue());
		}
		Double keyExc = 9999D;
		if (mapTaxes.containsKey(keyExc)) {
			TaxesInvoice taxExc = mapTaxes.get(keyExc);
			invoiceDTO.setTotalBaseExcluido(taxExc.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIvaExcluido(taxExc.getTotalTaxAmmount().doubleValue());
		}
		// fin totales taxes

		// agrego items al invoice
		invoiceDTO.setItems(items);
		invoicesReportDTO.add(invoiceDTO);
		JasperReport jasperReport = null;
		try {
			JasperPrint jasperPrint = null;

			JRDataSource invoiceDataSource = new JRBeanCollectionDataSource(invoicesReportDTO);
			JasperUtils.exportReport(reporte, jasperReport, parameterMap, invoiceDataSource, jasperPrint, request,
					response);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinPDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
	}

	/**
	 * Generación del pdf de la factura.
	 * 
	 * @param invoiceInformation información del la factura
	 * @param request            petición http
	 * @param response           respuesta http
	 * @param reporte            reporte de jasper
	 * @throws Exception
	 */

	private void generateFacturaCargaSueltaPDF(Invoice invoiceInformation, HttpServletRequest request,
			HttpServletResponse response, String reporte) throws Exception {

		DecimalFormat noDecimalFormat = new DecimalFormat("###");
		SimpleDateFormat dateFormat = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
		HashMap<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("SUPERPUERTOS",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/superpuertosHorizontal.jpg"));
		parameterMap.put("LogoFactura",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/LogoPuertoAguadulceColor.jpg"));
		List<InvoiceDetailReportDTO> invoicesReportDTO = new ArrayList<InvoiceDetailReportDTO>();
		Customer payeeCustomer = this.getCustomerMdwBO().getByIdAndRole(invoiceInformation.getAgent(),
				Constants.Billing.ROLES.get(roleAgent));
		Map<Double, TaxesInvoice> mapTaxes = new HashMap<Double, TaxesInvoice>();

		Invoice mergedInvoice = null;
		UnitFacilityVisit ufv = null;

		// tomo el primer cargo para sacar datos en común
		if (invoiceInformation.getCharges().getCharge() != null) {
			Charge charge = invoiceInformation.getCharges().getCharge().get(0);
			mergedInvoice = this.getInvoiceMdwBO().getDraft(charge.getRelatedInvoiceDraftNumber());
			ufv = this.getUnitFacilityVisitMdwBo().getSingleUnitById(charge.getEntityId(), "0");
		}

		InvoiceDetailReportDTO invoiceDTO = new InvoiceDetailReportDTO();

		invoiceDTO.setInvoiceFinalNbr(invoiceInformation.getFinalNumber());
		invoiceDTO.setInvoiceDueDate(invoiceInformation.getDueDate());
		invoiceDTO.setInvoiceFinalizedDate(invoiceInformation.getCreated());
		invoiceDTO.setInvoiceCurrencyId(invoiceInformation.getCurrency().toUpperCase());

		// contracCustomer
		Customer customer = null;
		if (mergedInvoice != null && mergedInvoice.getContractCustomerId() != null) {
			customer = this.getCustomerMdwBO().getByIdAndRole(mergedInvoice.getContractCustomerId(),
					Constants.Billing.ROLES.get(roleShipperConsignee));
		} else {
			customer = this.getCustomerMdwBO().getByIdAndRole(invoiceInformation.getContractCustomerId(),
					Constants.Billing.ROLES.get(roleShipperConsignee));
		}

		CurrencyExchange changeUSD = null;
		String fechaCreacion = null;
		SimpleDateFormat dtUSD = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
		if (mergedInvoice != null && mergedInvoice.getFinalizedDate() != null) {
			fechaCreacion = dtUSD.format(mergedInvoice.getFinalizedDate());
		} else {
			fechaCreacion = dtUSD.format((invoiceInformation.getFinalizedDate()));
		}
		changeUSD = this.getCurrencyMdwBO().get(fechaCreacion);

		if (customer != null) {
			invoiceDTO.setInvoiceContractCustomerName(customer.getName());
			invoiceDTO.setInvoiceContractCustomerTaxId(customer.getId());
			String dir = "";
			if (customer.getAddressLine1() != null)
				dir = customer.getAddressLine1().concat(" ");
			if (customer.getAddressLine2() != null)
				dir = dir.concat(customer.getAddressLine2()).concat(" ");
			if (customer.getAddressLine3() != null)
				dir = dir.concat(customer.getAddressLine3());
			invoiceDTO.setInvoiceContractCustomerAddress1(dir);
			invoiceDTO.setInvoiceContractCustomerCity(customer.getCity());
			invoiceDTO.setInvoiceContractCustomerTel(customer.getTel());
		}

		// Datos del pagador
		if (payeeCustomer != null) {
			invoiceDTO.setInvoicePayeeCustomerName(payeeCustomer.getName());
			String dir = "";
			if (payeeCustomer.getAddressLine1() != null)
				dir = payeeCustomer.getAddressLine1().concat(" ");
			if (payeeCustomer.getAddressLine2() != null)
				dir = dir.concat(payeeCustomer.getAddressLine2()).concat(" ");
			if (payeeCustomer.getAddressLine3() != null)
				dir = dir.concat(payeeCustomer.getAddressLine3());
			invoiceDTO.setInvoicePayeeCustomerAddress1(dir);
			invoiceDTO.setInvoicePayeeCustomerTaxId(payeeCustomer.getId());
			invoiceDTO.setInvoicePayeeCustomerCity(payeeCustomer.getCity());
			invoiceDTO.setInvoicePayeeCustomerTel(payeeCustomer.getTel());
		}

		// visita id
		String vesselVisitId = null;

		if (ufv != null) {
			// línea
			LineOperator line = this.getLineOperatorMdwBo().get(ufv.getLine());
			invoiceDTO.setInvoiceInvEventLineOperatorName(line.getId());
			// BL
			if (ufv.getBillsOfLading() != null) {
				invoiceDTO.setInvoiceParmInvIbVisitId(ufv.getBillsOfLading().get(0).getBlNumber());
				vesselVisitId = ufv.getBillsOfLading().get(0).getCarrierVisit();
			}
			// conocimiento de embarque
			if (ufv.getBooking() != null) {
				invoiceDTO.setInvoiceParmInvObVisitId(ufv.getBooking().getId());
				Booking booking = this.getBookingMdwBo().get(ufv.getBooking().getId(), null, null, null, null);
				vesselVisitId = booking.getCarrierVisit();
			}
		}

		invoiceDTO.setInvoiceInvEventIbVisitId(vesselVisitId);

		SimpleDateFormat dtFecha = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat dtHora = new SimpleDateFormat(DateFormatConstant.HH_mm);
		String fechaLiquidacion = null;
		String horaLiquidacion = null;
		if (invoiceInformation.getPaidThruDay() != null) {
			fechaLiquidacion = dtFecha.format(invoiceInformation.getPaidThruDay());
			horaLiquidacion = dtHora.format(invoiceInformation.getDueDate().getTime());
		}
		// buque
		VesselVisit vesselVisit = this.getVesselVisitMdwBO().get(vesselVisitId);
		invoiceDTO.setVesselVisitId(vesselVisit.getInVoyNbr());
		if (vesselVisit != null) {
			invoiceDTO.setVesselName(vesselVisit.getVesselName());

			if (ufv.getBooking() != null) {
				fechaLiquidacion = dtFecha.format(vesselVisit.getETA());
				horaLiquidacion = dtHora.format(vesselVisit.getETA().getTime());
			}

			invoiceDTO.setItemFechaLiquidacion("LIQUIDACIÓN HASTA " + fechaLiquidacion);
		}

		// TRM
		invoiceDTO.setTrm(changeUSD.getExchangeRate());

		// Totales
		invoiceDTO.setInvoiceTotalCharges(invoiceInformation.getTotalCharges().doubleValue()); // total de cargos sin
																								// iva
		invoiceDTO.setInvoiceTotalTaxes(invoiceInformation.getTotalTaxes().doubleValue()); // total de iva
		invoiceDTO.setInvoiceTotalTotal(invoiceInformation.getTotalTotal().doubleValue()); // total cargos + iva

		// Monto en letras
		String ammountStr = null;
		if (!"".equals(invoiceInformation.getCufe()) && invoiceInformation.getCufe() != null) {
			ammountStr = invoiceInformation.getCufe();
		} else {
			ammountStr = String.valueOf(invoiceInformation.getTotalTotal());
			ConvertNumberToLetters convert = new ConvertNumberToLetters();
			ammountStr = convert.convertir(ammountStr, true);
		}

		invoiceDTO.setTotalLetters(ammountStr);

		invoiceDTO.setNotes(invoiceInformation.getNotes() != null ? invoiceInformation.getNotes() : "");
		String formaPago1 = this.formaPago1 != null ? this.formaPago1 : "";
		String formaPago2 = this.formaPago2 != null ? this.formaPago2 : "";
		String formaPago3 = this.formaPago3 != null ? this.formaPago3 : "";
		invoiceDTO.setFormaPago1(formaPago1);
		invoiceDTO.setFormaPago2(formaPago2);
		invoiceDTO.setFormaPago3(formaPago3);
		// Código de barras
		SimpleDateFormat barcodeDateformat = new SimpleDateFormat("yyyyMMdd");
		String finalNbr = invoiceInformation.getFinalNumber();
		if (finalNbr.startsWith("FO") || finalNbr.startsWith("FN")) {
			finalNbr = finalNbr.substring(2, finalNbr.length()).trim();
		}
		String barcodeFinalNbr = StringUtils.leftPad(String.valueOf(finalNbr), 24, "0");
		String barcodeAmount = StringUtils
				.leftPad(String.valueOf(noDecimalFormat.format(Math.round(invoiceInformation.getTotalTotal())))
						.replaceAll("[\\,\\.]", ""), 14, "0");
		String barcodeDate = barcodeDateformat.format(invoiceInformation.getDueDate());
		final char FNC1 = Code128LogicImpl.FNC_1;
		final char CD = EAN128Bean.DEFAULT_CHECK_DIGIT_MARKER;
		invoiceDTO.setBarCode(
				appid1 + barCodeEan13 + appid2 + barcodeFinalNbr + appid3 + barcodeAmount + appid4 + barcodeDate);
		invoiceDTO.setBarCodeLabel("(" + appid1 + ")" + barCodeEan13 + "(" + appid2 + ")" + barcodeFinalNbr + "("
				+ appid3 + ")" + barcodeAmount + "(" + appid4 + ")" + barcodeDate);

		// Leyenda de resolución
		if (invoiceInformation.getFinalNumber().toUpperCase().startsWith("FO")) {
			invoiceDTO.setNumberEnabled(foPreffix);
		}
		if (invoiceInformation.getFinalNumber().toUpperCase().startsWith("FN")) {
			invoiceDTO.setNumberEnabled(fnPreffix);
		}
		// ítems del detalle
		List<ItemInvoiceReportDTO> items = new ArrayList<ItemInvoiceReportDTO>();
		for (Charge charge : invoiceInformation.getCharges().getCharge()) {
			String fromDate = charge.getEventPerformedFrom() != null ? dtFecha.format(charge.getEventPerformedFrom())
					: null;
			String toDate = charge.getEventPerformedTo() != null ? dtFecha.format(charge.getEventPerformedTo()) : null;

			ItemInvoiceReportDTO item = new ItemInvoiceReportDTO(charge.getDescription());
			boolean itemExist = items.contains(item);
			if (itemExist) {
				int itemIndex = items.indexOf(item);
				item = items.get(itemIndex);
				item.setItemQuantityBilled(item.getItemQuantityBilled() + charge.getQuantityBilled().doubleValue());
				item.setItemAmount(item.getItemAmount() + charge.getAmount().doubleValue()); // valor tax + precio base
																								// (item sin taxes)
			} else {
				item = new ItemInvoiceReportDTO();

				if ("STORAGE".equals(charge.getEventTypeId()) || "REEFER".equals(charge.getEventTypeId())
						&& (charge.getEventPerformedFrom() != null && !"".equals(charge.getEventPerformedFrom()))
						&& (charge.getEventPerformedTo() != null && !"".equals(charge.getEventPerformedTo()))) {
					item.setItemTariffDescription(charge.getDescription() + " - " + fromDate + " al " + toDate);
				} else {
					item.setItemTariffDescription(charge.getDescription());
				}

				item.setItemQuantityBilled(charge.getQuantityBilled().doubleValue());
				item.setItemQuantityUnit(charge.getQuantityUnit());

				// Tarifa en USD
				double rateBilledUSD = charge.getRateBilled();
				item.setItemRateBilled(rateBilledUSD); // valor tax en USD

				Double totalMonto = charge.getAmount() + 0D;
				item.setItemAmount(totalMonto.doubleValue()); // valor tax + precio base (item sin taxes)
			}
			String taxItemString = "";
			// Antes de recorrer los impuestos, tengo que controlar si es el primer cargo
			// para no sumar de más en los montos correspondientes a
			// calcular el impuesto.
			boolean firstCharge = true;
			// cada cargo puede tener 1 o más taxes

			for (Tax tax : charge.getTaxes().getTax()) {
				// Datos de los cargos, discriminados por taxes
				// Pueden haber taxes 0.0 que no sean de G0 = Excento. Todos los 0.0 que no son
				// excento se suman como Excluído.
				// Si contiene la clave 0.0, y el item es G0, entonces es excento
				if ((mapTaxes.containsKey(tax.getTaxRate().getRate()) && ("G0".equals(tax.getTaxRate().getTaxId()))) ||
				// ó si el item contiene 0.0, pero no es GO, entonces es excluído y tiene que
				// tener la clave 9999F
						((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))
								&& mapTaxes.containsKey(9999F))
						||
						// ó es algún tax que no es ni excento ni excluído
						((mapTaxes.containsKey(tax.getTaxRate().getRate()))
								&& (!tax.getTaxRate().getRate().equals(0.00D)))) {

					TaxesInvoice taxTotal = null;
					// Si es G0 es excento, pero si tiene 0.0 y no es G0 es excluído.
					if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))) {
						taxTotal = mapTaxes.get(9999D);
						taxItemString = "Excluído";
					} else {
						taxTotal = mapTaxes.get(tax.getTaxRate().getRate());
					}
					Double chargeAmount = 0D;
					if (firstCharge) {
						chargeAmount = charge.getAmount();
					}

					Double totalCharges = taxTotal.getTotalChargeAmmount() + charge.getAmount();
					taxTotal.setTotalChargeAmmount(totalCharges);
					Double totalTaxes = taxTotal.getTotalTaxAmmount() + tax.getAmount();
					taxTotal.setTotalTaxAmmount(totalTaxes);
					firstCharge = false;
				} else {
					TaxesInvoice taxTotal = new TaxesInvoice();
					taxTotal.setTaxAmmount(tax.getAmount());// importe tax
					taxTotal.setChargeAmmount(charge.getAmount()); // importe cargo
					taxTotal.setTotalChargeAmmount(charge.getAmount());
					taxTotal.setTotalTaxAmmount(tax.getAmount());
					// Si no es G0, pero tiene 0.0 es excluído
					if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))) {
						mapTaxes.put(9999D, taxTotal); // excluido es 0.0, necesito otra clave
						taxItemString = "Excluído";
					} else {
						taxItemString = String.valueOf(tax.getTaxRate().getRate() * 100) + "%";
						mapTaxes.put(tax.getTaxRate().getRate(), taxTotal);
					}
				}

				if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D)))
					taxItemString = "Excluído";
				else {
					Double taxItem = tax.getTaxRate().getRate() * 100;
					Integer taxInt = taxItem.intValue();
					item.setTaxItem((Integer.toString(taxInt)).concat("%")); // item iva del detalle
				}
			} // fin taxes
			if (item.getTaxItem() == null) {
				item.setTaxItem(taxItemString);
			}
			if ("".equals(item.getTaxItem())) {
				item.setTaxItem("Excento");
			}
			if (!itemExist) {
				items.add(item);
			}

		} // fin cargos
		Collections.sort(items, ItemInvoiceReportDTO.COMPARE_BY_DESCRIPTION);
		// agrego al final los totales de taxes
		Double key16 = 0.16D;
		if (mapTaxes.containsKey(key16)) {
			TaxesInvoice tax16 = mapTaxes.get(key16);
			invoiceDTO.setTotalBase16(tax16.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva16(tax16.getTotalTaxAmmount().doubleValue());
		}
		Double key5 = 0.05D;
		if (mapTaxes.containsKey(key5)) {
			TaxesInvoice tax5 = mapTaxes.get(key5);
			invoiceDTO.setTotalBase5(tax5.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva5(tax5.getTotalTaxAmmount().doubleValue());
		}
		Double key0 = 0.00D;
		if (mapTaxes.containsKey(key0)) {
			TaxesInvoice tax0 = mapTaxes.get(key0);
			invoiceDTO.setTotalBase0(tax0.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva0(tax0.getTotalTaxAmmount().doubleValue());
		}
		Double keyExc = 9999D;
		if (mapTaxes.containsKey(keyExc)) {
			TaxesInvoice taxExc = mapTaxes.get(keyExc);
			invoiceDTO.setTotalBaseExcluido(taxExc.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIvaExcluido(taxExc.getTotalTaxAmmount().doubleValue());
		}
		// fin totales taxes

		// agrego items al invoice
		invoiceDTO.setItems(items);
		invoicesReportDTO.add(invoiceDTO);
		JasperReport jasperReport = null;
		try {
			JasperPrint jasperPrint = null;

			JRDataSource invoiceDataSource = new JRBeanCollectionDataSource(invoicesReportDTO);
			JasperUtils.exportReport(reporte, jasperReport, parameterMap, invoiceDataSource, jasperPrint, request,
					response);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinPDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
	}

	/**
	 * Generación del pdf de la factura.
	 * 
	 * @param invoiceInformation información del la factura
	 * @param request            petición http
	 * @param response           respuesta http
	 * @param reporte            reporte de jasper
	 * @throws Exception
	 */

	private void generateFacturaManualPDF(Invoice invoiceInformation, HttpServletRequest request,
			HttpServletResponse response, String reporte) throws Exception {

		DecimalFormat noDecimalFormat = new DecimalFormat("###");
		SimpleDateFormat dateFormat = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
		HashMap<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("SUPERPUERTOS",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/superpuertosHorizontal.jpg"));
		parameterMap.put("LogoFactura",
				request.getSession().getServletContext().getRealPath("/WEB-INF/img/LogoPuertoAguadulceColor.jpg"));
		List<InvoiceDetailReportDTO> invoicesReportDTO = new ArrayList<InvoiceDetailReportDTO>();
		Customer payeeCustomer = this.getCustomerMdwBO().getByIdAndRole(invoiceInformation.getAgent(),
				Constants.Billing.ROLES.get(roleAgent));
		Map<Double, TaxesInvoice> mapTaxes = new HashMap<Double, TaxesInvoice>();

		Invoice mergedInvoice = null;
		UnitFacilityVisit ufv = null;

		// tomo el primer cargo para sacar datos en común
		if (invoiceInformation.getCharges().getCharge() != null) {
			Charge charge = invoiceInformation.getCharges().getCharge().get(0);
			mergedInvoice = this.getInvoiceMdwBO().getDraft(charge.getRelatedInvoiceDraftNumber());
			ufv = this.getUnitFacilityVisitMdwBo().getSingleUnitById(charge.getEntityId(), "1");
		}

		InvoiceDetailReportDTO invoiceDTO = new InvoiceDetailReportDTO();

		invoiceDTO.setInvoiceFinalNbr(invoiceInformation.getFinalNumber());
		invoiceDTO.setInvoiceDueDate(invoiceInformation.getDueDate());
		invoiceDTO.setInvoiceFinalizedDate(invoiceInformation.getCreated());
		invoiceDTO.setInvoiceCurrencyId(invoiceInformation.getCurrency().toUpperCase());

		CurrencyExchange changeUSD = null;
		String fechaCreacion = null;
		SimpleDateFormat dtUSD = new SimpleDateFormat(DateFormatConstant.yy_MMM_dd_HHmm, Locale.ENGLISH);
		if (mergedInvoice != null && mergedInvoice.getFinalizedDate() != null) {
			fechaCreacion = dtUSD.format(mergedInvoice.getFinalizedDate());
		} else {
			fechaCreacion = dtUSD.format((invoiceInformation.getFinalizedDate()));
		}
		changeUSD = this.getCurrencyMdwBO().get(fechaCreacion);

		// TRM
		invoiceDTO.setTrm(changeUSD.getExchangeRate());
		// contracCustomer
		Customer customer = this.getCustomerMdwBO().get(invoiceInformation.getContractCustomerId());
		if (customer != null) {
			invoiceDTO.setInvoiceContractCustomerName(customer.getName());
			invoiceDTO.setInvoiceContractCustomerTaxId(customer.getId());
			String dir = "";
			if (customer.getAddressLine1() != null)
				dir = customer.getAddressLine1().concat(" ");
			if (customer.getAddressLine2() != null)
				dir = dir.concat(customer.getAddressLine2()).concat(" ");
			if (customer.getAddressLine3() != null)
				dir = dir.concat(customer.getAddressLine3());
			invoiceDTO.setInvoiceContractCustomerAddress1(dir);
			invoiceDTO.setInvoiceContractCustomerCity(customer.getCity());
			invoiceDTO.setInvoiceContractCustomerTel(customer.getTel());
		}

		// Datos del pagador
		if (payeeCustomer != null) {
			invoiceDTO.setInvoicePayeeCustomerName(payeeCustomer.getName());
			String dir = "";
			if (payeeCustomer.getAddressLine1() != null)
				dir = payeeCustomer.getAddressLine1().concat(" ");
			if (payeeCustomer.getAddressLine2() != null)
				dir = dir.concat(payeeCustomer.getAddressLine2()).concat(" ");
			if (payeeCustomer.getAddressLine3() != null)
				dir = dir.concat(payeeCustomer.getAddressLine3());
			invoiceDTO.setInvoicePayeeCustomerAddress1(dir);
			invoiceDTO.setInvoicePayeeCustomerTaxId(payeeCustomer.getId());
			invoiceDTO.setInvoicePayeeCustomerCity(payeeCustomer.getCity());
			invoiceDTO.setInvoicePayeeCustomerTel(payeeCustomer.getTel());
		}

		// visita id
		String vesselVisitId = null;

		if (ufv != null) {
			// línea
			LineOperator line = this.getLineOperatorMdwBo().get(ufv.getLine());
			invoiceDTO.setInvoiceInvEventLineOperatorName(line.getId());
			// BL
			if (ufv.getBillsOfLading() != null) {
				invoiceDTO.setInvoiceParmInvIbVisitId(ufv.getBillsOfLading().get(0).getBlNumber());
				vesselVisitId = ufv.getBillsOfLading().get(0).getCarrierVisit();
			}
			// conocimiento de embarque
			if (ufv.getBooking() != null) {
				invoiceDTO.setInvoiceParmInvObVisitId(ufv.getBooking().getId());
				Booking booking = this.getBookingMdwBo().get(ufv.getBooking().getId(), null, null, null, null);
				vesselVisitId = booking.getCarrierVisit();
			}
		}

		invoiceDTO.setInvoiceInvEventIbVisitId(vesselVisitId);
		invoiceDTO.setVesselVisitId(vesselVisitId);
		SimpleDateFormat dtFecha = new SimpleDateFormat("MM/dd/yyyy");
		SimpleDateFormat dtHora = new SimpleDateFormat(DateFormatConstant.HH_mm);
		invoiceDTO.setItemFechaLiquidacion("LIQUIDACIÓN HASTA " + dtFecha.format(invoiceInformation.getCreated()));

		// buque
		VesselVisit vesselVisit = this.getVesselVisitMdwBO().get(vesselVisitId);
		if (vesselVisit != null) {
			invoiceDTO.setVesselName(vesselVisit.getVesselName());
		}

		// Totales
		invoiceDTO.setInvoiceTotalCharges(invoiceInformation.getTotalCharges().doubleValue()); // total de cargos sin
																								// iva
		invoiceDTO.setInvoiceTotalTaxes(invoiceInformation.getTotalTaxes().doubleValue()); // total de iva
		invoiceDTO.setInvoiceTotalTotal(invoiceInformation.getTotalTotal().doubleValue()); // total cargos + iva

		// Monto en letras
		String ammountStr = null;
		if (!"".equals(invoiceInformation.getCufe()) && invoiceInformation.getCufe() != null) {
			ammountStr = invoiceInformation.getCufe();
		} else {
			ammountStr = String.valueOf(invoiceInformation.getTotalTotal());
			ConvertNumberToLetters convert = new ConvertNumberToLetters();
			ammountStr = convert.convertir(ammountStr, true);
		}

		invoiceDTO.setTotalLetters(ammountStr);

		invoiceDTO.setNotes(invoiceInformation.getNotes() != null ? invoiceInformation.getNotes() : "");
		String formaPago1 = this.formaPago1 != null ? this.formaPago1 : "";
		String formaPago2 = this.formaPago2 != null ? this.formaPago2 : "";
		String formaPago3 = this.formaPago3 != null ? this.formaPago3 : "";
		invoiceDTO.setFormaPago1(formaPago1);
		invoiceDTO.setFormaPago2(formaPago2);
		invoiceDTO.setFormaPago3(formaPago3);
		// Código de barras
		SimpleDateFormat barcodeDateformat = new SimpleDateFormat("yyyyMMdd");
		String finalNbr = invoiceInformation.getFinalNumber();
		if (finalNbr.startsWith("FO") || finalNbr.startsWith("FN")) {
			finalNbr = finalNbr.substring(2, finalNbr.length()).trim();
		}
		String barcodeFinalNbr = StringUtils.leftPad(String.valueOf(finalNbr), 24, "0");
		String barcodeAmount = StringUtils
				.leftPad(String.valueOf(noDecimalFormat.format(Math.round(invoiceInformation.getTotalTotal())))
						.replaceAll("[\\,\\.]", ""), 14, "0");
		String barcodeDate = barcodeDateformat.format(invoiceInformation.getDueDate());
		final char FNC1 = Code128LogicImpl.FNC_1;
		final char CD = EAN128Bean.DEFAULT_CHECK_DIGIT_MARKER;

		invoiceDTO.setBarCode(
				appid1 + barCodeEan13 + appid2 + barcodeFinalNbr + appid3 + barcodeAmount + appid4 + barcodeDate);
		invoiceDTO.setBarCodeLabel("(" + appid1 + ")" + barCodeEan13 + "(" + appid2 + ")" + barcodeFinalNbr + "("
				+ appid3 + ")" + barcodeAmount + "(" + appid4 + ")" + barcodeDate);

		// Leyenda de resolución
		if (invoiceInformation.getFinalNumber().toUpperCase().startsWith("FO")) {
			invoiceDTO.setNumberEnabled(foPreffix);
		}
		if (invoiceInformation.getFinalNumber().toUpperCase().startsWith("FN")) {
			invoiceDTO.setNumberEnabled(fnPreffix);
		}
		// ítems del detalle
		List<ItemInvoiceReportDTO> items = new ArrayList<ItemInvoiceReportDTO>();
		for (Charge charge : invoiceInformation.getCharges().getCharge()) {
			ItemInvoiceReportDTO item = new ItemInvoiceReportDTO();

			item.setItemEventEntityId(charge.getEntityId());
			if ("STORAGE".equals(charge.getEventTypeId()) || "REEFER".equals(charge.getEventTypeId())
					&& (charge.getEventPerformedFrom() != null && !"".equals(charge.getEventPerformedFrom()))
					&& (charge.getEventPerformedTo() != null && !"".equals(charge.getEventPerformedTo()))) {
				String fromDate = dtFecha.format(charge.getEventPerformedFrom());
				String toDate = dtFecha.format(charge.getEventPerformedTo());
				item.setItemTariffDescription(charge.getDescription() + " - " + fromDate + " al " + toDate);
			} else
				item.setItemTariffDescription(charge.getDescription());
			item.setItemQuantityBilled(charge.getQuantityBilled().doubleValue());
			item.setItemQuantityUnit(charge.getQuantityUnit());
			// Tarifa en USD
			double rateBilledUSD = charge.getRateBilled();
			item.setItemRateBilled(rateBilledUSD); // valor tax en USD
			Double totalMonto = charge.getAmount() + 0D;
			item.setItemAmount(totalMonto.doubleValue()); // valor tax + precio base (item sin taxes)
			String taxItemString = "";
			// Antes de recorrer los impuestos, tengo que controlar si es el primer cargo
			// para no sumar de más en los montos correspondientes a
			// calcular el impuesto.
			boolean firstCharge = true;
			// cada cargo puede tener 1 o más taxes
			for (Tax tax : charge.getTaxes().getTax()) {
				// Datos de los cargos, discriminados por taxes
				// Pueden haber taxes 0.0 que no sean de G0 = Excento. Todos los 0.0 que no son
				// excento se suman como Excluído.
				// Si contiene la clave 0.0, y el item es G0, entonces es excento
				if ((mapTaxes.containsKey(tax.getTaxRate().getRate()) && ("G0".equals(tax.getTaxRate().getTaxId()))) ||
				// ó si el item contiene 0.0, pero no es GO, entonces es excluído y tiene que
				// tener la clave 9999F
						((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))
								&& mapTaxes.containsKey(9999F))
						||
						// ó es algún tax que no es ni excento ni excluído
						((mapTaxes.containsKey(tax.getTaxRate().getRate()))
								&& (!tax.getTaxRate().getRate().equals(0.00D)))) {

					TaxesInvoice taxTotal = null;
					// Si es G0 es excento, pero si tiene 0.0 y no es G0 es excluído.
					if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))) {
						taxTotal = mapTaxes.get(9999D);
						taxItemString = "Excluído";
					} else {
						taxTotal = mapTaxes.get(tax.getTaxRate().getRate());
					}
					Double chargeAmount = 0D;
					if (firstCharge) {
						chargeAmount = charge.getAmount();
					}

					Double totalCharges = taxTotal.getTotalChargeAmmount() + charge.getAmount();
					taxTotal.setTotalChargeAmmount(totalCharges);
					Double totalTaxes = taxTotal.getTotalTaxAmmount() + tax.getAmount();
					taxTotal.setTotalTaxAmmount(totalTaxes);
					firstCharge = false;
				} else {
					TaxesInvoice taxTotal = new TaxesInvoice();
					taxTotal.setTaxAmmount(tax.getAmount());// importe tax
					taxTotal.setChargeAmmount(charge.getAmount()); // importe cargo
					taxTotal.setTotalChargeAmmount(charge.getAmount());
					taxTotal.setTotalTaxAmmount(tax.getAmount());
					// Si no es G0, pero tiene 0.0 es excluído
					if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D))) {
						mapTaxes.put(9999D, taxTotal); // excluido es 0.0, necesito otra clave
						taxItemString = "Excluído";
					} else {
						taxItemString = String.valueOf(tax.getTaxRate().getRate() * 100) + "%";
						mapTaxes.put(tax.getTaxRate().getRate(), taxTotal);
					}
				}

				if ((!"G0".equals(tax.getTaxRate().getTaxId())) && (tax.getTaxRate().getRate().equals(0.00D)))
					taxItemString = "Excluído";
				else {
					Double taxItem = tax.getTaxRate().getRate() * 100;
					Integer taxInt = taxItem.intValue();
					item.setTaxItem((Integer.toString(taxInt)).concat("%")); // item iva del detalle
				}

				item.setItemAmount(charge.getAmount().doubleValue());

			} // fin taxes
			if (item.getTaxItem() == null) {
				item.setTaxItem(taxItemString);
			}
			if ("".equals(item.getTaxItem())) {
				item.setTaxItem("Excento");
			}
			items.add(item);

		} // fin cargos
		Collections.sort(items, ItemInvoiceReportDTO.COMPARE_BY_DESCRIPTION);
		// agrego al final los totales de taxes
		Double key16 = 0.16D;
		if (mapTaxes.containsKey(key16)) {
			TaxesInvoice tax16 = mapTaxes.get(key16);
			invoiceDTO.setTotalBase16(tax16.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva16(tax16.getTotalTaxAmmount().doubleValue());
		}
		Double key5 = 0.05D;
		if (mapTaxes.containsKey(key5)) {
			TaxesInvoice tax5 = mapTaxes.get(key5);
			invoiceDTO.setTotalBase5(tax5.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva5(tax5.getTotalTaxAmmount().doubleValue());
		}
		Double key0 = 0.00D;
		if (mapTaxes.containsKey(key0)) {
			TaxesInvoice tax0 = mapTaxes.get(key0);
			invoiceDTO.setTotalBase0(tax0.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIva0(tax0.getTotalTaxAmmount().doubleValue());
		}
		Double keyExc = 9999D;
		if (mapTaxes.containsKey(keyExc)) {
			TaxesInvoice taxExc = mapTaxes.get(keyExc);
			invoiceDTO.setTotalBaseExcluido(taxExc.getTotalChargeAmmount().doubleValue());
			invoiceDTO.setTotalIvaExcluido(taxExc.getTotalTaxAmmount().doubleValue());
		}
		// fin totales taxes

		// agrego items al invoice
		invoiceDTO.setItems(items);
		invoicesReportDTO.add(invoiceDTO);
		JasperReport jasperReport = null;
		try {
			JasperPrint jasperPrint = null;

			JRDataSource invoiceDataSource = new JRBeanCollectionDataSource(invoicesReportDTO);
			JasperUtils.exportReport(reporte, jasperReport, parameterMap, invoiceDataSource, jasperPrint, request,
					response);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.PinPDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
	}

	/**
	 * Imprime el comprobante de pago
	 * 
	 * @param id       nro final de la factura que se va a imprimir
	 * @param request  petición http
	 * @param response respuesta http
	 * @return ModelAndView
	 */
	@RequestMapping(value = "/pdf/receipt/{refcode}", method = RequestMethod.GET)
	public ModelAndView pdfReceiptByReferenceCode(@PathVariable("refcode") String referenceCode,
			HttpServletRequest request, HttpServletResponse response) {

		// si es bbva usar ReceiptBancoRecaudador
		String reporte = "Receipt.jrxml";
		List<Invoice> invoices = null;
		String rolForInvoice = "Shipper/Consignee";

		try {
			LOG.info("referenceCode " + referenceCode);
			if (this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK)){
				rolForInvoice = "Trucking Company";
			} else if (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT)){
				rolForInvoice = "Agent";
			}
			LOG.info("rolForInvoice " + rolForInvoice);
			invoices = this.getInvoiceMdwBO().getInvoicesByReferenceCodeAndRole(referenceCode, rolForInvoice);
			if (invoices != null) {
				LOG.info("obtuvimos invoices ");
				generateReceiptPDF(invoices, request, response, rolForInvoice);
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.InvoicePDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}
		return new ModelAndView("");
	}

	private void generateReceiptPDF(List<Invoice> invoices, HttpServletRequest request, HttpServletResponse response, String rolForInvoice)
			throws BusinessException, ServiceException {

		// El pago se hizo por Payu
		String reporte = "Receipt.jrxml";

		HashMap<String, Object> parameterMap = new HashMap<String, Object>();
		parameterMap.put("SPIA_LOGO", request.getSession().getServletContext().getRealPath("/WEB-INF/img/bg.jpg"));
		// parameterMap.put("MEMBRETE", request.getSession().getServletContext()
		// .getRealPath("/WEB-INF/assets/img/LogoPuertoAguadulceColor.jpg"));
		// parameterMap.put("SUPERPUERTOS",
		// request.getSession().getServletContext().getRealPath("/WEB-INF/assets/img/superpuertos.jpg"));

		Double totalAmmount = 0D;
		List<ReceiptReportDTO> receiptDTOList = new ArrayList<>();
		List<String> finalNbrs = new ArrayList<>();
		List<String> customers = new ArrayList<>();
		List<Double> ammounts = new ArrayList<>();

		ReceiptReportDTO receiptDTO = new ReceiptReportDTO();
		// Saco de una factura los datos comunes de la transacción
		Invoice invoice = invoices.get(0);
		PaymentStatusReceiptEnum status = PaymentStatusReceiptEnum.valueOf(invoice.getPaymentStatus());
		receiptDTO.setTransactionId(invoice.getApprovalNumber());
		receiptDTO.setStatus(status.toString());
		receiptDTO.setReferenceCode(invoice.getReferenceCode());
		receiptDTO.setPayDescription(invoice.getPaymentDescription());
		// Obtengo el pago, que será uno porque se manejan pagos totales.
		Payments payments = invoice.getPayments();
		if (payments != null) {
			Payment payment = payments.getPayment().get(0);
			receiptDTO.setCurrency(payment.getCurrency());
			receiptDTO.setPayDate(payment.getDate());
			PaymentMethodReceiptEnum paymentType = PaymentMethodReceiptEnum.valueOf(payment.getType());
			receiptDTO.setPaymentMethod(paymentType.toString());

			// El pago se hizo por Banco Recaudador
			/**
			 * Definición de criterio de discriminación de pago por banco recaudador:
			 * Provisoriamente usaremos como criterio de identificación que se busque los
			 * tipos de pago "CASH" y que tengan algún valor cargado en bankName.
			 */
			if (PaymentMethodReceiptEnum.CASH.equals(paymentType) && payment.getBankName() != null)
				reporte = "ReceiptBancoRecaudador.jrxml";

			if (PaymentMethodReceiptEnum.CREDIT.equals(paymentType)) {
				int inicio = invoice.getCardNumber().length() - 4;
				int fin = invoice.getCardNumber().length();
				String cardNumber = invoice.getCardNumber().substring(inicio, fin);
				receiptDTO.setCreditNumber(cardNumber);
			}
		}

		for (Invoice inv : invoices) {
			finalNbrs.add(inv.getFinalNumber());
			Customer customer = this.getCustomerMdwBO().getByIdAndRole(inv.getContractCustomerId(),
					Constants.Billing.ROLES.get(rolForInvoice));
			if (customer != null) {
				customers.add(customer.getName());
				ammounts.add(inv.getTotalTotal());
				totalAmmount = totalAmmount + inv.getTotalTotal();
			}
		}

		// iterar los invoices, acumular total
		receiptDTO.setTotalAmmount(totalAmmount);
		receiptDTO.setFinalNbrs(finalNbrs);
		receiptDTO.setCustomers(customers);
		receiptDTO.setAmmounts(ammounts);
		receiptDTOList.add(receiptDTO);

		JasperReport jasperReport = null;
		try {
			JasperPrint jasperPrint = null;

			JRDataSource receiptDataSource = new JRBeanCollectionDataSource(receiptDTOList);
			JasperUtils.exportReport(reporte, jasperReport, parameterMap, receiptDataSource, jasperPrint, request,
					response);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.ReceiptPDFExportError", strParams, getApplicationContext());
			LOG.error(msg, e);
		}

	}

	/**
	 * Retorna todos los invoices correspondientes a una lista de unidades
	 * listUnitNbr
	 * 
	 * @param listUnitNbr número del unit al cuál se le crearon las facturas.
	 * @return {@link com.spia.services.entities.billing.Invoice}
	 */
	@RequestMapping(value = "/list-unit-nbr/{listUnitNbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getInvoicesByListUnitNbr(@PathVariable String listUnitNbr) {
		ResponseEntity re = null;
		List<String> unitListNbr = Arrays.asList(listUnitNbr.split("\\s*,\\s*"));
		List<Invoice> invoices = null;
		List<Invoice> invoicesAll = null;
		try {
			for (String unitNbr : unitListNbr) {
				invoices = this.getInvoiceMdwBO().getInvoicesByUnitNbr(unitNbr);
				if (invoices != null && !invoices.isEmpty()) {
					re = new ResponseEntity<List<Invoice>>(invoices, HttpStatus.OK);
				}
			}

			if (invoices != null && !invoices.isEmpty()) {
				re = new ResponseEntity<List<Invoice>>(invoices, HttpStatus.OK);
			} else {
				String[] strParams = { "invoices" };
				String msg = getProperty("Controller.InvoiceError", strParams, getApplicationContext());
				ResponseError error = new ResponseError();
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			String[] strParams = { "invoices" };
			String msg = getProperty("Controller.InvoiceError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * PUT invoice/finalize finaliza un invoice que se encuentra en estado draft
	 * 
	 * @param invoice invoice que se va a finalizar
	 * @return un invoice donde se le actualiza el FinalizedDate y FinalNumber
	 * @throws BOException cuando hay un error en los servicios mdw.
	 */
	@RequestMapping(value = "/finalize-invoice", method = RequestMethod.PUT)
	public ResponseEntity finalizeInvoice(@RequestBody Invoice invoice) throws BOException {
		ResponseEntity re = null;
		try {
			String drftInvoiceNbr = invoice.getDraftNumber().toString();
			String finalizeResponseInvoice = this.getInvoiceMdwBO().finalizeInvoice(drftInvoiceNbr);
			if (finalizeResponseInvoice != null && !finalizeResponseInvoice.equals("ERROR")) {
				invoice.setFinalNumber(finalizeResponseInvoice);
				re = new ResponseEntity<Invoice>(invoice, HttpStatus.OK);
			} else {
				String[] strParams = {};
				String msg = getProperty("Controller.InvoiceFinalizeError", strParams, getApplicationContext());
				ResponseError error = new ResponseError();
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.InvoiceFinalizeError", strParams, getApplicationContext());
			LOG.error(msg, e);
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;

	}

}
