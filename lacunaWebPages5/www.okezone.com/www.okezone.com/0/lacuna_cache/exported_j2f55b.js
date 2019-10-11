
        /*GA send Click*/
        $(function() {
            var channel = 'WP Mobile';

            $('.ga_AdsTester').click(function() {
                ga('send', 'event', channel, 'Click', 'AdsTester_Click', window.location, window.location);
            });
            $('.ga_AdsTester').contextmenu(function() {
                ga('send', 'event', channel, 'RightClick', 'AdsTester_Click', window.location, window.location);
            });


        });
    