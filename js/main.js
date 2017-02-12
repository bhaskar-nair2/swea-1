'use strict';

var App = {};

App = {

    /*
    * Global variables used throughout the app
    * */
    GLOBAL: {
        activeToasts: 0,
        $pace: $('.pace'),
        progress: {
            show: function show () {
                App.GLOBAL.$pace.show().css('visibility', 'visible');
            },
            hide: function hide () {
                App.GLOBAL.$pace.hide().css('visibility', 'hidden');
            }
        },
        isTouch: function isTouch () {
            return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        },
        $nav: $('nav')
    },

    /*
    * Loader handling
    * */
    onLoad: function onLoad () {
        window.onload = function () {
            $('#loading-overlay').fadeOut();
            App.GLOBAL.progress.hide();
        };
    },

    /*
     * Initing side nav for medium and smaller devices
     * */
    initSideNav: function sinitSideNav () {
        $('#sidenav-toggle').sideNav({
            closeOnClick: true
        });
    },

    /*
    * Handling nav color scheme, depending on scroll position
    * */
    initNavColorChange: function initNavColorChange () {
        var $trianglesHeight = $('#triangles').height() || 720;
        $(document).on('scroll ready', function () {
            App._switchNavColorSchemes($trianglesHeight);
        });
    },

    /*
    * A private function that toggles .dark class for nav element
    * */
    _switchNavColorSchemes: function _switchNavColorSchemes ($trianglesHeight) {
        if ($(window).scrollTop() > $trianglesHeight) {
            App.GLOBAL.$nav.addClass('dark');
        } else {
            App.GLOBAL.$nav.removeClass('dark');
        }
    },

    /*
    * Initialising scroll spy to detect current section
    * Check it out here: http://materializecss.com/scrollspy.html
    * */
    initScrollSpy: function initScrollSpy () {
        $('.scrollspy').scrollSpy({
            scrollOffset: 50
        });
    },

    /*
    * Initialising parallax
    * http://materializecss.com/parallax.html
    * */
    initParallax: function initParallax () {
        $('.parallax').parallax();
    },

    /*
    * Initialising slider
    * http://materializecss.com/media.html#slider
    * */
    initSlider: function initSlider () {
        $('.slider').slider({
            full_width: true,
            height: 720
        });
    }
};

$(document).on('ready', function () {
    App.onLoad();
    App.initSideNav();
    App.initNavColorChange();
    App.initScrollSpy();
    App.initParallax();
    App.initSlider();
});
