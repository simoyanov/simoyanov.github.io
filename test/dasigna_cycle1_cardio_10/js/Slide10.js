function Slide10(){
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
        elements[2] = $("#col1");
        elements[3] = $("#col2");
        elements[4] = $("#col3");
        elements[5] = $("#col4");
        elements[6] = $("#col5");
        elements[7] = $("#col6");
        elements[8] = $("#col7");
        elements[9] = $("#col8");
        elements[10] = $("#col9");
        elements[11] = $("#col10");
        elements[12] = $("#col11");
        elements[13] = $("#text");
        elements[14] = $("#col12");
        elements[15] = $("#col13");
        elements[16] = $("#col14");
        elements[17] = $("#col15");
        elements[18] = $("#col16");
        
        
        
        
           
        
       
        
        for ( var i = 0; i < elements.length; i++ ) {
            if (i == 1 || i == 13) {
                elements[i].delay(100*i).transition({opacity: 1}, 500);
            } else if(i == 0){
                elements[i].delay(100*i).transition({scale:1.2}, 500);
                elements[i].transition({scale:1}, 500);  
            } else{
                elements[i].delay(100*i).transition({opacity: 1, x: 0}, 500);
            }
        }
        $('#logo').click(function(){
            openSlide("dasigna_cycle1_cardio_01");
        });
        
        

        
		 
		/* ******************** */
		}
}
