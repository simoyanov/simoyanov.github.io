function vicks_23(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        var elements = [];
        
        elements[0] = $('#vicks_23_sub');
        elements[1] = $('#vicks_23_col1');
        elements[2] = $('#vicks_23_col2');
        elements[3] = $('#vicks_23_col3');
        elements[4] = $('#vicks_23_big_logo');
        elements[5] = $('#vicks_23_contacts');
        
        for(i = 0; i < elements.length;i++){
            elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
        }
        

        setTimeout(showLogo,200);
        setTimeout(showPack,300);

        
        function showLogo(){
            $('#vicks_23_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_23_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_23_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_23_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_23_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_23_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_23_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_23_logo_blink').css('opacity');
            $('#vicks_23_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
