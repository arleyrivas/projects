package com.spia.businessportal.service.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.CachedServiceOrders;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.AuthorityTypeConsultDTO;
import com.spia.businessportal.common.entities.dto.AuthorityTypeInfoDTO;
import com.spia.businessportal.common.entities.dto.AuthorityTypesDTO;
import com.spia.businessportal.common.entities.dto.BlChildrensByBlMasterDTO;
import com.spia.businessportal.common.entities.dto.ContainersByBlDTO;
import com.spia.businessportal.common.entities.dto.EventTypeDTO;
import com.spia.businessportal.common.entities.dto.InspectionTypeDTO;
import com.spia.businessportal.common.entities.dto.PackageTypeDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderHistoryConsultDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderHistoryResponseDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderImoDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderInfoDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderSearchDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrderStaffDTO;
import com.spia.businessportal.common.entities.dto.ServiceOrdersHistoryDTO;
import com.spia.businessportal.common.entities.dto.ServiceTypeDTO;
import com.spia.businessportal.service.ServicesService;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 12/10/2018 Servicio que permite
 * realizar operaciones con Booking .
 * 
 */

public class ServicesServiceImpl implements ServicesService {

	private static final Log LOG = LogFactory.getLog(ServicesServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;
	@Autowired
	private UserBO userBO;

	@Override
	public ContainersByBlDTO[] getBlMaster(String bl) throws Exception {

		QuerysDTO request = new QuerysDTO();
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();
		ContainersByBlDTO[] response = null;
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO blParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO agentParameterDTO = new QuerysParameterDTO();

		blParameterDTO.setValue(bl);
		blParameterDTO.setType(type);
		blParameterDTO.setParameterId(1);

		agentParameterDTO.setValue(userlogin.getEmpresa().getId());
		agentParameterDTO.setType(type);
		agentParameterDTO.setParameterId(2);

		parameters.add(blParameterDTO);
		parameters.add(agentParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("getContainersByBl");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, ContainersByBlDTO[].class);

		return response;
	}

	@Override
	public BlChildrensByBlMasterDTO[] getBlChildrenByBlMaster(String bl) throws Exception {

		QuerysDTO request = new QuerysDTO();
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();
		BlChildrensByBlMasterDTO[] response = null;
		String type = "String";

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO blParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO agentParameterDTO = new QuerysParameterDTO();

		blParameterDTO.setValue(bl);
		blParameterDTO.setType(type);
		blParameterDTO.setParameterId(1);

		agentParameterDTO.setValue(userlogin.getEmpresa().getId());
		agentParameterDTO.setType(type);
		agentParameterDTO.setParameterId(2);

		parameters.add(blParameterDTO);
		parameters.add(agentParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("getBlChildrenByBlMaster");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, BlChildrensByBlMasterDTO[].class);

		return response;
	}

	@Override
	public PackageTypeDTO[] getPackageTypes() throws Exception {

		QuerysDTO request = new QuerysDTO();
		PackageTypeDTO[] response = null;

		List<QuerysParameterDTO> parameters = new ArrayList<>();

		request.setParameters(parameters);
		request.setQueryName("getPackageTypes");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, PackageTypeDTO[].class);

		return response;
	}

	@Override
	public ServiceTypeDTO[] getServiceTypeList() throws Exception {

		QuerysDTO request = new QuerysDTO();
		ServiceTypeDTO[] response = null;

		List<QuerysParameterDTO> parameters = new ArrayList<>();

		request.setParameters(parameters);
		request.setQueryName("getServiceTypeList");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, ServiceTypeDTO[].class);

