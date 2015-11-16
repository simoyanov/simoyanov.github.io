// Появление основных элементов

$(".first_fade").delay(700).fadeIn(800);
fadeYear(1,1400);//первый год

//временная линия слайдер

$(".full-width-slider").on('change',function() {
    var val = $("#slider-12").val();
    if (val > 1){fadeYear(val,0);}
    if (val > 8) {$(".timeline_canvas").css("margin-left","-" + (val - 8) * 238 +"px");}
    if (val < 9){$(".timeline_canvas").css("margin-left","0px");}
});

//всплывашка

$(".popup").on('click',function(){$(".popup").fadeOut(600)});
$(".footer_link").on('click',function(){$(".popup").fadeIn(600)});

//функция появления ромба, a - номер года(от 1 до 14), b - задержка(delay)

function fadeYear(a,b){
    var delayN = b;
    var i = a;
    for(a=$(".timeline_canvas_year:visible").length + 1; a <= i; a++){
        var year;
        if (a < 10){
            year = ".year200" + a;
        } else {
            year = ".year20" + a;
        }
        if (a % 2 == 0){evenYear(year);}else{oddYear(year);}
        function evenYear(year){
            $(year).css("display","inline-block");
            var k = delayN;
            var arr = [];
            for(var i = $(year).children("div").length-1; i >= 0; i--){
                var n = $(year).children("div").length - i;
                var b = delayN + i * 600;
                arr[arr.length] = b;
                $(year).children('div:nth-child('+ n +')').delay(b).fadeIn(600);
            }
            delayN = arr[0];
        }
        function oddYear(year){
            $(year).css("display","inline-block");
            var k = delayN;
            var arr = [];
            for(var i =0; i < $(year).children("div").length; i++){
                var n = i+1;
                var b = delayN + i * 600;
                arr[arr.length] = b;
                $(year).children('div:nth-child('+ n +')').delay(b).fadeIn(600);
            }
            delayN = arr[arr.length-1];
        }
        delayN = delayN + 500;
    }
}


