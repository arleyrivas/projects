/*
 */
package com.spia.businessportal.common.filters;

import org.hibernate.Criteria;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;

import ar.com.fluxit.framework.common.filter.Filter;

/**
 * Implementación de {@link ar.com.fluxit.framework.common.filter.Filter} para el mail 
 * @author darian
 *
 */
public class NotificationFilter implements Filter {
	
	private Long id;
	private Boolean watched;
	private String user;
	
	/**
	 * 
	 */
	public NotificationFilter() {
		super();
	}
	
	/* (non-Javadoc)
	 * @see ar.com.fluxit.framework.common.filter.Filter#fillCriteria(org.hibernate.Criteria)
	 */
	@Override
	public void fillCriteria(Criteria criteria) {
		if (this.getId() != null){
			criteria.add(Restrictions.eq("id",this.getId()));
		}
		if (this.isWatched()!= null){
			criteria.add(Restrictions.eq("watched",this.isWatched()));
		}
		if (this.getUser()!= null){
			criteria.add(Restrictions.eq("user",this.getUser()));
		}
	}
	
	/* (non-Javadoc)
	 * @see ar.com.fluxit.framework.common.filter.Filter#fillCriteria(org.hibernate.Criteria)
	 */
	@Override
	public void fillCriteriaNotPagination(Criteria criteria) {
		criteria.addOrder(Property.forName("id").asc());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Boolean isWatched() {
		return watched;
	}

	public void setWatched(Boolean watched) {
		this.watched = watched;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
	
	
	

}
