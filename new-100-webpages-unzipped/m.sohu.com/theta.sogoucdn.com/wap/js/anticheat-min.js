(function() {
    function j(R) {
        s += 1;
        i = L();
        ch = R.changedTouches[0];
        b = {
            x: ch.clientX,
            y: ch.clientY
        }
    }

    function B(R) {
        a = true;
        t = L();
        ch = R.changedTouches[0];
        q = {
            x: ch.clientX,
            y: ch.clientY
        }
    }

    function C() {
        var U = navigator.userAgent.toLocaleLowerCase();
        var S = ["Android", "iPhone", "SymbianOS", "rv:1.2.3.4", "midp", "ucweb", "Windows Phone", "iPad", "iPod"];
        var R = false;
        for (var T = 0; T < S.length; T++) {
            if (U.indexOf(S[T].toLocaleLowerCase()) > 0) {
                R = true;
                break
            }
        }
        return R
    }
    var E = function(R) {
        return document.getElementById(R)
    };
    var H = function(R) {
        return document.getElementsByTagName(R)
    };
    var P = function(R) {
        R = R || window.event;
        this.target = R.target || R.srcElement
    };
    var h = function(T, R, S) {
        if (window.addEventListener) {
            T.addEventListener(R, S, false)
        } else {
            T.attachEvent("on" + R, S)
        }
    };
    var r = function(T, U, R) {
        if (T) {
            for (var S in U) {
                if (window.attachEvent) {
                    T.attachEvent("on" + U[S], R[S])
                } else {
                    if (window.addEventListener) {
                        T.addEventListener(U[S], R[S], false)
                    } else {
                        T.bind(U[S], R[S])
                    }
                }
            }
        }
    };
    var s = 0;
    var N = 0;
    var b = {
        x: -1,
        y: -1
    };
    var q = {
        x: -1,
        y: -1
    };
    var i = 0;
    var t = 0;
    var o = new Array(1000);
    var J = 0;
    var p = -1;
    var m = -1;
    var w = -1;
    var n = -1;
    var f = -1;
    var F = -1;
    var A = -1;
    var l = -1;
    var a = false;
    var z = false;
    var e = undefined;
    var g = false;
    window.onscroll = function(R) {
        N++
    };
    var L = function() {
        return (new Date).getTime()
    };
    var I = function(S) {
        var R = new P(S);
        if (l == -1) {
            l = 0
        }
        l++;
        i = L();
        b = G(S)
    };
    var k = function(R) {
        if (a == false) {
            f = L();
            q = G(R)
        }
        z = true;
        g = false;
        e = R;
        event.preventDefault()
    };
    var v = function(R) {
        f = L() - f
    };
    var K = function(R) {
        g = true
    };
    var d = function(R) {
        if (w == -1) {
            w = R.clientX
        } else {
            w = w
        }
        if (n == -1) {
            n = R.clientY
        } else {
            n = n
        }
    };
    var y = function(R) {
        if (F == -1) {
            F = L()
        }
        A = L() - F
    };
    var x = function(R) {
        p = R.clientX;
        m = R.clientY
    };
    var G = function(R) {
        if (R.pageX || R.pageY) {
            return {
                x: R.pageX,
                y: R.pageY
            }
        }
        return {
            x: R.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: R.clientY + document.body.scrollTop - document.body.clientTop
        }
    };
    var M = function(R) {
        o[J++] = 1
    };
    var D = function() {
        t = L()
    };
    var O = function(V) {
        var T = document.body.clientWidth + "," + document.body.clientHeight;
        var U = document.location.href;
        if (U.indexOf("?") != -1) {
            var Y = U.substr(1);
            var W = Y.split("&");
            for (var S = 0; S < W.length; S++) {
                if (W[S].split("=")[0] == "bs") {
                    T = W[S].split("=")[1]
                }
            }
        }
        var R = V.target.innerHTML;
        if (V.target.href.indexOf("&ml") == -1) {
            var X = t - i + "," + N + "," + b.x + "," + b.y + "," + q.x + "," + q.y + "," + T;
            V.target.href += "&ml=" + J + "&mc=" + (L() - t) + "&ma=" + X;
            V.target.href += "&ak=" + l + "." + f + "." + p + "." + m + "." + w + "." + n + "." + A;
            V.target.href += "&me=" + s;
            V.target.href += "&mh=" + history.length
        }
        if (R.match(/(www\.)|(.*@.*)/i) != null && document.all) {
            if (R.match(/\<.*\>/i) == null) {
                V.target.innerHTML = R
            } else {
                V.target.innerTEXT = R
            }
        }
        if (z == true && g == true) {
            window.open(V.target.href)
        }
    };
    var Q = function(T) {
        var S = new P(T);
        for (var R = 0; S.target.tagName.toLowerCase() != "a" && R < 10; R++) {
            S.target = S.target.parentNode
        }
        x(T);
        y();
        O(S)
    };
    var u = function(R) {
        if (z == true && e != undefined) {
            Q(e)
        }
        z = false;
        g = false;
        e = undefined
    };
    var c = function() {
        var T = E("div_ad");
        var R = T.getElementsByTagName("a");
        h(document, "mousemove", M);
        h(document, "mousedown", D);
        h(document, "mouseup", u);
        h(T, "mouseover", d);
        h(T, "mouseover", y);
        var U = R.length;
        for (var S = 0; S < U; S++) {
            node = R[S];
            if (node.toString().indexOf(".sogou.com") > -1 || node.toString().indexOf(".sogo.com") > -1 || node.toString().indexOf("a1click.") > -1) {
                if (C() == true) {
                    r(node, ["touchstart", "touchend"], [function(V) {
                        j(V)
                    }, function(V) {
                        B(V)
                    }])
                } else {
                    h(node, "mouseup", v);
                    h(node, "mouseover", I)
                }
                h(node, "mousedown", k);
                h(node, "mousemove", K)
            }
        }
    };
    c()
})();