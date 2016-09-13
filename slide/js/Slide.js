function Slide() {
    var self = this;
    var activated = false;
    this.activate = function () {
        if (activated) {
            return;
        }
        activated = true;
        /* ******************** */
         $('#teva').transition({x: 0, y: 0, opacity: 1}, 500);
         $('#logo').transition({x: 0, y: 0, opacity: 1}, 500);
        
        
        var elements = [];
        elements[0] = $("#title");
        elements[1] = $("#pack");
        elements[2] = $("#li1");
        elements[3] = $("#li2");
        elements[4] = $("#text1");
        elements[5] = $("#plt_1");
        elements[6] = $("#plt_2");
        elements[7] = $("#text2");
        
        
        for (var i = 0; i < elements.length; i++) {
            if (i == 1){
                elements[i].delay(100 * i).transition({scale: 1}, 500);
            } else {
                elements[i].delay(100 * i).transition({x: 0, y: 0, opacity: 1}, 500);
            }
                  
        }
        
        function openPolygon(){
            $('#polygon').transition({x: 0, y: 0, opacity: 1}, 500, function(){
                $('#text1').fadeIn();
                $('#right').fadeIn();
                $( "#slider-vertical" ).slider( "value", 90 );
                $( "#slider-vertical" ).slider( "disable" );
                
                $('#right').on(MOUSE_CLICK, function () {
                    $('#text1').fadeOut();
                    $('#right').fadeOut();
                    $('#text2').fadeIn();
                    $('#left').fadeIn();
                });
                $('#left').on(MOUSE_CLICK, function () {
                    $('#text1').fadeIn();
                    $('#right').fadeIn();
                    $('#text2').fadeOut();
                    $('#left').fadeOut();
                });
                
            });
            
        }
        
        
        $("#btn").on(MOUSE_CLICK, function () {openPolygon();});
        
        
        $("#cloud_btn1").on(MOUSE_CLICK, function () {openSlide("dasigna_spiromax_v2_08092016_4");});
        $("#cloud_btn2").on(MOUSE_CLICK, function () {openSlide("dasigna_spiromax_v2_08092016_5");});
        $("#cloud_btn3").on(MOUSE_CLICK, function () {openSlide("dasigna_spiromax_v2_08092016_6");});
       
        

        
        $("#btn_instruc").on(MOUSE_CLICK, function () {openSlide("dasigna_spiromax_v2_08092016_pdf");});
        showModal("#btn_link", "#content");
        showModal("#btn_info", "#content_btns");
        
        $(function () {
            $("#slider-vertical").slider({
                orientation: "horizontal"
                , range: "min"
                , min: 0
                , max: 100
                , animate: true
                , value: 50
                , slide: function (event, ui) {
                    $("#slider-vertical .ui-slider-handle").text(ui.value);
                    if (ui.value == 30) {
                        $('#btn').fadeIn();
                    }
                    else if (ui.value == 90) {
                        openPolygon();
                    }
                }
                , change: function (event, ui) {
                    $("#slider-vertical .ui-slider-handle").text(ui.value);
                }
            });
            $("#slider-vertical .ui-slider-handle").text('?');
            setTimeout(function () {
                $("#slider-vertical").slider("value", 0);
            }, 1500);
        });
        
        /* ******************** */
    }
}