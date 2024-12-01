var globalHandler;

function register(handler){
        if (document.addEventListener){
            document.addEventListener("keydown", internalHandler);
        } else if (window.attachEvent){
            document.onkeydown = internalHandler;
        }

}


function internalHandler(event) {
	var codigo=getCharCodeKeyEvent(event);
    
    if ((codigo >=112 &&  codigo <=118) || codigo === 38 || codigo === 40){
        if(window.event){
        	if(window.event.preventDefault){
        		window.event.preventDefault();
        		
        	}
        	window.event.keyCode = 0;
        }
        handleKey(codigo);
        return false;
    }

}

function getCharCodeKeyEvent(event){
	var event = event || window.event;

    var codigo = event.keyCode?  event.keyCode:event.charCode;//(window.event) ? event.which : event.keyCode;
    return codigo;
    
}


function goTo(url){
	
	location.href=url;
	return true;
}

$(".numeric").on("keypress",function (e) {
	 var unicode= e.charCode? e.charCode : e.keyCode;
		 if (unicode != 8){ //if the key isn't the backspace key (which we should allow)
	 	 if (unicode < 48|| unicode > 57){ //if not a number
	 		return false; //disable key press
	 }
	}
});