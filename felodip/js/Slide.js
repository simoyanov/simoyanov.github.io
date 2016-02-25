function Slide(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        $('#backup_but').delay(1000).transition({opacity:1}, 500);
        
        
        $("#title").transition({x:0,y:0,opacity:1}, 500);
        $("#giri").delay(200).transition({scale:0.7,opacity:1,y:70}, 500);
        $("#pack_but").delay(300).transition({x:0,y:0,opacity:1}, 500);
        $("#pack").delay(400).transition({scale:0.5,opacity:1}, 500);
        $("#scale").delay(400).transition({x:0,y:0,opacity:1}, 500);
        $("#slider").delay(400).transition({x:0,y:0,opacity:1}, 500);
        var pointId = 0;
        $("#point").on(MOUSE_CLICK, function(){
            if (pointId == 0){
                $("#point").transition({y:-575}, 2000);
                $("#balance").transition({rotate:-15}, 2000);
                $("#right").transition({y:-75,x:-10}, 2000);
                $("#left").transition({y:75,x:10}, 2000);
                $("#giri").transition({y:100,scale:1}, 2000);

                $("#pack_but").on(MOUSE_CLICK, function(){
                    $("#pack_but").transition({opacity:0}, 500);
                    $("#pack").transition({scale:0.5,opacity:1}, 800, function(){
                        $("#pack").transition({scale:1,opacity:1,x:-250,y:460}, 500, function(){
                            $("#balance").transition({rotate:0}, 2000);
                            $("#right").transition({y:30,x:0}, 2000);
                            $("#left").transition({y:-30,x:0}, 2000);
                            $("#giri").transition({y:0,scale:1}, 2000);
                            $("#pack").transition({scale:1,opacity:1,x:-240,y:580}, 2000);
                        });
                    });
                });
                pointId = 1;
            }
            
        });
        
        
        $('#backup_but').on(MOUSE_CLICK, function(){
            var page = 0;
            $('#backup_menu_wrap').transition({x:0}, 500);
            $('#backup_menu_back').fadeIn();
            $('#backup_menu').transition({x:0,y:0,opacity:1}, 500);
            $('#menu1').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_1");});
            $('#menu2').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_2");});
            $('#menu3').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_3");});
            $('#menu4').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_4");});
            $('#menu5').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_5");});
            $('#menu6').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_6");});
            $('#menu7').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_7");});
            $('#menu8').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_8");});
            $('#menu9').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_9");});
            $('#menu10').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_10");});
            $('#menu11').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_11");});
            $('#menu12').on(MOUSE_CLICK, function(){openSlide("dasigna_felodip_vrachi_backups_12");});
            $('#backup_menu_back').on(MOUSE_CLICK, function(){
                $('#backup_menu_back').fadeOut();
                $('#backup_menu').transition({x:0,y:360,opacity:1}, 500);
            });
            $('#menu_left').on(MOUSE_CLICK, function(){
                if ( page == 1 ){
                    page = 0;
                    $('#backup_menu_wrap').transition({x:0}, 500);
                }else if(page == 2){
                    page = 1;
                    $('#backup_menu_wrap').transition({x:-2048}, 500);
                }
            });
            $('#menu_right').on(MOUSE_CLICK, function(){
                if ( page == 0 ){
                    page = 1;
                    $('#backup_menu_wrap').transition({x:-2048}, 500);
                }else if(page == 1){
                    page = 2;
                    $('#backup_menu_wrap').transition({x:-4096}, 500);
                }
            });
        });
        
        
        $(function() {
            $( "#slider" ).slider({
              orientation: "vertical",
              range: "min",
              min: 0,
              max: 100,
              value: 0,
              slide: function( event, ui ) {
                  var valId = ui.value / 100;
                  var balanceId = -5 -(10*valId);
                  var rightIdX = -10 * valId;
                    var rightIdY = -75 * valId;
                  var leftIdX = 10 * valId;
                    var leftIdY = 75 * valId;
                  var giriIdY = 70 + 30 * valId;
                  var giriIdScale = 0.7 + 0.3*valId;
                  $("#balance").transition({rotate:balanceId}, 0);
                $("#right").transition({y:rightIdY,x:rightIdX}, 0);
                $("#left").transition({y:leftIdY,x:leftIdX}, 0);
                $("#giri").transition({y:giriIdY,scale:giriIdScale}, 0);
//                $( "#amount" ).val( ui.value );
                  if (valId == 1){
                    $( "#slider" ).slider("disable");
                      $("#pack_but").on(MOUSE_CLICK, function(){
                        $("#pack_but").transition({opacity:0}, 500);
                        $("#pack").transition({scale:0.5,opacity:1}, 800, function(){
                            $("#pack").transition({scale:1,opacity:1,x:-250,y:460}, 500, function(){
                                $("#balance").transition({rotate:0}, 2000);
                                $("#right").transition({y:30,x:0}, 2000);
                                $("#left").transition({y:-30,x:0}, 2000);
                                $("#giri").transition({y:0,scale:1}, 2000);
                                $("#pack").transition({scale:1,opacity:1,x:-240,y:580}, 2000);
                            });
                        });
                    });
                  }
              }
            });
            $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
          });
        
        
        

		/* ******************** */
		}
}
