/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  4 de may. de 2016 - 8:44:37 a. m.
 */
package com.spia.businessportal.web.controller;

import static java.util.concurrent.TimeUnit.MILLISECONDS;
import static java.util.concurrent.TimeUnit.MINUTES;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.nio.channels.WritableByteChannel;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import com.spia.businessportal.web.controller.DateDeserializer;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;
import org.apache.commons.net.util.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.Documentation;
import com.spia.businessportal.common.entities.CustomerRequest;
import com.spia.businessportal.common.entities.DocumentationFile;
import com.spia.businessportal.common.entities.DocumentationFileNameForType;
import com.spia.businessportal.common.entities.DocumentationSpecificFile;
import com.spia.businessportal.common.entities.DocumentationType;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.DocumentationCriteria;
import com.spia.businessportal.common.entities.dto.DocumentationHibernateDTO;
import com.spia.businessportal.common.entities.dto.DocumentationPlanillaDTO;
import com.spia.businessportal.common.entities.dto.EroServiceDTO;
import com.spia.businessportal.common.entities.dto.ObservationsDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.filters.DocumentationFilter;
import com.spia.businessportal.common.filters.DocumentationFilterValidation;
import com.spia.businessportal.common.filters.DocumentationTypeFilter;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.constant.BusinessPortalConstant;
import com.spia.businessportal.service.DocumentalService;
import com.spia.services.entities.BillOfLading;
import com.spia.services.entities.Booking;
import com.spia.services.entities.UnitFacilityVisit;
import com.spia.services.entities.billing.Customer;
import com.spia.services.exception.BOException;
import com.spia.services.security.esb.entities.Privilege;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.services.util.Constants;
import static java.nio.charset.StandardCharsets.*;
import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;
import ar.com.fluxit.framework.business.generic.GenericService;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

import com.spia.businessportal.common.utils.AESEncryptionUtil;

/**
 * @author leandro
 *
 *         Controlador que expone todos los servicios de la documentación.
 */
