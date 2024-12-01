package com.spia.businessportal.common.entities.dto;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.spia.businessportal.common.audit.IAuditLog;
import com.spia.businessportal.common.entities.PinBreakBulk;
import com.spia.businessportal.common.entities.PinContainerized;
import com.spia.businessportal.common.entities.TruckVisitAppointmentBreakBulk;
import com.spia.businessportal.web.binding.CustomDateSerializer;

/**
 * Clase que representa el Pin para poder autorizar a las compañias de
 * transporte a retirar los contenedores.
 * 
 * @author leandro
 *
 */
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class PinNotification implements IAuditLog {

	private static final Log LOG = LogFactory.getLog(PinNotification.class);

	private Long id;
	@JsonIgnore
	private String hashValue;
	private String pinNbr;
	private String unitNbr;
	private String blNbr;
	private String bkgNbr;
	private String edoNbr;
	private String eroNbr;
	private String isoType;
	private String createdByLDAP;
	private String createdByCompanyLDAP;
	private String truckingCompanyLDAP;
	private String truckingCompanyNameLDAP;
	private Date createdAt;
	private String consignee;
	private String frghtKind;
	private Long isGroup;
	private boolean active = true;
	private boolean deleted = false;
	private boolean twenty = false;
	private Set<PinBreakBulk> pinBreakBulk = new HashSet<PinBreakBulk>(0);
	@JsonManagedReference
	private Set<TruckVisitAppointmentBreakBulk> truckVisitBreakBulk = new HashSet<TruckVisitAppointmentBreakBulk>(0);
	@JsonManagedReference
	private Set<PinContainerized> pinContainerized = new HashSet<PinContainerized>(0);
	List<TemplateEmailDTO> mailsNotifications;
	private String createdByCompanyNameLDAP;
	private String observations;

	public PinNotification() {
		super();
		this.createdAt = new Date();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getHashValue() {
		return hashValue;
	}

	public void setHashValue(String hashValue) {
		this.hashValue = hashValue;
	}

	public String getPinNbr() {
		return pinNbr;
	}

	public void setPinNbr(String pinNbr) {
		this.pinNbr = pinNbr;
	}

	public String getUnitNbr() {
		return unitNbr;
	}

	public void setUnitNbr(String unitNbr) {
		this.unitNbr = unitNbr;
	}

	public String getBlNbr() {
		return blNbr;
	}

	public void setBlNbr(String blNbr) {
		this.blNbr = blNbr;
	}

	public String getBkgNbr() {
		return bkgNbr;
	}

	public void setBkgNbr(String bkgNbr) {
		this.bkgNbr = bkgNbr;
	}

	public String getIsoType() {
		return isoType;
	}

	public void setIsoType(String isoType) {
		this.isoType = isoType;
	}

	@JsonSerialize(using = CustomDateSerializer.class)
	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	public boolean isTwenty() {
		return twenty;
	}

	public void setTwenty(boolean twenty) {
		this.twenty = twenty;
	}

	public void generate(String nbr) {
		this.setHashValue(String.valueOf(nbr.hashCode() * this.createdAt.hashCode()));
		this.setPinNbr(StringUtils.substring(this.getHashValue(), this.getHashValue().length() - 6));
	}

	public void setPin(String pin) {
		this.setHashValue(pin);
		this.setPinNbr(StringUtils.substring(pin, pin.length() - 6));
	}

	public String getEdoNbr() {
		return edoNbr;
	}

	public void setEdoNbr(String edoNbr) {
		this.edoNbr = edoNbr;
	}

	public String getEroNbr() {
		return eroNbr;
	}

	public void setEroNbr(String eroNbr) {
		this.eroNbr = eroNbr;
	}

	public Set<PinBreakBulk> getPinBreakBulk() {
		return pinBreakBulk;
	}

	public void setPinBreakBulk(Set<PinBreakBulk> pinBreakBulk) {
		this.pinBreakBulk = pinBreakBulk;
	}

	public Set<TruckVisitAppointmentBreakBulk> getTruckVisitBreakBulk() {
		return truckVisitBreakBulk;
	}

	public void setTruckVisitBreakBulk(Set<TruckVisitAppointmentBreakBulk> truckVisitBreakBulk) {
		this.truckVisitBreakBulk = truckVisitBreakBulk;
	}

	public Set<PinContainerized> getPinContainerized() {
		return pinContainerized;
	}

	public void setPinContainerized(Set<PinContainerized> pinContainerized) {
		this.pinContainerized = pinContainerized;
	}

	public String getConsignee() {
		return consignee;
	}

	public void setConsignee(String consignee) {
		this.consignee = consignee;
	}

	public void clearUnactive() {
		for (Iterator<PinContainerized> i = pinContainerized.iterator(); i.hasNext();) {
			PinContainerized element = i.next();
			if (!element.isActive()) {
				i.remove();
			}
		}
	}

	@JsonIgnore
	@Override
	public String getLogDetail() {
		String[] arr = { "hashValue", "truckingCompany", "createdBy" };
		List<String> excludedFields = Arrays.asList(arr);
		StringBuilder sb = new StringBuilder();
		Field[] fields = this.getClass().getDeclaredFields();
		for (Field field : fields) {
			try {
				if (field.get(this) != null && !excludedFields.contains(field.getName()))
					sb.append(field.getName()).append(":").append(field.get(this).toString()).append("\n");
			} catch (IllegalArgumentException | IllegalAccessException e) {
				LOG.error(e.getStackTrace());
			}
		}
		if (this.getTruckingCompanyLDAP() != null)
			sb.append("TruckingCompany: ").append(this.getTruckingCompanyLDAP()).append("\n");
		if (this.getCreatedByLDAP() != null)
			// mostrar nombre?
			sb.append("CreatedBy: ").append(this.getCreatedByLDAP()).append("\n");
		return sb.toString();
	}

	@JsonIgnore
	@Override
	public String getClassName() {
		return this.getClass().getName();
	}

	/**
	 * @return the truckingCompanyLDAP
	 */
	public String getTruckingCompanyLDAP() {
		return truckingCompanyLDAP;
	}

	/**
	 * @param truckingCompanyLDAP the truckingCompanyLDAP to set
	 */
	public void setTruckingCompanyLDAP(String truckingCompanyLDAP) {
		this.truckingCompanyLDAP = truckingCompanyLDAP;
	}

	/**
	 * @return the createdByLDAP
	 */
	public String getCreatedByLDAP() {
		return createdByLDAP;
	}

	/**
	 * @param createdByLDAP the createdByLDAP to set
	 */
	public void setCreatedByLDAP(String createdByLDAP) {
		this.createdByLDAP = createdByLDAP;
	}

	public String getTruckingCompanyNameLDAP() {
		return truckingCompanyNameLDAP;
	}

	public void setTruckingCompanyNameLDAP(String truckingCompanyNameLDAP) {
		this.truckingCompanyNameLDAP = truckingCompanyNameLDAP;
	}

	public String getCreatedByCompanyLDAP() {
		return createdByCompanyLDAP;
	}

	public void setCreatedByCompanyLDAP(String createdByCompanyLDAP) {
		this.createdByCompanyLDAP = createdByCompanyLDAP;
	}

	public String getFrghtKind() {
		return frghtKind;
	}

	public void setFrghtKind(String frghtKind) {
		this.frghtKind = frghtKind;
	}

	public Long getIsGroup() {
		return isGroup;
	}

	public void setIsGroup(Long isGroup) {
		this.isGroup = isGroup;
	}

	public List<TemplateEmailDTO> getMailsNotifications() {
		return mailsNotifications;
	}

	public void setMailsNotifications(List<TemplateEmailDTO> mailsNotifications) {
		this.mailsNotifications = mailsNotifications;
	}

	public String getCreatedByCompanyNameLDAP() {
		return createdByCompanyNameLDAP;
	}

	public void setCreatedByCompanyNameLDAP(String createdByCompanyNameLDAP) {
		this.createdByCompanyNameLDAP = createdByCompanyNameLDAP;
	}

	public String getObservations() {
		return observations;
	}

	public void setObservations(String observations) {
		this.observations = observations;
	}

}
