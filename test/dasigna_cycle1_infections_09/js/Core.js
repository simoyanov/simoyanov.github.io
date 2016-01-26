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
		
			
		var slide = new Slide9();
		slide.activate();
		
		getElementById("display").ontouchmove = function(event){
			event.preventDefault();
		}
        
//		getElementById("display").ontouchmove = function(e) {
//            e.stopPropagation();
//        };
        
        
//		$("#dinamiko_pharm_v1_package").on(MOUSE_UP, openInstruction);
//		
// 
//		
//	function openInstruction(e){		
//		openSlide("dasigna_dinamiko_pharm_v2_pdf1");		 
//	}
//	
}
	
function openSlide(url){
		if ( isTouch ) {
			com.veeva.clm.gotoSlide(url + ".zip");
		} else {
			window.location = "../" + url + "/" + url + ".html";
		}
}