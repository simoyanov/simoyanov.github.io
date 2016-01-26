function Slide8(){
	var self = this;
	var activated = false;
	this.activate = function(){
		
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
		
        var elements = [];
        var menuArray = [];
        for ( var i = 1; i < 12; i++ ) {
            menuArray[i] = $('.tab'+ i +'');
        }
        elements[0] = $("#icon");
        elements[1] = $("#head");
        elements[2] = $("#menu1");
        elements[3] = $("#menu2");
        elements[4] = $("#menu3");
        elements[5] = $("#menu4");
        elements[6] = $("#menu5");
        elements[7] = $("#menu6");
        elements[8] = $("#menu7");
        elements[9] = $("#menu8");
        elements[10] = $("#menu9");
        elements[11] = $("#menu10");
        elements[12] = $("#menu11");
        elements[13] = $("#title1");
        elements[14] = $("#table1_1");
        elements[15] = $("#table1_2");
        elements[16] = $("#table1_3");
        elements[17] = $("#table1_4");
        elements[18] = $("#table1_5");
        elements[19] = $("#table1_6");
        elements[20] = $("#table1_7");
        function menu1(){
            $('#menu1').addClass('active');
        }
        
        for ( var i = 0; i < elements.length; i++ ) {
            if (i == 1) {
                elements[i].delay(100*i).transition({opacity: 1}, 500);
            } else if(i == 0){
                elements[i].delay(100*i).transition({scale:1.2}, 500);
                elements[i].transition({scale:1}, 500);  
            } else if(i > 2 && i < 13){
                elements[i].delay(100*i).transition({opacity: 0.2, y: 0}, 500);
             } else if(i == 2){
                elements[i].delay(100*i).transition({y: 0,opacity: 0.2}, 500, menu1);
                
            } else{
                elements[i].delay(100*i).transition({opacity: 1, y: 0}, 500);
            }
        }
        for ( var i = 2; i < 13; i++ ) {
            elements[i].on(MOUSE_CLICK,function(){
                $('.menu').removeClass('active');
                $(this).addClass('active');
                var elId = $(this).attr('id');
                elId = elId.slice(4,6);
                elId = parseInt(elId);
                for (var j = 1; j < 12; j++){
                    for(var k = 0; k < menuArray[j].length; k++){
                        $(menuArray[j][k]).transition({opacity: 0, y: 100}, 500);
                    }
                }
                for(var k = 0; k < menuArray[elId].length; k++){
                    $(menuArray[elId][k]).delay(100*k).transition({opacity: 1, y: 0}, 500);
                }
            });
        }
        

        $('#logo').on(MOUSE_CLICK,function(){
            openSlide("dasigna_cycle1_cardio_01");
        });
		 
		/* ******************** */
		}
}
