function Slide4(){
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
        elements[2] = $("#table");
        elements[3] = $("#text1");
        elements[4] = $("#text2");
        elements[5] = $("#text3");
        elements[6] = $("#text4");
        elements[7] = $("#text5");
        elements[8] = $("#text6");
        elements[9] = $("#text7");
        elements[10] = $("#text8");
        elements[11] = $("#text9");
        
        for ( var i = 0; i < elements.length; i++ ) {
            if (i == 1 || i == 2) {
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
