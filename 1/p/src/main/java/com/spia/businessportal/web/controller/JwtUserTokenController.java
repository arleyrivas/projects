package com.spia.businessportal.web.controller;

import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
import com.spia.businessportal.common.entities.JwtUserTokenInfo;
import com.spia.businessportal.common.entities.ValidateReCaptchaResponse;
import com.spia.businessportal.common.entities.dto.JwtUserTokenResponseDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.LoginAttemptsSingleton;
import com.spia.businessportal.common.utils.RecoveryPasswordAttemptSingleton;
import com.spia.services.security.esb.entities.ForgotPasswordRequest;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.services.security.esb.entities.UserValidation;
import com.spia.businessportal.common.entities.dto.ValidateUserRequestDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RequestMapping("/api/user-token")
@Controller
public class JwtUserTokenController extends AbstractController {

	@Value("#{jwt['jwt.secret']}")
	private String secret = "mySecret";
	@Value("#{jwt['jwt.expirationTime']}")
	private String expirationHours = "expirationTime";
	private static final Log LOG = LogFactory.getLog(JwtUserTokenController.class);
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
	// @Value("#{jms['url']}")
	private String jmsUrl;
	// @Value("#{jms['queue']}")
	private String jmsQueue;
	// @Value("#{jms['user']}")
	private String jmsUser;
	// @Value("#{jms['password']}")
	private String jmsPassword;
	@Value("#{templates['changePassword']}")
	private String changePassword;
	@Value("#{templates['changePasswordAdmin']}")
	private String changePasswordAdmin;

	@RequestMapping(value = "/encryptTest/{data}", method = RequestMethod.GET)
	public @ResponseBody String[] get(@PathVariable String data) {
		String[] result = { encrypt(data), decrypt(encrypt(data)), decrypt(data) };
		return result;
	}

