package com.spia.businessportal.common.utils;

import sun.misc.BASE64Encoder;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

import org.apache.commons.net.util.Base64;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spia.businessportal.common.entities.Documentation;

public class EncoderDecoder {

	/**
	 * 
	 * @param strEncodedBase64
	 * @return
	 */
	public static String decodeBase64(String strEncodedBase64) {
		String strDecodeBase64 = null;
		byte[] byteArray = Base64.decodeBase64(strEncodedBase64.getBytes());
		strDecodeBase64 = new String(byteArray);
		return strDecodeBase64;
	}

	/**
	 * 
	 * @param strDecodedBase64
	 * @return
	 */
	public static String encodeBase64(String strDecodedBase64) {
		String strEncodeBase64 = null;
		byte[] byteArray = Base64.encodeBase64(strDecodedBase64.getBytes());
		strEncodeBase64 = new String(byteArray);
		return strEncodeBase64;
	}

	public static String documentationToStringBase64(String documentation) throws UnsupportedEncodingException {
		String strEncodeBase64 = null;
		byte[] byteArray = Base64.encodeBase64(documentation.getBytes("utf-8"));
		strEncodeBase64 = new String(byteArray);
		return strEncodeBase64;
	}
	
	public static String bse64toDocumentation(String documentation) throws UnsupportedEncodingException {
		String strDecodeBase64 = null;
		byte[] byteArray = Base64.decodeBase64(documentation.getBytes("utf-8"));
		strDecodeBase64 = new String(byteArray);
		return strDecodeBase64;
	}

	public static String getFileStr(String filePath) {
        InputStream in = null;
        byte[] data = null;
        //Read file byte array
        try {
          in = new FileInputStream(filePath);
          data = new byte[in.available()];
          in.read(data);
          in.close();
        } catch (IOException e) {
          e.printStackTrace();
        } finally {
          try {
            in.close();
          } catch (IOException e) {
            e.printStackTrace();
          }
        }
        
        //return Base64.encodeBase64(data);
		//Encoding byte array Base64
		BASE64Encoder encoder = new BASE64Encoder();
		//Returns Base64 encoded byte array string
		return encoder.encode(data);
		//String strEncodeBase64 = new String(data);
		//return strEncodeBase64;
      }

}
