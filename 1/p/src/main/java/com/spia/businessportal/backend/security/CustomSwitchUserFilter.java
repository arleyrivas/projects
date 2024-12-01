package com.spia.businessportal.backend.security;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.AuthenticationDetailsSource;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.web.authentication.switchuser.AuthenticationSwitchUserEvent;
import org.springframework.security.web.authentication.switchuser.SwitchUserAuthorityChanger;
import org.springframework.security.web.authentication.switchuser.SwitchUserFilter;
import org.springframework.security.web.authentication.switchuser.SwitchUserGrantedAuthority;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.spia.businessportal.backend.bo.SecurityEsbBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.common.audit.AuditLogUtil;
import com.spia.businessportal.common.audit.IAuditLog;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.dto.PrivilegioResponseDTO;
import com.spia.services.security.esb.entities.Privilege;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.services.security.esb.entities.UserValidation;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import com.spia.entity.entities.login.ldap.CompanyTypeDTO;

import ar.com.fluxit.framework.entities.user.PrivilegeDTO;
import ar.com.fluxit.framework.common.exception.BusinessException;
import ar.com.fluxit.framework.security.user.FluxitSecurityUser;
import com.spia.businessportal.backend.bo.impl.UserBOJAASImpl;
import com.google.gson.Gson;

public class CustomSwitchUserFilter extends SwitchUserFilter {

    private static final Log LOG = LogFactory.getLog(CustomSwitchUserFilter.class);

    @Autowired
    private UserBO userBO;
    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private SecurityEsbBO<SecurityEsbResponse<Privilege>> securityEsbBO;

    private ApplicationEventPublisher eventPublisher;
    private AuthenticationDetailsSource authenticationDetailsSource;

    private SwitchUserAuthorityChanger switchUserAuthorityChanger;
    @Autowired
    private UserDetailsService userDetailsService;

    public CustomSwitchUserFilter() {
        super();
        this.authenticationDetailsSource = new WebAuthenticationDetailsSource();
    }

