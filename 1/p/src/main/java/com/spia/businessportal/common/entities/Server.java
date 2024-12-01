package com.spia.businessportal.common.entities;

public class Server{
	private String[] files;
	private String server;
	
	/**
	 * 
	 */
	public Server() {
		super();
	}
	
	public String[] getFiles() {
		return files;
	}
	public void setFiles(String[] files) {
		this.files = files;
	}
	public String getServer() {
		return server;
	}
	public void setServer(String server) {
		this.server = server;
	}
}
