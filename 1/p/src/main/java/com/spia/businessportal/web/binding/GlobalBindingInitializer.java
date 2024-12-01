/**
 * 
 */
package com.spia.businessportal.web.binding;

import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.InitBinder;

/**
 * @author diego
 *
 */
@ControllerAdvice
public class GlobalBindingInitializer {
	
	
	/**
	 * 
	 */
	public GlobalBindingInitializer() {
		super();
	}

	@InitBinder
	public void binder(WebDataBinder binder) {
		binder.registerCustomEditor(String.class, new StringTrimmerEditor(true));
	}

}
