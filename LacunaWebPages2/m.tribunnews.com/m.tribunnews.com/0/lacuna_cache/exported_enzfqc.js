
                var $ = jQuery.noConflict();

                function loadmore() {
                    $("#ltldmr").hide();
                    var getLast = parseInt($("#latestul li").last().attr("sort"));
                    var newlast = getLast + 1;
                    $("#latestul").append("<div class='loading ac pa10'></li>");
                    $(".loading").show();
                    $.getJSON("https://m.tribunnews.com/ajax/latest?callback=?", {
                        start: newlast,
                        img: 'thumb2',
                        icon: '1'
                    }, function(data) {
                        $.each(data.posts, function(key, val) {
                            newlast = newlast + 1;
                            if (val.video) {
                                var vthumb = "<i class='fa fa-play playoverlay'></i>";
                                var vtitle = " <i class='fa fa-play-circle-o'></i>";
                            } else {
                                var vthumb = "";
                                var vtitle = "";
                            }
                            if (val.thumb) {
                                var img = "<div class='fr btsquare pos_rel'><a href='" + val.url + "' ><img src='" + val.thumb + "' width='130' height='100'/></a>" + vthumb + "</div>";
                                var milatest = "m-btsquare";
                            } else {
                                var img = '';
                                var milatest = '';
                            }
                            if (val.subtitle)
                                var subtitle = "<h4 class='fbo2 f13 red'><a href='" + val.subtitle_url + "' >" + val.subtitle + "</a></h4>";
                            else
                                var subtitle = '';
                            $("#latestul").append("<li sort='" + newlast + "'>" + img + "<div class='" + milatest + "'>" + subtitle + "<h3 class='blue'><a href='" + val.url + "' class='fbo2 f16 ln22  txt-oev-3'>" + val.title + vtitle + "</a></h3><div class='grey f13 pt5 dip'><h4><a href='" + val.s_url + "' class='fbo'>" + val.s_title + "</a></h4><span class='fa fa-clock-o ml7 mr7'></span><time class='foot'>" + val.times_ago + "</time></div></div><div class='sharecot pos_abs nw' data-href='" + val.url + "' data-title='" + val.title + "'></div><div class='cl2'></div></li>");

                        });
                        $(".loading").remove();
                        $("#ltldmr").show();
                    });
                }
            