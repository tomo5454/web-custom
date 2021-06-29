"use strict";

document.addEventListener("DOMContentLoaded", function () {
	const cb = function (el, isIntersecting) {
		if (isIntersecting) {
			const ta = new TweenTextAnimation(el);
			ta.animate();
		}
	};

	const so = new ScrollObserver(".animate-title", cb);

	const _inviewAnimation = function(el, inview) {
		if (inview) {
			el.classList.add('inview');
		} else {
			el.classList.remove('inview');
		} 
	}

	const so2 = new ScrollObserver(".cover-slide", _inviewAnimation);
});


