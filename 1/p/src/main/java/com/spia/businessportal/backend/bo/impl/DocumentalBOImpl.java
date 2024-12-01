package com.spia.businessportal.backend.bo.impl;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.criterion.Subqueries;
import org.hibernate.transform.Transformers;
import org.hibernate.type.IntegerType;
import org.hibernate.type.StringType;
import org.hibernate.type.Type;
import org.springframework.beans.factory.annotation.Autowired;

import com.spia.businessportal.backend.bo.DocumentalBO;
import com.spia.businessportal.common.entities.Documentation;
import com.spia.businessportal.common.entities.dto.DocumentationHibernateDTO;
import com.spia.businessportal.common.utils.SmartSQLProjection;

import ar.com.fluxit.framework.business.generic.impl.GenericServiceImpl;
import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.common.filter.Page;

public class DocumentalBOImpl extends GenericServiceImpl<Documentation> implements  DocumentalBO {

	private static final Log LOG = LogFactory.getLog(DocumentalBOImpl.class);
		
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public List<DocumentationHibernateDTO> getDocumentalList(Page page) throws BusinessException {
//		Session session = sessionFactory.openSession();
//		session.enableFilter("deleted").setParameter("deleted", Boolean.FALSE);
		Criteria criteria = sessionFactory.getCurrentSession().createCriteria(Documentation.class, "doc");
		criteria.createAlias("doc.files", "documentationFiles", CriteriaSpecification.INNER_JOIN);
		criteria.createAlias("documentationFiles.files", "specificFile", CriteriaSpecification.INNER_JOIN);

		Projection smartProjection = new SmartSQLProjection("(CASE WHEN (COUNT({specificFile}.id) - SUM(CASE WHEN (approved = 0 and rejected = 0) THEN 1 ELSE 0 END) = 0) THEN 0 ELSE 1 END) AS revisada",
				new String[]{"revisada"},
				new Type[] { new IntegerType() });
		
		Projection smartProjectionStatus = new SmartSQLProjection("(CASE WHEN (Sum(CASE WHEN ( approved = 0 AND rejected = 0 ) THEN 1 ELSE 0 END) > 0) THEN NULL WHEN ( Count(specificfi2_.id) - Sum(CASE WHEN ( approved = 1 ) THEN 1 ELSE 0 END) = 0) THEN 'APROBADA' ELSE 'NO APROBADA' END) AS estado",
				new String[]{"estado"},
				new Type[] { new StringType() });
		//criteria.add(Restrictions.eq("specificFile.deleted", false));
		
		criteria.setProjection(Projections.projectionList()
				.add(Projections.distinct(Projections.groupProperty("nbr").as("nbr")))
				.add(Projections.groupProperty("id").as("id"))
				.add(Projections.groupProperty("specificFile.companyName").as("companyName"))
				.add(Projections.max("specificFile.updateAt").as("lastUploadFileDate"))
				.add(Projections.count("specificFile.id").as("archivos"))
				.add(Projections.sqlProjection(
						"SUM(CASE WHEN (approved = 0 and rejected = 0) THEN 1 ELSE 0 END ) AS pendientes",
                        new String[] { "pendientes" },
                        new Type[] { new IntegerType() }), "pendientes")
				.add(smartProjection, "revisada")
				.add(smartProjectionStatus, "estado")
				.add(Projections.groupProperty("notificador").as("notificador")));
		criteria.addOrder(Order.asc("revisada"))
				.addOrder(Order.desc("pendientes"))
				.addOrder(Order.asc("lastUploadFileDate"));
		
		criteria.setResultTransformer(Transformers.aliasToBean(DocumentationHibernateDTO.class));
		criteria.setFirstResult((page.getPageNumber() - 1) * page.getPageSize());
		if (page.getPageSize() > 0){
			criteria.setMaxResults(page.getPageSize());	
		}
		List<DocumentationHibernateDTO> documentations = criteria.list();
		return documentations;
	}
}
		