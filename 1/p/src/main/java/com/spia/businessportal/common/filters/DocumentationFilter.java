/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  4 de may. de 2016 - 9:02:51 a. m.
 */
package com.spia.businessportal.common.filters;

import java.util.Calendar;
import java.util.Date;

import org.hibernate.Criteria;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;

import com.spia.businessportal.common.entities.Documentation;
import com.spia.businessportal.common.entities.dto.DocumentationHibernateDTO;

import ar.com.fluxit.framework.common.filter.Filter;

/**
 * @author leandro
 *
 */
public class DocumentationFilter implements Filter{


	private Boolean active;
	private Boolean locked;
	private Date timeLocked;
	private String blNBR;
	private Boolean test;
	
	public DocumentationFilter(){
		super();
	}
	
	@Override
	public void fillCriteria(Criteria criteria) {

		criteria.createAlias("this.files", "documentationFiles", CriteriaSpecification.INNER_JOIN);
		criteria.createAlias("documentationFiles.files", "specificFile", CriteriaSpecification.INNER_JOIN);
		//criteria.add(Restrictions.eq("specificFile.deleted", false));
		if(this.getTimeLocked() != null){
			Calendar cal = Calendar.getInstance();
			cal.setTime(timeLocked);
			cal.add(Calendar.MINUTE, -20);
			criteria.add(Restrictions.le("lockedDate", cal.getTime()));
		}
		if(this.getLocked() != null){
			criteria.add(Restrictions.eq("locked", this.getLocked().booleanValue()));
		}
		if(this.getActive() != null){
			criteria.add(Restrictions.eq("active", this.getActive().booleanValue()));
		}
		
		if(this.getBlNBR() != null){
			criteria.add(Restrictions.eq("nbr", this.getBlNBR()));
		}
		
		if(this.getTest() != null && this.getTest().booleanValue()){
			criteria.setProjection(Projections.projectionList()
					.add(Projections.groupProperty("nbr"))
					.add(Projections.max("specificFile.updateAt")));
			criteria.setResultTransformer(Transformers.aliasToBean(DocumentationHibernateDTO.class));
		}
	}

	@Override
	public void fillCriteriaNotPagination(Criteria criteria) {
		criteria.addOrder(Property.forName("createdAt").asc());
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Boolean getLocked() {
		return locked;
	}

	public void setLocked(Boolean locked) {
		this.locked = locked;
	}

	public Date getTimeLocked() {
		return timeLocked;
	}

	public void setTimeLocked(Date timeLocked) {
		this.timeLocked = timeLocked;
	}
	
	public String getBlNBR() {
		return blNBR;
	}

	public void setBlNBR(String blNBR) {
		this.blNBR = blNBR;
	}

	public Boolean getTest() {
		return test;
	}

	public void setTest(Boolean test) {
		this.test = test;
	}	
}
