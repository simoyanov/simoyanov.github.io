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
	
	$("#diuver_vrachi_7_key").on(MOUSE_DOWN, gotoKey);
	function gotoKey(e){
		currentFrame = -4;
		pan.enabled = false;
		pan.css({x:currentFrame*widthSize});
		onSwipeComplete();
	}
	
	elements[0] = $("#diuver_vrachi_7_title");
	elements[1] = $("#diuver_vrachi_7_drug_circle");
	elements[2] = $("#diuver_vrachi_7_drug");
	elements[2].left = parseInt( elements[2].css("left") );
	elements[2].top = parseInt( elements[2].css("top") );
	elements[3] = $("#diuver_vrachi_7_arrow");
	elements[4] = $("#diuver_vrachi_7_woman_circle");
	elements[5] = $("#diuver_vrachi_7_woman");
	
	
	elements[6] = $("#diuver_vrachi_7_char1body");
	elements[7] = $("#diuver_vrachi_7_char2body");
	elements[8] = $("#diuver_vrachi_7_legend");
	
	var diuver_vrachi_7_vivody_btn = $("#diuver_vrachi_7_vivody_btn");
	var diuver_vrachi_7_design_btn = $("#diuver_vrachi_7_design_btn");
	var diuver_vrachi_7_vivody = $("#diuver_vrachi_7_vivody");
	var diuver_vrachi_7_design = $("#diuver_vrachi_7_design");
	var diuver_vrachi_7_references = $("#diuver_vrachi_7_references");
	
	for ( var i = 0; i < elements.length; i ++ ) {
		elements[i].delay(100*i).transition({opacity:1}, 250);
	}
	
	diuver_vrachi_7_vivody_btn.delay(100*i).transition({opacity:1}, 250);
	i++;
	diuver_vrachi_7_design_btn.delay(100*i).transition({opacity:1}, 250);
	i++;
	diuver_vrachi_7_references.delay(100*i).transition({opacity:1}, 250);
	
	diuver_vrachi_7_vivody_btn.on(MOUSE_DOWN, show_vivody);
	diuver_vrachi_7_design_btn.on(MOUSE_DOWN, show_design);
	
	function show_vivody(e){
		diuver_vrachi_7_vivody_btn.transition({opacity:0}, 250);
		diuver_vrachi_7_vivody.transition({opacity:1}, 250);
	}
	
	function show_design(e){
		diuver_vrachi_7_design_btn.transition({opacity:0}, 250);
		diuver_vrachi_7_design.transition({opacity:1}, 250);
	}
	showPhLeft();
	function showPhLeft(){
		elements[9] = $("#diuver_vrachi_7_left_ph_bar");	
		elements[9].width = parseInt(elements[9].width());
		elements[9].css({width:0,opacity:1}).delay(1250).transition({width:elements[9].width}, 1500, showPhRight, 'linear');
		
		
	}
	function showPhRight(){
		elements[11] = $("#diuver_vrachi_7_chart1value1");
		elements[11].transition({opacity:1}, 250);
		elements[10] = $("#diuver_vrachi_7_right_ph_bar");
		elements[10].width = parseInt(elements[10].width());
		elements[10].css({width:0,opacity:1}).transition({width:elements[10].width}, 1500, showValue2, 'linear');
	}
	function showValue2(){
		elements[12] = $("#diuver_vrachi_7_char2value1");
		elements[12].transition({opacity:1}, 250);
		blinkArrow();
		elements[2].draggable({start: onStart, stop: onStop});
	}
	
	function blinkArrow(){
		if ( blinkActive == false ) {
			elements[3].css({opacity:1});
			return;
		}
		var current = elements[3].css('opacity');
		elements[3].css({opacity:current==1?0:1});
		setTimeout(blinkArrow,400);
	}
	function onStart(e, ui){
		// lock
	}
	function onStop(e, ui){
		// unlock
		var left = ui.position.left;
		var top = ui.position.top;
		var tarX1 = 1626;
		var tarY1 = 327;
		var tarW1 = 341;
		var tarH1 = 315;
		if ( left > tarX1 && top > tarY1 && left < tarX1 + tarW1 && top < tarY1 + tarH1 ) {				 
			 blinkActive = false;
			 elements[2].draggable( "destroy" ).transition({rotate: 360, scale: 0.25, left: 1723, top: 415, opacity: 0.5},500, showRestCharts);
            $("#diuver_vrachi_7_woman").delay(100).transition({opacity:0},300);
            $("#diuver_vrachi_7_woman2").delay(150).transition({opacity:1},300);
            $("#diuver_vrachi_7_woman2").delay(200).transition({opacity:0},300);
            $("#diuver_vrachi_7_woman3").delay(250).transition({opacity:1},300);
		} else {
			elements[2].transition({left: elements[2].left, top: elements[2].top},250);
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
