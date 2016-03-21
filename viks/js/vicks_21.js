function vicks_21(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        var elements = [];
        
        elements[0] = $('#vicks_21_title');
        elements[1] = $('#vicks_21_sub');
        elements[2] = $('#vicks_21_li1');
        elements[3] = $('#vicks_21_li2');
        elements[4] = $('#vicks_21_text');
        
        for(i = 0; i < elements.length;i++){
            elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
        }
        

        setTimeout(showLogo,200);
        setTimeout(showPack,300);

        
        function showLogo(){
            $('#vicks_21_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_21_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_21_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_21_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_21_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_21_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_21_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_21_logo_blink').css('opacity');
            $('#vicks_21_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
