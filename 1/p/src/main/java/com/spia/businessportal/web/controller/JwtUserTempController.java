package com.spia.businessportal.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.spia.businessportal.common.entities.ValidateReCaptchaResponse;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import ar.com.fluxit.framework.entities.user.CompanyTypeDTO;
import com.spia.businessportal.common.ldap.proxy.dto.UsuarioDTO;
import com.spia.businessportal.common.utils.RecoveryPasswordAttemptSingleton;
import com.spia.services.security.esb.entities.CompanyType;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.services.security.esb.entities.UserValidation;

@RequestMapping("/api/user-temp")
@Controller
public class JwtUserTempController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(JwtUserTempController.class);

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

	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String recoveryPassword(HttpServletRequest request, HttpServletResponse response) {
		return "jwt-user-temp/register";
	}

	@SuppressWarnings("unused")
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String register(HttpServletRequest request, HttpServletResponse response, Model model,
			RedirectAttributes redirectAttributes, @RequestParam(value = "nit") String nit,
			@RequestParam(value = "email") String email, @RequestParam(value = "businessName") String businessName,
			@RequestParam(value = "cellphone") String cellphone, @RequestParam(value = "contact") String contact) {
		String returnPage = "redirect:/index";
		SecurityEsbResponse cretedCompany = null;
		SecurityEsbResponse cretedUser = null;

		try {			
			String regxEmail = "^[A-Za-z0-9+_.-]+@([A-Za-z0-9+_.-]+)$"; 			
			Pattern patternEmail = Pattern.compile(regxEmail);			
			Matcher matcherEmail = patternEmail.matcher(email);
			String validateForm = nit+businessName+cellphone+contact;
			
			if (matcherEmail.matches() && !validateForm.contains("<") && !validateForm.contains(">") && !validateForm.contains("=") && !validateForm.contains("*")) {
			
				boolean showCaptcha = true;					
				String ipAddres = request.getRemoteAddr();
				Integer numIntentos = getAttemptsCaptcha(ipAddres, email);
				boolean send = true;
				String[] strParams = {};
				List<EmpresaDTO> listEmpresaDTO = new ArrayList<>();
				EmpresaDTO empresaDTO = new EmpresaDTO();
				empresaDTO.setId(nit);
				listEmpresaDTO.add(empresaDTO);	
	
				
	
				// validar que el captcha sea válido
				if (showCaptcha) {
					model.addAttribute("showCaptcha", "show");
					model.addAttribute("sitekey", siteKey);
					returnPage = "jwt-user-temp/register";
					if (request.getParameter("g-recaptcha-response") != null && !request.getParameter("g-recaptcha-response").equals("")) {				
	
						// Como google se encarga de la validación si viene algún valor en
						// g-recaptcha-response significa que el captcha es válido, lo
						// valido contra google para chequear que no sea inyectado.
						ValidateReCaptchaResponse captchaResponse = restTemplate
								.getForEntity(
										recaptchaUrl + "?" + "secret=" + recaptchaSecretKey + "&response="
												+ request.getParameter("g-recaptcha-response"),
										ValidateReCaptchaResponse.class)
								.getBody();
						if (!captchaResponse.isSuccess() && numIntentos > 0) {
							// El captcha no fue correcto
							model.addAttribute("error",
									getProperty("Controller.JwtUserTokenCaptchaError", strParams, getApplicationContext()));
							send = false;
						}
					} else if (numIntentos > 0){
						// El usuario no chequeó el captcha
						model.addAttribute("error",
								getProperty("Controller.JwtUserTokenCaptchaError", strParams, getApplicationContext()));
						send = false;
					}
				} /*else {
					returnPage = "jwt-user-temp/register";
				}*/
	
				if (nit.equals("") || email.equals("") || businessName.equals("") || cellphone.equals("")
						|| contact.equals("")) {
					model.addAttribute("error",
							getProperty("Controller.UserTemp.register.validate.All", strParams, getApplicationContext()));
					send = false;
				} else {
					String validateNit = nit.substring(0, nit.length()-1);
					int validateDigito = Integer.parseInt(nit.substring(nit.length()-1, nit.length()));
					int digito = getDigitoDian(validateNit);
		
					if (digito != validateDigito) {
						String[] strPar = { String.valueOf(digito) };
						model.addAttribute("error",getProperty("Controller.UserTemp.register.validate.digit.nit", strPar, getApplicationContext()));
						send = false;
					}
					
					if (!nit.contains("-") && !nit.contains("+")) {
						SecurityEsbResponse<CompanyType> result = this.getSecurityEsbBO().getCompanyType(nit);
						if (result.isSuccess()) {
							model.addAttribute("error",
									getProperty("Controller.UserTemp.register.validate.nit", strParams, getApplicationContext()));
							send = false;
						} 	
					}else {	
							model.addAttribute("error",
									getProperty("Controller.JwtUserTemp.validateCharacters", strParams, getApplicationContext()));
							send = false;
						}
		
					
					
					
					if (send) {	
						
						cretedCompany = getSecurityEsbBO().registerCompanyTemp(nit, email, businessName, cellphone, contact);
						com.spia.businessportal.common.ldap.proxy.dto.EmpresaDTO empresa = new com.spia.businessportal.common.ldap.proxy.dto.EmpresaDTO();	
						empresa.setId(nit);
						
						UsuarioDTO user = new UsuarioDTO();			
						user.setApellidos(" ");
						user.setUserName(nit);
						user.setNombres("temporal" + nit);
						user.setActivo("FALSE");
						user.setCreatedBySAC(false);
						user.setCreateUser("Temp");
						user.setCorreo(email);
						user.setCelular(cellphone);
						user.setEmpresa(empresa);
						cretedUser = getLdapProxyEsbBO().crearUsuario(user);	
						
					}
				}
			}
			else {
				// Ingresar caracteres validos
				String[] strParams = {};
				model.addAttribute("error",
						getProperty("Controller.JwtUserTemp.validateCharacters", strParams, getApplicationContext()));
				returnPage = "jwt-user-temp/register";
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			returnPage = "jwt-user-temp/register";
		}

		if (cretedCompany != null && cretedUser != null) {
			
			
			if (cretedCompany.isSuccess() && cretedUser.isSuccess()) {
				String[] strPar = { businessName };
				model.addAttribute("success",getProperty("Controller.UserTemp.register.success", strPar, getApplicationContext()));	

			}
			else {
				String[] strPar = { businessName };
				model.addAttribute("error",getProperty("Controller.UserTemp.register.error", strPar, getApplicationContext()));
			}
			
		}
		
		
		return returnPage;
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
	
    public static int getDigitoDian(String nitParam) throws Exception {

	if( nitParam == null || ( nitParam.trim() ).isEmpty() )
	{
		throw new Exception("La cadena del NIT es nula o vacía.");
	}
	 
	nitParam = nitParam.trim();
	 
	int indiceRaya = nitParam.indexOf("-");
	 
	String nitInterno = indiceRaya > 0 ? nitParam.substring(0, indiceRaya): nitParam;

	try
	{
		long longValidacion = Long.parseLong(nitInterno);
	}
	catch(Exception ex)
	{
		throw new Exception("El nit contiene caracteres no numéricos. Valor recibido: |" +  nitParam + "|");
	}
	 

	String nitVector[] = nitInterno.split("(?<=.)");

	int valorCalculado = 0;
	int aux = nitVector.length -1;

	for( int i = 0; i < nitVector.length; i++ )
	{
		switch( i )
		{
			case 0:
				valorCalculado += 3 * Integer.parseInt(nitVector[aux - 0]);
				break;
			case 1:
				valorCalculado += 7 * Integer.parseInt(nitVector[aux - 1]);
				break;
			case 2:
				valorCalculado += 13 * Integer.parseInt(nitVector[aux - 2]);
				break;
			case 3:
				valorCalculado += 17 * Integer.parseInt(nitVector[aux - 3]);
				break;
			case 4:
				valorCalculado += 19 * Integer.parseInt(nitVector[aux - 4]);
				break;
			case 5:
				valorCalculado += 23 * Integer.parseInt(nitVector[aux - 5]);
				break;
			case 6:
				valorCalculado += 29 * Integer.parseInt(nitVector[aux - 6]);
				break;
			case 7:
				valorCalculado += 37 * Integer.parseInt(nitVector[aux - 7]);
				break;
			case 8:
				valorCalculado += 41 * Integer.parseInt(nitVector[aux - 8]);
				break;
			case 9:
				valorCalculado += 43 * Integer.parseInt(nitVector[aux - 9]);
				break;
			case 10:
				valorCalculado += 47 * Integer.parseInt(nitVector[aux - 10]);
				break;
			case 11:
				valorCalculado += 53 * Integer.parseInt(nitVector[aux - 11]);
				break;
			case 12:
				valorCalculado += 59 * Integer.parseInt(nitVector[aux - 12]);
				break;
			case 13:
				valorCalculado += 67 * Integer.parseInt(nitVector[aux - 13]);
				break;
			case 14:
				valorCalculado += 71 * Integer.parseInt(nitVector[aux - 14]);
				break;
		}
	}
	 
	int modulo = valorCalculado % 11;
	 
	if( modulo >= 2 )
	{
		modulo = 11 - modulo;
	}
	 
	return modulo;
}

}