    protected Authentication attemptSwitchUser(HttpServletRequest request) throws AuthenticationException {
        Authentication current = SecurityContextHolder.getContext().getAuthentication();

        UsernamePasswordAuthenticationToken targetUserRequest = null;

        UserBOJAASImpl userBOJAASImpl = new UserBOJAASImpl();

        String companyId = request.getParameter("companyId");
        String companyname = request.getParameter("companyname");
        String type = request.getParameter("companyType");
        String typeName = request.getParameter("companyTypeName");
        Boolean agentAndtTruck = false;
        Boolean isMemp = true;

        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
                .currentRequestAttributes();
        HttpSession session = servletRequestAttributes.getRequest().getSession();

        UsuarioLoginDTO newCurrentUser = (UsuarioLoginDTO) session.getAttribute("backupUser");
        List<PrivilegeDTO> permsUser = (List<PrivilegeDTO>) newCurrentUser.getPrivileges();
        Integer companyTypeQuantity = newCurrentUser.getEmpresa().getTiposEmpresas().size();

        if(companyTypeQuantity > 1) {
        	isMemp = false;
        }
        
        if (companyId == null) {
            companyId = "";
        }

        // if (this.logger.isDebugEnabled()) {
        //     this.logger.debug("Attempt to switch to user [" + companyId + "]");
        // }

        UserDetails targetUser = new FluxitSecurityUser(newCurrentUser, null);
        UsuarioLoginDTO user = null;

        try {
            user = (UsuarioLoginDTO) ((FluxitSecurityUser) targetUser).getFrameworkUser();
            user.getEmpresa().setCompanyName(companyname);
            user.getEmpresa().setId(companyId);
            user.setPrivileges(new ArrayList<>());

            List<Privilege> privileges = new ArrayList<Privilege>();

            if (isMemp) {
            	privileges = (List<Privilege>) securityEsbBO.getCompanyTypePrivilegesByMemp(type).getResult();
            } else {
            	privileges = (List<Privilege>) securityEsbBO.getCompanyTypePrivileges(type).getResult();
            }

            LOG.info("> privileges CustomSwitchUser");
            LOG.info(privileges);

            PrivilegeDTO per;
            List<String> listPermsUser = new ArrayList<String>();
            List<PrivilegeDTO> listPrivilegeUser = new ArrayList<PrivilegeDTO>();


            List<String> listPrivileges = new ArrayList<String>();

            for(PrivilegeDTO perm : permsUser) {
            	LOG.info("privilegio usuario " + perm.getPrivilegeId());
            	if(!listPermsUser.contains(perm.getPrivilegeId())) {
            		listPermsUser.add(perm.getPrivilegeId());
            		listPrivilegeUser.add(perm);
            	LOG.info("se añade privilegio unico " + perm.getPrivilegeId());
            	}

        		if (perm.getPrivilegeId().startsWith("ADM")) {//Agrego los privilegios de administrador en caso de tenerlos
                     user.getPrivileges().add(perm);
                     listPrivileges.add(perm.getPrivilegeId());
                     LOG.info("se añade privilegio a user " + perm.getPrivilegeId());
        		}
        	}

            if (companyTypeQuantity > 1) {
                for(PrivilegeDTO privilege : listPrivilegeUser) {
                    for(Privilege permission : privileges) {
                    	LOG.info("privilegio Usuario " + privilege.getPrivilegeId());
                    	LOG.info("privilegio Empresa " + permission.getPrivilegeId());
                        if (!listPrivileges.contains(permission.getPrivilegeId()) && privilege.getPrivilegeId().equalsIgnoreCase(permission.getPrivilegeId())) {
                            user.getPrivileges().add(privilege);
                            listPrivileges.add(privilege.getPrivilegeId());
                            LOG.info("se añade privilegio a user " + privilege.getPrivilegeId());
                        }
                    }
                }
            } else {

            	for (Privilege p : privileges) {
                    if(!listPrivileges.contains(p.getPrivilegeId())) {
	            		per = new PrivilegeDTO();
	                    per.setPrivilegeId(p.getPrivilegeId());
	                    per.setNotificable(false);
	                    per.setDobleFactorAutenticacion(false);
	                    per.setDiasRestriccion(null);

	                    user.getPrivileges().add(per);
	                    listPrivileges.add(per.getPrivilegeId());
                    }
                }
            }
        } catch (BusinessException e) {
            LOG.error(e.getStackTrace());
        }

        List<CompanyTypeDTO> baseCompanyType = user.getEmpresa().getTiposEmpresas();

        if(baseCompanyType.size() > 1) {
            for(CompanyTypeDTO tiposEmpresa : baseCompanyType) {
                if(tiposEmpresa.getCompanyTypeId().equalsIgnoreCase(type)) {
                    tiposEmpresa.setSelected(true);
                } else {
                    tiposEmpresa.setSelected(false);
                }
            }
        } else {
            CompanyTypeDTO newCompanyType = new CompanyTypeDTO();

            newCompanyType.setCompanyTypeId(type);
            newCompanyType.setCompanyTypeName(typeName);
            newCompanyType.setSelected(true);

            user.getEmpresa().getTiposEmpresas().remove(0);
            user.getEmpresa().getTiposEmpresas().add(newCompanyType);
        }

        session.setAttribute("user", user);

        targetUserRequest = this.createSwitchUserToken(request, targetUser);

        if (this.logger.isDebugEnabled()) {
            this.logger.debug("Switch User Token [" + targetUserRequest + "]");

        }

        if (this.eventPublisher != null) {
            this.eventPublisher.publishEvent(new AuthenticationSwitchUserEvent(
                    SecurityContextHolder.getContext().getAuthentication(), targetUser));

        }

//        IAuditLog entity = (IAuditLog) user;
//        AuditLogUtil.logIt("IMPERSONATE", entity, user, sessionFactory);

        // userBOJAASImpl.setUserPrincipal(user);

        return targetUserRequest;
    }

