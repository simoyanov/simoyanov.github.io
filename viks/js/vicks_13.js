function vicks_13(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        var elements = [];
        
        elements[0] = $('#vicks_13_title');
        elements[1] = $('#vicks_13_li1');
        elements[2] = $('#vicks_13_li2');
        elements[3] = $('#vicks_13_li3');
        elements[4] = $('#vicks_13_li4');
        elements[5] = $('#vicks_13_text2');
        elements[6] = $('#vicks_13_text3');
        elements[7] = $('#vicks_13_text');
        
        for(i = 0; i < elements.length; i++){
            if (i == 4){
                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500, showPack);
            }else{
                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
            }
            
        }
        
        
        function showLines(){
            $('#vicks_13_p1').transition({scale:1}, 500);
            $('#vicks_13_p2').delay(300).transition({scale:1}, 500);
            $('#vicks_13_c1').transition({opacity:1,rotate:0}, 500);
            $('#vicks_13_c2').delay(300).transition({opacity:1,rotate:0}, 500);
        }
        setTimeout(showLogo,200);

        
        function showLogo(){
            $('#vicks_13_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_13_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            showLines();
            $('#vicks_13_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_13_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_13_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_13_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_13_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_13_logo_blink').css('opacity');
            $('#vicks_13_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
