package com.spia.businessportal.web.controller;

import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.jms.ConnectionFactory;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.commons.net.util.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ibm.icu.util.Calendar;
import com.spia.businessportal.common.entities.JwtUserMobileTokenInfo;
import com.spia.businessportal.common.entities.JwtUserTokenInfo;
import com.spia.businessportal.common.entities.JwtUserTokenInfoMobile;
import com.spia.businessportal.common.entities.ValidateReCaptchaResponse;
import com.spia.businessportal.common.entities.dto.JwtUserTokenResponseDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.RecoveryPasswordAttemptSingleton;
import com.spia.services.security.esb.entities.ForgotPasswordRequest;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.services.security.esb.entities.UserValidation;

import ar.com.fluxit.framework.common.exception.BusinessException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RequestMapping("/api/user-activate-token")
@Controller
public class JwtUserActivateTokenController extends AbstractController {

	@Value("#{jwt['jwt.secret']}")
	private String secret = "mySecret";
	@Value("#{jwt['jwt.expirationTime']}")
	private String expirationHours = "expirationTime";
	private static final Log LOG = LogFactory.getLog(JwtUserActivateTokenController.class);
	//////// encriptar password para esb
	@Value("#{esb['esb.password.key']}")
	private String key;
	@Value("#{esb['esb.password.initialVector']}")
	private String initVector;
	@Value("#{showCaptchaAttempts['recaptcha.site-key']}")
	private String siteKey;
	@Value("#{showCaptchaAttempts['recaptcha.secret-key']}")
	private String recaptchaSecretKey;
	@Value("#{showCaptchaAttempts['recaptcha.show-captcha-attempts']}")
	private int showCaptchaAttempts;
	@Value("#{showCaptchaAttempts['recaptcha.url']}")
	private String recaptchaUrl;
	@Autowired
	private RestTemplate restTemplate;
	@Value("#{templates['changeMobile']}")
	private String changeMobile;
	@Value("#{templates['changeMobileAdmin']}")
	private String changeMobileAdmin;



	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getInitVector() {
		return initVector;
	}

	public void setInitVector(String initVector) {
		this.initVector = initVector;
	}

	public int getShowCaptchaAttempts() {
		return showCaptchaAttempts;
	}

	public void setShowCaptchaAttempts(int showCaptchaAttempts) {
		this.showCaptchaAttempts = showCaptchaAttempts;
	}

	public RestTemplate getRestTemplate() {
		return restTemplate;
	}

