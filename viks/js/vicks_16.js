function vicks_16(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        

        
        $('#vicks_16_title').transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_16_sub').delay(100).transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_16_text').delay(200).transition({x:0,y:0,opacity:1}, 500);
        setTimeout(showLogo,200);
        setTimeout(showPack,300);

        
        function showLogo(){
            $('#vicks_16_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_16_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_16_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_16_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_16_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_16_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_16_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_16_logo_blink').css('opacity');
            $('#vicks_16_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
