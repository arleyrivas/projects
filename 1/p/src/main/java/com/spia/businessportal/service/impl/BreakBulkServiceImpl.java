package com.spia.businessportal.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.Pin;
import com.spia.businessportal.common.entities.PinContainerized;
import com.spia.businessportal.common.entities.TruckVisitAppointmentBreakBulk;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.AppointmentBreakBulkServiceDTO;
import com.spia.businessportal.common.entities.dto.DraftServiceDTO;
import com.spia.businessportal.common.entities.dto.HBLPinDTO;
import com.spia.businessportal.common.entities.dto.HBLServiceDTO;
import com.spia.businessportal.common.entities.dto.HistoryServiceDTO;
import com.spia.businessportal.common.entities.dto.PinBreakBulkServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.QuotaServiceBbkDTO;
import com.spia.businessportal.common.entities.dto.TruckCapacityServiceDTO;
import com.spia.businessportal.common.entities.dto.WeightServiceDTO;
import com.spia.businessportal.common.filters.TruckVisitAppointmentBreakBulkFilter;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.service.BreakBulkService;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.services.entities.Truck;
import org.hibernate.SessionFactory;

import ar.com.fluxit.framework.business.generic.GenericService;
import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;
import com.spia.businessportal.common.entities.dto.AppointmentBreakBulkServiceCSDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email: efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite realizar operaciones con
 * Booking .
 * 
 */

public class BreakBulkServiceImpl implements BreakBulkService {

    private static final Log LOG = LogFactory.getLog(BreakBulkServiceImpl.class);

    @Autowired
    private QuerysBO querysBO;
    @Autowired
    private UserBO userBO;
    @Autowired
    private GenericService<TruckVisitAppointmentBreakBulk> truckVisitAppointmentBreakBulkBO;
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public HBLPinDTO getCargoLot(String hbl) throws Exception {

        QuerysDTO request = new QuerysDTO();
        String hblresponse = EncoderDecoder.decodeBase64(hbl);
        ValoresPorDefectoDummy vpdd = null;
        ValoresADummy vpad = null;
        ValoresBDummy vpbd = null;
        HBLPinDTO eros = null;
        ValoresPorDefectoPermisoDummy vpddd = null;
        String select = hblresponse.substring(0, 1);
        if (hblresponse.equals("HBL06062019-1")) {
            vpdd = new ValoresPorDefectoDummy();
            eros = vpdd.LlenarValoresPorDefectoDummy();
        } else if (select.equals("A") || select.equals("a")) {
            eros = vpad.LlenarValoresADummy();
        } else if (select.equals("B") || select.equals("b")) {
            eros = vpbd.LlenarValoresBDummy();
        } else {
            vpddd = new ValoresPorDefectoPermisoDummy();
            eros = vpddd.LlenarValoresPorDefectoDummy();
        }

        return eros;
    }

    @Override
    public Truck getTruck(String plate) throws Exception {

        QuerysDTO request = new QuerysDTO();
        Truck truck = new Truck();
        truck.setTruckSafeWeight(11.00);
        return truck;
    }

    @Override
    public TruckCapacityServiceDTO[] getTruckCapacity(String truck) throws Exception {

        QuerysDTO request = new QuerysDTO();
        TruckCapacityServiceDTO[] capacity = null;
        String type = "String";

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO truckParameterDTO = new QuerysParameterDTO();

        truckParameterDTO.setValue(truck.toUpperCase());
        truckParameterDTO.setType(type);
        truckParameterDTO.setParameterId(1);

        parameters.add(truckParameterDTO);
        request.setParameters(parameters);
        request.setQueryName("truckCapacity");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        capacity = gson.fromJson(jsonInString, TruckCapacityServiceDTO[].class);

        if (capacity[0].getVehcapacidad() != null) {
            String capacityInt = capacity[0].getVehcapacidad().replaceAll(",", ".");
            capacityInt = capacityInt.replaceAll("[^0-9.]", "");
            capacity[0].setVehcapacidad(capacityInt);
        }

        return capacity;
    }

