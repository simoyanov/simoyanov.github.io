function vicks_01(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        var elements = [];
        
        elements[0] = $('#vicks_01_text1');
        elements[1] = $('#vicks_01_text2');
        elements[2] = $('#vicks_01_title');
        
        for(i = 0; i < elements.length; i++){
            elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
        }
        
        setTimeout(showLogo,200);
        setTimeout(showPack,300);

        
        function showLogo(){
            $('#vicks_01_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_01_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_01_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_01_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_01_sh1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_01_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_01_sh2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_01_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_01_sh3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_01_logo_blink').css('opacity');
            $('#vicks_01_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
