package com.spia.businessportal.service;

import com.spia.businessportal.common.entities.dto.WeightServiceDTO;

import java.util.Date;

public interface CompanyService {
    public WeightServiceDTO[] getWeightControl(String truck, Date tvadate) throws Exception;
}