    protected Authentication attemptExitUser(HttpServletRequest request)
            throws AuthenticationCredentialsNotFoundException {
        Authentication current = SecurityContextHolder.getContext().getAuthentication();
        UserBOJAASImpl userBOJAASImpl = new UserBOJAASImpl();

        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
                .currentRequestAttributes();
        HttpSession session = servletRequestAttributes.getRequest().getSession();

        UsuarioLoginDTO impersonatedBackupUser = userBOJAASImpl.getBackupUser();
        LOG.info("> impersonatedBackupUser");
        LOG.info(new Gson().toJson(impersonatedBackupUser));
        UsuarioLoginDTO impersonatedUser = userBOJAASImpl.getCurrentUser();

        User u = new User();

        u.setCompanyName(impersonatedUser.getEmpresa().getCompanyName());
        u.setEmail(impersonatedUser.getEmail());
        u.setN4UserId(impersonatedUser.getEmpresa().getId());
        u.setNit(impersonatedUser.getEmpresa().getId());

        IAuditLog entity = (IAuditLog) u;
        AuditLogUtil.logIt("EXIT_IMPERSONATE", entity, u, sessionFactory);
        session.removeAttribute("user");

        List<PrivilegeDTO> a = (List<PrivilegeDTO>) session.getAttribute("priusnotaatt");
        LOG.info("> a attemptExitUser");
        LOG.info(new Gson().toJson(a));
        LOG.info(a);

        UsuarioLoginDTO newCurrentUser = (UsuarioLoginDTO) session.getAttribute("backupUser");
        newCurrentUser.setPrivileges(a);

        if(newCurrentUser.getEmpresa().getTiposEmpresas().size() > 1) {
            for (CompanyTypeDTO tipoEmpresa : newCurrentUser.getEmpresa().getTiposEmpresas()) {
                tipoEmpresa.setSelected(false);
            }
        }

        LOG.info("> newCurrentUser attemptExitUser");
        LOG.info(new Gson().toJson(newCurrentUser));
        session.setAttribute("user", newCurrentUser);

        // Checkings when switch back called.
        return super.attemptExitUser(request);
    }

    UsernamePasswordAuthenticationToken createSwitchUserToken(HttpServletRequest request, UserDetails targetUser) {
        Authentication currentAuth = SecurityContextHolder.getContext().getAuthentication();

        GrantedAuthority switchAuthority = new SwitchUserGrantedAuthority("ROLE_PREVIOUS_ADMINISTRATOR", currentAuth);

        Collection orig = targetUser.getAuthorities();
        LOG.info("3.createSwitchUserToken");
        if (this.switchUserAuthorityChanger != null) {
            orig = this.switchUserAuthorityChanger.modifyGrantedAuthorities(targetUser, currentAuth, orig);

        }

        List newAuths = new ArrayList(orig);
        newAuths.add(switchAuthority);

        UsernamePasswordAuthenticationToken targetUserRequest = new UsernamePasswordAuthenticationToken(targetUser,
                targetUser.getPassword(), newAuths);

        targetUserRequest.setDetails(this.authenticationDetailsSource.buildDetails(request));

        return targetUserRequest;
    }

    public UserBO getUserBO() {
        return userBO;
    }

    public void setUserBO(UserBO userBO) {
        this.userBO = userBO;
    }

    public ApplicationEventPublisher getEventPublisher() {
        return eventPublisher;
    }

    public void setEventPublisher(ApplicationEventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }

    public AuthenticationDetailsSource getAuthenticationDetailsSource() {
        return authenticationDetailsSource;
    }

    public void setAuthenticationDetailsSource(AuthenticationDetailsSource authenticationDetailsSource) {
        this.authenticationDetailsSource = authenticationDetailsSource;
    }

    public SwitchUserAuthorityChanger getSwitchUserAuthorityChanger() {
        return switchUserAuthorityChanger;
    }

    public void setSwitchUserAuthorityChanger(SwitchUserAuthorityChanger switchUserAuthorityChanger) {
        this.switchUserAuthorityChanger = switchUserAuthorityChanger;
    }

    /**
     * @return the securityEsbBO
     */
    public SecurityEsbBO<SecurityEsbResponse<Privilege>> getSecurityEsbBO() {
        return securityEsbBO;
    }

    /**
     * @param securityEsbBO
     *            the securityEsbBO to set
     */
    public void setSecurityEsbBO(SecurityEsbBO<SecurityEsbResponse<Privilege>> securityEsbBO) {
        this.securityEsbBO = securityEsbBO;
    }

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

}
