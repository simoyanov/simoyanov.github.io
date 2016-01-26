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
        var menuArray = [];
        for ( var i = 1; i < 12; i++ ) {
            menuArray[i] = $('.tab'+ i +'');
        }
        elements[0] = $("#icon");
        elements[1] = $("#head");
        elements[2] = $("#menu1");
        elements[3] = $("#menu2");
        elements[4] = $("#menu3");
        
        for(var k = 0; k < menuArray[1].length; k++){
            if (k > 2 && k < 23){
                $(menuArray[1][k]).delay(300).transition({opacity: 1, x: 0}, 500);
                $(menuArray[1][k]).attr('clk',0);
            } else if(k > 22){
                var l = k - 19;
                $(menuArray[1][k]).delay(100*l).transition({opacity: 1, x: 0}, 500);
            } else {
                $(menuArray[1][k]).delay(100*k).transition({opacity: 1, x: 0}, 500);
            }
        }
//        for(var k = 4; k < 23; k++){
//            $(menuArray[1][k]).on(MOUSE_CLICK,function(){
//                if($(this).attr('clk') == 0){
//                    $('#modal').show(300);
//                    $('.win').removeClass('winActive');
//                    var elId = $(this).attr('id');
//                    elId = elId.slice(6,9);
//                    elId = parseInt(elId);
//                    $('#win'+ elId +'').addClass('winActive');
//                    $(this).attr('clk',0);
//                } else {
//                    $('.win').removeClass('winActive');
//                    $(this).attr('clk',1);
//                }
//            });
//        }
        for(var k = 4; k < 23; k++){
            $(menuArray[1][k]).on(MOUSE_CLICK,function(){
                    $('#modal').show(200);
                    $('.win').hide();
                    var elId = $(this).attr('id');
                    elId = elId.slice(6,9);
                    elId = parseInt(elId);
                    $('#modal #win'+ elId +'').show();
                
            });
        }
        
        
//        if($('.tab2').is(":visible") || $('.tab3').is(":visible")){
//            $('#col21').hide;
//        }
        
        
        $('#modal').on(MOUSE_CLICK,function(){
            $('#modal').hide(300);
        })
        
        $('.win').on(MOUSE_CLICK,function(){
            $(this).removeClass('winActive');
        });   
        
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
        $('#logo').on(MOUSE_CLICK,function(){
            openSlide("dasigna_cycle1_infections_01");
        });
        for ( var i = 2; i < 5; i++ ) {
            elements[i].on(MOUSE_CLICK,function(){
                $('.menu').removeClass('active');
                $(this).addClass('active');
                var elId = $(this).attr('id');
                elId = elId.slice(4,6);
                elId = parseInt(elId);
                for (var j = 1; j < 12; j++){
                    for(var k = 0; k < menuArray[j].length; k++){
                        $(menuArray[j][k]).transition({opacity: 0, x: 100}, 500);
                        $(menuArray[j][k]).css('visibility', 'hidden');
                    }
                }
                for(var k = 0; k < menuArray[elId].length; k++){
                    if (elId == 1 && k > 2 && k < 23){
                            $(menuArray[1][k]).delay(300).transition({opacity: 1, x: 0}, 500);
                        $(menuArray[1][k]).css('visibility','visible');
                        } else if(elId == 1 && k > 22){
                            var l = k - 19;
                            $(menuArray[1][k]).delay(100*l).transition({opacity: 1, x: 0}, 500);
                            $(menuArray[1][k]).css('visibility','visible');
                        } else {
                    $(menuArray[elId][k]).delay(100*k).transition({opacity: 1, x: 0}, 500);
                            $(menuArray[elId][k]).css('visibility','visible');
                        }
                }
            });
        }
        

        
		 
		/* ******************** */
		}
}
