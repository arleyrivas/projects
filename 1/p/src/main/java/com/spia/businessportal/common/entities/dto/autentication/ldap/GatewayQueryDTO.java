package com.spia.businessportal.common.entities.dto.autentication.ldap;

public class GatewayQueryDTO {

    private String username;
    private String password;
    private String appname;
    private String ip;

    public GatewayQueryDTO() {
        super();
    }

    public GatewayQueryDTO(String username, String password, String appname, String ip) {
        this.username = username;
        this.password = password;
        this.appname = appname;
        this.ip = ip;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAppname() {
        return appname;
    }

    public void setAppname(String appname) {
        this.appname = appname;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }
}