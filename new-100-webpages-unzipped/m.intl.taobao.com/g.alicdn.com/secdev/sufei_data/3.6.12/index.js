! function(n, t, r, i, e, o, a, c, u, f, s, l, m, h, v) {
    var p, d = 370,
        g = "isg",
        y = c,
        b = !!y.addEventListener,
        w = u.getElementsByTagName("head")[0],
        z = f.userAgent;
    ! function(n) {
        function t() {
            return 4294967295 * i.random() >>> 0
        }

        function o(n) {
            var t;
            switch (typeof n) {
                case "function":
                    t = h.call(n);
                    break;
                case "object":
                    try {
                        t = n + ""
                    } catch (r) {
                        return !1
                    }
                    break;
                default:
                    return !1
            }
            return m.test(t)
        }

        function a(n) {
            for (var t = 0, r = 0, i = n.length; r < i; r++) t = (t << 5) - t + n.charCodeAt(r), t >>>= 0;
            return t
        }

        function c(n, t) {
            var r = n.indexOf(t);
            return -1 === r ? n : n.substr(0, r)
        }

        function u(n, t) {
            var r = n.indexOf(t);
            return -1 === r ? n : n.substr(r + t.length)
        }

        function f(n) {
            var t = n.match(v);
            if (!t) return null;
            var r = t[1];
            return p.test(r) && (r = u(r, "@"), r = c(r, ":")), r
        }

        function s(n) {
            for (var t = 0, r = n.length - 1; r >= 0; r--) {
                t = t << 1 | (0 | +n[r])
            }
            return t
        }

        function l(n, t, r, i) {
            b ? n.addEventListener(t, r, i) : n.attachEvent && n.attachEvent("on" + t, function() {
                r(event)
            })
        }
        n.a = t;
        var m = /native code/,
            h = r.prototype.toString;
        n.b = o, n.c = a, n.d = e.now || function() {
            return +new e
        }, n.e = c, n.f = u;
        var v = /^(?:https?:)?\/{2,}([^\/?#\\]+)/i,
            p = /[@:]/;
        n.g = f, n.h = s, n.i = l
    }(p || (p = {}));
    var _, k = function() {
        function n(n) {
            this.j = new o("(?:^|; )" + n + "=([^;]+)", "g"), this.k = n + "=", this.l = ""
        }
        return n.prototype.m = function() {
            for (var n, t = u.cookie, r = []; n = this.j.exec(t);) r.push(n[1]);
            return r
        }, n.prototype.n = function() {
            return this.m()[0]
        }, n.prototype.o = function(n) {
            if (!this.l) {
                var t = "";
                this.p && (t += "; domain=" + this.p), this.q && (t += "; path=" + this.q), this.r && (t += "; expires=" + this.r), this.l = t
            }
            u.cookie = this.k + n + this.l
        }, n.prototype.s = function() {
            var n = this.r;
            this.t("Thu, 01 Jan 1970 00:00:00 GMT"), this.o(""), this.t(n)
        }, n.prototype.u = function(n) {
            this.p = n, this.l = ""
        }, n.prototype.v = function(n) {
            this.q = n, this.l = ""
        }, n.prototype.t = function(n) {
            this.r = n, this.l = ""
        }, n
    }();
    ! function(n) {
        function t(n) {
            var t = n.stack || n.message;
            s(function(n) {
                r(t)
            }, 1)
        }

        function r(n) {
            var t = u._sufei_log;
            if (null == t && (t = .001), !(i.random() > t)) {
                c({
                    code: 1,
                    msg: (n + "").substr(0, 1e3),
                    pid: "sufeidata",
                    page: l.href.split(/[#?]/)[0],
                    query: l.search.substr(1),
                    hash: l.hash,
                    referrer: u.referrer,
                    title: u.title,
                    ua: f.userAgent,
                    rel: d,
                    c1: o()
                }, "//gm.mmstat.com/fsp.1.1?")
            }
        }

        function e(n, t, r) {
            n = (n || "").substr(0, 2e3), c({
                url: n,
                token: t,
                cna: o(),
                ext: r
            }, "https://fourier.alibaba.com/ts?")
        }

        function o() {
            return null == m && (m = new k("cna").n() || ""), m
        }

        function c(n, t) {
            var r = [];
            for (var i in n) r.push(i + "=" + a(n[i]));
            (new v).src = t + r.join("&")
        }
        n.w = t, n.x = r, n.y = e;
        var m
    }(_ || (_ = {}));
    var x;
    ! function(n) {
        function t() {
            if (un) {
                var n = Q + ":" + fn + ":" + un.join(",");
                _.y("", n, 4), un = null
            }
        }

        function r(n) {
            J = n.clientX, V = n.clientY, Q++;
            var t = n.target;
            Z = o(t)
        }

        function e(n) {
            var t = n.touches[0];
            K = t.clientX, nn = t.clientY, Q++;
            var r = n.target;
            Z = o(r)
        }

        function o(n) {
            if (null == c.innerHeight) return !0;
            var t = n.getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= c.innerHeight && t.right <= c.innerWidth
        }

        function a(n) {
            if (tn = n.isTrusted, null == tn && (tn = !0), b) {
                var r = n.target,
                    e = r.offsetWidth >> 1,
                    o = r.offsetHeight >> 1;
                if (!(e < 10 && o < 10)) {
                    var a = i.abs(n.offsetX - e),
                        u = i.abs(n.offsetY - o),
                        f = a < 2 && u < 2;
                    if (f && fn++, fn >= 3 && (3 === fn && (s(t, 2e4), p.i(c, "unload", t)), un && un.length < 20)) {
                        var l = (f ? "" : "!") + r.tagName;
                        un.push(l)
                    }
                }
            }
        }

        function m(n) {
            K = n.clientX, nn = n.clientY, U++
        }

        function v(n) {
            var t = n.touches[0];
            K = t.clientX, nn = t.clientY, U++
        }

        function d(n) {
            G++
        }

        function g(n) {
            F++
        }

        function w() {
            var n = h.availWidth,
                t = c.outerWidth;
            null == t && (t = u.documentElement.clientWidth || u.body.clientWidth), Y = n - t < 20
        }

        function k(n) {
            $ = !0, rn = !0
        }

        function x(n) {
            rn = !1
        }

        function A(n) {
            cn = n.gamma, an || (an = s(function(n) {
                removeEventListener("deviceorientation", A), s(C, 470)
            }, 30))
        }

        function C() {
            an = 0, addEventListener("deviceorientation", A)
        }

        function T() {
            if (u.ontouchmove ? (p.i(u, "touchmove", v, !0), p.i(u, "touchstart", e, !0)) : (p.i(u, "mousemove", m, !0), p.i(u, "mousedown", r, !0)), p.i(u, "click", a, !0), p.i(u, "keydown", g, !0), p.i(c, "scroll", d, !0), p.i(c, "focus", k), p.i(c, "blur", x), p.i(c, "resize", w), w(), f.getBattery) {
                var n = f.getBattery();
                n && (n.then(function(n) {
                    q = n
                })["catch"](function(n) {}), en = !0)
            }
            on && C()
        }

        function j() {
            return U
        }

        function E() {
            return G
        }

        function M() {
            return Q
        }

        function L() {
            return F
        }

        function W() {
            var n = J,
                t = V;
            return n || t || (n = K, t = nn), {
                F: n,
                G: t,
                H: tn
            }
        }

        function B() {
            return Z
        }

        function P() {
            var n = u.hidden;
            return null == n && (n = u.mozHidden), !n
        }

        function R() {
            return rn
        }

        function O() {
            return $
        }

        function S() {
            return Y
        }

        function D() {
            return en
        }

        function H() {
            return !q || q.charging
        }

        function X() {
            return q ? 100 * q.level : 127
        }

        function I() {
            return on
        }

        function N() {
            return on ? cn + 90 : 255
        }
        var Y, $, q, U = 0,
            Q = 0,
            G = 0,
            F = 0,
            J = 0,
            V = 0,
            Z = !0,
            K = 0,
            nn = 0,
            tn = !0,
            rn = !0,
            en = !1,
            on = !!y.DeviceOrientationEvent;
        (/dingtalk/.test(l.hostname) || /Qianniu|DingTalk/.test(z)) && (on = !1);
        var an, cn = null,
            un = [],
            fn = 0;
        n.z = T, n.A = j, n.B = E, n.C = M, n.D = L, n.I = W, n.J = B, n.K = P, n.L = R, n.M = O, n.N = S, n.O = D, n.P = H, n.Q = X, n.R = I, n.S = N
    }(x || (x = {}));
    var A;
    ! function(n) {
        function r() {
            return "$cdc_asdjflasutopfhvcZLmcfl_" in u || f.webdriver
        }

        function i() {
            if (o()) return !1;
            try {
                return !!u.createElement("canvas").getContext("webgl")
            } catch (n) {
                return !1
            }
        }

        function o() {
            return "ontouchstart" in u
        }

        function a() {
            return /zh-cn/i.test(f.language || f.systemLanguage)
        }

        function l() {
            return -480 === (new e).getTimezoneOffset()
        }

        function m() {
            return x.J()
        }

        function h() {
            return x.R()
        }

        function v() {
            return x.O()
        }

        function d() {
            return x.P()
        }

        function g() {
            var n = y.outerWidth,
                t = y.outerHeight,
                r = y.innerWidth,
                i = y.innerHeight;
            if (null == n || null == r) return !1;
            var e = n - r,
                o = t - i;
            return e > 240 || o > 150
        }

        function _() {
            return E && ("complete" !== u.readyState || p.d() - M > 1e4 || x.A() || x.B() || x.C() || x.D()) && (E = !1), E
        }

        function k() {
            for (var n = 0; n < B.length; n++) L[W.length + n] = B[n]();
            return p.h(L)
        }

        function A() {
            for (var n in H)
                if (H.hasOwnProperty(n)) {
                    var t = H[n];
                    if (t()) return +n.substr(1)
                }
            return 0
        }

        function C(n) {
            var t = y.RTCPeerConnection || y.mozRTCPeerConnection || y.webkitRTCPeerConnection;
            if (!t) return void n(0);
            var r = {
                    optional: [{
                        "RtpDataChannels": !0
                    }]
                },
                i = {
                    iceServers: [{
                        urls: "stun:stun.services.mozilla.com"
                    }],
                    sdpSemantics: "plan-b"
                },
                e = new t(i, r);
            s(function(n) {
                try {
                    e.close()
                } catch (t) {}
            }, 5e3), e.onicecandidate = function(t) {
                var r = t.candidate;
                if (!r) return void n(0);
                var i = T(r.candidate);
                null != i && (n(i), e.onicecandidate = null)
            }, e.createDataChannel(""), e.createOffer().then(function(n) {
                e.setLocalDescription(n, function() {}, function() {})
            })["catch"](function(t) {
                n(0)
            })
        }

        function T(n) {
            var t = /(\d+)\.(\d+)\.(\d+)\.(\d+)\D/.exec(n);
            return t ? (+t[1] << 24 | +t[2] << 16 | +t[3] << 8 | +t[4]) >>> 0 : null
        }

        function j() {
            M = p.d();
            for (var n = 0; n < W.length; n++) L[n] = W[n]()
        }
        var E = !0,
            M = 0,
            L = t(16),
            W = [r, i, o, a, l],
            B = [m, h, v, d, _, g];
        n.T = _, n.U = k;
        var P = f.vendor,
            R = w.style,
            O = "chrome" in c,
            S = "ActiveXObject" in c,
            D = p.b(y.WeakMap),
            H = {
                _13: function() {
                    return "callPhantom" in y || /PhantomJS/i.test(z)
                },
                _14: function() {
                    return /python/i.test(f.appVersion)
                },
                _15: function() {
                    return "sgAppName" in f
                },
                _16: function() {
                    return /Maxthon/i.test(P)
                },
                _17: function() {
                    return "opr" in y
                },
                _18: function() {
                    return O && /BIDUBrowser/i.test(z)
                },
                _19: function() {
                    return O && /LBBROWSER/i.test(z)
                },
                _20: function() {
                    return O && /QQBrowser/.test(z)
                },
                _21: function() {
                    return O && /UBrowser/i.test(z)
                },
                _22: function() {
                    return O && /2345Explorer/.test(z)
                },
                _23: function() {
                    return O && /TheWorld/.test(z)
                },
                _24: function() {
                    return O && "MSGesture" in y
                },
                _26: function() {
                    return "aef" in y && /WW_IMSDK/.test(z)
                },
                _25: function() {
                    return /Qianniu/.test(z)
                },
                _1: function() {
                    return O
                },
                _2: function() {
                    return "mozRTCIceCandidate" in y || "mozInnerScreenY" in y
                },
                _3: function() {
                    return "safari" in y
                },
                _4: function() {
                    return S && !("maxHeight" in R)
                },
                _5: function() {
                    return S && !p.b(y.postMessage)
                },
                _6: function() {
                    return S && !b
                },
                _7: function() {
                    return S && !p.b(y.Uint8Array)
                },
                _8: function() {
                    return S && !D
                },
                _9: function() {
                    return S && D
                },
                _10: function() {
                    return "Google Inc." === f.vendor
                },
                _11: function() {
                    return "Apple Computer, Inc." === f.vendor
                },
                _12: function() {
                    return S
                }
            };
        n.V = A, n.W = C, n.z = j
    }(A || (A = {}));
    var C, T = function() {
        function n() {
            var n = this,
                t = y.WeakMap;
            if (t) this.X = new t;
            else {
                var r = function() {
                    n.Y = [], n.Z = []
                };
                r(), setInterval(r, 1e4)
            }
        }
        return n.prototype.$ = function(n, t) {
            var r = this.X;
            r ? r.set(n, t) : (this.Y.push(n), this.Z.push(t))
        }, n.prototype._ = function(n) {
            var t = this.X;
            if (t) return t.get(n);
            var r = this.Y.indexOf(n);
            return r >= 0 ? this.Z[r] : void 0
        }, n
    }();
    ! function(n) {
        function t() {
            n.aa = r("1688.com,95095.com,a-isv.org,aliapp.org,alibaba-inc.com,alibaba.com,alibaba.net,alibabacapital.com,alibabacloud.com,alibabacorp.com,alibabadoctor.com,alibabagroup.com,alicdn.com,alidayu.com,aliexpress.com,alifanyi.com,alihealth.cn,alihealth.com.cn,alihealth.hk,alikmd.com,alimama.com,alimei.com,alios.cn,alipay-corp.com,alipay.com,aliplus.com,alisoft.com,alisports.com,alitianji.com,alitrip.com,alitrip.hk,aliunicorn.com,aliway.com,aliwork.com,alixiaomi.com,aliyun-inc.com,aliyun.com,aliyun.xin,aliyuncs.com,alizhaopin.com,amap.com,antfinancial-corp.com,antsdaq-corp.com,asczwa.com,atatech.org,autonavi.com,b2byao.com,bcvbw.com,cainiao-inc.cn,cainiao-inc.com,cainiao.com,cainiao.com.cn,cainiaoyizhan.com,cheng.xin,cibntv.net,cnzz.com,damai.cn,ddurl.to,dingding.xin,dingtalk.com,dingtalkapps.com,doctoryou.ai,doctoryou.cn,dratio.com,etao.com,feizhu.cn,feizhu.com,fliggy.com,fliggy.hk,freshhema.com,gaode.com,gein.cn,gongyi.xin,guoguo-app.com,hemaos.com,heyi.test,hichina.com,itao.com,jingguan.ai,jiyoujia.com,juhuasuan.com,koubei-corp.com,kumiao.com,laifeng.com,laiwang.com,lazada.co.id,lazada.co.th,lazada.com,lazada.com.my,lazada.com.ph,lazada.sg,lazada.vn,liangxinyao.com,lingshoujia.com,lwurl.to,mashangfangxin.com,mashort.cn,mdeer.com,miaostreet.com,mmstat.com,mshare.cc,mybank-corp.cn,nic.xin,pailitao.com,phpwind.com,phpwind.net,saee.org.cn,shenjing.com,shyhhema.com,sm.cn,soku.com,tanx.com,taobao.com,taobao.org,taopiaopiao.com,tb.cn,tmall.com,tmall.hk,tmall.ru,tmjl.ai,tudou.com,umeng.co,umeng.com,umengcloud.com,umsns.com,umtrack.com,wasu.tv,whalecloud.com,wrating.com,www.net.cn,xiami.com,ykimg.com,youku.com,yowhale.com,yunos-inc.com,yunos.com,yushanfang.com,zmxy-corp.com.cn,zuodao.com"), n.ba = r("127.0.0.1,afptrack.alimama.com,aldcdn.tmall.com,delivery.dayu.com,hzapush.aliexpress.com,local.alipcsec.com,localhost.wwbizsrv.alibaba.com,napi.uc.cn,sec.taobao.com,tce.alicdn.com,un.alibaba-inc.com,utp.ucweb.com,ynuf.aliapp.org"), n.ca = r("alicdn.com,aliimg.com,alimama.cn,alimmdn.com,alipay.com,alivecdn.com,aliyun.com,aliyuncs.com,amap.com,autonavi.com,cibntv.net,cnzz.com,facebook.com,googleapis.com,greencompute.org,lesiclub.cn,linezing.com,mmcdn.cn,mmstat.com,sm-tc.cn,sm.cn,soku.com,tanx.com,taobaocdn.com,tbcache.com,tbcdn.cn,tudou.com,uczzd.cn,umeng.com,wrating.com,xiami.net,xiaoshuo1-sm.com,ykimg.com,youku.com,zimgs.cn")
        }

        function r(n) {
            for (var t = {}, r = n.split(","), i = 0; i < r.length; i++) t[r[i]] = !0;
            return t
        }
        n.z = t
    }(C || (C = {}));
    var j;
    ! function(t) {
        function r(n, t, r) {
            switch (r.length) {
                case 0:
                    return t();
                case 1:
                    return t(r[0]);
                case 2:
                    return t(r[0], r[1]);
                default:
                    return t(r[0], r[2], r[3])
            }
        }

        function i(n, t) {
            switch (t.length) {
                case 0:
                    return new n;
                case 1:
                    return new n(t[0]);
                case 2:
                    return new n(t[0], t[1]);
                default:
                    return new n(t[0], t[2], t[3])
            }
        }

        function e(n, e, o) {
            return function() {
                var a, c = arguments;
                try {
                    a = e(c, this, n)
                } catch (u) {
                    a = c, _.w(u)
                }
                if (a) {
                    if (a === t.da) return;
                    c = a
                }
                return o ? i(n, c) : "apply" in n ? n.apply(this, c) : r(this, n, c)
            }
        }

        function o(n, t, r) {
            if (!n) return !1;
            var i = n[t];
            return !!i && (n[t] = e(i, r, !1), !0)
        }

        function a(n, t, r) {
            if (!n) return !1;
            var i = n[t];
            return !!i && (n[t] = e(i, r, !0), !0)
        }

        function c(t, r, i) {
            if (!u) return !1;
            var o = u(t, r);
            return !(!o || !o.set) && (o.set = e(o.set, i, !1), b || (o.get = function(n) {
                return function() {
                    return n.call(this)
                }
            }(o.get)), n.defineProperty(t, r, o), !0)
        }
        t.da = -1;
        var u = n.getOwnPropertyDescriptor;
        t.ea = o, t.fa = a, t.ga = c
    }(j || (j = {}));
    var E, M = function() {
        function n(n) {
            this.ha = n;
            for (var t = 0, r = n.length; t < r; t++) this[t] = 0
        }
        return n.prototype.ia = function() {
            for (var n = this.ha, t = [], r = -1, i = 0, e = n.length; i < e; i++)
                for (var o = this[i], a = n[i], c = r += a; t[c] = 255 & o, 0 != --a;) --c, o >>= 8;
            return t
        }, n.prototype.ja = function(n) {
            for (var t = this.ha, r = 0, i = 0, e = t.length; i < e; i++) {
                var o = t[i],
                    a = 0;
                do {
                    a = a << 8 | n[r++]
                } while (--o > 0);
                this[i] = a >>> 0
            }
        }, n
    }();
    ! function(n) {
        function t(n) {
            for (var t = 0, r = 0, i = n.length; r < i; r++) t = (t << 5) - t + n[r];
            return 255 & t
        }

        function r(n, t, r, i, e) {
            for (var o = n.length; t < o;) r[i++] = n[t++] ^ 255 & e, e = ~(131 * e)
        }

        function i(n) {
            for (var t = [], r = n.length, i = 0; i < r; i += 3) {
                var e = n[i] << 16 | n[i + 1] << 8 | n[i + 2];
                t.push(f.charAt(e >> 18), f.charAt(e >> 12 & 63), f.charAt(e >> 6 & 63), f.charAt(63 & e))
            }
            return t.join("")
        }

        function e(n) {
            for (var t = [], r = 0; r < n.length; r += 4) {
                var i = s[n.charAt(r)] << 18 | s[n.charAt(r + 1)] << 12 | s[n.charAt(r + 2)] << 6 | s[n.charAt(r + 3)];
                t.push(i >> 16, i >> 8 & 255, 255 & i)
            }
            return t
        }

        function o() {
            for (var n = 0; n < 64; n++) {
                var t = f.charAt(n);
                s[t] = n
            }
        }

        function a(n) {
            var e = t(n),
                o = [u, e];
            return r(n, 0, o, 2, e), i(o)
        }

        function c(n) {
            var i = e(n),
                o = i[1],
                a = [];
            if (r(i, 2, a, 0, o), t(a) == o) return a
        }
        var u = 4,
            f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            s = {};
        n.z = o, n.ka = a, n.la = c
    }(E || (E = {}));
    var L;
    ! function(n) {
        function t() {
            for (var n = f.platform, t = 0; t < r.length; t++)
                if (r[t].test(n)) return t + 1;
            return 0
        }
        var r = [/^Win32/, /^Win64/, /^Linux armv|^Linux aarch64/, /^Android/, /^iPhone/, /^iPad/, /^MacIntel/, /^Linux [ix]\d+/, /^ARM/, /^iPod/, /^BlackBerry/];
        n.ma = t
    }(L || (L = {}));
    var W;
    ! function(n) {
        function t() {
            return p.d() / 1e3 >>> 0
        }

        function r(n) {
            if (x.z(), A.z(), n) {
                var t = E.la(n);
                t && e.ja(t)
            }
            e[1] = p.a(), e[5] = A.V(), e[6] = L.ma(), e[8] = p.c(f.userAgent);
            try {
                A.W(function(n) {
                    e[7] = n
                })
            } catch (r) {
                e[7] = 0
            }
        }

        function i(n, r) {
            0 == e[4] && (e[4] = p.a(), e[3] = t()), e[2] = t(), e[16] = A.U();
            var i = !1;
            if (!A.T()) {
                e[9] = x.A(), e[10] = x.B(), e[11] = x.C(), e[12] = x.D();
                var a = x.I();
                e[13] = a.F, e[14] = a.G, i = a.H
            }
            e[17] = x.S(), e[18] = x.Q();
            var c = x.L(),
                u = x.N(),
                f = x.M(),
                s = [r, x.K(), n, c, i, !0, f, u];
            n && o++, e[15] = p.h(s), e[0] = o;
            var l = e.ia(),
                m = E.ka(l);
            return m
        }
        var e = new M([2, 2, 4, 4, 4, 1, 1, 4, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1]),
            o = 0;
        n.z = r, n.na = i
    }(W || (W = {}));
    var B;
    ! function(n) {
        function t(n, t) {
            var r = n.split("."),
                i = r.length - 1,
                e = r[i];
            if (e in t) return !0;
            for (var o = i - 1; o >= 0; o--)
                if ((e = r[o] + "." + e) in t) return !0;
            return !1
        }

        function r(n) {
            var t = l.hostname;
            if (T.test(t)) return x.o(n), t;
            var r = t.split("."),
                i = r.length;
            if (1 === i) return x.o(n), t;
            i > 5 && (i = 5), t = r.pop();
            for (var e = 2; e <= i && (t = r.pop() + "." + t, x.u(t), x.o(n), !(t in C.aa || t in C.ba || t in C.ca)) && x.n() !== n; e++);
            return t
        }

        function i(n) {
            var t = r(n),
                i = "(^|\\.)" + t.replace(/\./g, "\\.") + "$";
            z = new o(i, "i")
        }

        function a() {
            A = null;
            var n = W.na(!1, null);
            x.o(n)
        }

        function f() {
            var n = W.na(!0);
            x.o(n), null == A && (A = s(a, 0))
        }

        function m(n, t) {
            /^\/\//.test(n) && (n = l.protocol + n);
            var r = W.na(!0);
            _.y(n, r, t)
        }

        function h(n, t) {
            if (t)
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (i.test && i.test(n)) return !0
                }
            return !1
        }

        function v(n) {
            var r;
            if (null != n && (n += "", r = p.g(n)), !r) return f(), !0;
            if (z.test(r)) return f(), !0;
            if (T.test(r)) return !1;
            var i = p.e(n, "?");
            return h(i, y.__sufei_point_list) ? (m(n, 0), !1) : !t(r, C.ca) && (!(r in C.ba) && (!/\/gw-open\/|\/gw\//.test(i) && (!h(i, y.__sufei_ignore_list) && (m(n, 0), !1))))
        }

        function d(n) {
            var r = u.referrer;
            if (r) {
                var i = p.g(r);
                if (i && t(i, C.aa)) return
            }
            m(r, 1)
        }

        function b() {
            x.s();
            for (var n = l.hostname.split("."), t = n.pop();;) {
                var r = n.pop();
                if (!r) break;
                t = r + "." + t, x.u(t), x.s()
            }
        }

        function w() {
            C.z(), x = new k(g);
            var n = new e(p.d() + 15552e6).toUTCString();
            x.t(n), x.v("/");
            var t = x.m();
            t.length > 1 && (_.x("exist_multi_isg"), b(), x.m().length > 0 && _.x("clear_fail"));
            var r = t[0];
            W.z(r), r = W.na(!1, null), i(r), 0 === t.length && d(r), p.i(c, "unload", function(n) {
                var t = W.na(!1, !0);
                x.o(t)
            })
        }
        var z, x, A, T = /^(\d+\.)*\d+$/;
        n.oa = f, n.pa = v, n.z = w
    }(B || (B = {}));
    var P;
    ! function(n) {
        function t() {
            r() || (i("insertBefore"), i("appendChild"))
        }

        function r() {
            var n = y.HTMLScriptElement;
            if (!n) return !1;
            var t = n.prototype,
                r = /^src$/i;
            return j.ea(t, "setAttribute", function(n) {
                var t = n[0],
                    i = n[1];
                r.test(t) && o(i)
            }), j.ga(t, "src", function(n) {
                o(n[0])
            })
        }

        function i(n) {
            var t = y.Element;
            t ? j.ea(t.prototype, n, e) : (j.ea(w, n, e), j.ea(u.body, n, e))
        }

        function e(n) {
            var t = n[0];
            t && "SCRIPT" === t.tagName && o(t.src)
        }

        function o(n) {
            n += "", a.test(n) && B.pa(n)
        }
        n.z = t;
        var a = /callback=/
    }(P || (P = {}));
    var R;
    ! function(n) {
        function t(n) {
            return p.e(n.href, "#")
        }

        function r(n) {
            var t = n.target;
            if (!t) {
                var r = f[0];
                r && (t = r.target)
            }
            return t
        }

        function i(n) {
            if (/^https?\:/.test(n.protocol)) {
                var i = r(n);
                if (!i || /^_self$/i.test(i)) {
                    if (t(n) === c && n.hash) return
                }
                B.pa(n.href)
            }
        }

        function e(n) {
            if (!n.defaultPrevented)
                for (var t = n.target || n.srcElement; t;) {
                    var r = t.tagName;
                    if ("A" === r || "AREA" === r) {
                        i(t);
                        break
                    }
                    t = t.parentNode
                }
        }

        function o(n) {
            var t = n.target || n.srcElement;
            s._(t) !== m && B.pa(t.action)
        }

        function a() {
            f = u.getElementsByTagName("base"), c = t(l), p.i(u, "click", e), p.i(u, "submit", o);
            var n = y.HTMLFormElement;
            n && j.ea(n.prototype, "submit", function(n, t) {
                var r = t;
                B.pa(r.action), s.$(r, ++m)
            })
        }
        var c, f, s = new T,
            m = 0;
        n.z = a
    }(R || (R = {}));
    var O;
    ! function(n) {
        function t() {
            r(), /Mobile/.test(z) && (i(), e() || p.i(u, "DOMContentLoaded", e))
        }

        function r() {
            j.ea(y, "fetch", function(n) {
                var t = n[0],
                    r = n[1];
                "string" == typeof t && B.pa(t) && (r = r || {}, r.credentials && "omit" !== r.credentials || (r.credentials = "same-origin"), n[1] = r)
            })
        }

        function i() {
            var n = y.lib;
            if (n) {
                var t = !/taobao.com$/.test(l.hostname);
                j.ea(n.windvane, "call", function(n) {
                    if ("MtopWVPlugin" === n[0] && "send" === n[1]) {
                        var r = n[2];
                        if (t) {
                            (r.ext_headers || {})["X-Sufei-Token"] = W.na(!0)
                        } else B.oa()
                    }
                })
            }
        }

        function e() {
            var n = y.jsbridge;
            if (n && (n = n["default"])) return j.ea(n, "pushBack", function(n) {
                "native:" === n[0] && B.oa()
            }), !0
        }
        n.z = t
    }(O || (O = {}));
    var S;
    ! function(n) {
        function t() {
            var n = y.XMLHttpRequest;
            if (n) {
                var t = n.prototype;
                t && r(t) || i()
            }
            e()
        }

        function r(n) {
            var t = j.ea(n, "open", function(n, t) {
                    var r = n[1];
                    o.$(t, r)
                }),
                r = j.ea(n, "send", function(n, t) {
                    var r = o._(t);
                    B.pa(r)
                });
            return t && r
        }

        function i() {
            j.fa(y, "XMLHttpRequest", function() {
                B.pa()
            })
        }

        function e() {
            var n = /XMLHTTP/i;
            j.fa(y, "ActiveXObject", function(t) {
                var r = t[0];
                r && n.test(r) && B.pa()
            })
        }
        var o = new T;
        n.z = t
    }(S || (S = {}));
    var D;
    ! function(n) {
        function t() {
            E.z(), B.z(), R.z(), S.z(), O.z(), P.z()
        }
        var r = "_sufei_data2";
        ! function() {
            if (!u[r]) {
                u[r] = d;
                try {
                    t()
                } catch (n) {
                    _.w(n)
                }
            }
        }()
    }(D || (D = {}))
}(Object, Array, Function, Math, Date, RegExp, encodeURIComponent, window, document, navigator, setTimeout, location, history, screen, Image);