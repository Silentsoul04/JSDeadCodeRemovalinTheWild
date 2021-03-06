(function() {
    var d = void 0,
        g = true,
        i = null,
        j = false;

    function k() {
        return function() {}
    }

    function m(a) {
        return function() {
            return this[a]
        }
    }

    function p(a) {
        return function() {
            return a
        }
    }
    var q, r = this;

    function ba(a) {
        var b = typeof a;
        if (b == "object")
            if (a) {
                if (a instanceof Array) return "array";
                else if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if (c == "[object Window]") return "object";
                if (c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) return "array";
                if (c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if (b == "function" && typeof a.call == "undefined") return "object";
        return b
    }

    function ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function da(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, e);
                return a.apply(b, c)
            }
        } else return function() {
            return a.apply(b, arguments)
        }
    }

    function s(a, b, c) {
        s = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ca : da;
        return s.apply(i, arguments)
    }

    function ea(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ia = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };

    function ga() {}

    function ha(a, b, c) {
        switch (typeof b) {
            case "string":
                ka(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (b == i) {
                    c.push("null");
                    break
                }
                if (ba(b) == "array") {
                    var e = b.length;
                    c.push("[");
                    for (var f = "", h = 0; h < e; h++) c.push(f), ha(a, b[h], c), f = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                e = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (h = b[f], typeof h != "function" && (c.push(e), ka(f, c), c.push(":"), ha(a, h, c), e = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }
    var la = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\u0008": "\\b",
            "\u000c": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\u000b": "\\u000b"
        },
        ma = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function ka(a, b) {
        b.push('"', a.replace(ma, function(a) {
            if (a in la) return la[a];
            var b = a.charCodeAt(0),
                f = "\\u";
            b < 16 ? f += "000" : b < 256 ? f += "00" : b < 4096 && (f += "0");
            return la[a] = f + b.toString(16)
        }), '"')
    };
    var na = {
        scroll: 5E3,
        keydown: 5E3,
        mousemove: 5E3,
        resize: 5E3,
        mousedown: 5E3,
        focus: 5E3,
        pageload: 5E3
    };

    function oa() {
        for (var a = "", b = 0; b < 16; b++) a += Math.random();
        return a
    }

    function pa(a, b) {
        var c = "",
            e = qa(encodeURIComponent(a));
        e.splice(b || 5, e.length);
        t(e, function(a) {
            if (a == 0) a = "A";
            else {
                a >>>= 0;
                for (var b = "", e; a > 0;) e = a % 64, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(e) + b, a >>>= 6;
                a = b
            }
            c += a
        });
        return c
    }

    function qa(a) {
        a += String.fromCharCode(128);
        for (var b = [1518500249, 1859775393, 2400959708, 3395469782], c = 1732584193, e = 4023233417, f = 2562383102, h = 271733878, l = 3285377520, o = [], n, C, E, Q, T, fa = Math.ceil((a.length / 4 + 2) / 16), aa = [fa], K = 0, D; K < fa; K++) {
            aa[K] = [];
            for (n = 0; n < 16; n++) aa[K][n] = a.charCodeAt(K * 64 + n * 4) << 24 | a.charCodeAt(K * 64 + n * 4 + 1) << 16 | a.charCodeAt(K * 64 + n * 4 + 2) << 8 | a.charCodeAt(K * 64 + n * 4 + 3)
        }
        K = (a.length - 1) * 8;
        a = fa - 1;
        aa[a][14] = Math.floor(K / Math.pow(2, 32));
        aa[a][15] = K & 4294967295;
        for (K = 0; K < fa; K++) {
            for (D = 0; D < 16; D++) o[D] =
                aa[K][D];
            for (D = 16; D < 80; D++) o[D] = (o[D - 3] ^ o[D - 8] ^ o[D - 14] ^ o[D - 16]) << 1 | (o[D - 3] ^ o[D - 8] ^ o[D - 14] ^ o[D - 16]) >>> 31;
            a = c;
            n = e;
            C = f;
            E = h;
            Q = l;
            for (D = 0; D < 80; D++) T = Math.floor(D / 20), T = (a << 5 | a >>> 27) + (T == 0 ? n & C ^ ~n & E : T == 1 ? n ^ C ^ E : T == 2 ? n & C ^ n & E ^ C & E : n ^ C ^ E) + Q + b[T] + o[D] & 4294967295, Q = E, E = C, C = n << 30 | n >>> 2, n = a, a = T;
            c = c + a & 4294967295;
            e = e + n & 4294967295;
            f = f + C & 4294967295;
            h = h + E & 4294967295;
            l = l + Q & 4294967295
        }
        return [c, e, f, h, l]
    }

    function ra(a) {
        var b = r.navigator,
            c = r.window.screen,
            e = [b.userAgent, b.platform, (new Date).getTimezoneOffset(), c.width + c.height + c.colorDepth];
        t(b.plugins, function(a) {
            e.push(a.name + a.description + a.filename + a[0].type)
        });
        b = r.performance;
        e = e.concat([b && b.now ? b.now() : "", document.title, r.location.href, u(), oa()]);
        return e.concat(a || []).join()
    }

    function v(a, b, c) {
        var e = Array.prototype.slice,
            f = e.call(arguments, 2);
        return function() {
            return a.apply(b, f.concat(e.call(arguments)))
        }
    }

    function w(a) {
        return typeof a !== "undefined"
    }

    function x(a) {
        return a && a.replace(/^www\./, "")
    }
    var sa = /^((https?\:)?(\/\/))/i;

    function ta(a) {
        return a && a.replace(sa, "")
    }
    var ua = /^((https?\:)?(\/\/))?[^\/]*/;

    function va(a) {
        return a.replace(ua, "")
    }
    var wa = /\#.*/;

    function ya(a) {
        return a.replace(wa, "")
    }
    var za = /\?[^\#]*/;

    function Aa(a) {
        return a.toLowerCase()
    }
    var Ba = /\/+((\?|\#).*)?$/;

    function Ca(a) {
        return a.replace(Ba, "$1")
    }

    function Da(a) {
        return a && a.replace(za, "")
    }

    function Ea(a) {
        var b = a.match(/\?(.*)$/ig) ? a.match(/\?(.*)$/ig)[0].slice(1).replace(/#(.*)?/ig, "").split("&") : [],
            c = a.match(/#(.*)$/ig) ? a.match(/#(.*)$/ig)[0] : "",
            a = a.match(/[#|\?](.*)?/ig) ? a.slice(0, a.search(/[#|\?](.*)?/ig)) : a,
            b = Fa(b, function(a) {
                return a.search("utm") !== 0
            });
        b.length > 0 && (a += "?" + b.join("&"));
        return a + c
    }

    function Ga(a, b) {
        if (a === b) return 0;
        var c = i;
        t([Aa, Ca, ta, va, ya, Da], function(e, f) {
            a = e(a);
            b = e(b);
            if (a === b) return c = f + 1, j
        });
        return c
    }

    function Ha(a, b, c, e) {
        a.addEventListener ? a.addEventListener(b, c, !!e) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function Ia(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, j) : a.detachEvent && a.detachEvent("on" + b, c)
    }

    function Ja(a) {
        return typeof a === "number"
    }

    function Ka(a) {
        return typeof a === "string"
    }

    function La(a) {
        return typeof a === "function"
    }

    function Ma(a) {
        a = new Date(+a);
        return Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
    }

    function u() {
        return (new Date).getTime()
    }

    function Na(a) {
        return encodeURIComponent(a)
    }

    function Oa() {
        return r.location.protocol === "http:" ? "http:" : "https:"
    }

    function Pa(a) {
        return !!a && a.constructor === Object
    }

    function t(a, b) {
        if (Pa(a) === g)
            for (var c in a) {
                if (a.hasOwnProperty(c) && b(a[c], c) === j) break
            } else {
                c = 0;
                for (var e = a.length; c < e; c++)
                    if (b(a[c], c) === j) break
            }
    }

    function Qa(a, b) {
        for (var c = 0, e = a.length; c < e; c++)
            if (b(a[c])) return c;
        return -1
    }

    function Ra(a) {
        var b = r.pSUPERFLY_video,
            a = Qa(b, a);
        if (a > -1) return b[a]
    }

    function Fa(a, b) {
        var c = [];
        t(a, function(a) {
            b(a) && c.push(a)
        });
        return c
    }

    function Sa(a) {
        return a === d ? 0 : u() - a
    }

    function Ta(a, b) {
        if (a === b) return 0;
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        for (var c = [], e = 0, f = b.length; e <= f; e++) c[e] = [e];
        for (var h = 0, l = a.length; h <= l; h++) c[0][h] = h;
        for (var o, n, C, e = 1; e <= f; e++)
            for (h = 1; h <= l; h++) o = e - 1, n = h - 1, C = c[o][n], b.charAt(o) == a.charAt(n) ? c[e][h] = C : (n = c[e][n] + 1, o = c[o][h] + 1, C += 2, c[e][h] = Math.min(n, o, C));
        return c[b.length][a.length]
    }

    function Ua(a) {
        return a === d ? 0 : u() - a
    }

    function Va(a) {
        return Math.round(a === -1 || isNaN(a) ? -1 : a * 1E3)
    }
    var Wa;

    function Xa() {}
    var Ya = r.setInterval,
        Za = r.clearInterval,
        $a = r.setTimeout,
        ab = r.clearTimeout;

    function bb(a, b) {
        return Ya(a, b)
    }

    function cb(a) {
        switch (a) {
            case d:
                return "undefined";
            case "":
                return "empty";
            default:
                return a
        }
    }

    function db(a) {
        switch (a) {
            case "undefined":
                break;
            case "empty":
                return "";
            default:
                return a
        }
    };

    function eb(a) {
        var b = {};
        a && (a.charAt(0) == "?" && (a = a.substring(1)), a = a.replace(/\+/g, " "), t(a.split(/[&;]/g), function(a) {
            a = a.split("=");
            b[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
        }));
        return b
    }

    function fb(a, b) {
        var c = "",
            e = r.location.href.match(/[^?]+[?]([^#]+).*/);
        if (e) {
            var e = eb(e[1]),
                f = b || a;
            e[f] && (c = e[f])
        }
        return encodeURIComponent(c)
    }

    function gb(a, b) {
        return !b ? g : a === "http:" && b === "80" || a === "https:" && b === "443"
    }

    function hb(a) {
        var b = [];
        t(ib, function(c) {
            var e = a[c];
            w(e) && (Object.prototype.toString.call(e) === "[object Array]" ? t(e, function(a) {
                b.push(c + "=" + a)
            }) : Pa(e) ? t(e, function(a, c) {
                b.push(c + "=" + a)
            }) : ((e + "").length || c == "r") && b.push(c + "=" + e))
        });
        b.push("_");
        return b.join("&")
    }

    function jb(a) {
        var b = {
            hostname: "",
            pathname: "",
            search: "",
            protocol: "",
            port: "",
            hash: ""
        };
        if (!a) return b;
        var c = document.createElement("a"),
            e = r.location;
        if (!/^https?:/.test(a) && a.indexOf("javascript:") !== 0 && a.indexOf("app:") < 0)
            if (a.indexOf("//") === 0) a = e.protocol + a;
            else if (a.indexOf("/") === 0) var f = gb(e.protocol, e.port) ? "" : e.port,
            a = e.protocol + "//" + e.hostname + (f ? ":" + f : "") + a;
        else {
            var f = document.baseURI || e.href,
                h = f.indexOf("?");
            h === -1 && (h = f.indexOf("#"));
            if (h === -1) h = f.length;
            h = f.lastIndexOf("/", h);
            a = h === -1 ?
                "/" + a : f.substr(0, h) + "/" + a
        }
        c.href = a;
        b.hostname = c.hostname;
        b.pathname = c.pathname;
        b.search = c.search;
        b.protocol = c.protocol;
        b.port = c.port;
        b.hash = c.hash;
        if (b.pathname.charAt(0) !== "/") b.pathname = "/" + b.pathname;
        if (b.hostname === "") b.hostname = e.hostname;
        if (b.protocol === "") b.protocol = e.protocol;
        if (b.protocol === "javascript:") b.pathname = "", b.hostname = "", b.port = "", b.hash = "";
        if (gb(b.protocol, b.port) || b.port === "0") b.port = "";
        return b
    }

    function kb(a) {
        var b = a.protocol;
        a.hostname && (b += "//" + a.hostname, a.port && (b += ":" + a.port));
        return b + a.pathname + a.search + a.hash
    };

    function lb(a, b, c, e) {
        b = b || "*";
        c = c || document;
        if ("querySelectorAll" in c) return c.querySelectorAll(b + "[" + (a + (e ? '="' + e + '"' : "")) + "]");
        for (var f = [], b = c.getElementsByTagName(b), c = b.length, h = ""; c--;)(h = b[c].getAttribute(a)) && (!e || h === e) && f.push(b[c]);
        return f
    }

    function mb(a, b, c) {
        c = c || "";
        if (a === d) a = j;
        else {
            var e;
            if (!(e = c === "" && a.getAttribute(b)))
                if (e = a.getAttribute(b)) e = a.getAttribute(b) === c;
            a = e ? a : a === document.body ? j : mb(a.parentNode, b, c)
        }
        return a
    }

    function nb(a) {
        var b, c;
        b = "pageYOffset";
        c = "scrollTop";
        if (a && (a = lb("data-cb-scroll-element")) && a.length) return a[0][c];
        if (Ja(r[b])) return r[b];
        else if (document.body && document.body[c]) return document.body[c];
        else if (document.documentElement[c]) return document.documentElement[c];
        return 0
    }

    function ob() {
        var a = document,
            a = a[a.compatMode === "CSS1Compat" ? "documentElement" : "body"].clientHeight || 0;
        window.innerHeight && (a = Math.min(window.innerHeight, a));
        return a
    }

    function pb(a) {
        a = "scroll" + a;
        return Math.max(document.body[a], document.documentElement[a]) || 0
    }

    function qb(a, b, c) {
        a.ownerDocument || (a = a.correspondingUseElement);
        if (!a || !a.ownerDocument) return i;
        var e = a.ownerDocument.documentElement,
            f = 0,
            h = w(c) ? c + 1 : -1;
        Ka(b) ? (b = b.toLowerCase(), c = function(a) {
            return (a = a.nodeName) && a.toLowerCase() === b
        }) : c = b;
        for (; a && a !== e && f !== h;) {
            if (c(a)) return a;
            a = a.parentNode;
            f++
        }
        return i
    }

    function rb(a) {
        return a.nodeName && a.nodeName.toLowerCase() === "a" && (!a.namespaceURI || a.namespaceURI === "http://www.w3.org/1999/xhtml")
    }

    function sb(a) {
        a = a || window.event;
        return !a ? i : qb(a.target || a.srcElement, rb, 10)
    }

    function tb(a, b) {
        var c = document.createElement(a);
        t(b, function(a, b) {
            c.setAttribute(b, a)
        });
        return c
    }

    function ub() {
        return r.document.readyState === "complete" || r.document.readyState !== "loading" && !r.document.documentElement.doScroll
    }

    function vb(a) {
        function b() {
            if (r.document.addEventListener || r.event.type === "load" || r.document.readyState === "complete") r.document.addEventListener ? (r.document.removeEventListener("DOMContentLoaded", b, j), r.removeEventListener("load", b, j)) : (r.document.detachEvent("onreadystatechange", b), r.detachEvent("onload", b)), a()
        }
        ub() ? a() : r.document.addEventListener ? (r.document.addEventListener("DOMContentLoaded", b, j), r.addEventListener("load", b, j)) : (r.document.attachEvent("onreadystatechange", b), r.attachEvent("onload",
            b))
    };

    function wb() {
        this.ma = {};
        this.Ya = 1
    }

    function xb(a, b, c, e) {
        a.Ya++;
        a.ma[b] = a.ma[b] || {};
        a.ma[b][a.Ya] = [c, e];
        return a.Ya
    }

    function yb(a, b) {
        if (Ka(b)) a.ma[b] = d, delete a.ma[b];
        else if (Ja(b)) {
            var c = g;
            t(a.ma, function(a) {
                t(a, function(f, h) {
                    if (parseInt(h, 10) === b) return a[h] = d, delete a[h], c = j
                });
                return c
            })
        }
    }
    wb.prototype.Ia = function(a, b) {
        if (this.ma[a]) {
            var c = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [];
            t(this.ma[a], function(a) {
                var b;
                a && a.length === 2 && (b = a[0], a = a[1], b.apply(a, c))
            })
        }
    };
    wb.prototype.addEventListener = function(a, b) {
        var c = xb(this, a, b);
        b._cbEventId = c
    };
    wb.prototype.removeEventListener = function(a, b) {
        this.ma[a] && this.ma[a][b._cbEventId] && this.ma[a][b._cbEventId][0] === b && yb(this, b._cbEventId)
    };
    var y = new wb;
    var z = {};
    z.N = function() {
        z.Wb ? z.Ab("pageload") : (z.gd = [{
            target: r,
            event: "scroll"
        }, {
            target: document.body,
            event: "keydown"
        }, {
            target: document.body,
            event: "mousemove"
        }, {
            target: r,
            event: "resize"
        }, {
            target: document.body,
            event: "mousedown"
        }], z.Gb = i, z.Va = i, z.Vb = {}, z.Jc = {}, t(z.gd, function(a) {
            var b = a.event;
            Ha(a.target, b, function(a) {
                z.Ab.call(z, b, a)
            })
        }), xb(y, "f", function() {
            z.Ab("focus")
        }), z.Ab("pageload"), Ha(document.body, "click", function(a) {
            (a = sb(a)) && y.Ia("c", a)
        }, g), Ha(document.body, "contextmenu", function(a) {
            (a = sb(a)) && y.Ia("r",
                a)
        }), z.Wb = g)
    };
    z.md = function() {
        var a, b = z.Jc.keydown;
        if (b === d) return j;
        b = u() - b;
        return b <= (a || 15E3) && b >= 0
    };
    z.wc = 100;
    z.Ab = function(a, b) {
        if (!b) b = window.event;
        if (b && a === "keydown") {
            var c = b.keyCode ? b.keyCode : b.which;
            if (c === 32 || c > 36 && c < 41) a = "scroll"
        }
        z.xe(a);
        if (z.Gb === i) z.Yc(a);
        else if (!z.Va || na[z.Va] < na[a]) z.Va = a
    };
    z.xe = function(a) {
        z.Jc[a] = u()
    };
    z.Yc = function(a) {
        z.Gb = $a(z.ud, z.wc);
        y.Ia("a");
        z.Vb[a] !== i && ab(z.Vb[a]);
        z.pe(a)
    };
    z.pe = function(a) {
        var b = z.Vb;
        b[a] = $a(function() {
            ab(b[a]);
            delete b[a];
            var c = j;
            t(b, function() {
                c = g;
                return j
            });
            c || y.Ia("i")
        }, na[a] + z.wc)
    };
    z.ud = function() {
        ab(z.Gb);
        z.Gb = i;
        if (z.Va) z.Yc(z.Va), z.Va = i
    };
    var zb, Ab, Bb, Cb, Db;
    (function() {
        var a, b;
        t(["", "moz", "o", "ms", "webkit"], function(c) {
            a = (c + "Hidden").charAt(0).toLowerCase() + (c + "Hidden").slice(1);
            if (typeof r.document[a] === "boolean") return b = c, j
        });
        b !== d && (Cb = a, Db = (b + "VisibilityState").charAt(0).toLowerCase() + (b + "VisibilityState").slice(1), Bb = b + "visibilitychange")
    })();
    var Eb = j;

    function Fb() {
        Eb = Db && r.document[Db] === "prerender" ? g : j
    }

    function Gb() {
        Ab = g;
        y.Ia("f")
    }

    function Hb() {
        Ab = j;
        y.Ia("b")
    }

    function Ib(a, b, c) {
        r.addEventListener ? r.addEventListener(a, c, j) : r.document.attachEvent && r.document.attachEvent(b, c)
    }

    function Jb() {
        var a = g;
        r.document.hasFocus && (a = r.document.hasFocus());
        var b = j;
        Cb && (b = r.document[Cb]);
        return a && !b
    }

    function Kb() {
        Jb() ? Gb() : Hb()
    }

    function Lb(a) {
        Fb();
        if (Eb) {
            var b = j,
                c = function() {
                    b || (Fb(), Eb || (b = g, a(), r.window.setTimeout(function() {
                        r.document.removeEventListener(Bb, c, j)
                    }, 100)))
                };
            r.document.addEventListener(Bb, c, j)
        } else a()
    };

    function Mb() {
        this.k = r._sf_async_config || {};
        this.Ec = v(this.Qc, this)
    }
    Mb.prototype.N = function() {
        this.hb = 0
    };
    Mb.prototype.Qc = k();
    Mb.prototype.ib = function(a) {
        if (!Eb) {
            var b = this.Ec,
                c;
            c = new Image(1, 1);
            if (b) c.onerror = b;
            c.src = a
        }
    };
    Mb.prototype.ya = function() {
        this.Ec = i
    };
    var A = "path",
        B = "domain",
        Nb = "useCanonical",
        Ob = "useCanonicalDomain",
        Pb = "title",
        Qb = "virtualReferrer";

    function F(a, b, c) {
        a[b] = a[b] || c
    }

    function Rb(a, b) {
        for (var c = r[a] || []; c.length;) b(c.shift());
        r[a] = {
            push: b
        }
    }

    function Sb(a) {
        t(document.getElementsByTagName("script"), function(b) {
            if (typeof b.src === "string" && b.src.match(/chartbeat.js/)) return b = eb(b.src.split("?")[1]), F(a, "uid", b.uid), F(a, B, b.domain), j
        })
    }

    function Tb(a, b) {
        return a[b] ? encodeURIComponent(a[b]) : ""
    }

    function Ub(a) {
        var b = {};
        t(a, function(a, e) {
            e.charAt(0) == "_" && (b[e] = a)
        });
        return b
    };
    var G = {};
    G.pd = function(a) {
        try {
            G.create("_cb_test", "1", 1, a);
            var b = G.D("_cb_test");
            G.remove("_cb_test", a);
            return b === "1"
        } catch (c) {
            return j
        }
    };
    G.D = function(a) {
        a += "=";
        var b = "";
        t(document.cookie.split(";"), function(c) {
            for (; c.charAt(0) === " ";) c = c.substring(1, c.length);
            if (c.indexOf(a) === 0) return b = c.substring(a.length, c.length), j
        });
        return b
    };
    G.create = function(a, b, c, e) {
        var f = r._sf_async_config;
        if (f && f.noCookies) return "";
        f = new Date;
        f.setTime(u() + c * 1E3);
        a = a + "=" + b + ("; expires=" + f.toGMTString()) + ("; path=" + e);
        return document.cookie = a
    };
    G.remove = function(a, b) {
        return G.D(a) ? G.create(a, "", -86400, b) : ""
    };
    var H = {};
    H.Y = function(a) {
        var b = r._sf_async_config;
        if (!a && b && b.noCookies) return i;
        if (H.Y.Mb !== d) return H.Y.Mb;
        var a = u() + "",
            c, e;
        try {
            if ((e = r.localStorage).setItem(a, a), c = e.getItem(a) === a, e.removeItem(a), c) return H.Y.Mb = e
        } catch (f) {}
        return H.Y.Mb = i
    };
    H.D = function(a) {
        var b = H.Y();
        if (!b) return "";
        var c = b.getItem(a + "_expires");
        return c && (c = +c, !isNaN(c) && u() > c) ? (H.remove(a), "") : b.getItem(a) || ""
    };
    H.create = function(a, b, c) {
        var e = H.Y();
        if (e) {
            var f = new Date;
            f.setTime(u() + c * 1E3);
            try {
                e.setItem(a, b), e.setItem(a + "_expires", f.getTime())
            } catch (h) {}
        }
    };
    H.remove = function(a) {
        var b = H.Y();
        b && (b.removeItem(a), b.removeItem(a + "_expires"))
    };

    function Vb(a, b) {
        this.Cb = a || "";
        this.xa = b || "/";
        this.vd = H.Y() !== i || G.pd(this.xa);
        this.qc = j;
        Wb(this)
    }
    q = Vb.prototype;
    q.isSupported = m("vd");

    function Wb(a) {
        if (!G.D("_cb_ls")) {
            var b = H.Y() !== i,
                c = G.D("_SUPERFLY_lockout");
            c && t(["", "_v_", "_p_"], function(b) {
                a.create(b + "_SUPERFLY_lockout", c, 600, g)
            });
            var e = G.D("_chartbeat3");
            e && (a.create("_v__chartbeat3", e, 34128E3, g), G.remove("_chartbeat3", a.xa));
            b && ((b = G.D("_chartbeat2")) && a.create("_chartbeat2", b, 34128E3, g), (b = G.D("_chartbeat5")) && a.create("_chartbeat5", b, 60, g));
            G.create("_cb_ls", "1", 34128E3, a.xa)
        }
    }

    function Xb(a) {
        var b = a.qc;
        a.qc = j;
        return b
    }
    q.create = function(a, b, c, e) {
        a = e ? a : this.Cb + a;
        (H.Y() ? H : G).create(a, b, c, this.xa);
        H.Y() && G.create(a, b, c, this.xa)
    };
    q.update = function(a, b, c, e, f, h, l) {
        a = e ? a : this.Cb + a;
        f = Ka(f) ? f : "::";
        e = (e = this.D(a, g)) ? e.split(f) : [];
        if (l && e.length) {
            var o = l(b),
                n = Qa(e, function(a) {
                    return l(a) === o
                });
            n !== -1 && e.splice(n, 1)
        }
        e.push(b);
        for (Ja(h) && e.length > h && e.splice(0, e.length - h); e.length > 1 && e.join(f).length > 4E3;) e.shift();
        this.create(a, e.join(f), c, g)
    };
    q.D = function(a, b) {
        var a = b ? a : this.Cb + a,
            c = (H.Y() ? H : G).D(a);
        if (!c && H.Y() && (c = G.D(a)) && G.D("_cb_ls")) {
            this.qc = g;
            var e;
            switch (a) {
                case "_SUPERFLY_lockout":
                    e = 600;
                    break;
                case "_chartbeat4":
                    e = 60;
                    break;
                case "_cb_cp":
                    e = 60;
                    break;
                case "_chartbeat3":
                    e = 34128E3;
                    break;
                default:
                    e = 34128E3
            }
            H.create(a, c, e)
        }
        return c
    };
    q.remove = function(a, b) {
        a = b ? a : this.Cb + a;
        (H.Y() ? H : G).remove(a, this.xa);
        H.Y() && G.remove(a, this.xa)
    };

    function Yb(a) {
        var b = i;
        if (a && (b = Zb(), b = !b ? b : I(b.pathname) + b.search + b.hash)) return b;
        var c = r.location,
            b = I(c.pathname),
            a = c.search || "",
            a = a.replace(/PHPSESSID=[^&]+/, ""),
            e = /&utm_[^=]+=[^&]+/ig;
        (c = e.exec(c.search)) && (a = a.replace(e, ""));
        e = /\?utm_[^=]+=[^&]+(.*)/i;
        (c = e.exec(a)) && (a = a.replace(e, c[1] != "" ? "?" + c[1] : ""));
        return b + a
    }

    function $b(a) {
        return a && (a = Zb(), a = !a ? a : a.hostname) ? a : r.location.hostname
    }

    function Zb() {
        var a = ac();
        return !a ? a : jb(a.href)
    }

    function ac() {
        var a = i;
        t(document.getElementsByTagName("link"), function(b) {
            if (b.rel == "canonical") return a = b, j
        });
        return a
    }
    for (var bc = {}, cc = 0; cc < 81; cc++) bc["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(cc)] = g;

    function dc(a, b) {
        if (a === "%") return "%25";
        var c = parseInt(b, 16);
        return bc[c] ? String.fromCharCode(c) : "%" + b.toUpperCase()
    }

    function I(a) {
        if (!Ka(a)) return a;
        a = a.replace(/%([0-9A-Fa-f]{2})?/g, dc);
        return a = a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g, encodeURIComponent)
    };

    function J(a, b) {
        var c = L();
        return w(b) && !w(c[a]) ? b : c[a]
    }

    function L() {
        w(r._cb_shared) || (r._cb_shared = {});
        return r._cb_shared
    };
    var M = {
        jd: {
            IDLE: 0,
            Ce: 1,
            Be: 2,
            hd: 3
        },
        qa: 0
    };
    M.N = function() {
        if (!M.Wb) xb(y, "a", M.Cd, M), xb(y, "i", M.Fd, M), xb(y, "f", M.Ed, M), xb(y, "b", M.Dd, M), M.Wb = g
    };
    M.H = function() {
        return M.qa
    };
    M.Cd = function() {
        M.qa === 1 ? M.Da(3) : M.qa === 0 && M.Da(2)
    };
    M.Fd = function() {
        M.qa === 3 ? M.Da(1) : M.qa === 2 && M.Da(0)
    };
    M.Ed = function() {
        (M.qa === 0 || M.qa === 2) && M.Da(3)
    };
    M.Dd = function() {
        M.qa === 3 ? M.Da(2) : M.qa === 1 && M.Da(0)
    };
    M.Da = function(a) {
        M.qa = a;
        y.Ia("s", a)
    };

    function ec(a, b) {
        this.Ub = a || d;
        this.bc = b || d;
        this.ab = this.Xa = 0;
        this.Kd = v(this.Ld, this);
        this.$c = this.Wa = i
    }
    q = ec.prototype;
    q.N = function() {
        this.ab = this.Xa = 0;
        this.Wa = i;
        this.$c = xb(y, "s", this.Ic, this);
        this.Ic(M.H())
    };
    q.Ic = function(a) {
        Za(this.Wa);
        this.Wa = i;
        if (a === M.jd.hd) this.Wa = Ya(this.Kd, 1E3)
    };
    q.Ld = function() {
        if (this.Ub === d || this.Ub()) this.Xa++, this.ab++, this.bc && this.bc()
    };
    q.terminate = function() {
        Za(this.Wa);
        this.Wa = i;
        yb(y, this.$c)
    };
    q.ya = function() {
        this.terminate();
        this.bc = this.Ub = d
    };

    function fc() {
        Mb.call(this);
        this.La = [];
        this.q = new Vb(this.ad, this.k.cookiePath || "/");
        this.q.remove("_SUPERFLY_nosample");
        this.la = new ec;
        this.ec = v(this.fb, this);
        Ha(r, "unload", this.ec);
        this.wb = j;
        gc(v(this.N, this))
    }
    ea(fc, Mb);

    function gc(a) {
        vb(function() {
            Lb(a)
        })
    }
    q = fc.prototype;
    q.mc = g;
    q.gc = j;
    q.N = function() {
        fc.ia.N.call(this);
        this.ub = this.Oa = 0;
        this.Ua = u();
        this.Ca = pa(hc(this));
        this.kc = g;
        this.xb = 72E5;
        if (this.mc) {
            var a = +this.k.sessionLength;
            if (!isNaN(a)) this.xb = a * 6E4
        }
        a = J("d");
        if (!a) {
            var a = [],
                b = this.q.D("_chartbeat2", g);
            b.length > 0 && (a = b.split("."));
            a.length > 6 && (a = []);
            var b = u(),
                c = this.q.D("_cb", g);
            c.length > 0 ? a[1] = a[1] || b : c = a[0];
            a[0] = "";
            var e = b - +(a[1] || 0),
                f = b - +(a[2] || 0);
            L().n = c && e > 18E5 && f < 2592E6 ? 0 : 1;
            var e = a[4],
                h = parseInt(a[5], 10) || 0;
            if (!(f = f > 18E5))
                if (ic(this)) f = j;
                else {
                    var f = jc(this),
                        f = decodeURIComponent(f),
                        f = kc(f) || f,
                        l;
                    l = lc(this);
                    l = decodeURIComponent(l);
                    l = kc(l) || l;
                    f = f !== l
                }!e || f ? (e = pa(hc(this)), a[4] = e, h = 1, this.q.remove("_cb_svref", g)) : h += 1;
            a[5] = h;
            h = "1";
            f = a && +a[2];
            e = a && a[3];
            if (a && f && e)
                if (h = Math.abs((Ma(b) - Ma(f)) / 864E5)) {
                    h = Math.min(h, 16) - 1;
                    for (f = ""; h--;) f += 0;
                    h = (e + f + "1").slice(-16)
                } else h = e;
            e = h;
            c || (c = this.k.utoken || pa(hc(this), 3), a[1] = b);
            a[2] = b;
            a[3] = e;
            this.k.utoken = this.kb;
            this.q.create("_cb", c, 34128E3, g);
            this.q.create("_chartbeat2", a.join("."), 34128E3, g);
            a[0] = c;
            L().d = a
        }
        this.Je = a.join(".");
        var o;
        c = +a[1];
        e = +a[2];
        if ((b = a[3]) && c && e) o = (Math.min((Math.abs((Ma(e) - Ma(c)) / 864E5) || 0) + 1, 16, b.length) - 1).toString(16), o += ("0000" + parseInt(b, 2).toString(16)).slice(-4);
        this.Hc = o;
        this.Zb = J("n", 1);
        this.kb = a[0];
        this.te = a[4];
        this.re = a[5];
        this.se = lc(this);
        this.q.create("_cb_svref", lc(this) || "null", 1800, g);
        this.la.N();
        M.N();
        z.N();
        zb || (Ab = Jb(), Bb && r.document.addEventListener && r.document.addEventListener(Bb, Kb, j), Ib("focus", "onfocusin", Gb), Ib("blur", "onfocusout", Hb), Ab && Gb(), zb = g);
        this.cb = 0;
        this.ld = xb(y, "a", this.Pd, this);
        this.gc = g;
        if (this.cc) $a(this.cc, 0), this.cc = i
    };
    q.lb = function() {
        if (!this.q.D("_SUPERFLY_lockout")) this.gc ? !ub() && !this.wb ? (this.Bb = v(this.pc, this), Ha(r, "load", this.Bb)) : this.pc() : this.cc = v(this.lb, this)
    };
    q.pc = function() {
        this.gb = mc();
        z.N();
        this.tb = bb(v(this.na, this), 15E3);
        this.na()
    };
    q.na = function() {
        var a = this.la.ab,
            a = this.k.reading && +this.k.reading || a > 0;
        if (this.ub < this.Oa && !a) this.ub++;
        else {
            var b;
            if (Wa === d) b = r.navigator.userAgent, Wa = b.indexOf("AppleWebKit") > 0 && b.indexOf("FBIOS") > 0;
            b = Wa;
            b && !a ? this.ub++ : (a ? this.Oa = 0 : this.Lb(), this.ub = 0, this.La.push(0), this.La.length > 18 && this.La.shift(), this.mc && u() - this.Ua >= this.xb ? this.terminate() : this.Aa())
        }
    };
    q.Qc = function() {
        this.La.push(1);
        var a = 0;
        t(this.La, function(b) {
            a += b
        });
        a < 3 ? (this.kc = g, this.Lb()) : (this.terminate(), this.q.create("_SUPERFLY_lockout", "1", 600))
    };
    q.fb = k();
    q.Pd = function() {
        var a = nc(this);
        this.cb = Math.max(this.cb, a)
    };

    function nc(a) {
        return Math.floor(nb(!!a.k.scrollElement))
    }
    q.Lb = function() {
        var a = this.Oa;
        this.Oa = a = a ? Math.min(a * 2, 16) : 1
    };
    q.rb = function() {
        this.fb();
        this.terminate()
    };
    q.Eb = function() {
        this.wb = g;
        this.gc = j;
        this.N();
        this.lb()
    };

    function ic(a) {
        if (a.k[Qb]) return g;
        if (oc(a)) return j;
        a = document.referrer.indexOf("://" + r.location.hostname + "/");
        return a != -1 && a < 9
    }

    function oc(a) {
        var b = a.k.referrerOverrideQueryParam,
            c = "";
        t(window.location.search.substr(1).split("&"), function(a) {
            a = a.split("=");
            if (a.length == 2 && a[0] == b && a[1]) return c = decodeURIComponent(a[1]).replace(/\+/g, " "), j
        });
        c && c.indexOf("::") == -1 && (c = "external::" + c);
        return c
    }

    function jc(a) {
        a = a.k[Qb] || oc(a);
        if (!a && (a = document.referrer || "") && !/^(android-)?app:/.test(a)) {
            var b = jb(a);
            if (b.protocol === "http:" || b.protocol === "https:") b.pathname = I(b.pathname), a = kb(b)
        }
        return encodeURIComponent(a)
    }

    function pc(a) {
        a = a.k[Pb].slice(0, 100);
        return encodeURIComponent(a)
    }

    function hc(a) {
        a = [jc(a), pb("Width"), pb("Height")];
        return ra(a)
    }

    function qc(a) {
        var b = [],
            c = a.q.D("_chartbeat4");
        c && (t(c.split("::"), function(a) {
            b.push(encodeURIComponent(a))
        }), a.q.remove("_chartbeat4"));
        return b
    }

    function lc(a) {
        a = a.q.D("_cb_svref", g) || jc(a) || "null";
        a === "null" && (a = "");
        return a = a.substr(0, 128).replace(/%.?$/, "")
    }

    function kc(a) {
        a = a.match(/^https?:\/\/([^\/]*)/);
        return !a ? i : a[1]
    }

    function mc() {
        var a = r.performance && r.performance.timing;
        if (!a || a.navigationStart == 0) return -1;
        var b = a.navigationStart,
            a = a.loadEventStart;
        return Ja(b) && b ? Ja(a) && a > b ? a - b : u() - b : -1
    }
    q.terminate = function() {
        this.la.terminate();
        yb(y, this.ld);
        this.Bb !== d && Ia(r, "load", this.Bb);
        Za(this.tb);
        L().d = d;
        L().n = d
    };
    q.ya = function() {
        this.terminate();
        Ia(r, "unload", this.ec);
        this.ec = this.Bb = this.q = this.La = this.k = i;
        this.la.ya();
        this.la = i;
        fc.ia.ya.call(this)
    };

    function rc(a) {
        for (var b = J("m") || []; b.length;) a(b.shift());
        a = {
            push: a
        };
        L().m = a
    };

    function sc(a) {
        var b = a.offsetLeft,
            c = a.offsetTop,
            e = tc(a);
        b += e.x;
        c += e.y;
        for (var f = j, e = a.offsetParent; a && a !== d && a !== document.body;) {
            if (a === e) e = tc(a), b += a.offsetLeft + e.x, c += a.offsetTop + e.y, e = a.offsetParent;
            if (uc(a, ["position"]).position === "fixed") {
                f = g;
                break
            }
            a = a.parentElement
        }
        f && (b += 0, c += 0);
        return {
            x: b,
            y: c
        }
    }

    function uc(a, b) {
        var c = {},
            e, f;
        r.getComputedStyle ? e = r.getComputedStyle(a, i) : a.currentStyle ? f = "currentStyle" : a.style && (f = "style");
        t(b, function(b) {
            c[b] = e ? e[b] || e.getPropertyValue(b) : a[f][b]
        });
        return c
    }
    var vc = /matrix(3d)?\((.*)\)/;

    function tc(a) {
        var b = {
                x: 0,
                y: 0
            },
            a = uc(a, ["transform"]).transform;
        if (!Ka(a)) return b;
        var c = a.match(vc);
        if (!c) return b;
        var a = c[2].split(", "),
            e;
        w(c[1]) ? (c = 12, e = 13) : (c = 4, e = 5);
        b.x = parseInt(a[c], 10);
        b.y = parseInt(a[e], 10);
        return b
    };

    function wc() {
        var a = r.location.href,
            a = a.replace(/-{2,}/g, "-"),
            a = jb(a);
        a.pathname = I(a.pathname);
        return a
    }

    function xc(a) {
        var b = G.D("_chartbeat6");
        if (!b) return i;
        var b = b.split("::"),
            c, e;
        if (b.length === 1) c = b[0].split(","), e = 0;
        else {
            var f, h = wc(),
                l = kb(h);
            t(b, function(a, b) {
                var h = a.split(","),
                    n = Ta(l, decodeURIComponent(h[0]));
                if (n === 0) return c = h, e = b, j;
                if (f === d || n < f) f = n, c = h, e = b
            })
        }
        b.splice(e, 1);
        a = "_chartbeat6=" + b.join("::") + yc(a);
        document.cookie = a;
        var a = [],
            b = decodeURIComponent(c[0]),
            h = decodeURIComponent(c[1]),
            o = c[2];
        c.splice(0, 3);
        for (var n = c.length / 3, C = 0; C < n; C++) {
            var E = C * 3 + 2;
            a.push({
                Ge: b,
                origin: h,
                Pa: o,
                Ta: E < c.length ?
                    c[E] : "",
                xd: c[C * 3],
                ye: c[C * 3 + 1]
            })
        }
        return a
    }

    function yc(a) {
        var b = "",
            c;
        if (!Pa(a)) return b;
        a.Nc && (c = new Date, c.setTime(c.getTime() + a.Nc), b += "; expires=" + c.toGMTString());
        a.domain && (b += "; domain=" + a.domain);
        a.path && (b += "; path=" + a.path);
        return b
    }

    function zc(a) {
        var b = a.topStorageDomain,
            a = a[B],
            c = r.location.hostname;
        return b ? b : Ac(c, a) ? a : c.replace(/^www\./, "")
    }

    function Ac(a, b) {
        if (a === b) return g;
        for (var c = b.split("."), e = a.split("."); c.length;) {
            if (e.length === 0) return j;
            if (c.pop() !== e.pop()) return j
        }
        return g
    }

    function Bc(a, b, c, e, f) {
        this.zd = a;
        this.yd = b;
        this.ze = c;
        this.Pa = e;
        this.Ta = f
    }

    function Cc(a) {
        var b = a.d,
            c = i;
        if (b !== i) {
            var e = {};
            b.s && t(b.s, function(a, b) {
                e[b] = typeof a === "string" ? {
                    zc: a,
                    Ta: ""
                } : {
                    zc: a.chosenVariant,
                    Ta: a.specificLocation
                }
            });
            c = {
                Xc: e,
                Pa: b.g,
                Mc: b.m
            }
        }
        return {
            status: a.s,
            data: c,
            code: a.c,
            message: a.m
        }
    };

    function Dc(a, b) {
        for (var c = b || document.documentElement, e = [], f = i, h = a, l, o, n, C, E, Q; h && h !== c;) {
            l = h.nodeName.toLowerCase();
            f = h;
            o = f.nodeName;
            if ((h = h.parentNode) && h !== document.documentElement) {
                n = h.children;
                C = 0;
                for (E = 0, Q = n.length; E < Q; E++) {
                    if (f === n[E]) {
                        l += "[" + (1 + E - C) + "]";
                        break
                    }
                    n[E].nodeName !== o && C++
                }
            }
            e.unshift(l)
        }
        return e.join("/")
    };

    function Ec() {
        this.ad = "_t_";
        this.Cc = this.Zc = Xa;
        fc.call(this)
    }
    ea(Ec, fc);
    q = Ec.prototype;
    q.N = function() {
        Ec.ia.N.call(this);
        Sb(this.k);
        var a = !!this.k[Nb],
            b = $b(!!this.k[Ob] && a);
        F(this.k, "mabServer", "mabping.chartbeat.net");
        F(this.k, Pb, document.title);
        F(this.k, B, b);
        this.k[A] = this.k[A] ? I(this.k[A]) : Yb(a);
        this.ka = x(b);
        this.k[B] = x(this.k[B]);
        this.we = zc(this.k);
        this.Za = this.vb = j;
        this.Fc = [];
        var c = this,
            a = xc({
                domain: "." + this.we,
                Nc: 6E4,
                path: "/"
            });
        if (a !== i) this.vb = g, t(a, function(a) {
            c.Fc.push(new Bc(a.origin, a.xd, a.ye, a.Pa, a.Ta))
        });
        this.Oc = 0;
        this.Fb = i;
        rc(v(this.Jd, this))
    };
    q.Aa = function() {
        var a = this.la.Xa,
            b = Fc(this),
            c, e = this;
        this.vb && t(this.Fc, function(f) {
            c = b + "&x=" + f.yd + "&v=" + f.ze + "&ml=" + f.Pa + "&xo=" + f.zd + "&e=" + a + "&sl=" + f.Ta;
            e.ib(c)
        });
        !this.Za && this.Fb && Gc(this, this.Fb);
        this.Za = g
    };
    q.pc = function() {
        this.gb = mc();
        z.N();
        if (this.vb) this.tb = bb(v(this.na, this), 500);
        this.na()
    };
    q.na = function() {
        var a, b;
        this.Za ? (a = this.la.Xa, b = this.Oc * 15, a - b >= 15 && (this.Aa(), this.Oc += 1), a >= 45 && this.terminate()) : this.Aa()
    };

    function Fc(a) {
        var b = a.k;
        return Oa() + "//" + b.mabServer + "/ping/mab?h=" + encodeURIComponent(b[B]) + "&p=" + encodeURIComponent(b[A]) + "&d=" + encodeURIComponent(a.ka) + "&u=" + a.kb + "&c=" + Math.round((u() - a.Ua) / 600) / 100
    }
    q.fb = k();
    q.ue = function(a) {
        a = Cc(a);
        this.Za ? Gc(this, a) : this.Fb = a
    };

    function Gc(a, b) {
        var c = Fc(a),
            e = b.status,
            f = b.data;
        if (e == "s" && f !== i) {
            var h = v(a.ib, a);
            Pa(f.Xc) && t(f.Xc, function(a, b) {
                h(c + "&x=" + b + "&v=" + a.zc + "&ml=" + f.Pa + "&sl=" + a.Ta + "&e=-1")
            });
            Object.prototype.toString.call(f.Mc) === "[object Array]" && t(f.Mc, function(a) {
                h(c + "&me=3&ml=" + f.Pa + "&x=" + a)
            })
        } else e == "e" && a.ib(c + "&me=" + b.code)
    }
    q.Jd = function(a, b) {
        for (var c = 0, e = arguments.length; c < e; c++) {
            var a = arguments[c],
                f = a.shift();
            f === "t" ? this.ue.apply(this, a) : f === "v" ? this.Wc.apply(this, a) : f === "sv" ? this.qe.apply(this, a) : f === "ev" && this.Wc.apply(this, a)
        }
    };
    q.rb = function() {
        this.Cc();
        Ec.ia.rb.call(this)
    };
    q.Eb = function() {
        L().m = [];
        this.Zc();
        Ec.ia.Eb.call(this)
    };
    q.qe = function(a) {
        this.Zc = a
    };
    q.Wc = function(a) {
        this.Cc = a
    };
    q.terminate = function() {
        this.He = d;
        this.Fb = i;
        this.Za = this.vb = d;
        Ec.ia.terminate.call(this)
    };
    if (!G.D("cb_optout") && !r.pSUPERFLY_mab) {
        var Hc = new Ec,
            Ic = {};
        Ic.evps = v(Hc.rb, Hc);
        Ic.svps = v(Hc.Eb, Hc);
        r.pSUPERFLY_mab = Ic;
        Hc.lb()
    };
    var Jc, Kc, Lc;

    function Mc(a) {
        if (a.origin === "https://chartbeat.com" && (a = String(a.data), a.indexOf("_cb_hud_version=") === 0)) {
            var b = a.substr(16),
                c = j;
            Nc();
            if (b !== "NONE") b.indexOf("HUD2.") === 0 ? b = b.substr(5) : b.indexOf("HUD3.") === 0 ? (c = g, b = b.substr(5)) : b = "OLD", a = "https://static.chartbeat.com/js/inpage.js", c ? a = "https://static2.chartbeat.com/frontend_ng/hud3/hud-inpage/hud-inpage-" + b + ".js" : b !== "OLD" && (a = "https://static2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-" + b + ".js"), b = w(d) ? d : {}, b.src = a, a = tb("script", b), a.setAttribute("type",
                "text/javascript"), b = document.head || document.getElementsByTagName("head")[0], w(d) ? d.appendChild(a) : b && b.appendChild(a)
        }
    }

    function Nc() {
        ab(Kc);
        Kc = d;
        Ia(r, "message", Mc);
        Lc && Lc.parentNode && Lc.parentNode.removeChild(Lc);
        Lc = d
    };

    function Oc() {
        var a = r._sf_async_config && r._sf_async_config.domain;
        if (a && !Jc) {
            Jc = g;
            a = "https://chartbeat.com/publishing/hud2/versioninfo/?host=" + encodeURIComponent(a);
            Ha(r, "message", Mc);
            Kc = $a(Nc, 1E4);
            var b = w(d) ? d : {};
            b.src = a;
            a = tb("iframe", b);
            a.style.display = "none";
            w(d) ? d.appendChild(a) : document.body && document.body.appendChild(a);
            Lc = a
        }
    }

    function Pc(a) {
        if (/[\/.]chartbeat\.com$/.test(a.origin)) {
            var b = H.Y(g),
                c = String(a.data);
            b && c.indexOf("_cb_ip") == 0 && (b.setItem("_cb_ip", "1"), a.source.postMessage(1, a.origin), Oc(), Ia(r, "message", Pc))
        }
    };

    function Qc(a, b) {
        this.fd = b;
        this.dd = a[Nb];
        this.cd = a[Ob];
        this.za = a[A];
        this.Ha = a[Pb];
        this.Ac = a[B];
        this.Ae = a[Qb];
        this.yc = (this.pa = Zb()) ? this.pa.hostname : "";
        this.nb = this.pa ? I(this.pa.pathname) + this.pa.search + this.pa.hash : "";
        this.Vc = Yb(j);
        this.me = $b(j);
        var c = lb("property", "meta", i, "og:url");
        this.eb = (this.Ra = c && c.length ? jb(c[0].content) : i) ? I(this.Ra.pathname) + this.Ra.search + this.Ra.hash : "";
        this.Od = this.Ra ? this.Ra.hostname : "";
        this.Qb = document.title || "";
        var e;
        if ((c = lb("property", "meta", i, "og:title")) && c.length) e =
            c[0].content;
        this.zb = e;
        var f;
        if ((e = lb("property", "meta", i, "twitter:title")) && e.length) f = e[0].content;
        this.jb = f;
        f = !!this.dd;
        e = this.dd !== d;
        var c = !!this.cd,
            h = this.cd !== d,
            l = !!this.pa,
            o;
        o = x(this.yc);
        var n = x(this.me);
        o = o === n;
        var n = !!this.eb,
            C = !this.pa ? j : this.nb === this.eb,
            E = this.nb === this.Vc,
            Q;
        Q = this.nb;
        var T = Da(this.Vc);
        Q = Q === T;
        var T = !!this.Qb,
            fa = !!this.zb,
            aa = !!this.jb,
            K = this.Qb === this.zb,
            D = !this.jb ? j : this.Qb === this.jb,
            ia = !this.zb || !this.jb ? j : this.zb === this.jb,
            ja = !!this.Ha,
            rd = !!this.za,
            sd = this.za ? this.za.charAt(0) !==
            "/" : j,
            td = !this.pa ? j : this.za === this.nb,
            ud = !this.eb ? j : this.za === this.eb,
            vd = !this.pa ? j : this.Ac === x(this.yc),
            wd = !this.eb ? j : this.Ac === x(this.Od),
            xd = !!this.fd,
            yd = this.fd ? j : !!this.Ae,
            zd = Oa() === "https:",
            Ad = !!XMLHttpRequest,
            xa;
        this.za ? (xa = Ea(this.za), xa = xa !== Da(xa)) : xa = j;
        f = [f, e, c, h, l, o, n, C, E, Q, T, fa, aa, K, D, ia, ja, rd, sd, td, ud, vd, wd, xd, yd, zd, Ad, xa];
        e = 1;
        for (h = c = 0; h < f.length; h++) c |= f[h] && e, e <<= 1;
        this.qd = ("00000000" + c.toString(16)).slice(-8)
    };

    function Rc() {
        "postMessage" in window && Ha(r, "message", v(this.Gd, this));
        fc.call(this);
        Rb("_cbq", v(this.Uc, this))
    }
    ea(Rc, fc);
    Rc.prototype.N = function() {
        Rc.ia.N.call(this);
        var a = this.kb;
        L().u = a;
        a = this.Ca;
        L().t = a;
        this.Nd = new Qc(this.k, this.wb);
        this.Kb = i;
        Sb(this.k);
        var a = !!this.k[Nb],
            b = $b(!!this.k[Ob] && a);
        F(this.k, "pingServer", "ping.chartbeat.net");
        F(this.k, Pb, document.title);
        F(this.k, B, b);
        this.k[A] = this.k[A] ? I(this.k[A]) : Yb(a);
        this.ka = x(b);
        this.k[B] = x(this.k[B]);
        this.nd = xb(y, "c", this.Td, this);
        this.od = xb(y, "r", this.Ud, this);
        this.Na = i
    };
    Rc.prototype.kd = function(a) {
        this.Kb = a
    };
    Rc.prototype.fb = function() {
        this.q.update("_chartbeat4", ["t=" + this.Ca, "E=" + this.la.Xa, "x=" + nc(this), "c=" + Math.round((u() - this.Ua) / 600) / 100, "y=" + pb("Height"), "w=" + ob()].join("&"), 60, d, d, 1)
    };
    var ib = "h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,_x,_y,_z,_s,t,V,z,i,L,tz,l,,sn,C,sv,sr,sd,im".split(",");
    q = Rc.prototype;
    q.Aa = function(a) {
        this.hb++;
        var b = {};
        b.g = this.k.uid;
        b.g0 = Tb(this.k, "sections") || "No%20Section";
        b.g1 = Tb(this.k, "authors") || "No%20Author";
        b.g2 = Tb(this.k, "zone");
        b.g3 = Tb(this.k, "sponsorName");
        b.g4 = Tb(this.k, "type");
        !this.k.noCookies && this.q.isSupported() ? b.n = this.Zb : b.nc = 1;
        b.c = Math.round((u() - this.Ua) / 600) / 100;
        b.E = this.la.Xa;
        var c = nc(this);
        this.cb = Math.max(this.cb, c);
        b.x = c;
        b.m = this.cb;
        b.y = pb("Height");
        b.o = pb("Width");
        b.w = ob();
        b.b = this.gb > 0 ? this.gb : "";
        if (this.Hc && !this.k.noCookies && this.q.isSupported()) b.f =
            this.Hc;
        b[""] = Ub(this.k);
        b.t = this.Ca;
        b.V = 116;
        b.tz = (new Date).getTimezoneOffset();
        b.sn = this.hb;
        b.sv = this.te;
        b.sr = this.se;
        b.sd = this.re;
        c = this.la.ab;
        b.h = encodeURIComponent(this.k[B]);
        b.p = encodeURIComponent(this.k[A]);
        b.u = this.kb;
        b.d = encodeURIComponent(this.ka);
        b.j = Math.round((this.Oa + 2) * 15E3 / 1E3);
        b.R = 0;
        b.W = 0;
        b.I = 0;
        z.md() ? b.W = 1 : this.k.reading && +this.k.reading || c > 0 || b.c < 0.09 ? b.R = 1 : b.I = 1;
        b.e = c;
        c = ic(this);
        if (this.kc) {
            this.kc = j;
            if (c) this.Na = Sc(this);
            b.i = pc(this);
            var e = this.k.hudTrackable;
            e !== d && (b.L = e ? "1" :
                "0");
            this.k.alias && (b.PA = encodeURIComponent(this.k.alias))
        }
        if (c) {
            if (this.Na) {
                if (b.v = encodeURIComponent(this.Na.path), b.K = Tc(this.Na), this.Na.$b > 1) b.l1 = this.Na.$b
            } else b.v = jc(this);
            this.wb && (b.vp = 1)
        } else b.r = jc(this);
        c = cb(b.v);
        L().v = c;
        c = cb(b.r);
        L().r = c;
        b.A = this.Kb ? this.Kb : "";
        b._c = fb("utm_campaign", this.k.campaignTag);
        b._m = fb("utm_medium", this.k.mediumTag);
        b._x = fb("utm_source", this.k.sourceTag);
        b._y = fb("utm_content", this.k.contentTag);
        b._z = fb("utm_term", this.k.termTag);
        b.im = this.Nd.qd;
        this.k.idSync ?
            (c = [], ha(new ga, this.k.idSync, c), c = encodeURIComponent(c.join(""))) : c = "";
        b._s = c;
        b.z = qc(this);
        b.C = this.k.mobileApp ? 1 : "";
        b.KK = a ? Tc(a) : "";
        b.l = Xb(this.q) ? 1 : "";
        this.la.ab = 0;
        this.ib(Oa() + "//" + this.k.pingServer + "/ping?" + hb(b))
    };
    q.Gd = function(a) {
        var b = this.k,
            c = b.playerdomain || this.ka;
        if (ta(a.origin) === ta(c))
            if (c = a.data, Ka(c) && c.indexOf("cbqpush::") === 0) a = c.split("::"), a.length == 3 && (a = a.slice(1), a[0].indexOf("_") === 0 && this.Uc(a));
            else if (c == "cbdata?") {
            var c = "&u=" + J("u"),
                e = "&t=" + J("t"),
                f = "&v=" + J("v"),
                h = "&r=" + J("r"),
                b = "domain=" + encodeURIComponent(b[B]) + "&uid=" + encodeURIComponent(b.uid) + "&path=" + encodeURIComponent(b[A]) + "&title=" + pc(this) + "&referrer=" + jc(this) + "&internal=" + (ic(this) ? "1" : "0") + "&subdomain=" + encodeURIComponent(this.ka) +
                c + e + f + h + "&utoken=" + this.kb;
            a.source.postMessage(b, "*")
        }
    };
    q.Uc = function(a) {
        var b = a[0],
            a = a[1];
        if (b === "_demo" && this.k._demo) this.k._demo = this.k._demo + "%2C" + a;
        else if (a !== this.k[b] && (this.k[b] = a, this.Oa = 0, this.hb > 0 && !this.sb)) {
            var c = this.hb,
                e = this;
            this.sb = $a(function() {
                e.sb = i;
                e.hb === c && e.Aa()
            }, 1E3)
        }
    };

    function Uc(a) {
        a = a.replace(/-{2,}/g, "-");
        a = jb(a);
        a.pathname = I(a.pathname);
        return a
    }
    q.Td = function(a) {
        Vc(this, a, "c")
    };
    q.Ud = function(a) {
        Vc(this, a, "r")
    };

    function Vc(a, b, c) {
        if (a.mc && u() - a.Ua >= a.xb) a.terminate();
        else {
            var e = b.href || "",
                e = Uc(e);
            if (e.protocol.indexOf("http") === 0) {
                var f = e.hostname !== r.location.hostname,
                    e = kb(e),
                    h = qb(b, function(a) {
                        return a.id
                    }),
                    l = Dc(b, h),
                    o = "";
                a.k.moduleAttribute && (o = (o = mb(b, a.k.moduleAttribute)) ? o.getAttribute(a.k.moduleAttribute) : "", o = o.replace(/::/g, "-").substr(0, 40));
                h ? (l && (l = "/" + l), l = "*[@id='" + h.id + "']" + l, h = Dc(b)) : h = l;
                l = pa(l);
                h = pa(h);
                b = sc(b);
                c = {
                    left: b.x,
                    top: b.y,
                    path: a.k[A],
                    href: e,
                    vc: l,
                    Jb: h,
                    uc: "",
                    oc: c,
                    $b: 0,
                    Bd: a.k[B],
                    Yb: o
                };
                a.Aa(c);
                f || a.q.update("_chartbeat5", Wc(c), 60, j, d, 3, function(a) {
                    a = a.split(",");
                    return a[2] + "," + a[3]
                })
            }
        }
    }

    function Tc(a) {
        return [a.left, a.top, a.vc, encodeURIComponent(a.uc), a.oc, encodeURIComponent(a.href), a.Jb, a.Yb].join("::")
    }

    function Wc(a) {
        var b = encodeURIComponent(a.uc),
            b = b.replace(/-/g, "%2D");
        b.length > 512 && (b = "");
        return [a.left, a.top, encodeURIComponent(a.path), encodeURIComponent(a.href), a.vc, b, a.oc, a.Jb, encodeURIComponent(a.Bd), a.Yb].join(",")
    }

    function Sc(a) {
        var b = a.q.D("_chartbeat5");
        if (!b) return i;
        var c = b.split("::"),
            b = c.length,
            e, f = i,
            h, l = Uc(r.location.href),
            o = kb(l);
        t(c, function(a, b) {
            var c = a.split(","),
                l = decodeURIComponent(c[3]);
            if (l) {
                l = Ga(o, l);
                if (l === 0) return e = c, f = b, j;
                else if (l === i) return g;
                if (h === d || l < h) h = l, e = c, f = b
            }
        });
        if (f === i) return i;
        c.splice(f, 1);
        a.q.create("_chartbeat5", c.join("::"), 60);
        (a = e[5]) ? (a = a.replace(/%2D/g, "-"), a = decodeURIComponent(a)) : a = "";
        return {
            left: e[0],
            top: e[1],
            path: decodeURIComponent(e[2]),
            href: decodeURIComponent(e[3]),
            vc: e[4] || "",
            uc: "",
            Jb: e.length > 7 ? e[7] : "",
            oc: e.length > 6 ? e[6] : "c",
            $b: b,
            Yb: e[9] ? e[9] : ""
        }
    }
    q.terminate = function() {
        yb(y, this.nd);
        yb(y, this.od);
        ab(this.sb);
        this.sb = i;
        Rc.ia.terminate.call(this)
    };
    var N = "ct",
        O = "s1";

    function P(a) {
        this.a = a;
        this.F = this.G = j;
        this.B = u();
        this.ha()
    }
    q = P.prototype;
    q.ha = function() {
        this.a.currentTime() > 0 && !this.a.paused && !this.a.ended && this.fa();
        this.a.on("play", v(this.fa, this));
        this.a.on("dispose", v(this.Wd, this));
        this.a.ready(v(this.oa, this))
    };
    q.oa = function() {
        this.G = g
    };
    q.fa = function() {
        this.F = g
    };
    q.Wd = function() {
        var a = r._cbv;
        a && a.push && a.push(["removePlayer", this.a])
    };
    q.O = function() {
        return this.G && this.M() !== ""
    };
    q.Sb = function() {
        var a;
        this.a.cb_configs && this.a.cb_configs[B] ? a = this.a.cb_configs[B] : !a && r._sf_async_config && r._sf_async_config[B] && (a = r._sf_async_config[B]);
        return a
    };
    q.Tb = function() {
        var a;
        this.a.cb_configs && this.a.cb_configs.uid ? a = this.a.cb_configs.uid : !a && r._sf_async_config && r._sf_async_config.uid && (a = r._sf_async_config.uid);
        return a
    };
    q.M = function() {
        var a = this.a.mediainfo;
        return (a && a.hasOwnProperty("name") ? a.name : this.a.el().getAttribute("title")) || ""
    };
    q.J = function() {
        var a = this.a.mediainfo;
        return (a && a.hasOwnProperty("id") ? a.id : this.a.el().attributes["data-video-id"] && this.a.el().attributes["data-video-id"].value ? this.a.el().attributes["data-video-id"].value : this.a.src()) || ""
    };
    q.U = function() {
        return N
    };
    q.P = p("");
    q.ca = function() {
        var a = this.a.duration();
        return Va(a)
    };
    q.H = function() {
        return !this.F ? O : this.a.ended() ? "s4" : this.a.paused() ? "s3" : "s2"
    };
    q.X = function() {
        var a = this.a.currentTime();
        return Va(a)
    };
    q.T = p(-1);
    q.ba = function() {
        var a = this.a.mediainfo;
        return (a && a.hasOwnProperty("thumbnail") ? a.thumbnail : this.a.poster()) || ""
    };
    q.Z = k();
    q.S = k();
    q.da = function() {
        return Ua(this.B)
    };
    q.$ = function() {
        var a = [];
        this.a.cb_configs && this.a.cb_configs.sections ? a = this.a.cb_configs.sections.split(",") : a.length == 0 && r._sf_async_config && r._sf_async_config.sections && (a = r._sf_async_config.sections.split(","));
        if (a.length > 0 && a[0] !== "") return a
    };
    q.Q = function() {
        var a = [];
        this.a.cb_configs && this.a.cb_configs.authors ? a = this.a.cb_configs.authors.split(",") : a.length == 0 && r._sf_async_config && r._sf_async_config.authors && (a = r._sf_async_config.authors.split(","));
        if (a.length > 0 && a[0] !== "") return a
    };
    q.aa = p("BCN");
    P.prototype.getStrategyName = P.prototype.aa;
    P.prototype.isReady = P.prototype.O;
    P.prototype.getHost = P.prototype.Sb;
    P.prototype.getUid = P.prototype.Tb;
    P.prototype.getTitle = P.prototype.M;
    P.prototype.getVideoPath = P.prototype.J;
    P.prototype.getContentType = P.prototype.U;
    P.prototype.getAdPosition = P.prototype.P;
    P.prototype.getTotalDuration = P.prototype.ca;
    P.prototype.getState = P.prototype.H;
    P.prototype.getCurrentPlayTime = P.prototype.X;
    P.prototype.getBitrate = P.prototype.T;
    P.prototype.getThumbnailPath = P.prototype.ba;
    P.prototype.getPlayerType = P.prototype.Z;
    P.prototype.getAutoplayType = P.prototype.S;
    P.prototype.getViewStartTime = P.prototype.da;
    P.prototype.getSections = P.prototype.$;
    P.prototype.getAuthors = P.prototype.Q;
    P.verify = function(a) {
        return a.controlBar !== d || a.cb_plugin_version !== d
    };

    function R(a) {
        this.Ya = this.ka = d;
        this.G = j;
        this.Tc = this.Bc = -1;
        this.ta = i;
        this.a = a;
        this.F = j;
        this.fc = g;
        this.B = u();
        this.hc = "";
        for (var a = window.experienceJSON.data.configuredProperties.plugins.list.split(" "), b = a.length, c = 0; c < b; c++) {
            var e = a[c];
            if ((e.indexOf("chartbeat") >= 0 || e.indexOf("localhost") >= 0) && e.indexOf(".js") >= 0) {
                this.hc = e;
                break
            }
        }
        if (this.hc) {
            a = eb(this.hc);
            if (this.ka = a[B]) this.ka = this.ka.replace(/^video@/, "");
            this.Ya = a.uid
        }
        a = window.brightcove;
        this.a = a.api.getExperience();
        b = this.a.getModule(a.api.modules.APIModules.EXPERIENCE);
        b.getReady() ? this.Rc() : b.addEventListener(a.player.events.ExperienceEvent.TEMPLATE_READY, s(this.Rc, this))
    }
    q = R.prototype;
    q.Rc = function() {
        var a = window.brightcove,
            b = this.a.getModule(a.api.modules.APIModules.VIDEO_PLAYER),
            c = this;
        b.getVideoDuration(function(a) {
            c.Bc = Math.round(a)
        });
        b.getCurrentVideo(function(a) {
            c.ta = a
        });
        a = a.api.events.MediaEvent;
        b.addEventListener(a.PROGRESS, s(this.de, this));
        b.addEventListener(a.STOP, s(this.fe, this));
        b.addEventListener(a.COMPLETE, s(this.Vd, this));
        b.addEventListener(a.BEGIN, s(this.fa, this));
        this.G = g
    };
    q.de = function(a) {
        this.Tc = a.position;
        this.va = this.fc = j
    };
    q.fe = function() {
        this.fc = g
    };
    q.Vd = function() {
        this.va = g
    };
    q.fa = function() {
        this.va = j;
        if (!this.F) this.F = g
    };
    q.O = m("G");
    q.M = function() {
        var a = "";
        this.ta && (a = this.ta.displayName);
        return a
    };
    q.J = function() {
        var a = "";
        this.ta && (a = "video@" + this.ka + "/" + this.ta.id);
        return a
    };
    q.U = function() {
        return N
    };
    q.P = p("");
    q.ca = m("Bc");
    q.H = function() {
        return !this.F ? O : this.va ? "s4" : this.fc ? "s3" : "s2"
    };
    q.X = function() {
        return Va(this.Tc)
    };
    q.T = p(-1);
    q.ba = function() {
        var a = "";
        this.ta && (a = this.ta.thumbnailURL);
        return a
    };
    q.Z = k();
    q.da = function() {
        return isNaN(this.B) ? 0 : Sa(this.B)
    };
    q.Q = k();
    q.$ = function() {
        var a;
        this.ta && (a = this.ta.tags);
        return a
    };
    q.S = p("unkn");
    q.aa = p("BC");
    q.Sb = m("ka");
    q.Tb = m("Ya");
    R.prototype.isReady = R.prototype.O;
    R.prototype.getTitle = R.prototype.M;
    R.prototype.getVideoPath = R.prototype.J;
    R.prototype.getContentType = R.prototype.U;
    R.prototype.getAdPosition = R.prototype.P;
    R.prototype.getTotalDuration = R.prototype.ca;
    R.prototype.getState = R.prototype.H;
    R.prototype.getCurrentPlayTime = R.prototype.X;
    R.prototype.getBitrate = R.prototype.T;
    R.prototype.getThumbnailPath = R.prototype.ba;
    R.prototype.getPlayerType = R.prototype.Z;
    R.prototype.getViewStartTime = R.prototype.da;
    R.prototype.getAuthors = R.prototype.Q;
    R.prototype.getSections = R.prototype.$;
    R.prototype.getAutoplayType = R.prototype.S;
    R.verify = function(a) {
        return a === window.brightcove
    };
    R.prototype.getStrategyName = R.prototype.aa;
    R.prototype.getHost = R.prototype.Sb;
    R.prototype.getUid = R.prototype.Tb;

    function S(a) {
        this.a = a;
        this.F = this.G = j;
        this.B = u();
        this.Lc = this.ua = this.Ba = d;
        this.Ha = this.Ga = "";
        this.Xb = d;
        this.ha()
    }
    var Xc = /url\(['"]?([^'"\)]*)['"]?\)/;
    q = S.prototype;
    q.Rb = function() {
        var a = this.Lc = this.J();
        if (this.a.conf && (this.Ha = this.a.conf.title ? this.a.conf.title : "", this.Ga = this.a.conf.poster ? this.a.conf.poster : "", this.Ha && this.Ga)) return g;
        var b = lb("name", "param"),
            c = d;
        t(b, function(b) {
            if (b.attributes.name && b.attributes.name.value === "flashvars" && b.value.indexOf(a) !== -1) return c = b, j
        });
        c === d && (b = lb("src", "video"), t(b, function(b) {
            if (b.attributes.src.value && a.indexOf(b.attributes.src.value) != -1) return c = b, j
        }));
        b = mb(c, "data-swf") || mb(c, "poster");
        if (b === j) return j;
        this.Ga = b.attributes.poster && b.attributes.poster.value;
        if (!this.Ga) {
            var e = b.style.background;
            if (e && (e = e.match(Xc))) this.Ga = e[1]
        }
        this.Ha = b.title;
        if (this.Xb !== d) clearInterval(this.Xb), this.G = g;
        return g
    };

    function Yc(a) {
        if (a.Lc !== a.J()) a.Ga = "", a.Ha = "", a.Rb()
    }
    q.ha = function() {
        this.a.ready ? this.oa() : this.a.bind("ready", s(this.oa, this));
        this.a.bind("resume", s(this.fa, this));
        this.a.playing && this.fa()
    };
    q.oa = function() {
        this.Rb() === j ? this.Xb = setInterval(s(this.Rb, this), 1E3) : this.G = g
    };
    q.fa = function() {
        if (!this.F) this.F = g
    };
    q.O = m("G");
    q.M = function() {
        Yc(this);
        return this.Ha
    };
    q.J = function() {
        return this.a.video.url || this.a.video.src
    };
    q.U = function() {
        return N
    };
    q.P = p("");
    q.ca = function() {
        return this.a.video.duration && this.a.video.duration * 1E3
    };
    q.H = function() {
        return !this.F ? O : this.a.Ie ? "s4" : this.a.paused ? "s3" : "s2"
    };
    q.X = function() {
        return Va(this.a.video.time)
    };
    q.T = p(-1);
    q.ba = function() {
        Yc(this);
        return this.Ga
    };
    q.Z = k();
    q.S = k();
    q.da = function() {
        return isNaN(this.B) ? 0 : Sa(this.B)
    };
    q.$ = m("Ba");
    q.Q = m("ua");
    q.aa = p("FP");
    S.prototype.getStrategyName = S.prototype.aa;
    S.prototype.isReady = S.prototype.O;
    S.prototype.getTitle = S.prototype.M;
    S.prototype.getVideoPath = S.prototype.J;
    S.prototype.getContentType = S.prototype.U;
    S.prototype.getAdPosition = S.prototype.P;
    S.prototype.getTotalDuration = S.prototype.ca;
    S.prototype.getState = S.prototype.H;
    S.prototype.getCurrentPlayTime = S.prototype.X;
    S.prototype.getBitrate = S.prototype.T;
    S.prototype.getThumbnailPath = S.prototype.ba;
    S.prototype.getPlayerType = S.prototype.Z;
    S.prototype.getAutoplayType = S.prototype.S;
    S.prototype.getViewStartTime = S.prototype.da;
    S.prototype.getSections = S.prototype.$;
    S.prototype.getAuthors = S.prototype.Q;
    S.verify = function(a) {
        return window.flowplayer && a.engine && a.engine.engineName
    };

    function U(a) {
        this.a = a;
        this.Ib = this.F = this.G = j;
        this.B = u();
        this.ua = this.Ba = d;
        this.ha()
    }
    q = U.prototype;
    q.ha = function() {
        this.a.readyState > 0 && this.oa();
        this.a.currentTime > 0 && !this.a.paused && !this.a.ended && this.fa();
        this.a.addEventListener("canplay", v(this.oa, this));
        var a = v(this.fa, this);
        this.a.addEventListener("playing", a);
        this.a.addEventListener("webkitbeginfullscreen", a);
        this.a.addEventListener("webkitendfullscreen", v(this.le, this))
    };
    q.oa = function() {
        this.G = g
    };
    q.fa = function() {
        this.F = g;
        this.Ib = j
    };
    q.le = function() {
        this.Ib = g
    };
    q.O = m("G");
    q.M = function() {
        return this.a.attributes.title && this.a.attributes.title.value || ""
    };
    q.J = function() {
        return this.a.currentSrc || ""
    };
    q.U = function() {
        return N
    };
    q.P = p("");
    q.ca = function() {
        return Va(this.a.duration)
    };
    q.H = function() {
        return !this.F ? O : this.a.ended || this.Ib && this.a.currentTime == this.a.duration ? "s4" : this.a.paused || this.Ib ? "s3" : "s2"
    };
    q.X = function() {
        return Va(this.a.currentTime)
    };
    q.T = p(-1);
    q.ba = function() {
        return this.a.poster || ""
    };
    q.Z = k();
    q.S = function() {
        return this.a.autoplay ? "auto" : "man"
    };
    q.da = function() {
        return Ua(this.B)
    };
    q.$ = m("Ba");
    q.Q = m("ua");
    q.aa = p("H5");
    U.prototype.getStrategyName = U.prototype.aa;
    U.prototype.isReady = U.prototype.O;
    U.prototype.getTitle = U.prototype.M;
    U.prototype.getVideoPath = U.prototype.J;
    U.prototype.getContentType = U.prototype.U;
    U.prototype.getAdPosition = U.prototype.P;
    U.prototype.getTotalDuration = U.prototype.ca;
    U.prototype.getState = U.prototype.H;
    U.prototype.getCurrentPlayTime = U.prototype.X;
    U.prototype.getBitrate = U.prototype.T;
    U.prototype.getThumbnailPath = U.prototype.ba;
    U.prototype.getPlayerType = U.prototype.Z;
    U.prototype.getAutoplayType = U.prototype.S;
    U.prototype.getViewStartTime = U.prototype.da;
    U.prototype.getSections = U.prototype.$;
    U.prototype.getAuthors = U.prototype.Q;
    U.verify = function(a) {
        var b = a instanceof HTMLElement && a.nodeName === "VIDEO",
            a = a.getAttribute && a.getAttribute("data-account") !== i;
        return b && !a
    };

    function V(a) {
        this.a = a;
        this.F = this.va = this.G = j;
        this.B = u();
        this.bb = j;
        this.ha()
    }
    q = V.prototype;
    q.ha = function() {
        function a(a, f) {
            f = s(f, c);
            if (ba(b.on) == "function") b.on(a, f);
            else {
                var h = "on" + a.substr(0, 1).toUpperCase() + a.substr(1);
                if (ba(b[h]) == "function") b[h](f)
            }
        }
        var b = this.a,
            c = this;
        a("ready", this.oa);
        a("time", this.he);
        a("complete", this.ie);
        a("adStarted", this.Qa);
        a("adPlay", this.Qa);
        a("adImpression", this.Qa);
        a("adTime", this.Qa);
        a("adComplete", this.ac);
        a("adSkipped", this.ac);
        a("adError", this.ac)
    };
    q.oa = function() {
        this.G = g
    };
    q.he = function() {
        this.va = j;
        this.F = g;
        this.bb = j
    };
    q.ie = function() {
        this.va = g
    };
    q.Qa = function() {
        this.bb = this.F = g
    };
    q.ac = function() {
        this.bb = j
    };
    q.O = function() {
        this.a.getState();
        return this.G || this.a.getState() !== d
    };
    q.M = function() {
        var a = Zc(this);
        return !a ? "" : a.title
    };

    function Zc(a) {
        if (a.a.getPlaylistIndex === d) return a.a.getPlaylistItem();
        var b = a.a.getPlaylist();
        if (!b) return i;
        var c = b.length,
            a = a.a.getPlaylistIndex();
        return c === 0 || c <= a ? i : b[a]
    }
    q.J = function() {
        var a = Zc(this);
        return !a ? "" : a.mediaid || a.file
    };
    q.U = function() {
        return this.bb ? "ad" : N
    };
    q.P = p("");
    q.ca = function() {
        var a = this.a.getDuration();
        if (a > 0) return Math.round(a * 1E3)
    };
    q.H = function() {
        if (!this.F) return O;
        if (this.bb) return "s2";
        if (this.va) return "s4";
        var a = this.a.getState();
        return a && a.toUpperCase() === "PAUSED" ? "s3" : "s2"
    };
    q.X = function() {
        var a = this.a.getPosition();
        return Va(a)
    };
    q.T = p(-1);
    q.ba = function() {
        var a = Zc(this);
        return !a ? "" : a.image
    };
    q.Z = k();
    q.da = function() {
        return isNaN(this.B) ? 0 : Sa(this.B)
    };
    q.Q = k();
    q.$ = k();
    q.S = p("unkn");
    q.aa = p("JW");
    V.prototype.getStrategyName = V.prototype.aa;
    V.prototype.isReady = V.prototype.O;
    V.prototype.getTitle = V.prototype.M;
    V.prototype.getVideoPath = V.prototype.J;
    V.prototype.getContentType = V.prototype.U;
    V.prototype.getAdPosition = V.prototype.P;
    V.prototype.getTotalDuration = V.prototype.ca;
    V.prototype.getState = V.prototype.H;
    V.prototype.getCurrentPlayTime = V.prototype.X;
    V.prototype.getBitrate = V.prototype.T;
    V.prototype.getThumbnailPath = V.prototype.ba;
    V.prototype.getPlayerType = V.prototype.Z;
    V.prototype.getViewStartTime = V.prototype.da;
    V.prototype.getAuthors = V.prototype.Q;
    V.prototype.getSections = V.prototype.$;
    V.prototype.getAutoplayType = V.prototype.S;
    V.verify = function(a) {
        return w(a.id) && w(a.registerPlugin)
    };

    function W(a) {
        this.a = a;
        this.ed = "";
        this.ja = O;
        this.wa = N;
        this.ra = "";
        this.B = u();
        this.ha()
    }
    q = W.prototype;
    q.ha = function() {
        this.a.kBind("playerStateChange.cb", s(this.ke, this));
        this.a.kBind("playerUpdatePlayhead.cb", s(this.ce, this));
        this.a.kBind("playerPlayEnd.cb", s(this.je, this));
        this.a.kBind("adStart.cb", s(this.Qa, this));
        this.a.kBind("adEnd.cb", s(this.Qd, this));
        this.a.kBind("switchingChangeComplete.cb", s(this.ge, this))
    };
    q.ke = function(a) {
        switch (a) {
            case "playing":
                this.ja = "s2";
                break;
            case "buffering":
                this.ja = "s3";
                break;
            case "paused":
                this.ja = "s3"
        }
    };
    q.ce = function() {
        this.ja = "s2";
        this.a.kUnbind("playerUpdatePlayhead.cb")
    };
    q.je = function() {
        this.ja = "s4"
    };
    q.Qa = function(a) {
        this.wa = "ad";
        switch (a) {
            case "pre":
                this.ra = "a1";
                break;
            case "post":
                this.ra = "a3";
                break;
            case "mid":
                this.ra = "a2";
                break;
            case "main":
                this.ra = "a5"
        }
    };
    q.Qd = function() {
        this.wa = N
    };
    q.ge = function(a, b) {
        this.rd = b
    };
    q.O = function() {
        return this.a.evaluate("{mediaProxy.entry.name}") != i
    };
    q.M = function() {
        return this.a.evaluate("{mediaProxy.entry.name}")
    };
    q.J = function() {
        if (!this.O()) return this.ed;
        var a = this.a.evaluate("{mediaProxy.entry.id}");
        return (this.ed = a) || ""
    };
    q.U = m("wa");
    q.P = m("ra");
    q.ca = function() {
        var a = this.a.evaluate("{duration}");
        return Va(a)
    };
    q.H = m("ja");
    q.X = function() {
        var a = this.a.evaluate("{video.player.currentTime}");
        return Va(a)
    };
    q.T = m("rd");
    q.ba = function() {
        return this.a.evaluate("{mediaProxy.entry.thumbnailUrl}") || ""
    };
    q.Z = k();
    q.S = function() {
        var a = this.a.evaluate("{configProxy.flashvars.autoPlay}"),
            b = this.a.evaluate("{configProxy.flashvars.playlistAPI.autoContinue}"),
            c = this.a.evaluate("{playlistAPI.dataProvider.selectedIndex}");
        return b && c > 0 ? "cont" : a ? "auto" : "man"
    };
    q.da = function() {
        return isNaN(this.B) ? 0 : Ua(this.B)
    };
    q.$ = function() {
        var a = this.a.evaluate("{mediaProxy.entry.tags}");
        if (a) return a.split(",")
    };
    q.Q = function() {
        var a = this.a.evaluate("{mediaProxy.entry.creatorId}");
        if (a) return [encodeURIComponent(a)]
    };
    q.aa = p("KT");
    W.prototype.getStrategyName = W.prototype.aa;
    W.prototype.isReady = W.prototype.O;
    W.prototype.getTitle = W.prototype.M;
    W.prototype.getVideoPath = W.prototype.J;
    W.prototype.getContentType = W.prototype.U;
    W.prototype.getAdPosition = W.prototype.P;
    W.prototype.getTotalDuration = W.prototype.ca;
    W.prototype.getState = W.prototype.H;
    W.prototype.getCurrentPlayTime = W.prototype.X;
    W.prototype.getBitrate = W.prototype.T;
    W.prototype.getThumbnailPath = W.prototype.ba;
    W.prototype.getPlayerType = W.prototype.Z;
    W.prototype.getAutoplayType = W.prototype.S;
    W.prototype.getViewStartTime = W.prototype.da;
    W.prototype.getSections = W.prototype.$;
    W.prototype.getAuthors = W.prototype.Q;
    W.verify = function(a) {
        return typeof a.kBind == "function"
    };

    function X(a) {
        this.xc = d;
        this.a = a;
        this.Kc = d;
        this.G = j;
        this.Ja = d;
        this.F = j;
        this.ua = this.Ba = this.B = d;
        this.xc = r.OO;
        this.Kc = this.a.mb;
        this.B = u();
        this.ha()
    }
    q = X.prototype;
    q.ha = function() {
        var a = this.Kc,
            b = this.xc.EVENTS;
        a.subscribe(b.CONTENT_TREE_FETCHED, "OoyalaStrategyPlugin", s(this.oa, this));
        a.subscribe(b.WILL_PLAY_ADS, "OoyalaStrategyPlugin", s(this.Sd, this));
        a.subscribe(b.PLAYING, "OoyalaStrategyPlugin", s(this.fa, this));
        a.subscribe(b.ADS_PLAYED, "OoyalaStrategyPlugin", s(this.Rd, this));
        a.subscribe(b.METADATA_FETCHED, "OoyalaStrategyPlugin", s(this.be, this));
        a.subscribe(b.EMBED_CODE_CHANGED, "OoyalaStrategyPlugin", s(this.Xd, this))
    };
    q.oa = function() {
        this.G = g
    };
    q.Sd = function() {
        var a = this.a.getPlayheadTime(),
            b = this.a.getDuration();
        isNaN(a) && (a = 0);
        this.Ja = a === 0 ? "a1" : $c(a, b) ? "a3" : "a2"
    };
    q.fa = function() {
        this.F = g
    };
    q.Rd = function() {
        this.Ja = d
    };
    q.be = k();
    q.O = function() {
        var a = this.a.getState();
        if (a === "ready" || a === "playing" || a === "paused") this.G = g;
        return this.G
    };
    q.M = function() {
        var a = this.a.getItem();
        return a ? a.title : ""
    };
    q.J = function() {
        var a = this.a.getEmbedCode && this.a.getEmbedCode();
        if (a) return a;
        a = this.a.getItem() || {};
        return a.embed_code || a.embedCode || this.a.embedCode || ""
    };
    q.U = function() {
        return this.Ja === d ? N : "ad"
    };
    q.P = function() {
        return this.Ja ? this.Ja : ""
    };
    q.ca = function() {
        var a = this.a.getItem(),
            a = a && a.duration || this.a.getDuration() * 1E3;
        return a === -1 || !isFinite(a) ? -1 : a
    };
    q.H = function() {
        if (!this.F) return O;
        if (this.a.getState() === "paused") return "s3";
        var a = this.a.getPlayheadTime(),
            b = this.a.getDuration();
        return $c(a, b) ? "s4" : "s2"
    };

    function $c(a, b) {
        return a === b || Math.floor(a) === Math.floor(b) || Math.ceil(a) === Math.ceil(b) || Math.ceil(a) === Math.floor(b) || Math.floor(a) === Math.ceil(b)
    }
    q.Xd = function() {
        this.Ja = d
    };
    q.X = function() {
        var a = this.a.getPlayheadTime();
        return a === -1 || isNaN(a) ? -1 : a * 1E3
    };
    q.T = function() {
        var a = this.a.getCurrentBitrate && this.a.getCurrentBitrate();
        return a ? a.bitrate : 0
    };
    q.ba = function() {
        var a = this.a.getItem();
        return !a ? "" : a.promo || a.promo_image || a.thumbnail_image
    };
    q.Z = k();
    q.S = k();
    q.da = function() {
        return isNaN(this.B) ? 0 : Ua(this.B || 0)
    };
    q.$ = m("Ba");
    q.Q = m("ua");
    q.aa = p("OO");
    X.prototype.getStrategyName = X.prototype.aa;
    X.prototype.isReady = X.prototype.O;
    X.prototype.getTitle = X.prototype.M;
    X.prototype.getVideoPath = X.prototype.J;
    X.prototype.getContentType = X.prototype.U;
    X.prototype.getAdPosition = X.prototype.P;
    X.prototype.getTotalDuration = X.prototype.ca;
    X.prototype.getState = X.prototype.H;
    X.prototype.getCurrentPlayTime = X.prototype.X;
    X.prototype.getBitrate = X.prototype.T;
    X.prototype.getThumbnailPath = X.prototype.ba;
    X.prototype.getPlayerType = X.prototype.Z;
    X.prototype.getAutoplayType = X.prototype.S;
    X.prototype.getViewStartTime = X.prototype.da;
    X.prototype.getSections = X.prototype.$;
    X.prototype.getAuthors = X.prototype.Q;
    X.verify = function(a) {
        return a.hasOwnProperty("mb") && a.hasOwnProperty("subscribe") && a.hasOwnProperty("modules") && a.hasOwnProperty("isAdPlaying")
    };

    function Y(a) {
        this.a = a;
        this.ga = i;
        this.$a = "";
        this.ja = O;
        this.wa = N;
        this.ra = "";
        this.B = u();
        this.a.controller.plugInLoaded && this.a.controller.plugInLoaded(this)
    }
    q = Y.prototype;
    q.Md = function(a) {
        this.ha(a.controller)
    };
    q.ha = function(a) {
        a.addEventListener("OnLoadRelease", v(this.Pc, this));
        a.addEventListener("OnLoadReleaseUrl", v(this.Pc, this));
        a.addEventListener("OnReleaseStart", v(this.ee, this));
        a.addEventListener("OnMediaPlay", v(this.Zd, this));
        a.addEventListener("OnMediaStart", v(this.ae, this));
        a.addEventListener("OnMediaPause", v(this.dc, this));
        a.addEventListener("OnMediaComplete", v(this.Yd, this));
        a.addEventListener("OnMediaError", v(this.dc, this));
        a.addEventListener("OnMediaBuffer", v(this.dc, this));
        a.addEventListener("OnMediaPlaying",
            v(this.$d, this))
    };
    q.Pc = function(a) {
        if (a.data && a.data.title) this.ga = a.data;
        if (a.data && a.data.guid) this.$a = a.data.guid
    };
    q.ee = function(a) {
        t(a.data.clips, v(function(a) {
            if (a = a.baseClip.guid) return this.$a = a, j
        }, this));
        if (this.$a && a.data.release && a.data.release.title) this.ga = a.data.release
    };
    q.Zd = function() {
        this.ja = "s2"
    };
    q.ae = function(a) {
        this.ja = "s2";
        a = a.data.baseClip;
        a.isAd ? (this.wa = "ad", this.ra = a.isMid ? "a2" : "a1") : (this.wa = N, this.ra = "")
    };
    q.dc = function() {
        if (this.ja != O) this.ja = "s3"
    };
    q.Yd = function() {
        this.ja = "s4"
    };
    q.$d = function(a) {
        this.wd = a.currentTime
    };
    q.O = function() {
        return this.ga != i
    };
    q.M = function() {
        return this.ga.title
    };
    q.J = function() {
        return !this.$a ? "" : this.$a
    };
    q.U = m("wa");
    q.P = m("ra");
    q.ca = function() {
        return this.ga.duration
    };
    q.H = m("ja");
    q.X = m("wd");
    q.T = function() {
        return this.ga.bitrate
    };
    q.ba = function() {
        return this.ga && this.ga.defaultThumbnailUrl ? this.ga.defaultThumbnailUrl : this.ga.pid ? "http://link.theplatform.com/s/ngc/" + this.ga.pid + "?format=poster&height=70&width=95" : ""
    };
    q.Z = k();
    q.S = k();
    q.da = function() {
        return isNaN(this.B) ? 0 : this.B === d ? 0 : u() - this.B
    };
    q.$ = function() {
        var a = this.ga.keywords ? this.ga.keywords.split(",") : [],
            b = [];
        t(this.ga.categories ? this.ga.categories : [], function(a) {
            b.push(encodeURIComponent(a.name))
        });
        t(a, function(a) {
            b.push(encodeURIComponent(a.trim()))
        });
        return b
    };
    q.Q = k();
    q.aa = p("TP");
    Y.prototype.initialize = Y.prototype.Md;
    Y.prototype.getStrategyName = Y.prototype.aa;
    Y.prototype.isReady = Y.prototype.O;
    Y.prototype.getTitle = Y.prototype.M;
    Y.prototype.getVideoPath = Y.prototype.J;
    Y.prototype.getContentType = Y.prototype.U;
    Y.prototype.getAdPosition = Y.prototype.P;
    Y.prototype.getTotalDuration = Y.prototype.ca;
    Y.prototype.getState = Y.prototype.H;
    Y.prototype.getCurrentPlayTime = Y.prototype.X;
    Y.prototype.getBitrate = Y.prototype.T;
    Y.prototype.getThumbnailPath = Y.prototype.ba;
    Y.prototype.getPlayerType = Y.prototype.Z;
    Y.prototype.getAutoplayType = Y.prototype.S;
    Y.prototype.getViewStartTime = Y.prototype.da;
    Y.prototype.getSections = Y.prototype.$;
    Y.prototype.getAuthors = Y.prototype.Q;
    Y.verify = function(a) {
        return typeof a.controller !== "undefined"
    };

    function ad(a, b) {
        this.a = a;
        this.bd = b;
        this.Ma = window.location != window.parent.location;
        this.Sc = j;
        this.ve = u();
        this.ad = "_v_";
        this.sa = {};
        fc.call(this)
    }
    ea(ad, fc);
    var bd = r.QUICK_TEST ? 1E4 : 6E4,
        cd = "autoDetect",
        dd = {
            Ee: "title",
            Fe: "videopath",
            De: "thumbnailpath"
        },
        ed = {};
    q = ad.prototype;
    q.N = function() {
        this.Zb = (this.Sa = this.q.D("_chartbeat3")) ? 0 : 1;
        this.tc = this.lc = g;
        this.Ob = j;
        this.Db = this.ic = this.Dc = this.Ea = d;
        this.Ka = 15E3;
        this.ob = d;
        this.pb = this.qb = 0;
        this.Pb = j;
        this.ne = this.rc = this.Hb = 0;
        this.jc = j;
        if (!this.Sa || this.Sa.length === 0) this.Sa = pa(hc(this), 3);
        this.q.create("_chartbeat3", this.Sa, 34128E3);
        var a;
        (a = this.bd) && La(a) ? (this.ea = new a(this.a), a = g) : a = j;
        if (a) {
            a = !!this.k[Nb];
            var b = $b(!!this.k[Ob] && a);
            F(this.k, "pingServer", "ping.chartbeat.net");
            F(this.k, Pb, document.title);
            F(this.k, B, b);
            this.k[A] =
                this.k[A] ? I(this.k[A]) : Yb(a);
            this.k[B] = x(this.k[B]);
            this.ea.getPlayerType && F(this.k, "video_type", this.ea.getPlayerType());
            this.Dc = setInterval(v(this.td, this), 1E3);
            if (this.Ma === g) this.yb = v(this.Hd, this), Ha(window, "message", this.yb), this.ob = setInterval(this.oe, 1E3);
            ad.ia.N.call(this)
        }
    };
    q.Lb = k();
    q.na = function() {
        if (this.ea) {
            if (!fd(this)) this.tc = g;
            if (!this.tc) return u() - this.Ua >= this.xb && clearInterval(this.Ea), ad.ia.na.call(this);
            if (this.ea.isReady()) this.Ob = this.tc = j, this.ic = gd(this), hd(this), this.Ea = setInterval(v(this.Nb, this), 100), ad.ia.na.call(this);
            else if (!this.Ob) {
                this.Ob = g;
                if (this.ne++ > 150) throw "Error: Video strategy never reported its ready state";
                id(this, 100)
            }
        }
    };
    q.Aa = function() {
        if (this.ea) {
            var a = this.k,
                b = this.ea,
                c = b.getState(),
                e = fd(this),
                f = this.Ma ? [] : r._cbq || (r._cbq = []),
                h = b.getViewStartTime(),
                l = jd(this),
                o = b.getAutoplayType ? b.getAutoplayType() : d,
                h = h === -1 ? -1 : h / 1E3,
                l = l ? encodeURIComponent(l) : d;
            if (!ed.path || ed.path === e || c === "s2" && ed.state !== "s2") switch (ed = {
                path: e,
                state: c
            }, f.push(["_vi", Na(kd(this))]), f.push(["_vp", e]), f.push(["_vdd", Na(ld(this))]), f.push(["_vs", b.getState()]), b.getContentType && f.push(["_vt", b.getContentType()]), b.getAdPosition && f.push(["_vap",
                b.getAdPosition()
            ]), f.push(["_vtn", Na(jd(this))]), f.push(["_vd", b.getTotalDuration()]), b.getState()) {
                case O:
                case "s2":
                case "s3":
                    f.push(["R", "1"]);
                    break;
                case "s4":
                    f.push(["R", "0"])
            }
            a = md(this) + Z("_vt", b.getContentType ? b.getContentType() : "") + Z("_vap", b.getAdPosition ? b.getAdPosition() : "") + Z("_vs", c) + Z("_vcs", this.Pb ? "1" : "0") + Z("_vbr", b.getBitrate ? b.getBitrate() : "") + Z("_vvs", h) + Z("_vpt", b.getCurrentPlayTime()) + Z("_vtn", l) + Z("_vaup", o || "unkn") + Z("_vplt", a.video_type) + Z("_vce", this.rc) + Z("c", Math.round(Sa(this.ve) /
                600) / 100) + "&W=0&R=" + (c === "s2" ? "1" : "0") + "&I=" + (c !== "s2" ? "1" : "0") + "&E=" + this.Hb + "&j=" + (this.Ka / 1E3 + 15) + nd(this) + "&tz=" + (new Date).getTimezoneOffset() + (Xb(this.q) ? "&l=1" : "") + "&_";
            this.Ma === g && t(f, function(a) {
                window.top.postMessage("cbqpush::" + a.join("::"), "*")
            });
            this.ib(a)
        }
    };

    function Z(a, b) {
        return b !== d && b !== "" ? "&" + a + "=" + b : ""
    }
    q.fb = function() {
        this.q.update("_cb_cp", this.Ca, 60, j, ",")
    };

    function nd(a) {
        var b = a.q.D("_cb_cp");
        a.q.remove("_cb_cp");
        return b ? "&D=" + b : ""
    }

    function od(a) {
        return a.k.subdomain ? a.k.subdomain : x(r.location.hostname)
    }

    function ld(a) {
        var b = a.k,
            a = a.ea,
            b = b.videodomain || a.getHost && a.getHost() || b[B];
        return "video@" + (b && b.replace(/^video@/, ""))
    }

    function fd(a) {
        var b = a.sa.videopath;
        if (b) return b;
        if (a.k.videoPathHash) {
            if (a = kd(a)) return pa(a)
        } else return a.ea.getVideoPath();
        return ""
    }

    function kd(a) {
        return a.sa.title || a.ea.getTitle()
    }

    function jd(a) {
        return a.sa.thumbnailpath || a.ea.getThumbnailPath()
    }

    function md(a) {
        var b = a.k,
            c = a.ea,
            e = c.getUid && c.getUid() || b.uid,
            f = Na(ld(a)),
            h = "",
            l = a.gb ? "&b=" + a.gb : "",
            o, n = a.k[A];
        o = a.k.useSubDomains !== j && n && n.substr(0, 1) === "/" ? od(a) + n : n;
        var n = c.getSections && c.getSections(),
            C = c.getAuthors && c.getAuthors(),
            E = b.sections ? "&g0=" + encodeURIComponent(b.sections) : "",
            Q = b.authors ? "&g1=" + encodeURIComponent(b.authors) : "",
            n = n === d || b.videoPageGroups ? E : "&g0=" + encodeURIComponent(n.join(",")),
            C = C === d || b.videoPageGroups ? Q : "&g1=" + encodeURIComponent(C.join(",")),
            Q = "",
            E = fd(a);
        if (a.Db ===
            d) a.Db = E;
        else if (E != a.Db) Q = Z("D", a.Ca), a.Ca = pa(hc(a)), a.Db = E, a.qb = 0, a.pb = 0, a.Hb = 0, a.rc = 0, a.Pb = pd(a) && !qd(a), a.lc = g;
        if (a.lc || Q) {
            if (a.Ma === j || a.Ma === g && a.Sc === g) a.lc = j;
            h = (ic(a) ? "&v=" : "&r=") + jc(a)
        }
        a.Hb += a.qb;
        a.qb = 0;
        a.rc += a.pb;
        a.pb = 0;
        hd(a);
        var T = E = "",
            fa = "",
            aa = "",
            K = "",
            D = "",
            ia = "",
            ja = "";
        if (!a.Ma === g || a.jc === g) E = "&_vi=" + pc(a), T = "&_vp=" + encodeURIComponent(o), fa = "&_vh=" + Na(od(a)), aa = "&_vdd=" + encodeURIComponent(b[B]), a.jc === g ? (K = b.u, D = b.t, ia = db(b.v), ja = db(b.r)) : (K = J("u"), D = J("t"), ia = db(J("v")), ja = db(J("r")));
        o = "";
        o = Ka(ia) ? "&_pv=" + ia : Ka(ja) ? "&_pr=" + ja : "&_pr=NA";
        ia = "&_pu=";
        ja = "&_pt=";
        ia += K ? K : "NA";
        ja += D ? D : "NA";
        K = !b.noCookies && a.q.isSupported();
        D = c.getStrategyName ? c.getStrategyName() : "";
        return Oa() + "//" + b.pingServer + "/ping?h=" + f + "&g=" + e + "&p=" + Na(fd(a)) + "&i=" + Na(kd(a)) + n + C + "&u=" + a.Sa + "&t=" + a.Ca + "&x=0&y=0&V=116" + Z("VS", D) + (K ? "&n=" + a.Zb : "&nc=1") + l + h + Q + Z("_vd", c.getTotalDuration()) + E + T + fa + ia + ja + o + aa
    }
    q.Nb = function() {
        if (pd(this) && !qd(this)) this.Pb = g;
        var a = gd(this);
        if (this.ic != a) this.ic = a, hd(this), this.na()
    };

    function hd(a) {
        var b = a.Ka;
        a.Ka = pd(a) ? a.Hb < 60 ? 5E3 : 15E3 : bd;
        b != a.Ka && id(a, a.Ka)
    }

    function id(a, b) {
        clearInterval(a.tb);
        a.Ka = b;
        a.tb = setInterval(v(a.na, a), b)
    }

    function gd(a) {
        return a.ea.getState() + a.ea.getContentType()
    }

    function pd(a) {
        return a.ea.getState() === "s2" || qd(a)
    }

    function qd(a) {
        return a.ea.getContentType() === "ad"
    }
    q.td = function() {
        pd(this) === g && (this.qb += 1, this.ea.getContentType() === N && (this.pb += 1))
    };
    q.oe = function() {
        window.parent.postMessage("cbdata?", "*")
    };
    q.Hd = function(a) {
        if (a.source === window.parent && (a = a.data, Ka(a) && a.indexOf("domain=") === 0)) {
            this.jc = g;
            var b = {
                    domain: g,
                    uid: g,
                    path: g,
                    title: g,
                    referrer: g,
                    internal: g,
                    subdomain: g,
                    token: g,
                    u: g,
                    t: g,
                    v: g,
                    r: g
                },
                c = this;
            t(a.split("&"), function(a) {
                var a = a.split("="),
                    f = a[0],
                    a = a[1];
                b[f] && (c.k[f] = decodeURIComponent(a))
            });
            Ia(window, "message", this.yb);
            clearInterval(this.ob);
            this.ob = d;
            this.Sc = g;
            this.na()
        }
    };
    q.setProperty = function(a, b) {
        var c = j,
            e = this;
        t(dd, function(f) {
            if (a.toLowerCase() == f) return e.sa[f] = b, c = g, j
        });
        return c
    };
    q.terminate = function() {
        clearInterval(this.Dc);
        clearInterval(this.ob);
        clearInterval(this.Ea);
        Ia(window, "message", this.yb);
        ad.ia.terminate.call(this)
    };
    q.ya = function() {
        ad.ia.ya.call(this);
        this.bd = this.a = this.yb = i
    };

    function $(a) {
        this.a = a;
        this.G = g;
        this.F = j;
        this.B = u();
        this.Ea = this.ua = this.Ba = d;
        this.ha()
    }
    q = $.prototype;
    q.ha = function() {
        this.Ea = setInterval(s(this.Nb, this), 100);
        var a = this.a.getPlayerState();
        (a === 1 || a === 2 || a === 0) && this.fa()
    };
    q.Nb = function() {
        if (this.a.getPlayerState() === 1) clearInterval(this.Ea), this.Ea = d, this.fa()
    };
    q.fa = function() {
        if (!this.F) this.F = g
    };

    function Bd(a) {
        var b;
        return (b = (a = a.a.getVideoUrl()) && a.match(/[?&]v=([^&]+)/), a = b) && a[1]
    }
    q.O = m("G");
    q.M = function() {
        var a = "";
        La(this.a.getVideoData) && (a = (a = this.a.getVideoData()) && a.title || "");
        return a
    };
    q.J = function() {
        return Bd(this) || this.a.getVideoUrl()
    };
    q.U = function() {
        return N
    };
    q.P = p("");
    q.ca = function() {
        var a = this.a.getDuration();
        return Ja(a) ? a * 1E3 : a
    };
    q.H = function() {
        if (!this.F) return O;
        var a = this.a.getPlayerState();
        return a === 0 ? "s4" : a === 2 ? "s3" : "s2"
    };
    q.X = function() {
        var a = this.a.getCurrentTime();
        return Va(a)
    };
    q.T = p(-1);
    q.ba = function() {
        return "http://img.youtube.com/vi/" + Bd(this) + "/default.jpg"
    };
    q.Z = k();
    q.S = k();
    q.da = function() {
        return isNaN(this.B) ? 0 : Sa(this.B)
    };
    q.$ = m("Ba");
    q.Q = m("ua");
    q.aa = p("YT");
    $.prototype.getStrategyName = $.prototype.aa;
    $.prototype.isReady = $.prototype.O;
    $.prototype.getTitle = $.prototype.M;
    $.prototype.getVideoPath = $.prototype.J;
    $.prototype.getContentType = $.prototype.U;
    $.prototype.getAdPosition = $.prototype.P;
    $.prototype.getTotalDuration = $.prototype.ca;
    $.prototype.getState = $.prototype.H;
    $.prototype.getCurrentPlayTime = $.prototype.X;
    $.prototype.getBitrate = $.prototype.T;
    $.prototype.getThumbnailPath = $.prototype.ba;
    $.prototype.getPlayerType = $.prototype.Z;
    $.prototype.getAutoplayType = $.prototype.S;
    $.prototype.getViewStartTime = $.prototype.da;
    $.prototype.getSections = $.prototype.$;
    $.prototype.getAuthors = $.prototype.Q;
    $.verify = function(a) {
        return La(a.getDuration) && La(a.getVideoUrl) && La(a.getVideoEmbedCode)
    };

    function Cd() {
        r._cbv_strategies || (r._cbv_strategies = []);
        r._cbv_strategies.push(X);
        r._cbv_strategies.push(U);
        r._cbv_strategies.push(S);
        r._cbv_strategies.push($);
        r._cbv_strategies.push(V);
        r._cbv_strategies.push(R);
        r._cbv_strategies.push(P);
        r._cbv_strategies.push(W);
        r._cbv_strategies.push(Y);
        this.sc = [];
        this.sa = [];
        this.k = r._sf_async_config || {};
        Rb("_cbv", v(this.Id, this));
        if (this.k[cd] !== j) this.Ad = bb(v(this.Gc, this), 5E3), this.Gc(), setTimeout(v(this.Fa, this), 3E4)
    }
    Cd.prototype.Id = function(a) {
        if (ba(a) == "array" && typeof a[0] == "string") {
            var b = a[0];
            if (b === "autoDetectYouTubeIframes") {
                Dd();
                return
            } else if (b === "removePlayer") {
                Ed(this, a[1]);
                return
            } else if (b === "setProps") {
                Fd(a[1]) || this.sa.push(a[1]);
                return
            }
        }
        Gd(this, a)
    };

    function Hd() {
        if (La(window.videojs) && La(window.videojs.plugin)) try {
            return window.videojs.plugin("chartbeat", function(a) {
                this.cb_configs = a;
                window._cbv.push(this)
            }), g
        } catch (a) {}
        return j
    }

    function Gd(a, b) {
        var c = j,
            e = r._cbv_strategies;
        w(window.jwplayer) && (b = La(b) ? b() : b);
        t(e, function(a) {
            if (a.verify(b)) return c = a, j
        });
        c && Id(a, b, c)
    }

    function Ed(a, b) {
        var c = a.sc,
            e = r.pSUPERFLY_video,
            f = Qa(c, function(a) {
                return b === a
            });
        f !== -1 && c.splice(f, 1);
        f = Qa(e, function(a) {
            return a.a === b
        });
        f !== -1 && e.splice(f, 1)[0].ya()
    }

    function Fd(a) {
        if (!w(a)) return j;
        var b = a.player,
            c = Ra(function(a) {
                return a.a === b
            });
        return !w(c) ? j : Jd(c, a)
    }

    function Jd(a, b) {
        var c = j;
        t(b, function(b, f) {
            if (f !== "player" && (c = a.setProperty(f, b), !c)) return c
        });
        return c
    }

    function Id(a, b, c) {
        var e = j;
        t(a.sc, function(a) {
            if (b === a) return e = g, j
        });
        if (!e) {
            c = new ad(b, c);
            r.pSUPERFLY_video.push(c);
            for (var f = a.sa.length - 1; f > -1; f--) Jd(c, a.sa[f]) && a.sa.splice(f, 1);
            c.lb();
            a.sc.push(b)
        }
    }
    Cd.prototype.Gc = function() {
        if (La(window.jwplayer) && w(window.jwplayer())) {
            this.Fa();
            for (var a = 0, b = window.jwplayer(a); w(b.id);) window._cbv.push(b), b = window.jwplayer(++a)
        } else {
            if (window.flowplayer && (a = window.flowplayer())) {
                this.Fa();
                window._cbv.push(a);
                return
            }
            window.brightcove && window.experienceJSON ? (this.Fa(), window._cbv.push(window.brightcove)) : Hd() ? this.Fa() : window.kWidget ? (this.Fa(), window.kWidget.addReadyCallback(function(a) {
                window._cbv.push(document.getElementById(a))
            })) : window.$pdk ? (this.Fa(),
                window._cbv.push(window.$pdk)) : t(document.getElementsByTagName("video"), function(a) {
                window._cbv.push(a)
            })
        }
    };
    Cd.prototype.Fa = function() {
        Za(this.Ad)
    };

    function Dd() {
        function a() {
            function a(b) {
                r._cbv.push(b.target)
            }
            var b = r.YT.Player;
            t(document.getElementsByTagName("iframe"), function(f) {
                var h = f.src,
                    l = h && h.indexOf("www.youtube.com/embed/");
                h && l >= 0 && l < 9 && new b(f, {
                    events: {
                        onReady: a
                    }
                })
            })
        }
        if (r.YT && r.YT.Player) a();
        else {
            var b = r.onYouTubeIframeAPIReady;
            r.onYouTubeIframeAPIReady = function() {
                if (b) {
                    try {
                        b.apply(r, arguments)
                    } catch (c) {}
                    a()
                }
            }
        }
    };

    function Kd(a, b) {
        return function(c, e) {
            if (!Eb) {
                a();
                var f = r._sf_async_config,
                    h = "",
                    l = f[A],
                    l = ta(l);
                /^\//.test(l) && (h = x(r.location.hostname));
                f[Qb] = Oa() + "//" + h + l;
                if (Ka(c)) f[A] = I(c), e && (f[Pb] = e);
                else if (Pa(c)) {
                    var o = ["authors", "sections", Pb, A];
                    t(c, function(a, b) {
                        if (Qa(o, function(a) {
                                return a === b
                            }) !== -1 || b.indexOf("_") === 0) f[b] = b === A ? I(a) : a
                    })
                }
                b()
            }
        }
    };
    if (!G.D("cb_optout")) {
        if (window.location == window.parent.location && !r.pSUPERFLY) {
            var Ld = new Rc,
                Md = {};
            r.pSUPERFLY = Md;
            var Nd = !!Ic;
            Md.virtualPage = Kd(function() {
                Ld.rb();
                Nd && Ic.evps()
            }, function() {
                Ld.Eb();
                Nd && Ic.svps()
            });
            Md.activity = v(Ld.kd, Ld);
            Ld.lb();
            var Od = H.Y(g);
            if (!Od ? 0 : Od.getItem("_cb_ip")) {
                var Pd = r.location;
                (!/^(.+[.])?chartbeat\.com$/.test(Pd.hostname) ? 0 : /^\/publishing\/(overlay|hud|mab)\//.test(Pd.pathname)) || Oc()
            } else Ha(r, "message", Pc)
        }
        r.pSUPERFLY_video || (r.pSUPERFLY_video = []);
        new Cd
    };
})();