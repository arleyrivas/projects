package com.spia.businessportal.service;

import com.spia.businessportal.common.entities.dto.AuthorityTypesDTO;
import com.spia.businessportal.common.entities.dto.BlChildrensByBlMasterDTO;
import com.spia.businessportal.common.entities.dto.ContainersByBlDTO;
import com.spia.businessportal.common.entities.dto.PackageTypeDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderHistoryResponseDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderImoDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderInfoDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderSearchDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderStaffDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrdersHistoryDTO;
import com.spia.businessportal.common.entities.dto.ServiceTypeDTO;

/**
 * Author: Elvis Fontalvo - 
 * Assert Solutions 
 * Email:efontalvo@aassertsolutions.com 
 * Fecha: 07/05/2020 
 */
public interface ServicesService {

	public ContainersByBlDTO[] getBlMaster(String bl) throws Exception;

	public BlChildrensByBlMasterDTO[] getBlChildrenByBlMaster(String bl) throws Exception;

	public PackageTypeDTO[] getPackageTypes() throws Exception;

	public ServiceTypeDTO[] getServiceTypeList() throws Exception;

	public ServiceOrderInfoDTO[] getInfoForServiceOrder(String search, String service) throws Exception;

	public AuthorityTypesDTO getServiceInfo(String service, String cargoType) throws Exception;

	public ServiceOrderStaffDTO[] getStaff(String id) throws Exception;

	public ServiceOrdersHistoryDTO getServiceOrderHistory(ServiceOrderSearchDTO serviceOrderSearch, Integer page,
			Integer ammount) throws Exception;

	public ServiceOrdersHistoryDTO getServiceOrderHistoryScroll(Integer page, Integer ammount) throws Exception;

	public ServiceOrderImoDTO[] getImo(String un) throws Exception;

}
