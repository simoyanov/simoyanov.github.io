function vicks_15(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        var elements = [];
        
        elements[0] = $('#vicks_15_title');
        elements[1] = $('#vicks_15_question_sub');
        elements[2] = $('#vicks_15_question');
        elements[3] = $('#vicks_15_change');
        elements[4] = $('#vicks_15_btn1');
        elements[5] = $('#vicks_15_btn2');
        elements[6] = $('#vicks_15_btn3');
        elements[7] = $('#vicks_15_btn4');
        
        for(i = 0; i < elements.length; i++){
            elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
        }
        
        
        $("#vicks_15_btn4").on(MOUSE_CLICK, function(){
            $('#vicks_15_btn2_a').fadeIn();
            $(this).fadeOut();
            $('#vicks_15_change').fadeOut();
            $('#vicks_15_answer').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_15_text').transition({x:0,y:0,opacity:1}, 500);
        });
        
        $("#vicks_15_btn2").on(MOUSE_CLICK, function(){
            $(this).transition({x:0,y:0,opacity:0.3}, 500);
        });
        $("#vicks_15_btn1").on(MOUSE_CLICK, function(){
            $(this).transition({x:0,y:0,opacity:0.3}, 500);
        });
        $("#vicks_15_btn3").on(MOUSE_CLICK, function(){
            $(this).transition({x:0,y:0,opacity:0.3}, 500);
        });
        
        
        function showLogo(){
            $('#vicks_15_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_15_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        
        setTimeout(showLogo,200);
        
        function blinkLogo(){
            var current = $('#vicks_15_logo_blink').css('opacity');
            $('#vicks_15_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
