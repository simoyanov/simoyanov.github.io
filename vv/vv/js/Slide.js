function Slide(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        

        var elements = [];
	
        $("#clock").delay(200).transition({x:0,y:0,opacity:1}, 500);
        $("#hour").delay(200).transition({x:0,y:0,opacity:1,rotate:'179deg'}, 500);
        $("#min").delay(200).transition({x:0,y:0,opacity:1,rotate:'120deg'}, 500);
        $("#shadow").delay(200).transition({x:0,y:0,opacity:1}, 500);
        elements[0] = $("#text");
        elements[1] = $("#plate");
        elements[2] = $("#day");
        elements[3] = $("#hor_light");
        elements[4] = $("#ver_light");
        elements[5] = $("#day_title");
        elements[6] = $("#day_plate");
        elements[7] = $("#day_light");
        elements[8] = $("#night_title");
        elements[9] = $("#night_plate");
        elements[10] = $("#night_light");
//        elements[11] = $("#box3_5");
//        elements[12] = $("#circle2_5");
//        elements[13] = $("#box4_5");
//        elements[14] = $("#box5_5");
//        elements[15] = $("#circle3_5");
//        elements[16] = $("#arrow8_6");
//        elements[17] = $("#arrow9_6");
//        elements[18] = $("#arrow10_6");
//        elements[19] = $("#arrow11_6");
//        elements[20] = $("#box6_7");
//        elements[21] = $("#box7_7");
//        elements[22] = $("#arrow12_8");
//        elements[23] = $("#arrow13_8");
//        elements[24] = $("#text");
        
        
        
        for ( var i = 0; i < elements.length; i ++ ) {
            if ( i == 5 || i == 8 ){
                elements[i].delay(100*i).transition({scale:1}, 500);
                
            } else {
                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
            }
        }
        
        //day
        elements[5].on(MOUSE_CLICK, function(){
            $("#day_value").transition({x:0,y:0,opacity:1}, 500);
            elements[2].transition({x:0,y:0,opacity:0}, 500);
            $("#morning").transition({x:0,y:0,opacity:1}, 500);
            $("#night").transition({x:0,y:0,opacity:0}, 500);
            $("#hour").delay(200).transition({x:0,y:0,opacity:1,rotate:'80deg'}, 500);
            $("#min").delay(200).transition({x:0,y:0,opacity:1,rotate:'80deg'}, 500);
            
        });
        
        elements[8].on(MOUSE_CLICK, function(){
            $("#night_value").transition({x:0,y:0,opacity:1}, 500);
            elements[2].transition({x:0,y:0,opacity:0}, 500);
            $("#morning").transition({x:0,y:0,opacity:0}, 500);
            $("#night").transition({x:0,y:0,opacity:1}, 500);
            $("#hour").delay(200).transition({x:0,y:0,opacity:1,rotate:'0deg'}, 500);
            $("#min").delay(200).transition({x:0,y:0,opacity:1,rotate:'0deg'}, 500);
            
        });
//        for ( var i = 0; i < elements.length; i ++ ) {
//            if ( i == 4 || i == 5 || i == 11 || i == 13 || i == 14 || i == 14 || i == 20 || i == 21 ){
//                elements[i].delay(100*i).transition({scale:1}, 500);
//            } else if ( i == 1 ){
//                elements[i].delay(100*i).transition({scale:1}, 500);
//                $("#text1").delay(200*i).transition({x:0,y:0,opacity:1}, 500);
//                $("#text2").delay(200*i).transition({x:0,y:0,opacity:1}, 500);
//            } else if ( i == 12 ){
//                elements[i].delay(100*i).transition({scale:1}, 500);
//                $("#text3").delay(100*i).transition({x:0,y:0,opacity:1}, 500);
//            } else if ( i == 15 ){
//                elements[i].delay(100*i).transition({scale:1}, 500);
//                $("#text4").delay(100*i).transition({x:0,y:0,opacity:1}, 500);
//            } else {
//                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
//            }
//        }
        
        
//        showModal("#button_info","#content");
//        function touchDoubleModal(butt,cont){
//            $(butt).on(MOUSE_CLICK,function(){
//                $('#modal').fadeIn();
//                $(cont).fadeIn();
//
//            });
//            $('#modal').on(MOUSE_CLICK,function(){
//                $('#modal').fadeOut();
//                $(cont).fadeOut();
//            });
//        }

		/* ******************** */
		}
}
