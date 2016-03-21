function vicks_18(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        var elements = [];
        
        elements[0] = $('#vicks_18_title');
        elements[1] = $('#vicks_18_li1');
        elements[2] = $('#vicks_18_li2');
        elements[3] = $('#vicks_18_li3');
        elements[4] = $('#vicks_18_li4');
        elements[5] = $('#vicks_18_shadow');
        elements[6] = $('#vicks_18_text1');
        elements[7] = $('#vicks_18_text2');
        elements[8] = $('#vicks_18_text3');
        elements[9] = $('#vicks_18_text');
        
        for(i = 0; i < elements.length; i++){
            if (i == 5){
                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500, showPack);
            }else{
                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
            }
            
        }
        
//        $('#vicks_18_title').transition({x:0,y:0,opacity:1}, 500);
//        $('#vicks_18_sub').transition({x:0,y:0,opacity:1}, 500, function(){
//            $('#vicks_18_line1').css({'width':'424px'});
//            $('#vicks_18_text1').delay(300).transition({x:0,y:0,opacity:1}, 500, function(){
//                $('#vicks_18_line2').css({'width':'368px'});
//                $('#vicks_18_text2').delay(300).transition({x:0,y:0,opacity:1}, 500, function(){
//                    $('#vicks_18_line3').css({'width':'550px'});
//                    $('#vicks_18_text3').delay(300).transition({x:0,y:0,opacity:1}, 500, function(){
//                        $("#vicks_18_smok1").transition({x:0,y:0,opacity:1}, 500);
//                        $("#vicks_18_smok2").delay(100).transition({x:0,y:0,opacity:1}, 500);
//                        $("#vicks_18_smok3").delay(200).transition({x:0,y:0,opacity:1}, 500);
//                    });
//                });
//            });
//        });
        
        setTimeout(showLogo,200);

        
        function showLogo(){
            $('#vicks_18_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_18_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_18_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_18_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_18_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_18_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_18_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_18_logo_blink').css('opacity');
            $('#vicks_18_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
