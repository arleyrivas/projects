/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  22 de ene. de 2016 - 11:22:52 a. m.
 */
package com.spia.businessportal.common.entities.dto;

import java.util.List;

/**
 * Author: Elvis Fontalvo Assert Solutions Email:efontalvo@aassertsolutions.com
 * Fecha: 07/05/2020
 */
public class ResponseEmptyAndDecoDTO {

	private int cantActive;
	private int cantInactive;
	private List<String> actives;
	private List<String> inactives;
	private String vesselVisit;
	private String lineOperator;
	private List<BlChildrensByBlMasterDTO> hbls;

	/**
	 * @return the cantActive
	 */
	public int getCantActive() {
		return cantActive;
	}

	/**
	 * @param cantActive the cantActive to set
	 */
	public void setCantActive(int cantActive) {
		this.cantActive = cantActive;
	}

	/**
	 * @return the cantInactive
	 */
	public int getCantInactive() {
		return cantInactive;
	}

	/**
	 * @param cantInactive the cantInactive to set
	 */
	public void setCantInactive(int cantInactive) {
		this.cantInactive = cantInactive;
	}

	/**
	 * @return the actives
	 */
	public List<String> getActives() {
		return actives;
	}

	/**
	 * @param actives the actives to set
	 */
	public void setActives(List<String> actives) {
		this.actives = actives;
	}

	/**
	 * @return the inactives
	 */
	public List<String> getInactives() {
		return inactives;
	}

	/**
	 * @param inactives the inactives to set
	 */
	public void setInactives(List<String> inactives) {
		this.inactives = inactives;
	}

	/**
	 * @return the vesselVisit
	 */
	public String getVesselVisit() {
		return vesselVisit;
	}

	/**
	 * @param vesselVisit the vesselVisit to set
	 */
	public void setVesselVisit(String vesselVisit) {
		this.vesselVisit = vesselVisit;
	}

	/**
	 * @return the lineOperator
	 */
	public String getLineOperator() {
		return lineOperator;
	}

	/**
	 * @param lineOperator the lineOperator to set
	 */
	public void setLineOperator(String lineOperator) {
		this.lineOperator = lineOperator;
	}

	/**
	 * @return the hbls
	 */
	public List<BlChildrensByBlMasterDTO> getHbls() {
		return hbls;
	}

	/**
	 * @param hbls the hbls to set
	 */
	public void setHbls(List<BlChildrensByBlMasterDTO> hbls) {
		this.hbls = hbls;
	}

}
