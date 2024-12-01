<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
        <%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
            <html>

            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>
                    <spring:message code="IntroPage.MainTitle" text="default text" />
                </title>
                <!-- Bootstrap core CSS - v3.1.1 -->
                <link href="${pageContext.request.contextPath}/style/bootstrap-3.1.1.min.css" rel="stylesheet">
                <!-- Google Fonts -->
                <link href="${pageContext.request.contextPath}/style/login.css" rel="stylesheet">
            </head>

            <body>
                <div class="loginBody">
                    <div class="body-content col-sm-12 col-md-12 col-lg-12">
                        <div class="login">
                            <form action="${pageContext.request.contextPath}/api/user-activate-token/confirmation/" method="post" role="form">
                                <div class="title login-title" >
                                    <img src="${pageContext.request.contextPath}/img/LogoPuertoAguadulceColor.jpg" class="imgLogin" />
                                    <span class="headerTitle">
	  						<spring:message code="IntroPage.MainTitle" text="default text" />
	  					</span>
                                    <c:if test="${not empty error}">
                                        <div class="alert alert-danger">
                                            <span class="glyphicon glyphicon-warning-sign"></span> ${error}
                                        </div>
                                    </c:if>
                                    <div class="title">
                                        <span class="subheaderTitle">
	  						<spring:message code="Controller.JWTUserController.PASSWORD_AND_MOBILE_CHANGE" />
	  					</div>
	  				</div>
	  				<div class="form-group">
				  		<label for="label-email"><spring:message code="Controller.JWTUserController.EMAIL" />:</label>
						<label name="label-email"><strong>  ${email}</strong></label>
				  	</div>
					<div class="form-group">
				  		<label for="label-username"><spring:message code="IntroPage.UserName" />:</label>
						<label name="label-username"><strong>  ${username}</strong></label>
                      </div>
                      
                      <div class="form-group">
                        <label for="password"><spring:message code="Controller.JWTUserController.PASSWORD" />:</label>
                      <input type="text" id="j_p" name="j_p" class="form-control password-style" tabindex="1" autocomplete="off"/>
                    </div>
                    
                    <div class="form-group">
                        <label for="re-password"><spring:message code="Controller.JWTUserController.PASSWORD_REENTER" />:</label>
                      <input type="text" id="j_re_p" name="j_re_p" class="form-control password-style" tabindex="2" autocomplete="off"/>
                    </div>

				  	<div class="form-group">
				  		<label for="password"><spring:message code="Controller.JWTUserController.MOBILE_FIRST" />:</label>
						<input type="text" id="j_mobile" name="j_mobile" class="form-control" tabindex="3" autocomplete="off"/>
				  	</div>
				  	
				  	<div class="form-group">
				  		<label for="re-password"><spring:message code="Controller.JWTUserController.MOBILE_REENTER" />:</label>
						<input type="text" id="j_re_mobile" name="j_re_mobile" class="form-control" tabindex="4" autocomplete="off"/>
                    </div>

					<input type="hidden" id="token" name="j_token" class="form-control" value="${token}">
				  	<input type="submit" class="btn btn-primary btn-lg" value="Confirmar cambio" />
				</form>
	  		</div><!-- /login -->
	  		<span id="appVersion" ng-if="appVersion != null"><spring:eval expression="@applicationProperties.getProperty('application.version')" /></span>

                                    </div>
                                    <!-- /Body Content -->
                                </div>
            </body>
            <script type="text/javascript">
                appVersion = "<spring:eval expression="
                @applicationProperties.getProperty('application.version')
                " />";
            </script>

            </html>