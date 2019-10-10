// Traffic Stats of the entire Web site By baidu end
var _gaq = [];
var userAgent = navigator.userAgent.toLowerCase();

// 广告系统延迟曝光上报
(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://g.csdnimg.cn/asdf/1.0.7/trackad.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
})();
// end
// Traffic Stats of the entire Web site By baidu
var _hmt = _hmt || [];
(function() {
    var getCookie = function(objName) { //获取指定名称的cookie的值
        var arrStr = document.cookie.split("; ");
        for (var i = 0; i < arrStr.length; i++) {
            var temp = arrStr[i].split("=");
            if (temp[0] == objName && objName == "UD") return decodeURIComponent(temp[1]);
            if (temp[0] == objName) return decodeURI(temp[1]);
        }
    }
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?6bcd52f51e9b3dce32bec4a3997715ac";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

function siteId() {
    var loac_host = window.location.host;
    // loac_host ='www.csdn.net'
    var siteId;
    if (loac_host.indexOf("blog") === 0) {
        siteId = 'UA-127895514-2'
    } else if (loac_host.indexOf("download") === 0) {
        siteId = 'UA-127895514-8'
    } else if (loac_host.indexOf("edu") === 0) {
        siteId = 'UA-127895514-9'
    } else if (loac_host.indexOf("bbs") === 0) {
        siteId = 'UA-127895514-4'
    } else if (loac_host.indexOf("ask") === 0) {
        siteId = 'UA-127895514-5'
    } else if (loac_host.indexOf("gitbook") === 0) {
        siteId = 'UA-127895514-10'
    } else if (loac_host.indexOf("iteye") === 0) {
        siteId = 'UA-127895514-6'
    } else if (loac_host.indexOf("passport") === 0) {
        siteId = 'UA-127895514-7'
    } else if (loac_host.indexOf("so") === 0) {
        siteId = 'UA-127895514-3'
    } else if (loac_host.indexOf("www") === 0) {
        if (loac_host.indexOf("iteye") > 0) {
            siteId = 'UA-127895514-6'
        } else {
            siteId = 'UA-127895514-1'
        }
    } else {
        siteId = ''
    }
    return siteId
}

var toggleForbidScrollThrough = (function toggleForbidScrollThrough() {
    let scrollTop;
    return function toggleForbidScrollThroughInner(isForbide) {
        if (isForbide) {
            scrollTop = getScrollTop();
            document.body.style.position = 'fixed';
            document.body.style.top = '-' + scrollTop + 'px';
            document.getElementsByTagName('html')[0].style.position = 'fixed';
            document.getElementsByTagName('html')[0].style.top = '-' + scrollTop + 'px';
        } else {
            document.body.style.position = 'static';
            document.body.style.top = '0px';

            document.getElementsByTagName('html')[0].style.position = 'static';
            document.getElementsByTagName('html')[0].style.top = '0px';
            window.scrollTo(0, scrollTop);
        }
    };
}());

function getScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop;
}

!(function($, run) {

    var head = document.getElementsByTagName('head')[0];
    var prodTag;
    var prodTitle;
    var prodHref;
    var isProdToast;
    var isLoginStrategy;
    var isGuideStrategy;
    var version = '2.0.1';

    // 获取mobile title传入显示参数值
    var getMobileParam = function(param) {
        var mobileParams = {};
        var params = {}

        prodTag = param.prodTag || (param.mobileParams && param.mobileParams.prodTag);
        prodTitle = param.prodTitle || (param.mobileParams && param.mobileParams.prodTitle);
        prodHref = param.prodHref || (param.mobileParams && param.mobileParams.prodHref);
        isProdToast = param.isProdToast || (param.mobileParams && param.mobileParams.isProdToast);
        isLoginStrategy = param.isLoginStrategy || (param.mobileParams && param.mobileParams.isLoginStrategy);
        isGuideStrategy = param.isGuideStrategy || (param.mobileParams && param.mobileParams.isGuideStrategy);
        mobileParams = $.extend(mobileParams, {
            prodTag: prodTag,
            prodTitle: prodTitle,
            prodHref: prodHref,
            isProdToast: isProdToast,
            isLoginStrategy: isLoginStrategy,
            isGuideStrategy: isGuideStrategy
        });
        prodTag = mobileParams.prodTag;
        prodTitle = mobileParams.prodTitle;
        prodHref = mobileParams.prodHref;
        isProdToast = mobileParams.isProdToast;
        isLoginStrategy = mobileParams.isLoginStrategy;
        isGuideStrategy = mobileParams.isGuideStrategy;

        if (!prodTag && !prodTitle) {
            prodTag = 'csdn';
            params['prod'] = prodTag;
        } else {
            params['prod'] = prodTag ? prodTag : prodTitle ? prodTitle : 'csdn';
        }
        return params;
    }

    // cookie
    var getCookie = function(objName) { //获取指定名称的cookie的值
        var arrStr = document.cookie.split("; ");
        for (var i = 0; i < arrStr.length; i++) {
            var temp = arrStr[i].split("=");
            if (temp[0] == objName && objName == "UD") return decodeURIComponent(temp[1]);
            if (temp[0] == objName) return decodeURI(temp[1]);
        }
    };
    var setCookie = function(name, value) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString(); // + ";domain=.csdn.net;path=/";
    };

    // 编码
    var HTMLEncode = function(str) {
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;");
        return s;
    };

    // toolbaricon
    var toobalIcon = function() {
        // 注册url，https://passport.csdn.net/account/register?ref=toolbar
        protocol = location.protocol.substr(0, 4) === 'http' ? '' : 'http:';
        var isMToolbarItem = $("script[data-isMToolbarItem]").data('isMToolbarItem');
        var s, ss = [
            protocol + '//csdnimg.cn/public/common/toolbar/js/m_iconfont.js?v=1.1.6',
            protocol + '//csdnimg.cn/public/common/toolbar/js/m_toolbar_left_icon.js?v=1.1.0'
        ];
        for (var i = 0; i < ss.length; i++) {
            s = document.createElement('script');
            s.type = 'text/javascript';
            s.charset = 'utf-8';
            s.src = ss[i];
            head.insertBefore(s, null);
        }
    };

    // 添加跳转策略
    var loginStrategy = function($oScriptTag) {
        var isStrategy;
        if (!$oScriptTag) {
            return false;
        }
        isStrategy = $oScriptTag.get(0).hasAttribute('strategy') || !!isLoginStrategy;
        if (!isStrategy) {
            return false;
        }
        var scriptPos = $oScriptTag.get(0).nextElementSibling || $oScriptTag.get(0).nextSibling;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.src = '//g.csdnimg.cn/login-box/1.0.4/login-auto.js';
        // $oScriptTag.after(script);
        if (scriptPos) {
            $oScriptTag.parent().get(0).insertBefore(script, scriptPos);
        } else {
            $oScriptTag.parent().get(0).appendChild(script);
        }
    };
    // test app guide page
    var guideStrategy = function($oScriptTag) {
        var isStrategy;
        if (!$oScriptTag) {
            return false;
        }
        isStrategy = $oScriptTag.get(0).hasAttribute('data-guide-strategy') || !!isGuideStrategy;
        if (!isStrategy) {
            return false;
        }
        var scriptPos = $oScriptTag.get(0).nextElementSibling || $oScriptTag.get(0).nextSibling;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.src = '//g.csdnimg.cn/guide-box/1.0.0/guide-box.js?v=1.0.0';
        if (scriptPos) {
            $oScriptTag.parent().get(0).insertBefore(script, scriptPos);
        } else {
            $oScriptTag.parent().get(0).appendChild(script);
        }
    };

    // 添加动态设置登录导向链接 目前已经取消
    var setLoginHref = function(templateObj) {
        var templateHtml
        var weixinAuthorHref = 'https://passport.csdn.net/v1/login/account/login'
        templateObj && templateObj.templateHtml && (templateHtml = templateObj.templateHtml, function() {
            templateHtml = $(templateHtml).find('#loginTag a').attr('href', weixinAuthorHref).end()
            templateHtml = templateHtml.get(0).outerHTML
        }())
        return templateHtml
    };

    // toolbar
    var appendToolBar = function(params) {
        var currUser = {
            userName: "",
            userNick: '<a class="set-nick" href="https://passport.csdn.net/account/profile">设置昵称<span class="write-icon"></span></a>',
            userInfo: "",
            desc: '<a class="fill-dec" href="//my.csdn.net" target="_blank">编辑自我介绍，让更多人了解你<span class="write-icon"></span></a>',
            avatar: "//csdnimg.cn/public/common/toolbar/images/100x100.jpg"
        };
        var prodLogo = 'csdn';
        var searchType = '';
        var $oScriptTag = $('#m-toolbar-tpl-scriptId');
        var skin = $oScriptTag.attr('skin') == 'black' ? 'csdn-toolbar-skin-black' : '';
        var fixed = $oScriptTag.attr('fixed') === 'top' ? 'navbar-fixed-top' : '';
        // var prodIndex= $oScriptTag.attr("domain")?$oScriptTag.attr("domain"):window.location.protocol+"//"+window.location.host;
        // prodIndex+='?ref=toolbar_logo';
        var hasLogin = false;
        var loginMark = 'unlogin';

        // let menus show
        var leftMenus = function() {
            var mToolBarClose = $('#mToolbarClose'),
                homeBtn = $('#mToolbarHome'),
                mTollbarWrap = $('.m_toolbar_left');
            if (mToolBarClose.length > 0) {
                mToolBarClose.on('click', function() {
                    if (mTollbarWrap.length > 0) {
                        mToolBarClose.hide();
                        homeBtn.show();
                        toggleForbidScrollThrough(false)
                        mTollbarWrap.animate({
                            'top': '-140%'
                        }, 500, 'linear');
                    }
                });
            }
            if (homeBtn.length > 0) {
                homeBtn.on('click', function() {
                    if (mTollbarWrap.length > 0) {
                        mToolBarClose.show();
                        homeBtn.hide();
                        mTollbarWrap.animate({
                            'top': 50
                        }, 500);
                        toggleForbidScrollThrough(true)
                    }
                });
            }
            return true;
        }
        //  search event
        function searchfun() {

            var $input = $('.search_input'),
                $del_btn = $(".search_del");
            $search_btn = $(".iconcsdnc-search");
            $input.bind("input propertychange change", function(event) {
                if ($(this).val() !== '') {
                    $del_btn.show();
                    $search_btn.hide();
                } else {
                    $search_btn.show();
                    $del_btn.hide();
                }
            });
            toSearch($input)
            clearInput($del_btn, $input)
        }

        function clearInput($dom, $deldom) {
            $search_btn = $(".iconcsdnc-search");
            $dom.on('click', function() {
                $deldom.val('').focus();
                $search_btn.show();
                $dom.hide();
            })
        }

        function toSearch($binddom) {
            $binddom.on("keypress", function(t) {
                if ("13" == t.keyCode) {
                    var val = $binddom.val(),
                        url = "//so.csdn.net/so/search/s.do?q=" + val;
                    val && (window.location.href = url)
                }
            })

        }

        function changeLeftToolbarHeight() {
            ischangeLeftToolbarHeight = false;
            changeHeight()
            $(window).resize(changeHeight);

        }

        function changeHeight() {
            var WH = $(window).height(),
                WW = $(window).width(),
                $t_left = $('#m_toolbar_left');
            if (WW > WH && !ischangeLeftToolbarHeight) {
                $t_left.height($t_left.height() - 50)
                ischangeLeftToolbarHeight = true;
            } else if (WW > WH && ischangeLeftToolbarHeight) {} else {
                $t_left.css('height', '');
                ischangeLeftToolbarHeight = false;
            }
        }
        var AUtoAvatar = function(AU) {
            if (!AU || !currUser.userName) {
                return false;
            }
            var _AUPath = AU.split('').join('/');
            var userName = currUser.userName && currUser.userName.toLowerCase();
            return '//avatar.csdn.net/' + _AUPath + '/2_' + userName + '.jpg';
        };

        // new toolbar
        var generateNewToolbar = function(params) {

            var homeUrl = window.location.href;
            var wwwUrl = homeUrl.split('//')[1];
            var hostReg = /((www.csdn.net\/)|(download.csdn.net\/)|(blog.csdn.net\/)|(bbs.csdn.net\/))/
            var logoHref = prodHref || 'https://www.csdn.net/';
            var iClass;
            var isToast;
            var toastTime = 2000;

            /*
             * init pord logo show
             */
            var prodJSON = {
                "csdn": "#icongonggong_csdnlogo_",
                "blog": "#icon-wap_toolbar_blog",
                "download": "#icon-wap_toolbar_download",
                "bbs": "#icon_wap_toolbar_bbs",
                "my": "#icon-wap_toolbar_ucenter",
                "dashboard": "#icon_wap_toolbar_dashboard",
                "news": "#icon_wap_toolbar_geek",
                "ask": "#icon_wap_toolbar_ask",
                "notify": "#icon_wap_toolbar_notify",
                "so": "#sousuo1",
                "edu": "#EDU_logo1"
            };
            var searchJSON = {
                "blog": "blog",
                "download": "doc",
                "bbs": "discuss",
                "geek": "news",
                "edu": "course",
                "mall": "csdn"
            };
            /*if(prodJSON[$oScriptTag.attr('prod')] || 'csdn'){
        if (prodTag) {
          prodLogo = prodJSON[prodTag] || prodJSON['csdn'];
          prodLogo = '<svg class="icon" aria-hidden="true"><use xlink:href="'+prodLogo+'"></use></svg>';
          if (prodTag && prodTag !== 'csdn') {
            isToast = true;
          }
        } else if (prodTitle) {
          prodLogo = prodTitle;
          iClass = 'm_toolbar_link'
          prodLogo = '<span>' + prodLogo + '</span>'
        } else {
          prodLogo = prodJSON['csdn'];
          prodLogo = '<svg class="icon" aria-hidden="true"><use xlink:href="'+prodLogo+'"></use></svg>';
        }
          searchType = searchJSON[$oScriptTag.attr('prod')] || $oScriptTag.attr('prod') || 'csdn';
      }

      if(!hostReg.test(wwwUrl) || document.referrer !==''){
        logoHref = logoHref || 'javascript:window.history.go(-1);'
      }

    //   prodLogo = '<a class="' + (iClass ? iClass : '') + '" href="' + logoHref + '">' + prodLogo + '</a>';

      var toastHtml = '<span class="toast-title" id="csdn-toast">点击标题返回上一级</span>';
      if (isProdToast != undefined && typeof isProdToast === 'boolean') {
        isToast = isProdToast
      }
      
        isToast && (prodLogo = prodLogo + toastHtml);*/
            searchType = searchJSON[$oScriptTag.attr('prod')] || $oScriptTag.attr('prod') || 'csdn';

            prodLogo = prodJSON['csdn'];
            prodLogo = '<img src="//csdnimg.cn/cdn/content-toolbar/csdnlogo.png" class="logo">';

            var tplHome = '<div id="csdn-toolbar" class="csdn-toolbar clearfix' + skin + fixed + '">\
          <div class="mToolbarL floatL">\
            <a class="logo floatL" href="http://www.csdn.net">' + prodLogo + '</a></div>\
          <div class="rightmenu floatR clearfix ' + loginMark + '">\
          <div class="search_box">\
          <img class="icon iconcsdnc-search" src="//csdnimg.cn/cdn/content-toolbar/csdn-search.png">\
          <input class="search_input" type="search" placeholder="搜索博文/帖子/用户" >\
          <svg class="icon search_del" aria-hidden="true"><use xlink:href="#iconiconsearch_del"></use></svg></div>\
          <a class="floatL search_btn" href="http://so.csdn.net/so/?t=' + searchType + '"></a>\
          <div class="toolbarBack">\
          <img id="mToolbarHome" data-track-click=\'{"mod":"popu_781","con":",' + window.location.href + ',open"}\' src="//csdnimg.cn/cdn/content-toolbar/icon-wap-toolbar-menu.png">\
          <img id="mToolbarClose" data-track-click=\'{"mod":"popu_781","con":",' + window.location.href + ',close"}\' src="//csdnimg.cn/cdn/content-toolbar/icon_search_del.png">\
            <svg id="mToolbarHome"  class="icon" aria-hidden="true"><use xlink:href="#icon-wap-toolbar-menu"></use></svg>\
            <svg class="icon"  aria-hidden="true"><use xlink:href="#icon-qingchuneirong"></use></svg>\
          </div>\
          <div id="loginTag" class="login floatR">\
            <a href="https://passport.csdn.net/account/login?ref=toolbar">登录</a>\
          </div>\
          <div class="logout floatR">\
          <a href="//my.csdn.net/"><img src="' + currUser.avatar + '"/></a>\
          </div>\
          </div>\
          </div>';

            var leftHtml = '<div id="m_toolbar_left" class="m_toolbar_left">\
                        <div class="m_toolbar_left_hot m_toolbar_left_unit">\
                        <h3>热门频道</h3>\
                        <ul>\
                            <li><a href="//www.csdn.net" title="CSDN首页" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',index"}\' ><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnc-homepage"></use></svg></div><p>首页</p></a></li>\
                            <li><a href="//blog.csdn.net/" title="博客" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',blog"}\' ><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnmp_newarticle"></use></svg></div><p>博客</p></a></li>\
                            <li><a href="//edu.csdn.net/" title="学院" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',edu"}\' ><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnc-college"></use></svg></div><p>学院</p></a></li>\
                            <li><a href="//mall.csdn.net/vip" title="VIP" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',vip"}\' ><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnc-Member"></use></svg></div><p>VIP</p></a></li>\
                            <li><a href="//www.csdn.net/apps/download?code=wap_1555569676" title="App" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',app"}\' ><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconshouji"></use></svg></div><p>APP</p></a></li>\
                            <li><a href="//ask.csdn.net" title="问答" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',ask"}\' ><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnc-QA"></use></svg></div><p>问答</p></a></li>\
                            <li><a href="//download.csdn.net/" title="下载" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',download"}\' ><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnmp-download"></use></svg></div><p>下载</p></a></li>\
                        </ul>\
                        <h3>推荐频道</h3>\
                        <ul>\
                            <li><a href="https://h5.youzan.com/v2/showcase/homepage?alias=BUj3rrGa2J&ps=760" target="_blank" title="商城" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',youzan"}\' ><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnc-ShoppingMall"></use></svg></div><p>商城</p></a></li>\
                            <li><a href="//bbs.csdn.net" title="论坛" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',bbs"}\' ><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnc-BBS"></use></svg></div><p>论坛</p></a></li>\
                            <li><a href="http://huiyi.csdn.net/" title="活动" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',huiyi"}\'><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnc-activity"></use></svg></div><p>活动</p></a></li>\
                            <li><a href="http://job.csdn.net" title="招聘" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',job"}\' ><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnc-recruit"></use></svg></div><p>招聘</p></a></li>\
                            <li><a href="//gitbook.cn/?ref=csdn" title="GitChat" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',gitchat"}\' ><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnc-gti"></use></svg></div><p>GitChat</p></a></li>\
                            <li><a href="http://www.iteye.com" title="ITeye" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',iteye"}\'><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdnc-ITeye"></use></svg></div><p>ITeye</p></a></li>\
                            <li><a href="//spec.csdn.net/" title="专题" data-track-click=\'{"mod":"popu_782","con":",' + window.location.href + ',special"}\'><div><svg class="icon" aria-hidden="true"><use xlink:href="#iconcsdn-special"></use></svg></div><p>专题</p></a></li>\
                        </ul>\
                        <div class="m_toolbar_left_app_btn"><a href="//www.csdn.net/apps/download?code=wap_1555569676">打开CSDN APP</a></div>\
                        <p class="m_toolbar_left_copyright">Copyright © 1999-2019, CSDN.NET, All Rights Reserved</p>\
                        </div>\
                    </div>';

            // tplHome = setLoginHref({templateHtml: tplHome})
            // 防止重复
            if ($('#csdn-toolbar').length > 0) {
                $('#csdn-toolbar').empty().remove();
            }
            if ($('#m_toolbar_left').length > 0) {
                $('#m_toolbar_left').empty().remove();
            }
            // 移动端toolbar APP内嵌页隐藏
            if (window.navigator.userAgent.toLowerCase().indexOf('csdn') === -1) {
                // 非app内嵌页
                $(document.body).prepend($(tplHome)) && $(document.body).prepend($(leftHtml)) && leftMenus() && (function() {
                    params.afterRun && params.afterRun()
                    // toast提示
                    isToast && (setTimeout(function() {
                        $('#csdn-toast').addClass('toast-title__hide')
                    }, toastTime));
                    searchfun();
                    changeLeftToolbarHeight();
                })();
            } else {
                //app 内嵌页
                document.body.style.paddingTop = 0
            }
        };
        $(function() {
            /*向下滑动隐藏，向上滑动显示*/
            var windowTop = 0; // 初始可视区域距离页面顶端的距离
            var stopScroll = true;

            function handleScroll() {
                stopScroll = true
                var scrolls = $(window).scrollTop(); // 获取当前可视区域距离页面顶端的距离
                if (scrolls < 50) {
                    $('#csdn-toolbar').show().css('top', 0)
                    return
                } else {
                    if (scrolls >= windowTop) {
                        $('#csdn-toolbar').stop().animate({
                            top: '-50px'
                        }, 300)
                        windowTop = scrolls
                    } else {
                        $('#csdn-toolbar').stop().animate({
                            top: 0
                        }, 200)
                        windowTop = scrolls
                    }
                }
            }
            if (window.location.href.indexOf('me.csdn.net') === -1) {
                // 排除me站点
                $(window).on('scroll', function() {
                    if (stopScroll) {
                        setTimeout(handleScroll, 200)
                        stopScroll = false
                    }
                })
            }
        })
        // 校验登录
        function checkLogin(callback) {
            currUser.userNick = getCookie('UserNick') || currUser.userNick;
            currUser.userName = getCookie('UserName') || currUser.userName;
            currUser.avatar = AUtoAvatar(getCookie('AU')) || currUser.avatar;
            currUser.desc = getCookie('UD') || currUser.desc;
            if (getCookie('UD')) {
                currUser.desc = HTMLEncode(currUser.desc.replace(/\+/g, " "));
            }
            callback(currUser);
        }
        checkLogin(function(currUser) {
            if (currUser.userName) {
                hasLogin = true;
            }
            loginMark = hasLogin ? '' : 'unlogin';
        });

        getMobileParam(params);
        generateNewToolbar(params);
        toobalIcon();
        // app guide
        loginStrategy($oScriptTag);
    };
    var exports = {
        $: $,
        appendToolBar: appendToolBar
    }
    run && run(exports);
})(window.jQuery, function(exports) {
    // default value
    var mobileToolbar = {
        isInit: true,
        isWx: false,
        isLoginStrategy: true,
        isGuideStrategy: true
    };
    var isNext = true;
    window.csdn = window.csdn ? window.csdn : ''
    window.csdn.mobileToolbar && (mobileToolbar = $.extend(mobileToolbar, window.csdn.mobileToolbar));

    // 是否取消toolbar 小程序当中取消
    var miniProgram = function(params) {
        var isEnv = window.wx && window.wx.miniProgram && window.wx.miniProgram;
        if (isEnv) {
            window.wx.miniProgram.getEnv(function(res) {
                !res.miniprogram && params.run(params.param);
            });
        } else {
            params.run(params.param);
        }
    };

    var init = function(params) {
        if (params && (typeof params !== 'object' || typeof params === 'function' || params instanceof Array)) {
            throw new Error('param is error!')
        }

        mobileToolbar && (params = exports.$.extend(mobileToolbar, params));

        if (params.isInit === false) {
            return this;
        }

        if (params.beforeRun && typeof params.beforeRun === 'function') {
            isNext = params.beforeRun();
        }

        if (!params) {
            params = {};
        }

        // 微信条件校验是否开启
        if (params.isWx && isNext) {
            miniProgram({
                run: exports.appendToolBar,
                param: params
            })
        } else {
            isNext && exports.appendToolBar(params);
        }
        return this;
    }

    window.csdn.mobileToolbar = exports.$.extend(window.csdn.mobileToolbar, {
        start: function(params) {
            init(params);
            return this;
        }
    });

    /*
      init
    */
    init(mobileToolbar);
    // 手动调用
    /**
     *  isInit            是否初始化
     *  isWx              是否微信模式
     *  mobileParams
     *    isLoginStrategy 登录策略
     */
    // window.csdn.mobileToolbar.start({
    //   isInit: false,
    //   isWx: true,
    //   mobileParams: {
    //     // prodTag: 'blog'
    //     prodTitle: 'php1'
    //     //isLoginStrategy: true
    //     //isProdToast: true/false
    //   }
    // })
});