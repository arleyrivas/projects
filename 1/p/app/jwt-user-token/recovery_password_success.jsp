<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="${pageContext.request.contextPath}/img/favicon.ico" />
    <title>Aguadulce en Línea - <spring:message code="IntroPage.MainTitle" text="default text" /> </title>
    <!-- Bootstrap core CSS - v3.1.1 -->
    <link href="${pageContext.request.contextPath}/style/bootstrap-3.1.1.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="${pageContext.request.contextPath}/style/login.css" rel="stylesheet">
</head>
<body>
<script type="text/javascript">
appVersion= "<spring:eval expression="@applicationProperties.getProperty('application.version')" />";
</script>
	<div class="loginBody">
		<div class="body-content col-sm-12 col-md-12 col-lg-12">
	  		<div class="title">
	  			<img src="${pageContext.request.contextPath}/img/LogoPuertoAguadulceColor.jpg" class="imgLogin"/>
	  			<span class="headerTitle">
	  				<spring:message code="IntroPage.MainTitle" text="default text" />
	  			</span>
	  		</div>
			<div class="login">
				<div class="alert alert-success">
					<spring:message code="IntroPage.RecoveryPasswordSuccess" />
				</div>
	  		</div><!-- /login -->
	  		<span id="appVersion" ng-if="appVersion != null"><spring:eval expression="@applicationProperties.getProperty('application.version')" /></span>
	  		
		</div><!-- /Body Content -->
	</div>
</body>
</html>
