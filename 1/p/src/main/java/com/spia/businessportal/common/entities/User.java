/**
 * 
 */
package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spia.businessportal.common.audit.IAuditLog;
import com.spia.entity.entities.login.ldap.EmpresaDTO;

import ar.com.fluxit.framework.entities.user.SecuredFrameworkUser;

/**
 * @author diego
 *
 */
public class User implements IAuditLog{
    private static final Log LOG = LogFactory.getLog(User.class);
    /* 
        public static final String COMPANY_TYPE_TRUCK = "transportistasTerrestres";
        public static final String COMPANY_TYPE_AGENT = "agenciaAduana";
        public static final String COMPANY_TYPE_CONSIGNEE = "importador";
        public static final String COMPANY_TYPE_SHIPPER = "exportador";
        public static final String COMPANY_TYPE_TERMINAL = "terminalMaritimo"; 
    */
    public static final String COMPANY_TYPE_TRUCK = "09";
    public static final String COMPANY_TYPE_AGENT = "06";
    public static final String COMPANY_TYPE_CUSTOMER = "05";
    public static final String COMPANY_TYPE_TERMINAL = "100";
    public static final String COMPANY_TYPE_TEMPORAL = "300";

    private Long id;
    private String userName;
    @JsonIgnore
    private String password;
    private String name;
    private String lastName;
    private String idDocument;
    private String email;
    private String companyName;
    private String n4UserId;
    private boolean active = true;
    private String nit;
    private String description;
    private EmpresaDTO empresa;
    @JsonIgnore
    private String allowStaffAnotherAgency;

    private UsuarioLoginDTO usuarioLoginDTO;



    public User(User user) {
        super();
        this.id = user.getId();
        this.userName = user.getUserName();
        this.password = user.getPassword();
        this.name = user.getName();
        this.lastName = user.getLastName();
        this.idDocument = user.getIdDocument();
        this.email = user.getEmail();
        this.companyName = user.getCompanyName();
        this.n4UserId = user.getN4UserId();
        this.active = user.isActive();
        this.nit = user.getNit();
        this.description = user.getDescription();
        this.allowStaffAnotherAgency = user.getAllowStaffAnotherAgency();
        this.empresa = user.getEmpresa();
        this.usuarioLoginDTO = usuarioLoginDTO;
    }

    public User() {
    }

    public String getUserName() {
        return this.userName;
    }

    public EmpresaDTO getEmpresa() {
        return empresa;
    }

    public void setEmpresa(EmpresaDTO empresa) {
        this.empresa = empresa;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getIdDocument() {
        return idDocument;
    }

    public void setIdDocument(String idDocument) {
        this.idDocument = idDocument;
    }

    public UsuarioLoginDTO getUsuarioLoginDTO() {
        return usuarioLoginDTO;
    }

    public void setUsuarioLoginDTO(UsuarioLoginDTO usuarioLoginDTO) {
        this.usuarioLoginDTO = usuarioLoginDTO;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getN4UserId() {
        return n4UserId;
    }

    public void setN4UserId(String n4UserId) {
        this.n4UserId = n4UserId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }
    

    public String getAllowStaffAnotherAgency() {
		return allowStaffAnotherAgency;
	}

	public void setAllowStaffAnotherAgency(String allowStaffAnotherAgency) {
		this.allowStaffAnotherAgency = allowStaffAnotherAgency;
	}

    public String toString() {
        return getUserName();
    }

    public String getClassName() {
        return this.getClass().getName();
    }

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

    @JsonIgnore
    @Override
    public String getLogDetail() {
        return "";
    }
}
