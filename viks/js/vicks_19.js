function vicks_19(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        $('#vicks_19_text1').delay(100).transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_19_title').delay(200).transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_19_text2').delay(300).transition({x:0,y:0,opacity:1}, 500);
        
        function showLogo(){
            $('#vicks_19_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_19_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        
        setTimeout(showLogo,200);
        
        function blinkLogo(){
            var current = $('#vicks_19_logo_blink').css('opacity');
            $('#vicks_19_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