    @Override
    public PinBreakBulkServiceDTO[] getPinBreakBulk(String pin) throws Exception {
        UsuarioLoginDTO userlogin = userBO.getCurrentUser();
        QuerysDTO request = new QuerysDTO();
        PinBreakBulkServiceDTO[] pinBreakBulkServiceDTO = null;
        String type = "String";

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO pinParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO nitCompanyParameterDTO = new QuerysParameterDTO();

        pinParameterDTO.setValue(pin);
        pinParameterDTO.setType(type);
        pinParameterDTO.setParameterId(1);

        nitCompanyParameterDTO.setValue(userlogin.getEmpresa().getId());
        nitCompanyParameterDTO.setType(type);
        nitCompanyParameterDTO.setParameterId(2);

        parameters.add(pinParameterDTO);
        parameters.add(nitCompanyParameterDTO);
        request.setParameters(parameters);
        request.setQueryName("pinBreakBulk");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        pinBreakBulkServiceDTO = gson.fromJson(jsonInString, PinBreakBulkServiceDTO[].class);

        return pinBreakBulkServiceDTO;
    }

    @Override
    public HBLServiceDTO[] searchCargoLots(String hbl, String agente, String destination, int isGroup, String type)
            throws Exception {

        QuerysDTO request = new QuerysDTO();
        UsuarioLoginDTO userlogin = userBO.getCurrentUser();
        HBLServiceDTO[] cargoLots;

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO hblParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO agentParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO destinationParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO transitStateParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO typeParameterDTO = new QuerysParameterDTO();

        hblParameterDTO.setValue(hbl);
        hblParameterDTO.setType("String");
        hblParameterDTO.setParameterId(1);

        agentParameterDTO.setValue(agente);
        agentParameterDTO.setType("String");
        agentParameterDTO.setParameterId(2);

        if (isGroup == 0) {
            if (destination == null) {
                destinationParameterDTO.setValue("SIN DESTINO");
                destinationParameterDTO.setType("String");
                destinationParameterDTO.setParameterId(3);
            } else {
                destinationParameterDTO.setValue(destination);
                destinationParameterDTO.setType("String");
                transitStateParameterDTO.setParameterId(3);
            }
        } else {
            destinationParameterDTO.setValue("");
            destinationParameterDTO.setType("String");
            destinationParameterDTO.setParameterId(3);
        }

        transitStateParameterDTO.setValue("S40_YARD");
        transitStateParameterDTO.setType("String");
        transitStateParameterDTO.setParameterId(4);
        
        typeParameterDTO.setValue(type);
        typeParameterDTO.setType("String");
        typeParameterDTO.setParameterId(5);

        parameters.add(hblParameterDTO);
        parameters.add(agentParameterDTO);
        parameters.add(destinationParameterDTO);
        parameters.add(transitStateParameterDTO);
        parameters.add(typeParameterDTO);

        request.setParameters(parameters);
        request.setQueryName("executeCargoLotByHblSP");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        cargoLots = gson.fromJson(jsonInString, HBLServiceDTO[].class);

        return cargoLots;
    }

    @Override
    public AppointmentBreakBulkServiceDTO[] searchAppointment(String tvaNbr) throws Exception {

        QuerysDTO request = new QuerysDTO();
        UsuarioLoginDTO userlogin = userBO.getCurrentUser();
        AppointmentBreakBulkServiceDTO[] cargoLots;

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO tvaParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO tvaBbkParameterDTO = new QuerysParameterDTO();

        tvaParameterDTO.setValue(tvaNbr);
        tvaParameterDTO.setType("String");
        tvaParameterDTO.setParameterId(1);
//
//        tvaBbkParameterDTO.setValue(tvaNbr);
//        tvaBbkParameterDTO.setType("String");
//        tvaBbkParameterDTO.setParameterId(2);

        parameters.add(tvaParameterDTO);
    //    parameters.add(tvaBbkParameterDTO);

        request.setParameters(parameters);
        request.setQueryName("searchAppointmentBBK");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        cargoLots = gson.fromJson(jsonInString, AppointmentBreakBulkServiceDTO[].class);

        return cargoLots;
    }

