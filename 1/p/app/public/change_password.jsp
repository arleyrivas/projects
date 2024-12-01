<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Aguadulce en Línea - Portal de Negocios</title>
<!-- Bootstrap core CSS - v3.1.1 -->
<link href="style/bootstrap-3.1.1.min.css" rel="stylesheet">
<!-- Google Fonts -->
<link href="style/login.css" rel="stylesheet">
</head>
<body>
	<div class="loginBody login-body-title" >
		<div class="body-content col-sm-12 col-md-12 col-lg-12">
			<div class="login">
				<c:if test="${not empty error}">
					<div class="alert alert-danger">
						<span class="glyphicon glyphicon-warning-sign"></span> ${error}.
					</div>
				</c:if>
				<form action="/businessPortal/api/user/confirm" method="post"
					role="form" autocomplete="off">
					<div class="title login-title">
						<img
							src="${pageContext.request.contextPath}/img/LogoPuertoAguadulceColor.jpg"
							class="imgLogin" /> <span class="headerTitle"> <spring:message
								code="IntroPage.MainTitle" text="default text" />
						</span>
						<div class="title">
							<span class="subheaderTitle">Cambio de contrase&ntilde;a</span>
						</div>
					</div>
					<div class="form-group">
						<label for="label-username">Nombre de usuario:</label></br> <label
							name="label-username"><strong> ${username}</strong></label>
					</div>
					<input type="tel" hidden /> <input type="password"
						class="password-hide" autocomplete="off" id="password"
						name="password">
					<div class="form-group">
						<label for="j_p">Ingrese una contrase&ntilde;a</label> <input
							type="text" id="j_p" name="j_p" autocomplete="off"
							class="form-control password-style" tabindex="1">
					</div>
					<input type="tel" hidden /> <input type="password"
						class="password-hide" width:5px;" autocomplete="off" id="password"
						name="password">
					<div class="form-group">
						<label for="j_re_p">Reingrese la contrase&ntilde;a</label> <input
							type="text" id="j_re_p" name="j_re_p" autocomplete="off"
							class="form-control password-style" tabindex="2">
					</div>
					<div class="form-group login-error-color">
						<p>Recuerde que la contraseña debe contener:</p>
						<ul>
							<li>Mínimo 8 caracteres</li>
							<li>Una letra mayúscula</li>
							<li>Una letra minúscula</li>
							<li>Un número</li>
							<li>Un caracter especial</li>
						</ul>
					</div>
					<input type="hidden" id="j_u" name="j_u" class="form-control"
						value="${username}"> <input type="hidden" id="j_o_p"
						name="j_o_p" class="form-control" value="${hash}"> <input
						type="submit" class="btn btn-primary btn-lg"
						value="Confirmar Registro" />
				</form>
			</div>
			<!-- /login -->
			<span id="appVersion" ng-if="appVersion != null"><spring:eval
					expression="@applicationProperties.getProperty('application.version')" /></span>

		</div>
		<!-- /Body Content -->
	</div>
</body>
<script type="text/javascript">
appVersion= "<spring:eval expression="@applicationProperties.getProperty('application.version')" />";
</script>
</html>
