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
        

        var blinkActive = true;
	    var elements = [];
        
        elements[0] = $("#title");
        elements[1] = $("#circle1");
        elements[2] = $("#arrow1");
        elements[3] = $("#circle1_3");
        elements[4] = $("#val1_1");
        elements[5] = $("#circle1_2");
        elements[6] = $("#val1_2");
        elements[7] = $("#circle1_1");
        elements[8] = $("#val1_3");
        elements[9] = $("#drug");
        elements[9].left = parseInt( elements[9].css("left") );
	    elements[9].top = parseInt( elements[9].css("top") );
        elements[10] = $("#text");
	
        
        for ( var i = 0; i < elements.length; i ++ ) {
            if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9){
                elements[i].delay(100*i).transition({scale:1.1}, 500);
                elements[i].transition({scale:1}, 500);
            } else{
		       elements[i].delay(100*i).transition({opacity:1,x:0,y:0}, 500);
            }
	   }
        
        $("#circle1_3").on(MOUSE_CLICK, function(){$("#plate1_1").transition({opacity:1,x:0,y:0}, 500);});
        $("#circle1_2").on(MOUSE_CLICK, function(){$("#plate1_2").transition({opacity:1,x:0,y:0}, 500);});
        $("#circle1_1").on(MOUSE_CLICK, function(){$("#plate1_3").transition({opacity:1,x:0,y:0}, 500);});
        
        $("#circle2_1").on(MOUSE_CLICK, function(){$("#plate2_1").transition({opacity:1,x:0,y:0}, 500);});
        $("#circle2_2").on(MOUSE_CLICK, function(){$("#plate2_2").transition({opacity:1,x:0,y:0}, 500);});
        $("#circle2_3").on(MOUSE_CLICK, function(){$("#plate2_3").transition({opacity:1,x:0,y:0}, 500);});
        
        elements[9].draggable({start: onStart, stop: onStop});
        
        var elements2 = [];
        
        elements2[0] = $("#circle2");
        elements2[1] = $("#arrow2");
        elements2[2] = $("#circle2_1");
        elements2[3] = $("#val2_1");
        elements2[4] = $("#circle2_2");
        elements2[5] = $("#val2_2");
        elements2[6] = $("#circle2_3");
        elements2[7] = $("#val2_3");
        elements2[8] = $("#val2");
        elements2[9] = $("#text2");
        
        function showStep2(e){
            for ( var i = 0; i < elements.length; i ++ ) {
                if(i !== 0){
                    elements[i].fadeOut();
                }
           }
            $("#step1").fadeOut();
            $("#step1_plate").fadeOut();
            $("#step2").fadeIn();
            $("#step2_plate").fadeIn();
            $("#plate1_1").transition({opacity:0}, 500);
            $("#plate1_2").transition({opacity:0}, 500);
            $("#plate1_3").transition({opacity:0}, 500, function(){
                for ( var i = 0; i < elements2.length; i ++ ) {
                    if (i == 0 || i == 2 || i == 4 || i == 6){
                        elements2[i].delay(100*i).transition({scale:1.1}, 500);
                        elements2[i].transition({scale:1}, 500);
                    } else{
                       elements2[i].delay(100*i).transition({opacity:1,x:0,y:0}, 500);
                    }
                }
            });
            
        }
        
	function onStart(e, ui){
		// lock
	}
	function onStop(e, ui){
		// unlock
        console.log('work');
		var left = ui.position.left;
		var top = ui.position.top;
		var tarX1 = 171;
		var tarY1 = 634;
		var tarW1 = 327;
		var tarH1 = 328;
		if ( left > tarX1 && top > tarY1 && left < tarX1 + tarW1 && top < tarY1 + tarH1 ) {
            console.log('work1');
			 elements[9].draggable( "destroy" ).transition({rotate: 350, scale: 0.5, left: 270, top: 730, opacity: 0.5},500);
            elements[9].delay(100).transition({scale: 0},500, showStep2);
		} else {
            console.log('work2');
			elements[9].transition({left: elements[9].left, top: elements[9].top},250);
		}
	}
	function showRestCharts(e){
		elements[13] = $("#diuver_vrachi_7_left_blue_bar");
		elements[13].css({y:-200}).transition({opacity:1,y:0},1000, function(e){
			elements[15] = $("#diuver_vrachi_7_chart1value2");
			elements[15].transition({opacity:1},250);
		});
		
		elements[14] = $("#diuver_vrachi_7_right_blue_bar");
		elements[14].css({y:-200}).delay(1000).transition({opacity:1,y:0},1000, function(e){
			elements[16] = $("#diuver_vrachi_7_char2value2");
			elements[16].transition({opacity:1},250);
		});
		
	}
        
        
        showModal("#button_info","#content");
        

		/* ******************** */
		}
}
