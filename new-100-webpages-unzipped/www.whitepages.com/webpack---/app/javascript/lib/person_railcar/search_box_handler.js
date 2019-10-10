import WPR from 'wpr-helpers';
import * as R from 'ramda';

function incorrect_format($form) {
    var formats = ['area_code', 'prefix', 'line_number'].map(function(n) {
        var input_obj = $form.find('[name=' + n + ']');

        if (
            input_obj.val().length < parseInt(input_obj.attr('maxLength')) ||
            !$.isNumeric(input_obj.val())
        ) {
            input_obj.addClass('incorrect_input');
            return false;
        } else {
            input_obj.removeClass('incorrect_input');
        }
    });

    return $.inArray(false, formats) != -1;
}

$(function() {
    $('form.people_search').on('submit', function() {
        return WPR.empty_field_validation($(this));
    });
});

$(function() {
    $('form.sem_phone_search').on('submit', function() {
        if (!WPR.empty_field_validation($(this))) return false;
        if (incorrect_format($(this))) return false;
    });
});