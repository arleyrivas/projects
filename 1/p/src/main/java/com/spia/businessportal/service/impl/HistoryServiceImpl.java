package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.HistoryServiceDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.service.HistoryService;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.businessportal.common.entities.dto.HistoryAppointmentsCriteria;

public class HistoryServiceImpl implements HistoryService {
    @Autowired
    private QuerysBO querysBO;
    @Autowired
    private UserBO userBO;

    private static final Log LOG = LogFactory.getLog(HistoryServiceImpl.class);

    @Override
    public List<HistoryServiceDTO> getHistory(HistoryAppointmentsCriteria criteria, int page) throws Exception {

        QuerysDTO request = new QuerysDTO();
        UsuarioLoginDTO userlogin = userBO.getCurrentUser();
        List<HistoryServiceDTO> history = null;
        List<QuerysParameterDTO> parameters = new ArrayList<>();
        QuerysParameterDTO querysParameterDTO = new QuerysParameterDTO();
        QuerysParameterDTO userDTO = new QuerysParameterDTO();
        Integer offset = 0;
        if (page == 1) {
            offset = 0;
        } else {
            for (int factor = 1; factor < page; factor++) {
                offset = offset + 20;
            }
            offset = offset + 1;
        }
        QuerysParameterDTO frhgtKindDTO = new QuerysParameterDTO();
        if (criteria.getFrghtKind() != null && !criteria.getFrghtKind().isEmpty()) {
            frhgtKindDTO.setValue(criteria.getFrghtKind());
            frhgtKindDTO.setType("String");
            frhgtKindDTO.setParameterId(1); 
        }else{
            frhgtKindDTO.setValue("");
            frhgtKindDTO.setType("String");
            frhgtKindDTO.setParameterId(1);
        }
        
        

        userDTO.setValue(userlogin.getEmpresa().getId());
        userDTO.setType("String");
        userDTO.setParameterId(2);
        
        QuerysParameterDTO fromDateDTO = new QuerysParameterDTO();
        fromDateDTO.setValue(criteria.getFromDate().toString());
        fromDateDTO.setType("String");
        fromDateDTO.setParameterId(3);

        QuerysParameterDTO toDateDTO  = new QuerysParameterDTO();
        toDateDTO.setValue(criteria.getToDate().toString());
        toDateDTO.setType("String");
        toDateDTO.setParameterId(4);

        QuerysParameterDTO offsetDTO = new QuerysParameterDTO();
        offsetDTO.setValue(offset.toString());
        offsetDTO.setType("Integer");
        offsetDTO.setParameterId(5);

        QuerysParameterDTO appointmentNbrDTO = new QuerysParameterDTO();
        if (criteria.getAppointmentNbr() != null && !criteria.getAppointmentNbr().isEmpty()) {
            appointmentNbrDTO.setValue(criteria.getAppointmentNbr());
            appointmentNbrDTO.setType("Integer");
            appointmentNbrDTO.setParameterId(6);
        } else{
            appointmentNbrDTO.setValue("-1");
            appointmentNbrDTO.setType("Integer");
            appointmentNbrDTO.setParameterId(6);
        }

        QuerysParameterDTO plateDTO = new QuerysParameterDTO();
        if(criteria.getPlate() != null && !criteria.getPlate().isEmpty()){
            plateDTO.setValue(criteria.getPlate());
            plateDTO.setType("String");
            plateDTO.setParameterId(7);
        } else{
            plateDTO.setValue("");
            plateDTO.setType("String");
            plateDTO.setParameterId(7);
        }

       

        request.setQueryName("getTruckVisitAppointments");
        parameters.add(frhgtKindDTO);
        parameters.add(userDTO);
        parameters.add(fromDateDTO);
        parameters.add(toDateDTO);
        parameters.add(offsetDTO);
        parameters.add(appointmentNbrDTO);
        parameters.add(plateDTO);
        request.setParameters(parameters);
        QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
        history = (List<HistoryServiceDTO>) querysResponseDTO.getResult();
        return history;
    }

}
