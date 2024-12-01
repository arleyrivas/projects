/**
 * 
 */
package com.spia.businessportal.common.filters;

import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;

import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.businessportal.common.entities.User;

import ar.com.fluxit.framework.common.filter.Filter;

/**
 * Implementación de {@link ar.com.fluxit.framework.common.filter.Filter} para truck visit
 * @author diego
 *
 */
public class TruckVisitFilter implements Filter {

	private UsuarioLoginDTO createdBy;
	private String createdByLdap;
	private String n4UserIdLdap;
	private String pinNbr;
	private String unitNbr;
	private String edoNbr;
	private String eroNbr;
	private List<String> units;
	private String edoUnit;
	private String eroUnit;
	private String importUnit;
	private String exportUnit;
	private Date minAppointmentDate;
	private String nbr;
	private Boolean canceled;
	private Boolean activeBreakBulk;
		
	/**
	 * 
	 */
	public TruckVisitFilter() {
		super();
	}

	@Override
	public void fillCriteria(Criteria criteria) {
		if(this.getN4UserIdLdap() != null){
			criteria.add(Restrictions.eq("companyIdLdap", this.getN4UserIdLdap()));
		}
		if (this.getCreatedByLdap() != null){
			criteria.add(Restrictions.eq("createdByLDAP", this.getCreatedByLdap()));			
		}
		if (this.getPinNbr() != null){
			criteria.add(Restrictions.eq("pinNbr", this.getPinNbr()));
		}
		if (this.getUnitNbr() != null){
			criteria.add(Restrictions.or(
					Restrictions.or(
							Restrictions.or(
								Restrictions.eq("firstContainerImport", this.getUnitNbr()),
								Restrictions.eq("secondContainerImport", this.getUnitNbr())
							),
							Restrictions.or(
								Restrictions.eq("firstContainerExport", this.getUnitNbr()),
								Restrictions.eq("secondContainerExport", this.getUnitNbr())
							)
						),					
					Restrictions.or(
						Restrictions.or(
							Restrictions.eq("firstContainerEdo", this.getUnitNbr()),
							Restrictions.eq("secondContainerEdo", this.getUnitNbr())
						),
						Restrictions.or(
							Restrictions.eq("firstContainerEro", this.getUnitNbr()),
							Restrictions.eq("secondContainerEro", this.getUnitNbr())
						)
					)
			));
		}
		if(this.getUnits() != null){
			criteria.add(Restrictions.or(
					Restrictions.or(
						Restrictions.or(
							Restrictions.in("firstContainerImport", this.getUnits()),
							Restrictions.in("secondContainerImport", this.getUnits())
						),
						Restrictions.or(
								Restrictions.in("firstContainerExport", this.getUnits()),
								Restrictions.in("secondContainerExport", this.getUnits())
						)
					),
					Restrictions.or(
							Restrictions.or(
								Restrictions.in("firstContainerEdo", this.getUnits()),
								Restrictions.in("secondContainerEdo", this.getUnits())
							),
							Restrictions.or(
								Restrictions.in("firstContainerEro", this.getUnits()),
								Restrictions.in("secondContainerEro", this.getUnits())
							)
						)
			));
		}
		if (this.getMinAppointmentDate()!=null){
			criteria.add(Restrictions.gt("appointmentDate", this.getMinAppointmentDate()));
		}
		if (this.getCanceled() != null){
			criteria.add(Restrictions.eq("canceled", this.getCanceled()));
		}
		if (this.getNbr()!=null){
			criteria.add(Restrictions.eq("truckVisitNbr", this.getNbr()));
		}
		if(this.getEdoNbr() != null){
			criteria.add(Restrictions.or(
					Restrictions.eq("firstEdoNbr", this.getEdoNbr()),
					Restrictions.eq("secondEdoNbr", this.getEdoNbr())));
		}
		if(this.getEroNbr() != null){
			criteria.add(Restrictions.or(
					Restrictions.eq("firstEroNbr", this.getEroNbr()),
					Restrictions.eq("secondEroNbr", this.getEroNbr())));
		}
		if(this.getEdoUnit() != null){
			criteria.add(Restrictions.or(
				Restrictions.eq("firstContainerEdo", this.getEdoUnit()),
				Restrictions.eq("secondContainerEdo", this.getEdoUnit())));
		}
		if(this.getEroUnit() != null){
			criteria.add(Restrictions.or(
				Restrictions.eq("firstContainerEdo", this.getEdoUnit()),
				Restrictions.eq("secondContainerEdo", this.getEdoUnit())));
		}
		
		if(this.getActiveBreakBulk() != null){
			criteria.createAlias("this.truckVisitAppointmentBreakBulk", "truckVisitAppointmentBreakBulk");
			criteria.add(Restrictions.eq("truckVisitAppointmentBreakBulk.active", this.getActiveBreakBulk().booleanValue()));
		}
	}

	@Override
	public void fillCriteriaNotPagination(Criteria criteria) {
		criteria.addOrder(Property.forName("appointmentDate").desc());
		criteria.addOrder(Property.forName("truckVisitNbr").desc());
	}

	public UsuarioLoginDTO getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(UsuarioLoginDTO createdBy) {
		this.createdBy = createdBy;
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

	public Date getMinAppointmentDate() {
		return minAppointmentDate;
	}

	public void setMinAppointmentDate(Date minAppointmentDate) {
		this.minAppointmentDate = minAppointmentDate;
	}

	public List<String> getUnits() {
		return units;
	}

	public void setUnits(List<String> units) {
		this.units = units;
	}

	public String getNbr() {
		return nbr;
	}

	public void setNbr(String nbr) {
		this.nbr = nbr;
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

	public Boolean getCanceled() {
		return canceled;
	}

	public void setCanceled(Boolean canceled) {
		this.canceled = canceled;
	}

	public String getEdoUnit() {
		return edoUnit;
	}

	public void setEdoUnit(String edoUnit) {
		this.edoUnit = edoUnit;
	}

	public String getEroUnit() {
		return eroUnit;
	}

	public void setEroUnit(String eroUnit) {
		this.eroUnit = eroUnit;
	}

	public String getImportUnit() {
		return importUnit;
	}

	public void setImportUnit(String importUnit) {
		this.importUnit = importUnit;
	}

	public String getExportUnit() {
		return exportUnit;
	}

	public void setExportUnit(String exportUnit) {
		this.exportUnit = exportUnit;
	}

	public Boolean getActiveBreakBulk() {
		return activeBreakBulk;
	}

	public void setActiveBreakBulk(Boolean activeBreakBulk) {
		this.activeBreakBulk = activeBreakBulk;
	}

	public String getCreatedByLdap() {
		return createdByLdap;
	}

	public void setCreatedByLdap(String createdByLdap) {
		this.createdByLdap = createdByLdap;
	}

	public String getN4UserIdLdap() {
		return n4UserIdLdap;
	}

	public void setN4UserIdLdap(String n4UserIdLdap) {
		this.n4UserIdLdap = n4UserIdLdap;
	}
	
}
