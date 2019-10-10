import 'bootstrap/js/dist/collapse';

$(function() {
    $('.close-notification').on('click', function() {
        $('.site-notification-wrapper').collapse('hide');
    });

    if ($('.site-notification-wrapper').length > 0) {
        if ($('.site-notification-wrapper').length == 2) {
            var notification = $('.site-notification-wrapper').first();
        } else {
            var notification = $('.site-notification-wrapper');
        }
        setTimeout(function() {
            notification.collapse('show');
        }, 1000);

        setTimeout(function() {
            notification.collapse('hide');
        }, 10000);
    }
});