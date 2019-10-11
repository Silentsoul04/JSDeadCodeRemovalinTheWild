
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
                                                    textArr: ['BabyBox,是专为宝宝跟妈妈量身定制的专属礼盒。精挑细选，品类齐全，即刻满足您与宝宝的全部需求。本次BabyBox与迪巧一同定制了属于妈妈的迪巧定制礼盒，并且分发到了600名幸运妈妈的手中。马上晒出你的定制宝盒，赢取品牌学饮杯吧。<span class="readMore"><a target="_blank" href="http://www.babytree.com/community/group36694/topic_89916624.html">[全文]</a></span>'],
                                                    scrollExtra: function() {
                                                        //先屏蔽掉排查问题
                                                        //$('#direction_text_con').html(this.textArr[this.sn]);
                                                    }
                                                };
                                                var direction_scroll_img = imgScroll(getDomEle('direction_big_img_con'), 3500, 240, 328);
                                            });
                                        })();
                                    