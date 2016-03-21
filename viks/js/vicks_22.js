function vicks_22(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        var elements = [];
        
        elements[0] = $('#vicks_22_title');
        elements[1] = $('#vicks_22_li1');
        elements[2] = $('#vicks_22_li2');
        elements[3] = $('#vicks_22_li3');
        elements[4] = $('#vicks_22_li4');
        elements[5] = $('#vicks_22_point');
        elements[6] = $('#vicks_22_text2');
        elements[7] = $('#vicks_22_text3');
        elements[8] = $('#vicks_22_text');
        
        for(i = 0; i < elements.length; i++){
            if (i == 5){
                elements[i].delay(100*i).transition({scale:1}, 500, showPack);
            }else{
                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
            }
            
        }
        
        
        setTimeout(showLogo,200);

        
        function showLogo(){
            $('#vicks_22_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_22_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_22_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_22_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_22_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_22_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_22_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_22_logo_blink').css('opacity');
            $('#vicks_22_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
