function Slide7(){
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
        elements[2] = $("#line1");
        elements[3] = $("#title1");
        elements[4] = $("#box1");
        elements[5] = $("#line2");
        elements[6] = $("#title2");
        elements[7] = $("#box2");
        elements[8] = $("#line3");
        elements[9] = $("#title3");
        elements[10] = $("#box3");
       
        
        
        for ( var i = 0; i < elements.length; i++ ) {
            if (i == 1) {
                elements[i].delay(100*i).transition({opacity: 1}, 500);
            } else if(i == 0 || i == 3 || i == 6 || i == 9){
                elements[i].delay(100*i).transition({scale:1.2}, 500);
                elements[i].transition({scale:1}, 500);  
            } else{
                elements[i].delay(100*i).transition({opacity: 1, y: 0}, 500);
            }
        }
        $("#box1").click(function(){
            if($(this).attr('resize') == 0){
                $("#group1").transition({scale:1.2, y: -20, x: -5}, 500);
                $("#group3").transition({scale:0.9, y: 160}, 500);
                $("#group2").transition({scale:0.9, y: 170}, 500);
                $(this).attr('resize',1);
            } else {
                $("#group1").transition({scale:1, y: 0, x: 0}, 500);
                $("#group3").transition({scale:1, y: 0}, 500);
                $("#group2").transition({scale:1, y: 0}, 500);
                $(this).attr('resize',0);
            }
        });
        
        
        $("#box2").click(function(){
            if($(this).attr('resize') == 0){
                $("#group2").transition({scale:1.2, y: -150, x: -5}, 500);
                $("#group3").transition({scale:0.9, y: 160}, 500);
                $("#group1").transition({scale:0.9, y: 0}, 500);
                $(this).attr('resize',1);
            } else {
                $("#group2").transition({scale:1, y: 0, x: 0}, 500);
                $("#group3").transition({scale:1, y: 0}, 500);
                $("#group1").transition({scale:1, y: 0}, 500);
                $(this).attr('resize',0);
            }
        });
        
        $("#box3").click(function(){
            if($(this).attr('resize') == 0){
                $("#group3").transition({scale:1.2, y: -280, x: -5}, 500);
                $("#group2").transition({scale:0.9, y: -20}, 500);
                $("#group1").transition({scale:0.9, y: 0}, 500);
                $(this).attr('resize',1);
            } else {
                $("#group3").transition({scale:1, y: 0, x: 0}, 500);
                $("#group2").transition({scale:1, y: 0}, 500);
                $("#group1").transition({scale:1, y: 0}, 500);
                $(this).attr('resize',0);
            }
        });
        
        
        $('#logo').click(function(){
            openSlide("dasigna_cycle1_infections_01");
        });
		 
		/* ******************** */
		}
}
