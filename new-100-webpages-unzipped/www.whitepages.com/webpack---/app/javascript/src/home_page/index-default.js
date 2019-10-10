$(function() {
    var config = {
        body_el: $('body'),
        nav: $('#home-nav .header-wrapper'),
        nav_toggle: $('.mobile-menu'),
        nav_wrapper: $('.nav-wrapper'),
        header: $('#header'),
        menu_content: $('.menu-wrapper'),
        main_content: $('.content-wrapper'),
        init_info_height: $('.information-types .list-wrapper').height(),
        home_footer: $('#home-footer'),
        footer: $('#interior-footer, .footer-additional'),
        menu_is_open: false,
        ad_skin: false,
        skin: false,
        desktop_view: window.matchMedia('(min-width: 768px)').matches
    };

    // on page load
    if (
        $('.information-types .list-wrapper').height() ==
        $('.information-types .list-wrapper ul').height() +
        parseInt($('.information-types .list-wrapper ul').css('margin-bottom'))
    ) {
        $('#info-toggle').remove();
        $('.information-types').removeClass('collapsed');
    }

    // put cursor in search field on page load
    $('.form-joined-wrapper.in .non-mobile li:first-child input')
        .trigger('focus')
        .trigger('select');

    //for form page seo re-design
    if (config.desktop_view) {
        $('.form-joined-wrapper.in .input-wrapper input.focus-me')
            .trigger('focus')
            .trigger('select');
    }

    $('.mobile-search-button').on('click', function() {
        config.nav.addClass('open-menu');
        config.header.addClass('in');
        config.menu_content.addClass('hidden');
        config.body_el.addClass('mobile-search');
    });

    $('.cancel').on('click', function() {
        config.nav.removeClass('open-menu');
        config.header.removeClass('in');
        config.menu_content.removeClass('hidden');
        config.main_content.removeClass('hidden');
        config.body_el.removeClass('mobile-search');
    });

    $('#info-toggle').on('click', function() {
        if ($('.information-types').hasClass('collapsed')) {
            $('.information-types').removeClass('collapsed');
            $('.information-types .list-wrapper').data(
                'height',
                $('.information-types .list-wrapper').height()
            );
            $('.information-types .list-wrapper').animate({
                    'max-height': $('.list-wrapper ul').innerHeight()
                },
                600
            );
        } else {
            $('.information-types .list-wrapper').animate({
                    'max-height': $('.information-types .list-wrapper').data('height')
                },
                500
            );
            setTimeout(function() {
                $('.information-types').addClass('collapsed');
            }, 500);
        }
    });

    $('.start-search').on('click', function() {
        if ($('.mobile-search-button').css('display') == 'none') {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            $('.form-joined-wrapper.in .non-mobile li:first-child input')
                .trigger('focus')
                .trigger('select');
        } else {
            $('.mobile-search-button').trigger('click');
        }
    });

    $('.start-search-seo').on('click', scroll_to_top_and_focus);

    $('.mobile-search-button-seo').on('click', open_mobile_dropdown_search);

    $('.dropdown-subheader-wrapper .close-mobile-search').on(
        'click',
        close_mobile_dropdown_search
    );

    function scroll_to_top_and_focus() {
        $('html, body').animate({
                scrollTop: 0
            },
            500
        );

        if (config.desktop_view) {
            $('.form-joined-wrapper.in .form-joined .input-wrapper input.focus-me')
                .trigger('focus')
                .trigger('select');
        }
    }

    function open_mobile_dropdown_search() {
        $('.dropdown-subheader-wrapper').addClass('open');
        $('.header-wrap').addClass('close');
        $('.dropdown-subheader-wrapper .focus-me-mobile-header')
            .trigger('focus')
            .trigger('select');
    }

    function close_mobile_dropdown_search() {
        $('.dropdown-subheader-wrapper').removeClass('open');
        $('.header-wrap').removeClass('close');
    }

    // Footer activity
    $(window).on('scroll', function() {
        var top_of_element = $('.footer-wrapper').offset().top;
        var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
        if (
            bottom_of_screen > top_of_element + $('.bottom-banner').outerHeight() &&
            $('.bottom-banner').hasClass('fixed')
        ) {
            $('.bottom-banner').removeClass('fixed');
        } else if (
            bottom_of_screen < top_of_element - 4 &&
            !$('.bottom-banner').hasClass('fixed')
        ) {
            $('.bottom-banner').addClass('fixed');
        }
    });
});