function vicks_07(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        

        
        $('#vicks_07_title').transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_07_sub').transition({x:0,y:0,opacity:1}, 500, function(){
            $('#vicks_07_text1').transition({x:0,y:0,opacity:1}, 500, function(){
                $('#vicks_07_text2').transition({x:0,y:0,opacity:1}, 500, function(){
                    $('#vicks_07_text3').transition({x:0,y:0,opacity:1}, 500);
                });
            });
        });
        setTimeout(showLogo,200);
        setTimeout(showPack,300);

        
        function showLogo(){
            $('#vicks_07_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_07_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_07_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_07_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_07_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_07_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_07_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_07_logo_blink').css('opacity');
            $('#vicks_07_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
