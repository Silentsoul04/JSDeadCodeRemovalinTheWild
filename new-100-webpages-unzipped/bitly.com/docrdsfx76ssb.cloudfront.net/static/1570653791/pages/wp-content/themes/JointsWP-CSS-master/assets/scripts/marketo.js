jQuery(document).ready(function($) {

    $('body').append(
        //'<style>#mktoStyleLoaded {display:none;color:#123456;border-top-color:#123456;background-color:#123456}</style>' + 
        //	'<div id="xx-mktoStyleLoaded" class="hidden"><div id="xx-mktoForms2BaseStyle"></div><div id="xx-mktoForms2ThemeStyle"></div></div>'
    );



    $('.bitly-form').each(function() {
        var tyStor = 'form-thank-you';
        var launch_form = '#form_open';
        var lightbox;
        var marketo_form_id = $(this).attr('data-formid');
        var business_email_only = $(this).attr('data-business-emails-only');
        var thank_you_url = $(this).attr('data-thank-you-url');
        //console.log('--> ' + business_email_only);

        MktoForms2.loadForm("//app-ab01.marketo.com", "754-KBJ-733", marketo_form_id, function(form) {

            $('.mktoButtonWrap').removeClass('mktoSimple');
            $('.mktoButton').addClass('button button-primary button-wide').removeClass('mktoButton');

            if ($('.mktoForm .mktoTemplateBox').length > 0) {
                console.log('old pal');
                $('.mktoForm .form-intro-title, .mktoForm .form-intro-subtitle').fadeOut();
            }


            if (business_email_only == 'true') {
                //console.log('BUSINESS')

                form.onValidate(function() {
                    var email = form.vals().Email;
                    if (email) {
                        if (!isEmailGood(email)) {
                            form.submitable(false);
                            var emailElem = form.getFormElem().find("#Email");
                            form.showErrorMessage("Please provide a business email", emailElem);

                            var containertop = emailElem.offset().top - 90;
                            $('html, body').animate({
                                scrollTop: containertop
                            }, 500);

                        } else {
                            form.submitable(true);
                        }
                    }
                });



            } // end business


            form.onSuccess(function(vals, tyURL) {
                console.log('sent');
                var formEl = form.getFormElem()[0];
                //formEl.parentNode.removeChild(formEl);
                if (thank_you_url != '') {
                    //console.log('thank you url');
                    window.location = thank_you_url;

                } else {

                    // not going anywhere.
                    $('.bitly-form > form').hide();
                    $('.form-thank-you').fadeIn();

                    var containertop = $(".entry-content").offset().top - 80;
                    $('html, body').animate({
                        scrollTop: containertop
                    }, 500);


                    if ($('#_download').length > 0) {
                        //console.log('download');
                        window.open(
                            $("#_download").attr('href')
                        );
                    }
                    if ($('.resource-box .responsive-embed').length > 0) {
                        //console.log('video');
                        formEl.parentNode.removeChild(formEl);
                        video = $('.resource-box .responsive-embed').html();
                        $('.entry-content .resource-thumb').html(video)
                    }
                } // end if thank-you-url



                /* tracking 
						if (window.ga) {
							eventAction = 'lead-submit-' + window.location.pathname.replace(/.*\/([^\/]+$)/i, "$1");
							eventLabel = 'Lead Form Submission from ' + window.location.pathname.replace("/pages/", "");
							window.ga('send', 'event', 'lead-form', eventAction, eventLabel);
						}
	
						
						goog_snippet_vars = function () {
							var w = window;
							w.google_conversion_id = 971942492;
							w.google_conversion_label = "g2NuCLTu_V8Q3NS6zwM";
							w.google_remarketing_only = false;
						}
						// DO NOT CHANGE THE CODE BELOW.
						goog_report_conversion = function (url) {
							goog_snippet_vars();
							window.google_conversion_format = "3";
							window.google_is_call = true;
							var opt = new Object();
							opt.onload_callback = function () {
								if (typeof (url) != 'undefined') {
									//  window.location = url;
								}
							}
							var conv_handler = window['google_trackConversion'];
							if (typeof (conv_handler) == 'function') {
								conv_handler(opt);
							}
						}
						//

						//Facebook convert
						var _fbq = window._fbq || (window._fbq = []);
						if (!_fbq.loaded) {
							var fbds = document.createElement('script');
							fbds.async = true;
							fbds.src = '//connect.facebook.net/en_US/fbds.js';
							var s = document.getElementsByTagName('script')[0];
							s.parentNode.insertBefore(fbds, s);
							_fbq.loaded = true;
						}

						window._fbq = window._fbq || [];
						window._fbq.push(['track', '6039783892020', { 'value': '0.00', 'currency': 'USD' }]);

						//Twitter convert
						try {
							twttr.conversion.trackPid('l6uds', { tw_sale_amount: 0, tw_order_quantity: 0 });
						} catch(error) {
							// do nothing if twitter fails to load
						}
						*/


                return false;
            }); // end on success



        });


        $container = $(this);
        if ($(this).hasClass('modal-form')) {
            console.log('has class')
            $(launch_form + '_' + marketo_form_id).on("click", function(e) {

                MktoForms2.whenReady(function(form) {
                    var formEl = form.getFormElem()[0],
                        tyEl = formEl.querySelector(tyStor);

                    lightbox = MktoForms2.lightbox(form, {
                        onSuccess: function(vals, tyURL) {

                            formEl.parentNode.appendChild(tyEl);
                            formEl.parentNode.removeChild(formEl);
                            tyEl.style.display = "block";

                            if ($('#_download').length > 0) {
                                console.log('download');
                                window.open(
                                    $("#_download").attr('href')
                                );
                            }

                            //setTimeout(lightbox.hide, 4000);
                            return false;
                        }
                    });

                    lightbox.show();
                });
            });
        }
    }) // end each



    /* --------------------------------------------------
    Disallow Free Emails
    -------------------------------------------------- */
    var invalidDomains = ["@aol.", "@att.", "@comcast.", "@facebook.", "@gmail.", "@gmx.", "@googlemail.", "@google.", "@hotmail.", "@mac.", "@me.", "@mail.", "@msn.", "@live.", "@sbcglobal.", "@verizon.", "@yahoo.", "@email.com", "@fastmail.", "@games.", "@hush.", "@hushmail.", "@icloud.", "@iname.", "@inbox.", "@lavabit.", "@love.", "@outlook.", "@pobox.", "@protonmail.", "@rocketmail.", "@safe-mail.", "@wow.", "@ygm.", "@ymail.", "@zoho.", "@yandex.", "@bellsouth.", "@charter.", "@cox.", "@earthlink.", "@juno."];

    function isEmailGood(email) {
        for (var i = 0; i < invalidDomains.length; i++) {
            var domain = invalidDomains[i];
            if (email.indexOf(domain) != -1) {
                return false;
            }
        }
        return true;
    }








}); // end ready