<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="../img/favicon.ico" />
    <title>Aguadulce en Línea - <spring:message code="IntroPage.MainTitle" text="default text" /> </title>
    <!-- Bootstrap core CSS - v3.1.1 -->
    <link href="../css/bootstrap-3.1.1.min.css" rel="stylesheet">
    <link href="../css/payu-response.css" rel="stylesheet">
    <!-- Google Fonts -->
</head>
<body>
	
		<div class="body-content col-sm-12 col-md-12 col-lg-12">
				<c:choose>
   					<c:when test="${pending}">
   						<div class="informationBody">
   						<div class="title">
	  						<span class="headerTitle">
	  							Pago recibido
	  						</span>
	  					</div>
		  				<div class="table-responsive">
			  				<table class="table table-hover">
			  					<thead>
			  						<tr>
				  						<th class="text-center">Factura</th>
				  						<th class="text-center">Valor</th>
				  						<th class="text-center">Nombre</th>
				  					</tr>
				  				</thead>
				  				<tbody>
				  					<c:forEach var="invoice" items="${invoices}">
										<tr>
											<td class="text-center">${invoice.finalNumber}</td>
											<td class="text-center">${invoice.totalTotal}</td>
											<td class="text-center">${invoice.payeeCustomerId}</td>
							  			</tr>				  	
									</c:forEach>
			  					</tbody>
			  				</table>
			  				<div>${error}</div>
<%-- 			  				<div><a href="${pageContext.request.contextPath}">Volver al portal</a></div> --%>
<!-- 								<a href="">Volver al portal</a></div> -->
								<div><input type="button" value="Volver a Portal" onclick="getCookie()"/></div>
			  			</div>
			  			</div>
			  		</c:when>
			  		<c:when test="${not pending}">
			  		  	<div><iframe src="${urlReceipt}" class="login-payu"></iframe>
<%-- 			  		  	<a href="${urlPortal}">Volver al portal</a></div> --%>
						<input type="button" value="Volver a Portal" onclick="getCookie()"/>
			  		</c:when>
			  	</c:choose>
			  	
</div>
<script>
function getCookie() {
    var name = "urlPostPay=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        	document.location.href = c.substring(name.length,c.length);
        }
    }
    return "";
}
</script>
</body>
</html>
