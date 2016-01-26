function Slide2(){
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
        elements[3] = $("#table2");
        
        for ( var i = 0; i < elements.length; i++ ) {
            if (i == 1) {
                elements[i].delay(100*i).transition({opacity: 1}, 500);
//                elements[i].delay(100*i).transition({x:0}, 500);
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
