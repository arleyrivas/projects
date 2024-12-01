package com.spia.businessportal.service.impl;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.CustomerReq;
import com.spia.businessportal.common.entities.MandatoryDocumentationReq;
import com.spia.businessportal.common.entities.RequestCustom;
import com.spia.businessportal.common.entities.RequestCustomSac;
import com.spia.businessportal.common.entities.dto.*;
import com.spia.businessportal.service.BusinessManagementService;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class BusinessManagementServiceImpl implements BusinessManagementService {
    private static final Log LOG = LogFactory.getLog(BillOfLadingServiceImpl.class);

    @Autowired
    private QuerysBO querysBO;



    @Override
    public DocumentTypesDTO[] getBusinessManagementDocuments(MandatoryDocumentationReq mandatoryDocumentationReq) throws Exception {

        LOG.info(" NIT: "+ mandatoryDocumentationReq.getNit()  + " companyType: " + mandatoryDocumentationReq.getCompanyType()+ " mandato: " + mandatoryDocumentationReq.getMandato()  );
        QuerysDTO request = new QuerysDTO();
        DocumentTypesDTO[] documentTypesDTO = null;
        String type = "String";

        List<QuerysParameterDTO> parameters = new ArrayList<>();

        QuerysParameterDTO nitParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO companyTypeParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO personalTypeParameterDTO = new QuerysParameterDTO();

        nitParameterDTO.setValue(mandatoryDocumentationReq.getNit());
        nitParameterDTO.setType(type);
        nitParameterDTO.setParameterId(1);

        companyTypeParameterDTO.setValue(mandatoryDocumentationReq.getCompanyType());
        companyTypeParameterDTO.setType(type);
        companyTypeParameterDTO.setParameterId(2);

        personalTypeParameterDTO.setValue(mandatoryDocumentationReq.getMandato());
        personalTypeParameterDTO.setType(type);
        personalTypeParameterDTO.setParameterId(3);

        parameters.add(nitParameterDTO);
        parameters.add(companyTypeParameterDTO);
        parameters.add(personalTypeParameterDTO);

        request.setParameters(parameters);
        request.setQueryName("getInfoMandatoryDocumentation");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();

        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        LOG.info("jsonInString----- " + jsonInString);
        documentTypesDTO = gson.fromJson(jsonInString, DocumentTypesDTO[].class);

        return documentTypesDTO;

    }

    @Override
    public List<CustomerDTO> getInfoCustomer(CustomerReq customerReq) throws Exception {
        QuerysDTO request = new QuerysDTO();
        CustomerDTO[] response = null;

        List<CustomerDTO> customersList = new ArrayList<>();
        String type = "String";

        List<QuerysParameterDTO> parameters = new ArrayList<>();

        QuerysParameterDTO nit1ParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO nit2ParameterDTO = new QuerysParameterDTO();

        nit1ParameterDTO.setValue(customerReq.getPrincipalNit());
        nit1ParameterDTO.setType(type);
        nit1ParameterDTO.setParameterId(1);

        nit2ParameterDTO.setValue(customerReq.getSecondaryNit());
        nit2ParameterDTO.setType(type);
        nit2ParameterDTO.setParameterId(2);

        parameters.add(nit1ParameterDTO);
        parameters.add(nit2ParameterDTO);

        request.setParameters(parameters);
        request.setQueryName("getInfoCompany");


        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);


        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        response = gson.fromJson(jsonInString, CustomerDTO[].class);
        for (CustomerDTO Custom : response) {
            CustomerDTO customerDTO = new CustomerDTO();

            customerDTO.setTipoPresentacion(Custom.getTipoPresentacion());
            customerDTO.setId(Custom.getId());
            customerDTO.setTratamiento(Custom.getTratamiento());
            customerDTO.setTipoPersona(Custom.getTipoPersona());
            customerDTO.setNit(Custom.getNit());
            customerDTO.setRazonSocial(Custom.getRazonSocial());
            customerDTO.setSigla(Custom.getSigla());
            customerDTO.setDireccion(Custom.getDireccion());
            customerDTO.setDistrito(Custom.getDistrito());
            customerDTO.setCiudad(Custom.getCiudad());
            customerDTO.setDepartamento(Custom.getDepartamento());
            customerDTO.setPais(Custom.getPais());
            customerDTO.setTelefono1(Custom.getTelefono1());
            customerDTO.setEmail(Custom.getEmail());
            customerDTO.setCorreoFE1(Custom.getCorreoFE1());
            customerDTO.setCorreoFE2(Custom.getCorreoFE2());
            customerDTO.setNombreC1(Custom.getNombreC1());
            customerDTO.setTelefonoC1(Custom.getTelefonoC1());
            customerDTO.setMailC1(Custom.getMailC1());
            customerDTO.setNombreC2(Custom.getNombreC2());
            customerDTO.setTelefonoC2(Custom.getTelefonoC2());
            customerDTO.setMailC2(Custom.getMailC2());
            customerDTO.setRequest_flag(Custom.getRequest_flag());

            customersList.add(customerDTO);

        }

        return customersList;
    }

    public RequestCustomerDTO[] getRequestCustomer(RequestCustom requestCustom) throws Exception {

        QuerysDTO request = new QuerysDTO();

        String type = "String";

        LOG.info("Procesando request getRequestCustomer con los datos:   NIT: " +requestCustom.getNit()+ " Start Date: " + requestCustom.getStartDate()
                + " End Date: "+ requestCustom.getEndDate()+ " Status: " + requestCustom.getStatus());

        List<QuerysParameterDTO> parameters = new ArrayList<>();

        QuerysParameterDTO nitParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO startDateDTO = new QuerysParameterDTO();
        QuerysParameterDTO endDateDTO = new QuerysParameterDTO();
        QuerysParameterDTO statusDTO = new QuerysParameterDTO();

        nitParameterDTO.setValue(requestCustom.getNit());
        nitParameterDTO.setType(type);
        nitParameterDTO.setParameterId(1);

        startDateDTO.setValue(requestCustom.getStartDate());
        startDateDTO.setType(type);
        startDateDTO.setParameterId(2);

        endDateDTO.setValue(requestCustom.getEndDate());
        endDateDTO.setType(type);
        endDateDTO.setParameterId(3);

        statusDTO.setValue(requestCustom.getStatus());
        statusDTO.setType(type);
        statusDTO.setParameterId(4);


        parameters.add(nitParameterDTO);
        parameters.add(startDateDTO);
        parameters.add(endDateDTO);
        parameters.add(statusDTO);

        request.setParameters(parameters);
        request.setQueryName("getInfoRequestByCompany");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();

        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        LOG.info("jsonInString----- " + jsonInString);


        return gson.fromJson(jsonInString, RequestCustomerDTO[].class);
    }


    @Override
    public DepartmentDTO[] getDepartment() throws Exception {
        QuerysDTO request = new QuerysDTO();
        DepartmentDTO[] response = null;


        request.setParameters(new ArrayList<>());
        request.setQueryName("getInfoDepartments");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        response = gson.fromJson(jsonInString, DepartmentDTO[].class);

        return response;
    }

    @Override
    public CityDTO[] getCity() throws Exception {
        QuerysDTO request = new QuerysDTO();
        CityDTO[] response = null;


        request.setParameters(new ArrayList<>());
        request.setQueryName("getInfoCities");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        response = gson.fromJson(jsonInString, CityDTO[].class);


        return response;
    }

    public RequestCustomerSacDTO[] getRequestCustomerBySAC(RequestCustomSac requestCustomSac) throws Exception {

        QuerysDTO request = new QuerysDTO();

        String type = "String";

        LOG.info("Procesando request getRequestCustomerBySAC con los datos:   requestType: " +requestCustomSac.getRequestType()+ " requestStatus: " + requestCustomSac.getRequestStatus()
                + " startDate: "+ requestCustomSac.getStartDate()+ " endDate: " + requestCustomSac.getEndDate());

        List<QuerysParameterDTO> parameters = new ArrayList<>();

        QuerysParameterDTO nitParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO startDateDTO = new QuerysParameterDTO();
        QuerysParameterDTO endDateDTO = new QuerysParameterDTO();
        QuerysParameterDTO statusDTO = new QuerysParameterDTO();

        nitParameterDTO.setValue(requestCustomSac.getRequestType());
        nitParameterDTO.setType(type);
        nitParameterDTO.setParameterId(1);

        startDateDTO.setValue(requestCustomSac.getRequestStatus());
        startDateDTO.setType(type);
        startDateDTO.setParameterId(2);

        endDateDTO.setValue(requestCustomSac.getStartDate());
        endDateDTO.setType(type);
        endDateDTO.setParameterId(3);

        statusDTO.setValue(requestCustomSac.getEndDate());
        statusDTO.setType(type);
        statusDTO.setParameterId(4);


        parameters.add(nitParameterDTO);
        parameters.add(startDateDTO);
        parameters.add(endDateDTO);
        parameters.add(statusDTO);

        request.setParameters(parameters);
        request.setQueryName("getInfoRequestBySAC");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();

        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        LOG.info("jsonInString----- " + jsonInString);


        return gson.fromJson(jsonInString, RequestCustomerSacDTO[].class);
    }

    public CustomerApprovedChangeRequestDTO[] getInfoCustomerApprovedChangeRequest() throws Exception {

            QuerysDTO request = new QuerysDTO();

            request.setParameters(new ArrayList<>());
            request.setQueryName("getInfoRequestCambioAprobado");

            GsonBuilder builder = new GsonBuilder();
            builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
            builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
            Gson gson = builder.create();

            QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

            String jsonInString = gson.toJson(querysResponseDTO.getResult());
            LOG.info("jsonInString----- " + jsonInString);

            return gson.fromJson(jsonInString, CustomerApprovedChangeRequestDTO[].class);
    }

    public InfoCustomerRequestDTO[] getInfoCustomerByRequest(String gkeyCustomerRequest) throws Exception {

        QuerysDTO request = new QuerysDTO();

        LOG.info("/getInfoCustomerByRequest:   gkeyRequestCustomer: " + gkeyCustomerRequest);

        List<QuerysParameterDTO> parameters = new ArrayList<>();

        QuerysParameterDTO gkeyParameterDTO = new QuerysParameterDTO();

        gkeyParameterDTO.setValue(gkeyCustomerRequest);
        gkeyParameterDTO.setType("String");
        gkeyParameterDTO.setParameterId(1);

        parameters.add(gkeyParameterDTO);

        request.setParameters(parameters);
        request.setQueryName("getInfoCustomerByRequest");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();

        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        LOG.info("jsonInString----- " + jsonInString);

        return gson.fromJson(jsonInString, InfoCustomerRequestDTO[].class);

    }


}
