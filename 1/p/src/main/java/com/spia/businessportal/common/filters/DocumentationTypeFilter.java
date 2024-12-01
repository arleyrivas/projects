/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  11 de may. de 2016 - 3:23:30 p. m.
 */
package com.spia.businessportal.common.filters;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;

import ar.com.fluxit.framework.common.filter.Filter;

/**
 * @author leandro
 *
 */
public class DocumentationTypeFilter implements Filter{

	private String type;
	
	@Override
	public void fillCriteria(Criteria criteria) {
		
		if(this.getType() != null){
			criteria.add(Restrictions.eq("type", this.getType()));
		}
	}
	
	@Override
	public void fillCriteriaNotPagination(Criteria criteria) {
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	

}
