/**
 * 
 */
package com.spia.businessportal.common.entities;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spia.businessportal.common.audit.IAuditLog;

/**
 * @author diego
 *
 */
public class AppointmentQuota implements Serializable, IAuditLog {

    private static final long serialVersionUID = 494348018602746213L;
    private static final Log LOG = LogFactory.getLog(AppointmentQuota.class);

    private String date;
    private List<Quota> quotas;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public List<Quota> getQuotas() {
        return quotas;
    }

    public void setQuotas(List<Quota> quotas) {
        this.quotas = quotas;
    }

    public Quota quota(String startTime) {
        if (quotas != null) {
            for (Quota quota : quotas) {
                if (startTime.equals(quota.getStart())) {
                    return quota;
                }
            }
        }
        return null;
    }

    public void removeNotAvailable() {
        if (quotas != null) {
            Iterator<Quota> it = quotas.iterator();
            while (it.hasNext()) {
                if (it.next().getCount() <= 0) {
                    it.remove();
                }
            }
        }
    }

    public void removeNotAvailable(int todayHour) {
        if (quotas != null) {
            Iterator<Quota> it = quotas.iterator();
            while (it.hasNext()) {
                if (Integer.parseInt(it.next().getStart().split(":")[0]) <= todayHour) {
                    it.remove();
                }
            }
        }
    }

    public void removeOld(int todayHour, int todayMinute) {
        List<Quota> remove = new ArrayList<>();
        for (int i = 0; i < quotas.size(); i++) {
            Quota q = quotas.get(i);
            String[] arrStart = q.getStart().split(":");
            int quotaHour = Integer.parseInt(arrStart[0]);
            int quotaMinute = Integer.parseInt(arrStart[1]);
            if (todayHour > quotaHour || (todayHour == quotaHour && todayMinute > quotaMinute)) {
                // Guardo todos los indices que voy a borrar (ya que si borro acá se confunde la iteración).
                remove.add(q);
            }
        }
        for (Quota q : remove) {
            quotas.remove(q);
        }
    }

    public static List<AppointmentQuota> getAppointmentQuotas() {
        List<AppointmentQuota> quotas = new ArrayList<>();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String day[] = formatter.format(new Date()).split("-");
        int startDay = Integer.valueOf(day[0]).intValue();
        for (int i = 0; i <= 16; i++) {
            AppointmentQuota a = new AppointmentQuota();
            a.setDate(String.valueOf(startDay) + "-09-2015");
            startDay++;
            a.setQuotas(Quota.getQuotas());
            quotas.add(a);
        }
        return quotas;
    }

    @Override
    public Long getId() {

        return null;
    }

    public static final Comparator<AppointmentQuota> COMPARE_BY_DATE = new Comparator<AppointmentQuota>() {
        public int compare(AppointmentQuota a1, AppointmentQuota a2) {
            return a1.getDate().compareTo(a2.getDate());
        }
    };

    @JsonIgnore
    @Override
    public String getLogDetail() {
        StringBuilder sb = new StringBuilder();
        Field[] fields = this.getClass().getDeclaredFields();
        for (Field field : fields) {
            try {
                if (field.get(this) != null

                )
                    sb.append(field.getName()).append(":").append(field.get(this).toString()).append("\n");
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

}
