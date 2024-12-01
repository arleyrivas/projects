package com.spia.businessportal.common.entities.dto;


public class SecurityEsbResponse<EsbEntity> {
	private boolean success;
	private String error;
	private Object result;
	private EsbEntity item;
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public Object getResult() {
		return result;
	}
	public void setResult(Object result) {
		this.result = result;
	}
	public EsbEntity getItem() {
		return item;
	}
	public void setItem(EsbEntity item) {
		this.item = item;
	}
}
