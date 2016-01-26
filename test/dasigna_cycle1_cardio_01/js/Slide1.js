function Slide1(){
	var self = this;
	var activated = false;
	this.activate = function(){
		
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
		
        var elements = [];
        elements[0] = $("#head");
        elements[1] = $("#rectangle1");
        elements[2] = $("#rectangle2");
        elements[3] = $("#rectangle3");
        elements[4] = $("#rectangle4");
        elements[5] = $("#rectangle5");
        elements[6] = $("#rectangle6");
        elements[7] = $("#rectangle7");
        elements[8] = $("#rectangle8");
        elements[9] = $("#rectangle9");
        elements[10] = $("#rectangle10");
        elements[11] = $("#icon1");
        elements[12] = $("#icon2");
        elements[13] = $("#icon3");
        elements[14] = $("#icon4");
        elements[15] = $("#icon5");
        elements[16] = $("#icon6");
        elements[17] = $("#icon7");
        elements[18] = $("#icon8");
        elements[19] = $("#icon9");
        elements[20] = $("#text1");
        elements[21] = $("#text2");
        elements[22] = $("#text3");
        elements[23] = $("#text4");
        elements[24] = $("#text5");
        elements[25] = $("#text6");
        elements[26] = $("#text7");
        elements[27] = $("#text8");
        elements[28] = $("#text9");
        for ( var i = 0; i < elements.length; i++ ) {
            if (i > 0 && i < 11) {
                elements[i].delay(100*i).transition({x:0}, 500);
            } else if(i > 10 && i < 20){
                elements[i].delay(50*i).transition({scale:1.2}, 500);
                elements[i].transition({scale:1}, 500);      
            } else{
                elements[i].delay(50*i).transition({opacity: 1}, 500);
            }
        }
        $('#logo').on(MOUSE_CLICK,function(){
            openSlide("dasigna_cycle1_cardio_01");
        });
        $('#logo').on(MOUSE_CLICK,function(){
            openSlide("dasigna_cycle1_cardio_01");
        });
        $('.toslide2').on(MOUSE_CLICK,function(){openSlide("dasigna_cycle1_cardio_02");});
        $('.toslide7').on(MOUSE_CLICK,function(){openSlide("dasigna_cycle1_cardio_07");});
        $('.toslide3').on(MOUSE_CLICK,function(){openSlide("dasigna_cycle1_cardio_03");});
        $('.toslide8').on(MOUSE_CLICK,function(){openSlide("dasigna_cycle1_cardio_08");});
        $('.toslide4').on(MOUSE_CLICK,function(){openSlide("dasigna_cycle1_cardio_04");});
        $('.toslide19').on(MOUSE_CLICK,function(){openSlide("dasigna_cycle1_cardio_09");});
        $('.toslide5').on(MOUSE_CLICK,function(){openSlide("dasigna_cycle1_cardio_05");});
        $('.toslide21').on(MOUSE_CLICK,function(){openSlide("dasigna_cycle1_cardio_10");});
        $('.toslide6').on(MOUSE_CLICK,function(){openSlide("dasigna_cycle1_cardio_06");});
		 
		/* ******************** */
		}
}
