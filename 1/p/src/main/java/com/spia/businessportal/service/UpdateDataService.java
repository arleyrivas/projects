package com.spia.businessportal.service;

import java.util.List;
import java.util.Date;

import com.spia.businessportal.common.entities.dto.AssociatedClientDTO;
import com.spia.businessportal.common.entities.dto.InfoCompanyAndContactsDTO;
import com.spia.businessportal.common.entities.dto.InfoGeographyDTO;
import com.spia.businessportal.common.entities.dto.CountryDTO;
import com.spia.businessportal.common.entities.dto.UDRequestDTO;
import com.spia.businessportal.common.entities.dto.HistoryUDSacReqDTO;


public interface UpdateDataService {
	
	public List<AssociatedClientDTO> getAssociatedClientsByIdOrName(String nitUserlogin, String idOrName) throws Exception;
    public InfoCompanyAndContactsDTO getCustomerData(String nit) throws Exception;
    public List<InfoGeographyDTO> getListInfoGeographyByCity(String city) throws Exception;
    public List<CountryDTO> getListCountryByletterInitial(String letterInitial) throws Exception;
    public UDRequestDTO searchIdCustomerRequest(String nit) throws Exception;
    public List<HistoryUDSacReqDTO> getHistoryRequest (Integer page) throws Exception;
    public List<HistoryUDSacReqDTO> getHistoryRequestByDates (String dateFrom, String dateTo) throws Exception;

}
