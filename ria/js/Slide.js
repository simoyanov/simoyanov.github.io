function Slide(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        
        
        var elements = [];
        elements[0] = $('#title');
        elements[1] = $('#btn_up');
        elements[2] = $('#btn_down');
        elements[3] = $('#link1');
        
        for ( var i = 0; i < elements.length; i ++ ) {
            elements[i].delay(100*i).transition({opacity:1,x:0,y:0}, 500);
        }
        
        $('#link_over').scroll(function(){
            
        });
        
        var comeFrom = '#' + localStorage['referenceLink'];
        localStorage.removeItem('referenceLink');
        $('#link_over').delay(500).animate({scrollTop:$(comeFrom).position().top},500, function(){$(comeFrom).addClass('blink');});
        
//        $('.link').on(MOUSE_CLICK, function(){
//            var row = this;
//            console.log($(this).position().top);
//            $('#link_over').animate({scrollTop:$(this).position().top},500, function(){$(row).addClass('blink');});
//        });
        
        var linkId = 1;
        
        $('#btn_up').on(MOUSE_CLICK, function(){
            if (linkId == 2){
                $('#link2').fadeOut();
                $('#link1').fadeIn();
                linkId = 1;
            } else if (linkId == 5){
                $('#link5').fadeOut();
                $('#link4').fadeIn();
                linkId = 4;
            } else if (linkId == 4){
                $('#link4').fadeOut();
                $('#link3').fadeIn();
                linkId = 3;
            } else if (linkId == 3){
                $('#link3').fadeOut();
                $('#link2').fadeIn();
                linkId = 2;
            }
        });
        
        $('#btn_down').on(MOUSE_CLICK, function(){
            if (linkId == 1){
                $('#link1').fadeOut();
                $('#link2').fadeIn();
                linkId = 2;
            } else if (linkId == 2){
                $('#link2').fadeOut();
                $('#link3').fadeIn();
                linkId = 3;
            } else if (linkId == 3){
                $('#link3').fadeOut();
                $('#link4').fadeIn();
                linkId = 4;
            } else if (linkId == 4){
                $('#link4').fadeOut();
                $('#link5').fadeIn();
                linkId = 5;
            }
            console.log(linkId);
            
        });
        
		/* ******************** */
		}
}
