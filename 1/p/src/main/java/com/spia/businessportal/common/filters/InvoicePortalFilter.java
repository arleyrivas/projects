/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  30 de mar. de 2016 - 2:06:20 p. m.
 */
package com.spia.businessportal.common.filters;

import org.hibernate.Criteria;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;

import com.spia.businessportal.common.entities.InvoicePortal;

import ar.com.fluxit.framework.common.filter.Filter;

/**
 * @author leandro
 *
 */
public class InvoicePortalFilter implements Filter{

	private Boolean lastId;
	private String referenceCode;
	private Long id;
	private String paymentMethod;
	private String payuAttended;
	private String n4FinalNbrs;
	
	@Override
	public void fillCriteria(Criteria criteria) {
		
		if(this.getReferenceCode() != null){
			criteria.add(Restrictions.eq("referenceCode", this.getReferenceCode()));
		}
		
		if(this.getN4FinalNbrs() != null){
			criteria.add(Restrictions.eq("n4FinalNbrs", this.getN4FinalNbrs()));
		}
		
		if(this.getId() != null){
			criteria.add(Restrictions.eq("id", this.getId()));
		}
		
		if(this.getPaymentMethod() != null){
			criteria.add(Restrictions.eq("paymentMethod", this.getPaymentMethod()));
		}
		
		if(this.getId() != null){
			criteria.add(Restrictions.eq("id", this.getId()));
		}
		
		if(this.isLastId() != null && this.isLastId().booleanValue()){
			DetachedCriteria maxId = DetachedCriteria.forClass(InvoicePortal.class, "detachedCriteria")
					.setProjection( Projections.max("id"));
			criteria.add(Property.forName("id").eq(maxId));
		}
		
		if(this.getPayuAttended() != null && !"null".equals(this.getPayuAttended())){
			criteria.add(Restrictions.eq("payuAttended", this.getPayuAttended()));
		}
		else
			/*Si this.getPayuAttended() = null (objeto), se está agregando al filtro "and payu_attended = null" para el caso en que no se setea.
			 * Por eso se seta "null" (string) cuando se quiere agregar el filtro que payu_attended sea null.
			 */
			
			if (this.getPayuAttended() != null && "null".equals(this.getPayuAttended()))
				criteria.add(Restrictions.isNull("payuAttended"));

	}

	@Override
	public void fillCriteriaNotPagination(Criteria criteria) {
	}

	public Boolean isLastId() {
		return lastId;
	}

	public void setLastId(Boolean lastId) {
		this.lastId = lastId;
	}

	public String getReferenceCode() {
		return referenceCode;
	}

	public void setReferenceCode(String referenceCode) {
		this.referenceCode = referenceCode;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getPayuAttended() {
		return payuAttended;
	}

	public void setPayuAttended(String payuAttended) {
		this.payuAttended = payuAttended;
	}

	public String getN4FinalNbrs() {
		return n4FinalNbrs;
	}

	public void setN4FinalNbrs(String n4FinalNbrs) {
		this.n4FinalNbrs = n4FinalNbrs;
	}
	
	

}
