
            $(document).ready(function() {
                $(".menubar").click(function() {
                    if ($('.theader-side').css('display') == 'none') {
                        $(".theader-side").css({
                            "display": "block",
                            "height": $(window).height() - 50
                        });
                        $(".menubar").css({
                            "background": "#016fba"
                        });
                        $(".menubar i").css({
                            "color": "#ffffff"
                        });
                        $(".search-box").css({
                            "display": "none"
                        });
                        $(".search").css({
                            "background": "none"
                        });
                        $(".search i").css({
                            "color": "#016fba"
                        });
                    } else {
                        $(".theader-side").css({
                            "display": "none"
                        });
                        $(".menubar").css({
                            "background": "none"
                        });
                        $(".menubar i").css({
                            "color": "#016fba"
                        });
                    }
                });
                $(".search").click(function() {
                    if ($('.search-box').css('display') == 'none') {
                        $(".search-box").css({
                            "display": "block"
                        });
                        $(".search").css({
                            "background": "#016fba"
                        });
                        $(".search i").css({
                            "color": "#ffffff"
                        });
                        $(".theader-side").css({
                            "display": "none"
                        });
                        $(".menubar").css({
                            "background": "none"
                        });
                        $(".menubar i").css({
                            "color": "#016fba"
                        });
                        $(".inputsearch").focus();
                    } else {
                        $(".search-box").css({
                            "display": "none"
                        });
                        $(".search").css({
                            "background": "none"
                        });
                        $(".search i").css({
                            "color": "#016fba"
                        });
                    }
                });
                var wh = $(".header").width() + 110;
                var w = $(window).width();
                if (wh > w) {
                    $(".header img").css({
                        "width": w - 100,
                        "height": "auto"
                    });
                    var hi = $(".header img").height();
                    var pt = ((50 - hi) / 2) - 5;
                    $(".header img").css({
                        "padding-top": pt
                    });
                }
            });
        