@RequestMapping("/api/documentation")
@Controller
public class DocumentalController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(DocumentalController.class);
	@Value("#{ftpProperties['ftp.root']}")
	private String ftpRoot;
	@Value("#{ftpProperties['ftp.impo']}")
	private String ftpImpo;
	@Value("#{ftpProperties['ftp.expo']}")
	private String ftpExpo;
	@Value("#{ftpProperties['ftp.carga_suelta']}")
	private String ftpCargaSuelta;
	@Value("#{ftpProperties['ftp.carga_contenerizada']}")
	private String ftpCargaContenerizada;
	@Value("#{ftpProperties['ftp.servicio_carga']}")
	private String ftpServicioCarga;
	@Value("#{ftpProperties['ftp.url']}")
	private String ftpServer;
	@Value("#{ftpProperties['ftp.port']}")
	private Integer ftpPort;
	@Value("#{ftpProperties['ftp.user']}")
	private String ftpUser;
	@Value("#{ftpProperties['ftp.pass']}")
	private String ftpPass;
	@Value("#{ftpProperties['shared.folder']}")
	private String sharedFolder;
	@Value("#{ftpProperties['ftp.service_order']}")
	private String ftpServiceOrder;
	@Value("#{ftpProperties['ftp.request_management']}")
	private String ftpRequestManagement;

	@Value("#{documentalTime['documental.time']}")
	private Integer documentalTime;
	
	@Value("#{documentationSecurity['documentation.activar.seguridad']}")
	private String documentationSecurity;
	
	@Value("#{documentationReefer['documentation.activar.temperatura']}")
	private String documentationReefer;
	
	@Value("#{esb['esb.password.key']}")
	private String key;
	@Value("#{esb['esb.password.initialVector']}")
	private String initVector;

	private String roleAgent = "Agent";
	private String roleTruck = "Trucking Company";

	@Value("#{templates['docApproved']}")
	private String docApproved;
	@Value("#{templates['docNotApproved']}")
	private String docNotApproved;

	@Value("#{documentalTime['documental.time.unlocked']}")
	private Integer unlockedTime;

	@Autowired
	private QuerysBO querysBO;

	@Autowired
	private DocumentalService documentalService;

	@Autowired
	private UserBO userBO;

	/**
	 * Recupera todas las documentaciones activas.
	 * 
	 * @return {@link Documentation}
	 * @throws BusinessException
	 * @throws BOException
	 */
	@RequestMapping(value = "/test/{page}/{amount}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> test(@PathVariable Integer page, @PathVariable Integer amount)
			throws BusinessException {
		ResponseEntity<?> re = null;
		List<DocumentationHibernateDTO> documentation = this.getDocumentalBO()
				.getDocumentalList(new Page(page, amount));
		if (documentation != null && !documentation.isEmpty()) {
			re = new ResponseEntity<List<DocumentationHibernateDTO>>(documentation, HttpStatus.OK);
		}
		return re;
	}

	@RequestMapping(value = "/paginate", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> all(@RequestBody Map<String, Integer> value) {

		ResponseEntity<?> re = null;
		try {
			List<DocumentationHibernateDTO> documentation = documentalService.findPaginated(value.get("data"));
			if (documentation != null && !documentation.isEmpty()) {
				String parsedResponse = new Gson().toJson(documentation);
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /paginate DocumentalController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/search", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> search(@RequestBody Map<String, String> body) {

		ResponseEntity<?> re = null;
		try {
			List<DocumentationHibernateDTO> documentation = documentalService.searchDocument(body.get("data"));
			if (documentation != null && !documentation.isEmpty()) {
				String parsedResponse = new Gson().toJson(documentation); 
				String encryptedResponse = AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /search DocumentalController");

				re = new ResponseEntity<String>(encryptedResponse, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Guarda una documentación nueva
	 * 
	 * @param documentation
	 * @return
	 */
	@RequestMapping(value = "", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> save(@RequestBody Documentation documentationBase) {
	
		ResponseEntity re = null;
		String nbr = "";
		ObjectMapper mapper = new ObjectMapper();
		String jsonInString = "{}";
		String documentationBase64 = "{}";
		String bodyResponseBase64 = BusinessPortalConstant.EMPTY_STR;
		String path = "";
		String requestValidate = null;

		try {
			
			Documentation documentation = documentationBase;
			documentation.setPath(decrypt(documentation.getPath()));
			documentation.setApproved(false);

		

			if (documentation.getId() != null) {
				Documentation doc = this.getDocumentalBO().getById(documentation.getId());
				documentation.setLocked(doc.isLocked());
				documentation.setNotificador(doc.getNotificador());
				documentation.setObservations(doc.getObservations());				
				for (DocumentationFile df : doc.getFiles()) {
					for (DocumentationSpecificFile dsf : df.getFiles()) {
						for (DocumentationFile dff : documentation.getFiles()) {
							for (DocumentationSpecificFile dsff : dff.getFiles()) {
								if (dsf.getId().equals(dsff.getId())) {
									dsff.setApproved(dsf.isApproved());
									dsff.setApprovedAt(dsf.getApprovedAt());
									dsff.setApprovedBy(dsf.getApprovedBy());
									dsff.setRejected(dsf.isRejected());
									dsff.setRejectedAt(dsf.getRejectedAt());
									dsff.setRejectedBy(dsf.getRejectedBy());
//									dsff.setUpdateAt(dsf.getUpdateAt());
//									dsff.setUpdateBy(dsf.getUpdateBy());
									break;
								}
							}
						}
					}
				}
			}

			if (documentation != null && documentation.getNbr() != null) {
				nbr = documentation.getNbr();
				nbr = EncoderDecoder.encodeBase64(nbr);
			}

			if (documentation.getCreatedBy() == null) {
				documentation.setCreatedBy(this.getUserBO().getCurrentUser().getUserName());
			}
			documentation.setCompanyId(this.getUserBO().getCurrentUser().getEmpresa().getId());
			requestValidate = EncoderDecoder.decodeBase64(nbr);
			
			LOG.info("++++++++++++===============================");
			LOG.info("Aqui requestValidate  "+requestValidate);
			LOG.info("++++++++++++===============================");
			
			if (requestValidate.indexOf("REQUEST") != -1) {
				path = documentation.getPath();
				if (path != null && !path.equals("") && path.indexOf("GEST") != -1) {
					String requestNbr = requestValidate.substring(8, requestValidate.length());
					path = path.concat("/").concat(documentation.getOwnerId()).concat("/").concat(requestNbr);
					documentation.setPath(path);
					documentation.setNbr(requestNbr);
				}
			}
			for (DocumentationFile df : documentation.getFiles()) {
				for (DocumentationSpecificFile dsf : df.getFiles()) {
					if (dsf.getId() == null) {
						dsf.setCreatedAt(new Date());
						dsf.setCreatedBy(this.getUserBO().getCurrentUser().getUserName());
						dsf.setCompanyId(this.getUserBO().getCurrentUser().getEmpresa().getId());
						dsf.setCompanyName(this.getUserBO().getCurrentUser().getEmpresa().getCompanyName());
					}
					dsf.setPath(documentation.getPath());
					
					LOG.info("++++++++++++===============================");
					LOG.info("Aqui documentation.getPath() "+documentation.getPath());
					LOG.info("++++++++++++===============================");
				}
			}
			BillOfLading bl = null;
			
			
			if (documentation.getOwner() == null) {
				String owner = null;
				String ownerId = null;

				if (requestValidate.indexOf("REQUEST") == -1) {
					bl = this.getBillOfLadingMdwBo().get(nbr);
					if (bl != null) {
						owner = bl.getConsigneeName();
						ownerId = bl.getConsigneeId();
					} else {
						UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().get(nbr);
						if (ufv != null) {
							owner = ufv.getContents().getConsigneeName();
							ownerId = ufv.getContents().getConsigneeId();
						} else {
							Booking bkg = (Booking) this.getBookingMdwBo().get(EncoderDecoder.decodeBase64(nbr), null,
									null, null, null);
							owner = bkg.getConsigneeName();
							ownerId = bkg.getConsigneeId();
						}
					}
					documentation.setOwner(owner);
					documentation.setOwnerId(ownerId);
				}
				if (this.getUserBO().hasPermission(User.COMPANY_TYPE_AGENT))
					documentation.setRole(Constants.Billing.ROLES.get(roleAgent));
				else if (this.getUserBO().hasPermission(User.COMPANY_TYPE_TRUCK))
					documentation.setRole(Constants.Billing.ROLES.get(roleTruck));
				else {
					//path = decrypt(documentation.getPath());
					path = documentation.getPath();
					String type = path;
					if (type.indexOf("IMPO") != -1) {
						documentation.setRole(Constants.Billing.ROLES.get(roleAgent));
					} else if (type.indexOf("EXPO") != -1) {
						documentation.setRole(Constants.Billing.ROLES.get(roleTruck));
					}
				}

			} else {
				if (documentation.getRole() == null && requestValidate.indexOf("REQUEST") == -1) {
					path = documentation.getPath();
					String type = path;
					if (type.indexOf("IMPO") != -1) {
						documentation.setRole(Constants.Billing.ROLES.get(roleAgent));
					} else if (type.indexOf("EXPO") != -1) {
						documentation.setRole(Constants.Billing.ROLES.get(roleTruck));
					}
				}
			}
			if (bl != null && bl.getAgent() != null) {
				bl.setAgent(this.getUserBO().getCurrentUser().getEmpresa().getId());
				this.getBillOfLadingMdwBo().update(EncoderDecoder.encodeBase64(bl.getBlNumber()), bl);
			}
			DocumentationFilterValidation filter = new DocumentationFilterValidation();
			filter.setBlNBR(EncoderDecoder.decodeBase64(nbr));
			filter.setDocTypeId(documentation.getType().getId());
			long idDocument = 0;
			List<Documentation> documentationList = this.getDocumentalBO().search(filter, new Page(1, 1)).getResult();
			if (documentationList != null && !documentationList.isEmpty()) {
				for (Documentation d : documentationList) {
					idDocument = d.getId();
					documentation.setId(idDocument);
				}
			}

			// this.getDocumentalBO().saveOrUpdate(documentation);

			Documentation newDocumentation = null;
			Documentation oldRegister = null;
			

			oldRegister = this.getDocumentalBO().saveOrUpdate(documentation);
			if (requestValidate.indexOf("REQUEST") != -1) {
				String requestNbr = oldRegister.getNbr(); 
				newDocumentation = oldRegister;
				newDocumentation.setNbr(EncoderDecoder.encodeBase64(requestNbr));
			} else {
				newDocumentation = oldRegister;
				newDocumentation.setNbr(nbr);
			}

			// Converting the Object to JSONString
			newDocumentation.setPath(encrypt(newDocumentation.getPath()));
			for (DocumentationFile df : newDocumentation.getFiles()) {
				for (DocumentationSpecificFile dsf : df.getFiles()) {
					dsf.setPath("");
				}
			}
			
			
			//Documentation newDocumentation = null;// quitar
			jsonInString = mapper.writeValueAsString(newDocumentation);
			LOG.info("++++++++++++===============================");
			LOG.info("Aqui jsonInString "+jsonInString);
			LOG.info("++++++++++++===============================");
			bodyResponseBase64 = EncoderDecoder.documentationToStringBase64(jsonInString);
			
			LOG.info("++++++++++++===============================");
			LOG.info("Aqui bodyResponseBase64 "+bodyResponseBase64);
			LOG.info("++++++++++++===============================");
			re = new ResponseEntity<String>(bodyResponseBase64, HttpStatus.OK);
			
			LOG.info("++++++++++++===============================");
			LOG.info("Aqui re "+re);
			LOG.info("++++++++++++===============================");

			// re = new ResponseEntity<Documentation>(newDocumentation, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.SaveDocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
	
	
	

	@RequestMapping(value = "/save2/{documentationBase64}", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> save2(@PathVariable String documentationBase64) {

		ResponseEntity re = null;
		String nbr = "";
		ObjectMapper mapper = new ObjectMapper();
		String jsonInString = "{}";
		String bodyResponseBase64 = BusinessPortalConstant.EMPTY_STR;
		String path = "";
		String requestValidate = null;

		try {

			CustomerRequest customerRequest = new CustomerRequest();
			customerRequest.setState("Creada");
			CustomerRequest preba = this.getCustomerRequestBO().saveOrUpdate(customerRequest);
			String prueba_customerRequest = new Gson().toJson(preba);
			LOG.info("prueba_customerRequest:" + prueba_customerRequest);


			documentationBase64 = documentationBase64.replaceAll("CHANGE", "/");
			String decode = EncoderDecoder.bse64toDocumentation(documentationBase64);
			Documentation documentation = mapper.readValue(decode, Documentation.class);
			documentation.setPath(decrypt(documentation.getPath()));
			documentation.setApproved(false);
			nbr = EncoderDecoder.decodeBase64(nbr);

			if (documentation.getId() != null) {
				Documentation doc = this.getDocumentalBO().getById(documentation.getId());
				documentation.setLocked(doc.isLocked());
				documentation.setNotificador(doc.getNotificador());
				documentation.setObservations(doc.getObservations());				
				for (DocumentationFile df : doc.getFiles()) {
					for (DocumentationSpecificFile dsf : df.getFiles()) {
						for (DocumentationFile dff : documentation.getFiles()) {
							for (DocumentationSpecificFile dsff : dff.getFiles()) {
								if (dsf.getId().equals(dsff.getId())) {
									dsff.setApproved(dsf.isApproved());
									dsff.setApprovedAt(dsf.getApprovedAt());
									dsff.setApprovedBy(dsf.getApprovedBy());
									dsff.setRejected(dsf.isRejected());
									dsff.setRejectedAt(dsf.getRejectedAt());
									dsff.setRejectedBy(dsf.getRejectedBy());
									break;
								}
							}
						}
					}
				}
			}

			if (documentation.getCreatedBy() == null) {
				documentation.setCreatedBy(this.getUserBO().getCurrentUser().getUserName());
			}
			documentation.setCompanyId(this.getUserBO().getCurrentUser().getEmpresa().getId());
			requestValidate = nbr;
			path = documentation.getPath();
			if (path != null && !path.equals("") && path.indexOf("GEST") != -1) {
				String requestNbr = requestValidate.substring(8, requestValidate.length());
				path = path.concat("/").concat(documentation.getOwnerId()).concat("/").concat(requestNbr);
				documentation.setPath(path);
				documentation.setNbr(requestNbr);
			}
			for (DocumentationFile df : documentation.getFiles()) {
				for (DocumentationSpecificFile dsf : df.getFiles()) {
					if (dsf.getId() == null) {
						dsf.setCreatedAt(new Date());
						dsf.setCreatedBy(this.getUserBO().getCurrentUser().getUserName());
						dsf.setCompanyId(this.getUserBO().getCurrentUser().getEmpresa().getId());
						dsf.setCompanyName(this.getUserBO().getCurrentUser().getEmpresa().getCompanyName());
					}
					dsf.setPath(documentation.getPath());
				}
			}
			
			DocumentationFilterValidation filter = new DocumentationFilterValidation();
			filter.setBlNBR(nbr);
			filter.setDocTypeId(documentation.getType().getId());
			long idDocument = 0;
			List<Documentation> documentationList = this.getDocumentalBO().search(filter, new Page(1, 1)).getResult();
			if (documentationList != null && !documentationList.isEmpty()) {
				for (Documentation d : documentationList) {
					idDocument = d.getId();
					documentation.setId(idDocument);
				}
			}

			Documentation newDocumentation = null;
			Documentation oldRegister = null;

			String pre_jsonInString_oldRegister = new Gson().toJson(documentation);
			LOG.info("pre_jsonInString_oldRegister:" + pre_jsonInString_oldRegister);
			oldRegister = this.getDocumentalBO().saveOrUpdate(documentation);
			String jsonInString_oldRegister = new Gson().toJson(oldRegister);
			LOG.info("jsonInString_oldRegister:" + jsonInString_oldRegister);
			String requestNbr = oldRegister.getNbr(); 
			newDocumentation = oldRegister;
			newDocumentation.setNbr(EncoderDecoder.encodeBase64(requestNbr));

			// Converting the Object to JSONString
			newDocumentation.setPath(encrypt(newDocumentation.getPath()));
			for (DocumentationFile df : newDocumentation.getFiles()) {
				for (DocumentationSpecificFile dsf : df.getFiles()) {
					dsf.setPath("");
				}
			}
			jsonInString = mapper.writeValueAsString(newDocumentation);
			bodyResponseBase64 = EncoderDecoder.documentationToStringBase64(jsonInString);
			re = new ResponseEntity<String>(bodyResponseBase64, HttpStatus.OK);

			// re = new ResponseEntity<Documentation>(newDocumentation, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.SaveDocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Retorna una documentación si no está bloqueada y la bloquea para que nadie
	 * más la pueda usar.
	 * 
	 * @param documentation
	 * @return {@link Documentation}
	 */
	@RequestMapping(value = "/get-and-lock", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAndLock(@RequestBody Map<String,String> value) {
		String idEnc = value.get("data");
		LOG.info("idEnc: " + idEnc);
		String idDecryp = AESEncryptionUtil.getInstance(initVector, key).decrypt(idEnc, "POST /get-and-lock DocumentalController");
		Long id = Long.parseLong(idDecryp);
		LOG.info("idDecryp: " + id);

		ResponseEntity<?> re = null;
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();
		boolean unlocked = false;

		try {
			Documentation doc = this.getDocumentalBO().getById(id);
			if (doc != null) {
				Date lockedDate = doc.getLockedDate();
				Date now = new Date();
				long MAX_DURATION = MILLISECONDS.convert(unlockedTime, MINUTES);
				if (lockedDate != null) {
					long duration = now.getTime() - lockedDate.getTime();
					if (duration >= MAX_DURATION) {
						unlocked = true;
					}
				}
				if (doc.getLockedBy() == null && doc.isLocked()) {
					doc.setLocked(false);
					doc = this.getDocumentalBO().saveOrUpdate(doc);
				}

				if (!doc.isLocked() || doc.getLockedBy().equals(userlogin.getUserName()) || unlocked) {
					doc.setLocked(true);
					doc.setLockedDate(new Date());
					doc.setLockedBy(userlogin.getUserName());
					
					doc = this.getDocumentalBO().saveOrUpdate(doc);

					//Falla LDAP cambio de ID de usuarios 16/09/2022
					//User user = this.getUserBO().getByUsername(doc.getCreatedBy());
					//if (user != null) {
						SecurityEsbResponse<String> companyName = this.getSecurityEsbBO()
								.getCompanyNameById(doc.getCompanyId());
						doc.setCompanyName((String) companyName.getResult());
					//}

					Date lastUploadFileDate = null;
					boolean revised = false;
					for (DocumentationFile df : doc.getFiles()) {
						for (DocumentationSpecificFile dsf : df.getFiles()) {
							// Guardo la fecha del último archivo que se subió por cada documentación.
							// Esto es para ordenar en el front-end.
							if (lastUploadFileDate == null) {
								lastUploadFileDate = dsf.getCreatedAt();
							} else {
								if (dsf.getCreatedAt().after(lastUploadFileDate)) {
									lastUploadFileDate = dsf.getCreatedAt();
								}
							}
							if (!revised) {
								revised = dsf.isApproved() || dsf.isRejected();
							}
						}
					}
					if (revised) {
						doc.setRevised(1);
					}
					doc.setLastUploadFileDate(lastUploadFileDate);

					re = new ResponseEntity<Documentation>(doc, HttpStatus.OK);
				} else {
					String[] strParams = { doc.getNbr(), doc.getLockedBy() };
					String msg = getProperty("Controller.DocumentationActiveError", strParams, getApplicationContext());
					ResponseError error = new ResponseError();
					error.setError(msg);
					re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
				}
			} else {
				String[] strParams = { String.valueOf(id) };
				String msg = getProperty("Controller.DocumentationNonExist", strParams, getApplicationContext());
				ResponseError error = new ResponseError();
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			String[] strParams = { String.valueOf(id) };
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			LOG.error("/get-and-lock ERROR:");
			LOG.error(msg);
			LOG.error(new Gson().toJson(e));
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Desbloquea la documentación.
	 * 
	 * @param id
	 * @return {@link Documentation}
	 */
	@RequestMapping(value = "/unlock", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> unlock(@RequestBody Documentation documentation) {

		ResponseEntity<?> re = null;
		try {
			Documentation doc = this.getDocumentalBO().getById(documentation.getId());
			doc.setLocked(false);
			doc.setLockedDate(null);
			doc.setLockedBy(null);
			doc.setRequestTime(documentation.getRequestTime());
			Documentation updatedDoc = this.getDocumentalBO().saveOrUpdate(doc);
			re = new ResponseEntity<Documentation>(updatedDoc, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.UpdateDocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Ejecuta los filtros de búsqueda para las documentaciones.
	 * 
	 * @param criteria
	 * @return
	 */
	@RequestMapping(value = "filter", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> filter(@RequestBody DocumentationCriteria criteria) {
		ResponseEntity<?> re = null;
		try {
			DocumentationFilter filter = new DocumentationFilter();
			if (criteria.getNbr() != null) {
				filter.setBlNBR(criteria.getNbr());
			}
			List<Documentation> documentation = this.getDocumentalBO().search(filter, new Page(1, 0)).getResult();

			for (Documentation d : documentation) {
				Date lastUploadFileDate = null;
				for (DocumentationFile df : d.getFiles()) {
					for (DocumentationSpecificFile dsf : df.getFiles()) {
						// Guardo la fecha del último archivo que se subió por cada documentación.
						// Esto es para ordenar en el front-end.
						if (lastUploadFileDate == null) {
							lastUploadFileDate = dsf.getCreatedAt();
						} else {
							if (dsf.getCreatedAt().after(lastUploadFileDate)) {
								lastUploadFileDate = dsf.getCreatedAt();
							}
						}
						d.setCompanyName(dsf.getCompanyName());
					}
				}
				d.setLastUploadFileDate(lastUploadFileDate);
			}

			re = new ResponseEntity<List<Documentation>>(documentation, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Actualiza la documentación con los datos enviados.
	 * 
	 * @param documentation
	 * @return
	 */
	@Transactional(rollbackFor = Exception.class)
	@RequestMapping(value = "", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> update(@RequestBody Documentation documentation) {
		ResponseEntity re = null;
		try {
			Documentation newDocumentation = this.updateDocumentation(documentation);

			re = new ResponseEntity<Documentation>(newDocumentation, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.UpdateDocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/notificate", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> notificateDocumentation(@RequestBody Documentation documentation) {
		ResponseEntity<?> re = null;

		try {
			documentation.setNotificador(this.getUserBO().getCurrentUser().getUserName());

			// Tengo que revisar los 2 casos para notificar
			// 1) Todas las notificaciones aprobadas.
			// 2) Al menos una notificación desaprobada.

			boolean approved = true;

			Set<String> userSet = new HashSet<String>();
			String[] paramsTitle = { documentation.getNbr() };
			String[] paramsBody = { documentation.getCompanyName(), documentation.getNbr() };
			String title = null;
			String body = documentation.getCompanyName() + "~" + documentation.getNbr();
			String errorContent = "";
			String content = null;
			String templateName = null;

			for (DocumentationFile df : documentation.getFiles()) {
				for (DocumentationSpecificFile dsf : df.getFiles()) {
					userSet.add(dsf.getCompanyId());
					if (!dsf.isApproved() && !dsf.getDeleted()) {
						approved = false;
						if (dsf.isRejected() && !"".equals(dsf.getRejectReason()) && dsf.getRejectReason() != null) {
							errorContent += "~" + dsf.getFileName() + " : " + dsf.getRejectReason();
						}
					}
				}
			}
			
			if (documentation.isApproved()) {
				approved = true;
			}
			List<Map<String, String>> messages = new ArrayList<Map<String, String>>();
			if (approved) {
				documentation.setApproved(true);
				templateName = docApproved;
				title = getProperty("Controller.Notification.ALL_APPROVED_TITLE", paramsTitle, getApplicationContext());

				messages.add(this.buildMessage(this.getUserBO().getByUsername(documentation.getCreatedBy()).getEmail(),
						title, templateName, body));
				this.getNotificationMdwBO().notificate(documentation, title, body, null, false, userSet, messages);
			} else {
				documentation.setApproved(false);
				templateName = docNotApproved;
				body = body + errorContent;
				title = getProperty("Controller.Notification.SOME_NOT_APPROVED_TITLE", paramsTitle,
						getApplicationContext());
				messages.add(this.buildMessage(this.getUserBO().getByUsername(documentation.getCreatedBy()).getEmail(),
						title, templateName, body));
				this.getNotificationMdwBO().notificate(documentation, title, body, null, false, userSet, messages);
			}
			Documentation updatedDoc = this.updateDocumentation(documentation);

			re = new ResponseEntity<Documentation>(updatedDoc, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	@RequestMapping(value = "/notificate/not-approved", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> notificateNotApproveDocumentation(@RequestBody Documentation documentation) {
		ResponseEntity<?> re = null;

		try {
			documentation.setNotificador(this.getUserBO().getCurrentUser().getUserName());
			Documentation updatedDoc = this.updateDocumentation(documentation);
			Set<String> userSet = new HashSet<String>();

			String[] paramsTitle = { documentation.getNbr() };
			String[] paramsBody = { documentation.getCompanyName() };
			String title = getProperty("Controller.Notification.NOT_APPROVED_TITLE", paramsTitle,
					getApplicationContext());
			String body = updatedDoc.getCompanyName() + "~" + updatedDoc.getNbr() + "~";
			String templateName = docNotApproved;

			GsonBuilder builder = new GsonBuilder();
			builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
			builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
			Gson gson = builder.create();
			ObservationsDTO observationsDTO = null;
			observationsDTO = gson.fromJson(documentation.getObservations(), ObservationsDTO.class);				

			if (updatedDoc.getObservations() != null) {
				body += observationsDTO.getRevision()[(observationsDTO.getRevision().length - 1)].getNote();
			}
			for (DocumentationFile df : documentation.getFiles()) {
				for (DocumentationSpecificFile dsf : df.getFiles()) {
					userSet.add(dsf.getCompanyId());
					if (dsf.isRejected() && dsf.getRejectReason() != null) {
						body += "~" + dsf.getFileName() + " : " + dsf.getRejectReason();
					}
				}
			}
			List<Map<String, String>> messages = new ArrayList<Map<String, String>>();
			messages.add(this.buildMessage(this.getUserBO().getByUsername(updatedDoc.getCreatedBy()).getEmail(), title,
					templateName, body));

			this.getNotificationMdwBO().notificate(documentation, title, body,
					observationsDTO.getRevision()[(observationsDTO.getRevision().length - 1)].getNote(), true, userSet,
					messages);

			re = new ResponseEntity<Documentation>(updatedDoc, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	private Map<String, String> buildMessage(String email, String subject, String templateName, String body) {
		Map<String, String> mapMessage = new HashMap<String, String>();

		mapMessage.put("to", email);
		mapMessage.put("subject", subject);
		mapMessage.put("template", templateName);
		mapMessage.put("body", body);

		return mapMessage;
	}

	private Documentation updateDocumentation(Documentation documentation) throws BusinessException {
		// Guardo la fecha y el usuario para reutilizarlo en todos los documentos
		String currentUser = this.getUserBO().getCurrentUser().getUserName();
		Date today = new Date();
		List<DocumentationSpecificFile> updatedRevisions = new ArrayList<DocumentationSpecificFile>();
		// Recorro los DocumentationSpecificFile para verificar si alguno cambió
		for (DocumentationFile documentationFile : documentation.getFiles()) {
			for (DocumentationSpecificFile documentationSpecificFile : documentationFile.getFiles()) {
				// Recupero el DocumentationSpecificFile y lo comparo contra el actualizado.
				DocumentationSpecificFile oldDocumentationSpecificFile = this.getDocumentationSpecificFileBO()
						.getById(documentationSpecificFile.getId());

				// Veo si tanto si el documento de la base como el actualizado están aprobados.
				if (documentationSpecificFile.isApproved() != oldDocumentationSpecificFile.isApproved()) {
					// Si el documento actualizado está aprobado, actualizo la fecha y el usuario.
					if (documentationSpecificFile.isApproved()) {
						documentationSpecificFile.setApprovedBy(currentUser);
						documentationSpecificFile.setApprovedAt(today);
					} else {
						documentationSpecificFile.setApprovedBy(null);
						documentationSpecificFile.setApprovedAt(null);
					}
					documentationSpecificFile.setUpdateAt(today);
					documentationSpecificFile.setUpdateBy(currentUser);
					updatedRevisions.add(documentationSpecificFile);
				}

				// Veo si tanto el documento de la base como el actualizado están rechazados.
				if (documentationSpecificFile.isRejected() != oldDocumentationSpecificFile.isRejected()) {
					// Si el documento actualizado está rechazado, actualizo la fecha y el usuario.
					if (documentationSpecificFile.isRejected()) {
						documentationSpecificFile.setRejectedBy(currentUser);
						documentationSpecificFile.setRejectedAt(today);
					} else {
						documentationSpecificFile.setRejectedBy(null);
						documentationSpecificFile.setRejectedAt(null);
					}
					documentationSpecificFile.setUpdateAt(today);
					documentationSpecificFile.setUpdateBy(currentUser);
					updatedRevisions.add(documentationSpecificFile);
				}
			}
		}
		documentation.setLocked(false);
		documentation.setLockedDate(null);
		Documentation newDocumentation = this.getDocumentalBO().saveOrUpdate(documentation);
		return newDocumentation;
	}

	/**
	 * Recupera todas las documentaciones activas.
	 * 
	 * @return {@link Documentation}
	 * @throws BOException
	 */
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> get(@PathVariable Long id) {
		ResponseEntity<?> re = null;
		try {
			Documentation documentation = this.getDocumentalBO().getById(id);
			re = new ResponseEntity<Documentation>(documentation, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Retorna un archivo para su previsualización
	 * 
	 * @return
	 */
	@RequestMapping(value = "/file/{docId}/{fileId}", method = RequestMethod.GET)
	public void getFile(HttpServletResponse response, @PathVariable("docId") Long docId,
			@PathVariable("fileId") Long fileId) {
		try {
			String fileName = BusinessPortalConstant.EMPTY_STR;
			String name = "";
			Documentation doc = this.getDocumentalBO().getById(docId);
			for (DocumentationFile df : doc.getFiles()) {
				for (DocumentationSpecificFile dsf : df.getFiles()) {
					if (dsf.getId().equals(fileId)) {
						Customer customer = null;
						String companyId = dsf.getCompanyId();
						if (companyId == null) {
							companyId = this.getUserBO().getByUsername(dsf.getCreatedBy()).getEmpresa().getId();
						}
						customer = this.getCustomerMdwBO().getByIdAndRole(companyId, doc.getRole());
						if ("".equals(customer.getTaxId())) {
							customer.setTaxId(null);
						}
						name = dsf.getFileName();
						fileName = dsf.getPath() + BusinessPortalConstant.FOLDER_SEPARATOR + dsf.getFileName();
					}
				}
			}
			FTPClient ftp = new FTPClient();
			boolean error = false;
			File sharedFolderFile = null;
			FileInputStream sharedFolderFileInputStream = null;
			byte[] encodedBytes = null;
			try {
				boolean sharedFolderParam = !"".equals(this.getSharedFolder()) && this.getSharedFolder() != null;
				LOG.info(sharedFolderParam);
				LOG.info(fileName);
				if (sharedFolderParam) {
					sharedFolderFile = new File(fileName);
					if (sharedFolderFile.isFile() && sharedFolderFile.canRead()) {
						sharedFolderFileInputStream = new FileInputStream(sharedFolderFile);
					}
				}

				if (sharedFolderParam && sharedFolderFileInputStream != null) {
					stream(sharedFolderFileInputStream, response.getOutputStream());
				} else {
					int reply;
					String server = this.getFtpServer();
					int port = this.getFtpPort();

					ftp.connect(server, port);
					ftp.login(this.getFtpUser(), this.getFtpPass());
					ftp.enterLocalPassiveMode();

					reply = ftp.getReplyCode();

					if (!FTPReply.isPositiveCompletion(reply)) {
						ftp.disconnect();
						LOG.error("FTP server refused connection.");
						System.err.println();
					} else {
						ftp.enterLocalPassiveMode();
						response.addHeader("Pragma", "public");
						response.addHeader("Cache-Control", "max-age=0");
						response.setContentType("application/pdf");
						response.setHeader("Content-Disposition", "attachment; filename=" + name);
						ftp.retrieveFile(fileName, response.getOutputStream());
					}
					ftp.logout();
				}
			} catch (IOException e) {
				error = true;
				LOG.error(e.getMessage(), e);
			} finally {
				if (ftp.isConnected()) {
					try {
						ftp.disconnect();
					} catch (IOException ioe) {

					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}
	}

	/**
	 * Recupera todas las documentaciones activas partir de un BL/Booking
	 * 
	 * @return {@link Documentation}
	 * @throws BOException
	 */
	@RequestMapping(value = "/type/{type}/nbr/{nbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> get(@PathVariable String nbr, @PathVariable String type) {
		ResponseEntity<?> re = null;
		ObjectMapper mapper = new ObjectMapper();
		String jsonInString = "{}";
		String bodyResponseBase64 = BusinessPortalConstant.EMPTY_STR;
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();

		try {
			DocumentationFilterValidation filter = new DocumentationFilterValidation();
			nbr = EncoderDecoder.decodeBase64(nbr);
			filter.setBlNBR(nbr);
			DocumentationTypeFilter docTypeFilter = new DocumentationTypeFilter();
			Set<DocumentationFile> documentationFiles = new HashSet<DocumentationFile>();

			docTypeFilter.setType(type);
			List<DocumentationType> docType = this.getDocumentationTypeBO().search(docTypeFilter, new Page(1, 0))
					.getResult();
			filter.setDocTypeId(docType.get(0).getId());
			List<Documentation> documentation = this.getDocumentalBO().search(filter, new Page(1, 1)).getResult();
			String newPath = new SimpleDateFormat("yyyyMMddHHmmSS").format(new Date());			
			if (documentation == null || documentation.isEmpty()) {	
				Documentation doc = new Documentation();
				doc.setActive(true);
				doc.setCreatedAt(new Date());
				doc.setLocked(false);
				doc.setNbr(nbr);
				String impoExpo = "";
				String ccCs = "";
				String path = "";

				if (type.indexOf("GEST") != -1) {
					ccCs = ftpRequestManagement;
				} else if (type.indexOf("OS") != -1) {
					ccCs = ftpServiceOrder;
				} else if (type.indexOf("HBL") != -1) {
					ccCs = ftpServicioCarga;
				} else if (type.indexOf("CC") != -1) {
					ccCs = ftpCargaContenerizada;
				} else {
					ccCs = ftpCargaSuelta;
				}
				if (type.indexOf("IMPO") != -1) {
					impoExpo = ftpImpo;
				} else if (type.indexOf("EXPO") != -1) {
					impoExpo = ftpExpo;
				}

				if (!impoExpo.equals("")) {
					// doc.setPath(ftpRoot + "/" + impoExpo + "/" + ccCs + "/"+ newPath );
					path = ftpRoot + "/" + impoExpo + "/" + ccCs + "/" + newPath;
					path = encrypt(path);
					doc.setPath(path);
				}
				else if(type.indexOf("GEST") != -1){
					// doc.setPath(ftpRoot + "/" + ccCs + "/"+ newPath );
					path = ftpRoot + "/" + ccCs ;
					path = encrypt(path);
					doc.setPath(path);
				} else {
					// doc.setPath(ftpRoot + "/" + ccCs + "/"+ newPath );
					path = ftpRoot + "/" + ccCs + "/" + newPath;
					path = encrypt(path);
					doc.setPath(path);
				}

				doc.setType(docType.get(0));
				for (DocumentationFileNameForType d : docType.get(0).getFilesName()) {
					if ((d.getName().contains("SEGURIDAD") && documentationSecurity.contains("true")) || (d.getName().contains("TEMPERATURA") && documentationReefer.contains("true")) || (!d.getName().contains("TEMPERATURA")) || (!d.getName().contains("SEGURIDAD"))) {						
						DocumentationFile docFile = new DocumentationFile();
						docFile.setFileName(d);
						docFile.setState(this.getDocumentationFileStateBO().getById(3L));
						docFile.setDocumentation(doc);
						documentationFiles.add(docFile);
					}
				}

				doc.setFiles(documentationFiles);
				if (documentation == null) {
					documentation = new ArrayList<Documentation>();
				}
				documentation.add(doc);
			} else {				
				String path = documentation.get(0).getPath();
				// path = decrypt(path);
				if (path.substring(path.length() - 1).equals("/")) {
					path = path.concat(newPath);

				}
				path = encrypt(path);
				documentation.get(0).setPath(path);
				documentation.get(0).setRejected(true);
			}
			for (DocumentationFile df : documentation.get(0).getFiles()) {
				Set<DocumentationSpecificFile> files = new HashSet<DocumentationSpecificFile>();
				for (DocumentationSpecificFile dsf : df.getFiles()) {
					if (!dsf.getDeleted()) {
						dsf.setPath("");
						files.add(dsf);
					}
				}
				df.setFiles(files);
			}
			jsonInString = mapper.writeValueAsString(documentation);
			bodyResponseBase64 = EncoderDecoder.documentationToStringBase64(jsonInString);
			re = new ResponseEntity<String>(bodyResponseBase64, HttpStatus.OK);
			// re = new ResponseEntity<List<Documentation>>(documentation, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Elimina un archivo de la base de datos.
	 * 
	 * @param fileId id del archivo en la base de datos.
	 * @return
	 */
	@RequestMapping(value = "/file/{fileId}", method = RequestMethod.DELETE)
	public @ResponseBody ResponseEntity<?> deleteFile(@PathVariable Long fileId) {
		ResponseEntity<?> re = null;
		try {
			DocumentationSpecificFile dsf = this.getDocumentationSpecificFileBO().getById(fileId);
			/*Pat	h path = Paths.get(filePath);
			return Files.deleteIfExists(path);*/

			String fullPath = dsf.getPath() +"/"+dsf.getFileName();
			boolean isDeleted = deleteFileFromFTP(fullPath);

			if(isDeleted){
				LOG.info("SE ELIMINO EL ARCHIVO: "+ fullPath+ " DEL SERVIDOR FTP");
				this.getDocumentationSpecificFileBO().delete(dsf);
				re = new ResponseEntity<Boolean>(new Boolean(true), HttpStatus.OK);
			}else{
				LOG.info("NO SE PUDO ELIMINAR EL ARCHIVO: "+ fullPath  +" DEL SERVIDOR FTP: ");
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Elimina un archivo de forma fisica en el servidor FTP.
	 *
	 * @param filePath id del archivo en la base de datos.
	 * @return true o false
	 */
	public boolean deleteFileFromFTP(String filePath) {
		FTPClient ftpClient = new FTPClient();

		try {
			ftpClient.connect(this.getFtpServer(), this.getFtpPort());
			ftpClient.login(this.getFtpUser(), this.getFtpPass());
			ftpClient.enterLocalPassiveMode();
			LOG.info("INICIA A ELIMINAR ARCHIVO DEL SERVIDOR FTP: FILEPATH " + filePath);


			boolean deleted = ftpClient.deleteFile(filePath);
			ftpClient.logout();
			return deleted;
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
			e.printStackTrace();
			return false;
		} finally {
			if (ftpClient != null && ftpClient.isConnected()) {
				try {
					ftpClient.disconnect();
				} catch (IOException ex) {
					ex.printStackTrace();
				}
			}
		}
	}

	/**
	 * Recupera todas las documentaciones activas.
	 * 
	 * @return {@link Documentation}
	 * @throws BOException
	 */
	@RequestMapping(value = "/consignee-by-order/{nbr}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getConsigneeIdByOrderNbr(@PathVariable String nbr) {
		ResponseEntity<?> re = null;
		try {
			BillOfLading bl = null;
			String consigneeId = null;
			bl = this.getBillOfLadingMdwBo().get(nbr);
			if (bl != null) {
				consigneeId = bl.getConsigneeId();
			} else {
				UnitFacilityVisit ufv = this.getUnitFacilityVisitMdwBo().get(nbr);
				if (ufv != null) {
					consigneeId = ufv.getContents().getConsigneeId();
				} else {
					Booking bkg = (Booking) this.getBookingMdwBo().get(EncoderDecoder.decodeBase64(nbr), null, null,
							null, null);
					consigneeId = bkg.getConsigneeId();
				}
			}
			re = new ResponseEntity<String>(consigneeId, HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Recupera todas las planillas asociadas a un booking y un contenedor .
	 * 
	 * @return {@link Documentation}
	 * @throws BOException
	 */
	@RequestMapping(value = "/planilla/{booking}/{container}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> getDocumentationPlanilla(@PathVariable String booking,
			@PathVariable String container) {
		ResponseEntity<?> re = null;
		try {

			booking = EncoderDecoder.decodeBase64(booking);

			List<DocumentationPlanillaDTO> documentation = documentalService.getDocumentationPlanilla(booking,
					container);
			if (documentation != null && !documentation.isEmpty()) {
				re = new ResponseEntity<List<DocumentationPlanillaDTO>>(documentation, HttpStatus.OK);
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	private long stream(InputStream input, OutputStream output) throws IOException {
		try (ReadableByteChannel inputChannel = Channels.newChannel(input);
				WritableByteChannel outputChannel = Channels.newChannel(output);) {
			ByteBuffer buffer = ByteBuffer.allocateDirect(10240);
			long size = 0;

			while (inputChannel.read(buffer) != -1) {
				buffer.flip();
				size += outputChannel.write(buffer);
				buffer.clear();
			}

			return size;
		}
	}

	public String getFtpRoot() {
		return ftpRoot;
	}

	public void setFtpRoot(String ftpRoot) {
		this.ftpRoot = ftpRoot;
	}

	public String getFtpImpo() {
		return ftpImpo;
	}

	public void setFtpImpo(String ftpImpo) {
		this.ftpImpo = ftpImpo;
	}

	public String getFtpExpo() {
		return ftpExpo;
	}

	public void setFtpExpo(String ftpExpo) {
		this.ftpExpo = ftpExpo;
	}

	public String getFtpCargaSuelta() {
		return ftpCargaSuelta;
	}

	public void setFtpCargaSuelta(String ftpCargaSuelta) {
		this.ftpCargaSuelta = ftpCargaSuelta;
	}

	public String getFtpCargaContenerizada() {
		return ftpCargaContenerizada;
	}

	public void setFtpCargaContenerizada(String ftpCargaContenerizada) {
		this.ftpCargaContenerizada = ftpCargaContenerizada;
	}

	public String getFtpServer() {
		return ftpServer;
	}

	public void setFtpServer(String ftpServer) {
		this.ftpServer = ftpServer;
	}

	public Integer getFtpPort() {
		return ftpPort;
	}

	public void setFtpPort(Integer ftpPort) {
		this.ftpPort = ftpPort;
	}

	public String getFtpUser() {
		return ftpUser;
	}

	public void setFtpUser(String ftpUser) {
		this.ftpUser = ftpUser;
	}

	public String getFtpPass() {
		return ftpPass;
	}

	public void setFtpPass(String ftpPass) {
		this.ftpPass = ftpPass;
	}

	public String getSharedFolder() {
		return sharedFolder;
	}

	public void setSharedFolder(String sharedFolder) {
		this.sharedFolder = sharedFolder;
	}

	public String getFtpServicioCarga() {
		return ftpServicioCarga;
	}

	public void setFtpServicioCarga(String ftpServicioCarga) {
		this.ftpServicioCarga = ftpServicioCarga;
	}

	public String getFtpServiceOrder() {
		return ftpServiceOrder;
	}

	public void setFtpServiceOrder(String ftpServiceOrder) {
		this.ftpServiceOrder = ftpServiceOrder;
	}

	public String getFtpRequestManagement() {
		return ftpRequestManagement;
	}

	public void setFtpRequestManagement(String ftpRequestManagement) {
		this.ftpRequestManagement = ftpRequestManagement;
	}

	private String encrypt(String value) {
		try {
			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
			SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");

			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, skeySpec, iv);

			byte[] encrypted = cipher.doFinal(value.getBytes());
			LOG.info("encrypted string: " + Base64.encodeBase64String(encrypted));
			String decryptedText = Base64.encodeBase64String(encrypted);
			LOG.info(decryptedText);

			return decryptedText;
		} catch (Exception ex) {
			LOG.error(ex.getMessage());
		}

		return null;
	}

	private String decrypt(String encrypted) {
		try {
			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
			SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");

			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			cipher.init(Cipher.DECRYPT_MODE, skeySpec, iv);

			byte[] original = cipher.doFinal(Base64.decodeBase64(encrypted));

			return new String(original);
		} catch (Exception ex) {
			LOG.error(ex.getMessage());
		}

		return null;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getInitVector() {
		return initVector;
	}

	public void setInitVector(String initVector) {
		this.initVector = initVector;
	}

	/**
	 * Documental Time Lock and Unlock .
	 * 
	 * @return {@link Documentation}
	 * @throws BOException
	 */
	@RequestMapping(value = "/documentalTime", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<?> documentalTime() {
		ResponseEntity<?> re = null;
		try {
			if (documentalTime != null) {
				re = new ResponseEntity<Integer>(documentalTime, HttpStatus.OK);
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			ResponseError error = new ResponseError();
			String[] strParams = null;
			String msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/**
	 * Elimina un archivo de la base de datos.
	 * 
	 * @param docId  id del documento en la base de datos.
	 * @param fileId id del archivo en la base de datos
	 * @return
	 */

	@RequestMapping(value = "/removeFileById/{docId}/{fileId}", method = RequestMethod.DELETE)
	public @ResponseBody ResponseEntity<?> removeFileById(@PathVariable("docId") Long docId,
			@PathVariable("fileId") Long fileId) {
		ResponseEntity<?> re = null;
		ResponseError error = new ResponseError();
		String[] strParams = null;
		String msg = null;
		try {
			Documentation doc = this.getDocumentalBO().getById(docId);
			if (doc.isLocked()) {
				msg = getProperty("Controller.documentation.remove.file.LOCK", strParams, getApplicationContext());
				error.setError(msg);
				re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
				return re;
			}
			for (DocumentationFile df : doc.getFiles()) {
				for (DocumentationSpecificFile dsf : df.getFiles()) {
					if (dsf.getId().equals(fileId) && dsf.isApproved()) {
						msg = getProperty("Controller.documentation.remove.file.APPROVED", strParams,
								getApplicationContext());
						error.setError(msg);
						re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
						return re;
					}
				}
			}
			DocumentationSpecificFile dsf = this.getDocumentationSpecificFileBO().getById(fileId);
			if (!dsf.isApproved() && !dsf.isRejected()) {
				this.getDocumentationSpecificFileBO().delete(dsf);
			} else {
				dsf.setDeleted(true);
				// dsf.setDocumentationFile(null);
				this.getDocumentationSpecificFileBO().saveOrUpdate(dsf);
			}

			re = new ResponseEntity<Boolean>(new Boolean(true), HttpStatus.OK);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			msg = getProperty("Controller.DocumentationError", strParams, getApplicationContext());
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

}
