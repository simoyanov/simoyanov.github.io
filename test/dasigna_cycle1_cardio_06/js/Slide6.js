function Slide6(){
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
        elements[2] = $("#text1");
        elements[3] = $("#box1");
        elements[4] = $("#box2");
        elements[5] = $("#box3");
        elements[6] = $("#box4");
        elements[7] = $("#text2");
        elements[8] = $("#box5");
        elements[9] = $("#box6");
        elements[10] = $("#box7");
        
        
        for ( var i = 0; i < elements.length; i++ ) {
            if (i == 1) {
                elements[i].delay(100*i).transition({opacity: 1}, 500);
            } else if (i == 2) {
                elements[i].delay(100*i).transition({opacity: 1}, 500, showBorder1);
            } else if (i == 7) {
                elements[i].delay(100*i).transition({opacity: 1}, 500, showBorder2);
            } else if(i == 0){
                elements[i].delay(100*i).transition({scale:1.2}, 500);
                elements[i].transition({scale:1}, 500);  
            } else if(i == 5){
                elements[i].delay(100*i).transition({opacity: 1, y: 0}, 500, showArrow1);
            } else if(i == 9){
                elements[i].delay(100*i).transition({opacity: 1, y: 0}, 500, showArrow2);
            } else{
                elements[i].delay(100*i).transition({opacity: 1, y: 0}, 500);
            }
        }
        function showBorder1(){
            $("#border1").css("width","947px");
            $("#border1").css("height","1158px");
        }
        function showBorder2(){
            $("#border2").css("width","947px");
            $("#border2").css("height","913px");
        }
        
        function showArrow1(){
            $("#arrow1").css("width","146px");
            $("#arrow1").css("height","770px");
        }
        function showArrow2(){
            $("#arrow2").css("width","231px");
            $("#arrow2").css("height","335px");
        }
        
        $('#logo').click(function(){
            openSlide("dasigna_cycle1_cardio_01");
        });
		 
		/* ******************** */
		}
}
