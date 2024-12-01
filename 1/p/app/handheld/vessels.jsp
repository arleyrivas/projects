<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/businessPortal/css/spia-handheld-custom.css">
<link rel="stylesheet" href="/businessPortal/css/bootstrap-3.1.1.min.css">

<title>${titleLabel}</title>

<script src="${pageContext.request.contextPath}/libs/jquery/dist/jquery.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/handheld/js/jquery.mask.min.js" type="text/javascript"></script>	
<script src="${pageContext.request.contextPath}/handheld/js/keys.js" type="text/javascript"></script>
 
</head>
<body class="handheld">

	<table  border="1">
		<thead class="head-table">
			<tr>
				<td>
					<div class="row">
						<span class="col-xs-6 paddingTop login-vessels-font" >${headTitleLabel}</span>
						<span class="col-xs-4 noPadding">
							<a href="/businessPortal/logout" id="handheldLogout" class="btn btn-sm btn-default pull-right noPadding"> 
								<img src="img/logout.png" class="icon"/>${logoutLabel}
							</a>
						</span>
					</div>
				</td>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${vessels}" var="item" varStatus="loop">
			<tr id="row_${loop.index+1}">
				<td class="cellNoPaddingLeft">
					<a href="handheld/searchContainer/${item.id}" id="vessel_${loop.index+1}" class="handHeldLink" tabIndex="${loop.index+1}">
					<div class="row">
						<span class="handHeldMain col-xs-3">${item.vesselId}</span>
						<span class="handHeldText col-xs-3"><fmt:formatDate value="${item.ETA}" pattern="dd/MM/yyyy" /></span>
						<span class="handHeldText col-xs-12">${item.vesselName}</span>
					</div>
					</a>
				</td>
			</tr>
		</c:forEach>
		</tbody>
	</table>
	<script type="text/javascript">
	function handleKey(keyCode) {
		switch (keyCode) {
			case 38 : // 'Flecha arriba'
				styleVessel(keyCode)
		        break;
	       	case 40 : // 'Flecha abajo'
	       		styleVessel(keyCode)       
	           	break;	          
			default:
			break;
	
		}
	}
	
	function styleVessel(keyCode){
		var element = null;
		var previousElement = null;
		var previousRowElement = null;
		if(document.activeElement.tabIndex === -1 || document.activeElement.tabIndex === 0){
			element = document.getElementById("vessel_1");
			rowElement = document.getElementById("row_1");
		}else{
			var arr_id = document.activeElement.id.split("_");
			var index = parseInt(arr_id[1]);
			previousElement = document.activeElement;
			previousRowElement = document.getElementById("row_"+index);
			
			var newIndex = null;
			if(keyCode === 38){
				newIndex = index === 1 ? index : index-1;
			}
			if(keyCode === 40){
				newIndex = index === 2 ? index : index+1;
			}
			if(newIndex !== null){
				var activeVesselId = "vessel_"+newIndex;
				var activeRowId = "row_"+newIndex;
				element = document.getElementById(activeVesselId);
				rowElement = document.getElementById(activeRowId);
			}
			
		}
		
		if(element){
			setTimeout(function(){
				element.focus();	
			}, 10);
		}
		if(previousRowElement){
			previousRowElement.style.background = "#FFFFFF";
		}
		if(rowElement){
			rowElement.style.background = "#DAECDC";
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