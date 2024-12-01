package com.spia.businessportal.common.audit;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.spia.businessportal.common.audit.AuditService;

/**
 * @author Roger
 * 
 */
@Aspect
//@Component
public class AuditAdvice {

//	@Autowired
	private AuditService auditService;

	/**
	 * Advice for auditing a user's visit to a page. The rule is that the Before annotation
	 * applies to any method in any class in the com.captaindebug.audit.controller package
	 * where the class name ends in 'Controller' and the method is annotated by @Auditable.
	 * 
	 * @param auditAnnotation
	 *            Auditable annotation holds the name of the screen we're auditing.
	 */
	@Before("execution(* *.*(..)) && @annotation(auditable) ")
//	@Before("@within(Auditable) && @annotation(auditable) ")
//	@Pointcut("@annotation(auditable)")
	public void auditScreen(JoinPoint joinPoint,Auditable auditable	) {
		System.out.println("AUDITORÍA");
		auditService.audit(auditable.value());
	}
}
