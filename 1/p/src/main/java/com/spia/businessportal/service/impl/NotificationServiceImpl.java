package com.spia.businessportal.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestTemplate;

import com.spia.businessportal.backend.bo.SecurityEsbBO;
import com.spia.businessportal.common.entities.dto.EmailParameterDTO;
import com.spia.businessportal.common.entities.dto.EmailRequestDTO;
import com.spia.businessportal.common.entities.dto.EmailResponseDTO;
import com.spia.businessportal.common.entities.dto.NotificationPrivilegesDTO;
import com.spia.businessportal.common.entities.dto.PrivilegioResponseUpdateDTO;
import com.spia.businessportal.common.entities.dto.SendEmailResquestDTO;
import com.spia.businessportal.common.entities.dto.TemplateEmailDTO;
import com.spia.businessportal.common.utils.StringUtil;
import com.spia.businessportal.service.NotificationService;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.businessportal.common.entities.dto.NotificationsPortalDTO;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.spia.businessportal.backend.bo.QuerysBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.dto.QuerysDTO;
import com.spia.businessportal.common.entities.dto.QuerysParameterDTO;
import com.spia.businessportal.common.entities.dto.QuerysResponseDTO;

public class NotificationServiceImpl implements NotificationService {
	@Autowired
	private SecurityEsbBO<SecurityEsbResponse> securityEsbBO;

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
    private QuerysBO querysBO;
    @Autowired
    private UserBO userBO;
   

	private String urlService;

	public String getUrlService() {
		return urlService;
	}

	public void setUrlService(String urlService) {
		this.urlService = urlService;
	}

	private static final Log LOG = LogFactory.getLog(NotificationServiceImpl.class);

	@Override
	public SecurityEsbResponse<PrivilegioResponseUpdateDTO> notificartionPrivileges(String action, String companyId,
			String userName) throws Exception {

		NotificationPrivilegesDTO request = new NotificationPrivilegesDTO();

		SecurityEsbResponse<PrivilegioResponseUpdateDTO> response = securityEsbBO.notificationPrivileges(request);
		return response;
	}

	@Override
	public EmailResponseDTO sendEmail(SendEmailResquestDTO sendEmailResquestDTO) throws Exception {

		try {
			EmailRequestDTO emailRequestDTO = new EmailRequestDTO();
			List<EmailParameterDTO> parameters = new ArrayList<>();
			EmailParameterDTO emailParameter = new EmailParameterDTO();
			String notificationInfo = StringUtil.getTextByBase64Decoded(sendEmailResquestDTO.getData(), "*-*");
			List<TemplateEmailDTO> mails = new ArrayList<>();

			emailParameter.setParameterId("notificationInfo");
			emailParameter.setValue(notificationInfo);
			parameters.add(emailParameter);
			emailRequestDTO.setTemplateName(sendEmailResquestDTO.getTemplateName());
			emailRequestDTO.setParameters(parameters);
			emailRequestDTO.setMails(sendEmailResquestDTO.getMails());

			EmailResponseDTO emailResponseDTO = restTemplate
					.exchange(urlService, HttpMethod.POST, new HttpEntity<>(emailRequestDTO), EmailResponseDTO.class)
					.getBody();
			return emailResponseDTO;
		} catch (Exception ex) {
			LOG.error(ex.getMessage());
		}

		return null;
	}


	@Override
	public NotificationsPortalDTO[] filterNotificationsByPrivileges(String privilegesList) throws Exception {
		UsuarioLoginDTO userlogin = userBO.getCurrentUser();
        QuerysDTO request = new QuerysDTO();
		NotificationsPortalDTO notification = new NotificationsPortalDTO();
		List<QuerysParameterDTO> parameters = new ArrayList<>();
		QuerysParameterDTO notificationParameterDTO = new QuerysParameterDTO();
		QuerysParameterDTO notificationUserDTO = new QuerysParameterDTO();
		
		notificationParameterDTO.setValue(privilegesList);
		notificationParameterDTO.setType("String");
		notificationParameterDTO.setParameterId(1);

		notificationUserDTO.setValue(userlogin.getEmpresa().getId());
		notificationUserDTO.setType("String");
		notificationUserDTO.setParameterId(2);

		parameters.add(notificationParameterDTO);
		//parameters.add(notificationUserDTO);

		request.setParameters(parameters);
		request.setQueryName("filterNotificationsByPrivileges");

		QuerysResponseDTO querysReponseDTO = querysBO.executeQuery(request);
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapter(Boolean.class, new BooleanDeserializer());
		builder.setDateFormat("yyyy-MM-dd HH:mm:ss.S");
		Gson gson = builder.create();


		String jsonInString = gson.toJson(querysReponseDTO.getResult());
		LOG.info("jsonInString: "+ jsonInString);
		NotificationsPortalDTO[] notificationList = gson.fromJson(jsonInString, NotificationsPortalDTO[].class);

		return notificationList;


	}

}
