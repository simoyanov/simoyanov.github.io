function vicks_05(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
//        var elements = [];
//        
//        elements[0] = $('#vicks_05_title');
//        elements[1] = $('#vicks_05_sub');
//        elements[2] = $('#vicks_05_title');
//        
//        for(i = 0; i < elements.length; i++){
//            elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
//        }
        
        $('#vicks_05_title').transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_05_sub').transition({x:0,y:0,opacity:1}, 500, function(){
            $('#vicks_05_line1').css({'width':'424px'});
            $('#vicks_05_text1').delay(300).transition({x:0,y:0,opacity:1}, 500, function(){
                $('#vicks_05_line2').css({'width':'368px'});
                $('#vicks_05_text2').delay(300).transition({x:0,y:0,opacity:1}, 500, function(){
                    $('#vicks_05_line3').css({'width':'550px'});
                    $('#vicks_05_text3').delay(300).transition({x:0,y:0,opacity:1}, 500, function(){
                        $("#vicks_05_smok1").transition({x:0,y:0,opacity:1}, 500);
                        $("#vicks_05_smok2").delay(100).transition({x:0,y:0,opacity:1}, 500);
                        $("#vicks_05_smok3").delay(200).transition({x:0,y:0,opacity:1}, 500);
                    });
                });
            });
        });
        setTimeout(showLogo,200);
        setTimeout(showPack,300);

        
        function showLogo(){
            $('#vicks_05_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_05_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_05_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_05_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_05_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_05_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_05_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_05_logo_blink').css('opacity');
            $('#vicks_05_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
