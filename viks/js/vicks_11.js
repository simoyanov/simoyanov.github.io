function vicks_11(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        

        
        $('#vicks_11_title').transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_11_sub').delay(100).transition({x:0,y:0,opacity:1}, 500, function(){
            $('#vicks_11_c1').transition({rotate:0,opacity:1}, 500);
            $('#vicks_11_p1').transition({scale:1}, 500);
            $('#vicks_11_li1').transition({x:0,y:0,opacity:1}, 500, function(){
                $('#vicks_11_c2').transition({rotate:0,opacity:1}, 500);
                $('#vicks_11_p2').transition({scale:1}, 500);
                $('#vicks_11_li2').transition({x:0,y:0,opacity:1}, 500);
            });
        });
        $('#vicks_11_text').delay(200).transition({x:0,y:0,opacity:1}, 500);
        setTimeout(showLogo,200);
        setTimeout(showPack,300);

        
        function showLogo(){
            $('#vicks_11_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_11_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_11_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_11_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_11_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_11_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_11_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_11_logo_blink').css('opacity');
            $('#vicks_11_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
