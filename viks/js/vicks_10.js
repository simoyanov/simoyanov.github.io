function vicks_10(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        var elements = [];
        
        elements[0] = $('#vicks_10_title');
        elements[1] = $('#vicks_10_question_sub');
        elements[2] = $('#vicks_10_question');
        elements[3] = $('#vicks_10_change');
        elements[4] = $('#vicks_10_change_pic1');
        elements[5] = $('#vicks_10_change_val1');
        elements[6] = $('#vicks_10_change_pic2');
        elements[7] = $('#vicks_10_change_val2');
        elements[8] = $('#vicks_10_btn1');
        elements[9] = $('#vicks_10_btn2');
        elements[10] = $('#vicks_10_btn3');
        elements[11] = $('#vicks_10_btn4');
        
        for(i = 0; i < elements.length; i++){
            elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
        }
        
        $("#vicks_10_btn1").on(MOUSE_CLICK, function(){
            $(this).fadeOut()
            $('#vicks_10_btn1_a').fadeIn();
            $('#vicks_10_change').fadeOut();
            $('#vicks_10_answer').fadeIn();
            $('#vicks_10_text1').fadeIn();
             $('#vicks_10_change_val1').fadeOut();
             $('#vicks_10_change_val1_a').fadeIn();
        });
        
        $("#vicks_10_btn2").on(MOUSE_CLICK, function(){
            $(this).fadeOut()
            $('#vicks_10_btn2_a').fadeIn();
        });
        
        $("#vicks_10_btn3").on(MOUSE_CLICK, function(){
            $(this).fadeOut()
            $('#vicks_10_btn3_a').fadeIn();
        });
        
        $("#vicks_10_btn4").on(MOUSE_CLICK, function(){
            $(this).fadeOut()
            $('#vicks_10_btn4_a').fadeIn();
            $('#vicks_10_change').fadeOut();
            $('#vicks_10_answer').fadeIn();
            $('#vicks_10_text2').fadeIn();
             $('#vicks_10_change_val2').fadeOut();
             $('#vicks_10_change_val2_a').fadeIn();
        });
                
        function showLogo(){
            $('#vicks_10_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_10_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        
        setTimeout(showLogo,200);
        
        function blinkLogo(){
            var current = $('#vicks_10_logo_blink').css('opacity');
            $('#vicks_10_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
