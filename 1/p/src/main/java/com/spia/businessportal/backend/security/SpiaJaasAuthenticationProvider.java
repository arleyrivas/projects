
package com.spia.businessportal.backend.security;

import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import javax.security.auth.callback.Callback;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.callback.UnsupportedCallbackException;
import javax.security.auth.login.LoginContext;
import javax.security.auth.login.LoginException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.context.ApplicationListener;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.jaas.AuthorityGranter;
import org.springframework.security.authentication.jaas.JaasAuthenticationCallbackHandler;
import org.springframework.security.authentication.jaas.JaasAuthenticationProvider;
import org.springframework.security.authentication.jaas.JaasAuthenticationToken;
import org.springframework.security.authentication.jaas.JaasGrantedAuthority;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.session.SessionDestroyedEvent;

public class SpiaJaasAuthenticationProvider extends JaasAuthenticationProvider implements AuthenticationProvider,
		ApplicationEventPublisherAware, InitializingBean, ApplicationListener<SessionDestroyedEvent> {
	protected static final Log log = LogFactory.getLog(SpiaJaasAuthenticationProvider.class);
	private JaasAuthenticationCallbackHandler[] callbackHandlers;
	private AuthorityGranter[] authorityGranters;
	private String loginContextName;
	private LoginExceptionResolver loginExceptionResolver;

	public SpiaJaasAuthenticationProvider() {
		super();
	}
	//
	// public void afterPropertiesSet() throws Exception
	// {
	/// * 148 */ Assert.notNull(this.loginConfig, "loginConfig must be set on "
	// + super.getClass());
	/// * 149 */ Assert.hasLength(this.loginContextName, "loginContextName must
	// be set on " + super.getClass());
	//
	/// * 151 */ configureJaas(this.loginConfig);
	//
	/// * 153 */ Assert.notNull(Configuration.getConfiguration(), "As per
	// http://java.sun.com/j2se/1.5.0/docs/api/javax/security/auth/login/Configuration.html
	// \"If a Configuration object was set via the
	// Configuration.setConfiguration method, then that object is returned.
	// Otherwise, a default Configuration object is returned\". Your JRE
	// returned null to Configuration.getConfiguration().");
	// }
	//
	//

	public Authentication authenticate(Authentication auth) throws AuthenticationException {
		
		super.authenticate(auth);
		
		UsernamePasswordAuthenticationToken request = (UsernamePasswordAuthenticationToken) auth;

		try {
			LoginContext loginContext = new LoginContext(this.loginContextName, new InternalCallbackHandler(auth));

//			loginContext.login();

			Set authorities = new HashSet();
			authorities.addAll(request.getAuthorities());

			Set<Principal> principals = loginContext.getSubject().getPrincipals();

			for (Principal principal : principals) {
				for (int i = 0; i < this.authorityGranters.length; ++i) {
					AuthorityGranter granter = this.authorityGranters[i];
					Set<String> roles = granter.grant(principal);

					if ((roles != null) && (!(roles.isEmpty()))) {
						for (String role : roles) {
							authorities.add(new JaasGrantedAuthority(role, principal));
						}
					}
				}

			}

			JaasAuthenticationToken result = new JaasAuthenticationToken(request.getPrincipal(),
					request.getCredentials(), new ArrayList(authorities), loginContext);

			publishSuccessEvent(result);

			return result;
		} catch (LoginException loginException) {
			 AuthenticationException ase = this.loginExceptionResolver.resolveException(loginException);

			 publishFailureEvent(request, ase);
			 throw ase;
		}
	}

	//
	// protected void configureJaas(Resource loginConfig)
	// throws IOException
	// {
	/// * 233 */ configureJaasUsingLoop();
	//
	/// * 235 */ if (!(this.refreshConfigurationOnStartup))
	// return;
	/// * 237 */ Configuration.getConfiguration().refresh();
	// }
	//
	//
	//
	//
	//
	// private void configureJaasUsingLoop()
	// throws IOException
	// {
	/// * 247 */ String loginConfigUrl = convertLoginConfigToUrl();
	/// * 248 */ boolean alreadySet = false;
	//
	/// * 250 */ int n = 1;
	/// * 251 */ String prefix = "login.config.url.";
	/// * 252 */ String existing = null;
	//
	/// * 254 */ while ((existing = Security.getProperty("login.config.url." +
	// n)) != null) {
	/// * 255 */ alreadySet = existing.equals(loginConfigUrl);
	//
	/// * 257 */ if (alreadySet) {
	// break;
	// }
	//
	/// * 261 */ ++n;
	// }
	//
	/// * 264 */ if (!(alreadySet)) {
	/// * 265 */ String key = "login.config.url." + n;
	/// * 266 */ log.debug("Setting security property [" + key + "] to: " +
	// loginConfigUrl);
	/// * 267 */ Security.setProperty(key, loginConfigUrl);
	// }
	// }
	//
	// private String convertLoginConfigToUrl() throws IOException {
	/// * 272 */ String loginConfigPath =
	// this.loginConfig.getFile().getAbsolutePath();
	/// * 273 */ loginConfigPath.replace(File.separatorChar, '/');
	//
	/// * 275 */ if (!(loginConfigPath.startsWith("/"))) {
	/// * 276 */ loginConfigPath = "/" + loginConfigPath;
	// }
	//
	/// * 279 */ return new URL("file", "", loginConfigPath).toString();
	// }
	//
	//
	//
	//
	//
	//
	// protected void handleLogout(SessionDestroyedEvent event)
	// {
	/// * 289 */ SecurityContext context = event.getSecurityContext();
	//
	/// * 291 */ if (context == null) {
	/// * 292 */ log.debug("The destroyed session has no SecurityContext");
	//
	/// * 294 */ return;
	// }
	//
	/// * 297 */ Authentication auth = context.getAuthentication();
	//
	/// * 299 */ if ((auth != null) && (auth instanceof
	// JaasAuthenticationToken)) {
	/// * 300 */ JaasAuthenticationToken token = (JaasAuthenticationToken)auth;
	// try
	// {
	/// * 303 */ LoginContext loginContext = token.getLoginContext();
	//
	/// * 305 */ if (loginContext != null) {
	/// * 306 */ log.debug("Logging principal: [" + token.getPrincipal() + "]
	// out of LoginContext");
	/// * 307 */ loginContext.logout();
	// } else {
	/// * 309 */ log.debug("Cannot logout principal: [" + token.getPrincipal() +
	// "] from LoginContext. " + "The LoginContext is unavailable");
	// }
	// }
	// catch (LoginException e) {
	/// * 313 */ log.warn("Error error logging out of LoginContext", e);
	// }
	// }
	// }
	//
	// public void onApplicationEvent(SessionDestroyedEvent event) {
	/// * 319 */ handleLogout(event);
	// }
	//
	//
	//
	//
	//
	//
	//
	// protected void publishFailureEvent(UsernamePasswordAuthenticationToken
	// token, AuthenticationException ase)
	// {
	/// * 330 */ this.applicationEventPublisher.publishEvent(new
	// JaasAuthenticationFailedEvent(token, ase));
	// }
	//
	//
	//
	//
	//
	//
	// protected void publishSuccessEvent(UsernamePasswordAuthenticationToken
	// token)
	// {
	/// * 340 */ if (this.applicationEventPublisher != null)
	/// * 341 */ this.applicationEventPublisher.publishEvent(new
	// JaasAuthenticationSuccessEvent(token));
	// }
	//
	//
	//
	//
	//
	//
	//
	//
	//
	 AuthorityGranter[] getAuthorityGranters()
	 {
	 return this.authorityGranters;
	 }
	
	
	
	
	
	
	
	 public void setAuthorityGranters(AuthorityGranter[] authorityGranters)
	 {
	 this.authorityGranters = authorityGranters;
	 }
	//
	//
	//
	//
	//
	//
	//
	 JaasAuthenticationCallbackHandler[] getCallbackHandlers()
	 {
	 return this.callbackHandlers;
	 }
	
	
	
	
	
	
	 public void setCallbackHandlers(JaasAuthenticationCallbackHandler[]
	 callbackHandlers)
	 {
	 this.callbackHandlers = callbackHandlers;
	 }
	
//	 public Resource getLoginConfig() {
//	/ * 390 */ return this.loginConfig;
//	 }
	//
	//
	//
	//
	//
	//
	//
	// public void setLoginConfig(Resource loginConfig)
	// {
	/// * 401 */ this.loginConfig = loginConfig;
	// }
	//
	 String getLoginContextName() {
	 return this.loginContextName;
	 }
	
	
	
	
	
	
	 public void setLoginContextName(String loginContextName)
	 {
	 this.loginContextName = loginContextName;
	 }
	//
	 LoginExceptionResolver getLoginExceptionResolver() {
	 return this.loginExceptionResolver;
	 }
	
	 public void setLoginExceptionResolver(LoginExceptionResolver
	 loginExceptionResolver) {
	 this.loginExceptionResolver = loginExceptionResolver;
	 }
	//
	//
	//
	//
	//
	//
	//
	//
	//
	// public void setRefreshConfigurationOnStartup(boolean refresh)
	// {
	/// * 436 */ this.refreshConfigurationOnStartup = refresh;
	// }
	//
	// public boolean supports(Class<? extends Object> aClass) {
	/// * 440 */ return
	// UsernamePasswordAuthenticationToken.class.isAssignableFrom(aClass);
	// }
	//
	// public void setApplicationEventPublisher(ApplicationEventPublisher
	// applicationEventPublisher) {
	/// * 444 */ this.applicationEventPublisher = applicationEventPublisher;
	// }
	//
	// protected ApplicationEventPublisher getApplicationEventPublisher() {
	/// * 448 */ return this.applicationEventPublisher;
	// }
	//
	//
	//
	private class InternalCallbackHandler implements CallbackHandler {
		private Authentication authentication;

		public InternalCallbackHandler(Authentication paramAuthentication) {
			this.authentication = paramAuthentication;
		}

		public void handle(Callback[] callbacks) throws IOException, UnsupportedCallbackException {
			for (int i = 0; i < SpiaJaasAuthenticationProvider.this.callbackHandlers.length; ++i) {
				JaasAuthenticationCallbackHandler handler = SpiaJaasAuthenticationProvider.this.getCallbackHandlers()[i];

				for (int j = 0; j < callbacks.length; ++j) {
					Callback callback = callbacks[j];

					handler.handle(callback, this.authentication);
				}
			}
		}
	}
}
