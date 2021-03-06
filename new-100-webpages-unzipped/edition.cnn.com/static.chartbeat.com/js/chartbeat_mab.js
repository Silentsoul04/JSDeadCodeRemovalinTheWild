(function() {
    var k = void 0,
        m = true,
        n = null,
        o = false,
        p = this;

    function aa(a) {
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
    };

    function r(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function ba() {}

    function ca(a) {
        var b = [];
        s(new ba, a, b);
        return b.join("")
    }

    function s(a, b, c) {
        switch (typeof b) {
            case "string":
                da(b, c);
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
                if (b == n) {
                    c.push("null");
                    break
                }
                if (aa(b) == "array") {
                    var d = b.length;
                    c.push("[");
                    for (var f = "", e = 0; e < d; e++) c.push(f), s(a, b[e], c), f = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], typeof e != "function" && (c.push(d), da(f, c), c.push(":"), s(a, e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }
    var u = {
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
        ea = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function da(a, b) {
        b.push('"', a.replace(ea, function(a) {
            if (a in u) return u[a];
            var b = a.charCodeAt(0),
                f = "\\u";
            b < 16 ? f += "000" : b < 256 ? f += "00" : b < 4096 && (f += "0");
            return u[a] = f + b.toString(16)
        }), '"')
    };

    function fa(a) {
        return window.btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function(a, c) {
            return String.fromCharCode("0x" + c)
        }))
    }

    function ga(a) {
        return decodeURIComponent(window.atob(a).split("").map(function(a) {
            return "%" + ("00" + a.charCodeAt(0).toString(16)).slice(-2)
        }).join(""))
    }

    function w(a, b, c) {
        var d = Array.prototype.slice,
            f = d.call(arguments, 2);
        return function() {
            return a.apply(b, f.concat(d.call(arguments)))
        }
    }

    function A(a) {
        return typeof a !== "undefined"
    }

    function B(a) {
        return typeof a === "string"
    }

    function C() {
        return (new Date).getTime()
    }

    function D(a, b) {
        if ((!!a && a.constructor === Object) === m)
            for (var c in a) {
                if (a.hasOwnProperty(c) && b(a[c], c) === o) break
            } else {
                c = 0;
                for (var d = a.length; c < d; c++)
                    if (b(a[c], c) === o) break
            }
    }

    function ha(a, b) {
        var c;
        a: {
            c = 0;
            for (var d = a.length; c < d; c++)
                if (b(a[c])) break a;c = -1
        }
        if (c > -1) return a[c]
    }
    var ia = p.setInterval,
        E = p.clearInterval,
        ja = p.setTimeout;

    function ka(a) {
        ja(a, 0)
    }

    function la() {
        var a = A(p.XDomainRequest);
        return A(p.XMLHttpRequest) && "withCredentials" in new p.XMLHttpRequest ? new p.XMLHttpRequest : a ? new p.XDomainRequest : n
    }

    function ma(a, b, c) {
        var d = la();
        d === n ? c(n) : (na(function() {
            d.open("GET", a, m)
        }), d.onload = function() {
            d.responseText ? b(d) : c(d)
        }, d.onerror = function() {
            c(d, "onerror")
        }, d.timeout = 1E3, d.ontimeout = function() {
            c(d, "timeout")
        }, ka(function() {
            na(function() {
                d.send(n)
            })
        }))
    }

    function na(a) {
        try {
            a()
        } catch (b) {}
    };

    function oa(a) {
        var b = {};
        a && (a.charAt(0) == "?" && (a = a.substring(1)), a = a.replace(/\+/g, " "), D(a.split(/[&;]/g), function(a) {
            a = a.split("=");
            b[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
        }));
        return b
    }

    function pa(a, b) {
        return !b ? m : a === "http:" && b === "80" || a === "https:" && b === "443"
    };

    function qa() {
        var a = F;
        D(document.getElementsByTagName("script"), function(b) {
            if (typeof b.src === "string" && b.src.match(/chartbeat.js/)) return b = oa(b.src.split("?")[1]), a.uid = a.uid || b.uid, a.domain = a.domain || b.domain, o
        })
    };
    var G = {};
    G.G = function(a) {
        try {
            G.create("_cb_test", "1", 1, a);
            var b = G.b("_cb_test");
            G.remove("_cb_test", a);
            return b === "1"
        } catch (c) {
            return o
        }
    };
    G.b = function(a) {
        a += "=";
        var b = "";
        D(document.cookie.split(";"), function(c) {
            for (; c.charAt(0) === " ";) c = c.substring(1, c.length);
            if (c.indexOf(a) === 0) return b = c.substring(a.length, c.length), o
        });
        return b
    };
    G.create = function(a, b, c, d) {
        var f = p._sf_async_config;
        if (f && f.noCookies) return "";
        f = new Date;
        f.setTime(C() + c * 1E3);
        a = a + "=" + b + ("; expires=" + f.toGMTString()) + ("; path=" + d);
        return document.cookie = a
    };
    G.remove = function(a, b) {
        return G.b(a) ? G.create(a, "", -86400, b) : ""
    };
    var H = {};
    H.a = function(a) {
        var b = p._sf_async_config;
        if (!a && b && b.noCookies) return n;
        if (H.a.p !== k) return H.a.p;
        var a = C() + "",
            c, d;
        try {
            if ((d = p.localStorage).setItem(a, a), c = d.getItem(a) === a, d.removeItem(a), c) return H.a.p = d
        } catch (f) {}
        return H.a.p = n
    };
    H.b = function(a) {
        var b = H.a();
        if (!b) return "";
        var c = b.getItem(a + "_expires");
        return c && (c = +c, !isNaN(c) && C() > c) ? (H.remove(a), "") : b.getItem(a) || ""
    };
    H.create = function(a, b, c) {
        var d = H.a();
        if (d) {
            var f = new Date;
            f.setTime(C() + c * 1E3);
            try {
                d.setItem(a, b), d.setItem(a + "_expires", f.getTime())
            } catch (e) {}
        }
    };
    H.remove = function(a) {
        var b = H.a();
        b && (b.removeItem(a), b.removeItem(a + "_expires"))
    };

    function I(a, b) {
        this.u = a || "";
        this.h = b || "/";
        this.P = H.a() !== n || G.G(this.h);
        this.N = o;
        ra(this)
    }

    function ra(a) {
        if (!G.b("_cb_ls")) {
            var b = H.a() !== n,
                c = G.b("_SUPERFLY_lockout");
            c && D(["", "_v_", "_p_"], function(b) {
                a.create(b + "_SUPERFLY_lockout", c, 600, m)
            });
            var d = G.b("_chartbeat3");
            d && (a.create("_v__chartbeat3", d, 34128E3, m), G.remove("_chartbeat3", a.h));
            b && ((b = G.b("_chartbeat2")) && a.create("_chartbeat2", b, 34128E3, m), (b = G.b("_chartbeat5")) && a.create("_chartbeat5", b, 60, m));
            G.create("_cb_ls", "1", 34128E3, a.h)
        }
    }
    I.prototype.create = function(a, b, c, d) {
        a = d ? a : this.u + a;
        (H.a() ? H : G).create(a, b, c, this.h);
        H.a() && G.create(a, b, c, this.h)
    };
    I.prototype.b = function(a, b) {
        var a = b ? a : this.u + a,
            c = (H.a() ? H : G).b(a);
        if (!c && H.a() && (c = G.b(a)) && G.b("_cb_ls")) {
            this.N = m;
            var d;
            switch (a) {
                case "_SUPERFLY_lockout":
                    d = 600;
                    break;
                case "_chartbeat4":
                    d = 60;
                    break;
                case "_cb_cp":
                    d = 60;
                    break;
                case "_chartbeat3":
                    d = 34128E3;
                    break;
                default:
                    d = 34128E3
            }
            H.create(a, c, d)
        }
        return c
    };
    I.prototype.remove = function(a, b) {
        a = b ? a : this.u + a;
        (H.a() ? H : G).remove(a, this.h);
        H.a() && G.remove(a, this.h)
    };

    function sa(a, b, c) {
        a.ownerDocument || (a = a.correspondingUseElement);
        if (!a || !a.ownerDocument) return n;
        var d = a.ownerDocument.documentElement,
            f = 0,
            e = A(c) ? c + 1 : -1;
        B(b) ? (b = b.toLowerCase(), c = function(a) {
            return (a = a.nodeName) && a.toLowerCase() === b
        }) : c = b;
        for (; a && a !== d && f !== e;) {
            if (c(a)) return a;
            a = a.parentNode;
            f++
        }
        return n
    }
    var J = function() {
        var a = /[ \r\n\t\f\u200B]+/g;
        return function(b) {
            return b && B(b) ? b.trim().replace(a, " ") : ""
        }
    }();

    function ta(a) {
        return a.nodeName && a.nodeName.toLowerCase() === "a" && (!a.namespaceURI || a.namespaceURI === "http://www.w3.org/1999/xhtml")
    }

    function ua(a, b) {
        var c = a.children,
            d = c.length;
        if (!d) return a;
        for (var f = b !== k ? b : J(a.textContent), e = 0; e < d; e++)
            if (J(c[e].textContent) === f) return ua(c[e], f) || a;
        return a
    };

    function va() {
        var a = H.a(m);
        return !a ? o : !!a.getItem("_cb_ip")
    };
    var wa = "z";

    function K() {
        A(p._cb_shared) || (p._cb_shared = {});
        return p._cb_shared
    };

    function L(a, b) {
        var c = K(),
            c = (A(k) && !A(c.m) ? k : c.m) || [];
        c.push.apply(c, arguments);
        K().m = c
    };

    function xa() {
        var a = ya();
        if (a) {
            var b = a.href,
                a = {
                    hostname: "",
                    pathname: "",
                    search: "",
                    protocol: "",
                    port: "",
                    hash: ""
                };
            if (b) {
                var c = document.createElement("a"),
                    d = p.location;
                if (!/^https?:/.test(b) && b.indexOf("javascript:") !== 0 && b.indexOf("app:") < 0)
                    if (b.indexOf("//") === 0) b = d.protocol + b;
                    else if (b.indexOf("/") === 0) var f = pa(d.protocol, d.port) ? "" : d.port,
                    b = d.protocol + "//" + d.hostname + (f ? ":" + f : "") + b;
                else {
                    var f = document.baseURI || d.href,
                        e = f.indexOf("?");
                    e === -1 && (e = f.indexOf("#"));
                    if (e === -1) e = f.length;
                    e = f.lastIndexOf("/",
                        e);
                    b = e === -1 ? "/" + b : f.substr(0, e) + "/" + b
                }
                c.href = b;
                a.hostname = c.hostname;
                a.pathname = c.pathname;
                a.search = c.search;
                a.protocol = c.protocol;
                a.port = c.port;
                a.hash = c.hash;
                if (a.pathname.charAt(0) !== "/") a.pathname = "/" + a.pathname;
                if (a.hostname === "") a.hostname = d.hostname;
                if (a.protocol === "") a.protocol = d.protocol;
                if (a.protocol === "javascript:") a.pathname = "", a.hostname = "", a.port = "", a.hash = "";
                if (pa(a.protocol, a.port) || a.port === "0") a.port = ""
            }
        }
        return a
    }

    function ya() {
        var a = n;
        D(document.getElementsByTagName("link"), function(b) {
            if (b.rel == "canonical") return a = b, o
        });
        return a
    }
    for (var za = {}, M = 0; M < 81; M++) za["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(M)] = m;

    function Aa(a, b) {
        if (a === "%") return "%25";
        var c = parseInt(b, 16);
        return za[c] ? String.fromCharCode(c) : "%" + b.toUpperCase()
    }

    function N(a) {
        if (!B(a)) return a;
        a = a.replace(/%([0-9A-Fa-f]{2})?/g, Aa);
        return a = a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g, encodeURIComponent)
    };

    function Ba(a) {
        var b, c;
        b = a.domain;
        c = p.location.hostname && p.location.hostname.replace(/^www\./, "");
        b = (p.location.protocol === "http:" ? "http:" : "https:") + "//mab.chartbeat.com/mab_strategy/headline_testing/get_strategy/?host=" + encodeURIComponent(b) + "&domain=" + encodeURIComponent(c) + "&path=";
        (a = a.path) ? (a = a.replace(/.*:\/\//, "").replace(/^[^/]+\//, "/"), a = a.charAt(0) !== "/" ? "/" + a : a) : a = "/";
        return b + encodeURIComponent(a)
    }

    function Ca(a, b, c) {
        var d, f, e;
        ma(a, function(a) {
            a = Da(a.responseText);
            a = (a = r(a)) && a.constructor === Object && B(a.status) && (a.data && a.data.constructor === Object || a.data === n) ? {
                I: a.status,
                i: a.data,
                Q: a.code,
                R: a.message
            } : n;
            if (a === n) c();
            else if (a.I === "success") {
                d = {};
                e = f = 0;
                if (a.i) a.i.experiments && (d = a.i.experiments), A(a.i.probability_is_lift) && (f = a.i.probability_is_lift), A(a.i.probability_is_control) && (e = a.i.probability_is_control);
                b(d, [f, e])
            } else c()
        }, c)
    }

    function Ea(a, b, c) {
        var d = [],
            f = b.e;
        if (f === "l" || f === "c") b = new Fa("lift_exp", "", "", b, f, "", ""), b.k = m, d.push(b);
        return d = d.concat(Ga(a, c, f))
    }

    function Ha(a, b) {
        var c = [new O("l", a[0], ""), new O("c", a[1], ""), new O("m", 1 - a[0] - a[1], "")];
        return Ia(c, b.lift_exp) || c[2]
    }

    function Ga(a, b, c) {
        var d = [];
        D(a, function(a, e) {
            var j = Ja(e, a, c, b[e]);
            A(j) && d.push(j)
        });
        return d
    }

    function Ja(a, b, c, d) {
        var f = b.location,
            e = b.specific_location,
            j, h, g = b.metadata;
        if (B(g) && g.length > 0 && ((g = r(g)) && g.version == 2 && (j = g.sub_location), g && g.version == 3)) j = g.sub_location, h = g.initial_content;
        j = A(j) ? j : "";
        h = A(h) ? h : "";
        var i = [];
        D(b.variants, function(a, b) {
            i.push(new O(b, parseFloat(a.probability), a.content))
        });
        if (b = Ia(i, d && d.chosenVariant)) return new Fa(a, f, j, b, c, h, e)
    }

    function Ia(a, b) {
        var c;
        A(b) && (c = ha(a, function(a) {
            return a.e === b
        }));
        A(c) || (c = Ka(a));
        return c
    }

    function Ka(a) {
        var b = Math.random();
        return ha(a, function(a) {
            b -= a.K;
            return b < 0
        })
    }

    function La(a, b, c) {
        var d = p.location.href,
            f = [encodeURIComponent(a), encodeURIComponent(d), b].join(",");
        D(c, function(a) {
            f += "," + [a.test.e, a.test.j.e, encodeURIComponent(a.f)].join(",")
        });
        return f
    }

    function Ma(a, b) {
        if (a === b) return m;
        for (var c = b.split("."), d = a.split("."); c.length;) {
            if (d.length === 0) return o;
            if (c.pop() !== d.pop()) return o
        }
        return m
    }

    function Na() {
        var a = p.document.head || p.document.getElementsByTagName("head")[0],
            b = p.document.createElement("style");
        b.id = "chartbeat-flicker-control-style";
        b.type = "text/css";
        b.styleSheet ? b.styleSheet.cssText = "body { visibility: hidden !important; }" : b.appendChild(document.createTextNode("body { visibility: hidden !important; }"));
        a.appendChild(b)
    }

    function Oa() {
        return p.document.getElementById("chartbeat-flicker-control-style") || p.document.getElementById("chartbeat-body-hider")
    }

    function Pa() {
        var a = Oa();
        a && a.parentNode.removeChild(a)
    }

    function Fa(a, b, c, d, f, e, j) {
        this.e = a;
        this.l = b;
        this.f = j;
        this.F = c;
        this.j = d;
        this.t = f;
        this.k = o;
        this.anchors = [];
        this.H = e
    }

    function O(a, b, c) {
        this.e = a;
        this.K = b;
        this.content = c
    }

    function Qa(a) {
        var b = {};
        b.s = a.status;
        b.c = a.code;
        b.m = a.message;
        var c = n;
        if (a.data !== n) c = {}, c.s = a.data.M, c.g = a.data.t, c.m = a.data.J;
        b.d = c;
        return b
    }

    function Ra(a) {
        if (p.document && p.document.body) a();
        else var b = ia(function() {
            p.document && p.document.body && (E(b), a())
        }, 50)
    }
    var Sa = /^[a-zA-Z0-9+/]*={0,2}$/;

    function Da(a) {
        if (a && Sa.exec(a)) try {
            return ga(a)
        } catch (b) {}
        return a
    }

    function Ta(a) {
        var b = a;
        b += String.fromCharCode(128);
        for (var a = [1518500249, 1859775393, 2400959708, 3395469782], c = 1732584193, d = 4023233417, f = 2562383102, e = 271733878, j = 3285377520, h = [], g, i, l, v, x, y = Math.ceil((b.length / 4 + 2) / 16), z = [y], t = 0, q; t < y; t++) {
            z[t] = [];
            for (g = 0; g < 16; g++) z[t][g] = b.charCodeAt(t * 64 + g * 4) << 24 | b.charCodeAt(t * 64 + g * 4 + 1) << 16 | b.charCodeAt(t * 64 + g * 4 + 2) << 8 | b.charCodeAt(t * 64 + g * 4 + 3)
        }
        t = (b.length - 1) * 8;
        b = y - 1;
        z[b][14] = Math.floor(t / Math.pow(2, 32));
        z[b][15] = t & 4294967295;
        for (t = 0; t < y; t++) {
            for (q = 0; q < 16; q++) h[q] =
                z[t][q];
            for (q = 16; q < 80; q++) h[q] = (h[q - 3] ^ h[q - 8] ^ h[q - 14] ^ h[q - 16]) << 1 | (h[q - 3] ^ h[q - 8] ^ h[q - 14] ^ h[q - 16]) >>> 31;
            b = c;
            g = d;
            i = f;
            l = e;
            v = j;
            for (q = 0; q < 80; q++) x = Math.floor(q / 20), x = (b << 5 | b >>> 27) + (x == 0 ? g & i ^ ~g & l : x == 1 ? g ^ i ^ l : x == 2 ? g & i ^ g & l ^ i & l : g ^ i ^ l) + v + a[x] + h[q] & 4294967295, v = l, l = i, i = g << 30 | g >>> 2, g = b, b = x;
            c = c + b & 4294967295;
            d = d + g & 4294967295;
            f = f + i & 4294967295;
            e = e + l & 4294967295;
            j = j + v & 4294967295
        }
        a = c;
        if (a == 0) a = "A";
        else {
            a >>>= 0;
            for (c = ""; a > 0;) d = a % 64, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d) + c, a >>>= 6;
            a = c
        }
        return a
    };

    function Ua(a, b) {
        for (var c = b || document.documentElement, d = [], f = n, e = a, j, h, g, i, l, v; e && e !== c;) {
            j = e.nodeName.toLowerCase();
            f = e;
            h = f.nodeName;
            if ((e = e.parentNode) && e !== document.documentElement) {
                g = e.children;
                i = 0;
                for (l = 0, v = g.length; l < v; l++) {
                    if (f === g[l]) {
                        j += "[" + (1 + l - i) + "]";
                        break
                    }
                    g[l].nodeName !== h && i++
                }
            }
            d.unshift(j)
        }
        return d.join("/")
    }
    var P = function() {
        function a(a, b, c) {
            b === "href" ? (a = a.href || "", c = c || "", a = a.replace(d, ""), c = c.replace(d, "")) : a = a.getAttribute(b);
            return a === c
        }
        var b = /^\*\[@id='(.+?)'\](?:\[@([a-z-]+)='(.*)'\])?$/,
            c = /^([a-z][a-z0-9-]*)\[(\d+)\](?:\[@([a-z-]+)='(.*)'\])?$/,
            d = /^http(s)?\:\/\//;
        return function(d, e) {
            var j = n;
            a: {
                for (var j = 0, h = d.indexOf("/"), g = d.indexOf("'"), i = []; h !== -1;)
                    if (g !== -1 && g < h) {
                        g = d.indexOf("'", g + 1);
                        if (g == -1) {
                            j = n;
                            break a
                        }
                        h = d.indexOf("/", g + 1);
                        g = d.indexOf("'", g + 1)
                    } else i.push(d.substring(j, h)), j = h + 1, h =
                        d.indexOf("/", j);j < d.length && i.push(d.substring(j, d.length));j = i
            }
            if (!j || j.length == 0) return e ? e : n;
            var l, v, x, y, z, g = j.shift();
            if (e) h = e;
            else {
                if (g === "body") h = document.body;
                else {
                    l = b.exec(g);
                    if (!l) return n;
                    h = document.getElementById(l[1]);
                    if (!h) return n;
                    v = l[2];
                    l = l[3];
                    if (v && !a(h, v, l)) return n
                }
                g = j.shift()
            }
            for (; A(g);) {
                l = c.exec(g);
                if (!l) return n;
                g = l[1];
                i = parseInt(l[2], 10);
                v = l[3];
                l = l[4];
                if (isNaN(i)) return n;
                x = h.children;
                z = x.length;
                if (z === 0) return n;
                for (y = 0; y < z; y++) {
                    if (x[y].nodeName && x[y].nodeName.toLowerCase() ===
                        g && (i--, i === 0)) {
                        h = x[y];
                        if (v && !a(h, v, l)) return n;
                        break
                    }
                    if (y === z - 1) return n
                }
                g = j.shift()
            }
            return h
        }
    }();

    function Va(a) {
        if (!("querySelectorAll" in document)) return [];
        var b;
        b = /a\[@href='(.+?)'\sor\sstarts-with\(.+,\s?'(.+?)'\)\]/.exec(a);
        a = /^a\[@href='(.+?)'\]$/.exec(a);
        if (!b && !a) return n;
        b = document.querySelectorAll(b ? 'a[href="' + b[1] + '"],a[href^="' + b[2] + '"]' : 'a[href="' + a[1] + '"]');
        b.length < 1 && (b = n);
        return b ? Array.prototype.slice.call(b) : []
    }

    function Wa(a) {
        var b = n,
            b = sa(a, function(a) {
                return a.id
            }),
            c = Ua(a, b);
        b && (c && (c = "/" + c), c = "*[@id='" + b.id + "']" + c);
        c += "[@href='" + a.href + "']";
        return c
    };

    function Q(a) {
        this.r = a;
        this.o = [];
        var b = this.r,
            a = b.topStorageDomain,
            b = b.domain,
            c = p.location.hostname;
        this.O = a ? a : Ma(c, b) ? b : c.replace(/^www\./, "");
        this.D = new I("_t_", this.r.cookiePath || "/");
        this.n = R;
        a = wa;
        K()[a] = m
    }

    function Xa(a) {
        if (!a.A) {
            a.A = m;
            var b = a.C,
                c = a.w,
                d = Da(a.D.b("tests")),
                f = {};
            d.length > 0 && (f = r(d));
            var e = Ha(c, f);
            a.o = Ea(b, e, f);
            var j = a.o,
                h = {
                    domain: "." + a.O,
                    z: 6E4,
                    path: "/"
                };
            a.q = function(a) {
                var b, a = a || window.event;
                if (b = !a ? n : sa(a.target || a.srcElement, ta, 10))
                    if (a = Ya(b, j), a.length) {
                        var c;
                        if (b === n || typeof b === "undefined") c = "unknown";
                        else if (b.tagName === "A" && b.href) c = b.href;
                        c = La(c, a[0].test.t, a);
                        a = (a = G.b("_chartbeat6")) ? a.split("::") : [];
                        a.length >= 10 && a.splice(0, a.length - 10 + 1);
                        a.push(c);
                        c = "_chartbeat6=" + a.join("::");
                        a = "";
                        h && h.constructor === Object && (h.z && (b = new Date, b.setTime(b.getTime() + h.z), a += "; expires=" + b.toGMTString()), h.domain && (a += "; domain=" + h.domain), h.path && (a += "; path=" + h.path));
                        document.cookie = c + a
                    }
            };
            a = w(function() {
                var a = this.q,
                    b = p.document.body;
                b.addEventListener ? b.addEventListener("click", a, m) : b.attachEvent && b.attachEvent("onclick", a);
                Za(this, j, e.e)
            }, a);
            Ra(a)
        }
    }

    function Za(a, b, c) {
        var d = C(),
            f = w(function() {
                var a = C() - d >= 5E3,
                    f = p.document.readyState === "complete" || p.document.readyState !== "loading" && !p.document.documentElement.doScroll,
                    h;
                a || (h = $a(b, c));
                if (a || h || f) E(this.v), ab(this)
            }, a);
        a.v = ia(f, 50);
        f()
    }

    function ab(a) {
        Pa();
        var b = {},
            c = [],
            d = o,
            f = "m";
        D(a.o, function(a) {
            if (a.e === "lift_exp") f = a.j.e;
            if (a.k) {
                d = m;
                var e = [];
                D(a.anchors, function(a) {
                    e.push(a.f)
                });
                b[a.e] = {
                    chosenVariant: a.j.e,
                    specificLocation: e
                }
            } else c.push(a.e)
        });
        if (d) b.lift_exp = f, a.D.create("tests", fa(ca(b)), 3600), f === "m" && delete b.lift_exp;
        var e = {
            status: bb,
            data: n,
            code: k,
            message: k
        };
        a.n !== R ? (e.status = cb, e.code = a.n) : (a = {
            M: b,
            t: f,
            J: c
        }, e.status = db, e.data = a);
        L(["t", Qa(e)])
    }

    function eb(a) {
        var b = a.r;
        L(["ev", function() {
            a.terminate()
        }]);
        L(["sv", function() {
            fb(a, b)
        }])
    }
    Q.prototype.L = function(a) {
        if (Object.prototype.toString.call(a) === "[object Array]" && B(a[0]) && a[0] === "readyForTesting") a[1] ? Xa(this) : this.B = o
    };

    function gb(a) {
        a.n = hb;
        ab(a)
    }
    Q.prototype.terminate = function() {
        this.n = R;
        var a = this.q,
            b = p.document.body;
        b.removeEventListener ? b.removeEventListener("click", a, m) : b.detachEvent && b.detachEvent("onclick", a);
        this.q = k;
        E(this.v);
        this.v = n;
        this.o = [];
        this.w = this.C = n;
        this.A = o
    };

    function fb(a, b) {
        eb(a);
        if (va()) gb(a);
        else {
            var c = Ba(b);
            if (A(c)) A(b.flickerControl) || (b.flickerControl = m), b.flickerControl && (ja(Pa, 1E3), Oa() || Na()), Ca(c, function(b, c) {
                a.C = b;
                a.w = c;
                a.B = m;
                for (var e = w(a.L, a), j = p._cbm || []; j.length;) e(j.shift());
                p._cbm = {
                    push: e
                };
                a.B && Xa(a)
            }, function() {})
        }
    }

    function $a(a, b) {
        var c = [];
        D(a, function(a, f) {
            c.push(o);
            if (a.k) c[f] = m;
            else if (!a.f || a.f === a.l) {
                var e = P(a.l);
                if (e) var j = P(a.F, e);
                if (e && j) c[f] = m, b !== "c" && ib(j, a.j.content), a.anchors = [{
                    element: e,
                    f: Ta(a.l)
                }], a.k = m
            } else {
                a.anchors = [];
                var h = a.H;
                (e = Va(a.l)) && e.length > 0 && D(e, function(e) {
                    if (e) var i = P(a.F, e);
                    if (i) {
                        var j = J(i.textContent);
                        j == h ? ua(i, j) != i && (i = n) : i = n
                    }
                    if (e && i) c[f] = m, b !== "c" && ib(i, a.j.content), a.anchors.push({
                        element: e,
                        f: Ta(Wa(e))
                    }), a.k = m
                })
            }
        });
        return c.indexOf(o) === -1
    }

    function Ya(a, b) {
        var c = [],
            d = n,
            f = 101,
            e = o;
        D(b, function(b) {
            e || D(b.anchors, function(c) {
                if (!e)
                    if (c.element === a) d = {
                        test: b,
                        f: c.f
                    }, e = m;
                    else if (c.element.href === a.href) {
                    var g;
                    var i = c.element.getBoundingClientRect(),
                        l = a.getBoundingClientRect();
                    i.right - i.left > 0 && i.bottom - i.top > 0 && l.right - l.left > 0 && l.bottom - l.top > 0 ? (g = Math.max(i.left, l.left) - Math.min(i.right, l.right), i = Math.max(i.top, l.top) - Math.min(i.bottom, l.bottom), g = g <= 0 ? Math.max(i, 0) : i <= 0 ? g : Math.sqrt(g * g + i * i)) : g = k;
                    g < f && (d = {
                        test: b,
                        f: c.f
                    }, f = g)
                }
            })
        });
        d && c.push(d);
        return c
    }

    function ib(a, b) {
        if ("textContent" in document.createElement("b")) a.textContent = b
    }
    var R = 0,
        hb = 2,
        db = "s",
        cb = "e",
        bb = "f";
    if (!G.b("cb_optout")) {
        var S = p._sf_async_config,
            F = S;
        qa();
        var jb = !!F.useCanonical,
            T;
        a: {
            if (F.useCanonicalDomain && jb) {
                var kb, U = xa();
                if (kb = !U ? U : U.hostname) {
                    T = kb;
                    break a
                }
            }
            T = p.location.hostname
        }
        F.title = F.title || document.title;
        F.domain = F.domain || T;
        var lb = F,
            V;
        if (F.path) V = N(F.path);
        else a: {
            var W = n;
            if (jb) {
                var X = xa();
                if (W = !X ? X : N(X.pathname) + X.search + X.hash) {
                    V = W;
                    break a
                }
            }
            var mb = p.location,
                W = N(mb.pathname),
                Y = mb.search || "",
                Y = Y.replace(/PHPSESSID=[^&]+/, ""),
                Z = /&utm_[^=]+=[^&]+/ig,
                $ = Z.exec(mb.search);$ && (Y = Y.replace(Z,
                ""));Z = /\?utm_[^=]+=[^&]+(.*)/i;
            ($ = Z.exec(Y)) && (Y = Y.replace(Z, $[1] != "" ? "?" + $[1] : ""));V = W + Y
        }
        lb.path = V;
        F.domain = F.domain && F.domain.replace(/^www\./, "");
        if ("textContent" in document.createElement("b") && "querySelectorAll" in document && "atob" in window && "btoa" in window) {
            var nb = new Q(S);
            fb(nb, S)
        }
    };
})();