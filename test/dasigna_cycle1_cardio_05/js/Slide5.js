function Slide5(){
	var self = this;
	var activated = false;
	this.activate = function(){
		
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
		
        var elements = [];
        elements[0] = $("#icon");
        elements[1] = $("#head");
        elements[2] = $("#table1");
        elements[3] = $("#text1");
        elements[4] = $("#text2");
        elements[5] = $("#text3");
        elements[6] = $("#text4");
        elements[7] = $("#text5");
        elements[8] = $("#table2");
        elements[9] = $("#text6");
        elements[10] = $("#text7");
        elements[11] = $("#text8");
        elements[12] = $("#text9");
        elements[13] = $("#text10");
        elements[14] = $("#text11");
        elements[15] = $("#text12");
        
        for ( var i = 0; i < elements.length; i++ ) {
            if (i == 1 || i == 2 || i == 8) {
                elements[i].delay(100*i).transition({opacity: 1}, 500);
            } else if(i == 0){
//                elements[i].delay(100*i).transition({opacity: 1, x: 0}, 500);
                elements[i].delay(100*i).transition({scale:1.2}, 500);
                elements[i].transition({scale:1}, 500);  
            } else{
                elements[i].delay(100*i).transition({opacity: 1, y: 0}, 500);
            }
        }
        $('#logo').click(function(){
            openSlide("dasigna_cycle1_cardio_01");
        });
		 
		/* ******************** */
		}
}
