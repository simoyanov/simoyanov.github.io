function vicks_02(){
	var self = this;
	var activated = false;
	this.activate = function(){
		if ( activated ) {
			return;
		}
		activated = true;
		/* ******************** */
        
        
        $('#vicks_02_title').delay(100).transition({x:0,y:0,opacity:1}, 500, showPack);
        $('#vicks_02_text').delay(300).transition({x:0,y:0,opacity:1}, 500);
        
        
        
        setTimeout(showLogo,200);
//        setTimeout(showPack,300);
        function showPoint1(){
            $('#vicks_02_sub1').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_02_pic1').delay(100).transition({x:0,y:0,opacity:1}, 500, showPoint2);
            $('#vicks_02_li1').delay(200).transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_02_li2').delay(300).transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_02_li3').delay(400).transition({x:0,y:0,opacity:1}, 500);
        }
        
        function showPoint2(){
            $('#vicks_02_sub2').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_02_pic2').delay(100).transition({x:0,y:0,opacity:1}, 500, showPoint3);
            $('#vicks_02_point2_1').delay(200).transition({scale:1}, 500);
            $('#vicks_02_point2_2').delay(300).transition({scale:1}, 500);
        }
        
        function showPoint3(){
            $('#vicks_02_sub3').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_02_pic3').delay(100).transition({x:0,y:0,opacity:1}, 500, showPoint4);
        }
        
        function showPoint4(){
            $('#vicks_02_sub4').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_02_pic4').delay(100).transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_02_point4').delay(200).transition({scale:1}, 500);
        }
        
        function showLogo(){
            $('#vicks_02_logo').transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_02_logo_blink').delay(250).transition({x:0,y:0,opacity:1}, 500, blinkLogo);
        }
        function showPack(){
            $('#vicks_02_pack').transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_02_sm1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_02_sh1").delay(300).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_02_sm2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_02_sh2").delay(400).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_02_sm3").delay(500).transition({x:0,y:0,opacity:1}, 500);
            $("#vicks_02_sh3").delay(500).transition({x:0,y:0,opacity:1}, 500);
            $('#vicks_02_sub').delay(1000).transition({x:0,y:0,opacity:1}, 500, showPoint1);
        }
        
        function blinkLogo(){
            var current = $('#vicks_02_logo_blink').css('opacity');
            $('#vicks_02_logo_blink').css({opacity:current==1?0.5:1});
            setTimeout(blinkLogo,500);
        }
 
		/* ******************** */
		}
}
