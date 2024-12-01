/**
 * 
 */
package com.spia.businessportal.common.entities;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spia.businessportal.common.audit.IAuditLog;

/**
 * @author diego
 *
 */
public class Quota implements Serializable, IAuditLog {

    private static final long serialVersionUID = 494348018602746213L;
    private static final Log LOG = LogFactory.getLog(Quota.class);

    private String start;
    private String end;
    private int count;
    private int hoursBefore;

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getHoursBefore() {
		return hoursBefore;
	}

	public void setHoursBefore(int hoursBefore) {
		this.hoursBefore = hoursBefore;
	}

	public static List<Quota> getQuotas() {
        List<Quota> quotas = new ArrayList<>();
        Quota q11 = new Quota();
        q11.setStart("00:00");
        q11.setEnd("01:59");

        Quota q22 = new Quota();
        q22.setStart("02:00");
        q22.setEnd("03:59");

        Quota q33 = new Quota();
        q33.setStart("04:00");
        q33.setEnd("05:59");

        Quota q1 = new Quota();
        q1.setStart("06:00");
        q1.setEnd("07:59");

        Quota q2 = new Quota();
        q2.setStart("08:00");
        q2.setEnd("09:59");

        Quota q3 = new Quota();
        q3.setStart("10:00");
        q3.setEnd("11:59");

        Quota q4 = new Quota();
        q4.setStart("12:00");
        q4.setEnd("13:59");

        Quota q5 = new Quota();
        q5.setStart("14:00");
        q5.setEnd("15:59");

        quotas.add(q11);
        quotas.add(q22);
        quotas.add(q33);
        quotas.add(q1);
        quotas.add(q2);
        quotas.add(q3);
        quotas.add(q4);
        quotas.add(q5);
        return quotas;
    }

    @Override
    public Long getId() {
        return null;
    }

    @JsonIgnore
    @Override
    public String getLogDetail() {

        StringBuilder sb = new StringBuilder();
        Field[] fields = this.getClass().getDeclaredFields();
        for (Field field : fields) {
            try {
                if (field.get(this) != null) {
                    sb.append(field.getName()).append(":").append(field.get(this).toString()).append("\n");
                }
            } catch (IllegalArgumentException | IllegalAccessException e) {
                LOG.error(e.getStackTrace());
            }
        }
        return sb.toString();
    }

    @JsonIgnore
    @Override
    public String getClassName() {
        return this.getClass().getName();
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((end == null) ? 0 : end.hashCode());
        result = prime * result + ((start == null) ? 0 : start.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Quota other = (Quota) obj;
        if (end == null) {
            if (other.end != null)
                return false;
        } else if (!end.equals(other.end))
            return false;
        if (start == null) {
            if (other.start != null)
                return false;
        } else if (!start.equals(other.start))
            return false;
        return true;
    }

    public static final Comparator<Quota> COMPARE_BY_START_TIME = new Comparator<Quota>() {
        public int compare(Quota q1, Quota q2) {
            return q1.getStart().compareTo(q2.getStart());
        }
    };
}
