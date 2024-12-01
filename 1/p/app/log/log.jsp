<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Logs</title>
</head>
<body>
<h1>${server} //${ip}</h1>
 <c:forEach items="${files}" var="file">
    <a href="${file}">${file}</a> <a href="download/${file}">download</a>
    <br/>
</c:forEach>
</body>
</html>