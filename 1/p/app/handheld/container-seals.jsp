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
</head>
<body class="handheld">
	<table border="1" class="body-table">
		<tbody>
			<tr>
				<td colspan=2>
					<div class="handHeldText col-xs-12">${seal1}</div>
				</td>
			</tr>
			<tr>
				<td colspan=2>
					<div class="handHeldText col-xs-12">${seal2}</div>
				</td>
			</tr>
			<tr>
				<td colspan=2>
					<div class="handHeldText col-xs-12">${seal3}</div>
				</td>
			</tr>
			<tr>
				<td colspan=2>
					<div class="handHeldText col-xs-12">${seal4}</div>
				</td>
			</tr>
			<tr>
				<td class="sealCell">
					<div class="sealDiv allow">
                  		<a>Permitir Embarque</a>
                  	</div>
				</td>
  				<td class="sealCell">
  					<div class="sealDiv deny">
						<a>Bloquear Embarque</a>
					</div>
				</td>
			</tr>							
		</tbody>
	</table>
</body>
</html>