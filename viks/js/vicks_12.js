function vicks_12(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        $('#vicks_12_title').transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_12_sub1').delay(200).transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_12_text1').delay(300).transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_12_graph1').delay(300).transition({x:0,y:0,opacity:1}, 500, function(){
            $('#vicks_12_col1').css({'height':'267px'});
            $('#vicks_12_val1_1').delay(300).transition({scale:1},500);
            $('#vicks_12_val1_2').delay(300).transition({scale:1},500);
            $('#vicks_12_col2').css({'height':'542px'});
            $('#vicks_12_val2_1').delay(300).transition({scale:1},500);
            $('#vicks_12_val2_2').delay(300).transition({scale:1},500);
        });
        $('#vicks_12_sub2').delay(600).transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_12_text2').delay(700).transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_12_graph2').delay(800).transition({x:0,y:0,opacity:1}, 500, function(){
            $('#vicks_12_line').transition({x:0,y:563,opacity:1}, 0, function(){
                $(this).transition({x:0,y:0,opacity:1}, 500, function(){
                    $('#vicks_12_line1').css({'width':'411px'});
                    $('#vicks_12_line2').css({'width':'430px'});
                    $('#vicks_12_val1').delay(300).transition({scale:1},500);
                    $('#vicks_12_val2').delay(300).transition({scale:1},500);
                });
                $('#vicks_12_col').css({'height':'563px'});
            });
            
        });
        $('#vicks_12_text').delay(900).transition({x:0,y:0,opacity:1}, 500);

        setTimeout(showLogo,200);
        setTimeout(showPack,300);

        
        function showLogo(){
            $('#vicks_12_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_12_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_12_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_12_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_12_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_12_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_12_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_12_logo_blink').css('opacity');
            $('#vicks_12_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
