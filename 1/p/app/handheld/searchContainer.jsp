<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/businessPortal/css/spia-handheld-custom.css">
<link rel="stylesheet" href="/businessPortal/css/bootstrap-3.1.1.min.css">
<title>${containerTitle}</title>

<script src="${pageContext.request.contextPath}/libs/jquery/dist/jquery.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/handheld/js/jquery.mask.min.js" type="text/javascript"></script>	
<script src="${pageContext.request.contextPath}/handheld/js/keys.js" type="text/javascript"></script>

<script type="text/javascript">
	setTimeout(function(){
		document.getElementById('nbr').focus();	
	}, 10);
</script>

</head>
<body class="handheld">
	<table border="1" class="no-border-table">
		<thead class="head-white-table head-table">
			<tr>
				<td class="login-container-font">
					<a href="${pageContext.request.contextPath}/handheld" class="linkBack">
						<img src="/businessPortal/img/back.png" class="icon"/></a>

<%-- 					<a href="${pageContext.request.contextPath}/handheld" class="linkBack"> 
 						<span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a> --%>

					${vesselId}
<!-- 					<a href="/businessPortal/logout" id="handheldLogout" class="btn btn-default pull-right">  -->
<!-- 						<span class="glyphicon glyphicon-off" aria-hidden="true"></span> Salir</a> -->
				</td>
			</tr>
		</thead>
		<tbody class="body-table">
			
				<tr>
					<td colspan=2>
						<div class="row">
							<div class="col-xs-12 login-container-padding" >
								<form action="${pageContext.request.contextPath}/handheld/container/${vesselId}" method="post" role="form">
									<div class="row">
										<div class="col-xs-4 login-container-padding" >
								 			<input type="text"  id="nbr" name="containerNbr" value="${nbr}">
								 		</div>
								 		<div class="col-xs-5 login-container-padding" >
											<input type="submit" value="Buscar" />
										</div>
								 </form>
							</div>
						</div>
					</td>
				</tr>
			
<!-- 		</tbody> -->
<!-- 	</table> -->
<c:choose>
	<c:when test="${seal1 != null || seal2 != null && seal3 != null || seal4 != null}">
<%-- <c:if test="${seal1 != null || seal2 != null && seal3 != null || seal4 != null}"> --%>
<!-- <table border="1" class="body-table"> -->
<!-- 	<tbody> -->
		<c:choose>
			<c:when test="${seal1 != null}">
				<tr>
					<td colspan=2>
						<div class="handHeldText col-xs-12">${seal1}</div>
					</td>
				</tr>
			</c:when>
		</c:choose>
		<c:choose>
			<c:when test="${seal2 != null}">
				<tr>
					<td colspan=2>
						<div class="handHeldText col-xs-12">${seal2}</div>
					</td>
				</tr>
			</c:when>
		</c:choose>
		<c:choose>
			<c:when test="${seal3 != null}">
				<tr>
					<td colspan=2>
						<div class="handHeldText col-xs-12">${seal3}</div>
					</td>
				</tr>
			</c:when>
		</c:choose>
		<c:choose>
			<c:when test="${seal4 != null}">
				<tr>
					<td colspan=2>
						<div class="handHeldText col-xs-12">${seal4}</div>
					</td>
				</tr>
			</c:when>
		</c:choose>
			<tr>
				<td class="sealCell">
					<div class="row">
						<div class="sealDiv allow col-xs-5">
							<form id="formGrant" name="formGrant" action="${pageContext.request.contextPath}/handheld/grant/${nbr}/${vesselId}" method="post" role="form">
								<input id="submitGrant" type="submit" value="${containerGrant}">
							</form>
						</div>
	  					<div class="sealDiv deny col-xs-5 login-container-margin" >
							<form id ="formAdd" name="formAdd" action="${pageContext.request.contextPath}/handheld/add/${nbr}/${vesselId}" method="post" role="form">
								<input id="submitAdd" type="submit" value="${containerAdd}">
							</form>
						</div>
					</div>
				</td>
			</tr>	
		</tbody>
	</table>
	<c:if test="${not empty error}" >
		<p>${error}</p>
	</c:if>
	<c:if test="${not empty success}" >
		<p>${success}</p>
	</c:if>
<%-- </c:if> --%>
	</c:when>
	<c:otherwise>
		<div class="texto-result">${result} ${nbr}</div>
	</c:otherwise>
</c:choose>
<script type="text/javascript">
function handleKey(keyCode) {
	
	switch (keyCode) {
		case 112 : // 'F1'
			document.getElementById("formGrant").submit()
	        break;
       case 113 : // 'F2'
    	   document.getElementById("formAdd").submit()
	       
           break;
//        case 114 : // 'F3'
//     	   alert("F3");
    	         
//            break;
//        case 115 : // 'F4'
    	   
//     	   alert("F4");

//            break;
//        case 116 : // 'F5'

//     	   alert("F5");

//           break;
//        case 117 : // 'F6'
//     	   alert("F6");
    	   
    	 
//            break;
//        case 118 : // 'F7'
//        		toShowBar();
//            break;
//        case 119 : // 'F8'
//       		toHideBar();
//           break;
          
	default:
		//alert(event.keyCode);
		break;

	}
}

document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		register();
  }
}

</script>
</body>
</html>