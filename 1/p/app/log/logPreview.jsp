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
 <pre id="contenido">
 ${contents}
 </pre>
 <button id="more" onclick="previewMore()">+</button>
 <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
 <script type="text/javascript">
 var nextPage = 1
 function previewMore(){
	 $.get( "${file}/"+nextPage, function( data ) {
		  $( "#contenido" ).append( data );
		  nextPage++;
		  if(!data)
			  $("#more").hide();
		});
	 }
 </script>
</body>
</html>