    @Override
    public QuotaServiceBbkDTO[] getHoursValidateBBK(Date date, String truck) throws Exception {

        QuerysDTO request = new QuerysDTO();
        UsuarioLoginDTO userlogin = userBO.getCurrentUser();
        QuotaServiceBbkDTO[] quotas;

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO dateParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO truckParameterDTO = new QuerysParameterDTO();

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String sendStartDate = sdf.format(date);

        dateParameterDTO.setValue(sendStartDate);
        dateParameterDTO.setType("String");
        dateParameterDTO.setParameterId(1);
        
        truckParameterDTO.setValue(truck);
        truckParameterDTO.setType("String");
        truckParameterDTO.setParameterId(2);

        parameters.add(dateParameterDTO);
        parameters.add(truckParameterDTO);
        request.setParameters(parameters);
        request.setQueryName("hoursValidateBBK");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        quotas = gson.fromJson(jsonInString, QuotaServiceBbkDTO[].class);

        return quotas;
    }

    @Override
    public WeightServiceDTO[] getWeightControl(String truck, Date tvadate) throws Exception {

        QuerysDTO request = new QuerysDTO();
        UsuarioLoginDTO userlogin = userBO.getCurrentUser();
        WeightServiceDTO[] validate;

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO companyParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO dateParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO truckParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO truckParameterrDTO = new QuerysParameterDTO();

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String sendStartDate = sdf.format(tvadate);

        companyParameterDTO.setValue(userlogin.getEmpresa().getId());
        companyParameterDTO.setType("String");
        companyParameterDTO.setParameterId(1);

        truckParameterDTO.setValue(truck);
        truckParameterDTO.setType("String");
        truckParameterDTO.setParameterId(2);
        
        truckParameterrDTO.setValue(truck);
        truckParameterrDTO.setType("String");
        truckParameterrDTO.setParameterId(3);

        dateParameterDTO.setValue(sendStartDate);
        dateParameterDTO.setType("String");
        dateParameterDTO.setParameterId(4);


        parameters.add(companyParameterDTO);
        parameters.add(truckParameterDTO);
        parameters.add(truckParameterrDTO);
        parameters.add(dateParameterDTO);

        request.setParameters(parameters);
        request.setQueryName("weightControl");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        validate = gson.fromJson(jsonInString, WeightServiceDTO[].class);

        return validate;
    }

    @Override
    public HistoryServiceDTO[] getTvaBbk(String user, String tvaNbr) throws Exception {

        QuerysDTO request = new QuerysDTO();
        HistoryServiceDTO[] history = null;
        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO userParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO tvaParameterDTO = new QuerysParameterDTO();

        userParameterDTO.setValue(user);
        userParameterDTO.setType("String");
        userParameterDTO.setParameterId(1);

        tvaParameterDTO.setValue(tvaNbr);
        tvaParameterDTO.setType("String");
        tvaParameterDTO.setParameterId(2);

        request.setQueryName("tvaBreakBulk");
        parameters.add(userParameterDTO);
        parameters.add(tvaParameterDTO);
        request.setParameters(parameters);

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        history = gson.fromJson(jsonInString, HistoryServiceDTO[].class);

        return history;
    }
    
