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
import com.spia.businessportal.common.entities.JwtUserTokenInfo;
import com.spia.businessportal.common.entities.JwtUserTokenInfoMobile;
import com.spia.businessportal.common.entities.ValidateReCaptchaResponse;
import com.spia.businessportal.common.entities.dto.JwtUserTokenResponseDTO;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.RecoveryPasswordAttemptSingleton;
import com.spia.services.security.esb.entities.ForgotPasswordRequest;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.services.security.esb.entities.UserValidation;
import com.spia.businessportal.common.entities.dto.ValidateUserRequestDTO;

import ar.com.fluxit.framework.common.exception.BusinessException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RequestMapping("/api/mobile-token")
@Controller
public class JwtUserTokenControllerMobile extends AbstractController {

    @Value("#{jwt['jwt.secret']}")
    private String secret = "mySecret";
    @Value("#{jwt['jwt.expirationTime']}")
    private String expirationHours = "expirationTime";
    private static final Log LOG = LogFactory.getLog(JwtUserTokenControllerMobile.class);
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
    @Value("#{templates['changeMobile']}")
    private String changeMobile;
    @Value("#{templates['changeMobileAdmin']}")
    private String changeMobileAdmin;

    @RequestMapping(value = "/encryptTest/{data}", method = RequestMethod.GET)
    public @ResponseBody String[] get(@PathVariable String data) {
        String[] result = { encrypt(data), decrypt(encrypt(data)), decrypt(data) };
        return result;
    }

    @RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<?> generateToken(HttpServletRequest request,
            @RequestBody JwtUserTokenInfoMobile jwtUserTokenInfo) {
        ResponseEntity<?> re = null;
        try {
            Calendar cal = Calendar.getInstance();
            cal.setTime(new Date());
            Claims claims = Jwts.claims().setSubject(jwtUserTokenInfo.getUser());
            claims.put("email", jwtUserTokenInfo.getEmail());
            claims.put("username", jwtUserTokenInfo.getUser());
            claims.put("mobile", jwtUserTokenInfo.getMobile());
            claims.put("created", cal.getTime());
            cal.add(Calendar.HOUR_OF_DAY, Integer.parseInt(expirationHours));
            claims.put("expiration", cal.getTime());
            String token = URLEncoder
                    .encode(Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512, secret).compact());
            JwtUserTokenResponseDTO response = new JwtUserTokenResponseDTO();
            response.setUrl("http://" + request.getServerName() + ":" + request.getServerPort()
                    + request.getContextPath() + "/api/mobile-token/change-mobile/" + token);
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

    @RequestMapping(value = "/change-mobile/{token:.+}", method = RequestMethod.GET)
    public String changeMobile(Model model, RedirectAttributes redirectAttributes,
            @PathVariable("token") String token) {
        String returnPage = "jwt-user-token/change-mobile";
        try {
            Date now = new Date();
            Claims claims = getClaimsFromToken(token);
            if (claims != null) {
                Long expiration = (Long) claims.get("expiration");
                if (expiration >= now.getTime()) {
                    String userName = (String) claims.get("username");
                    String email = (String) claims.get("email");
                    String mobile = (String) claims.get("mobile");
                    SecurityEsbResponse<UserValidation> result = this.getSecurityEsbBO().validateUser(email, userName);
                    if (result.isSuccess()) {
                        model.addAttribute("email", email);
                        model.addAttribute("username", userName);
                        model.addAttribute("oldMobile", mobile);
                        model.addAttribute("token", token);
                    } else {
                        String[] strParams = {};
                        String msg = getProperty("Controller.JWTUserController.INVALID_TOKEN", strParams,
                                getApplicationContext());
                        returnPage = "jwt-user-token/change-mobile";
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
    
    @RequestMapping(value = "/change-mobile-confirmation/", method = RequestMethod.POST)
    public String changePasswordConfirmation(HttpServletRequest request, HttpServletResponse response, Model model,
            RedirectAttributes redirectAttributes,
            @RequestParam("j_mobile") String mobile, 
            @RequestParam("j_re_mobile") String reMobile,
            @RequestParam("j_token") String token) {
        
        /**aca bien*/
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
            
            if (mobile.equals(null) || reMobile.equals(null) || mobile.equals("") || reMobile.equals("")) {
            	
           	 String[] strParams = {};
                String msg = getProperty("Controller.JWTUserController.MOBILE_NOT_NULL", strParams,
                        getApplicationContext());
               
                model.addAttribute("token", token);
                model.addAttribute("error", msg);
                returnPage = "jwt-user-token/change-mobile";
           	
           } 
            
            else if (mobile != null && reMobile != null && mobile.equals(reMobile)) {

                if (expiration >= now.getTime()) {

                    // Valido contra el esb que exista el usuario.
                    SecurityEsbResponse<UserValidation> result = this.getSecurityEsbBO().validateUser(email, userName);
                    if (result.isSuccess()) {
                        

                        LOG.info("change-mobile-confirmation - UserName: " + userName);
                        LOG.info("change-mobile-confirmation - Email: " + email);
                        LOG.info("change-mobile-confirmation - mobile-Nueva: " + mobile);
                        LOG.info("change-mobile-confirmation - reMobile: " + encrypt(reMobile));
                        
                        SecurityEsbResponse<String> passwordChange = this.getSecurityEsbBO().changeMobile(
                                ((UserValidation) result.getResult()).getUserName(), mobile);
                        
                        if (passwordChange.isSuccess()) {
                            String[] strParams = {};
                            String msg = getProperty("Controller.JWTUserController.CHANGE_MOBILE_SUCCESS", strParams,
                                    getApplicationContext());
                            redirectAttributes.addFlashAttribute("message", msg);
                            returnPage = "redirect:/index";
                        } else {
                            String[] strParams = {};
                            String msg = getProperty("Controller.JWTUserController.INVALID_TOKEN", strParams,
                                    getApplicationContext());
                            returnPage = "jwt-user-token/change-mobile";
                            model.addAttribute("token", token);
                            model.addAttribute("error", msg + passwordChange.getError());
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
            }         
            
            else {
                String[] strParams = {};
                String msg = getProperty("Controller.JWTUserController.MOBILE_NOT_MATCH", strParams,
                        getApplicationContext());
               
                model.addAttribute("token", token);
                model.addAttribute("error", msg);
                returnPage = "jwt-user-token/change-mobile";
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            String[] strParams = {};
            String msg = getProperty("Controller.JWTUserController.CHANGE_PASSWORD_ERROR", strParams,
                    getApplicationContext());
            model.addAttribute("token", token);
            model.addAttribute("error", msg);
            returnPage = "jwt-user-token/change-mobile";
        }
        return returnPage;
    }


    @RequestMapping(value = "/test-recovery", method = RequestMethod.GET)
    public String testRecovery() throws BusinessException {
        String response = null;

        ValidateUserRequestDTO forgotPasswordRequest = new ValidateUserRequestDTO();
        forgotPasswordRequest.setEmail("oscar.viveros@puertoaguadulce.com");
        forgotPasswordRequest.setUserName("tviveros");
        forgotPasswordRequest.setApplication("portal");
        SecurityEsbResponse securityEsbResponse = this.getSecurityEsbBO().forgotPassword(forgotPasswordRequest);

        return response;
    }

  

    private boolean showCaptcha(String ipAddress, String email) {
        boolean showCaptcha = false;
        if (RecoveryPasswordAttemptSingleton.getInstance().getRecoveryAttempts().containsKey(ipAddress)) {
            // Si la ip y el usuario ya existen en la variable, verifico la cantidad de intentos fallidos.
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
