
                                        (function() {
                                            var scriptNode = function(url, callback) {
                                                var head = document.getElementsByTagName("head")[0];
                                                var script = document.createElement("script");
                                                script.src = url;
                                                if (script.readyState) {
                                                    script.onreadystatechange = function() {
                                                        var rs = this.readyState;
                                                        if ('loaded' === rs || 'complete' === rs) {
                                                            script.onreadystatechange = null;
                                                            callback();
                                                            head.removeChild(script);
                                                        }
                                                    };
                                                } else if (/AppleWebKit/.test(navigator.userAgent)) {
                                                    script.addEventListener('load', function() {
                                                        callback();
                                                        head.removeChild(script);
                                                    });
                                                } else {
                                                    script.onload = function() {
                                                        script.onload = null;
                                                        callback();
                                                        head.removeChild(script);
                                                    };
                                                }
                                                head.appendChild(script);
                                                return undefined;
                                            }
                                            scriptNode("http://pic01.babytreeimg.com/img/js/scroll.js?2", function() {
                                                IMGSCROLL.prototype = {
                                                    textArr: ['BabyBox,????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????BabyBox??????????????????????????????????????????????????????????????????????????????600???????????????????????????????????????????????????????????????????????????????????????<span class="readMore"><a target="_blank" href="http://www.babytree.com/community/group36694/topic_89916624.html">[??????]</a></span>'],
                                                    scrollExtra: function() {
                                                        //????????????????????????
                                                        //$('#direction_text_con').html(this.textArr[this.sn]);
                                                    }
                                                };
                                                var direction_scroll_img = imgScroll(getDomEle('direction_big_img_con'), 3500, 240, 328);
                                            });
                                        })();
                                    