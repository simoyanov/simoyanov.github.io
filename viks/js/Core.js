	
	var MOUSE_CLICK = "click";
	var MOUSE_DOWN = "mousedown";
	var MOUSE_UP = "mouseup";
	var isTouch = false;
	if  ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) {
		MOUSE_CLICK = "touchstart";
		MOUSE_DOWN = "touchstart";
		MOUSE_UP = "touchend";
		isTouch	= true;
	}
	
	var widthSize = 2048;
	var frames = [];
	var slideAsset = [];
	var pan;
	var currentFrame = 0;
	var totalFrames = 0;
	
	window.onload = preBoot;
	
	function preBoot(){
		setTimeout(Boot,500);
	}
	function Boot() {
		frames = [];
		
		frames[0] = 'vicks_20032016_p1';
		frames[1] = 'vicks_20032016_p2';
		frames[2] = 'vicks_20032016_p3';
		frames[3] = 'vicks_20032016_p4';
		frames[4] = 'vicks_20032016_p5';
        frames[5] = 'vicks_20032016_p6';
		frames[6] = 'vicks_20032016_p7';
		frames[7] = 'vicks_20032016_p8';
        frames[8] = 'vicks_20032016_p9';
        frames[9] = 'vicks_20032016_p10';
        frames[10] = 'vicks_20032016_p11';
        frames[11] = 'vicks_20032016_p12';
        frames[12] = 'vicks_20032016_p13';
        frames[13] = 'vicks_20032016_p14';
        frames[14] = 'vicks_20032016_p15';
        frames[15] = 'vicks_20032016_p16';
        frames[16] = 'vicks_20032016_p17';
        frames[17] = 'vicks_20032016_p18';
        frames[18] = 'vicks_20032016_p19';
        frames[19] = 'vicks_20032016_p20';
        frames[20] = 'vicks_20032016_p21';
        frames[21] = 'vicks_20032016_p22';
        frames[22] = 'vicks_20032016_p23';
		 
		
		Communicate.initialize([{
		alias: 'vicks_20032016',
		name: 'Викс 20032016',
		slides: [
			{alias: frames[0], name: 'Страница 1'},		
			{alias: frames[1], name: 'Страница 2'},		
			{alias: frames[2], name: 'Страница 3'},		
			{alias: frames[3], name: 'Страница 4'},		
			{alias: frames[4], name: 'Страница 5'},
            {alias: frames[5], name: 'Страница 6'},
            {alias: frames[6], name: 'Страница 7'},
			{alias: frames[7], name: 'Страница 8'},
            {alias: frames[8], name: 'Страница 9'},
            {alias: frames[9], name: 'Страница 10'},
            {alias: frames[10], name: 'Страница 11'},
            {alias: frames[11], name: 'Страница 12'},
            {alias: frames[12], name: 'Страница 13'},
            {alias: frames[13], name: 'Страница 14'},
            {alias: frames[14], name: 'Страница 15'},
            {alias: frames[15], name: 'Страница 16'},
            {alias: frames[16], name: 'Страница 17'},
            {alias: frames[17], name: 'Страница 18'},
            {alias: frames[18], name: 'Страница 19'},
            {alias: frames[19], name: 'Страница 20'},
            {alias: frames[20], name: 'Страница 21'},
            {alias: frames[21], name: 'Страница 22'},
            {alias: frames[22], name: 'Страница 23'}
			]
		}]);
		
		document.ontouchmove = function(event){
			event.preventDefault();
		}
		 	
		pan = $("#pan");
		pan.enabled = true; 
		
		var display = document.getElementById("display");
		 
		Hammer(display).on("swipeleft", SwipeLeft);
		Hammer(display).on("swiperight", SwipeRight);
		
		slideAsset[0] = new vicks_01(); 
		slideAsset[1] = new vicks_02();
		slideAsset[2] = new vicks_03();
		slideAsset[3] = new vicks_04();
		slideAsset[4] = new vicks_05();
		slideAsset[5] = new vicks_06();
		slideAsset[6] = new vicks_07();
        slideAsset[7] = new vicks_08();
        slideAsset[8] = new vicks_09();
        slideAsset[9] = new vicks_10();
        slideAsset[10] = new vicks_11();
        slideAsset[11] = new vicks_12();
        slideAsset[12] = new vicks_13();
        slideAsset[13] = new vicks_14();
        slideAsset[14] = new vicks_15();
        slideAsset[15] = new vicks_16();
        slideAsset[16] = new vicks_17();
        slideAsset[17] = new vicks_18();
        slideAsset[18] = new vicks_19();
        slideAsset[19] = new vicks_20();
        slideAsset[20] = new vicks_21();
        slideAsset[21] = new vicks_22();
        slideAsset[22] = new vicks_23();
		totalFrames = -(slideAsset.length-1);	
		 
		
		Communicate.navigated(frames[currentFrame*-1]);
		 
		slideAsset[currentFrame].activate();		
//		initVeevaLikeMenu(['VeevaLikeMenu/dezrinit_lor_vzros_backup1.jpg'],[-7]);
		
		if ( isTouch == false ) {
			document.addEventListener("keyup", function(e){				 
				if(e.keyCode == 38) {
					menuOpen();
				}
				if(e.keyCode == 40) {
					menuClose();
				}
			});
		}		
		var touchPoint = {x:0,y:0,time:0};
		$("#display").on(MOUSE_UP, storeTouchUp);
		$("#display").on(MOUSE_DOWN, storeTouchDown); 
		function storeTouchUp(e){			
			var currentTouchPoint = {
				x: (isTouch ? e.originalEvent.changedTouches[0].pageX : e.pageX),
				y: (isTouch ? e.originalEvent.changedTouches[0].pageY : e.pageY),
				time:  new Date().getTime()
			};			 
			if ( (currentTouchPoint.time - touchPoint.time) < 130 && lineDistance(touchPoint, currentTouchPoint) > 30 ) {				 
				 if ( Math.abs(touchPoint.x - currentTouchPoint.x) > 50 ) {
					 return;
				 }				 
				 touchPoint.x = 0;
				 currentTouchPoint.x = 0;
				if ( lineDistance(touchPoint, currentTouchPoint) > 20 ) {					  
						touchPoint.y - currentTouchPoint.y> 0 ? menuOpen() : menuClose();					 
				}
			}
		}
		function storeTouchDown(e){		 
			touchPoint.x = isTouch ? e.originalEvent.touches[0].pageX : e.pageX;
			touchPoint.y = isTouch ? e.originalEvent.touches[0].pageY : e.pageY;
			touchPoint.time = new Date().getTime();
		}
	}
	 
	function lineDistance( point1, point2 )  {
		var xs = 0;
		var ys = 0;     
		xs = point2.x - point1.x;
		xs = xs * xs;		
		ys = point2.y - point1.y;
		ys = ys * ys;
     	return Math.sqrt( xs + ys );
	} 
	
	function lock(){
		pan.enabled = false;
	}
	
	function unlock(){
		pan.enabled = true;
	}
	 
	function SwipeLeft(e){
        console.log('left');
		if ( e.distance < 200 ) {
			return;
		}
		if ( pan.enabled == false ) {
			return;
		}
		
		var prevFrame = currentFrame;
		currentFrame -= 1;		
		if ( currentFrame < totalFrames) {
			currentFrame = totalFrames;
		}		
		if ( prevFrame == currentFrame ) {
			return;
		}
		controlsVisible(false); 
		pan.enabled = false;
		 
		pan.transition({x:currentFrame*widthSize}, 500, onSwipeComplete);
	}
	
	function SwipeRight(e){
        console.log('right');
		if ( e.distance < 200 ) {
			return;
		}
		if ( pan.enabled == false ) {
			return;
		}
		
		var prevFrame = currentFrame;
		currentFrame += 1;
		if ( currentFrame > 0 ) {
			currentFrame = 0;
		}
		if ( prevFrame == currentFrame ) {
			return;
		}
		controlsVisible(false);
		pan.enabled = false;
		 
		pan.transition({x:currentFrame*widthSize}, 500, onSwipeComplete);
	}
	function controlsVisible(isVisible){
		 
//		if (!isVisible){
//			menuClose();
//		}
	}
	function onSwipeComplete(){
		 
		pan.enabled = true;
		if ( isTouch == false ) {
			window.location = "#" + frames[currentFrame*-1];
		}
		console.log(currentFrame);
		Communicate.navigated(frames[currentFrame*-1]);
		slideAsset[currentFrame*-1].activate();
	}