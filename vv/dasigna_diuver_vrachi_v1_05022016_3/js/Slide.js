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
        elements[1] = $("#circle1_1");
        elements[2] = $("#arrow1_2");
        elements[3] = $("#arrow2_2");
        elements[4] = $("#box1_3");
        elements[5] = $("#box2_3");
        elements[6] = $("#arrow3_4");
        elements[7] = $("#arrow4_4");
        elements[8] = $("#arrow5_4");
        elements[9] = $("#arrow6_4");
        elements[10] = $("#arrow7_4");
        elements[11] = $("#box3_5");
        elements[12] = $("#circle2_5");
        elements[13] = $("#box4_5");
        elements[14] = $("#box5_5");
        elements[15] = $("#circle3_5");
        elements[16] = $("#arrow8_6");
        elements[17] = $("#arrow9_6");
        elements[18] = $("#arrow10_6");
        elements[19] = $("#arrow11_6");
        elements[20] = $("#box6_7");
        elements[21] = $("#box7_7");
        elements[22] = $("#arrow12_8");
        elements[23] = $("#arrow13_8");
        elements[24] = $("#text");
        
        
        
        for ( var i = 0; i < elements.length; i ++ ) {
            if ( i == 4 || i == 5 || i == 11 || i == 13 || i == 14 || i == 14 || i == 20 || i == 21 ){
                elements[i].delay(100*i).transition({scale:1}, 500);
            } else if ( i == 1 ){
                elements[i].delay(100*i).transition({scale:1}, 500);
                $("#text1").delay(200*i).transition({x:0,y:0,opacity:1}, 500);
                $("#text2").delay(200*i).transition({x:0,y:0,opacity:1}, 500);
            } else if ( i == 12 ){
                elements[i].delay(100*i).transition({scale:1}, 500);
                $("#text3").delay(100*i).transition({x:0,y:0,opacity:1}, 500);
            } else if ( i == 15 ){
                elements[i].delay(100*i).transition({scale:1}, 500);
                $("#text4").delay(100*i).transition({x:0,y:0,opacity:1}, 500);
            } else {
                elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
            }
        }
        
        
        showModal("#button_info","#content");
        

		/* ******************** */
		}
}
