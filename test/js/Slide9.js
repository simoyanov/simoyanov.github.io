function Slide1(){
	var self = this;
	var activated = false;
	this.activate = function(){
		
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
		
        var elements = [];
//        var menuArray = [];
//        for ( var i = 1; i < 12; i++ ) {
//            menuArray[i] = $('.tab'+ i +'');
//        }
        elements[0] = $("#icon");
        elements[1] = $("#head");
        elements[2] = $("#box");
        elements[3] = $("#text");
        
        
        for ( var i = 0; i < elements.length; i++ ) {
            if (i == 1) {
                elements[i].delay(100*i).transition({opacity: 1}, 500);
            } else{
                elements[i].delay(100*i).transition({opacity: 1, y: 0}, 500);
            }
        }
        $('#selected_b').click(function(){
            $("#selected_b select").change(function() {
                $("#selected_b select option:selected").each(function() {
                    var selectVal = $(this).val();
                    selectVal = parseInt(selectVal);
                    for(i = 1; i < 8; i++){
                        if(i !== selectVal){
                            $('.b'+i+'').css("display","none");
                            console.log(i);
                        } else {
                            $('.b'+i+'').css("display","block");
                        }
                    }
                });
              }).trigger( "change" );
        })
        
        $('#selected_ca').click(function(){
            $("#selected_ca select").change(function() {
                $("#selected_ca select option:selected").each(function() {
                    var selectVal = $(this).val();
                    selectVal = parseInt(selectVal);
                    for(i = 1; i < 7; i++){
                        if(i !== selectVal){
                            $('.c'+i+'').css("display","none");
                            console.log(i);
                        } else {
                            $('.c'+i+'').css("display","block");
                        }
                    }
                });
              }).trigger( "change" );
        });
        
        
//        elements[3] = $("#menu2");
//        elements[4] = $("#menu3");
//        
//        for(var k = 0; k < menuArray[1].length; k++){
//            if (k > 2 && k < 23){
//                $(menuArray[1][k]).delay(300).transition({opacity: 1, x: 0}, 500);
//                $(menuArray[1][k]).attr('clk',0);
//            } else if(k > 22){
//                var l = k - 19;
//                $(menuArray[1][k]).delay(100*l).transition({opacity: 1, x: 0}, 500);
//            } else {
//                $(menuArray[1][k]).delay(100*k).transition({opacity: 1, x: 0}, 500);
//            }
//        }
//        for(var k = 4; k < 23; k++){
//            $(menuArray[1][k]).click(function(){
//                if($(this).attr('clk') == 0){
//                    $('.win').removeClass('winActive');
//                    var elId = $(this).attr('id');
//                    elId = elId.slice(6,9);
//                    elId = parseInt(elId);
//                    $('#win'+ elId +'').addClass('winActive');
//                    $(this).attr('clk',1);
//                } else {
//                    $('.win').removeClass('winActive');
//                    $(this).attr('clk',1);
//                }
//                
//            });
//        }
//        
//        $('.win').click(function(){
//            $(this).removeClass('winActive');
//        });   
//        
//        function menu1(){
//            $('#menu1').addClass('active');
//        }
        
        
//        for ( var i = 2; i < 13; i++ ) {
//            elements[i].click(function(){
//                $('.menu').removeClass('active');
//                $(this).addClass('active');
//                var elId = $(this).attr('id');
//                elId = elId.slice(4,6);
//                elId = parseInt(elId);
//                for (var j = 1; j < 12; j++){
//                    for(var k = 0; k < menuArray[j].length; k++){
//                        $(menuArray[j][k]).transition({opacity: 0, x: 100}, 500);
//                    }
//                }
//                for(var k = 0; k < menuArray[elId].length; k++){
//                    if (elId == 1 && k > 2 && k < 23){
//                            $(menuArray[1][k]).delay(300).transition({opacity: 1, x: 0}, 500);
//                        } else if(elId == 1 && k > 22){
//                            var l = k - 19;
//                            $(menuArray[1][k]).delay(100*l).transition({opacity: 1, x: 0}, 500);
//                        } else {
//                    $(menuArray[elId][k]).delay(100*k).transition({opacity: 1, x: 0}, 500);
//                        }
//                }
//            });
//        }
//        

        $('#logo').click(function(){
            openSlide("dasigna_dinamiko_pharm_v2_page2");
        });
		 
		/* ******************** */
		}
}
