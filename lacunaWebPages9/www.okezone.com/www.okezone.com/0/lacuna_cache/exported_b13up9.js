
        /*SSO AJAX CALL*/
        var canal = 'wp';
        $.ajax({
            type: 'GET',
            url: 'https://www.okezone.com/okezoneid/mobileapps',
            dataType: 'json',
            success: function(data) {
                $('.loginsso').html(data.html);
                $('.logoutsso').html(data.logout);
            }
        });
    