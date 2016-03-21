function vicks_17(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        

        
        $('#vicks_17_title').transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_17_sub').delay(100).transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_17_text1').delay(200).transition({x:0,y:0,opacity:1}, 500);
        $('#vicks_17_graph').delay(300).transition({x:0,y:0,opacity:1}, 500, function(){
            $('#vicks_17_col1').css({'height':'543px'});
            $('#vicks_17_col2').css({'height':'359px'});
            $('#vicks_17_col3').css({'height':'258px'});
            $('#vicks_17_col1_v').delay(100).transition({scale:1}, 500, function(){
                $('#vicks_17_n1').delay(0).transition({x:0,y:0,opacity:1}, 500);
                $('#vicks_17_n2').delay(100).transition({x:0,y:0,opacity:1}, 500);
                $('#vicks_17_n3').delay(200).transition({x:0,y:0,opacity:1}, 500);
            });
        });
        $('#vicks_17_text').delay(200).transition({x:0,y:0,opacity:1}, 500);
        setTimeout(showLogo,200);
        setTimeout(showPack,300);

        
        function showLogo(){
            $('#vicks_17_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_17_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_17_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_17_pack_text").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_17_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_17_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_17_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function blinkLogo(){
            var current = $('#vicks_17_logo_blink').css('opacity');
            $('#vicks_17_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
