package com.spia.businessportal.common.audit;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.springframework.stereotype.Component;


/**
 * Annotation which indicates that a controller needs auditing
 * 
 * @author Roger
 * 
 */
@Component
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE,  ElementType.FIELD,  ElementType.METHOD,  ElementType.PARAMETER, ElementType.CONSTRUCTOR,  ElementType.LOCAL_VARIABLE,  ElementType.ANNOTATION_TYPE,  ElementType.PACKAGE})
@Documented
public @interface Auditable {

	String value();
}
