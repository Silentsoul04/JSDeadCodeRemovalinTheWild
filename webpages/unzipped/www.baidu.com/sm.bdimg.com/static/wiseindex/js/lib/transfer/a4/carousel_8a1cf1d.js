define(function(require) {
    function a(a) {
        return !!a.timeInterval
    }

    function c() {
        A.init(k(z.bannerDom))
    }

    function g() {
        if (!L) {
            var a = 5,
                c = $("#menu-container").height();
            L = a + c
        }
        return L
    }

    function b(a) {
        if (a && a[0]) {
            var c = a[0].getBoundingClientRect();
            return c.height + c.top > g()
        }
        return !1
    }

    function h(a) {
        var c;
        switch (!0) {
            case a.indicatorNum <= 1:
                c = I.SINGLE;
                break;
            case a.autoplay:
                c = I.AUTOPLAY;
                break;
            default:
                c = I.MANUAL
        }
        return c
    }

    function _(c, g) {
        return new j({
            delay: 1e3 * +c.timeInterval,
            list: c.carouselArr,
            autoplay: a(c),
            backgroundSize: D,
            onClickItem: function(a) {
                C(g), z.sendLog("click", a), z.invokeHandler(a)
            },
            onChange: function(a, c) {
                c ? z.sendLog("slide", a) : b(z.bannerDom) && z.sendLog("show", a)
            },
            onClickClose: function() {
                C(g), z.sendLog("close"), z.destroy()
            }
        })
    }

    function k(a) {
        var c = a.children();
        return {
            slideWrapperDom: a,
            slideMainDom: $(c[1]),
            slideIndicatorDom: $(c[2]),
            closeDom: $(c[0])
        }
    }

    function v(a, c, g) {
        var b = "function(obj){\nvar __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\nwith(obj||{}){\n__p+='<div style=\"position: relative;overflow: hidden;line-height: 0;z-index: 1;padding-bottom: 10px;background: #f8f8f8;-webkit-tap-highlight-color: rgba(255, 0, 0, 0);display: block!important;\"><a style=\"position: absolute;top: 0;right: 0;padding: 15px 15px 20px 20px;width: 11px;height: 11px;z-index: 10;\"><div style=\"width: 100%;height: 100%;background: url(https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/wiseindex/img/baiduappAdClose2_530ee6b.png);background-size: 100%;background-position: center;background-repeat: no-repeat;\"></div></a><div style=\"display: -webkit-box;display: -ms-flexbox;display: flex;position: relative;background-color: #fff;white-space: nowrap;height: '+\n((__t=( imgHeight ))==null?'':__t)+\n'\">';\n list.forEach(function (item) { \n__p+='';\n if (item.bg_image) { \n__p+='<div style=\"height: 100%;width: 100%;background-color: #fff;display: inline-block;-webkit-box-flex: 0;-ms-flex: 0 0 auto;flex: 0 0 auto;background-repeat: no-repeat;background-position: center;background-size: '+\n((__t=( backgroundSize ))==null?'':__t)+\n';vertical-align: top;opacity: 1;z-index: 1;background-image: url('+\n((__t=( item.bg_image ))==null?'':__t)+\n')\"></div>';\n } else { \n__p+='<div style=\"height: 100%;width: 100%;background-color: #fff;display: inline-block;-webkit-box-flex: 0;-ms-flex: 0 0 auto;flex: 0 0 auto;background-repeat: no-repeat;background-position: center;background-size: '+\n((__t=( backgroundSize ))==null?'':__t)+\n';vertical-align: top;opacity: 1;z-index: 1;\" data-type=\"text\">';\n if (item.xcx_title) { \n__p+='<div style=\"background-color: #fff;margin: auto;width: 320px;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-sizing: border-box;box-sizing: border-box;height: 100%;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;\"><div style=\"display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;min-width: .97rem;height: .97rem;margin-left: 10px;background: url(https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/wiseindex/img/xcx_background_056cf9b.png);background-size: contain;background-position: center;background-repeat: no-repeat;\"><div style=\"width: 0.59rem;height: 0.59rem;background-size: contain;background-position: center;background-repeat: no-repeat;border-radius: 0.3rem;background-image: url('+\n((__t=( item.icon ))==null?'':__t)+\n')\"></div></div><div style=\"-webkit-box-flex: 1;-ms-flex: 1;flex: 1;text-align: right;overflow: hidden;margin:0 30px 0 0;\"><div style=\"line-height: 20px;color: #000;font-size: 19px;font-weight: 600;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;margin-top: 4px;\">'+\n((__t=( item.xcx_title || '百度APP' ))==null?'':__t)+\n'</div><div style=\"color: #555;font-size: 13px;line-height: 14px;margin-top: 5px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;\">'+\n((__t=( item.hint || '有事搜一搜，没事看一看'))==null?'':__t)+\n'</div><div style=\"-webkit-box-sizing: border-box;box-sizing: border-box;padding: 4px 13px;height: .2rem;padding: 0 10px;line-height: .2rem;border-radius: .16rem;border: 1px solid #38f;color: #38f;font-size: 11px;margin-top: 5px;float: right;text-align:center;\">'+\n((__t=( (item.btntext || '打开') ))==null?'':__t)+\n'</div></div></div>';\n } else { \n__p+='<div style=\"background-color: #fff;padding: 20px 0;text-align: center;display: block!important;-webkit-box-sizing: border-box;box-sizing: border-box;height: 100%;\"><div style=\"display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;\"><div style=\"width: .4rem;height: .4rem;background-size: contain;background-position: center;background-repeat: no-repeat;background-image: url('+\n((__t=( item.icon || 'https://ss0.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/37bdappicon.png' ))==null?'':__t)+\n')\"></div><div style=\"line-height: 25px;color: #000;font-size: 22px;font-weight: 700;margin: 0 10px 0 6px;display: block!important;\">'+\n((__t=( item.titleText || '百度APP' ))==null?'':__t)+\n'</div><div style=\"-webkit-box-sizing: border-box;box-sizing: border-box;height: .32rem;min-width: 0.67rem;padding: 0 10px;line-height: .30rem;border-radius: .16rem;border: 1px solid #38f;color: #38f;font-size: 14px;\">'+\n((__t=( (item.btntext || '打开').substr(0,4) ))==null?'':__t)+\n'</div></div><div style=\"color: #555;font-size: 16px;line-height: 24px;margin-top: .09rem;padding: 0 .15rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;\">'+\n((__t=( item.hint || '有事搜一搜，没事看一看'))==null?'':__t)+\n'</div></div>';\n } \n__p+='</div>';\n } \n__p+='';\n }); \n__p+='</div><ul style=\"position: absolute;bottom: 10px;left: 0;right: 0;padding: 0 10px;height: 18px;width: 100%;line-height: 18px;-webkit-box-sizing: border-box;box-sizing: border-box;text-align: center;display: none;\">';\n for (var index = 0; index < indicatorNum; index++) { \n__p+='';\n if (index === list.length - 1) { \n__p+='<li style=\"position: relative;top: -2px;display: inline-block;width: 5px;height: 5px;border-radius: 3px;background-color: #eee;\"></li>';\n } else { \n__p+='<li style=\"position: relative;top: -2px;display: inline-block;margin-right: .05rem;width: 5px;height: 5px;border-radius: 3px;background-color: #eee;\"></li>';\n } \n__p+='';\n } \n__p+='</ul></div>';\n}\nreturn __p;\n}";
        g.loginfo = {
            experiment: h(c)
        };
        var _ = new S(a, b, c, g);
        return _.specialHandlerArr.length && _.appendToBody(), _.sendLog("show"), _
    }

    function w(c) {
        var g = window.sSession.invokeApps.control[c];
        if (g.carouselArr && g.carouselArr.length) {
            A = _(g, c);
            var b = 113,
                h = 97,
                k = (A.backgroundSize.match(/^(\d.*)%$/) ? h : b) + "px";
            return {
                autoplay: a(g),
                list: A.listData,
                indicatorNum: A.list.length,
                backgroundSize: A.backgroundSize,
                imgHeight: k
            }
        }
    }

    function y(a, g) {
        var b = w(a);
        b && (z = v(a, b, g), c())
    }
    var z, A, L, S = require("wiseindex/lib/ivk/common/Core"),
        C = require("wiseindex/lib/invoke/setInvokeCookie"),
        j = require("wiseindex/lib/ivk/common/Carousel"),
        D = require("wiseindex/lib/ivk/common/backgroundSize"),
        I = {
            AUTOPLAY: "autoplay",
            MANUAL: "manual",
            SINGLE: "single"
        };
    return y
});