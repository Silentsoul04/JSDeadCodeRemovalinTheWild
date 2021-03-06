(function() {
    var h;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }

    function ba(a) {
        var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function ca(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }
    var da = 'function' == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ea;
    if ('function' == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                    ha: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.ha;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
            return a
        } : null
    }
    var ja = ea;

    function n(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ja) ja(a, b);
        else
            for (var c in b)
                if ('prototype' != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.ma = b.prototype
    }
    var ka = 'undefined' != typeof window && window === this ? this : 'undefined' != typeof global && null != global ? global : this,
        la = 'function' == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        };

    function ma(a, b) {
        if (b) {
            for (var c = ka, d = a.split('.'), k = 0; k < d.length - 1; k++) {
                var f = d[k];
                f in c || (c[f] = {});
                c = c[f]
            }
            d = d[d.length - 1];
            k = c[d];
            f = b(k);
            f != k && null != f && la(c, d, {
                configurable: !0,
                writable: !0,
                value: f
            })
        }
    }
    ma('Promise', function(a) {
        function b(e) {
            this.b = 0;
            this.j = void 0;
            this.a = [];
            var g = this.h();
            try {
                e(g.resolve, g.reject)
            } catch (l) {
                g.reject(l)
            }
        }

        function c() {
            this.a = null
        }

        function d(e) {
            return e instanceof b ? e : new b(function(g) {
                g(e)
            })
        }
        if (a) return a;
        c.prototype.b = function(e) {
            if (null == this.a) {
                this.a = [];
                var g = this;
                this.h(function() {
                    g.j()
                })
            }
            this.a.push(e)
        };
        var k = ka.setTimeout;
        c.prototype.h = function(e) {
            k(e, 0)
        };
        c.prototype.j = function() {
            for (; this.a && this.a.length;) {
                var e = this.a;
                this.a = [];
                for (var g = 0; g < e.length; ++g) {
                    var l =
                        e[g];
                    e[g] = null;
                    try {
                        l()
                    } catch (m) {
                        this.i(m)
                    }
                }
            }
            this.a = null
        };
        c.prototype.i = function(e) {
            this.h(function() {
                throw e;
            })
        };
        b.prototype.h = function() {
            function e(m) {
                return function(w) {
                    l || (l = !0, m.call(g, w))
                }
            }
            var g = this,
                l = !1;
            return {
                resolve: e(this.G),
                reject: e(this.i)
            }
        };
        b.prototype.G = function(e) {
            if (e === this) this.i(new TypeError('A Promise cannot resolve to itself'));
            else if (e instanceof b) this.H(e);
            else {
                a: switch (typeof e) {
                    case 'object':
                        var g = null != e;
                        break a;
                    case 'function':
                        g = !0;
                        break a;
                    default:
                        g = !1
                }
                g ? this.F(e) : this.m(e)
            }
        };
        b.prototype.F = function(e) {
            var g = void 0;
            try {
                g = e.then
            } catch (l) {
                this.i(l);
                return
            }
            'function' == typeof g ? this.I(g, e) : this.m(e)
        };
        b.prototype.i = function(e) {
            this.u(2, e)
        };
        b.prototype.m = function(e) {
            this.u(1, e)
        };
        b.prototype.u = function(e, g) {
            if (0 != this.b) throw Error('Cannot settle(' + e + ', ' + g + '): Promise already settled in state' + this.b);
            this.b = e;
            this.j = g;
            this.B()
        };
        b.prototype.B = function() {
            if (null != this.a) {
                for (var e = 0; e < this.a.length; ++e) f.b(this.a[e]);
                this.a = null
            }
        };
        var f = new c;
        b.prototype.H = function(e) {
            var g = this.h();
            e.T(g.resolve, g.reject)
        };
        b.prototype.I = function(e, g) {
            var l = this.h();
            try {
                e.call(g, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        b.prototype.then = function(e, g) {
            function l(B, E) {
                return 'function' == typeof B ? function(ta) {
                    try {
                        m(B(ta))
                    } catch (ua) {
                        w(ua)
                    }
                } : E
            }
            var m, w, va = new b(function(B, E) {
                m = B;
                w = E
            });
            this.T(l(e, m), l(g, w));
            return va
        };
        b.prototype['catch'] = function(e) {
            return this.then(void 0, e)
        };
        b.prototype.T = function(e, g) {
            function l() {
                switch (m.b) {
                    case 1:
                        e(m.j);
                        break;
                    case 2:
                        g(m.j);
                        break;
                    default:
                        throw Error('Unexpected state: ' +
                            m.b);
                }
            }
            var m = this;
            null == this.a ? f.b(l) : this.a.push(l)
        };
        b.resolve = d;
        b.reject = function(e) {
            return new b(function(g, l) {
                l(e)
            })
        };
        b.race = function(e) {
            return new b(function(g, l) {
                for (var m = ba(e), w = m.next(); !w.done; w = m.next()) d(w.value).T(g, l)
            })
        };
        b.all = function(e) {
            var g = ba(e),
                l = g.next();
            return l.done ? d([]) : new b(function(m, w) {
                function va(ta) {
                    return function(ua) {
                        B[ta] = ua;
                        E--;
                        0 == E && m(B)
                    }
                }
                var B = [],
                    E = 0;
                do B.push(void 0), E++, d(l.value).T(va(B.length - 1), w), l = g.next(); while (!l.done)
            })
        };
        return b
    });

    function na(a) {
        return 'https://' + (a ? a + '.' : '') + 'scroll.com'
    }
    var oa = na(),
        p = na('connect'),
        pa = p + '/html/scrollbar/index';

    function q(a, b) {
        for (var c = a.length, d = 0; d < c; d++)
            if (b(a[d])) return !0;
        return !1
    }

    function r(a, b) {
        if (t(Array.isArray) ? Array.isArray(a) : '[object Array]' === a.toString())
            for (var c = a.length, d = 0; d < c; d++) b(a[d], d);
        else
            for (c in a) a.hasOwnProperty(c) && b(a[c], c)
    }

    function qa(a, b) {
        var c = [];
        r(a, function(d) {
            b(d) && c.push(d)
        });
        return c
    }

    function ra(a, b) {
        for (var c = a.length, d = 0; d < c; d++)
            if (b(a[d])) return a[d];
        return null
    }

    function t(a) {
        return 'function' === typeof a
    }

    function u(a, b) {
        return 0 <= a.indexOf(b)
    }

    function sa(a) {
        if (t(a)) try {
            a()
        } catch (b) {}
    }

    function wa(a) {
        var b = !1;
        return function() {
            b || (a.apply(null, arguments), b = !0, setTimeout(function() {
                b = !1
            }, 100))
        }
    }

    function xa(a) {
        function b() {
            c && clearTimeout(c);
            d = arguments;
            c = setTimeout(function() {
                a.apply(null, d)
            }, 100)
        }
        var c = null,
            d = null;
        b.flush = function() {
            c && clearTimeout(c);
            a.apply(null, d)
        };
        return b
    }

    function v(a, b) {
        return t(a.bind) ? a.bind(b) : function() {
            return a.apply(b, Array.prototype.slice.call(arguments))
        }
    }

    function x(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        return 'function' === typeof Object.assign ? Object.assign.apply(Object, arguments) : ya.apply(null, [a].concat(c instanceof Array ? c : ca(ba(c))))
    }

    function ya(a, b) {
        for (var c = 1; c < arguments.length; ++c);
        c = Object(a);
        for (var d = arguments.length, k = 1; k < d; k++) {
            var f = arguments[k];
            if (null !== f)
                for (var e in f) Object.prototype.hasOwnProperty.call(f, e) && (c[e] = f[e])
        }
        return c
    }

    function za(a, b) {
        var c = 1;
        b && (b = window.setTimeout(function() {
            c = -1;
            a()
        }, b));
        return function() {
            if (0 === --c) return b && window.clearTimeout(b), a.apply(this, arguments)
        }
    }

    function Aa(a, b, c) {
        var d = a[b];
        a[b] = function(k) {
            for (var f = [], e = 0; e < arguments.length; ++e) f[e] = arguments[e];
            d.apply(a, f);
            c.apply(null, f)
        }
    };

    function Ba(a) {
        var b = '';
        r(a, function(c, d) {
            b += d + ':' + c + ';'
        });
        return b
    };

    function y(a) {
        return Array.prototype.slice.call(document.getElementsByTagName(a))
    }

    function Ca(a) {
        for (; a.firstChild;) a.removeChild(a.firstChild)
    }

    function z(a, b) {
        var c = Ba(b);
        a.setAttribute('style', c)
    }

    function Da() {
        var a = ['@keyframes _scr_spin{from{transform: rotate(0deg);}to{transform: rotate(360deg);}}._scr_loading:before{', Ba({
                content: '""',
                'background-image': "url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2028%2028%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20stroke%3D%22%23000%22%20cx%3D%2214%22%20cy%3D%2214%22%20r%3D%2211.294%22%2F%3E%3Cpath%20d%3D%22M21.986%2021.986A11.259%2011.259%200%200%201%2014%2025.294a11.259%2011.259%200%200%201-7.986-3.308%22%20stroke%3D%22%2333E2D1%22%20stroke-width%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
                'background-size': '28px 28px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '28px',
                height: '28px',
                'margin-top': '-14px',
                'margin-left': '-14px',
                animation: '_scr_spin 1s infinite linear'
            }), '}'].join(''),
            b = document.head || y('head')[0],
            c = document.createElement('style');
        c.type = 'text/css';
        c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
        b.appendChild(c)
    }

    function Ea(a) {
        var b = '';
        'getComputedStyle' in window && (a = window.getComputedStyle(a) || {}, a.getPropertyValue && (b = (a.getPropertyValue('position') || '').toLowerCase()));
        return b
    }

    function Fa(a) {
        return q(a.className.split(' '), function(b) {
            return '_scr_loading' === b
        })
    }

    function Ga(a) {
        if (!Fa(a))
            if ('' === a.className) a.className = '_scr_loading';
            else {
                var b = a.className.split(' ');
                b.push('_scr_loading');
                a.className = b.join(' ')
            }
    }

    function Ha(a) {
        if (Fa(a)) {
            var b = a.className.split(' ');
            b = qa(b, function(c) {
                return '_scr_loading' !== c
            });
            a.className = b.join(' ')
        }
    }

    function A(a, b) {
        (b || document.body).appendChild(a)
    }

    function C(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent('on' + b, c)
    }

    function D(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent('on' + b, c)
    }

    function Ia(a, b, c) {
        return new Promise(function(d) {
            function k() {
                f.style.visibility = 'visible';
                f.style.display = 'block';
                D(f, 'load', k);
                d(f)
            }
            var f = document.createElement('iframe');
            f.setAttribute('frameBorder', '0');
            f.setAttribute('allowtransparency', 'true');
            var e = {};
            e = Ba((e.display = 'none', e.visibility = 'hidden', e));
            var g = Ba(b);
            f.style.cssText = e + g;
            C(f, 'load', k);
            f.src = a;
            A(f, c)
        })
    }

    function Ja(a) {
        return ra(y('iframe'), function(b) {
            return b.contentWindow === a
        })
    }

    function Ka() {
        var a = La;
        'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? a() : (a = za(a), C(document, 'DOMContentLoaded', a), C(window, 'load', a))
    }

    function Ma(a) {
        'MutationObserver' in window && (new MutationObserver(function(b) {
            r(b, function(c) {
                r(c.addedNodes, function(d) {
                    'VIDEO' === d.tagName && a(d)
                })
            })
        })).observe(document.body, {
            childList: !0,
            subtree: !0
        })
    }

    function Na(a, b) {
        if ('MutationObserver' in window) {
            var c = new MutationObserver(function(d) {
                r(d, function(k) {
                    ra(k.removedNodes, function(f) {
                        return f === a
                    }) && b()
                })
            });
            c.observe(a.parentNode, {
                childList: !0
            });
            return c
        }
        return null
    };

    function Oa(a, b) {
        b = void 0 === b ? {} : b;
        this.i = a;
        this.j = [];
        this.a = b
    }
    Oa.prototype.b = function(a) {
        this.a = this.i(a, this.a);
        r(this.j, function(b) {
            return b()
        })
    };
    var Pa = /(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i;

    function Qa(a, b) {
        var c = a.indexOf('#'),
            d = (-1 < a.indexOf('?') ? '&' : '?') + b;
        return -1 === c ? a + d : a.substring(0, c) + d + a.substring(c)
    }

    function Ra(a, b) {
        return Qa(a, Sa(b))
    }

    function Sa(a) {
        var b = [];
        r(a, function(c, d) {
            null !== c && void 0 !== c && b.push(d + '=' + encodeURIComponent(c))
        });
        return b.join('&')
    }

    function Ta(a, b) {
        if (-1 === a.indexOf('?')) return a;
        var c = a.split('?');
        b = -1 < b.indexOf('=') ? b : b + '=';
        var d = qa(c[1].split('&'), function(k) {
            return -1 === k.indexOf(b)
        }).join('&');
        return d ? c[0] + '?' + d : c[0]
    }

    function Ua(a) {
        var b = void 0 === b ? window.history.state : b;
        var c = void 0 === c ? document.title : c;
        window.history.replaceState(b, c, a)
    }

    function Va(a) {
        var b = F();
        a = (new RegExp('[?&]' + a + '=([^&#]*)')).exec(b);
        return !a || 2 > a.length || 0 === a[1].length ? null : decodeURIComponent(a[1])
    }

    function Wa() {
        if (!document.querySelector) return null;
        var a = document.querySelector('link[rel="canonical"]');
        return (a = a ? a.getAttribute('href') : null) && Pa.test(a) && ('URL' in window && t(window.URL) ? (new window.URL(a)).hostname === window.location.hostname : u(a, window.location.hostname)) ? a : (a = (a = document.querySelector('meta[property="og:url"]')) ? a.getAttribute('content') : null) && Pa.test(a) ? a : null
    }

    function F() {
        return encodeURI(window.location.href)
    }

    function Xa() {
        var a = {};
        a.o = F();
        a.c = Wa();
        return a
    }

    function Ya(a) {
        var b = Xa(),
            c = b.o;
        1E3 < c.length && (b.o = c.split('?')[0]);
        b.c = b.c || '';
        return Ra(a, b)
    };

    function Za(a, b) {
        switch (a.type) {
            case 'vp':
                var c = {};
                return x({}, b, (c.au = a.D, c));
            case 'ai':
                return c = {}, x({}, b, (c.ai = a.D, c.ia = !0, c));
            case 'na':
                return c = {}, x({}, b, (c.ai = a.D, c.ia = !1, c));
            case 'ua':
                return c = {}, x({}, b, (c.ai = a.D, c.ia = null, c));
            case 'ap':
                return c = {}, x({}, b, (c.aa = a.D, c));
            case 'ac':
                return c = {}, x({}, b, (c.av = a.D, c));
            case 'us':
                return c = {}, x({}, b, (c.rd = a.D, c));
            default:
                return b
        }
    };

    function $a(a, b) {
        this._scrmp = a;
        this._scrmd = b
    }

    function ab(a, b) {
        if (null !== a && 'object' === typeof a && 'string' === typeof a._scrmp) {
            var c = a._scrmp,
                d = a._scrmd;
            b(c, 'string' === typeof d || 'boolean' === typeof d ? d : '')
        }
    };
    var G = null;

    function bb(a) {
        r(G, function(b) {
            b(a)
        })
    }

    function cb(a, b, c) {
        return function(d) {
            var k = '*' === b || d.origin === b;
            a && d.source !== a || !k || ab(d.data, function(f, e) {
                c(f, e, d.source, d.origin)
            })
        }
    }

    function db(a, b, c) {
        null === G && (G = [], C(window, 'message', bb));
        a = cb(a, b, c);
        G.push(a);
        return a
    }

    function eb(a) {
        G = qa(G, function(b) {
            return b !== a
        })
    }

    function H(a, b, c, d) {
        'postMessage' in a && a.postMessage(new $a(c, d), b)
    };

    function I(a, b) {
        var c = this;
        this.b = a;
        this.i = b;
        this.a = {};
        this.h = db(a, b, function(d, k) {
            var f = c.a[d];
            f && r(f, function(e) {
                e(k)
            })
        })
    }

    function J(a, b, c) {
        a.a[b] = a.a[b] || [];
        a.a[b].push(c)
    }
    I.prototype.write = function(a, b) {
        H(this.b, this.i, a, b)
    };
    I.prototype.source = function() {
        return this.b
    };

    function fb(a) {
        eb(a.h);
        a.b = null;
        a.a = {};
        a.h = null
    };

    function gb(a, b) {
        function c(e) {
            return ra(d, function(g) {
                return g === e
            })
        }
        b = void 0 === b ? '' : b;
        var d = [],
            k = b + '_ha',
            f = b + '_hi';
        db(null, '*', function(e, g, l, m) {
            e !== k || c(g) || (H(l, '*', k, g), a(new I(l, m)), d.push(g))
        });
        r(y('iframe'), function(e) {
            return H(e.contentWindow, '*', f)
        })
    }

    function hb(a) {
        var b = void 0 === b ? '' : b;
        var c = '' + Math.random(),
            d = b + '_ha',
            k = b + '_hi',
            f = db(window.parent, '*', function(e, g, l, m) {
                e === d && g === c && (eb(f), a(new I(l, m)));
                e === k && H(window.parent, '*', d, c)
            });
        H(window.parent, '*', d, c)
    };

    function ib() {
        Oa.apply(this, arguments)
    }
    n(ib, Oa);

    function jb(a) {
        var b = {};
        return JSON.stringify((b.t = a.type, b.p = a.D, b))
    }

    function kb(a) {
        a = JSON.parse(a);
        return {
            type: a.t,
            D: a.p
        }
    }

    function lb(a, b) {
        return a + '_' + b
    }

    function mb(a, b) {
        function c(g) {
            r(k, function(l) {
                return l(g)
            });
            r(f, function(l) {
                return l.write(a + '_ra', g)
            });
            d.b(kb(g))
        }
        var d = new Oa(b, {}),
            k = [],
            f = [];
        gb(function(g) {
            f.push(g);
            J(g, a + '_rs', function() {
                return g.write(a + '_rs', JSON.stringify(d.a))
            });
            J(g, a + '_ra', function(l) {
                'string' === typeof l && c(l, g)
            })
        }, a + '_' + nb);
        var e = {};
        return e.s = function(g) {
            k.push(g)
        }, e.d = function(g) {
            c(g)
        }, e.g = function() {
            return d.a
        }, e
    }

    function ob() {
        function a(c) {
            ib.call(this, Za, c.g());
            var d = this;
            this.h = c;
            this.h.s(function(k) {
                ib.prototype.b.call(d, kb(k))
            })
        }
        var b = K();
        n(a, ib);
        a.a = mb;
        a.h = lb;
        a.b = kb;
        a.i = jb;
        a.prototype.b = function(c) {
            this.h.d(jb(c))
        };
        b = b._ps || (b._ps = mb('_ps', Za));
        return new a(b)
    }
    var nb = 'rs';
    var pb = null;

    function L() {
        if (null === pb) {
            pb = !1;
            try {
                window.localStorage.setItem('__scroll_test', '__scroll_test'), '__scroll_test' === window.localStorage.getItem('__scroll_test') && (window.localStorage.removeItem('__scroll_test'), pb = !0)
            } catch (a) {}
        }
        return pb
    };

    function M() {
        return window !== window.top
    }

    function qb() {
        return '1' === (L() ? window.localStorage.getItem('__scroll_prestige') : null)
    };

    function rb() {
        var a = M() ? document.referrer : F();
        return u(a, '_scrd=1')
    };

    function sb(a) {
        var b = document.cookie.split('; '),
            c = b.length,
            d;
        for (d = 0; d < c; d++) {
            var k = b[d].split('=');
            if (k[0] === a) return k[1]
        }
        return null
    };

    function tb() {
        return sb('scroll0') || Va('scroll0')
    }

    function ub() {
        var a = {};
        return x(Xa(), (a.e = tb(), a))
    };

    function vb(a) {
        var b = K();
        if (b._i) return !0;
        x(b, a);
        wb('detected', null);
        wb('autopage', !1);
        xb();
        b._i = !0;
        return !1
    }

    function K() {
        return window.Scroll || (window.Scroll = {})
    }

    function yb() {
        var a = K();
        return a.config || (a.config = {})
    }

    function xb() {
        if (window.Scroll) {
            for (var a = window.Scroll, b = a._q || [], c; c = b.shift();) sa(c);
            a['do'] = function(d) {
                sa(d)
            }
        }
    }

    function wb(a, b) {
        var c = yb();
        void 0 === c[a] && (c[a] = b)
    };

    function zb() {
        self.onmessage = function(a) {
            '_scr_cb' === a.data && fetch('https://block.scroll.com/check.json').then(function() {
                return !1
            })['catch'](function(b) {
                return 'Resource blocked by content blocker' === b.message
            }).then(function(b) {
                return postMessage(b)
            })
        }
    }

    function Ab() {
        if (!('Worker' in window && 'fetch' in window)) return Promise.resolve(!1);
        try {
            var a = new Worker(URL.createObjectURL(new Blob(['(' + zb.toString() + ')()'], {
                type: 'application/javascript'
            })));
            return new Promise(function(b) {
                a.onmessage = function(c) {
                    b(!0 === c.data)
                };
                a.postMessage('_scr_cb')
            })
        } catch (b) {
            return Promise.resolve(!1)
        }
    };

    function N(a, b, c) {
        return new Promise(function(d, k) {
            var f = new XMLHttpRequest;
            f.withCredentials = !0;
            f.onreadystatechange = function() {
                if (f.readyState === XMLHttpRequest.DONE) {
                    var l = f.status;
                    1223 === l && (l = 204);
                    if (200 !== l && 204 !== l) {
                        var m = Error(l);
                        m.a = l;
                        k(m)
                    } else {
                        try {
                            m = JSON.parse(f.responseText)
                        } catch (w) {}
                        d(null !== m && 'object' === typeof m ? m : {})
                    }
                }
            };
            var e = p + a,
                g = c ? Sa(c) : '';
            'GET' === b ? (f.open(b, e + (g ? '?' + g : '')), f.send()) : (f.open(b, e), f.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'), f.send(g))
        })
    };

    function O() {
        return (L() ? window.localStorage.getItem('scroll1') : null) || sb('scroll1')
    }

    function Bb() {
        var a = {};
        a.t = O();
        a.ls = L();
        return a
    }

    function Cb() {
        var a = {};
        O() && (a.t = O());
        return a
    }

    function Db(a) {
        var b = a.cj;
        b && ('0' === b ? L() && window.localStorage.removeItem('scroll1') : L() && window.localStorage.setItem('scroll1', b));
        if (a = a.t) document.cookie = a
    };

    function Eb() {
        return sb('scroll2') ? Promise.resolve('s') : Ab().then(function(a) {
            return a ? 'y' : 'n'
        })
    };

    function P(a) {
        this.b = v(this.a, this);
        this.j = v(this.m, this);
        this.h = a;
        this.i = N('/embed/check', 'POST', this.h).then(this.b, this.j)
    }
    P.prototype.a = function(a) {
        var b = a.c;
        b && (document.cookie = b);
        var c = void 0 === c ? window.location.search : c;
        /[?&]scroll0/.test(c) && (b = F(), b = Ta(b, 'scroll0'), Ua(b));
        return Promise.resolve(a)
    };
    P.prototype.m = function(a) {
        if (502 !== a.a) throw a;
        return N('/embed/check', 'POST', this.h).then(this.b)
    };

    function Fb() {
        var a = {},
            b = {};
        var c = {};
        c.r = document.referrer;
        c.vr = 'scrolljs-20190925.1856';
        c = x(c, ub());
        return x(c, (a.d = !0 === yb().detected, a), Bb(), (b.ct = Va('scrolltoken'), b))
    }

    function Q() {
        P.apply(this, arguments)
    }
    n(Q, P);

    function Gb() {
        var a = Fb();
        return (new Q(a)).i
    }
    Q.prototype.a = function(a) {
        Db(a);
        return P.prototype.a.call(this, a)
    };

    function Hb() {
        var a = encodeURIComponent(Ra(p + '/embed/check', Fb()));
        window.location.href = oa + '/reportissue?url=' + a
    };

    function Ib(a) {
        this.a = a;
        this.b = new I(this.a.contentWindow, p)
    }

    function Jb(a) {
        'string' === typeof a && (0 === a.indexOf('#') && (a = a.slice(1)), a = document.getElementById(a));
        return a
    }

    function Kb() {
        var a = document.createElement('div');
        z(a, {
            display: 'block',
            width: '100%',
            'max-width': '683px',
            margin: '0 auto'
        });
        return a
    }

    function Lb() {
        var a = document.createElement('div');
        z(a, {
            position: 'relative',
            display: 'block',
            width: '100%',
            'padding-top': '87%',
            overflow: 'hidden',
            'min-height': '500px'
        });
        return a
    }

    function Mb(a) {
        Ca(a);
        var b = Lb();
        Da();
        Ga(b);
        var c = Kb();
        A(b, c);
        A(c, a);
        return Ia(p + '/html/acquisition/index', {
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: '0'
        }, b).then(function(d) {
            Ha(b);
            return new Ib(d)
        })
    };

    function Nb(a) {
        this.h = a;
        this.b = !0;
        this.a = null
    }
    Nb.prototype.call = function(a) {
        var b = this,
            c = arguments;
        if (this.b) this.a = function() {
            return b.h.apply(b, c)
        };
        else return this.h.apply(this, c)
    };

    function Ob(a) {
        var b = this;
        this.b = a;
        this.a = new I(this.b.contentWindow, p);
        J(this.a, 'id', function() {
            b.h && (b.h(), b.h = null);
            document.body.removeChild(b.b);
            fb(b.a);
            b.b = null;
            b.a = null;
            b.i = !1
        });
        this.i = !0;
        this.h = null
    }

    function Pb() {
        var a = Ya('/html/acquisition/full'),
            b = {};
        return Ia(p + a, x((b.padding = '0', b.width = '100%', b.height = '100%', b.position = 'fixed', b.top = '0', b.left = '0', b['margin-top'] = '0', b['z-index'] = '2147483647', b), {})).then(function(c) {
            return new Ob(c)
        })
    }
    Ob.prototype.l = function() {
        return this.i
    };

    function Qb(a) {
        J(a, 'is', function() {
            var b = F();
            b = Qa(b, 'scrollfirstvisit=1');
            Ua(b);
            Promise.all([Gb().then(function(c) {
                if (!c.r) throw Error('Invalid state: No refresh needed after signup');
            }), new Promise(function(c) {
                J(a, 'id', c)
            })]).then(function() {
                b = Qa(b, 'scrollnorefresh=1');
                window.location.href = b
            })
        })
    }
    var Rb = new Nb(function() {
        Pb().then(function(a) {
            return Qb(a.a)
        })
    });

    function Sb(a) {
        var b = Jb(a);
        return b ? Mb(b).then(function(c) {
            return Qb(c.b)
        }) : Promise.reject(Error('Invalid argument: ' + a + '. Required: ID string or DOM Element'))
    };

    function R() {
        this.G = 0;
        this.V = this.I = null
    }
    R.prototype.J = function() {
        this.G = S(this);
        this.I = this.l() ? (new Date).getTime() : null
    };

    function S(a) {
        if (null === a.I) var b = 0;
        else b = (new Date).getTime() - a.I, b = a.V ? Math.min(b, a.V) : b;
        return a.G + b
    }
    R.prototype.R = function() {
        this.G = 0
    };
    var Tb, Ub;
    q(['', 'ms', 'webkit'], function(a) {
        var b = a + 'Hidden';
        b = b.charAt(0).toLowerCase() + b.slice(1);
        if ('undefined' !== typeof document && 'boolean' === typeof document[b]) return Tb = b, Ub = a + 'visibilitychange', !0
    });

    function Vb(a) {
        if (rb()) {
            this.b = a;
            this.a = document.createElement('div');
            var b = M(),
                c = {};
            z(this.a, (c.position = a ? 'absolute' : 'fixed', c[b ? 'bottom' : 'top'] = '0', c[b ? 'right' : 'left'] = '0', c.padding = '3px 6px 6px 6px', c.background = '#424242', c.color = b ? '#FDD835' : '#33e2d1', c['font-family'] = 'monospace', c));
            A(this.a, a)
        }
    }
    Vb.prototype.log = function(a) {
        if (!rb()) return function() {};
        var b = document.createElement('div'),
            c = {};
        z(b, (c.margin = '0', c));
        a && (b.innerText = a);
        A(b, this.a);
        return function(d) {
            b.innerText = d
        }
    };
    var Wb = {};

    function Xb(a, b) {
        var c = Wb[a] || [];
        c.push(b);
        Wb[a] = c
    }

    function Yb(a) {
        r(Wb[a] || [], function(b) {
            b()
        })
    };

    function T() {
        this.a = void 0;
        this.b = []
    }
    T.prototype.get = function() {
        var a = this;
        return this.a ? Promise.resolve(this.a) : new Promise(function(b) {
            a.b.push(b)
        })
    };
    T.prototype.set = function(a) {
        this.a = a;
        r(this.b, function(b) {
            b(a)
        });
        this.b = []
    };

    function Zb(a) {
        var b = {};
        return x(Fb(), (b.f = a, b))
    }

    function $b() {
        Q.apply(this, arguments)
    }
    n($b, Q);

    function ac(a, b) {
        this.title = a;
        this.image = b
    };

    function bc(a) {
        if (a = a.t) document.cookie = a
    }

    function cc() {};

    function U(a, b, c) {
        this.I = a;
        this.a = b;
        this.H = c;
        this.i = null;
        this.b = 15;
        this.G = v(this.ga, this);
        this.F = v(this.Z, this);
        this.B = v(this.Y, this);
        this.m = v(this.fa, this);
        this.u = v(this.ka, this);
        this.j = 0;
        this.h = 1;
        this.a.log('v: ' + a);
        V(this);
        C(window, 'pagehide', this.m);
        C(document, 'visibilitychange', this.u)
    }

    function V(a) {
        a.h = 1;
        a.i && window.clearTimeout(a.i);
        a.i = window.setTimeout(a.G, 1E3 * a.b)
    }
    h = U.prototype;
    h.$ = function() {
        var a = {};
        a.v = this.I;
        a.s = Math.floor(S(this.a) / 1E3);
        return x(a, Xa())
    };
    h.ga = function(a) {
        var b = Math.floor(S(this.a) / 1E3);
        if (b !== this.j)
            if (this.j = b, b = this.$(), a) a: {
                if ('sendBeacon' in navigator) try {
                    var c = new Blob([Sa(b)], {
                        type: 'application/x-www-form-urlencoded'
                    });
                    if (navigator.sendBeacon(p + '/embed/ping', c)) break a
                } catch (d) {}
                N('/embed/ping', 'POST', b)
            }
        else N('/embed/ping', 'POST', b).then(this.F, this.B);
        V(this)
    };
    h.Z = function(a) {
        this.l() && (a.ve ? dc(this) : 15 !== this.b && (this.b = 15, V(this)))
    };
    h.Y = function() {
        if (this.l()) {
            this.j = 0;
            var a = Math.min(480, 15 + Math.round((3 * this.b - 15) * Math.random()));
            this.b !== a && (this.b = a, V(this))
        }
    };
    h.fa = function() {
        this.ga(!0)
    };
    h.ka = function() {
        'hidden' === document.visibilityState && this.fa()
    };
    h.l = function() {
        return 1 === this.h
    };

    function dc(a) {
        window.clearTimeout(a.i);
        a.h = 2;
        a.H().then(function(b) {
            3 !== a.h && (a.I = b, a.a.log('v: ' + b), a.a.R(), a.j = 0, V(a))
        })
    }

    function ec(a) {
        window.clearTimeout(a.i);
        D(window, 'pagehide', a.m);
        D(document, 'visibilitychange', a.u);
        a.h = 3;
        a.a = null;
        a.H = null;
        a.G = null;
        a.F = null;
        a.B = null;
        a.m = null;
        a.u = null
    };

    function W() {
        U.apply(this, arguments)
    }
    n(W, U);
    W.prototype.$ = function() {
        return x(U.prototype.$.call(this), Bb())
    };
    W.prototype.Z = function(a) {
        Db(a);
        U.prototype.Z.call(this, a)
    };
    W.prototype.Y = function(a) {
        403 === a.a ? ec(this) : U.prototype.Y.call(this, a)
    };

    function X(a) {
        R.call(this);
        this.j = null;
        this.i = new T;
        this.W = !M() || !!tb() || !!O();
        this.m = null;
        this.ba = a;
        this.u = 1;
        this.h = v(this.J, this);
        this.F = v(this.N, this);
        this.b = v(this.O, this);
        this.B = v(this.ja, this);
        this.ca = v(this.la, this)
    }
    n(X, R);
    h = X.prototype;
    h.A = function() {
        this.l() && this.J();
        this.L()
    };
    h.J = function() {
        var a = this;
        R.prototype.J.call(this);
        Yb('va');
        1 === this.u && !this.j && this.W && (0 < S(this) || this.l()) && this.ca().then(function(b) {
            a.j = new W(b, a, a.ca)
        })
    };
    h.N = function() {
        var a = new ac(this.title(), this.image());
        (null === a.title || null === a.image ? 0 : a.title || a.image) && !this.i.a && this.i.set(a)
    };
    h.O = function() {
        this.j ? dc(this.j) : this.R()
    };
    h.ja = function() {
        this.ba(this)
    };
    h.la = function() {
        var a = this;
        if (2 === this.u) return new Promise(function() {});
        this.u = 2;
        var b = this.S() || 'video';
        this.log('f: ' + b);
        return (new $b(Zb(b))).i.then(function(c) {
            if (2 !== a.u) return new Promise(function() {});
            a.u = 3;
            var d = c.v;
            return d ? (fc(a).then(function(k) {
                var f = {
                    v: d,
                    f: b
                };
                f.vt = k.title;
                f.vi = k.image;
                N('/embed/video', 'POST', f).then(bc, cc);
                a.log('vt: ' + k.title);
                a.log('vi: ' + k.image)
            }), Promise.resolve(d)) : Promise.reject(Error('Missing visitId'))
        })
    };

    function fc(a) {
        a.N();
        return a.i.get()
    }
    h.K = function() {
        var a = this;
        this.m = new Vb(this.M());
        this.log('video');
        if (rb()) {
            var b = this.M();
            if ('static' === Ea(b)) {
                var c = {};
                z(b, (c.position = 'relative', c))
            }
            var d = this.m.log();
            this.da = setInterval(function() {
                d('s: ' + S(a))
            }, 50)
        }
    };
    h.log = function(a) {
        this.m && this.m.log(a)
    };
    h.R = function() {
        R.prototype.R.call(this);
        Yb('vr');
        var a = this.i;
        a.a = void 0;
        a.b = [];
        this.i = new T;
        this.N()
    };
    h.C = function() {
        this.u = 4;
        this.U();
        this.j && (ec(this.j), this.j = null);
        var a = this.i;
        a.a = void 0;
        a.b = [];
        this.i = null;
        void 0 !== this.da && window.clearInterval(this.da);
        a = this.m;
        a.a && (a.b || document.body).removeChild(a.a);
        a.b = null;
        this.B = this.b = this.F = this.h = this.ba = this.m = a.a = null
    };
    var gc = 'play pause ended waiting playing seeking seeked stalled error suspend abort'.split(' '),
        hc = ['emptied'];

    function ic(a, b) {
        X.call(this, b);
        this.a = a;
        this.A();
        this.K()
    }
    n(ic, X);
    h = ic.prototype;
    h.L = function() {
        var a = this;
        r(gc, function(b) {
            a.a.on(b, a.h)
        });
        r(hc, function(b) {
            a.a.on(b, a.b)
        });
        this.a.on('dispose', this.B);
        this.a.on('loadstart', this.F)
    };
    h.U = function() {
        var a = this;
        r(gc, function(b) {
            a.a.off(b, a.h)
        });
        r(hc, function(b) {
            a.a.off(b, a.b)
        });
        this.a.off('dispose', this.B);
        this.a.off('loadstart', this.F)
    };
    h.l = function() {
        return !this.a.paused()
    };
    h.M = function() {
        return this.a.contentEl()
    };
    h.S = function() {
        return this.a.currentSrc()
    };
    h.title = function() {
        return this.a.mediainfo ? this.a.mediainfo.name || '' : null
    };
    h.image = function() {
        return this.a.mediainfo ? this.a.mediainfo.poster || '' : null
    };
    h.C = function() {
        X.prototype.C.call(this);
        this.a = null
    };

    function Y() {
        this.w = [];
        this.a = v(this.j, this);
        this.P = !1
    }
    Y.prototype.l = function() {
        return q(this.w, function(a) {
            return a.l()
        })
    };
    Y.prototype.j = function(a) {
        this.w = qa(this.w, function(b) {
            return b !== a
        });
        a.C()
    };

    function jc() {
        return 'videojs' in window && t(window.videojs) ? window.videojs : null
    }

    function kc() {
        Y.call(this);
        this.h = {};
        this.b = [];
        var a = jc();
        if (a) {
            var b = this;
            a.plugin('scroll', function() {
                b.i(this)
            })
        }
    }
    n(kc, Y);
    kc.prototype.i = function(a) {
        this.b.push(a)
    };

    function lc(a, b) {
        var c = b.id();
        a.h[c] || (a.w.push(new ic(b, a.a)), a.h[c] = !0)
    }
    kc.prototype.A = function() {
        for (var a = this, b; b = this.b.shift();) lc(this, b);
        this.i = function(d) {
            lc(a, d)
        };
        if (b = jc()) {
            var c = b.getPlayers();
            r(c, function(d) {
                lc(a, d)
            })
        }
        this.P = null !== b
    };
    var mc = 'play pause ended waiting playing seeking seeked stalled error suspend abort'.split(' '),
        nc = ['loadstart', 'emptied'];

    function oc(a, b) {
        X.call(this, b);
        this.video = a;
        this.A();
        this.K()
    }
    n(oc, X);
    h = oc.prototype;
    h.L = function() {
        var a = this,
            b = this.video;
        r(mc, function(c) {
            C(b, c, a.h)
        });
        r(nc, function(c) {
            C(b, c, a.b)
        });
        this.a = Na(b, this.B)
    };
    h.U = function() {
        var a = this,
            b = this.video;
        r(mc, function(c) {
            D(b, c, a.h)
        });
        r(nc, function(c) {
            D(b, c, a.b)
        });
        this.a && this.a.disconnect()
    };
    h.l = function() {
        return !this.video.paused
    };
    h.M = function() {
        return this.video.parentElement
    };
    h.S = function() {
        return this.video && (this.video.src || this.video.currentSrc)
    };
    h.title = function() {
        return this.video ? this.video.title || this.video.getAttribute('title') || this.video.getAttribute('data-title') || '' : null
    };
    h.image = function() {
        return this.video ? this.video.poster || this.video.getAttribute('poster') || this.video.getAttribute('data-poster') || '' : null
    };
    h.C = function() {
        X.prototype.C.call(this);
        this.video = null
    };

    function pc() {
        Y.apply(this, arguments)
    }
    n(pc, Y);
    pc.prototype.A = function() {
        var a = this;
        r(y('video'), function(b) {
            qc(a, b)
        });
        Ma(function(b) {
            return qc(a, b)
        })
    };

    function qc(a, b) {
        b && b.hasAttribute('data-scroll-detected') && (a.w.push(new oc(b, a.a)), a.P = !0)
    };

    function rc(a, b) {
        X.call(this, b);
        this.a = a;
        this.ea = !1;
        this.H = this.X = null;
        this.W = !1;
        this.A();
        this.K()
    }
    n(rc, X);
    h = rc.prototype;
    h.L = function() {
        var a = this;
        J(this.a, 'vc', function(b) {
            a.W = !0 !== b
        });
        J(this.a, 'va', function(b) {
            a.ea = !0 === b;
            a.J()
        });
        J(this.a, 'vt', function(b) {
            a.X = b || '';
            a.N()
        });
        J(this.a, 'vi', function(b) {
            a.H = b || '';
            a.N()
        });
        J(this.a, 'vr', this.b)
    };
    h.U = function() {
        fb(this.a)
    };
    h.l = function() {
        return this.ea
    };
    h.M = function() {
        var a = Ja(this.a.source());
        return a && a.parentElement
    };
    h.S = function() {
        return Ja(this.a.source()).getAttribute('src')
    };
    h.title = function() {
        return this.X
    };
    h.image = function() {
        return this.H
    };
    h.O = function() {
        this.H = this.X = null;
        X.prototype.O.call(this)
    };
    h.C = function() {
        X.prototype.C.call(this);
        this.a = null
    };

    function sc() {
        Y.apply(this, arguments)
    }
    n(sc, Y);
    sc.prototype.A = function() {
        var a = this;
        gb(function(b) {
            a.w.push(new rc(b, a.a))
        });
        this.P = !0
    };
    var tc = 'play pause buffer idle complete error'.split(' '),
        uc = ['playlist', 'playlistitem'];

    function vc(a, b) {
        X.call(this, b);
        this.a = a;
        this.A();
        this.K()
    }
    n(vc, X);
    h = vc.prototype;
    h.L = function() {
        var a = this;
        r(tc, function(b) {
            a.a.on(b, a.h)
        });
        r(uc, function(b) {
            a.a.on(b, a.b)
        });
        this.a.on('remove', this.B)
    };
    h.U = function() {
        var a = this;
        r(tc, function(b) {
            a.a.off(b, a.h)
        });
        r(uc, function(b) {
            a.a.off(b, a.b)
        });
        this.a.off('remove', this.B)
    };
    h.l = function() {
        return 'playing' === this.a.getState()
    };
    h.M = function() {
        return this.a.getContainer()
    };
    h.S = function() {
        var a = this.a.getPlaylistItem();
        return a && (a.mediaid || a.file) || ''
    };
    h.title = function() {
        var a = this.a.getPlaylistItem();
        return a && a.title || ''
    };
    h.image = function() {
        var a = this.a.getPlaylistItem();
        return a && a.image || ''
    };
    h.O = function() {
        var a = this;
        window.setTimeout(function() {
            return X.prototype.O.call(a)
        }, 0)
    };
    h.C = function() {
        X.prototype.C.call(this);
        this.a = null
    };

    function wc() {
        return 'jwplayer' in window && t(window.jwplayer) ? window.jwplayer : null
    }

    function xc() {
        var a = [],
            b = wc();
        if (b)
            for (var c = 0, d;
                (d = b(c++)) && d && d.id;) a.push(d);
        return a
    }

    function yc() {
        Y.call(this);
        var a = this;
        this.b = {};
        var b = wc();
        if (b && b.api && b.api.registerPlugin) {
            var c = this;
            b.api.registerPlugin('scroll', '6.3', function(d) {
                zc(c, d)
            })
        }
        K().trackJw = function(d) {
            zc(a, d)
        }
    }
    n(yc, Y);

    function zc(a, b) {
        var c = b.id;
        a.b[c] || (a.w.push(new vc(b, a.a)), a.b[c] = !0)
    }
    yc.prototype.A = function() {
        var a = this,
            b = xc();
        r(b, function(c) {
            return zc(a, c)
        });
        this.P = 0 < this.w.length
    };

    function Ac() {
        this.a = []
    }
    Ac.prototype.l = function() {
        return q(this.a, function(a) {
            return a.l()
        })
    };

    function Bc(a) {
        a.a = a.a.concat([new kc, new yc]);
        r(a.a, function(c) {
            return c.A()
        });
        if (!q(a.a, function(c) {
                return c.P
            })) {
            var b = new pc;
            b.A();
            a.a.push(b)
        }
    }

    function Cc(a) {
        Bc(a);
        var b = new sc;
        b.A();
        a.a.push(b)
    }

    function Dc() {
        var a = new Ac;
        Bc(a);
        hb(function(b) {
            Xb('va', function() {
                b.write('va', a.l())
            });
            tb() || O() || (b.write('vc', !1), Ec(a, b), Xb('vr', function() {
                b.write('vr');
                Ec(a, b)
            }))
        })
    }

    function Ec(a, b) {
        var c = Fc(a);
        c && fc(c).then(function(d) {
            b.write('vt', d.title);
            b.write('vi', d.image)
        })
    }

    function Fc(a) {
        return (a = ra(a.a, function(b) {
            return b.w.length ? b.w[0] : null
        })) && (a.w.length ? a.w[0] : null)
    };

    function Z(a, b) {
        R.call(this);
        this.V = 5E3;
        this.a = new Vb;
        this.h = function() {
            return a.l()
        };
        this.b = b;
        this.J()
    }
    n(Z, R);
    Z.prototype.L = function() {
        var a = v(this.J, this),
            b = wa(a);
        C(window, 'scroll', b);
        C(window, 'resize', b);
        C(document.body, 'mousemove', b);
        C(document.body, 'mousedown', b);
        C(document.body, 'keydown', b);
        Ub && 'undefined' !== typeof document && C(document, Ub, a);
        C(window, 'focus', a);
        C(window, 'blur', a);
        Xb('va', a);
        this.K()
    };
    Z.prototype.l = function() {
        var a = Tb && document[Tb],
            b = 'undefined' !== typeof document && (!('hasFocus' in document) || document.hasFocus());
        return !a && b && !this.h() && !this.b.a.aa
    };
    Z.prototype.K = function() {
        var a = this;
        if (rb()) {
            this.a.log('page');
            var b = this.a.log();
            setInterval(function() {
                b('s: ' + S(a))
            }, 50)
        }
    };
    Z.prototype.log = function(a) {
        this.a.log(a)
    };
    var Gc = new T;

    function Hc() {
        if (!M()) {
            var a = Ic();
            if (!u(F(), 'scrollplaceholderdebug=1')) {
                var b = Jc();
                b.background = 'transparent';
                var c = Ya(Ra(pa, Cb()));
                Ia(c, b).then(function(d) {
                    var k = za(function() {
                        document.body.removeChild(a);
                        Gc.set(d)
                    }, 500);
                    db(d.contentWindow, p, function(f) {
                        'sl' === f && k();
                        'id' === f && (d.style.height = '0px')
                    });
                    Kc()
                })
            }
        }
    }

    function Ic() {
        var a = Jc();
        a.background = '#fff';
        a['box-sizing'] = 'border-box';
        a['-webkit-box-sizing'] = 'border-box';
        a.margin = '0';
        a['border-top'] = '1px solid #eee';
        a['border-bottom'] = '1px solid #eee';
        var b = document.createElement('div');
        z(b, a);
        A(b);
        a = document.createElement('div');
        var c = {};
        z(a, (c.position = 'absolute', c.height = '32px', c.width = '32px', c.top = '5px', c.left = '16px', c));
        a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#33E2D1" fill-rule="evenodd" d="M2 4.34A2.339 2.339 0 0 1 4.34 2h23.32A2.339 2.339 0 0 1 30 4.34v23.32A2.339 2.339 0 0 1 27.66 30H4.34A2.339 2.339 0 0 1 2 27.66V4.34zm9.248 4.38c-2.633 0-4.768 1.998-4.768 4.463s2.135 4.463 4.768 4.463c1.27 0 2.431-.472 3.286-1.229L23.18 8.72H11.248zm9.516 14.526c2.633 0 4.768-1.998 4.768-4.463s-2.135-4.463-4.768-4.463c-1.27 0-2.431.472-3.286 1.229l-8.646 7.697h11.932z"/></svg>';
        A(a, b);
        return b
    }

    function Jc() {
        var a = {};
        return a.height = '44px', a.position = 'fixed', a.left = '0', a.width = '100%', a['z-index'] = '2147483647', a.bottom = '0', a
    }
    var Kc = za(function() {
            var a = document.createElement('script');
            a.async = !0;
            a.src = 'https://static.scroll.com/js/scroll-user-e3748a43ddc3ccd810a97d319f4c7b2b.js';
            A(a, document.head || y('head')[0])
        }),
        Lc = za(function(a, b) {
            Gc.get().then(function(c) {
                H(c.contentWindow, p, a, b)
            })
        });

    function Mc(a) {
        yb().autopage ? window.history && 'pushState' in window.history && (C(window, 'popstate', a), Aa(window.history, 'pushState', a), Aa(window.history, 'replaceState', a)) : Aa(K(), 'virtualPage', a)
    };

    function Nc(a) {
        a.cb && (u(F(), 'scrollnoblockerrefresh=1') && (document.cookie = 'scroll2=1;expires=' + (new Date((new Date).getTime() + 6048E5)).toUTCString() + ';'), Eb().then(function(b) {
            'y' === b && (b = {}, N('/embed/event', 'GET', (b.event = 'blocker-detected', b)), b = {}, b = x({}, ub(), Bb(), (b.pr = document.referrer, b)), b.o && (window.location.href = Ra(oa + '/loginwithapp', b)))
        }))
    }

    function Oc(a) {
        var b = !0 === yb().detected && tb();
        b ? Hc() : u(F(), '_scri=1') && Rb.call();
        a.then(function(c) {
            if (c.r) {
                if (!M() && !u(F(), 'scrollnorefresh=1')) {
                    var d = F();
                    d = Ta(d, 'scrolltoken');
                    d = Qa(d, 'scrollnorefresh=1');
                    window.location.href = d
                }
            } else u(F(), 'scrollnorefresh=1') && (d = F(), d = Ta(d, 'scrollnorefresh=1'), Ua(d));
            c.v ? Pc(c) : (Nc(c), b || c.sm && Hc(), c = Rb, c.b && (c.b = !1, c.a && c.a()))
        })
    }

    function Pc(a) {
        var b = ob(),
            c = new Ac,
            d = new Z(c, b);
        d.L();
        Cc(c);
        var k = new W(a.v, d, function() {
            return Gb().then(function(f) {
                return (f = f.v) ? Promise.resolve(f) : Promise.reject(Error('Missing visitId'))
            })
        });
        a.cb ? Eb().then(function(f) {
            'n' === f ? Lc('nb') : !a.si || u(F(), 'scrollfirstvisit=1') || qb() || Lc('si')
        }) : !a.si || u(F(), 'scrollfirstvisit=1') || qb() || Lc('si');
        Mc(xa(function() {
            k.l() && (dc(k), b.b({
                type: 'vp',
                D: Xa()
            }))
        }))
    }

    function La() {
        var a = Gb();
        Oc(a)
    }
    (function() {
        var a = {};
        vb((a.showCTA = function() {
            Rb.call()
        }, a.virtualPage = function() {}, a.acquisition = function(b) {
            return Sb(b)
        }, a)) || (u(F(), 'scrollrequestdebug=1') ? Hb() : M() ? Dc() : Ka())
    })();
}).call(this);