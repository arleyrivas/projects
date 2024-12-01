
package com.spia.businessportal.common.utils;

import com.spia.businessportal.constant.ChractersConstat;
import com.spia.businessportal.constant.GeneralConstant;

public class StringUtil {

	/**
	 * Decofica un string de base64 y remmplaza qutia los carateres "
	 * 
	 * @param strEncodedBase64
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-27
	 */
	public static String getTextByBase64Decoded(String strEncodedBase64, String charParam) {

		String strDecoded = EncoderDecoder.decodeBase64(strEncodedBase64);
		return StringUtil.processTextJson(strDecoded, charParam);
	}

	/**
	 * Reemplaza los carateres " para que no incluyan en los siguientesd Request
	 * 
	 * @param strJson
	 * @param charParam
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-08-27
	 */
	public static String processTextJson(String strJson, String charParam) {
		String processedJson;

		if (strJson == null || strJson.equals(GeneralConstant.EMPTY_STRING)) {
			return GeneralConstant.EMPTY_STRING;
		}

		processedJson = strJson.replace(ChractersConstat.CHAR_QUOTATION_MARKS, charParam);
		processedJson = processedJson.replace("null", charParam + charParam);
		return processedJson;

	}

}
