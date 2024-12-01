package com.spia.businessportal.common.utils;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.net.util.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class AESEncryptionUtil {

    private static final Log LOG = LogFactory.getLog(AESEncryptionUtil.class);

    public static AESEncryptionUtil instance = null;
	public String initVector;
	public String key;


    public AESEncryptionUtil(String initVector, String key){
        this.initVector = initVector;
        this.key = key;
    }


    public static AESEncryptionUtil getInstance(String initVector, String key){
		if(instance == null){
			instance = new AESEncryptionUtil(initVector, key);
		}
		return instance;
	}

	public String encrypt(String value, String url) {
        LOG.warn(url);
        LOG.warn(value);

		try {
			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
			SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");
			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, skeySpec, iv);
			byte[] encrypted = cipher.doFinal(value.getBytes());
			String encryptedBase64 = Base64.encodeBase64String(encrypted);

			return encryptedBase64;
		} catch (Exception ex) {
			System.out.println("error: " + ex.getStackTrace());
		}

		return null;
	}

	public String decrypt(String encryptedBase64, String url) {
		try {
			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
			SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");
			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			cipher.init(Cipher.DECRYPT_MODE, skeySpec, iv);
			byte[] decrypted = cipher.doFinal(Base64.decodeBase64(encryptedBase64));

			String result = new String(decrypted);

			LOG.warn(url);
        	LOG.warn(result);

			return result;
		} catch (Exception ex) {
			System.out.println("error: " + ex.getStackTrace());
		}

		return null;
	}
}