
        // Fire an event once when the user scrolls past the fold
        $(document).bind('scroll.learner', function() {
            if ($(document).scrollTop() >= $(window).height()) {
                spweb.analytics.sendEvent('home', 'scroll-past-fold', '', '');
                $(document).unbind('scroll.learner');
                $(document).unbind('click.learner');
            }
        });
    