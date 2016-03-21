function vicks_20(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        var elements = [];
        
        elements[0] = $('#vicks_20_title');
        elements[1] = $('#vicks_20_sub');
        elements[2] = $('#vicks_20_old_pack');
        elements[3] = $('#vicks_20_li1');
        elements[4] = $('#vicks_20_li2');
        elements[5] = $('#vicks_20_li3');
        elements[6] = $('#vicks_20_point');
        elements[7] = $('#vicks_20_text');
        
        for(i = 0; i < elements.length;i++){
            if(i == 6){
                elements[i].delay(100*i).transition({scale:1}, 500);
            } else {
                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
            }
        }
        

        setTimeout(showLogo,200);
        setTimeout(showPack,300);

        
        function showLogo(){
            $('#vicks_20_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_20_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_20_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_20_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_20_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_20_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_20_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_20_logo_blink').css('opacity');
            $('#vicks_20_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
