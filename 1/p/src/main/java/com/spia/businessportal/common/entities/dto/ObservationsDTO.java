package com.spia.businessportal.common.entities.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Author: Elvis Fontalvo - Assert Solutions Email:
 * efontalvo@aassertsolutions.com Fecha: 22/10/2019
 * 
 */
public class ObservationsDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private RevisionDTO[] revision;

	public RevisionDTO[] getRevision() {
		return revision;
	}

	public void setRevision(RevisionDTO[] revision) {
		this.revision = revision;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
