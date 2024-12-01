package com.spia.businessportal.common.entities.dto.autentication.ldap;
import ar.com.fluxit.framework.entities.user.SecuredFrameworkUser;
import java.util.ArrayList;
import java.util.List;
import java.io.Serializable;
import java.util.List;
import ar.com.fluxit.framework.entities.user.PrivilegeDTO;

public class UsuarioLoginDTO implements SecuredFrameworkUser, Serializable {

    private String userName; 
    private String nombres; 
    private String apellidos; 
    private String email; 
    private EmpresaDTO empresa;
    private List<PrivilegeDTO> privileges;
    private boolean passwordExpiring;
    private String password;

    public UsuarioLoginDTO() {
        super();
    }

    public UsuarioLoginDTO(String userName, String nombres, String apellidos, EmpresaDTO empresa, List<PrivilegeDTO> privileges) {
        super();

        this.userName = userName;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.empresa = empresa;
        this.privileges = privileges;
    }

    public String getPassword() {
        return null;
    }

    public boolean getPasswordExpiring() {
        return passwordExpiring;
    }

    public void setPasswordExpiring(boolean passwordExpiring) {
        this.passwordExpiring = passwordExpiring;
    }

    @Override
    public List<PrivilegeDTO> getPrivileges() {
        return privileges;
    }

    @Override
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public EmpresaDTO getEmpresa() {
        return empresa;
    }

    public void setEmpresa(EmpresaDTO empresa) {
        this.empresa = empresa;
    }

    public void setPrivileges(List<PrivilegeDTO> privileges) {
        this.privileges = privileges;
    }
}