	public void setRestTemplate(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	@RequestMapping(value = "/encryptTest/{data}", method = RequestMethod.GET)
	public @ResponseBody String[] get(@PathVariable String data) {
		String[] result = { encrypt(data), decrypt(encrypt(data)), decrypt(data) };
		return result;
	}

	@RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> generateToken(HttpServletRequest request,
			@RequestBody JwtUserMobileTokenInfo jwtUserMobileTokenInfo) {
		ResponseEntity<?> re = null;
		try {
			Calendar cal = Calendar.getInstance();
			cal.setTime(new Date());
			Claims claims = Jwts.claims().setSubject(jwtUserMobileTokenInfo.getUser());
			claims.put("email", jwtUserMobileTokenInfo.getEmail());
			claims.put("username", jwtUserMobileTokenInfo.getUser());
			claims.put("mobile", jwtUserMobileTokenInfo.getMobile());
			claims.put("password", jwtUserMobileTokenInfo.getPassword());
			claims.put("created", cal.getTime());
			cal.add(Calendar.HOUR_OF_DAY, Integer.parseInt(expirationHours));
			claims.put("expiration", cal.getTime());
			String token = URLEncoder
					.encode(Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512, secret).compact());
			JwtUserTokenResponseDTO response = new JwtUserTokenResponseDTO();
			response.setUrl("http://" + request.getServerName() + ":" + request.getServerPort()
					+ request.getContextPath() + "/api/user-activate-token/change-user-mobile/" + token);
			re = new ResponseEntity<JwtUserTokenResponseDTO>(response, HttpStatus.OK);
		} catch (Exception e) {
			String[] strParams = {};
			String msg = getProperty("Controller.JWTUserController.GENERATE_ERROR", strParams, getApplicationContext());
			ResponseError error = new ResponseError();
			LOG.error(e.getMessage(), e);
			error.setError(e.getMessage());
			error.setMessage(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return re;
	}

	@RequestMapping(value = "/change-user-mobile/{token:.+}", method = RequestMethod.GET)
	public String changeMobile(Model model, RedirectAttributes redirectAttributes,
			@PathVariable("token") String token) {
		String returnPage = "jwt-user-token/activate-user-mobile";
		try {
			Date now = new Date();
			Claims claims = getClaimsFromToken(token);
			if (claims != null) {
				Long expiration = (Long) claims.get("expiration");
				if (expiration >= now.getTime()) {
					String userName = (String) claims.get("username");
					String email = (String) claims.get("email");
					String mobile = (String) claims.get("mobile");
					String password = (String) claims.get("password");
					SecurityEsbResponse<UserValidation> result = this.getSecurityEsbBO().validateUser(email, userName);
					if (result.isSuccess()) {
						model.addAttribute("email", email);
						model.addAttribute("username", userName);
						model.addAttribute("oldMobile", mobile);
						model.addAttribute("token", token);
						model.addAttribute("password", password);
					} else {
						String[] strParams = {};
						String msg = getProperty("Controller.JWTUserController.INVALID_TOKEN", strParams,
								getApplicationContext());
						returnPage = "jwt-user-token/activate-user-mobile";
						model.addAttribute("token", token);
						model.addAttribute("error", result.getError());
						returnPage = "jwt-user-token/tokenerror";
					}
				} else {
					// Pasó la fecha de expiración
					String[] strParams = {};
					String msg = getProperty("Controller.JWTUserController.CHANGE_PASSWORD_DATE_ERROR", strParams,
							getApplicationContext());
					redirectAttributes.addFlashAttribute("error", msg);
					returnPage = "redirect:/index";
				}
			} else {
				// Token inválido
				String[] strParams = {};
				String msg = getProperty("Controller.JWTUserController.INVALID_TOKEN", strParams,
						getApplicationContext());
				redirectAttributes.addFlashAttribute("error", msg);
				returnPage = "redirect:/index";
			}

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			String[] strParams = {};
			String msg = getProperty("Controller.JWTUserController.REDIRECT_CHANGE_PASSWORD_ERROR", strParams,
					getApplicationContext());
			redirectAttributes.addFlashAttribute("error", msg);
			returnPage = "redirect:/index";
		}
		return returnPage;
	}

	@RequestMapping(value = "/confirmation/", method = RequestMethod.POST)
	public String changePasswordConfirmation(HttpServletRequest request, HttpServletResponse response, Model model,
			RedirectAttributes redirectAttributes, @RequestParam("j_mobile") String mobile,
			@RequestParam("j_re_mobile") String reMobile, @RequestParam("j_p") String password,
			@RequestParam("j_re_p") String rePassword, @RequestParam("j_token") String token) {

		String returnPage = "/public/index";
		try {
			Date now = new Date();
			Claims claims = getClaimsFromToken(token);

			if (claims == null) {
				throw new NullPointerException("No se encontró informacion en el token");
			}

			Long expiration = (Long) claims.get("expiration");
			String userName = (String) claims.get("username");
			String email = (String) claims.get("email");
			String originalPassword = (String) claims.get("password");
			model.addAttribute("email", email);
			model.addAttribute("username", userName);

			if (mobile == null || reMobile == null || !mobile.equals(reMobile)) {
				// Numeros de celular no coincide
				String[] strParams = {};
				String msg = getProperty("Controller.JWTUserController.MOBILE_NOT_MATCH", strParams,
						getApplicationContext());
				model.addAttribute("token", token);
				model.addAttribute("error", msg);
				return "jwt-user-token/activate-user-mobile";
			}

			if (expiration < now.getTime()) {
				// Pasó la fecha de expiración
				String[] strParams = {};
				String msg = getProperty("Controller.JWTUserController.CHANGE_PASSWORD_DATE_ERROR", strParams,
						getApplicationContext());
				redirectAttributes.addFlashAttribute("message", msg);
				return "redirect:/index";
			}

			// Valido que coincidan los passwords
			if (password == null || rePassword == null || !password.equals(rePassword)) {
				String[] strParams = {};
				String msg = getProperty("Controller.JWTUserController.PASSWORDS_NOT_MATCH", strParams,
						getApplicationContext());

				model.addAttribute("token", token);
				model.addAttribute("error", msg);
				return "jwt-user-token/activate-user-mobile";
			}

			// Valido contra el esb que exista el usuario.
			SecurityEsbResponse<UserValidation> result = this.getSecurityEsbBO().validateUser(email, userName);
			if (!result.isSuccess()) {
				String[] strParams = {};
				String msg = getProperty("Controller.JWTUserController.INVALID_USER", strParams,
						getApplicationContext());
				model.addAttribute("error", msg + "(" + (result.getError()) + ")");
			}

			if (chagePassword(userName, originalPassword, password, model, redirectAttributes, token) && changeMobile(userName, mobile, model, redirectAttributes, token)) {
				returnPage = "redirect:/index";
			} else {
				returnPage = "jwt-user-token/activate-user-mobile";
			}


		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			String[] strParams = {};
			String msg = getProperty("Controller.JWTUserController.CHANGE_PASSWORD_ERROR", strParams,
					getApplicationContext());
			model.addAttribute("token", token);
			model.addAttribute("error", msg);
			returnPage = "jwt-user-token/activate-user-mobile";
		}
		return returnPage;
	}

	/**
	 * Cambia el password del usuario
	 * 
	 * @param userName
	 * @param originalPassword
	 * @param password
	 * @param model
	 * @param redirectAttributes
	 * @param returnPage
	 * @param token
	 * @return
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-15
	 */
	private Boolean chagePassword(String userName, String originalPassword, String password, Model model,
			RedirectAttributes redirectAttributes, String token) throws BusinessException {

		password = encrypt(password);

		SecurityEsbResponse<String> passwordChange = this.getSecurityEsbBO().changePassword(userName, originalPassword,
				password);
		if (passwordChange.isSuccess()) {
			String[] strParams = {};
			String msg = getProperty("Controller.JWTUserController.CHANGE_USER_MOBILE_SUCCESS", strParams,
					getApplicationContext());
			redirectAttributes.addFlashAttribute("message", msg);
			return true;
		} else {
			String[] strParams = {};
			String msg = getProperty("Controller.JWTUserController.INVALID_TOKEN", strParams, getApplicationContext());
			model.addAttribute("token", token);
			model.addAttribute("error", msg + passwordChange.getError());
			return false;
		}

	}

	/**
	 * 
	 * @param userName
	 * @param mobile
	 * @param model
	 * @param redirectAttributes
	 * @param token
	 * @throws BusinessException
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-15
	 */
	private Boolean changeMobile(String userName, String mobile, Model model, RedirectAttributes redirectAttributes,
			String token) throws BusinessException {

		SecurityEsbResponse<String> passwordChange = this.getSecurityEsbBO().changeMobile(userName, mobile);

		if (passwordChange.isSuccess()) {
			String[] strParams = {};
			String msg = getProperty("Controller.JWTUserController.CHANGE_USER_MOBILE_SUCCESS", strParams,
					getApplicationContext());
			redirectAttributes.addFlashAttribute("message", msg);
			return true;
		} else {
			String[] strParams = {};
			String msg = getProperty("Controller.JWTUserController.INVALID_TOKEN", strParams, getApplicationContext());
			model.addAttribute("token", token);
			model.addAttribute("error", msg + passwordChange.getError());
			return false;
		}

	}

	/**
	 * 
	 * @param token
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-15
	 */
	private Claims getClaimsFromToken(String token) {
		Claims claims;
		try {
			claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
		} catch (Exception e) {
			claims = null;
		}
		return claims;
	}

	/**
	 * 
	 * @param value
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-15
	 */
	private String encrypt(String value) {
		try {
			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
			SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");

			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, skeySpec, iv);

			byte[] encrypted = cipher.doFinal(value.getBytes());
			LOG.info("encrypted string: " + Base64.encodeBase64String(encrypted));
			String decryptedText = Base64.encodeBase64String(encrypted);
			LOG.info(decryptedText);

			return decryptedText;
		} catch (Exception ex) {
			LOG.error(ex.getStackTrace());
		}

		return null;
	}

	/**
	 * 
	 * @param encrypted
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-10-15
	 */
	private String decrypt(String encrypted) {
		try {
			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
			SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");

			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			cipher.init(Cipher.DECRYPT_MODE, skeySpec, iv);

			byte[] original = cipher.doFinal(Base64.decodeBase64(encrypted));

			return new String(original);
		} catch (Exception ex) {
			LOG.error(ex.getStackTrace());
		}

		return null;
	}

}
