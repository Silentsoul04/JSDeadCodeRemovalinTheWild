$(document).ready(function ($) {
    // 头部swiper
    (function () {
        var topSwiper = new Swiper('#top-swiper .swiper-container', {
            pagination: '#top-swiper > .swiper-pagination',
            paginationType: 'fraction',
            autoplay: 3000,
            loop: true,
            autoplayDisableOnInteraction : false
        });
    })();
    // 横栏swiper
    (function() {
        var topicSwiper = new Swiper('.topic-swiper .swiper-container', {
            pagination: '.topic-swiper > .swiper-pagination',
            autoplay: 3000,
            loop: true,
            autoplayDisableOnInteraction : false
        });
    })();
    // 视频swiper
    (function () {
        var topSwiper = new Swiper('#video-swiper .swiper-container', {
            pagination: '#video-swiper > .swiper-pagination',
            paginationType: 'fraction',
            autoplay: 3000,
            loop: true,
            autoplayDisableOnInteraction : false
        });
    })();
    // 滚动新闻列表
    (function() {
        var $hotList = $('#column-hotnews').find('ul');
        var listnum = $hotList.find('li').length;
        var curItem = 0;

        var mt = parseInt($hotList.css('margin-top'));

        window.setInterval(function() {
            if (curItem++ === listnum - 1) {
                curItem = 0;
            }
            $hotList.css('margin-top', -curItem + 'rem');
        }, 5000);
    })();
    // 要闻加载更多功能
    (function() {
        var $topnews = $('#column-topnews');
        var $lastTen = $topnews.find('.thumb-item').slice(10);
        var $loadMore = $topnews.find('.more-show a');
        var clicked = false;

        if ($lastTen.length > 0) {
            $lastTen.hide();
            $loadMore.on('click', function(e) {
                if (!clicked) {
                    e.preventDefault();
                    $lastTen.show();
                    clicked = !clicked;
                    $loadMore.text('查看更多');
                } else {

                }
            });
        } else {
            $loadMore.text('查看更多');
        }
    })();
    // 桌面快捷方式
    (function() {
        var $tip = $('.desktop');
        var $icon = $('.desktop b');
        var $wd = $(window);
        var pf = '';

        pf = (function() {
            var ua = navigator.userAgent.toLowerCase();
            var pf = '';

            if (ua.indexOf("micromessenger") > -1) {
                pf = 'weixin';
            } else if (ua.indexOf("safari") > -1 && ua.indexOf('iphone') > -1) {
                pf = 'ios';
            }
            return pf;
        })();

        switch (pf) {
            case 'ios':
                $icon.addClass('desk-safari');
                showTip();
                break;
            case 'weixin':
                break;
            default:
                showTip();
        }

        function showTip() {
            $tip.show();
            $tip.on('click', function() {
                $tip.hide();
            });

            function hideTip() {
                if ($wd.scrollTop() > 50) {
                    $tip.hide();
                    $wd.off('scroll', hideTip);
                }
            }
            $wd.on('scroll', hideTip);
        }
    })();
});