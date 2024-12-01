package com.spia.businessportal.web.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/api/jwt-user-token")
@Controller
public class JwtUserController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(JwtUserTokenController.class);
}
