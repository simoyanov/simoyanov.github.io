function Slide9(){
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
        
        
        
        for ( var i = 0; i < elements.length; i++ ) {
            if (i == 1) {
                elements[i].delay(100*i).transition({opacity: 1}, 500);
            } else{
                elements[i].delay(100*i).transition({opacity: 1, y: 0}, 500);
            }
        }
        $('#selected_b').on(MOUSE_CLICK,function(){
            $("#selected_b select").change(function() {
                $("#selected_b select option:selected").each(function() {
                    var selectVal = $(this).val();
                    selectVal = parseInt(selectVal);
                    for(i = 1; i < 5; i++){
                        if(i !== selectVal){
                            $('#lay'+i+'').css("display","none");
                            console.log(i);
                        } else if (i == 4) {
                            $('#lay1').css("display","block");
                            $('#lay2').css("display","block");
                            $('#lay3').css("display","block");
                        } else {
                            $('#lay'+i+'').css("display","block");
                        }
                    }
                });
              }).trigger( "change" );
        })
        
        
        
          

        $('#logo').on(MOUSE_CLICK,function(){
            openSlide("dasigna_cycle1_cardio_01");
        });
		 
		/* ******************** */
		}
}
