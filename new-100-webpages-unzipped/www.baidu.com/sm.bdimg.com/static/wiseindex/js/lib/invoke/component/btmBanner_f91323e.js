define(function(require) {
    function a(a) {
        for (var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", g = c.length, A = "", i = 0; a > i; i++) A += c.charAt(Math.floor(Math.random() * g));
        return A
    }

    function c(a) {
        B.log.send({
            ct: 10,
            cst: 2,
            logFrom: "bottomBanner",
            logInfo: a
        })
    }

    function g() {
        var a = "有事搜一搜，没事看一看",
            c = "//m.baidu.com/static/search/baiduapp_icon.png",
            g = "打开",
            A = "<i></i>";
        I.control && (I.control.hint && (a = I.control.hint), I.control.icon && (c = I.control.icon)), I.control.btntext && (g = I.control.btntext), I.control.title && (A = '<img src="' + I.control.title + '">');
        var b = '<div id="' + D + '" class="' + D + '" style="display: none;"><div class="' + D + '_1"><div class="' + D + '_2"></div><div class="' + D + '_3 slogan">' + A + "<p>" + a + '</p></div><div class="' + D + '_4">' + g + '</div></div><div class="' + D + '_5"></div></div>',
            h = '<style class="index-invoke-banner-style">.' + D + "{position:fixed;bottom:0;left:0;z-index:20;width:100%;height:53px;background:#ffffff;opacity:1;border-top: 1px solid #e0e0e0;box-sizing: border-box;}." + D + "_1{pointer-events:auto;height:53px;box-sizing: border-box;}." + D + "_2{border:none;height:36px;width:36px;position:absolute;top:50%;left:46px;margin-top:-18px;background: url(" + c + ") no-repeat;background-size:36px 36px;-webkit-background-size:36px 36px;}." + D + "_3{position:absolute;left:88px;font-family: 微软雅黑;text-align: left;}." + D + "_3.slogan{padding: 10px 0 0 0px;}." + D + "_3.title{padding-left: 10px;}." + D + "_3 img {height: 18px;}." + D + "_4{display:inline-block;padding:12px 0;width:57px;position:absolute;bottom:12px;right:16px;box-sizing: border-box; z-index:99;border:1px solid #38f;border-radius:2px;color:#38f;font-size:13px;text-align:center;}." + D + '_5{pointer-events:auto;position:absolute;left:5px;bottom:0px;height:53px;width:40px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowOTIwOTVhOS1lMzQyLTQxZGUtYmFkOS05MTJjZjFlOGM5OTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjZEMzdGRkNENDUxMTFFNUE3MTU5Nzg3OUFFNTYwQkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjZEMzdGRkJENDUxMTFFNUE3MTU5Nzg3OUFFNTYwQkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Njc3Yzg2NS0wNTAzLTRlODktYmRmMi0wOWNmMzJiZjgxY2YiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MjQwYjY4Yy0xYzM4LTExNzktODU3Zi05Mzg5NjM1Y2UwOTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43tZVvAAADD0lEQVR42tSYzasSURTAdSpTE0N5tpM+eCG1CQpcuOtRiCsXiaDr4MH7A5L8CwRXbV5E4FJBbOHKTWvBFkGbSnp97/LZsxzHSdTpnLhT07yZufc6jvoOHGfEO/f+PHfOxz1uRVFcmyyCa8PltHrjdrt5nz0LGgQNgHpBPaCnyG8z0AmoDCqC/gT9xTO5urPuvzdsgDgoBBohYDyCoD3QI1zfCUC0VpRYy46gVb8Sqy4FUCBgW0t+vQ4J6NwOIL6j26DnHPKBEegB6NQMUKA4UMxBOBeZO6Z1VtYwIxDLeVcQSbxkLYEHMOqw5YwsGWUFDDrgECyyRdamAkatZmm32/fS6XSId/VkMhns9/v75XI5ZjEsSmLtv8Cr8+Iw6GWzpzudTjYejz+QJOlDPp/fbTabR6xwjUbjcSAQiA0GgxehUGjPYvhH0O9mXhyxWqhUKj1HOL/ff6VarT5hsaQWThTFLvyxh5RHIsfiDaHF3HqLpgB1ZzQavYdnFLzid7OxAHd7OBy+xbF4TaVSOyxrIIvKJeicgyq4rbi9NEvqLZfNZvdardYPxlc2aOQkzMmfBmkT7j8WrZNcg4ufxzMRCuEQUnUcWZZnNuFQJOB6owe8YZVyWCDH4/EnmG8K99s24FCmMM8rPeBNfQzigazVak99Pt+lP39fkg4ymczugnDEd5WXSyv5cVvRcprq/IzH41nK3NpJZotMoDoEbitaDrb5M1jyImucNJGZEeCEdxaIa+e1DoHbmsvl7vMGcwOZGAHKvHD1en1f762scZLhWHAMULQLxxvMKQesxVIdpivW9MWTFs1Snb6aidEyCpZM4XA4zhrnjII5pQpC63XNqpkezfaVSuURlkysQVi/3cVi8S7lkZ5VPYgf1504i6AlC4XCTiKReEZxjtckUJseO7GSuLqmVsw79UBvdezEAf01wB0adRvM0tEXcqhelYxIl4H52DknJ355BXAyWWvO2x/E5N/F4sRBOImsMTVtp5305tGJaL8ZNTAvLNAaQUf45mQDc70t4E2Vje/y/xZgABJILegYHuZ9AAAAAElFTkSuQmCC") no-repeat 50% 50%;background-size:20px 20px;-webkit-background-size:20px 20px;}.' + D + '_3.slogan i{background:url("data:image/png;base64,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") no-repeat;background-size:28px;width:28px;height:17px;display:inline-block;}.' + D + "_3.slogan p:last-child{color:#999;font-size: 12px;line-height: 14px;}." + D + "_3.title p:first-child{width:69px;height:53px;background: url(//m.baidu.com/static/index/phonebd.png) no-repeat;background-size:69px 16px;background-position: center;}</style>";
        $("#index-card").append(h), $("#index-card").append(b)
    }

    function A() {
        $(E).css("margin-bottom", "50px"), $("." + D).show(), page.comm = page.comm || {}, page.comm.bannerId = D
    }

    function b() {
        $("." + D).remove(), $(".index-invoke-banner-style").remove(), $(E).css("margin-bottom", y)
    }

    function h() {
        $("." + D).on("click", function(e) {
            var a = e.target.className;
            a.indexOf("_5") > -1 ? (c("closeBanner"), z(9), b()) : (c(a.indexOf("_4") > -1 ? "openBox" : "layer"), O && O.open && O.open())
        })
    }

    function M() {
        var a = I.show || !1;
        a && O.ready(function() {
            c("viewshow"), g(), A(), h()
        })
    }
    var w = require("wiseindex/lib/invoke/serverDataFactory"),
        v = require("wiseindex/lib/invoke/fnProvider"),
        z = require("wiseindex/lib/invoke/setInvokeCookie"),
        I = w("banner"),
        O = ($(window), v(I.invokeConfig)),
        E = "#index-card",
        y = $(E).css("margin-bottom"),
        D = a(5);
    return M
});