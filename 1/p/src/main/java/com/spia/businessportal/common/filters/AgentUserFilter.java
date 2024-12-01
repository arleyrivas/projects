package com.spia.businessportal.common.filters;

import org.hibernate.Criteria;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;

import com.spia.businessportal.common.entities.AgentUser;

import ar.com.fluxit.framework.common.filter.Filter;

/**
 * Implementación de {@link Filter} para el {@link AgentUser} agente 
 * @author leandro
 *
 */
public class AgentUserFilter implements Filter{

	private AgentUser agent;

	
	/**
	 * 
	 */
	public AgentUserFilter() {
		super();
	}

	/* (non-Javadoc)
	 * @see ar.com.fluxit.framework.common.filter.Filter#fillCriteria(org.hibernate.Criteria)
	 */
	@Override
	public void fillCriteria(Criteria criteria) {
		/*if (this.getAgent() != null){
			criteria.createAlias("this.users", "users");
			criteria.add(Restrictions.eq("users.id",this.getAgent().getId()));
		}*/
		
		criteria.createAlias("this.users", "users");
		criteria.add(Restrictions.eq("users.active", true));
		criteria.add(Restrictions.eq("users.createdBy", this.getAgent()));
		
	}

	/* (non-Javadoc)
	 * @see ar.com.fluxit.framework.common.filter.Filter#fillCriteriaNotPagination(org.hibernate.Criteria)
	 */
	@Override
	public void fillCriteriaNotPagination(Criteria criteria) {
		criteria.addOrder(Property.forName("userName").asc());
	}

	public AgentUser getAgent() {
		return agent;
	}

	public void setAgent(AgentUser agent) {
		this.agent = agent;
	}

	
}
