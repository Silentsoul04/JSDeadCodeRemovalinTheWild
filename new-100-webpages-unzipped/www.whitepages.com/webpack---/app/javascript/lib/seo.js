// TODO: Switch all hideShowSetUp toggles to use bootstrap and then we can
// move this to the main js and use on all page that have a toggle to toggle the text
$('.more-toggle').on('click', function() {
    $(this)
        .find('span')
        .toggleClass('hide');
});