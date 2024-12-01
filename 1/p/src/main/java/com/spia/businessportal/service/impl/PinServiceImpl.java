package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.PinContainerized;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.PinContainerizedServiceDTO;
import com.spia.businessportal.common.entities.dto.PinImportServiceDTO;
import com.spia.businessportal.common.entities.dto.PinInfoServiceDTO;
import com.spia.businessportal.common.entities.dto.PinServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.service.PinService;

import ar.com.fluxit.framework.business.generic.GenericService;
import ar.com.fluxit.framework.common.exception.BusinessException;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 13/07/2018 Implementacion del Servicio que permite realizar
 * operaciones con Facturas .
 * 
 */

public class PinServiceImpl implements PinService {

    private static final Log LOG = LogFactory.getLog(PinServiceImpl.class);

    @Autowired
    private QuerysBO querysBO;
    @Autowired
    private UserBO userBO;
    @Autowired
    private GenericService<Pin> pinBO;
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<PinImportServiceDTO> searchPin(String pinNbr) throws Exception {
        UsuarioLoginDTO userlogin = userBO.getCurrentUser();
        QuerysDTO request = new QuerysDTO();
        PinImportServiceDTO pin = new PinImportServiceDTO();
        List<PinImportServiceDTO> pins = new ArrayList<>();

        List<PinContainerizedServiceDTO> pinContainerizedServiceDTOList = new ArrayList<>();
        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO pinParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO pinUserDTO = new QuerysParameterDTO();

        pinParameterDTO.setValue(pinNbr);
        pinParameterDTO.setType("String");
        pinParameterDTO.setParameterId(1);

        pinUserDTO.setValue(userlogin.getEmpresa().getId());
        pinUserDTO.setType("String");
        pinUserDTO.setParameterId(2);

        parameters.add(pinParameterDTO);
        parameters.add(pinUserDTO);

        request.setParameters(parameters);
        request.setQueryName("searchPin");
        // QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
        // Gson gson = new Gson();

        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        PinServiceDTO[] pinList = gson.fromJson(jsonInString, PinServiceDTO[].class);

        if (pinList != null && pinList.length != 0) {
            for (PinServiceDTO pinServiceDTO : pinList) {
                Date date1 = pinServiceDTO.getCreatedAt();
                pin.setId(pinServiceDTO.getId());
                pin.setCreatedAt(date1);
                pin.setCreatedByLDAP(pinServiceDTO.getCreatedByLDAP());
                pin.setBlNbr(pinServiceDTO.getBlNbr());
                pin.setPinNbr(pinServiceDTO.getPinNbr());
                pin.setBkgNbr(pinServiceDTO.getBkgNbr());
                pin.setEdoNbr(pinServiceDTO.getEdoNbr());
                pin.setEroNbr(pinServiceDTO.getEroNbr());
                pin.setActive(pinServiceDTO.getActive());
                pin.setDeleted(pinServiceDTO.getDeleted());
                pin.setTruckingCompanyLDAP(pinServiceDTO.getTruckingCompanyLDAP());
                pin.setTruckingCompanyNameLDAP(pinServiceDTO.getTruckingCompanyNameLDAP());
                pin.setType_pin(pinServiceDTO.getType_pin());
                break;
            }
            for (PinServiceDTO pinServiceDTO : pinList) {
                PinContainerizedServiceDTO pinContainerizedServiceDTO = new PinContainerizedServiceDTO();
                pinContainerizedServiceDTO.setUnitNbr(pinServiceDTO.getUnitNbr());
                pinContainerizedServiceDTO.setTwenty(pinServiceDTO.getTwenty());
                pinContainerizedServiceDTO.setIsoType(pinServiceDTO.getIsoType());
                pinContainerizedServiceDTOList.add(pinContainerizedServiceDTO);
            }
            pin.setPinContainerized(pinContainerizedServiceDTOList);
            pins.add(pin);
        } else {
            pins = null;
        }

        return pins;
    }

    @Override
    public PinInfoServiceDTO[] searchPinInfo(String pinNbr, String pinUnitList) throws Exception {

        QuerysDTO request = new QuerysDTO();
        PinImportServiceDTO pin = new PinImportServiceDTO();
        List<PinInfoServiceDTO> pins = new ArrayList<>();

        List<PinContainerizedServiceDTO> pinContainerizedServiceDTOList = new ArrayList<>();
        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO pinParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO cliParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO typeParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO unitListParameterDTO = new QuerysParameterDTO();

        pinParameterDTO.setValue(pinNbr);
        pinParameterDTO.setType("String");
        pinParameterDTO.setParameterId(1);

        cliParameterDTO.setValue("");
        cliParameterDTO.setType("String");
        cliParameterDTO.setParameterId(2);

        typeParameterDTO.setValue("1");
        typeParameterDTO.setType("String");
        typeParameterDTO.setParameterId(3);

        unitListParameterDTO.setValue(pinUnitList);
        unitListParameterDTO.setType("List");
        unitListParameterDTO.setParameterId(4);

        parameters.add(pinParameterDTO);
        parameters.add(cliParameterDTO);
        parameters.add(typeParameterDTO);
        parameters.add(unitListParameterDTO);
        request.setParameters(parameters);
        request.setQueryName("searchPinInfo");

        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        // QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
        // Gson gson = new Gson();

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        PinInfoServiceDTO[] pinList = gson.fromJson(jsonInString, PinInfoServiceDTO[].class);

        return pinList;
    }

    @Override
    public void processQueue() {
        Session session = sessionFactory.openSession();
        List<Pin> pins = null;
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.MONTH, -1);
        Date monthAgo = cal.getTime();
        try {
            String queryString = "FROM Pin ";
            String where = "WHERE active = true AND created_at < :monthAgo";
            queryString = queryString + where;
            Query query = session.createQuery(queryString);
            query.setDate("monthAgo", monthAgo);
            pins = query.list();
        } catch (Exception e) {
            LOG.error("Se produjo un error al recuperar los pines", e);
        } finally {
            session.close();
        }
        for (Pin pin : pins) {
            try {
                pin.setActive(false);
                for (PinContainerized unit : pin.getPinContainerized()) {
                	unit.setActive(false);
                }
                this.getPinBO().saveOrUpdate(pin);
            } catch (BusinessException e) {
                LOG.error("Se produjo un error al actualizar los pines con más de un mes de creación", e);
            }
        }
    }

    public GenericService<Pin> getPinBO() {
        return pinBO;
    }

    public void setPinBO(GenericService<Pin> pinBO) {
        this.pinBO = pinBO;
    }

}
