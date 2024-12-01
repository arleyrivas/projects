package com.spia.businessportal.common.entities;

import java.io.Serializable;
import java.util.Date;

import javax.xml.bind.annotation.XmlTransient;

@XmlTransient
public class Notification implements Serializable {

	private Long id;
	private Date date;	
	private String title;
	private String content;
	private String data;
	private String user;
	private Boolean watched;
	private Boolean deleted;
	private String type;
	
	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}
	
	public Notification() {
		super();
	}

	public Notification(String title,String content, String data, String type) {
		super();
		this.date = new Date();
		this.title = title;
		this.content = content;
		this.data = data;
		this.type = type;
		this.watched = false;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setData(String data) {
		this.data = data;
	}
	
	public String getData() {
		return data;
	}

	public Boolean getWatched() {
		return watched;
	}

	public void setWatched(Boolean read) {
		this.watched = read;
	}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
}
