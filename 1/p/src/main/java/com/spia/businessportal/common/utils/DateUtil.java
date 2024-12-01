package com.spia.businessportal.common.utils;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.spia.businessportal.constant.BusinessPortalConstant;
import com.spia.businessportal.constant.DateFormatConstant;

public class DateUtil {

	private static final Log LOG = LogFactory.getLog(DateUtil.class);

	/**
	 * Return name of current day in String
	 * 
	 * @return {@link String}
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-03
	 */
	public static String getCurrentDay() {

		String currentDay;

		Calendar calendar = Calendar.getInstance();
		int day = calendar.get(Calendar.DAY_OF_WEEK);

		switch (day) {
		case Calendar.SUNDAY:
			currentDay = DateFormatConstant.SUNDAY;
			break;
		case Calendar.MONDAY:
			currentDay = DateFormatConstant.MONDAY;
			break;
		case Calendar.TUESDAY:
			currentDay = DateFormatConstant.TUESDAY;
			break;
		case Calendar.WEDNESDAY:
			currentDay = DateFormatConstant.WEDNESDAY;
			break;
		case Calendar.THURSDAY:
			currentDay = DateFormatConstant.THURSDAY;
			break;
		case Calendar.FRIDAY:
			currentDay = DateFormatConstant.FRIDAY;
			break;
		case Calendar.SATURDAY:
			currentDay = DateFormatConstant.SATURDAY;
			break;
		default:
			currentDay = BusinessPortalConstant.EMPTY_STR;
			break;

		}
		LOG.info("Current day is: " + currentDay);
		return currentDay;

	}

	/**
	 * Return current miliatry hour (00-23) in String
	 * 
	 * @return {@link String}
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-03
	 */
	public static String getCurrentHour() {

		String currentHour;

		Calendar rightNow = Calendar.getInstance();
		int hour = rightNow.get(Calendar.HOUR_OF_DAY);

		if (hour > 10) {
			currentHour = "0" + hour;
		} else {
			currentHour = String.valueOf(hour);
		}

		return currentHour;

	}

	/**
	 * Return name of current privilege day in String
	 * 
	 * @return {@link String}}
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-03
	 */
	public static String getPrivilegeDay() {

		String currentPrivilegeDay;

		String currentDay = DateUtil.getCurrentDay();

		if (currentDay.equals(DateFormatConstant.SATURDAY)) {
			currentPrivilegeDay = DateFormatConstant.PRIV_SATURDAY;
		} else if (currentDay.equals(DateFormatConstant.SUNDAY)) {
			currentPrivilegeDay = DateFormatConstant.PRIV_SUNDAY;
		} else {
			currentPrivilegeDay = DateFormatConstant.PRIV_MONDAY_TO_FRIDAY;
		}

		LOG.info("Current privilege day is: " + currentPrivilegeDay);
		return currentPrivilegeDay;

	}

	/**
	 * Return if current hour is between a range hours
	 * 
	 * @param startHour
	 * @param finalHour
	 * @return {@link Boolean}
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-07-03
	 */
	public static Boolean isCurrenHourBetween(String startHour, String finalHour) {

		Calendar rightNow = Calendar.getInstance();
		int currenthour = rightNow.get(Calendar.HOUR_OF_DAY);

		int startHourInt = Integer.valueOf(startHour);
		int finalHourInt = Integer.valueOf(finalHour);

		if (currenthour >= startHourInt && currenthour <= finalHourInt) {
			return true;
		}

		return false;
	}

	/**
	 * Returns the current date in format "yyyy-MM-dd HH:mm:ss:SSS"
	 * 
	 * @param format
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-21
	 */
	public static String getCurrentDateyyyMMddHHmmssSSS() {
		Date currentDate = new Date();
		return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SSS").format(currentDate);
	}

}
