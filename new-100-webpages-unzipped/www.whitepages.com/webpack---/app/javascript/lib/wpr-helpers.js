import 'jquery.smartresize';
import 'bootstrap/js/dist/tooltip';

var WPR = {
    config: {
        body_nav_tabs: $('.title-section .primary-tabs.tabs'),
        device_ua: navigator.userAgent,
        win_with: null
    },

    init: function() {
        this.init_window_width();
        this.init_device_overrides();
        this.init_phone_button();
        this.init_misc_helpers();
        this.init_page_focus_refresh();
        this.init_primary_nav();
        this.init_subheader_validation();
        this.init_micro_modal();
        this.init_responsive_images();
        this.init_emulate_select();
        this.init_deep_links();
        this.init_search_clear();
    },

    init_window_width: function() {
        this.config.win_width = $(window).width();
        var that = this;
        $(window).smartresize(function() {
            that.config.win_width = $(window).width();
        });
    },

    init_device_overrides: function() {
        if (this.config.device_ua.indexOf('Android') >= 0) {
            $('html').addClass('android-polyfill');
            $('input[type="text"], input[type="tel"]').on('focus blur', function() {
                $(this)
                    .parent('li')
                    .toggleClass('active-field');
            });
        }

        if (this.config.device_ua.indexOf('IEMobile/7') >= 0) {
            $('html').addClass('iem7');
        }
    },

    init_phone_button: function() {
        var phone_input = $('#phone input[type="tel"]');
        $(phone_input).on('focus', function() {
            $(phone_input)
                .next('button')
                .removeClass('visible-lg visible-xl');
        });
    },

    init_misc_helpers: function() {
        //mimics browser back button functionality for search again
        var $history_btn = $('.history-back');
        $history_btn.attr('href', document.referrer);

        //prints...
        $('.print a').on('click', function(e) {
            window.print();
            //don't return false (stopping propogation) otherwise ga click events will never fire
            e.preventDefault();
        });

        //Lazy-loading of images on detail pages
        $('.current-location .city-map')
            .removeClass('hide')
            .parent('.image-map-wrapper')
            .addClass('loaded');

        /*IOS bug fix for modal dropdown */
        $('.mobile-icon').on('click', function() {});

        $('.home-page form input[data-required]').on('keyup', function(e) {
            var $parent_form = $(this).closest('form');
            !$.trim($(this).val()) === '' ?
                $parent_form.addClass('has-focus') :
                $parent_form.removeClass('has-focus');
        });

        $('#lookup-legal .more-link').on('click', function(e) {
            e.preventDefault();
            $(this)
                .hide()
                .next('.hide')
                .show();
        });

        $('#lookup').on('focus', function() {
            $('#lookup-legal .more-link').trigger('click');
            $('#lookup-legal').show();
        });

        $('.identity-manager-content .alert')
            .delay(15000)
            .slideUp(500, function() {
                $(this).addClass('hide');
            });

        var removeClicked = function() {
            $('button.new-search').removeClass('clicked');
        };

        $('button.new-search').on('click', function() {
            $('button.new-search').addClass('clicked');
            setTimeout(removeClicked, 500);
        });

        $('.primary-tabs').on('click', function() {
            $('button.new-search').removeClass('clicked');
        });
    },

    /* Prevent weird layout issues when page loses focus for extended period of time */
    init_page_focus_refresh: function() {
        var $body = $('body');
        $(window).on('focus', function() {
            $body.addClass('focus-reset');
            window.setTimeout(function() {
                $body.removeClass('focus-reset');
            }, 100);
        });
    },

    init_micro_modal: function() {
        $('[data-micro-modal]').on('click', function() {
            var config = {
                target: $(this).attr('href'),
                parent_el: $(this).closest('.micro-modal-wrapper'),
                target_height: $(this.parent_el).height(),
                close: $('[data-dismiss]', this.parent_el),
                fade_el: $('[data-modal-fade]', this.parent_el)
            };

            $(config.target)
                .removeClass('hidden')
                .height(config.target_height + 'px');
            $(config.fade_el).addClass('faded');

            function close_micromodal() {
                $(config.target).addClass('hidden');
                $(config.fade_el).removeClass('faded');
            }

            $(config.close).on('click', close_micromodal);

            return false;
        });
    },

    init_responsive_images: function() {
        var config = {
            res_img: $('body .responsive-img'),
            res_img_parent: $('body .responsive-img').parent()
        };
        var that = this;
        switch_image();
        config.res_img_parent.removeClass('hide');

        function switch_image() {
            that.config.win_width > 600 ?
                config.res_img.attr('src', config.res_img.attr('data-desktop-url')) :
                config.res_img.attr('src', config.res_img.attr('data-mobile-url'));
        }

        $(window).smartresize(function() {
            switch_image();
        });
    },

    //Check for required fields that have no user input
    init_subheader_validation: function() {
        var that = this;
        $(
            '.subheader, .home-page form, #lookup-form, .email_search, .geo-locations form'
        ).on('submit', function(e) {
            return that.empty_field_validation($(this));
        });
    },

    init_primary_nav: function() {
        var config = {
            body: $('body'),
            body_top: $(window).scrollTop(),
            nav_tabs: $('.primary-tabs'),
            search_form: $('.form-joined-wrapper'),
            search_wrap: $('#header'),
            header_wrapper: $('.header-wrapper'),
            banner: $('#banner'),
            main: $('#main'),
            mobile_banner: $('.mobile-banner'),
            mobile_modal: $('.modal-backdrop.mobile'),
            modal_trigger: $('.mobile-search-button'),
            nav_helper_label: $('.helper-label', '#header'),
            landing_wrapper: $('.landing-wrapper'),
            site_notification: $('.site-notification-wrapper'),
            bg_header: $('.bg-header'),
            tenant_banner: $('.tenant-banner'),
            product_links_container: $('#product-links-container'),
            mobile_dropdown_search: $('.bg-header .dropdown-subheader-wrapper'),
            mobile_header_collapsed: $('.bg-header .header-wrap')
        };

        function sticky_nav() {
            if (!(
                    $('body').hasClass('home-page') || $('body').hasClass('new-home-page')
                ) ||
                $('body').hasClass('ad-skin-wrapper')
            ) {
                config.body_top = $(this).scrollTop();
                if (config.body_top < 1) {
                    config.header_wrapper.css('paddingTop', 0);
                    config.landing_wrapper.css('paddingTop', 0);
                    config.search_wrap.removeClass('scrolling fix-search');
                    config.landing_wrapper.removeClass('scrolling');
                    config.site_notification.removeClass('scrolling');
                    config.bg_header.removeClass('scrolling');
                } else {
                    var padding_space = config.search_wrap.outerHeight(true);
                    config.landing_wrapper.css('paddingTop', padding_space);
                    config.header_wrapper.css('paddingTop', padding_space);
                    config.search_wrap.addClass('scrolling fix-search');
                    config.landing_wrapper.addClass('scrolling');
                    config.site_notification.addClass('scrolling');
                    config.bg_header.addClass('scrolling');
                }

                if (config.body_top < 290) {
                    config.bg_header.removeClass('show-form');
                } else {
                    config.bg_header.addClass('show-form');
                }
            }
        }

        function sticky_nav_seo() {
            if ($('body').hasClass('form-page-seo')) {
                config.body_top = $(this).scrollTop();
                var header_height = config.bg_header.height();

                var hidden_tenant_banner =
                    config.tenant_banner !== undefined &&
                    config.tenant_banner.hasClass('hide');
                var tenant_banner_height = hidden_tenant_banner ?
                    config.tenant_banner.height() :
                    0;

                if (config.body_top < header_height) {
                    config.header_wrapper.css('paddingTop', 0);
                    config.landing_wrapper.css('paddingTop', 0);
                    config.landing_wrapper.removeClass('scrolling');
                    config.search_wrap.removeClass('scrolling fix-search');
                    config.site_notification.removeClass('scrolling');
                    config.bg_header.removeClass('show-form scrolling invisible-header');
                    config.product_links_container.removeClass('scrolling');
                    config.mobile_dropdown_search.blur();
                    config.mobile_header_collapsed.removeClass('close');
                } else if (config.body_top < 435 - tenant_banner_height) {
                    config.bg_header.addClass('invisible-header');
                    config.bg_header.removeClass('show-form scrolling');
                    config.mobile_dropdown_search.removeClass('open');
                    config.mobile_dropdown_search.blur();
                    config.mobile_header_collapsed.removeClass('close');
                } else {
                    var padding_space = config.search_wrap.outerHeight(true);
                    config.landing_wrapper.css('paddingTop', padding_space);
                    config.landing_wrapper.addClass('scrolling');
                    config.header_wrapper.css('paddingTop', padding_space);
                    config.search_wrap.addClass('scrolling fix-search');
                    config.site_notification.addClass('scrolling');
                    config.bg_header.addClass('show-form scrolling');
                    config.bg_header.removeClass('invisible-header');
                    config.product_links_container.addClass('scrolling');
                }
            }
        }

        function nav_modal() {
            config.mobile_modal.toggleClass('in');
            config.nav_tabs.toggleClass('in');
            config.search_form.toggleClass('collapse');
            config.search_wrap.toggleClass('in');
            config.body.addClass('mobile-search');
            $('.ffl-wrapper').floatingFormLabels();
        }

        function close_modal() {
            config.modal_trigger.first().trigger('click');
            $('.mobile-close-menu').removeClass('close-menu');
            config.body.removeClass('mobile-search');
        }

        function focus_field() {
            var $next_input = $(this).next('input');
            $next_input.trigger('focus');
            var val = $next_input.val();
            $next_input.val('');
            $next_input.val(val);
        }

        function scroll_input_to_top() {
            const mobile_view = window.matchMedia('(max-width: 768px)').matches;

            if (mobile_view) {
                const top_of_search_tabs = $('.form-page-seo .scroll-target').offset()
                    .top;
                const gap = 10;
                const offset = top_of_search_tabs - gap;
                $(window).scrollTop(offset);
            }
        }

        //attach events
        $(config.modal_trigger).on('click', nav_modal);
        $(config.mobile_modal).on('click', close_modal);
        $('.header-form .cancel').on('click', close_modal);
        $(window).on('scroll', sticky_nav);
        $(window).on('scroll', sticky_nav_seo);
        $(config.nav_helper_label).on('click', focus_field);
        $('.mobile-close-menu').on('click', function() {
            $('.mobile-close-menu').addClass('close-menu');
        });
        $('.form-page-seo .primary-search input').on('click', scroll_input_to_top);
    },

    init_emulate_select: function() {
        $('[data-select]').each(function() {
            var select_menu = $(this).find('.dropdown-menu');

            var config = {
                select_wrapper: $(this),
                select_title: $(this).find('.title'),
                select_menu: select_menu,
                select_options: $(this).find('.dropdown-menu li'),
                select_arrows: $(this).find('.select-arrows'),
                select_name: select_menu.attr('name'),
                option_text: '',
                option_value: '',
                required: $(this).hasClass('required'),
                required_text: $(this).data('error'),
                selekt: ''
            };

            //create select element, add option values and append to dom
            function init_select() {
                config.selekt = document.createElement('select');
                if (config.required) {
                    // custom select required for form validation
                    $(config.selekt).attr({
                        class: 'selekt hide',
                        name: config.select_name,
                        'data-required': config.required_text || 'Required'
                    });
                } else {
                    $(config.selekt).attr({
                        class: 'selekt hide',
                        name: config.select_name
                    });
                }

                for (var i = 0; i < config.select_options.length; i++) {
                    $(config.selekt).append(
                        '<option value="' +
                        $(config.select_options[i]).data('value') +
                        '"> ' +
                        config.select_options[i].innerHTML +
                        '</option>'
                    );
                }
                $(config.select_wrapper).append(config.selekt);
            }

            function size_menu() {
                var set_width = config.select_title.outerWidth();
                config.select_menu.outerWidth(set_width);
            }

            //Update selected option value and UI
            function update_select() {
                config.option_text = this.innerHTML;
                config.option_value = $(this).data('value');
                config.select_title.html(config.option_text);
                config.selekt.value = config.option_value;
                !config.select_title.hasClass('selected') ?
                    config.select_title.addClass('selected') :
                    '';
                config.select_title.removeClass('error');
                trigger_dropdown();
                return false;
            }

            function trigger_dropdown() {
                $(config.select_title).trigger('click');
            }

            //kick it off and add event listeners
            init_select();
            $(config.select_options).on('click', update_select);
            $(config.select_title).on('click', size_menu);
            $(config.select_arrows).on('click', trigger_dropdown);
            $(window).smartresize(function() {
                size_menu();
            });
        });
    },

    init_search_clear: function() {
        function clear(element) {
            element.val('');
            element.parent().removeClass('ffl-floated');
            element.trigger('focus');
        }

        $('.x-person-name').on('click', function() {
            clear($('#desktop-person-who'));
            clear($('#mobile-person-who'));
        });
        $('.x-person-where').on('click', function() {
            clear($('#desktop-person-where'));
            clear($('#mobile-person-where'));
        });
        $('.x-business-key').on('click', function() {
            clear($('#mobile-key'));
            clear($('#desktop-key'));
        });
        $('.x-business-where').on('click', function() {
            clear($('#mobile-business-where'));
            clear($('#desktop-business-where'));
        });
        $('.x-phone-full-phone').on('click', function() {
            clear($('#mobile-full-phone'));
            clear($('#desktop-full-phone'));
        });
        $('.x-address-street').on('click', function() {
            clear($('#mobile-street'));
            clear($('#desktop-street'));
        });
        $('.x-address-where').on('click', function() {
            clear($('#mobile-address-where'));
            clear($('#desktop-address-where'));
        });
    },

    display_form_error: function(field) {
        var $field = $(field);
        var error_msg = $field.data('required');
        var place_holder = $field.attr('placeholder');
        var keypress_change_key = 'keypress_change_handler',
            focusout_key = 'focusout_handler';

        if ($field.hasClass('selekt')) {
            var toggle = $(field)
                .parent()
                .find('.dropdown-toggle');
            toggle.text(error_msg);
            toggle.addClass('error');
        }
        $field
            .val('')
            .siblings('label')
            .html(error_msg)
            .parent()
            .addClass('error');

        // errors for other pages
        if (
            $('body').hasClass('background-reports') ||
            $('.home-form-wrapper.sem-page').length > 0
        ) {
            $field.parent().addClass('error');
        }

        if (place_holder) {
            $(field).attr('placeholder', error_msg);
        }

        if (!$field.data(keypress_change_key)) {
            $field
                .on('keypress change', function() {
                    $(this)
                        .parent()
                        .removeClass('error');
                })
                .data(keypress_change_key, true);
        }

        if (!$field.data(focusout_key)) {
            $field
                .on('focusout', function() {
                    $.trim($field.val()) == '' ?
                        $field.parent().addClass('error') :
                        $field.parent().removeClass('error');
                })
                .data(focusout_key, true);
        }
    },

    //Prevent form submit when fields are required
    empty_field_validation: function($form) {
        var $fields_to_check = $form.find('[data-required]');
        var form_is_valid = true;
        var that = this;
        var check_for_value = function(field) {
            if ($.trim($(field).val()) === '') {
                that.display_form_error(field);
                return false;
            }

            return true;
        };

        if ($fields_to_check.length) {
            $fields_to_check.each(function() {
                form_is_valid = check_for_value($(this)) && form_is_valid;
            });
        }

        return form_is_valid;
    },

    init_deep_links: function() {
        var config = {
            link: $('a[data-deep-link]'),
            body: 'html, body'
        };

        var that = this;

        function setOffset() {
            return that.config.win_width > 768 ? -80 : -40;
        }

        function scrollToContent(e) {
            e.preventDefault();
            var target = $(this).attr('href');
            $(config.body).animate({
                    scrollTop: $(target).offset().top + setOffset()
                },
                500
            );
        }

        config.link.on('click', scrollToContent);
    }
};

$(function() {
    if (!window.WPR) {
        window.WPR = WPR;
        window.WPR.init();
    } else {
        WPR = window.WPR;
    }
});

export default WPR;