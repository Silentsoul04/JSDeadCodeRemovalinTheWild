
        if (window.archive_analytics) {
            var vs = window.archive_analytics.get_data_packets();
            for (var i in vs) {
                vs[i]['cache_bust'] = Math.random();
                vs[i]['server_ms'] = 34;
                vs[i]['server_name'] = "www17.us.archive.org";
            }

            if ($(".more_search").size() > 0) {
                window.archive_analytics.send_scroll_fetch_base_event();
            }
        }
    