package com.spia.businessportal.service.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.backend.bo.FinancialBO;
import com.spia.businessportal.common.entities.dto.FinancialDTO;
import com.spia.businessportal.common.entities.dto.FinancialResponseDTO;
import com.spia.businessportal.service.FinancialService;

public class FinancialServiceImpl implements FinancialService {
    @Autowired
    private FinancialBO financialBO;

    private static final Log LOG = LogFactory.getLog(FinancialServiceImpl.class);

    @Override
    public String getPdf(String nbrInvoice) throws Exception {
        String ddfDto = "";
        FinancialDTO request = new FinancialDTO();
        request.setIdInvoice(nbrInvoice);
        request.setGenerateProforma(true);
        request.setUploadCEN(false);
        FinancialResponseDTO financialResponseDTO = financialBO.executeFinancial(request);
        if (financialResponseDTO.getSuccess().equals("false")) {
            ddfDto = "Error";
        } else {
            ddfDto = (String) financialResponseDTO.getResult();
        }
        return ddfDto;
    }

}
