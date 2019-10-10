$(function() {
    $('.menu-button, .greyed-out').on('click', function() {
        if ($('.menu-wrapper').hasClass('collapsed')) {
            $('.menu-wrapper').removeClass('collapsed');
            $('.menu-wrapper').data('height', $('.menu-wrapper').outerHeight());
            $('.menu-button .open').fadeOut(300, function() {
                $('.menu-button .close').fadeIn(300);
            });
            $('.greyed-out').css(
                'min-height',
                $(window).height() - $('.menu').height()
            );

            $('.menu-wrapper').addClass('expanded');
            $('.content-wrapper, .footer-additional').css('display', 'none');
            $('.content-wrapper').css(
                'padding-top',
                $('.menu-wrapper').data('height')
            );
        } else {
            $('.content-wrapper, .footer-additional').css('display', 'block');
            $('html').css('overflow', 'auto');
            $('.menu-wrapper').removeClass('expanded');
            $('.menu-button .close').fadeOut(300, function() {
                $('.menu-button .open').fadeIn(300);
            });
            $('.greyed-out').css('min-height', 0);
            $('.content-wrapper').css('padding-top', 0);
            $('.menu-wrapper').addClass('collapsed');
        }
    });

    $('#menuOptions').on('shown.bs.collapse', function() {
        greyed_out_height = $(window).height() - $('.menu').height();
        greyed_out_height = greyed_out_height < 0 ? 0 : greyed_out_height;

        $('.greyed-out').css('min-height', greyed_out_height);
    });

    $('#menuOptions').on('hidden.bs.collapse', function() {
        $('.greyed-out').css('min-height', 0);
    });
});