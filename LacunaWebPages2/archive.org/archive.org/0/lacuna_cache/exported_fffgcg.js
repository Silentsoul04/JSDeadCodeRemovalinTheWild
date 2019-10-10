
                    archive_setup.push(function() {
                        AJS.lists_v_tiles_setup('top');

                        $('.navia-link.web').click(); // open wayback/web

                        $('div.ikind').css({
                            visibility: 'visible'
                        });


                        AJS.tiler();

                        $(window).on('resize  orientationchange', function(evt) {
                            clearTimeout(AJS.tiles_wrap_throttler)
                            AJS.tiles_wrap_throttler = setTimeout(AJS.tiler, 250)
                        });

                        // register for scroll updates (for infinite search results)
                        $(window).scroll(AJS.scrolled);
                    });
                