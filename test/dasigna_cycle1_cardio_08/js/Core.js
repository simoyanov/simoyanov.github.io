var MOUSE_CLICK = "click";
var MOUSE_DOWN = "mousedown";
var MOUSE_UP = "mouseup";
var isTouch = false;

if  ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) {
	MOUSE_CLICK = "touchstart";
	MOUSE_DOWN = "touchstart";
	MOUSE_UP = "touchend";
	isTouch = true;
}	

window.onload = Boot;

function Boot() {
		
			
		var slide = new Slide8();
		slide.activate();
		
		document.ontouchmove = function(event){
			event.preventDefault();
		}
	
}
	
function openSlide(url){
		if ( isTouch ) {
			com.veeva.clm.gotoSlide(url + ".zip");
		} else {
			window.location = "../" + url + "/" + url + ".html";
		}
}