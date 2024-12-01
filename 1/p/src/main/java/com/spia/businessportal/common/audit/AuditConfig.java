package com.spia.businessportal.common.audit;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import org.springframework.core.io.ClassPathResource;

import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import com.spia.businessportal.common.entities.dto.AuditListDTO;

public class AuditConfig {
	private AuditListDTO request;

	public AuditConfig() {
		super();
		loadFile();
	}

	public AuditListDTO getAuditConfig() {
		if (this.request == null) {
			loadFile();
		}
		return this.request;
	}

	private void loadFile() {
		request = new AuditListDTO();
		try {
			File resource;
			resource = new ClassPathResource("auditConfig.json").getFile();
			resource.createNewFile();
			JsonReader reader = new JsonReader(new FileReader(resource));
			request = new Gson().fromJson(reader, AuditListDTO.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}