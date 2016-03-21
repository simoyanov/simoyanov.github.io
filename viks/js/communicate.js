(function(glob) {
	"use strict";

	var communicate = glob.Communicate = glob.Communicate || {};

	var log = function log() {
		console.log.apply(console, ["Communicate:"].concat(Array.prototype.slice.call(arguments)));
	};

	var err = function err() {
		console.error.apply(console, ["Communicate:"].concat(Array.prototype.slice.call(arguments)));
	};

	var presentation, currentSlide, currentSlideEnter;

	communicate.initialize = function initialize(initData) {
		presentation = initData;
		log("Initialized");
	};


	communicate.navigated = function nagivated(to) {

		var correctAlias = presentation.some(function(part) {
			return part.slides && part.slides.some(function(slide){
				return slide.alias === to;
			});
		});

		if ( !correctAlias )
			err('Slide ', to, ' not found');

		var timeStamp = new Date().getTime();

		var navInfo = {};

		if (currentSlide) {
			navInfo.from = currentSlide;
			navInfo.stayDuration = timeStamp - currentSlideEnter;
		}

		navInfo.to = currentSlide = to;
		currentSlideEnter = timeStamp;

		log('navigation logged:', JSON.stringify(navInfo));

	};

	communicate.openAttachment = function openAttachment(path) {
		log('attachment opened:', JSON.stringify({
			path: path
		}));
	};

})(window);