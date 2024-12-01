<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><spring:message code="IntroPage.MainTitle" text="default text" /></title>
    <!-- Bootstrap core CSS - v3.1.1 -->
    <link href="${pageContext.request.contextPath}/style/bootstrap-3.1.1.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="${pageContext.request.contextPath}/style/login.css" rel="stylesheet">
</head>
<body>
	<div class="loginBody">
		<div class="body-content col-sm-12 col-md-12 col-lg-12">
			<div class="login">
				<div class="title login-title" >
	  					<img src="${pageContext.request.contextPath}/img/LogoPuertoAguadulceColor.jpg" class="imgLogin"/>
	  					<span class="headerTitle">
	  						<spring:message code="IntroPage.MainTitle" text="default text" />
	  					</span>
	  					<c:if test="${not empty error}"> 
							<div class="alert alert-danger">
								<span class="glyphicon glyphicon-warning-sign"></span> ${error}</div>
	  					</c:if>
	  				</div>
	  		</div><!-- /login -->
	  		<span id="appVersion" ng-if="appVersion != null"><spring:eval expression="@applicationProperties.getProperty('application.version')" /></span>
	  		
		</div><!-- /Body Content -->
	</div>
</body>
<script type="text/javascript">
appVersion= "<spring:eval expression="@applicationProperties.getProperty('application.version')" />";
</script>
</html>
