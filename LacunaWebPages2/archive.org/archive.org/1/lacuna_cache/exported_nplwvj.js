
        'use strict';
        if ('archive_analytics' in window) {
            archive_analytics.service = "ao_2";

            archive_analytics.send_pageview_on_load({});

            archive_analytics.process_url_events(window.location);
        }
    