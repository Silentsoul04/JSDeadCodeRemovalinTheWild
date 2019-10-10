const $body = $('body');
if (
    ['phone-unpub', 'phone-pub', 'phone-spam'].some(cls => $body.hasClass(cls))
) {
    // required by all three kinds of pages
    if ($('#call-activity-map').length > 0) {
        require('./shared/spam_page');
    }
    if ($('#spam-score-form').length > 0) {
        require('./shared/spam_comments');
    }
}