		return response;
	}

	@Override
	public ServiceOrderInfoDTO[] getInfoForServiceOrder(String search, String service) throws Exception {

		QuerysDTO request = new QuerysDTO();
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();
		ServiceOrderInfoDTO[] response = null;

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO searchParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO agencyParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO serviceParameterDTO = new QuerysParameterDTO();

		serviceParameterDTO.setValue(service);
		serviceParameterDTO.setType("String");
		serviceParameterDTO.setParameterId(1);

		searchParameterDTO.setValue(search);
		searchParameterDTO.setType("String");
		searchParameterDTO.setParameterId(2);

		agencyParameterDTO.setValue(userlogin.getEmpresa().getId());
		agencyParameterDTO.setType("String");
		agencyParameterDTO.setParameterId(3);

		parameters.add(serviceParameterDTO);
		parameters.add(searchParameterDTO);
		parameters.add(agencyParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("getInfoForServiceOrder");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, ServiceOrderInfoDTO[].class);

		return response;
	}

	@Override
	public AuthorityTypesDTO getServiceInfo(String service, String cargoType) throws Exception {

		QuerysDTO request = new QuerysDTO();
		AuthorityTypeConsultDTO[] response = null;

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO serviceParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO cargoParameterDTO = new QuerysParameterDTO();

		serviceParameterDTO.setValue(service);
		serviceParameterDTO.setType("String");
		serviceParameterDTO.setParameterId(1);

		cargoParameterDTO.setValue(cargoType);
		cargoParameterDTO.setType("String");
		cargoParameterDTO.setParameterId(2);

		parameters.add(serviceParameterDTO);
		parameters.add(cargoParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("getServiceInfo");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, AuthorityTypeConsultDTO[].class);

		AuthorityTypesDTO authorityTypesDTO = new AuthorityTypesDTO();
		List<AuthorityTypeInfoDTO> authorityTypes = new ArrayList<AuthorityTypeInfoDTO>();

		if (response != null && response.length > 0) {
			AuthorityTypeInfoDTO authorityTypeInfoDTO = null;
			List<InspectionTypeDTO> inspectionTypes = new ArrayList<InspectionTypeDTO>();
			InspectionTypeDTO inspectionType = new InspectionTypeDTO();
			EventTypeDTO eventType = new EventTypeDTO();
			List<EventTypeDTO> eventsType = new ArrayList<EventTypeDTO>();
			Boolean addedInspect = false;
			for (AuthorityTypeConsultDTO auth : response) {
				if (authorityTypeInfoDTO == null) {
					authorityTypeInfoDTO = new AuthorityTypeInfoDTO();
					authorityTypeInfoDTO.setAuthority_type(auth.getAuthority_type());
					authorityTypeInfoDTO.setMax_staff(auth.getMax_staff());
					authorityTypeInfoDTO.setMin_staff(auth.getMin_staff());
					authorityTypeInfoDTO.setRequires_documentation(auth.getRequires_documentation());

					eventType.setEvent_type(auth.getEvent_type());
					eventType.setRequires_crew(auth.getRequires_crew());
					eventsType.add(eventType);

					inspectionType.setInspection_type(auth.getInspection_type());
				} else {
					if (authorityTypeInfoDTO.getAuthority_type().equalsIgnoreCase(auth.getAuthority_type())) {
						if (auth.getInspection_type().equalsIgnoreCase(inspectionType.getInspection_type())) {
							eventType = new EventTypeDTO();
							eventType.setEvent_type(auth.getEvent_type());
							eventType.setRequires_crew(auth.getRequires_crew());
							eventsType.add(eventType);
						} else {
							inspectionType.setEvent_types(eventsType);
							inspectionTypes.add(inspectionType);
							addedInspect = true;

							eventsType = new ArrayList<EventTypeDTO>();
							inspectionType = new InspectionTypeDTO();
							eventType = new EventTypeDTO();
							inspectionType.setInspection_type(auth.getInspection_type());
							eventType.setEvent_type(auth.getEvent_type());
							eventType.setRequires_crew(auth.getRequires_crew());
							eventsType.add(eventType);

						}
					} else {
						inspectionType.setEvent_types(eventsType);
						inspectionTypes.add(inspectionType);

						eventsType = new ArrayList<EventTypeDTO>();

						inspectionType = new InspectionTypeDTO();
						inspectionType.setInspection_type(auth.getInspection_type());

						authorityTypeInfoDTO.setInspection_type(inspectionTypes);
						authorityTypes.add(authorityTypeInfoDTO);

						inspectionTypes = new ArrayList<InspectionTypeDTO>();
						eventsType = new ArrayList<EventTypeDTO>();
						eventType = new EventTypeDTO();
						authorityTypeInfoDTO = new AuthorityTypeInfoDTO();

						authorityTypeInfoDTO.setAuthority_type(auth.getAuthority_type());
						authorityTypeInfoDTO.setMax_staff(auth.getMax_staff());
						authorityTypeInfoDTO.setMin_staff(auth.getMin_staff());
						authorityTypeInfoDTO.setRequires_documentation(auth.getRequires_documentation());

						inspectionType = new InspectionTypeDTO();
						eventType.setEvent_type(auth.getEvent_type());
						eventType.setRequires_crew(auth.getRequires_crew());
						eventsType.add(eventType);
						inspectionType.setInspection_type(auth.getInspection_type());
					}
				}
			}
			inspectionType.setEvent_types(eventsType);
			inspectionTypes.add(inspectionType);
			authorityTypeInfoDTO.setInspection_type(inspectionTypes);
			authorityTypes.add(authorityTypeInfoDTO);
			authorityTypesDTO.setAuthorityTypes(authorityTypes);
		}

		return authorityTypesDTO;
	}

	@Override
	public ServiceOrderStaffDTO[] getStaff(String id) throws Exception {

		QuerysDTO request = new QuerysDTO();
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();

		ServiceOrderStaffDTO[] response = null;

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO allowParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO agencyParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO idParameterDTO = new QuerysParameterDTO();

		allowParameterDTO.setValue(userlogin.getEmpresa().isAllowStaffAnotherAgency() ? "true" : "false");
		allowParameterDTO.setType("String");
		allowParameterDTO.setParameterId(1);

		idParameterDTO.setValue(id);
		idParameterDTO.setType("String");
		idParameterDTO.setParameterId(2);

		agencyParameterDTO.setValue(userlogin.getEmpresa().getId());
		agencyParameterDTO.setType("String");
		agencyParameterDTO.setParameterId(3);

		LOG.info("new Gson().toJson(allowParameterDTO)");
		LOG.info(new Gson().toJson(allowParameterDTO));

		LOG.info("new Gson().toJson(idParameterDTO)");
		LOG.info(new Gson().toJson(idParameterDTO));

			LOG.info("new Gson().toJson(agencyParameterDTO)");
		LOG.info(new Gson().toJson(agencyParameterDTO));

		parameters.add(allowParameterDTO);
		parameters.add(idParameterDTO);
		parameters.add(agencyParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("getStaffInfo");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, ServiceOrderStaffDTO[].class);

		return response;
	}
	
	@Override
	public ServiceOrdersHistoryDTO getServiceOrderHistory(ServiceOrderSearchDTO serviceOrderSearch, Integer page, Integer ammount) throws Exception {

		QuerysDTO request = new QuerysDTO();
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();
		
		String dateFrom = "";
		String dateTo = "";

		if(serviceOrderSearch.getDateFrom() != null) {
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			dateFrom = dateFormat.format(serviceOrderSearch.getDateFrom());
		}
		
		if(serviceOrderSearch.getDateTo() != null) {
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			dateTo = dateFormat.format(serviceOrderSearch.getDateTo());
		}
		
		ServiceOrderHistoryConsultDTO[] queryResponse = null;

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO agentTypeParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO serviceTypeParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO searchParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO containerParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO stateParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO fromParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO toParameterDTO = new QuerysParameterDTO();

		agentTypeParameterDTO.setValue(userlogin.getEmpresa().getId());
		agentTypeParameterDTO.setType("String");
		agentTypeParameterDTO.setParameterId(1);
		
		serviceTypeParameterDTO.setValue(serviceOrderSearch.getService());
		serviceTypeParameterDTO.setType("String");
		serviceTypeParameterDTO.setParameterId(2);

		searchParameterDTO.setValue(serviceOrderSearch.getBlhblbook());
		searchParameterDTO.setType("String");
		searchParameterDTO.setParameterId(3);

		containerParameterDTO.setValue(serviceOrderSearch.getContainer());
		containerParameterDTO.setType("String");
		containerParameterDTO.setParameterId(4);
		
		stateParameterDTO.setValue(serviceOrderSearch.getState());
		stateParameterDTO.setType("String");
		stateParameterDTO.setParameterId(5);

		fromParameterDTO.setValue(dateFrom);
		fromParameterDTO.setType("String");
		fromParameterDTO.setParameterId(6);
		
		toParameterDTO.setValue(dateTo);
		toParameterDTO.setType("String");
		toParameterDTO.setParameterId(7);

		parameters.add(agentTypeParameterDTO);
		parameters.add(serviceTypeParameterDTO);
		parameters.add(searchParameterDTO);
		parameters.add(containerParameterDTO);
		parameters.add(stateParameterDTO);
		parameters.add(fromParameterDTO);
		parameters.add(toParameterDTO);
		
		request.setParameters(parameters);
		request.setQueryName("getServiceOrderHistory");

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		queryResponse = gson.fromJson(jsonInString, ServiceOrderHistoryConsultDTO[].class);
		
		ServiceOrdersHistoryDTO response = new ServiceOrdersHistoryDTO();
		
		ServiceOrderHistoryResponseDTO soHistory = null;
		List<ServiceOrderHistoryResponseDTO> soFinal = new ArrayList<ServiceOrderHistoryResponseDTO>();
		
		if(queryResponse != null && queryResponse.length > 0) {
			ServiceOrderHistoryConsultDTO soConsult = new ServiceOrderHistoryConsultDTO();
			List<ServiceOrderHistoryConsultDTO> soConsultList = new ArrayList<ServiceOrderHistoryConsultDTO>();
			for (ServiceOrderHistoryConsultDTO so : queryResponse) {
				if (soHistory == null) {
					soHistory = new ServiceOrderHistoryResponseDTO();
					
					soHistory.setBl_hbl_booking(so.getBl_hbl_booking());
					soHistory.setId_cliente(so.getId_cliente());
					soHistory.setNombre_cliente(so.getNombre_cliente());

					soConsult.setContenedor_hbl(so.getContenedor_hbl());
					soConsult.setF_solicitud(so.getF_solicitud());
					soConsult.setTipo(so.getTipo());
					soConsult.setF_servicio(so.getF_servicio());
					soConsult.setLugar(so.getLugar());
					soConsult.setEstado(so.getEstado());
					
					soConsultList.add(soConsult);
				} else {
					if (soHistory.getBl_hbl_booking().equalsIgnoreCase(so.getBl_hbl_booking())) {
							
						soConsult = new ServiceOrderHistoryConsultDTO();
						soConsult.setContenedor_hbl(so.getContenedor_hbl());
						soConsult.setF_solicitud(so.getF_solicitud());
						soConsult.setTipo(so.getTipo());
						soConsult.setF_servicio(so.getF_servicio());
						soConsult.setLugar(so.getLugar());
						soConsult.setEstado(so.getEstado());
						
						soConsultList.add(soConsult);
						
					} else {
						
						soHistory.setServiceOrderInfo(soConsultList);
						soFinal.add(soHistory);
						
						soHistory = new ServiceOrderHistoryResponseDTO();
						
						soHistory.setBl_hbl_booking(so.getBl_hbl_booking());
						soHistory.setId_cliente(so.getId_cliente());
						soHistory.setNombre_cliente(so.getNombre_cliente());
						
						soConsult = new ServiceOrderHistoryConsultDTO();
						soConsult.setContenedor_hbl(so.getContenedor_hbl());
						soConsult.setF_solicitud(so.getF_solicitud());
						soConsult.setTipo(so.getTipo());
						soConsult.setF_servicio(so.getF_servicio());
						soConsult.setLugar(so.getLugar());
						soConsult.setEstado(so.getEstado());
						
						soConsultList = new ArrayList<ServiceOrderHistoryConsultDTO>();
						
						soConsultList.add(soConsult);
					
					}
				}
			}
			soHistory.setServiceOrderInfo(soConsultList);
			soFinal.add(soHistory);
			
			CachedServiceOrders.setServiceOrders(soFinal);
			
			response.setServiceOrders(CachedServiceOrders.getSubList(page, ammount));
		}
		
		return response;
	}
	
	@Override
	public ServiceOrdersHistoryDTO getServiceOrderHistoryScroll(Integer page, Integer ammount) throws Exception {

		ServiceOrdersHistoryDTO response = new ServiceOrdersHistoryDTO();
			
		response.setServiceOrders(CachedServiceOrders.getSubList(page, ammount));
		
		return response;
	}
	
	@Override
	public ServiceOrderImoDTO[] getImo(String un) throws Exception {

		QuerysDTO request = new QuerysDTO();
		ServiceOrderImoDTO[] response = null;
		List<QuerysParameterDTO> parameters = new ArrayList<>();	
		QuerysParameterDTO unParameterDTO = new QuerysParameterDTO();
	
		unParameterDTO.setValue(un);
		unParameterDTO.setType("String");
		unParameterDTO.setParameterId(1);	

		request.setParameters(parameters);
		request.setQueryName("getUnImo");
		
		parameters.add(unParameterDTO);

		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		response = gson.fromJson(jsonInString, ServiceOrderImoDTO[].class);

		return response;
	}

}
