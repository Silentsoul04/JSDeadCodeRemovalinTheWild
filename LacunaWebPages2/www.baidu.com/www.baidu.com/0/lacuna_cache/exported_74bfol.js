
        ! function() {
            function c(c) {
                for (var a; c.length > 0;) a = c.shift(), "function" == typeof a && a()
            }
            var a = window.B || (window.B = {}),
                v = document;
            v.cookie.match(/BAIDUID=([^:]+)/) && (a.id = RegExp.$1), a.lsSupport = !0;
            try {
                localStorage.setItem("_t", 1), localStorage.removeItem("_t")
            } catch (e) {
                a.lsSupport = !1
            }
            a.init = function() {
                var v = !1,
                    h = [];
                return a._fireInit = function() {
                        v = !0, c(h)
                    },
                    function(c) {
                        v ? c() : h.push(c)
                    }
            }(), a.load = function() {
                var a = !1,
                    v = [];
                return window.addEventListener("load", function() {
                        a = !0, setTimeout(function() {
                            c(v)
                        }, 0)
                    }, !1),
                    function(c) {
                        a ? c() : v.push(c)
                    }
            }(), a.ready = function() {
                var a = !1,
                    h = [];
                return v.addEventListener("DOMContentLoaded", function() {
                        a = !0, setTimeout(function() {
                            c(h)
                        }, 0)
                    }, !1),
                    function(c) {
                        a ? c() : h.push(c)
                    }
            }(), a.$ = function(c) {
                return v.querySelector(c)
            }, a.$$ = function(c) {
                return v.querySelectorAll(c)
            }
        }();;
        ! function() {
            var a = decodeURIComponent(location.hash),
                c = window.B || (window.B = {}),
                h = window.innerHeight;
            if (/\|src_(.*?)\||$/g.test(a) && RegExp.$1) {
                c._hash = a, c._query = RegExp.$1;
                var y = document.createTextNode("body{background:#fff !important;min-height:" + h + "px;}#index-card{display:none}#search-card{display:block;}");
                c.$("#spa-base-style").appendChild(y)
            } else {
                var y = document.createTextNode("#search-card{min-height:" + h + "px !important;}");
                c.$(".spa-index-style").appendChild(y)
            }
            c.asynJs = [], c.asynLoad = function(a) {
                ~c.asynJs.indexOf(a) || c.asynJs.push(a)
            }
        }();;
        ! function() {
            if (/#+.*?wd=([^&|$]+)/.test(location.href) && RegExp.$1) {
                var a = RegExp.$1,
                    c = location.search,
                    h = "/s" + c;
                h += c && c.indexOf("?") >= 0 ? "&" : "?", h += "word=" + a, location.replace(h);
                var b = document.createElement("meta");
                b.setAttribute("http-equiv", "refresh"), b.setAttribute("content", "0;URL=" + h), document.head.appendChild(b), document.body.style.display = "none"
            }
        }();;
        ! function() {
            if (location.hash.indexOf("iview=skin") > -1) {
                var a = document.createElement("style");
                a.setAttribute("id", "skin-show"), a.setAttribute("type", "text/css"), a.innerHTML = "#index-card{display:none;}#page{background-color:#3a3a3a;}", B.$("head").appendChild(a)
            }
        }();;
    