    @Override
    public void processExpire() {
        Session session = sessionFactory.openSession();
        List<TruckVisitAppointmentBreakBulk> truckVisitAppointmentBreakBulkList = null;
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.MONTH, -1);
        Date monthAgo = cal.getTime();
        try {
        	QuerysDTO request = new QuerysDTO();
            HistoryServiceDTO[] history = null;
            List<QuerysParameterDTO> parameters = new ArrayList<>();

            request.setQueryName("tvaBreakBulkExpire");
            request.setParameters(parameters);

            GsonBuilder builder = new GsonBuilder();
            builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
            builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
            Gson gson = builder.create();
            QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

            String jsonInString = gson.toJson(querysResponseDTO.getResult());
            history = gson.fromJson(jsonInString, HistoryServiceDTO[].class);
            
        	/*TruckVisitAppointmentBreakBulkFilter truckVisitAppointmentBreakBulkFilter = new TruckVisitAppointmentBreakBulkFilter();
            truckVisitAppointmentBreakBulkFilter.setState("EXPIRED");
            truckVisitAppointmentBreakBulkFilter.set
            List<TruckVisitAppointmentBreakBulk> tvaList = this.getTruckVisitAppointmentBreakBulkBO()
                    .search(truckVisitAppointmentBreakBulkFilter, new Page(1, 0)).getResult();
            for (TruckVisitAppointmentBreakBulk tva : tvaList) {
                TruckVisitAppointmentBreakBulk newTva = new TruckVisitAppointmentBreakBulk();
                newTva = tva;
                newTva.setState("Canceled");
                this.getTruckVisitAppointmentBreakBulkBO().saveOrUpdate(newTva);
            }
        	*/
        	
        	
        	
        	
        	
            String queryString = "FROM TruckVisitAppointmentBreakBulk ";
            String where = "WHERE active = true AND created_at < :monthAgo";
            queryString = queryString + where;
            Query query = session.createQuery(queryString);
            query.setDate("monthAgo", monthAgo);
            truckVisitAppointmentBreakBulkList = query.list();
        } catch (Exception e) {
            LOG.error("Se produjo un error al recuperar los pines", e);
        } finally {
            session.close();
        }
        for (TruckVisitAppointmentBreakBulk truckVisitAppointmentBreakBulk : truckVisitAppointmentBreakBulkList) {
            try {
            	truckVisitAppointmentBreakBulk.setTruckVisitAppointmentNbr(null);
                this.getTruckVisitAppointmentBreakBulkBO().saveOrUpdate(truckVisitAppointmentBreakBulk);
            } catch (BusinessException e) {
                LOG.error("Se produjo un error al actualizar los pines con m?s de un mes de creaci?n", e);
            }
        }
    }
    
    public GenericService<TruckVisitAppointmentBreakBulk> getTruckVisitAppointmentBreakBulkBO() {
        return truckVisitAppointmentBreakBulkBO;
    }

    public void setPinBO(GenericService<TruckVisitAppointmentBreakBulk> truckVisitAppointmentBreakBulkBO) {
        this.truckVisitAppointmentBreakBulkBO = truckVisitAppointmentBreakBulkBO;
    }
    
    @Override
    public DraftServiceDTO[] getDraftByHbl(String hbl) throws Exception {

        QuerysDTO request = new QuerysDTO();
        DraftServiceDTO[] draftList = null;
        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO hblParameterDTO = new QuerysParameterDTO();

        hblParameterDTO.setValue(hbl);
        hblParameterDTO.setType("String");
        hblParameterDTO.setParameterId(1);

        request.setQueryName("getDraftByHbl");
        parameters.add(hblParameterDTO);
        request.setParameters(parameters);

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        draftList = gson.fromJson(jsonInString, DraftServiceDTO[].class);

        return draftList;
    }

    @Override
    public AppointmentBreakBulkServiceCSDTO[] searchAppointmentCS(String tvaNbr) throws Exception {

        QuerysDTO request = new QuerysDTO();
        UsuarioLoginDTO userlogin = userBO.getCurrentUser();
        AppointmentBreakBulkServiceCSDTO[] cargoLots;

        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO tvaParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO tvaBbkParameterDTO = new QuerysParameterDTO();

        tvaParameterDTO.setValue(tvaNbr);
        tvaParameterDTO.setType("String");
        tvaParameterDTO.setParameterId(1);
//
//        tvaBbkParameterDTO.setValue(tvaNbr);
//        tvaBbkParameterDTO.setType("String");
//        tvaBbkParameterDTO.setParameterId(2);

        parameters.add(tvaParameterDTO);
    //    parameters.add(tvaBbkParameterDTO);

        request.setParameters(parameters);
        request.setQueryName("searchAppointmentPortalBBK");

        GsonBuilder builder = new GsonBuilder();
        builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
        builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Gson gson = builder.create();
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

        String jsonInString = gson.toJson(querysResponseDTO.getResult());
        cargoLots = gson.fromJson(jsonInString, AppointmentBreakBulkServiceCSDTO[].class);

        return cargoLots;
    }

}
