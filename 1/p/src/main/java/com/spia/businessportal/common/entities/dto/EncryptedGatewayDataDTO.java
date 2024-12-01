package com.spia.businessportal.common.entities.dto;

public class EncryptedGatewayDataDTO {

	private String data;

	public EncryptedGatewayDataDTO(String data) {
        this.data = data;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
}
