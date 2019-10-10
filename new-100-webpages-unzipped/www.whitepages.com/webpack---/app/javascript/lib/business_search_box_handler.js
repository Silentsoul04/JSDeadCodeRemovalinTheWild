import WPR from 'wpr-helpers';

$(function() {
    $('form.business').on('submit', function(evt) {
        return WPR.empty_field_validation($(this));
    });
});