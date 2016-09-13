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
    document.ontouchmove = function (event) {
        event.preventDefault();
    }
    if (buttonLeft == "") {
        $("#button_left").css("display", "none");
    }
    else {
        Hammer(display).on("swiperight", function(){
            openSlide(buttonLeft);
        });
    }
    if (buttonRight == "") {
        $("#button_right").css("display", "none");
    }
    else {
        Hammer(display).on("swipeleft", function(){
            openSlide(buttonRight);
        });
    }
//    $("#logo").on(MOUSE_CLICK, function () {
//        openSlide("dasigna_spiromax_v2_08092016_2");
//    });
}
		

	
 

function openSlide(url){
		if ( isTouch ) {
			com.veeva.clm.gotoSlide(url + ".zip");
		} else {
			window.location = "../" + url + "/" + url + ".html";
		}
}

function showModal(butt,cont){
    
    $(butt).on(MOUSE_CLICK,function(){
        $(butt).addClass('active');
        $('#modal').fadeIn();
        $(cont).fadeIn();
    });
    $('#modal').on(MOUSE_CLICK,function(){
        $('#modal').fadeOut();
        $(cont).fadeOut();
        $(butt).removeClass('active');
    });
}

function showPdf(butt,e){
    $(butt).on(MOUSE_CLICK, function(){
     window.location = e;
    });
}