	@RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> generateToken(HttpServletRequest request,
			@RequestBody JwtUserTokenInfo jwtUserTokenInfo) {
		ResponseEntity<?> re = null;
		try {
			Calendar cal = Calendar.getInstance();
			cal.setTime(new Date());
			Claims claims = Jwts.claims().setSubject(jwtUserTokenInfo.getUser());
			claims.put("email", jwtUserTokenInfo.getEmail());
			claims.put("username", jwtUserTokenInfo.getUser());
			claims.put("password", jwtUserTokenInfo.getPassword());
			claims.put("created", cal.getTime());
			cal.add(Calendar.HOUR_OF_DAY, Integer.parseInt(expirationHours));
			claims.put("expiration", cal.getTime());
			String token = URLEncoder
					.encode(Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512, secret).compact());
			JwtUserTokenResponseDTO response = new JwtUserTokenResponseDTO();
			response.setUrl("http://" + request.getServerName() + ":" + request.getServerPort()
					+ request.getContextPath() + "/api/user-token/change-password/" + token);
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

	@RequestMapping(value = "/change-password/{token:.+}", method = RequestMethod.GET)
	public String changePassword(Model model, RedirectAttributes redirectAttributes,
			@PathVariable("token") String token) {
		String returnPage = "jwt-user-token/change_password";
		try {
			Date now = new Date();
			Claims claims = getClaimsFromToken(token);
			if (claims != null) {
				Long expiration = (Long) claims.get("expiration");
				if (expiration >= now.getTime()) {
					String userName = (String) claims.get("username");
					String email = (String) claims.get("email");
					String password = (String) claims.get("password");
					SecurityEsbResponse<UserValidation> result = this.getSecurityEsbBO().validateUser(email, userName);
					if (result.isSuccess()) {
						model.addAttribute("email", email);
						model.addAttribute("username", userName);
						model.addAttribute("oldPassword", password);
						model.addAttribute("token", token);
					} else {
						String[] strParams = {};
						String msg = getProperty("Controller.JWTUserController.INVALID_TOKEN", strParams,
								getApplicationContext());
						returnPage = "jwt-user-token/change_password";
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

	@RequestMapping(value = "/change-password-confirmation/", method = RequestMethod.POST)
	public String changePasswordConfirmation(HttpServletRequest request, HttpServletResponse response, Model model,
			RedirectAttributes redirectAttributes,
			@RequestParam(value = "j_old_p", required = false) String passwordOld,
			@RequestParam("j_p") String password, 
			@RequestParam("j_re_p") String rePassword,
			@RequestParam("j_token") String token) {
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
			model.addAttribute("email", email);
			model.addAttribute("username", userName);
			if (password != null && rePassword != null && password.equals(rePassword)) {
				String[] strParamsR = {};
				String regex = getProperty("Controller.JWTUserController.PASSWORD_POLICY_REGEX", strParamsR,
						getApplicationContext());
				if (password.matches(regex)) {
					if (expiration >= now.getTime()) {
						String originalPassword = (String) claims.get("password");
						String originalDecrypt = this.decrypt(originalPassword);
						String originalEncrypt = this.encrypt(originalPassword);
						// Valido contra el esb que exista el usuario.
						SecurityEsbResponse<UserValidation> result = this.getSecurityEsbBO().validateUser(email,
								userName);
						if (result.isSuccess()) {
							password = encrypt(password);
							LOG.info("change-password-confirmation - UserName: " + userName);
							LOG.info("change-password-confirmation - Email: " + email);
							LOG.info("change-password-confirmation - passwordEncrypt-Nueva: " + password);
							LOG.info("change-password-confirmation - passwordEncrypt-Nueva: " + password);
							LOG.info("change-password-confirmation - rePasswordEncrypt-RePassword: "
									+ encrypt(rePassword));
							SecurityEsbResponse<String> passwordChange = this.getSecurityEsbBO().changePassword(
									((UserValidation) result.getResult()).getUserName(), originalPassword, password);
							if (passwordChange.isSuccess()) {
								String[] strParams = {};
								String msg = getProperty("Controller.JWTUserController.CHANGE_PASSWORD_SUCCESS",
										strParams, getApplicationContext());
								redirectAttributes.addFlashAttribute("message", msg);
								if (LoginAttemptsSingleton.getInstance().getLoginAttepmts().containsKey(request.getRemoteAddr())) {
									LoginAttemptsSingleton.getInstance().getLoginAttepmts().remove(request.getRemoteAddr());
								}
								returnPage = "redirect:/index";
							} else {
								String[] strParams = {};
								String msg = "";
								if (passwordChange.getError().equalsIgnoreCase("PWD_HISTORY")) {
									msg = getProperty("Controller.JWTUserController.PASSWORD_POLICY_HISTORY", strParams,
											getApplicationContext());
								} else {
									msg = getProperty("Controller.JWTUserController.INVALID_TOKEN", strParams,
											getApplicationContext()) + passwordChange.getError();
								}
								returnPage = "jwt-user-token/change_password";
								model.addAttribute("token", token);
								model.addAttribute("error", msg);
							}
						} else {
							String[] strParams = {};
							String msg = getProperty("Controller.JWTUserController.INVALID_USER", strParams,
									getApplicationContext());

							model.addAttribute("error", msg + "(" + (result.getError()) + ")");
						}
					} else {
						// Pasó la fecha de expiración
						String[] strParams = {};
						String msg = getProperty("Controller.JWTUserController.CHANGE_PASSWORD_DATE_ERROR", strParams,
								getApplicationContext());
						redirectAttributes.addFlashAttribute("message", msg);
						returnPage = "redirect:/index";
					}
				} else {
					String[] strParams = {};
					String msg = getProperty("Controller.JWTUserController.PASSWORD_POLICY_ERROR", strParams,
							getApplicationContext());
					returnPage = "jwt-user-token/change_password";
					model.addAttribute("token", token);
					model.addAttribute("error", msg);
				}
			} else {
				String[] strParams = {};
				String msg = getProperty("Controller.JWTUserController.PASSWORDS_NOT_MATCH", strParams,
						getApplicationContext());
				returnPage = "jwt-user-token/change_password";
				model.addAttribute("token", token);
				model.addAttribute("error", msg);
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			String[] strParams = {};
			String msg = getProperty("Controller.JWTUserController.CHANGE_PASSWORD_ERROR", strParams,
					getApplicationContext());
			model.addAttribute("token", token);
			model.addAttribute("error", msg);
			returnPage = "jwt-user-token/change_password";
		}
		return returnPage;
	}

	/**
	 * Pagina para recuperar la contraseña
	 * 
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/recovery-password", method = RequestMethod.GET)
	public String recoveryPassword(HttpServletRequest request, HttpServletResponse response) {
		return "jwt-user-token/recovery_password";
	}

	@RequestMapping(value = "/recovery-password", method = RequestMethod.POST)
	public String recoveryPassword(HttpServletRequest request, HttpServletResponse response, Model model,
			RedirectAttributes redirectAttributes, @RequestParam(value = "email") String email,
			@RequestParam(value = "username", required = false) String username,
			@RequestParam(value = "application") String application) {
		String returnPage = "redirect:/index";
		boolean showUser = username != null;
		try {
			
			String regx = "^[A-Za-z0-9+_.-]+@([A-Za-z0-9+_.-]+)$"; 
			Pattern pattern = Pattern.compile(regx); 
			Matcher matcher = pattern.matcher(email);
			if (matcher.matches()) {
				SecurityEsbResponse<UserValidation> result = this.getSecurityEsbBO().validateUser(email, username);
				boolean captchaIsSuccess = request.getParameter("g-recaptcha-response") != null;
				boolean showCaptcha = false;
				// Si tengo exito y no me pasé con los intentos, no voy a ver si tengo que
				// mostrar el captcha ya que me incrementa el nro de intentos.
				String ipAddres = request.getRemoteAddr();
				Integer numIntentos = 0;
				if (!result.isSuccess()) {
					// Actualizo los intentos y me fijo
						// si tengo que mostrarlo en la siguiente pantalla.
						showCaptcha = showCaptcha(ipAddres, email);
						numIntentos = getAttemptsCaptcha(ipAddres, email);
					// }
				} else {
					numIntentos = getAttemptsCaptcha(ipAddres, email);
					if(numIntentos >= this.getShowCaptchaAttempts()) {
						showCaptcha = true;
					}	
				}
				
				// Si el mail es válido y la cantidad de intentos es menor que las requeridas
				// para ver el captcha, lo dejo pasar
				if (result.isSuccess() && ((!captchaIsSuccess && !showCaptcha) || (showCaptcha && captchaIsSuccess))) {
					// Elimino intentos de captcha
					if (RecoveryPasswordAttemptSingleton.getInstance().getRecoveryAttempts().containsKey(ipAddres)) {
						RecoveryPasswordAttemptSingleton.getInstance().getRecoveryAttempts().remove(ipAddres);
					}
					// Genero el token
					Calendar cal = Calendar.getInstance();
					cal.setTime(new Date());
					Claims claims = Jwts.claims().setSubject(((UserValidation) result.getResult()).getUserName());
					claims.put("email", ((UserValidation) result.getResult()).getUserEmail());
					claims.put("username", ((UserValidation) result.getResult()).getUserName());
					claims.put("password", ((UserValidation) result.getResult()).getPassword());
					claims.put("created", cal.getTime());
					cal.add(Calendar.HOUR_OF_DAY, Integer.parseInt(expirationHours));
					claims.put("expiration", cal.getTime());
					String token = URLEncoder
							.encode(Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512, secret).compact());
					String link = "http://" + request.getServerName() + ":" + request.getServerPort()
							+ request.getContextPath() + "/api/user-token/change-password/" + token;
	
					ValidateUserRequestDTO forgotPasswordRequest = new ValidateUserRequestDTO();
					forgotPasswordRequest.setEmail(((UserValidation) result.getResult()).getUserEmail());
					forgotPasswordRequest.setUserName(((UserValidation) result.getResult()).getUserName());
					forgotPasswordRequest.setApplication(application);
					this.getSecurityEsbBO().forgotPassword(forgotPasswordRequest);
	
					ConnectionFactory factory = null;
	
					String[] strParams = { };
					model.addAttribute("error",
						getProperty("Controller.JwtUserTokenNotFoundError", strParams, getApplicationContext()));
					returnPage = "jwt-user-token/recovery_password";
				} else {
					System.out.println("result.getError().toLowerCase()"+result.getError().toLowerCase());
					if (result.getError() != null && "email not found".equals(result.getError().toLowerCase())) {
						String[] strParams = { };
						model.addAttribute("error",
								getProperty("Controller.JwtUserTokenNotFoundError", strParams, getApplicationContext()));
					}
					if (result.getError() != null && "email not unique".equals(result.getError().toLowerCase())) {
						String[] strParams = { };
						showUser = true;
						model.addAttribute("error", getProperty("Controller.JwtUserTokenMailNotUniqueError", strParams,
								getApplicationContext()));
					}
					if (result.getError() != null && "email and user not found".equals(result.getError().toLowerCase())) {
						//String[] strParams = { username, email };
						String[] strParams = { };
						showUser = true;
						model.addAttribute("error", getProperty("Controller.JwtUserTokenMilNotUniqueError", strParams,
								getApplicationContext()));
					}
					// Si entro porque tenía que mostrar el captcha, tengo que validar que el
					// captcha sea válido
					if (showCaptcha) {
						model.addAttribute("showCaptcha", "show");
						model.addAttribute("sitekey", siteKey);
						returnPage = "jwt-user-token/recovery_password";
						if (request.getParameter("g-recaptcha-response") != null
								&& !"".equals(request.getParameter("g-recaptcha-response"))) {
							// Como google se encarga de la validación si viene algún valor en
							// g-recaptcha-response significa que el captcha es válido, lo
							// valido contra google para chequear que no sea inyectado.
							ValidateReCaptchaResponse captchaResponse = restTemplate
									.getForEntity(
											recaptchaUrl + "?" + "secret=" + recaptchaSecretKey + "&response="
													+ request.getParameter("g-recaptcha-response"),
											ValidateReCaptchaResponse.class)
									.getBody();
							if (!captchaResponse.isSuccess() && numIntentos > this.getShowCaptchaAttempts()) {
								// El captcha no fue correcto
								String[] strParams = {};
								model.addAttribute("error", getProperty("Controller.JwtUserTokenCaptchaError", strParams,
										getApplicationContext()));
							}
						} else if (numIntentos > this.getShowCaptchaAttempts()){
							// El usuario no chequeó el captcha
							String[] strParams = {};
							model.addAttribute("error",
									getProperty("Controller.JwtUserTokenCaptchaError", strParams, getApplicationContext()));
						}
					} else {
						returnPage = "jwt-user-token/recovery_password";
					}
				}
			}
			else {
				// Ingresar caracteres validos
				String[] strParams = {};
				model.addAttribute("error",
						getProperty("Controller.JwtUserToken.validateEmailCharacters", strParams, getApplicationContext()));
				returnPage = "jwt-user-token/recovery_password";
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			returnPage = "jwt-user-token/recovery_password";
		}
		if (showUser) {
			model.addAttribute("showUser", "show");
		}
		return returnPage;
	}

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String test(HttpServletRequest request, HttpServletResponse response) {
		String returnPage = "response";
		try {
			List<Map<String, String>> messages = new ArrayList<Map<String, String>>();
			Map<String, String> mapMessage1 = new HashMap<String, String>();
			mapMessage1.put("From", "spia.terminal@gmail.com");
			mapMessage1.put("to", "leandro.padron@fluxit.com.ar");
			mapMessage1.put("subject", "Solicitud de cambio de contraseña");
			mapMessage1.put("template", changePassword);
			mapMessage1.put("user", "usuario");
			mapMessage1.put("link", "link");

			Map<String, String> mapMessage2 = new HashMap<String, String>();
			mapMessage2.put("From", "spia.terminal@gmail.com");
			mapMessage2.put("to", "leandro.padron@fluxit.com.ar");
			mapMessage2.put("subject", "Solicitud de cambio de contraseña");
			mapMessage2.put("template", changePasswordAdmin);
			mapMessage2.put("user", "usuario");

			messages.add(mapMessage1);
			messages.add(mapMessage2);
			this.getJmsQueueServiceImpl().sendMessages(messages);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}
		return returnPage;
	}

	private boolean showCaptcha(String ipAddress, String email) {
		boolean showCaptcha = false;
		if (RecoveryPasswordAttemptSingleton.getInstance().getRecoveryAttempts().containsKey(ipAddress)) {
			// Si la ip y el usuario ya existen en la variable, verifico la cantidad de
			// intentos fallidos.
			Map<String, Integer> ipMap = RecoveryPasswordAttemptSingleton.getInstance().getRecoveryAttempts()
					.get(ipAddress);
			// Si la ip ya existía pero el usuario no, agrego sólo la entrada del usuario
			if (ipMap.containsKey(email)) {
				Integer loginAttepmts = ipMap.get(email);
				loginAttepmts++;
				if (loginAttepmts >= this.getShowCaptchaAttempts()) {
					// Si hubo más de 3 intentos fallidos, muestro el captcha.
					ipMap.put(email, loginAttepmts);
					showCaptcha = true;
				} else {
					// Si no tuvo más de 3 intentos, sólo incremento en uno el nro de intentos
					ipMap.put(email, loginAttepmts);
				}
			} else {
				ipMap.put(email, 1);
			}
		} else {
			// Si la ip no existía, la agrego al mapa.
			Map<String, Integer> userMap = new HashMap<String, Integer>();
			userMap.put(email, 1);
			RecoveryPasswordAttemptSingleton.getInstance().getRecoveryAttempts().put(ipAddress, userMap);
		}
		return showCaptcha;
	}
	
	private Integer getAttemptsCaptcha(String ipAddress, String email) {
		Integer attempts = 0;
		if (RecoveryPasswordAttemptSingleton.getInstance().getRecoveryAttempts().containsKey(ipAddress)) {
			// Si la ip y el usuario ya existen en la variable, verifico la cantidad de
			// intentos fallidos.
			Map<String, Integer> ipMap = RecoveryPasswordAttemptSingleton.getInstance().getRecoveryAttempts()
					.get(ipAddress);
			// Si la ip ya existía pero el usuario no, agrego sólo la entrada del usuario
			if (ipMap.containsKey(email)) {
				attempts = ipMap.get(email);
			}
		}
		return attempts;
	}

	private Claims getClaimsFromToken(String token) {
		Claims claims;
		try {
			claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
		} catch (Exception e) {
			claims = null;
		}
		return claims;
	}

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

}
