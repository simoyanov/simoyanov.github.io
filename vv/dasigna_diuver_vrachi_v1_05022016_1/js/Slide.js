function Slide(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        $('#button_info').delay(1000).transition({x:0,pacity:1}, 500);
        

        var elements = [];
	
        elements[0] = $("#title");
        elements[1] = $("#img1");
        elements[2] = $("#val1");
        elements[3] = $("#img2");
        elements[4] = $("#val2");
        elements[5] = $("#img3");
        elements[6] = $("#val3");
        elements[7] = $("#img4");
        elements[8] = $("#val4");
        elements[9] = $("#img5");
        elements[10] = $("#val5");
        
        for ( var i = 0; i < elements.length; i ++ ) {
            if ( i == 1 || i == 3 || i == 5 || i == 7 || i == 9 ){
                elements[i].delay(100*i).transition({scale:1.1}, 500);
                elements[i].transition({scale:1}, 500);
            } else {
                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
            }
        }
        
        
        
        $("#img1").on(MOUSE_CLICK, function(){openSlide("dasigna_diuver_vrachi_v1_05022016_2");});
//        $("#img2").on(MOUSE_CLICK, function(){openSlide("dasigna_diuver_vrachi_v1_05022016_");});
//        $("#img3").on(MOUSE_CLICK, function(){openSlide("dasigna_diuver_vrachi_v1_05022016_");});
//        $("#img4").on(MOUSE_CLICK, function(){openSlide("dasigna_diuver_vrachi_v1_05022016_");});
//        $("#img5").on(MOUSE_CLICK, function(){openSlide("dasigna_diuver_vrachi_v1_05022016_");});
        $("#val1").on(MOUSE_CLICK, function(){openSlide("dasigna_diuver_vrachi_v1_05022016_2");});
//        $("#val2").on(MOUSE_CLICK, function(){openSlide("dasigna_diuver_vrachi_v1_05022016_");});
//        $("#val3").on(MOUSE_CLICK, function(){openSlide("dasigna_diuver_vrachi_v1_05022016_");});
//        $("#val4").on(MOUSE_CLICK, function(){openSlide("dasigna_diuver_vrachi_v1_05022016_");});
//        $("#val5").on(MOUSE_CLICK, function(){openSlide("dasigna_diuver_vrachi_v1_05022016_");});

		/* ******************** */
		}
}
