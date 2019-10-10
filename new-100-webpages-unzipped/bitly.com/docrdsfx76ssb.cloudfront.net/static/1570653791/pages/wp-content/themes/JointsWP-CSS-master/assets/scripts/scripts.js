jQuery(document).foundation();
/*
These functions make sure WordPress
and Foundation play nice together.
*/
jQuery(document).ready(function() { // Remove empty P tags created by WP inside of Accordion and Orbit
    jQuery('.accordion p:empty, .orbit p:empty').remove(); // Adds Flex Video to YouTube and Vimeo Embeds
    jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function() {
        if (jQuery(this).innerWidth() / jQuery(this).innerHeight() > 1.5) {
            jQuery(this).wrap("<div class='widescreen responsive-embed'/>");
        } else {
            jQuery(this).wrap("<div class='responsive-embed'/>");
        }
    });
});



jQuery(document).ready(function($) {

    $('#main-nav a[href="#"]').on('click', function(e) {
        e.preventDefault();
    });


    $('#main-nav').mouseenter(function(event) {
        //console.log('over');
        setTimeout(function() {
            // $('#main-nav').addClass('noTransition')
        }, 200);

    }).mouseleave(function(event) {
        //$('#main-nav').removeClass('noTransition');
    });


    $('#main-nav > .menu-item > .is-dropdown-submenu').addClass('visuallyHidden');
    $('#main-nav > .menu-item').mouseenter(function(event) {
        $(this).find('.is-dropdown-submenu').removeClass('visuallyHidden');
    }).mouseleave(function(event) {
        submmenu = $(this).find('.is-dropdown-submenu');
        setTimeout(function() {
            submmenu.addClass('visuallyHidden');
        }, 400);
    });


    $(' section.accordion-block.Horizontal li.tabs-title').mouseenter(function(event) {
        $(' section.accordion-block.Horizontal li.tabs-title').removeClass('is-active')
        $('.tabs-panel').removeClass('is-active').attr('aria-hidden', 'true');
        $(this).addClass('is-active');
        panel = $(this).attr('data-toggle');
        $('.tabs-panel').attr('aria-hidden', 'true');
        $(panel).addClass('is-active').attr('aria-hidden', 'false');
    })
    $(' section.accordion-block.Horizontal li.tabs-title a').on('click', function() {
        window.location = $(this).attr('href');
    });


    if ($('.language--select').length > 0) {
        $('.language--select').on('change', function() {
            url = $(this).val();
            window.location = url;
        })
    }

    if ($('section.comparison-tables').length > 0) {
        var plans = [];
        $('.plan-names td').each(function(index, item) {
            planname = $(this).html();
            plans.push(planname);
        });
        $('section.comparison-tables tr').each(function(index, item) {
            $(this).find('td').each(function(indextd, item) {
                //console.log(indextd);
                if (plans[indextd] != '–') {
                    $(this).attr('data-plan', plans[indextd]);
                }
            });
        });
        $('.comparison-tables .table tr.features').on('click', function() {
            $(this).toggleClass('is-active');
        })
    }


    if ($('section.gallery-block.careers-grid').length > 0) {
        $('.gallery-row-container').attr('id', 'page-careers-benefits-photo-grid');
        $('.gallery-row-container').addClass('show-for-large');
        $('.gallery-row-container .gallery-image').each(function(count, item) { //console.log(count);
            var chr = String.fromCharCode(97 + count);
            $(this).wrap('<div class="page-careers-benefits-photo-grid-cell page-careers-benefits-photo-grid-cell-' + chr + ' inactive"></div>')

            caption = $(this).attr('alt');
            $(this).after('<div class="benefit-caption"><div class="benefit-caption-inner">' + caption + '</div></div>')
        });

        //mobile

        $('section.gallery-block').append('<div class="slide-orbit hide-for-large"></div>')
        $('.slide-orbit').append('<div class="slide-orbit-container owl-carousel">');
        $('.page-careers-benefits-photo-grid-cell').each(function() {
            $(this).clone().attr('class', '').addClass('item-orbit-slide').appendTo('.slide-orbit-container');
        });
        $('.item-orbit-slide').each(function() {
            $(this).find('img').wrap('<figure class="item-orbit-figure">');
            $(this).find('.benefit-caption').wrap('<figcaption class="item-orbit-caption">');
        });

        var owl = $('.slide-orbit-container').owlCarousel({
            margin: 10,
            loop: true,
            dots: false,
            center: false,
            nav: false,
            autoHeight: true,
            autoplaySpeed: 1000,
            navSpeed: 1000,
            dotsSpeed: 1000,
            autoWidth: false,
            navText: ['<span class="mv-left"><</span> ', ' <span class="mv-right">></span>'],
            items: 1,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,

        }) //end owl

    }


    if ($('section.gallery-block.staff-animation').length > 0) {
        var els = $('.staff-animation .gallery-image');
        var half = $('.staff-animation .gallery-image').length / 2;
        els.slice(0, half).wrapAll('<div class="gallery-row"></div>');
        $('.gallery-row-container > img').wrapAll('<div class="gallery-row"></div>');
        $('.gallery-row').css('transform', 'translateX(0px)')

        clonedimg = 0;
        var animateSlider = function(slider, start) {

            //console.log(start);

            $('.gallery-row').each(function(index, item) {

                if (index == 0) {
                    $(this).css('transform', 'translateX(-' + start + 'px)');
                } else {
                    $(this).css('transform', 'translateX(' + start + 'px)');
                }

            });

            animationwidth = $('.gallery-row-container').width() + 150;

            if ((start % 150) == 0 && start > animationwidth) {
                $('.gallery-row-container > .gallery-row:first-child > img').eq(clonedimg).clone().appendTo('.gallery-row-container > .gallery-row:first-child').addClass('cloned');
                $('.gallery-row-container > .gallery-row:last-child > img').eq(clonedimg).clone().appendTo('.gallery-row-container > .gallery-row:last-child').addClass('cloned');
                clonedimg++;
            }

            start++;

            window.requestAnimationFrame(function() {
                animateSlider(slider, start)
            });

        }
        jQuery(window).load(function() {
            var slider = document.querySelector('.gallery-row-container');
            animateSlider(slider, 1);
        })
    }

    $('.top-bar-right .menu-icon').on('click', function() {
        screensize = window.innerHeight;
        itemheight = $('.off-canvas .top-bar').outerHeight() + $('.off-canvas > .accordion-menu').outerHeight() + $('.off-canvas > .nav-wrap-mobile').outerHeight();
        //console.log(screensize);
        //console.log(itemheight);

        padding = screensize - itemheight;
        if (padding > 0) {
            $('.off-canvas > .nav-wrap-mobile').css('margin-top', padding + 'px')
        }
    })

    $('.team-block .accordion-content a').attr('target', '_blank');
    $('.gallery-icon img').attr('width', '');
    $('.gallery-icon img').attr('height', '');


    //pricing
    //$('.page-pricing [data-toggle-all]' ).click(function () {
    //	$( '.page-pricing input[type="checkbox"][data-toggle-all]').prop('checked', this.checked);
    //	$('.page-pricing input[type="checkbox"][data-toggle-all]').trigger('change');
    //})
    $('.page-pricing [data-toggle-all]').click(function() {
        var $basicSignupLink = $('#basic-signup');
        var billing = this.checked ? 'month' : 'annual';
        $basicSignupLink.prop({
            href: $basicSignupLink.prop('href').replace(/month|annual/, billing)
        });
        $('.page-pricing input[type="checkbox"][data-toggle-all]').prop('checked', this.checked);
        $('.page-pricing input[type="checkbox"][data-toggle-all]').trigger('change');
    });

}); // end ready

//window loaded
window.onload = function() {
    jQuery('body').addClass('page-loaded');
};

jQuery(window).load(function() {
    jQuery('body').addClass('page-loaded');

    if (jQuery('body #banner-cookie').length > 0) {
        //gdpr
        jQuery('header.header').addClass('gdrp-on');

        jQuery(document).on('click', '#banner-cookie--button', function(e) {
            //jQuery('.banner-cookie--button').on('click',function(){
            jQuery('header.header').removeClass('gdrp-on')
        })
    }


    //Inline SVG files
    if (jQuery('.menu-item a img,.tabs-title img, .button-primary img').length > 0) {
        jQuery('.menu-item a img,.tabs-title img, .button-primary img').each(function() {
            var $img = jQuery(this);
            var imgURL = $img.attr('src');
            jQuery.get(imgURL, function(data) {
                var $svg = jQuery(data).find('svg');
                $svg = $svg.removeAttr('xmlns:a');
                $img.replaceWith($svg);
            }, 'xml');
        });
    }
}); // end window loaded