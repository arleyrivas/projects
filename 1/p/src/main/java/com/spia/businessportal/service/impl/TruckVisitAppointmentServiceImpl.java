package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;


import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.dto.CausalCancellationAppointment;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;
import com.spia.businessportal.common.entities.dto.ResponseTvaService;
import com.spia.businessportal.common.entities.dto.TruckVisitAppointmentServiceDTO;
import com.spia.businessportal.constant.DateFormatConstant;
import com.spia.businessportal.service.TruckVisitAppointmentService;
import com.spia.services.entities.TruckVisitAppointment;
import com.spia.services.entities.TruckVisitAppointmentRequest;
import com.spia.services.entities.UpdateTruckVisitRequest;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 25/10/2018 Implementacion del Servicio
 * que permite realizar operaciones con Truck Visit Appointment .
 * 
 */

public class TruckVisitAppointmentServiceImpl implements TruckVisitAppointmentService {

	private static final Log LOG = LogFactory.getLog(TruckVisitAppointmentServiceImpl.class);

	@Autowired
	private QuerysBO querysBO;

	@Override
	public TruckVisitAppointmentServiceDTO[] getInfo(String tva) throws Exception {

		QuerysDTO request = new QuerysDTO();

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO tvaParameterDTO = new QuerysParameterDTO();

		tvaParameterDTO.setValue(tva);
		tvaParameterDTO.setType("String");
		tvaParameterDTO.setParameterId(1);

		parameters.add(tvaParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("truckVisitAppt");

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		TruckVisitAppointmentServiceDTO[] tvaList = gson.fromJson(jsonInString,
				TruckVisitAppointmentServiceDTO[].class);

		return tvaList;
	}

	@Override
	public TruckVisitAppointmentServiceDTO[] getTVAByIds(String idList) throws Exception {

		QuerysDTO request = new QuerysDTO();

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO tvaParameterDTO = new QuerysParameterDTO();

		tvaParameterDTO.setValue(idList);
		tvaParameterDTO.setType("String");
		tvaParameterDTO.setParameterId(1);

		parameters.add(tvaParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("getTVAByIds");

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		TruckVisitAppointmentServiceDTO[] tvaList = gson.fromJson(jsonInString,
				TruckVisitAppointmentServiceDTO[].class);

		return tvaList;
	}

	@Override
	public TruckVisitAppointmentServiceDTO[] getTVABbkByIds(String idList) throws Exception {

		QuerysDTO request = new QuerysDTO();

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO tvaParameterDTO = new QuerysParameterDTO();

		tvaParameterDTO.setValue(idList);
		tvaParameterDTO.setType("String");
		tvaParameterDTO.setParameterId(1);

		parameters.add(tvaParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("getTVABbkByIds");

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		TruckVisitAppointmentServiceDTO[] tvaList = gson.fromJson(jsonInString,
				TruckVisitAppointmentServiceDTO[].class);

		return tvaList;
	}

	@Override
	public ResponseTvaService[] deleteCargoLotTVA(String tvaNbr, String unitNbr) throws Exception {

		QuerysDTO request = new QuerysDTO();

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO tvaParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO unitParameterDTO = new QuerysParameterDTO();

		tvaParameterDTO.setValue(tvaNbr);
		tvaParameterDTO.setType("String");
		tvaParameterDTO.setParameterId(1);

		unitParameterDTO.setValue(unitNbr);
		unitParameterDTO.setType("String");
		unitParameterDTO.setParameterId(2);

		parameters.add(tvaParameterDTO);
		parameters.add(unitParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("deleteCargoLotTVA");

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		ResponseTvaService[] tvaList = gson.fromJson(jsonInString, ResponseTvaService[].class);
		
		return tvaList;
	}

	@Override
	public ResponseTvaService[] cancelTVABB(String tvaNbr) throws Exception {

		QuerysDTO request = new QuerysDTO();

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO tvaParameterDTO = new QuerysParameterDTO();

		tvaParameterDTO.setValue(tvaNbr);
		tvaParameterDTO.setType("String");
		tvaParameterDTO.setParameterId(1);

		parameters.add(tvaParameterDTO);
		request.setParameters(parameters);
		request.setQueryName("cancelTVA_BB");

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		ResponseTvaService[] tvaList = gson.fromJson(jsonInString, ResponseTvaService[].class);

		return tvaList;
	}

	@Override
	public CausalCancellationAppointment[] getCausalCancellationAppointment() throws Exception {

		QuerysDTO request = new QuerysDTO();

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		request.setParameters(parameters);
		request.setQueryName("getCausalCancellationAppointment");

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		CausalCancellationAppointment[] causalCancellationAppointment = gson.fromJson(jsonInString,
				CausalCancellationAppointment[].class);

		return causalCancellationAppointment;
	}
	
	@Override
	public boolean validateHazardApp(String units) throws Exception {

		QuerysDTO request = new QuerysDTO();

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO tvaParameterDTO = new QuerysParameterDTO();

		tvaParameterDTO.setValue(units);
		tvaParameterDTO.setType("String");
		tvaParameterDTO.setParameterId(1);
		parameters.add(tvaParameterDTO);

		request.setParameters(parameters);
		request.setQueryName("validateHazardEditApp");

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());		
		String isHazard = jsonInString.substring(12,13);
		if (isHazard.equals("1")) {
			return true;
		}
		else return false;
	}

	// ASSIST-TI 01-07-2022
	@Override
	public TruckVisitAppointment appointmentValidate( TruckVisitAppointmentRequest  tv) throws Exception {
		
		QuerysDTO request = new QuerysDTO();
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO param1 = new QuerysParameterDTO();
		QuerysParameterDTO param2 = new QuerysParameterDTO();
		QuerysParameterDTO param3 = new QuerysParameterDTO();
		QuerysParameterDTO param4 = new QuerysParameterDTO();
		QuerysParameterDTO paramAppointmentDate = new QuerysParameterDTO();
		QuerysParameterDTO paramAppointmentHour = new QuerysParameterDTO();
		QuerysParameterDTO paramdriverCardId = new QuerysParameterDTO();
		QuerysParameterDTO paramtruckLicence = new QuerysParameterDTO();
		QuerysParameterDTO paramtruckingCompanyId = new QuerysParameterDTO();
		QuerysParameterDTO paramrule = new QuerysParameterDTO();
		QuerysParameterDTO paramtruckvisitappointment = new QuerysParameterDTO();
		String type = "String";

		SimpleDateFormat fchCita = new SimpleDateFormat(DateFormatConstant.yyyy_MM_dd,Locale.ENGLISH);
		SimpleDateFormat horaCita = new SimpleDateFormat(DateFormatConstant.HH_mm_ssSS,Locale.ENGLISH);
		
		String truckingCompanyId  = tv.getTruck().getTruckingCoId();
		String driverCardId = tv.getDriver().getCardId();
		String truckLicence = tv.getTruck().getLicenseNbr();
		String rule = tv.getRule();
		String truckvisitappointment = "null";
		String exportAppointmentDate = fchCita.format(tv.getAppointmentDate());
		String exportAppointmentHour = horaCita.format(tv.getAppointmentDate());
		String firstExport = tv.getFirstExportAppointmentContainer().getId();
		String secondExport = tv.getSecondExportAppointmentContainer().getId();
		String firstImport = tv.getFirstImportAppointmentContainer().getId();
		String secondImport = tv.getSecondImportAppointmentContainer().getId();

		if(firstExport == null){
			param1.setParameterId(1);
			param1.setValue("null");
			param1.setType(type);
		}else{
			param1.setParameterId(1);
			param1.setValue(firstExport);
			param1.setType(type);
		}

		if(secondExport == null){
			param2.setParameterId(2);
			param2.setValue("null");
			param2.setType(type);
		}else{
			param2.setParameterId(2);
			param2.setValue(secondExport);
			param2.setType(type);
		}
		
		if(firstImport == null){
			param3.setParameterId(3);
			param3.setValue("null");
			param3.setType(type);
		}else{
			param3.setParameterId(3);
			param3.setValue(firstImport);
			param3.setType(type);
		}
		
		if(secondImport == null){
			param4.setParameterId(4);
			param4.setValue("null");
			param4.setType(type);
		}else{
			param4.setParameterId(4);
			param4.setValue(secondImport);
			param4.setType(type);
		}
		
		paramAppointmentDate.setParameterId(5);
		paramAppointmentDate.setValue(exportAppointmentDate);
		paramAppointmentDate.setType(type);
		
		paramAppointmentHour.setParameterId(6);
		paramAppointmentHour.setValue(exportAppointmentHour);
		paramAppointmentHour.setType(type);
		
		paramdriverCardId.setParameterId(7);
		paramdriverCardId.setValue(driverCardId);
		paramdriverCardId.setType(type);
		
		paramtruckLicence.setParameterId(8);
		paramtruckLicence.setValue(truckLicence);
		paramtruckLicence.setType(type);
		
		paramtruckingCompanyId.setParameterId(9);
		paramtruckingCompanyId.setValue(truckingCompanyId);
		paramtruckingCompanyId.setType(type);
		
		paramrule.setParameterId(10);
		paramrule.setValue(rule);
		paramrule.setType(type);
		
		paramtruckvisitappointment.setValue(truckvisitappointment);
		paramtruckvisitappointment.setType(type);
		paramtruckvisitappointment.setParameterId(11);
		
		parameters.add(param1);
		parameters.add(param2);
		parameters.add(param3);
		parameters.add(param4);
		parameters.add(paramAppointmentDate);
		parameters.add(paramAppointmentHour);
		parameters.add(paramdriverCardId);
		parameters.add(paramtruckLicence);
		parameters.add(paramtruckingCompanyId);
		parameters.add(paramrule);
		parameters.add(paramtruckvisitappointment);
		request.setParameters(parameters);
		request.setQueryName("getValidateCreateAppoinment");
		
		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		GsonBuilder builder = new GsonBuilder();
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		TruckVisitAppointment[] restv = gson.fromJson(jsonInString,
		TruckVisitAppointment[].class);

		return restv[0];
				
	}


	// ASSIST-TI 01-07-2022
	@Override
	public TruckVisitAppointment updateAppointmentValidate( String secondImportAppointmentContainer, String firstImportAppointmentContainer, String secondExportAppointmentContainer, String firstExportAppointmentContainer, String truckingCompanyId, String AppointmentDate, String AppointmentHour, String getTruckVisitNbr,  String getDriverCardId,  String getLicense, String rule) throws Exception {

		QuerysDTO request = new QuerysDTO();

		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO param1 = new QuerysParameterDTO();
		QuerysParameterDTO param2 = new QuerysParameterDTO();
		QuerysParameterDTO param3 = new QuerysParameterDTO();
		QuerysParameterDTO param4 = new QuerysParameterDTO();
		QuerysParameterDTO paramexportAppointmentDate = new QuerysParameterDTO();
		QuerysParameterDTO paramexportAppointmentHour = new QuerysParameterDTO();
		QuerysParameterDTO paramdriverCardId = new QuerysParameterDTO();
		QuerysParameterDTO paramtruckLicence = new QuerysParameterDTO();
		QuerysParameterDTO paramtruckingCompanyId = new QuerysParameterDTO();
		QuerysParameterDTO paramrule = new QuerysParameterDTO();
		QuerysParameterDTO paramtruckvisitappointment = new QuerysParameterDTO();
		String type = "String";

		String exportAppointmentDate = AppointmentDate;
		String exportAppointmentHour = AppointmentHour;
		String driverCardId = getDriverCardId;
		String truckLicence = getLicense;
		String truckvisitappointment = getTruckVisitNbr;

		if(firstExportAppointmentContainer == null){
			param1.setParameterId(1);
			param1.setValue("null");
			param1.setType(type);
		}else{
			param1.setParameterId(1);
			param1.setValue(firstExportAppointmentContainer);
			param1.setType(type);
		}

		if(secondExportAppointmentContainer == null){
			param2.setParameterId(2);
			param2.setValue("null");
			param2.setType(type);
		}else{
			param2.setParameterId(2);
			param2.setValue(secondExportAppointmentContainer);
			param2.setType(type);
		}
		
		if(firstImportAppointmentContainer == null){
			param3.setParameterId(3);
			param3.setValue("null");
			param3.setType(type);
		}else{
			param3.setParameterId(3);
			param3.setValue(firstImportAppointmentContainer);
			param3.setType(type);
		}
		
		if(secondImportAppointmentContainer == null){
			param4.setParameterId(4);
			param4.setValue("null");
			param4.setType(type);
		}else{
			param4.setParameterId(4);
			param4.setValue(secondImportAppointmentContainer);
			param4.setType(type);
		}
		
		paramexportAppointmentDate.setValue(exportAppointmentDate);
		paramexportAppointmentDate.setType("String");
		paramexportAppointmentDate.setParameterId(5);
		
		paramexportAppointmentHour.setValue(exportAppointmentHour);
		paramexportAppointmentHour.setType("String");
		paramexportAppointmentHour.setParameterId(6);
		
		paramdriverCardId.setValue(driverCardId);
		paramdriverCardId.setType("String");
		paramdriverCardId.setParameterId(7);
		
		paramtruckLicence.setValue(truckLicence);
		paramtruckLicence.setType("String");
		paramtruckLicence.setParameterId(8);
		
		paramtruckingCompanyId.setValue(truckingCompanyId);
		paramtruckingCompanyId.setType("String");
		paramtruckingCompanyId.setParameterId(9);
		
		paramrule.setValue(rule);
		paramrule.setType("String");
		paramrule.setParameterId(10);
		
		paramtruckvisitappointment.setValue(truckvisitappointment);
		paramtruckvisitappointment.setType("String");
		paramtruckvisitappointment.setParameterId(11);
		
		parameters.add(param1);
		parameters.add(param2);
		parameters.add(param3);
		parameters.add(param4);
		parameters.add(paramexportAppointmentDate);
		parameters.add(paramexportAppointmentHour);
		parameters.add(paramdriverCardId);
		parameters.add(paramtruckLicence);
		parameters.add(paramtruckingCompanyId);
		parameters.add(paramrule);
		parameters.add(paramtruckvisitappointment);
		request.setParameters(parameters);
		request.setQueryName("getValidateCreateAppoinment");

		QuerysResponseDTO querysResponseDTO = querysBO.executeQuery(request);
		GsonBuilder builder = new GsonBuilder();
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();

		String jsonInString = gson.toJson(querysResponseDTO.getResult());
		TruckVisitAppointment[] restv = gson.fromJson(jsonInString,
		TruckVisitAppointment[].class);		

		return restv[0];
	}
}
