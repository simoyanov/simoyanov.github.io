function vicks_08(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        var elements = [];
        
        elements[0] = $('#vicks_08_title');
        elements[1] = $('#vicks_08_li1');
        elements[2] = $('#vicks_08_li2');
        elements[3] = $('#vicks_08_li3');
        elements[4] = $('#vicks_08_li4');
        elements[5] = $('#vicks_08_text2');
        elements[6] = $('#vicks_08_text3');
        elements[7] = $('#vicks_08_text');
        
        for(i = 0; i < elements.length; i++){
            if (i == 4){
                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500, showPack);
            }else{
                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
            }
            
        }
        
//        $('#vicks_08_title').transition({x:0,y:0,opacity:1}, 500);
//        $('#vicks_08_sub').transition({x:0,y:0,opacity:1}, 500, function(){
//            $('#vicks_08_line1').css({'width':'424px'});
//            $('#vicks_08_text1').delay(300).transition({x:0,y:0,opacity:1}, 500, function(){
//                $('#vicks_08_line2').css({'width':'368px'});
//                $('#vicks_08_text2').delay(300).transition({x:0,y:0,opacity:1}, 500, function(){
//                    $('#vicks_08_line3').css({'width':'550px'});
//                    $('#vicks_08_text3').delay(300).transition({x:0,y:0,opacity:1}, 500, function(){
//                        $("#vicks_08_smok1").transition({x:0,y:0,opacity:1}, 500);
//                        $("#vicks_08_smok2").delay(100).transition({x:0,y:0,opacity:1}, 500);
//                        $("#vicks_08_smok3").delay(200).transition({x:0,y:0,opacity:1}, 500);
//                    });
//                });
//            });
//        });
        
        function showLines(){
            $('#vicks_08_line1').css({'width':'636px'});
            $('#vicks_08_val1').transition({x:0,y:0,opacity:1}, 500, function(){
                $('#vicks_08_line2').css({'width':'661px'});
                $('#vicks_08_val2').transition({x:0,y:0,opacity:1}, 500, function(){
                    $('#vicks_08_line3').css({'width':'552px'});
                    $('#vicks_08_val3').transition({x:0,y:0,opacity:1}, 500);
                });
            });
        }
        setTimeout(showLogo,200);

        
        function showLogo(){
            $('#vicks_08_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_08_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            showLines();
            $('#vicks_08_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_08_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_08_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_08_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_08_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_08_logo_blink').css('opacity');
            $('#vicks_08_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
