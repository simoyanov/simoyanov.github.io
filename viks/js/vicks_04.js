function vicks_04(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        var elements = [];
        
        elements[0] = $('#vicks_04_title');
        elements[1] = $('#vicks_04_question_sub');
        elements[2] = $('#vicks_04_question');
        elements[3] = $('#vicks_04_change');
        elements[4] = $('#vicks_04_btn1');
        elements[5] = $('#vicks_04_btn2');
        
        for(i = 0; i < elements.length; i++){
            elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
        }
        
        
        $("#vicks_04_btn1").on(MOUSE_CLICK, function(){
            $('#vicks_04_btn1_active').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_04_answer').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_04_text').transition({x:0,y:0,opacity:1}, 500);
        });
        
        $("#vicks_04_btn2").on(MOUSE_CLICK, function(){
            $(this).transition({x:0,y:0,opacity:0.3}, 500);
        });
        
        
        function showLogo(){
            $('#vicks_04_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_04_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        
        setTimeout(showLogo,200);
        
        function blinkLogo(){
            var current = $('#vicks_04_logo_blink').css('opacity');
            $('#vicks_04_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
