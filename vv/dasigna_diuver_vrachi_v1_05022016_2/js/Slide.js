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
        
        
        var elements = [];

        elements[0] = $("#title");	
        elements[1] = $("#diuver_vrachi_2_scroller1");
        elements[2] = $("#diuver_vrachi_2_scroller2");
        elements[3] = $("#diuver_vrachi_2_chart");
        elements[4] = $("#diuver_vrachi_2_body1");
        elements[5] = $("#text");
        
        for ( var i = 0; i < elements.length; i ++ ) {
            elements[i].delay(100*i).transition({x:0,y:0,opacity:1}, 500);
        }
        
        showModal("#button_info","#content");
        

        $("#button_info").on(MOUSE_CLICK,function(){
            $("#block_box").css({"display":"block"});
          var ui = {position:{left:765}};
          var scroller = $("#diuver_vrachi_2_scroller2");
            scroller.animate({left:765},{duration:500,step:recalc});
            setTimeout(function(){
                $("#plate1").css({"display":"block"});
                $("#plate2").css({"display":"block"});
            },500);
          scroller.animate({left:1400},{duration:3000,step:recalc});
          function recalc(){
           ui.position.left = parseInt(scroller.css('left'));
           onUpdate(false, ui);
              
          }
            setTimeout(blockBox,3000);
            function blockBox(){
                $("#block_box").css({"display":"none"});
            }
 
        });
        
        
        
        
        
        
        
    var left = parseInt($("#diuver_vrachi_2_scroller2").css("left"));
	$("#diuver_vrachi_2_scroller2").draggable({start:draggableStart, stop: draggableStop, axis: "x", containment:[left,0,1400], drag: onUpdate});
	
	var body1 = $("#diuver_vrachi_2_body1");
	var body2 = $("#diuver_vrachi_2_body2");
	var body3 = $("#diuver_vrachi_2_body3");
    
	 
	
	
	function draggableStart(e,ui){
//		lock();
	}
	function draggableStop(e,ui){
//		unlock();
	}
	
	function onUpdate(e,ui){
		var currentPercent = ( (ui.position.left - left) / (1400-left) );
		$("#diuver_vrachi_2_scroller1").css({y:630*-currentPercent});
		if ( currentPercent > 0 && currentPercent <= 0.3 ) {
			 body1.css({opacity:1});
			 body2.css({opacity:0});
			 body3.css({opacity:0});
            $("#plate1").css({opacity:1});
            $("#plate2").css({opacity:0});
		}
		if ( currentPercent > 0.3 && currentPercent <= 0.6 ) {
			body1.css({opacity:0});
			 body2.css({opacity:1});
			 body3.css({opacity:0});
            $("#plate1").css({opacity:1});
            $("#plate2").css({opacity:0});
		}
		if ( currentPercent > 0.6 ) {
			body1.css({opacity:0});
			 body2.css({opacity:0});
			 body3.css({opacity:1});
            $("#plate1").css({opacity:0});
            $("#plate2").css({opacity:1});
		}
	}
		/* ******************** */
		}
}
