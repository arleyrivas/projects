package com.spia.businessportal.backend.security;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.jaas.AuthorityGranter;

import com.spia.businessportal.backend.bo.SecurityEsbBO;
import com.spia.businessportal.web.auth.Login;
import com.spia.businessportal.web.auth.UserPrincipal;
import com.spia.entity.entities.login.ldap.CompanyTypeDTO;
import com.spia.services.security.esb.entities.Privilege;
import com.spia.services.security.esb.entities.SecurityEsbResponse;

import ar.com.fluxit.framework.common.exception.BusinessException;


public class RoleGranter implements AuthorityGranter {

	// @Autowired
	// private SecurityEsbBO<SecurityEsbResponse<Privilege>> securityEsbBO;

	@Autowired
	private SecurityEsbBO<SecurityEsbResponse> securityEsbBO;

	private static final Log LOG = LogFactory.getLog(Login.class);

	public Set<String> grant(Principal principal) {
		LOG.info("4.grant");
		if (principal.getName().equals("Roles")) {
			this.getSecurityEsbBO().setClazz(SecurityEsbResponse.class);
			SecurityEsbResponse<Privilege> o = new SecurityEsbResponse<Privilege>();
			ArrayList<String> roles = new ArrayList<String>();
			try {
				UserPrincipal rolesRequest = new UserPrincipal();
				rolesRequest = (UserPrincipal) principal;

				for (CompanyTypeDTO str : rolesRequest.getMembers()) {
					roles.add(str.getCompanyTypeId());
				}

				o = securityEsbBO.getPrivileges(roles);

			} catch (BusinessException e) {
				e.printStackTrace();
			}
			for (Privilege p : (List<Privilege>) o.getResult()) {
				if (!roles.contains(p.getPrivilegeId())) {
					roles.add(p.getPrivilegeId());
				}
			}
			return new HashSet<String>(roles);
		}
		return null;

	}


	/**
	 * @return the securityEsbBO
	 */
	public SecurityEsbBO<SecurityEsbResponse> getSecurityEsbBO() {
		return securityEsbBO;
	}

	/**
	 * @param securityEsbBO the securityEsbBO to set
	 */
	public void setSecurityEsbBO(SecurityEsbBO<SecurityEsbResponse> securityEsbBO) {
		this.securityEsbBO = securityEsbBO;
	}

}