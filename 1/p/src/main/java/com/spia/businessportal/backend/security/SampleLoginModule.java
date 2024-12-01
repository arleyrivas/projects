package com.spia.businessportal.backend.security;

import java.io.Serializable;
import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

import javax.security.auth.Subject;
import javax.security.auth.callback.Callback;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.callback.NameCallback;
import javax.security.auth.callback.PasswordCallback;
import javax.security.auth.login.LoginException;
import javax.security.auth.spi.LoginModule;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class SampleLoginModule implements LoginModule {
	
	private static final Log LOG = LogFactory.getLog(SampleLoginModule.class);

    private Subject subject;
    private String password;
    private String username;
    private static Map<String, String> USER_PASSWORDS = new HashMap<String, String>();

    static {
        USER_PASSWORDS.put("test", "test");
    }

    public boolean abort() throws LoginException {
        return true;
    }

    public boolean commit() throws LoginException {
        return true;
    }

    public void initialize(Subject subject, CallbackHandler callbackHandler,
            Map<String, ?> sharedState, Map<String, ?> options) {
        this.subject = subject;

        try {
            NameCallback nameCallback = new NameCallback("prompt");
            PasswordCallback passwordCallback = new PasswordCallback("prompt",false);

            callbackHandler.handle(new Callback[] { nameCallback,passwordCallback });

            this.password = new String(passwordCallback.getPassword());
            this.username = nameCallback.getName();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public boolean login() throws LoginException {
    	
    	LOG.info("--------------- LOGIN");
    	LOG.info("--------------- " + username);
    	LOG.info("--------------- " + password);

        if (USER_PASSWORDS.get(username) == null
                || !USER_PASSWORDS.get(username).equals(password)) {
            throw new LoginException("username is not equal to password");
        }

        subject.getPrincipals().add(new CustomPrincipal(username));
        return true;
    }

    public boolean logout() throws LoginException {
        return true;
    }

    private static class CustomPrincipal implements Principal, Serializable {
        private final String username;

        public CustomPrincipal(String username) {
            this.username = username;
        }

        public String getName() {
            return username;
        }
    }

}
