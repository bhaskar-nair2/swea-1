'use strict';

var App = {};

App = {
	GLOBAL: {
		activeToasts: 0,
		isTouch: function isTouch() {
			return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
		},
		$nav: $('nav')
	},
	initSideNav: function sinitSideNav() {
		$('#sidenav-toggle').sideNav({
			closeOnClick: true
		});
	},
	initNavColorChange: function initNavColorChange() {
		var $trianglesHeight = $('#triangles').height() || 720;
		$(document).on('scroll ready', function () {
			App._switchNavColorSchemes($trianglesHeight);
		});
	},
	_switchNavColorSchemes: function _switchNavColorSchemes($trianglesHeight) {
		if ($(window).scrollTop() > $trianglesHeight) {
			App.GLOBAL.$nav.addClass('dark');
		} else {
			App.GLOBAL.$nav.removeClass('dark');
		}
	},
	initScrollSpy: function initScrollSpy() {
		$('.scrollspy').scrollSpy({
			scrollOffset: 50
		});
	},
	initParallax: function initParallax() {
		$('.parallax').parallax();
	}
};

$(document).on('ready', function () {
	App.initSideNav();
	App.initNavColorChange();
	App.initScrollSpy();
	App.initParallax();
});
