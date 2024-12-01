package com.spia.businessportal.backend.bo.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.FinancialBO;
import com.spia.businessportal.common.entities.dto.FinancialDTO;
import com.spia.businessportal.common.entities.dto.FinancialResponseDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;

public class FinancialBOImpl implements FinancialBO<FinancialResponseDTO> {

    private static final Logger LOG = LoggerFactory.getLogger(FinancialBOImpl.class);

    private String urlFinancial;
    @Autowired
    private RestTemplate restTemplate;

    @Override
    public FinancialResponseDTO executeFinancial(FinancialDTO financial) throws BusinessException {
        LOG.info("URL Service Financial: {}", urlFinancial);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", MediaType.APPLICATION_JSON.toString());
        headers.add("Accept", MediaType.APPLICATION_JSON.toString());

        HttpEntity<FinancialDTO> entity = new HttpEntity<FinancialDTO>(financial, headers);
        ResponseEntity<FinancialResponseDTO> responsee = null;
        try {
            responsee = restTemplate.exchange(urlFinancial, HttpMethod.POST, entity, FinancialResponseDTO.class);
            LOG.info("Response Service Financial: {}", responsee);
        } catch (Exception e) {
            throw new BusinessException(e.getMessage(), e);
        }
        if (responsee.getStatusCode() != HttpStatus.OK) {
            throw new BusinessException("Se presento un error al visualizar la factura");
        }
        return responsee.getBody();
    }

    /**
     * @return the urlFinancial
     */
    public String getUrlFinancial() {
        return urlFinancial;
    }

    /**
     * @param urlFinancial
     *            the urlFinancial to set
     */
    public void setUrlFinancial(String urlFinancial) {
        this.urlFinancial = urlFinancial;
    }

}
