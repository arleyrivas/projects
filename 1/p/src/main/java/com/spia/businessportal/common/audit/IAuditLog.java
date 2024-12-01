/**
 * 
 */
package com.spia.businessportal.common.audit;

/**
 * @author darian
 * Interfaz que debe implementar un objeto para ser auditable
 */
public interface IAuditLog {
	
	public Long getId();	
	public String getLogDetail();
	public String getClassName();
}
