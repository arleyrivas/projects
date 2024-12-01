package com.spia.businessportal.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.QuotaServiceDTO;
import com.spia.businessportal.service.ValidateHoursService;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite realizar operaciones con
 * Booking .
 * 
 */

public class ValidateHoursServiceImpl implements ValidateHoursService {

    private static final Log LOG = LogFactory.getLog(ValidateHoursServiceImpl.class);

    @Autowired
    private QuerysBO querysBO;

    @Override
    public QuotaServiceDTO[] searchQuotas(Date startDate, Date endDate, String rule) throws Exception {

        QuerysDTO request = new QuerysDTO();
        QuotaServiceDTO[] quotas = null;
        String type = "String";

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO startParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO endParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO ruleParameterDTO = new QuerysParameterDTO();

        LOG.info(startDate.toString());
        LOG.info(endDate.toString());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd HH:mm:ss");
        String sendStartDate = sdf.format(startDate);
        String sendEndDate = sdf.format(endDate);
        LOG.info("::::::::sendStartDate::::::::" + sendStartDate);
        LOG.info("::::::::sendEndDate::::::::" + sendEndDate);
        startParameterDTO.setValue(sendStartDate);
        startParameterDTO.setType(type);
        startParameterDTO.setParameterId(1);

        endParameterDTO.setValue(sendEndDate);
        endParameterDTO.setType(type);
        endParameterDTO.setParameterId(2);
        
        if(rule.equals("null") || rule.equals("AGUADULCE"))
        {
        	ruleParameterDTO.setValue("REGLA GENERAL");
            ruleParameterDTO.setType(type);
            ruleParameterDTO.setParameterId(3);
        }
        else if (rule.equals("EXTERNO1"))
        {
        	ruleParameterDTO.setValue("REGLA EXTERNO");
            ruleParameterDTO.setType(type);
            ruleParameterDTO.setParameterId(3);
        }
        
        else if (rule.equals("EXTERNO2"))
        {
            ruleParameterDTO.setValue("REGLA EXT2");
            ruleParameterDTO.setType(type);
            ruleParameterDTO.setParameterId(3);
        }
        
        else if (rule.equals("EXTERNO3"))
        {
            ruleParameterDTO.setValue("REGLA EXT3");
            ruleParameterDTO.setType(type);
            ruleParameterDTO.setParameterId(3);
        }
        
        parameters.add(startParameterDTO);
        parameters.add(endParameterDTO);
        parameters.add(ruleParameterDTO);
        request.setParameters(parameters);
        request.setQueryName("hoursValidate");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        quotas = gson.fromJson(jsonInString, QuotaServiceDTO[].class);

        return quotas;
    }
    
    public QuotaServiceDTO[] searchQuotasCC(Date date, String rule, String units) throws Exception {

        QuerysDTO request = new QuerysDTO();
        QuotaServiceDTO[] quotas = null;
        String type = "String";

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO startParameterDTO = new QuerysParameterDTO();        
        QuerysParameterDTO ruleParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO unitsDTO = new QuerysParameterDTO();

        LOG.info(date.toString());       
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String sendDate = sdf.format(date);       
        LOG.info("::::::::sendStartDate::::::::" + sendDate);        
        startParameterDTO.setValue(sendDate);
        startParameterDTO.setType(type);
        startParameterDTO.setParameterId(1);       
        
        if(rule ==null || rule.equals("null") || rule.equals("AGUADULCE"))
        {
        	ruleParameterDTO.setValue("REGLA GENERAL");
            ruleParameterDTO.setType(type);
            ruleParameterDTO.setParameterId(2);
        }
        else if (rule.equals("EXTERNO1"))
        {
        	ruleParameterDTO.setValue("REGLA EXTERNO");
            ruleParameterDTO.setType(type);
            ruleParameterDTO.setParameterId(2);
        }
        
        else if (rule.equals("EXTERNO2"))
        {
            ruleParameterDTO.setValue("REGLA EXT2");
            ruleParameterDTO.setType(type);
            ruleParameterDTO.setParameterId(2);
        }
        
        else if (rule.equals("EXTERNO3"))
        {
            ruleParameterDTO.setValue("REGLA EXT3");
            ruleParameterDTO.setType(type);
            ruleParameterDTO.setParameterId(2);
        }
        
        if(units.equals("null") || units.equals(null)) { 
        	units = "";
        }
        
        unitsDTO.setValue(units);
        unitsDTO.setType(type);
        unitsDTO.setParameterId(3);
                

        parameters.add(startParameterDTO);        
        parameters.add(ruleParameterDTO);
        parameters.add(unitsDTO);
        request.setParameters(parameters);
        request.setQueryName("hoursValidateCC");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        quotas = gson.fromJson(jsonInString, QuotaServiceDTO[].class);

        return quotas;
    }

}
