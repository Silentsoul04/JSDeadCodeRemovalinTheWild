$(function() {
    $('#check-rtp-owner').on('submit', function(e) {
        e.preventDefault();
        if ($('#premium-no-owner').length == 0) return;

        var form = $('#check-rtp-owner');
        if (form.length > 0) {
            $.ajax({
                type: 'GET',
                url: form.attr('action'),
                cache: false,
                dataType: 'json',
                success: function(data, status, jqxhr) {
                    if (data['has_owner']) {
                        // redirect to usual premium url
                        var url = $('#owner_redirect').val();
                        $(location).attr('href', url);
                    } else {
                        // show no owner search module
                        $('#check-rtp-owner-btn').addClass('hide');
                        $('#upgrade-to-premium').removeClass('hide');
                        $('#phone-no-owner').removeClass('hide');
                        // add animation to lessen shock to user
                        var initial_height = $('#phone-no-owner').outerHeight();
                        $('#phone-no-owner').height(0);
                        $('#phone-no-owner').animate({
                                height: initial_height + 'px'
                            },
                            500
                        );
                        $('.premium-wrapper').animate({
                            height: '0px'
                        }, 500);
                        setTimeout(function() {
                            $('.premium-wrapper').addClass('hide');
                        }, 450);
                    }
                }
            });
        }
    });
});