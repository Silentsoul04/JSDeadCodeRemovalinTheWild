import WPR from 'wpr-helpers';

$(function() {
    function set_tagline_class(page_name) {
        if (page_name === '') {
            page_name = 'person';
        }
        $('.tagline-wrapper.visible')
            .removeClass('visible')
            .addClass('hidden');
        $('.tagline-wrapper.' + page_name)
            .removeClass('hidden')
            .addClass('visible');
    }

    var self = this;

    var config = {
        body_el: $('body'),
        top_panel: $('#home-nav'),
        sticky_threshold: $('#home-nav').height(),
        nav: $('#home-nav .header-wrapper'),
        nav_toggle: $('.mobile-menu'),
        nav_wrapper: $('.nav-wrapper'),
        header: $('#header'),
        home_footer: $('#home-footer'),
        footer: $('#interior-footer, .footer-additional'),
        menu_is_open: false,
        ad_skin: false,
        skin: false
    };

    $('.primary-tabs a.person').on('click', function() {
        set_tagline_class('person');
    });

    $('.primary-tabs a.business').on('click', function() {
        set_tagline_class('business');
    });

    $('.primary-tabs a.phone').on('click', function() {
        set_tagline_class('phone');
    });

    $('.primary-tabs a.address').on('click', function() {
        set_tagline_class('address');
    });

    $('.primary-tabs a.email').on('click', function() {
        set_tagline_class('email');
    });

    $('.people_search .first input').trigger('focus');
    $('.people_search .first').addClass('search-selected');

    function set_down_scroll() {
        var scroll_nav = function() {
            if (!config.ad_skin && !config.skin) {
                config.top_panel.removeClass('centered-nav');
                config.top_panel.addClass('primary-nav');
                config.header.addClass('scrolling');
            }
        };

        if ($(window).scrollTop() > config.sticky_threshold) {
            if (config.skin && !config.ad_skin) {
                $('.international-nav #header').css(
                    'background-color',
                    'rgba(255,255,255,1)'
                );
            }
            window.setTimeout(scroll_nav, 50);
            config.nav_toggle.trigger('click');
            $(window)
                .off('scroll', config.throttled_down_scroll)
                .on('scroll', config.throttled_up_scroll);
        }
    }

    function update_menu_state() {
        config.menu_is_open = !config.menu_is_open;
    }

    function set_up_scroll() {
        var static_nav = function() {
            if (!config.ad_skin && !config.skin) {
                config.top_panel.addClass('centered-nav');
                config.top_panel.removeClass('primary-nav');
                config.header.removeClass('scrolling');
                !config.menu_is_open ? config.nav_toggle.trigger('click') : null;
            }
        };

        if ($(window).scrollTop() <= config.sticky_threshold) {
            if (config.skin && !config.ad_skin) {
                $('.international-nav #header').css(
                    'background-color',
                    'rgba(255,255,255,0.9)'
                );
            }
            window.setTimeout(static_nav, 50);
            $(window)
                .off('scroll', config.throttled_up_scroll)
                .on('scroll', config.throttled_down_scroll);
        }
    }

    // stolen from underscore
    function throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === false ? 0 : new Date();
            timeout = null;
            result = func.apply(context, args);
        };
        return function() {
            var now = new Date();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }

    function init_page() {
        if (!(WPR.config.win_width >= 768) ||
            'ontouchstart' in document.documentElement
        ) {
            return;
        }
        if (config.body_el.hasClass('ad-skin-wrapper')) {
            config.ad_skin = true;
            config.body_el.removeClass('skin-wrapper');
        }
        if (config.top_panel.hasClass('international-nav')) {
            config.skin = true;
            if (config.skin && !config.ad_skin) {
                $('.international-nav #header').css(
                    'background-color',
                    'rgba(255,255,255,0.9)'
                );
            }
        }

        config.throttled_up_scroll = throttle(set_up_scroll, 50);
        config.throttled_down_scroll = throttle(set_down_scroll, 50);

        config.menu_is_open = true;
        config.nav_toggle.on('click', update_menu_state);

        $(window).on('scroll', config.throttled_down_scroll);
    }

    $('.mobile-search-button').on('click', function() {
        config.nav.addClass('open-menu');
        config.body_el.addClass('mobile-search');
    });

    $('.cancel').on('click', function() {
        config.nav.removeClass('open-menu');
        config.body_el.removeClass('mobile-search');
    });

    init_page();

    $(window).on('resize', function() {
        if (config.nav_wrapper.hasClass('visible-nav')) {
            toggleFooterElements();
        }
    });

    $('html').on('click', function() {
        var hamburger = document.getElementById('hamburger');
        var hamburgerStyle = window.getComputedStyle(hamburger).display;

        if (
            config.nav_wrapper.hasClass('visible-nav') &&
            hamburgerStyle != 'none'
        ) {
            toggleFooterElements();
        }
    });

    config.nav_wrapper.on('click', function(event) {
        event.stopPropagation();
    });

    $('.nav-expander').on('click', function(event) {
        event.stopPropagation();
        toggleFooterElements();
    });

    $('.nav-collapser').on('click', function() {
        toggleFooterElements();
    });

    $('.open-link').on('click', function() {
        $('#home-footer').addClass('slide-up');
    });

    $('.close-link').on('click', function() {
        $('#home-footer').removeClass('slide-up');
    });

    var toggleVisibility = function(obj) {
        obj.toggleClass('visible-nav');
        obj.toggleClass('hidden-nav');
    };

    var toggleFooterElements = function() {
        toggleVisibility($('.nav-wrapper'));
        toggleVisibility($('.nav-collapser'));
        toggleVisibility($('.nav-expander'));
    };
});