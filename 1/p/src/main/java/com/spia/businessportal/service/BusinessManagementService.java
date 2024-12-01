package com.spia.businessportal.service;

import com.spia.businessportal.common.entities.CustomerReq;
import com.spia.businessportal.common.entities.MandatoryDocumentationReq;
import com.spia.businessportal.common.entities.RequestCustom;
import com.spia.businessportal.common.entities.RequestCustomSac;
import com.spia.businessportal.common.entities.dto.*;

import java.util.List;


public interface BusinessManagementService {

    public DepartmentDTO[] getDepartment() throws Exception;
    public CityDTO[] getCity() throws Exception;

    public DocumentTypesDTO[] getBusinessManagementDocuments(MandatoryDocumentationReq mandatoryDocumentationReq) throws Exception;

    public List<CustomerDTO> getInfoCustomer(CustomerReq customerReq) throws Exception;

    public RequestCustomerDTO[] getRequestCustomer(RequestCustom requestCustom) throws Exception;

    public RequestCustomerSacDTO[] getRequestCustomerBySAC(RequestCustomSac requestCustomSac) throws Exception;

    public CustomerApprovedChangeRequestDTO[] getInfoCustomerApprovedChangeRequest() throws Exception;

    public InfoCustomerRequestDTO[] getInfoCustomerByRequest(String gkeyCustomerRequest) throws Exception;
}

