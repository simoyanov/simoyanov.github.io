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
		
		document.ontouchmove = function(event){
			event.preventDefault();
		}
		
        var scrollable = document.getElementById("content");

        // set up touchStart event handler
        var onTouchStartScrollable = function(e) {
            // listen to when the user moves finger
            this.addEventListener("touchMove", onTouchMoveScrollable);
            // add listener to when touch end occurs
            this.addEventListener("touchEnd", onTouchEndScrollable);
        };
        // when the user swipes, update element positions to swipe
        var onTouchMoveScrollable = function(e) {
            // ... do your scrolling here
        };
        // this is what is executed when the user stops the movement
        var onTouchEndScrollable = function(e) {
            // clean up event listeners
            this.removeEventListener("touchMove", onTouchMoveScrollable);
            this.removeEventListener("touchEnd", onTouchEndScrollable);
        };
        scrollable.addEventListener("touchStart", onTouchStartScrollable);
        
		$("#dinamiko_pharm_v1_package").on(MOUSE_UP, openInstruction);
		
 
		
	function openInstruction(e){		
		openSlide("dasigna_dinamiko_pharm_v2_pdf1");		 
	}
	
}
	
function openSlide(url){
		if ( isTouch ) {
			com.veeva.clm.gotoSlide(url + ".zip");
		} else {
			window.location = "../" + url + "/" + url + ".html";
		}
}