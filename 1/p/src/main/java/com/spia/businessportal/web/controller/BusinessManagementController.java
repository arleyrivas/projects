package com.spia.businessportal.web.controller;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.spia.businessportal.common.entities.*;
import com.spia.businessportal.common.entities.dto.*;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.AESEncryptionUtil;
import com.spia.businessportal.service.BusinessManagementService;
import com.spia.services.exception.BOException;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import ar.com.fluxit.framework.common.exception.BusinessException;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Value;

// Arley Rivas - Spia
@RequestMapping("/api/business-management")
@Controller
public class BusinessManagementController extends AbstractController {
    @Value("${encrypt.messages.initialVector}")
    public String initVector;
    @Value("${encrypt.messages.key}")
    public String key;
    @Autowired
    private BusinessManagementService businessManagementService;
    private static final Log LOG = LogFactory.getLog(BusinessManagementController.class);


    @RequestMapping(value = "/departments", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<?> getDepartments() throws BOException {
        ResponseEntity<?> re = null;
        try {
            DepartmentDTO[] departmentDTOS = null;
            departmentDTOS = businessManagementService.getDepartment();

            re = new ResponseEntity<DepartmentDTO[]>(departmentDTOS, HttpStatus.OK);
        } catch (Exception e) {
            LOG.error("Se produjo un error al obtener los departamentos ", e);
            ResponseError error = new ResponseError();
            String[] strParams = {};
            error.setError(getProperty("BusinessManagementController.departmentsError", strParams, getApplicationContext()));
            re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return re;
    }

    @RequestMapping(value = "/cities", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<?> getCities() throws BOException {
        ResponseEntity<?> re = null;
        try {
            CityDTO[] cityList = null;
            cityList = businessManagementService.getCity();

            re = new ResponseEntity<CityDTO[]>(cityList, HttpStatus.OK);
        } catch (Exception e) {
            LOG.error("Se produjo un error al obtener las ciudades/municipios ", e);
            ResponseError error = new ResponseError();
            String[] strParams = {};
            error.setError(getProperty("BusinessManagementController.citiesError", strParams, getApplicationContext()));
            re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return re;
    }


    @RequestMapping(value = "/documents", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<?> getBusinessManagementDocuments(@RequestBody MandatoryDocumentationReq mandatoryDocumentationReq) throws BOException, IOException {
        ResponseEntity<?> re = null;
        try {
            DocumentTypesDTO[] documentTypesDTO = null;
            LOG.info("MandatoryDocumentationReq: +++ " + mandatoryDocumentationReq.toString() + " -  " + mandatoryDocumentationReq.getNit() + " -  " + mandatoryDocumentationReq.getCompanyType() + " -  " + mandatoryDocumentationReq.getMandato());
            documentTypesDTO = businessManagementService.getBusinessManagementDocuments(mandatoryDocumentationReq);
            re = new ResponseEntity<DocumentTypesDTO[]>(documentTypesDTO, HttpStatus.OK);
        } catch (Exception e) {
            LOG.error("EXCEPTION" + e);
            LOG.error("Se produjo un error al obtener los tipos de documentos para: " + mandatoryDocumentationReq.getNit() + " como tipo de empresa " + mandatoryDocumentationReq.getCompanyType() + "  y mandato " + mandatoryDocumentationReq.getMandato(), e);
            ResponseError error = new ResponseError();
            String[] strParams = {};
            error.setError(getProperty("BusinessManagementController.documentsError", strParams, getApplicationContext()));
            re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return re;
    }


    @RequestMapping(value = "/request-by-company", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<?> getRequestCustomerByRanges(@RequestBody RequestCustom requestCustom) throws BOException, IOException {
        ResponseEntity<?> re = null;
        try {
            LOG.info("requestCustom:   NIT: " + requestCustom.getNit() + " Start Date: " + requestCustom.getStartDate()
                    + " End Date: " + requestCustom.getEndDate() + " Status: " + requestCustom.getStatus());
            RequestCustomerDTO[] requestCustomerDTO = businessManagementService.getRequestCustomer(requestCustom);

            String parsedResponse = new Gson().toJson(requestCustomerDTO);
            String responseEncript =  AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST  /business-management/request-by-company");
            re = new ResponseEntity<String>(responseEncript, HttpStatus.OK);
        } catch (Exception e) {
            LOG.error("EXCEPTION" + e);
            LOG.error("Se produjo un error al obtener las solicitudes de la empresa " + requestCustom.getNit() + " con fecha inicial:  " + requestCustom.getStartDate() + " con fecha final:  " + requestCustom.getEndDate() + " y estado:  " + requestCustom.getStatus(), e);
            ResponseError error = new ResponseError();
            String[] strParams = {};
            error.setError(getProperty("BusinessManagementController.requestByCompanyError", strParams, getApplicationContext()));
            re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return re;
    }
    @RequestMapping(value = "/info-customer-by-request", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<?> getInfoCustomerByGkeyRequest(@RequestBody Map<String, String> body) throws BOException, IOException {
        ResponseEntity<?> re = null;

        String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /info-customer-by-request");
        CustomerRequestGkeyDTO customerRequestGkeyDTO = new Gson().fromJson(decryptedResponse, CustomerRequestGkeyDTO.class);

        LOG.info("/info-customer-by-request:  gkeyRequestCustomer: " + customerRequestGkeyDTO.getGkeyCustomerRequest());

        try {
            InfoCustomerRequestDTO[] infoCustomerRequestDTO = businessManagementService.getInfoCustomerByRequest(customerRequestGkeyDTO.getGkeyCustomerRequest());

            String parsedResponse = new Gson().toJson(infoCustomerRequestDTO);
            String responseEncript =  AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST  /business-management/info-customer-by-request");
            re = new ResponseEntity<String>(responseEncript, HttpStatus.OK);

        } catch (Exception e) {
            LOG.error("Se produjo un error al obtener  la informacion del cliente para la solicitud con gkey: " + customerRequestGkeyDTO.getGkeyCustomerRequest(), e);
            LOG.error("EXCEPTION" + e);
            ResponseError error = new ResponseError();
            String[] strParams = {};
            error.setError(getProperty("BusinessManagementController.getInfoCustomerByGkeyRequest", strParams, getApplicationContext()));
            re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return re;
    }


    /*
    Devuelvo las solicitudes a gestionar por el equipo de SAC*/

    @RequestMapping(value = "/request-sac", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<?> getRequestCustomerSacByFilter(@RequestBody RequestCustomSac requestCustomSac) throws BOException, IOException {
        ResponseEntity<?> re = null;
        try {
            LOG.info("requestCustomSac:   requestType: " + requestCustomSac.getRequestType() + " requestStatus: " + requestCustomSac.getRequestStatus()
                    + " startDate: " + requestCustomSac.getStartDate() + " endDate: " + requestCustomSac.getEndDate());

            RequestCustomerSacDTO[] requestCustomerSacDTO = businessManagementService.getRequestCustomerBySAC(requestCustomSac);
            String parsedResponse = new Gson().toJson(requestCustomerSacDTO);
            String responseEncript =  AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /business-management/request-sac");
            re = new ResponseEntity<String>(responseEncript, HttpStatus.OK);
        } catch (Exception e) {
            LOG.error("EXCEPTION" + e);
            LOG.error("Se produjo un error al obtener las solicitudes  con valores requestType: " + requestCustomSac.getRequestType() + " requestStatus: " + requestCustomSac.getRequestStatus()
                    + " startDate: " + requestCustomSac.getStartDate() + " endDate: " + requestCustomSac.getEndDate(), e);
            ResponseError error = new ResponseError();
            String[] strParams = {};
            error.setError(getProperty("BusinessManagementController.getRequestCustomerToSac", strParams, getApplicationContext()));
            re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return re;
    }

    @RequestMapping(value = "/updateRequestCustomerBySac", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<?> updateRequestCustomerBySac(@RequestBody Map<String, String> body) throws BOException {
        ResponseEntity<?> re = null;
        Boolean response = false;

        String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /updateRequestCustomerBySac");
        CustomerRequestNV customerRequestNV = new Gson().fromJson(decryptedResponse, CustomerRequestNV.class);

        try {
            CustomerRequestNV customerRequestToUpdate = this.getCustomerRequestNVBO().getById(customerRequestNV.getId());

            if (customerRequestToUpdate.getId() > 0) {

                if (customerRequestNV.getRequestStatus() != null && customerRequestNV.getRequestStatus().length() > 0) {
                    customerRequestToUpdate.setRequestStatus(customerRequestNV.getRequestStatus());
                }
                if (customerRequestNV.getRequestFlow() != null && customerRequestNV.getRequestFlow().length() > 0) {
                    customerRequestToUpdate.setRequestFlow(customerRequestNV.getRequestFlow());
                }

                if (customerRequestNV.getRequestStatus().equals("8Rechazada") || customerRequestNV.getRequestStatus().equals("9Aprobada")) {
                    if (customerRequestNV.getFinalizedAt() != null) {
                        customerRequestToUpdate.setFinalizedAt(customerRequestNV.getFinalizedAt());
                    }
                }

                this.getCustomerRequestNVBO().saveOrUpdate(customerRequestToUpdate);
                response = true;
            }

            re = new ResponseEntity<Boolean>(response, HttpStatus.OK);
        } catch (Exception e) {
            LOG.error("EXCEPTION" + e);
            LOG.error("Se produjo un error al actualizar la solicitud : " + customerRequestNV.getRequestId() + " al estado: " + customerRequestNV.getInfoStatus(), e);
            ResponseError error = new ResponseError();
            String[] strParams = {};
            error.setError(getProperty("BusinessManagementController.updateRequestCustomerBySac", strParams, getApplicationContext()));
            re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return re;
    }

    @RequestMapping(value = "/customer", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<?> getInfoCustomer(@RequestBody Map<String, String> body) throws BOException, IOException {
        ResponseEntity<?> re = null;
        String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /customer BusinessManagementController");
        CustomerReq customerReq = new Gson().fromJson(decryptedResponse, CustomerReq.class);

        try {

            LOG.info("CustomerReq: +++ " + customerReq.toString() + " -  " + customerReq.getPrincipalNit() + " -  " + customerReq.getSecondaryNit());
            List<CustomerDTO> customersList = businessManagementService.getInfoCustomer(customerReq);


            String parsedResponse = new Gson().toJson(customersList);
            String responseEncript =  AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "POST /business-management/customer");
            re = new ResponseEntity<String>(responseEncript, HttpStatus.OK);

        } catch (Exception e) {
            LOG.error("EXCEPTION" + e);
            LOG.error("Se produjo un error al obtener los datos del cliente " + " -  " + customerReq.getPrincipalNit() + " -  " + customerReq.getSecondaryNit(), e);
            ResponseError error = new ResponseError();
            String[] strParams = {};
            error.setError(getProperty("BusinessManagementController.findCustomer", strParams, getApplicationContext()));
            re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return re;
    }


    @RequestMapping(value = "/customer-request", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<?> saveCustomerRequest(
            @RequestBody Map<String, String>  body) throws Exception {

        String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /customer-request");
        CustomerRequestDTO customerRequestDTO = new Gson().fromJson(decryptedResponse, CustomerRequestDTO.class);

        ResponseEntity<?> re = null;
        CustomerRequestNV customerRequest = new CustomerRequestNV();
        try {

            LOG.info("Inicia guardado customer-request");

            UsuarioLoginDTO user = this.getUserBO().getCurrentUser();

            if (user == null || user.getEmpresa() == null) {
                LOG.error("Usuario o empresa no pueden ser nulos");
                throw new Exception("Sesion invalida");
            }

            if (customerRequestDTO == null) {
                LOG.error("customerRequestDTO es nulos, no puede guardarse la solicitud");
                throw new Exception("Los valores recibidos son nulos");
            }

            // Validación para 'requestId'
            if (customerRequestDTO.getRequestId() != null && customerRequestDTO.getRequestId().length() > 0) {
                customerRequest.setRequestId(customerRequestDTO.getRequestId());
            }
            // Validación para 'customerId'
            if (customerRequestDTO.getCustomerId() != null && customerRequestDTO.getCustomerId().length() > 0) {
                customerRequest.setCustomerId(customerRequestDTO.getCustomerId());
            }

            // Validación para 'creatorId'
            if (user.getEmpresa() != null && user.getEmpresa().getId() != null) {
                customerRequest.setCreatorId(user.getEmpresa().getId());
            }

            customerRequest.setCreatorUserId(user.getUserName());

            // Validación para 'createdAt'
            if (customerRequestDTO.getCreatedAt() != null) {
                customerRequest.setCreatedAt(customerRequestDTO.getCreatedAt());
            }

            // Validación para 'contactName'
            if (user.getNombres() != null && user.getNombres().length() > 0
                    && user.getApellidos() != null && user.getApellidos().length() > 0) {
                customerRequest.setContactName(user.getNombres() + " " + user.getApellidos());
            }

            // Validación para 'contactEmail'
            if (user.getEmail() != null && user.getEmail().length() > 0) {
                customerRequest.setContactEmail(user.getEmail());
            }

            // Validación para 'contactPhone'
            if (customerRequestDTO.getContactPhone() != null && customerRequestDTO.getContactPhone().length() > 0) {
                customerRequest.setContactPhone(customerRequestDTO.getContactPhone());
            }

            // Validación para 'requestStatus'
            if (customerRequestDTO.getRequestStatus() != null && customerRequestDTO.getRequestStatus().length() > 0) {
                customerRequest.setRequestStatus(customerRequestDTO.getRequestStatus());
            }

            // Validación para 'requestInfo'
            if (customerRequestDTO.getRequestInfo() != null && customerRequestDTO.getRequestInfo().length() > 0) {
                customerRequest.setRequestInfo(customerRequestDTO.getRequestInfo());
            }

            // Validación para 'infoStatus'
            if (customerRequestDTO.getInfoStatus() != null && customerRequestDTO.getInfoStatus().length() > 0) {
                customerRequest.setInfoStatus(customerRequestDTO.getInfoStatus());
            }

            // Validación para 'requestFlow'
            if (customerRequestDTO.getRequestFlow() != null && customerRequestDTO.getRequestFlow().length() > 0) {
                customerRequest.setRequestFlow(customerRequestDTO.getRequestFlow());
            }

            // Validación para 'finalizedAt'
            if (customerRequestDTO.getFinalizedAt() != null) {
                customerRequest.setFinalizedAt(customerRequestDTO.getFinalizedAt());
            }

            // Validación para 'getRepresentedByAgent'
            if (customerRequestDTO.getRepresentedByAgent() != null) {
                customerRequest.setRepresentedByAgent(customerRequestDTO.getRepresentedByAgent());
            }

            // Validación para 'requestFlow'
            if (customerRequestDTO.getRequestType() != null && customerRequestDTO.getRequestType().length() > 0) {
                customerRequest.setRequestType(customerRequestDTO.getRequestType());
            }

            this.getCustomerRequestNVBO().saveNew(customerRequest);
            re = (new ResponseEntity<>("OK", HttpStatus.OK));

        } catch (Exception e) {

            LOG.error("RESPUESTA CATCH: " + e.toString());
            String[] strParams = {};
            String msg = getProperty("BusinessManagementController.customerRequestError", strParams,
                    getApplicationContext());

            ResponseError r = new ResponseError();
            String error = e.getMessage();
            LOG.error(error, e);
            r.setError(msg);
            re = (new ResponseEntity<ResponseError>(r, HttpStatus.BAD_REQUEST));

        }
        return re;
    }


    @RequestMapping(value = "/customer/save-or-update", method = RequestMethod.POST)
    public @ResponseBody ResponseEntity<?> saveOrUpdateCustomerBYRequest(
            @RequestBody Map<String, String>  body) throws Exception {

        String decryptedResponse = AESEncryptionUtil.getInstance(initVector, key).decrypt(body.get("data"), "POST /customer/save-or-update");
        CustomerNV customer = new Gson().fromJson(decryptedResponse, CustomerNV.class);

        ResponseEntity<?> re = null;
        LOG.info("Inicia guardado o actualizacion del cliente, ednpoint /customer/save-or-update");
        try {
            UsuarioLoginDTO user = this.getUserBO().getCurrentUser();

            if (user == null || user.getEmpresa() == null) {
                LOG.error("Usuario o empresa no pueden ser nulos");
                throw new Exception("Sesion invalida");
            }

            if (customer == null) {
                LOG.error("El parametro customer de entrada es nulo");
                throw new Exception("El parametro de entrada customer no puede ser nulo");
            }


            if (customer.getId() == null && customer.getNit() != null && customer.getNit().trim().length()>0 ) {
                // Crear un nuevo cliente
                getCustomerBO().saveNew(customer);
                re = (new ResponseEntity<>("Se registro la empresa correctamente", HttpStatus.OK));
            } else {
                // Actualizar un cliente existente
                updateCustomer(customer);
                re = (new ResponseEntity<>("Se actualizo la empresa correctamente", HttpStatus.OK));
            }

        } catch (Exception e) {

            LOG.error("RESPUESTA CATCH: " + e.toString());
            String[] strParams = {};
            String msg = getProperty("BusinessManagementController.saveOrUpdateCustomer", strParams,
                    getApplicationContext());

            ResponseError r = new ResponseError();
            String error = e.getMessage();
            LOG.error(error, e);
            r.setError(msg);
            re = (new ResponseEntity<ResponseError>(r, HttpStatus.BAD_REQUEST));

        }
        return re;
    }


    private CustomerNV updateCustomer(CustomerNV customer)throws Exception {
        // Verificar si el cliente existe antes de actualizar
        CustomerNV existingCustomer = null;
        if(customer.getId() != null && customer.getNit() != null){
            existingCustomer = getCustomerBO().getById(customer.getId());
        }


        if (existingCustomer == null) {
            throw new Exception("Customer no encontrado para el id:" + customer.getId());
        }
        try {
            if (existingCustomer.getNit().length() > 0) {
                // Validacion para 'tratamiento' (treatment)
                if (customer.getTreatment() != null && customer.getTreatment().length() > 0) {
                    existingCustomer.setTreatment(customer.getTreatment());
                }

                // Validacion para 'tipoPersona' (personType)
                if (customer.getPersonType() != null && customer.getPersonType().length() > 0) {
                    existingCustomer.setPersonType(customer.getPersonType());
                }
                // Validacion para 'sigla' (initials)
                if (customer.getInitials() != null && customer.getInitials().length() > 0) {
                    existingCustomer.setInitials(customer.getInitials());
                }

                // Validacion para 'codigoDistrito' (districtCode)
                if (customer.getDistrictCode() != null && customer.getDistrictCode().length() > 0) {
                    existingCustomer.setDistrictCode(customer.getDistrictCode());
                }

                // Validacion para 'correoRepresentante' (representativeEmail)
                if (customer.getRepresentativeEmail() != null && customer.getRepresentativeEmail().length() > 0) {
                    existingCustomer.setRepresentativeEmail(customer.getRepresentativeEmail());
                }

                // Validacion para 'nombreContactoOperativo' (operationalContactName)
                if (customer.getOperationalContactName() != null && customer.getOperationalContactName().length() > 0) {
                    existingCustomer.setOperationalContactName(customer.getOperationalContactName());
                }

                // Validacion para 'telefonoMovilContacto' (operationalContactMobile)
                if (customer.getOperationalContactMobile() != null && customer.getOperationalContactMobile().length() > 0) {
                    existingCustomer.setOperationalContactMobile(customer.getOperationalContactMobile());
                }

                // Validacion para 'correoContacto' (operationalContactEmail)
                if (customer.getOperationalContactEmail() != null && customer.getOperationalContactEmail().length() > 0) {
                    existingCustomer.setOperationalContactEmail(customer.getOperationalContactEmail());
                }

                // Validacion para 'nombreContactoTesoreria' (treasuryContactName)
                if (customer.getTreasuryContactName() != null && customer.getTreasuryContactName().length() > 0) {
                    existingCustomer.setTreasuryContactName(customer.getTreasuryContactName());
                }

                // Validacion para 'telefonoMovilTesoreria' (treasuryContactMobile)
                if (customer.getTreasuryContactMobile() != null && customer.getTreasuryContactMobile().length() > 0) {
                    existingCustomer.setTreasuryContactMobile(customer.getTreasuryContactMobile());
                }

                // Validacion para 'correoTesoreria2' (secondaryTreasuryEmail)
                if (customer.getSecondaryTreasuryEmail() != null && customer.getSecondaryTreasuryEmail().length() > 0) {
                    existingCustomer.setSecondaryTreasuryEmail(customer.getSecondaryTreasuryEmail());
                }

                // Validacion para 'requestNumber'
                if (customer.getRequestNumber() != null && customer.getRequestNumber().length() > 0) {
                    existingCustomer.setRequestNumber(customer.getRequestNumber());
                }

                // Validacion para 'lastSapUpdate'
                if (customer.getLastSapUpdate() != null) {
                    existingCustomer.setLastSapUpdate(customer.getLastSapUpdate());
                }

                // Validacion para 'lastCompletedUpdateDate'
                if (customer.getLastCompletedUpdateDate() != null) {
                    existingCustomer.setLastCompletedUpdateDate(customer.getLastCompletedUpdateDate());
                }

                return getCustomerBO().saveOrUpdate(existingCustomer);

            }
        } catch (Exception e) {
            LOG.error("Error al actualizar el cliente con id: " + customer.getId(), e);
            throw new Exception("Customer no encontrada para el id:" + customer.getId(), e);
        }
        return existingCustomer;
    }



    @RequestMapping(value = "/request-approved", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<?> getInfoCustomerApprovedChangeRequests() throws BOException, IOException {
        ResponseEntity<?> re = null;
        try {
            LOG.info("Inicia consulta para obtener las solicitudes del cliente con estado 1CambioAprobado.");

            CustomerApprovedChangeRequestDTO[] customerApprovedChangeRequestDTO = businessManagementService.getInfoCustomerApprovedChangeRequest();
            String parsedResponse = new Gson().toJson(customerApprovedChangeRequestDTO);
            String responseEncript =  AESEncryptionUtil.getInstance(initVector, key).encrypt(parsedResponse, "GET /business-management/request-approved");
            re = new ResponseEntity<String>(responseEncript, HttpStatus.OK);
        } catch (Exception e) {
            LOG.error("EXCEPTION" + e);
            LOG.error("Se produjo un error al consultar las solicitudes de clientes con estado 1CambioAprobado", e);
            ResponseError error = new ResponseError();
            String[] strParams = {};
            error.setError(getProperty("BusinessManagementController.getInfoCustomerApprovedChangeRequests", strParams, getApplicationContext()));
            re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return re;
    }
}
