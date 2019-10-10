
        //<![CDATA[
        window.getParameterByName = function(b, a) {
            a || (a = window.location.href);
            b = b.replace(/[\[\]]/g, "\\$\x26");
            var d = (new RegExp("[?\x26]" + b + "(\x3d([^\x26#]*)|\x26|#|$)")).exec(a);
            return d ? d[2] ? decodeURIComponent(d[2].replace(/\+/g, " ")) : "" : null
        };
        var cookies = function(b, a) {
            function d(a, b) {
                a = a || {};
                for (var c in b) void 0 === a[c] && (a[c] = b[c]);
                return a
            }

            function c(a) {
                var b = a;
                return b instanceof Date || (b = new Date, b.setTime(b.getTime() + 1E3 * a)), b.toUTCString()
            }
            if (d(cookies, {
                    expires: 31536E3,
                    path: "/",
                    secure: "https:" === window.location.protocol,
                    nulltoremove: !0,
                    autojson: !0,
                    autoencode: !0,
                    encode: function(a) {
                        return encodeURIComponent(a)
                    },
                    decode: function(a) {
                        return decodeURIComponent(a)
                    },
                    error: function(a, b, c) {
                        throw Error(a);
                    },
                    fallback: !1
                }), a = d(a, cookies), "string" ==
                typeof b) {
                var m = document.cookie.split(/;\s*/).map(a.autoencode ? a.decode : function(a) {
                    return a
                }).map(function(a) {
                    return a.split("\x3d")
                }).reduce(function(a, b) {
                    return a[b[0]] = b.splice(1).join("\x3d"), a
                }, {})[b];
                if (!a.autojson) return m;
                var e;
                try {
                    e = JSON.parse(m)
                } catch (l) {
                    e = m
                }
                return "undefined" == typeof e && a.fallback && (e = a.fallback(b, a)), e
            }
            for (m in b) {
                e = b[m];
                var v = "undefined" == typeof e || a.nulltoremove && null === e,
                    g = a.autojson ? JSON.stringify(e) : e,
                    g = a.autoencode ? a.encode(g) : g;
                v && (g = "");
                g = a.encode(m) + "\x3d" + g +
                    (a.expires ? ";expires\x3d" + c(v ? -1E4 : a.expires) : "") + ";path\x3d" + a.path + (a.domain ? ";domain\x3d" + a.domain : "") + (a.secure ? ";secure" : "");
                a.test && a.test(g);
                document.cookie = g;
                g = cookies(a.encode(m)) || "";
                e && !v && 0 < a.expires && JSON.stringify(g) !== JSON.stringify(e) && (navigator.cookieEnabled ? a.fallback ? a.fallback(b, a) : a.error("Cookie too large at " + e.length + " characters") : a.error("Cookies not enabled"))
            }
            return cookies
        };
        ! function(b) {
            "object" == typeof exports && "object" == typeof module ? module.exports = cookies : "function" == typeof define && define.amd ? define("cookies", [], cookies) : "object" == typeof exports ? exports.cookies = cookies : b.cookies = cookies
        }(this);

        function isMobile(b) {
            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
                4))
        };
        (function() {
            var b = [
                [
                    [0, 0],
                    [
                        [300, 250]
                    ]
                ]
            ];
            window.slotDetails = {
                Define_300x250_1: {
                    adUnitPath: "/1031683/UD_ROS_300x250_ATF_Flex",
                    slotSize: [
                        [144, 256], "fluid", [300, 250],
                        [256, 256],
                        [336, 280],
                        [192, 256],
                        [256, 192],
                        [256, 144]
                    ]
                },
                Define_300x250_2: {
                    adUnitPath: "/1031683/UD_ROS_300x250_BTF_1",
                    sizeMapping: b,
                    slotSize: [
                        [300, 250]
                    ]
                },
                Define_300x250_3: {
                    adUnitPath: "/1031683/UD_ROS_300x250_BTF_2",
                    sizeMapping: b,
                    slotSize: [
                        [300, 250]
                    ]
                },
                UD_ROS_728x90_ATF_Flex: {
                    adUnitPath: "/1031683/UD_ROS_728x90_ATF_Flex",
                    sizeMapping: [
                        [
                            [970, 0],
                            [
                                [970,
                                    90
                                ],
                                [728, 90],
                                [468, 60]
                            ]
                        ],
                        [
                            [728, 0],
                            [
                                [728, 90],
                                [468, 60]
                            ]
                        ],
                        [
                            [640, 0],
                            [
                                [468, 60]
                            ]
                        ],
                        [
                            [0, 0],
                            []
                        ]
                    ],
                    slotSize: [
                        [468, 60],
                        [728, 90],
                        [970, 90]
                    ]
                },
                UD_ROS_300x600_ATF_Flex: {
                    adUnitPath: "/1031683/UD_ROS_300x600_ATF_Flex",
                    sizeMapping: [
                        [
                            [1024, 0],
                            [
                                [300, 600],
                                [160, 600],
                                [300, 250]
                            ]
                        ],
                        [
                            [0, 0],
                            []
                        ]
                    ],
                    slotSize: [
                        [300, 600],
                        [160, 600],
                        [300, 250]
                    ]
                }
            }
        })();
        ! function(b, a) {
            var d = a(b, b.document);
            b.lazySizes = d;
            "object" == typeof module && module.exports && (module.exports = d)
        }("undefined" != typeof window ? window : {}, function(b, a) {
            var d, c;
            if (function() {
                    var a, d = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    c = b.lazySizesConfig || b.lazysizesConfig || {};
                    for (a in d) a in c || (c[a] = d[a])
                }(), !a || !a.getElementsByClassName) return {
                init: function() {},
                cfg: c,
                noSupport: !0
            };
            var m = a.documentElement,
                e = b.Date,
                v = b.HTMLPictureElement,
                g = b.addEventListener,
                l = b.setTimeout,
                U = b.requestAnimationFrame || l,
                F = b.requestIdleCallback,
                ba = /^picture$/i,
                V = ["load", "error", "lazyincluded", "_lazyloaded"],
                w = {},
                ha = Array.prototype.forEach,
                H = function(a, b) {
                    return w[b] || (w[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), w[b].test(a.getAttribute("class") ||
                        "") && w[b]
                },
                I = function(a, b) {
                    H(a, b) || a.setAttribute("class", (a.getAttribute("class") || "").trim() + " " + b)
                },
                W = function(a, b) {
                    var c;
                    (c = H(a, b)) && a.setAttribute("class", (a.getAttribute("class") || "").replace(c, " "))
                },
                X = function(a, b, c) {
                    var d = c ? "addEventListener" : "removeEventListener";
                    c && X(a, b);
                    V.forEach(function(c) {
                        a[d](c, b)
                    })
                },
                K = function(b, c, n, e, f) {
                    var k = a.createEvent("Event");
                    return n || (n = {}), n.instance = d, k.initEvent(c, !e, !f), k.detail = n, b.dispatchEvent(k), k
                },
                Y = function(a, d) {
                    var n;
                    !v && (n = b.picturefill || c.pf) ?
                        (d && d.src && !a.getAttribute("srcset") && a.setAttribute("srcset", d.src), n({
                            reevaluate: !0,
                            elements: [a]
                        })) : d && d.src && (a.src = d.src)
                },
                L = function(a, b, d) {
                    for (d = d || a.offsetWidth; d < c.minSize && b && !a._lazysizesWidth;) d = b.offsetWidth, b = b.parentNode;
                    return d
                },
                M = function() {
                    var b, c, d = [],
                        e = [],
                        f = d,
                        k = function() {
                            var a = f;
                            f = d.length ? e : d;
                            b = !0;
                            for (c = !1; a.length;) a.shift()();
                            b = !1
                        },
                        q = function(d, e) {
                            b && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (a.hidden ? l : U)(k)))
                        };
                    return q._lsFlush = k, q
                }(),
                Q = function(a, b) {
                    return b ? function() {
                            M(a)
                        } :
                        function() {
                            var b = this,
                                d = arguments;
                            M(function() {
                                a.apply(b, d)
                            })
                        }
                },
                ia = function(a) {
                    var b, d = 0,
                        g = c.throttleDelay,
                        f = c.ricTimeout,
                        k = function() {
                            b = !1;
                            d = e.now();
                            a()
                        },
                        q = F && 49 < f ? function() {
                            F(k, {
                                timeout: f
                            });
                            f !== c.ricTimeout && (f = c.ricTimeout)
                        } : Q(function() {
                            l(k)
                        }, !0);
                    return function(a) {
                        var c;
                        (a = !0 === a) && (f = 33);
                        b || (b = !0, c = g - (e.now() - d), 0 > c && (c = 0), a || 9 > c ? q() : l(q, c))
                    }
                },
                ca = function(a) {
                    var b, c, d = function() {
                            b = null;
                            a()
                        },
                        f = function() {
                            var a = e.now() - c;
                            99 > a ? l(f, 99 - a) : (F || d)(d)
                        };
                    return function() {
                        c = e.now();
                        b || (b = l(f, 99))
                    }
                },
                O = function() {
                    var P, G, n, J, f, k, q, x, y, C, D, v, w = /^img$/i,
                        t = /^iframe$/i,
                        F = "onscroll" in b && !/(gle|ing)bot/.test(navigator.userAgent),
                        R = 0,
                        u = 0,
                        E = -1,
                        L = function(a) {
                            u--;
                            (!a || 0 > u || !a.target) && (u = 0)
                        },
                        O = function(b) {
                            return null == v && (v = "hidden" == (getComputedStyle(a.body, null) || {}).visibility), v || "hidden" != (getComputedStyle(b.parentNode, null) || {}).visibility && "hidden" != (getComputedStyle(b, null) || {}).visibility
                        },
                        da = function() {
                            var b, p, f, e, g, z, n, h, l, N, Z, w, r = d.elements;
                            if ((J = c.loadMode) && 8 > u && (b = r.length)) {
                                p = 0;
                                for (E++; p <
                                    b; p++)
                                    if (r[p] && !r[p]._lazyRace)
                                        if (!F || d.prematureUnveil && d.prematureUnveil(r[p])) S(r[p]);
                                        else {
                                            (h = r[p].getAttribute("data-expand")) && (z = 1 * h) || (z = R);
                                            N || (N = !c.expand || 1 > c.expand ? 500 < m.clientHeight && 500 < m.clientWidth ? 500 : 370 : c.expand, d._defEx = N, Z = N * c.expFactor, w = c.hFac, v = null, R < Z && 1 > u && 2 < E && 2 < J && !a.hidden ? (R = Z, E = 0) : R = 1 < J && 1 < E && 6 > u ? N : 0);
                                            l !== z && (k = innerWidth + z * w, q = innerHeight + z, n = -1 * z, l = z);
                                            f = r[p].getBoundingClientRect();
                                            if ((f = (D = f.bottom) >= n && (x = f.top) <= q && (C = f.right) >= n * w && (y = f.left) <= k && (D || C || y || x) &&
                                                    (c.loadHidden || O(r[p]))) && !(f = G && 3 > u && !h && (3 > J || 4 > E))) {
                                                var A = r[p];
                                                f = z;
                                                var t = void 0,
                                                    B = A,
                                                    A = O(A);
                                                x -= f;
                                                D += f;
                                                y -= f;
                                                for (C += f; A && (B = B.offsetParent) && B != a.body && B != m;)(A = 0 < ((getComputedStyle(B, null) || {}).opacity || 1)) && "visible" != (getComputedStyle(B, null) || {}).overflow && (t = B.getBoundingClientRect(), A = C > t.left && y < t.right && D > t.top - 1 && x < t.bottom + 1);
                                                f = A
                                            }
                                            if (f) {
                                                if (S(r[p]), g = !0, 9 < u) break
                                            } else !g && G && !e && 4 > u && 4 > E && 2 < J && (P[0] || c.preloadAfterLoad) && (P[0] || !h && (D || C || y || x || "auto" != r[p].getAttribute(c.sizesAttr))) && (e =
                                                P[0] || r[p])
                                        }
                                e && !g && S(e)
                            }
                        },
                        h = ia(da),
                        fa = function(a) {
                            var b = a.target;
                            if (b._lazyCache) return void delete b._lazyCache;
                            L(a);
                            I(b, c.loadedClass);
                            W(b, c.loadingClass);
                            X(b, ea);
                            K(b, "lazyloaded")
                        },
                        U = Q(fa),
                        ea = function(a) {
                            U({
                                target: a.target
                            })
                        },
                        V = function(a, b) {
                            try {
                                a.contentWindow.location.replace(b)
                            } catch (c) {
                                a.src = b
                            }
                        },
                        ja = function(a) {
                            var b, d = a.getAttribute(c.srcsetAttr);
                            (b = c.customMedia[a.getAttribute("data-media") || a.getAttribute("media")]) && a.setAttribute("media", b);
                            d && a.setAttribute("srcset", d)
                        },
                        ka = Q(function(a,
                            b, d, f, e) {
                            var k, g, q, h, x, y;
                            (x = K(a, "lazybeforeunveil", b)).defaultPrevented || (f && (d ? I(a, c.autosizesClass) : a.setAttribute("sizes", f)), g = a.getAttribute(c.srcsetAttr), k = a.getAttribute(c.srcAttr), e && (q = a.parentNode, h = q && ba.test(q.nodeName || "")), y = b.firesLoad || "src" in a && (g || k || h), x = {
                                target: a
                            }, I(a, c.loadingClass), y && (clearTimeout(n), n = l(L, 2500), X(a, ea, !0)), h && ha.call(q.getElementsByTagName("source"), ja), g ? a.setAttribute("srcset", g) : k && !h && (t.test(a.nodeName) ? V(a, k) : a.src = k), e && (g || h) && Y(a, {
                                src: k
                            }));
                            a._lazyRace &&
                                delete a._lazyRace;
                            W(a, c.lazyClass);
                            M(function() {
                                var b = a.complete && 1 < a.naturalWidth;
                                y && !b || (b && I(a, "ls-is-cached"), fa(x), a._lazyCache = !0, l(function() {
                                    "_lazyCache" in a && delete a._lazyCache
                                }, 9));
                                "lazy" == a.loading && u--
                            }, !0)
                        }),
                        S = function(a) {
                            if (!a._lazyRace) {
                                var b, d = w.test(a.nodeName),
                                    f = d && (a.getAttribute(c.sizesAttr) || a.getAttribute("sizes")),
                                    e = "auto" == f;
                                (!e && G || !d || !a.getAttribute("src") && !a.srcset || a.complete || H(a, c.errorClass) || !H(a, c.lazyClass)) && (b = K(a, "lazyunveilread").detail, e && aa.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, u++, ka(a, b, e, f, d))
                            }
                        },
                        la = ca(function() {
                            c.loadMode = 3;
                            h()
                        }),
                        ga = function() {
                            3 == c.loadMode && (c.loadMode = 2);
                            la()
                        },
                        T = function() {
                            if (!G) {
                                if (999 > e.now() - f) return void l(T, 999);
                                G = !0;
                                c.loadMode = 3;
                                h();
                                g("scroll", ga, !0)
                            }
                        };
                    return {
                        _: function() {
                            f = e.now();
                            d.elements = a.getElementsByClassName(c.lazyClass);
                            P = a.getElementsByClassName(c.lazyClass + " " + c.preloadClass);
                            g("scroll", h, !0);
                            g("resize", h, !0);
                            b.MutationObserver ? (new MutationObserver(h)).observe(m, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0
                                }) :
                                (m.addEventListener("DOMNodeInserted", h, !0), m.addEventListener("DOMAttrModified", h, !0), setInterval(h, 999));
                            g("hashchange", h, !0);
                            "focus mouseover click load transitionend animationend".split(" ").forEach(function(b) {
                                a.addEventListener(b, h, !0)
                            });
                            /d$|^c/.test(a.readyState) ? T() : (g("load", T), a.addEventListener("DOMContentLoaded", h), l(T, 2E4));
                            d.elements.length ? (da(), M._lsFlush()) : h()
                        },
                        checkElems: h,
                        unveil: S,
                        _aLSL: ga
                    }
                }(),
                aa = function() {
                    var b, d = Q(function(a, b, d, c) {
                            var e, g;
                            if (a._lazysizesWidth = c, c += "px", a.setAttribute("sizes",
                                    c), ba.test(b.nodeName || ""))
                                for (b = b.getElementsByTagName("source"), e = 0, g = b.length; e < g; e++) b[e].setAttribute("sizes", c);
                            d.detail.dataAttr || Y(a, d.detail)
                        }),
                        e = function(a, b, c) {
                            var e, g = a.parentNode;
                            g && (c = L(a, g, c), e = K(a, "lazybeforesizes", {
                                width: c,
                                dataAttr: !!b
                            }), e.defaultPrevented || (c = e.detail.width) && c !== a._lazysizesWidth && d(a, g, e, c))
                        },
                        l = ca(function() {
                            var a, c = b.length;
                            if (c)
                                for (a = 0; a < c; a++) e(b[a])
                        });
                    return {
                        _: function() {
                            b = a.getElementsByClassName(c.autosizesClass);
                            g("resize", l)
                        },
                        checkElems: l,
                        updateElem: e
                    }
                }(),
                t = function() {
                    !t.i && a.getElementsByClassName && (t.i = !0, aa._(), O._())
                };
            return l(function() {
                c.init && t()
            }), d = {
                cfg: c,
                autoSizer: aa,
                loader: O,
                init: t,
                uP: Y,
                aC: I,
                rC: W,
                hC: H,
                fire: K,
                gW: L,
                rAF: M
            }
        });
        (function() {
            window.dfpTry = function(b, a) {
                a = a || window;
                a.googletag.cmd.push(function() {
                    try {
                        b()
                    } catch (a) {
                        console && console.error && console.error(a), window.Bugsnag && Bugsnag.notifyException(a)
                    }
                })
            };
            window.findSlotByElementId = function(b, a) {
                for (var d = 0; d < b.length; d++)
                    if (b[d].getSlotElementId() === a) return b[d]
            };
            window.createObserverCallback = function(b) {
                return function(a) {
                    for (var d = 0; d < a.length; d++)
                        if (0 < a[d].intersectionRatio) {
                            var c = findSlotByElementId(b.googletag.pubads().getSlots(), a[d].target.id);
                            c && b.googletag.pubads().refresh([c]);
                            b.slotIntersectionObserver.unobserve(a[d].target)
                        }
                }
            };
            window.isIntersectionObserverSupported = function(b) {
                return "IntersectionObserver" in b && "IntersectionObserverEntry" in b && "intersectionRatio" in b.IntersectionObserverEntry.prototype
            };
            window.createDOMContentLoadedCallback = function(b) {
                return function() {
                    for (var a = document.querySelectorAll("div[data-ad-slot]"), d = 0; d < a.length; d++) b.googletag.display(a[d].getAttribute("data-ad-slot"));
                    if (isIntersectionObserverSupported(b))
                        for (b.slotIntersectionObserver = new b.IntersectionObserver(createObserverCallback(b), {
                                rootMargin: "300px"
                            }), a = document.querySelectorAll("div[data-ad-slot]"), d = 0; d < a.length; d++)
                            if ("true" === a[d].getAttribute("data-lazy-ad")) b.slotIntersectionObserver.observe(a[d]);
                            else {
                                var c = findSlotByElementId(b.googletag.pubads().getSlots(), a[d].id);
                                c && b.googletag.pubads().refresh([c])
                            }
                    else b.googletag.pubads().refresh()
                }
            };
            window.loadAds = function(b) {
                b.document.addEventListener("DOMContentLoaded", function() {
                    dfpTry(createDOMContentLoadedCallback(b))
                })
            };
            window.isSampled = function(b, a) {
                return b.Math.random() <=
                    a
            };
            window.dfpInit = function(b, a) {
                a = a || window;
                a.googletag = a.googletag || {};
                a.googletag.cmd = a.googletag.cmd || [];
                a.googletag.cmd.push(function() {
                    -1 !== b.slots.indexOf("Define_300x250_1") && a.googletag.defineSlot("/1031683/UD_ROS_300x250_ATF_Flex", [
                        [192, 256],
                        [256, 192],
                        [256, 144],
                        [144, 256],
                        [256, 256], "fluid", [300, 250],
                        [336, 280]
                    ], "Define_300x250_1").addService(a.googletag.pubads()); - 1 !== b.slots.indexOf("Define_300x250_2") && a.googletag.defineSlot("/1031683/UD_ROS_300x250_BTF_1", [300, 250], "Define_300x250_2").addService(a.googletag.pubads()); -
                    1 !== b.slots.indexOf("Define_300x250_3") && a.googletag.defineSlot("/1031683/UD_ROS_300x250_BTF_2", [300, 250], "Define_300x250_3").addService(a.googletag.pubads()); - 1 !== b.slots.indexOf("UD_ROS_728x90_ATF_Flex") && a.googletag.defineSlot("/1031683/UD_ROS_728x90_ATF_Flex", [
                        [468, 60],
                        [728, 90],
                        [970, 90],
                        [970, 250]
                    ], "UD_ROS_728x90_ATF_Flex").defineSizeMapping(a.googletag.sizeMapping().addSize([0, 0], []).addSize([640, 0], [
                        [468, 60]
                    ]).addSize([728, 0], [
                        [728, 90]
                    ]).addSize([970, 0], [
                        [728, 90],
                        [970, 90]
                    ]).addSize([970, 600], [
                        [728, 90],
                        [970, 90],
                        [970, 250]
                    ]).build()).addService(a.googletag.pubads()); - 1 !== b.slots.indexOf("UD_ROS_300x600_ATF_Flex") && a.googletag.defineSlot("/1031683/UD_ROS_300x600_ATF_Flex", [
                        [300, 600],
                        [300, 250],
                        [160, 600]
                    ], "UD_ROS_300x600_ATF_Flex").defineSizeMapping(a.googletag.sizeMapping().addSize([0, 0], []).addSize([1024, 0], [
                        [300, 600],
                        [300, 250],
                        [160, 600]
                    ]).build()).addService(a.googletag.pubads()); - 1 !== b.slots.indexOf("UD_ROS_Fluid") && a.googletag.defineSlot("/1031683/UD_ROS_Fluid", "fluid", "UD_ROS_Fluid").addService(a.googletag.pubads()); -
                    1 != a.location.href.indexOf("lazy") || isSampled(a, 0) ? (a.googletag.pubads().enableLazyLoad({
                        fetchMarginPercent: 500,
                        renderMarginPercent: 100,
                        mobileScaling: 2
                    }), a.googletag.pubads().setTargeting("experiment", ["lazy"])) : a.googletag.pubads().setTargeting("experiment", ["none"]);
                    a.googletag.pubads().enableSingleRequest();
                    a.googletag.pubads().disableInitialLoad();
                    a.googletag.pubads().setTargeting("pb_update", ["openwrap"]);
                    for (var d in b.targeting) a.googletag.pubads().setTargeting(d, b.targeting[d]);
                    a.googletag.pubads().addEventListener("slotRenderEnded",
                        function(b) {
                            isSampled(a, .1) && a.navigator.sendBeacon("https://api.urbandictionary.com/v0/beacon", JSON.stringify({
                                event: "slotRenderEnded",
                                advertiserId: b.advertiserId,
                                campaignId: b.campaignId,
                                creativeId: b.creativeId,
                                isBackfill: b.isBackfill,
                                isEmpty: b.isEmpty,
                                lineItemId: b.lineItemId,
                                size: b.size.join("x"),
                                yieldGroupIds: b.yieldGroupIds,
                                adUnitPath: b.slot.getAdUnitPath()
                            }))
                        });
                    (d = getParameterByName("test", a.location.href)) && a.googletag.pubads().setTargeting("test", d);
                    a.googletag.enableServices()
                });
                loadAds(a);
                a.PWT = {};
                a.PWT.jsLoaded = function() {
                    var a = document.createElement("script");
                    a.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
                    var b = document.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b)
                };
                (function() {
                    var a = window.location.href,
                        b = "";
                    0 < a.indexOf("pwtv\x3d") && (a = /pwtv=(.*?)(&|$)/g.exec(a), 2 <= a.length && 0 < a[1].length && (b = "/" + a[1]));
                    a = document.createElement("script");
                    a.async = !0;
                    a.type = "text/javascript";
                    a.src = "//ads.pubmatic.com/AdServer/js/pwt/156796/877" +
                        b + "/pwt.js";
                    b = document.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b)
                })()
            }
        })();
        //]]>
    