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
        elements[2] = $("#box");
        elements[3] = $("#text");
        
        
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
        
        $('#selected_ca').on(MOUSE_CLICK,function(){
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
        
          

        $('#logo').on(MOUSE_CLICK,function(){
            openSlide("dasigna_cycle1_infections_01");
        });
		 
		/* ******************** */
		}
}
