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
		
        $("#logo_top").on(MOUSE_CLICK,function(){
            $('#km').fadeIn();
            $("#key_message").fadeIn();

        });
        $('#km').on(MOUSE_CLICK,function(){
            $('#km').fadeOut();
            $("#key_message").fadeOut();
        });
        $("#logo_bottom").on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_v2_12022016_pdf");});
        $("#teva").on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_v1_07022016_1","dasigna_felodip_vrachi_v1");});
    
        var touchMe = document.getElementById('touchMe');

        Touchy(touchMe, {
            two: function (hand, finger1, finger2) {
                $('#modal').fadeIn();
                $("#content").fadeIn();
                $('#modal').on(MOUSE_CLICK,function(){
                    $('#modal').fadeOut();
                    $("#content").fadeOut();
                });
            }
        });
	}
		

	
 

function openSlide(url, presentation_id) {
		if ( isTouch ) {
			com.veeva.clm.gotoSlide(url + ".zip", presentation_id == undefined ? "" : presentation_id);
		} else {
			window.location = "../" + url + "/" + url + ".html";
		}
}

function showModal(butt,cont){
    $(butt).on(MOUSE_CLICK,function(){
        $('#modal').fadeIn();
        $(cont).fadeIn();

    });
    $('#modal').on(MOUSE_CLICK,function(){
        $('#modal').fadeOut();
        $(cont).fadeOut();
    });
}

function showPdf(butt,e){
    $(butt).on(MOUSE_CLICK, function(){
     window.location = e;
    });
}

