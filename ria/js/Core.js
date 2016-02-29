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
		
			
		var slide = new Slide();
		slide.activate();
		
		document.ontouchmove = function(event){
			event.preventDefault();
		}

        if ( buttonLeft == "" ){
            $("#button_left").css("display","none");
        } else  {
            $("#button_left").on(MOUSE_CLICK, function(){openSlide(buttonLeft);});
        }
        if ( buttonRight == "" ){
            $("#button_right").css("display","none");
        } else {
            $("#button_right").on(MOUSE_CLICK, function(){openSlide(buttonRight);});
        }
        
        $("#logo_bottom").on(MOUSE_CLICK, function(){openSlide("dasigna_nov_reasanz_24022016_launchpad");});
        $("#links").on(MOUSE_CLICK, function(){openSlide("dasigna_nov_reasanz_24022016_71");});
        
        $("#button_left").delay(1000).transition({x:0}, 500);
        $("#button_right").delay(1000).transition({x:0}, 500);
    
	}
		

	


function openSlide(url){
		if ( isTouch ) {
			com.veeva.clm.gotoSlide(url + ".zip");
		} else {
			window.location = "../" + url + "/" + url + ".html";
		}
}

function showModal(butt,cont,close){
    // close only in cont
    $(butt).on(MOUSE_CLICK,function(){
        $('#modal').fadeIn();
        $(cont).fadeIn();
    });
    $(close).on(MOUSE_CLICK,function(){
        $('#modal').fadeOut();
        $(cont).fadeOut();
    });
}

function showPdf(butt,e){
    $(butt).on(MOUSE_CLICK, function(){
     window.location = e;
    });
}

