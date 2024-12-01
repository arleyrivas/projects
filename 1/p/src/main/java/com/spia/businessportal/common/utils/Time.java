/**
 * 
 */
package com.spia.businessportal.common.utils;

import java.util.Calendar;
import java.util.Date;

/**
 * Clase utilitaria de Time
 * 
 * @author diego
 *
 */
public class Time implements Comparable<Time> {
    private int hour;
    private int minute;

    /**
     * setea la hora y minutos dado el formato de string hora:minuto
     * 
     * @param string
     *            hora:minuto
     */
    public Time(String string) {
        String[] data = string.split(":");
        this.hour = Integer.valueOf(data[0]);
        this.minute = Integer.valueOf(data[1]);
    }

    /**
     * Constructor que setea los valores de hora y minutos.
     * 
     * @param hour
     *            hora
     * @param minute
     *            minuto
     */
    public Time(int hour, int minute) {
        this.hour = hour;
        this.minute = minute;
    }

    /**
     * Suma los minutos (y la hora en caso de ser necesario).
     * 
     * @param minutes
     *            minutos que se van a agregar.
     */
    public void add(int minutes) {
        hour += (minutes / 60);
        minute += (minutes % 60);
    }

    /**
     * Resta los minutos (y la hora en caso de ser necesario).
     * 
     * @param minutes
     *            minutos que se van a restar
     */
    public void subtract(int minutes) {
        hour -= (minutes / 60);
        minute -= (minutes % 60);
        if (minute < 0) {
            hour--;
            minute = 60 + minute;
        }
    }

    public Time addNew(int minutes) {
        Time time = new Time(hour, minute);
        time.add(minutes);
        return time;
    }

    public static String getTime(String string) {
        String[] data = string.split(" ");
        return new Time(data[1].substring(0, 2) + ":" + data[1].substring(2, 4)).toString();
    }

    public static Date getTomorrow() {
        Date now = new Date();
        Calendar cal = Calendar.getInstance();
        cal.setTime(now);
        cal.add(Calendar.DAY_OF_YEAR, 1);
        return cal.getTime();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        if (hour < 10) {
            sb.append("0");
        }
        sb.append(hour).append(":");
        if (minute < 10) {
            sb.append("0");
        }
        sb.append(minute);
        return sb.toString();
    }

    public int minutes() {
        return (hour * 60) + minute;
    }

    @Override
    public int compareTo(Time o) {
        return Integer.valueOf(minutes()).compareTo(o.minutes());
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + hour;
        result = prime * result + minute;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        boolean result = true;

        if (obj == null) {
            result = false;
        } else {
            if (getClass() != obj.getClass()) {
                result = false;
            }
        }
        Time other = (Time) obj;

        if (other != null) {
            if (hour != other.hour) {
                result = false;
            }
            if (minute != other.minute) {
                result = false;
            }
        }
        return result;
    }

}
