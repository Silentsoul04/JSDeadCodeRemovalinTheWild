$('.free-results li').on('click', '.show-all', function() {
    const result = $(this).parents('li');
    result.find('.secondary-content').css('border-bottom', 'none');
    result.find('.secondary-content li').css('max-height', '1000px');
    result.find('.secondary-content').addClass('no-fade');
    $(this).addClass('hide');
});

$(window).on('scroll', () => {
    if ($(window).scrollTop() > 1) {
        $('.sticky-serp-header').removeClass('hide');
        $('.serp-header-options').addClass('.new-sticky-serp-header');
    } else {
        $('.sticky-serp-header').addClass('hide');
        $('.serp-header-options').removeClass('.new-sticky-serp-header');
    }
});

$('.scroll-filter').on('click', () => {
    $('body,html').animate({
            scrollTop: 0
        },
        () => {
            if (!$('#facet-background').hasClass('show'))
                $('#show-filter').trigger('click');
        }
    );
});