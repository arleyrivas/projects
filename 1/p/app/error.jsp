<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="${relativePath}img/favicon.ico" />
    <title>Aguadulce en Línea - Portal de Negocios</title>
    <!-- Bootstrap core CSS - v3.1.1 -->
    <link href="${relativePath}style/bootstrap-3.1.1.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="${relativePath}style/login.css" rel="stylesheet">
</head>
<body>
	<div class="loginBody">
		<div class="body-content col-sm-12 col-md-12 col-lg-12">
	  		<div class="title">
	  			<span class="headerTitle"> <spring:message code="IntroPage.MainTitle" text="default text" /></span>
	  		</div>
			<c:if test="${not empty error}"> 
				<div class="alert alert-danger">
					<span class="glyphicon glyphicon-warning-sign"></span> ${error}.
		  		</div>
	  		</c:if>
	  		<span id="appVersion" ng-if="appVersion != null"><spring:eval expression="@applicationProperties.getProperty('application.version')" /></span>
	  		
		</div><!-- /Body Content -->
	</div>
</body>
<script type="text/javascript">
appVersion= "<spring:eval expression="@applicationProperties.getProperty('application.version')" />";
</script>
</html>
