/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  12 de abr. de 2016 - 4:42:43 p. m.
 */
package com.spia.businessportal.common.entities;

import java.util.ArrayList;
import java.util.List;

import com.spia.services.entities.billing.Invoice;

/**
 * @author leandro
 *
 */
public class CachedInvoices {

	private static List<Invoice> invoices;

	public static List<Invoice> getInvoices() {
		return invoices;
	}

	public static void setInvoices(List<Invoice> invoices) {
		CachedInvoices.invoices = invoices;
	}
	
	public static List<Invoice> getSubList(int page, int ammount){
		List<Invoice> invoicesSublist = new ArrayList<Invoice>();
		int fromIndex = 0;
		if(page > 0){
			fromIndex = (page-1)*ammount;
		}else{
			fromIndex = page*ammount;
		}
		int toIndex = invoices.size();
		if(fromIndex < toIndex){
			if(toIndex > fromIndex+ammount){
				toIndex = fromIndex+ammount;
			}
			invoicesSublist = invoices.subList(fromIndex, toIndex);
		}
		return invoicesSublist;
	}
	
}
