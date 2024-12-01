package com.spia.businessportal.constant;

public class GeneralConstant {

	public static final String EMPTY_STRING = "";

	public static final String SUCCESSFUL_PAYMENT_RECORD = "0";

	/**
	 * http://spia.assertsolutions.com/service
	 * 
	 */
	public static final String SPIA_ASSERT_SERVICES_ROUTE = "http://spia.assertsolutions.com/service";

	/**
	 * application/json; charset=UTF-8
	 */
	public static final String JSON_CONTENT_TYPE = "application/json; charset=UTF-8";

	/**
	 * Access-Control-Allow-Origin
	 */
	public static final String ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";

	/**
	 * Access-Control-Allow-Headers
	 */
	public static final String ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers";

	/**
	 * origin, content-type, accept, authorization
	 */
	public static final String ORIGIN_CONTENT_ACCEPT_AUTH = "origin, content-type, accept, authorization";

	/**
	 * Access-Control-Allow-Credentials
	 */
	public static final String ACCESS_CONTROL_ALLOW_CREDENTIALS = "Access-Control-Allow-Credentials";

	/**
	 * Access-Control-Allow-Methods
	 */
	public static final String ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods";

	/**
	 * GET, POST, PUT, DELETE, OPTIONS, HEAD
	 */
	public static final String GET_POST_PUT_DELETE_OPTIONS_HEAD = "GET, POST, PUT, DELETE, OPTIONS, HEAD";

	/**
	 * Access-Control-Max-Age
	 */
	public static final String ACCESS_CONTROL_MAX_AGE = "Access-Control-Max-Age";

	/**
	 * 1209600
	 */
	public static final String ACCESS_CONTROL_MAX_AGE_VALUE = "1209600";

	/**
	 * PROPERTY
	 */

	/**
	 * Property :: countryCode
	 */
	public static final String EXCHANGE_PROPERTY_COUNTRY_CODE = "countryCode";

	/**
	 * Property :: cellPhoneNumber
	 */
	public static final String EXCHANGE_PROPERTY_CELL_PHONE_NUMBER = "cellPhoneNumber";

	/**
	 * Property :: message
	 */
	public static final String EXCHANGE_PROPERTY_MESSAGE = "message";

	/**
	 * Property :: operator
	 */
	public static final String EXCHANGE_PROPERTY_OPERATOR = "operator";

	/**
	 * Property :: from
	 */
	public static final String EXCHANGE_PROPERTY_FROM = "from";

	/**
	 * Property :: encoding
	 */
	public static final String EXCHANGE_PROPERTY_ENCODING = "encoding";

	/**
	 * Property :: error
	 */
	public static final String EXCHANGE_PROPERTY_ERROR = "executeWithError";

	/**
	 * Property :: Error message
	 */
	public static final String EXCHANGE_PROPERTY_ERROR_MESSAGE = "errorMessage";

	private GeneralConstant() {
		super();
	}

	public static String getEmptyString() {
		return EMPTY_STRING;
	}

	public static String getSpiaAssertServicesRoute() {
		return SPIA_ASSERT_SERVICES_ROUTE;
	}

}
