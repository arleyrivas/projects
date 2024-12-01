package com.spia.businessportal.common.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.criterion.CriteriaQuery;
import org.hibernate.criterion.SQLProjection;
import org.hibernate.type.Type;
import org.hibernate.util.StringHelper;

public class SmartSQLProjection extends SQLProjection {

	private static final long serialVersionUID = 1L;
	private static final Pattern ALIAS_INTERPOLATE_PATTERN = Pattern.compile("\\{(.*?)\\}");
	
	private String sql;
	private String groupBy;

	public SmartSQLProjection(String sql, String[] columnAliases, Type[] types) {
		this(sql, null, columnAliases, types);
	}
	
	public SmartSQLProjection(String sql, String groupBy, String[] columnAliases, Type[] types) {
		super(sql, groupBy, columnAliases, types);
		this.sql = sql;
		this.groupBy = groupBy;
	}

	@Override
	public String toSqlString(Criteria criteria, int loc, CriteriaQuery criteriaQuery) throws HibernateException {
		return replaceAliasWithSQLAlias(sql, criteria, criteriaQuery);
	}
	
	@Override
	public String toGroupSqlString(Criteria criteria,CriteriaQuery criteriaQuery) throws HibernateException {
		return replaceAliasWithSQLAlias(groupBy, criteria, criteriaQuery);
	}

	/**
	 * Replace alias in the given query string with their sql aliases from
	 * criteria query.
	 * http://stackoverflow.com/questions/7822662/referencing-outer-criteria-query-aliases-from-within-an-sqlprojection
	 * https://hibernate.atlassian.net/browse/HHH-6353
	 * https://github.com/jonbcard/hibernate-orm/commit/df0c71218ceb02cc19da04e969d692f05b3f05b0
	 */
	private String replaceAliasWithSQLAlias(String queryString, Criteria criteria, CriteriaQuery criteriaQuery) {
		
		String sqlString = StringHelper.replace(queryString, "{alias}", criteriaQuery.getSQLAlias(criteria));
		
		Matcher matchPattern = ALIAS_INTERPOLATE_PATTERN.matcher(sqlString);
		while (matchPattern.find()) {
			String alias = matchPattern.group(1);
			String sqlAlias = criteriaQuery.getSQLAlias(criteria, (alias + ".")); // workaround to not using reflections
			if (sqlAlias != null) {
				sqlString = StringHelper.replace(sqlString, "{" + alias + "}", sqlAlias);
			}
        	}
		
		return sqlString;
	}
	
}
