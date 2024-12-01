package com.spia.businessportal.common.entities;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.spia.businessportal.common.audit.IAuditLog;

public class MdwAuditLog implements IAuditLog {

    private static final Log LOG = LogFactory.getLog(MdwAuditLog.class);

    private String url;
    private String method;
    private String request;
    private String companyName;

    @Override
    public Long getId() {
        return null;
    }

    @Override
    public String getLogDetail() {
        String[] arr = { "hashValue", "truckingCompany", "createdBy" };
        List<String> excludedFields = Arrays.asList(arr);
        StringBuilder sb = new StringBuilder();
        Field[] fields = this.getClass().getDeclaredFields();
        for (Field field : fields) {
            try {
                if (field.get(this) != null && !excludedFields.contains(field.getName()))
                    sb.append(field.getName()).append(":").append(field.get(this).toString()).append("\n");
            } catch (IllegalArgumentException | IllegalAccessException e) {
                LOG.error(e.getStackTrace());
            }
        }
        return sb.toString();
    }

    @Override
    public String getClassName() {
        return this.getClass().getName();
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getRequest() {
        return request;
    }

    public void setRequest(String request) {
        this.request = request;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

}
