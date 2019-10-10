window.scriptsLoaded = window.scriptsLoaded || {};
window.scriptProcessStart = window.scriptProcessStart || {};
window.scriptProcessStart['boot.worldwide.3.narrow.js'] = (new Date()).getTime();;
_b.bn.prototype = {
    d: null,
    e: null,
    b: null,
    c: null,
    f: 0,
    a: null,
    h: function() {
        if (_j.e.e === 5) {
            this.b = new _a.bX(this.e);
            this.b.d()
        }
        var n = this;
        this.a = _j.m.a().a(_a.a.cc, "AnimationHelper.OnStart", function() {
            for (var i = new Sys.StringBuilder, t = 0; t < n.c.d.length; t++) {
                i.append(" Element-");
                i.append(t.toString());
                i.append(": ");
                i.append((n.c.d[t].style.display === "none").toString())
            }
            n.a = null;
            n.d.b(!0)
        }, this.f)
    },
    g: function() {
        this.b && this.b.e();
        this.a && (this.a = _j.m.a().b(this.a))
    }
};
_b.o = function() {};
_b.o.e = function() {
    return _fc.n.b("animationend", "webkitAnimationEnd", "animationend")
};
_b.o.f = function() {
    return _fc.n.b("animationstart", "webkitAnimationStart", "animationstart")
};
_b.o.b = function() {
    return _fce.u.b()
};
_b.o.d = function() {
    return _fc.n.b("-moz-transition", "-webkit-transition", "-ms-transition")
};
_b.o.j = function() {
    return _fc.n.b("-moz-transition-duration", "-webkit-transition-duration", "-ms-transition-duration")
};
_b.o.a = function() {
    return _fce.u.c()
};
_b.o.i = function() {
    return _fc.n.b("-moz-animation-delay", "-webkit-animation-delay", "-ms-animation-delay")
};
_b.o.c = function(n, t) {
    return _fce.u.a(n, t, !1)
};
_b.o.h = function(n) {
    return _b.o.g[n] ? _b.o.g[n] : 2
};
_b.bU = function(n, t, i, r, u) {
    this.l = Function.createDelegate(this, this.o);
    this.h = -1;
    _a.c.e(n.d.length, 1, Number.MAX_VALUE, "Collection animation needs at least 1 element to animate.");
    this.c = n;
    this.f = t;
    this.d = i;
    this.k = r;
    this.i = u | 0
};
_b.bU.prototype = {
    d: null,
    c: null,
    i: 0,
    k: null,
    f: null,
    e: null,
    j: null,
    g: null,
    a: function() {
        this.m();
        for (var n = 0; n < this.c.d.length; n++) {
            var t = this.c.d[n];
            _j.k.d(t, this.d);
            _j.k.b(t, _b.o.e(), this.l, "CollectionAnimation")
        }
        this.h = this.c.d.length * _b.o.h(this.d);
        this.e = _b.bn.b(this, this.d, this.c);
        this.e.h();
        this.g = String.format("CollectionAnimation_{0}", this.d);
        this.j = _j.n.b(_a.a.cc, 516, this.g)
    },
    b: function(n) {
        this.e && this.n(n)
    },
    o: function(n) {
        this.h--;
        this.h > 0 || this.n(!0)
    },
    n: function(n) {
        _j.n.a(this.j);
        var t = _j.n.b(_a.a.cc, 516, "End_" + this.g);
        try {
            this.e.g();
            this.m();
            this.f && n && this.f()
        } finally {
            _j.n.a(t)
        }
    },
    m: function() {
        for (var t = 0, r = this.c.d.length; t < r; t++) {
            var i = this.c.d[t];
            _j.k.c(i, _b.o.e(), "CollectionAnimation");
            this.i || _j.k.e(i, this.d)
        }
        if (this.i === 1) {
            var n = this;
            this.k.f(_a.a.cc, "CollectionAnimation.EndAnimation", function() {
                for (var t = 0, r = n.c.d.length; t < r; t++) {
                    var i = n.c.d[t];
                    _j.k.e(i, n.d)
                }
            })
        }
        this.e = null
    }
};
_b.bV = function(n, t, i, r, u) {
    this.m = Function.createDelegate(this, this.p);
    this.n = Function.createDelegate(this, this.q);
    this.c = n;
    this.h = t;
    this.d = i;
    this.g = r;
    this.l = u | 0
};
_b.bV.prototype = {
    d: null,
    g: null,
    l: 0,
    c: null,
    h: null,
    i: 0,
    e: null,
    k: null,
    j: null,
    f: null,
    a: function() {
        this.g.g();
        var n = _j.k.n(this.c, "AnimationClass");
        if (n && _j.k.p(this.c, n)) {
            _j.k.e(this.c, n);
            _b.w.e(this.c)
        }
        _j.k.m(this.c, "AnimationClass", this.d);
        _j.k.c(this.c, _b.o.f());
        _j.k.c(this.c, _b.o.e());
        _j.k.b(this.c, _b.o.f(), this.n);
        _j.k.b(this.c, _b.o.e(), this.m);
        _j.k.d(this.c, this.d);
        this.i = _b.o.h(this.d);
        this.e = _b.bn.a(this, this.d, this.c);
        this.e.h();
        this.f = String.format("KeyframeAnimation_{0}", this.d);
        this.k = _j.n.b(_a.a.cc, 516, this.f)
    },
    b: function(n) {
        this.e && this.o(n)
    },
    q: function(n) {
        this.j = _j.n.b(_a.a.cc, 516, "Events_" + this.f);
        _j.k.c(this.c, _b.o.f())
    },
    p: function(n) {
        this.i--;
        this.i > 0 || this.o(!0)
    },
    o: function(n) {
        _j.n.a(this.k);
        _j.n.a(this.j);
        var i = _j.n.b(_a.a.cc, 516, "End_" + this.f);
        try {
            this.e.g();
            this.e = null;
            _j.k.c(this.c, _b.o.f());
            _j.k.c(this.c, _b.o.e());
            switch (this.l) {
                case 0:
                    _j.k.e(this.c, this.d);
                    break;
                case 1:
                    var t = this;
                    this.g.f(_a.a.cc, "KeyframeAnimation.EndAnimation", function() {
                        _j.k.e(t.c, t.d)
                    });
                    break
            }
            this.g.h();
            this.h && n && this.h()
        } finally {
            _j.n.a(i)
        }
    }
};
_b.bE = function() {};
_b.bE.registerInterface("_b.bE");
_b.ci = function() {};
_b.ci.registerInterface("_b.ci");
_b.bF = function() {};
_b.bF.registerInterface("_b.bF");
_b.bG = function() {};
_b.bG.registerInterface("_b.bG");
_b.E = function(n, t, i, r) {
    this.bu = Function.createDelegate(this, this.cm);
    this.bS = Function.createDelegate(this, this.cl);
    this.br = Function.createDelegate(this, this.ck);
    _b.E.resolveInheritance();
    this.b = this.k;
    this.a = this.j;
    this.h = this.q;
    _b.E.initializeBase(this, [t]);
    this.I = i;
    this.bH = n;
    this.D = r;
    this.m("ContextPeekView");
    this.bf = !0
};
_b.E.prototype = {
    bH: null,
    I: null,
    D: null,
    n: null,
    A: null,
    P: null,
    O: null,
    y: 0,
    H: 1,
    E: 25,
    bg: 0,
    t: 0,
    s: 0,
    C: !1,
    bV: !0,
    bv: !1,
    d: function() {
        return this.n
    },
    f: function(n) {
        this.n = n;
        this.l && this.l.ba(this.n);
        return n
    },
    i: function(n) {
        if (this.H !== n) {
            this.z();
            this.H = n;
            this.B()
        }
        return n
    },
    e: function(n) {
        this.P = n;
        this.l && this.l.bc(this.P);
        return n
    },
    bj: function(n) {
        this.O = n;
        this.l && this.l.bl(this.O);
        return n
    },
    g: function() {
        return this.A
    },
    c: function(n) {
        if (this.A !== n) {
            this.A = n;
            this.A || this.j(!1)
        }
        return n
    },
    o: function(n) {
        if (this.E !== n) {
            _a.c.e(n, 0, Number.MAX_VALUE, "NotchOffset");
            this.E = n;
            this.by("NotchOffset")
        }
        return n
    },
    bD: function() {
        return this.bg
    },
    u: function(n) {
        if (this.bg !== n) {
            this.bg = n;
            this.by("NotchToAnchorPadding")
        }
        return n
    },
    N: !1,
    bx: !1,
    bf: !1,
    bw: null,
    B: function() {
        if (this.r && this.H === 1) {
            var n = this.X.z;
            _j.k.b(n, "click", this.br, "#ContextPeek");
            _j.k.b(n, "dblclick", this.bS);
            this.C && _j.k.b(n, "mouseenter", this.br)
        }
    },
    z: function() {
        if (this.X && this.H === 1) {
            var n = this.X.z;
            _j.k.c(n, "click", "#ContextPeek");
            _j.k.c(n, "dblclick");
            this.C && _j.k.c(n, "mouseenter")
        }
    },
    R: function() {
        this.l && this.l.bQ(this.bu)
    },
    v: function() {
        this.k() && this.H === 2 ? this.bY() : _fce.bj.prototype.v.call(this)
    },
    bW: function() {},
    bi: function() {},
    Q: function() {
        if (this.bV) {
            this.l.z.focus();
            if (_a.o.a().I) {
                this.l.z.blur();
                this.l.z.focus()
            }
        }
    },
    bG: function() {
        return 0
    },
    bU: function(n) {
        var r = this.y / 2;
        var t = new _b.bo(this.bG(), this.E, _b.bg.a(19), r, this.n.q(), this.n.p(), this.bD(), this.t, this.p, this.I, this.D, !1);
        t.c(new _j.i(this.A));
        n.d(t);
        if (this.bf) {
            var i = new _b.bg(19, this.E, this.s, this.p, this.I, this.D);
            i.c(n);
            n.n = i
        }
    },
    bC: function() {
        return !0
    },
    bI: function() {
        if (this.w && this.r && this.A) {
            if (this.l && this.l.c()) return;
            this.bC() && this.bY()
        }
    },
    ck: function(n) {
        this.bI()
    },
    cl: function(n) {
        this.j(!1)
    },
    cm: function(n, t) {
        this.j(n.c())
    },
    bY: function() {
        if (this.n && this.n.h()) {
            this.bW();
            this.l = this.cf();
            this.l.bm();
            this.bi();
            this.l.a(!0);
            this.Q()
        } else this.j(!1)
    },
    cf: function() {
        var n = this.bH.d(this.X.z);
        n.bd(this.bu);
        n.y(this.w);
        n.ba(this.O ? this.O : this.n);
        n.bc(this.P);
        n.Q(this.bw);
        n.g(this.N);
        n.bW = this.bx;
        if (this.N) {
            n.e = !1;
            n.cc = !1
        }
        this.bv || (n.z.style.width = "0px");
        this.bU(n);
        return n
    }
};
_b.H = function() {
    this.f = Function.createDelegate(this, this.h);
    this.c = Function.createDelegate(this, this.g);
    _b.H.initializeBase(this)
};
_b.H.prototype = {
    d: function(n) {
        if (this.a !== n) {
            this.a && this.a.rpcl("HighlightedTerms", this.c);
            this.a = n;
            this.by("ExtensibilityViewModel")
        }
        return n
    },
    e: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.b && (this.a && !this.a.j() ? this.h(null, null) : this.apcl("ExtensibilityViewModel", this.f));
            this.by("Item")
        }
        return n
    },
    b: null,
    a: null,
    g: function(n, t) {
        n && n.rpcl("HighlightedTerms", this.c);
        n && this.a !== n || this.a.A(this.X, this.b)
    },
    h: function(n, t) {
        if (this.a) {
            this.rpcl("ExtensibilityViewModel", this.f);
            this.a.e() ? this.a.L(this.X, this.b) : this.a.d() && this.a.m()[this.b.bH.ItemId.Id] ? this.g(null, null) : this.a.apcl("HighlightedTerms", this.c)
        }
    }
};
_b.s = function(n, t, i, r) {
    this.a = _b.s.g + _b.s.h++;
    this.c = new Array(5);
    _b.s.initializeBase(this);
    this.g = _b.s.e.a("move", null);
    this.A = n;
    this.x = t;
    this.p = r.f();
    _dh.a(i, this)
};
_b.s.prototype = {
    r: null,
    w: null,
    v: null,
    u: null,
    s: null,
    i: null,
    t: null,
    b: null,
    y: 0,
    z: 0,
    m: !1,
    f: null,
    o: null,
    q: !1,
    g: null,
    d: null,
    l: !0,
    A: null,
    x: null,
    k: !1,
    p: !1,
    G: function(n) {
        if (this.l !== n) {
            this.l = n;
            this.l ? this.B() : this.E()
        }
        return n
    },
    e: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.by("DragHelperTemplateId")
        }
        return n
    },
    n: function(n) {
        if (this.o !== n) {
            this.o = n;
            this.by("DragHelperDataContext")
        }
        return n
    },
    Q: function(n) {
        if (this.q !== n) {
            this.q = n;
            this.by("ShouldHideDefaultHelper")
        }
        return n
    },
    h: function(n) {
        if (this.g !== n) {
            this.g = _b.s.e.a(n, null);
            this.by("EffectAllowed")
        }
        return n
    },
    be: function(n) {
        if (!_b.bE.isInstanceOfType(n)) throw Error.argument("The attached control must be an IHtml5DraggableControl");
        _j.bV.prototype.be.call(this, n)
    },
    bb: function() {
        _j.bV.prototype.bb.call(this);
        this.l && this.B()
    },
    bc: function() {
        _j.bV.prototype.bc.call(this);
        this.E();
        this.j()
    },
    I: function(n) {
        _j.k.b(n, "dragstart", this.t || (this.t = Function.createDelegate(this, this.L)), this.a);
        this.c[0] = !0;
        this.p ? _j.k.b(n, "dragover", this.i || (this.i = Function.createDelegate(this, this.D)), this.a) : _j.k.b(n, "drag", this.i || (this.i = Function.createDelegate(this, this.D)), this.a);
        this.c[1] = !0;
        _j.k.b(n, "dragend", this.s || (this.s = Function.createDelegate(this, this.K)), this.a);
        this.c[2] = !0;
        if (!_b.s.d && "dragDrop" in n) {
            _j.k.b(this.X.z, "mousedown", this.u || (this.u = Function.createDelegate(this, this.M)));
            this.c[3] = !0
        }
    },
    M: function(n) {
        if (!(n.a() - 1)) {
            this.y = n.e();
            this.z = n.f();
            this.m = !0;
            _j.k.b(this.X.z, "mousemove", this.v || (this.v = Function.createDelegate(this, this.N)));
            _j.k.b(document.body, "mouseup", this.w || (this.w = Function.createDelegate(this, this.O)), this.a);
            this.c[4] = !0
        }
    },
    O: function(n) {
        this.m = !1;
        this.H()
    },
    N: function(n) {
        if (this.m) {
            var i = n.e();
            var t = n.f();
            if (Math.abs(this.y - i) >= 5 || Math.abs(this.z - t) >= 5) {
                this.m = !1;
                this.H();
                if (this.f) {
                    this.j();
                    this.b = this.C();
                    this.X.z.appendChild(this.b.z);
                    this.b.z.dragDrop();
                    _j.m.a().a(_a.a.X, "OnMouseMove", this.r || (this.r = Function.createDelegate(this, this.j)), 0)
                } else this.X.z.dragDrop()
            }
        }
    },
    H: function() {
        _j.k.c(this.X.z, "mousemove");
        _j.k.c(document.body, "mouseup", this.a);
        this.c[4] = !1
    },
    R: function(n) {
        for (var t = 0; t < this.c.length; t++)
            if (this.c[t]) switch (t) {
                case 0:
                    _j.k.c(n, "dragstart", this.a);
                    break;
                case 1:
                    this.p ? _j.k.c(document.body, "dragover", this.a) : _j.k.c(n, "drag", this.a);
                    break;
                case 2:
                    _j.k.c(n, "dragend", this.a);
                    break;
                case 3:
                    _j.k.c(this.X.z, "mousedown");
                    break;
                case 4:
                    _j.k.c(this.X.z, "mousemove");
                    _j.k.c(document.body, "mouseup", this.a);
                    break
            }
    },
    L: function(n) {
        var r = n.s;
        _b.s.b = 1;
        _b.s.f = this.g;
        var t = this.X;
        t.l(r);
        _b.s.a = t.i();
        _b.s.c = t.h();
        var i = r.dataTransfer;
        this.P(i);
        i.setData("Text", t.g() || "defaultDataPlaceholder");
        i.effectAllowed = this.g;
        _b.r.g()
    },
    D: function(n) {
        var t = n.s;
        this.X.j(t)
    },
    K: function(n) {
        var t = n.s;
        this.X.k(t);
        this.j();
        _b.r.f();
        _b.s.a = 0;
        _b.s.c = 0
    },
    j: function() {
        this.b && this.b.z && _j.k.f(this.b.z);
        var t;
        _a.h.a(t = {
            val: this.b
        }), this.b = t.val;
        var n;
        _a.h.a(n = {
            val: this.d
        }), this.d = n.val
    },
    P: function(n) {
        if (_b.s.d)
            if (this.f) {
                this.j();
                this.b = this.C();
                document.body.appendChild(this.b.z);
                n.setDragImage(this.b.z.firstChild, -19, 0)
            } else if (this.q) {
            if (!this.d) {
                this.d = new _fc.d(document.createElement("div"), this.A, this.x);
                this.d.a(_y.e.a());
                document.body.appendChild(this.d.z)
            }
            n.setDragImage(this.d.z, 0, 0)
        }
    },
    C: function() {
        var t = new _j.c(document.createElement("span"));
        t.y(this.f);
        t.ba(this.o);
        t.bm();
        var n = t.z.style;
        n.visibility = "Visible";
        n.position = "absolute";
        n.top = "0";
        n.left = "0";
        n.zIndex = -1e3;
        return t
    },
    B: function() {
        if (!this.k && this.X) {
            var n = this.X.z;
            if (n) {
                _b.s.d && n.setAttribute("draggable", "true");
                this.I(n);
                this.k = !0
            }
        }
    },
    E: function() {
        if (this.k && this.X) {
            var n = this.X.z;
            if (n) {
                n.removeAttribute("draggable");
                this.R(n);
                this.k = !1
            }
        }
    }
};
_b.r = function(n, t) {
    this.c = _b.r.c + _b.r.e++;
    _b.r.initializeBase(this);
    this.o = t.f();
    _dh.a(n, this)
};
_b.r.g = function() {
    for (var n = 0; n < _b.r.a.length; n++) {
        var t = _b.r.a[n];
        t.n()
    }
};
_b.r.f = function() {
    for (var n = 0; n < _b.r.a.length; n++) {
        var t = _b.r.a[n];
        t.m()
    }
};
_b.r.b = function(n) {
    "preventDefault" in n && n.preventDefault()
};
_b.r.prototype = {
    m: null,
    l: null,
    j: null,
    i: null,
    k: null,
    e: !1,
    f: !1,
    h: !0,
    p: null,
    g: null,
    o: !1,
    n: function() {
        this.g || (this.g = _b.r.d.a("move", null));
        return this.g
    },
    a: function(n) {
        if (n !== this.f) {
            this.f = n;
            this.by("bindOnAttach")
        }
        return n
    },
    b: function(n) {
        if (n !== this.h) {
            this.h = n;
            this.by("stopPropagation")
        }
        return n
    },
    d: function(n) {
        this.p = n;
        if (!this.e) {
            _j.k.b(n, "dragover", this.k || (this.k = Function.createDelegate(this, this.t)), this.c);
            _j.k.b(n, "dragenter", this.i || (this.i = Function.createDelegate(this, this.r)), this.c);
            _j.k.b(n, "dragleave", this.j || (this.j = Function.createDelegate(this, this.s)), this.c);
            _j.k.b(n, "drop", this.l || (this.l = Function.createDelegate(this, this.u)), this.c);
            _j.k.b(document.body, "drop", this.m || (this.m = Function.createDelegate(this, this.v)), this.c);
            this.e = !0
        }
    },
    q: function(n) {
        if (this.e) {
            _j.k.c(n, "dragover", this.c);
            _j.k.c(n, "dragenter", this.c);
            _j.k.c(n, "dragleave", this.c);
            _j.k.c(n, "drop", this.c);
            _j.k.c(document.body, "drop", this.c);
            this.e = !1
        }
    },
    be: function(n) {
        if (!_b.bF.isInstanceOfType(n)) throw Error.argument("The attached control must be an IHtml5DroppableControl");
        _j.bV.prototype.be.call(this, n);
        Array.add(_b.r.a, n);
        this.X.s(this)
    },
    bb: function() {
        _j.bV.prototype.bb.call(this);
        var n = this.X.z;
        n.setAttribute("dropzone", "string:text/plain");
        this.f && this.d(n)
    },
    bc: function() {
        _j.bV.prototype.bc.call(this);
        this.q(this.p)
    },
    bh: function(n) {
        Array.remove(_b.r.a, n);
        _j.bV.prototype.bh.call(this, n)
    },
    bz: function() {
        this.bh(this.X);
        Array.clear(_b.r.a);
        _j.bV.prototype.bz.call(this)
    },
    t: function(n) {
        var t = n.s;
        _b.r.b(t);
        !this.o && "stopPropagation" in t && this.h && t.stopPropagation();
        t.dataTransfer && (t.dataTransfer.dropEffect = this.n());
        this.X.q(t)
    },
    r: function(n) {
        var t = n.s;
        t.dataTransfer && (t.dataTransfer.dropEffect = this.n());
        this.X.o(t)
    },
    s: function(n) {
        var t = n.s;
        t.dataTransfer && (t.dataTransfer.dropEffect = this.n());
        this.X.p(t)
    },
    u: function(n) {
        var u = n.s;
        var t;
        var r, i;
        var f = (i = this.X.r(u, r = {
            val: t
        }), t = r.val, i);
        _b.s.b = t;
        f && _b.r.b(u)
    },
    v: function(n) {
        var t = n.s;
        _b.r.b(t);
        t.dataTransfer && (t.dataTransfer.dropEffect = "none")
    }
};
_b.L = function(n, t, i, r, u) {
    this.bZ = Function.createDelegate(this, this.co);
    this.bm = -1;
    _b.L.initializeBase(this, [n, t, r, u]);
    this.x = !0
};
_b.L.prototype = {
    G: null,
    bd: 0,
    bk: 0,
    K: !1,
    bN: null,
    bK: null,
    bJ: !0,
    bP: function(n) {
        n >= 0 && (this.bd = n);
        return n
    },
    bn: function(n) {
        n >= 0 && (this.bk = n);
        return n
    },
    M: null,
    x: !1,
    cb: !1,
    k: function() {
        return this.K
    },
    j: function(n) {
        if (this.K !== n) {
            var t = !1;
            if (this.K) {
                this.K = n;
                _b.L.a = !1;
                t = !0
            } else if (this.bC()) {
                this.K = n;
                _b.L.a = !0;
                t = !0
            }
            if (t) {
                this.by("IsShown");
                this.v()
            }
        }
        return n
    },
    bR: function(n) {
        if (this.bN !== n) {
            this.t = this.cc(n);
            this.bN = n
        }
        return n
    },
    bQ: function(n) {
        if (this.bK !== n) {
            this.s = this.cc(n);
            this.bK = n
        }
        return n
    },
    bD: function() {
        return this.bm >= 0 ? this.bm : 10
    },
    u: function(n) {
        n >= 0 && (this.bm = n);
        return n
    },
    ca: !1,
    v: function() {
        if (this.r || !this.k())
            if (this.k() && !this.G) {
                var n = 0;
                var t = !1;
                if (this.bJ && this.bd > 0) {
                    n = this.bd;
                    t = !0;
                    this.bJ = !1
                } else if (this.bk > 0) {
                    n = this.bk;
                    t = !0
                }
                t && n > 0 ? this.G = _j.m.a().a(_a.a.cR, "IntroductionContextPeek.DelayBeforeShownTimer", this.bZ, n * 1e3) : _b.E.prototype.v.call(this)
            } else {
                if (this.G) {
                    _j.m.a().b(this.G);
                    this.G = null
                }
                _b.E.prototype.v.call(this)
            }
    },
    bi: function() {
        this.l.e = this.x
    },
    bU: function(n) {
        var r = this.y / 2;
        var i = new _b.bo(this.bG(), this.E, _b.bg.a(19), r, this.n.q(), this.n.p(), this.bD(), this.t, this.p, this.I, this.D, this.ca);
        i.c(new _j.i(this.A));
        n.d(i);
        var t = new _b.bg(19, this.E, this.s, this.p, this.I, this.D);
        t.c(n);
        this.D.g() && (t.h = this.t === 1 && this.s === 3);
        n.n = t;
        n.g(this.N);
        n.cc = this.cb
    },
    bC: function() {
        return !_b.L.a
    },
    bz: function() {
        this.j(!1);
        _fce.bj.prototype.bz.call(this)
    },
    cc: function(n) {
        var t;
        try {
            t = _j.u.b(_b.ch, n)
        } catch (i) {
            t = 0
        }
        return t
    },
    co: function() {
        this.G = null;
        this.M && this.M.a();
        _b.E.prototype.v.call(this)
    }
};
_b.m = function(n, t) {
    this.x = Function.createDelegate(this, this.L);
    this.w = Function.createDelegate(this, this.K);
    this.y = Function.createDelegate(this, this.M);
    this.z = Function.createDelegate(this, this.N);
    this.B = Function.createDelegate(this, this.P);
    this.A = Function.createDelegate(this, this.O);
    this.v = Function.createDelegate(this, this.G);
    _b.m.initializeBase(this);
    this.l = n;
    this.q = _b.m.b(t);
    this.s = new _j.g(this.v, _a.a.X);
    this.m = new _j.g(this.A, _a.a.X);
    this.u = new _j.g(this.B, _a.a.X);
    this.k = 0;
    this.h(!0)
};
_b.m.b = function(n) {
    return n.b() && n.n()
};
_b.m.prototype = {
    q: !1,
    l: null,
    r: 0,
    t: !1,
    n: !1,
    p: !1,
    s: null,
    m: null,
    u: null,
    k: 0,
    o: !1,
    a: function() {
        return this.r
    },
    j: function(n) {
        if (this.r !== n) {
            if (n < 0) throw Error.invalidOperation("Priority cannot be set to a negative integer.");
            this.r = n;
            this.by("Priority");
            this.l.l()
        }
        return n
    },
    b: function(n) {
        if (this.t !== n) {
            this.t = n;
            this.by("HasFocus")
        }
        return n
    },
    i: function(n) {
        if (this.p !== n) {
            this.p = n;
            this.by("FocusOnFirstTabStop")
        }
        return n
    },
    c: function() {
        return this.s
    },
    f: function() {
        return this.m
    },
    g: function() {
        return this.u
    },
    d: function() {
        return this.n
    },
    h: function(n) {
        if (this.n !== n) {
            this.n = n;
            this.by("IsEnabled")
        }
        return n
    },
    e: function(n) {
        this.k !== n && (this.k = n);
        return n
    },
    bb: function() {
        _j.bV.prototype.bb.call(this);
        var n = this.X.z;
        this.o = this.Q(this.X.z);
        if (this.o) {
            this.l.i(this);
            _j.k.b(n, "mousedown", this.z);
            _j.k.b(n, "keydown", this.y);
            _j.k.b(n, "focusin", this.w);
            n.setAttribute("RegionBehavior", "1");
            this.q && _j.k.b(n, "focusout", this.x, _b.m.a)
        }
    },
    bc: function() {
        _j.bV.prototype.bc.call(this);
        if (this.o) {
            this.l.j(this);
            var n = this.X.z;
            _j.k.c(n, "mousedown");
            _j.k.c(n, "keydown");
            _j.k.c(n, "focusin");
            n.removeAttribute("RegionBehavior");
            this.q && _j.k.c(n, "focusout", _b.m.a)
        }
    },
    bh: function(n) {
        this.h(!1);
        _j.bV.prototype.bh.call(this, n)
    },
    H: function() {
        var i = this.E();
        if (i.length) return i[0];
        var t = this.C();
        if (t.length) {
            var n = t[0];
            var r = this;
            _j.B.a(t, function(t, i) {
                i.tabIndex < n.tabIndex && _j.i.f(r.X.z) && (n = i)
            });
            return n
        }
        return null
    },
    I: function() {
        var i = this.C();
        if (i.length) {
            var t = i[0];
            var r = this;
            _j.B.a(i, function(n, i) {
                i.tabIndex > t.tabIndex && (t = i)
            });
            return t
        }
        var n = this.E();
        return n.length ? n[n.length - 1] : null
    },
    G: function() {
        this.p && this.m.b ? this.m.a() : this.X && _j.i.f(this.X.z) && this.X.R()
    },
    O: function() {
        var n = this.H();
        n ? n.focus() : this.X && _j.i.f(this.X.z) && this.X.R()
    },
    P: function() {
        var n = this.I();
        n ? n.focus() : this.X && _j.i.f(this.X.z) && this.X.R()
    },
    E: function() {
        return this.D("*[tabindex='0'],a:not([tabindex='-1']):enabled,area:not([tabindex='-1']):enabled,href:not([tabindex='-1']):enabled,input:not([tabindex='-1']):enabled,button:not([tabindex='-1']):enabled,select:not([tabindex='-1']):enabled,textarea:not([tabindex='-1']):enabled")
    },
    C: function() {
        return this.D("*[tabindex]:not([tabindex='0']):not([tabindex='-1']),a:enabled:not([tabindex='0']):not([tabindex='-1']),area:enabled:not([tabindex='0']):not([tabindex='-1']),href:enabled:not([tabindex='0']):not([tabindex='-1']),input:enabled:not([tabindex='0']):not([tabindex='-1']),button:enabled:not([tabindex='0']):not([tabindex='-1']),select:enabled:not([tabindex='0']):not([tabindex='-1']),textarea:enabled:not([tabindex='0']):not([tabindex='-1'])")
    },
    D: function(n) {
        var i = [];
        _j.k.C(this.X.z, n) && _j.k.q(this.X.z) && Array.add(i, this.X.z);
        for (var u = this.X.z.querySelectorAll(n), t = 0, f = u.length; t < f; t++) {
            var r = u[t];
            _j.k.q(r) && Array.add(i, r)
        }
        return i
    },
    N: function(n) {
        this.k = 1
    },
    M: function(n) {
        this.k = n.a() === 9 ? n.g() ? 256 : 16 : 0
    },
    K: function(n) {
        if (this.k === 1 || !this.k) {
            this.k = 0;
            this.l.k(this)
        }
    },
    L: function(n) {
        if (this.k & 272 && !this.X.z.contains(window.document.activeElement)) {
            switch (this.k) {
                case 16:
                    this.l.g();
                    break;
                case 256:
                    this.l.h();
                    break;
                default:
                    break
            }
            this.k = 0
        }
    },
    Q: function(n) {
        var i = _j.k.o(n, "*[RegionContainer],*[RegionBehavior]");
        var t = _j.B.e(i, "*[RegionContainer]");
        !t.length;
        if (t.length > 1) throw Error.invalidOperation("This region is contained in multiple region containers.");
        var r = _j.B.e(i, "*[RegionBehavior]");
        return r.length > 0 && this.n ? !1 : !0
    }
};
_b.bW = function(n, t) {
    _b.bW.initializeBase(this);
    this.c = n;
    this.d = _b.m.b(t)
};
_b.bW.prototype = {
    c: null,
    d: !1,
    b: null,
    a: null,
    bb: function() {
        _j.bV.prototype.bb.call(this);
        var n = this.X.z;
        if (this.d) {
            if (!this.b) {
                this.b = this.e();
                this.b.setAttribute("tabindex", "0")
            }
            if (!this.a) {
                this.a = this.e();
                this.a.setAttribute("tabindex", "1")
            }
            this.c.f(this);
            _j.k.s(this.b, n);
            _j.k.F(this.a, n)
        }
        n.setAttribute("RegionContainer", "1")
    },
    bc: function() {
        _j.bV.prototype.bc.call(this);
        this.c.f(null);
        this.b && _j.k.f(this.b);
        this.a && _j.k.f(this.a);
        this.X.z.removeAttribute("RegionContainer")
    },
    e: function() {
        var n = window.document.createElement("div");
        n.setAttribute("aria-hidden", "true");
        n.setAttribute("aria-label", _u.R.Sz);
        _j.k.d(n, "hiddenTabstop");
        return n
    }
};
_b.cj = function(n) {
    this.bo = Function.createDelegate(this, this.bG);
    this.L = Function.createDelegate(this, this.bf);
    this.M = Function.createDelegate(this, this.bg);
    this.K = Function.createDelegate(this, this.bu);
    this.br = Function.createDelegate(this, this.bH);
    this.Q = Function.createDelegate(this, this.bP);
    this.N = Function.createDelegate(this, this.bJ);
    this.P = Function.createDelegate(this, this.bN);
    this.O = Function.createDelegate(this, this.bK);
    this.D = _fce.u.a(0, 0, !0);
    this.f = -1;
    this.n = -1;
    this.u = -1;
    this.bj = -1;
    this.bi = -1;
    _b.cj.initializeBase(this);
    _dh.a(n, this);
    this.m = !0
};
_b.cj.prototype = {
    q: 0,
    k: 0,
    h: 0,
    j: 0,
    i: null,
    p: null,
    c: null,
    b: null,
    C: 0,
    a: null,
    d: 0,
    t: null,
    e: null,
    x: null,
    w: null,
    z: !1,
    m: !1,
    be: function(n) {
        _j.s.c(_b.bG.isInstanceOfType(n), "The control must be of type ISwipableControl to attach to SwipableBehavior");
        this.a = n;
        this.a.f(this.O);
        this.a.n(this.P);
        this.a.m(this.N);
        this.a.e(this.Q);
        _j.bV.prototype.be.call(this, n)
    },
    bh: function(n) {
        _j.s.c(!!this.a, "The current control must not be null");
        this.a.q(this.O);
        this.a.s(this.P);
        this.a.r(this.N);
        this.a.p(this.Q);
        this.a = null;
        if (this.b) {
            this.b.K(!0);
            this.b.dispose();
            this.b = null
        }
        _j.bV.prototype.bh.call(this, n)
    },
    bg: function(n) {
        _j.k.b(n, _b.o.b(), this.br);
        _j.k.a(n, "-webkit-transition", "-webkit-transform .2s ease-out");
        _j.k.a(n, _b.o.a(), this.D);
        this.bn()
    },
    bf: function(n) {
        var t = this.d === 1 ? -this.f : this.f;
        if (this.z) {
            _j.k.a(n, "-webkit-transition", "-webkit-transform .2s ease-out");
            _j.k.a(n, _b.o.a(), _fce.u.a(t, 0, !0));
            this.bu(null)
        } else {
            this.bw(this.K, 200);
            _j.k.a(n, "-webkit-transition", "-webkit-transform .3s ease-out");
            _j.k.b(n, _b.o.b(), this.K);
            _j.k.a(n, _b.o.a(), _fce.u.a(t, 0, !0))
        }
    },
    l: function(n) {
        this.e = null
    },
    o: function(n, t) {
        this.k === 2 ? this.w = this.M : this.k === 1 && (this.w = this.L);
        this.q === 2 ? this.x = this.M : this.q === 1 && (this.x = this.L);
        this.v()
    },
    bC: function(n) {
        if (this.a.c() || this.f <= 0 || this.n <= 0) {
            this.f = _j.k.k(n.z, !1);
            this.n = _j.k.l(n.z, !1);
            this.C = this.f * .22;
            this.j = Math.abs(this.f);
            this.h = Math.abs(this.f)
        }
        this.a.c() && this.v()
    },
    v: function() {
        if (!(this.f <= 0)) {
            this.j = 0;
            this.h = 0;
            var n = Math.abs(this.f);
            var t = Math.abs(n * .55);
            this.k === 2 ? this.j = t : this.k === 1 && (this.j = n);
            this.q === 2 ? this.h = t : this.q === 1 && (this.h = n)
        }
    },
    bv: function(n, t) {
        _j.B.c(n, _b.o.b());
        _j.B.f(n, _b.o.b(), t);
        _j.B.b(n, _b.o.a(), _fce.u.a(0, -this.n, !0))
    },
    bx: function(n) {
        _j.B.c(n, _b.o.b());
        _j.B.b(n, _b.o.a(), _fce.u.a(0, 0, !0))
    },
    S: function() {
        this.t && (this.t = _j.m.a().b(this.t))
    },
    bw: function(n, t) {
        this.S();
        var i = this;
        this.t = _j.m.a().a(_a.a.cb, "CancelSwipeAnimation", function() {
            _j.e.a(_a.a.cb, "Mail swipe animation too long, force canceling.");
            n(null)
        }, t)
    },
    bJ: function(n) {
        this.l(null);
        this.B(n)
    },
    bN: function(n) {
        this.l(null);
        this.B(n);
        if (!_fc.v.isInstanceOfType(n) && n.be()) {
            var t = n.be().z;
            if (t) {
                _b.h.g(t, "SwipeBehavior");
                _b.h.o(t, "SwipeBehavior");
                _b.h.k(t, "SwipeBehavior")
            }
        }
    },
    bu: function(n) {
        if (this.c) {
            _j.k.c(this.c.z.children[0], _b.o.b());
            this.S();
            this.c.ew = !0;
            var t = _j.k.K(this.c.z);
            if (t.length) {
                _j.B.b(t, "-webkit-transition", "-webkit-transform .2s ease-out");
                this.bv(t, this.bo);
                _j.e.a(_a.a.cb, "HandleAnimationEndForSwipeLong: Remaining list items swiped up")
            } else {
                this.bn();
                this.c.z.style.display = "none";
                this.c = null
            }
        }
    },
    bH: function(n) {
        var t = this.c.z.children[0];
        _j.k.c(t, _b.o.b());
        this.g(this.c, !1);
        this.c = null
    },
    bn: function() {
        this.d === 2 ? this.bm(this.c) : this.d === 1 && this.bk(this.c)
    },
    bK: function(n) {
        var e = this;
        var f = function(t) {
            e.bS(n, t)
        };
        var u = this;
        var o = function(t) {
            u.bR(n, t)
        };
        var i = this;
        var r = function(t) {
            i.bQ(n, t)
        };
        var t = n.be().z;
        if (t) {
            _b.h.a(t, _b.h.h(t, f, !1), "SwipeBehavior", !1, !1);
            _b.h.e(t, _b.h.m(t, o), "SwipeBehavior");
            _b.h.b(t, _b.h.l(t, r), "SwipeBehavior")
        }
    },
    B: function(n) {
        _j.k.a(n.z.firstChild, _b.o.a(), this.D)
    },
    A: function() {
        if (this.b) {
            _j.k.e(this.b.z, this.i);
            _j.k.e(this.b.z, this.p)
        }
    },
    bP: function() {
        this.bI()
    },
    bS: function(n, t) {
        if (this.m && !this.c && this.T()) {
            this.bi = t.n();
            this.u = t.e();
            this.bj = t.f();
            this.c = n;
            this.l(new _a.bl(10, "", "", "", null, null, null));
            this.R(this.c);
            this.d = 0;
            n.z.appendChild(this.b.z);
            this.bC(n);
            this.bU();
            _j.k.a(n.z, _fce.u.c(), _fce.u.a(0, 0, !1));
            var i = n.z.childNodes[0];
            _j.k.c(i, _b.o.b());
            _j.k.a(i, "-webkit-transition-duration", "0s");
            _j.m.a().j(_a.a.cb, "ModernSwipe");
            _j.m.a().g()
        }
    },
    bI: function() {
        if (!this.b) {
            this.b = new _j.c(window.document.createElement("div"));
            this.b.y(this.bd());
            this.b.ba(this.a.a());
            this.b.bm();
            this.b.z.style.position = "absolute";
            this.b.z.style.zIndex = -1;
            _j.k.d(this.b.z, "ms-bg-color-neutralTertiary");
            this.b.z.style.width = "100%"
        }
        _j.e.a(_a.a.cb, "Templates initialized")
    },
    bU: function() {
        if (this.a.c()) {
            var n = this.b.z;
            n && _j.k.a(n, _b.o.a(), _fce.u.a(0, -this.n, !0));
            this.a.u(!1)
        }
    },
    bR: function(n, t) {
        if (!this.m || this.a.o()) {
            this.c = null;
            return
        }
        if (this.c === n) {
            var i = t.e() - this.u;
            var r = n.z.childNodes[0];
            Math.abs(i) >= 10 && Math.abs(t.f() - this.bj) <= 5 && t.c();
            if (r && i < 0) {
                i * -1 <= this.j && _j.k.a(r, _b.o.a(), _fce.u.a(i, 0, !0));
                this.y(1)
            } else if (r) {
                i <= this.h && _j.k.a(r, _b.o.a(), _fce.u.a(i, 0, !0));
                this.y(2)
            }
            var u = Math.abs(i) > this.C;
            this.z = this.bD(t, i) > this.C && !u;
            if (u || this.z) {
                if (t.e() > this.u && this.h > 0) {
                    this.d = 2;
                    this.g(n, !0)
                } else if (t.e() < this.u && this.j > 0) {
                    this.d = 1;
                    this.g(n, !0)
                }
            } else {
                this.d = 0;
                this.A();
                this.g(n, !1)
            }
            if (u)
                if (this.d === 2) {
                    _j.k.p(this.b.z, this.p) || _j.k.d(this.b.z, this.p);
                    this.g(n, !0)
                } else if (this.d === 1) {
                _j.k.p(this.b.z, this.i) || _j.k.d(this.b.z, this.i);
                this.g(n, !0)
            }
        }
    },
    bD: function(n, t) {
        var e = n.n() - this.bi;
        var u = Math.abs(t) / e;
        var i = -.0015;
        var r = Math.abs(u / i);
        return Math.abs(t) + u * r + .5 * i * Math.pow(r, 2)
    },
    bQ: function(n, t) {
        if (this.m && this.c === n) {
            var i = n.z.children[0];
            _j.k.c(i, _b.o.b());
            this.e = this.c;
            this.A();
            if (this.d === 2) {
                _j.e.a(_a.a.cb, "OnTouchEnd: Item swiped to right");
                this.x(i);
                _j.k.d(this.b.z, this.p)
            } else if (this.d === 1) {
                _j.e.a(_a.a.cb, "OnTouchEnd: Item swiped to left");
                this.w(i);
                _j.k.d(this.b.z, this.i)
            } else {
                _j.k.a(i, "-webkit-transition", "-webkit-transform .2s ease-out");
                _j.k.a(i, _b.o.a(), this.D);
                this.c = null
            }
            _j.m.a().ba()
        }
    },
    bG: function(n) {
        if (!this.c) {
            _j.e.a(_a.a.cb, "HandleAnimationEndForAdjustList: LastTouchedItem was null when trying to adjust list after item animated long");
            return
        }
        var t = _j.k.K(this.c.z);
        _j.B.b(t, "-webkit-transition-duration", "0s");
        this.bx(t);
        this.bn();
        _j.e.a(_a.a.cb, "HandleAnimationEndForAdjustList: Item long swiped");
        this.c.z.style.display = "none";
        this.c = null
    }
};
_b.j = function(n) {
    this.b = Function.createDelegate(this, this.d);
    _b.j.initializeBase(this);
    _dh.a(n, this)
};
_b.j.i = function(n, t, i) {
    _b.j.l.a(n.querySelectorAll("." + _b.j.a.toLowerCase()));
    var e = t ? _b.j.p : _b.j.m;
    var o = t === 1;
    if (i && i.length > 0)
        for (var r, u = 0; u < i.length; u++) {
            r = _b.j.n[i[u].bH.Scope];
            if (r) {
                r = String.format(".{0}Highlight{1}Class", e, r);
                var f = i[u].bH.Value;
                _b.j.l.r(f, r, n, o)
            }
        }
};
_b.j.prototype = {
    a: null,
    Y: function() {
        _j.bk.prototype.Y.call(this);
        this.X && this.X.V() && this.c()
    },
    be: function(n) {
        _j.bV.prototype.be.call(this, n);
        n.V() && this.c()
    },
    bh: function(n) {
        this.a && n && n.V() && _a.bw.isInstanceOfType(n.V()) && n.V().rpcl(this.a, this.b);
        _j.bV.prototype.bh.call(this, n)
    },
    c: function() {
        if (this.X)
            if (_y.bV.isInstanceOfType(this.X.V())) {
                this.a = "FinishedRendering";
                this.X.apcl("FinishedRendering", this.b)
            } else if (_y.bw.isInstanceOfType(this.X.V())) {
            var t = this.X.V();
            this.a = t.d();
            this.X.V().apcl(t.d(), this.b)
        } else if (_y.bD.isInstanceOfType(this.X.V())) {
            var n = this.X.V();
            this.a = n.c();
            this.X.V().apcl(n.c(), this.b)
        }
    },
    d: function(n, t) {
        this.X && _h.u.a && _h.u.a.length > 0 && (_y.bV.isInstanceOfType(this.X.V()) ? _b.j.i(this.X.z, 0, _h.u.a) : (_y.bw.isInstanceOfType(this.X.V()) || _y.bD.isInstanceOfType(this.X.V())) && _b.j.i(this.X.z, 1, _h.u.a))
    }
};
_b.bd.registerClass("_b.bd");
_b.be.registerClass("_b.be");
_b.t.registerClass("_b.t", _fce.bi);
_b.bA.registerClass("_b.bA", _fce.d);
_b.S.registerClass("_b.S", _b.bA);
_b.bf.registerClass("_b.bf", _fm.e);
_b.bu.registerClass("_b.bu", _j.i);
_b.n.registerClass("_b.n", _fce.l);
_b.O.registerClass("_b.O", _fce.l);
_b.f.registerClass("_b.f");
CoreControlsComponent.registerClass("CoreControlsComponent", null, _a.kj, _j.ce);
_b.bX.registerClass("_b.bX", null, _b.z);
_b.u.registerClass("_b.u", _j.i);
_b.R.registerClass("_b.R", _fc.d);
_b.N.registerClass("_b.N", _fc.a);
_b.bO.registerClass("_b.bO", _j.i, _b.bF);
_b.P.registerClass("_b.P", _fc.s);
_b.x.registerClass("_b.x", _j.c);
_b.y.registerClass("_b.y", _fc.i);
_b.ce.registerClass("_b.ce", _j.bZ);
_b.Q.registerClass("_b.Q");
_b.W.registerClass("_b.W", _fc.a);
_b.d.registerClass("_b.d", _j.S);
_b.bz.registerClass("_b.bz", null, _b.cx);
_b.B.registerClass("_b.B");
_b.bk.registerClass("_b.bk", null, _b.cx);
_b.bC.registerClass("_b.bC", null, _b.cx);
_b.bs.registerClass("_b.bs", null, _b.cx);
_b.e.registerClass("_b.e", _fc.r);
_b.bD.registerClass("_b.bD", null, _b.cx);
_b.p.registerClass("_b.p", _j.i);
_b.A.registerClass("_b.A", _fc.y);
_b.cf.registerClass("_b.cf", _b.P);
_b.bb.registerClass("_b.bb", _fc.a);
_b.v.registerClass("_b.v", _fce.a);
_b.cg.registerClass("_b.cg", _a.jT);
_b.g.registerClass("_b.g", _j.c);
_b.F.registerClass("_b.F", _j.c);
_b.J.registerClass("_b.J", _b.F);
_b.b.registerClass("_b.b", _fce.a, _b.bE);
_b.C.registerClass("_b.C", _fce.e);
InlineImageLoader.registerClass("InlineImageLoader");
_b.bQ.registerClass("_b.bQ", null, _b.bP);
_b.bl.registerClass("_b.bl", _j.c);
_b.cy.registerClass("_b.cy", _fce.w);
_b.bo.registerClass("_b.bo", _b.cy);
_b.bg.registerClass("_b.bg", _b.cy);
_b.cz.registerClass("_b.cz", _fce.ba);
_b.bm.registerClass("_b.bm", _b.cz);
_b.bc.registerClass("_b.bc", _b.cz);
_b.bS.registerClass("_b.bS", null, _b.i);
_b.bh.registerClass("_b.bh", _j.c);
_b.by.registerClass("_b.by");
_b.bB.registerClass("_b.bB");
_b.q.registerClass("_b.q", _b.b);
_b.X.registerClass("_b.X", _j.c);
_b.K.registerClass("_b.K", _j.c);
_b.Y.registerClass("_b.Y");
_b.bT.registerClass("_b.bT", _fc.d);
_b.D.registerClass("_b.D", _j.i);
_b.bY.registerClass("_b.bY", null, _j.bP);
_b.bv.registerClass("_b.bv", null, _j.bP);
_b.bw.registerClass("_b.bw", null, _j.bP);
_b.T.registerClass("_b.T", null, _j.bP);
_b.M.registerClass("_b.M", null, _j.bP);
_b.U.registerClass("_b.U", null, _j.bP);
_b.bp.registerClass("_b.bp", null, _j.bP);
_b.ca.registerClass("_b.ca", null, _j.bP);
_b.bH.registerClass("_b.bH", null, _j.bP);
_b.cb.registerClass("_b.cb", null, _j.bP);
_b.Z.registerClass("_b.Z", null, _j.bP);
_b.bq.registerClass("_b.bq", null, _j.bP);
_b.bI.registerClass("_b.bI", null, _j.bP);
_b.ba.registerClass("_b.ba", null, _j.bP);
_b.cd.registerClass("_b.cd", null, _j.bP);
_b.V.registerClass("_b.V", null, _j.bP);
_b.bi.registerClass("_b.bi", null, _j.bP);
_b.bL.registerClass("_b.bL", null, _j.bP);
_b.bJ.registerClass("_b.bJ", null, _j.bP);
_b.bj.registerClass("_b.bj", null, _j.bP);
_b.a.registerClass("_b.a", null, _fc.f);
_b.E.registerClass("_b.E", _fce.bj, _b.ci);
_b.H.registerClass("_b.H", _j.bV);
_b.s.registerClass("_b.s", _j.bV);
_b.r.registerClass("_b.r", _j.bV);
_b.L.registerClass("_b.L", _b.E);
_b.m.registerClass("_b.m", _j.bV, _b.cu);
_b.bW.registerClass("_b.bW", _j.bV);
_b.cj.registerClass("_b.cj", _j.bV);
_b.j.registerClass("_b.j", _j.bV);
_b.h.r = !1;
_b.h.j = !1;
_b.h.f = "mousedown";
_b.h.i = "mousemove";
_b.h.d = "mouseup mouseleave";
_b.bf.a = 60;
_b.k.l = new RegExp("LPlnk([0-9]*)");
_b.k.g = ["OWAHT", "OWAAM"];
_b.k.m = _b.l.r().a();
CoreControlsComponent.$$cctor();
_b.x.d = new _a.f("Name", String, _b.x);
_b.x.a = new _a.f("InputFiles", _a.iM, _b.x);
_b.x.b = new _a.f("OnFilesChange", _j.P, _b.x);
_b.x.c = new _a.f("OpenFilePickerCommand", _j.P, _b.x);
_b.y.b = new RegExp("\r\n", "gi");
_b.y.a = new RegExp("[\r\n]", "gi");
_b.y.c = new RegExp("(;\\s*)+", "gi");
_b.e.a = "ActiveKeyset";
_b.p.c = ["http:", "https:"];
_b.p.a = new _j.K("Html", String, _b.p, null, null, _b.p.d);
_b.p.b = null;
_b.F.a = new _a.f("IsEnabled", Boolean, _b.F, !1);
_b.C.a = new _a.f("IsSingletonSelection", Boolean, _b.C, null);
InlineImageLoader.a = null;
_b.bt.b = _b.bt.a();
_b.w.b = null;
_b.w.c = null;
_b.w.d = null;
_b.w.$$cctor();
_b.o.g = {
    feedbackList: 1,
    listHl: 1,
    taskInD: 1,
    taskInT: 1,
    taskOutD: 1,
    taskOutT: 1,
    taskIconMini: 1,
    miniOut: 1,
    miniIn: 1,
    fadeIn: 1,
    fadeIn100: 1,
    fadeIn200: 1,
    fadeOut: 1,
    fadeOut50: 1,
    fadeOut100: 1
};
_b.s.g = "Html5Draggable";
_b.s.b = 1;
_b.s.f = null;
_b.s.e = new _b.bx;
_b.s.d = "DataTransfer" in window && "setDragImage" in DataTransfer.prototype;
_b.s.h = 0;
_b.s.a = 0;
_b.s.c = 0;
_b.r.c = "Html5Droppable";
_b.r.a = [];
_b.r.d = new _b.bx;
_b.r.e = 0;
_b.L.a = !1;
_b.m.a = "RegionBehavior";
_b.j.a = "Highlight";
_b.j.k = "currentHitHighlight";
_b.j.m = "lv";
_b.j.p = "rp";
_b.j.e = _b.j.m + _b.j.a;
_b.j.c = "Class";
_b.j.f = " ";
_b.j.h = _b.j.e + "All" + _b.j.c;
_b.j.g = _b.j.h + _b.j.f + _b.j.e + _h.C.toString(5) + _b.j.c + _b.j.f + _b.j.e + _h.C.toString(8) + _b.j.c;
_b.j.d = _b.j.h + _b.j.f + _b.j.e + _h.C.toString(4) + _b.j.c;
_b.j.b = _b.j.h + _b.j.f + _b.j.e + _h.C.toString(1) + _b.j.c;
_b.j.j = _b.j.h + _b.j.f + _b.j.e + _h.C.toString(2) + _b.j.c;
_b.j.o = _b.j.g + _b.j.f + "owa-color-neutral-orange";
_b.j.n = {
    SearchAllIndexedProps: _h.C.toString(0),
    SubjectProperty: _h.C.toString(1),
    TextBody: _h.C.toString(2),
    AttachmentContent: _h.C.toString(3),
    SearchSender: _h.C.toString(4),
    SearchRecipientsTo: _h.C.toString(5),
    SearchRecipientsCc: _h.C.toString(6),
    SearchRecipientsBcc: _h.C.toString(7),
    SearchRecipients: _h.C.toString(8)
};
_b.j.l = new _a.bK(_b.j.a.toLowerCase());
Type.registerNamespace("_n");
_n.bC = function(n) {
    _n.bC.initializeBase(this, [n])
};
_n.bC.prototype = {
    a: 0,
    b: function(n) {
        switch (n) {
            case 2:
                this.y("BottomActionBarView");
                break;
            case 1:
                this.y("BottomAppBarModuleSwitcherView");
                break;
            case 3:
                this.y("BottomAppBarReactModuleSwitcherView");
                break
        }
        this.a = n;
        return n
    }
};
_n.A = function(n) {
    this.g = Function.createDelegate(this, this.j);
    _n.A.initializeBase(this, [n]);
    this.d = new _j.g(this.g, this.I())
};
_n.A.prototype = {
    e: 0,
    a: null,
    f: null,
    b: null,
    h: !1,
    d: null,
    c: function(n) {
        switch (n) {
            case 1:
                this.y("TopAppBarAndroidView");
                break;
            case 2:
                this.y("TopAppBarIOSView");
                break;
            case 4:
                this.y("SearchBarIOSView");
                break;
            case 3:
                this.y("SearchBarAndroidView");
                break;
            case 6:
            case 5:
                this.y("SearchTopBar.Narrow");
                break
        }
        this.e = n;
        return n
    },
    i: function() {
        switch (this.e) {
            case 5:
                return "SearchInputIOSView.Narrow";
            case 6:
                return "SearchInputView.Narrow";
            default:
                return null
        }
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.Q(_u.R.OE);
        if (this.B) {
            this.f = this.B.a("SearchView");
            this.a = this.B.a("SearchView");
            this.a && this.a.b(this.h);
            this.b = this.B.a("SearchSuggestionPopup")
        }
    },
    j: function() {
        if (this.a && this.b) {
            this.a.a().S().o(this.b.g());
            if (!this.a.a().pU()) {
                var t = this.b.a;
                if (t) {
                    var i = t.cd();
                    if (i) {
                        var n = _j.D.a();
                        i.O(n);
                        this.a.a().hr(n);
                        this.a.a().S().q(n)
                    }
                }
            }
            this.a.a().dB(this.b.Z() ? 1 : 0)
        }
    }
};
_n.bT = function() {};
_n.bT.registerInterface("_n.bT");
_n.u = function(n, t, i, r, u, f, e, o, s) {
    this.s = Function.createDelegate(this, this.bi);
    this.p = Function.createDelegate(this, this.be);
    this.r = Function.createDelegate(this, this.bg);
    this.o = Function.createDelegate(this, this.bd);
    this.t = Function.createDelegate(this, this.bl);
    this.u = Function.createDelegate(this, this.br);
    this.v = Function.createDelegate(this, this.bs);
    _n.u.initializeBase(this, [n]);
    this.y("PrimaryView.Mouse");
    this.c = t;
    this.b = i;
    this.A(-1);
    this.l = new _j.g(this.v, _a.a.g);
    this.j = r;
    this.x = u;
    this.w = f;
    this.n = e;
    this.k = o;
    this.i = s
};
_n.u.b = function() {
    return _n.u.c
};
_n.u.c = function(n, t, i) {
    return _y.cN.isInstanceOfType(n) ? new _ff.h(27, 32) : _y.cN.isInstanceOfType(t) ? new _ff.h(28, 31) : _y.cp.isInstanceOfType(n) || _y.eT.isInstanceOfType(n) ? new _ff.h(1e4, 1e4, 4) : new _ff.h(1e4, 1e4)
};
_n.u.prototype = {
    c: null,
    b: null,
    j: null,
    e: null,
    h: null,
    g: null,
    l: null,
    x: null,
    w: null,
    n: null,
    k: null,
    f: null,
    d: null,
    i: !1,
    m: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.b.a(_y.bO, new _y.bO(this.f))
        }
        return n
    },
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            this.B.a("headerBackground").z.style.height = "50px";
            this.h = this.B.a("GoToPrevRegion");
            this.g = this.B.a("GoToNextRegion");
            _j.k.b(this.h.z, "focus", this.u);
            _j.k.b(this.g.z, "focus", this.t)
        }
        if (!this.e) {
            var t = this.B.a("header");
            var n = this.B.a("conductor");
            this.e && this.e.dispose();
            this.e = this.j.a(n.z, t.z)
        }
    },
    G: function() {
        this.bc();
        this.bv();
        _n.bU.prototype.G.call(this)
    },
    M: function() {
        this.bJ();
        _j.c.prototype.M.call(this)
    },
    bE: function() {
        _j.k.c(this.h.z, "focus");
        _j.k.c(this.g.z, "focus")
    },
    bC: function() {
        var n = new _b.e(this.k);
        n.j("Search");
        n.l = this.l;
        n.n = !0;
        n.m = !0;
        n.o = !0;
        var t = new _fc.g;
        t.a([n]);
        return [t]
    },
    bv: function() {
        switch (this.n.a().N()) {
            case 1:
                this.b.a(_b.B, new _b.B("Off"));
                break;
            case 0:
                this.b.a(_b.B, new _b.B("Outlook"));
                break;
            case 3:
                this.b.a(_b.B, new _b.B("GMail"));
                break;
            case 2:
                this.b.a(_b.B, new _b.B("YahooMail"));
                break;
            case 4:
            default:
                this.b.a(_b.B, new _b.B("OutlookWebApp"));
                break
        }
    },
    bc: function() {
        this.bu();
        this.E()
    },
    bJ: function() {
        this.bN();
        this.bD()
    },
    bu: function() {
        _j.k.b(this.q, "keydown", this.o)
    },
    bN: function() {
        _j.k.c(this.q, "keydown")
    },
    bd: function(n) {
        if (n.a() === 117 && n.h() && !n.l())
            if (n.g() && this.c.b().b) {
                this.c.b().d();
                n.c()
            } else if (this.c.a().b) {
            this.c.a().d();
            n.c()
        }
    },
    bs: function() {
        if (this.a && this.a.a()) {
            var t = this.a.a().a;
            var n = null;
            this.a.a().b && this.a.a().b.C() && (n = this.a.a().b.C().a());
            this.b.a(_y.P, new _y.P(t, n, !1))
        }
    },
    E: function() {
        _j.k.b(document.body, "dragover", this.r, _n.u.a);
        _j.k.b(document.body, "dragleave", this.p, _n.u.a);
        _j.k.b(document.body, "drop", this.s, _n.u.a)
    },
    bD: function() {
        _j.k.c(document.body, "dragover", _n.u.a);
        _j.k.c(document.body, "dragleave", _n.u.a);
        _j.k.c(document.body, "drop", _n.u.a)
    },
    bg: function(n) {
        var t = n.s;
        _b.r.b(t);
        var i = t.dataTransfer.types;
        this.m(i);
        this.d && (this.d = _j.m.a().b(this.d))
    },
    be: function(n) {
        if (!this.d) {
            var t = this;
            this.d = _j.m.a().a(_a.a.g, "OnDragLeave", function() {
                t.m(null);
                t.d = null
            }, 50)
        }
    },
    bi: function(n) {
        var t = n.s;
        _b.r.b(t);
        this.m(null)
    },
    br: function(n) {
        this.c.e()
    },
    bl: function(n) {
        this.c.d()
    }
};
_n.O = function(n, t, i, r, u) {
    this.u = Function.createDelegate(this, this.bW);
    this.v = Function.createDelegate(this, this.bD);
    this.r = Function.createDelegate(this, this.bJ);
    this.s = Function.createDelegate(this, this.bN);
    this.bl = Function.createDelegate(this, this.bP);
    this.t = Function.createDelegate(this, this.bU);
    _n.O.initializeBase(this, [n]);
    _a.c.b(i, "animationProvider");
    _a.c.b(r, "owaShell");
    this.y("PrimaryView");
    this.e = t;
    this.w = i;
    this.k = r;
    this.g = this.i();
    this.bc = u;
    this.e.b(_y.bP, this.t);
    var b = this,
        k = this,
        p = this,
        w = this,
        f = this,
        nt = this,
        tt = this;
    this.U(_j.f.a(["CurrentModule", "ModuleViewModel", "SearchControllerViewModel", "IsSearchOn"], [function(n) {
        return n.a()
    }, function(n) {
        return n.b
    }, function(n) {
        return n.H
    }, function(n) {
        return n.b
    }], function(n, t) {
        n.d(function(i) {
            n.e(t);
            f.bQ()
        })
    }, "SearchMode", function(n) {
        return n.l
    }, function(n, t) {
        n.bg(t)
    }, 2, null, null, !1));
    var d = this,
        g = this,
        y = this,
        o = this,
        s = this,
        h = this,
        e = this;
    this.U(_j.f.a(["CurrentModule", "ModuleViewModel", "SearchViewModel", "IsTextBoxFocused"], [function(n) {
        return n.a()
    }, function(n) {
        return n.b
    }, function(n) {
        return n.C()
    }, function(n) {
        return n.bn()
    }], function(n, t) {
        n.k(t)
    }, "IsSearchFocused", function(n) {
        return n.j
    }, function(n, t) {
        n.be(t)
    }, 2, null, null, !1));
    var a = this,
        v = this,
        c = this,
        l = this;
    this.U(_j.f.a(["ModuleConductor", "Top"], [function(n) {
        return n.g()
    }, function(n) {
        return n.a()
    }], null, "ComposeMode", function(n) {
        return n.h
    }, function(n, t) {
        n.bY(t)
    }, 1, new _n.bx, null, !1))
};
_n.O.prototype = {
    w: null,
    e: null,
    bc: null,
    l: !1,
    j: !1,
    h: !1,
    d: !1,
    c: !1,
    f: null,
    o: null,
    b: null,
    g: 0,
    k: null,
    p: null,
    bS: function() {
        var n = this.w;
        return n.a || (n.a = Function.createDelegate(n, n.b))
    },
    n: function(n) {
        if (this.d === n) return n;
        this.d = n;
        if (this.f)
            if (this.d && this.x()) {
                this.f.z.style.visibility = "Visible";
                this.by("ShouldShowTopAppBar")
            } else this.bs(this.d, this.f, "ShouldShowTopAppBar", this.s, 0);
        return n
    },
    m: function(n) {
        if (this.c === n) return n;
        this.c = n;
        this.c || !this.x() ? this.bs(this.c, this.o, "ShouldShowBottomAppBar", this.r, 1) : this.by("ShouldShowBottomAppBar");
        return n
    },
    bd: function(n) {
        if (this.g === n) return n;
        this.g = n;
        this.by("BottomAppBarHeight");
        return n
    },
    i: function() {
        return this.k.a() === "TouchNarrow" ? 50 : 60
    },
    x: function() {
        var n = this.E();
        return !!n && n.C
    },
    bg: function(n) {
        if (n === this.l) return n;
        this.l = n;
        this.bi();
        this.by("SearchMode");
        return n
    },
    be: function(n) {
        this.j = n;
        this.by("IsSearchFocused");
        return n
    },
    bY: function(n) {
        if (n === this.h) return n;
        this.h = n;
        this.bi();
        this.by("ComposeMode");
        return n
    },
    bR: function() {
        if (_y.C.isInstanceOfType(this.b)) {
            var n = this.b;
            if (n.n() === 2) return n.l()
        }
        return null
    },
    E: function() {
        if (_y.C.isInstanceOfType(this.b)) {
            var n = this.b;
            if (n.n() === 1) return n.l()
        }
        return null
    },
    P: function() {
        var n = _j.n.b(_a.a.cB, 2, "PrimaryView.htm.cs:OnFirstActivate");
        _n.bU.prototype.P.call(this);
        this.bi();
        _j.n.a(n)
    },
    bz: function() {
        this.e.c(_y.bP, this.t);
        _j.c.prototype.bz.call(this)
    },
    Y: function() {
        this.a && this.a.g().rpcl("Top", this.v);
        _n.bU.prototype.Y.call(this);
        this.a && this.a.g().apcl("Top", this.v);
        this.bD(null, "")
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.f = this.B.a("TopAppBar");
        this.o = this.B.a("BottomAppBar");
        var n = this.B.a("PrimaryContainer");
        this.p && this.p.dispose();
        this.p = this.bc.a(n.z)
    },
    bs: function(n, t, i, r, u) {
        if (t)
            if (n) {
                var e = this.b;
                this.bd(e.l() && e.l().B ? this.i() : 1);
                this.by(i);
                if (e.eF()) {
                    var f = this;
                    t.cb(!0, function() {
                        f.bd(f.i());
                        t.z.style.visibility = f.bv(u) ? "Visible" : "hidden";
                        f.e.a(_y.eH, new _y.eH(!0))
                    })
                } else {
                    t.z.style.visibility = "hidden";
                    e.apcl("IsTransitionedIn", r)
                }
            } else {
                var o = this;
                t.cb(!1, function() {
                    t.z.style.visibility = o.bv(u) ? "Visible" : "hidden";
                    o.by(i)
                })
            }
    },
    bv: function(n) {
        switch (n) {
            case 0:
                return this.d;
            case 1:
            default:
                return this.c
        }
    },
    bD: function(n, t) {
        this.b && this.b.rpcl("ApplicationBarViewModel", this.u);
        this.b = this.a && _y.C.isInstanceOfType(this.a.g().a()) ? this.a.g().a() : null;
        this.b && this.b.apcl("ApplicationBarViewModel", this.u);
        this.bu()
    },
    bu: function() {
        if (_y.C.isInstanceOfType(this.b)) {
            var n = this.b;
            if (n.n() === 1) {
                this.by("TopApplicationBarViewModel");
                this.by("IsApplicationBarFloat")
            } else n.n() === 2 && this.by("BottomApplicationBarViewModel")
        }
        this.bZ()
    },
    bW: function(n, t) {
        this.bu()
    },
    bZ: function() {
        if (this.a) {
            if (_y.C.isInstanceOfType(this.b)) {
                var n = this.b;
                if (n.n() === 1) {
                    this.E() && this.n(!0);
                    this.m(!1)
                } else if (n.n() === 2) {
                    this.n(!1);
                    this.m(!0)
                } else {
                    this.n(!1);
                    this.m(!1)
                }
            } else if (this.b || !_y.bj.isInstanceOfType(this.a.g().a())) {
                this.n(!1);
                this.m(!1)
            }
        } else {
            this.n(!1);
            this.m(!1)
        }
    },
    bi: function() {
        if (this.V()) {
            var n = this.V();
            n && n.a() && n.a().b && n.a().b.C() && (this.k.a() !== "TouchNarrow" && _y.d.isInstanceOfType(n.a().b) || n.a().b.C().ch(this.l && !this.h))
        }
    },
    br: function(n, t, i) {
        n.z.style.visibility = "";
        n.cb(!0, i);
        var r = this.V().g().a();
        r.rpcl("IsTransitionedIn", t)
    },
    bN: function(n, t) {
        this.br(this.f, this.s, null)
    },
    bJ: function(n, t) {
        var i = this;
        this.br(this.o, this.r, function() {
            i.bd(i.i());
            i.e.a(_y.eH, new _y.eH(!0))
        })
    },
    bU: function(n) {
        var t = this.V();
        if (t && t.a() && t.a().b && !t.a().b.C()) {
            var i = this;
            t.a().b.H.d(function(t) {
                i.bg(n.b);
                n.a && !i.j && i.be(n.a)
            })
        } else {
            this.bg(n.b);
            n.a && !this.j && this.be(n.a)
        }
    },
    bQ: function() {
        var n = this.V();
        if (n && n.a() && n.a().b && _y.d.isInstanceOfType(n.a().b) && this.k.a() === "TouchWide") {
            var t = n.a().b;
            t.h.t(!0)
        }
    },
    bP: function(n, t) {
        return !(_y.Q.isInstanceOfType(n) && _y.d.isInstanceOfType(t)) && !(_y.g.isInstanceOfType(n) && _y.d.isInstanceOfType(t))
    }
};
_n.bU = function(n) {
    _n.bU.initializeBase(this, [n]);
    this.q = document.body
};
_n.bU.prototype = {
    q: null,
    a: null,
    P: function() {
        var n = _j.n.b(_a.a.by, 2, "PMVActF");
        _j.c.prototype.P.call(this);
        _j.n.a(n)
    },
    G: function() {
        var n = _j.n.b(_a.a.by, 2, "PMVAct");
        _j.c.prototype.G.call(this);
        _j.n.a(n)
    },
    Y: function() {
        _j.i.prototype.Y.call(this);
        this.a = this.V()
    }
};
_n.k = function(n) {
    this.g = Function.createDelegate(this, this.p);
    this.f = Function.createDelegate(this, this.o);
    this.e = Function.createDelegate(this, this.n);
    _n.k.initializeBase(this, [n]);
    this.d = new _j.g(this.e, this.I())
};
_n.k.prototype = {
    c: null,
    d: null,
    a: null,
    b: null,
    h: !0,
    i: !1,
    m: function() {
        return this.V().bm() ? _n.b.cw() : _n.b.a()
    },
    l: function() {
        return this.V().bm() ? _n.b.cx() : _n.b.b()
    },
    j: function() {
        return new _j.g(this.f, _a.a.D)
    },
    k: function() {
        return new _j.g(this.g, _a.a.D)
    },
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            this.c = this.B.a("SearchView");
            this.a = this.B.a("SearchView");
            this.a && this.a.b(this.i);
            this.b = this.B.a("SearchSuggestionPopup")
        }
    },
    n: function() {
        if (this.a && this.b) {
            this.a.a().S().o(this.b.g());
            if (!this.a.a().pU()) {
                var t = this.b.a;
                if (t) {
                    var i = t.cd();
                    if (i) {
                        var n = _j.D.a();
                        i.O(n);
                        this.a.a().hr(n);
                        this.a.a().S().q(n)
                    }
                }
            }
        }
        this.a.a().dB(this.b.Z() ? 1 : 0)
    },
    o: function() {
        this.b.j()
    },
    p: function() {
        this.b.k()
    }
};
_n.x = function(n) {
    this.c = Function.createDelegate(this, this.h);
    _n.x.initializeBase(this, [n]);
    this.y("SearchControllerView.Mouse")
};
_n.x.prototype = {
    b: !1,
    a: null,
    f: function(n) {
        if (this.b === n) return n;
        this.b = n;
        this.by("IsInHoverState");
        return n
    },
    e: function() {
        return this.V().j === "Mouse" ? _n.b.ba() : _n.b.dv()
    },
    d: function() {
        return this.V().j === "Mouse" ? _n.b.ba() : _n.b.n()
    },
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            this.a = this.B.a("SearchButton");
            _j.k.b(this.a.z, "focus", this.c)
        } else if (this.a) {
            this.a.dispose();
            this.a = null
        }
    },
    h: function(n) {
        _a.o.a().R || this.g()
    },
    g: function() {
        var n = this.V();
        var t = this;
        n.d(function(t) {
            n.e(!0)
        })
    }
};
_n.U = function(n) {
    this.g = Function.createDelegate(this, this.k);
    _n.U.initializeBase(this, [n])
};
_n.U.prototype = {
    h: !1,
    i: null,
    e: null,
    d: null,
    f: null,
    l: function(n) {
        if (this.h !== n) {
            this.h = n;
            this.by("IsSearchButtonHighlighted")
        }
        return n
    },
    a: function() {
        if (this.h) return this.f;
        var n = null;
        this.e && (n = this.j(this.e));
        !n && this.d && (n = this.j(this.d));
        return n
    },
    b: function() {
        this.V().bL().a()
    },
    c: function() {
        this.V().bM().a()
    },
    H: function() {
        if (this.B) {
            this.e = this.B.a("MailListView");
            this.d = this.B.a("PeopleListView");
            this.f = this.B.a("SearchButton");
            this.e.apcl("HighlightedIndex", this.g);
            this.d.apcl("HighlightedIndex", this.g);
            this.apcl("IsSearchButtonHighlighted", this.g);
            this.f.O(_j.D.a());
            this.f.D(13)
        }
    },
    bz: function() {
        this.e && this.d && this.e.rpcl("HighlightedIndex", this.g);
        this.d && this.d.rpcl("HighlightedIndex", this.g);
        this.rpcl("IsSearchButtonHighlighted", this.g);
        _j.c.prototype.bz.call(this)
    },
    k: function(n, t) {
        this.i.a();
        if (this.e && this.d && this.f) {
            for (var o = this.e.w.a.b(), s = this.d.w.a.b(), u = o + s + 1, c = this.V().l(), i = 0; i < o; i++) {
                var f = this.e.w.a.c(i);
                f.S().v(i + 1);
                f.S().w(u);
                var l = c.j.x[i];
                f.S().k(String.format(_u.R.Rc, l.a()))
            }
            for (var a = this.V().h(), r = 0; r < s; r++) {
                var e = this.d.w.a.c(r);
                e.S().v(r + o + 1);
                e.S().w(u);
                var h = a.b().x[r];
                e.S().k(String.format(_u.R.Pu, h.a().c()))
            }
            this.f.S().v(u);
            this.f.S().w(u);
            this.h ? this.f.S().g(1) : this.f.S().g(0)
        }
    },
    j: function(n) {
        var t = n.a;
        return 0 <= t && t < n.w.a.b() ? n.w.a.c(t) : null
    }
};
_n.o = function(n) {
    _n.o.initializeBase(this, [n])
};
_n.o.prototype = {
    b: null,
    d: null,
    a: null,
    e: null,
    l: function(n) {
        if (this.e !== n) {
            this.e = n;
            this.by(_n.o.a)
        }
        return n
    },
    h: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.by("AnchorControl")
        }
        return n
    },
    f: function() {
        return _a.o.a().I
    },
    j: function() {
        this.c() && this.c().b()
    },
    k: function() {
        this.c() && this.c().c()
    },
    g: function() {
        if (this.a) {
            var t = this.c();
            if (t) {
                var n = t.a();
                if (n) return n.cl()
            }
        }
        return null
    },
    c: function() {
        return this.a ? this.a.cd() : null
    },
    i: function() {
        var n = !!this.V() && !!this.V().b() && _y.D.isInstanceOfType(this.V().b());
        return n && this.V().b().p()
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.B && (this.a = this.B.a("SearchPopup"))
    },
    G: function() {
        this.l(this.i() ? "InstantSearchSuggestionListContainerView" : "SearchSuggestionListContainerView");
        _j.c.prototype.G.call(this)
    }
};
_n.P = function(n) {
    this.c = n
};
_n.P.b = function(n, t, i) {
    switch (i) {
        case 5:
        case 0:
            return new _ff.h(1e4, 1e4)
    }
    return new _ff.h(28, 1e4)
};
_n.P.a = function(n, t, i) {
    if ((_y.d.isInstanceOfType(t) || _y.Q.isInstanceOfType(t)) && _y.g.isInstanceOfType(n)) return new _ff.h(1e4, 1e4, 4);
    if (IQuickComposeViewModel.isInstanceOfType(n)) return new _ff.h(1e4, 1e4, 4);
    if (_y.d.isInstanceOfType(n) && (_y.Q.isInstanceOfType(t) || _y.bi.isInstanceOfType(t))) return n.g && n.g.bT() ? new _ff.h(57, 52, 3) : new _ff.h(22, 56, 3);
    if (_y.g.isInstanceOfType(t) && (_y.d.isInstanceOfType(n) || _y.bw.isInstanceOfType(n))) {
        var r = t.K() ? 11 : 54;
        return new _ff.h(55, r, 1)
    }
    if (_y.cl.isInstanceOfType(t) && (_y.Q.isInstanceOfType(n) || _y.bi.isInstanceOfType(n))) return new _ff.h(57, 56, 3);
    if (_y.cl.isInstanceOfType(n) && (_y.Q.isInstanceOfType(t) || _y.bi.isInstanceOfType(t))) return new _ff.h(55, 54, 1);
    if (_y.w.isInstanceOfType(n) || _y.cl.isInstanceOfType(n)) return new _ff.h(57, 56, 1);
    else if (_y.w.isInstanceOfType(t)) return new _ff.h(55, 54);
    else if (_y.cl.isInstanceOfType(t)) return new _ff.h(55, 54, 3);
    if (_y.Q.isInstanceOfType(n)) return new _ff.h(59, 54, 1);
    if ((_bc.r.isInstanceOfType(n) || ICalendarItemDetailsViewModel.isInstanceOfType(n)) && _y.ci.isInstanceOfType(t) || _y.ci.isInstanceOfType(n) && (_bc.r.isInstanceOfType(t) || ICalendarItemDetailsViewModel.isInstanceOfType(t))) return new _ff.h(55, 54, 1);
    switch (i) {
        case 2:
            return new _ff.h(3, 2);
        case 3:
            return new _ff.h(5, 4)
    }
    return null
};
_n.P.prototype = {
    c: null,
    b: function(n, t, i) {
        var r = null;
        this.c.a() === "TouchNarrow" && (r = _n.P.a(n, t, i));
        return _y.cN.isInstanceOfType(n) ? new _ff.h(39, 60) : _y.cN.isInstanceOfType(t) ? new _ff.h(61, 40) : _y.ci.isInstanceOfType(n) && _y.fA.isInstanceOfType(t) ? new _ff.h(1e4, 1e4) : r || _n.P.b(n, t, i)
    }
};
_n.Z = function(n, t, i) {
    _n.Z.initializeBase(this, [n]);
    this.y("MailModuleView");
    this.a = t;
    this.c = i
};
_n.Z.prototype = {
    a: null,
    c: null,
    P: function() {
        var n = _j.n.b(_a.a.by, 2, "MMVActF");
        _j.c.prototype.P.call(this);
        _j.n.a(n)
    },
    G: function() {
        var n = _j.n.b(_a.a.by, 2, "MMVAct");
        _j.c.prototype.G.call(this);
        _j.n.a(n)
    },
    bC: function() {
        var t = this.V();
        var n = new _b.e(this.a);
        n.j("Refresh");
        n.l = t.dl;
        n.o = !0;
        var f = new _b.e(this.a);
        f.j("Refresh1");
        f.l = t.dl;
        n.o = !0;
        var u = new _b.e(this.a);
        u.j("AccessibilityView");
        u.l = t.hy;
        u.o = !0;
        var i = new _b.e(this.a);
        i.j("help");
        i.l = t.hU;
        i.o = !0;
        var r = new _b.e(this.a);
        r.j("UndoAction");
        r.l = t.hI;
        r.o = !0;
        var e = new _fc.g;
        e.a([n, f, u, i, r, this.b("inbox"), this.b("drafts"), this.b("sentitems"), this.b("deleteditems")]);
        return [e]
    },
    b: function(n) {
        var i = n;
        var t = new _b.e(this.a);
        t.j(i);
        var r = this;
        t.l = new _j.g(function() {
            r.c.a(_a.W.g(i), null)
        }, this.I());
        t.o = !0;
        return t
    }
};
_n.X = function(n, t, i, r, u, f, e, o, s, h, c, l) {
    this.m = Function.createDelegate(this, this.w);
    this.n = Function.createDelegate(this, this.x);
    this.k = Function.createDelegate(this, this.s);
    this.o = Function.createDelegate(this, this.y);
    this.l = Function.createDelegate(this, this.t);
    _a.c.b(n, "getExplicitLogonAddress");
    _a.c.b(t, "featureManager");
    _a.c.b(i, "eventAggregator");
    _a.c.b(r, "owaShell");
    _a.c.b(u, "window");
    _a.c.b(f, "offlineSettings");
    _a.c.b(e, "navigationViewModel");
    _a.c.b(h, "browserCapabilities");
    _a.c.b(c, "helpProvider");
    _a.c.b(l, "optionsNav");
    this.h = n;
    this.g = t;
    this.a = i;
    this.j = r;
    this.e = u;
    this.i = f;
    this.c = e;
    this.b = o;
    this.f = s;
    this.p = c;
    this.d = l;
    if (this.a) {
        var a = this;
        this.a.b(_j.O, function() {
            a.u(h.a())
        })
    }
};
_n.X.prototype = {
    h: null,
    g: null,
    a: null,
    j: null,
    e: null,
    i: null,
    c: null,
    b: null,
    f: null,
    p: null,
    d: null,
    u: function(n) {
        this.a.b(_a.cp, this.l);
        this.a.b(_y.bl, this.o);
        this.j.a() === "Mouse" ? this.a.b(_y.ec, this.k) : this.a.b(_y.cI, this.n);
        this.a.b(_y.Z, this.m)
    },
    x: function(n) {
        if (n.a) {
            var i = this;
            this.c.a(function(n) {
                n.b()
            })
        } else {
            var t = this;
            this.c.a(function(n) {
                n.a()
            })
        }
    },
    y: function(n) {
        n.b ? this.d.a(n.b, _j.u.a(n.a) ? 0 : n.a, n.c) : this.d.k()
    },
    t: function(n) {
        if (n.a) {
            var t = this;
            var i = new _a.u([_u.R.Id], 1, function(i, r) {
                r && t.i.y(!1);
                t.r(n)
            }, 0, !0, null, null, _u.R.Fk);
            this.a.a(_a.u, i)
        } else this.r(n)
    },
    r: function(n) {
        if (this.f.bH.CloseWindowOnLogout) {
            var i = new _a.u([_u.R.Jw], 1, null, 0, !1, null, null, _u.R.OW);
            this.a.a(_a.u, i);
            return
        }
        var t = null;
        this.g.a().eu().Enabled ? _a.bs.a() && (t = this.h()) : t = _a.bs.b();
        _j.h.a(t) ? this.q("/owa/logoff.owa") : this.q(_j.h.c("/owa/{0}/logoff.owa", t))
    },
    q: function(n) {
        _a.g.y = !0;
        this.v(n)
    },
    v: function(n) {
        try {
            this.e.d(n)
        } catch (t) {}
    },
    s: function(n) {
        var t = _j.h.c("/owa/{0}/?offline=disabled", escape(n.a));
        this.e.a(t, null, null, !1)
    },
    w: function(n) {
        this.b.c && this.b.c.C() && (this.b.c.C().cS() || this.b.c.C().bK());
        _h.r.a().u()
    }
};
_n.bA = function() {};
_n.bA.prototype = {
    a: function(n, t) {
        var i = n;
        if (!i) return null;
        var r = t;
        return r ? i : null
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bv = function() {};
_n.bv.prototype = {
    a: function(n, t) {
        var i = n;
        return i ? 0 : 2
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bx = function() {};
_n.bx.prototype = {
    a: function(n, t) {
        return _y.dH.isInstanceOfType(n)
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.by = function() {};
_n.by.prototype = {
    a: function(n, t) {
        if (!Number.isInstanceOfType(n)) return "";
        var i = n;
        if (i <= 0) {
            i < 0;
            return ""
        }
        return i > 999 ? _u.R.Om : i
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_n.bz = function() {};
_n.bz.prototype = {
    a: function(n, t) {
        return n === 1
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bj = function() {};
_n.bj.prototype = {
    a: function(n, t) {
        var i = n;
        switch (i) {
            case 0:
                return 4;
            case 2:
                return 0;
            case 1:
            default:
                return 3
        }
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bk = function() {};
_n.bk.prototype = {
    a: function(n, t) {
        var r = n;
        var i = t;
        switch (r) {
            case 2:
                return i ? this.e() : this.d();
            case 0:
            case 1:
            default:
                return i ? 314 : 574
        }
    },
    b: function(n, t) {
        throw Error.notImplemented();
    },
    e: function() {
        return this.c(!0)
    },
    d: function() {
        return this.c(!1)
    },
    c: function(n) {
        var i = window.document.body.clientHeight;
        var t = i - 30;
        return n ? .3 * t : .6 * t
    }
};
_n.bB = function() {};
_n.bB.prototype = {
    a: function(n, t) {
        var i = n;
        if (!i) return null;
        var r = t;
        return r ? i : null
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bw = function() {};
_n.bw.prototype = {
    a: function(n, t) {
        return n ? 54 : 50
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bt = function() {};
_n.bt.registerInterface("_n.bt");
var IInlineComposeInvokedEvent = function() {};
IInlineComposeInvokedEvent.registerInterface("IInlineComposeInvokedEvent");
_n.f = function() {};
_n.f.registerInterface("_n.f");
_n.bd = function(n) {
    _n.bd.initializeBase(this, [n])
};
_n.bd.prototype = {
    a: 0,
    b: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.z.style.height = n + "px"
        }
        return n
    }
};
_n.w = function(n) {
    _n.w.initializeBase(this, [n]);
    this.y("LocationPlainTextView")
};
_n.i = function(n, t, i, r, u, f, e, o) {
    this.cM = Function.createDelegate(this, this.ei);
    this.cH = Function.createDelegate(this, this.dY);
    this.cG = Function.createDelegate(this, this.dX);
    this.ca = Function.createDelegate(this, this.bd);
    this.bD = Function.createDelegate(this, this.be);
    this.bW = Function.createDelegate(this, this.dW);
    this.bQ = Function.createDelegate(this, this.dr);
    this.bN = Function.createDelegate(this, this.bi);
    this.bS = Function.createDelegate(this, this.ds);
    this.bP = Function.createDelegate(this, this.dq);
    this.bZ = Function.createDelegate(this, this.ea);
    this.v = Function.createDelegate(this, this.dK);
    this.cz = Function.createDelegate(this, this.dJ);
    this.cC = Function.createDelegate(this, this.dN);
    this.cB = Function.createDelegate(this, this.dL);
    this.cA = Function.createDelegate(this, this.dm);
    this.bJ = Function.createDelegate(this, this.dP);
    this.bY = Function.createDelegate(this, this.dZ);
    this.bR = Function.createDelegate(this, this.dR);
    this.cF = Function.createDelegate(this, this.dO);
    this.bU = Function.createDelegate(this, this.dS);
    this.cy = Function.createDelegate(this, this.cQ);
    this.cv = Function.createDelegate(this, this.cd);
    this.cK = Function.createDelegate(this, this.du);
    this.cJ = Function.createDelegate(this, this.ec);
    _n.i.initializeBase(this, [n]);
    this.y("ApplicationBarView");
    this.g = i;
    this.e = t;
    this.E = r;
    this.bu = new _j.g(this.cJ, _n.i.a);
    this.ct = new _j.g(this.cK, _n.i.a);
    this.cf = new _j.g(this.cv, _n.i.a);
    this.ch = new _j.g(this.cy, _n.i.a);
    this.cc = u;
    this.b = f;
    this.cm = _n.i.c++;
    this.cR = e;
    this.br = o;
    this.b && this.g.b(_y.fD, this.bU)
};
_n.i.f = function(n) {
    return n < 0 ? n + 30 : n > 0 ? n - 30 : n
};
_n.i.prototype = {
    cm: 0,
    g: null,
    e: null,
    E: null,
    b: null,
    cR: null,
    br: null,
    k: !1,
    bc: null,
    u: null,
    a: null,
    j: null,
    cs: null,
    i: null,
    o: null,
    cp: null,
    c: null,
    cO: null,
    bl: null,
    l: null,
    x: 0,
    h: !1,
    s: !1,
    bg: !1,
    bu: null,
    ct: null,
    cf: null,
    ch: null,
    bs: !1,
    cc: null,
    w: !1,
    cj: function() {
        return this.d(0, 0)
    },
    da: function() {
        return this.d(1, 0)
    },
    db: function() {
        return this.d(2, 0)
    },
    dc: function() {
        return this.d(3, 0)
    },
    dd: function() {
        return this.d(0, 2)
    },
    de: function() {
        return this.d(1, 2)
    },
    df: function() {
        return this.d(2, 2)
    },
    dj: function() {
        return this.d(3, 2)
    },
    ci: function() {
        return this.d(0, 1)
    },
    cS: function() {
        return this.d(1, 1)
    },
    cT: function() {
        return this.d(2, 1)
    },
    cV: function() {
        return this.d(3, 1)
    },
    cW: function() {
        return this.d(4, 1)
    },
    cX: function() {
        return this.d(5, 1)
    },
    ck: function() {
        return this.e.I() ? !0 : this.bs
    },
    eb: function(n) {
        if (this.bs === n) return n;
        this.bs = n;
        this.by("ShouldHideNavigationButton");
        return n
    },
    f: function(n) {
        if (this.h !== n) {
            this.h = n;
            this.dn() || this.g.a(_y.eI, new _y.eI(n));
            this.by("IsAffordanceMenuExpanded");
            var t = this.n(n);
            this.ed(n) && (t = _n.i.f(t));
            this.bv(this.l, t);
            this.h && this.R();
            if (this.h) {
                this.cN();
                this.o.disabled = !1;
                this.cp.dH().a();
                this.br && this.br.r()
            } else if (!this.s) {
                this.cu();
                this.o.disabled = !0;
                this.o.contains(document.activeElement) && this.bl.focus()
            }
        }
        return n
    },
    dH: function() {
        return [this.a ? this.a.l : null, this.cj(), this.da(), this.db(), this.dc()]
    },
    dE: function() {
        return [this.ci(), this.cS(), this.cT(), this.cV(), this.cW(), this.cX()]
    },
    dI: function() {
        return [this.dd(), this.de(), this.df(), this.dj()]
    },
    q: function(n) {
        if (this.s !== n) {
            this.s = n;
            if (this.s) {
                this.dk() && _j.k.b(this.j, "focusout", this.cF, "ApplicationBarClickEvt");
                this.cN()
            } else {
                this.cu();
                this.dk() && _j.k.c(this.j, "focusout", "ApplicationBarClickEvt")
            }
            this.by("IsSubMenuExpanded")
        }
        return n
    },
    cZ: function() {
        return this.a && this.a.h ? this.a.h.j() : !1
    },
    t: function(n) {
        if (this.bg !== n) {
            this.bg = n;
            this.by("IsSetFocusOnSearch")
        }
        return n
    },
    dG: function() {
        return this.cZ() && this.r() === "TouchNarrow"
    },
    r: function() {
        return this.e.a()
    },
    dF: function() {
        this.x || (this.x = _j.k.g(this.l));
        return this.x
    },
    m: function() {
        return this.cm + "ApplicationBarClickEvt"
    },
    dk: function() {
        return !_a.o.a().M && !_a.o.a().a()
    },
    dD: function() {
        return this.r() === "TouchNarrow" ? 50 : 60
    },
    cb: function(n, t) {
        if (!this.Z()) {
            t && t();
            return
        }
        this.f(!1);
        var i = n ? this.k ? 9 : 8 : this.k ? 11 : 10;
        this.cc.c(i, this.z, t).a()
    },
    Y: function() {
        this.b && this.b.c(!0);
        try {
            this.cd();
            this.cQ();
            this.ej(this.V());
            _j.i.prototype.Y.call(this);
            if (this.a) {
                this.ds(null, null);
                this.dq(null, null);
                this.bi(null, null);
                this.dr(null, null)
            }
        } finally {
            if (this.b) {
                this.b.c(!1);
                this.p(!1)
            }
        }
    },
    P: function() {
        var n = _j.n.b(_a.a.by, 2, "AppBarActF");
        _j.c.prototype.P.call(this);
        _j.n.a(n)
    },
    G: function() {
        var n = _j.n.b(_a.a.by, 2, "AppBarAct");
        this.b && this.b.b(!0);
        if (_a.o.a().c()) {
            this.g.b(_y.cL, this.bR);
            this.g.b(_a.ev, this.bY)
        }
        _j.c.prototype.G.call(this);
        this.dt();
        this.dw();
        this.dx();
        _j.n.a(n)
    },
    M: function() {
        this.b && this.b.b(!1);
        if (_a.o.a().c()) {
            this.g.c(_y.cL, this.bR);
            this.g.c(_a.ev, this.bY)
        }
        this.dt();
        _j.c.prototype.M.call(this);
        this.dv()
    },
    bz: function() {
        this.dv();
        if (this.b) {
            this.b.dispose();
            this.g.c(_y.fD, this.bU)
        }
        _j.c.prototype.bz.call(this)
    },
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            this.j = this.B.a("appbar_submenu_panel").z;
            this.cs = this.B.a("appbar_submenu_listview");
            this.i = this.B.a("appBar_main_panel").z;
            this.o = this.B.a("appBar_menu_panel").z;
            this.cp = this.B.a("appbar_menu_listview");
            this.bl = this.B.a("appbar_open_menu_button").z;
            if (this.r() === "TouchNarrow") {
                this.l = this.i;
                this.cO = this.B.a("appbar_center_buttons_panel").z
            } else this.l = this.B.a("appbar_custom_actions_panel").z;
            this.r() !== "Mouse" && (this.c = this.B.a("appbar_custom_buttons_panel").z);
            this.o.disabled = !0
        }
    },
    dt: function() {
        this.f(!1);
        this.q(!1)
    },
    dx: function() {
        if (this.j) {
            _j.k.b(this.j, "click", this.bJ, "ApplicationBarClickEvt");
            _j.k.b(this.j, "keypress", this.bJ, "ApplicationBarClickEvt")
        }
        if (this.i) {
            _j.k.b(this.i, "click", this.cA, "ApplicationBarClickEvt");
            _j.k.b(this.i, "keypress", this.cB, "ApplicationBarClickEvt");
            _j.k.b(this.o, "focusin", this.cC, "ApplicationBarClickEvt")
        }
        this.r() !== "Mouse" && this.c && _b.h.a(this.c, _b.h.h(this.c, this.cz, !1), "ApplicationBarTouchEvt", !1, !1);
        this.p(!1)
    },
    dv: function() {
        if (this.j) {
            _j.k.c(this.j, "click", "ApplicationBarClickEvt");
            _j.k.c(this.j, "keypress", "ApplicationBarClickEvt")
        }
        if (this.i) {
            _j.k.c(this.i, "click", "ApplicationBarClickEvt");
            _j.k.c(this.i, "keypress", "ApplicationBarClickEvt");
            _j.k.c(this.o, "focusin", "ApplicationBarClickEvt")
        }
        this.r() !== "Mouse" && this.c && _b.h.g(this.c, "ApplicationBarClickEvt");
        this.cu()
    },
    dP: function(n) {
        this.f(!1);
        this.q(!1)
    },
    dl: function(n) {
        var i = n.querySelector("#EditorBody");
        if (i) {
            var t = i;
            if (t && t.contentWindow && t.contentWindow.document && t.contentWindow.document.body) return t.contentWindow.document.body
        }
        return null
    },
    cN: function() {
        if (!this.w) {
            var t = window.document.body;
            _j.k.b(t, "contextmenu", this.v, this.m());
            _j.k.b(t, "click", this.v, this.m());
            var n = this.dl(t);
            if (n) {
                _j.k.b(n, "contextmenu", this.v, this.m());
                _j.k.b(n, "click", this.v, this.m())
            }
            this.w = !0
        }
    },
    cu: function() {
        if (this.w) {
            var t = window.document.body;
            _j.k.c(t, "contextmenu", this.m());
            _j.k.c(t, "click", this.m());
            var n = this.dl(t);
            if (n) {
                _j.k.c(n, "contextmenu", this.m());
                _j.k.c(n, "click", this.m())
            }
            this.w = !1
        }
    },
    dO: function(n) {
        this.j.contains(n.o()) || this.q(!1)
    },
    dK: function(n) {
        if (!this.z.contains(n.b())) {
            this.q(!1);
            this.f(!1)
        }
    },
    dL: function(n) {
        n.a() !== 9 && n.a() !== 117 && this.dm(n)
    },
    dm: function(n) {
        if (n.b() === this.i || this.c && n.b() === this.c) {
            this.q(!1);
            this.f(!this.h)
        } else {
            this.f(!1);
            this.l.contains(n.b()) || this.q(!1)
        }
    },
    ec: function() {
        this.g.a(_y.cI, new _y.cI(!0))
    },
    du: function() {
        this.f(!this.h)
    },
    cd: function() {
        this.f(!1)
    },
    cQ: function() {
        this.q(!1)
    },
    dJ: function(n) {
        var e = n.f();
        var u = this.n(this.h);
        var h = Math.min(this.n(!1), this.n(!0));
        var c = Math.max(this.n(!1), this.n(!0));
        var i = u;
        var r = !1;
        var f = this;
        var s = function(n) {
            n.c();
            var t = n.f() - e;
            if (Math.abs(t) > 10 || r) {
                r = !0;
                i = Math.min(c, Math.max(h, u + t));
                f.bv(f.l, i)
            }
        };
        var t = this;
        var o = function(n) {
            _b.h.o(t.c, null);
            _b.h.k(t.c, null);
            if (r) {
                var u = 2 * Math.abs(i) > Math.abs(t.n(!0));
                t.h !== u ? t.f(u) : t.bv(t.l, t.n(u))
            }
        };
        if (this.c) {
            _b.h.e(this.c, _b.h.m(this.c, s), null);
            _b.h.b(this.c, _b.h.l(this.c, o), null)
        }
    },
    n: function(n) {
        var t = 0;
        n && (t = (this.dF() - this.dD()) * (this.k ? 1 : -1));
        return t
    },
    bv: function(n, t) {
        _a.o.a().K ? _j.k.a(n, "MozTransform", String.format("translateY({0}px)", t)) : _a.o.a().M ? _j.k.a(n, "-webkit-transform", String.format("translateY({0}px)", t)) : _j.k.a(n, "-webkit-transform", String.format("translate3d(0px, {0}px, 0px)", t))
    },
    ed: function(n) {
        if (this.e.a() === "TouchNarrow" || !this.cj() && !this.ci() && this.ck()) return !1;
        var t = 0;
        n && (t = 30 * (this.k ? 1 : -1));
        this.bv(this.i, t);
        return !0
    },
    be: function(n) {
        if (n)
            for (var t = 0; t < n.length; t++) n[t] && n[t].x(this.bZ)
    },
    bd: function(n) {
        if (n)
            for (var t = 0; t < n.length; t++) n[t] && n[t].C(this.bZ)
    },
    ea: function(n) {
        if (this.u) this.u.g();
        else {
            this.u = new _j.l;
            this.by("SubMenuItems")
        }
        this.u.j(n.d);
        this.q(!0);
        this.cs.dH().a()
    },
    ej: function(n) {
        if (this.a) {
            this.a.u = null;
            this.a.v = null;
            this.a.s === this.bu && (this.a.s = null);
            this.a.rpcl("LeftButtons", this.bP);
            this.a.rpcl("RightButtons", this.bS);
            this.a.rpcl("CenterButtons", this.bN);
            this.a.rpcl("MenuItems", this.bQ);
            this.a.h && this.a.h.v("IsExpanded", this.bW);
            this.a.bc(this.bD);
            this.a.bd(this.ca);
            this.bd(this.a.d);
            this.bd(this.a.c);
            this.bd(this.a.e);
            this.bd(this.a.a)
        }
        this.a = n;
        if (this.a) {
            this.a.u = new _j.g(this.cG, _n.i.a);
            this.bg && (this.a.v = new _j.g(this.cH, _n.i.a));
            this.a.s || (this.a.s = this.bu);
            this.dw();
            this.a.apcl("LeftButtons", this.bP);
            this.a.apcl("RightButtons", this.bS);
            this.a.apcl("CenterButtons", this.bN);
            this.a.apcl("MenuItems", this.bQ);
            this.a.h && this.a.h.q("IsExpanded", this.bW);
            this.a.W(this.bD);
            this.a.X(this.ca);
            this.be(this.a.d);
            this.be(this.a.c);
            this.be(this.a.a)
        }
    },
    dw: function() {
        this.a && this.eb(this.dQ() || this.dn())
    },
    dQ: function() {
        if (this.e.a() === "TouchNarrow" || !_y.c.isInstanceOfType(this.e)) return !1;
        var n = this.e.bb;
        return !n || !n.b() ? !1 : n.b().w(this.a.p)
    },
    dn: function() {
        if (!this.a || !this.a.p || !this.a.p.bU()) return !1;
        for (var t = this.a.p.bU().b(), i = t.x.length, n = 0; n < i; n++)
            if (_y.C.isInstanceOfType(t.x[n]) && t.x[n].n() === 1) return !0;
        return !1
    },
    dq: function(n, t) {
        this.f(!1);
        if (this.e.a() === "TouchNarrow") this.bi(n, t);
        else {
            this.bX(_n.i.d);
            this.p(!1)
        }
    },
    ds: function(n, t) {
        this.f(!1);
        if (this.e.a() === "TouchNarrow") this.bi(n, t);
        else {
            this.bX(_n.i.e);
            this.p(!1)
        }
    },
    bi: function(n, t) {
        this.f(!1);
        this.bX(_n.i.b);
        this.p(!1)
    },
    dr: function(n, t) {
        this.f(!1);
        _j.m.a().d(_n.i.a, "ApplicationBar.UpdateMenuItems", this.cM);
        this.p(!1)
    },
    dW: function(n, t) {
        this.bA("IsSearchMode", "IsCustomButtonPanelHidden")
    },
    dX: function() {
        this.a.h || this.g.a(_y.bP, new _y.bP(!0))
    },
    dY: function() {
        if (this.a.h) {
            this.a.h.i(!0);
            this.a.h.k(!0)
        } else this.g.a(_y.bP, new _y.bP(!0, !0))
    },
    d: function(n, t) {
        if (!this.a) return null;
        var i = null;
        switch (t) {
            case 0:
                i = this.e.a() === "TouchNarrow" ? null : this.a.d;
                break;
            case 2:
                i = this.e.a() === "TouchNarrow" ? null : this.a.c;
                break;
            case 1:
                if (this.e.a() === "TouchNarrow") {
                    if (this.a.d) {
                        if (n < this.a.d.length) {
                            i = this.a.d;
                            break
                        }
                        n -= this.a.d.length
                    }
                    if (this.a.e) {
                        if (n < this.a.e.length) {
                            i = this.a.e;
                            break
                        }
                        n -= this.a.e.length
                    }
                    i = this.a.c;
                    break
                }
                i = this.a.e;
                break
        }
        return !i || n >= i.length ? null : i[n]
    },
    ei: function() {
        this.x = 0;
        if (this.a) {
            var n = new _j.l;
            this.a.a && n.j(this.a.a);
            this.a.y && n.a(this.E.u());
            this.a.E && n.j(this.E.s());
            this.a.y && n.j(this.E.t());
            this.bc = n
        } else this.bc = null;
        this.p(!1);
        this.by("AffordanceMenuItems")
    },
    p: function(n) {
        if (this.b && this.b.d())
            if (this.ck()) this.b.a(!0, null, null, null, null);
            else {
                for (var i = this.bc, r = new Array(i ? i.x.length : 0), t = 0; t < r.length; t++) r[t] = i.x[t];
                this.b.a(n, this.dH(), this.dE(), this.dI(), r);
                this.z.style.display = "none";
                this.eK(_fce.c.b, 0)
            }
    },
    dS: function(n) {
        this.p(!0)
    },
    dN: function(n) {
        if (!this.h) {
            n.d();
            n.c();
            this.bl.focus()
        }
    },
    dR: function(n) {
        var t = this;
        n.b(function() {
            if (t.h) {
                t.cd();
                return !0
            }
            return !1
        })
    },
    dZ: function(n) {
        this.du()
    }
};
_n.Q = function(n, t, i) {
    _n.Q.initializeBase(this, [n]);
    this.d = t;
    this.e = i
};
_n.Q.prototype = {
    d: null,
    e: null,
    a: -1,
    c: !0,
    f: !1,
    b: function(n) {
        if (!this.f || this.a !== n) {
            this.f = !0;
            this.a = n;
            this.by("CategoryColor");
            _j.u.a(n) || this.h()
        }
        return n
    },
    g: function(n) {
        if (this.c !== n) {
            this.c = n;
            this.by("SetBorderColor")
        }
        return n
    },
    h: function() {
        this.c ? this.d.k(this.z, this.a) : this.e.e(this.z, "background-color", this.a, 2)
    }
};
_n.bD = function(n, t) {
    _n.bD.initializeBase(this, [n.z, t]);
    this.j = n
};
_n.bD.prototype = {
    j: null,
    c: function() {
        return this.j.V()
    },
    i: function(n) {
        this.j.ba(n);
        return n
    },
    h: function() {
        return _j.c.isInstanceOfType(this.j) ? this.j.bw : Object.getType(this.j).getName()
    },
    R: function() {
        return this.j.R() || _j.c.prototype.R.call(this)
    },
    f: function(n) {
        _ff.k.isInstanceOfType(this.j) && this.j.f(n)
    },
    d: function(n) {
        _ff.k.isInstanceOfType(this.j) && this.j.d(n)
    },
    g: function() {
        _ff.k.isInstanceOfType(this.j) && this.j.g()
    },
    e: function() {
        _ff.k.isInstanceOfType(this.j) && this.j.e()
    },
    bE: function() {
        this.j && this.j.dispose();
        _j.c.prototype.bE.call(this)
    },
    bz: function() {
        this.j.dispose();
        _j.c.prototype.bz.call(this)
    },
    G: function() {
        _j.c.prototype.G.call(this);
        this.j && this.j.bm()
    },
    M: function() {
        _j.c.prototype.M.call(this);
        this.j && this.j.bx()
    }
};
_n.bV = function(n, t) {
    _n.bV.initializeBase(this, [n]);
    _a.c.a(t, "animationFactory");
    this.k = t
};
_n.bV.prototype = {
    k: null,
    a: function() {
        return this
    },
    b: function(n, t, i) {
        if (n === 1e4) {
            t && _j.m.a().c(_a.a.ce, "ConductableView.Conduct_startedCallback_" + this.h(), t);
            i && _j.m.a().c(_a.a.ce, "ConductableView.Conduct_completedCallback_" + this.h(), i);
            return
        }
        var r = this.k.c(n, this.z, i);
        t && t();
        r.a()
    }
};
_n.g = function(n, t, i) {
    this.r = Function.createDelegate(this, this.bQ);
    this.s = Function.createDelegate(this, this.bR);
    this.e = {};
    this.v = new _j.R;
    _n.g.initializeBase(this, [n]);
    this.B = t;
    this.t = i
};
_n.g.prototype = {
    B: null,
    a: null,
    x: null,
    d: null,
    f: null,
    t: null,
    g: null,
    q: null,
    l: !1,
    bg: !1,
    p: null,
    i: 0,
    h: !1,
    w: !1,
    bw: function(n) {
        this.v.b(n)
    },
    b: function(n) {
        if (n !== this.d) {
            this.d && this.d.e(this.s);
            if (!n && this.a) {
                this.o(this.a);
                this.be(null)
            }
            this.d = n;
            this.bc();
            if (this.d) {
                this.d.d(this.s);
                this.u(5)
            }
        }
        return n
    },
    c: function(n) {
        if (n !== this.f) {
            this.f && this.f.e(this.r);
            this.f = n;
            this.E();
            this.f && this.f.d(this.r)
        }
        return n
    },
    y: function(n) {
        if (this.l === n) return n;
        this.l = n;
        this.by("TransitionInProgress");
        return n
    },
    be: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.by("CurrentConductableView")
        }
        return n
    },
    bu: function(n) {
        if (this.w !== n) {
            this.w = n;
            this.by("PreventFirstViewNavigation")
        }
        return n
    },
    bd: function(n) {
        if (this.h !== n) {
            this.h = n;
            this.z.style.overflow = this.h ? "hidden" : ""
        }
        return n
    },
    I: function() {
        return _a.a.ce
    },
    R: function() {
        return this.a ? this.a.a().R() : _j.i.prototype.R.call(this)
    },
    bQ: function(n, t) {
        switch (t.c) {
            case 0:
            case 2:
            case 3:
                if (t.a)
                    for (var s = t.a, a = s.length, e = 0; e < a; ++e) {
                        var h = s[e];
                        var r = h;
                        !h || r.k() in this.e || this.a && this.a.c() === r && (this.e[r.k()] = this.a)
                    }
                if (t.b)
                    for (var c = t.b, l = c.length, i = 0; i < l; ++i) {
                        var o = c[i];
                        var f = o;
                        if (o && f.k() in this.e) {
                            var u = this.e[f.k()];
                            delete this.e[f.k()];
                            u !== this.a && u !== this.x && this.o(u)
                        }
                    }
                break;
            case 4:
                this.E();
                break;
            default:
                break
        }
    },
    bR: function(n, t) {
        var u = _j.n.b(_a.a.ce, 2, "Conductor:OnActiveNavigationStackChanged");
        var i;
        switch (t.c) {
            case 0:
                i = t.d ? 2 : 1;
                break;
            case 2:
                i = 3;
                break;
            case 3:
                i = 4;
                break;
            default:
                return
        }
        if (this.l) {
            var r = this;
            this.p = function() {
                r.u(i)
            }
        } else this.u(i);
        _j.n.a(u)
    },
    bz: function() {
        if (this.a) {
            this.a.c() && delete this.e[this.a.c().k()];
            this.o(this.a);
            this.be(null)
        }
        this.f && this.f.e(this.r);
        this.d && this.d.e(this.s);
        this.E();
        this.v.dispose();
        _j.i.prototype.bz.call(this)
    },
    bD: function(n) {
        return new _n.bD(n, this.t)
    },
    G: function() {
        var n = _j.n.b(_a.a.ce, 2, "Conductor:OnActivate");
        _j.i.prototype.G.call(this);
        this.d && this.u(0);
        _j.n.a(n)
    },
    M: function() {
        _j.i.prototype.M.call(this);
        this.a && this.a.a().bx()
    },
    bc: function() {},
    H: function(n) {
        var t = this.e[n.k()];
        if (!t) {
            var i = this.B.a(n);
            _j.k.d(i.z, "conductorContent");
            i.z.setAttribute("role", "presentation");
            if (_n.bt.isInstanceOfType(i)) t = i;
            else {
                var r = this.bD(i);
                t = r
            }
            this.f && this.f.w(n) && (this.e[n.k()] = t);
            t.i(n)
        }
        return t
    },
    bN: function() {
        return document.activeElement ? this.z === document.activeElement || this.z.contains(document.activeElement) : !1
    },
    bP: function() {
        return this.i === 1 || this.i === 2 && this.bN()
    },
    u: function(n) {
        if (this.Z()) {
            var i = this.d.x[this.d.x.length - 1];
            if (!this.w || this.d.x.length !== 1) {
                this.bg = this.bP();
                if (!i)
                    if (this.a) throw Error.invalidOperation("We cannot navigate to a NULL ViewModel that was set at the top of the stack");
                    else return;
                if (this.a && i === this.a.c()) {
                    if (!this.a.a().Z()) {
                        this.a.a().bm();
                        this.a.a().z.style.display = ""
                    }
                    return
                }
                var t = this.H(i);
                t.a().z.parentElement ? t.a().z.style.display = "" : this.z.appendChild(t.a().z);
                var f = this.a;
                var u = null;
                f && (u = f.c());
                var r = n ? this.bs(i, u, n) : new _ff.h(1e4, 1e4, 4);
                if (this.a && r.a !== 4 && r.a !== 2) {
                    var e = this;
                    _j.m.a().c(this.I(), "Activate Conductable View - " + t.h(), function() {
                        e.Z() && t.a().bm()
                    })
                } else if (this.Z()) try {
                    t.a().bm()
                } catch (o) {
                    _j.e.d(_a.a.ce, o, "Error activating View : {0}", t.h())
                }
                this.bJ(i, t, n)
            }
        }
    },
    bJ: function(n, t, i) {
        var p = _j.n.b(_a.a.ce, 2, "ExecuteTransitions_" + t.h());
        this.x = this.a;
        this.y(!0);
        var r = this.a;
        this.be(t);
        if (r) {
            this.h || (this.z.style.overflow = "hidden");
            var f = r.c();
            var u = this.bs(n, f, i);
            var e = this.bS(n, f);
            if (u.a === 1) {
                t.a().z.style.zIndex = 1;
                t.a().z.style.backgroundColor = "white";
                r.a().z.style.zIndex = 0;
                var y = this,
                    h = this;
                t.b(u.b, function() {
                    y.k(t, n, u)
                }, function() {
                    h.j(t, n, u, !1);
                    r.z.style.visibility = "hidden";
                    r.b(1e4, function() {
                        h.n(r, f)
                    }, function() {
                        h.m(r, f, !0, e)
                    })
                })
            } else if (u.a === 2) {
                t.a().z.style.zIndex = 0;
                r.a().z.style.zIndex = 1;
                var b = this,
                    o = this;
                t.b(1e4, function() {
                    b.k(t, n, u)
                }, function() {
                    t.z.style.visibility = "";
                    r.b(u.c, function() {
                        o.n(r, f)
                    }, function() {
                        o.j(t, n, u, !1);
                        r.z.style.visibility = "hidden";
                        o.m(r, f, !0, e)
                    })
                })
            } else if (u.a === 4) {
                t.z.style.visibility = "hidden";
                this.n(r, f);
                r.z.style.visibility = "hidden";
                this.m(r, f, !1, e);
                this.k(t, n, u);
                this.j(t, n, u, !0)
            } else if (u.a) {
                var c = this,
                    a = this;
                r.b(u.c, function() {
                    c.n(r, f)
                }, function() {
                    r.z.style.visibility = "hidden";
                    a.m(r, f, !1, e)
                });
                var v = this,
                    l = this;
                t.b(u.b, function() {
                    v.k(t, n, u)
                }, function() {
                    l.j(t, n, u, !0)
                })
            } else {
                t.z.style.visibility = "hidden";
                var w = this,
                    s = this;
                r.b(u.c, function() {
                    w.n(r, f)
                }, function() {
                    r.z.style.visibility = "hidden";
                    s.m(r, f, !1, e);
                    t.b(u.b, function() {
                        s.k(t, n, u)
                    }, function() {
                        s.j(t, n, u, !0)
                    })
                })
            }
            _j.m.a().O(10)
        } else {
            this.k(t, n, null);
            this.j(t, n, null, !1)
        }
        _j.n.a(p)
    },
    bS: function(n, t) {
        return this.q ? this.q(n, t) : !0
    },
    bs: function(n, t, i) {
        return this.g ? this.g(n, t, i) : new _ff.h(1e4, 1e4, 0)
    },
    j: function(n, t, i, r) {
        try {
            _y.br.isInstanceOfType(t) && t.du();
            _ff.k.isInstanceOfType(n) && n.d(i);
            this.bg && n.a() && n.a().R();
            if (_a.o.a().bd) {
                var u = this;
                _j.m.a().c(_a.a.X, "Conductor conducting back from IComposeView", function() {
                    window.pageYOffset || window.scrollTo(0, 1)
                })
            }
        } finally {
            r && !this.h && (this.z.style.overflow = "");
            this.y(!1);
            if (this.p) {
                this.p();
                this.p = null
            }
        }
    },
    k: function(n, t, i) {
        if (n === this.a) {
            i && i.a !== 2 && (n.z.style.visibility = "");
            _y.br.isInstanceOfType(t) && t.dw();
            _ff.k.isInstanceOfType(n) && n.f(this.t.b() ? i : null)
        }
    },
    m: function(n, t, i, r) {
        var u = !1;
        try {
            _y.br.isInstanceOfType(t) && t.dv();
            _ff.k.isInstanceOfType(n) && n.e();
            if (!n.c() || n.c().k() in this.e) {
                var f = this;
                _j.m.a().f(this.I(), "Conductor.AfterOutboundTransition_deactivate_" + n.h(), function() {
                    if (n !== f.a) {
                        r && n.a().bx();
                        n.a().z.style.display = "none";
                        n.a().z.style.visibility = "hidden"
                    }
                })
            } else this.o(n);
            u = !0
        } finally {
            u || (n.a().z.style.display = "none");
            this.x = null;
            i && !this.h && (this.z.style.overflow = "");
            this.v.a()
        }
    },
    n: function(n, t) {
        _y.br.isInstanceOfType(t) && t.dx();
        _ff.k.isInstanceOfType(n) && n.g()
    },
    o: function(n) {
        n.a().dispose();
        _j.k.f(n.a().z)
    },
    E: function() {
        var t = this.e;
        for (var n in t) {
            var r = {
                key: n,
                value: t[n]
            };
            var i = r.value;
            this.o(i)
        }
        this.e = {}
    }
};
_n.h = function(n, t, i) {
    _n.h.initializeBase(this, [n]);
    this.d = t;
    this.b = i
};
_n.h.prototype = {
    d: null,
    b: null,
    a: null,
    c: 1e4,
    Y: function() {
        _j.i.prototype.Y.call(this);
        if (this.V()) {
            var t = this.z === document.activeElement || this.z.contains(document.activeElement);
            var n = this.d.e(this.V());
            this.y(n ? n.d : null);
            t && this.R()
        } else this.y(null)
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.a = this.B ? this.B.a("ContentContainer") : null
    },
    P: function() {
        _j.c.prototype.P.call(this);
        if (this.a && this.b && this.c !== 1e4) {
            this.a.z.style.visibility = "hidden";
            var n = this;
            _j.m.a().a(this.I(), "ContextBasedTemplatedView::OnFirstActivate", function() {
                n.a.z.style.visibility = "";
                var t = n.b.c(n.c, n.a.z, null);
                t.a()
            }, 50)
        }
    }
};
_n.H = function(n) {
    _n.H.initializeBase(this, [n]);
    this.c = n
};
_n.H.prototype = {
    a: null,
    b: null,
    c: null,
    d: 0,
    R: function() {
        if (this.V() && _y.J.isInstanceOfType(this.V())) {
            var n = this.V();
            if (this.b && n.g && n.g.a()) return this.b.R();
            else if (this.a) return this.a.R()
        }
        return _j.c.prototype.R.call(this)
    },
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            this.a = this.B.a("FoldersControl");
            this.b = this.B.a("GroupsControl")
        } else {
            this.a = null;
            this.b = null
        }
    },
    e: function(n) {
        this.d = n;
        this.c.style.width = n.toString();
        return n
    }
};
_n.F = function(n, t, i, r, u, f, e) {
    this.o = Function.createDelegate(this, this.A);
    this.j = Function.createDelegate(this, this.v);
    this.m = Function.createDelegate(this, this.y);
    this.l = Function.createDelegate(this, this.x);
    this.k = Function.createDelegate(this, this.w);
    this.n = Function.createDelegate(this, this.z);
    _n.F.initializeBase(this);
    _a.c.b(f, "flightedFeatureManager");
    _a.c.b(e, "nativeBridge");
    this.a = n;
    this.h = t;
    this.i = i;
    this.p = r;
    this.d = u;
    this.c = f;
    this.f = e
};
_n.F.prototype = {
    i: !1,
    p: null,
    c: null,
    a: null,
    b: null,
    h: null,
    e: null,
    d: null,
    g: null,
    f: null,
    s: function() {
        this.b || this.q();
        return this.b
    },
    t: function() {
        this.e || this.r();
        return this.e
    },
    u: function() {
        this.g || (this.g = new _y.i(_u.R.PF, new _j.g(this.n, _a.a.bh)));
        return this.g
    },
    q: function() {
        var n = [];
        if (this.c.a().r().Enabled) {
            var r = new _y.i(_u.R.v, new _j.g(this.k, _a.a.bh));
            Array.add(n, r);
            var i = new _y.i(_u.R.Hl, new _j.g(this.l, _a.a.bh));
            Array.add(n, i)
        }
        if (this.f && this.f.h(_a.cv, 64) || this.c.a().cy().Enabled) {
            var t = new _y.i(_u.R.HP, new _j.g(this.m, _a.a.bh));
            Array.add(n, t)
        }
        this.b = n
    },
    r: function() {
        var n = [];
        var t = new _y.i(_u.R.WE, new _j.g(this.j, _a.a.bh));
        Array.add(n, t);
        this.i || Array.add(n, new _y.i(_u.R.OW, new _j.g(this.o, _a.a.bh)));
        this.e = n
    },
    y: function() {
        this.a.a(_y.ev, new _y.ev)
    },
    v: function() {
        if (this.d) {
            var n = this;
            this.d.a(function(n) {
                n.b()
            })
        }
    },
    z: function() {
        this.a.a(_y.bl, new _y.bl(""))
    },
    w: function() {
        this.a.a(_y.cH, new _y.cH(null))
    },
    x: function() {
        this.a.a(_y.cf, new _y.cf(-1))
    },
    A: function() {
        var t = new _a.br;
        this.a.a(_a.br, t);
        var n = new _a.cp(this.h.e.d());
        this.a.a(_a.cp, n)
    }
};
_n.N = function(n, t, i, r, u) {
    this.dL = Function.createDelegate(this, this.eT);
    _n.N.initializeBase(this, [n, r, i, t, u]);
    this.b("MessageBoxContentView");
    this.cK = t.X === "TouchNarrow";
    this.dn = i;
    this.S().a(2)
};
_n.N.prototype = {
    cK: !1,
    dn: null,
    Y: function() {
        _fce.l.prototype.Y.call(this);
        this.n(this.V())
    },
    G: function() {
        _fce.m.prototype.G.call(this);
        this.cK && this.dn.b(_ff.m, this.dL);
        this.eo()
    },
    M: function() {
        _fce.m.prototype.M.call(this);
        this.cK && this.dn.c(_ff.m, this.dL)
    },
    eT: function(n) {
        this.eo()
    },
    eo: function() {
        this.cK && _j.k.l(this.z, !1) > _j.k.g(window.document.documentElement) && (this.w.z.style.height = .75 * _j.k.g(window.document.documentElement) + "px")
    }
};
_n.I = function(n, t) {
    _n.I.initializeBase(this, [n]);
    this.y("ModuleSwitcherContainerView");
    this.D(48);
    this.Q(_u.R.SQ)
};
_n.I.prototype = {
    b: 0,
    a: !1,
    c: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.by("ContainerWidth")
        }
        return n
    },
    d: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.by("DisplayVertically")
        }
        return n
    }
};
_n.q = function(n, t, i, r, u, f) {
    this.p = Function.createDelegate(this, this.E);
    _n.q.initializeBase(this, [n, t, i, u]);
    this.y("NavigationPaneView");
    this.n = r;
    this.o = f
};
_n.q.prototype = {
    n: null,
    o: null,
    e: !1,
    h: !1,
    k: null,
    g: 0,
    f: 0,
    j: !1,
    i: !1,
    r: function() {
        return this.n.a().c().Enabled
    },
    x: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.by("IsPeopleNavigationPane")
        }
        return n
    },
    w: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.by("IsEnhancedPeopleNavigationPane")
        }
        return n
    },
    a: function(n) {
        if (this.e !== n) {
            this.e = n;
            this.by("ShowSearchForMeSpace")
        }
        return n
    },
    c: function(n) {
        if (this.h !== n) {
            this.h = n;
            this.by("HideNewButton")
        }
        return n
    },
    m: function(n) {
        if (this.k !== n) {
            this.k = n;
            this.by("NavigationPaneLabel")
        }
        return n
    },
    q: function() {
        if (this.V()) {
            var n = this.V();
            return this.e ? n.X : n.Y
        } else return null
    },
    s: function() {
        if (this.V()) {
            var n = this.V();
            return this.e ? n.i : n.l
        } else return null
    },
    l: function(n) {
        if (this.g !== n) {
            this.g = n;
            this.by("HeaderRegionPriority")
        }
        return n
    },
    b: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.by("ContentRegionPriority")
        }
        return n
    },
    P: function() {
        var n = _j.n.b(_a.a.by, 2, "NavPVActF");
        _j.c.prototype.P.call(this);
        this.v();
        _j.n.a(n)
    },
    G: function() {
        var n = _j.n.b(_a.a.by, 2, "NavPVAct");
        _j.c.prototype.G.call(this);
        _j.n.a(n)
    },
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            var n = this.B.a("ContentConductor");
            n.g = this.p
        }
    },
    E: function(n, t, i) {
        _y.w.isInstanceOfType(n) ? this.m(_u.R.JK) : _y.s.isInstanceOfType(n) ? this.m(_u.R.Tn) : _y.D.isInstanceOfType(n) && this.m(_u.R.WH);
        if (i === 2) return new _ff.h(28, 31);
        else if (i === 3) return new _ff.h(27, 32);
        return new _ff.h(1e4, 1e4, 4)
    },
    v: function() {
        _y.s.isInstanceOfType(this.V()) && this.m(this.o.a().X() ? _u.R.JK : _u.R.Tn)
    }
};
_n.bL = function(n, t, i, r) {
    _n.bL.initializeBase(this, [n]);
    this.d = i;
    this.u = t.a().c().Enabled;
    this.t = !!r && r.c();
    (this.u || this.t) && this.bn(4)
};
_n.bL.prototype = {
    d: null,
    u: !1,
    t: !1,
    bd: !1,
    cN: function(n) {
        if (this.bd !== n) {
            this.bd = n;
            this.bS();
            this.by("IsPanelHovered")
        }
        return n
    },
    cY: function(n) {
        this.cm(!0);
        _j.i.prototype.cY.call(this, n)
    },
    cr: function(n) {
        this.cm(!1);
        _j.i.prototype.cr.call(this, n)
    },
    bz: function() {
        (this.u || this.t) && this.cL(4);
        _j.c.prototype.bz.call(this)
    },
    bS: function() {},
    cm: function(n) {
        this.cN(n);
        (this.u || this.t) && this.d.a(_y.bM, new _y.bM(n))
    }
};
_n.G = function(n, t, i, r, u, f, e, o, s, h) {
    this.s = Function.createDelegate(this, this.b);
    this.v = Function.createDelegate(this, this.bi);
    this.bc = Function.createDelegate(this, this.bu);
    this.E = Function.createDelegate(this, this.bs);
    this.t = Function.createDelegate(this, this.be);
    this.w = Function.createDelegate(this, this.bl);
    this.x = Function.createDelegate(this, this.br);
    this.u = Function.createDelegate(this, this.bg);
    _n.G.initializeBase(this, [n]);
    this.y("OwaShellView");
    this.ba(t);
    this.d = i;
    this.o = e;
    this.f = r;
    this.e = o;
    this.A(-1);
    this.m = s;
    this.i = h;
    _j.k.d(this.z, "customScrollBar");
    this.r = u;
    this.c = u.d();
    this.c.a() === 1 ? this.c.b() === 9 ? _j.k.d(this.z, "ie9") : this.c.b() >= 10 && _j.k.d(this.z, "ie10plus") : this.c.a() === 6 ? _j.k.d(this.z, "ieEdge") : this.c.a() === 4 && _j.k.d(this.z, "firefox");
    this.n = u.o() && this.c.a() === 3 && this.c.b() === 7;
    this.n && _j.k.d(this.z, "ios7");
    this.bd();
    window.addEventListener("load", this.u);
    window.addEventListener("unload", this.x);
    window.addEventListener("resize", this.w);
    window.onbeforeunload = this.t;
    this.l = t.a();
    this.l !== "Mouse" && this.f.apcl("Orientation", this.E);
    if (f.f()) {
        this.bV(1);
        this.Q(_u.R.Sz);
        _j.k.d(this.z, "mainWindow")
    }
    var c = f.i();
    c && _j.k.d(this.z, "deepLink");
    this.k = new _j.g(this.bc, _a.a.g);
    var a = this;
    _a.g.M(function() {
        a.q = !0
    });
    this.d.b(_fce.H, this.v);
    var l = this;
    this.d.b(_a.cC, function(n) {
        c || _n.G.a();
        t.V(_a.d.a());
        l.d.d(_a.en, new _a.en)
    })
};
_n.G.a = function() {
    var n = document.querySelector("#owaLoading");
    n && _j.k.f(n)
};
_n.G.prototype = {
    d: null,
    f: null,
    m: null,
    k: null,
    n: !1,
    g: 0,
    p: 0,
    h: null,
    l: 0,
    q: !1,
    r: null,
    o: null,
    c: null,
    e: null,
    i: !1,
    I: function() {
        return _a.a.g
    },
    bg: function() {
        this.V() && this.V().P()
    },
    br: function() {
        this.V() && this.V().S()
    },
    bl: function() {
        this.h && (this.h = _j.m.a().b(this.h));
        var n = this;
        this.h = _j.m.a().a(this.I(), "Resize", function() {
            n.V() && n.V().Q()
        }, 200);
        this.V() && this.V().R()
    },
    be: function(n) {
        var i = new _y.hE;
        this.V() && this.V().O(i);
        var t = new _a.eB;
        this.d.a(_a.eB, t);
        return this.q && !_h.s.a.e.a() ? undefined : _j.h.a(t.a) ? _j.h.a(i.b) ? undefined : i.b : t.a
    },
    b: function(n, t, i) {
        return _y.cv.isInstanceOfType(n) ? new _ff.h(17, 1e4, 1) : _y.cv.isInstanceOfType(t) ? new _ff.h(1e4, 18, 2) : _y.j.isInstanceOfType(n) ? new _ff.h(1e4, 1e4, 4) : new _ff.h(1e4, 1e4)
    },
    bC: function() {
        var t = new _fc.g;
        var u = new _fc.c;
        u.j("R");
        u.k = 2;
        u.l = _fc.r.b;
        var f = new _b.e(this.e);
        f.j("CreateMail");
        f.l = this.k;
        t.a([u, f]);
        if (!this.i) {
            var r = new _b.e(this.e);
            r.j("CreateMailOutsideEditor");
            r.l = this.k;
            r.o = !0;
            var i = new _b.e(this.e);
            i.j("module2_1");
            var e = this;
            i.l = new _j.g(function() {
                e.g || e.o.a(_a.W.a(2), null)
            }, this.I());
            i.o = !0;
            Array.addRange(t.c, [r, this.j(1), this.j(2), this.j(3), i, this.j(4)])
        }
        if (!this.m || !this.m.a().lB().Enabled) {
            var n = new _fc.c;
            n.j("BACKSPACE");
            n.k = 0;
            n.l = _fc.r.b;
            n.o = !0;
            Array.add(t.c, n)
        }
        return this.l === "Mouse" || this.c.c().a === "android" ? [t, new _fc.z(this.r)] : [t]
    },
    P: function() {
        var n = _j.n.b(_a.a.by, 2, "OWAShellActF");
        _j.c.prototype.P.call(this);
        _j.n.a(n)
    },
    G: function() {
        var n = _j.n.b(_a.a.by, 2, "OWAShellAct");
        _j.c.prototype.G.call(this);
        _j.n.a(n)
    },
    bs: function(n, t) {
        this.bd();
        this.d.a(_ff.m, new _ff.m(this.f.a))
    },
    bu: function() {
        this.g || this.p || this.d.a(_y.eM, new _y.eM)
    },
    bi: function(n) {
        var i = n.a.i;
        var t = n.b ? 1 : -1;
        switch (i) {
            case 2:
                this.g += t;
                break;
            case 1:
                this.p -= t;
                break;
            default:
                return
        }
    },
    j: function(n) {
        var t = new _b.e(this.e);
        t.j(String.format("module{0}", n - 1));
        var i = this;
        t.l = new _j.g(function() {
            i.g || i.o.a(_a.W.a(n - 1), null)
        }, this.I());
        t.o = !0;
        return t
    },
    bd: function() {
        if (this.n)
            if (this.f.a === 1) {
                this.z.style.height = _j.h.c("{0}{1}", window.innerHeight, "px");
                this.z.scrollTop = 0
            } else this.z.style.height = ""
    }
};
_n.bM = function(n, t, i, r, u) {
    _n.bM.initializeBase(this, [n, t, i]);
    this.br = r;
    this.bi = u
};
_n.bM.prototype = {
    br: null,
    bi: null,
    bl: null,
    bv: !1,
    bc: function() {
        _n.g.prototype.bc.call(this);
        this.bv = !0;
        this.d && this.bl.v(this.z);
        this.bm()
    },
    H: function(n) {
        var t = _n.g.prototype.H.call(this, n);
        t.j.kX();
        return t
    },
    bC: function() {
        return this.bi.a() === "Mouse" ? [new _fc.z(this.br)] : null
    }
};
_n.bN = function(n, t, i, r, u, f, e, o) {
    this.bc = Function.createDelegate(this, this.ci);
    this.E = Function.createDelegate(this, this.bD);
    this.H = Function.createDelegate(this, this.cf);
    this.bd = Function.createDelegate(this, this.cs);
    this.be = Function.createDelegate(this, this.ct);
    this.o = Function.createDelegate(this, this.ch);
    this.r = Function.createDelegate(this, this.cm);
    this.s = Function.createDelegate(this, this.cp);
    this.q = Function.createDelegate(this, this.ck);
    this.p = Function.createDelegate(this, this.cj);
    this.c = [];
    this.j = {};
    this.l = new _j.q;
    _n.bN.initializeBase(this, [n]);
    this.f = u;
    this.B = t;
    this.b = i;
    this.a = r;
    this.u = f;
    this.k = e;
    this.e = o;
    this.cz()
};
_n.bN.prototype = {
    e: null,
    B: null,
    b: null,
    a: null,
    f: null,
    u: null,
    k: null,
    d: null,
    n: null,
    g: null,
    bv: !0,
    i: null,
    cv: function(n) {
        if (n !== this.d) {
            if (this.d) {
                this.d.e(this.p);
                this.bi(this.d.f(), !!n && n.x.length > 0)
            }
            this.d = n;
            if (this.d) {
                this.d.d(this.p);
                this.bs(this.d.f())
            }
        }
        return n
    },
    t: !1,
    m: 0,
    h: function() {
        return !this.t && !this.a.e() && this.a.a() === "Mouse"
    },
    cj: function(n, t) {
        t.b && this.bi(t.b, !!t.a);
        t.a && this.bs(t.a)
    },
    G: function() {
        var n = _j.n.b(_a.a.g, 2, "PopupPanelController:OnActivate");
        _j.i.prototype.G.call(this);
        this.bN();
        this.g.bm();
        _j.n.a(n)
    },
    M: function() {
        var n = _j.n.b(_a.a.g, 2, "PopupPanelController:OnDeactivate");
        _j.i.prototype.M.call(this);
        this.g.bx();
        _j.n.a(n)
    },
    bz: function() {
        this.g && this.g.dispose();
        while (this.c.length > 0) {
            var n = this.d.x[0];
            this.v(n, !0);
            Array.removeAt(this.c, 0)
        }
        this.cA();
        _j.i.prototype.bz.call(this)
    },
    cz: function() {
        this.f.b(_a.cU, this.q);
        this.f.b(_ff.m, this.s);
        this.f.b(_a.bZ, this.r)
    },
    cA: function() {
        this.f.c(_a.cU, this.q);
        this.f.c(_ff.m, this.s);
        this.f.c(_a.bZ, this.r)
    },
    bs: function(n) {
        var i = _j.n.b(_a.a.g, 2, "PopupPanelController:PopupAttachedViews");
        if (n && n.length > 0) {
            this.c.length || this.g.a(!0);
            for (var t = 0; t < n.length; t++) this.cu(n[t]);
            this.bg()
        }
        _j.n.a(i)
    },
    cu: function(n) {
        var e = _j.n.b(_a.a.g, 2, "PopupPanelController:PopupAttachedViews");
        var t;
        var r;
        var i = this.j[n.k()];
        if (this.i.a(n) && i) {
            t = i.a;
            r = i.c;
            this.y(n, r)
        } else {
            this.bw(n);
            t = this.B.a(n);
            _y.C.isInstanceOfType(n) && !_n.z.isInstanceOfType(t) && n.n() && (t = new _n.z(window.document.createElement("div"), t, this.b));
            t.ba(n);
            _a.o.a().j() && !t.fH() && (t.z.style.opacity = "0");
            r = this.bP(t);
            r.z.appendChild(t.z);
            t.z.style.height = "100%";
            t.z.style.width = "100%";
            i = new _n.bO(t, n, r)
        }
        Array.add(this.c, i);
        _y.br.isInstanceOfType(i.b) && i.b.dw();
        _ff.k.isInstanceOfType(t) && t.f(null);
        if (_a.o.a().j() && !t.fH()) {
            t.z.style.opacity = "0";
            var f = this;
            _j.m.a().a(_a.a.z, "PopupPanelController.PopupAttachedView", function() {
                f.f.a(_fce.U, new _fce.U);
                var n = f.b.c(21, t.z, function() {
                    f.f.a(_fce.T, new _fce.T)
                }, !0);
                n.a();
                t.z.style.opacity = ""
            }, 130)
        }
        var u = _j.n.b(_a.a.g, 2, "ActivateNewPanel");
        r.bm();
        _j.n.a(u);
        this.f.a(_fce.W, new _fce.W);
        u = _j.n.b(_a.a.g, 2, "ShowNewPanel");
        r.a(!0);
        _j.n.a(u);
        u = _j.n.b(_a.a.g, 2, "ActivateNewView");
        t.bm();
        _j.n.a(u);
        this.i.a(n) && (this.j[n.k()] = i);
        _j.n.a(e)
    },
    bg: function() {
        for (var n = 0; n < this.c.length; n++) {
            var t = this.c[n];
            t.c.dl(1900 + n * 2)
        }
        this.g.dl(1900 + this.c.length * 2 - 3)
    },
    bi: function(n, t) {
        var r = _j.n.b(_a.a.g, 2, "PopupPanelController:CloseAttachedViews");
        if (n && n.length > 0)
            for (var i = 0; i < n.length; i++) this.bJ(n[i], t);
        _j.n.a(r)
    },
    bJ: function(n, t) {
        var u = _j.n.b(_a.a.g, 2, "PopupPanelController:CloseAttachedView");
        var i = this.bl(n);
        this.i.a(n) || this.bQ(n);
        if (i) {
            _y.br.isInstanceOfType(i.b) && i.b.dx();
            _ff.k.isInstanceOfType(i.a) && i.a.g();
            if (!i.a.fH() && !i.a.bp()) {
                var f = this;
                var r = this.b.c(25, i.a.z, function() {
                    i.a.K(!0)
                });
                r.a()
            }
            t && (i.c.bR = !1);
            i.c.a(!1);
            _j.n.a(u)
        }
    },
    bl: function(n) {
        for (var t = this.c.length - 1; t >= 0; t--) {
            var i = this.c[t];
            if (i.b === n) return i
        }
        return null
    },
    bw: function(n) {
        _bc.s.isInstanceOfType(n) && n.apcl("PopupPanelSize", this.o)
    },
    bQ: function(n) {
        _bc.s.isInstanceOfType(n) && n.rpcl("PopupPanelSize", this.o)
    },
    ch: function(n, t) {
        var i = n;
        var r = this.bl(i);
        this.y(i, r.c)
    },
    ct: function(n) {
        var i = _j.n.b(_a.a.g, 2, "PopupPanelController:OnPopupShowAnimationComplete");
        var t = this.br(n);
        if (t) {
            _y.br.isInstanceOfType(t.b) && t.b.du();
            _ff.k.isInstanceOfType(t.a) && t.a.d(null);
            _j.n.a(i)
        }
    },
    cs: function(n) {
        var i = _j.n.b(_a.a.g, 2, "PopupPanelController:OnPopupHideAnimationComplete");
        var t = this.br(n);
        if (t) {
            _y.br.isInstanceOfType(t.b) && t.b.dv();
            _ff.k.isInstanceOfType(t.a) && t.a.e();
            this.bR(t)
        }
        this.c.length || this.g.a(!1);
        this.bg();
        _j.n.a(i)
    },
    bR: function(n) {
        if (n) {
            Array.remove(this.c, n);
            this.v(n, !1)
        }
    },
    br: function(n) {
        for (var r = null, t = this.c.length - 1; t >= 0; t--) {
            var i = this.c[t];
            if (i.c === n) {
                r = i;
                break
            }
        }
        return r
    },
    v: function(n, t) {
        n.a.bx();
        n.c.bx();
        this.l.n(n.c);
        _bc.j.isInstanceOfType(n.b) && this.f.a(_y.fD, new _y.fD(n.b));
        if (t || !this.i.a(n.b)) {
            _j.k.f(n.a.z);
            _j.k.f(n.c.z);
            n.a.dispose();
            n.c.dispose();
            delete this.j[n.b.k()]
        }
    },
    bP: function(n) {
        var i = _j.n.b(_a.a.g, 2, "PopupPanelController:CreateNewPanel");
        var r = n.V();
        var t = _fce.l.a(this.z, this.b, this.f, this.a, this.e);
        n.fH() && (t.dK = !1);
        t.bR = this.bv;
        t.e = !1;
        t.dj = this.be;
        t.ch = this.bd;
        this.y(r, t);
        t.bH("popupPanel");
        t.i = 1;
        t.x("panelPopupShadow");
        _j.n.a(i);
        return t
    },
    y: function(n, t) {
        var r = 0;
        _bc.s.isInstanceOfType(n) && (r = n.bx());
        var i = null;
        switch (r) {
            case 2:
                i = this.cc();
                break;
            case 3:
                i = this.bY();
                break;
            case 7:
                i = this.ca();
                break;
            case 4:
                this.l.c(t);
                i = this.u.a === 1 ? this.x() : this.w();
                break;
            case 1:
                i = this.w();
                break;
            case 5:
                i = this.bW();
                break;
            case 6:
                i = this.cd();
                break;
            case 8:
                i = this.bU();
                break;
            case 9:
                i = this.bZ();
                break;
            case 10:
                i = this.cb();
                break;
            case 11:
                i = this.bS();
                break;
            case 0:
            default:
                i = this.x();
                break
        }
        i.i(this.m);
        t.d(i);
        this.cy(n)
    },
    cy: function(n) {
        _bc.bd.isInstanceOfType(n) ? n.a() && this.g.bt("modalPanelBackground") : this.g.bo(this.k.c() && this.k.p() ? "modalPanelBackgroundWin8" : "modalPanelBackground")
    },
    bN: function() {
        var n = _fce.l.a(this.z, this.b, this.f, this.a, this.e);
        n.bH(this.k.c() && this.k.p() ? "modalPanelBackgroundWin8" : "modalPanelBackground");
        n.a(!1);
        n.e = !1;
        n.i = 1;
        n.cH = !0;
        _j.k.b(n.z, "click", this.H);
        n.f(!1);
        var t = new _b.bc(this.b, this.e, this.a.b());
        t.c = 0;
        t.a = this.h();
        n.d(t);
        this.g = n
    },
    x: function() {
        var n = new _b.bc(this.b, this.e, this.a.b());
        n.c = this.a.a() === "Mouse" ? 428 : 372;
        n.b = 398;
        n.a = this.h();
        return n
    },
    bU: function() {
        var n = new _b.bc(this.b, this.e, this.a.b());
        n.c = -1;
        n.b = 618;
        n.a = this.h();
        return n
    },
    cd: function() {
        var n = new _b.bc(this.b, this.e, this.a.b());
        n.c = 52;
        n.b = 718;
        n.a = this.h();
        return n
    },
    w: function() {
        var n = new _b.bc(this.b, this.e, this.a.b());
        n.c = this.a.a() === "Mouse" ? 176 : 47;
        n.b = 618;
        n.a = this.h();
        return n
    },
    bW: function() {
        var n = new _b.bc(this.b, this.e, this.a.b());
        n.c = 58;
        n.b = 618;
        n.a = this.h();
        return n
    },
    cb: function() {
        var n = new _b.bc(this.b, this.e, this.a.b());
        n.c = 58;
        n.b = 670;
        n.a = this.h();
        return n
    },
    cc: function() {
        var n = new _b.bm(this.b, this.e, this.a.b());
        n.b = 340;
        n.a = this.h();
        return n
    },
    bY: function() {
        var n = new _b.bm(this.b, this.e, this.a.b());
        n.b = 643;
        n.a = this.h();
        return n
    },
    bZ: function() {
        var n = new _b.bm(this.b, this.e, this.a.b());
        n.b = 664;
        n.a = this.h();
        return n
    },
    ca: function() {
        var n = new _b.bm(this.b, this.e, this.a.b());
        n.b = 690;
        n.a = this.h();
        return n
    },
    bS: function() {
        var n = new _b.bm(this.b, this.e, this.a.b());
        n.b = 410;
        n.a = this.h();
        return n
    },
    cf: function(n) {
        var t = null;
        if (this.d) {
            for (var i = this.d.x.length - 1; i >= 0; i--) {
                var r = this.d.x[i];
                if (_bc.j.isInstanceOfType(r)) {
                    t = r;
                    break
                }
            }
            if (t && t.bz()) {
                var u = this.d.m(t);
                this.n(this.d.x.length - u)
            } else !t && this.d.x.length && this.n(this.d.x.length)
        }
    },
    ck: function(n) {
        _j.m.a().c(_a.a.z, "PopupPanelController CleanCache on low memory", this.E)
    },
    bD: function() {
        var i = [];
        var e = this.j;
        for (var f in e) {
            var r = {
                key: f,
                value: e[f]
            };
            var o = r.value;
            if (!Array.contains(this.c, o)) {
                Array.add(i, r.key);
                this.v(o, !0)
            }
        }
        for (var t = 0; t < i.length; t++) delete this.j[i[t]];
        for (var u = this.i.c(this.bc, _a.dm.a), n = 0; n < u.d.length; n++) this.i.d(u.d[n])
    },
    ci: function(n) {
        var i = !0;
        if (n.value)
            for (var t = 0; t < this.c.length; t++) {
                var r = this.c[t];
                if (r.b === n.value) {
                    i = !1;
                    break
                }
            }
        return i
    },
    cp: function(n) {
        for (var t = 0; t < this.l.d.length; t++) {
            var i = this.l.d[t];
            i.d(n.a === 1 ? this.x() : this.w())
        }
    },
    cm: function(n) {
        this.m = n.a;
        for (var t = 0; t < this.c.length; t++) {
            var i = this.c[t];
            this.bu(i.c)
        }
        this.bu(this.g)
    },
    bu: function(n) {
        var t = n.p;
        t.i(this.m)
    }
};
_n.bO = function(n, t, i) {
    this.a = n;
    this.b = t;
    this.c = i
};
_n.bO.prototype = {
    a: null,
    b: null,
    c: null
};
_n.z = function(n, t, i) {
    _n.z.initializeBase(this, [n, i]);
    _a.c.a(t, "childView");
    this.j = t;
    this.j.fj(this);
    _j.k.d(this.z, "screenView");
    _j.k.d(this.j.z, "childView");
    this.z.appendChild(this.j.z)
};
_n.z.prototype = {
    j: null,
    c: function() {
        return this.V()
    },
    i: function(n) {
        this.ba(n);
        return n
    },
    h: function() {
        return this.j.bw
    },
    fH: function() {
        return this.j ? this.j.fH() : !1
    },
    f: function(n) {
        _ff.k.isInstanceOfType(this.j) && this.j.f(n)
    },
    d: function(n) {
        _ff.k.isInstanceOfType(this.j) && this.j.d(n)
    },
    g: function() {
        _ff.k.isInstanceOfType(this.j) && this.j.g()
    },
    e: function() {
        _ff.k.isInstanceOfType(this.j) && this.j.e()
    },
    R: function() {
        var n = !1;
        this.j && (n = this.j.R());
        return n ? n : _j.c.prototype.R.call(this)
    },
    Y: function() {
        _j.i.prototype.Y.call(this);
        if (!this.bM) {
            var n = this.V();
            if (n.n() === 1) {
                this.y("ComposeScreenView");
                _j.k.d(this.z, "composeScreenView")
            } else {
                this.y("ScreenView");
                _j.k.e(this.z, "composeScreenView")
            }
        }
    },
    bz: function() {
        if (this.j) {
            this.j.Z() && this.j.bx();
            this.j.dispose();
            this.j = null
        }
        _j.c.prototype.bz.call(this)
    },
    G: function() {
        _j.c.prototype.G.call(this);
        this.j && this.j.bm()
    },
    M: function() {
        _j.c.prototype.M.call(this);
        this.j && this.j.bx()
    }
};
_n.d = function(n, t, i) {
    this.d = n;
    this.b = t;
    this.c = i
};
_n.d.prototype = {
    d: null,
    b: null,
    c: null,
    f: function(n) {
        return _a.cN.c(n, this.b.a())
    },
    e: function(n) {
        return _a.cN.b(n, this.b.a())
    },
    a: function(n) {
        var i = this.e(n);
        var r = i ? i.l : _j.c;
        var u = r !== _j.c;
        var t = this.d.g(r);
        t || (t = i.k(document.createElement("div")));
        if (i && !t.bw) t.y(i.d);
        else if (!u) {
            _j.e.c(_a.a.cB, "ViewFactory: ViewModel of type {0} has no associated view or template", Object.getType(n).getName());
            throw Error.argument("Specified ViewModel has no associated view or template");
        }
        if (_y.fg.isInstanceOfType(n)) {
            t.pZ(n.br());
            t.qa(n.cr())
        }(!this.b.b() || _a.g.b) && _y.C.isInstanceOfType(n) && n.n() && (t = new _n.z(window.document.createElement("div"), t, this.c));
        return t
    }
};
_n.E = function(n, t) {
    this.c = Function.createDelegate(this, this.e);
    _n.E.initializeBase(this, [n]);
    this.y("FolderForestView");
    this.b = t
};
_n.E.prototype = {
    a: null,
    b: null,
    d: function() {
        return this.b.w() && (this.b.m() || this.b.h())
    },
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            this.a = this.B.a("FolderScrollRegion");
            this.a.d(this.c);
            _y.c.a.a() !== "TouchNarrow" && this.bn(4)
        } else this.a = null
    },
    G: function() {
        _j.c.prototype.G.call(this);
        var n = this.V();
        this.a.a(n.bc)
    },
    e: function() {
        var n = this.V();
        n.bc = this.a.c()
    },
    bz: function() {
        this.a.e(this.c);
        _j.c.prototype.bz.call(this)
    }
};
_n.t = function(n, t, i) {
    _n.t.initializeBase(this, [n]);
    this.b = t;
    this.c = i
};
_n.t.prototype = {
    b: null,
    c: null,
    a: null,
    f: function(n) {},
    d: function(n) {
        this.a.uk()
    },
    g: function() {},
    e: function() {
        this.a.lW = !1
    },
    P: function() {
        var n = _j.n.b(_a.a.by, 2, "MLVActF");
        _j.c.prototype.P.call(this);
        _j.n.a(n)
    },
    G: function() {
        var n = _j.n.b(_a.a.by, 2, "MLVAct");
        _j.c.prototype.G.call(this);
        _j.n.a(n)
    },
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            this.a = this.B.a("ListView");
            this.h()
        }
    },
    h: function() {
        var u = new _fc.g;
        var f = new _b.e(this.b);
        f.j("ReplyMail");
        f.l = this.a.lD;
        var e = new _b.e(this.b);
        e.j("ReplyMail1");
        e.l = this.a.lD;
        var r = new _b.e(this.b);
        r.j("ReplyAllMail");
        r.l = this.a.lC;
        var n = new _b.e(this.b);
        n.j("ReplyAllMail1");
        n.l = this.a.lC;
        var t = new _b.e(this.b);
        t.j("ForwardMail");
        t.l = this.a.lB;
        var i = new _b.e(this.b);
        i.j("ForwardMail1");
        i.l = this.a.lB;
        u.a([f, e, r, n, t, i]);
        u.b = !0;
        this.C([u])
    }
};
_n.bu = function(n, t) {
    _n.bu.initializeBase(this, [n]);
    this.cB = t
};
_n.bu.prototype = {
    ch: null,
    ci: null,
    cB: null,
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            this.ch = this.B.a("tier1Element");
            this.ci = this.B.a("tier2Element")
        } else {
            this.ch = null;
            this.ci = null
        }
    }
};
_n.bf = function() {};
_n.bf.registerInterface("_n.bf");
_n.m = function(n) {
    _n.m.initializeBase(this, [n])
};
_n.m.prototype = {
    G: function() {
        _j.i.prototype.G.call(this);
        var n = 0;
        this.bK() && (n |= 1);
        this.ff() && (n |= 2);
        this.kN() && (n |= 4);
        this.bn(n)
    },
    bI: function(n) {
        if (this.bK() && this.bK().b) {
            _ff.q.isInstanceOfType(this.bK()) && (this.bK().h = n);
            this.bK().a()
        }
    },
    M: function() {
        this.cL(7);
        _j.i.prototype.M.call(this)
    }
};
_n.p = function(n) {
    _n.p.initializeBase(this, [n]);
    this.y("EmptyStateView")
};
_n.p.prototype = {
    f: null,
    a: null,
    b: null,
    d: null,
    e: null,
    c: !1,
    h: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.by("DisplayImageId")
        }
        return n
    },
    g: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.by("MainMessage")
        }
        return n
    },
    i: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.by("DetailedMessage")
        }
        return n
    },
    l: function(n) {
        if (this.e !== n) {
            this.e = n;
            this.by("LinkMessage")
        }
        return n
    },
    k: function(n) {
        if (this.d !== n) {
            this.d = n;
            this.by("LinkCommand")
        }
        return n
    },
    j: function(n) {
        if (this.c !== n) {
            this.c = n;
            this.by("IsUpsellShown")
        }
        return n
    }
};
_n.D = function(n, t, i, r, u) {
    this.i = Function.createDelegate(this, this.r);
    _n.D.initializeBase(this, [n]);
    this.g = new _j.g(this.i, _a.a.g);
    this.d = t;
    this.a = i;
    this.e = r;
    this.y("UpsellButton");
    this.h = u
};
_n.D.a = function(n) {
    var t = "";
    switch (n) {
        case 207:
            t = "LN";
            break;
        case 208:
        default:
            t = "RP";
            break
    }
    return t
};
_n.D.prototype = {
    d: null,
    a: null,
    e: null,
    b: 0,
    h: null,
    f: null,
    c: null,
    g: null,
    o: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.bA("Location", "UpsellUrl")
        }
        return n
    },
    k: function() {
        this.c || (this.c = this.l());
        return this.c
    },
    q: function(n) {
        if (null !== n && this.c !== n) {
            this.c = n;
            this.by("UpsellUrl")
        }
        return n
    },
    p: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.by("UpsellButtonText")
        }
        return n
    },
    j: function() {
        return this.a.b.bP().Enabled && this.a.b.db().Enabled && !this.e.bH.IsShadowMailbox ? !0 : !1
    },
    P: function() {
        _j.c.prototype.P.call(this);
        _a.b.c(_a.a.g, _n.D.a(this.b) + this.n())
    },
    n: function() {
        var n = "UpsellShown";
        this.a.b.bT().Enabled ? n = "UpsellShownNoCCControl" : this.a.b.bm().Enabled && (n = "UpsellShownNoCCTreatment");
        return n
    },
    m: function() {
        var n = "UpsellClick";
        this.a.b.bT().Enabled ? n = "UpsellClickNoCCControl" : this.a.b.bm().Enabled && (n = "UpsellClickNoCCTreatment");
        return n
    },
    l: function() {
        var n = "https://aka.ms/l2";
        this.b === 207 ? n = this.a ? this.a.b.fW().UpsellUrlFormat : "https://aka.ms/l2?WT.mc_id=PROD_OL-Web_InApp_LeftNav_Upgrade&ep={0}" : this.b === 208 && (n = this.a ? this.a.b.fX().UpsellUrlFormat : "https://aka.ms/l2?WT.mc_id=PROD_OL-Web_InApp_ReadingPane_Upgrade&ep={0}");
        return String.format(n, encodeURIComponent(this.e.bH.EncryptedUserPuid))
    },
    r: function() {
        _a.b.c(_a.a.g, _n.D.a(this.b) + this.m());
        if (this.a.b.bP().Enabled && this.a.b.db().Enabled) {
            _a.b.c(_a.a.bE, _n.D.a(this.b) + "FP");
            var n;
            var i = (n = new _h.ck, n.market = _a.bm.a(this.d.bH.AdMarket, this.d.o(), this.a), n.culture = this.d.o(), n.correlationId = _a.C.a(), n.merchantId = "Microsoft_Office_Upsell", n.displayId = this.a.b.db().DisplayId, n);
            var t = _a.b.b(_a.a.bE, "OnOfficePayTrigger", !1, null);
            var r = this;
            this.h.a(function(n) {
                var r = n.a(i, "U", null, null, null);
                n.b(r);
                _a.b.a(t)
            })
        }
    }
};
_n.bg = function(n, t) {
    _n.bg.initializeBase(this, [n]);
    this.d = t
};
_n.bg.prototype = {
    e: null,
    b: !1,
    d: null,
    c: function() {
        return this.V()
    },
    a: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.by("ShowSelected")
        }
        return n
    },
    n: function() {},
    m: function() {},
    q: function(n) {
        this.d.k() || (n.ctrlKey ? n.dataTransfer.effectAllowed === "all" && (n.dataTransfer.dropEffect = "copy") : n.dataTransfer.dropEffect = "move");
        this.a(_b.s.a === 3)
    },
    o: function(n) {
        this.a(_b.s.a === 3)
    },
    p: function(n) {
        this.a(!1)
    },
    r: function(n, t) {
        this.a(!1);
        t.val = 1;
        this.c().H(null);
        if (n && n.dataTransfer) {
            var i = JsonParser.deserialize(n.dataTransfer.getData("Text"));
            if (i && "DragItemType" in i && i.DragItemType === 3) {
                this.c().H(this.c().s);
                t.val = 2
            }
        }
        n.stopPropagation();
        return !0
    },
    s: function(n) {
        this.e = n
    }
};
_n.bo = function(n) {
    this.b = Function.createDelegate(this, this.c);
    _n.bo.initializeBase(this, [n]);
    this.y("MailModernNavigationPaneView")
};
_n.bo.prototype = {
    a: null,
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            this.a = this.B.a("ModernNavigationScrollRegion");
            this.a.d(this.b)
        } else this.a = null
    },
    G: function() {
        _j.c.prototype.G.call(this);
        var n = this.V();
        this.a.a(n.P)
    },
    c: function() {
        var n = this.V();
        n.P = this.a.c()
    },
    bz: function() {
        this.a.e(this.b);
        _j.c.prototype.bz.call(this)
    }
};
_n.C = function(n, t) {
    this.n = Function.createDelegate(this, this.s);
    this.h = new _j.q;
    this.a = [];
    _n.C.initializeBase(this, [n]);
    this.m = t
};
_n.C.prototype = {
    e: null,
    l: null,
    d: null,
    i: null,
    c: null,
    b: null,
    m: null,
    o: !1,
    t: function(n) {
        this.o = n;
        this.by("ChildIsPressed");
        return n
    },
    g: function(n) {
        if (this.d !== n) {
            this.d = n;
            this.by("SelectedTreeData")
        }
        return n
    },
    f: function(n) {
        if (this.e !== n) {
            this.e && this.e.e(this.n);
            for (var i = 0; i < this.a.length; i++) this.a[i].dispose();
            _j.k.w(this.z);
            Array.clear(this.a);
            this.e = n;
            if (this.e) {
                this.e.d(this.n);
                for (var t = 0; t < this.e.x.length; t++) this.j(this.e.x[t])
            }
        }
        return n
    },
    u: function(n) {
        if (this.b !== n) {
            this.b && this.b.r(null);
            this.b = n;
            this.g(this.b.V())
        }
        return n
    },
    k: function(n) {
        this.c = null;
        this.by("DropTargetTreeNodeData");
        this.c = n;
        this.by("DropTargetTreeNodeData");
        return n
    },
    q: function(n) {
        this.b && this.b.d && this.b.d.w(n)
    },
    r: function(n) {
        return Array.indexOf(this.a, n)
    },
    R: function() {
        if (this.b) {
            this.b.v.a();
            return !0
        } else return this.h.d.length > 0 ? this.h.d[0].R() : _j.i.prototype.R.call(this)
    },
    G: function() {
        _j.i.prototype.G.call(this);
        for (var n = 0; n < this.a.length; n++) this.a[n].bm();
        _y.c.a.a() === "TouchNarrow" && this.b && this.b.d && this.i && this.i.q(this.b.d.z)
    },
    M: function() {
        _j.i.prototype.M.call(this);
        for (var n = 0; n < this.a.length; n++) this.a[n].bx()
    },
    bz: function() {
        for (var n = 0; n < this.a.length; n++) this.a[n].dispose();
        this.f(null);
        _j.i.prototype.bz.call(this)
    },
    j: function(n, t) {
        var i = new _n.j(window.document.createElement("div"));
        i.a = this;
        i.ba(n);
        if (this.l || !this.m) i.y(this.l);
        else {
            var r = this.m.e(n);
            i.y(r ? r.d : null)
        }
        if (t >= 0 && t < this.a.length) {
            this.z.insertBefore(i.z, this.z.childNodes[t]);
            Array.insert(this.a, t, i)
        } else {
            this.z.appendChild(i.z);
            Array.add(this.a, i)
        }
        this.Z() && i.bm()
    },
    s: function(n, t) {
        switch (t.c) {
            case 3:
                this.p(t.d);
                t.a.length > 0 && this.j(t.a[0], t.d);
                break;
            case 0:
                for (var i = 0; i < t.a.length; i++) this.j(t.a[i], t.d + i);
                break;
            case 2:
                this.p(t.d);
                break
        }
    },
    p: function(n) {
        var t = this.a[n];
        _j.k.f(t.z);
        t.dispose();
        Array.removeAt(this.a, n)
    }
};
_n.S = function(n, t) {
    _n.S.initializeBase(this, [n]);
    this.a = t
};
_n.S.prototype = {
    a: null,
    b: function() {
        return this.a.i()
    }
};
_n.j = function(n) {
    _n.j.initializeBase(this, [n])
};
_n.j.prototype = {
    a: null
};
_n.e = function(n) {
    this.j = Function.createDelegate(this, this.o);
    this.b = [];
    _n.e.initializeBase(this, [n])
};
_n.e.prototype = {
    g: null,
    h: 0,
    i: null,
    n: function() {
        return this.eM(_n.e.d)
    },
    a: function(n) {
        this.eK(_n.e.d, n);
        return n
    },
    f: function() {
        return this.eM(_n.e.c)
    },
    r: function(n) {
        this.eK(_n.e.c, n);
        return n
    },
    d: function() {
        return this.eM(_n.e.a)
    },
    q: function(n) {
        this.eK(_n.e.a, n);
        return n
    },
    c: function() {
        return this.eM(_n.e.b)
    },
    l: function(n) {
        this.eK(_n.e.b, n);
        return n
    },
    e: function(n) {
        if (this.g !== n) {
            this.g && this.g.e(this.j);
            for (var i = 0; i < this.b.length; i++) this.b[i].dispose();
            _j.k.w(this.z);
            Array.clear(this.b);
            var u = this.X;
            this.g = n;
            if (this.g) {
                this.g.d(this.j);
                for (var r = new Array(this.g.x.length), t = 0; t < this.g.x.length; t++) r[t] = this.g.x[t];
                this.k(u, r)
            }
        }
        return n
    },
    G: function() {
        _j.c.prototype.G.call(this);
        for (var n = 0; n < this.b.length; n++) this.b[n].bm()
    },
    M: function() {
        _j.c.prototype.M.call(this);
        for (var n = 0; n < this.b.length; n++) this.b[n].bx()
    },
    bz: function() {
        this.e(null);
        _j.c.prototype.bz.call(this)
    },
    H: function() {
        _j.c.prototype.H.call(this);
        this.B && (this.i = this.B.a("TreeNodeId"))
    },
    k: function(n, t, i) {
        for (var r = new Array(t.length), e = 0; e < t.length; e++) {
            r[e] = this.m(n, t[e]);
            r[e].h = -1
        }
        if (i >= 0 && i < this.b.length)
            if (i > 0)
                for (var f = 0; f < r.length; f++) {
                    Array.insert(this.b, i, r[f]);
                    r[f].h = i;
                    _j.k.s(r[f].z, this.z.childNodes[i - 1])
                } else
                    for (var u = r.length - 1; u >= 0; u--) {
                        Array.insert(this.b, i, r[u]);
                        r[u].h = u;
                        this.z.insertBefore(r[u].z, this.z.firstChild)
                    } else
                        for (var o = 0; o < t.length; o++) {
                            Array.add(this.b, r[o]);
                            this.z.appendChild(r[o].z)
                        }
        if (this.Z())
            for (var s = 0; s < r.length; s++) r[s].bm()
    },
    m: function(n, t) {
        var i = new _n.e(window.document.createElement("div"));
        i.q(n);
        i.l(n.a);
        i.r(n.bd + 1);
        i.ba(t);
        i.y(this.n());
        return i
    },
    o: function(n, t) {
        if (!this.bM) switch (t.c) {
            case 0:
                var o = this.X;
                this.k(o, t.a, t.d);
                o.t(!0);
                o.fQ(!0);
                break;
            case 1:
                for (var f = t.d + t.a.length - 1; f >= t.d; f--) {
                    var r = this.b[f];
                    var e = this.b[t.e].z;
                    t.e ? t.e === this.b.length - 1 ? _j.k.s(r.z, e) : f < t.e ? _j.k.s(r.z, e) : this.z.insertBefore(r.z, e) : this.z.insertBefore(r.z, e);
                    Array.removeAt(this.b, f);
                    Array.insert(this.b, t.e, r);
                    r.i && r.i.eH(t.e)
                }
                break;
            case 2:
                this.p(this.b[t.d].c());
                for (var i, u = t.d + t.b.length - 1; u >= t.d; u--) {
                    i = this.b[u];
                    if (_n.s.isInstanceOfType(i.d()) && i.c() && i.c().w()) {
                        i.c().w().z.appendChild(i.z);
                        i.dispose();
                        Array.removeAt(this.b, u)
                    } else {
                        _j.k.f(i.z);
                        i.dispose();
                        Array.removeAt(this.b, u)
                    }
                }
                break
        }
    },
    p: function(n) {
        n && n.w() && _j.B.d(n.w().z.children)
    }
};
_n.c = function(n, t, i) {
    this.ew = Function.createDelegate(this, this.cW);
    this.ex = Function.createDelegate(this, this.fE);
    this.eC = Function.createDelegate(this, this.fM);
    this.ey = Function.createDelegate(this, this.fL);
    this.eD = Function.createDelegate(this, this.fN);
    this.eE = Function.createDelegate(this, this.fk);
    this.eu = Function.createDelegate(this, this.eU);
    this.ev = Function.createDelegate(this, this.fC);
    this.eF = Function.createDelegate(this, this.fV);
    this.eG = Function.createDelegate(this, this.fW);
    this.eB = Function.createDelegate(this, this.cC);
    this.cv = _j.D.a();
    this.bQ = new _j.q;
    _n.c.initializeBase(this, [n]);
    t && (this.dL = t);
    this.el = i;
    this.O(this.cv);
    this.apcl("IsSelected", this.eB);
    if (_y.c.a.a() !== "TouchNarrow") {
        this.bl = new _j.g(this.eG, this.I());
        this.bs = new _j.g(this.eF, this.I());
        this.bD = new _j.g(this.ev, this.I());
        this.bv = new _j.g(this.eu, this.I());
        this.bu = new _j.g(this.eE, this.I())
    }
};
_n.c.prototype = {
    cZ: null,
    cz: null,
    ci: null,
    cj: null,
    eb: !1,
    cs: null,
    dL: null,
    cm: !1,
    ck: !1,
    cu: !1,
    cG: !1,
    ed: 1,
    d: null,
    bP: 1,
    bg: null,
    cA: !1,
    e: !1,
    cX: !1,
    br: !1,
    cT: !1,
    cV: !1,
    eW: null,
    bl: null,
    bs: null,
    bD: null,
    bv: null,
    dr: null,
    dH: null,
    ds: null,
    eX: null,
    eR: null,
    bu: null,
    cB: null,
    eQ: null,
    bd: 0,
    a: null,
    dE: !0,
    bJ: !1,
    dq: !0,
    c: 1,
    cp: null,
    da: null,
    dD: null,
    dd: null,
    dF: !1,
    el: null,
    f: !1,
    fP: function(n) {
        this.dq !== n && (this.dq = n);
        return n
    },
    bS: function(n) {
        if (n !== this.d) {
            this.d = n;
            this.bA("ParentTreeNode", "IsTabbable")
        }
        return n
    },
    fn: function(n) {
        if (n !== this.bP) {
            this.bP = n;
            this.by("ToggleIconState")
        }
        return n
    },
    fQ: function(n) {
        if (n !== this.cA) {
            this.cA = n;
            this.by("ChildrenLoaded")
        }
        return n
    },
    v: function(n) {
        if (n !== this.e && (this.dq || !n)) {
            this.e = n;
            this.bA("IsSelected", "IsTabbable")
        }
        return n
    },
    dc: function(n) {
        if (this.cX !== n) {
            this.cX = n;
            this.a && this.a.a && this.a.a.t(n);
            this.cc()
        }
        return n
    },
    dZ: function() {
        return !this.d || this.e
    },
    w: function(n) {
        if (n !== this.br) {
            this.br = n;
            this.by("ShowTreeNodeSelected")
        }
        return n
    },
    cd: function(n) {
        if (n !== this.cT) {
            this.cT = n;
            this.ek();
            this.by("ContextMenuShown")
        }
        return n
    },
    db: function(n) {
        if (n !== this.cV) {
            this.cV = n;
            this.ek();
            this.by("DialogShown")
        }
        return n
    },
    bZ: function() {
        return this.f ? this.V().e() : this.eW
    },
    dY: function() {
        return this.f ? this.V().a() : this.dr
    },
    dJ: function(n) {
        if (this.f) return n;
        if (n !== this.dr) {
            this.dr = n;
            this.by("CreateCommand")
        }
        return n
    },
    ea: function() {
        return this.f ? this.V().g() : this.dH
    },
    ei: function(n) {
        if (this.f) return n;
        if (n !== this.dH) {
            this.dH = n;
            this.by("RenameCommand")
        }
        return n
    },
    dt: function() {
        return this.f ? this.V() ? this.V().b() : null : this.ds
    },
    fR: function(n) {
        if (this.f) return n;
        if (n !== this.ds) {
            this.ds = n;
            this.by("DeleteCommand")
        }
        return n
    },
    dw: function() {
        return this.f ? this.V() ? this.V().f() : null : this.eX
    },
    du: function() {
        return this.f ? this.V() ? this.V().d() : null : this.eR
    },
    eV: function() {
        return this.f ? this.V() ? this.V().c() : null : this.eQ
    },
    bU: function(n) {
        if (n !== this.bd) {
            this.bd = n;
            this.ej();
            this.bA("TreeLevel", "IsRootChild")
        }
        return n
    },
    bN: function(n) {
        if (n !== this.a) {
            this.a = n;
            this.e && this.a.r(this);
            this.ej();
            this.by("TreeContainer")
        }
        return n
    },
    b: function() {
        return this.dE
    },
    u: function(n) {
        if (n !== this.dE) {
            this.dE = n;
            this.dB(n ? 0 : 1);
            this.fo();
            this.by("IsCollapsed")
        }
        return n
    },
    t: function(n) {
        if (n !== this.bJ) {
            this.bJ = n;
            this.fo();
            this.by("HasChildren")
        }
        return n
    },
    bW: function(n) {
        if (n !== this.c) {
            this.c = n;
            this.fO();
            this.by("TreeNodeMode")
        }
        return n
    },
    cF: function(n) {
        if (n !== this.cp) {
            this.cp = n;
            this.by("NewNodeName")
        }
        return n
    },
    fU: function(n) {
        if (n !== this.da) {
            this.da = n;
            this.by("NewNodeTemplateId")
        }
        return n
    },
    ct: function(n) {
        if (n !== this.dd) {
            this.dd = n;
            this.by("TreeNodeDisplayName")
        }
        return n
    },
    be: function(n) {
        if (n !== this.dD) {
            this.dD = n;
            this.by("InputCssClass")
        }
        return n
    },
    fl: function(n) {
        if (n !== this.cz) {
            this.cz = n;
            this.by("CancelRenameCommand")
        }
        return n
    },
    dv: function() {
        return !this.bd && this.a.p
    },
    bR: function(n) {
        if (n !== this.cm) {
            this.cm = n;
            this.by("IsDroppedOver")
        }
        return n
    },
    ca: function(n) {
        if (n !== this.cu) {
            this.cu = n;
            this.cu && this.cG && this.cb(!1);
            this.bA("ShowLineAbove", "ShowLineAboveOrBelow")
        }
        return n
    },
    cb: function(n) {
        if (n !== this.cG) {
            this.cG = n;
            this.cu && this.cG && this.ca(!1);
            this.bA("ShowLineBelow", "ShowLineAboveOrBelow")
        }
        return n
    },
    fm: function(n) {
        if (n !== this.cs) {
            this.cs = n;
            this.by("NewTreeNodeViewModel")
        }
        return n
    },
    fT: function(n) {
        if (n !== this.cZ) {
            this.cZ = n;
            this.by("NewNodeDefaultDisplayName")
        }
        return n
    },
    E: function(n) {
        this.eb = n;
        this.by("IsEmptyHeader");
        return n
    },
    fS: function(n) {
        if (this.dF !== n) {
            this.dF = n;
            this.by("IsLoading")
        }
        return n
    },
    dK: function(n) {
        if (this.cB !== n) {
            this.cB = n;
            this.by("CustomActivateTreeNodeSelectionCommand")
        }
        return n
    },
    I: function() {
        return _a.a.fQ
    },
    dG: function() {
        this.v(!0)
    },
    fB: function() {
        this.d && this.d.eT();
        this.bY()
    },
    eH: function(n) {
        if (this.d) {
            this.d.eY(this);
            n === -1 ? this.d.fw(this) : this.d.fD(this, n)
        } else this.a.l = this
    },
    cc: function() {},
    dp: function(n) {
        _j.i.prototype.dp.call(this, n);
        var t = n.a() - 1 == 2;
        !t && this.ec(n) && this.dc(!0)
    },
    eP: function(n) {
        _j.i.prototype.eP.call(this, n);
        var t = n.a() - 1 == 2;
        !t && this.ec(n) && this.dc(!1)
    },
    cr: function(n) {
        _j.i.prototype.cr.call(this, n);
        this.ec(n) && this.dc(!1);
        this.by("IsHovered")
    },
    cC: function(n, t) {
        this.a && this.e && this.a.r(this);
        this.w(this.e)
    },
    H: function() {
        _j.c.prototype.H.call(this);
        if (this.B) {
            var i = this.B.a("TreeNodeContainer");
            _j.k.b(i.z, "click", this.eD);
            var t = this.B.a("TwistyContainer");
            t && _j.k.b(t.z, "click", this.ey);
            this.bg = this.B.a("TreeNodeLabel");
            this.dB(this.b() ? 0 : 1)
        }
        this.ej();
        var n = this.X;
        n && this.eH(n.h)
    },
    G: function() {
        _j.c.prototype.G.call(this);
        if (_y.x.isInstanceOfType(this.V()) && this.V().i.t && this.V().h.a() === "inbox") {
            this.v(!0);
            this.bg && this.bg.A(0)
        }
        _y.c.a.a() !== "TouchNarrow" && this.bn(786432);
        _y.c.a.a() === "Mouse" && this.bn(28)
    },
    cW: function() {
        this.bJ && this.b() && !this.cA && this.bZ() && this.bZ().b && this.bZ().a();
        this.u(!this.b())
    },
    bz: function() {
        this.d && this.d.eY(this);
        _j.c.prototype.bz.call(this)
    },
    fo: function() {
        this.bJ ? this.fn(this.b() ? 2 : 3) : this.fn(1)
    },
    fO: function() {
        switch (this.c) {
            case 1:
            case 2:
                this.cF(null);
                this.ed = this.c;
                break;
            case 5:
            case 3:
                this.b() && this.cW();
                this.eJ();
                break;
            case 4:
                this.eJ();
                break
        }
    },
    ej: function() {
        if (this.B && this.a && this.bd) {
            var t = this.B.a("TreeNodeContainer");
            var n = this.eI();
            t.z.style.paddingLeft = n + "px"
        }
    },
    eI: function() {
        return this.a.t * (this.a.p ? this.bd - 1 : this.bd)
    },
    ec: function(n) {
        var t = this.B.a("TreeNodeContainer");
        return t.z.contains(n.b()) || n.b() === t.z || n.b() === this.z
    },
    fL: function(n) {
        if (this.c !== 2) {
            this.bJ && n.d();
            this.cW()
        }
    },
    fM: function(n) {
        var t = n.a();
        switch (t) {
            case 13:
                this.eL();
                this.bY();
                n.d();
                break;
            case 27:
                this.fx();
                this.bY();
                n.d();
                break;
            case 37:
            case 39:
            case 38:
            case 40:
            case 32:
            case 46:
                n.d();
                break
        }
    },
    fE: function(n) {
        this.eL()
    },
    eJ: function() {
        this.cs ? this.fz() : this.fA()
    },
    dI: function(n, t) {
        var i = this.eI();
        var r = this.B.a("TwistyContainer");
        r && !this.a.p && (i += _j.k.k(r.z, !1));
        this.c === 3 && (i += this.a.t);
        n.bm();
        _j.k.b(n.z, "keydown", this.eC);
        _j.k.b(n.z, "blur", this.ex);
        if (this.c === 3) this.z.appendChild(t);
        else if (this.c === 5) _j.k.F(t, this.z);
        else {
            _j.k.F(t, this.z);
            this.bg ? this.bg.K(!0) : this.B.a("TreeNodeContainer").K(!0)
        }
        if (i > 0) {
            var u = _j.k.h(_j.k.B(this.z)) - _j.k.k(n.z, !1) - _j.k.j(n.z).b;
            t.style.paddingLeft = _j.h.c("{0}{1}", Math.min(u, i), "px")
        }
        n.z.focus()
    },
    fz: function() {
        var t = document.createElement("div");
        var n = null;
        if (this.da) {
            n = new _n.c(t, this.dL, this.el);
            n.y(this.da)
        } else n = new _n.h(t, this.dL, null);
        n.ba(this.cs);
        n.bm();
        this.cj = n;
        var i = n.B.a("NewNodeTextboxInput");
        this.dI(i, t)
    },
    fA: function() {
        var n = new _fc.i(window.document.createElement("input"));
        this.ci = n;
        this.ci.a(255);
        this.ci.bH(this.dD);
        var t = new _j.i(window.document.createElement("div"));
        t.z.appendChild(n.z);
        this.cj = t;
        this.dI(n, t.z);
        if (this.c === 3 || this.c === 5) this.cZ ? n.c(this.cZ) : n.c("");
        else {
            n.c(this.dd);
            n.bu(0);
            n.cp(n.b.length)
        }
    },
    fX: function() {
        var n = this.ci.b;
        n = n.trim();
        if (!_j.h.a(n)) {
            this.cF(n);
            if (this.c === 3 || this.c === 5) return !0;
            else if (this.c === 4 && n !== this.dd) return !0
        }
        return !1
    },
    eL: function() {
        if (!this.ck) {
            this.ck = !0;
            var t = this.c === 4;
            var n = !!this.cs || this.fX();
            n && ((this.c === 3 || this.c === 5) && this.dY() && this.dY().b ? this.dY().a() : this.c === 4 && this.ea() && this.ea().b && this.ea().a());
            this.eZ(t);
            this.ck = !1
        }
    },
    fx: function() {
        if (!this.ck) {
            this.ck = !0;
            var n = this.c === 4 && !!this.cz && this.cz.b;
            this.eZ(this.c === 4);
            n && this.cz.a();
            this.ck = !1
        }
    },
    eZ: function(n) {
        if (!this.cs) {
            _j.k.f(this.ci.z);
            this.ci = null
        }
        if (this.cj) {
            _j.k.f(this.cj.z);
            this.cj.dispose();
            this.cj = null
        }
        n && (this.bg ? this.bg.K(!1) : this.B.a("TreeNodeContainer").K(!1));
        this.bW(this.ed)
    },
    ek: function() {
        this.cT || this.cV ? this.w(!0) : this.a && this !== this.a.d && this.w(!1);
        this.a && this.a.a && !this.a.a.o && this.a.bi(this)
    },
    eT: function() {
        this.d && this.d.eT();
        this.eS()
    },
    fW: function() {
        this.bJ && (this.b() ? this.eS() : this.eU())
    },
    fV: function() {
        this.b() ? this.d && this.d.bY() : this.fy()
    },
    eS: function() {
        if (this.bJ && this.b()) {
            !this.cA && this.bZ() && this.bZ().b && this.bZ().a();
            this.u(!1)
        }
    },
    fy: function() {
        this.b() || this.u(!0)
    },
    fC: function() {
        _n.c.a = this.bg;
        if (this.d) {
            for (var i = -1, n = this.d.dx(this, i--); n && !n.dW();) n = this.d.dx(this, i--);
            n || this.d.bY()
        } else {
            var t = this.a.bs();
            if (t) {
                var r = t.l;
                r.dW()
            }
        }
    },
    eU: function() {
        _n.c.a = this.bg;
        if (this.bJ && !this.b()) {
            var n = this.bQ.d[0];
            n ? n.bY() : this.dX()
        } else this.dX()
    },
    dW: function() {
        if (this.bJ && !this.b() && this.bQ.d.length > 0) {
            var n = this.bQ.d[this.bQ.d.length - 1];
            n.dW();
            return !0
        } else return this.bY()
    },
    dX: function() {
        if (this.d) {
            for (var i = 1, n = this.d.dx(this, i++); n && !n.bY();) n = this.d.dx(this, i++);
            n || this.d.dX()
        } else {
            var t = this.a.br();
            if (t) {
                var r = t.l;
                r.bY()
            }
        }
    },
    fk: function() {
        if (this.c !== 2)
            if (this.eb) this.cW();
            else {
                this.dG();
                this.cB && this.cB.b ? this.cB.a() : this.a && this.a.n && this.a.n.b && this.a.n.a()
            }
    },
    bY: function() {
        if (this.bg) {
            if (this.bg.bp()) return !1;
            this.fa();
            this.bg.R()
        } else {
            this.bg && this.fa();
            this.R()
        }
        return !0
    },
    fa: function() {
        this.bg.A(0);
        _n.c.a && _n.c.a.A(-1)
    },
    dx: function(n, t) {
        var r = this.bQ.m(n);
        if (r === -1) return null;
        var i = r + t;
        return 0 <= i && i < this.bQ.d.length ? this.bQ.d[i] : null
    },
    eY: function(n) {
        this.bQ.n(n)
    },
    fw: function(n) {
        this.bQ.c(n)
    },
    fD: function(n, t) {
        this.bQ.k(t, n)
    },
    fN: function(n) {
        this.fk()
    }
};
_n.n = function(n) {
    this.H = Function.createDelegate(this, this.B);
    this.bc = Function.createDelegate(this, this.bl);
    _n.n.initializeBase(this, [n]);
    this.c(12);
    this.v = new _j.g(this.bc, this.I());
    this.u = new _j.g(this.H, this.I())
};
_n.n.prototype = {
    o: null,
    p: !1,
    s: null,
    d: null,
    e: null,
    a: null,
    x: null,
    t: 0,
    f: null,
    n: null,
    v: null,
    q: null,
    l: null,
    u: null,
    b: function(n) {
        if (n !== this.x) {
            this.x = n;
            this.by("TreeNodeHelperTemplateId")
        }
        return n
    },
    c: function(n) {
        if (n !== this.t) {
            this.t = n;
            this.by("IndentPerLevelPixels")
        }
        return n
    },
    k: function(n) {
        if (n !== this.p) {
            this.p = n;
            this.by("IsRootNodeHidden")
        }
        return n
    },
    h: function(n) {
        if (this.s !== n) {
            this.s = n;
            if (this.e) this.e.ba(this.s);
            else {
                var t = new _n.e(window.document.createElement("div"));
                t.ba(this.s);
                t.l(this);
                t.y(this.x);
                this.bv(t)
            }
            this.by("DataSource")
        }
        return n
    },
    r: function(n) {
        if (this.d !== n) {
            var t = this.d;
            this.a && this.a.u(this);
            this.d = n;
            this.E(t, this.d);
            this.by("SelectedTreeNode");
            this.d ? this.g(this.d.V()) : this.g(null)
        }
        return n
    },
    g: function(n) {
        if (n !== this.f) {
            this.f = n;
            n || this.r(null);
            this.by("SelectedTreeNodeData")
        }
        return n
    },
    m: function(n) {
        if (this.a) this.a.k(n);
        else {
            this.o = n;
            this.by("DropTargetTreeNodeData")
        }
        return n
    },
    j: function(n) {
        if (n !== this.n) {
            this.n = n;
            this.by("ActivateTreeNodeSelectionCommand")
        }
        return n
    },
    w: function() {
        if (!this.q) {
            this.q = new _j.i(window.document.createElement("div"));
            this.q.K(!0);
            this.z.appendChild(this.q.z)
        }
        return this.q
    },
    bv: function(n) {
        if (this.e !== n) {
            if (this.e) {
                this.e.dispose();
                _j.k.f(this.e.z)
            }
            this.e = n;
            if (this.e) {
                this.z.appendChild(this.e.z);
                this.Z() && this.e.bm()
            }
        }
        return n
    },
    R: function() {
        if (this.d) {
            this.v.a();
            return !0
        } else if (this.l) return this.l.R();
        return _j.i.prototype.R.call(this)
    },
    bs: function() {
        return this.bd(-1)
    },
    br: function() {
        return this.bd(1)
    },
    bi: function(n) {
        this.d ? n !== this.d && this.d.w(!n.br) : this.a && this.a.q(!n.br)
    },
    P: function() {
        _j.i.prototype.P.call(this);
        this.bg()
    },
    G: function() {
        _j.i.prototype.G.call(this);
        this.e && this.e.bm()
    },
    M: function() {
        _j.i.prototype.M.call(this);
        this.e && this.e.bx()
    },
    bz: function() {
        this.e && this.e.dispose();
        _j.i.prototype.bz.call(this)
    },
    E: function(n, t) {
        n && n.v(!1);
        t && t.v(!0)
    },
    bl: function() {
        this.d && this.d.fB()
    },
    B: function() {
        this.l.bW(3)
    },
    bg: function() {
        if (this.a) {
            this.bu();
            var n = this.a.r(this.X);
            n !== -1 ? this.a.h.k(n, this) : this.a.h.c(this)
        }
    },
    bu: function() {
        this.a && this.a.h.n(this)
    },
    bd: function(n) {
        if (this.a) {
            var i = this.a.h;
            var r = i.m(this);
            if (r === -1) return null;
            var t = r + n;
            if (0 <= t && t < i.d.length) return i.d[t]
        }
        return null
    }
};
_n.R = function(n) {
    _n.R.initializeBase(this, [n]);
    this.bn(1)
};
_n.R.prototype = {
    a: 1
};
_n.K = function(n, t, i, r, u, f) {
    this.em = Function.createDelegate(this, this.fp);
    _n.K.resolveInheritance();
    this.g = this.eV;
    _n.K.initializeBase(this, [n, t, i, u, f]);
    this.dO = r;
    this.dN = new _j.g(this.em, _a.a.v)
};
_n.K.prototype = {
    dO: null,
    dP: !1,
    de: null,
    cy: null,
    dN: null,
    df: function() {
        return _n.r.prototype.df.call(this) && this.V().br()
    },
    en: function(n) {
        this.dP = n;
        this.by("InsertAbove");
        return n
    },
    i: function() {
        return 4
    },
    h: function() {
        return 0
    },
    l: function(n) {
        this.du() && this.du().a();
        this.dc(!1);
        this.cO(!0)
    },
    j: function(n) {},
    k: function(n) {
        var t = null;
        this.a.a && this.a.a.c && (t = this.a.a.c);
        t && t.i && _y.T.isInstanceOfType(t.i) && this.dw() && _b.s.b === 2 && this.dw().a();
        this.cO(!1)
    },
    n: function() {
        this.bi() || this.w(!1);
        this.ca(!1);
        this.cb(!1)
    },
    m: function() {
        this.bi() || this.w(this.e);
        this.ca(!1);
        this.cb(!1)
    },
    q: function(n) {
        _a.o.a().P || (n.ctrlKey ? n.dataTransfer.effectAllowed === "all" && (n.dataTransfer.dropEffect = "copy") : n.dataTransfer.dropEffect = "move");
        this.bc(!0);
        this.bR(!0);
        this.eo(n);
        this.bc(!1)
    },
    o: function(n) {
        this.bc(!0);
        this.bR(!0);
        this.eo(n);
        this.bc(!1);
        if (_y.dn.isInstanceOfType(this.V())) {
            this.cy && (this.cy = _j.m.a().b(this.cy));
            var t = this;
            this.cy = _j.m.a().a(this.I(), "DragHoverExpandFolderTree", function() {
                t.cy = null;
                t.cm && t.dO.a(_y.dy, new _y.dy(0))
            }, 250)
        }
    },
    p: function(n) {
        this.bc(!0);
        this.bi() ? this.w(this.e) : this.w(!1);
        this.bR(!1);
        this.dS(!1);
        this.ca(!1);
        this.cb(!1);
        this.bc(!1)
    },
    r: function(n, t) {
        t.val = 1;
        this.bc(!0);
        this.bR(!1);
        this.dS(!1);
        this.bi() || this.w(!1);
        this.bc(!1);
        this.en(this.cu);
        this.ca(!1);
        this.cb(!1);
        if (n && n.dataTransfer) {
            this.a.m(this.V());
            t.val = 2
        }
        return !0
    },
    s: function(n) {
        this.de = n
    },
    G: function() {
        _n.c.prototype.G.call(this);
        _y.dn.isInstanceOfType(this.V()) && this.x && this.x.Q(_u.R.Bj);
        this.de && this.de.d(this.B.a("TreeNodeContainer").z)
    },
    eo: function(n) {
        var i = n.dataTransfer;
        var t = _a.o.a().R ? _b.s.f.toLowerCase() : i.effectAllowed.toLowerCase();
        switch (t) {
            case "linkmove":
            case "copylink":
                this.fq(n);
                break;
            case "move":
            case "copy":
            case "all":
                this.bi() || this.w(!0);
                this.dS(!0);
                break
        }
    },
    fq: function(n) {
        var i = _j.k.j(this.z).a + _j.k.g(this.z) / 2;
        var t = n.clientY;
        if (t > i) {
            this.cb(!0);
            this.ca(!1)
        } else {
            this.ca(!0);
            this.cb(!1)
        }
    },
    fp: function() {
        if (this.a.a.i && this.a.a.i.z.scrollTop > 0 && _y.bR.isInstanceOfType(this.V())) {
            this.V().t.a(!1);
            this.V().w.a(!1)
        }
        if (!this.Z()) {
            this.V().t.a(!1);
            this.V().w.a(!1)
        }
    }
};
_n.r = function(n, t, i, r, u) {
    this.eq = Function.createDelegate(this, this.fu);
    this.ep = Function.createDelegate(this, this.ft);
    this.cf = Function.createDelegate(this, this.fv);
    _n.r.initializeBase(this, [n, t, i]);
    this.dR = r;
    this.dQ = u;
    this.apcl("ShowTreeNodeSelected", this.cf);
    if (_y.c.a.a() === "Mouse") {
        this.apcl(_j.i.b.a, this.cf);
        this.apcl("TreeLabelIsHovered", this.cf)
    }
};
_n.r.prototype = {
    dQ: null,
    dR: null,
    cM: null,
    cH: null,
    cR: null,
    cQ: null,
    cS: null,
    cK: null,
    cJ: null,
    ch: !1,
    cN: !1,
    dk: !1,
    x: null,
    dn: function(n) {
        if (this.x && this.cQ !== n) {
            this.cQ && this.x.bt(this.cQ);
            n !== "" && n && this.x.bo(n);
            this.cQ = n
        }
        return n
    },
    et: function(n) {
        if (this.cR && this.cS !== n) {
            this.cS && this.cR.bt(this.cS);
            n !== "" && n && this.cR.bo(n);
            this.cS = n
        }
        return n
    },
    dm: function(n) {
        if (this.cM && this.cK !== n) {
            this.cK && this.cM.bt(this.cK);
            n !== "" && n && this.cM.bo(n);
            this.cK = n
        }
        return n
    },
    dl: function(n) {
        if (this.cH && this.cJ !== n) {
            this.cJ && this.cH.bt(this.cJ);
            n !== "" && n && this.cH.bo(n);
            this.cJ = n
        }
        return n
    },
    bi: function() {
        return this.dR.a().c().Enabled
    },
    df: function() {
        return this.bi() && (!this.bd || this.dj() || this.ch)
    },
    fs: function() {
        return !this.dj() || this.ch
    },
    er: function() {
        return this.dQ.c()
    },
    bc: function(n) {
        if (n !== this.cN) {
            this.cN = n;
            this.cN || this.cc()
        }
        return n
    },
    dS: function(n) {
        n !== this.dk && (this.dk = n);
        return n
    },
    dj: function() {
        return this.x.bG()
    },
    es: function(n) {
        if (n !== this.x.bG()) {
            this.x.cE(n);
            this.dA("TreeLabelIsHovered", "HideCount", "HideFavoriteAndUnfavoriteIcons")
        }
        return n
    },
    cO: function(n) {
        if (n !== this.ch) {
            this.ch = n;
            this.bA("HideCount", "HideFavoriteAndUnfavoriteIcons");
            this.cc()
        }
        return n
    },
    H: function() {
        _n.c.prototype.H.call(this);
        if (this.B && _y.c.a.a() === "Mouse") {
            this.x = this.B.a("TreeNodeLabel");
            if (this.x) {
                this.x.bf("mouseenter", this.ep, "MailFolderTreeNodeViewRegistrationId");
                this.x.bf("mouseleave", this.eq, "MailFolderTreeNodeViewRegistrationId")
            }
            this.cR = this.B.a("TreeNodeLabelText");
            this.cM = this.B.a("FavoriteAndUnfavoriteIconContainer");
            this.cH = this.B.a("CountDisplayContainer");
            this.cc()
        }
    },
    bE: function() {
        _j.c.prototype.bE.call(this);
        this.rpcl("ShowTreeNodeSelected", this.cf);
        if (_y.c.a.a() === "Mouse") {
            this.rpcl(_j.i.b.a, this.cf);
            this.rpcl("TreeLabelIsHovered", this.cf);
            if (this.x) {
                this.x.bj("mouseenter", "MailFolderTreeNodeViewRegistrationId");
                this.x.bj("mouseleave", "MailFolderTreeNodeViewRegistrationId")
            }
        }
    },
    cc: function() {
        if (this.x && !this.cN) {
            var n = this.dj() || this.cT || this.cV;
            this.ch && (n = !1);
            this.cm && (_n.K.isInstanceOfType(this) && this.dk || _n.s.isInstanceOfType(this)) && (n = !0);
            if (this.cX) {
                this.dn(_n.r.a);
                this.dm(_n.r.a);
                this.dl(_n.r.a)
            } else if (this.br) {
                this.dn(_n.r.a);
                this.dm(_n.r.a);
                this.dl(_n.r.a);
                this.ch || this.et(_n.r.e)
            } else if (n) {
                this.dn(_n.r.b);
                this.dm(_n.r.b);
                this.dl(_n.r.b)
            } else {
                this.dn("");
                this.dm("");
                if (_y.bI.isInstanceOfType(this.V())) {
                    var i = this.V();
                    var t = i.i.t ? _n.r.d : _n.r.c;
                    this.dl(t)
                }
                this.et("")
            }
        }
    },
    ek: function() {
        this.cc()
    },
    fv: function(n, t) {
        this.cc()
    },
    ft: function(n) {
        this.es(!0)
    },
    fu: function(n) {
        this.es(!1)
    }
};
_n.s = function(n, t, i, r, u) {
    _n.s.resolveInheritance();
    this.g = this.eV;
    _n.s.initializeBase(this, [n, t, i, r, u])
};
_n.s.prototype = {
    dN: null,
    cy: null,
    de: null,
    b: function() {
        return _n.c.prototype.b.call(this)
    },
    u: function(n) {
        if (n !== _n.c.prototype.b.call(this)) {
            _n.c.prototype.u.call(this, n);
            _n.c.prototype.b.call(this) || this.cA || this.bZ() && this.bZ().b && this.bZ().a()
        }
        return n
    },
    i: function() {
        return 3
    },
    h: function() {
        return 0
    },
    em: function() {
        return !this.bd && !!this.dO() && this.dO().K
    },
    dP: function() {
        return this.bi() || this.er() && !this.dO().K
    },
    I: function() {
        return _a.a.dx
    },
    en: function() {
        return this.V().i
    },
    dO: function() {
        return this.en().o
    },
    l: function(n) {
        this.du() && this.du().a();
        n.stopPropagation();
        this.dc(!1);
        this.cO(!0)
    },
    j: function(n) {},
    k: function(n) {
        if (this.eV()) {
            var i = null;
            try {
                i = JsonParser.deserialize(this.eV())
            } catch (u) {
                return
            }
            this.cO(!1);
            var t = null;
            this.a.a && this.a.a.c && (t = this.a.a.c);
            if (!t || !t.i) return;
            var r = _y.Y.isInstanceOfType(t.i);
            i.IsDistinguishedFolder && r || _h.a.G(t.h.bH.FolderId, i.FolderId) || !r && !_y.T.isInstanceOfType(t.i) || this.dw() && _b.s.b === 2 && this.dw().a()
        }
    },
    n: function() {
        this.bi() || this.w(!1)
    },
    m: function() {
        this.bi() || this.w(this.e)
    },
    q: function(n) {
        if (!_a.o.a().P) {
            var t = this.V().i.o;
            if (t.g && _b.s.a !== 1 && _b.s.a !== 2) {
                n.dataTransfer.dropEffect = "none";
                return
            }
            n.ctrlKey ? n.dataTransfer.effectAllowed === "all" && (n.dataTransfer.dropEffect = "copy") : n.dataTransfer.dropEffect = "move"
        }
        this.bc(!0);
        this.bi() || this.w(!0);
        this.bR(!0);
        this.bc(!1)
    },
    o: function(n) {
        this.bc(!0);
        this.bi() || this.w(!0);
        this.bR(!0);
        this.bc(!1);
        if (this.b() && this.bJ) {
            this.cy = _j.m.a().b(this.cy);
            this.cy = _j.m.a().a(this.I(), "DragHoverExpandFolder", this.dN || (this.dN = Function.createDelegate(this, this.eo)), 500)
        }
    },
    p: function(n) {
        this.bc(!0);
        this.bi() || this.w(!1);
        this.bR(!1);
        this.bc(!1)
    },
    r: function(n, t) {
        t.val = 1;
        this.bc(!0);
        this.cO(!1);
        this.bi() || this.w(!1);
        this.bR(!1);
        this.bc(!1);
        if (n && n.dataTransfer) {
            this.a.m(this.V());
            t.val = 2
        }
        n.stopPropagation();
        return !0
    },
    s: function(n) {
        this.de = n
    },
    G: function() {
        _n.c.prototype.G.call(this);
        this.de && this.de.d(this.B.a("TreeNodeContainer").z)
    },
    eo: function() {
        this.cy = null;
        this.cm && this.cW()
    }
};
_n.b = function() {};
_n.b.cj = function() {
    return _fm.b.a(_fm.a.bk, _fm.WebfontSizes.a.w, "ms-fcl-ns-b", "owa-border-color-neutral-red owa-bg-color-neutral-red ms-icon-font-circle", "ms-fcl-w-b")
};
_n.b.H = function() {
    return _fm.b.a(_fm.a.d, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.bB = function() {
    return _fm.b.a(_fm.a.d, _fm.WebfontSizes.a.c, "ms-fcl-nt-b")
};
_n.b.I = function() {
    return _fm.b.a(_fm.a.d, _fm.WebfontSizes.a.c, "ms-fcl-nd-b")
};
_n.b.h = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.a, "ms-fcl-nd-b")
};
_n.b.M = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.a, "ms-fcl-nt-b")
};
_n.b.j = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.g = function() {
    return _fm.b.a(_fm.a.i, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.dP = function() {
    return _fm.b.a(_fm.a.i, _fm.WebfontSizes.a.c, "ms-fcl-nd-b")
};
_n.b.V = function() {
    _n.b.bn || (_n.b.bn = _fm.b.a(_fm.a.i, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.bn
};
_n.b.v = function() {
    return _fm.b.a(_fm.a.h, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.s = function() {
    return _fm.b.a(_fm.a.h, _fm.WebfontSizes.a.a, "ms-fcl-nd-b")
};
_n.b.p = function() {
    return _fm.b.a(_fm.a.h, _fm.WebfontSizes.a.p, "ms-fcl-ns-b")
};
_n.b.o = function() {
    return _fm.b.a(_fm.a.h, _fm.WebfontSizes.a.p, "ms-fcl-nd-b")
};
_n.b.dT = function() {
    return _fm.b.a(_fm.a.bI, _fm.WebfontSizes.a.k, "ms-fcl-ns-b")
};
_n.b.E = function() {
    return _fm.b.a(_fm.a.c, "ms-fcl-ns-b", _fm.WebfontSizes.a.c)
};
_n.b.P = function() {
    return _fm.b.a(_fm.a.c, "ms-fcl-nd-b", _fm.WebfontSizes.a.c)
};
_n.b.Q = function() {
    return _fm.b.a(_fm.a.c, "ms-fcl-np-b", _fm.WebfontSizes.a.c)
};
_n.b.bz = function() {
    return _fm.b.a(_fm.a.j, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.dU = function() {
    _n.b.bq || (_n.b.bq = _fm.b.a(_fm.a.j, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.bq
};
_n.b.en = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.a, "ms-fcl-tp-b")
};
_n.b.dZ = function() {
    return _fm.b.a(_fm.a.d, _fm.WebfontSizes.a.a, "ms-fcl-tp-b")
};
_n.b.dH = function() {
    return _fm.b.a(_fm.a.h, _fm.WebfontSizes.a.a, "ms-fcl-tp-b")
};
_n.b.fF = function() {
    return _fm.b.a(_fm.a.P, _fm.WebfontSizes.a.a, "ms-fcl-w-b")
};
_n.b.es = function() {
    return _fm.b.a(_fm.a.cQ, _fm.WebfontSizes.a.d, "ms-fcl-w-b")
};
_n.b.eA = function() {
    return _fm.b.a(_fm.a.dK, _fm.WebfontSizes.a.d, "ms-fcl-w-b")
};
_n.b.eF = function() {
    return _fm.b.b(_fm.a.bs, null, [_fm.WebfontSizes.a.a, "ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.bH = function() {
    return _fm.b.b(_fm.a.bs, null, [_fm.WebfontSizes.a.a, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.dw = function() {
    return _fm.b.a(_fm.a.Z, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.fA = function() {
    return _fm.b.a(_fm.a.Z, _fm.WebfontSizes.a.a, "ms-fcl-nd-b")
};
_n.b.eV = function() {
    return _fm.b.a(_fm.a.cB, _fm.WebfontSizes.a.d)
};
_n.b.dd = function() {
    return _fm.b.a(_fm.a.z, "ms-icon-font-size-3", "ms-fcl-tp-b")
};
_n.b.X = function() {
    return _fm.b.a(_fm.a.z, "ms-icon-font-size-11", "ms-fcl-ns-b")
};
_n.b.cn = function() {
    return _fm.b.a(_fm.a.e, "ms-icon-font-size-21", "ms-fcl-tp-b")
};
_n.b.bM = function() {
    return _fm.b.b(_fm.a.J, null, [_fm.WebfontSizes.a.d, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.bN = function() {
    return _fm.b.b(_fm.a.bw, null, [_fm.WebfontSizes.a.d, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.cv = function() {
    return _fm.b.a(_fm.a.r, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.ek = function() {
    return _fm.b.a(_fm.a.r, _fm.WebfontSizes.a.a, "ms-fcl-nd-b")
};
_n.b.el = function() {
    return _fm.b.a(_fm.a.r, _fm.WebfontSizes.a.a, "ms-fcl-tp-b")
};
_n.b.cs = function() {
    return _fm.b.a(_fm.a.p, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.eg = function() {
    return _fm.b.a(_fm.a.p, _fm.WebfontSizes.a.a, "ms-fcl-nd-b")
};
_n.b.eh = function() {
    return _fm.b.a(_fm.a.p, _fm.WebfontSizes.a.a, "ms-fcl-tp-b")
};
_n.b.ei = function() {
    return _fm.b.a(_fm.a.r, _fm.WebfontSizes.b.a, "ms-fcl-ns-b", "ms-bcl-ns-b ms-bg-transparent ms-icon-font-circle")
};
_n.b.ej = function() {
    return _fm.b.a(_fm.a.r, _fm.WebfontSizes.b.a, "ms-fcl-w-b", "ms-bcl-ns-b ms-bgc-ns-b ms-icon-font-circle")
};
_n.b.ee = function() {
    return _fm.b.a(_fm.a.p, _fm.WebfontSizes.b.a, "ms-fcl-ns-b", "ms-bcl-ns-b ms-bg-transparent ms-icon-font-circle")
};
_n.b.ef = function() {
    return _fm.b.a(_fm.a.p, _fm.WebfontSizes.b.a, "ms-fcl-w-b", "ms-bcl-ns-b ms-bgc-ns-b ms-icon-font-circle")
};
_n.b.w = function() {
    return _fm.b.b(_fm.a.O, null, [_fm.WebfontSizes.b.a, "ms-fcl-ns-b", "ms-bcl-ns-b ms-bg-transparent ms-icon-font-circle"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.x = function() {
    return _fm.b.b(_fm.a.O, null, [_fm.WebfontSizes.b.a, "ms-fcl-w-b", "ms-bcl-ns-b ms-bgc-ns-b ms-icon-font-circle"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.k = function() {
    return _fm.b.a(_fm.a.Trash, _fm.WebfontSizes.b.a, "ms-fcl-ns-b", "ms-bcl-ns-b ms-bg-transparent ms-icon-font-circle")
};
_n.b.l = function() {
    return _fm.b.a(_fm.a.Trash, _fm.WebfontSizes.b.a, "ms-fcl-w-b", "ms-bcl-ns-b ms-bgc-ns-b ms-icon-font-circle")
};
_n.b.R = function() {
    return _fm.b.a(_fm.a.p, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.ct = function() {
    return _fm.b.a(_fm.a.r, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.de = function() {
    return _n.b.G(!1, !1, !1, !1)
};
_n.b.bF = function() {
    return _n.b.G(!0, !1, !1, !1)
};
_n.b.S = function() {
    return _n.b.G(!1, !1, !1, !0)
};
_n.b.cz = function() {
    return _n.b.G(!0, !1, !1, !0)
};
_n.b.O = function() {
    _n.b.bw || (_n.b.bw = _n.b.G(!1, !0, !1, !1));
    return _n.b.bw
};
_n.b.bG = function() {
    return _n.b.G(!0, !0, !1, !1)
};
_n.b.eC = function() {
    return _n.b.G(!1, !0, !1, !0)
};
_n.b.eD = function() {
    return _n.b.G(!0, !0, !1, !0)
};
_n.b.G = function(n, t, i, r) {
    return _fm.b.b(_fm.a.bl, null, [n ? _fm.WebfontSizes.a.e : _fm.WebfontSizes.a.c, r ? t ? "ms-fcl-r" : "ms-fcl-nd-b" : t ? "ms-fcl-rd" : "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.bd = function() {
    return _n.b.bc(!1, !0, !1)
};
_n.b.bA = function() {
    _n.b.br || (_n.b.br = _n.b.bc(!0, !1, !1));
    return _n.b.br
};
_n.b.dW = function() {
    return _n.b.bc(!0, !0, !1)
};
_n.b.dY = function() {
    return _n.b.bc(!1, !1, !0)
};
_n.b.dX = function() {
    return _n.b.bc(!0, !1, !0)
};
_n.b.bc = function(n, t, i) {
    return _fm.b.a(_fm.a.d, n ? _fm.WebfontSizes.a.e : _fm.WebfontSizes.a.c, i ? "ms-fcl-nd-b" : t ? "ms-fcl-ns-b" : "ms-fcl-nt-b")
};
_n.b.eM = function() {
    return _fm.b.a(_fm.a.bk, _fm.WebfontSizes.a.c, "owa-color-neutral-red")
};
_n.b.eN = function() {
    _n.b.bP || (_n.b.bP = _fm.b.a(_fm.a.bk, _fm.WebfontSizes.a.e, "owa-color-neutral-red"));
    return _n.b.bP
};
_n.b.T = function() {
    _n.b.bU || (_n.b.bU = _fm.b.a(_fm.a.cS, _fm.WebfontSizes.a.a, "ms-fcl-tp-b"));
    return _n.b.bU
};
_n.b.dp = function() {
    _n.b.bV || (_n.b.bV = _fm.b.a(_fm.a.cS, _fm.WebfontSizes.a.c, "ms-fcl-tp-b"));
    return _n.b.bV
};
_n.b.bI = function() {
    return _fm.b.a(_fm.a.bo, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.dl = function() {
    return _fm.b.a(_fm.a.bo, _fm.WebfontSizes.a.a, "ms-fcl-nd-b")
};
_n.b.dm = function() {
    return _fm.b.a(_fm.a.g, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.dn = function() {
    return _fm.b.a(_fm.a.g, _fm.WebfontSizes.a.a, "ms-fcl-nd-b")
};
_n.b.bf = function() {
    return _fm.b.b(_fm.a.S, null, [_fm.WebfontSizes.a.a, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.bJ = function() {
    return _fm.b.b(_fm.a.S, null, [_fm.WebfontSizes.a.a, "ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.dj = function() {
    return _fm.b.a(_fm.a.dg, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.dk = function() {
    return _fm.b.a(_fm.a.dg, _fm.WebfontSizes.a.a, "ms-fcl-nd-b")
};
_n.b.cD = function() {
    return _fm.d.a("mark_not_clutter.png")
};
_n.b.cE = function() {
    return _fm.d.a("mark_not_clutter_h.png")
};
_n.b.by = function() {
    return _fm.b.b(_fm.a.k, null, [_fm.WebfontSizes.a.b, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.cm = function() {
    return _fm.b.b(_fm.a.k, null, [_fm.WebfontSizes.a.b, "ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.bx = function() {
    return _fm.b.b(_fm.a.n, null, [_fm.WebfontSizes.a.b, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.cl = function() {
    return _fm.b.b(_fm.a.n, null, [_fm.WebfontSizes.a.b, "ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.cO = function() {
    return _fm.b.b(_fm.a.dG, null, [_fm.WebfontSizes.a.b, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.cP = function() {
    return _fm.b.b(_fm.a.dG, null, [_fm.WebfontSizes.a.b, "ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.dt = function() {
    return _fm.b.b(_fm.a.bi, null, [_fm.WebfontSizes.a.b, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.du = function() {
    return _fm.b.b(_fm.a.bi, null, [_fm.WebfontSizes.a.b, "ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fq = function() {
    return _fm.b.b(_fm.a.O, null, [_fm.WebfontSizes.a.a, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fr = function() {
    return _fm.b.b(_fm.a.O, null, [_fm.WebfontSizes.a.a, "ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fi = function() {
    return _fm.b.a(_fm.a.dx, _fm.WebfontSizes.a.g, "ms-fcl-tp-b")
};
_n.b.fj = function() {
    return _fm.b.a(_fm.a.dx, _fm.WebfontSizes.a.g, "ms-fcl-nd-b")
};
_n.b.Y = function() {
    return _fm.b.a(_fm.a.e, _fm.WebfontSizes.a.b, "ms-fcl-ns-b")
};
_n.b.bi = function() {
    return _fm.b.a(_fm.a.e, _fm.WebfontSizes.a.b, "ms-fcl-nd-b")
};
_n.b.q = function() {
    return _fm.b.a(_fm.a.H, _fm.WebfontSizes.a.b, "ms-fcl-ns-b")
};
_n.b.F = function() {
    return _fm.b.a(_fm.a.H, _fm.WebfontSizes.a.b, "ms-fcl-nd-b")
};
_n.b.fI = function() {
    return _fm.b.b(_fm.a.bw, null, ["ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fG = function() {
    return _fm.b.b(_fm.a.J, null, ["ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.dv = function() {
    return _fm.b.b(_fm.a.m, null, [_fm.WebfontSizes.a.d, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.ba = function() {
    return _fm.b.b(_fm.a.m, null, [_fm.WebfontSizes.a.d, "ms-fcl-ts-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fz = function() {
    return _fm.b.b(_fm.a.m, null, [_fm.WebfontSizes.a.d, "ms-fcl-nt-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.n = function() {
    return _fm.b.b(_fm.a.m, null, [_fm.WebfontSizes.a.d, "ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.u = function() {
    return _fm.b.b(_fm.a.m, null, [_fm.WebfontSizes.a.d, "ms-fcl-td-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.dc = function() {
    return _fm.b.a(_fm.a.W, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.eo = function() {
    _n.b.bs || (_n.b.bs = _fm.b.a(_fm.a.W, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.bs
};
_n.b.eS = function() {
    return _fm.b.a(_fm.a.cF, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.eT = function() {
    _n.b.bR || (_n.b.bR = _fm.b.a(_fm.a.cF, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.bR
};
_n.b.fc = function() {
    return _fm.b.a(_fm.a.dw, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.fd = function() {
    _n.b.bX || (_n.b.bX = _fm.b.a(_fm.a.dw, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.bX
};
_n.b.ds = function() {
    return _fm.b.a(_fm.a.bZ, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.fh = function() {
    _n.b.ca || (_n.b.ca = _fm.b.a(_fm.a.bZ, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.ca
};
_n.b.eX = function() {
    return _fm.b.b(_fm.a.cC, null, [_fm.WebfontSizes.a.e, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.eY = function() {
    return _fm.b.b(_fm.a.cC, null, [_fm.WebfontSizes.a.e, "ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.bb = function() {
    return _fm.b.a(_fm.a.Trash, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.U = function() {
    return _fm.b.a(_fm.a.Trash, _fm.WebfontSizes.a.e, "ms-fcl-ns-b")
};
_n.b.bj = function() {
    return _fm.b.a(_fm.a.Trash, _fm.WebfontSizes.a.c, "ms-fcl-nd-b")
};
_n.b.bk = function() {
    return _fm.b.a(_fm.a.Trash, _fm.WebfontSizes.a.e, "ms-fcl-nd-b")
};
_n.b.fw = function() {
    return _fm.b.a(_fm.a.bt, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.fx = function() {
    return _fm.b.a(_fm.a.bt, _fm.WebfontSizes.a.c, "ms-fcl-nd-b")
};
_n.b.cA = function() {
    return _fm.b.a(_fm.a.bf, _fm.WebfontSizes.a.e, "ms-fcl-ns-b")
};
_n.b.eE = function() {
    return _fm.b.a(_fm.a.bf, _fm.WebfontSizes.a.e, "ms-fcl-nd-b")
};
_n.b.ck = function() {
    return _fm.b.a(_fm.a.ch, _fm.WebfontSizes.a.e, "ms-fcl-ns-b")
};
_n.b.dI = function() {
    return _fm.b.a(_fm.a.ch, _fm.WebfontSizes.a.e, "ms-fcl-nd-b")
};
_n.b.ep = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.c, "owa-color-neutral-orange")
};
_n.b.eG = function() {
    return _fm.b.a(_fm.a.Trash, "ms-fcl-ns-b", _fm.WebfontSizes.a.a)
};
_n.b.eH = function() {
    return _fm.b.a(_fm.a.Trash, "ms-fcl-nd-b", _fm.WebfontSizes.a.a)
};
_n.b.eI = function() {
    return _fm.b.a(_fm.a.Trash, "ms-fcl-np-b", _fm.WebfontSizes.a.a)
};
_n.b.dC = function() {
    return _fm.b.b(_fm.a.J, null, ["ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.dD = function() {
    return _fm.b.b(_fm.a.bw, null, ["ms-fcl-tp-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.cL = function() {
    return _fm.b.b(_fm.a.J, null, ["ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fH = function() {
    return _fm.b.b(_fm.a.J, null, ["ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.cM = function() {
    return _fm.b.b(_fm.a.bw, null, ["ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fJ = function() {
    return _fm.b.b(_fm.a.bw, null, ["ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.da = function() {
    return _fm.b.a(_fm.a.p, _fm.WebfontSizes.a.f, "ms-fcl-ns-b")
};
_n.b.db = function() {
    return _fm.b.a(_fm.a.r, _fm.WebfontSizes.a.f, "ms-fcl-ns-b")
};
_n.b.fs = function() {
    return _fm.b.b(_fm.a.O, null, [_fm.WebfontSizes.a.c, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fp = function() {
    _n.b.cd || (_n.b.cd = _fm.b.b(_fm.a.O, null, [_fm.WebfontSizes.a.e, "ms-fcl-nt-b"], null, null, null, null, ["ms-icon-flip-glyph"]));
    return _n.b.cd
};
_n.b.dN = function() {
    return _fm.b.b(_fm.a.k, null, [_fm.WebfontSizes.a.c, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.dM = function() {
    _n.b.bm || (_n.b.bm = _fm.b.b(_fm.a.k, null, [_fm.WebfontSizes.a.e, "ms-fcl-nt-b"], null, null, null, null, ["ms-icon-flip-glyph"]));
    return _n.b.bm
};
_n.b.cC = function() {
    return _fm.b.a(_fm.a.T, _fm.WebfontSizes.a.c, "ms-fcl-nsa-b")
};
_n.b.eP = function() {
    _n.b.bQ || (_n.b.bQ = _fm.b.a(_fm.a.T, _fm.WebfontSizes.a.e, "ms-fcl-nsa-b"));
    return _n.b.bQ
};
_n.b.eQ = function() {
    return _fm.b.a(_fm.a.T, _fm.WebfontSizes.a.c, "ms-fcl-nsa-b")
};
_n.b.eR = function() {
    return _fm.b.a(_fm.a.T, _fm.WebfontSizes.a.c, "ms-fcl-nsa-b")
};
_n.b.eu = function() {
    return _fm.d.a("event_accepted.png")
};
_n.b.cy = function() {
    return _fm.b.a(_fm.a.bz, _fm.WebfontSizes.a.d, "ms-fcl-ns-b")
};
_n.b.ev = function() {
    _n.b.bu || (_n.b.bu = _fm.b.a(_fm.a.bz, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.bu
};
_n.b.ew = function() {
    return _fm.d.a("event_declined.png")
};
_n.b.ex = function() {
    return _fm.d.a("event_tentative.png")
};
_n.b.eq = function() {
    return _fm.b.b(_fm.a.ca, _fm.a.cb, [_fm.WebfontSizes.a.c, "ms-fcl-ns-b"], null, null, null, null, null)
};
_n.b.er = function() {
    _n.b.bt || (_n.b.bt = _fm.b.b(_fm.a.ca, _fm.a.cb, [_fm.WebfontSizes.a.e, "ms-fcl-nt-b"], null, null, null, null, null));
    return _n.b.bt
};
_n.b.fa = function() {
    return _fm.b.b(_fm.a.cb, _fm.a.ca, [_fm.WebfontSizes.a.c, "ms-fcl-ns-b"], null, null, null, null, null)
};
_n.b.fb = function() {
    _n.b.bW || (_n.b.bW = _fm.b.b(_fm.a.cb, _fm.a.ca, [_fm.WebfontSizes.a.e, "ms-fcl-nt-b"], null, null, null, null, null));
    return _n.b.bW
};
_n.b.fQ = function() {
    return _fm.b.b(_fm.a.dQ, null, [_fm.WebfontSizes.a.c, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fR = function() {
    _n.b.ch || (_n.b.ch = _fm.b.b(_fm.a.dQ, null, [_fm.WebfontSizes.a.e, "ms-fcl-nt-b"], null, null, null, null, ["ms-icon-flip-glyph"]));
    return _n.b.ch
};
_n.b.fS = function() {
    return _fm.d.a("voicemail_irm.png")
};
_n.b.fO = function() {
    return _fm.b.a(_fm.a.dP, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.fP = function() {
    _n.b.cg || (_n.b.cg = _fm.b.a(_fm.a.dP, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.cg
};
_n.b.fT = function() {
    return _fm.b.b(_fm.a.dR, null, [_fm.WebfontSizes.a.c, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fU = function() {
    _n.b.ci || (_n.b.ci = _fm.b.b(_fm.a.dR, null, [_fm.WebfontSizes.a.e, "ms-fcl-nt-b"], null, null, null, null, ["ms-icon-flip-glyph"]));
    return _n.b.ci
};
_n.b.ey = function() {
    return _fm.b.a(_fm.a.dn, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.ez = function() {
    _n.b.bv || (_n.b.bv = _fm.b.a(_fm.a.dn, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.bv
};
_n.b.cR = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.c, "ms-fcl-w-b")
};
_n.b.be = function() {
    return _fm.b.a(_fm.a.dq, _fm.WebfontSizes.a.a, "owa-color-neutral-yellow")
};
_n.b.eU = function() {
    _n.b.bS || (_n.b.bS = _fm.b.a(_fm.a.dq, _fm.WebfontSizes.a.e, "owa-color-neutral-yellow"));
    return _n.b.bS
};
_n.b.Z = function() {
    return _fm.b.a(_fm.a.cM, _fm.WebfontSizes.a.a, "owa-color-neutral-red")
};
_n.b.fy = function() {
    _n.b.ce || (_n.b.ce = _fm.b.a(_fm.a.cM, _fm.WebfontSizes.a.e, "owa-color-neutral-red"));
    return _n.b.ce
};
_n.b.dQ = function() {
    return _fm.b.b(_fm.a.cI, null, [_fm.WebfontSizes.a.c, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.dR = function() {
    _n.b.bo || (_n.b.bo = _fm.b.b(_fm.a.cI, null, [_fm.WebfontSizes.a.e, "ms-fcl-nt-b"], null, null, null, null, ["ms-icon-flip-glyph"]));
    return _n.b.bo
};
_n.b.fn = function() {
    return _fm.b.a(_fm.a.dE, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.fo = function() {
    _n.b.cc || (_n.b.cc = _fm.b.a(_fm.a.dE, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.cc
};
_n.b.cQ = function() {
    return _fm.b.a(_fm.a.bI, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.dS = function() {
    _n.b.bp || (_n.b.bp = _fm.b.a(_fm.a.bI, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.bp
};
_n.b.c = function() {
    return _fm.b.a(_fm.a.d, "wf-size-checkboxMultiselectSize", "ms-bgc-w", "ms-fcl-nsa-b", "ms-fcl-ns-b", "ms-border-color-neutralSecondaryAlt")
};
_n.b.e = function() {
    return _fm.b.a(_fm.a.d, "wf-size-checkboxMultiselectSize", "ms-bgc-w", "ms-fcl-nsa-b", "ms-fcl-nd-b")
};
_n.b.r = function() {
    return _fm.h.a("checkboxImage wf-size-checkboxMultiselectSize ms-bg-color-white ms-border-color-neutralSecondaryAlt")
};
_n.b.f = function() {
    return _fm.h.a("checkboxImage wf-size-checkboxMultiselectSize ms-font-color-neutralSecondary ms-bg-color-white ms-border-color-neutralTertiaryAlt")
};
_n.b.d = function() {
    return _fm.h.a("checkboxImage wf-size-checkboxMultiselectSize ms-bg-color-white ms-border-color-neutralSecondaryAlt")
};
_n.b.cF = function() {
    return _fm.b.a(_fm.a.cY, "wf-size-checkboxMixedStateSize", "ms-fcl-ns-b")
};
_n.b.cG = function() {
    return _fm.b.a(_fm.a.cY, "wf-size-checkboxMixedStateSize ", "ms-fcl-nd-b")
};
_n.b.cK = function() {
    return _fm.b.a(_fm.a.P, _fm.WebfontSizes.a.l, "ms-fcl-ns-b")
};
_n.b.dB = function() {
    return _fm.b.a(_fm.a.P, _fm.WebfontSizes.a.l, "ms-fcl-nd-b")
};
_n.b.cN = function() {
    return _fm.b.a(_fm.a.cm, _fm.WebfontSizes.a.l, "ms-fcl-ns-b")
};
_n.b.dE = function() {
    return _fm.b.a(_fm.a.cm, _fm.WebfontSizes.a.l, "ms-fcl-nd-b")
};
_n.b.bC = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.c, "ms-fcl-nsa-b")
};
_n.b.bD = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.c, "ms-fcl-nd-b")
};
_n.b.cw = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.b, "ms-fcl-w-b")
};
_n.b.cx = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.b, "ms-fcl-w-b")
};
_n.b.fB = function() {
    return _fm.b.a(_fm.a.cc, _fm.WebfontSizes.a.b, "ms-fcl-nd-b")
};
_n.b.fC = function() {
    return _fm.b.a(_fm.a.cc, _fm.WebfontSizes.a.b, "ms-fcl-np-b")
};
_n.b.cJ = function() {
    return _fm.b.a(_fm.a.cc, _fm.WebfontSizes.a.b, "ms-fcl-ns-b")
};
_n.b.bK = function() {
    return _fm.b.a(_fm.a.bE, _fm.WebfontSizes.a.b, "ms-fcl-ns-b")
};
_n.b.cB = function() {
    return _fm.b.a(_fm.a.a, "ms-fcl-ns-b")
};
_n.b.dh = function() {
    return _fm.b.a(_fm.a.a, "ms-fcl-nd-b")
};
_n.b.eO = function() {
    return _fm.b.a(_fm.a.New, "owa-color-neutral-green", _fm.WebfontSizes.a.r)
};
_n.b.bg = function() {
    return _fm.b.a(_fm.a.M, _fm.WebfontSizes.a.c, "owa-color-neutral-red")
};
_n.b.bh = function() {
    _n.b.bZ || (_n.b.bZ = _fm.b.a(_fm.a.M, _fm.WebfontSizes.a.e, "ms-fcl-tp-b"));
    return _n.b.bZ
};
_n.b.ff = function() {
    return _fm.b.a(_fm.a.M, _fm.WebfontSizes.a.c, "owa-color-neutral-orange")
};
_n.b.fg = function() {
    return _fm.b.a(_fm.a.M, _fm.WebfontSizes.a.e, "ms-fcl-td-b")
};
_n.b.dr = function() {
    return _fm.b.a(_fm.a.M, _fm.WebfontSizes.a.c)
};
_n.b.fK = function() {
    return _fm.b.b(_fm.a.ba, null, [_fm.WebfontSizes.a.c, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fL = function() {
    return _fm.b.b(_fm.a.ba, null, [_fm.WebfontSizes.a.e, "ms-fcl-ns-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fM = function() {
    return _fm.b.b(_fm.a.ba, null, [_fm.WebfontSizes.a.c, "ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.fN = function() {
    return _fm.b.b(_fm.a.ba, null, [_fm.WebfontSizes.a.e, "ms-fcl-nd-b"], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.dF = function() {
    return _fm.b.b(_fm.a.ba, null, [_fm.WebfontSizes.a.c], null, null, null, null, ["ms-icon-flip-glyph"])
};
_n.b.dO = function() {
    return _fm.b.a(_fm.a.w, _fm.WebfontSizes.a.c, "ms-fcl-ns-b")
};
_n.b.dL = function() {
    return _fm.b.a(_fm.a.I, _fm.WebfontSizes.a.r, "ms-fcl-ns-b")
};
_n.b.df = function() {
    return _fm.b.a(_fm.a.dI, _fm.WebfontSizes.a.c, "owa-color-neutral-green-alt")
};
_n.b.dg = function() {
    _n.b.bO || (_n.b.bO = _fm.b.a(_fm.a.dI, _fm.WebfontSizes.a.e, "owa-color-neutral-green-alt"));
    return _n.b.bO
};
_n.b.di = function() {
    _n.b.bT || (_n.b.bT = _fm.b.a(_fm.a.C, _fm.WebfontSizes.a.c, "ms-fcl-nt-b"));
    return _n.b.bT
};
_n.b.fk = function() {
    _n.b.cb || (_n.b.cb = _fm.b.a(_fm.a.ce, _fm.WebfontSizes.a.c, "ms-fcl-ns-b"));
    return _n.b.cb
};
_n.b.fE = function() {
    _n.b.cf || (_n.b.cf = _fm.b.a(_fm.a.bF, _fm.WebfontSizes.a.c, "ms-fcl-ns-b"));
    return _n.b.cf
};
_n.b.fe = function() {
    _n.b.bY || (_n.b.bY = _fm.b.a(_fm.a.bh, _fm.WebfontSizes.a.c, "ms-fcl-ns-b"));
    return _n.b.bY
};
_n.b.fl = function() {
    return _fm.b.a(_fm.a.h, _fm.WebfontSizes.a.f, "ms-fcl-ns-b")
};
_n.b.fm = function() {
    return _fm.b.a(_fm.a.h, _fm.WebfontSizes.a.f, "ms-fcl-nd-b")
};
_n.b.dV = function() {
    return _fm.b.a(_fm.a.a, "ms-icon-font-size-14", "ms-fcl-ns-b")
};
_n.b.eB = function() {
    return _fm.b.a(_fm.a.e, _fm.WebfontSizes.a.e)
};
_n.b.et = function() {
    return _fm.b.a(_fm.a.l, _fm.WebfontSizes.a.m, "ms-icon-modifier-doughboy ms-bgc-nt ms-fcl-w-b", "ms-icon-modifier-personDoughboy", _n.b.dG)
};
_n.b.dJ = function() {
    return _fm.b.a(_fm.a.I, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.dK = function() {
    _n.b.bl || (_n.b.bl = _fm.b.a(_fm.a.I, _fm.WebfontSizes.a.e, "ms-fcl-nt-b"));
    return _n.b.bl
};
_n.b.m = function() {
    return _fm.b.a(_fm.a.p, _fm.WebfontSizes.a.c, "ms-fcl-nd-b")
};
_n.b.cu = function() {
    return _fm.b.a(_fm.a.r, _fm.WebfontSizes.a.c, "ms-fcl-nd-b")
};
_n.b.dz = function() {
    return _fm.b.a(_fm.a.bu, _fm.WebfontSizes.a.e, "ms-fcl-nd-b")
};
_n.b.dA = function() {
    return _fm.b.a(_fm.a.bu, _fm.WebfontSizes.a.e, "ms-fcl-nd-b")
};
_n.b.fD = function() {
    return _fm.d.a("task.png")
};
_n.b.dy = function() {
    return _fm.d.a("task_reoccurring.png")
};
_n.b.bL = function() {
    return _fm.d.a("task_red.png")
};
_n.b.dx = function() {
    return _fm.d.a("task_red_h.png")
};
_n.b.cH = function() {
    return _fm.b.a(_fm.a.c, "ms-bcl-tp-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-tp-b", _fm.WebfontSizes.b.a)
};
_n.b.cI = function() {
    return _fm.b.a(_fm.a.c, "ms-bcl-tp-b ms-bgc-tp-b ms-icon-font-circle", "ms-fcl-w-b", _fm.WebfontSizes.b.a)
};
_n.b.dq = function() {
    return _fm.b.a(_fm.a.c, "ms-bcl-tp-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-tp-b", _fm.WebfontSizes.b.e)
};
_n.b.C = function() {
    return _fm.b.a(_fm.a.f, "ms-bcl-ns-b ms-bg-transparent ms-icon-font-circle", "ms-fcl-ns-b", _fm.WebfontSizes.b.a)
};
_n.b.D = function() {
    return _fm.b.a(_fm.a.f, "ms-bcl-ns-b ms-bgc-ns-b ms-icon-font-circle", "ms-fcl-w-b", _fm.WebfontSizes.b.a)
};
_n.b.B = function() {
    return _fm.b.a(_fm.a.f, "ms-fcl-ns-b", _fm.WebfontSizes.a.b)
};
_n.b.bE = function() {
    return _fm.b.a(_fm.a.f, "ms-fcl-nt-b", _fm.WebfontSizes.a.b)
};
_n.b.N = function() {
    return _fm.b.a(_fm.a.f, "ms-fcl-nd-b", _fm.WebfontSizes.a.b)
};
_n.b.eJ = function() {
    return _fm.b.a(_fm.a.f, "ms-fcl-ns-b", _fm.WebfontSizes.a.a)
};
_n.b.eK = function() {
    return _fm.b.a(_fm.a.f, "ms-fcl-nd-b", _fm.WebfontSizes.a.a)
};
_n.b.eL = function() {
    return _fm.b.a(_fm.a.f, "ms-fcl-np-b", _fm.WebfontSizes.a.a)
};
_n.b.eZ = function() {
    return _fm.d.a("navigation_close.png")
};
_n.b.fv = function() {
    return _fm.d.a("response_request.png")
};
_n.b.ft = function() {
    return _fm.d.a("response_approve.png")
};
_n.b.fu = function() {
    return _fm.d.a("response_reject.png")
};
_n.b.a = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.a, "ms-fcl-ns-b")
};
_n.b.b = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.a, "ms-fcl-nd-b")
};
_n.b.A = function() {
    return _fm.b.a(_fm.a.a, _fm.WebfontSizes.a.a, "ms-fcl-nl-b")
};
_n.b.t = function() {
    return _fm.d.a("close_p.png")
};
_n.b.co = function() {
    return _fm.b.b(_fm.a.q, _fm.a.o, ["ms-icon-font-size-21", "ms-fcl-ns-b"], null, null, null, null, null)
};
_n.b.cU = function() {
    return _fm.b.b(_fm.a.q, _fm.a.o, ["ms-icon-font-size-21", "ms-fcl-nd-b"], null, null, null, null, null)
};
_n.b.cV = function() {
    return _fm.b.b(_fm.a.q, _fm.a.o, ["ms-icon-font-size-21", "ms-fcl-tp-b"], null, null, null, null, null)
};
_n.b.W = function() {
    return _fm.b.b(_fm.a.o, _fm.a.q, ["ms-icon-font-size-21", "ms-fcl-ns-b"], null, null, null, null, null)
};
_n.b.cW = function() {
    return _fm.b.b(_fm.a.o, _fm.a.q, ["ms-icon-font-size-21", "ms-fcl-nd-b"], null, null, null, null, null)
};
_n.b.cX = function() {
    return _fm.b.b(_fm.a.o, _fm.a.q, ["ms-icon-font-size-21", "ms-fcl-tp-b"], null, null, null, null, null)
};
_n.b.cp = function() {
    return _fm.b.b(_fm.a.o, _fm.a.q, ["ms-icon-font-size-14", "ms-fcl-ns-b"], null, null, null, null, null)
};
_n.b.cq = function() {
    return _fm.b.b(_fm.a.o, _fm.a.q, ["ms-icon-font-size-14", "ms-fcl-nd-b"], null, null, null, null, null)
};
_n.b.cr = function() {
    return _fm.b.b(_fm.a.o, _fm.a.q, ["ms-icon-font-size-14", "ms-fcl-tp-b"], null, null, null, null, null)
};
_n.b.eb = function() {
    return _fm.b.b(_fm.a.q, _fm.a.o, ["ms-icon-font-size-14", "ms-fcl-ns-b"], null, null, null, null, null)
};
_n.b.ec = function() {
    return _fm.b.b(_fm.a.q, _fm.a.o, ["ms-icon-font-size-14", "ms-fcl-nd-b"], null, null, null, null, null)
};
_n.b.ed = function() {
    return _fm.b.b(_fm.a.q, _fm.a.o, ["ms-icon-font-size-14", "ms-fcl-tp-b"], null, null, null, null, null)
};
_n.b.i = function() {
    return _fm.b.a(_fm.a.e, "ms-icon-font-size-21", "ms-fcl-ns-b")
};
_n.b.J = function() {
    return _fm.b.a(_fm.a.x, "ms-icon-font-size-21", "ms-fcl-ns-b")
};
_n.b.y = function() {
    return _fm.b.a(_fm.a.e, "ms-icon-font-size-21", "ms-fcl-nd-b")
};
_n.b.K = function() {
    return _fm.b.a(_fm.a.x, "ms-icon-font-size-21", "ms-fcl-nd-b")
};
_n.b.z = function() {
    return _fm.b.a(_fm.a.e, "ms-icon-font-size-21", "ms-fcl-tp-b")
};
_n.b.L = function() {
    return _fm.b.a(_fm.a.x, "ms-icon-font-size-21", "ms-fcl-tp-b")
};
_n.b.cT = function() {
    return _fm.b.a(_fm.a.e, "ms-icon-font-size-14", "ms-fcl-ns-b")
};
_n.b.cZ = function() {
    return _fm.b.a(_fm.a.x, "ms-icon-font-size-14", "ms-fcl-ns-b")
};
_n.b.ea = function() {
    return _fm.b.a(_fm.a.e, "ms-icon-font-size-14", "ms-fcl-nd-b")
};
_n.b.em = function() {
    return _fm.b.a(_fm.a.x, "ms-icon-font-size-14", "ms-fcl-nd-b")
};
_n.b.cS = function() {
    return _fm.b.a(_fm.a.e, "ms-icon-font-size-14", "ms-fcl-tp-b")
};
_n.b.cY = function() {
    return _fm.b.a(_fm.a.x, "ms-icon-font-size-14", "ms-fcl-tp-b")
};
_n.b.eW = function() {
    return _fm.b.a(_fm.a.C, _fm.WebfontSizes.a.c)
};

function BootViewsComponent() {}
BootViewsComponent.$$cctor = function() {
    _a.t.a().a(BootViewsComponent)
};
BootViewsComponent.prototype = {
    b: function(n, t, i) {
        if (i.f()) {
            var k = this;
            n.b(_n.X, function() {
                return i.g() === "AnonymousCalendar" ? null : new _n.X(function() {
                    return n.a(_g.E).bH.UserEmailAddress
                }, n.a(_a.e), n.a(_j.j), n.a(_y.a), n.a(_a.Z), n.a(_h.bj), n.d(_y.cv), n.a(_y.j), n.a(_g.a).n(), n.a(_a.eO), n.d(_y.cc), n.a(_y.G))
            }).a()
        } else {
            var p = this;
            n.b(_n.X, function() {
                return null
            }).a()
        }
        var y = this;
        n.b(_n.F, function() {
            return new _n.F(n.a(_j.j), n.a(_h.s), n.a(_j.o).c(), n.a(_g.h), n.d(_y.cc), n.a(_a.e), n.a(_a.E))
        }).b(_n.F);
        n.e(_b.Y).a();
        var v = this;
        n.b(_b.Q, function() {
            return new _b.Q(n.a(_y.a), n.a(_j.j), n.a(_b.Y))
        }).a();
        var a = this;
        n.b(_n.d, function() {
            return new _n.d(n, n.a(_y.a), n.a(_b.a))
        }).b(_n.f);
        var r = !1;
        var u = _a.cZ.b(i.b());
        i.i() && u.startsWith("/bookings") && (r = !0);
        var b = this;
        n.b(_n.G, function() {
            return new _n.G(window.document.body, n.a(_y.a), n.a(_j.j), n.a(_a.r), n.a(_j.o), n.a(_a.z), n.a(_a.S), n.a(_b.d), n.a(_a.e), r)
        });
        var w = this;
        n.b(_j.cd.$$(_y.cE), function() {
            return n.d(_y.cE)
        }).a();
        var o = this;
        n.b(_j.cc.$$(_y.bK), function() {
            return n.c(_y.bK)
        }).a();
        if (i.a() === "Mouse") {
            var e = this;
            n.b(_n.u, function() {
                return new _n.u(window.document.createElement("div"), n.a(_b.i), n.a(_j.j), n.a(_b.Q), n.a(_ff.a), n.a(_ff.b), n.a(_g.a), n.a(_b.d), r)
            })
        } else {
            var f = this;
            n.b(_n.P, function() {
                return new _n.P(n.a(_y.a))
            });
            var s = this;
            n.b(_n.O, function() {
                return new _n.O(window.document.createElement("div"), n.a(_j.j), n.a(_n.P), n.a(_y.a), n.a(_b.Q))
            });
            if (i.a() === "TouchNarrow") {
                var l = this;
                n.b(_n.Y, function() {
                    return new _n.Y(window.document.createElement("div"), n.a(_b.a), n.a(_j.j), n.a(_a.x), n.a(_y.a))
                })
            } else {
                var c = this;
                n.b(_n.J, function() {
                    return new _n.J(window.document.createElement("div"), n.a(_b.a), n.a(_j.j), n.a(_a.E), n.a(_a.x), n.a(_y.a))
                });
                var h = this;
                n.b(_n.bu, function() {
                    return new _n.bu(window.document.createElement("div"), n.a(_b.a))
                })
            }
        }
    },
    a: function() {
        return [new _j.y(_n.X, 2, 9)]
    }
};
_n.l = function() {};
_n.l.f = function(n, t) {
    switch (n) {
        case "Flagged":
            return t ? _n.b.bG() : _n.b.O();
        case "Complete":
            return t ? _n.b.bA() : _n.b.bd();
        default:
            return _y.e.a()
    }
};
_n.l.e = function(n, t) {
    switch (n) {
        case "Flagged":
            return t ? _n.b.bG() : _n.b.O();
        case "Complete":
            return t ? _n.b.dW() : _n.b.bd();
        default:
            return t ? _n.b.bF() : _n.b.de()
    }
};
_n.l.d = function(n, t) {
    switch (n) {
        case "Flagged":
            return t ? _n.b.eD() : _n.b.eC();
        case "Complete":
            return t ? _n.b.dX() : _n.b.dY();
        default:
            return t ? _n.b.cz() : _n.b.S()
    }
};
_n.l.j = function(n, t) {
    return n ? t ? _n.b.bh() : _n.b.bg() : t ? _n.b.fL() : _n.b.fK()
};
_n.l.i = function(n, t) {
    return n ? t ? _n.b.fg() : _n.b.ff() : t ? _n.b.fN() : _n.b.fM()
};
_n.l.a = function(n, t, i) {
    if (_j.u.a(n)) return null;
    switch (n) {
        case -1:
        case 6:
        case 12:
        case 13:
        case 14:
            return t ? _n.b.eU() : _n.b.be();
        case 11:
        case 10:
            return i ? null : t ? _n.b.fy() : _n.b.Z();
        case 0:
        default:
            return null
    }
};
_n.l.g = function(n, t) {
    switch (n) {
        case 3:
            return t ? _n.b.fp() : _n.b.fs();
        case 4:
            return t ? _n.b.dM() : _n.b.dN();
        case 5:
            return t ? _n.b.eP() : _n.b.cC();
        case 6:
            return _n.b.eR();
        case 7:
            return _n.b.eQ();
        case 8:
            return t ? _n.b.fP() : _n.b.fO();
        case 9:
            return t ? _n.b.fU() : _n.b.fT();
        case 10:
            return t ? _n.b.fR() : _n.b.fQ();
        case 11:
            return _n.b.fS();
        case 12:
            return t ? _n.b.ez() : _n.b.ey();
        case 13:
            return t ? _n.b.dU() : _n.b.bz();
        case 14:
            return _n.b.eu();
        case 15:
            return _n.b.ew();
        case 16:
            return _n.b.ex();
        case 17:
            return t ? _n.b.ev() : _n.b.cy();
        case 18:
            return t ? _n.b.eo() : _n.b.dc();
        case 19:
            return _n.b.fD();
        case 20:
            return _n.b.dy();
        case 21:
            return t ? _n.b.eT() : _n.b.eS();
        case 22:
            return t ? _n.b.fh() : _n.b.ds();
        case 23:
            return t ? _n.b.fd() : _n.b.fc();
        case 24:
            return t ? _n.b.er() : _n.b.eq();
        case 25:
            return t ? _n.b.fb() : _n.b.fa();
        case 26:
            return _n.b.fv();
        case 27:
            return _n.b.ft();
        case 28:
            return _n.b.fu();
        case 29:
            return t ? _n.b.dR() : _n.b.dQ();
        case 30:
            return t ? _n.b.fo() : _n.b.fn();
        case 31:
            return t ? _n.b.dS() : _n.b.cQ()
    }
    return _y.e.a()
};
_n.l.b = function(n) {
    switch (n) {
        case "Promotion":
            return _n.b.fk();
        case "Travel":
            return _n.b.fE();
        case "PackageDelivery":
            return _n.b.fe();
        default:
            return _y.e.a()
    }
};
_n.l.c = function(n, t) {
    return n ? t ? _n.b.cM() : _n.b.dD() : t ? _n.b.cL() : _n.b.dC()
};
_n.l.h = function(n, t) {
    return n ? t ? _n.b.cM() : _n.b.dD() : t ? _n.b.cL() : _n.b.dC()
};
_n.bm = function(n, t, i, r, u, f, e) {
    _n.bm.initializeBase(this, [n, t, i, r, u]);
    this.cH = f;
    this.bR = i;
    this.cG = e
};
_n.bm.prototype = {
    cH: null,
    bR: null,
    cG: null,
    cN: function() {
        return this.d[this.c].a !== -1
    },
    bi: function() {
        var t = new _n.be(document.createElement("div"), this, this.m, this.t(), this.bR, this.cG);
        var n = new _b.r(this.cH, this.bR);
        n.a(!0);
        n.bl(t);
        return t
    },
    s: function() {
        _fce.z.prototype.s.call(this);
        for (var n = 0; n < this.a.length; n++) {
            var t = this.d[n].a;
            t ? t === 1 && (this.a[n].j.c = 5) : this.a[n].j.c = 4
        }
    }
};
_n.be = function(n, t, i, r, u, f) {
    this.l = Function.createDelegate(this, this.x);
    _n.be.initializeBase(this, [n, i, r]);
    this.g = t;
    this.j = u;
    f.b(_y.bO, this.l)
};
_n.be.prototype = {
    g: null,
    u: null,
    d: !1,
    f: !1,
    j: null,
    c: 0,
    t: function() {
        return this.V().d
    },
    h: function(n) {
        if (this.d !== n) {
            this.d = n;
            this.bA("IsDraggedOver", "ShowSelection")
        }
        return n
    },
    e: function() {
        return this.f && !this.t() && !!this.c
    },
    w: function() {
        return this.e() || this.d
    },
    v: function() {
        return this.j.i()
    },
    n: function() {},
    m: function() {},
    q: function(n) {
        if (this.e()) {
            n.dropEffect = "move";
            this.h(!0)
        }
    },
    o: function(n) {
        this.e() && this.h(!0)
    },
    p: function(n) {
        this.h(!1)
    },
    r: function(n, t) {
        if (!this.g.cN()) {
            t.val = 3;
            return !1
        }
        t.val = this.t() ? 3 : this.c;
        this.h(!1);
        return !0
    },
    s: function(n) {
        this.u = n
    },
    x: function(n) {
        if (this.g.cN()) {
            var t = n.a;
            if (t) {
                t[0] === "MessageDragStart" ? this.f = !0 : t[0] === "MessageDragEnd" && (this.f = !1);
                this.bA("ShowSelection", "UpdateSelectionOnDrag")
            }
        }
    }
};
_n.bn = function(n) {
    _n.bn.initializeBase(this, [n])
};
_n.bn.prototype = {
    a: !0,
    b: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.z.style.visibility = n ? "" : "hidden"
        }
        return n
    }
};
_n.bp = function() {};
_n.bp.prototype = {
    flagListViewType: 1,
    flagListViewSelectedType: 2,
    flagListViewActionHoveredType: 3
};
_n.bp.registerEnum("_n.bp", !1);
_n.bG = function() {};
_n.bG.prototype = {
    meCard: 0,
    apps: 1,
    admin: 2,
    settings: 3,
    help: 4
};
_n.bG.registerEnum("_n.bG", !1);
_n.ItemToListItemOperation = function() {};
_n.ItemToListItemOperation.prototype = {
    value: 1,
    style: 2,
    narrate: 3
};
_n.ItemToListItemOperation.registerEnum("_n.ItemToListItemOperation", !1);
_n.y = function() {};
_n.y.prototype = {
    a: function(n, t) {
        var r = "";
        if (t)
            for (var u = t.toString().split(" "), f = u.length, i = 0; i < f; i++)
                if (u[i] !== "") {
                    r += n + "." + u[i];
                    i < f - 1 && (r += " ")
                }
        return r
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bh = function() {};
_n.bh.prototype = {
    a: function(n, t) {
        return n ? 1 : 2
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.ba = function() {};
_n.ba.prototype = {
    a: function(n, t) {
        try {
            var i = _j.u.d(_n.bp, t.toString());
            switch (i) {
                case 1:
                    switch (n) {
                        case "Flagged":
                            return _n.b.O();
                        case "Complete":
                            return _n.b.bd();
                        default:
                            return _y.e.a()
                    }
                case 2:
                    switch (n) {
                        case "Flagged":
                            return _n.b.O();
                        case "Complete":
                            return _n.b.bd();
                        default:
                            return _n.b.de()
                    }
                case 3:
                    switch (n) {
                        case "Flagged":
                            return _n.b.S();
                        case "Complete":
                            return _n.b.bd();
                        default:
                            return _n.b.S()
                    }
            }
        } catch (r) {
            return _y.e.a()
        }
        return _y.e.a()
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.L = function() {};
_n.L.prototype = {
    a: function(n, t) {
        var r = n;
        var i = t ? t : !1;
        switch (r) {
            case 2:
                n = i ? _n.b.cT() : _y.c.a.a() === "Mouse" ? _n.b.fG() : _n.b.bM();
                break;
            case 3:
                n = i ? _n.b.cZ() : _y.c.a.a() === "Mouse" ? _n.b.fI() : _n.b.bN();
                break;
            case 1:
                n = _y.e.a();
                break
        }
        return n
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bE = function() {};
_n.bE.prototype = {
    a: function(n, t) {
        var i = n;
        n = i === 1 ? 47 : _y.c.a.a() === "Mouse" ? 47 : 4;
        return n
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.B = function() {};
_n.B.prototype = {
    a: function(n, t) {
        var i = t;
        if (n) switch (n) {
            case "High":
                return i ? _n.b.eN() : _n.b.eM();
            case "Low":
                return i ? _n.b.dK() : _n.b.dJ();
            default:
                return _y.e.a()
        }
        return _y.e.a()
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bF = function() {};
_n.bF.prototype = {
    a: function(n, t) {
        try {
            var i = _j.u.d(_n.bG, t.toString());
            switch (i) {
                case 0:
                    return n ? _b.l.e() : _b.l.b();
                case 1:
                    return n ? _n.b.dH() : _y.b.bG();
                case 2:
                    return n ? _b.l.e() : _n.b.fF();
                case 3:
                    return n ? _n.b.fA() : _n.b.dw();
                case 4:
                    return n ? _n.b.eF() : _n.b.bH();
                default:
                    return _y.e.a()
            }
        } catch (r) {
            return _y.e.a()
        }
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.v = function() {};
_n.v.prototype = {
    a: function(n, t) {
        return n ? -1 : t
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.T = function() {};
_n.T.prototype = {
    a: function(n, t) {
        var i = n;
        return i ? Array.contains(i, t) : !1
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bH = function() {};
_n.bH.prototype = {
    a: function(n, t) {
        if (_g.f.isInstanceOfType(n)) {
            var i = n;
            return _h.cg.a(i)
        }
        return n
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_n.bI = function() {
    this.d = new _y.gb;
    this.c = new _b.M
};
_n.bI.prototype = {
    d: null,
    c: null,
    a: function(n, t) {
        var i = n;
        var r = this.d.a(i.bH.ParentFolderId, null);
        switch (r) {
            case "sentitems":
                return _j.h.c(_u.R.Lz, this.c.a(i.cK(), !0));
            case "drafts":
                return _g.a.a().E ? _j.h.c(_u.R.El, this.c.a(i.S(), !0)) : _j.h.c(_u.R.Lh, this.c.a(i.dT(), !0));
            default:
                return _j.h.c(_u.R.Vl, this.c.a(i.cr(), !0))
        }
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_n.bq = function() {};
_n.bq.prototype = {
    a: function(n, t) {
        var i = n;
        var r = t;
        if (i) switch (i.bU()) {
            case 1:
            case 5:
                return this.e(i, r);
            case 2:
                return this.c(i, r);
            case 4:
                return this.f(i, r);
            case 3:
                return this.d(i, r);
            default:
                switch (r) {
                    case 1:
                    case 3:
                        return i.bH.Subject;
                    case 2:
                        return _b.j.b;
                    default:
                        return ""
                }
        } else return ""
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    },
    e: function(n, t) {
        var i = !!n.bH.ParentFolderId && n.bH.ParentFolderId.Id === _g.b.a.nameToId("sentitems").Id;
        if (i || n.bH.IsDraft) switch (t) {
            case 1:
                return n.bH.DisplayTo;
            case 2:
                return _b.j.g;
            case 3:
                return _j.h.c(_u.R.Pn, n.bH.DisplayTo);
            default:
                return ""
        } else switch (t) {
            case 1:
                return n.b() && n.b().Mailbox ? n.b().Mailbox.Name : "";
            case 2:
                return _b.j.d;
            case 3:
                return n.b() && n.b().Mailbox ? _j.h.c(_u.R.QJ, n.b().Mailbox.Name) : "";
            default:
                return ""
        }
    },
    c: function(n, t) {
        if (n.y() && n.y().Mailbox && n.y().Mailbox.Name) switch (t) {
            case 1:
            case 3:
                return n.y().Mailbox.Name;
            case 2:
                return _b.j.d;
            default:
                return ""
        } else switch (t) {
            case 1:
            case 3:
                return n.bH.DisplayTo;
            case 2:
                return _b.j.g;
            default:
                return ""
        }
    },
    f: function(n, t) {
        if (_j.h.b(n.bH.Subject)) switch (t) {
            case 1:
            case 3:
                return _u.R.Bx;
            case 2:
            default:
                return ""
        } else switch (t) {
            case 1:
            case 3:
                return n.bH.Subject;
            case 2:
                return _b.j.b;
            default:
                return ""
        }
    },
    d: function(n, t) {
        if (_j.h.b(n.bH.Subject)) switch (t) {
            case 1:
            case 3:
                return _u.R.HM;
            case 2:
            default:
                return ""
        } else switch (t) {
            case 1:
            case 3:
                return n.bH.Subject;
            case 2:
                return _b.j.b;
            default:
                return ""
        }
    }
};
_n.bb = function() {};
_n.bb.prototype = {
    a: function(n, t) {
        var i = n;
        var r = t;
        return i && (i.bU() === 1 || i.bU() === 5 || i.bU() === 2) ? this.c(i, r) : i && i.bU() === 4 ? this.d(i, r) : ""
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    },
    c: function(n, t) {
        var i = n.bH.Subject;
        if (_j.h.b(i)) switch (t) {
            case 1:
            case 3:
                return _u.R.VL;
            case 2:
            default:
                return ""
        } else switch (t) {
            case 1:
                return i;
            case 2:
                return _b.j.b;
            case 3:
                return _j.h.c(_u.R.Oz, i);
            default:
                return _u.R.VL
        }
    },
    d: function(n, t) {
        switch (t) {
            case 1:
            case 3:
                var i = n;
                return _n.bb.a.a(i.b(), null);
            case 2:
            default:
                return ""
        }
    }
};
_n.bJ = function() {};
_n.bJ.prototype = {
    a: function(n, t) {
        var u = n;
        if (u) {
            var i = u.bH.Preview;
            var r = _b.j.j;
            if (_j.h.b(i)) {
                r = "";
                i = _u.R.Qy
            }
            switch (t) {
                case 1:
                case 3:
                    return i;
                case 2:
                    return r;
                default:
                    return ""
            }
        } else return ""
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_n.M = function() {};
_n.M.prototype = {
    a: function(n, t) {
        return _j.h.a(n) ? t : n
    },
    b: function(n, t) {
        throw Error.invalidOperation();
    }
};
_n.br = function() {};
_n.br.prototype = {
    a: function(n, t) {
        if (Number.isInstanceOfType(n)) {
            var i = n;
            switch (i) {
                case 1:
                    return "InstantSearchRefinerView";
                case 2:
                    return "GroupSearchRefinerView";
                case 0:
                default:
                    return "SearchRefinerView"
            }
        }
        return ""
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bc = function() {};
_n.bc.prototype = {
    a: function(n, t) {
        return _j.h.c(t, n)
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bi = function() {};
_n.bi.prototype = {
    a: function(n, t) {
        switch (n) {
            case "NotStarted":
                return _u.R.MY;
            case "InProgress":
                return _u.R.PB;
            case "Completed":
                return _u.R.MC;
            case "WaitingOnOthers":
                return _u.R.Dv;
            case "Deferred":
                return _u.R.BF;
            default:
                return ""
        }
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.W = function() {};
_n.W.prototype = {
    a: function(n, t) {
        var i = n;
        switch (i) {
            case 2:
                n = 0;
                break;
            case 3:
                n = 1;
                break;
            case 1:
                n = 2;
                break
        }
        return n
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bs = function() {};
_n.bs.prototype = {
    a: function(n, t) {
        return _a.o.a().bi && (_a.o.a().T || _a.o.a().O)
    },
    b: function(n, t) {
        throw Error.notImplemented();
    }
};
_n.bK = function(n) {
    _n.bK.initializeBase(this, [n])
};
_n.bK.prototype = {
    B: function() {
        if (_y.bH.isInstanceOfType(this.V())) {
            this.l.bl.a();
            this.V().n.v(5)
        } else _n.n.prototype.B.call(this)
    }
};
_n.a = function() {};
_n.a.$$cctor = function() {
    _n.a._I()
};
_n.a.ho = function() {
    var n = window.document.createElement("DIV");
    n.innerHTML = "<div> <span autoid=\"_n_0\" class='ms-font-m ms-fwt-sl ms-fcl-np ms-fcl-b-h'></span> <div class='_n_5'> <span class='ms-fcl-ns'>|</span> </div> </div><div>  <div class='_n_7'>  <div autoid=\"_n_1\" class='_n_a'></div>  <div autoid=\"_n_2\" class='_n_9'></div> <div class='_n_b'></div>  <div></div> </div>  <div></div> <div></div> <div></div> <div></div> </div><div> <div class='_n_g'></div> </div><div> <div class='_n_i'></div> </div><div>  <div class='_n_c ms-bgc-tp'></div> <div class='_n_c _n_d'></div> <div></div> <div>  <a tabindex='-1'></a>  <div autoid=\"_n_3\"></div> <div class='_n_f'></div>  <div class='_n_h'></div>  <a tabindex='-1'></a> <div></div> </div> <div></div> <div></div> <div></div> </div><div> <span class='_n_m'></span> <span class='_n_l ms-fwt-sl ms-fcl-ns ms-fcl-np'></span> </div><div>  <button autoid=\"_n_4\" type='button' class='_n_j ms-bgc-tl-h _n_k ms-bgc-tlr'></button> <div class='_n_o'></div> </div><div> <span class='_n_r'></span> <span class='_n_r'></span> <span autoid=\"_n_6\" class='_n_q ms-font-s ms-font-weight-regular ms-font-color-neutralSecondary'> </span> </div><div> <button autoid=\"_n_5\" type='button' class='_n_p'></button> </div><div> <span class='_n_w ms-fwt-sl'></span> <span class='_n_t'></span> </div><div> <span class='_n_B ms-fcl-tp ms-fwt-sb'></span> </div><div> <div class='_n_D ms-fwt-sb ms-fcl-tp'> <span class='_n_F'></span> <span class='_n_F'></span> <span class='_n_H ms-fwt-r'></span> <span class='_n_J'></span> <span class='_n_I'></span> </div> </div><div> <div class='searchDisplayTextDiv'></div> <div class='_n_E'></div> </div><div> <div class='_n_N'></div> </div><div> <div class='_n_M'></div> </div><div>  <div class='ms-bgc-w'></div>  <div class='_n_P'> <div class='_n_S'></div> <div autoid=\"_n_7\" class='_n_A'> <div class='_n_C ms-bgc-w'></div> <div></div> <div class='_n_K'></div> <div></div> <div class='_n_R'> </div> </div> </div> <div></div> <div></div> </div><div> <div autoid=\"_n_9\"></div> </div><div> <span class='_n_d1 ms-fwt-r ms-fcl-ns'></span> </div><div> <div autoid=\"_n_a\" class='_n_X hiddenOverflow ms-bgc-nlr'> <div spellcheck=\"true\"> <div class='ms-bgc-tlr'> <button type='button' class='_n_U'></button> </div> <div autoid=\"_n_b\" class='_n_W'></div> </div> <div class='hiddenOverflow'></div> <div class='_n_b1'></div> <div class='nowrap ms-bgc-ns'></div> <div autoid=\"_n_c\"></div> </div> </div><div> <div class='_n_s1'></div> <div class='_n_u1 ms-bg-color-themeLighterAlt'></div> </div><div> <div class='_n_X'> <div></div> <div> <div></div> </div> <div> <div class='_n_X'> <div class='_n_f1'> </div> </div> </div> <div tabindex='-1' class='_n_Y'> <div autoid=\"_n_d\">  </div>  <div></div> </div> </div> </div><div>  <button type='button' class='_n_o1 ms-font-m ms-fwt-r ms-fcl-tp'></button> <span class='_n_q1 ms-font-m ms-fwt-r ms-fcl-ns'></span>  <button type='button' class='_n_o1 ms-font-m ms-fwt-r ms-fcl-tp'></button> </div><div> <div class='_n_l1 ms-fcl-ns'>  <span autoid=\"_n_h\" class='folderHeaderLabel ms-font-xl ms-fwt-r'></span>  <div class='displayInline'></div> <div> <div class='_n_t1'></div> <div class='_n_B1'></div> </div> </div> <div class='_n_61'></div> </div><div> <div class='_n_51'>  <button type='button' class='_n_11 noMargin ms-font-m'></button>  <div class='_n_31'></div> </div> <div class='_n_41'> <div></div> <div class='ms-fwt-r folderHeadContainer'></div> </div> </div><div>  <div class='_n_w1 flex flexCenterItems'> <span class='ms-font-s ms-fcl-tp ms-fwt-sb'></span> <span class='_n_y1 ms-font-s ms-fwt-r'></span> </div>  <div class='_n_x1'></div> </div><div> <div autoid=\"_n_g\" class='_n_e1 _n_X'>  <div class='flex flexcolumn'>  <div class='_n_Z'></div>  <div></div>  <div></div>  <div class='_n_v1'></div>  <div class='flexauto'>  <div class='_n_h1'></div>  <div></div> </div> </div> </div> </div><div> <button type='button' class='o365button _n_91 ms-fwt-sl ms-bgc-w'>  <span class='_n_a1 ms-fcl-tp'></span><span class='_n_81 owaimg ms-Icon--chevronDown ms-icon-font-size-17 ms-fcl-tp'></span> </button> </div><div>  <div class='_n_T'> <div autoid=\"_n_8\" class='_n_X'> <div> <div></div> <div></div> </div> <div></div> <div class='_n_X'> <div class='_n_X'> <div class='_n_r1'></div> </div> <div> <div class='_n_k1'></div> </div> <div></div> </div> </div> </div>  <div autoid=\"_n_e\"></div> <div></div> <div autoid=\"_n_f\"></div> <div></div> <div></div> <div></div> <div></div> <div></div>   </div><div> <span></span> </div><div> <span class='_n_S1 ms-fcl-tp ms-fwt-sb'></span> </div><div> <div class='_n_O1 ms-fwt-sb ms-fcl-tp'> <span class='_n_P1'></span> <span class='_n_P1'></span> <span class='_n_V1 ms-fwt-r'></span> <span class='_n_X1'></span> <span class='_n_W1'></span> </div> </div><div> <div class='_n_T1'></div> <div class='_n_N1'></div> <div class='_n_Z1'></div> </div><div> <div class='_n_22'></div> <div class='_n_02'></div> </div><div> <span></span> <span class='_n_E1 ms-fwt-r ms-fcl-tp'></span> </div><div> <div class='_n_I1'> <div>  <div class='ms-bgc-w'></div> <div class='_n_I1 _n_J1'> <div class='_n_K1 ms-bgc-w'></div> <div class='folderPaneGradient _n_R1'></div>  <div class='folderPaneGradient _n_R1'></div> <div></div> <div class='_n_Y1'></div> <div class='_n_F1'>  </div> </div> <button autoid=\"_n_i\" type='button' class='_n_C1'></button>  <div class='ms-bgc-w _n_D1'></div> </div> <div> <div class='_n_G1 ms-bgc-w'>  </div> </div> </div> <div></div> <div></div> <div></div> </div><div> <div></div> <div class='_n_42'>  </div> <div></div> <div></div> </div><div> <span class='_n_62 ms-fwt-r ms-fcl-w'></span> </div><div> <a></a> <div class='_n_a2'> <svg version=\"1.1\" width=\"6px\" height=\"8px\" viewBox=\"0 0 6 8\"> <polygon points=\"0.504,0.161 0.504,7.849 5.504,4.005 \" class='_n_82'></polygon> </svg> </div> <div class='_n_92'> <svg version=\"1.1\" width=\"24px\" height=\"24px\" viewBox=\"0 0 48 48\"> <g> <path d=\"M37.586,32.563c-0.557-0.164-1.48-0.335-2.258-0.335c-2.734,0-4.15,1.416-4.15,1.416v6.836h5.078 l0.004-6.836C36.26,33.645,36.644,32.823,37.586,32.563z\" class='_n_82'></path> <polyline fill=\"none\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" points=\"28.785,35.256 1.148,35.256 1.148,8.156 43.824,8.156 43.824,22.609  \" class='_n_72'></polyline> <path d=\"M46.852,33.645c0,0-1.367-1.416-4.102-1.416s-4.15,1.416-4.15,1.416v6.836h8.252V33.645z\" class='_n_82'></path> <circle cx=\"34.879\" cy=\"27.734\" r=\"2.969\" class='_n_82'></circle> <circle cx=\"42.645\" cy=\"27.734\" r=\"2.969\" class='_n_82'></circle> <rect x=\"31.91\" y=\"11.188\" width=\"8.141\" height=\"6\" class='_n_82'></rect> <line fill=\"none\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" x1=\"7.863\" y1=\"23.229\" x2=\"28.885\" y2=\"23.229\" class='_n_72'></line> <line fill=\"none\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" x1=\"7.863\" y1=\"27.042\" x2=\"25.885\" y2=\"27.042\" class='_n_72'></line> </g> </svg> </div> <span class='_n_62 ms-fwt-r ms-fcl-w'></span> </div><div>  <div class='_n_52 ms-fwt-r ms-fcl-w'></div> </div><div> <span class='_n_b2 owaimg csimg image-headerbgright-png ms-bgc-tp'></span> </div><div>  <div></div> <div>  <div></div> <div></div> </div> <div></div> </div><div>  <div></div> </div><div> <button type='button' class='_n_p2'></button> </div><div>  <span autoid=\"_n_C\" class='_n_r2'></span> <span autoid=\"_n_D\" class='_n_s2 ms-fwt-r ms-fcl-w _n_t2'></span>  <span autoid=\"_n_E\" class='_n_r2'></span> </div><div> <button autoid=\"_n_F\" type='button' class='_n_w2 ms-bgc-tp'></button> </div><div> <button autoid=\"_n_G\" type='button' class='_n_p2'></button> </div><div> <span class='_n_E2'></span> <span class='_n_x2 ms-fwt-sl ms-fcl-w'></span> </div><div><div></div></div><div> <div class='_n_e2 ms-bgc-tp _n_A2'>  <div class='_n_v2'></div> </div> <div class='_n_g2'> <div autoid=\"_n_j\" class='_n_h2 ms-bgc-tp'> <div class='_n_i2'> <div autoid=\"_n_k\" class='_n_o2 _n_G2'></div> <div autoid=\"_n_l\" class='_n_o2'></div> <div autoid=\"_n_m\" class='_n_o2'></div> <div autoid=\"_n_n\" class='_n_o2'></div> <div autoid=\"_n_o\" class='_n_o2'></div> </div> <span class='_n_j2'> <span class='_n_k2'> <div autoid=\"_n_p\" class='_n_o2'></div> <div autoid=\"_n_q\" class='_n_o2'></div> <div autoid=\"_n_r\" class='_n_o2'></div> <div autoid=\"_n_s\" class='_n_o2'></div> <div autoid=\"_n_t\" class='_n_o2'></div> <div autoid=\"_n_u\" class='_n_o2'></div> </span> </span> <div class='_n_l2'> <div autoid=\"_n_v\" class='_n_m2'> <button autoid=\"_n_w\" type='button' class='_n_u2 _n_z2'></button> <div autoid=\"_n_x\" class='_n_o2 _n_z2'></div> <div autoid=\"_n_y\" class='_n_o2 _n_z2'></div> <div autoid=\"_n_z\" class='_n_o2 _n_z2'></div> <div autoid=\"_n_A\" class='_n_o2 _n_z2'></div> <div class='_n_y2'></div> </div> <div tabindex='-1' class='_n_n2 _n_A2'>  <div autoid=\"_n_B\" class='_n_v2'></div> </div> </div>  <div></div> </div>  <div class='_n_h2 ms-bgc-tp _n_F2'></div> </div>          </div><div>  <div class='_n_H2 flex flexwrap hiddenOverflow ms-bgc-nl'> <button type='button' class='_n_K2 ms-fcl-tp o365button'> <span class='_n_L2 ms-icon-font-size-18 ms-Icon--mail'></span> </button> <button type='button' class='_n_J2 o365button'> <span class='_n_L2 ms-icon-font-size-18 ms-Icon--calendar ms-icon-tall-glyph'></span> </button> <button type='button' class='_n_J2 o365button'> <span class='_n_L2 ms-icon-font-size-18 ms-Icon--people ms-icon-wide-glyph'></span> </button> <button type='button' class='_n_J2 o365button'> <span class='_n_L2 ms-icon-font-size-18 ms-Icon--tasks'></span> </button> </div>  <div></div> </div><div> <span class='ms-fcl-tp'></span> <span class='_n_O2 _n_N2 ms-fcl-np ms-font-l'></span> <span class='_n_O2 _n_N2 ms-fcl-ns ms-font-m'></span> <button type='button' class='_n_N2 ms-font-m ms-fcl-tp'></button> <div class='_n_P2'></div> </div><div> <div class='_n_M2'></div> </div><div> <div class='_n_Q2'></div> </div><div> <span class='_n_53'></span> <span class='_n_43 ms-fwt-r ms-fcl-tp'></span> </div><div> <button autoid=\"_n_H\" type='button' class='_n_33 noMargin'></button>  </div><div> <button type='button' class='_n_V2 noMargin'></button> </div><div> <div class='_n_S2'>  <div class='_n_23'></div>  <div class='_n_13 _n_63'> <div> <button type='button' class='_n_73 noMargin'></button> </div> <div autoid=\"_n_I\" class='_n_83'></div> </div> </div>  <button autoid=\"_n_J\" type='button' class='_n_X2 noMargin'></button>  <div></div> </div><div> <div class='_n_R2 ms-bgc-nlr'> <div> <div></div>  <div class='_n_U2'> <div class='_n_93'> <div class='_n_c3'></div> <div class='_n_b3 folderPaneGradient'></div> <div> </div>  </div> </div> </div>  <div class='_n_d3'></div> </div> </div><div> <span></span> </div><div> <div class='nowrap'>  <button type='button' class='_n_j3 _n_m3'></button>  <button type='button' class='_n_k3 _n_m3'></button> <button autoid=\"_n_K\" type='button' class='_n_i3 ms-fwt-sl ms-fcl-np'></button> </div> </div><div>  <button type='button'></button>  <button type='button'></button>  <button type='button'></button> </div><div> <button type='button' class='_n_p3'></button> </div><div> <div></div> </div><div> <div class='_n_o3'> <span></span> </div> </div><div> <div autoid=\"_n_L\" class='_n_n3'>  </div> <div></div> <div></div> <div class='errorDialog'></div> <div autoid=\"_n_M\"></div> <div></div>  <div></div> <div></div>  <div></div>  <div class='projectionConductorsContainer'></div>   </div><div>  <a class='_n_u3'></a> </div><div> <div> <div class='_n_x3 nowrap _n_y3 ms-fwt-r ms-fcl-ns'> <span> <span class='_n_z3'></span> </span> <span></span> </div> </div> </div><div> <div class='_n_w3'></div> <div></div> </div><div> <div> <div autoid=\"_n_N\" class='_n_B3 nowrap _n_D3 ms-font-m ms-fwt-sl ms-fcl-neutralPrimary'> <span> <span class='_n_E3'></span> </span> <span></span> </div> </div> </div><div> <div class='_n_A3'></div> <div></div> </div><div>   <div role='treeitem'> <div autoid=\"_n_O\" aria-owns='MailFolderPane.FavoritesFolders' class='_n_F3 nowrap'> <span autoid=\"_n_P\"> <span class='_n_J3'></span> </span> <span autoid=\"_n_Q\" class='_n_H3 ms-font-m ms-fwt-sl ms-fcl-np'></span> </div> <button type='button' class='newNodeBtn'></button> </div>  <div></div> <div></div> </div><div>  <div class='_n_M3 nowrap'> <span> <span class='_n_L3'></span> </span>  <span></span> <span class='_n_N3 ms-fwt-r ms-fcl-ns'></span> </div> <div></div> </div><div> <div class='_n_P3 nowrap'> <span> <span class='_n_O3'></span> </span>  <span></span> <span class='_n_Q3 ms-fwt-r ms-fcl-np'></span> <span class='hidden'></span><span class='_n_R3 ms-fwt-sb ms-fcl-ts'></span><span class='hidden'></span> </div> </div><div> <button autoid=\"_n_V\" type='button' class='_n_04 firefoxFavorite'></button> </div><div>  <div autoid=\"_n_R\" class='_n_44'>  <div class='_n_S3 nowrap border-color-transparent'> <div class='_n_V3'> <span autoid=\"_n_S\" class='_n_W3 ms-font-m ms-fwt-sl'></span>  <div class='_n_24'> <span autoid=\"_n_T\" class='ms-font-m _n_Z3'></span> </div>   <span class='ms-font-s ms-fcl-ns'>  </span>   <button autoid=\"_n_U\" type='button' class='_n_34 ms-fwt-r ms-fcl-ns'></button>  <span></span> </div>  <div class='_n_14'></div> </div> </div> </div><div>  <div class='_n_74'> </div> </div><div>  <div autoid=\"_n_W\"></div> </div><div>  <div class='_n_84'> </div> </div><div>  <div tabindex=\"-1\">  <div role='treeitem' aria-owns='MailFolderPane.FavoritesFolders' class='firstHeaderTreeNodeRow nowrap displayInline'> <span>   <button type='button' class='firstLevelTwisty ms-fwt-r'></button> </span> <span class='firstLevelFolderHead ms-fwt-sl ms-fcl-np ms-font-l'></span> </div> <button type='button' class='newNodeBtn'></button> </div>  <div></div> <div></div> </div><div> <div> <div class='_n_f4'>  </div> <div class='_n_b4'> <div class='_n_h4'> <div> <div> </div>  <div class='groupsPadding'></div> </div> </div> </div> <div class='_n_g4'>  </div> <div></div> <div></div> </div> </div><div> <div class='_n_i4'> <div> </div> </div> </div><div> <div class='_n_k4'></div> </div><div>  <div autoid=\"_n_X\" class='_n_m4 nowrap'> <div class='_n_j4'></div> <span autoid=\"_n_Y\" class='_n_r4 treeNodeRowElement'> <span class='_n_l4'></span> </span>  <span></span> <span autoid=\"_n_Z\" class='_n_q4 ms-fwt-r ms-fcl-np'></span> <span autoid=\"_n_01\"></span> </div> <div></div> </div><div> <div class='_n_t4'></div> </div><div> <div autoid=\"_n_51\"></div> </div><div> <div class='_n_B4 ms-font-s ms-fcl-ns ms-bgc-w ms-bcl-nta'></div> </div><div>  <div autoid=\"_n_11\" class='_n_G4'>  <span class='_n_y4 nowrap'> <div class='_n_z4'> <div class='_n_s4'></div> <span autoid=\"_n_21\" class='_n_v4 treeNodeRowElement'> <span class='_n_u4'></span> </span> <span autoid=\"_n_31\" class='_n_A4 ms-font-m ms-fwt-sl ms-fcl-np'></span> <div class='_n_D4'> <span autoid=\"_n_41\" class='_n_C4 ms-font-m'></span> </div>  <span></span> </div> </span> <div class='_n_E4'> <button type='button' class='_n_F4'></button> <button type='button' class='_n_F4'></button> </div> </div>   <div class='subfolders'></div>   </div><div> <div autoid=\"_n_61\"></div> </div><div>  <div class='_n_K4'> </div> </div><div>  <div class='treeHeaderContainer'> <span class='firstHeaderTreeNodeRow nowrap'> <button type='button' class='firstLevelTwisty ms-font-weight-regular '></button> <span class='firstLevelFolderHead ms-font-weight-semilight ms-font-color-neutralPrimary ms-font-l'> </span> </span> <button type='button' class='newNodeBtn'></button> </div> </div><div> <div autoid=\"_n_71\"></div> <button type='button' class='newNodeBtn _n_M4'></button> </div><div> <div></div>  <div class='_n_L4'> </div> <div></div> </div><div> <div> </div> </div><div> <div class='_n_Q4'> <div> </div> </div> </div><div>  <div class='_n_O4'> <div></div> </div> <div></div>  <div autoid=\"_n_81\" class='_n_Q4'></div> </div><div> <div class='treeHeaderContainer'> <span role=\"tree\" class='firstHeaderTreeNodeRow nowrap'> <span> <button type='button' class='firstLevelTwisty ms-fwt-r'></button> </span> <span class='firstLevelFolderHead ms-font-weight-semilight ms-font-color-neutralPrimary ms-font-l'> </span> </span> </div> <div></div> </div><div> <div class='_n_R4'> <div class='_n_S4'> <div class='_n_T4'> <span class='ms-font-color-neutralPrimary ms-font-m'></span> </div> </div> </div> </div><div> <div class='_n_N4'> <div class='_n_P4'> <div></div> </div> </div>     </div><div> <div></div> <button autoid=\"_n_91\" type='button' class='_n_W4'></button> <div> <div></div> </div>   <div class='_n_Y4'> <div class='_n_15'></div>  <div class='_n_Z4'></div> </div> </div><div> <button autoid=\"_n_a1\" type='button' class='_n_35'></button> <div class='_n_45'></div> <div class='_n_25'> <div></div> </div> </div><div> <div class='popupContent'> <div class='_n_85 _n_55 ms-bgc-w'> <div></div> </div> <div class='_n_55 ms-bgc-w _n_75'></div> </div>  </div><div> <div class='_n_95'></div> </div>";
    _j.i.a().appendChild(n);
    return n
};
_n.a.cO = function(n) {
    return n.b
};
_n.a.eN = function(n) {
    return n.i
};
_n.a.eO = function(n) {
    return n.d
};
_n.a.hz = function(n) {
    return n.f
};
_n.a.hy = function(n) {
    return n.e
};
_n.a.cU = function(n) {
    return n.d
};
_n.a.fx = function(n) {
    return n.E()
};
_n.a.fs = function(n) {
    return n.i()
};
_n.a.fv = function(n) {
    return n.x()
};
_n.a.fu = function(n) {
    return n.bR()
};
_n.a.ft = function(n) {
    return n.g
};
_n.a.fw = function(n) {
    return n.c
};
_n.a.fk = function(n) {
    return n.t
};
_n.a.gj = function(n) {
    return n.a()
};
_n.a.cS = function(n) {
    return n.g()
};
_n.a.ev = function(n) {
    return n.q
};
_n.a.dj = function(n) {
    return n.b()
};
_n.a.di = function(n) {
    return n.i
};
_n.a.gy = function(n) {
    return n.l
};
_n.a.hd = function(n) {
    return n.l
};
_n.a.fy = function(n) {
    return n.bS()
};
_n.a.fz = function(n) {
    return n.bl
};
_n.a.fn = function(n) {
    return n.w
};
_n.a.A = function(n) {
    return n.r
};
_n.a.v = function(n) {
    return n.c()
};
_n.a.P = function(n) {
    return n.y
};
_n.a.N = function(n) {
    return n.q
};
_n.a.U = function(n) {
    return n.x
};
_n.a.O = function(n) {
    return n.p
};
_n.a.cT = function(n) {
    return n.s
};
_n.a.fm = function(n) {
    return n.G
};
_n.a.fl = function(n) {
    return n.D
};
_n.a.iy = function(n) {
    return n.z
};
_n.a.j = function(n) {
    return n.V()
};
_n.a.dS = function(n) {
    return n.i
};
_n.a.iD = function(n) {
    return n.bx()
};
_n.a.iN = function(n) {
    return ""
};
_n.a.iM = function(n) {
    return 50
};
_n.a.iC = function(n) {
    return n.m
};
_n.a.iB = function(n) {
    return n.b
};
_n.a.hH = function(n) {
    return n.b()
};
_n.a.iz = function(n) {
    return n.C()
};
_n.a.ix = function(n) {
    return n.bj()
};
_n.a.iE = function(n) {
    return n.o
};
_n.a.hB = function(n) {
    return n.bp()
};
_n.a.iA = function(n) {
    return n.B
};
_n.a.iF = function(n) {
    return n.x
};
_n.a.cM = function(n) {
    return n.v()
};
_n.a.lt = function(n) {
    return n.m
};
_n.a.gE = function(n) {
    return n.b
};
_n.a.lv = function(n) {
    return n.k
};
_n.a.iO = function(n) {
    return n.b
};
_n.a.eR = function(n) {
    return n.bG()
};
_n.a.iQ = function(n) {
    return n.e()
};
_n.a.iP = function(n) {
    return n.d()
};
_n.a.bJ = function(n) {
    return n.a
};
_n.a.kp = function(n) {
    return n.cX()
};
_n.a.kn = function(n) {
    return n.j()
};
_n.a.H = function(n) {
    return n.f
};
_n.a.eU = function(n) {
    return n.U()
};
_n.a.eT = function(n) {
    return n.m
};
_n.a.dG = function(n) {
    return n.q()
};
_n.a.iU = function(n) {
    return n.w()
};
_n.a.iT = function(n) {
    return n.v()
};
_n.a.iV = function(n) {
    return n.e()
};
_n.a.iS = function(n) {
    return n.d
};
_n.a.X = function(n) {
    return n.C()
};
_n.a.gn = function(n) {
    return n.cP()
};
_n.a.s = function(n) {
    return n.h
};
_n.a.B = function(n) {
    return n.a
};
_n.a.V = function(n) {
    return n.a()
};
_n.a.k = function(n) {
    return n.h
};
_n.a.L = function(n) {
    return n.ei
};
_n.a.cW = function(n) {
    return n.m
};
_n.a.bo = function(n) {
    return _y.d.isInstanceOfType(n) ? n.me() : null
};
_n.a.bn = function(n) {
    return _y.E.isInstanceOfType(n) ? n.x : null
};
_n.a.cR = function(n) {
    return n.eu
};
_n.a.gr = function(n) {
    return n.bo()
};
_n.a.it = function(n) {
    return n.mn()
};
_n.a.dR = function(n) {
    return n.mo()
};
_n.a.fi = function(n) {
    return n.mq()
};
_n.a.iu = function(n) {
    return n.dn
};
_n.a.ig = function(n) {
    return n.dW
};
_n.a.eV = function(n) {
    return n.h
};
_n.a.ih = function(n) {
    return n.dX
};
_n.a.fe = function(n) {
    return n.cW
};
_n.a.ff = function(n) {
    return n.bD
};
_n.a.dC = function(n) {
    return n.c
};
_n.a.ii = function(n) {
    return n.mj()
};
_n.a.dN = function(n) {
    return n.dL()
};
_n.a.M = function(n) {
    return n.b()
};
_n.a.dO = function(n) {
    return n.B
};
_n.a.o = function(n) {
    return n.f
};
_n.a.em = function(n) {
    return n.p()
};
_n.a.el = function(n) {
    return n.y()
};
_n.a.bH = function(n) {
    return n.l()
};
_n.a.er = function(n) {
    return n.m()
};
_n.a.eo = function(n) {
    return n.h()
};
_n.a.ep = function(n) {
    return n.i()
};
_n.a.eq = function(n) {
    return n.j()
};
_n.a.io = function(n) {
    return n.v
};
_n.a.ir = function(n) {
    return n.ml()
};
_n.a.hX = function(n) {
    return n.hX
};
_n.a.R = function(n) {
    return n.c
};
_n.a.ew = function(n) {
    return _y.fA.isInstanceOfType(n) ? n.H : null
};
_n.a.gq = function(n) {
    return n.bV()
};
_n.a.gp = function(n) {
    return n.b()
};
_n.a.lw = function(n) {
    return _y.D.isInstanceOfType(n) ? n.I() : null
};
_n.a.fg = function(n) {
    return _y.d.isInstanceOfType(n) ? n.mm() : null
};
_n.a.dM = function(n) {
    return _y.d.isInstanceOfType(n) ? n.jO() : null
};
_n.a.fd = function(n) {
    return _y.d.isInstanceOfType(n) ? n.r : null
};
_n.a.hI = function(n) {
    return n.n
};
_n.a.q = function(n) {
    return _j.i.isInstanceOfType(n) ? n.X : null
};
_n.a.ic = function(n) {
    return _y.d.isInstanceOfType(n) ? n.jN() : null
};
_n.a.bB = function(n) {
    return n.m
};
_n.a.kd = function(n) {
    return n.b
};
_n.a.hJ = function(n) {
    return n.B
};
_n.a.hL = function(n) {
    return n.bL()
};
_n.a.fc = function(n) {
    return n.Y
};
_n.a.cd = function(n) {
    return n.a
};
_n.a.il = function(n) {
    return n.jP()
};
_n.a.dP = function(n) {
    return n.bW
};
_n.a.cQ = function(n) {
    return n.g
};
_n.a.ls = function(n) {
    return n.bU()
};
_n.a.eA = function(n) {
    return n.g()
};
_n.a.iY = function(n) {
    return n.m
};
_n.a.g = function(n) {
    return n.X
};
_n.a.ia = function(n) {
    return n.mf()
};
_n.a.id = function(n) {
    return n.dV
};
_n.a.hW = function(n) {
    return n.dG
};
_n.a.hT = function(n) {
    return n.dD
};
_n.a.hS = function(n) {
    return n.dC
};
_n.a.hV = function(n) {
    return n.dF
};
_n.a.hU = function(n) {
    return n.dE
};
_n.a.en = function(n) {
    return n.eg()
};
_n.a.jX = function(n) {
    return n.cX()
};
_n.a.jS = function(n) {
    return n.dV()
};
_n.a.jW = function(n) {
    return n.N()
};
_n.a.df = function(n) {
    return n.ef()
};
_n.a.jR = function(n) {
    return n.dS()
};
_n.a.jZ = function(n) {
    return n.eh()
};
_n.a.jP = function(n) {
    return n.cC()
};
_n.a.jQ = function(n) {
    return n.ca()
};
_n.a.hZ = function(n) {
    return n.dO
};
_n.a.jU = function(n) {
    return n.ed()
};
_n.a.jT = function(n) {
    return n.ea()
};
_n.a.kb = function(n) {
    return n.ej()
};
_n.a.hM = function(n) {
    return 300
};
_n.a.fh = function(n) {
    return n.V
};
_n.a.jV = function(n) {
    return n.bI()
};
_n.a.ie = function(n) {
    return n.mh()
};
_n.a.km = function(n) {
    return n.bl()
};
_n.a.ka = function(n) {
    return n.ei()
};
_n.a.ko = function(n) {
    return n.cV()
};
_n.a.eX = function(n) {
    return _y.E.isInstanceOfType(n) ? n.y : null
};
_n.a.jN = function(n) {
    return n.c()
};
_n.a.gm = function(n) {
    return n.b()
};
_n.a.jM = function(n) {
    return n.b()
};
_n.a.ib = function(n) {
    return n.jM()
};
_n.a.iq = function(n) {
    return n.bG
};
_n.a.iX = function(n) {
    return _n.V.isInstanceOfType(n) ? n.p() : null
};
_n.a.jY = function(n) {
    return n.C()
};
_n.a.hR = function(n) {
    return n.hE
};
_n.a.hO = function(n) {
    return n.hB
};
_n.a.hN = function(n) {
    return n.hA
};
_n.a.hQ = function(n) {
    return n.hD
};
_n.a.hP = function(n) {
    return n.hC
};
_n.a.dh = function(n) {
    return n.d
};
_n.a.kI = function(n) {
    return n.h()
};
_n.a.kH = function(n) {
    return n.g
};
_n.a.fb = function(n) {
    return n.ig()
};
_n.a.eY = function(n) {
    return n.W
};
_n.a.jK = function(n) {
    return n.b()
};
_n.a.dQ = function(n) {
    return n.dd
};
_n.a.hY = function(n) {
    return n.dj
};
_n.a.iW = function(n) {
    return n.g
};
_n.a.dL = function(n) {
    return n.t()
};
_n.a.eZ = function(n) {
    return n.cK
};
_n.a.cb = function(n) {
    return n.d()
};
_n.a.ej = function(n) {
    return n.e()
};
_n.a.eg = function(n) {
    return n.a()
};
_n.a.eh = function(n) {
    return n.b()
};
_n.a.ei = function(n) {
    return n.c()
};
_n.a.im = function(n) {
    return n.bQ
};
_n.a.bG = function(n) {
    return n.h()
};
_n.a.hK = function(n) {
    return n.bb
};
_n.a.kq = function(n) {
    return n.cY()
};
_n.a.ik = function(n) {
    return n.bB
};
_n.a.jO = function(n) {
    return n.b()
};
_n.a.ip = function(n) {
    return n.cV
};
_n.a.fa = function(n) {
    return n.ie()
};
_n.a.ij = function(n) {
    return n.mk()
};
_n.a.is = function(n) {
    return n.P
};
_n.a.iL = function(n) {
    return n.bl
};
_n.a.iJ = function(n) {
    return n.bQ()
};
_n.a.fq = function(n) {
    return _n.J.isInstanceOfType(n) ? n.x : null
};
_n.a.iK = function(n) {
    return _n.J.isInstanceOfType(n) ? n.E : null
};
_n.a.fp = function(n) {
    return n.be
};
_n.a.iI = function(n) {
    return n.L
};
_n.a.fo = function(n) {
    return n.bd
};
_n.a.fr = function(n) {
    return _n.u.isInstanceOfType(n) ? n.c : null
};
_n.a.jb = function(n) {
    return n.a()
};
_n.a.jc = function(n) {
    return n.b()
};
_n.a.dT = function(n) {
    return n.p()
};
_n.a.dU = function(n) {
    return n.a()
};
_n.a.fL = function(n) {
    return n.l
};
_n.a.fM = function(n) {
    return n.m
};
_n.a.je = function(n) {
    return n.q
};
_n.a.cf = function(n) {
    return _n.i.isInstanceOfType(n) ? n.k : null
};
_n.a.fK = function(n) {
    return n.b
};
_n.a.eB = function(n) {
    return _n.i.isInstanceOfType(n) ? n.h : null
};
_n.a.jf = function(n) {
    return n.n
};
_n.a.jd = function(n) {
    return n.z()
};
_n.a.lH = function(n) {
    return n.s
};
_n.a.lF = function(n) {
    return _n.i.isInstanceOfType(n) ? n.ch : null
};
_n.a.lR = function(n) {
    return n.u
};
_n.a.fN = function(n) {
    return _y.k.isInstanceOfType(n) ? n.G : null
};
_n.a.eC = function(n) {
    return n.cZ()
};
_n.a.ji = function(n) {
    return n.l
};
_n.a.lQ = function(n) {
    return n.ck()
};
_n.a.lI = function(n) {
    return n.cj()
};
_n.a.lJ = function(n) {
    return n.da()
};
_n.a.lK = function(n) {
    return n.db()
};
_n.a.lL = function(n) {
    return n.dc()
};
_n.a.ly = function(n) {
    return n.ci()
};
_n.a.lz = function(n) {
    return n.cS()
};
_n.a.lA = function(n) {
    return n.cT()
};
_n.a.lB = function(n) {
    return n.cV()
};
_n.a.lC = function(n) {
    return n.cW()
};
_n.a.lD = function(n) {
    return n.cX()
};
_n.a.lG = function(n) {
    return n.dG()
};
_n.a.lS = function(n) {
    return n.ct
};
_n.a.lP = function(n) {
    return n.dj()
};
_n.a.lO = function(n) {
    return n.df()
};
_n.a.lN = function(n) {
    return n.de()
};
_n.a.lM = function(n) {
    return n.dd()
};
_n.a.lE = function(n) {
    return _n.i.isInstanceOfType(n) ? n.cf : null
};
_n.a.lx = function(n) {
    return n.bc
};
_n.a.jj = function(n) {
    return n.h
};
_n.a.jg = function(n) {
    return n.z
};
_n.a.jh = function(n) {
    return _y.k.isInstanceOfType(n) ? n.A : null
};
_n.a.kW = function(n) {
    return n.c()
};
_n.a.ml = function(n) {
    return n.a
};
_n.a.kX = function(n) {
    return n.a
};
_n.a.gG = function(n) {
    return _n.p.isInstanceOfType(n) ? n.b : null
};
_n.a.gJ = function(n) {
    return _n.p.isInstanceOfType(n) ? n.f : null
};
_n.a.dk = function(n) {
    return _n.p.isInstanceOfType(n) ? n.a : null
};
_n.a.dl = function(n) {
    return _n.p.isInstanceOfType(n) ? n.e : null
};
_n.a.gI = function(n) {
    return _n.p.isInstanceOfType(n) ? n.d : null
};
_n.a.gH = function(n) {
    return _n.p.isInstanceOfType(n) ? n.c : null
};
_n.a.kY = function(n) {
    return n.h
};
_n.a.le = function(n) {
    return n.bc
};
_n.a.gC = function(n) {
    return n.K
};
_n.a.hA = function(n) {
    return n.b
};
_n.a.lf = function(n) {
    return n.L
};
_n.a.bj = function(n) {
    return n.m
};
_n.a.gA = function(n) {
    return n.Z
};
_n.a.hi = function(n) {
    return _n.q.isInstanceOfType(n) ? n.h : null
};
_n.a.mo = function(n) {
    return _n.q.isInstanceOfType(n) ? n.g : null
};
_n.a.cn = function(n) {
    return _n.q.isInstanceOfType(n) ? n.s() : null
};
_n.a.lu = function(n) {
    return n.f
};
_n.a.mn = function(n) {
    return _n.q.isInstanceOfType(n) ? n.q() : null
};
_n.a.gB = function(n) {
    return n.ba()
};
_n.a.lb = function(n) {
    return n.bP()
};
_n.a.mp = function(n) {
    return n.i
};
_n.a.mr = function(n) {
    return n.j
};
_n.a.lc = function(n) {
    return n.C
};
_n.a.kC = function(n) {
    return _y.s.isInstanceOfType(n) ? n.bC() : null
};
_n.a.mq = function(n) {
    return n.r()
};
_n.a.lg = function(n) {
    return n.bQ()
};
_n.a.ms = function(n) {
    return n.k
};
_n.a.mm = function(n) {
    return _n.q.isInstanceOfType(n) ? n.f : null
};
_n.a.ld = function(n) {
    return n.i
};
_n.a.go = function(n) {
    return n.cT()
};
_n.a.la = function(n) {
    return n.h
};
_n.a.kZ = function(n) {
    return n.t
};
_n.a.lh = function(n) {
    return n.I()
};
_n.a.et = function(n) {
    return n.p()
};
_n.a.gT = function(n) {
    return _n.S.isInstanceOfType(n) ? n.b() : null
};
_n.a.kr = function(n) {
    return n.q()
};
_n.a.kg = function(n) {
    return n.r()
};
_n.a.kj = function(n) {
    return n.v()
};
_n.a.ke = function(n) {
    return n.p()
};
_n.a.kh = function(n) {
    return n.s()
};
_n.a.kf = function(n) {
    return n.q()
};
_n.a.ki = function(n) {
    return n.u()
};
_n.a.ey = function(n) {
    return n.bt
};
_n.a.kO = function(n) {
    return n.c
};
_n.a.kP = function(n) {
    return n.f()
};
_n.a.ln = function(n) {
    return n.c
};
_n.a.dd = function(n) {
    return n.b()
};
_n.a.jk = function(n) {
    return n.h
};
_n.a.lm = function(n) {
    return n.c()
};
_n.a.mu = function(n) {
    return n.s
};
_n.a.gD = function(n) {
    return n.bA()
};
_n.a.ez = function(n) {
    return n.bb
};
_n.a.lp = function(n) {
    return n.b()
};
_n.a.lq = function(n) {
    return n.t
};
_n.a.lr = function(n) {
    return n.q
};
_n.a.mv = function(n) {
    return n.i
};
_n.a.lk = function(n) {
    return n.bp
};
_n.a.ll = function(n) {
    return n.bq
};
_n.a.jp = function(n) {
    return n.z
};
_n.a.jn = function(n) {
    return n.bo
};
_n.a.jo = function(n) {
    return n.bp
};
_n.a.lj = function(n) {
    return n.Y
};
_n.a.jm = function(n) {
    return n.R
};
_n.a.li = function(n) {
    return n.bo
};
_n.a.kN = function(n) {
    return n.a
};
_n.a.kk = function(n) {
    return n.c()
};
_n.a.lo = function(n) {
    return n.a
};
_n.a.kl = function(n) {
    return n.l()
};
_n.a.hc = function(n) {
    return n.k()
};
_n.a.gZ = function(n) {
    return n.j()
};
_n.a.hb = function(n) {
    return n.g
};
_n.a.ha = function(n) {
    return n.f
};
_n.a.gF = function(n) {
    return n.a
};
_n.a.fO = function(n) {
    return n.b
};
_n.a.fP = function(n) {
    return n.c
};
_n.a.ca = function(n) {
    return n.w
};
_n.a.bZ = function(n) {
    return n.B
};
_n.a.C = function(n) {
    return n.bH.DisplayName
};
_n.a.bp = function(n) {
    return n.p
};
_n.a.by = function(n) {
    return n.q()
};
_n.a.gd = function(n) {
    return n.A
};
_n.a.bX = function(n) {
    return n.s
};
_n.a.cj = function(n) {
    return n.c
};
_n.a.da = function(n) {
    return n.i
};
_n.a.fU = function(n) {
    return _y.T.isInstanceOfType(n) ? n.y : null
};
_n.a.bM = function(n) {
    return n.cp
};
_n.a.js = function(n) {
    return n.l
};
_n.a.lV = function(n) {
    return n.dP
};
_n.a.bc = function(n) {
    return n.u
};
_n.a.jr = function(n) {
    return n.bo()
};
_n.a.bq = function(n) {
    return n.d()
};
_n.a.br = function(n) {
    return n.f()
};
_n.a.D = function(n) {
    return n.c()
};
_n.a.ds = function(n) {
    return _n.c.isInstanceOfType(n) ? n.bl : null
};
_n.a.dr = function(n) {
    return _n.c.isInstanceOfType(n) ? n.bs : null
};
_n.a.du = function(n) {
    return _n.c.isInstanceOfType(n) ? n.bD : null
};
_n.a.dt = function(n) {
    return _n.c.isInstanceOfType(n) ? n.bv : null
};
_n.a.bl = function(n) {
    return _n.c.isInstanceOfType(n) ? n.bu : null
};
_n.a.jq = function(n) {
    return n.bn()
};
_n.a.jI = function(n) {
    return n.t
};
_n.a.p = function(n) {
    return n.bP
};
_n.a.ci = function(n) {
    return n.bd
};
_n.a.fV = function(n) {
    return n.z
};
_n.a.dc = function(n) {
    return n.be
};
_n.a.gU = function(n) {
    return n.a.u
};
_n.a.cV = function(n) {
    return n.b
};
_n.a.E = function(n) {
    return n.b()
};
_n.a.bz = function(n) {
    return n.cl()
};
_n.a.ch = function(n) {
    return n.br
};
_n.a.dw = function(n) {
    return _g.u.isInstanceOfType(n) ? n.bH.UnreadCount : null
};
_n.a.gb = function(n) {
    return n.by
};
_n.a.W = function(n) {
    return n.ba
};
_n.a.ga = function(n) {
    return n.bx
};
_n.a.dV = function(n) {
    return n.M()
};
_n.a.ge = function(n) {
    return n.dK()
};
_n.a.dv = function(n) {
    return n.e
};
_n.a.eE = function(n) {
    return n.cv
};
_n.a.dz = function(n) {
    return n.k()
};
_n.a.lY = function(n) {
    return n.bi()
};
_n.a.me = function(n) {
    return n.cu
};
_n.a.mf = function(n) {
    return n.cG
};
_n.a.fR = function(n) {
    return n.br()
};
_n.a.cX = function(n) {
    return n.bC
};
_n.a.gc = function(n) {
    return n.K()
};
_n.a.lU = function(n) {
    return n.df()
};
_n.a.gf = function(n) {
    return n.C
};
_n.a.fQ = function(n) {
    return n.t
};
_n.a.de = function(n) {
    return n.d()
};
_n.a.gk = function(n) {
    return n.c()
};
_n.a.fF = function(n) {
    return n.k()
};
_n.a.eQ = function(n) {
    return n.z
};
_n.a.gP = function(n) {
    return _n.K.isInstanceOfType(n) ? n.dN : null
};
_n.a.fS = function(n) {
    return n.w
};
_n.a.lZ = function(n) {
    return n.dj()
};
_n.a.cY = function(n) {
    return n.bG
};
_n.a.gS = function(n) {
    return n.fs()
};
_n.a.dX = function(n) {
    return n.s
};
_n.a.dW = function(n) {
    return n.bE()
};
_n.a.bE = function(n) {
    return n.q
};
_n.a.bP = function(n) {
    return n.f
};
_n.a.bD = function(n) {
    return n.v
};
_n.a.bK = function(n) {
    return n.a
};
_n.a.jw = function(n) {
    return n.bv()
};
_n.a.ju = function(n) {
    return n.bu()
};
_n.a.jv = function(n) {
    return n.bD()
};
_n.a.fT = function(n) {
    return n.Z
};
_n.a.gg = function(n) {
    return n.M
};
_n.a.gX = function(n) {
    return n.o
};
_n.a.jx = function(n) {
    return n.bF()
};
_n.a.jB = function(n) {
    return n.A
};
_n.a.cm = function(n) {
    return n.a
};
_n.a.mk = function(n) {
    return n.d()
};
_n.a.jE = function(n) {
    return n.Z
};
_n.a.dZ = function(n) {
    return n.d
};
_n.a.ea = function(n) {
    return n.e
};
_n.a.dm = function(n) {
    return n.d
};
_n.a.fX = function(n) {
    return n.f
};
_n.a.gQ = function(n) {
    return n.c
};
_n.a.jz = function(n) {
    return n.R
};
_n.a.fY = function(n) {
    return n.h
};
_n.a.cc = function(n) {
    return n.a()
};
_n.a.jL = function(n) {
    return n.b()
};
_n.a.ec = function(n) {
    return n.y
};
_n.a.cg = function(n) {
    return n.b()
};
_n.a.bI = function(n) {
    return _y.x.isInstanceOfType(n) ? n.I : null
};
_n.a.bL = function(n) {
    return _n.c.isInstanceOfType(n) ? n.dF : null
};
_n.a.bW = function(n) {
    return n.dJ()
};
_n.a.eJ = function(n) {
    return n.b
};
_n.a.eu = function(n) {
    return _y.x.isInstanceOfType(n) ? n.l : null
};
_n.a.cZ = function(n) {
    return n.r
};
_n.a.kv = function(n) {
    return _y.x.isInstanceOfType(n) ? n.S() : null
};
_n.a.md = function(n) {
    return _n.c.isInstanceOfType(n) ? n.dt() : null
};
_n.a.gs = function(n) {
    return _y.x.isInstanceOfType(n) ? n.cI() : null
};
_n.a.ky = function(n) {
    return _y.Y.isInstanceOfType(n) ? n.bG() : null
};
_n.a.jH = function(n) {
    return n.i.t
};
_n.a.mb = function(n) {
    return n.dP()
};
_n.a.mc = function(n) {
    return n.em()
};
_n.a.kt = function(n) {
    return n.s !== 2
};
_n.a.ku = function(n) {
    return n.bR
};
_n.a.lX = function(n) {
    return n.df()
};
_n.a.kw = function(n) {
    return n.M()
};
_n.a.jF = function(n) {
    return n.bA()
};
_n.a.ks = function(n) {
    return n.bc()
};
_n.a.jG = function(n) {
    return n.bB()
};
_n.a.ed = function(n) {
    return n.D
};
_n.a.dg = function(n) {
    return n.s
};
_n.a.ma = function(n) {
    return n.b
};
_n.a.gt = function(n) {
    return n.Q
};
_n.a.kx = function(n) {
    return n.bF()
};
_n.a.mh = function(n) {
    return n.u
};
_n.a.gh = function(n) {
    return n.o
};
_n.a.jC = function(n) {
    return n.z()
};
_n.a.jA = function(n) {
    return n.bM()
};
_n.a.ce = function(n) {
    return n.a
};
_n.a.jy = function(n) {
    return n.H
};
_n.a.kB = function(n) {
    return n.b
};
_n.a.ex = function(n) {
    return n.g
};
_n.a.kA = function(n) {
    return n.x
};
_n.a.kD = function(n) {
    return n.bD()
};
_n.a.kT = function(n) {
    return n.c
};
_n.a.kU = function(n) {
    return n.a
};
_n.a.kS = function(n) {
    return n.d
};
_n.a.kR = function(n) {
    return n.c
};
_n.a.kQ = function(n) {
    return n.e()
};
_n.a.gx = function(n) {
    return n.b
};
_n.a.kL = function(n) {
    return n.d
};
_n.a.kG = function(n) {
    return n.y
};
_n.a.gu = function(n) {
    return n.I
};
_n.a.gv = function(n) {
    return n.E
};
_n.a.gw = function(n) {
    return n.G
};
_n.a.kJ = function(n) {
    return n.A
};
_n.a.kK = function(n) {
    return n.B
};
_n.a.kF = function(n) {
    return n.Y()
};
_n.a.jD = function(n) {
    return n.c
};
_n.a.jJ = function(n) {
    return n.L
};
_n.a.jl = function(n) {
    return n.g
};
_n.a.f = function(n, t) {
    n.a(t)
};
_n.a.b = function(n, t) {
    n.K(t)
};
_n.a.e = function(n, t) {
    n.ba(t)
};
_n.a.eI = function(n, t) {
    n.bu(t)
};
_n.a.K = function(n, t) {
    n.b(t)
};
_n.a.J = function(n, t) {
    n.c(t)
};
_n.a.gz = function(n, t) {
    n.O(t)
};
_n.a.he = function(n, t) {
    n.y(t)
};
_n.a.bv = function(n, t) {
    n.g = t
};
_n.a.hf = function(n, t) {
    n.q = t
};
_n.a.Q = function(n, t) {
    n.f(t)
};
_n.a.x = function(n, t) {
    n.a(t)
};
_n.a.u = function(n, t) {
    n.o(t)
};
_n.a.w = function(n, t) {
    n.j(t)
};
_n.a.z = function(n, t) {
    n.n(t)
};
_n.a.t = function(n, t) {
    n.m(t)
};
_n.a.iG = function(n, t) {
    n.bn(t)
};
_n.a.hF = function(n, t) {
    n.bH(t)
};
_n.a.hC = function(n, t) {
    n.O(t)
};
_n.a.I = function(n, t) {
    n.j(t)
};
_n.a.iH = function(n, t) {
    n.br(t)
};
_n.a.m = function(n, t) {
    n.a(t)
};
_n.a.ba = function(n, t) {
    n.Q(t)
};
_n.a.h = function(n, t) {
    n.bb(t)
};
_n.a.iR = function(n, t) {
    n.f(t)
};
_n.a.hG = function(n, t) {
    n.cE(t)
};
_n.a.l = function(n, t) {
    n.l(t)
};
_n.a.y = function(n, t) {
    n.m(t)
};
_n.a.bU = function(n, t) {
    n.y(t)
};
_n.a.eW = function(n, t) {
    n.u(t)
};
_n.a.bh = function(n, t) {
    n.p(t)
};
_n.a.r = function(n, t) {
    n.bk(t)
};
_n.a.bb = function(n, t) {
    n.b(t)
};
_n.a.bg = function(n, t) {
    n.c(t)
};
_n.a.dD = function(n, t) {
    n.j(t)
};
_n.a.fj = function(n, t) {
    n.oS(t)
};
_n.a.dE = function(n, t) {
    n.f(t)
};
_n.a.es = function(n, t) {
    n.n(t)
};
_n.a.mt = function(n, t) {
    n.b(t)
};
_n.a.fA = function(n, t) {
    n.b(t)
};
_n.a.iw = function(n, t) {
    n.oO(t)
};
_n.a.bV = function(n, t) {
    n.bV(t)
};
_n.a.fI = function(n, t) {
    n.h(t)
};
_n.a.lT = function(n, t) {
    n.j(t)
};
_n.a.gO = function(n, t) {
    n.g(t)
};
_n.a.gL = function(n, t) {
    n.h(t)
};
_n.a.gK = function(n, t) {
    n.i(t)
};
_n.a.gN = function(n, t) {
    n.l(t)
};
_n.a.gM = function(n, t) {
    n.k(t)
};
_n.a.bf = function(n, t) {
    n.k(t)
};
_n.a.kc = function(n, t) {
    n.dl(t)
};
_n.a.bx = function(n, t) {
    n.u(t)
};
_n.a.bT = function(n, t) {
    n.E(t)
};
_n.a.hs = function(n, t) {
    n.a = t
};
_n.a.T = function(n, t) {
    n.Q(t)
};
_n.a.i = function(n, t) {
    n.l = t
};
_n.a.kM = function(n, t) {
    n.L(t)
};
_n.a.iv = function(n, t) {
    n.dj = t
};
_n.a.iZ = function(n, t) {
    n.t(t)
};
_n.a.ek = function(n, t) {
    n.f(t)
};
_n.a.G = function(n, t) {
    n.r(t)
};
_n.a.dF = function(n, t) {
    n.b(t)
};
_n.a.dy = function(n, t) {
    n.o(t)
};
_n.a.hq = function(n, t) {
    n.dQ(t)
};
_n.a.cN = function(n, t) {
    n.bl(t)
};
_n.a.dK = function(n, t) {
    n.N(t)
};
_n.a.eG = function(n, t) {
    n.o(t)
};
_n.a.eH = function(n, t) {
    n.p(t)
};
_n.a.hr = function(n, t) {
    n.d(t)
};
_n.a.hp = function(n, t) {
    n.cS(t)
};
_n.a.cP = function(n, t) {
    n.A(t)
};
_n.a.hg = function(n, t) {
    n.c(t)
};
_n.a.hh = function(n, t) {
    n.d(t)
};
_n.a.mw = function(n, t) {
    n.bl = t
};
_n.a.ja = function(n, t) {
    n.a(t)
};
_n.a.mx = function(n, t) {
    n.cv(t)
};
_n.a.my = function(n, t) {
    n.n = t
};
_n.a.mA = function(n, t) {
    n.i = t
};
_n.a.mz = function(n, t) {
    n.t = t
};
_n.a.hx = function(n, t) {
    n.bc(t)
};
_n.a.hv = function(n, t) {
    n.eq(t)
};
_n.a.hw = function(n, t) {
    n.er(t)
};
_n.a.hu = function(n, t) {
    n.b(t)
};
_n.a.eP = function(n, t) {
    n.p(t)
};
_n.a.eS = function(n, t) {
    n.bb(t)
};
_n.a.ck = function(n, t) {
    n.ct(t)
};
_n.a.eF = function(n, t) {
    n.cd(t)
};
_n.a.gW = function(n, t) {
    n.db(t)
};
_n.a.bY = function(n, t) {
    n.v(t)
};
_n.a.cl = function(n, t) {
    n.bW(t)
};
_n.a.fW = function(n, t) {
    n.bL(t)
};
_n.a.bO = function(n, t) {
    n.cF(t)
};
_n.a.jt = function(n, t) {
    n.l = t
};
_n.a.lW = function(n, t) {
    n.en(t)
};
_n.a.bd = function(n, t) {
    n.v(t)
};
_n.a.gV = function(n, t) {
    n.dK(t)
};
_n.a.bs = function(n, t) {
    n.bS(t)
};
_n.a.bt = function(n, t) {
    n.bU(t)
};
_n.a.F = function(n, t) {
    n.bN(t)
};
_n.a.fE = function(n, t) {
    n.G(t)
};
_n.a.fD = function(n, t) {
    n.n(t)
};
_n.a.dJ = function(n, t) {
    n.dB(t)
};
_n.a.bk = function(n, t) {
    n.e(t)
};
_n.a.bA = function(n, t) {
    n.D(t)
};
_n.a.bC = function(n, t) {
    n.c(t)
};
_n.a.bi = function(n, t) {
    n.T(t)
};
_n.a.dB = function(n, t) {
    n.c(t)
};
_n.a.dI = function(n, t) {
    n.m(t)
};
_n.a.dA = function(n, t) {
    n.j(t)
};
_n.a.fC = function(n, t) {
    n.f(t)
};
_n.a.gl = function(n, t) {
    n.a(t)
};
_n.a.fG = function(n, t) {
    n.j(t)
};
_n.a.fB = function(n, t) {
    n.c(t)
};
_n.a.fH = function(n, t) {
    n.M = t
};
_n.a.dY = function(n, t) {
    n.V(t)
};
_n.a.bN = function(n, t) {
    n.u(t)
};
_n.a.bF = function(n, t) {
    n.C(t)
};
_n.a.bS = function(n, t) {
    n.g(t)
};
_n.a.bQ = function(n, t) {
    n.j(t)
};
_n.a.bu = function(n, t) {
    n.h(t)
};
_n.a.bR = function(n, t) {
    n.a = t
};
_n.a.bm = function(n, t) {
    n.t(t)
};
_n.a.mg = function(n, t) {
    n.dJ(t)
};
_n.a.gi = function(n, t) {
    n.H(t)
};
_n.a.gY = function(n, t) {
    n.m(t)
};
_n.a.dH = function(n, t) {
    n.bN(t)
};
_n.a.fJ = function(n, t) {
    n.d = t
};
_n.a.dn = function(n, t) {
    n.f(t)
};
_n.a.eb = function(n, t) {
    n.e = t
};
_n.a.dp = function(n, t) {
    n.g(t)
};
_n.a.fZ = function(n, t) {
    n.bj(t)
};
_n.a.gR = function(n, t) {
    n.k(t)
};
_n.a.eD = function(n, t) {
    n.i = t
};
_n.a.ee = function(n, t) {
    n.bJ(t)
};
_n.a.dq = function(n, t) {
    n.u(t)
};
_n.a.db = function(n, t) {
    n.cu(t)
};
_n.a.hD = function(n, t) {
    n.di(t)
};
_n.a.hE = function(n, t) {
    n.hr(t)
};
_n.a.ht = function(n, t) {
    n.q(t)
};
_n.a.ef = function(n, t) {
    n.H(t)
};
_n.a.kz = function(n, t) {
    n.bu(t)
};
_n.a.kE = function(n, t) {
    n.b = t
};
_n.a.kV = function(n, t) {
    n.l(t)
};
_n.a.mj = function(n, t) {
    n.e(t)
};
_n.a.mi = function(n, t) {
    n.q(t)
};
_n.a.d = function() {
    _n.a.co || (_n.a.co = new _fc.k);
    return _n.a.co
};
_n.a.cK = function() {
    _n.a.cB || (_n.a.cB = new _y.jn);
    return _n.a.cB
};
_n.a.n = function() {
    _n.a.cs || (_n.a.cs = new _fc.m);
    return _n.a.cs
};
_n.a.cJ = function() {
    _n.a.cw || (_n.a.cw = new _n.by);
    return _n.a.cw
};
_n.a.eL = function() {
    _n.a.cu || (_n.a.cu = new _n.bv);
    return _n.a.cu
};
_n.a.hm = function() {
    _n.a.cz || (_n.a.cz = new _n.bA);
    return _n.a.cz
};
_n.a.hn = function() {
    _n.a.cG || (_n.a.cG = new _n.br);
    return _n.a.cG
};
_n.a.hk = function() {
    _n.a.cv || (_n.a.cv = new _n.bw);
    return _n.a.cv
};
_n.a.hl = function() {
    _n.a.cx || (_n.a.cx = new _n.bj);
    return _n.a.cx
};
_n.a.eM = function() {
    _n.a.cy || (_n.a.cy = new _n.bk);
    return _n.a.cy
};
_n.a.eK = function() {
    _n.a.cq || (_n.a.cq = new _fc.q);
    return _n.a.cq
};
_n.a.hj = function() {
    _n.a.cr || (_n.a.cr = new _fc.t);
    return _n.a.cr
};
_n.a.cI = function() {
    _n.a.ct || (_n.a.ct = new _fc.l);
    return _n.a.ct
};
_n.a.dx = function() {
    _n.a.cA || (_n.a.cA = new _n.bB);
    return _n.a.cA
};
_n.a.cL = function() {
    _n.a.cF || (_n.a.cF = new _n.v);
    return _n.a.cF
};
_n.a.S = function() {
    _n.a.cE || (_n.a.cE = new _n.L);
    return _n.a.cE
};
_n.a.Z = function() {
    _n.a.cH || (_n.a.cH = new _n.W);
    return _n.a.cH
};
_n.a.be = function() {
    _n.a.cp || (_n.a.cp = new _fce.t);
    return _n.a.cp
};
_n.a.bw = function() {
    _n.a.cD || (_n.a.cD = new _n.bE);
    return _n.a.cD
};
_n.a.Y = function() {
    _n.a.cC || (_n.a.cC = new _n.y);
    return _n.a.cC
};
_n.a._I = function() {
    var k = "ModulePivotOptionView";
    new _j.d(k, function() {
        _n.a.a[k] === undefined && (_n.a.a[k] = [
            [
                [-1, 0, ["Text"],
                    [_n.a.cO], null, "Text", null, _n.a.f, 1, null, null, null
                ],
                [-1, 5, ["AppendSeparator"],
                    [_n.a.eN], null, "_n_3:_n_2", null, null, 0, null, null, null
                ],
                [-1, 5, ["IsSelected"],
                    [_n.a.eO], null, "_n_6 ms-fwt-sb ms-fcl-tp:ms-fwt-sl ms-fcl-np ms-fcl-b-h", null, null, 0, null, null, null
                ],
                [-1, 5, ["IsVisible"],
                    [_n.a.hz], null, "invisible", null, null, 0, _n.a.d(), null, null
                ],
                [-1, 5, ["IsTransitionEnabled"],
                    [_n.a.hy], null, "_n_4", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 0, ["AppendSeparator"],
                    [_n.a.eN], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[0].cloneNode(!0);
        var i = new _j.i(t.children[1]);
        var n = new _fc.a(t.children[0]);
        n.D(12);
        return new _j.a(t, [n, i]).l({
            Text: n
        })
    }, "", _fce.B, _fce.y, function(n) {
        return new _fce.y(n, _j.b.Instance.a(_ff.a), _j.b.Instance.a(Boolean))
    }, !1, !1, !1, 0, _n.a.a);
    var d = "MailWebpartCompactView";
    new _j.d(d, function() {
        _n.a.a[d] === undefined && (_n.a.a[d] = [null, [
                [-1, 4, null, null, null, "TextSelectionType", null, _n.a.bV, 0, null, null, 0, 2],
                [-1, 0, ["ReadingPane", "ReadingPaneConductor"],
                    [_n.a.cQ, _n.a.eA], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["ActiveNavigationStack"],
                    [_n.a.M], null, "ActiveNavigationStack", null, _n.a.K, 1, null, null, null
                ],
                [0, 0, ["ActiveNavigationStack"],
                    [_n.a.M], null, "ActiveItems", null, _n.a.J, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["FolderPickerDialog"],
                    [_n.a.dL], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["IsShown"],
                    [_n.a.A], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ],
                [0, 0, ["IsShown"],
                    [_n.a.A], _n.a.Q, "IsShown", _n.a.v, _n.a.x, 2, null, null, !1
                ],
                [0, 0, ["Title"],
                    [_n.a.P], null, "DialogTitle", null, _n.a.u, 1, null, null, null
                ],
                [0, 0, ["CloseCommand"],
                    [_n.a.N], null, "CloseCommand", null, _n.a.w, 1, null, null, null
                ],
                [0, 0, ["ContentDataContext"],
                    [_n.a.U], null, "ContentDataContext", null, _n.a.z, 1, null, null, null
                ],
                [0, 0, ["FooterButtons"],
                    [_n.a.O], null, "ButtonDataList", null, _n.a.t, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["CategoryManagementDialog"],
                    [_n.a.eZ], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["IsShown"],
                    [_n.a.cb], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ],
                [0, 0, ["IsShown"],
                    [_n.a.cb], _n.a.ek, "IsShown", _n.a.v, _n.a.x, 2, null, null, !1
                ],
                [0, 0, ["Title"],
                    [_n.a.ej], null, "DialogTitle", null, _n.a.u, 1, null, null, null
                ],
                [0, 0, ["CloseCommand"],
                    [_n.a.eg], null, "CloseCommand", null, _n.a.w, 1, null, null, null
                ],
                [0, 0, ["ContentDataContext"],
                    [_n.a.eh], null, "ContentDataContext", null, _n.a.z, 1, null, null, null
                ],
                [0, 0, ["FooterButtons"],
                    [_n.a.ei], null, "ButtonDataList", null, _n.a.t, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[35].cloneNode(!0);
        var u = new _fce.m(n.children[3], _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        u.b("CategoryManagementContentView");
        var f = new _fce.m(n.children[2], _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        f.b("FolderPickerContentView");
        var r = new _n.g(n.children[1], _j.b.Instance.a(_n.f), _j.b.Instance.a(_b.a));
        var t = new _b.m(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
        t.U(_j.f.b(56, null, null, null, "Priority", null, _n.a.I, 0, null, null, 0));
        r.C([t]);
        var i = new _j.c(n.children[0]);
        i.y("MailModuleView.ListViewTemplate");
        return new _j.a(n, [i, r, f, u])
    }, "", _y.ez, _j.c, function(n) {
        return new _j.c(n)
    }, !0, !1, !1, 0, _n.a.a);
    var g = "WebpartHeaderView._tidz._tid01";
    new _j.d(g, function() {
        _n.a.a[g] === undefined && (_n.a.a[g] = [
            [
                [-1, 0, ["SharepointSiteName"],
                    [_n.a.fp], null, "Text", null, _n.a.f, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[36].cloneNode(!0);
        var t = new _fc.a(n.children[0]);
        return new _j.a(n, [t])
    }, "", _y.dw, _fc.e, function(n) {
        return new _fc.e(n)
    }, !1, !0, !1, 0, _n.a.a);
    var p = "WebpartHeaderView._tidz";
    new _j.d(p, function() {
        _n.a.a[p] === undefined && (_n.a.a[p] = [
            [
                [-1, 0, ["SharepointSiteUrl"],
                    [_n.a.iI], null, "Href", null, _n.a.dF, 1, null, null, null
                ],
                [-1, 0, ["SharepointSiteName"],
                    [_n.a.fp], null, "Title", null, _n.a.r, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _n.a.f, 0, null, null, null, _u.R.Pp]
            ]
        ]);
        var n = _n.a.c.childNodes[37].cloneNode(!0);
        var i = new _fc.a(n.children[3]);
        var t = new _fc.e(n.children[0]);
        t.y("WebpartHeaderView._tidz._tid01");
        return new _j.a(n, [t, i])
    }, "", _y.dw, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _n.a.a);
    var w = "WebpartHeaderView";
    new _j.d(w, function() {
        _n.a.a[w] === undefined && (_n.a.a[w] = [null]);
        var t = _n.a.c.childNodes[38].cloneNode(!0);
        var n = new _j.c(t.children[0]);
        n.K(!1);
        n.y("WebpartHeaderView._tidz");
        return new _j.a(t, [n])
    }, "", _y.dw, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _n.a.a);
    var st = "WebpartPrimaryView._tid11";
    new _j.d(st, function() {
        var n = _n.a.c.childNodes[39].cloneNode(!0);
        return new _j.a(n, [])
    }, "", _y.dw, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _n.a.a);
    var b = "WebpartPrimaryView";
    new _j.d(b, function() {
        _n.a.a[b] === undefined && (_n.a.a[b] = [
            [
                [-1, 0, ["IsSharepointApp"],
                    [_n.a.fo], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ],
            [
                [-1, 4, null, null, null, "AriaLabel", null, _n.a.T, 0, null, null, null, _u.R.Sz]
            ],
            [
                [-1, 0, ["IsSharepointApp"],
                    [_n.a.fo], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ],
            [
                [-1, 0, ["ModuleConductor"],
                    [_n.a.cS], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["ActiveNavigationStack"],
                    [_n.a.dj], null, "ActiveNavigationStack", null, _n.a.K, 1, null, null, null
                ],
                [0, 0, ["ActiveItems"],
                    [_n.a.di], null, "ActiveItems", null, _n.a.J, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["OwaUserConfigurationUpdatedViewModel"],
                    [_n.a.cT], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ]
        ]);
        var i = _n.a.c.childNodes[40].cloneNode(!0);
        var e = new _j.c(i.children[2]);
        e.L(!0);
        e.y("OwaUserConfigurationUpdatedView");
        var f = new _n.g(_j.a.a(i, [1, 1]), _j.b.Instance.a(_n.f), _j.b.Instance.a(_b.a));
        f.eK(_fce.c.a, 4);
        f.z.parentNode.removeChild(f.z);
        var n = new _j.c(_j.a.a(i, [1, 0]));
        n.y("WebpartHeaderView");
        n.eK(_fce.c.a, 0);
        n.eK(_fce.c.b, 30);
        n.z.parentNode.removeChild(n.z);
        var t = new _fce.c(i.children[1], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        t.kW("_n_c2");
        t.b(2);
        t.A(-1);
        var s = new _fc.g;
        var r = new _fc.c;
        r.W(_j.f.a(["ContextParent", "TemplatedParent", "RegionManager", "MoveToNextRegionCommand"], [_n.a.g, _n.a.q, _n.a.fr, _n.a.jb], null, "Command", null, _n.a.i, 1));
        r.j("F6");
        r.k = 2;
        r.m = !1;
        var u = new _fc.c;
        u.W(_j.f.a(["ContextParent", "TemplatedParent", "RegionManager", "MoveToPreviousRegionCommand"], [_n.a.g, _n.a.q, _n.a.fr, _n.a.jc], null, "Command", null, _n.a.i, 1));
        u.j("F6");
        u.k = 3;
        u.m = !1;
        s.a([r, u]);
        t.C([s]);
        var o = new _j.c(i.children[0]);
        o.kW("headerBg headerBgColor");
        o.y("WebpartPrimaryView._tid11");
        t.a.a(n);
        t.a.a(f);
        return new _j.a(i, [o, t, n, f, e])
    }, "", _y.dw, _j.c, function(n) {
        return new _j.c(n)
    }, !0, !1, !1, 0, _n.a.a);
    var nt = "ApplicationBarView._tid21";
    new _j.d(nt, function() {
        _n.a.a[nt] === undefined && (_n.a.a[nt] = [null]);
        var t = _n.a.c.childNodes[41].cloneNode(!0);
        var n = new _fce.d(t.children[0]);
        return new _j.a(t, [n]).l({
            ListPanel: n
        })
    }, "", _y.k, _fce.a, function(n) {
        return new _fce.a(n, _j.b.Instance.a(_ff.a))
    }, !1, !0, !1, 0, _n.a.a);
    var ft = "ApplicationBarView._tid31";
    new _j.d(ft, function() {
        _n.a.a[ft] === undefined && (_n.a.a[ft] = [null]);
        var t = _n.a.c.childNodes[41].cloneNode(!0);
        var n = new _fce.d(t.children[0]);
        return new _j.a(t, [n]).l({
            ListPanel: n
        })
    }, "", _y.k, _fce.a, function(n) {
        return new _fce.a(n, _j.b.Instance.a(_ff.a))
    }, !1, !0, !1, 0, _n.a.a);
    var et = "ApplicationBarView.ButtonTemplate";
    new _j.d(et, function() {
        _n.a.a[et] === undefined && (_n.a.a[et] = [
            [
                [-1, 0, ["IsEnabled"],
                    [_n.a.dT], null, "IsEnabled", null, _n.a.dy, 1, null, null, !1
                ],
                [-1, 0, ["SelectCommand"],
                    [_n.a.dU], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ],
                [-1, 0, ["RegularImageId"],
                    [_n.a.fL], null, "ImageId", null, _n.a.l, 1, null, null, null
                ],
                [-1, 0, ["SelectedImageId"],
                    [_n.a.fM], null, "PressedImageId", null, _n.a.G, 1, null, null, null
                ],
                [-1, 0, ["AriaLabel"],
                    [_n.a.je], null, "AriaLabel", null, _n.a.ba, 1, null, null, null
                ],
                [-1, 5, ["TemplatedParent", "IsTopAppBar"],
                    [_n.a.q, _n.a.cf], null, "_n_q2", null, null, 1, null, null, null
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[42].cloneNode(!0);
        var n = new _fc.b(t.children[0]);
        n.y("ApplicationBarView.ButtonInnerTemplate");
        n.g("_n_d2");
        n.L(!0);
        return new _j.a(t, [n])
    }, "", _y.h, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _n.a.a);
    var ut = "ApplicationBarView.ButtonInnerTemplate";
    new _j.d(ut, function() {
        _n.a.a[ut] === undefined && (_n.a.a[ut] = [
            [
                [-1, 1, ["CurrentImageId"],
                    [_n.a.cM], null, "Id", null, _n.a.m, 1, null, null, null
                ],
                [-1, 1, ["TemplatedParent", "TemplatedParent", "IsTopAppBar"],
                    [_n.a.q, _n.a.q, _n.a.cf], null, "IsHidden", null, _n.a.b, 1, null, null, !0
                ]
            ],
            [
                [-1, 0, ["Text"],
                    [_n.a.fK], null, "Text", null, _n.a.f, 1, null, null, null
                ],
                [-1, 5, ["TemplatedParent", "TemplatedParent", "IsAffordanceMenuExpanded"],
                    [_n.a.q, _n.a.q, _n.a.eB], null, "invisible", null, null, 1, _n.a.d(), null, null
                ]
            ],
            [
                [-1, 1, ["CurrentImageId"],
                    [_n.a.cM], null, "Id", null, _n.a.m, 1, null, null, null
                ],
                [-1, 1, ["TemplatedParent", "TemplatedParent", "IsTopAppBar"],
                    [_n.a.q, _n.a.q, _n.a.cf], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[43].cloneNode(!0);
        var r = new _fc.d(n.children[2], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var t = new _fc.a(n.children[1]);
        var i = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [i, t, r]).l({
            Label: t
        })
    }, "", _y.h, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !1, !1, 0, _n.a.a);
    var tt = "ApplicationBarView.MenuItemTemplate";
    new _j.d(tt, function() {
        _n.a.a[tt] === undefined && (_n.a.a[tt] = [
            [
                [-1, 0, ["IsEnabled"],
                    [_n.a.dT], null, "IsEnabled", null, _n.a.dy, 1, null, null, !1
                ],
                [-1, 0, ["SelectCommand"],
                    [_n.a.dU], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[44].cloneNode(!0);
        var n = new _fc.b(t.children[0]);
        n.y("ApplicationBarView.MenuItemInnerTemplate");
        n.g("_n_d2");
        n.e("ms-fcl-w ms-bgc-ts");
        n.L(!0);
        return new _j.a(t, [n]).l({
            FocusControl: n
        })
    }, "", _y.i, _fce.n, function(n) {
        return new _fce.n(n)
    }, !1, !1, !1, 0, _n.a.a);
    var it = "ApplicationBarView.TapAndHoldButtonTemplate";
    new _j.d(it, function() {
        _n.a.a[it] === undefined && (_n.a.a[it] = [
            [
                [-1, 0, ["IsEnabled"],
                    [_n.a.dT], null, "IsEnabled", null, _n.a.dy, 1, null, null, !1
                ],
                [-1, 0, ["SelectCommand"],
                    [_n.a.dU], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ],
                [-1, 0, ["TapAndHoldCommand"],
                    [_n.a.jf], null, "TapAndHoldCommand", null, _n.a.hq, 1, null, null, null
                ],
                [-1, 0, ["RegularImageId"],
                    [_n.a.fL], null, "ImageId", null, _n.a.l, 1, null, null, null
                ],
                [-1, 0, ["SelectedImageId"],
                    [_n.a.fM], null, "PressedImageId", null, _n.a.G, 1, null, null, null
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[45].cloneNode(!0);
        var n = new _fc.b(t.children[0]);
        n.y("ApplicationBarView.ButtonInnerTemplate");
        n.g("_n_d2");
        n.L(!0);
        return new _j.a(t, [n])
    }, "", _y.h, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _n.a.a);
    var rt = "ApplicationBarView.MenuItemInnerTemplate";
    new _j.d(rt, function() {
        _n.a.a[rt] === undefined && (_n.a.a[rt] = [
            [
                [-1, 4, null, null, null, "Id", null, _n.a.m, 0, null, null, null, _y.b.bN()],
                [-1, 0, ["ShowCheckmark"],
                    [_n.a.jd], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ],
            [
                [-1, 0, ["Text"],
                    [_n.a.fK], null, "Text", null, _n.a.f, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[46].cloneNode(!0);
        var i = new _fc.a(n.children[1]);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, i])
    }, "", _y.i, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !1, !1, 0, _n.a.a);
    var y = "ApplicationBarView";
    new _j.d(y, function() {
        _n.a.a[y] === undefined && (_n.a.a[y] = [
            [
                [-1, 1, ["IsSubMenuExpanded"],
                    [_n.a.lH], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ],
                [-1, 5, ["IsTopAppBar"],
                    [_n.a.cf], null, "_n_f2", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["SubMenuItems"],
                    [_n.a.lR], null, "DataSource", null, _n.a.cN, 1, null, null, null
                ]
            ],
            [
                [-1, 5, ["IsTopAppBar"],
                    [_n.a.cf], null, "_n_f2", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 5, ["ShowCustomAppBar"],
                    [_n.a.fN], null, "_n_D2", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 5, ["IsSearchMode"],
                    [_n.a.eC], null, "_n_D2", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["ShouldHideNavigationButton"],
                    [_n.a.lQ], null, "IsHidden", null, _n.a.b, 1, null, null, !0
                ],
                [-1, 0, ["NavigationButton"],
                    [_n.a.ji], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["LeftButton0"],
                    [_n.a.lI], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["LeftButton1"],
                    [_n.a.lJ], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["LeftButton2"],
                    [_n.a.lK], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["LeftButton3"],
                    [_n.a.lL], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 5, ["IsSearchMode"],
                    [_n.a.eC], null, "_n_D2", null, null, 1, null, null, null
                ]
            ], null, [
                [-1, 1, ["CenterButton0"],
                    [_n.a.ly], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["CenterButton1"],
                    [_n.a.lz], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["CenterButton2"],
                    [_n.a.lA], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["CenterButton3"],
                    [_n.a.lB], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["CenterButton4"],
                    [_n.a.lC], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["CenterButton5"],
                    [_n.a.lD], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ], null, [
                [-1, 5, ["IsCustomButtonPanelHidden"],
                    [_n.a.lG], null, "_n_D2", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "AriaLabel", null, _n.a.ba, 0, null, null, null, _u.R.FK],
                [-1, 4, null, null, null, "ImageId", null, _n.a.l, 0, null, null, null, _y.b.Z()],
                [-1, 4, null, null, null, "PressedImageId", null, _n.a.G, 0, null, null, null, _y.b.Z()],
                [-1, 1, ["ToggleAffordanceMenuCommand"],
                    [_n.a.lS], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["RightButton3"],
                    [_n.a.lP], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["RightButton2"],
                    [_n.a.lO], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["RightButton1"],
                    [_n.a.lN], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["RightButton0"],
                    [_n.a.lM], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["IsAffordanceMenuExpanded"],
                    [_n.a.eB], null, "AriaHiddenState", null, _n.a.dK, 1, _n.a.d(), null, !1
                ],
                [-1, 5, ["IsAffordanceMenuExpanded"],
                    [_n.a.eB], null, "_n_B2:_n_C2", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["AffordanceMenuItems"],
                    [_n.a.lx], null, "DataSource", null, _n.a.cN, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["SearchVM"],
                    [_n.a.jj], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 5, ["IsSearchMode"],
                    [_n.a.eC], null, "_n_D2", null, null, 1, _n.a.d(), null, null
                ]
            ],
            [
                [-1, 1, ["DataContext", "ShowCustomAppBar"],
                    [_n.a.j, _n.a.fN], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ],
                [-1, 1, ["DataContext", "CustomAppBarTemplateId"],
                    [_n.a.j, _n.a.jh], null, "TemplateId", null, _n.a.bU, 1, null, null, null
                ],
                [-1, 0, ["CustomAppBarDataContext"],
                    [_n.a.jg], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[48].cloneNode(!0);
        var lt = new _j.c(_j.a.a(n, [1, 1]));
        var b = new _j.c(_j.a.a(n, [1, 0, 3]));
        b.y("SearchContainerViewAppBar");
        var t = new _fce.a(_j.a.a(n, [1, 0, 2, 1, 0]), _j.b.Instance.a(_ff.a));
        t.cn(!0);
        t.be("div");
        t.bd = !1;
        t.bc(function() {
            var t = _n.a.c.childNodes[47].cloneNode(!0).childNodes[0];
            var n = new _fce.n(t);
            n.y("ApplicationBarView.MenuItemTemplate");
            n.b(!1);
            return n
        });
        t.y("ApplicationBarView._tid31");
        var f = new _fce.g(_j.a.a(n, [1, 0, 2, 1]), _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
        f.x = !0;
        var ft = new _fc.g;
        var o = new _fc.c;
        o.W(_j.f.a(["ContextParent", "ContextParent", "CloseAffordanceMenuCommand"], [_n.a.g, _n.a.g, _n.a.lE], null, "Command", null, _n.a.i, 1));
        o.j("ESC");
        ft.a([o]);
        f.C([ft]);
        var it = new _j.c(_j.a.a(n, [1, 0, 2, 0, 4]));
        it.y("ApplicationBarView.ButtonTemplate");
        var rt = new _j.c(_j.a.a(n, [1, 0, 2, 0, 3]));
        rt.y("ApplicationBarView.ButtonTemplate");
        var ut = new _j.c(_j.a.a(n, [1, 0, 2, 0, 2]));
        ut.y("ApplicationBarView.ButtonTemplate");
        var g = new _j.c(_j.a.a(n, [1, 0, 2, 0, 1]));
        g.y("ApplicationBarView.ButtonTemplate");
        var u = new _fc.b(_j.a.a(n, [1, 0, 2, 0, 0]));
        u.i = !0;
        var nt = new _j.i(_j.a.a(n, [1, 0, 2, 0]));
        var tt = new _j.i(_j.a.a(n, [1, 0, 2]));
        var st = new _j.c(_j.a.a(n, [1, 0, 1, 0, 5]));
        st.y("ApplicationBarView.ButtonTemplate");
        var ht = new _j.c(_j.a.a(n, [1, 0, 1, 0, 4]));
        ht.y("ApplicationBarView.ButtonTemplate");
        var w = new _j.c(_j.a.a(n, [1, 0, 1, 0, 3]));
        w.y("ApplicationBarView.ButtonTemplate");
        var ot = new _j.c(_j.a.a(n, [1, 0, 1, 0, 2]));
        ot.y("ApplicationBarView.ButtonTemplate");
        var et = new _j.c(_j.a.a(n, [1, 0, 1, 0, 1]));
        et.y("ApplicationBarView.ButtonTemplate");
        var c = new _j.c(_j.a.a(n, [1, 0, 1, 0, 0]));
        c.y("ApplicationBarView.ButtonTemplate");
        var l = new _j.i(_j.a.a(n, [1, 0, 1, 0]));
        var vt = new _j.i(_j.a.a(n, [1, 0, 1]));
        var a = new _j.c(_j.a.a(n, [1, 0, 0, 4]));
        a.y("ApplicationBarView.ButtonTemplate");
        var s = new _j.c(_j.a.a(n, [1, 0, 0, 3]));
        s.y("ApplicationBarView.ButtonTemplate");
        var h = new _j.c(_j.a.a(n, [1, 0, 0, 2]));
        h.y("ApplicationBarView.ButtonTemplate");
        var v = new _j.c(_j.a.a(n, [1, 0, 0, 1]));
        v.y("ApplicationBarView.ButtonTemplate");
        var k = new _j.c(_j.a.a(n, [1, 0, 0, 0]));
        k.y("ApplicationBarView.TapAndHoldButtonTemplate");
        var at = new _j.i(_j.a.a(n, [1, 0, 0]));
        var d = new _j.i(_j.a.a(n, [1, 0]));
        var ct = new _j.i(n.children[1]);
        var i = new _fce.a(_j.a.a(n, [0, 0]), _j.b.Instance.a(_ff.a));
        i.bd = !1;
        i.be("div");
        i.bc(function() {
            var t = _n.a.c.childNodes[47].cloneNode(!0).childNodes[0];
            var n = new _fce.n(t);
            n.y("ApplicationBarView.MenuItemTemplate");
            n.b(!1);
            return n
        });
        i.y("ApplicationBarView._tid21");
        var r = new _fce.g(n.children[0], _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
        r.x = !0;
        r.L(!0);
        var p = new _fc.g;
        var e = new _fc.c;
        e.W(_j.f.a(["ContextParent", "CloseAffordanceSubMenuCommand"], [_n.a.g, _n.a.lF], null, "Command", null, _n.a.i, 1));
        e.j("ESC");
        p.a([e]);
        r.C([p]);
        return new _j.a(n, [r, i, ct, d, at, k, v, h, s, a, vt, l, c, et, ot, w, ht, st, tt, nt, u, g, ut, rt, it, f, t, b, lt]).l({
            appbar_submenu_panel: r,
            appbar_submenu_listview: i,
            appBar_main_panel: d,
            appbar_center_buttons_panel: l,
            appbar_custom_actions_panel: tt,
            appbar_custom_buttons_panel: nt,
            appbar_open_menu_button: u,
            appBar_menu_panel: f,
            appbar_menu_listview: t
        }).c(u)
    }, "", _y.k, _n.i, function(n) {
        return new _n.i(n, _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_n.F), _j.b.Instance.a(_b.a), _j.b.Instance.a(_y.cA), _j.b.Instance.a(_a.e), _j.b.Instance.a(_y.G))
    }, !1, !1, !1, 0, _n.a.a);
    var u = "ModuleLoaderView";
    new _j.d(u, function() {
        _n.a.a[u] === undefined && (_n.a.a[u] = [
            [
                [-1, 4, null, null, null, "BusyText", null, _n.a.hr, 0, null, null, null, _u.R.Oj],
                [-1, 0, ["IsLoading"],
                    [_n.a.kY], null, "IsBusy", null, _n.a.bg, 1, null, null, !1
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[52].cloneNode(!0);
        var t = new _b.t(n.children[0], _j.b.Instance.a(_j.o), _j.b.Instance.a(_ff.a));
        return new _j.a(n, [t])
    }, "", _y.bj, _j.c, function(n) {
        return new _j.c(n)
    }, !0, !1, !1, 0, _n.a.a);
    var f = "NavigationTreeBootTemplates.BackNavigationHeader._tidc1";
    new _j.d(f, function() {
        _n.a.a[f] === undefined && (_n.a.a[f] = [
            [
                [-1, 4, null, null, null, "Id", null, _n.a.m, 0, null, null, null, _b.l.f()]
            ]
        ]);
        var n = _n.a.c.childNodes[58].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _y.gI, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _n.a.a);
    var e = "NavigationTreeBootTemplates.BackNavigationHeader._tidd1";
    new _j.d(e, function() {
        _n.a.a[e] === undefined && (_n.a.a[e] = [
            [
                [-1, 4, null, null, null, "Id", null, _n.a.m, 0, null, null, null, _b.l.l()]
            ]
        ]);
        var n = _n.a.c.childNodes[58].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _y.gI, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _n.a.a);
    var r = "NavigationTreeBootTemplates.BackNavigationHeader";
    new _j.d(r, function() {
        _n.a.a[r] === undefined && (_n.a.a[r] = [
            [
                [-1, 4, null, null, null, "AriaLabel", null, _n.a.ba, 0, null, null, null, _u.R.PT],
                [-1, 0, ["ReturnCommand"],
                    [_n.a.et], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ],
                [-1, 5, ["IsBrowserSafari"],
                    [_n.a.gT], null, "_n_l3", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "AriaLabel", null, _n.a.ba, 0, null, null, null, _u.R.Pt],
                [-1, 0, ["ReturnCommand"],
                    [_n.a.et], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ],
                [-1, 5, ["IsBrowserSafari"],
                    [_n.a.gT], null, "_n_l3", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["ReturnCommand"],
                    [_n.a.et], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ],
                [-1, 0, ["Title"],
                    [_n.a.kr], null, "Text", null, _n.a.bf, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[59].cloneNode(!0);
        var t = new _fc.b(_j.a.a(n, [0, 2]));
        t.N(!0);
        t.A(-1);
        var u = new _fc.b(_j.a.a(n, [0, 1]));
        u.y("NavigationTreeBootTemplates.BackNavigationHeader._tidd1");
        var i = new _fc.b(_j.a.a(n, [0, 0]));
        i.y("NavigationTreeBootTemplates.BackNavigationHeader._tidc1");
        return new _j.a(n, [i, u, t])
    }, "", _y.gI, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _n.a.a);
    var n = "NavigationTreeBootTemplates.NavigationItemActions";
    new _j.d(n, function() {
        _n.a.a[n] === undefined && (_n.a.a[n] = [
            [
                [-1, 4, null, null, null, "ImageId", null, _n.a.l, 0, null, null, null, _n.b.bK()],
                [-1, 4, null, null, null, "Title", null, _n.a.r, 0, null, null, null, _u.R.RS],
                [-1, 0, ["CanUnpin"],
                    [_n.a.kg], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ],
                [-1, 0, ["UnpinCommand"],
                    [_n.a.kj], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "ImageId", null, _n.a.l, 0, null, null, null, _n.b.cJ()],
                [-1, 4, null, null, null, "Title", null, _n.a.r, 0, null, null, null, _u.R.Su],
                [-1, 0, ["CanPin"],
                    [_n.a.ke], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ],
                [-1, 0, ["PinCommand"],
                    [_n.a.kh], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "ImageId", null, _n.a.l, 0, null, null, null, _n.b.eZ()],
                [-1, 4, null, null, null, "Title", null, _n.a.r, 0, null, null, null, _u.R.Ly],
                [-1, 0, ["CanRemove"],
                    [_n.a.kf], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ],
                [-1, 0, ["RemoveCommand"],
                    [_n.a.ki], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[60].cloneNode(!0);
        var u = new _fc.b(t.children[2]);
        u.i = !0;
        var r = new _fc.b(t.children[1]);
        r.i = !0;
        var i = new _fc.b(t.children[0]);
        i.i = !0;
        return new _j.a(t, [i, r, u])
    }, "", _y.jz, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _n.a.a);
    var t = "OwaShellView._tidf1";
    new _j.d(t, function() {
        _n.a.a[t] === undefined && (_n.a.a[t] = [
            [
                [-1, 0, ["ManualPerfTracerViewModel", "StartStopPerfTracingButtonText"],
                    [_n.a.ey, _n.a.kO], null, "Text", null, _n.a.bf, 1, null, null, null
                ],
                [-1, 0, ["ManualPerfTracerViewModel", "StartStopPerfTracingCommand"],
                    [_n.a.ey, _n.a.kP], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[61].cloneNode(!0);
        var i = new _fc.b(n.children[0]);
        return new _j.a(n, [i])
    }, "", _y.c, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _n.a.a);
    var i = "OwaShellView._tidh1";
    new _j.d(i, function() {
        _n.a.a[i] === undefined && (_n.a.a[i] = [null]);
        var t = _n.a.c.childNodes[62].cloneNode(!0);
        var n = new _fce.d(t.children[0]);
        return new _j.a(t, [n]).l({
            ListPanel: n
        })
    }, "", _y.c, _fce.a, function(n) {
        return new _fce.a(n, _j.b.Instance.a(_ff.a))
    }, !1, !0, !1, 0, _n.a.a);
    var l = "OwaShellView.ProjectedPopOut";
    new _j.d(l, function() {
        _n.a.a[l] === undefined && (_n.a.a[l] = [
            [
                [-1, 1, ["DataContext"],
                    [_n.a.j], null, "PopOutProjection", null, _n.a.mw, 1, null, null, null
                ],
                [-1, 0, ["PopOutProjectionConductor"],
                    [_n.a.ln], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["ActiveNavigationStack"],
                    [_n.a.dd], null, "ActiveNavigationStack", null, _n.a.K, 1, null, null, null
                ],
                [0, 0, ["ActiveNavigationStack"],
                    [_n.a.dd], null, "ActiveItems", null, _n.a.J, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[62].cloneNode(!0);
        var t = new _n.bM(n.children[0], _j.b.Instance.a(_n.f), _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_ff.a));
        return new _j.a(n, [t])
    }, "", _y.iP, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _n.a.a);
    var a = "OwaShellView.ErrorHandler";
    new _j.d(a, function() {
        _n.a.a[a] === undefined && (_n.a.a[a] = [
            [
                [-1, 4, null, null, null, "TextSelectionType", null, _n.a.bV, 0, null, null, 0, 2]
            ],
            [
                [-1, 0, ["DetailedErrorInformation"],
                    [_n.a.jk], null, "Html", null, _n.a.ja, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[63].cloneNode(!0);
        var i = new _b.p(_j.a.a(n, [0, 0]), _j.b.Instance.a(_a.e));
        var t = new _fce.g(n.children[0], _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
        return new _j.a(n, [t, i])
    }, "", _y.dC, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _n.a.a);
    var v = "OwaShellView";
    new _j.d(v, function() {
        _n.a.a[v] === undefined && (_n.a.a[v] = [
            [
                [-1, 1, ["TransitionProvider"],
                    [_n.a.mu], null, "TransitionProvider", null, _n.a.bv, 0, null, null, null
                ],
                [-1, 0, ["PrimaryConductor"],
                    [_n.a.lm], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["ActiveNavigationStack"],
                    [_n.a.dd], null, "ActiveNavigationStack", null, _n.a.K, 1, null, null, null
                ],
                [0, 0, ["ActiveNavigationStack"],
                    [_n.a.dd], null, "ActiveItems", null, _n.a.J, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["PopOutViewModel"],
                    [_n.a.gD], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["UseSingleModuleMode"],
                    [_n.a.mv], null, "UseSingleModuleMode", null, _n.a.mz, 0, null, null, !1
                ],
                [-1, 0, ["PopupPanelControllerViewModel", "ActiveNavigationStack"],
                    [_n.a.ez, _n.a.lp], null, "ActiveNavigationStack", null, _n.a.mx, 1, null, null, null
                ],
                [-1, 0, ["PopupPanelControllerViewModel", "PopManyMethod"],
                    [_n.a.ez, _n.a.lq], null, "PopManyMethod", null, _n.a.my, 1, null, null, null
                ],
                [-1, 0, ["PopupPanelControllerViewModel", "ViewModelsCache"],
                    [_n.a.ez, _n.a.lr], null, "ViewModelsCache", null, _n.a.mA, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["ErrorHandlerViewModel"],
                    [_n.a.lk], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["IsShown"],
                    [_n.a.A], _n.a.Q, "IsShown", _n.a.v, _n.a.x, 2, null, null, !1
                ],
                [0, 0, ["Title"],
                    [_n.a.P], null, "DialogTitle", null, _n.a.u, 1, null, null, null
                ],
                [0, 0, ["CloseCommand"],
                    [_n.a.N], null, "CloseCommand", null, _n.a.w, 1, null, null, null
                ],
                [0, 0, ["ContentDataContext"],
                    [_n.a.U], null, "ContentDataContext", null, _n.a.z, 1, null, null, null
                ],
                [0, 0, ["FooterButtons"],
                    [_n.a.O], null, "ButtonDataList", null, _n.a.t, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["EventMessageBoxViewModel"],
                    [_n.a.ll], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["IsShown"],
                    [_n.a.A], _n.a.Q, "IsShown", _n.a.v, _n.a.x, 2, null, null, !1
                ],
                [0, 0, ["Title"],
                    [_n.a.P], null, "DialogTitle", null, _n.a.u, 1, null, null, null
                ],
                [0, 0, ["CloseCommand"],
                    [_n.a.N], null, "CloseCommand", null, _n.a.w, 1, null, null, null
                ],
                [0, 0, ["FooterButtons"],
                    [_n.a.O], null, "ButtonDataList", null, _n.a.t, 1, null, null, null
                ],
                [0, 0, ["ParentProjectionWindow"],
                    [_n.a.jp], null, "ParentProjectionWindow", null, _n.a.hx, 1, null, null, null
                ],
                [0, 0, ["LinkText"],
                    [_n.a.jn], null, "LinkText", null, _n.a.hv, 1, null, null, null
                ],
                [0, 0, ["LinkUrl"],
                    [_n.a.jo], null, "LinkUrl", null, _n.a.hw, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["DialogBox"],
                    [_n.a.lj], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["IsShown"],
                    [_n.a.A], _n.a.Q, "IsShown", _n.a.v, _n.a.x, 2, null, null, !1
                ],
                [0, 0, ["ContentTemplateID"],
                    [_n.a.jm], null, "ContentTemplateId", null, _n.a.hu, 1, null, null, null
                ],
                [0, 0, ["Title"],
                    [_n.a.P], null, "DialogTitle", null, _n.a.u, 1, null, null, null
                ],
                [0, 0, ["CloseCommand"],
                    [_n.a.N], null, "CloseCommand", null, _n.a.w, 1, null, null, null
                ],
                [0, 0, ["ContentDataContext"],
                    [_n.a.U], null, "ContentDataContext", null, _n.a.z, 1, null, null, null
                ],
                [0, 0, ["FooterButtons"],
                    [_n.a.O], null, "ButtonDataList", null, _n.a.t, 1, null, null, null
                ]
            ], null, [
                [-1, 0, ["AppCacheUpdaterViewModel"],
                    [_n.a.li], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["ManualPerfTracerViewModel", "PerfTracingEnabled"],
                    [_n.a.ey, _n.a.kN], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ],
            [
                [-1, 0, ["PopOutViewModel", "PopOutProjectionManager", "ProjectionCollection"],
                    [_n.a.gD, _n.a.kk, _n.a.lo], null, "DataSource", null, _n.a.cN, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[64].cloneNode(!0);
        var i = new _fce.a(n.children[9], _j.b.Instance.a(_ff.a));
        i.v("OwaShellView.ProjectedPopOut");
        i.y("OwaShellView._tidh1");
        var e = new _j.c(n.children[8]);
        e.y("OwaShellView._tidf1");
        var o = new _j.c(n.children[7]);
        o.y("MessageBoxDefaultView");
        var f = new _b.W(n.children[6], _j.b.Instance.a(_j.j));
        f.h = !0;
        var h = new _fce.m(n.children[5], _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var c = new _n.N(n.children[4], _j.b.Instance.a(_y.c), _j.b.Instance.a(_j.j), _j.b.Instance.a(_b.a), _j.b.Instance.a(_ff.b));
        var r = new _fce.m(n.children[3], _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        r.b("OwaShellView.ErrorHandler");
        var l = new _n.bN(n.children[2], _j.b.Instance.a(_n.d), _j.b.Instance.a(_b.a), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.r), _j.b.Instance.a(_j.o), _j.b.Instance.a(_ff.b));
        var t = new _j.c(n.children[1]);
        t.y("Wrapper.PopOut");
        t.L(!0);
        var u = new _n.g(n.children[0], _j.b.Instance.a(_n.f), _j.b.Instance.a(_b.a));
        var s = new _b.bW(_j.b.Instance.a(_b.i), _j.b.Instance.a(_j.o));
        u.C([s]);
        return new _j.a(n, [u, t, l, r, c, h, f, o, e, i])
    }, "", _y.c, _n.G, function(n) {
        return new _n.G(n, _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.r), _j.b.Instance.a(_j.o), _j.b.Instance.a(_a.z), _j.b.Instance.a(_a.S), _j.b.Instance.a(_b.d), _j.b.Instance.a(_a.e), _j.b.Instance.a(Boolean))
    }, !1, !1, !1, 0, _n.a.a);
    var c = "ScreenView";
    new _j.d(c, function() {
        _n.a.a[c] === undefined && (_n.a.a[c] = [
            [
                [-1, 0, ["ApplicationBarViewModel"],
                    [_n.a.kl], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[41].cloneNode(!0);
        var n = new _n.i(t.children[0], _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_n.F), _j.b.Instance.a(_b.a), _j.b.Instance.a(_y.cA), _j.b.Instance.a(_a.e), _j.b.Instance.a(_y.G));
        n.cn(!0);
        n.t(!0);
        return new _j.a(t, [n])
    }, "", _y.C, _n.z, function(n) {
        return new _n.z(n, _j.b.Instance.a(_j.bF.$$(_j.c)).a(null), _j.b.Instance.a(_b.a))
    }, !1, !1, !1, 0, _n.a.a);
    var o = "CategoryContextMenuView.BottomContextMenuList._tide2";
    new _j.d(o, function() {
        _n.a.a[o] === undefined && (_n.a.a[o] = [null]);
        var t = _n.a.c.childNodes[62].cloneNode(!0);
        var n = new _fce.d(t.children[0]);
        return new _j.a(t, [n]).l({
            ListPanel: n
        })
    }, "", _y.da, _fce.a, function(n) {
        return new _fce.a(n, _j.b.Instance.a(_ff.a))
    }, !1, !0, !1, 0, _n.a.a);
    var s = "CategoryContextMenuView.BottomContextMenuList";
    new _j.d(s, function() {
        _n.a.a[s] === undefined && (_n.a.a[s] = [
            [
                [-1, 0, ["BottomContextMenuItems"],
                    [_n.a.jl], null, "DataSource", null, _n.a.cN, 1, null, null, null
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[62].cloneNode(!0);
        var n = new _fce.a(t.children[0], _j.b.Instance.a(_ff.a));
        n.v("ContextMenuView.GenericContextMenuItem");
        n.be("div");
        n.bi("_n_65");
        n.y("CategoryContextMenuView.BottomContextMenuList._tide2");
        return new _j.a(t, [n])
    }, "", _y.da, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _n.a.a);
    var h = "CategoryContextMenuView";
    new _j.d(h, function() {
        _n.a.a[h] === undefined && (_n.a.a[h] = [null, null, null, null]);
        var n = _n.a.c.childNodes[100].cloneNode(!0);
        var r = new _j.c(_j.a.a(n, [0, 1]));
        r.y("CategoryContextMenuView.BottomContextMenuList");
        var i = new _j.c(_j.a.a(n, [0, 0, 0]));
        i.y("ContextMenuView.ContextMenuList");
        var u = new _fce.g(_j.a.a(n, [0, 0]), _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
        var t = new _j.i(n.children[0]);
        return new _j.a(n, [t, u, i, r]).l({
            PopupContent: t
        })
    }, "", _y.da, _fce.o, function(n) {
        return new _fce.o(n, _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b), _j.b.Instance.a(String))
    }, !1, !1, !1, 0, _n.a.a);
    var ot = "TempTemplate";
    new _j.d(ot, function() {
        var n = _n.a.c.childNodes[101].cloneNode(!0);
        return new _j.a(n, [])
    }, "", _g.o, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _n.a.a)
};
_n.bC.registerClass("_n.bC", _j.c);
_n.A.registerClass("_n.A", _j.c);
_n.bU.registerClass("_n.bU", _j.c);
_n.u.registerClass("_n.u", _n.bU);
_n.O.registerClass("_n.O", _n.bU);
_n.k.registerClass("_n.k", _j.c);
_n.x.registerClass("_n.x", _j.c);
_n.U.registerClass("_n.U", _j.c, _n.bT);
_n.o.registerClass("_n.o", _j.c);
_n.P.registerClass("_n.P", null, _n.bf);
_n.Z.registerClass("_n.Z", _j.c);
_n.X.registerClass("_n.X");
_n.bA.registerClass("_n.bA", null, _j.bP);
_n.bv.registerClass("_n.bv", null, _j.bP);
_n.by.registerClass("_n.by", null, _j.bP);
_n.bz.registerClass("_n.bz", null, _j.bP);
_n.bj.registerClass("_n.bj", null, _j.bP);
_n.bk.registerClass("_n.bk", null, _j.bP);
_n.bB.registerClass("_n.bB", null, _j.bP);
_n.bd.registerClass("_n.bd", _j.i);
_n.w.registerClass("_n.w", _j.c);
_n.i.registerClass("_n.i", _j.c);
_n.Q.registerClass("_n.Q", _j.i);
_n.bV.registerClass("_n.bV", _j.c, _n.bt, _ff.k);
_n.bD.registerClass("_n.bD", _n.bV);
_n.g.registerClass("_n.g", _j.i);
_n.h.registerClass("_n.h", _j.c);
_n.H.registerClass("_n.H", _j.c);
_n.F.registerClass("_n.F", _j.S);
_n.N.registerClass("_n.N", _fce.m);
_n.I.registerClass("_n.I", _j.c);
_n.bL.registerClass("_n.bL", _j.c);
_n.q.registerClass("_n.q", _n.bL);
_n.G.registerClass("_n.G", _j.c, _n.bf);
_n.bM.registerClass("_n.bM", _n.g);
_n.bN.registerClass("_n.bN", _j.i);
_n.bO.registerClass("_n.bO");
_n.z.registerClass("_n.z", _n.bV);
_n.d.registerClass("_n.d", null, _n.f);
_n.E.registerClass("_n.E", _j.c);
_n.t.registerClass("_n.t", _j.c, _ff.k);
_n.bu.registerClass("_n.bu", _j.c);
_n.m.registerClass("_n.m", _fc.a);
_n.p.registerClass("_n.p", _j.c);
_n.D.registerClass("_n.D", _j.c);
_n.bg.registerClass("_n.bg", _j.c, _b.bF);
_n.bo.registerClass("_n.bo", _j.c);
_n.C.registerClass("_n.C", _j.i);
_n.S.registerClass("_n.S", _fc.b);
_n.j.registerClass("_n.j", _j.c);
_n.e.registerClass("_n.e", _j.c);
_n.c.registerClass("_n.c", _j.c);
_n.n.registerClass("_n.n", _j.i);
_n.R.registerClass("_n.R", _j.c);
_n.r.registerClass("_n.r", _n.c);
_n.K.registerClass("_n.K", _n.r, _b.bE, _b.bF);
_n.s.registerClass("_n.s", _n.r, _b.bE, _b.bF);
BootViewsComponent.registerClass("BootViewsComponent", null, _a.kj, _j.ce);
_n.bm.registerClass("_n.bm", _fce.z);
_n.be.registerClass("_n.be", _fce.y, _b.bF);
_n.bn.registerClass("_n.bn", _j.i);
_n.y.registerClass("_n.y", null, _j.bP);
_n.bh.registerClass("_n.bh", null, _j.bP);
_n.ba.registerClass("_n.ba", null, _j.bP);
_n.L.registerClass("_n.L", null, _j.bP);
_n.bE.registerClass("_n.bE", null, _j.bP);
_n.B.registerClass("_n.B", null, _j.bP);
_n.bF.registerClass("_n.bF", null, _j.bP);
_n.v.registerClass("_n.v", null, _j.bP);
_n.bq.registerClass("_n.bq", null, _j.bP);
_n.bb.registerClass("_n.bb", null, _j.bP);
_n.bJ.registerClass("_n.bJ", null, _j.bP);
_n.M.registerClass("_n.M", null, _j.bP);
_n.br.registerClass("_n.br", null, _j.bP);
_n.bc.registerClass("_n.bc", null, _j.bP);
_n.bi.registerClass("_n.bi", null, _j.bP);
_n.W.registerClass("_n.W", null, _j.bP);
_n.bs.registerClass("_n.bs", null, _j.bP);
_n.bK.registerClass("_n.bK", _n.n);
_n.u.a = "PrimaryView";
_n.o.a = "SearchSuggestionListContainerViewTemplateId";
_n.i.a = _a.a.bh;
_n.i.d = ["LeftButton0", "LeftButton1", "LeftButton2", "LeftButton3"];
_n.i.e = ["RightButton0", "RightButton1", "RightButton2", "RightButton3"];
_n.i.b = ["CenterButton0", "CenterButton1", "CenterButton2", "CenterButton3", "CenterButton4", "CenterButton5"];
_n.i.c = 0;
_n.e.d = new _a.f("TreeNodeHelperTemplateId", String, _n.e);
_n.e.c = new _a.f("TreeLevel", Number, _n.e);
_n.e.a = new _a.f("ParentTreeNode", _n.c, _n.e);
_n.e.b = new _a.f("TreeContainer", _n.n, _n.e);
_n.c.a = null;
_n.r.a = "ms-bg-color-themeLight";
_n.r.b = "ms-bg-color-neutralLight";
_n.r.d = "ms-bg-color-white";
_n.r.c = "ms-bg-color-neutralLighter";
_n.r.e = "ms-font-weight-semibold";
_n.b.bn = null;
_n.b.bq = null;
_n.b.dG = _a.o.a().I ? "ie" : "";
_n.b.bZ = null;
_n.b.bw = null;
_n.b.br = null;
_n.b.bT = null;
_n.b.bP = null;
_n.b.bU = null;
_n.b.bV = null;
_n.b.cd = null;
_n.b.bm = null;
_n.b.bQ = null;
_n.b.cg = null;
_n.b.ci = null;
_n.b.ch = null;
_n.b.bv = null;
_n.b.bu = null;
_n.b.bs = null;
_n.b.bR = null;
_n.b.ca = null;
_n.b.bX = null;
_n.b.bt = null;
_n.b.bW = null;
_n.b.bo = null;
_n.b.cc = null;
_n.b.bp = null;
_n.b.bS = null;
_n.b.ce = null;
_n.b.bO = null;
_n.b.cb = null;
_n.b.cf = null;
_n.b.bY = null;
_n.b.bl = null;
BootViewsComponent.$$cctor();
_n.bb.a = new _n.bi;
_n.a.c = _n.a.ho();
_n.a.co = null;
_n.a.cB = null;
_n.a.cs = null;
_n.a.cw = null;
_n.a.cu = null;
_n.a.cz = null;
_n.a.cG = null;
_n.a.cv = null;
_n.a.cx = null;
_n.a.cy = null;
_n.a.cq = null;
_n.a.cr = null;
_n.a.ct = null;
_n.a.cA = null;
_n.a.cF = null;
_n.a.cE = null;
_n.a.cH = null;
_n.a.cp = null;
_n.a.cD = null;
_n.a.cC = null;
_n.a.a = {};
_n.a.$$cctor();
Type.registerNamespace("_n");
_n.Y = function(n, t, i, r, u) {
    this.bd = Function.createDelegate(this, this.s);
    this.bc = Function.createDelegate(this, this.bN);
    this.i = Function.createDelegate(this, this.bJ);
    this.h = Function.createDelegate(this, this.bD);
    this.v = Function.createDelegate(this, this.bv);
    _n.Y.initializeBase(this, [n]);
    this.r = t;
    this.be = i;
    this.bg = r;
    this.t = u;
    var o = this,
        s = this,
        f = this,
        e = this;
    this.U(_j.f.a(["ReadingPane", "IsItemInReadingPaneDeleted"], [function(n) {
        return n.g
    }, function(n) {
        return n.bT()
    }], null, "ShouldUseDeleteTransition", function(n) {
        return n.k
    }, function(n, t) {
        n.bP(t)
    }, 1))
};
_n.Y.prototype = {
    bg: null,
    t: null,
    k: !1,
    r: null,
    j: null,
    b: null,
    a: null,
    bi: null,
    be: null,
    c: !1,
    u: !1,
    l: !1,
    bP: function(n) {
        if (this.k !== n) {
            this.k = n;
            this.by("ShouldUseDeleteTransition")
        }
        return n
    },
    f: function(n) {
        var i = this.V().m.b;
        if (n && n.b !== 1e4 || i || this.t.a() === "TouchNarrow") this.c = !1;
        else {
            this.j.z.style.display = "none";
            this.c = !0
        }
        var t = !!this.a && !!this.a.a && !this.a.a.fv;
        var r = !!n && n.b === 53;
        if (!i && (t || r || this.c) || this.t.a() === "TouchNarrow") {
            _j.e.a(_a.a.p, String.format("PreTransitionIn : ShouldDoTier1 {0}", this.c ? "true" : "false"));
            _j.e.a(_a.a.p, String.format("PreTransitionIn : List view not ready {0}", t ? "true" : "false"));
            _j.e.a(_a.a.p, "PreTransitionIn : Added display none property to list view conductor div");
            this.a.z.style.display = "none";
            this.l = !0
        }
    },
    d: function(n) {
        this.c ? this.bu() : this.w();
        _j.k.a(this.z, "z-index", "")
    },
    g: function() {},
    e: function() {},
    H: function() {
        _j.c.prototype.H.call(this);
        this.j = this.B.a("PivotContainer");
        this.b = this.B.a("ListViewConductor");
        this.b.apcl("CurrentConductableView", this.v);
        this.B && (this.bi = this.B.a("SearchContainerView"))
    },
    bz: function() {
        this.b && this.b.rpcl("CurrentConductableView", this.v);
        this.b = null;
        if (this.a) {
            this.a.rpcl("IsActive", this.h);
            this.a.a.rpcl("Ready", this.i)
        }
        this.a = null;
        _j.c.prototype.bz.call(this)
    },
    s: function() {},
    bv: function(n, t) {
        if (this.a) {
            this.a.a.rpcl("Ready", this.i);
            this.a.rpcl("IsActive", this.h)
        }
        if (this.b && this.b.a) {
            this.a = this.b.a.j;
            this.a.a ? this.a.a.apcl("Ready", this.i) : this.a.apcl("IsActive", this.h)
        }
    },
    bD: function(n, t) {
        n.rpcl("IsActive", this.h);
        this.a === n && this.a.Z() && this.a.a.apcl("Ready", this.i)
    },
    bJ: function(n, t) {
        this.a && this.a.a.fv && _j.e.a(_a.a.p, "OnListViewReadyChanged : List View is ready");
        this.w()
    },
    bu: function() {
        this.u = !0;
        this.j.z.style.display = "";
        this.r.c(28, this.j.z, this.bc).a()
    },
    bN: function() {
        this.u = !1;
        this.w()
    },
    w: function() {
        if (this.l && !this.u && this.a && this.a.a.fv) {
            _j.e.a(_a.a.p, "TryTier2Animation : Removing display property on list view conductor");
            this.a.z.style.display = "";
            var n = this.a.z.contains(document.activeElement);
            n || this.a.R();
            this.r.c(28, this.a.z, this.bd).a();
            this.l = !1
        }
    }
};
_n.bl = function(n, t, i, r, u) {
    _n.bl.initializeBase(this, [n, t, i, t, u]);
    this.bR = r
};
_n.bl.prototype = {
    bR: null,
    ct: function(n) {
        var t = n === this.c;
        _fce.z.prototype.ct.call(this, n);
        t && this.bR.a(_a.ff, 5)
    }
};
_n.Y.registerClass("_n.Y", _j.c, _ff.k);
_n.bl.registerClass("_n.bl", _fce.z);
Type.registerNamespace("_n");
_n.bQ = function() {};
_n.bQ.load = function() {
    var y = "PrimaryView";
    new _j.d(y, function() {
        _n.a.a[y] === undefined && (_n.a.a[y] = [
            [
                [-1, 5, ["ShouldShowTopAppBar"],
                    [_n.a.cU], null, "_n_8", null, null, 1, _n.a.d(), null, null
                ]
            ],
            [
                [-1, 1, ["TopApplicationBarViewModel"],
                    [_n.a.fx], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 3, ["AppBarHeight"],
                    [_n.a.fs], null, _fce.c.b, null, null, 1, null, null, null
                ],
                [0, 3, ["IsApplicationBarFloat"],
                    [_n.a.fv], null, _fce.c.i, null, null, 1, null, null, null
                ],
                [0, 1, ["ShouldShowTopAppBar"],
                    [_n.a.cU], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ],
            [
                [-1, 1, ["BottomApplicationBarViewModel"],
                    [_n.a.fu], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 3, ["BottomAppBarHeight"],
                    [_n.a.ft], null, _fce.c.b, null, null, 1, null, null, null
                ],
                [0, 1, ["ShouldShowBottomAppBar"],
                    [_n.a.fw], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ],
            [
                [-1, 0, ["AppStatusBarViewModel"],
                    [_n.a.fk], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["IsHidden"],
                    [_n.a.gj], null, "IsHidden", null, _n.a.b, 1, null, null, !0
                ]
            ],
            [
                [-1, 1, ["TransitionProvider"],
                    [_n.a.fy], null, "TransitionProvider", null, _n.a.bv, 0, null, null, null
                ],
                [-1, 1, ["ViewDeactivationResolver"],
                    [_n.a.fz], null, "ViewDeactivationResolver", null, _n.a.hf, 0, null, null, null
                ],
                [-1, 0, ["ModuleConductor"],
                    [_n.a.cS], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["PreventModuleViewActivation"],
                    [_n.a.ev], null, "PreventFirstViewNavigation", null, _n.a.eI, 1, null, null, !1
                ],
                [0, 0, ["ActiveNavigationStack"],
                    [_n.a.dj], null, "ActiveNavigationStack", null, _n.a.K, 1, null, null, null
                ],
                [0, 0, ["ActiveItems"],
                    [_n.a.di], null, "ActiveItems", null, _n.a.J, 1, null, null, null
                ],
                [0, 0, ["TransitionInProgress"],
                    [_n.a.gy], _n.a.gz, "TransitionInProgress", _n.a.hd, _n.a.he, 2, null, null, !1
                ]
            ],
            [
                [-1, 0, ["RepromptViewModel"],
                    [_n.a.fn], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["IsShown"],
                    [_n.a.A], _n.a.Q, "IsShown", _n.a.v, _n.a.x, 2, null, null, !1
                ],
                [0, 0, ["Title"],
                    [_n.a.P], null, "DialogTitle", null, _n.a.u, 1, null, null, null
                ],
                [0, 0, ["CloseCommand"],
                    [_n.a.N], null, "CloseCommand", null, _n.a.w, 1, null, null, null
                ],
                [0, 0, ["ContentDataContext"],
                    [_n.a.U], null, "ContentDataContext", null, _n.a.z, 1, null, null, null
                ],
                [0, 0, ["FooterButtons"],
                    [_n.a.O], null, "ButtonDataList", null, _n.a.t, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["OwaUserConfigurationUpdatedViewModel"],
                    [_n.a.cT], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["ModernNavigationViewModel"],
                    [_n.a.fm], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["GlobalMiniaturesViewModel"],
                    [_n.a.fl], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[1].cloneNode(!0);
        var e = new _j.c(n.children[4]);
        e.L(!0);
        e.y("GlobalMiniaturesView");
        var o = new _j.c(n.children[3]);
        o.L(!0);
        o.y("ModernNavigationView.NavigationPopup");
        var s = new _j.c(n.children[2]);
        s.L(!0);
        s.y("OwaUserConfigurationUpdatedView");
        var h = new _fce.m(n.children[1], _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        h.b("PasswordPromptView");
        var f = new _n.g(_j.a.a(n, [0, 3]), _j.b.Instance.a(_n.f), _j.b.Instance.a(_b.a));
        f.eK(_fce.c.a, 4);
        f.z.parentNode.removeChild(f.z);
        var r = new _j.c(_j.a.a(n, [0, 2]));
        r.L(!0);
        r.eK(_fce.c.a, 2);
        r.eK(_fce.c.b, 0);
        r.y("AppStatusBarView");
        r.z.parentNode.removeChild(r.z);
        var t = new _n.i(_j.a.a(n, [0, 1]), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_n.F), _j.b.Instance.a(_b.a), _j.b.Instance.a(_y.cA), _j.b.Instance.a(_a.e), _j.b.Instance.a(_y.G));
        t.eK(_fce.c.a, 2);
        t.cn(!0);
        t.t(!0);
        t.D(59);
        t.z.parentNode.removeChild(t.z);
        var i = new _n.i(_j.a.a(n, [0, 0]), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_n.F), _j.b.Instance.a(_b.a), _j.b.Instance.a(_y.cA), _j.b.Instance.a(_a.e), _j.b.Instance.a(_y.G));
        i.eK(_fce.c.a, 0);
        i.k = !0;
        i.cn(!0);
        i.t(!0);
        i.z.parentNode.removeChild(i.z);
        var u = new _fce.c(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        u.b(2);
        u.a.a(i);
        u.a.a(t);
        u.a.a(r);
        u.a.a(f);
        return new _j.a(n, [u, i, t, r, f, h, s, o, e]).l({
            PrimaryContainer: u,
            TopAppBar: i,
            BottomAppBar: t
        })
    }, "", _y.j, _n.O, function(n) {
        return new _n.O(n, _j.b.Instance.a(_j.j), _j.b.Instance.a(_n.bf), _j.b.Instance.a(_y.a), _j.b.Instance.a(_b.Q))
    }, !0, !1, !1, 0, _n.a.a, 2);
    var p = "ClutterHeaderView._tid8";
    new _j.d(p, function() {
        _n.a.a[p] === undefined && (_n.a.a[p] = [
            [
                [-1, 4, null, null, null, "Id", null, _n.a.m, 0, null, null, null, _n.b.da()],
                [-1, 0, ["IsExpanded"],
                    [_n.a.H], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ],
            [
                [-1, 4, null, null, null, "Id", null, _n.a.m, 0, null, null, null, _n.b.db()],
                [-1, 0, ["IsExpanded"],
                    [_n.a.H], null, "IsHidden", null, _n.a.b, 1, null, null, !0
                ]
            ],
            [
                [-1, 0, ["HeaderLabel"],
                    [_n.a.eU], null, "Text", null, _n.a.f, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[7].cloneNode(!0);
        var r = new _fc.a(n.children[2]);
        var i = new _fc.d(n.children[1], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, i, r])
    }, "", _y.cg, _fc.j, function(n) {
        return new _fc.j(n)
    }, !1, !0, !1, 0, _n.a.a, 8);
    var v = "ClutterHeaderView";
    new _j.d(v, function() {
        _n.a.a[v] === undefined && (_n.a.a[v] = [
            [
                [-1, 0, ["HeaderClickCommand"],
                    [_n.a.eT], null, "ClickCommand", null, _n.a.h, 1, null, null, null
                ],
                [-1, 0, ["IsExpanded"],
                    [_n.a.H], _n.a.eW, "IsChecked", _n.a.dG, _n.a.bh, 2, null, null, !1
                ],
                [-1, 5, ["IsExpanded"],
                    [_n.a.H], null, "_n_s:ms-bg-color-neutralLight", null, null, 0, null, null, null
                ],
                [-1, 5, ["IsExpanded"],
                    [_n.a.H], null, "ms-bg-color-white", null, null, 0, null, null, null
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[8].cloneNode(!0);
        var n = new _fc.j(t.children[0]);
        n.y("ClutterHeaderView._tid8");
        return new _j.a(t, [n])
    }, "", _y.cg, _j.c, function(n) {
        return new _j.c(n)
    }, !0, !1, !1, 0, _n.a.a, 9);
    var l = "MailModuleTouchNarrowView._tid9._tida";
    new _j.d(l, function() {
        _n.a.a[l] === undefined && (_n.a.a[l] = [
            [
                [-1, 0, ["SearchViewModel", "DisplayedSearchFolderScope"],
                    [_n.a.X, _n.a.gn], null, "Text", null, _n.a.f, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[10].cloneNode(!0);
        var t = new _fc.a(n.children[0]);
        return new _j.a(n, [t])
    }, "", _y.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _n.a.a);
    var a = "MailModuleTouchNarrowView._tid9._tidb";
    new _j.d(a, function() {
        _n.a.a[a] === undefined && (_n.a.a[a] = [
            [
                [-1, 0, ["MailNavigation", "FolderForest", "SelectedFolder", "FolderNode"],
                    [_n.a.s, _n.a.B, _n.a.V, _n.a.k], null, "IsHidden", null, _n.a.b, 1, new _j.r([_n.a.cK(), _n.a.n()], [null, null]), null, !0
                ],
                [-1, 0, ["MailNavigation", "FolderForest", "SelectedFolder", "FolderNode"],
                    [_n.a.s, _n.a.B, _n.a.V, _n.a.k], null, "Text", null, _n.a.f, 1, _n.a.cK(), null, null
                ],
                [-1, 5, ["OfflineActivityInfo"],
                    [_n.a.L], null, "_n_G", null, null, 0, new _j.r([_n.a.n(), _n.a.d()], [null, null]), null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _n.a.f, 0, null, null, null, _u.R.UB],
                [-1, 0, ["MailNavigation", "FolderForest", "SelectedFolder"],
                    [_n.a.s, _n.a.B, _n.a.V], null, "IsHidden", null, _n.a.b, 1, new _j.r([_n.a.n(), _n.a.d()], [null, null]), null, !0
                ],
                [-1, 5, ["OfflineActivityInfo"],
                    [_n.a.L], null, "_n_G", null, null, 0, new _j.r([_n.a.n(), _n.a.d()], [null, null]), null, null
                ]
            ],
            [
                [-1, 0, ["MailNavigation", "FolderForest", "SelectedFolder", "CountNumber"],
                    [_n.a.s, _n.a.B, _n.a.V, _n.a.cW], null, "IsHidden", null, _n.a.b, 1, new _j.r([_n.a.cJ(), _n.a.n()], [null, null]), null, !0
                ],
                [-1, 0, ["MailNavigation", "FolderForest", "SelectedFolder", "CountNumber"],
                    [_n.a.s, _n.a.B, _n.a.V, _n.a.cW], null, "Text", null, _n.a.f, 1, _n.a.cJ(), null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Id", null, _n.a.m, 0, null, null, null, _n.b.dd()],
                [-1, 0, ["OfflineActivityInfo"],
                    [_n.a.L], null, "IsHidden", null, _n.a.b, 1, _n.a.n(), null, !0
                ]
            ],
            [
                [-1, 0, ["OfflineActivityInfo"],
                    [_n.a.L], null, "Text", null, _n.a.f, 1, null, null, null
                ],
                [-1, 0, ["OfflineActivityInfo"],
                    [_n.a.L], null, "IsHidden", null, _n.a.b, 1, _n.a.n(), null, !0
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[11].cloneNode(!0);
        var u = new _fc.a(_j.a.a(n, [0, 4]));
        var f = new _fc.d(_j.a.a(n, [0, 3]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var r = new _fc.a(_j.a.a(n, [0, 2]));
        var t = new _fc.a(_j.a.a(n, [0, 1]));
        var i = new _fc.a(_j.a.a(n, [0, 0]));
        return new _j.a(n, [i, t, r, f, u])
    }, "", _y.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _n.a.a);
    var d = "MailModuleTouchNarrowView._tid9";
    new _j.d(d, function() {
        _n.a.a[d] === undefined && (_n.a.a[d] = [
            [
                [-1, 0, ["DisplayInstantSearchStatusBar"],
                    [_n.a.bo], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ],
            [
                [-1, 0, ["DisplayInstantSearchStatusBar"],
                    [_n.a.bo], null, "IsHidden", null, _n.a.b, 1, null, null, !0
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[12].cloneNode(!0);
        var i = new _j.c(n.children[1]);
        i.y("MailModuleTouchNarrowView._tid9._tidb");
        var t = new _j.c(n.children[0]);
        t.y("MailModuleTouchNarrowView._tid9._tida");
        return new _j.a(n, [t, i])
    }, "", _y.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _n.a.a);
    var g = "MailModuleTouchNarrowView._tidc";
    new _j.d(g, function() {
        _n.a.a[g] === undefined && (_n.a.a[g] = [
            [
                [-1, 0, ["ClutterHeaderViewModel"],
                    [_n.a.bn], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[13].cloneNode(!0);
        var n = new _j.c(t.children[0]);
        n.y("ClutterHeaderView");
        return new _j.a(t, [n])
    }, "", _y.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _n.a.a);
    var k = "MailModuleTouchNarrowView._tidd";
    new _j.d(k, function() {
        _n.a.a[k] === undefined && (_n.a.a[k] = [
            [
                [-1, 4, null, null, null, "SpinnerSize", null, _n.a.bb, 0, null, null, 0, 0],
                [-1, 0, ["ShouldShowListLoadingIndicator"],
                    [_n.a.cR], null, "IsBusy", null, _n.a.bg, 1, null, null, !1
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[14].cloneNode(!0);
        var n = new _fce.h(t.children[0], _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a));
        n.a = 200;
        return new _j.a(t, [n])
    }, "", _y.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _n.a.a);
    var w = "MailModuleTouchNarrowView";
    new _j.d(w, function() {
        _n.a.a[w] === undefined && (_n.a.a[w] = [
            [
                [-1, 0, ["SearchViewModel"],
                    [_n.a.X], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["ShowSearchBoxForTouch"],
                    [_n.a.gr], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ],
            [
                [-1, 5, ["SearchSuggestionsVisible"],
                    [_n.a.it], null, "_n_O", null, null, 0, null, null, null
                ],
                [-1, 5, ["ShowSearchBoxForTouch"],
                    [_n.a.dR], null, "_n_Q", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 1, ["DataContext", "SwipeEnabled"],
                    [_n.a.j, _n.a.iu], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ],
                [-1, 0, ["UserActionsViewModel"],
                    [_n.a.fi], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ], null, [
                [-1, 0, ["IsMailHeaderHidden"],
                    [_n.a.ig], null, "IsHidden", null, _n.a.b, 1, null, null, !0
                ]
            ],
            [
                [-1, 2, ["ClutterHeaderViewModel", "IsExpanded"],
                    [_n.a.bn, _n.a.H], null, _fce.c.a, null, null, 1, _n.a.eL(), null, null
                ],
                [-1, 0, ["ClutterHeaderViewModel", "IsHidden"],
                    [_n.a.bn, _n.a.eV], null, "IsHidden", null, _n.a.b, 1, null, null, !0
                ]
            ],
            [
                [-1, 0, ["IsMailPivotHidden"],
                    [_n.a.ih], null, "IsHidden", null, _n.a.b, 1, null, null, !0
                ],
                [-1, 0, ["PivotOptions"],
                    [_n.a.fe], null, "Options", null, _n.a.dD, 1, null, null, null
                ],
                [-1, 0, ["PivotSelectedOptionIndex"],
                    [_n.a.ff], _n.a.fj, "SelectedOptionIndex", _n.a.dC, _n.a.dE, 2, null, null, 0
                ],
                [-1, 5, ["IsNonLatinLanguageClass"],
                    [_n.a.ii], null, "_n_L", null, null, 0, null, null, null
                ]
            ], null, [
                [-1, 0, ["ListViewConductor"],
                    [_n.a.dN], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["ActiveNavigationStack"],
                    [_n.a.M], null, "ActiveNavigationStack", null, _n.a.K, 1, null, null, null
                ],
                [0, 0, ["ActiveNavigationStack"],
                    [_n.a.M], null, "ActiveItems", null, _n.a.J, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["MessageBoxViewModel"],
                    [_n.a.dO], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["CurrentMailListViewModel", "ExtendedBaseListViewModel", "ReportPhishDialog"],
                    [_n.a.o, _n.a.em, _n.a.el], null, "DataContext", null, _n.a.e, 1, null, null, null
                ],
                [0, 0, ["IsShown"],
                    [_n.a.bH], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ],
                [0, 0, ["IsShown"],
                    [_n.a.bH], _n.a.es, "IsShown", _n.a.v, _n.a.x, 2, null, null, !1
                ],
                [0, 0, ["Title"],
                    [_n.a.er], null, "DialogTitle", null, _n.a.u, 1, null, null, null
                ],
                [0, 0, ["CloseCommand"],
                    [_n.a.eo], null, "CloseCommand", null, _n.a.w, 1, null, null, null
                ],
                [0, 0, ["ContentDataContext"],
                    [_n.a.ep], null, "ContentDataContext", null, _n.a.z, 1, null, null, null
                ],
                [0, 0, ["FooterButtons"],
                    [_n.a.eq], null, "ButtonDataList", null, _n.a.t, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[15].cloneNode(!0);
        var s = new _fce.m(n.children[3], _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        s.b("ReportPhishView");
        var c = new _j.c(n.children[2]);
        c.y("MessageBoxDefaultView");
        var e = new _n.g(_j.a.a(n, [1, 1, 4]), _j.b.Instance.a(_n.f), _j.b.Instance.a(_b.a));
        e.z.parentNode.removeChild(e.z);
        var f = new _j.c(_j.a.a(n, [1, 1, 3]));
        f.eK(_fce.c.a, 0);
        f.y("MailModuleTouchNarrowView._tidd");
        f.z.parentNode.removeChild(f.z);
        var r = new _n.bl(_j.a.a(n, [1, 1, 2]), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.o), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.b));
        r.eK(_fce.c.a, 0);
        r.eK(_fce.c.b, 39);
        r.z.parentNode.removeChild(r.z);
        var u = new _j.c(_j.a.a(n, [1, 1, 1]));
        u.eK(_fce.c.b, 33);
        u.y("MailModuleTouchNarrowView._tidc");
        u.z.parentNode.removeChild(u.z);
        var i = new _j.c(_j.a.a(n, [1, 1, 0]));
        i.eK(_fce.c.a, 0);
        i.eK(_fce.c.b, 33);
        i.y("MailModuleTouchNarrowView._tid9");
        i.z.parentNode.removeChild(i.z);
        var t = new _fce.c(_j.a.a(n, [1, 1]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        t.b(2);
        var h = new _j.c(_j.a.a(n, [1, 0]));
        h.y("UserActionsInformationView");
        var l = new _j.i(n.children[1]);
        var o = new _n.k(n.children[0]);
        o.L(!0);
        o.y("SearchContainerView");
        t.a.a(i);
        t.a.a(u);
        t.a.a(r);
        t.a.a(f);
        t.a.a(e);
        return new _j.a(n, [o, l, h, t, i, u, r, f, e, c, s]).l({
            SearchContainerView: o,
            PivotContainer: t,
            ListViewConductor: e
        })
    }, "", _y.d, _n.Y, function(n) {
        return new _n.Y(n, _j.b.Instance.a(_b.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.x), _j.b.Instance.a(_y.a))
    }, !0, !1, !1, 0, _n.a.a);
    var b = "FavoritesFolderTreeHeaderView.FolderTreeNodeHelperTemplate";
    new _j.d(b, function() {
        _n.a.a[b] === undefined && (_n.a.a[b] = [
            [
                [-1, 1, ["ParentTreeNode"],
                    [_n.a.bq], null, "ParentTreeNode", null, _n.a.bs, 1, null, null, null
                ],
                [-1, 1, ["TreeLevel"],
                    [_n.a.br], null, "TreeLevel", null, _n.a.bt, 1, null, null, 0
                ],
                [-1, 1, ["TreeContainer"],
                    [_n.a.D], null, "TreeContainer", null, _n.a.F, 1, null, null, null
                ],
                [-1, 0, ["FolderNode", "DisplayName"],
                    [_n.a.k, _n.a.C], null, "TreeNodeDisplayName", null, _n.a.ck, 1, null, null, null
                ],
                [-1, 0, ["DefaultSelected"],
                    [_n.a.bc], null, "IsSelected", null, _n.a.bd, 1, null, null, !1
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[62].cloneNode(!0);
        var n = new _n.c(t.children[0], _j.b.Instance.a(_n.d), _j.b.Instance.a(_j.o));
        n.y("FavoritesFolderTreeNodeView");
        return new _j.a(t, [n]).l({
            TreeNodeId: n
        })
    }, "", _y.bR, _n.e, function(n) {
        return new _n.e(n)
    }, !1, !1, !1, 0, _n.a.a, 76);
    var c = "FavoritesFolderTreeHeaderView";
    new _j.d(c, function() {
        _n.a.a[c] === undefined && (_n.a.a[c] = [null, null, [
                [-1, 4, null, null, null, "AriaLabel", null, _n.a.T, 0, null, null, null, _u.R.CE],
                [-1, 1, ["ToggleIconState"],
                    [_n.a.p], null, "Id", null, _n.a.m, 1, _n.a.S(), !0, null
                ],
                [-1, 1, ["ToggleIconState"],
                    [_n.a.p], null, "AriaRole", null, _n.a.bA, 1, _n.a.bw(), null, 0
                ],
                [-1, 1, ["ToggleIconState"],
                    [_n.a.p], null, "AriaCheckedState", null, _n.a.bC, 1, _n.a.Z(), null, 0
                ],
                [-1, 1, ["AriaId"],
                    [_n.a.bz], null, "AriaLabelledBy", null, _n.a.bi, 1, _n.a.Y(), "foldername expand", null
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _n.a.f, 0, null, null, null, _u.R.CE]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _n.a.f, 0, null, null, null, _u.R.Dr]
            ],
            [
                [-1, 1, ["IsCollapsed"],
                    [_n.a.E], null, "IsHidden", null, _n.a.b, 1, null, null, !0
                ],
                [-1, 0, ["FavoriteFolderViewModels"],
                    [_n.a.cV], null, "DataSource", null, _n.a.bk, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[71].cloneNode(!0);
        var f = new _n.e(n.children[1]);
        f.a("FavoritesFolderTreeHeaderView.FolderTreeNodeHelperTemplate");
        var u = new _fc.a(_j.a.a(n, [0, 2]));
        u.bh("foldername");
        var t = new _fc.a(_j.a.a(n, [0, 1]));
        t.bh("expand");
        t.D(46);
        t.K(!0);
        var e = new _b.R(_j.a.a(n, [0, 0, 0]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var r = new _j.i(_j.a.a(n, [0, 0]));
        var i = new _j.i(n.children[0]);
        return new _j.a(n, [i, r, e, t, u, f]).l({
            TreeNodeContainer: i,
            TwistyContainer: r
        })
    }, "", _y.T, _n.c, function(n) {
        return new _n.c(n, _j.b.Instance.a(_n.d), _j.b.Instance.a(_j.o))
    }, !1, !1, !1, 0, _n.a.a, 77);
    var r = "FavoritesFolderTreeNodeView";
    new _j.d(r, function() {
        _n.a.a[r] === undefined && (_n.a.a[r] = [
            [
                [-1, 5, ["ShowTreeNodeSelected"],
                    [_n.a.ch], null, "ms-bgc-tl", null, null, 1, null, null, null
                ]
            ], null, [
                [-1, 4, null, null, null, "AriaLabel", null, _n.a.T, 0, null, null, null, _u.R.CE],
                [-1, 1, ["ToggleIconState"],
                    [_n.a.p], null, "Id", null, _n.a.m, 1, _n.a.S(), !1, null
                ],
                [-1, 1, ["ToggleIconState"],
                    [_n.a.p], null, "AriaRole", null, _n.a.bA, 1, _n.a.bw(), null, 0
                ],
                [-1, 1, ["ToggleIconState"],
                    [_n.a.p], null, "AriaCheckedState", null, _n.a.bC, 1, _n.a.Z(), null, 0
                ],
                [-1, 1, ["AriaId"],
                    [_n.a.bz], null, "AriaLabelledBy", null, _n.a.bi, 1, _n.a.Y(), "foldername expand", null
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _n.a.f, 0, null, null, null, _u.R.CE]
            ],
            [
                [-1, 0, ["FolderNode", "DisplayName"],
                    [_n.a.k, _n.a.C], null, "Title", null, _n.a.r, 1, null, null, null
                ],
                [-1, 0, ["FolderNode", "DisplayName"],
                    [_n.a.k, _n.a.C], null, "Text", null, _n.a.f, 1, null, null, null
                ],
                [-1, 5, ["FolderNode", "UnreadCount"],
                    [_n.a.k, _n.a.dw], null, "ms-fwt-sb", null, null, 0, new _j.r([_n.a.be(), _n.a.d()], [null, null]), null, null
                ],
                [-1, 5, ["FolderNode", "UnreadCount"],
                    [_n.a.k, _n.a.dw], null, "ms-fcl-ns", null, null, 0, _n.a.be(), null, null
                ]
            ],
            [
                [-1, 0, ["CountNumberDisplayOpenBracket"],
                    [_n.a.gb], null, "Text", null, _n.a.f, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["CountNumberDisplay"],
                    [_n.a.W], null, "Text", null, _n.a.f, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["CountNumberDisplayCloseBracket"],
                    [_n.a.ga], null, "Text", null, _n.a.f, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[72].cloneNode(!0);
        var o = new _fc.a(_j.a.a(n, [0, 5]));
        var e = new _fc.a(_j.a.a(n, [0, 4]));
        var s = new _fc.a(_j.a.a(n, [0, 3]));
        var f = new _fc.a(_j.a.a(n, [0, 2]));
        f.bh("foldername");
        var t = new _fc.a(_j.a.a(n, [0, 1]));
        t.bh("expand");
        t.D(46);
        t.K(!0);
        var h = new _b.R(_j.a.a(n, [0, 0, 0]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var u = new _j.i(_j.a.a(n, [0, 0]));
        var i = new _j.i(n.children[0]);
        return new _j.a(n, [i, u, h, t, f, s, e, o]).l({
            TreeNodeContainer: i,
            TwistyContainer: u
        })
    }, "", _y.bR, _n.c, function(n) {
        return new _n.c(n, _j.b.Instance.a(_n.d), _j.b.Instance.a(_j.o))
    }, !1, !1, !1, 0, _n.a.a, 78);
    var u = "FavoritesFolderTreeView.FolderTreeNodeHelperTemplate";
    new _j.d(u, function() {
        _n.a.a[u] === undefined && (_n.a.a[u] = [
            [
                [-1, 1, ["TreeContainer"],
                    [_n.a.D], null, "TreeContainer", null, _n.a.F, 1, null, null, null
                ],
                [-1, 0, ["IsFavoritesFolderTreeCollapsed"],
                    [_n.a.dX], _n.a.dY, "IsCollapsed", _n.a.E, _n.a.bN, 2, null, null, !1
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[62].cloneNode(!0);
        var n = new _n.c(t.children[0], _j.b.Instance.a(_n.d), _j.b.Instance.a(_j.o));
        n.t(!0);
        n.E(!0);
        n.y("FavoritesFolderTreeHeaderView");
        return new _j.a(t, [n]).l({
            TreeNodeId: n
        })
    }, "", _y.T, _n.e, function(n) {
        return new _n.e(n)
    }, !1, !1, !1, 0, _n.a.a, 81);
    var i = "FavoritesFolderTreeView";
    new _j.d(i, function() {
        _n.a.a[i] === undefined && (_n.a.a[i] = [
            [
                [-1, 1, ["DataContext"],
                    [_n.a.j], null, "DataSource", null, _n.a.bu, 1, null, null, null
                ],
                [-1, 1, ["ForestContainer"],
                    [_n.a.bK], null, "ForestContainer", null, _n.a.bR, 1, null, null, null
                ],
                [-1, 0, ["IsFavoritesEmpty"],
                    [_n.a.dW], null, "IsHidden", null, _n.a.b, 1, null, null, !0
                ],
                [-1, 0, ["SelectedFolder"],
                    [_n.a.bE], _n.a.bF, "SelectedTreeNodeData", _n.a.bP, _n.a.bS, 2, null, null, null
                ],
                [-1, 0, ["ActivateFolderSelectionCommand"],
                    [_n.a.bD], null, "ActivateTreeNodeSelectionCommand", null, _n.a.bQ, 0, null, null, null
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[75].cloneNode(!0);
        var n = new _n.n(t.children[0]);
        n.b("FavoritesFolderTreeView.FolderTreeNodeHelperTemplate");
        return new _j.a(t, [n])
    }, "", _y.T, _n.j, function(n) {
        return new _n.j(n)
    }, !0, !1, !1, 0, _n.a.a, 82);
    var n = "FolderForestView";
    new _j.d(n, function() {
        _n.a.a[n] === undefined && (_n.a.a[n] = [null, [
            [-1, 1, ["ScrollRegion"],
                [_n.a.cm], null, "ScrollRegion", null, _n.a.eD, 1, null, null, null
            ],
            [-1, 0, ["FolderTrees"],
                [_n.a.dZ], null, "DataSource", null, _n.a.dn, 1, null, null, null
            ],
            [-1, 0, ["SelectedTree"],
                [_n.a.ea], _n.a.eb, "SelectedTreeData", _n.a.dm, _n.a.dp, 2, null, null, null
            ]
        ]]);
        var t = _n.a.c.childNodes[80].cloneNode(!0);
        var r = new _n.C(_j.a.a(t, [0, 0]), _j.b.Instance.a(_n.d));
        var i = new _fce.g(t.children[0], _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
        return new _j.a(t, [i, r]).l({
            FolderScrollRegion: i
        })
    }, "", _y.de, _n.E, function(n) {
        return new _n.E(n, _j.b.Instance.a(_j.o))
    }, !1, !1, !1, 0, _n.a.a, 87);
    var t = "MailFolderTreeNodeView.FolderTreeNodeHelperTemplate";
    new _j.d(t, function() {
        _n.a.a[t] === undefined && (_n.a.a[t] = [
            [
                [-1, 1, ["ParentTreeNode"],
                    [_n.a.bq], null, "ParentTreeNode", null, _n.a.bs, 1, null, null, null
                ],
                [-1, 1, ["TreeLevel"],
                    [_n.a.br], null, "TreeLevel", null, _n.a.bt, 1, null, null, 0
                ],
                [-1, 1, ["TreeContainer"],
                    [_n.a.D], null, "TreeContainer", null, _n.a.F, 1, null, null, null
                ],
                [-1, 0, ["IsFolderCollapsed"],
                    [_n.a.ec], _n.a.ee, "IsCollapsed", _n.a.cg, _n.a.dq, 2, null, null, !1
                ],
                [-1, 0, ["HasChildren"],
                    [_n.a.bI], null, "HasChildren", null, _n.a.bm, 1, null, null, !1
                ],
                [-1, 0, ["DefaultSelected"],
                    [_n.a.bc], null, "IsSelected", null, _n.a.bd, 1, null, null, !1
                ]
            ]
        ]);
        var i = _n.a.c.childNodes[62].cloneNode(!0);
        var n = new _n.s(i.children[0], _j.b.Instance.a(_n.d), _j.b.Instance.a(_j.o), _j.b.Instance.a(_a.e), _j.b.Instance.a(_a.z));
        n.f = !0;
        n.be("_n_o4");
        n.y("MailFolderTreeNodeView");
        return new _j.a(i, [n]).l({
            TreeNodeId: n
        })
    }, "", _y.bI, _n.e, function(n) {
        return new _n.e(n)
    }, !1, !1, !1, 0, _n.a.a, 88);
    var s = "MailFolderTreeNodeView._tidv1";
    new _j.d(s, function() {
        _n.a.a[s] === undefined && (_n.a.a[s] = [
            [
                [-1, 4, null, null, null, "SpinnerSize", null, _n.a.bb, 0, null, null, 0, 0],
                [-1, 1, ["TemplatedParent", "IsLoading"],
                    [_n.a.q, _n.a.bL], null, "IsBusy", null, _n.a.bg, 1, null, null, !1
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[81].cloneNode(!0);
        var n = new _fce.h(t.children[0], _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a));
        n.a = 0;
        return new _j.a(t, [n])
    }, "", _y.bI, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _n.a.a, 89);
    var h = "MailFolderTreeNodeView";
    new _j.d(h, function() {
        _n.a.a[h] === undefined && (_n.a.a[h] = [
            [
                [-1, 5, ["FolderOrRemoteFolderDisplayName"],
                    [_n.a.bW], null, "hidden", null, null, 0, _n.a.cI(), null, null
                ],
                [-1, 5, ["TreeLevel"],
                    [_n.a.ci], null, "_n_p4", null, null, 1, _n.a.be(), null, null
                ],
                [-1, 5, ["IsSelected"],
                    [_n.a.dv], null, "ms-bgc-tl", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["FolderNode", "IsSharedFolder"],
                    [_n.a.k, _n.a.eJ], null, "IsHidden", null, _n.a.b, 1, _n.a.d(), null, !0
                ]
            ], null, [
                [-1, 1, ["ToggleIconState"],
                    [_n.a.p], null, "Id", null, _n.a.m, 1, _n.a.S(), !0, null
                ],
                [-1, 1, ["ToggleIconState"],
                    [_n.a.p], null, "AriaRole", null, _n.a.bA, 1, _n.a.bw(), null, 0
                ],
                [-1, 1, ["ToggleIconState"],
                    [_n.a.p], null, "AriaCheckedState", null, _n.a.bC, 1, _n.a.Z(), null, 0
                ],
                [-1, 1, ["AriaId"],
                    [_n.a.bz], null, "AriaLabelledBy", null, _n.a.bi, 1, _n.a.Y(), "foldername expand", null
                ],
                [-1, 5, ["IsLoading"],
                    [_n.a.bL], null, "invisible", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _n.a.f, 0, null, null, null, _u.R.CE]
            ],
            [
                [-1, 0, ["FolderNode", "DisplayName"],
                    [_n.a.k, _n.a.C], null, "Title", null, _n.a.r, 1, null, null, null
                ],
                [-1, 0, ["FolderNode", "DisplayName"],
                    [_n.a.k, _n.a.C], null, "Text", null, _n.a.f, 1, null, null, null
                ],
                [-1, 5, ["CountNumberDisplay"],
                    [_n.a.W], null, "ms-fwt-sb", null, null, 0, new _j.r([_n.a.n(), _n.a.d()], [null, null]), null, null
                ],
                [-1, 5, ["CountNumberDisplay"],
                    [_n.a.W], null, "ms-fcl-ns", null, null, 0, _n.a.n(), null, null
                ]
            ],
            [
                [-1, 0, ["CountNumberDisplay"],
                    [_n.a.W], null, "Text", null, _n.a.f, 1, null, null, null
                ],
                [-1, 5, ["HasItemCount"],
                    [_n.a.cX], null, "_n_n4 ms-fwt-sb ms-fcl-ts", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 1, ["IsCollapsed"],
                    [_n.a.E], null, "IsHidden", null, _n.a.b, 1, null, null, !0
                ],
                [-1, 0, ["SubFolders"],
                    [_n.a.eu], null, "DataSource", null, _n.a.bk, 1, null, null, null
                ]
            ]
        ]);
        var n = _n.a.c.childNodes[82].cloneNode(!0);
        var u = new _n.e(n.children[1]);
        u.a("MailFolderTreeNodeView.FolderTreeNodeHelperTemplate");
        var o = new _fc.a(_j.a.a(n, [0, 4]));
        var e = new _fc.a(_j.a.a(n, [0, 3]));
        e.bh("foldername");
        var t = new _fc.a(_j.a.a(n, [0, 2]));
        t.bh("expand");
        t.D(46);
        t.K(!0);
        var s = new _b.R(_j.a.a(n, [0, 1, 0]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var i = new _j.i(_j.a.a(n, [0, 1]));
        var r = new _j.c(_j.a.a(n, [0, 0]));
        r.y("MailFolderTreeNodeView._tidv1");
        var f = new _j.i(n.children[0]);
        return new _j.a(n, [f, r, i, s, t, e, o, u]).l({
            TreeNodeContainer: f,
            TwistyContainer: i
        })
    }, "", _y.bI, _n.c, function(n) {
        return new _n.c(n, _j.b.Instance.a(_n.d), _j.b.Instance.a(_j.o))
    }, !1, !1, !1, 0, _n.a.a, 90);
    var o = "MailFolderTreeView.FolderTreeNodeHelperTemplate";
    new _j.d(o, function() {
        _n.a.a[o] === undefined && (_n.a.a[o] = [
            [
                [-1, 1, ["TreeContainer"],
                    [_n.a.D], null, "TreeContainer", null, _n.a.F, 1, null, null, null
                ],
                [-1, 0, ["HasChildren"],
                    [_n.a.bI], null, "HasChildren", null, _n.a.bm, 1, null, null, !1
                ],
                [-1, 0, ["IsMailRootFolderCollapsed"],
                    [_n.a.ed], _n.a.ef, "IsCollapsed", _n.a.E, _n.a.bN, 2, null, null, !1
                ],
                [-1, 0, ["TreeNodeMode"],
                    [_n.a.bX], _n.a.bY, "TreeNodeMode", _n.a.cj, _n.a.cl, 2, null, null, 0
                ],
                [-1, 0, ["NewFolderName"],
                    [_n.a.cZ], _n.a.db, "NewNodeName", _n.a.bM, _n.a.bO, 2, null, null, null
                ],
                [-1, 0, ["DefaultSelected"],
                    [_n.a.bc], null, "IsSelected", null, _n.a.bd, 1, null, null, !1
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[87].cloneNode(!0);
        var n = new _n.c(t.children[0], _j.b.Instance.a(_n.d), _j.b.Instance.a(_j.o));
        n.f = !0;
        n.be("_n_J4");
        n.y("MailFolderTreeNodeView");
        return new _j.a(t, [n]).l({
            TreeNodeId: n
        })
    }, "", _y.x, _n.e, function(n) {
        return new _n.e(n)
    }, !1, !1, !1, 0, _n.a.a, 96);
    var f = "MailFolderTreeView";
    new _j.d(f, function() {
        _n.a.a[f] === undefined && (_n.a.a[f] = [
            [
                [-1, 1, ["ForestContainer"],
                    [_n.a.bK], null, "ForestContainer", null, _n.a.bR, 1, null, null, null
                ],
                [-1, 0, ["RootFolderNodeViewModel"],
                    [_n.a.dg], null, "DataSource", null, _n.a.bu, 1, null, null, null
                ],
                [-1, 0, ["SelectedFolder"],
                    [_n.a.bE], _n.a.bF, "SelectedTreeNodeData", _n.a.bP, _n.a.bS, 2, null, null, null
                ],
                [-1, 0, ["ActivateFolderSelectionCommand"],
                    [_n.a.bD], null, "ActivateTreeNodeSelectionCommand", null, _n.a.bQ, 0, null, null, null
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[88].cloneNode(!0);
        var n = new _n.n(t.children[0]);
        n.b("MailFolderTreeView.FolderTreeNodeHelperTemplate");
        return new _j.a(t, [n])
    }, "", _y.Y, _n.j, function(n) {
        return new _n.j(n)
    }, !0, !1, !1, 0, _n.a.a, 97);
    var e = "MailNavigationTouchNarrowView";
    new _j.d(e, function() {
        _n.a.a[e] === undefined && (_n.a.a[e] = [
            [
                [-1, 0, ["FolderForest"],
                    [_n.a.B], null, "DataContext", null, _n.a.e, 1, null, null, null
                ]
            ]
        ]);
        var t = _n.a.c.childNodes[62].cloneNode(!0);
        var n = new _n.E(t.children[0], _j.b.Instance.a(_j.o));
        n.y("FolderForestView");
        return new _j.a(t, [n])
    }, "", _y.w, _j.c, function(n) {
        return new _j.c(n)
    }, !0, !1, !1, 0, _n.a.a)
};
_n.bQ.load();
Type.registerNamespace("_t");
_t.b = function() {};
_t.b.registerInterface("_t.b");

function ApplicationAppComponent() {}
ApplicationAppComponent.$$cctor = function() {
    _a.t.a().a(ApplicationAppComponent)
};
ApplicationAppComponent.a = function(n) {
    return (!!n.b().a.viewmodel || !!n.b().a.ItemID || !!n.b().a.InternetMessageID) && (!n.b().a.ispopout || !!n.b().a.ispopout && n.b().a.ispopout === "1")
};
ApplicationAppComponent.prototype = {
    b: function(n, t, i) {
        var y = this;
        n.b(_t.e, function() {
            return new _t.e(n.a(_a.cr), n.a(_a.z), n.a(_t.a))
        }).a();
        var v = this;
        n.b(_t.a, function() {
            return new _t.a(n.a(_g.a).n(), n.a(_j.j), n.a(_y.a), n.a(_a.q), n.c(_h.n), n.a(_a.o), i.b(), n.a(_a.E), n.a(_y.ga), n.f(_y.ea), n.d(_a.eU), n.a(_a.e))
        }).a();
        var a = this;
        n.b(_t.j, function() {
            return new _t.j(n.a(_g.a))
        }).a();
        var p = this;
        n.b(_t.k, function() {
            return new _t.k(n.a(_no.a), n.a(_y.a), n.a(_j.j), n.a(_j.v), n.a(_a.E), n.a(_j.o))
        }).a();
        var k = this;
        var r = n.b(_t.c, function() {
            return new _t.c(n.a(_a.o), n.a(_a.z), n.a(_b.be), n.a(_j.j), n.a(_a.cj), n.a(_y.a), n.a(_n.G), n.f(_t.b), n.a(_y.L), n.a(_a.e), n.a(_a.E))
        }).a();
        i.g() === "OOBE" || i.g() === "AnonymousCalendar" || i.g() === "GenericMail" || t.a() || r.b(_z.a);
        if (ApplicationAppComponent.a(i)) {
            var b = this;
            n.b(_t.b, function() {
                return new _t.PopoutStartupViewModelFactory(n.a(_a.I), n.a(_y.a), n.a(_y.L), n.c(_y.bL), n.a(_j.I))
            })
        } else if (i.g() === "LeanDeepLinkCompose") {
            var w = this;
            n.b(_t.b, function() {
                return new _t.DeepLinkComposeStartupViewModelFactory(n.c(_y.t), n.c(_y.V), n.a(_a.I))
            })
        } else if (i.g() !== "AnonymousCalendar" && i.g() !== "GenericMail" && !t.a()) {
            var l = this;
            n.b(_t.b, function() {
                return new _t.StandardStartupViewModelFactory(n.a(_y.j), n.a(_a.S), n.a(_a.e), n.a(_a.z))
            })
        }
        var f = this;
        n.b(_t.d, function() {
            return new _t.d(n.a(_j.j))
        }).a();
        var e = this;
        n.b(_t.i, function() {
            return new _t.i(n.a(_j.j), n.a(_y.a))
        }).a();
        var u = this;
        n.b(_t.g, function() {
            return new _t.g(n.a(_j.j), n.c(_y.dX))
        }).a();
        var h = this;
        n.b(_a.fZ, function() {
            return new _a.fZ(_a.W.a(0), n.a(_j.j))
        }).b(_a.S).a();
        var c = this;
        n.b(_a.fV, function() {
            return new _a.fV(n.a(_a.S), n.a(_a.Z))
        }).b(_a.fD).a();
        var o = this;
        n.b(_t.h, function() {
            return new _t.h(n.a(_j.j), n.c(_y.ey), n.a(_a.e))
        }).a();
        var s = this;
        n.b(_t.f, function() {
            return new _t.f(n.a(_j.j), i)
        }).a()
    },
    a: function() {
        return [new _j.y(_t.d, 0, 13), new _j.y(_t.i, 0, 1), new _j.y(_t.j, 1, 29), new _j.y(_t.e, 1, 125), new _j.y(_t.g, 2, 25), new _j.y(_t.k, 0, 9), new _j.y(_t.h, 2, 25), new _j.y(_t.f, 2, 1)]
    }
};
_t.i = function(n, t) {
    this.b = Function.createDelegate(this, this.d);
    _t.i.initializeBase(this);
    this.c = t;
    n.b(_y.fz, this.b)
};
_t.i.prototype = {
    c: null,
    a: !1,
    e: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.by("IsMailModule")
        }
        return n
    },
    d: function(n) {
        this.e(_y.d.isInstanceOfType(n.a))
    }
};
_t.a = function(n, t, i, r, u, f, e, o, s, h, c, l) {
    this.m = Function.createDelegate(this, this.u);
    this.q = Function.createDelegate(this, this.A);
    this.n = Function.createDelegate(this, this.x);
    this.o = Function.createDelegate(this, this.y);
    this.p = Function.createDelegate(this, this.z);
    this.a = n;
    this.e = t;
    this.j = i;
    this.f = r;
    this.h = u;
    this.d = f;
    this.c = e;
    this.i = o;
    this.g = s;
    this.l = h;
    this.k = c;
    this.r = l;
    t.b(_a.en, this.p)
};
_t.a.d = function(n) {
    if (!n) return 0;
    switch (n) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
        default:
            return 0
    }
};
_t.a.c = function(n) {
    switch (n) {
        case 1:
        case 2:
        case 4:
            return 1;
        case 3:
        case 5:
            return 2;
        case 6:
            return 3;
        case 7:
            return 4;
        default:
            return 0
    }
};
_t.a.e = function(n, t) {
    return !n || !n.bH.InstrumentationSendIntervalSeconds || t.d() ? !1 : !!n.e() || !!n.c() || !!n.b() || !!n.c() || n.bH.AnalyticsEnabled || n.bH.CoreAnalyticsEnabled || n.bH.InferenceEnabled
};
_t.a.a = function(n, t) {
    for (var i = 0; i < t.b(); i++) _a.bi.j(n, t.a(i))
};
_t.a.prototype = {
    j: null,
    a: null,
    f: null,
    h: null,
    d: null,
    i: null,
    e: null,
    c: null,
    b: null,
    l: null,
    g: null,
    k: null,
    r: null,
    w: function() {
        return _t.a.e(this.a, this.c)
    },
    B: function() {
        if (!this.c.b("analyticsEnabled")) {
            _a.A.i(this.a.bH.AnalyticsEnabled);
            _a.A.h(this.a.bH.CoreAnalyticsEnabled || _a.A.d())
        }
        this.d.c();
        this.v(this.c);
        this.e.b(_y.gO, this.o);
        if (this.d.c()) {
            var n = this;
            this.e.b(_a.dq, function() {
                n.s()
            })
        } else this.s();
        this.k.a(this.n);
        document.addEventListener("visibilitychange", this.q, !1)
    },
    C: function() {
        this.d.c() || this.c.b("traceLevel") || _j.e.g(0);
        this.c.b("perfTraceLevel") || _j.n.e(0);
        _a.A.i(!1);
        _a.A.h(!1);
        _a.bi.d(0);
        _a.ck.b(0);
        _a.du.c(!1);
        this.f.c = null;
        _a.bh.f(!1);
        this.b && this.b.N();
        var n;
        _a.h.a(n = {
            val: this.g
        }), this.g = n.val
    },
    t: function(n) {
        if (!window.appCachedPage) {
            var t = new Image;
            t.src = _g.Q.a + "plt1.ashx" + "?v=" + n
        }
    },
    x: function(n) {
        _a.A.l(n)
    },
    z: function(n) {
        window.addEventListener("error", this.m, !1)
    },
    A: function(n) {
        var i = _a.b.b(_a.a.b, "ForegroundTracker", !1, null);
        var t = new _a.l;
        t.a("vs", document.visibilityState);
        i.m = t.toString();
        _a.b.a(i);
        return !0
    },
    u: function(n) {
        var i = n;
        var r = i.error;
        var u = String.format("{0} at {1}:{2}:{3}", i.message, i.filename, i.lineno, i.colno);
        var t = window.owaLastErrorReported;
        if (t && !t.r) {
            t.r = !0;
            r = t;
            u = t.name
        }
        _j.e.d(_a.a.dI, r, u)
    },
    s: function() {
        var i = this;
        this.h.a(function(n) {
            var t = n;
            i.f.c = t.n || (t.n = Function.createDelegate(t, t.bo))
        });
        this.b = this.l.e();
        var r = this;
        this.e.b(_a.cx, function() {
            r.b.L()
        });
        var n = this;
        this.e.b(_a.cm, function() {
            n.b.K();
            _a.b.M()
        });
        this.t(this.j.t());
        _j.m.a().d(_a.a.cQ, "InitializeInstrumentation", this.b.o);
        var t = this;
        this.j.w(function() {
            try {
                t.b.F()
            } catch (n) {}
        })
    },
    v: function(n) {
        var u = n.b("traceLevel");
        var i = u ? _j.u.b(_j.bj, n.a.traceLevel) : _t.a.d(this.a.e());
        _a.bi.d(i);
        this.d.c() && _j.e.e < i ? _j.e.g(i) : _j.e.g(i);
        var t;
        var r = n.b("perfTraceLevel");
        t = r ? _j.u.b(_j.PerfTraceLevel, n.a.perfTraceLevel) : this.a.b() ? this.a.b() : _t.a.c(this.a.c());
        _a.L.g(_a.dN.a);
        _j.n.e(t);
        _a.bg.g = this.d.c() && !this.i.b(this.i.r());
        _a.bh.f(_a.bg.g || u && !!i || r && !!t || this.a.bH.ConsoleTracingEnabled);
        _a.du.c(!0);
        if (_a.bi.b) {
            this.a.f() && _t.a.a(4, this.a.f());
            this.a.g() && _t.a.a(3, this.a.g());
            this.a.h() && _t.a.a(5, this.a.h());
            this.a.j() && _t.a.a(2, this.a.j())
        }
    },
    y: function(n) {
        var t = this;
        this.h.a(function(t) {
            t.bk(n.a)
        })
    }
};
_t.d = function(n) {
    _t.d.initializeBase(this);
    document.title = _u.R.By;
    var i = this;
    n.b(_j.ba, function(n) {
        i.c = n.a.c().bH.UserEmailAddress;
        i.d()
    });
    var t = this;
    n.b(_y.fz, function(n) {
        t.a = n.a;
        t.f(_y.d.isInstanceOfType(n.a));
        t.c && t.d()
    })
};
_t.d.prototype = {
    c: null,
    a: null,
    b: !1,
    f: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.by("IsMailModule")
        }
        return n
    },
    d: function() {
        document.title = !this.a || _j.h.b(this.a.bJ) ? String.format(_u.R.Tx, this.c) : String.format(_u.R.NR, this.c, this.a.bJ);
        var n = getCookie("X-DFPOWA-Vdir");
        _j.h.a(n) && (n = _a.w.e(window.self.location.href, "vdir"));
        _j.h.a(n) || (document.title = n)
    },
    e: function(n) {
        document.title = String.format(_u.R.Sb, this.c, this.a.bJ, n)
    }
};
_t.e = function(n, t, i) {
    var r = t.b().a.datapointsEnabled;
    r === "false" && n && n.f();
    _t.a.b = i;
    i.w() ? i.B() : i.C()
};
_t.e.$$cctor = function() {
    _j.n.g(_a.L.a(), 2);
    _a.L.g(_a.dN.a)
};
_t.f = function(n, t) {
    this.a = Function.createDelegate(this, this.b);
    t.c() && n.b(_a.cA, this.a)
};
_t.f.prototype = {
    b: function(n) {
        n.a !== 5 || _j.h.b(n.b) || (window.self.location.href = n.b)
    }
};
_t.g = function(n, t) {
    this.b = Function.createDelegate(this, this.e);
    this.c = Function.createDelegate(this, this.f);
    this.d = Function.createDelegate(this, this.g);
    this.a = t;
    n.b(_y.cf, this.d);
    n.b(_y.cH, this.c);
    n.b(_y.hb, this.b)
};
_t.g.prototype = {
    a: null,
    g: function(n) {
        var t = this;
        this.a.a(function(t) {
            t.g(n.a)
        })
    },
    f: function(n) {
        var t = this;
        this.a.a(function(t) {
            t.f(n.a)
        })
    },
    e: function(n) {
        var t = this;
        this.a.a(function(t) {
            t.e(n.a)
        })
    }
};
_t.h = function(n, t, i) {
    this.b = t;
    this.a = i;
    var r = this;
    n.b(_y.bX, function(n) {
        var t = n.a.a() === "archivedeleteditems";
        var i = n.a.b && n.a.a() === "deleteditems";
        (!r.a.a().bY().Enabled || n.b || t || i) && r.b.a(function(i) {
            var f = _a.b.b(_a.a.bH, "OpenDumpster", !1, null);
            i.c(t, n.b, !!r.a && r.a.a().b().Enabled);
            var u = new _a.l;
            _a.b.g("AB");
            u = _h.g.b(u);
            f.m = u.toString();
            _a.b.a(f)
        })
    })
};
_t.h.prototype = {
    b: null,
    a: null
};
_t.j = function(n) {
    _a.v.k(n);
    _a.v.j()
};
_t.k = function(n, t, i, r, u, f) {
    this.a = n;
    this.g = t;
    this.d = i;
    this.c = r;
    this.e = !1;
    this.f = u;
    this.h = f;
    var o = this;
    this.b = this.c.a(_a.a.dA, "CheckAndStartPendingGet", function() {
        o.b = null;
        o.i()
    }, 6e4);
    var e = this;
    this.d.b(_j.bh, function(n) {
        e.b && e.c.b(e.b);
        e.i()
    })
};
_t.k.prototype = {
    a: null,
    g: null,
    d: null,
    c: null,
    e: !1,
    b: null,
    f: null,
    h: null,
    i: function() {
        if (!this.e) {
            this.e = !0;
            var t = this;
            this.a.d(function() {
                t.a.a() && _g.k.a && _g.k.a.n && _g.k.a.n.f();
                t.d.a(_a.dK, new _a.dK(t.a.a()))
            });
            if (!this.h.c() || !this.f.p()) {
                var i = this;
                this.c.c(_a.a.dA, "StartPendingGet", function() {
                    i.a.c("PendingGetManagerService")
                })
            }
            var n = this.a;
            this.g.w(n.$$d_dispose || (n.$$d_dispose = Function.createDelegate(n, n.dispose)))
        }
    }
};
_t.c = function(n, t, i, r, u, f, e, o, s, h, c) {
    this.r = Function.createDelegate(this, this.w);
    this.q = Function.createDelegate(this, this.t);
    this.h = Function.createDelegate(this, this.s);
    this.p = n;
    this.b = t;
    this.o = i;
    this.c = r;
    this.i = u;
    this.f = f;
    this.l = e;
    this.n = o;
    this.m = s;
    this.d = h;
    this.k = c;
    this.g = !1
};
_t.c.userEnabledOffline = function() {
    return _h.br.a(_a.o.a(), null).c()
};
_t.c.handleBootstrapServerFailure = function(n, t) {
    n && _a.o.a().c() ? t && t.b(t.a()) ? t.a().d(1, "HandleBootstrapServerFailure") : _a.bS.a("loadFailed", "HandleBootstrapServerFailure", null) : _a.g.K || _t.c.userEnabledOffline() && !n || window.location.replace("/owa/auth/errorfe.aspx?httpCode=500")
};
_t.c.prototype = {
    p: null,
    b: null,
    n: null,
    o: null,
    c: null,
    i: null,
    f: null,
    l: null,
    m: null,
    d: null,
    k: null,
    g: !1,
    j: 0,
    e: null,
    a: function() {
        var i = _j.n.b(_a.a.by, 0, "OwaStart");
        try {
            if (this.b.k() >= 20) {
                _a.k.Q = _a.k.a();
                this.p.c() || (_a.k.b = "ALT");
                _a.k.e = _a.k.f = this.f.z().h();
                _j.x.f = this.b.a() !== "Mouse";
                this.o.a()
            }
            if (this.b.k() >= 30) {
                var t = _j.n.b(_a.a.R, 2, "OwaStartingEvent");
                this.c.d(_j.bc, new _j.bc);
                _j.n.a(t)
            }
            if (this.b.k() >= 40) {
                var n = _j.n.b(_a.a.R, 2, "GetOwaUserConfiguration");
                this.z();
                _j.n.a(n)
            }
            if (this.b.k() >= 100) {
                _j.k.b(window.document.documentElement, "readystatechange", this.h);
                _j.k.b(window.document.documentElement, "DOMContentLoaded", this.h);
                this.s(null)
            }
        } finally {
            _j.n.a(i)
        }
    },
    z: function() {
        this.b.j() ? this.t() : this.v()
    },
    t: function() {
        var t = !1;
        var n = this;
        _a.Y.a(this.m.get_mainWindowInstance(), function(i) {
            i.getOwaUserConfig(window.self, {}, function(i, r) {
                n.e = _j.m.a().b(n.e);
                t = !0;
                var u = JsonParser.deserialize(i);
                n.u(JsonParser.deserialize(r))
            }, function(i) {
                n.e = _j.m.a().b(n.e);
                t = !0;
                var r = JsonParser.deserialize(i);
                throw r;
            })
        });
        if (!t)
            if (this.j < 3) {
                this.j++;
                this.e = _j.m.a().a(_a.a.bL, "OwaStart", this.q, 3e3)
            } else {
                var i = "Cannot get OwaUserConfiguration after retry.";
                _j.e.c(_a.a.bL, i);
                throw Error.invalidOperation(i);
            }
    },
    v: function() {
        var n = new _h.cw;
        var t = this;
        n.b(function() {
            _t.c.handleBootstrapServerFailure(!0, t.k)
        });
        n.c(this.r);
        _g.a.a().S = !0;
        this.i.a(n)
    },
    w: function(n) {
        var t = n;
        t.G || this.u(n.e)
    },
    u: function(n) {
        var u = _j.n.b(_a.a.by, 2, "ProcessUserConfig");
        _g.a.b = new _g.a(n);
        var i = _g.a.a().c();
        var f = _g.a.a().n();
        this.d.a().cf().Enabled || f.k(null);
        if (this.b.m() && !_j.z.a(this.b.l())) {
            i.n(this.b.m());
            i.m(this.b.l())
        }
        this.y(_g.a.a());
        _a.bu.a = _g.a.a().bH.PolicyTipsEnabled;
        _ff.j.d(_g.a.a().c().bH.IsUserCultureRightToLeft);
        this.b && (_g.a.a().E = this.b.c());
        _j.z.a(_g.a.a().a().bH.ShowUpNext) && _g.a.a().a().V(!0);
        this.b.k() >= 50 && this.c.d(_j.ba, new _j.ba(_g.a.a()));
        var r = _j.n.b(_a.a.R, 2, "RenderUI");
        if (this.b.k() >= 60) {
            var t = this;
            this.n.e().a(function(n) {
                var r = _j.n.b(_a.a.by, 2, "VMFactory");
                _a.g.t = n[0];
                for (var u = t.f.c(), i = 0; i < n.length; i++) u.e(n[i]);
                t.l.bm();
                t.b.k() >= 80 && _j.m.a().c(_a.a.bL, "OwaAppStarted", function() {
                    t.c.d(_j.O, new _j.O(!t.b.j()))
                });
                _j.n.a(r)
            })
        }
        _a.k.R = _a.k.a();
        _j.n.a(r);
        if (this.b.k() >= 70) {
            this.c.d(_a.cC, new _a.cC);
            _a.b.J();
            _a.p.b(_a.a.ch, _a.bB.g);
            _a.p.b(_a.a.ch, _a.bB.f);
            _a.p.b(_a.a.ch, _a.bB.d);
            _a.p.b(_a.a.ch, _a.bB.c);
            if (this.d.a().c().Enabled && this.f.a() === "Mouse") {
                _a.p.b(_a.a.ch, _a.bB.a);
                _a.p.b(_a.a.ch, _a.bB.b);
                _a.p.b(_a.a.ch, _a.bB.e)
            }
            var o = this;
            this.c.b(_j.bx, function() {
                _a.p.a(_a.bB.d)
            });
            var e = this;
            this.c.b(_j.X, function() {
                _a.p.a(_a.bB.c)
            })
        }
        _j.n.a(u)
    },
    y: function(n) {
        this.b.c() ? _a.m.bc(this.d) : this.x(n)
    },
    x: function(n) {
        var t = new SmimeControlSettings;
        var i = n.c();
        t.CodePage = n.bH.PolicySettings.UseGB18030 ? 54936 : n.bH.PolicySettings.UseISO885915 ? 28605 : 65001;
        n.bH.SmimeAdminSettings || n.V(_g.P.b());
        n.bH.SmimeAdminSettings.UseKeyIdentifier = !1;
        var u = n.bH.SmimeAdminSettings;
        t.Culture = i.bH.UserCulture || "en-US";
        t.AttachmentSizeLimit = i.bH.MaxMessageSizeInKb * 1024;
        t.OwaVersion = this.b.h();
        t.a(u);
        var r = new _j.q;
        r.c(i.bH.UserEmailAddress);
        r.c(i.bH.LogonEmailAddress);
        r.c(i.bH.UserPrincipalName);
        r.c(i.bH.UserLegacyExchangeDN);
        if (i.b() && i.b().b() > 0) {
            var f = this;
            i.b().n(function(n) {
                var t = n;
                r.g(t) || r.c(t)
            })
        }
        t.CertificateSubjects = r.i();
        t.Strings = new SmimeStrings;
        t.DiagnosticDumpsEnabled = _a.bh.g(_a.a.fG);
        t.OwaControlVersion = _a.m.O();
        _a.m.ba(this.b.h(), t, u.ForceSmimeClientUpgrade, this.d)
    },
    s: function(n) {
        var t = _j.n.b(_a.a.R, 2, "DocumentReadyEvent");
        if (document.readyState === "complete") {
            if (n) {
                _j.k.c(window.document.documentElement, "DOMContentLoaded");
                _j.k.c(window.document.documentElement, "readystatechange")
            }
            if (!this.g) {
                this.g = !0;
                this.c.d(_j.bh, new _j.bh)
            }
        }
        _j.n.a(t)
    }
};
_t.DeepLinkComposeStartupViewModelFactory = function(n, t, i) {
    this.b = n;
    this.c = t;
    this.d = i
};
_t.DeepLinkComposeStartupViewModelFactory.prototype = {
    b: null,
    c: null,
    d: null,
    a: function(n) {
        var i = _a.b.b(_a.a.p, "MailComposeDeepLink", !1, null);
        var r = 3;
        var t = this;
        this.b.a(function(u) {
            var f = u.a(!1, !0);
            f.p(r);
            f.e(0);
            _y.cJ.c(f, i, t.d);
            t.c.a(function(t) {
                var r = t.a(f, null, null);
                _n.G.a();
                n([r]);
                _a.b.a(i)
            })
        })
    }
};
_t.PopoutStartupViewModelFactory = function(n, t, i, r, u) {
    this.b = n;
    this.d = t;
    this.f = i;
    this.e = r;
    this.g = u
};
_t.PopoutStartupViewModelFactory.prototype = {
    d: null,
    f: null,
    e: null,
    c: null,
    b: null,
    g: null,
    a: function(n) {
        var t = this;
        this.e.a(function(i) {
            t.c = i;
            var u = t.b.a.viewmodel;
            !u && (t.b.a.ItemID || t.b.a.InternetMessageID) && (u = i.f());
            var r = t.i(u);
            t.g.d(r, function() {
                t.h(n, r)
            }, function() {
                t.h(n, r)
            })
        })
    },
    h: function(n, t) {
        n && this.c.i(this.d, this.f, t, this.b.a, null, null, n)
    },
    i: function(n) {
        var t = this.c.h(n);
        if (!t) throw Error.argument(String.format("Unknown type {0} was requested", n));
        return t
    }
};
_t.StandardStartupViewModelFactory = function(n, t, i, r) {
    this.f = n;
    this.g = t;
    this.j = i;
    this.d = r
};
_t.StandardStartupViewModelFactory.prototype = {
    f: null,
    g: null,
    j: null,
    d: null,
    e: function() {
        return _a.cZ.a(this.d.b())
    },
    a: function(n) {
        var t = this.d.b().a.path;
        t || (t = _a.W.a(this.e()));
        this.g.a(t, null);
        n && n([this.f])
    }
};
ApplicationAppComponent.registerClass("ApplicationAppComponent", null, _a.kj, _j.ce);
_t.i.registerClass("_t.i", _j.S);
_t.a.registerClass("_t.a");
_t.d.registerClass("_t.d", _j.S);
_t.e.registerClass("_t.e");
_t.f.registerClass("_t.f");
_t.g.registerClass("_t.g");
_t.h.registerClass("_t.h");
_t.j.registerClass("_t.j");
_t.k.registerClass("_t.k");
_t.c.registerClass("_t.c", null, _z.a);
_t.DeepLinkComposeStartupViewModelFactory.registerClass("_t.DeepLinkComposeStartupViewModelFactory", null, _t.b);
_t.PopoutStartupViewModelFactory.registerClass("_t.PopoutStartupViewModelFactory", null, _t.b);
_t.StandardStartupViewModelFactory.registerClass("_t.StandardStartupViewModelFactory", null, _t.b);
ApplicationAppComponent.$$cctor();
_t.a.b = null;
_t.e.$$cctor();
Type.registerNamespace("_lm");
_lm.a = function() {};
_lm.a.a = function(n) {
    return n.bU() === 1 || n.bU() === 5
};
_lm.a.b = function(n) {
    var t = null;
    if (!_h.l.a(n.b()) || n.c())
        if (n.c()) t = [new _h.eP(n)];
        else {
            var i = new _h.z(n, !1, n.h(), n.g(), n.d(), n.e(), null, n.f(), null);
            t = [i]
        }
    return t
};
_lm.b = function(n, t, i) {
    this.ev = Function.createDelegate(this, this.gp);
    this.ew = Function.createDelegate(this, this.gq);
    this.eu = Function.createDelegate(this, this.go);
    this.et = Function.createDelegate(this, this.gn);
    _lm.b.initializeBase(this, [n, n.e(), i]);
    this.dt = !0;
    this.cX = {};
    var r = this;
    this.cc = new _h.dK(201, function(n) {
        return !0
    }, t)
};
_lm.b.prototype = {
    cX: null,
    cc: null,
    cY: 0,
    ex: null,
    ey: !1,
    r: function() {
        return this.bC.k
    },
    gs: function(n) {
        this.bC.k = n;
        return n
    },
    bW: function() {
        return this.bC.m
    },
    W: function() {
        return this.bC.o
    },
    B: function() {
        return this.bC.n
    },
    bJ: function() {
        return this.bC.l
    },
    H: function(n) {
        this.cc.F(n);
        return n
    },
    bD: function() {
        return _a.a.S
    },
    ds: function(n) {
        return this.cy(n)
    },
    l: function(n) {
        return this.dQ(n)
    },
    D: function(n) {
        for (var r = 0; r < this.bx.x.length; r++)
            for (var i = this.bx.x[r], t = 0; t < i.a().b(); t++) {
                var u = i.a().a(t);
                if (u.Id === n) return i
            }
        return null
    },
    T: function(n) {
        this.gs(n);
        this.dG(!0)
    },
    Z: function(n) {
        for (var i = 0; i < this.bx.x.length; i++) {
            var t = this.bx.x[i];
            var u = n ? 0 : t.bH.MessageCount;
            var e = this;
            _h.c.a(t, "UnreadCount", t.bH.UnreadCount, u, function(n, t) {
                n.o(t)
            });
            var r = n ? -t.bH.UnreadCount : t.bH.MessageCount - t.bH.UnreadCount;
            var f = this;
            _h.c.a(t, "GlobalUnreadCount", t.bH.GlobalUnreadCount, Math.max(t.bH.GlobalUnreadCount + r, 0), function(n, t) {
                n.R(t)
            })
        }
    },
    Q: function() {
        _h.u.prototype.Q.call(this);
        this.cc.Q()
    },
    z: function() {
        _h.u.prototype.z.call(this);
        this.cc.z()
    },
    bK: function(n) {
        var t = new _g.o;
        t.l(n);
        t.Q(this.e());
        return t
    },
    bd: function(n, t) {
        if (t) {
            var r = !1;
            var i = this.l(t);
            if (i) {
                i.a() && i.a().b() === 1 && i.a().a(0) && i.a().a(0).Id === n && (r = !0);
                this.ck[t] = r
            }
        }
    },
    R: function(n) {
        for (var t = 0; t < this.bx.x.length; t++) {
            var r = this.bx.x[t].bH.ConversationId.Id;
            if (r !== n) {
                var i = _h.d.a().a(r);
                i && i.v(!0)
            }
        }
    },
    G: function(n) {
        for (var t = 0; t < this.bx.x.length; t++) {
            var r = this.bx.x[t].bH.ConversationId.Id;
            var i = _h.d.a().a(r);
            i && i.t(n)
        }
    },
    S: function(n, t) {
        if (this.v() && this.gz(n.Id)) {
            this.cc.B(n, t);
            this.gr(n)
        }
    },
    bz: function() {
        this.cc.dispose();
        _lm.f.prototype.bz.call(this);
        this.cX = null
    },
    cK: function(n, t, i) {
        if (this.r()) {
            this.r().f = this.bY;
            this.bY && this.be(this.cZ)
        }
        return this.dM(_h.x.a(n.a, n.b), t, null, i)
    },
    cL: function(n, t, i, r) {
        return this.fi(n, t, "Beginning", i, r)
    },
    dv: function(n, t, i, r) {
        return this.fi(n, t, "End", i, r)
    },
    da: function(n) {
        return new _h.dL(n)
    },
    cx: function(n, t) {
        var i = n;
        switch (this.bJ().a) {
            case "ConversationLastDeliveryTime":
                var f = _a.d.b(t.Conversation.LastDeliveryTime);
                return i.h().a(f);
            case "ConversationLastDeliveryOrRenewTime":
                var u = t.Conversation.LastDeliveryOrRenewTime ? _a.d.b(t.Conversation.LastDeliveryOrRenewTime) : _a.d.b(t.Conversation.LastDeliveryTime);
                return i.n().a(u);
            case "ConversationLastModifiedTime":
                var r = _a.d.b(t.Conversation.LastModifiedTime);
                return i.V().a(r);
            case "ConversationUniqueSenders":
                return this.gl(i.g()) !== t.Conversation.UniqueSenders.join("; ") ? -2 : 0;
            case "ConversationSize":
                return i.bH.Size === t.Conversation.Size ? 0 : i.bH.Size < t.Conversation.Size ? -1 : 1;
            case "ConversationTopic":
                return i.bH.ConversationTopic !== t.Conversation.ConversationTopic ? -2 : 0;
            case "ConversationHasAttachments":
                return i.bH.HasAttachments === t.Conversation.HasAttachments ? 0 : i.bH.HasAttachments ? 1 : -1;
            case "ConversationImportance":
                return i.bg() !== t.Conversation.Importance ? -2 : 0;
            case "ConversationFlagStatus":
                return i.M() === t.Conversation.FlagStatus ? 0 : i.M() === "Flagged" || i.M() === "Complete" && t.Conversation.FlagStatus === "NotFlagged" ? 1 : -1;
            default:
                throw Error.argument("SortColumn", String.format("Unknown SortColumn {0}", this.bJ().a));
        }
    },
    cO: function(n, t) {
        var i = n;
        this.fl(i);
        _lm.f.prototype.cO.call(this, n, t);
        i.Q(this.e());
        this.fk(i)
    },
    cj: function(n) {
        _lm.f.prototype.cj.call(this, n);
        var t = n;
        if (!(t.bH.ConversationId.Id in this.cX)) {
            _h.x.b().f(t);
            this.cY += t.bH.UnreadCount;
            this.cX[t.bH.ConversationId.Id] = 1
        }
        t.dE(this.et);
        t.dF(this.eu);
        this.fk(t)
    },
    ci: function(n) {
        _lm.f.prototype.ci.call(this, n);
        var t = n;
        if (!_ff.i.a(this.ds(t.bH.ConversationId.Id))) {
            this.fl(t);
            _h.x.b().g(t);
            this.cY -= t.bH.UnreadCount;
            delete this.cX[t.bH.ConversationId.Id]
        }
        t.dC(this.et);
        t.dG(this.eu);
        this.cc.w(t, this.cV)
    },
    dK: function(n, t) {
        var i = n.x.length > 0 ? "ConversationItemQueryTable.PostValidateMergeRows. First conversation : " + n.x[0].bH.ConversationId.Id : "ConversationItemQueryTable.PostValidateMergeRows. No conversation."
    },
    eL: function(n, t) {
        if (this.bW() !== "All") {
            t(4);
            return !0
        }
        return !1
    },
    eJ: function(n, t) {
        if (!this.bJ()) return !1;
        var i = this.bJ().b === "Ascending" ? "Ascending" : "Descending";
        if (i !== _g.bY.a || this.bJ().a !== _g.bY.c) {
            t(5);
            return !0
        }
        return !1
    },
    dy: function(n, t) {
        var r = new _bc.i(this.e());
        var i = this;
        this.fF(n, r, function(u) {
            u ? t(1) : i.fG(n, r, function(r) {
                r ? t(8) : _lm.f.prototype.dy.call(i, n, t)
            })
        })
    },
    cI: function(n) {
        if (this.bY && !_h.u.b) {
            var i = n;
            if (i.D)
                for (var r = 0; r < i.D.length; r++) {
                    var t = this.bK(i.D[r]);
                    if (t.bH.UnreadCount > 0 || !t.D) {
                        this.co(t);
                        this.bZ(t, !0, !0, !1, !0, !1);
                        break
                    }
                }
        }
    },
    gr: function(n) {
        var i, t;
        var u, r;
        this.dP(n, u = {
            val: i
        }, r = {
            val: t
        }), i = u.val, t = r.val;
        t && this.bZ(t, !1, !0, !1, !0, !0);
        i && this.bZ(i, !1, !0, !1, !0, !0)
    },
    bZ: function(n, t, i, r, u, f) {
        if (!_h.u.b && (!this.r() || u) && (!this.h() || u)) {
            var e = n;
            if (!(e.bH.ConversationId.Id in this.ck)) {
                if (!u) {
                    for (var h = Math.min(10, this.bx.x.length), s = 0, s = 0; s < h; s++)
                        if (this.bx.x[s].bH.ConversationId.Id === e.bH.ConversationId.Id) break;
                    if (s >= h) return
                }
                var o = _h.d.a().a(e.bH.ConversationId.Id);
                if ((!o || t || this.ey) && (!o || !i || o.n(e))) {
                    if (this.cc.m(e)) {
                        (f || o && o.p()) && this.cc.f(e, !0);
                        return
                    }
                    o ? this.cc.f(e, o.p()) : this.cc.f(e, !1)
                }
            }
        }
    },
    co: function(n) {
        _lm.f.prototype.co.call(this, n);
        this.cc.i(n)
    },
    ea: function(n) {
        if (this.cc.g && this.cc.g.bH.InstanceKey === n) {
            this.cc.i(null);
            this.cu()
        }
    },
    cr: function(n) {
        var t = n;
        _h.u.prototype.cr.call(this, n)
    },
    cJ: function(n) {
        return _lm.f.prototype.cJ.call(this, n)
    },
    dM: function(n, t, i, r) {
        var u = new _h.cc(this.e(), this.r(), n, t, this.bW(), this.bJ(), i, this.W(), r, null, this.B(), this.eF() && this.bY);
        u.s = this.cv;
        return u
    },
    fk: function(n) {
        var t = n.a();
        if (t && t.b())
            for (var i = 0; i < t.b(); i++) this.dY(t.a(i).Id, this.ew, this.ev)
    },
    fl: function(n) {
        var t = n.a();
        if (t && t.b())
            for (var i = 0; i < t.b(); i++) this.de(t.a(i).Id, this.ew, this.ev)
    },
    gv: function(n, t) {
        n.a() && t.bH.UnreadCount > 0 ? t.o(t.bH.UnreadCount - 1) : n.a() || t.o(t.bH.UnreadCount + 1)
    },
    gt: function(n, t, i) {
        t || (t = !1);
        i || (i = !1);
        !t && i ? n.bs(n.bc() + 1) : t && !i && n.bs(n.bc() - 1)
    },
    gw: function(n, t) {
        n.a() && t.bH.UnreadCount > 0 ? this.fj() : n.a() || this.gm()
    },
    fj: function() {
        this.cY--;
        if (this.bG() && _g.u.isInstanceOfType(this.bG()) && this.bG().bH.UnreadCount > 0) {
            var n;
            (n = this.bG()).h(n.bH.UnreadCount - 1)
        }
    },
    gi: function() {
        if (this.bG() && this.bG().bH.TotalCount > 0) {
            var n;
            (n = this.bG()).k(n.bH.TotalCount - 1)
        }
    },
    gm: function() {
        this.cY++;
        if (this.bG() && _g.u.isInstanceOfType(this.bG())) {
            var n;
            (n = this.bG()).h(n.bH.UnreadCount + 1)
        }
    },
    fm: function(n, t, i) {
        var w = t ? t.b() : 0;
        var c = i ? i.b() : 0;
        if (c > w) {
            for (var e = n.m() || new _a.j, r = 0; r < c; r++) {
                var b = i.c(r);
                if (!e.j(b)) {
                    var k = e.t();
                    k.r(r, b);
                    e = k
                }
            }
            n.Y(e);
            return
        }
        if (c < w) {
            var l = n.a();
            var f = n.m();
            if (!f || !l) return;
            for (var g = f.b(), d = l.b(), h = [], o = 0; o < d; o++) {
                var p = _h.d.a().a(l.a(o).Id);
                p && Array.add(h, p)
            }
            if (h.length !== d) return;
            var s = {};
            var v, y;
            var nt = (y = this.gg(h, v = {
                val: s
            }), s = v.val, y);
            if (!nt && g > 0) n.Y(new _a.j);
            else
                for (var u = 0; u < g; u++) {
                    var tt = f.a(u);
                    if (!(tt in s)) {
                        var a = f.t();
                        a.o(u);
                        n.Y(a)
                    }
                }
        }
    },
    gu: function(n, t) {
        t.bw(n.bH.ItemId)
    },
    fn: function(n, t, i) {
        var w = t ? t.b() : 0;
        var c = i ? i.b() : 0;
        if (c > w) {
            for (var e = n.q() || new _a.j, r = 0; r < c; r++) {
                var b = i.c(r);
                if (!e.j(b)) {
                    var k = e.t();
                    k.r(r, b);
                    e = k
                }
            }
            n.Z(e);
            return
        }
        if (c < w) {
            var l = n.a();
            var f = n.q();
            if (!f || !l) return;
            for (var g = f.b(), d = l.b(), h = [], o = 0; o < d; o++) {
                var p = _h.d.a().a(l.a(o).Id);
                p && Array.add(h, p)
            }
            if (h.length !== d) return;
            var s = [];
            var v, y;
            var nt = (y = this.gh(h, v = {
                val: s
            }), s = v.val, y);
            if (!nt && g > 0) n.Z(new _a.j);
            else
                for (var u = 0; u < g; u++) {
                    var tt = f.a(u);
                    if (!s[tt]) {
                        var a = f.t();
                        a.o(u);
                        n.Z(a)
                    }
                }
        }
    },
    gl: function(n) {
        var i = new Sys.StringBuilder;
        if (!n || !n.b()) return "";
        for (var t = 0; t < n.b(); t++) i.append(n.a(t).toString() + "; ");
        return i.toString()
    },
    gj: function(n) {
        for (var r = {}, i = 0; i < n.length; i++) {
            var t = n[i];
            if (t.bT() && t.bT().b() > 0) {
                var u = t.bT().e();
                r[t.bH.ItemId.Id] = u
            }
        }
        return r
    },
    gk: function(n) {
        for (var r = {}, i = 0; i < n.length; i++) {
            var t = n[i];
            if (t.cE() && t.cE().b() > 0) {
                var u = t.cE().e();
                r[t.bH.ItemId.Id] = u
            }
        }
        return r
    },
    gg: function(n, t) {
        var s = this.gj(n);
        var f = 0;
        t.val = {};
        var e = s;
        for (var u in e) {
            var h = {
                key: u,
                value: e[u]
            };
            f++;
            for (var r = h.value, i = 0; i < r.length; i++) {
                r[i] in t.val || (t.val[r[i]] = 0);
                var o = t.val[r[i]];
                t.val[r[i]] = ++o
            }
        }
        return f
    },
    gh: function(n, t) {
        var s = this.gk(n);
        var f = 0;
        t.val = [];
        var e = s;
        for (var u in e) {
            var h = {
                key: u,
                value: e[u]
            };
            f++;
            for (var r = h.value, i = 0; i < r.length; i++) {
                t.val[r[i]] || (t.val[r[i]] = 0);
                var o = t.val[r[i]];
                t.val[r[i]] = ++o
            }
        }
        return f
    },
    go: function(n, t) {
        var o = n;
        var i = t;
        if (i.a === "UnreadCount") {
            var s = i.b - i.c;
            this.cY += s;
            this.bG() && _g.u.isInstanceOfType(this.bG()) && this.bG().h(Math.max(0, this.bG().bH.UnreadCount + s))
        } else i.a === "IsPinned" && this.eN(o);
        var c = this.ds(n.bH.ConversationId.Id);
        var e = c;
        for (var u in e) {
            var l = {
                key: u,
                value: e[u]
            };
            var r = l.value;
            if (r.bH.InstanceKey !== o.bH.InstanceKey)
                if (i.a === "UnreadCount") {
                    var a = i.b - i.c;
                    r.o(r.bH.UnreadCount + a)
                } else if (i.a === "GlobalUnreadCount") {
                var h = i.b - i.c;
                r.R(r.bH.GlobalUnreadCount + h)
            } else if (i.a === "FlagStatus") r.bj(i.b);
            else if (i.a === "GlobalItemIds") r.bk(i.b);
            else if (i.a === "DraftItemIds") {
                var f = i.b;
                r.c() && r.c() !== f && r.c().kF("Count");
                r.br(f)
            }
        }
    },
    gn: function(n, t) {
        var s = t;
        var h = this.ds(n.bH.ConversationId.Id);
        var e = !1;
        var o = h;
        for (var r in o) {
            var c = {
                key: r,
                value: o[r]
            };
            var i = c.value;
            this.cc.b && i.bH.ConversationId.Id === this.cc.b && this.co(null);
            if (!e && this.bG()) {
                if (_g.u.isInstanceOfType(this.bG()))
                    if (this.bG().bH.UnreadCount >= i.bH.UnreadCount) {
                        var f;
                        (f = this.bG()).h(f.bH.UnreadCount - i.bH.UnreadCount)
                    } else this.bG().h(0);
                if (s.a)
                    if (this.bG().bH.TotalCount >= i.bH.MessageCount) {
                        var u;
                        (u = this.bG()).k(u.bH.TotalCount - i.bH.MessageCount)
                    } else this.bG().k(0)
            }
            this.dw();
            this.bx.A(i, 4);
            this.cu();
            e = !0
        }
    },
    gq: function(n, t) {
        var r = t;
        var i = r.a;
        if (_lm.a.a(n)) {
            var f = n;
            if (f.bH.ConversationId) {
                var l = this.ds(f.bH.ConversationId.Id);
                if (l && (i === "IsRead" || i === "Categories" || i === "SystemCategories" || i === "IsLikedByUser" || i === "IsQueuedForSubmission")) {
                    var a = !1;
                    var c = l;
                    for (var v in c) {
                        var w = {
                            key: v,
                            value: c[v]
                        };
                        var u = w.value;
                        if (i === "IsRead") {
                            if (!a) {
                                this.gw(f, u);
                                a = !0
                            }
                            this.gv(f, u)
                        } else if (i === "Categories") {
                            var e = r.c;
                            var h = r.b;
                            this.fm(u, e ? e.f : null, h ? h.f : null)
                        } else if (i === "SystemCategories") {
                            var s = r.c;
                            var o = r.b;
                            this.fn(u, s ? s.f : null, o ? o.f : null)
                        } else if (i === "IsLikedByUser") {
                            var p = r.c;
                            var y = r.b;
                            this.gt(u, p, y)
                        } else i === "IsQueuedForSubmission" && this.gu(f, u)
                    }
                }
            }
        }
    },
    gp: function(n, t) {
        var r = n;
        if (r.bH.ConversationId) {
            var s = this.ds(r.bH.ConversationId.Id);
            if (s) {
                var l = t;
                var o = !1;
                var h = s;
                for (var c in h) {
                    for (var a = {
                            key: c,
                            value: h[c]
                        }, i = a.value, f = 0; f < i.a().b(); f++) {
                        var v = i.a().a(f).Id;
                        if (r.bH.ItemId.Id === v) {
                            if (_lm.a.a(r) && !r.a() && i.bH.UnreadCount > 0) {
                                i.o(i.bH.UnreadCount - 1);
                                o || this.fj()
                            }!o && l.a && this.gi();
                            i.a().o(f);
                            r.bT() && r.bT().b() > 0 && this.fm(i, r.bT().f, new _j.l);
                            r.cE() && r.cE().b() > 0 && this.fn(i, r.cE().f, new _j.l);
                            break
                        }
                    }
                    for (var u = 0; u < i.e().b(); u++)
                        if (i.e().a(u).Id === r.bH.ItemId.Id) {
                            i.e().o(u);
                            if (i.c())
                                for (var e = 0; e < i.c().b(); e++) i.c().a(e).Id === r.bH.ItemId.Id && i.c().o(e);
                            break
                        }
                    if (!i.a().b()) {
                        this.y(this.bH - 1);
                        this.bx.A(i, 4)
                    }
                    o = !0
                }
            }
        }
    },
    fi: function(n, t, i, r, u) {
        var f = new _g.ba;
        f.Item = new _g.d("ConversationInstanceKey");
        f.FieldURIOrConstant = new _g.Z;
        var o = new _g.Y;
        o.Value = n;
        f.FieldURIOrConstant.Item = o;
        var s = new _g.bf(f);
        var e = new _g.bj(i, s);
        e.MaxEntriesReturned = t;
        this.r() && (this.r().f = this.bY);
        return this.dM(e, !1, r, u)
    }
};
_lm.d = function(n, t, i, r, u, f, e) {
    _lm.d.resolveInheritance();
    this.c = this.u;
    this.d = this.s;
    _lm.d.initializeBase(this, [n, t, i, r, u, f, e])
};
_lm.d.prototype = {
    x: function() {
        return _h.x.e(this.l.a, this.l.b)
    },
    r: function() {
        return _h.b.T(this.j)
    },
    e: function() {
        var n = null;
        if (!_h.l.a(this.j) || this.k)
            if (this.k) n = [new _h.dV(this)];
            else {
                var t = new _h.z(this, !0, this.x(), this.m, this.o, this.n, null, this.p, null);
                n = [t]
            }
        return n
    }
};
_lm.c = function(n, t, i) {
    this.bw = Function.createDelegate(this, this.dM);
    this.cc = Function.createDelegate(this, this.eb);
    this.cR = Function.createDelegate(this, this.T);
    _lm.c.initializeBase(this, [n, i ? i : _lm.c.a(n), t]);
    this.S = new _h.dp(201, this.cR, t)
};
_lm.c.a = function(n) {
    if (_h.bJ.isInstanceOfType(n)) return _lm.a.b(n);
    else {
        var t = new _h.z(n, !1, null);
        return [t]
    }
};
_lm.c.prototype = {
    S: null,
    r: function() {
        return this.bC.k
    },
    ec: function(n) {
        this.bC.k = n;
        return n
    },
    H: function(n) {
        this.S.F(n);
        return n
    },
    bW: function() {
        return this.bC.m
    },
    W: function() {
        return this.bC.o
    },
    B: function() {
        return this.bC.n
    },
    bJ: function() {
        return this.bC.l
    },
    bD: function() {
        return _a.a.dx
    },
    dg: function(n) {
        return this.cy(n)
    },
    P: function(n) {
        return this.dQ(n)
    },
    ed: function(n) {
        this.ec(n);
        this.dG(!0)
    },
    Z: function(n) {
        for (var f = [], i = 0; i < this.bx.x.length; i++) {
            var t = this.bx.x[i];
            var r = t.a();
            if (_lm.a.a(t) && r !== n) {
                var u = this;
                _h.c.a(t, _g.bG.a, r, n, function(n, t) {
                    n.h(t)
                })
            }
        }
    },
    Q: function() {
        _h.u.prototype.Q.call(this);
        this.S.Q()
    },
    z: function() {
        _h.u.prototype.z.call(this);
        this.S.z()
    },
    bK: function(n) {
        var r;
        var u, t;
        var i = (t = this.fx(n, u = {
            val: r
        }), r = u.val, t);
        i.fV(this.e());
        return i
    },
    fw: function(n) {
        var t = _g.f.a(this.dd(n));
        t.fV(this.e());
        return t
    },
    bd: function(n, t) {
        if (n) {
            var i = this.P(n);
            i && (this.ck[n] = !0)
        }
    },
    l: function(n, t) {
        var i = this.dQ(n.Id);
        i && this.bZ(i, t, !1, !1, t, t)
    },
    G: function(n) {
        for (var t = 0; t < this.bx.x.length; t++) {
            var i = this.bx.x[t];
            if (!i) return;
            n(i)
        }
    },
    D: function(n) {
        for (var i = 0; i < this.bx.x.length; i++) {
            var t = this.bx.x[i];
            if (t && t.bH.ItemId.Id === n) return t
        }
        return null
    },
    R: function(n) {
        var i, t;
        var u, r;
        this.dP(n, u = {
            val: i
        }, r = {
            val: t
        }), i = u.val, t = r.val;
        t && this.bZ(t, !0, !0, !1, !0, !0);
        i && this.bZ(i, !0, !0, !1, !0, !0)
    },
    bz: function() {
        this.S.dispose();
        _lm.f.prototype.bz.call(this)
    },
    cK: function(n, t, i) {
        if (this.r()) {
            this.r().f = this.bY;
            this.bY && this.be(this.cZ)
        }
        return this.cX(_h.x.a(n.a, n.b), t, null, i)
    },
    cL: function(n, t, i, r) {
        return this.cY(n, t, "Beginning", i, r)
    },
    dv: function(n, t, i, r) {
        return this.cY(n, t, "End", i, r)
    },
    da: function(n) {
        return new _h.cs(n)
    },
    cx: function(n, t) {
        var i = n;
        var r = null;
        switch (this.bJ().a) {
            case "DateTimeReceived":
                r = _a.d.b(t.Item.DateTimeReceived);
                return i.cr().a(r);
            case "ReceivedOrRenewTime":
                var s = t.Item.ReceivedOrRenewTime ? _a.d.b(t.Item.ReceivedOrRenewTime) : _a.d.b(t.Item.DateTimeReceived);
                return i.dM().a(s);
            case "DateTimeSent":
                r = _a.d.b(t.Item.DateTimeSent);
                return i.cK() ? i.cK().a(r) : -1;
            case "DateTimeCreated":
                r = _a.d.b(t.Item.DateTimeCreated);
                return i.dT().a(r);
            case "ItemLastModifiedTime":
                r = _a.d.b(t.Item.LastModifiedTime);
                return i.S().a(r);
            case "From":
                var o = "";
                var e = "";
                _g.x.isInstanceOfType(i) && i.b() && i.b().Mailbox && (o = i.b().Mailbox.Name);
                _g.J.isInstanceOfType(t.Item) && t.Item.From && t.Item.From.Mailbox && (e = t.Item.From.Mailbox.Name);
                return o !== e ? -2 : 0;
            case "Size":
                return i.bH.Size === t.Item.Size ? 0 : i.bH.Size < t.Item.Size ? -1 : 1;
            case "Subject":
                return i.bH.Subject !== t.Item.Subject ? -2 : 0;
            case "HasAttachments":
                return i.bH.HasAttachments !== t.Item.HasAttachments ? 0 : i.bH.HasAttachments ? 1 : -1;
            case "Importance":
                var c = i.bg();
                return c !== t.Item.Importance ? -2 : 0;
            case "Flag":
                var u = i.bX();
                return u.a() === t.Item.Flag.FlagStatus ? 0 : u.a() === "Flagged" || u.a() === "Complete" && t.Item.Flag.FlagStatus === "NotFlagged" ? 1 : -1;
            case "ItemClass":
                return i.bH.ItemClass !== t.Item.ItemClass ? -2 : 0;
            case "DisplayTo":
                var h = i.bH.DisplayTo;
                var f = null;
                _g.J.isInstanceOfType(t.Item) && (f = t.Item.DisplayTo);
                return h !== f ? -2 : 0;
            default:
                throw Error.argument("SortColumn", String.format("Unknown SortColumn {0}", this.bJ().a));
        }
    },
    cO: function(n, t) {
        var i = n;
        i.du(t)
    },
    cj: function(n) {
        _lm.f.prototype.cj.call(this, n);
        var t = n;
        _h.d.a().d(t.bH.ItemId.Id) ? _h.d.a().e(t.bH.ItemId.Id) : _h.d.a().b(t.bH.ItemId.Id, t);
        this.dY(t.bH.ItemId.Id, this.cc, this.bw)
    },
    ci: function(n) {
        _lm.f.prototype.ci.call(this, n);
        var t = n;
        _ff.i.a(this.dg(t.bH.ItemId.Id)) || this.de(t.bH.ItemId.Id, this.cc, this.bw);
        _h.u.b || this.S.w(t);
        _h.d.a().c(t.bH.ItemId.Id)
    },
    T: function(n) {
        return _lm.a.a(n)
    },
    dK: function(n, t) {
        var i = n.x.length > 0 ? "MailFolderItemQueryTable.PostValidateMergeRows. First item : " + n.x[0].bH.ItemId.Id : "MailFolderItemQueryTable.PostValidateMergeRows. No item.";
        _h.u.prototype.dK.call(this, n, t)
    },
    eL: function(n, t) {
        if (this.bW() !== "All") {
            t(4);
            return !0
        }
        return !1
    },
    eJ: function(n, t) {
        if (!this.bJ()) return !1;
        var i = this.bJ().b === "Ascending" ? "Ascending" : "Descending";
        if (i !== _g.bt.a || this.bJ().a !== _g.bt.c(this.e())) {
            t(5);
            return !0
        }
        return !1
    },
    dy: function(n, t) {
        var r = new _bc.i(this.e());
        var i = this;
        this.fG(n, r, function(u) {
            u ? t(1) : i.fF(n, r, function(r) {
                r ? t(7) : _lm.f.prototype.dy.call(i, n, t)
            })
        })
    },
    cI: function(n) {
        if (this.bY && !_h.u.b) {
            var i = n;
            if (i.s)
                for (var r = 0; r < i.s.length; r++) {
                    var t = this.bK(i.s[r]);
                    if (!t.cL() || !t.fy) {
                        this.co(t);
                        this.bZ(t, !0, !0, !1, !0, !1);
                        break
                    }
                }
        }
    },
    bZ: function(n, t, i, r, u, f) {
        var e = n;
        if ((t || e.bH.IsDraft) && !_h.u.b && (!this.h() || u) && (!this.r() || u) && this.T(e) && !this.S.m(e) && !(e.bH.ItemId.Id in this.ck) && (e.bH.IsDraft || !i || !e.ck() || e.dh)) {
            if (!u) {
                for (var s = Math.min(10, this.bx.x.length), o = 0, o = 0; o < s; o++)
                    if (this.bx.x[o].bH.ItemId.Id === e.bH.ItemId.Id) break;
                if (o >= s) return
            }
            this.S.f(e, f)
        }
    },
    co: function(n) {
        _lm.f.prototype.co.call(this, n);
        this.S.i(n)
    },
    ea: function(n) {
        if (this.S.g && this.S.g.bH.InstanceKey === n) {
            this.S.i(null);
            this.cu()
        }
    },
    cr: function(n) {
        var t = n;
        _h.u.prototype.cr.call(this, n)
    },
    cG: function(n, t, i) {
        this.r() && (this.r().f = this.bY);
        return this.cX(n, !1, t, i)
    },
    eb: function(n, t) {
        var r = n;
        var i = t;
        if (_lm.a.a(n)) {
            !this.dh() && this.bG() && _g.u.isInstanceOfType(this.bG()) && i.a === "IsRead" && (r.a() ? this.df() : this.ds());
            i.a === "IsPinned" && this.eN(r)
        }
    },
    dM: function(n, t) {
        var i = n;
        if (i) {
            var s = t;
            var h = this.dg(i.bH.ItemId.Id);
            var r = !1;
            var u = h;
            for (var f in u) {
                var e = {
                    key: f,
                    value: u[f]
                };
                var o = e.value;
                this.S.b && o.bH.ItemId.Id === this.S.b && this.co(null);
                if (e.value.bH.InstanceKey) {
                    if (!r) {
                        this.dw();
                        if (!this.dh() && this.bG()) {
                            _lm.a.a(i) && _g.u.isInstanceOfType(this.bG()) && !i.a() && this.df();
                            s.a && this.di()
                        }
                        r = !0
                    }
                    this.bx.A(n, 4)
                }
            }
            this.cu()
        }
    },
    di: function() {
        if (this.bG().bH.TotalCount > 0) {
            var n;
            (n = this.bG()).k(n.bH.TotalCount - 1)
        }
    },
    ds: function() {
        var n;
        (n = this.bG()).h(n.bH.UnreadCount + 1)
    },
    df: function() {
        if (this.bG().bH.UnreadCount > 0) {
            var n;
            (n = this.bG()).h(n.bH.UnreadCount - 1)
        }
    },
    dh: function() {
        var t = _h.h.a().a(this.e());
        if (!t) return !1;
        for (var n = 0; n < t.length; n++)
            if (_lm.b.isInstanceOfType(t[n])) return !0;
        return !1
    },
    cY: function(n, t, i, r, u) {
        var f = new _g.ba;
        f.Item = _g.c.v();
        f.FieldURIOrConstant = new _g.Z;
        var o = new _g.Y;
        o.Value = n;
        f.FieldURIOrConstant.Item = o;
        var s = new _g.bf(f);
        var e = new _g.bj(i, s);
        e.MaxEntriesReturned = t;
        return this.cG(e, r, u)
    },
    cX: function(n, t, i, r) {
        var u = new _h.bm(this.e(), this.r(), null, "MailListItem", n, t, this.bW(), this.bJ(), !1, i, this.W(), r, this.bC.q, this.B(), null, this.eF() && this.bY);
        u.be = this.cv;
        return u
    }
};
_lm.e = function(n, t, i, r, u, f, e, o) {
    _lm.e.resolveInheritance();
    this.c = this.u;
    this.g = this.w;
    this.d = this.s;
    this.e = this.t;
    this.f = this.v;
    this.h = this.x;
    _lm.e.initializeBase(this, [n, t, i, r, u, f, o]);
    this.q = e
};
_lm.e.prototype = {
    q: null,
    r: function() {
        var n = "DateTimeReceived";
        this.j && (n = _g.D.a(this.j, _h.l.c(this.j) ? "DateTimeReceived" : _h.b.e));
        return new _h.q(n, "Descending")
    }
};
_lm.g = function(n, t, i, r, u, f, e) {
    _lm.g.$$(this.$$gta["_lm.g"].T).initializeBase(this, [n]);
    this.m = i ? i : "All";
    this.l = r ? r : this.r();
    this.o = u;
    this.n = e;
    this.k = t;
    var o = null;
    if (this.k) {
        o = t.i + "_" + t.j + "_" + t.k;
        this.k.f && (o += "_" + Math.random())
    }
    this.i = this.i + "_item_" + o + "_" + this.m + "_" + null + "_" + this.o + "_" + this.n + "_" + this.l.a.toString() + "_" + this.l.b.toString() + "_";
    this.l.c() && (this.p = "renew")
};
_lm.g.$$ = function(n) {
    var u = _lm.__tc = _lm.__tc || {};
    var t = "g" + "$" + n.getName().replace(/\./g, "_");
    if (!u[t]) {
        var r = u[t] = function() {
            for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            _lm.g.apply(this, t)
        };
        var h = _h.dZ.$$(n);
        r.registerClass("_lm.__tc." + t, h);
        var o = {
            "_lm.g": {
                T: n
            },
            ctor: _lm.g
        };
        var c = h.prototype.$$gta;
        for (var l in c) {
            var s = {
                key: l,
                value: c[l]
            };
            o[s.key] = s.value
        }
        r.prototype.$$gta = o;
        var f = _lm.g.prototype;
        for (var e in f) {
            var i = {
                key: e,
                value: f[e]
            };
            "constructor" !== i.key && (r.prototype[i.key] = i.value)
        }
    }
    return u[t]
};
_lm.g.prototype = {
    k: null,
    u: function() {
        return this.k
    },
    m: "All",
    w: function() {
        return this.m
    },
    o: null,
    s: function() {
        return this.o
    },
    n: 0,
    t: function() {
        return this.n
    },
    l: null,
    p: null,
    v: function() {
        return this.p
    },
    x: function() {
        return _h.x.f(this.l.a, this.l.b, this.j)
    }
};
_lm.f = function(n, t, i) {
    this.fv = Function.createDelegate(this, this.gT);
    this.ez = Function.createDelegate(this, this.gD);
    this.eA = Function.createDelegate(this, this.gE);
    this.ft = Function.createDelegate(this, this.gR);
    this.fu = Function.createDelegate(this, this.gS);
    this.fq = Function.createDelegate(this, this.gP);
    this.fs = Function.createDelegate(this, this.gQ);
    this.fo = Function.createDelegate(this, this.gH);
    this.fp = Function.createDelegate(this, this.gI);
    this.cZ = Function.createDelegate(this, this.gL);
    _lm.f.initializeBase(this, [n, t, i]);
    this.cb = {};
    this.ct = {};
    this.ck = {};
    this.cQ = {};
    this.cz = new _h.eQ(this.fp, this.fo);
    this.dG(!0);
    this.dD = this.cM();
    this.eH = !!this.cf && this.cf.a().lv().Enabled;
    this.du = !!this.cf && this.cf.a().dk().Enabled;
    this.dU = !!this.cf && this.cf.a().di().Enabled
};
_lm.f.prototype = {
    eH: !1,
    dU: !1,
    cb: null,
    ct: null,
    cQ: null,
    dx: null,
    dD: 0,
    bY: !1,
    cp: "NoError",
    cm: null,
    cn: null,
    cd: null,
    cz: null,
    ck: null,
    dC: null,
    dO: null,
    dW: !1,
    dR: !1,
    cF: 0,
    dV: null,
    dS: !1,
    cN: null,
    du: !1,
    j: function() {
        return this.r()
    },
    eC: !1,
    q: function() {
        return this.eC
    },
    bc: function(n) {
        this.eC = n;
        return n
    },
    eB: !1,
    C: function() {
        return this.eB
    },
    bb: function(n) {
        this.eB = n;
        return n
    },
    dt: !1,
    bG: function() {
        if (this.dx) return this.dx;
        else {
            this.dx = _h.a.a(this.e());
            return this.dx
        }
    },
    dG: function(n) {
        if (this.bY !== n) {
            this.bY = n;
            this.by("IsFirstLoad")
        }
        return n
    },
    h: function() {
        return _h.u.prototype.h.call(this)
    },
    ch: function(n) {
        if (n < 0) {
            _j.e.c(this.bD(), "MailItemQueryTableBase - LoadedStartIndex cannot be set to a negative value.");
            n = 0
        }
        _h.u.prototype.ch.call(this, n);
        return n
    },
    bj: function() {
        return !this.fD()
    },
    bh: function() {
        return this.dR
    },
    A: function(n) {
        this.bB("OnRowAddedOrUpdatedInVirtualTable", n)
    },
    t: function(n) {
        this.bF("OnRowAddedOrUpdatedInVirtualTable", n)
    },
    K: function() {
        return !_g.N.isInstanceOfType(this.bC.b()) && !this.r() && !(this.e().Id === _g.b.a.nameToId("inbox").Id && this.bW() === "All")
    },
    cM: function() {
        return 25
    },
    dc: function() {
        return 200
    },
    eF: function() {
        return this.eH && this.bW() === "Hashtag"
    },
    E: function(n) {
        return n ? n.s() : null
    },
    bk: function(n) {
        if (!n) return null;
        var t = this.cb[this.E(n)];
        return t !== n ? t : null
    },
    br: function(n) {
        if (!n) return !1;
        for (var r = !1, t = 0; t < n.x.length; t++) {
            var u = n.x[t];
            var i = this.cb[this.E(u)];
            if (i && i !== u) {
                n.q(t, i);
                r = !0
            }
        }
        return r
    },
    gW: function() {
        this.dX(!0, !1, 203)
    },
    s: function() {
        return this.cv || this.e()
    },
    k: function(n, t, i) {
        if (!_h.a.l(this.e())) {
            this.cm = null;
            this.cn = null;
            this.cd = null;
            this.dR = !1;
            var r = n;
            r.b > this.dc() && (r.b = this.dc());
            if (this.bx.x.length && (!this.r() || !this.r().f || this.r().g !== 250) && !this.fD()) {
                this.cd = r;
                var f = !1;
                var e = this.cd.a + this.cd.b;
                var u = this.h() + this.bx.x.length;
                if (u < e && u > this.cd.a && u < this.bH) {
                    this.gU(this.cd, t, i);
                    f = !0
                }
                if (this.cd.a < this.h() && this.cd.a + this.cd.b > this.h()) {
                    this.gV(this.cd, t, i);
                    f = !0
                }
                if (!f) {
                    this.dS = !0;
                    this.dE(r, t, i)
                }
            } else this.dE(r, t, i)
        }
    },
    V: function(n, t) {
        var i = this;
        _j.m.a().a(this.bD(), "MailItemQueryTableBase::EndMeetingResponseAction", function() {
            if (!i.bM) {
                var r = !1;
                if (n) {
                    r = !!(r | n in i.ck);
                    delete i.ck[n]
                }
                if (t) {
                    r = !!(r | t in i.ck);
                    delete i.ck[t]
                }
                r && !i.bI && i.O()
            }
        }, _h.D.c)
    },
    bu: function(n) {
        return this.ha(n)
    },
    bt: function(n, t) {
        var i = this.eI(n, t);
        i || this.fK(n);
        return i
    },
    bv: function(n) {
        var t = this.fN(n);
        t || this.fK(n);
        return t
    },
    ba: function(n, t) {
        this.r().s(!0);
        var r = n.c();
        !r;
        if (r) {
            this.bV(!0);
            t && (_h.u.a = t);
            var i = n;
            this.cg(r, null, i.a || (i.a = Function.createDelegate(i, i.b)), !1, !0, 0);
            this.dZ(this.bx.x.length);
            this.bV(!1)
        }
        this.by("SearchStateChanged");
        this.cl(0)
    },
    bs: function() {
        if (!this.dO) {
            var n = new Date;
            if (!this.dC || n - this.dC > 1e4) this.fB();
            else {
                var t = this;
                this.dO = _j.m.a().a(this.bD(), "Delay QueryResultChanged reload", function() {
                    t.fB()
                }, 1e4 - (n - this.dC))
            }
        }
    },
    f: function(n) {
        return this.gJ(n)
    },
    X: function(n) {
        for (var h = [], i = 0; i < n.length; i++) {
            var t = "";
            var f = "";
            var r = "";
            var u = 0;
            var c, s, e, o;
            this.gB(n[i].Id, c = {
                val: u
            }, s = {
                val: t
            }, e = {
                val: f
            }, o = {
                val: r
            }), u = c.val, t = s.val, f = e.val, r = o.val;
            if (u < this.bx.x.length) {
                var l = new _h.dX(f, t, r, n[i].Id);
                _h.D.a().g(this.cs(), l);
                Array.add(h, t)
            }
        }
        return h
    },
    N: function(n, t) {
        var i = !!this.r() && !_j.h.a(this.r().i);
        if (!n.i() || !n.f()) {
            if (this.cp === "ErrorTimeoutExpired" || this.cp === "ErrorSearchFolderNotInitialized") {
                t(2);
                return
            }
            if (this.cp === "ErrorAccessDenied") {
                t(15);
                return
            }
            if (this.cp !== "NoError") {
                t(11);
                return
            }
            if (i) {
                t(12);
                return
            }
            _h.u.prototype.N.call(this, n, t);
            return
        }
        if (this.cp !== "ErrorConnectionFailed") {
            if (i && this.cp === "NoError") {
                t(12);
                return
            }
            _h.u.prototype.N.call(this, n, t);
            return
        }
        if (i) {
            t(3);
            return
        }
        this.eL(n, t) || this.eJ(n, t) || this.dy(n, t)
    },
    Z: function(n) {},
    U: function(n, t) {
        this.y(this.bH - n);
        this.cF += n;
        this.dV = new Date;
        var i = this.h() - t;
        this.ch(i >= 0 ? i : 0)
    },
    Y: function(n) {
        if (!this.bM)
            if (n) {
                var t = _j.n.b(_a.a.bC, 2, "HandleNotification_LazyReloadFromClientNotification");
                _a.k.bA(_a.k.a());
                this.eZ();
                _j.n.a(t)
            } else this.bl()
    },
    ca: function(n) {
        this.dX(!1, !1, n)
    },
    en: function() {
        var n = _j.n.b(_a.a.bC, 2, "ReloadFromClientNotification_PerformReload");
        _a.k.by(_a.k.a());
        this.dX(!1, !0, 203);
        _j.n.a(n)
    },
    bS: function(n, t) {
        var i = this.dz(n);
        i in this.ck || this.cO(n, t)
    },
    cj: function(n) {
        _h.u.prototype.cj.call(this, n);
        var i = this.E(n);
        this.cb[this.E(n)] = n;
        var t = this.dz(n);
        t in this.ct || (this.ct[t] = {});
        this.ct[t][i] = n
    },
    ci: function(n) {
        _h.u.prototype.ci.call(this, n);
        var i = this.E(n);
        delete this.cb[i];
        var t = this.dz(n);
        if (t in this.ct) {
            delete this.ct[t][i];
            _ff.i.a(this.ct[t]) || delete this.ct[t]
        }
    },
    cy: function(n) {
        return this.ct[n] || null
    },
    dQ: function(n) {
        var r = this.cy(n);
        if (!r) return null;
        var i = r;
        for (var t in i) {
            var u = {
                key: t,
                value: i[t]
            };
            return u.value
        }
        return null
    },
    gz: function(n) {
        return !!this.dQ(n)
    },
    cO: function(n, t) {
        n.l(t)
    },
    fx: function(n, t) {
        t.val = !1;
        var r = n.ItemId.Id;
        var i = _h.d.a().a(r);
        if (i) {
            t.val = !0;
            this.bS(i, n)
        } else i = _g.f.a(n);
        return i
    },
    bz: function() {
        var n;
        _a.h.a(n = {
            val: this.cz
        }), this.cz = n.val;
        _h.u.prototype.bz.call(this);
        this.cb = null;
        this.ct = null;
        this.ck = null;
        this.cQ = null
    },
    eL: function(n, t) {
        return !1
    },
    eJ: function(n, t) {
        return !1
    },
    dy: function(n, t) {
        n.x() && n.x().b(this.e()) ? t(10) : t(9)
    },
    fF: function(n, t, i) {
        var r = this;
        n.y(4, t, function(n) {
            i(n)
        })
    },
    fG: function(n, t, i) {
        var r = this;
        n.y(5, t, function(n) {
            i(n)
        })
    },
    bN: function(n, t) {
        if (!_h.o.isInstanceOfType(n)) throw Error.argumentType("range", n ? Object.getType(n) : null, _h.o, "range needs to be an IndexedRange object");
        this.cl(n.c);
        var i = this.cK(n, !1, t);
        this.bY && this.be(this.cZ);
        return i
    },
    bR: function(n) {
        var t = n;
        _h.u.a = t.l();
        if (_g.L.isInstanceOfType(t.e())) {
            this.ch(t.e().Offset);
            this.dD = t.e().MaxEntriesReturned
        } else _g.bj.isInstanceOfType(t.e()) && (this.dD = this.cd.b);
        this.r() ? this.r().g !== 250 ? this.dZ(t.f().length) : this.dZ(t.k()) : this.dZ(t.k());
        t.j() !== "NoError" && this.cW(!0);
        this.gc(t.o());
        this.cp = t.j();
        return this.da(t.f())
    },
    cA: function(n) {
        var t = n.G.ErrorCode;
        this.cp = _j.C.a(t) || _g.bs.a(t) ? n.j() : "ErrorConnectionFailed";
        _h.u.prototype.cA.call(this, n)
    },
    cU: function(n, t) {
        var i = this.dS ? 5 : 0;
        return _h.u.prototype.cU.call(this, n, i)
    },
    ff: function(n, t) {
        this.dF(n, t)
    },
    dX: function(n, t, i) {
        if ((this.bW() !== "Unread" || !this.dU) && !_h.a.l(this.e())) {
            if (this.bI) {
                t && (this.dW = !0);
                return
            }
            this.dR = t;
            var r = 0;
            r = !this.r() || this.r().g !== 250 ? Math.max(this.cM(), this.dD) : 80;
            this.cl(4);
            this.cz.c();
            n ? this.bP(this.cK(new _h.o(this.h(), r), !0, i), this.eT) : this.bP(this.cK(new _h.o(this.h(), r), !0, i))
        }
    },
    dT: function(n, t) {
        return !!this.cx(n, t)
    },
    gG: function(n) {
        return n ? this.dt ? n.Conversation.ConversationId.Id : n.Item.ItemId.Id : null
    },
    cE: function(n) {
        return n ? this.dt ? n.Conversation.InstanceKey : n.Item.InstanceKey : null
    },
    dd: function(n) {
        return n ? this.dt ? n.Conversation : n.Item : null
    },
    fw: function(n) {
        return this.bK(this.dd(n))
    },
    co: function(n) {},
    dz: function(n) {
        return n ? n.u() : null
    },
    cu: function() {
        this.h() || this.co(this.bx.x.length > 0 ? this.bx.x[0] : null)
    },
    ea: function(n) {},
    em: function() {
        _h.u.prototype.em.call(this);
        this.gx()
    },
    cB: function(n) {
        _h.u.prototype.cB.call(this, n);
        n === 200 && this.fH(Math.min(this.bx.x.length, 10));
        this.cu();
        if (this.dW) {
            this.dW = !1;
            this.gY()
        }
        this.dS = !1
    },
    fH: function(n) {
        for (var t = 0; t < n; t++) this.bZ(this.bx.x[t], !0, !0, !0, !1, !1)
    },
    dY: function(n, t, i) {
        if (!(n in this.cQ)) {
            _h.d.a().f.b(n, 1, t);
            _h.d.a().f.b(n, 2, i);
            this.cQ[n] = 1
        }
    },
    de: function(n, t, i) {
        if (n in this.cQ) {
            _h.d.a().f.a(n, 1, t);
            _h.d.a().f.a(n, 2, i);
            delete this.cQ[n]
        }
    },
    gL: function(n, t) {
        if (!this.d()) {
            this.dG(!1);
            this.bo(this.cZ)
        }
    },
    dn: function(n) {
        this.bj() ? this.gM(n) : this.fa(n)
    },
    cT: function(n) {
        var t = n;
        if (_g.L.isInstanceOfType(t.e())) return this.h() + t.f().length >= this.bH;
        else if (_g.bj.isInstanceOfType(t.e())) return t.e().BasePoint === "End" && this.h() + this.bx.x.length >= this.bH;
        return !1
    },
    cS: function(n) {
        _h.u.prototype.cS.call(this, n);
        Sys.IDisposable.isInstanceOfType(n) && n.dispose()
    },
    dw: function() {
        this.y(this.bH - 1);
        this.cF++
    },
    fK: function(n) {
        var t = new _h.dY(n, this.cE(n));
        this.cz.i(t)
    },
    eN: function(n) {
        if (this.du) {
            var i = this.cD(n.s());
            if (n.w() && this.h()) {
                this.bx.A(n, 4);
                return
            }
            for (var t = n.w() ? 0 : i + 1; t < this.bx.x.length;) {
                var r = this.bx.x[t];
                if (r.s() !== n.s() && this.dN(r, n) < 0) {
                    i < t && t--;
                    this.bx.D(i, t, n, 4);
                    break
                }
                t++
            }
            t === this.bx.x.length && this.bx.A(n, 4)
        }
    },
    dN: function(n, t) {
        if (this.bJ().c()) {
            var i = n.bd().o().a(t.bd().o());
            return i ? i : n.r().a(t.r())
        } else return this.bJ().f() ? n.V().a(t.V()) : n.r().a(t.r())
    },
    eI: function(n, t) {
        var i = this.fA(n);
        return this.gZ(n, t, i)
    },
    dB: function(n) {
        return n.be()
    },
    fC: function(n) {
        return n > -1 && this.bx.x[n].w()
    },
    fA: function(n) {
        if (this.du && this.bJ().d()) {
            var i = this.fw(n);
            var t = this.fz(i);
            return t >= 0 ? t - 1 : this.bx.x.length
        } else return this.gF(n)
    },
    fz: function(n) {
        var u = this.bJ().b === "Descending";
        var r = this.bx.x.length;
        if (u) {
            for (var i = 0; i < r; i++)
                if (this.dN(this.bx.x[i], n) <= 0) return i;
            return -1
        } else {
            for (var t = r - 1; t >= 0; t--)
                if (this.dN(this.bx.x[t], n) < 0) return t === this.bx.x.length - 1 ? -1 : t + 1;
            return 0
        }
    },
    gF: function(n) {
        if (n.Prior === "") return -1;
        else {
            var t;
            var u;
            var r, i;
            this.gC(n, r = {
                val: u
            }, i = {
                val: t
            }), u = r.val, t = i.val;
            return t
        }
    },
    gZ: function(n, t, i) {
        var f = this.cE(n);
        this.cz.g(f, n.EventType);
        if (i === -1) {
            var u = this.bK(this.dd(n));
            this.bL("OnRowAddedOrUpdatedInVirtualTable", this, this.dB(u));
            if (this.h()) {
                this.co(u);
                return !0
            }
        }
        if (this.gK(n)) return !0;
        if (i >= this.bx.x.length) return this.fE(n) ? !1 : !0;
        var r = this.bK(this.dd(n));
        this.fC(i) && this.bL("OnRowAddedOrUpdatedInVirtualTable", this, this.dB(r));
        this.bx.C(i + 1, r, 4);
        t || this.y(this.bH + 1);
        this.bZ(r, !0, !1, !1, !1, !1);
        i === -1 && this.co(r);
        this.hc(this.cE(n), n.Prior);
        return !0
    },
    gC: function(n, t, i) {
        t.val = n.Prior || "";
        i.val = this.fJ(t.val);
        if (i.val !== -1 && !(i.val < this.bx.x.length)) {
            for (var r = _h.D.a().c(this.cs(), t.val); r;) {
                t.val = r.b;
                r = _h.D.a().c(this.cs(), t.val)
            }
            i.val = this.fJ(t.val);
            return
        }
    },
    dE: function(n, t, i) {
        _h.u.prototype.k.call(this, n, t, i)
    },
    eG: function(n, t) {
        Array.removeAt(n, 0)
    },
    dP: function(n, t, i) {
        var r = this.db(n.Id);
        t.val = null;
        i.val = null;
        if (!(r >= this.bx.x.length)) {
            r - 1 >= 0 && (t.val = this.bx.x[r - 1]);
            r + 1 < this.bx.x.length && (i.val = this.bx.x[r + 1])
        }
    },
    cD: function(n) {
        var t = this;
        return this.bx.k(function(i) {
            return t.E(i) === n
        })
    },
    db: function(n) {
        var t = this;
        return this.bx.k(function(i) {
            return t.dz(i) === n
        })
    },
    cJ: function(n) {
        return _h.u.prototype.cJ.call(this, n)
    },
    dF: function(n, t) {
        for (var i = 0; i < n.length; i++) {
            var r = t.b(n[i]);
            var u = _h.D.a().h(this.cs(), r);
            if (u || this.ck[r]) {
                Array.removeAt(n, i);
                i--
            }
        }
    },
    gT: function() {
        this.ca(null)
    },
    fJ: function(n) {
        return _j.h.a(n) ? -1 : this.cD(n)
    },
    gK: function(n) {
        var t = this.cE(n);
        return t in this.cb
    },
    fy: function(n, t, i, r) {
        t.val = this.bx.x.length;
        i.val = "";
        r.val = "";
        t.val = this.cD(n);
        if (!(t.val >= this.bx.x.length)) {
            t.val - 1 >= 0 && (i.val = this.E(this.bx.x[t.val - 1]));
            t.val + 1 < this.bx.x.length && (r.val = this.E(this.bx.x[t.val + 1]))
        }
    },
    gB: function(n, t, i, r, u) {
        t.val = this.bx.x.length;
        i.val = "";
        r.val = "";
        u.val = "";
        t.val = this.db(n);
        if (!(t.val >= this.bx.x.length)) {
            i.val = this.E(this.bx.x[t.val]);
            t.val - 1 >= 0 && (r.val = this.E(this.bx.x[t.val - 1]));
            t.val + 1 < this.bx.x.length && (u.val = this.E(this.bx.x[t.val + 1]))
        }
    },
    gX: function(n, t, i) {
        if (this.bW() === "All" && !_h.D.a().d(this.cs(), t)) {
            var u = _h.D.a().e(this.cs(), t);
            var r = _h.D.a().i(this.cs(), t);
            if (u && r) {
                u.e(r.a);
                r.d(u.a)
            } else u ? u.e(n) : r && r.d(i)
        }
    },
    hc: function(n, t) {
        n = n ? n : "";
        t = t ? t : "";
        var r = _h.D.a().e(this.cs(), t);
        r && r.e(n);
        var i = _h.D.a().c(this.cs(), t);
        i && i.d(n)
    },
    gU: function(n, t, i) {
        var f = n.a + n.b;
        var u = this.h() + this.bx.x.length;
        if (!(f <= u)) {
            var s = f - u + 1;
            var r = this.bx.x[this.bx.x.length - 1];
            var o = this.E(r);
            var e = this.dB(r);
            this.cm = this.cL(o, s, e, t);
            this.cm.bd = i;
            this.cm.c(this.fs);
            this.cm.b(this.fq);
            this.dL(this.cm)
        }
    },
    gV: function(n, t, i) {
        if (!(this.h() <= n.a)) {
            var u = this.h() - n.a + 1;
            var f = this.E(this.bx.x[0]);
            var r = this.dB(this.bx.x[0]);
            this.cn = this.dv(this.E(this.bx.x[0]), u, r, t);
            this.cn.bd = i;
            this.cn.c(this.fu);
            this.cn.b(this.ft);
            this.dL(this.cn)
        }
    },
    gQ: function(n) {
        if (!this.bM) {
            var h = n.e();
            var f = h.Condition.Item;
            var l = f.Item.FieldURI;
            var a = f.FieldURIOrConstant.Item.Value;
            if (this.cm === n) {
                this.bV(!0);
                var t = this.bR(n);
                var i = t.c();
                if (!i.length) {
                    this.eD(n);
                    return
                }
                if (_g.ba.isInstanceOfType(f)) {
                    var c = t.b(i[0]);
                    if (this.db(c) >= this.bx.x.length) {
                        this.eD(n);
                        return
                    }
                }
                this.eG(i, t);
                this.dF(i, t);
                var e = 2;
                var s = this.h();
                var r = this.cd.a - s;
                r > 0 && this.bx.I(0, r, e);
                if (this.cd.a !== this.h() && r > 0) {
                    var o = this.h() + r;
                    this.fM(o)
                }
                var u = t;
                this.cg(i, n, u.a || (u.a = Function.createDelegate(u, u.b)), !1, !1, e);
                this.cu();
                this.eD(n)
            }
        }
    },
    eD: function(n) {
        this.bV(!1);
        this.bQ = this.cm;
        this.cm = null;
        this.cn || this.cr(n)
    },
    gS: function(n) {
        if (!this.bM) {
            var s = n.e();
            var c = s.Condition.Item;
            var a = c.FieldURIOrConstant.Item.Value;
            if (this.cn === n) {
                this.bV(!0);
                var u = this.bR(n);
                var t = u.c();
                if (!t.length) {
                    this.eE(n);
                    return
                }
                var l = u.b(t[t.length - 1]);
                if (this.db(l) >= this.bx.x.length) {
                    this.eE(n);
                    return
                }
                Array.removeAt(t, t.length - 1);
                this.dF(t, u);
                var f = this.h() + this.bx.x.length;
                var e = this.cd.a + this.cd.b;
                var o = f > e || this.cT(n) ? 3 : 5;
                if (this.cd.a !== this.h()) {
                    var h = this.h() - t.length;
                    this.fM(h)
                }
                var i = u;
                this.cg(t, n, i.a || (i.a = Function.createDelegate(i, i.b)), !1, !0, o);
                if (f > e) {
                    var r = f - e;
                    r > 0 && r <= this.bx.x.length && this.bx.I(this.bx.x.length - r, r, o)
                }
                this.cu();
                this.eE(n)
            }
        }
    },
    eE: function(n) {
        this.bQ = this.cn;
        this.bV(!1);
        this.cn = null;
        this.cm || this.cr(n)
    },
    gP: function(n) {
        if (!this.bM && this.cm === n) {
            this.bQ = this.cm;
            this.cm = null;
            this.cn || this.ep()
        }
    },
    gR: function(n) {
        if (!this.bM && this.cn === n) {
            this.bQ = this.cn;
            this.cn = null;
            this.cm || this.ep()
        }
    },
    gI: function(n) {
        if (this.bM) {
            this.cz.c();
            return !0
        }
        var t;
        switch (n.a.EventType) {
            case "RowAdded":
                t = this.eI(n.a, !1);
                break;
            case "RowModified":
                t = this.fN(n.a);
                break;
            default:
                t = !1;
                break
        }
        return t
    },
    gH: function() {
        this.bM || this.O(203)
    },
    fB: function() {
        if (!this.bM) {
            this.dC = new Date;
            this.dO = null;
            this.gW()
        }
    },
    fE: function(n) {
        if (!this.bx.x.length) return !this.bH;
        var t = this.cx(this.bx.x[0], n);
        var i = this.cx(this.bx.x[this.bx.x.length - 1], n);
        return t === -2 ? !1 : this.bJ().b === "Ascending" ? t <= 0 && i >= 0 || !this.h() && t > 0 : t >= 0 && i <= 0 || !this.h() && t < 0
    },
    ha: function(n) {
        var t = this.cE(n);
        var i = this.cD(t);
        if (i >= this.bx.x.length) {
            this.cF > 0 && this.cF--;
            this.ea(t);
            return !0
        }
        this.bW() === "Unread" && this.dU ? this.gy(t) : this.fL(t);
        return !0
    },
    gy: function(n) {
        var t = this.cb[n];
        if (t) {
            var i = new _h.ee(200, [t.W()], _h.b.f(), "None", 0, !1, null);
            this.cN = i;
            this.cN.c(this.eA);
            this.cN.b(this.ez);
            _a.g.a.a(this.cN)
        }
    },
    gE: function(n) {
        var t = n;
        this.cN.U(this.eA)
    },
    gD: function(n) {
        var u = n;
        var o = u.h();
        if (o === "ErrorItemNotFound") {
            var s = u.k[0].Id;
            var t = this.cy(s);
            if (t) {
                var i = t;
                for (var r in i) {
                    var f = {
                        key: r,
                        value: i[r]
                    };
                    var e = this.E(f.value);
                    this.fL(e)
                }
            }
        }
        this.cN.T(this.ez)
    },
    fL: function(n) {
        var r = "";
        var i = "";
        var t;
        var e, f, u;
        this.fy(n, e = {
            val: t
        }, f = {
            val: r
        }, u = {
            val: i
        }), t = e.val, r = f.val, i = u.val;
        this.bx.y(t, 4);
        this.gA();
        this.gX(r, n, i);
        this.ea(n)
    },
    fN: function(n) {
        var t = this.fA(n);
        return this.hb(n, t)
    },
    hb: function(n, t) {
        var u = this.cE(n);
        this.cz.g(u, n.EventType);
        if (_h.D.a().c(this.cs(), u)) return !0;
        var s = this.gG(n);
        if (s in this.ck) return !0;
        var r = this.cD(u);
        if (r >= this.bx.x.length) {
            n.EventType = "RowAdded";
            return this.eI(n, !0)
        }
        var i = this.bx.x[r];
        var o = "";
        r > 0 && (o = this.bx.x[r - 1].s());
        t === -1 && this.co(i);
        if (t >= this.bx.x.length)
            if (this.dT(i, n))
                if (this.fE(n)) return !1;
                else {
                    this.bx.y(r, 4);
                    return !0
                }
        else {
            this.bS(i, this.dd(n));
            this.bZ(i, !1, !1, !1, !1, !1);
            return !1
        }
        if (t === -1 && this.h()) {
            this.bx.y(r, 4);
            return !0
        }
        var h = t === -1 ? "" : this.E(this.bx.x[t]);
        var c = h === o;
        var e = this.dT(i, n);
        this.bS(i, this.dd(n));
        if (!e && c) {
            this.bZ(i, !1, !1, !1, !1, !1);
            return !0
        }(n.Prior === "" || this.fC(t)) && this.bL("OnRowAddedOrUpdatedInVirtualTable", this, this.dB(i));
        if (t === -1) {
            this.bx.D(r, 0, i, 4);
            this.bZ(i, !1, !1, !1, !1, !1);
            return !0
        }
        if (t === r - 1) {
            this.bx.D(r, r, i, 4);
            this.bZ(i, !1, !1, !1, !1, !1);
            return !0
        }
        if (e) {
            var f = t + 1;
            r < f && f--;
            this.bx.D(r, f, i, 4)
        } else return !1;
        this.bZ(i, !1, !1, !1, !1, !1);
        return !0
    },
    fD: function() {
        return this.bJ().a === "ConversationUniqueSenders" || this.bJ().a === "ConversationUniqueRecipients" || this.bJ().a === "ConversationItemClasses" ? !0 : !1
    },
    gY: function() {
        var n = this;
        _j.m.a().c(this.bD(), "MailItemQueryTableBase::ScheduleClientGeneratedReloadAction", function() {
            n.bM || n.en()
        })
    },
    gA: function() {
        this.cF > 0 ? this.cF-- : this.bH > 0 && this.y(this.bH - 1)
    },
    dZ: function(n) {
        this.cF = 0;
        this.y(n)
    },
    fM: function(n) {
        var t = new Date;
        !this.dV || t - this.dV > 15e3 ? this.ch(n) : this.ch(this.cd.a)
    },
    gJ: function(n) {
        for (var s = [], t = 0; t < n.length; t++) {
            var f = this.E(n[t]);
            var u = "";
            var i = "";
            var r = 0;
            var h, e, o;
            this.fy(f, h = {
                val: r
            }, e = {
                val: u
            }, o = {
                val: i
            }), r = h.val, u = e.val, i = o.val;
            if (r < this.bx.x.length) {
                var c = new _h.dX(u, f, i, this.dz(n[t]));
                _h.D.a().g(this.cs(), c);
                Array.add(s, f)
            }
        }
        return s
    },
    gx: function() {
        if (this.bh()) {
            var n = _j.n.b(_a.a.bC, 2, "OnTableLoadCompleted_ClientGeneratedLoadingTraced");
            _a.p.a("ALT3.1");
            if (_a.k.g()) {
                _a.k.bq(!0);
                _a.k.J()
            }
            _j.n.a(n)
        }
    },
    gM: function(n) {
        if (this.r() && this.r().g !== 250 && !this.r().j)
            if (this.r().p()) {
                this.bQ = n;
                this.dl();
                this.cl(0);
                this.cw(!1);
                return
            } else {
                var t = this;
                this.r().u(function() {
                    t.by("SearchStateChanged")
                })
            }
        _h.u.prototype.dn.call(this, n);
        if (n.m()) {
            n.p(!1);
            _j.m.a().c(_a.a.bs, "MailItemQueryTableBase : OnRowLoadSucceededInternal", this.fv)
        }
    },
    cs: function() {
        return this.s().Id
    }
};
_lm.f.registerClass("_lm.f", _h.u, _h.eO, _h.I, _h.eN, _j.bs, Sys.IDisposable);
_lm.b.registerClass("_lm.b", _lm.f, _h.eO, _h.E, _h.I, _h.eN, _j.bs, Sys.IDisposable);
_lm.d.registerClass("_lm.d", _lm.g.$$(_lm.b), _h.de, _h.fK);
_lm.c.registerClass("_lm.c", _lm.f, _h.eO, _h.F, _h.I, _h.eN, _j.bs, Sys.IDisposable);
_lm.e.registerClass("_lm.e", _lm.g.$$(_lm.c), _h.bJ, _h.fK);
Type.registerNamespace("_ta");
_ta.a = function() {};
_ta.a.g = function() {
    return _ta.a.e(_g.a.a().b().O())
};
_ta.a.h = function() {
    return _ta.a.e(_g.a.a().b().P())
};
_ta.a.e = function(n) {
    switch (n) {
        case 1:
            return new _ta.c("ms-bg-color-red", 1, 1, _ta.b.a(_fm.a.Trash), _u.R.NG);
        case 2:
            return new _ta.c("ms-bg-color-green", 2, 1, _ta.b.a(_fm.a.ey), _u.R.FI);
        case 5:
            return new _ta.c("ms-bg-color-orange", 5, 2, null, "");
        case 3:
            return new _ta.c("ms-bg-color-yellow", 3, 2, null, "");
        case 4:
            return new _ta.c("ms-bg-color-blue", 4, 2, null, "");
        default:
            return new _ta.c("ms-bg-color-white", 0, 0, null, "")
    }
};
_ta.a.a = "FlagStatusString";
_ta.a.c = "MarkAsReadOrUnreadToolTipText";
_ta.a.b = "OnMoveToContextMenuAvailable";
_ta.a.d = "ShowAsPinned";
_ta.a.f = 4;
Type.registerNamespace("_ta");
_ta.c = function(n, t, i, r, u) {
    _ta.c.initializeBase(this, [null]);
    this.k = n;
    this.l = t;
    this.m = i;
    this.r(r);
    this.n(u)
};
_ta.c.prototype = {
    k: null,
    m: 0,
    i: !1,
    f: function() {
        return this.i
    },
    a: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.by("IsHidden")
        }
        return n
    },
    b: function() {
        return this.k
    },
    c: function() {
        return this.m
    },
    h: function(n) {
        this.j = n;
        this.A();
        switch (this.l) {
            case 1:
                this.q(n.V());
                break;
            case 2:
                this.q(n.b());
                break;
            case 4:
                this.n(n.A());
                this.q(n.bc());
                break;
            case 3:
                this.q(n.f());
                this.r(n.i() ? _ta.b.a(_fm.a.ba) : _ta.b.a(_fm.a.M));
                this.n(n.a());
                break;
            case 5:
                this.q(n.bb());
                this.n(_ta.b.c(n.Z()));
                this.r(_ta.b.b(n.Z()));
                break
        }
    }
};
_ta.b = function() {};
_ta.b.a = function(n) {
    return _fm.b.a(n, _fm.WebfontSizes.a.h, "ms-fcl-w-b")
};
_ta.b.b = function(n) {
    switch (n) {
        case "Flagged":
            return _ta.b.a(_fm.a.d);
        default:
            return _ta.b.a(_fm.a.bl)
    }
};
_ta.b.c = function(n) {
    switch (n) {
        case "Flagged":
            return _u.R.MF;
        default:
            return _u.R.Qw
    }
};
_ta.c.registerClass("_ta.c", _y.lH, _y.lA, _y.lC);
Type.registerNamespace("_lv");

function MailListViewComponent() {}
MailListViewComponent.$$cctor = function() {
    _a.t.a().a(MailListViewComponent)
};
MailListViewComponent.prototype = {
    b: function(n, t, i) {
        var f = this;
        n.b(_y.gz, function() {
            return new _lv.z(n.a(_y.a), n.a(_g.a), n.a(_j.j), n.c(_h.n), n.a(_h.s), n.a(_y.G), n.d(_y.bp), n.c(_y.eZ), n.c(_y.eR), n.c(_h.db), n.a(_a.x), n.d(_y.V), n.d(_y.t), n.a(_y.bf), n.a(_y.q), n.a(_y.dJ), i.a() === "TouchNarrow" ? n.a(_y.bY) : null, i.a() === "TouchNarrow" ? n.a(_y.r) : null, i.a() === "TouchNarrow" ? n.a(_y.hp) : null, n.d(_y.I), n.c(_bc.K), n.d(_j.t), n.d(_y.ij), n.d(_y.hN), n.d(_y.ej), i, n.d(_h.T), n.d(_bc.f), n.c(_bc.L), n.c(_y.db))
        }).a();
        var u = this;
        n.b(_y.dJ, function() {
            return new _lv.q(n.a(_y.a), n.a(_a.q), n.a(_g.a), n.a(_h.Y), n.a(_a.z), n.a(_j.v), n.d(_y.hS))
        }).a();
        var r = this;
        n.b(_y.gK, function() {
            return new _lv.A(n.a(_y.a))
        }).a()
    },
    a: function() {
        return null
    }
};
_lv.g = function(n, t, i, r) {
    this.bB = Function.createDelegate(this, this.cV);
    this.be = Function.createDelegate(this, this.di);
    this.C = Function.createDelegate(this, this.dh);
    this.T = Function.createDelegate(this, this.db);
    this.D = Function.createDelegate(this, this.bU);
    this.B = Function.createDelegate(this, this.ct);
    this.bd = Function.createDelegate(this, this.df);
    this.U = Function.createDelegate(this, this.de);
    this.ce = Function.createDelegate(this, this.cI);
    this.R = Function.createDelegate(this, this.cZ);
    this.S = Function.createDelegate(this, this.da);
    this.bC = Function.createDelegate(this, this.dc);
    this.bG = Function.createDelegate(this, this.dm);
    this.bE = Function.createDelegate(this, this.dk);
    this.ch = Function.createDelegate(this, this.dd);
    this.bD = Function.createDelegate(this, this.dj);
    this.bF = Function.createDelegate(this, this.dl);
    this.cd = Function.createDelegate(this, this.cH);
    this.cj = Function.createDelegate(this, this.ds);
    this.cm = Function.createDelegate(this, this.dv);
    this.cl = Function.createDelegate(this, this.du);
    this.cg = Function.createDelegate(this, this.cX);
    this.ck = Function.createDelegate(this, this.dt);
    this.ci = Function.createDelegate(this, this.cu);
    this.cf = Function.createDelegate(this, this.cJ);
    _lv.g.initializeBase(this);
    this.bf = t;
    this.dq(n);
    this.w = i;
    this.bq = r;
    this.bl = new _j.g(this.cf, _lv.g.a);
    this.bJ = new _j.g(this.ci, _lv.g.a);
    this.bK = new _j.g(this.ck, _lv.g.a);
    this.bI = new _j.g(this.cg, _lv.g.a);
    this.bO = new _j.g(this.cl, _lv.g.a);
    this.bN = new _j.g(this.cm, null);
    this.bn = new _j.g(this.cj, null);
    this.bH = new _j.g(this.cd, _lv.g.a);
    this.v = -1;
    this.q = this.bf.a() === "Mouse";
    if (this.q) {
        this.l.hG && this.l.apcl("SelectedItem", this.bF);
        this.l.fd.b().apcl("MailTriageOnHoverActions", this.bD)
    }
    i && i.a().gw().Enabled && _g.D.h(!0);
    _dh.a(r, this)
};
_lv.g.prototype = {
    z: null,
    w: null,
    bq: null,
    l: null,
    x: !1,
    E: null,
    v: 0,
    O: null,
    q: !1,
    H: function() {
        return null
    },
    bg: function() {
        return null
    },
    bM: function() {
        this.z || this.dn();
        return this.z
    },
    br: function(n) {
        if (this.z !== n) {
            this.z = n;
            this.eJ("OnHoverActions")
        }
        return n
    },
    cR: function() {
        return this.n().s()
    },
    dq: function(n) {
        if (this.l !== n) {
            this.l = n;
            this.eJ("ParentListViewModel")
        }
        return n
    },
    bf: null,
    M: function() {
        return this.q ? (new _b.U).a(this.I(), null) : (new _b.M).a(this.I(), null)
    },
    ba: function() {
        return this.l.eR.bH.FolderId
    },
    bl: null,
    V: function() {
        return this.bl
    },
    bJ: null,
    e: function() {
        return this.bJ
    },
    bH: null,
    b: function() {
        return this.bH
    },
    g: function() {
        return this.l.gZ
    },
    bK: null,
    bb: function() {
        return this.bK
    },
    bI: null,
    bO: null,
    f: function() {
        return this.bO
    },
    bN: null,
    bc: function() {
        return this.bN
    },
    bn: null,
    bL: function() {
        return _g.j.h(this.l.eR)
    },
    A: function() {
        return this.n().j() ? _u.R.Ox : _u.R.Ti
    },
    d: function() {
        return _n.l.j(this.n().w(), this.q)
    },
    c: function() {
        return _n.l.i(this.n().w(), this.q)
    },
    Z: function() {
        return this.n().M()
    },
    co: function() {
        return _n.l.f(this.Z(), this.q)
    },
    X: function() {
        return _n.l.e(this.Z(), this.q)
    },
    cT: function() {
        return this.n().r()
    },
    W: function() {
        return _n.l.d(this.Z(), this.q)
    },
    r: function() {
        return this.l.fJ
    },
    cp: function() {
        return this.n().bg()
    },
    bQ: function() {
        return this.n().bA()
    },
    bR: function() {
        return _n.l.a(this.n().bC(), this.q, !1)
    },
    Y: function() {
        return _y.F.d(this.n().M())
    },
    j: function() {
        return this.l.ka() || this.cQ() && _h.l.b(this.l.eR.bH.FolderId) || this.l.oO()
    },
    cq: function() {
        return _a.F.h()
    },
    i: function() {
        return this.x
    },
    cw: function(n) {
        if (this.x !== n) {
            this.x = n;
            this.eJ(_ta.a.d)
        }
        return n
    },
    bm: null,
    a: function() {
        return this.bm
    },
    h: function() {
        var n = this.l.fc;
        if (n) return n.w();
        else this.l.bk(this.l.m(), this.ch);
        return null
    },
    bt: function(n) {
        if (this.v !== n) {
            this.v = n;
            this.eU("SmallIcon", "SmallIconString", "SmallIconImage")
        }
        return n
    },
    cU: function() {
        return _y.bx.b(this.v)
    },
    bp: function() {
        return _n.l.g(this.v, this.q)
    },
    bo: function() {
        return "None"
    },
    cK: function() {
        return _n.l.b(this.bo())
    },
    cr: function() {
        var n = this.l.fc;
        return !!n && !!n.a() && this.n() === n.a().e[0] && n.a().k
    },
    bP: function() {
        return this.E !== _u.R.Ja
    },
    cv: function(n) {
        if (this.E !== n) {
            this.E = n;
            this.eQ(["Categories", "CategoriesToDisplay", "CategoryToolTipText", "HasAnyCategoriesToDisplay"])
        }
        return n
    },
    cO: function() {
        return !!this.H() && this.H().b() > 0
    },
    cN: function() {
        return !!this.bg() && this.bg().b() > 0
    },
    K: function() {
        this.O || this.p();
        return this.O
    },
    bu: function(n) {
        if (this.O !== n) {
            this.O = n;
            this.eJ("TopPropertyIconsToShow")
        }
        return n
    },
    cn: function() {
        return this.bP() ? this.E : _u.R.Gw
    },
    cP: function() {
        return _y.bx.d(this.n().bg())
    },
    cL: function() {
        return _y.bx.c(this.Z())
    },
    cM: function() {
        return _y.bx.a(this.n().bz())
    },
    cS: function() {
        return this.n().w()
    },
    cQ: function() {
        return !!this.l.eI
    },
    dg: function(n) {
        this.l.sg(n ? this.n() : null)
    },
    cW: function() {
        return !this.n()
    },
    cV: function() {
        this.l.fM || this.l.qP(this.n())
    },
    eL: function() {
        this.n() && this.t();
        if (this.q) {
            this.dp();
            this.l.rpcl("SelectedItem", this.bF);
            if (this.l.fT()) {
                this.l.rpcl("ReadingPaneOff", this.bE);
                this.l.rpcl("ShowCategoryColumn", this.bG)
            }
            this.l.rpcl("ExtendedBaseListViewModel", this.bC);
            this.l.fd.b().rpcl("MailTriageOnHoverActions", this.bD)
        }
        _a.h.b(this.z);
        _a.gd.prototype.eL.call(this)
    },
    cs: function() {
        this.dr();
        this.bV()
    },
    bV: function() {
        var n = this.cY(this.H(), this.bg());
        if (n && n.length) {
            for (var i = n[0], t = 1; t < n.length; t++) i += ", " + n[t];
            this.cv(i)
        } else this.cv(_u.R.Ja)
    },
    bv: function() {
        if (this.cS()) {
            this.cw(this.j());
            this.bm = _u.R.LO
        } else {
            this.cw(!1);
            this.bm = this.q ? _u.R.Hq : _u.R.Ke
        }
        this.eN("PinActionButtonImageId", "PinActionButtonHoverImageId")
    },
    db: function(n, t) {
        this.bv();
        this.eJ("DateTimeToDisplay")
    },
    di: function(n, t) {
        this.eN("IsSmimeClass", "SmimeType")
    },
    bU: function(n, t) {
        this.eJ(_ta.a.c)
    },
    df: function(n, t) {
        this.eN("Importance", "ImportanceString")
    },
    ct: function(n, t) {
        this.eQ(["FlagStatus", _ta.a.a, "FlagPropertyImage", "FlagActionButtonImage", "FlagActionButtonHoverImage"])
    },
    de: function(n, t) {
        this.eJ("HasAttachmentsString");
        this.O && this.p()
    },
    dh: function(n, t) {
        this.bv()
    },
    cJ: function() {
        this.l.fM || this.l.mg([this.n()], !0)
    },
    cu: function() {
        this.l.fM || this.l.hh(this.n())
    },
    cH: function() {
        this.q ? this.l.fM || this.l.qV([this.n()], !0) : this.l.qW([this.n()])
    },
    dt: function() {
        if (!this.l.fM) {
            this.l.pK([this.n()], !0);
            this.eJ("FlagOrUnflagToolTipText")
        }
    },
    cX: function() {
        this.l.fM || this.l.ng(!1, [this.n()])
    },
    du: function() {
        this.l.fM || this.l.sJ(this.n(), !0)
    },
    dv: function() {
        this.l.fM || this.l.pL(this.n(), !0)
    },
    ds: function() {
        this.l.sA([this.n()], !0)
    },
    dr: function() {
        if (this.l.fT()) {
            this.l.apcl("ReadingPaneOff", this.bE);
            this.l.apcl("ShowCategoryColumn", this.bG)
        }
        var n = this.l.fc;
        n ? n.a() ? n.a().apcl("IsShownInListView", this.S) : n.e("CategoryContextMenuViewModel", this.R) : this.l.apcl("ExtendedBaseListViewModel", this.bC)
    },
    dl: function(n, t) {
        this.eJ("ShouldShowIntroductionPeek")
    },
    dc: function(n, t) {
        var i = this.l.fc;
        i.n("CategoryContextMenuViewModel", this.R);
        i.e("CategoryContextMenuViewModel", this.R)
    },
    dj: function(n, t) {
        if (this.z) {
            _a.h.b(this.z);
            this.G()
        }
    },
    G: function() {},
    dn: function() {
        this.l.eR.a() !== "recoverableitemsdeletions" && (this.l.gc ? this.G() : this.l.jq.a(this.ce))
    },
    cI: function(n) {
        this.l.gc = n;
        this.G()
    },
    cZ: function(n, t) {
        var i = this.l.fc.a();
        i.rpcl("IsShownInListView", this.S);
        i.apcl("IsShownInListView", this.S)
    },
    da: function(n, t) {
        this.n() === this.l.fc.a().e[0] && this.eJ("ShowCategoryMenuInListView")
    },
    dk: function(n, t) {
        this.p()
    },
    dm: function(n, t) {
        this.p()
    },
    cY: function(n, t) {
        var i = new Array(0);
        this.cO() && Array.addRange(i, n.e());
        if (this.cN())
            for (var r = 0; r < t.b(); r++) {
                var u = _g.A.d(t.a(r));
                u && Array.add(i, u)
            }
        if (i.length) {
            i.sort();
            return i
        }
        return null
    },
    dp: function() {
        var n = this.l.fc;
        if (n) {
            if (n.a()) {
                n.a().o(!1);
                n.a().rpcl("IsShownInListView", this.S)
            }
            n.n("CategoryContextMenuViewModel", this.R)
        }
    },
    dd: function(n) {
        this.eJ(_ta.a.b)
    }
};
_lv.d = function(n, t, i, r, u) {
    _lv.d.initializeBase(this, [t, i, r, u]);
    this.m = n;
    _dh.a(u, this);
    this.bx = t.fp ? t.fp.a : "ConversationLastDeliveryTime";
    this.bs = t.ka() ? "LastDeliveryOrRenewTime" : this.bx === "ConversationLastModifiedTime" ? "LastModifiedTime" : "LastDeliveryTime";
    this.bv();
    this.bT()
};
_lv.d.prototype = {
    bh: null,
    bj: null,
    bi: null,
    Q: null,
    o: null,
    y: null,
    bs: null,
    m: null,
    bx: "FolderId",
    bS: function() {
        if (this.m && this.m.c()) {
            var n = this.m.c().b();
            this.m.P && --n;
            return n > 0
        }
        return !1
    },
    bo: function() {
        return this.m.bH.Charm
    },
    H: function() {
        return this.m.m()
    },
    bg: function() {
        return this.m.q()
    },
    I: function() {
        return this.bx === "ConversationLastModifiedTime" ? this.m.V() : this.m.h()
    },
    n: function() {
        return this.m
    },
    N: function() {
        this.t();
        this.m = null
    },
    G: function() {
        this.br(this.l.gc.b(this))
    },
    bT: function() {
        this.m.apcl("Categories", this.y || (this.y = Function.createDelegate(this, this.bw)));
        this.m.apcl("ItemClasses", this.o || (this.o = Function.createDelegate(this, this.s)));
        this.m.apcl("IconIndex", this.o || (this.o = Function.createDelegate(this, this.s)));
        this.m.apcl("HasIrm", this.o || (this.o = Function.createDelegate(this, this.s)));
        this.m.apcl("GlobalLikeCount", this.o || (this.o = Function.createDelegate(this, this.s)));
        this.m.apcl("HasAttachments", this.U);
        this.m.apcl("Importance", this.bd);
        this.m.apcl("AvailableFeaturesFlag", this.Q || (this.Q = Function.createDelegate(this, this.cx)));
        if (this.l.fn) {
            this.m.apcl("FlagStatus", this.B);
            this.m.apcl("UnreadCount", this.D);
            this.cs()
        }
        this.m.apcl("DraftItemIds", this.bi || (this.bi = Function.createDelegate(this, this.cz)));
        this.m.apcl("QueuedDraftId", this.bj || (this.bj = Function.createDelegate(this, this.cA)));
        this.m.apcl(this.bs, this.T);
        this.m.apcl("IsPinned", this.C);
        this.m.apcl("SmimeType", this.be);
        this.l.fT() && this.m.apcl("SystemCategories", this.y || (this.y = Function.createDelegate(this, this.bw)))
    },
    t: function() {
        this.m.rpcl("Categories", this.y || (this.y = Function.createDelegate(this, this.bw)));
        this.m.rpcl("ItemClasses", this.o || (this.o = Function.createDelegate(this, this.s)));
        this.m.rpcl("IconIndex", this.o || (this.o = Function.createDelegate(this, this.s)));
        this.m.rpcl("HasIrm", this.o || (this.o = Function.createDelegate(this, this.s)));
        this.m.rpcl("GlobalLikeCount", this.o || (this.o = Function.createDelegate(this, this.s)));
        this.m.rpcl("HasAttachments", this.U);
        this.m.rpcl("Importance", this.bd);
        this.m.rpcl("AvailableFeaturesFlag", this.Q || (this.Q = Function.createDelegate(this, this.cx)));
        if (this.l.fn) {
            this.m.rpcl("FlagStatus", this.B);
            this.m.rpcl("UnreadCount", this.D)
        }
        this.m.rpcl("DraftItemIds", this.bi || (this.bi = Function.createDelegate(this, this.cz)));
        this.m.c() && this.m.c().rpcl("Count", this.bh || (this.bh = Function.createDelegate(this, this.cy)));
        this.m.rpcl("QueuedDraftId", this.bj || (this.bj = Function.createDelegate(this, this.cA)));
        this.m.rpcl(this.bs, this.T);
        this.m.rpcl("IsPinned", this.C);
        this.m.rpcl("SmimeType", this.be);
        this.l.fT() && this.m.rpcl("SystemCategories", this.y || (this.y = Function.createDelegate(this, this.bw)))
    },
    p: function() {
        var n = _h.bi.b(this.m, !this.l.gw());
        this.bu(n.c(3));
        this.bt(n.b())
    },
    s: function(n, t) {
        this.K() && this.p()
    },
    bw: function(n, t) {
        this.l.fn && this.bV();
        this.l.bI() && this.l.fn || this.s(n, t)
    },
    cz: function(n, t) {
        this.m.c() && this.m.c().apcl("Count", this.bh || (this.bh = Function.createDelegate(this, this.cy)));
        this.eJ("HasDrafts")
    },
    cA: function(n, t) {
        this.eJ("HasDrafts")
    },
    cy: function(n, t) {
        this.eJ("HasDrafts")
    },
    cx: function(n, t) {
        this.l.nI(this.m)
    }
};
_lv.h = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot) {
    this.nB = Function.createDelegate(this, this.pX);
    _lv.h.initializeBase(this, [n, t, i, r, u, f, e, c, l, h, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot]);
    this.jj = o;
    this.kN = s;
    this.kS = this.fi.a() === "Mouse";
    this.jl = h;
    this.kQ = tt;
    _dh.a(tt, this)
};
_lv.h.prototype = {
    fB: null,
    gP: !1,
    jn: !1,
    hs: !1,
    ia: null,
    jj: null,
    jm: null,
    kN: null,
    kQ: null,
    jl: null,
    kS: !1,
    lM: function() {
        if (!this.eH.a().x.length) return "";
        var n = this.gm().length;
        return n <= 1 ? _u.R.Lx : String.format(_u.R.JO, n)
    },
    cQ: function() {
        return this.h() === 1 ? _u.R.Sg : String.format(_u.R.Bw, this.h())
    },
    dP: function() {
        return this.h() === 1 ? _u.R.Lj : String.format(_u.R.PL, this.h())
    },
    dO: function() {
        return this.h() === 1 ? _u.R.FC : String.format(_u.R.t, this.h())
    },
    jR: function() {
        return this.h() === 1 ? _u.R.a : String.format(_u.R.Eu, this.h())
    },
    dN: function() {
        var n;
        var i, t;
        t = this.dd(i = {
            val: n
        }), n = i.val, t;
        return n
    },
    dz: function() {
        return this.fB
    },
    cs: function(n) {
        if (this.fB !== n) {
            this.fB = n;
            n && this.fB.L(this.hs);
            this.v() !== 3 && this.eY && this.fB && this.fB.a().cb(this.eY) && this.nG(!0);
            this.eJ("LoadedConversationReadingPane")
        }
        return n
    },
    nG: function(n) {
        if (this.gP !== n) {
            this.gP = n;
            if (this.gP) {
                this.nC();
                this.nH(!1)
            }
            this.eJ("IsSelectedItemLoaded")
        }
        return n
    },
    nH: function(n) {
        if (this.jn !== n) {
            this.jn = n;
            this.eJ("ShowSpinnerDuringExpansion")
        }
        return n
    },
    qa: function(n) {
        if (this.hs !== n) {
            this.hs = n;
            this.fB && this.fB.L(this.hs)
        }
        return n
    },
    iy: function() {
        return "ConversationListView.Narrow.MultiSelectBar"
    },
    jQ: function() {
        return _u.R.JR
    },
    bT: function(n) {
        return _g.o.isInstanceOfType(n) ? this.nD(n) : n
    },
    bs: function(n) {
        return _lv.d.isInstanceOfType(n) ? n.m : n
    },
    dy: function(n) {
        return ""
    },
    ml: function(n, t) {
        var u = _a.b.b(_a.a.bA, n ? "ConversationListViewMarkAsClutter" : "ConversationListViewMarkAsNotClutter", !1, null);
        var r = this.eH.f(t);
        var i = new _h.ch(t, n, this.j(), r, 4);
        var f = this;
        this.ds(function() {
            _a.g.a.a(i)
        }, t);
        _a.b.a(u)
    },
    ko: function(n, t) {
        if (!t.c && this.fj.x.length > 1 || t.c === 2 && !this.fj.x.length) {
            this.nG(!1);
            this.cs(null)
        }
        _lv.b.prototype.ko.call(this, n, t)
    },
    fR: function() {
        _lv.b.prototype.fR.call(this);
        if (this.fi.a() === "Mouse") {
            this.nC();
            this.eY && !this.gP && this.qb();
            this.eI || this.fb.a(_a.U, new _a.U(19))
        }
    },
    gY: function(n, t, i) {
        var u = null;
        var f = null;
        if (this.eI && !_j.h.a(this.eI.a())) {
            f = this.eI.Y(null, !1);
            u = this.eI.O();
            t && f.o();
            f.h = _h.x.d()
        }
        u || (u = this.j());
        var e = this.nE(u, f);
        var r = this.pY(e, t);
        r.ex = this.fb;
        this.fi.a() === "Mouse" && (r.ey = !0);
        t ? r.O(200) : this.kR(r, new _h.o(0, this.gv()), 200, i);
        return r
    },
    kR: function(n, t, i, r) {
        n.k(t, i, r)
    },
    pY: function(n, t) {
        var i = null;
        if (t) {
            i = this.kP(this.eH.c());
            i.T(n.c())
        } else i = this.kP(n);
        return i
    },
    kP: function(n) {
        var i;
        var t = null;
        if (this.eH && this.eH.c().a() === n.a()) {
            t = this.eH;
            this.fA = !0
        } else {
            var u, r;
            t = (r = this.pZ(n, u = {
                val: i
            }), i = u.val, r);
            this.fA = i
        }
        this.kE(this.fA, t);
        return t
    },
    pZ: function(n, t) {
        return _h.c.m(n, this.jj, this.nB, t)
    },
    mK: function() {
        var n = this.m();
        if (n && n.length > 0) {
            var i = _lv.b.N();
            var t = this;
            this.gr.a(function(i) {
                var r = i.l(n, t.eH.e());
                t.ds(function() {
                    _a.g.a.a(r)
                }, n)
            });
            _a.b.a(i)
        }
    },
    jB: function(n, t) {
        var r = n;
        var i = _h.d.a().a(r.a().a(0).Id);
        i && _lv.b.prototype.jB.call(this, i, this.fh)
    },
    hK: function(n, t, i) {
        var e;
        var h = (e = new _a.K, e.a = !0, e);
        var o = _a.b.b(_a.a.v, t ? "MailArchive" : "MailMove", !1, h);
        var s = this.eH.f(n);
        var f = null;
        if (_g.N.isInstanceOfType(this.fh) || _h.l.a(this.fh) || _h.a.r(this.fh)) {
            f = new _y.dp(_a.g.a, this.fb, n, this.fh, 2);
            f.a = this.j();
            f.d = this.gl();
            f.b = s
        } else {
            var r = new _h.ba;
            r.f(n);
            r.l(this.eH.s());
            r.D = !!this.eI;
            r.p = s;
            r.q = this.j();
            r.be(this.fh);
            r.o = this.fG();
            r.t = _g.j.b(this.eR.bH.FolderId);
            this.he = r
        }
        var u = this;
        this.ds(function() {
            var e = _g.b.a.doesIdEqualName(u.eH.e(), "sentitems");
            u.bk(n, function(t) {
                t.b(n, e, e ? _u.R.GL : _u.R.GQ, _u.R.Oy)
            });
            if (i) {
                u.he.bc = !0;
                u.nF(u.he)
            }
            f ? f.f() : _a.g.a.a(u.he);
            var r = u.fH(n);
            u.iz(r);
            o.m = r.toString();
            _a.b.a(o);
            u.fb.a(_a.U, new _a.U(t ? 5 : 14))
        }, n)
    },
    nE: function(n, t) {
        return new _lm.d(n, t, this.fN, this.fp, this.gi, this.fg, this.fv)
    },
    mj: function(n) {
        var i = n;
        if (i && i.length > 0) {
            var u;
            var e = _a.b.b(_a.a.v, "MailCopy", !1, (u = new _a.K, u.a = !0, u));
            if (_g.N.isInstanceOfType(this.fh) || _h.l.a(this.fh) || _h.a.r(this.fh)) {
                var r = _g.o.a(i);
                if (r && r.length > 0) {
                    var o = new _h.bE(r, this.fh, this.fb);
                    o.b(this.kT);
                    this.is = o
                }
            } else {
                var t = new _h.bD;
                t.f(i);
                t.l(this.eH.e());
                t.D = !!this.eI;
                t.r(this.fh);
                this.is = t
            }
            _a.g.a.a(this.is);
            var f = this.fH(i);
            this.iz(f);
            e.m = f.toString();
            _a.b.a(e);
            this.fb.a(_a.U, new _a.U(7))
        }
    },
    kB: function(n) {
        var t = this.m();
        if (t && t.length > 0 && !this.fL) {
            var f = this.j();
            var r = !!f && _g.b.a.doesIdEqualName(this.eR.bH.FolderId, "deleteditems");
            var i = new _h.cZ(t, this.eH.s(), n);
            if (!r) {
                var u = this.eH.f(t);
                i.p = u
            }
            i.D = !!this.eI;
            this.md = i;
            var e = this;
            this.ds(function() {
                _a.g.a.a(i)
            }, t);
            r && this.eH.O(200)
        }
        this.de()
    },
    jI: function() {
        var n = new _h.cc(this.eR.bH.FolderId, null, _h.x.a(0, 1), !0, "Pinned", new _h.q("ConversationLastDeliveryTime", "Descending"));
        n.s = null;
        n.c(this.lh);
        _a.g.a.a(n)
    },
    hd: function(n, t) {
        var o = n ? "MailPin" : "MailUnpin";
        var r;
        var f = _a.b.b(_lv.h.a, o, !1, (r = new _a.K, r.a = !0, r));
        if (this.mc(t)) {
            var e = this.mp(t);
            e >= 0 && this.jz(e + 1)
        }
        var u = this;
        this.gr.a(function(i) {
            var r = i.h(t, n, u.j(), u.jl);
            _a.g.a.a(r)
        });
        this.pO(n);
        if (!_h.A.a().e()) {
            var s = this.oT(t, n);
            this.fb.a(_a.bl, new _a.bl(7, s, null, null, null, null, n ? _n.b.dr() : _n.b.dF()))
        }
        var i = this.fH(t);
        if (t.length === 1) {
            i.a("id", t[0].bH.ConversationId.Id);
            i.a("dt", t[0].h().o().i());
            i.a("cdt", _a.d.get_utcNow().i())
        }
        f.m = i.toString();
        _a.b.a(f)
    },
    iV: function(n, t) {
        var i = new _h.cd(n, t, this.j());
        i.o = this.fG();
        i.q = this.j();
        i.D = !!this.eI;
        i.t = _g.j.b(this.eR.bH.FolderId);
        return i
    },
    lV: function() {
        return 2
    },
    iN: function(n, t) {
        if (t) {
            var i = new _h.eJ(t, n, this.eH.g());
            i.p = this.eH.f(t);
            var r = this;
            this.ds(function() {
                _a.g.a.a(i)
            }, t);
            _h.A.a().f();
            this.de()
        }
    },
    nI: function(n) {
        if (n.bG() > 0 && n.a().b() === 1) {
            if (!n.t) {
                n.bh(2);
                this.pb(n.W())
            }
        } else n.bh(1)
    },
    gd: function(n) {
        if (!this.fp) throw Error.argumentNull("this.SortBy");
        this.bl(this.eC());
        if (!this.gx) return null;
        var r = this.fp.a === "ConversationLastDeliveryOrRenewTime" ? _g.f.i : null;
        if (this.fi.a() !== "Mouse") {
            var e = new _y.cq;
            var u = this;
            return new _y.bm(e, function(n) {
                return u.fp.a === "ConversationLastDeliveryOrRenewTime" ? n.n() : n.h()
            }, n, r, !1)
        }
        var t;
        switch (this.fp.a) {
            case "ConversationSize":
                var o = new _y.iN;
                var b = this;
                return new _y.v(o, function(n) {
                    return _g.o.isInstanceOfType(n) ? n.bH.Size : _g.x.isInstanceOfType(n) ? n.bH.Size : 0
                }, !1);
            case "ConversationUniqueSenders":
                t = new _y.by;
                var w = this,
                    p = this;
                return new _y.bu(t, function(n) {
                    if (_g.o.isInstanceOfType(n)) return n.g() ? n.g().f : null;
                    else if (_g.x.isInstanceOfType(n)) {
                        var t = new _j.l;
                        t.a(n.e());
                        return t
                    } else return ""
                }, function(n) {
                    return n.f().join("; ")
                }, _u.R.Bz);
            case "ConversationUniqueRecipients":
                t = new _y.by;
                var k = this,
                    l = this;
                return new _y.bu(t, function(n) {
                    if (_g.o.isInstanceOfType(n)) return n.v() ? n.v().f : null;
                    else if (_g.i.isInstanceOfType(n)) {
                        var t = n.q();
                        if (t) {
                            var r = t.f;
                            var i = new _y.dc;
                            return i.a(r, !1).split("; ")
                        } else return ""
                    } else return ""
                }, function(n) {
                    return n.f().join("; ")
                }, _u.R.Bz);
            case "ConversationItemClasses":
                t = new _y.by;
                var nt = this,
                    g = this;
                return new _y.bu(t, function(n) {
                    if (_g.o.isInstanceOfType(n)) return n.f() ? n.f().f : null;
                    else if (_g.x.isInstanceOfType(n)) {
                        var i = new _j.l;
                        i.a(n.bH.ItemClass);
                        return i
                    } else if (_g.bH.isInstanceOfType(n)) {
                        var t = new _j.l;
                        t.a(n.bH.ItemClass);
                        return t
                    } else return ""
                }, function(n) {
                    var i = new _y.hI;
                    var t = n.f().join("; ");
                    return i.a(t, null)
                }, _u.R.Rw);
            case "ConversationHasAttachments":
                t = new _y.by;
                var d = this,
                    y = this;
                return new _y.bu(t, function(n) {
                    return _g.o.isInstanceOfType(n) ? n.bH.HasAttachments : _g.x.isInstanceOfType(n) ? n.bH.HasAttachments : _g.bH.isInstanceOfType(n) ? n.bH.HasAttachments : !1
                }, function(n) {
                    return n ? _u.R.R : _u.R.UV
                }, _u.R.UV);
            case "ConversationImportance":
                t = new _y.by;
                var s = this,
                    c = this;
                return new _y.bu(t, function(n) {
                    return _g.o.isInstanceOfType(n) ? n.bg() : _g.x.isInstanceOfType(n) ? n.bg() : _g.bH.isInstanceOfType(n) ? n.bg() : "Normal"
                }, function(n) {
                    var t = new _y.gc;
                    return t.a(n, !1)
                }, _u.R.Rw);
            case "ConversationFlagStatus":
                t = new _y.by;
                var h = this,
                    v = this;
                return new _y.bu(t, function(n) {
                    return _g.o.isInstanceOfType(n) ? n.M() : _g.x.isInstanceOfType(n) || _g.bH.isInstanceOfType(n) ? n.M() : "NotFlagged"
                }, function(n) {
                    var t = new _y.hH;
                    return t.a(n, null)
                }, _u.R.Rw);
            case "ConversationLastModifiedTime":
                var a = this;
                return new _y.bm(new _y.cq, function(t) {
                    return _g.o.isInstanceOfType(t) ? t.V() : _g.x.isInstanceOfType(t) ? t.S() : _g.bH.isInstanceOfType(t) ? t.S() : n
                }, n, null, !1);
            default:
                var f = new _y.cq;
                var i = this;
                return new _y.bm(f, function(t) {
                    return _g.o.isInstanceOfType(t) ? i.fp.a === "ConversationLastDeliveryOrRenewTime" ? t.n() : t.h() : _g.x.isInstanceOfType(t) ? i.fp.a === "ReceivedOrRenewTime" ? t.dM() : t.cr() : _g.bH.isInstanceOfType(t) ? t.cr() : n
                }, n, r, !1)
        }
    },
    hC: function() {
        var i = null;
        if (this.fB) this.fB.q() && this.fB.i() && this.fB.i().x.length === 1 ? i = this.fB.q().a() : this.fB.c() && this.fB.c().x.length === 1 && (i = this.fB.c().x[0].a());
        else if (this.eY) {
            var n = this.eY;
            var t = new _g.i;
            t.cW(n.bH.ConversationTopic);
            if (n.c() && n.c().b() > 0) {
                t.cc(n.c().a(n.c().b() - 1));
                t.gK(!0);
                i = t
            } else if (n.a() && n.a().b() > 0) {
                t.cc(n.a().a(0));
                i = t
            }
        }
        return i
    },
    nD: function(n) {
        return new _lv.d(n, this, this.fi, this.fg, this.kQ)
    },
    lY: function(n, t) {
        return n.length > 1 ? String.format(t ? _u.R.OI : _u.R.Dx, n.length) : t ? _u.R.Br : _u.R.Qi
    },
    oU: function(n, t, i) {
        return n.length > 1 ? String.format(t ? _u.R.Vj : _u.R.My, n.length, i) : String.format(t ? _u.R.Iy : _u.R.IX, i)
    },
    hL: function(n) {
        var i = n;
        if (!i.e() || !i.e().b()) return null;
        for (var u = i.e().b(), f = new Array(u), r = 0; r < u; r++) {
            var t = new _g.B;
            t.c(i.e().a(r));
            t.bH.ItemId.ChangeKey = null;
            t.e(i.bH.ConversationTopic || _wss.i.M);
            t.h(!1);
            t.s(i.bH.HasIrm);
            f[r] = t
        }
        return f
    },
    pt: function() {
        var i = new _j.l;
        var t = this.hL(this.fP);
        t && i.j(t);
        var n = new _y.bc;
        n.b(i);
        return JsonParser.serialize(n.fo())
    },
    gu: function(n) {
        return n.b(this)
    },
    jT: function() {
        if (!this.eY) return null;
        var n = this.eY;
        return n.e().b() > 0 ? n.e().a(0) : null
    },
    pX: function(n, t) {
        return new _lm.b(n, t, this.jl)
    },
    qb: function() {
        var n = this;
        this.ia = _j.m.a().a(_a.a.cN, "Delay showing spinner on conversation expansion", function() {
            n.gP || n.nH(!0)
        }, 500)
    },
    nC: function() {
        if (this.ia) {
            _j.m.a().b(this.ia);
            this.ia = null
        }
    },
    ha: function(n, t, i) {
        var u = t;
        var e = this.eH.f(u);
        var r = new _h.bF;
        r.f(u);
        r.l(this.eH.s());
        r.D = !!this.eI;
        r.r = n;
        r.p = e;
        r.I = 1;
        r.H = this.gl();
        r.q = this.j();
        r.o = this.fG();
        r.t = _g.j.b(this.eR.bH.FolderId);
        this.lJ = r;
        var f = this;
        this.ds(function() {
            var n = _g.b.a.doesIdEqualName(f.eH.e(), "sentitems");
            f.bk(u, function(t) {
                t.b(u, n, n ? _u.R.Z : _u.R.Ia, _u.R.VR)
            });
            f.gC.a(u);
            if (i && !f.ft) {
                r.bc = !0;
                f.nF(r)
            }
            _a.g.a.a(r)
        }, u)
    },
    jk: function(n, t) {
        var i = this.kO(n, t);
        if (i) {
            i.D = !!this.eI;
            i.o = this.fG();
            i.t = _g.j.b(this.eR.bH.FolderId);
            this.iL = i;
            _a.g.a.a(i)
        }
    },
    kO: function(n, t) {
        return this.jm.a(n, this.j(), t, !0)
    },
    nF: function(n) {
        var t = new _h.cN(n, this.fb, null, _u.R.Oj, _u.R.Kl);
        _h.A.a().c(t)
    },
    hi: function(n, t) {
        var r = t ? _u.R.Cx : _u.R.KQ;
        var u = this;
        this.bk(n, function(n) {
            n.d(r)
        });
        if (this.jm) this.jk(n, t);
        else {
            var i = this;
            this.kN.a(function(r) {
                i.jm = r;
                i.jk(n, t)
            })
        }
    },
    lW: function() {
        if (this.hw)
            for (var n = 0; n < this.eH.a().x.length; n++) {
                var t = this.eH.a().x[n];
                if (_g.o.isInstanceOfType(t)) {
                    var i = t;
                    this.nI(i)
                }
            }
    }
};
_lv.p = function(n, t, i, r, u, f, e, o, s) {
    _lv.p.initializeBase(this, [n, t, i, r, u, f, e, o]);
    this.N = s
};
_lv.p.prototype = {
    N: null
};
_lv.s = function(n, t, i, r, u, f, e) {
    this.l = Function.createDelegate(this, this.r);
    this.m = n;
    this.h = t;
    this.e = i;
    this.j = r;
    this.k = f;
    this.i = e;
    this.c = new _j.q;
    this.g = !1;
    var o = u.b();
    this.f = !o.f() && !o.d() && !o.o()
};
_lv.s.prototype = {
    m: null,
    h: null,
    e: null,
    j: null,
    k: null,
    i: null,
    c: null,
    d: null,
    f: !1,
    g: !1,
    q: function(n) {
        if (!this.d) return !1;
        for (var i = this.d, u = i.length, t = 0; t < u; ++t) {
            var r = i[t];
            if (r.d === n) return !0
        }
        return !1
    },
    o: function(n) {
        if (!this.d) return !1;
        for (var r = this.d, u = r.length, t = 0; t < u; ++t) {
            var i = r[t];
            if (i.d === n) return i.f
        }
        return !1
    },
    p: function(n) {
        if (!this.d) return !1;
        for (var r = this.d, u = r.length, t = 0; t < u; ++t) {
            var i = r[t];
            if (i.d === n) return i.g
        }
        return !1
    },
    s: function(n) {
        if (this.d)
            for (var r = this.d, u = r.length, t = 0; t < u; ++t) {
                var i = r[t];
                i.d === n && (i.g = !0)
            }
    },
    b: function(n) {
        if (this.f && !this.g) {
            this.g = !0;
            if (!this.e.a().bl()) return;
            for (var f = this.e.a().bl().e(), s = Math.min(f.length, 10), r = !1, i = 0; i < s; i++) try {
                var o = JsonParser.deserialize(f[i]);
                var e = _lv.k.f(o);
                e && this.c.c(e)
            } catch (h) {
                h.stack.indexOf("SyntaxError") !== -1 ? r || (r = !0) : _j.e.d(_a.a.cP, h, h.message)
            }
            r && this.n();
            var u = Math.min(this.c.d.length, 5);
            this.d = new Array(u);
            for (var t = 0; t < u; t++) t < 5 && (this.d[t] = this.c.d[t]);
            !this.j.a() && this.c.d.length > 0 && this.k.a(_lv.s.a, "FrequentlyUsedMailFolders.Initialize", this.l, n * 1e3)
        }
    },
    a: function(n) {
        if (this.f) {
            for (var u = !1, e = this.c.d.length, i = e - 1; i >= 0; i--) {
                var t = this.c.d[i];
                if (t.d === n) {
                    t.c = t.c + 5;
                    t.c = Math.min(t.c, 20);
                    t.e = _a.d.get_utcNow();
                    u = !0
                } else {
                    t.c = t.c - 1;
                    t.c = Math.max(t.c, 0);
                    if (t.c <= 0) {
                        var f = _a.d.get_utcNow().e(t.e);
                        var o = f < 6048e5 && f >= 0;
                        o || this.c.j(i)
                    }
                }
            }
            if (!u) {
                var r = new _lv.k(n);
                r.e = _a.d.get_utcNow();
                this.c.c(r)
            }
            this.c.l(_lv.k.e);
            this.t();
            this.n()
        }
    },
    r: function() {
        var n = this;
        this.i.a(function(t) {
            t.a(n.d)
        })
    },
    n: function() {
        for (var t = new _a.j, i = Math.min(this.c.d.length, 10), n = 0; n < i; n++) t.c(JsonParser.serialize(this.c.d[n].h()));
        this.e.a().cF(t);
        _h.f.b(this.e.a().u, this.h)
    },
    t: function() {
        while (this.c.d.length > 10) this.c.j(this.c.d.length - 1)
    }
};
_lv.k = function(n) {
    this.d = n;
    this.c = 10;
    this.e = _lv.k.d
};
_lv.k.e = function(n, t) {
    var r = n;
    var i = t;
    return r.c === i.c ? i.e.e(r.e) : i.c - r.c
};
_lv.k.f = function(n) {
    var t = null;
    try {
        var u = n[_lv.k.a];
        if (String.isInstanceOfType(u)) {
            t = new _lv.k(u);
            var r = n[_lv.k.b];
            if (Number.isInstanceOfType(r)) t.c = r;
            else throw Error.argument(_lv.k.b, "is not a number");
            var i = n[_lv.k.c];
            String.isInstanceOfType(i) && (t.e = _a.d.b(i))
        } else throw Error.argument(_lv.k.a, "is null");
    } catch (f) {}
    return t
};
_lv.k.prototype = {
    e: null,
    d: null,
    a: function() {
        return this.d
    },
    c: 0,
    g: !1,
    f: !1,
    b: function(n) {
        this.f = n;
        return n
    },
    h: function() {
        var n = {};
        n[_lv.k.a] = this.d;
        n[_lv.k.b] = this.c;
        n[_lv.k.c] = _a.d.d(this.e);
        return n
    }
};
_lv.q = function(n, t, i, r, u, f, e) {
    this.f = n;
    this.h = i;
    this.b = t;
    this.e = r;
    this.c = u;
    this.g = f;
    this.d = e
};
_lv.q.prototype = {
    f: null,
    b: null,
    h: null,
    e: null,
    c: null,
    g: null,
    d: null,
    a: function() {
        _lv.q.a || (_lv.q.a = new _lv.s(this.f, this.b, this.h, this.e, this.c, this.g, this.d));
        return _lv.q.a
    }
};
_lv.b = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft) {
    this.ht = Function.createDelegate(this, this.qc);
    this.lb = Function.createDelegate(this, this.rz);
    this.lm = Function.createDelegate(this, this.rL);
    this.ll = Function.createDelegate(this, this.rK);
    this.ln = Function.createDelegate(this, this.rM);
    this.om = Function.createDelegate(this, this.rP);
    this.lf = Function.createDelegate(this, this.rC);
    this.ov = Function.createDelegate(this, this.ss);
    this.kU = Function.createDelegate(this, this.qw);
    this.lg = Function.createDelegate(this, this.rD);
    this.kX = Function.createDelegate(this, this.rs);
    this.la = Function.createDelegate(this, this.pi);
    this.jo = Function.createDelegate(this, this.qj);
    this.kZ = Function.createDelegate(this, this.rw);
    this.kY = Function.createDelegate(this, this.rv);
    this.ld = Function.createDelegate(this, this.rB);
    this.oi = Function.createDelegate(this, this.ph);
    this.ol = Function.createDelegate(this, this.rH);
    this.oE = Function.createDelegate(this, this.sL);
    this.lj = Function.createDelegate(this, this.ko);
    this.lq = Function.createDelegate(this, this.sE);
    this.le = Function.createDelegate(this, this.mF);
    this.lp = Function.createDelegate(this, this.rO);
    this.li = Function.createDelegate(this, this.rI);
    this.kW = Function.createDelegate(this, this.mr);
    this.lk = Function.createDelegate(this, this.rJ);
    this.lo = Function.createDelegate(this, this.rN);
    this.os = Function.createDelegate(this, this.mK);
    this.nM = Function.createDelegate(this, this.qp);
    this.od = Function.createDelegate(this, this.rp);
    this.oc = Function.createDelegate(this, this.ro);
    this.ox = Function.createDelegate(this, this.sC);
    this.ot = Function.createDelegate(this, this.sa);
    this.ok = Function.createDelegate(this, this.rG);
    this.og = Function.createDelegate(this, this.rt);
    this.oh = Function.createDelegate(this, this.ru);
    this.ou = Function.createDelegate(this, this.sd);
    this.of = Function.createDelegate(this, this.rr);
    this.oe = Function.createDelegate(this, this.rq);
    this.nT = Function.createDelegate(this, this.mi);
    this.or = Function.createDelegate(this, this.pr);
    this.op = Function.createDelegate(this, this.hg);
    this.oj = Function.createDelegate(this, this.rE);
    this.nY = Function.createDelegate(this, this.rm);
    this.nX = Function.createDelegate(this, this.rl);
    this.nR = Function.createDelegate(this, this.ge);
    this.oq = Function.createDelegate(this, this.pq);
    this.ls = Function.createDelegate(this, this.sQ);
    this.lr = Function.createDelegate(this, this.sO);
    this.oo = Function.createDelegate(this, this.rR);
    this.on = Function.createDelegate(this, this.rQ);
    this.nL = Function.createDelegate(this, this.qn);
    this.ob = Function.createDelegate(this, this.rn);
    this.oy = Function.createDelegate(this, this.sD);
    this.nU = Function.createDelegate(this, this.qX);
    this.nV = Function.createDelegate(this, this.qZ);
    this.nJ = Function.createDelegate(this, this.qe);
    this.nS = Function.createDelegate(this, this.oX);
    this.nN = Function.createDelegate(this, this.qs);
    this.oD = Function.createDelegate(this, this.sI);
    this.ow = Function.createDelegate(this, this.sB);
    this.oB = Function.createDelegate(this, this.sH);
    this.oC = Function.createDelegate(this, this.kz);
    this.nP = Function.createDelegate(this, this.qN);
    this.nO = Function.createDelegate(this, this.qM);
    this.oA = Function.createDelegate(this, this.sG);
    this.oa = Function.createDelegate(this, this.pg);
    this.oz = Function.createDelegate(this, this.sF);
    this.nZ = Function.createDelegate(this, this.mw);
    this.nK = Function.createDelegate(this, this.qm);
    this.nQ = Function.createDelegate(this, this.qO);
    this.kV = Function.createDelegate(this, this.qQ);
    this.lc = Function.createDelegate(this, this.rA);
    this.lh = Function.createDelegate(this, this.rF);
    this.kT = Function.createDelegate(this, this.dL);
    this.nW = Function.createDelegate(this, this.bk);
    this.gC = new _j.H;
    this.gf = {};
    this.pf = new _y.eL;
    _lv.b.initializeBase(this);
    _a.c.a(u, "offlineManager");
    this.fi = n;
    this.fd = t;
    this.cp(this.fd.h());
    _dh.a(g, this);
    this.fK = v;
    this.fK.apcl("IsReadingPaneFullScreen", this.lc);
    this.fn = n.a() === "Mouse";
    this.fs = n.a() === "TouchNarrow";
    this.eH = null;
    this.O(new _j.l);
    this.ks(null);
    this.gn = null;
    this.bQ(null);
    this.gI = !0;
    this.fb = i;
    this.hD = r;
    this.gB = u;
    this.ly = f;
    this.kh = e;
    this.fg = h;
    this.ba(-1);
    this.jq = o;
    this.gW = s;
    this.kd = k;
    this.hw = ut;
    this.pd = c;
    this.mt = l;
    this.ms = a;
    this.mM = d;
    this.mZ = rt;
    this.jN = y;
    this.gb(p);
    this.kL = p;
    this.hR = w;
    this.kl = nt;
    this.hl = b;
    this.gr = tt;
    this.jr = ft;
    this.lI = it;
    this.fb.b(_h.bw, this.kV);
    this.fb.b(_a.dp, this.nQ);
    this.gt = new _j.g(this.nK, _lv.b.a);
    this.mx = new _j.g(this.nZ, _lv.b.a);
    this.nd = new _j.g(this.oz, _lv.b.a);
    this.mA = new _j.g(this.oa, _lv.b.a);
    this.ne = new _j.g(this.oA, _lv.b.a);
    this.ma = new _j.g(this.nO, _lv.b.a);
    this.mb = new _j.g(this.nP, _lv.b.a);
    var lt = this;
    this.ic = new _j.g(function() {
        lt.lB()
    }, _lv.b.a);
    this.hQ = new _j.g(this.oC, _lv.b.a);
    this.nf = new _j.g(this.oB, _lv.b.a);
    this.mY = new _j.g(this.ow, _lv.b.a);
    if (this.fg) {
        this.mm = this.fg.a().h().Enabled;
        this.kb = this.fg.a().dl().Enabled
    }
    if (_h.a.c) {
        this.qT();
        this.jt = new _j.g(this.oD, _lv.b.a);
        this.lv = new _j.g(this.nN, _lv.b.a)
    }
    this.jV = new _j.g(this.nS, _lv.b.a, _g.j.e(this.eR));
    this.ir = new _j.g(this.nJ, _lv.b.a);
    this.nb = new _j.g(this.nV, _lv.b.a);
    this.mh = new _j.g(this.nU, _lv.b.a);
    this.pe = new _j.g(this.oy, _lv.b.a);
    this.iM = new _j.g(this.ob, _lv.b.a);
    this.jC = new _j.g(this.nL, _lv.b.a);
    this.nh = new _j.g(this.on, _lv.b.a);
    this.ni = new _j.g(this.oo, _lv.b.a);
    this.iG = !1;
    this.hk = this.fs && _a.o.a().a();
    if (this.fs) {
        this.fd.b().apcl("MailLeftSwipeAction", this.lr);
        this.fd.b().apcl("MailRightSwipeAction", this.ls);
        this.iW = !0
    }
    var at = this;
    this.gy = new _j.g(function() {
        at.pa(!0)
    }, _lv.b.a, !this.hz());
    var bt = this;
    this.hE = new _j.g(function() {
        bt.pa(!1)
    }, _lv.b.a, !this.hz());
    this.iR = new _j.g(this.oq, _lv.b.a);
    this.jA = new _j.g(this.nR, _lv.b.a);
    this.kj = new _j.g(this.nX, _lv.b.a);
    this.iK = new _j.g(this.nY, _lv.b.a);
    this.gD = new _j.g(this.oj, _a.a.bu);
    var ht = _g.j.h(this.eR);
    var dt = this;
    this.hP = new _j.g(function() {
        dt.gH("Today")
    }, _lv.b.a, ht);
    var kt = this;
    this.pE = new _j.g(function() {
        kt.gH("Tomorrow")
    }, _lv.b.a);
    var yt = this;
    this.pD = new _j.g(function() {
        yt.gH("ThisWeek")
    }, _lv.b.a);
    var gt = this;
    this.pB = new _j.g(function() {
        gt.gH("NextWeek")
    }, _lv.b.a);
    var ii = this;
    this.pC = new _j.g(function() {
        ii.gH("NoDate")
    }, _lv.b.a);
    var ti = this;
    this.gG = new _j.g(function() {
        ti.gH("ClearFlag")
    }, _lv.b.a);
    var ni = this;
    this.hO = new _j.g(function() {
        ni.gH("MarkComplete")
    }, _lv.b.a, ht);
    var ot = this;
    this.mv = new _j.g(function() {
        ot.hd(!0, ot.m())
    }, _lv.b.a);
    var st = this;
    this.mz = new _j.g(function() {
        st.hd(!1, st.m())
    }, _lv.b.a);
    var ct = this;
    this.iJ = new _j.g(function() {
        ct.kq(0)
    }, _lv.b.a, this.gk());
    var vt = this;
    this.kk = new _j.g(function() {
        vt.kq(1)
    }, _lv.b.a, this.gk());
    var wt = this;
    this.jO = new _j.g(function() {
        wt.kq(2)
    }, _lv.b.a, this.gk());
    var pt = this;
    this.kD = new _j.g(function() {
        pt.kq(3)
    }, _lv.b.a, this.gk());
    var et = this;
    this.hc = new _j.g(function() {
        et.rZ(et.eI, !1)
    }, _lv.b.a);
    this.iS = new _j.g(this.op, _lv.b.a);
    this.kr = new _j.g(this.or, _lv.b.a);
    this.hF = new _j.g(this.nT, _lv.b.a);
    this.lw = new _j.g(this.oe, _lv.b.a);
    this.lx = new _j.g(this.of, _lv.b.a);
    this.lA = new _j.g(this.ou, _lv.b.a);
    this.it = new _j.g(this.oh, _lv.b.a);
    this.jE = new _j.g(this.og, _lv.b.a);
    this.mI = new _j.g(this.ok, _lv.b.a);
    this.mN = new _j.g(this.ot, _lv.b.a);
    this.na = new _j.g(this.ox, _lv.b.a);
    this.km = new _j.g(this.oc, _lv.b.a);
    this.mC = new _j.g(this.od, _lv.b.a);
    this.lt = new _j.g(this.nM, _lv.b.a);
    this.mL = new _j.g(this.os, _lv.b.a);
    this.gT = 0;
    this.bV(2);
    this.dq(14);
    this.gQ = !1;
    this.qd();
    this.fW = new _bc.b;
    this.apcl(_lv.b.f, this.lo);
    this.fT() && _g.a.a().b().apcl("ShowCategoryColumnOnMessageItems", this.lk);
    this.rh();
    this.qS();
    this.qU()
};
_lv.b.N = function() {
    var n;
    var i = (n = new _a.K, n.a = !0, n);
    return _a.b.b(_a.a.bT, "MailRestore", !1, i)
};
_lv.b.L = function(n) {
    var t = n.instance;
    if (t.fi.a() !== "Mouse") {
        t.y().b === 8 ? t.y().a = "Swipe" : t.y().a || t.y().b !== 3 || (t.y().a = "Tap");
        switch (t.y().a) {
            case "Edit":
                Error.notImplemented("Edit mode action context is not supported.");
                break;
            case "MarkRead":
                t.mw();
                break;
            case "Delete":
                t.oX();
                break;
            case "Tap":
                break;
            default:
                break
        }
    }
};
_lv.b.prototype = {
    hD: null,
    fs: !1,
    fn: !1,
    mm: !1,
    kb: !1,
    gW: null,
    kh: null,
    fd: null,
    pd: null,
    mt: null,
    kd: null,
    ms: null,
    jN: null,
    lI: null,
    gt: null,
    mx: null,
    nd: null,
    mA: null,
    ne: null,
    ma: null,
    mb: null,
    hQ: null,
    nf: null,
    mY: null,
    jV: null,
    nb: null,
    mh: null,
    pe: null,
    iM: null,
    jC: null,
    gy: null,
    hE: null,
    kj: null,
    iK: null,
    hP: null,
    pE: null,
    pD: null,
    pB: null,
    pC: null,
    hO: null,
    mv: null,
    mz: null,
    iJ: null,
    kk: null,
    jO: null,
    ir: null,
    kD: null,
    hc: null,
    iS: null,
    kr: null,
    hF: null,
    it: null,
    jE: null,
    gD: null,
    iR: null,
    km: null,
    mC: null,
    mL: null,
    fi: null,
    fW: null,
    gB: null,
    fg: null,
    fK: null,
    mM: null,
    mZ: null,
    mB: null,
    iB: null,
    kp: null,
    iQ: null,
    ix: null,
    iZ: null,
    iY: null,
    nj: null,
    fA: !1,
    fZ: !1,
    hk: !1,
    jD: 0,
    gG: null,
    iI: null,
    eY: null,
    iA: null,
    fP: null,
    mD: 0,
    iw: null,
    gI: !1,
    iX: !1,
    eH: null,
    fQ: null,
    mq: null,
    hx: null,
    iH: 0,
    fj: null,
    gn: null,
    jb: null,
    nh: null,
    ni: null,
    hy: null,
    mu: null,
    iL: null,
    jJ: null,
    lJ: null,
    he: null,
    is: null,
    md: null,
    gZ: null,
    nc: null,
    oY: null,
    jA: null,
    kA: null,
    iP: null,
    eI: null,
    gT: 0,
    fJ: null,
    fz: null,
    gj: null,
    fc: null,
    jX: !1,
    fh: null,
    eR: null,
    hf: null,
    fN: "All",
    fp: null,
    gJ: 1,
    mn: !1,
    fU: null,
    fC: null,
    fO: 0,
    fL: !1,
    iE: !1,
    hG: !1,
    fV: !1,
    kg: null,
    hH: !1,
    gg: !1,
    gz: !1,
    ke: 0,
    jU: !1,
    gV: null,
    fX: !1,
    gx: !1,
    iC: !1,
    kn: null,
    lL: null,
    hv: null,
    im: null,
    iq: null,
    ii: null,
    il: null,
    ij: null,
    ik: null,
    jw: null,
    jx: null,
    hu: null,
    ip: null,
    io: null,
    ih: null,
    ig: null,
    id: null,
    jv: null,
    ju: null,
    ie: null,
    lD: null,
    lE: null,
    lC: null,
    go: null,
    iG: !1,
    mI: null,
    iF: !1,
    gU: 2,
    gS: null,
    fM: !1,
    kw: 0,
    mW: !1,
    mo: !1,
    hJ: null,
    fF: null,
    gh: null,
    iv: null,
    mN: null,
    na: null,
    kc: !1,
    kf: !1,
    hb: !1,
    iD: !1,
    jY: !1,
    iO: null,
    kC: 0,
    fy: !1,
    hI: !0,
    ky: !1,
    jH: null,
    ki: null,
    gA: null,
    gE: null,
    jK: 0,
    hR: null,
    hl: null,
    fv: 0,
    kl: null,
    hj: !1,
    iW: !1,
    ja: null,
    iu: null,
    jL: null,
    gF: 1,
    jZ: !1,
    jG: 0,
    jF: 0,
    hw: null,
    rF: function(n) {
        this.fF.a(n.k())
    },
    pO: function(n) {
        if (this.fF)
            if (n) {
                var i;
                (i = this.fF).a(i.g() + 1)
            } else {
                var t;
                (t = this.fF).a(t.g() - 1)
            }
    },
    oW: function(n) {
        this.fc.G(this.mu);
        this.fc.D(n);
        this.eu(this.fc.v());
        this.dk(this.fc.u())
    },
    mE: function() {},
    mG: function() {},
    ef: function() {
        return this.em() && !this.gR
    },
    cx: function(n) {
        this.gC.b(n)
    },
    di: function(n) {
        this.gC.c(n)
    },
    hA: function() {
        this.gA || (this.gA = _ta.a.g());
        return this.gA
    },
    sk: function(n) {
        if (this.gA !== n) {
            this.gA = n;
            this.eJ("LeftSwipeActionViewModel")
        }
        return n
    },
    hB: function() {
        this.gE || (this.gE = _ta.a.h());
        return this.gE
    },
    so: function(n) {
        if (this.gE !== n) {
            this.gE = n;
            this.eJ("RightSwipeActionViewModel")
        }
        return n
    },
    jq: null,
    gc: null,
    cW: function() {
        return "SelectedItem"
    },
    da: function() {
        return "ShowInfoMessageType"
    },
    bj: function() {
        return _lv.b.h
    },
    G: function() {
        return _lv.b.d
    },
    A: function() {
        return _lv.b.q
    },
    o: function() {
        return "CurrentTableLoaded"
    },
    X: function() {
        return "ViewFilter"
    },
    cH: function() {
        return "IsInSelectEverythingMode"
    },
    bJ: function() {
        return "SearchContext"
    },
    cf: function() {
        return "MasterCategoriesList"
    },
    cL: function() {
        return "ListViewApplicationBarViewModel"
    },
    cE: function() {
        return "HasRowsLoadedAtTop"
    },
    bM: function() {
        return "TableLoading"
    },
    cV: function() {
        return "RunLoadMoreInstantSearch"
    },
    cD: function() {
        return "FocusedInboxPivotSelectionIndex"
    },
    cB: function() {
        return "DismissRollup"
    },
    cG: function() {
        return "IsExtendedListViewLoaded"
    },
    cJ: function() {
        return "IsListViewTableEmpty"
    },
    cd: function() {
        return _lv.b.f
    },
    ek: function() {
        return "Tap"
    },
    qA: function() {
        return _y.w.a(this.fi)
    },
    fT: function() {
        return _g.a.a().E
    },
    jp: null,
    cC: function() {
        return this.jp
    },
    ca: function() {
        return this.jK
    },
    dl: function(n) {
        if (this.jK !== n) {
            this.jK = n;
            this.eN(this.cD(), "InYourFolderText");
            this.kx()
        }
        return n
    },
    gw: function() {
        return this.fT() && this.bI() && _g.a.a().b().bH.ShowCategoryColumnOnMessageItems
    },
    gQ: !1,
    lO: function() {
        return _a.o.a().I && _a.o.a().L.b() > 8 ? "move" : "all"
    },
    fG: function() {
        return this.eI ? this.eI.u() : null
    },
    jP: function() {
        !this.kn && this.fn && (this.kn = this.fK.g());
        return this.kn
    },
    el: function() {
        return this.nj
    },
    br: function() {
        return this.nh
    },
    cr: function() {
        return this.ni
    },
    M: function() {
        return this.go
    },
    cp: function(n) {
        this.go = n;
        this.eJ("MasterCategoriesList");
        return n
    },
    oM: function() {
        return _y.E.a(this.fd.e(), this.mm)
    },
    s: function() {
        return this.gF
    },
    bb: function(n) {
        if (this.gF !== n) {
            this.gF = n;
            this.eJ("SelectionState")
        }
        return n
    },
    v: function() {
        return this.eM(_lv.b.v)
    },
    bV: function(n) {
        this.eK(_lv.b.v, n);
        return n
    },
    sf: function(n) {
        this.jL = n;
        this.eN(_lv.b.z, _lv.b.l);
        return n
    },
    se: function(n) {
        if (this.iu !== n) {
            this.iu = n;
            this.eJ(_lv.b.A)
        }
        return n
    },
    jQ: function() {
        return ""
    },
    qx: function() {
        return (this.fv ? _u.R.Kp : _u.R.Nv) + " " + this.jQ()
    },
    ee: function() {
        return this.fX
    },
    ew: function(n) {
        this.fX = n;
        return n
    },
    bd: function() {
        !this.fQ && this.gx && this.mV();
        return this.fQ
    },
    eq: function(n) {
        this.gV = n;
        return n
    },
    f: function() {
        return this.eH
    },
    iU: function(n) {
        if (this.eH !== n) {
            var t = this.eH;
            if (this.eH) {
                this.eH.bn();
                this.eH.rpcl("Loading", this.kW);
                this.eH.rpcl("SearchStateChanged", this.li);
                this.eH.rpcl("TableSize", this.lp);
                this.eH.a().e(this.le);
                this.eH.bp(this.lq);
                _h.h.a().b(this.eH)
            }
            this.eH = n;
            if (this.eH) {
                this.eH.bm();
                this.iC = !1;
                this.iH = 0;
                this.gp(!0);
                this.eJ(_lv.b.d);
                this.eH.apcl("Loading", this.kW);
                this.eH.apcl("SearchStateChanged", this.li);
                this.eH.apcl("TableSize", this.lp);
                this.eH.bf(this.lq);
                this.eH.a().d(this.le);
                this.eJ("TableLoading");
                this.lG(200)
            }
            this.pn(t, this.eH);
            this.eN("Table", "IsViewPortCheckboxChecked")
        }
        return n
    },
    dn: function(n) {
        if (this.mn !== n) {
            this.mn = n;
            this.eJ("IsInitializedByMailModule")
        }
        return n
    },
    bw: function() {
        return this.eH ? this.eH.b() : 0
    },
    e: function() {
        return this.eY
    },
    E: function(n) {
        if (this.eY !== n) {
            this.fn && n && this.kv(n);
            this.eY = n;
            this.fR();
            this.eJ("SelectedItem")
        }
        return n
    },
    dT: function() {
        return this.iA
    },
    sg: function(n) {
        if (this.iA !== n) {
            this.iA = n;
            this.ry();
            this.eJ(_lv.b.E)
        }
        return n
    },
    pv: function(n) {
        this.fP !== n && (this.fP = n);
        return n
    },
    h: function() {
        return this.fj.x.length
    },
    i: function() {
        return this.fj
    },
    O: function(n) {
        if (n !== this.fj) {
            this.fj && this.fj.e(this.lj);
            this.fj = n;
            this.fj && this.fj.d(this.lj);
            this.eJ("SelectedItems")
        }
        return n
    },
    oO: function() {
        return this.fs && !!this.eR && !_h.l.c(this.eR.bH.FolderId)
    },
    hh: function(n) {
        this.gn = n;
        this.eJ("ItemToSelect");
        return n
    },
    cc: function() {
        return this.iF
    },
    et: function(n) {
        if (this.iF !== n) {
            this.iF = n;
            this.eJ(_lv.b.f)
        }
        return n
    },
    a: function() {
        return this.eR
    },
    ks: function(n) {
        if (this.eR !== n) {
            this.eR = n;
            this.rx();
            this.eJ(_lv.b.q)
        }
        return n
    },
    er: function(n) {
        if (this.iw !== n) {
            this.iw = n;
            this.pj()
        }
        return n
    },
    hz: function() {
        return this.eR ? this.eR.b : !1
    },
    gk: function() {
        return this.eR ? _h.l.b(this.j()) : !1
    },
    dU: function() {
        return this.fU
    },
    es: function(n) {
        if (n !== this.fU) {
            this.fU = n;
            this.bp(_u.R.HT);
            this.Y(0, null);
            this.fL = _g.b.a.doesIdEqualName(this.fU, "outbox");
            this.iE = _g.b.a.doesIdEqualName(this.fU, "notes")
        }
        return n
    },
    lM: function() {
        return ""
    },
    cZ: function() {
        return this.hj
    },
    bq: function(n) {
        if (n !== this.hj) {
            this.hj = n;
            this.eJ("ShouldShowMessageListAds")
        }
        return n
    },
    cR: function() {
        var n = this.bI() ? 45 : 93;
        this.fs && (n = 88);
        return n * this.kw
    },
    dp: function(n) {
        if (this.mD !== n) {
            this.mD = n;
            this.eJ("NativeAdsContainerHeight")
        }
        return n
    },
    K: function() {
        return this.mx
    },
    L: function() {
        return this.mA
    },
    bA: function() {
        return this.ma
    },
    ic: null,
    ck: function() {
        return this.hQ
    },
    B: function() {
        return this.jV
    },
    S: function() {
        return this.mh
    },
    bG: function() {
        return this.iM
    },
    bz: function() {
        return this.jC
    },
    R: function() {
        return this.gy
    },
    cF: function() {
        return this.hE
    },
    cM: function() {
        return this.kj
    },
    cN: function() {
        return this.iK
    },
    bH: function() {
        return this.mC
    },
    bh: function() {
        return this.km
    },
    lt: null,
    cz: function() {
        return this.lt
    },
    cU: function() {
        return this.mL
    },
    jt: null,
    db: function() {
        return this.jt
    },
    lv: null,
    lT: function() {
        this.ja != null || this.kx();
        return this.ja || !1
    },
    pz: function(n) {
        if (this.ja !== n) {
            this.ja = n;
            this.eJ("ShowRollupOnTopOfListView")
        }
        return n
    },
    cO: function() {
        return this.mv
    },
    cP: function() {
        return this.mz
    },
    bg: function() {
        return this.iJ
    },
    eb: function() {
        return this.kk
    },
    dR: function() {
        return this.jO
    },
    dc: function() {
        return this.kD
    },
    N: function() {
        return this.iS
    },
    cT: function() {
        return this.kr
    },
    ci: function() {
        return this.hP
    },
    bK: function() {
        return this.hO
    },
    ch: function() {
        return this.gG
    },
    ec: function() {
        return this.mB
    },
    bX: function() {
        return this.ir
    },
    bi: function() {
        return this.kp
    },
    V: function() {
        return this.iQ
    },
    I: function() {
        return this.ix
    },
    cg: function() {
        return this.mN
    },
    cj: function() {
        return this.na
    },
    lx: null,
    ed: function() {
        return this.lx
    },
    lw: null,
    lA: null,
    cX: function() {
        return this.lA
    },
    pu: function(n) {
        if (this.hy !== n) {
            this.hy = n;
            this.eJ("DragData")
        }
        return n
    },
    bf: function() {
        return this.fz
    },
    eu: function(n) {
        this.fz = n;
        this.eJ("ItemContextMenuViewModel");
        return n
    },
    bY: function() {
        return this.gj
    },
    dk: function(n) {
        this.gj = n;
        this.eJ(_lv.b.k);
        return n
    },
    p: function() {
        return this.fc
    },
    mR: function(n) {
        this.fc = n;
        this.eJ("ExtendedBaseListViewModel");
        return n
    },
    oN: function() {
        return this.eM(_lv.b.t)
    },
    sm: function(n) {
        this.eK(_lv.b.t, n);
        return n
    },
    lQ: function() {
        return this.eM(_lv.b.u)
    },
    sn: function(n) {
        this.eK(_lv.b.u, n);
        return n
    },
    bC: function() {
        return this.gZ
    },
    cS: function() {
        return this.iR
    },
    cy: function() {
        return this.jA
    },
    bO: function(n) {
        this.gT = n;
        return n
    },
    b: function() {
        return this.eI
    },
    bQ: function(n) {
        if (this.eI !== n) {
            this.mE();
            this.eI = n;
            this.mG();
            this.oL()
        }
        return n
    },
    ev: function(n) {
        this.gI = n;
        return n
    },
    D: function() {
        return this.eM(_lv.b.x)
    },
    dq: function(n) {
        this.hj ? this.py(!1) : this.py(!!n && n !== 14);
        this.eK(_lv.b.x, n);
        if (this.iX) {
            this.bp(this.pf.a(n, null));
            this.iX = !1
        }
        this.pm();
        return n
    },
    C: function() {
        return this.eM(_lv.b.w)
    },
    py: function(n) {
        this.eK(_lv.b.w, n);
        return n
    },
    ce: function() {
        return this.kg
    },
    bp: function(n) {
        if (this.kg !== n) {
            this.kg = n;
            this.eJ("LiveRegionMessage")
        }
        return n
    },
    bD: function() {
        return this.hH
    },
    dm: function(n) {
        if (this.hH !== n) {
            this.hH = n;
            this.eJ("IsDataInProgress")
        }
        return n
    },
    hM: function(n) {
        if (this.gg !== n) {
            this.gg = n;
            this.eJ("ShowLoadMore")
        }
        return n
    },
    mT: function(n) {
        this.fM !== n && (this.fM = n);
        return n
    },
    y: function() {
        return this.eM(_lv.b.p)
    },
    Z: function(n) {
        this.eK(_lv.b.p, n);
        return n
    },
    si: function(n) {
        this.fV !== n && this.sv(n);
        return n
    },
    sv: function(n) {
        this.fV = n;
        this.eQ([_lv.b.F, _lv.b.i, _lv.b.n, _lv.b.J]);
        this.pp();
        this.fs && this.ql(n)
    },
    qy: function() {
        return this.oM() && _g.b.a.doesIdEqualName(this.j(), "inbox")
    },
    sh: function(n) {
        this.hG !== n && this.su(n);
        return n
    },
    su: function(n) {
        this.hG = n;
        this.oM() && this.si(this.hG)
    },
    g: function() {
        return this.fN
    },
    cq: function(n) {
        if (this.fN !== n) {
            this.fN = n;
            this.fF && !this.eI && this.fF.h(n);
            this.fc && this.fc.E();
            this.eJ("ViewFilter")
        }
        return n
    },
    gi: null,
    bZ: function() {
        return this.gi
    },
    c: function() {
        return this.fv
    },
    ba: function(n) {
        if (this.fv !== n) {
            this.fv = n;
            this.fv !== -1 && this.pF(n);
            this.hD && this.hD.a(this.oE);
            if (this.mW && !this.mo && this.fv === 1) {
                this.bq(!0);
                this.pc();
                this.mo = !0
            }
            this.eJ(_lv.b.b)
        }
        return n
    },
    qC: function() {
        this.jb && this.fV === this.jb.a || (this.jb = this.qf());
        return this.jb
    },
    dW: function() {
        return this.jX
    },
    sj: function(n) {
        if (this.jX !== n) {
            this.jX = n;
            this.eJ(this.cG())
        }
        return n
    },
    bL: function() {
        return this.eH.d()
    },
    P: function() {
        return this.fh
    },
    w: function(n) {
        if (this.fh !== n) {
            this.fh = n;
            this.eJ("DestinationFolderId")
        }
        return n
    },
    t: function() {
        return this.fp
    },
    ex: function(n) {
        if (!n) throw Error.argumentNull("value");
        if (!n.C(this.fp)) {
            this.pA(0);
            this.fp = n;
            this.eJ("SortBy");
            this.mV();
            this.pA(1)
        }
        return n
    },
    pA: function(n) {
        if (this.gJ !== n) {
            this.gJ = n;
            this.eJ("SortByChangeState")
        }
        return n
    },
    cK: function() {
        return this.fC
    },
    sl: function(n) {
        this.fC && this.fC.dispose();
        this.fC = n;
        this.eJ(this.cL());
        return n
    },
    Q: function() {
        return this.fO
    },
    cn: function(n) {
        this.fO !== n && (this.fO = n);
        return n
    },
    U: function() {
        return this.fW
    },
    q: function() {
        return this.ke
    },
    bo: function(n) {
        if (this.ke !== n) {
            this.ke = n;
            this.eJ("LastSelectionSource")
        }
        return n
    },
    be: function() {
        return this.jU
    },
    bP: function(n) {
        if (this.jU !== n) {
            this.jU = n;
            this.eJ("HasRowsLoadedAtTop")
        }
        return n
    },
    oP: function() {
        var n = this.fd.a().bH.ShowSenderOnTopInListView;
        return !!n !== n ? !0 : n
    },
    lS: function() {
        var n = this.fd.a().bH.ShowPreviewTextInListView;
        return !!n !== n ? !0 : n
    },
    cb: function() {
        return !!this.eR && this.eR.a() === "recoverableitemsdeletions"
    },
    gl: function() {
        return this.fd.a().b()
    },
    bI: function() {
        var n = _y.d.c(this.qI(), this.fd);
        return !n
    },
    bB: function() {
        return this.gx
    },
    bl: function(n) {
        if (n !== this.gx) {
            this.gx = n;
            this.eJ(_lv.b.C)
        }
        return n
    },
    n: function() {
        return this.fs ? _y.lJ.prototype.n.call(this) : 0
    },
    mS: function(n) {
        if (this.gz !== n) {
            this.gz = n;
            this.eJ("IsShowSearchComplete")
        }
        return n
    },
    mQ: function(n) {
        if (n !== this.gU) {
            this.gU = n;
            this.eJ("CurrentClientDeleteState")
        }
        return n
    },
    sp: function(n) {
        this.gf = n;
        this.eJ("SelectedItemToVirtualIndexMap");
        return n
    },
    bF: function() {
        return this.jZ
    },
    px: function(n) {
        if (n !== this.jZ) {
            this.jZ = n;
            this.eJ(this.cJ())
        }
        return n
    },
    iT: function(n) {
        if (this.jG !== n) {
            this.jG = n;
            this.eJ("DraggedItemType")
        }
        return n
    },
    pw: function(n) {
        if (this.jF !== n) {
            this.jF = n;
            this.eJ("DraggedItemCount")
        }
        return n
    },
    fb: null,
    cQ: function() {
        return this.h() === 1 ? _u.R.DT : String.format(_u.R.VF, this.h())
    },
    dP: function() {
        return this.h() === 1 ? _u.R.Ek : String.format(_u.R.Dn, this.h())
    },
    dO: function() {
        return this.h() === 1 ? _u.R.Op : String.format(_u.R.JZ, this.h())
    },
    jR: function() {
        return this.h() === 1 ? _u.R.Dp : String.format(_u.R.VS, this.h())
    },
    T: function() {
        return this.fL
    },
    H: function() {
        return this.iv
    },
    cm: function(n) {
        this.iv = n;
        return n
    },
    ku: function(n) {
        if (this.kc !== n) {
            this.kc = n;
            this.pP();
            this.eU("IsViewPortItemsSelected", "IsViewPortCheckboxChecked", "ToggleButtonToolTipText")
        }
        return n
    },
    ft: !1,
    bE: function() {
        return this.hb
    },
    bm: function(n) {
        this.hb !== n && this.sw(n);
        return n
    },
    cI: function() {
        return this.iD
    },
    kt: function(n) {
        this.sy(n);
        return n
    },
    d: function() {
        return this.fy
    },
    bn: function(n) {
        this.fy !== n && this.sx(n);
        return n
    },
    js: null,
    cY: function() {
        return this.js
    },
    dX: function() {
        return this.jY
    },
    co: function(n) {
        if (this.jY !== n) {
            this.jY = n;
            this.eJ("IsInComposeMode")
        }
        return n
    },
    lB: null,
    gr: null,
    cA: function() {
        return this.gr
    },
    lu: null,
    dQ: function() {
        return this.lu
    },
    gR: !1,
    eh: function() {
        return this.gR
    },
    jr: !1,
    eg: function() {
        return this.ky
    },
    sq: function(n) {
        if (this.ky !== n) {
            this.ky = n;
            this.eN("ShowSelectEverythingButton", "ShowFocusedInboxPivotOptions")
        }
        return n
    },
    dV: function() {
        return _y.cY.b(this.eR, this.fv)
    },
    dS: function() {
        if (this.fy && this.gR) return _y.cY.a(this.fv);
        else if (this.gR) {
            var n = this.h();
            return n === 1 ? this.fO === 1 ? _u.R.a : _u.R.Dp : this.fO === 1 ? String.format(_u.R.Eu, n) : String.format(_u.R.VS, n)
        } else return this.eR && this.eR.a() === "recoverableitemsdeletions" ? _u.R.LA : _g.j.c(this.eR)
    },
    ej: function() {
        return this.ea() ? _u.R.m : _u.R.Cj
    },
    dZ: function() {
        return this.fn
    },
    z: function() {
        return this.fF
    },
    ea: function() {
        return this.kc || this.fy || !!this.eH && !this.eH.d() && !!this.eH.b() && !!this.fj && this.fj.x.length === this.eH.b()
    },
    dY: function() {
        return !!this.eI || this.fN !== "All" || !!this.gi
    },
    ib: null,
    lP: function() {
        return _a.o.a().a()
    },
    qz: function() {
        return _a.o.a().R
    },
    tn: function() {
        return this.fA
    },
    ei: function() {
        return this.hb && !(this.em() && this.gQ)
    },
    iy: function() {
        return ""
    },
    gv: function() {
        return this.bI() ? 35 : 25
    },
    lR: function() {
        return "MailSearch"
    },
    ly: null,
    lN: function() {
        return this.eR ? this.eR.bH.DisplayName : _u.R.UB
    },
    mU: function(n) {
        if (this.iW !== n) {
            this.iW = n;
            this.hl.b(this.iW)
        }
        return n
    },
    W: function() {
        return this.eY
    },
    r: function() {
        return this.m()
    },
    mO: function() {
        var t = this.lX();
        var n = this.gK();
        n || this.bo(1);
        this.kv(t);
        if (!n) {
            this.gs();
            this.bo(0)
        }
    },
    sc: function() {
        var i = this.gK();
        this.fj.g();
        this.E(null);
        for (var t = new _j.l, r = this.eH.m().x.length, n = r - 1; n >= 0; n--) t.a(this.eH.m().x[n]);
        this.O(t);
        i || this.gs();
        this.bm(!0);
        this.jM()
    },
    ez: function() {
        var i;
        var r, n;
        var t = (n = this.dd(r = {
            val: i
        }), i = r.val, n);
        t && this.w(t.bH.FolderId)
    },
    eE: function(n) {
        this.fU || (this.fU = n)
    },
    eD: function(n, t) {
        this.se(t);
        this.sf(n)
    },
    eB: function(n, t, i) {
        this.ks(n);
        this.bN(t, i)
    },
    bN: function(n, t) {
        var i = (n & 1) == 1;
        i ? this.cl(this.eI, !0) : this.Y(n, t)
    },
    Y: function(n, t) {
        this.oH(n);
        this.dm(!0);
        this.fA = !1;
        this.fZ = !1;
        this.iU(this.gY(n, !1, t));
        this.jD = n;
        this.fZ = this.fA && !!this.eH && !this.eH.L() && !this.eH.h() && this.eH.a().x.length > 0;
        var i = this.gK();
        this.oI();
        this.pk(t);
        i || this.gs();
        _h.I.isInstanceOfType(this.eH) && this.eI
    },
    ep: function(n) {
        this.oH(n);
        this.hg()
    },
    dj: function(n, t, i, r, u, f) {
        i && i !== this.eR && this.ks(i);
        this.eI || (this.mq = this.fQ);
        this.bQ(n);
        this.eI.n(!0);
        var h = this.eI.a();
        if (this.eI.b().E) {
            h = String.format(this.eI.cQ(), this.gi, h);
            t = _g.b.a.nameToId("msgfolderroot")
        }
        var y = _h.a.f(t);
        var a = null;
        var p = null;
        var w = null;
        var o;
        var e = this.eI.b();
        if (e.o) {
            e.o.o(y, t, this.gi);
            a = e.o.n();
            p = e.o.k();
            w = e.o.q();
            t = e.o.m();
            o = e.o.l()
        } else {
            var v = _g.b.a;
            v.doesIdEqualName(t, "inbox") && (t = v.nameToId("msgfolderroot"));
            o = this.oR(t, y)
        }
        _h.u.a = null;
        this.eI.db(this.fn ? o : o.toLocaleUpperCase());
        var c = null;
        var l = this.eI.m() ? this.eI.m().a() : "DateTime";
        this.fQ = l === "Hybrid" ? this.eI.m().e() : this.gd(_a.d.a());
        this.eJ(_lv.b.e);
        var s = this.oK(h, t, a, p, l, f);
        s.c(this.ol);
        s.b(this.oi);
        s.a();
        c = s.d();
        this.oL();
        this.fA = !1;
        this.fZ = !1;
        this.iU(c);
        _h.h.a().f(this.eH);
        e.o && e.o.t();
        this.hg();
        this.gI = !0;
        this.gp()
    },
    dM: function() {
        this.fQ = this.mq;
        this.eN(_lv.b.e, "ShowFocusedInboxPivotOptions")
    },
    cl: function(n, t) {
        if (n.b() && n.b().p()) throw Error.invalidOperation("The regular search method should only be called for archive search, public folder search or shared folder search if InstantSearch is enabled");
        var i = _lm.f.isInstanceOfType(this.eH) ? this.eH.r() : null;
        if (!i || !this.eI || !i.b() || i.i !== this.eI.a() || this.eH.bW() !== this.fN || this.eH.bJ() !== this.fp) {
            var r = null;
            if (t) {
                r = _a.b.b(_a.a.D, this.lR(), !0, null);
                _a.p.b(_a.a.D, "MailSearchBeforeRendering")
            }
            _h.u.a = null;
            this.bQ(n);
            t && this.hg();
            this.dm(!0);
            _j.m.a().j(_a.a.bu, this.lR());
            _j.m.a().g();
            this.fA = !1;
            this.fZ = !1;
            this.iU(this.gY(1, !t, null));
            t && this.eH.u() && (this.gS = new _lv.b.M(this.eH.u().bV, r));
            this.gp(!0);
            this.pk(null)
        }
    },
    dh: function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w) {
        this.sm(new _j.g(n, _lv.b.a));
        this.sn(new _j.g(t, _lv.b.a));
        this.oY = i;
        var k = this;
        this.gZ = new _j.g(function() {
            i(null)
        }, _lv.b.a);
        this.mB = e;
        this.iB = o;
        this.kp = s;
        this.iQ = h;
        this.ix = c;
        this.nj = l;
        this.iO = a;
        this.lB = v;
        this.lu = y;
        this.jH = p;
        this.ki = w;
        this.mu = u;
        this.kA = new _j.g(r, _lv.b.a);
        this.iP = new _j.g(f, _lv.b.a);
        var b = this;
        this.nc = new _j.g(function() {
            b.ft = !0;
            i(null)
        }, _lv.b.a);
        this.ra()
    },
    dr: function(n, t) {
        this.iZ = n;
        this.iY = t
    },
    ra: function() {
        if (this.fn) this.rb();
        else if (this.fs) {
            _y.bY.isInstanceOfType(this.fx) && this.fx.c(this.iy(), this);
            this.lH();
            this.fF.c(this.fe);
            var n = this;
            this.apcl("TopAppBarViewModel", function(t, i) {
                n.fF.c(n.fe)
            });
            this.hl.d(this.K(), this.L(), this.gZ, this.hQ, this.B())
        } else this.qo()
    },
    rb: function() {
        this.mf();
        this.me()
    },
    qW: function(n) {
        this.ft = !0;
        this.iB(n)
    },
    qe: function() {
        this.iB(this.m())
    },
    ey: function(n, t) {
        if (!this.fn) {
            this.fs && (this.lL = n);
            this.hv = t;
            this.hv.c(!0)
        }
    },
    bW: function() {
        this.hm();
        this.eQ(["ReadingPaneOff", _lv.b.n, "NativeAdsContainerHeight"])
    },
    dt: function() {
        this.fz && this.fz.rpcl("IsShown", this.ld);
        this.gj && this.gj.rpcl("IsShown", this.kY);
        this.fJ && this.fJ.rpcl("IsShown", this.kZ);
        this.fC && this.fC.dispose();
        this.fe && this.fe.dispose();
        this.iO = null
    },
    sA: function(n, t) {
        if (this.fc) this.fc.H(n);
        else {
            var i = this;
            this.bk(n, function(n) {
                n.a().o(!0)
            })
        }
        this.gX(t)
    },
    eC: function() {
        return this.fn ? this.fT() ? _h.a.c && this.fd.a().bH.IsFocusedInboxEnabled && _g.b.a.doesIdEqualName(this.qE(), "inbox") || !(this.fp.d() || _h.x.h(this.fp.a)) || !!this.eI : !_h.x.h(this.fp.a) : this.fs ? !this.hk : !0
    },
    dw: function() {
        _y.lJ.prototype.dw.call(this)
    },
    bS: function(n) {
        n && !_fm.m.isInstanceOfType(n) && Sys.IDisposable.isInstanceOfType(n) && n.dispose()
    },
    oS: function(n) {
        var t = this;
        this.lI.a(function(t) {
            n(t)
        })
    },
    j: function() {
        return this.eR && this.eR.bH.FolderId ? _g.j.b(this.eR.bH.FolderId) ? _g.b.a.nameToId("msgfolderroot") : this.eR.bH.FolderId : this.fU
    },
    qI: function() {
        return this.eR && this.eR.bH.FolderId ? this.eR.bH.FolderId : this.fU
    },
    lX: function() {
        if (this.eH.a().x.length <= 0) return null;
        if (!this.ka()) return this.eH.a().x[0];
        for (var n = null, i = 0; i < this.eH.a().x.length; i++) {
            var t = this.eH.a().x[i];
            if (!t.w() || t.j()) {
                n = t;
                break
            }
        }
        n || (n = this.eH.a().x[0]);
        return n
    },
    kv: function(n) {
        this.hh(n)
    },
    de: function() {
        this.fs && this.iR.a()
    },
    dL: function(n) {
        if (this.iI) this.iI.a(n);
        else if (this.kh) {
            var t = this;
            this.kh.a(function(i) {
                t.iI = i;
                t.iI.a(n)
            })
        }
    },
    ds: function(n, t) {
        this.jy(t) || this.hg();
        this.mc(t) ? this.mQ(0) : this.mQ(1);
        var i;
        var u, r;
        var f = (r = this.qJ(u = {
            val: i
        }), i = u.val, r);
        this.eH.U(f, i);
        n();
        this.fs && this.hb ? this.kt(!1) : this.bm(!1);
        this.mQ(2)
    },
    ge: function() {
        var r = new _a.l;
        r.b("c", this.h());
        var n;
        var u = (n = new _a.K, n.a = !0, n);
        var t = _a.b.b(_lv.b.a, "CancelListViewMultiSelection", !1, u);
        if (this.fs) {
            this.iR.a();
            this.kt(!1);
            this.hI = !0
        } else if (this.h() === 1 && this.fi.a() === "TouchWide") {
            this.y() && (this.y().b = 3);
            var f = this.eY;
            var i = this.gK();
            i || this.bo(1);
            this.fj.g();
            this.E(f);
            if (!i) {
                this.gs();
                this.bo(0)
            }
        } else this.kr.a();
        t.m = r.toString();
        _a.b.a(t)
    },
    qV: function(n, t) {
        this.iB(n);
        this.gX(t)
    },
    mg: function(n, t) {
        if (this.hz() && !_g.j.e(this.eR)) {
            this.fW.h(0, _u.R.Rs);
            return
        }
        if (!this.pH() && !this.fL) {
            if (this.fy) {
                this.jH.a();
                return
            }
            var i = this.qF();
            i === "MoveToDeletedItems" ? this.fY(i, n) : i === "HardDelete" ? this.qR(n) : this.oZ(n);
            this.gX(t)
        }
    },
    sJ: function(n, t) {
        this.hd(!n.w(), [n]);
        this.gX(t)
    },
    pL: function(n, t) {
        var u = n.j() ? "MailMarkAsRead" : "MailMarkAsUnread";
        var i;
        var f = (i = new _a.K, i.a = !0, i);
        var r = _a.b.b(_a.a.bu, u, !1, f);
        this.hi([n], n.j());
        this.gX(t);
        r.m = this.fH([n]).toString();
        _a.b.a(r)
    },
    ng: function(n, t) {
        if (t && t.length > 0) {
            t.length === 1 && this.jB(t[0], n ? _g.b.a.nameToId("clutter") : _g.b.a.nameToId("inbox"));
            this.ml(n, t)
        }
        this.de()
    },
    m: function() {
        return this.fj.f()
    },
    en: function() {
        return this.h() === 1 && !!this.eY && this.eY.bf() === 1
    },
    qY: function(n) {
        this.ft = !0;
        this.mg(n, !1)
    },
    mX: function() {
        return _h.a.c && this.fd.a().bH.IsFocusedInboxEnabled && !!this.eR && this.eR.a() === "inbox" && this.fv !== -1 && !_j.h.a(this.iu) && !_j.h.a(this.jL) && !this.eI
    },
    em: function() {
        return !!this.eR && this.eR.a() === "inbox" && _h.a.c && this.fd.a().bH.IsFocusedInboxEnabled && !(this.eI && this.eI.d()) && _h.a.m(this.eR, "msgfolderroot")
    },
    bk: function(n, t) {
        if (this.eR) {
            this.hJ = _j.m.a().b(this.hJ);
            if (this.gW && !this.fc) {
                var i = this;
                this.gW.a(function(r) {
                    if (r) {
                        i.rc(r, n);
                        t && t(i.fc);
                        i.sj(!0)
                    }
                })
            } else this.fc && t && t(this.fc)
        }
    },
    eA: function(n, t) {
        this.st(n);
        this.mJ(t);
        this.rX()
    },
    dd: function(n) {
        for (var t = null, o = this.r().length, i = 0; i < o; i++) {
            var e = this.r()[i];
            var u = e.bE();
            if (!t) {
                t = u;
                continue
            }
            if (t.Id !== u.Id) {
                n.val = !1;
                return null
            }
        }
        var r = _g.b.a.nameToId("inbox");
        if (t) n.val = t.Id === r.Id;
        else {
            n.val = !0;
            t = r
        }
        var f = _h.a.b("msgfolderroot");
        return f.f(t)
    },
    bc: function(n) {
        this.gi = _h.X.isInstanceOfType(n) ? n.c : null;
        this.cq(n.a)
    },
    dg: function() {
        if (!this.fL && !this.iE) {
            var n = this.jT();
            this.ly.j(n)
        }
    },
    qv: function(n) {
        var t = this;
        this.lK(function() {
            t.fc.s(n, t.fj)
        })
    },
    ka: function() {
        return !!this.fp && this.fp.c()
    },
    eo: function(n) {
        n = _h.g.b(n);
        _h.g.c(n, _h.g.i(this.fO, !!this.fK && this.fK.b))
    },
    pn: function(n, t) {},
    jI: function() {},
    iN: function(n, t) {},
    ko: function(n, t) {
        this.sS(t);
        var u = this.fj.x.length;
        if (u > 0) {
            this.fn && u > 1 && this.bk(this.m(), null);
            if (this.fs && this.y() && this.y().a !== "Tap") {
                this.fC && this.fC.U(!0);
                this.fx && _y.bY.isInstanceOfType(this.fx) && this.fx.b(!0)
            }
            this.eJ("SelectedItemsCountString");
            if (!t.c && t.a)
                for (var f = 0; f < t.a.length; f++) {
                    var i = t.a[f];
                    if (i) {
                        var o = this;
                        this.hD.a(function(n) {
                            n.t(i, o.j(), o.fG())
                        });
                        this.eI && this.eI.f() && this.eI.f().o(this.gf[i.p()], i)
                    }
                }
        } else {
            this.fs && this.fC && this.fC.U(!1);
            this.fx && _y.bY.isInstanceOfType(this.fx) && this.fx.b(!1)
        }
        if (this.iD) {
            for (var s = !0, e = this.m(), c = e.length, r = 0; r < c; ++r) {
                var h = e[r];
                if (h.j()) {
                    s = !1;
                    break
                }
            }
            this.mU(s && u > 0 ? !1 : !0)
        }
        this.kf || this.ku(!1);
        this.hm();
        this.eJ("SelectedItemsCount")
    },
    fR: function() {},
    ry: function() {},
    pm: function() {},
    fY: function(n, t) {
        if (t && t.length && !this.fL) {
            var r;
            var e = _a.b.b(_a.a.bu, "MailDelete", !0, (r = new _a.K, r.a = !0, r));
            var i = _h.l.b(this.eR.bH.FolderId) && !this.eI && n === "MoveToDeletedItems" && (this.fn || this.hk && t.length === 1 && this.ft);
            if (i && this.ft) {
                var f = this.eH.E(t[0]);
                var u = this;
                this.qq(f, function() {
                    u.ha(n, t, i)
                })
            } else this.ha(n, t, i);
            this.fb.a(_a.U, new _a.U(8));
            this.mH(e, t, n);
            this.de()
        }
    },
    jW: function(n, t) {
        if (n && n.length > 0) {
            n.length === 1 && this.jB(n[0], this.fh);
            var i = _h.l.b(this.eR.bH.FolderId) && _h.l.b(this.fh) && !this.eI && (this.fn || this.ft && this.hk && n.length === 1);
            if (i && this.ft && t) {
                var u = this.eH.E(n[0]);
                var r = this;
                this.qr(u, function() {
                    r.hK(n, t, i)
                })
            } else this.hK(n, t, i)
        }
        this.de()
    },
    mj: function(n) {},
    ml: function(n, t) {},
    kB: function(n) {},
    rl: function() {
        this.ng(!0, this.m())
    },
    rm: function() {
        this.ng(!1, this.m())
    },
    jy: function(n) {
        return this.mp(n) !== -1
    },
    mp: function(n) {
        for (var i = -1, t = 0; t < n.length; t++) {
            var r = this.eH.a().m(n[t], this.jo);
            i = Math.max(i, r)
        }
        return i
    },
    qf: function() {
        return this.fV ? new _y.dV(new _y.dr(_y.e.y(), _y.e.bb(), this.iK), new _y.dr(_y.e.p(), _y.e.C(), this.B()), null, null, null) : new _y.dV(new _y.dr(_y.e.p(), _y.e.C(), this.nb), new _y.dr(_y.e.w(), _y.e.Z(), this.nf), new _y.dr(_y.e.x(), _y.e.ba(), this.nc), new _y.dr(_y.e.A(), _y.e.bd(), this.ne), new _y.dr(_y.e.z(), _y.e.bc(), this.nd))
    },
    lF: function() {
        return !0
    },
    mP: function(n) {
        for (var i = new _j.l, t = 0, f = n.length; t < f; t++) {
            var r = this.hL(n[t]);
            r && i.j(r);
            i.a(_g.B.a)
        }
        var u = new _y.bc;
        u.b(i);
        return JsonParser.serialize(u.fo())
    },
    pt: function() {
        return this.mP([this.fP])
    },
    qm: function() {
        _a.o.a().I && this.h() > 0 && _a.dW.a(this.mP(this.r()))
    },
    lZ: function(n) {
        for (var f = this.h(), r = [], t = 0; t < f; t++) {
            var i = this.r()[t];
            var u = i.j();
            u === n && Array.add(r, i)
        }
        return r
    },
    oV: function() {
        return this.r()
    },
    pG: function(n) {
        var i = this.lZ(n);
        if (i.length > 0) {
            var u = n ? "MailMarkAsRead" : "MailMarkAsUnread";
            var t;
            var f = (t = new _a.K, t.a = !0, t);
            var r = _a.b.b(_a.a.bu, u, !1, f);
            this.hi(i, n);
            r.m = this.fH(i).toString();
            _a.b.a(r)
        }(this.fi.a() !== "Mouse" || this.fg.a().gA().Enabled) && this.ge()
    },
    sB: function() {},
    mK: function() {},
    lV: function() {
        return 0
    },
    ru: function() {
        this.eI && _a.b.c(_lv.b.a, "DragInSearch");
        this.gQ = !0;
        this.pw(this.h());
        if (this.fP && this.h() <= 1) {
            this.pu(this.pt());
            _g.i.isInstanceOfType(this.fP) ? this.iT(1) : _g.o.isInstanceOfType(this.fP) ? this.iT(2) : this.iT(0)
        } else if (this.h() > 0) {
            this.pu(this.mP(this.r()));
            for (var i = this.lV(), r = this.r(), u = r.length, n = 0; n < u; ++n) {
                var t = r[n];
                if (!(_g.i.isInstanceOfType(t) || _g.o.isInstanceOfType(t))) {
                    i = 0;
                    break
                }
            }
            this.iT(i)
        }
        this.hm();
        this.fb.a(_y.bO, new _y.bO(["MessageDragStart"]))
    },
    hN: function(n, t) {
        if (this.hz() && !_g.j.h(this.eR)) {
            this.fW.h(0, _u.R.BH);
            return
        }
        if (!this.fL) {
            var i = this.iV(n, t);
            this.sP(t, n);
            this.jJ = i;
            _a.g.a.a(i);
            this.rU(t, n);
            this.ge()
        }
    },
    pK: function(n, t) {
        n && n.length > 0 && this.hN(_y.F.e(n), n);
        this.gX(t);
        this.fb.a(_a.U, new _a.U(10))
    },
    sN: function(n) {
        this.gE && this.gE.h(n);
        this.gA && this.gA.h(n)
    },
    mf: function() {
        if (!this.fc) {
            if (!this.fz) {
                var t = [];
                Array.add(t, new _fm.c(_u.R.EJ, null, null));
                this.eu(new _fm.e(t))
            }
            this.fz.apcl("IsShown", this.ld);
            if (!this.gj) {
                var n = [];
                Array.add(n, new _fm.c(_u.R.EJ, null, null));
                this.gj = new _fm.e(n)
            }
            this.gj.apcl("IsShown", this.kY)
        }
    },
    rU: function(n, t) {
        var i = this.fH(n);
        i.a("fa", t.toLocaleString());
        _a.b.c(_lv.b.a, "MailSetFlag", i.toString(), 0)
    },
    mH: function(n, t, i) {
        var r = this.fH(t);
        r.a("dt", i);
        if (n) {
            n.m = r.toString();
            _a.b.a(n)
        }
    },
    fH: function(n) {
        var t = new _a.l;
        t.b("c", n.length);
        t.a("vf", this.fN);
        t.a("fv", this.fv.toString());
        t.c("fia", this.fv === -1 && this.em());
        this.eo(t);
        this.ft = !1;
        return t
    },
    iz: function(n) {
        _h.g.l(this.eR, n);
        var t = _h.a.a(this.fh);
        _h.g.f(t, n)
    },
    me: function() {
        var t = this;
        this.fJ = _y.F.f(function(n) {
            t.gH(n)
        }, _a.a.bu);
        var n = this.fJ.p.x[this.fJ.p.x.length - 1];
        this.gG = n.j;
        this.fJ.apcl("IsShown", this.kZ)
    },
    eL: function() {
        this.fK.rpcl("IsReadingPaneFullScreen", this.lc);
        this.rpcl(_lv.b.f, this.lo);
        this.fb.c(_h.bw, this.kV);
        this.rY();
        this.gC.dispose();
        this.gy.dispose();
        this.hE.dispose();
        this.fT() && _g.a.a().b().rpcl("ShowCategoryColumnOnMessageItems", this.lk);
        if (this.fs) {
            this.fd.b().rpcl("MailLeftSwipeAction", this.lr);
            this.fd.b().rpcl("MailRightSwipeAction", this.ls)
        }
        _y.lJ.prototype.eL.call(this)
    },
    qc: function(n) {
        this.eR.b && this.dL(n)
    },
    qJ: function(n) {
        var t = 0;
        n.val = 0;
        var f = this.eH.h() + this.eH.a().x.length - 1;
        var r = this.gf;
        for (var i in r) {
            var u = {
                key: i,
                value: r[i]
            };
            if (u.value < this.eH.h()) {
                n.val++;
                t++
            } else u.value > f && t++
        }
        return t
    },
    kE: function(n, t) {
        if (!t.r()) {
            var i = this.fO.toString();
            _h.c.s(n, i, i)
        }
    },
    mc: function(n) {
        for (var i = 0; i < n.length; i++)
            for (var t = 0; t < this.r().length; t++)
                if (n[i] === this.r()[t]) return !0;
        return !1
    },
    qr: function(n, t) {
        var u = this,
            i = this;
        var r = new _a.bl(6, _u.R.LC, _u.R.LC, _u.R.Kl, function() {
            t()
        }, function() {
            i.fb.a(_a.df, new _a.df(n));
            i.ft = !1
        }, null);
        this.fb.a(_a.bl, r)
    },
    qq: function(n, t) {
        var u = this,
            i = this;
        var r = new _a.bl(5, _u.R.Ve, _u.R.Ve, _u.R.Kl, function() {
            t()
        }, function() {
            i.fb.a(_a.df, new _a.df(n));
            i.ft = !1
        }, null);
        this.fb.a(_a.bl, r)
    },
    st: function(n) {
        this.hf = this.eR;
        this.hf && this.hf.rpcl(_lv.b.m, this.la);
        this.ks(n)
    },
    mJ: function(n) {
        if (this.eR && (this.hf && !this.hf.cb(this.eR) || !this.hf && this.eR.bH.FolderId && !_g.l.b(this.eR.bH.FolderId, this.fU))) this.Y(0, n);
        else {
            this.eJ("SelectedItem");
            this.pM(0);
            if (this.lF()) {
                this.fZ = !0;
                this.mk(0, n)
            }
        }
    },
    rX: function() {
        if (this.eR) {
            this.pp();
            this.eR.apcl(_lv.b.m, this.la)
        } else this.iU(null);
        if (this.fs) {
            this.rV();
            this.fe && this.fe.d(this.eR.bH.DisplayName)
        }
        this.pi(null, null)
    },
    sQ: function(n, t) {
        this.so(_ta.a.h())
    },
    sO: function(n, t) {
        this.sk(_ta.a.g())
    },
    qM: function() {
        this.iO(new _h.W("All"))
    },
    qN: function() {
        this.iO(new _h.W("Flagged"))
    },
    sI: function() {
        _a.b.c(_a.a.Y, "FO_RollupClicked", this.fv.toString(), 0);
        this.pF(this.fv ? 0 : 1)
    },
    qs: function() {
        this.eJ("DismissRollup")
    },
    kz: function() {
        this.pK(this.r(), !1)
    },
    sr: function() {
        this.hx = _j.m.a().b(this.hx);
        if (this.fQ && this.fQ.b()) {
            var n = this.qg();
            this.hx = _j.m.a().a(_lv.b.a, "MailBaseListViewModel.OnDateRollover", this.kX, n)
        }
    },
    oU: function(n, t, i) {
        return n.length > 1 ? String.format(t ? _u.R.Gn : _u.R.HL, n.length, i) : String.format(t ? _u.R.UQ : _u.R.NX, i)
    },
    lY: function(n, t) {
        return n.length > 1 ? String.format(t ? _u.R.Vq : _u.R.IG, n.length) : t ? _u.R.Lt : _u.R.BK
    },
    oT: function(n, t) {
        return this.fs ? t ? _u.R.EV : _u.R.RQ : this.eI ? this.qK(n, t) : this.lY(n, t)
    },
    qK: function(n, t) {
        var i = null;
        this.eI.b().s === 2 && (i = this.eI.O());
        if (!i && n.length === 1) {
            var u;
            u = _g.o.isInstanceOfType(n[0]) ? n[0].a().a(0) : n[0].bH.ItemId;
            var f = _h.d.a().a(u.Id);
            f && (i = f.bH.ParentFolderId)
        }
        var e = _h.a.a(i);
        var r = null;
        e && (r = _g.j.c(e));
        return r ? this.oU(n, t, r) : this.lY(n, t)
    },
    pl: function(n) {},
    pI: function() {
        return this.eH.i()
    },
    qp: function() {
        this.fc ? this.fc.q() : this.bk(this.m(), null)
    },
    lz: null,
    gX: function(n) {
        this.fn && n && this.jM()
    },
    ps: function() {
        this.fn && this.fK.b && this.fK.g().a()
    },
    jB: function(n, t) {
        this.fc ? this.fc.p(n, t) : this.bk(this.m(), null)
    },
    oR: function(n, t) {
        return _g.b.a.doesIdEqualName(n, "msgfolderroot") ? _u.R.Bh : t.f(n).bH.DisplayName
    },
    oK: function(n, t, i, r, u, f) {
        return this.eI.f().j(n, t, i, r, this.fO === 1, u, 0, f)
    },
    jT: function() {
        return null
    },
    gm: function() {
        var n = this.r();
        return !this.fP || Array.contains(n, this.fP) ? n : [this.fP]
    },
    oF: function() {
        return this.gI && this.fn && this.fd.a().bH.ShowReadingPaneOnFirstLoad
    },
    kx: function() {
        this.pz(!!this.eH && !this.eH.a().x.length && this.mX())
    },
    qh: function() {
        return this.oG() && !(!this.eI && _g.l.b(this.fh, this.eR.bH.FolderId))
    },
    oG: function() {
        if (this.hz() && !_g.j.e(this.eR)) {
            this.fW.h(0, _u.R.Eo);
            return !1
        }
        if (!this.fh || this.eR.c() || _g.bk.a(this.fh) || this.fL || this.iE || _g.b.a.doesIdEqualName(this.fh, "outbox") || _g.b.a.doesIdEqualName(this.fh, "notes")) return !1;
        var t;
        var i, r;
        var n = (r = this.dd(i = {
            val: t
        }), t = i.val, r);
        return !n || !t && !_h.a.G(this.fh, n.bH.FolderId) && !(n.bH.FolderId.Id === this.fh.Id) ? !1 : !0
    },
    rh: function() {
        if (this.fn && this.gW) {
            var t = this.fT() ? _y.cz.a(1) : _y.cz.a(3);
            var n = this;
            this.hJ = _j.m.a().a(_lv.b.a, "LoadExtendedListViewOnDelay", function() {
                n.rg()
            }, t)
        }
    },
    rg: function() {
        this.bk(this.m(), null)
    },
    rc: function(n, t) {
        if (!this.fc) {
            this.mR(this.gu(n));
            this.oW(t)
        }
    },
    rE: function() {
        if (!this.cb()) {
            var n = this.hC();
            n && (this.sz(n) ? this.rS(n) : this.po(n))
        }
    },
    sz: function(n) {
        return this.fn && _g.i.isInstanceOfType(n) && n.bH.IsDraft && !n.bH.IsSubmitted && (!n.bA() || n.bA() && _a.m.g()) && !_g.b.a.doesIdEqualName(this.j(), "outbox")
    },
    rS: function(n) {
        _a.O.a(_a.a.a, "MailComposeEditDraftLoad", 3);
        var r = _y.l.b(_a.a.a, "MailComposeEditDraftPopOut", !0, !1);
        var i = _y.l.b(_a.a.a, "MailComposeEditDraftLoad", !0, !1);
        var t = this;
        this.mt.a(function(u) {
            var f = u.b(n.bH.ItemId, !1, _g.f.d(n), n.bY());
            f.D(r);
            f.bc(i);
            f.bd(!0);
            f.bC();
            var e = t.ms.a(null, f.m(), 0, null);
            e.a(f)
        })
    },
    po: function(n) {
        var r;
        var e = _a.b.b(_lv.b.a, "ReadingPanePopOut", !0, (r = new _a.K, r.a = !0, r));
        var i = {};
        i.ItemID = n.bH.ItemId.Id;
        var t = new _y.n(!0);
        t.b(this.eR.b);
        t.f(this.gk());
        t.c(this.go);
        t.d(!1);
        t.a(n);
        t.e(_h.l.a(this.j()));
        t.i(this.iw);
        t.bE(e);
        var u = _h.a.a(n.bH.ParentFolderId);
        u && t.g(u.bH.DisplayName);
        t.h(this.fN);
        if (this.kd) {
            var f = this;
            this.kd.c(function(n) {
                f.fi.g(_y.I, function() {
                    return n
                }, i, _bc.d.a(), t, !1)
            }, !1)
        } else this.fi.g(_y.I, null, i, _bc.d.a(), t, !1)
    },
    rG: function() {
        if (this.eI) {
            this.eI.p().a();
            return
        }
        this.ge()
    },
    sa: function() {
        var n = this;
        this.mM.a(function(t) {
            t.a(n.eY)
        })
    },
    sC: function() {
        var n = this.eY;
        var t = this;
        this.mZ.a(function(t) {
            t.a(n)
        })
    },
    rn: function() {
        this.eI && _a.b.c(_lv.b.a, "MoveInSearch");
        if (this.fd.c().bH.IsShadowMailbox)
            if (this.pH()) return;
            else this.re() ? this.oJ(this.gm()) : this.rf() ? this.fY("HardDelete", this.gm()) : this.df(this.gm(), !1);
        else this.df(this.gm(), !1)
    },
    re: function() {
        return this.fd.c().bH.IsShadowMailbox && this.eR.v === 86 && !(_h.a.q(this.fh, _g.b.a.nameToId("deleteditems")) || _h.a.q(this.fh, _g.b.a.nameToId("junkemail")))
    },
    rf: function() {
        var n = _h.a.a(this.fh);
        return this.fd.c().bH.IsShadowMailbox && !!n && n.v === 86 && !(_h.a.q(this.eR.bH.FolderId, _g.b.a.nameToId("deleteditems")) || _h.a.q(this.eR.bH.FolderId, _g.b.a.nameToId("junkemail")))
    },
    pH: function() {
        if (this.fd.c().bH.IsShadowMailbox) {
            var n = null;
            var r = _h.a.a(this.fh);
            var i = this.eR.v;
            if (i === 87) n = _u.R.Jm;
            else if (i === 88) n = _u.R.TK;
            else if (r) {
                var t = r.v;
                t === 87 ? n = _u.R.Gm : t === 88 && (n = _u.R.VX)
            }
            if (n) {
                this.fW.h(0, n);
                return !0
            }
        }
        return !1
    },
    df: function(n, t) {
        if (this.qh())
            if (this.gB.w()) {
                var i = this;
                this.fW.h(2, _u.R.MJ, function(r, u) {
                    u && i.gB.e.l(!1);
                    r && i.jW(n, t)
                }, !0)
            } else {
                this.jW(n, t);
                this.ft = !1
            }
    },
    qn: function() {
        this.fd.c().bH.IsShadowMailbox || this.oJ(this.gm())
    },
    oJ: function(n) {
        if (this.oG())
            if (this.gB.w()) {
                var t = this;
                this.fW.h(2, _u.R.MJ, function(i, r) {
                    r && t.gB.e.l(!1);
                    i && t.jW(n, !1)
                }, !0)
            } else {
                this.mj(n);
                this.ft = !1
            }
    },
    ro: function() {
        var n = this.gm();
        this.iN("Focused", n);
        var t = this.fH(n);
        _a.b.c(_a.a.bu, "FO_MoveToFocused", t.toString(), 0)
    },
    rp: function() {
        var n = this.gm();
        this.iN("Other", n);
        var t = this.fH(n);
        _a.b.c(_a.a.bu, "FO_MoveToOther", t.toString(), 0)
    },
    rQ: function() {
        this.iG = !0;
        this.lG(200);
        _a.o.a().c() && !this.lP() && this.fb.b(_y.cL, this.lg);
        this.fx && _y.bY.isInstanceOfType(this.fx) && this.fx.a(0)
    },
    rR: function() {
        this.iG = !1;
        _a.o.a().c() && !this.lP() && this.fb.c(_y.cL, this.lg)
    },
    rx: function() {
        this.sM();
        this.hm();
        this.pj();
        this.eJ("InYourFolderText");
        this.iJ.c(this.kk.c(this.jO.c(this.kD.c(this.gk()))));
        if (!this.fc && this.eR && this.eR.a() === "deleteditems") {
            var n = this;
            this.bk(this.m(), function() {
                n.fc.l()
            })
        } else this.fc && this.fc.l()
    },
    pj: function() {
        this.jV.c(_g.j.e(this.eR));
        this.hP.c(_g.j.h(this.eR));
        this.hO.c(_g.j.h(this.eR));
        this.eJ(_lv.b.B)
    },
    lG: function(n) {
        this.iG && this.eH && this.eH.bg(n)
    },
    sE: function() {
        this.lG(203)
    },
    qF: function() {
        var n = this.j();
        return n && (_g.b.a.doesIdEqualName(n, "deleteditems") || _g.b.a.doesIdEqualName(n, "archivedeleteditems") || _g.bk.a(n)) ? "SoftDelete" : _g.b.a.doesIdEqualName(n, "recoverableitemsdeletions") ? "HardDelete" : "MoveToDeletedItems"
    },
    oX: function() {
        this.mg(this.oV(), !1)
    },
    sF: function() {
        this.ft = !0;
        this.mw();
        this.ft = !1
    },
    sG: function() {
        this.ft = !0;
        this.pg();
        this.ft = !1
    },
    sH: function() {
        this.ft = !0;
        this.kz();
        this.ft = !1
    },
    qZ: function() {
        this.qY(this.r())
    },
    qX: function() {
        if (this.fy) {
            this.jH.a();
            return
        }
        this.oZ(this.r())
    },
    oZ: function(n) {
        if (!this.fL && n.length) {
            var i = _j.m.a().i;
            var t = this;
            this.fW.h(1, _u.R.CK, function(r, u) {
                if (r) {
                    _j.m.a().o(i);
                    t.pJ(n)
                }
            })
        }
    },
    pa: function(n) {
        if (!this.fL) {
            var i = n ? 128 : 256;
            if ((i & this.fd.a().v()) === i) {
                var r = n ? _u.R.Uk : _u.R.Ew;
                var t = this;
                this.fW.h(1, r, function(r, u) {
                    if (u) {
                        var f;
                        (f = t.fd.a()).x(f.v() & ~i);
                        _h.f.a(t.fd.a().u, _a.g.a)
                    }
                    r && t.kB(n)
                }, !0)
            } else this.kB(n)
        }
    },
    sD: function() {
        this.pJ(this.r())
    },
    pJ: function(n) {
        this.fY("SoftDelete", n)
    },
    qg: function() {
        var n = _a.d.a();
        var i = _ff.p.a(1, 10);
        var t = n.d().c(1).B(i);
        return t.e(n)
    },
    pk: function(n) {
        (this.eH && !this.eH.d() || this.fZ) && this.mk(1, n)
    },
    rs: function() {
        this.mV()
    },
    mV: function() {
        _y.bm.isInstanceOfType(this.fQ) && this.jr && this.fQ.l(this.kU);
        this.fQ = this.gd(_a.d.a());
        _y.bm.isInstanceOfType(this.fQ) && this.jr && this.fQ.j(this.kU);
        this.sr();
        this.eJ(_lv.b.e)
    },
    mr: function(n, t) {
        this.gp();
        if (this.eH.d()) this.iH = this.eH.n();
        else {
            this.mk(this.iH, this.eH.w().bd);
            this.iH = 0
        }
    },
    mk: function(n, t) {
        if (this.eI) {
            this.eI.ba(2);
            _j.m.a().h();
            this.hM(!this.gg);
            this.hM(!this.gg);
            var r = this.eH.w();
            if (r && this.gS && this.gS.a === r.bV) {
                if (this.gS.b) return;
                this.gS.b = !0;
                var i = this.gS.c;
                if (i) {
                    i.o = this.jS();
                    _a.b.a(i)
                }
            }
        }
        if (n === 4 || n === 5) {
            this.gp();
            _lv.b.j > 0 && _lv.b.j--;
            if (!this.eY && !this.fs) {
                this.bo(1);
                this.eJ(_lv.b.h)
            }
            return
        }
        if (_lv.b.r) this.rT(t);
        else {
            _lv.b.r = !0;
            this.qk()
        }
        this.qi();
        this.gI = !1;
        this.gp();
        if (!this.iC) {
            this.px(!this.eH.b());
            this.eJ("CurrentTableLoaded");
            this.iC = !0;
            this.rW();
            this.lW()
        }
    },
    rW: function() {
        if (this.fn && this.fg && this.fg.a().d().Enabled) {
            var n;
            switch (_g.b.a.idToName(this.j())) {
                case "inbox":
                    n = 2;
                    break;
                case "sentitems":
                    n = 4;
                    break;
                case "drafts":
                    n = 1;
                    break;
                case "deleteditems":
                    n = 0;
                    break;
                case "junkemail":
                    n = 3;
                    break;
                default:
                    n = 11;
                    break
            }
            this.fb.a(_a.U, new _a.U(n))
        }
    },
    qi: function() {
        this.rj();
        this.qB() && this.mO()
    },
    qB: function() {
        return this.gT === 1 && this.eH.a().x.length > 0 && !this.fX && this.oF()
    },
    rj: function() {
        if (!_lv.b.s && this.ka() && _g.b.a.doesIdEqualName(this.j(), "inbox")) {
            _lv.b.s = !0;
            this.kC = 0;
            for (var n = 0; n < this.eH.a().x.length; n++) {
                var r = this.eH.a().x[n];
                if (!r.w()) {
                    this.kC = n;
                    break
                }
            }
            var t = _a.b.b(_lv.b.a, "PinnedItemsInInbox", !1, null);
            var i = new _a.l;
            i.b("c", this.kC);
            t.m = i.toString();
            _a.b.a(t)
        }
    },
    lW: function() {},
    qP: function(n) {
        var t = this;
        this.hw.a(function(t) {
            var i = t.a();
            i.a(n.U())
        })
    },
    ss: function(n, t) {
        var i = this.eH.D(n);
        var r = "";
        if (i)
            if (t) {
                i.bF(t);
                i.bh(4)
            } else i.bh(3);
        else r = "MailItem row not found for extracted actions.";
        this.rk(i ? t : null, r)
    },
    pb: function(n) {
        var t = this;
        this.hw.a(function(i) {
            var r = i.d(n, t.ov);
            _a.g.a.a(r)
        })
    },
    rk: function(n, t) {
        var i = this;
        this.hw.a(function(i) {
            var r = i.a();
            r.b(n, t)
        })
    },
    qk: function() {
        if (_a.k.g()) {
            var n = _a.be.e();
            _a.L.a().n(n.d);
            _a.k.P = this.gB.a();
            if (_a.o.a().c()) this.fi.K() && (_a.k.f = this.fi.K().h());
            else {
                _a.be.c() && (_a.k.f = window.performance.timing.navigationStart);
                _a.k.P || _a.k.bi(1)
            }
        }
    },
    jS: function() {
        var t = this.eH.w();
        var n = null;
        _h.cc.isInstanceOfType(t) ? n = t.Q : _h.bm.isInstanceOfType(t) && (n = t.Q);
        return n ? n.correlationId : ""
    },
    rI: function(n, t) {
        this.gp();
        var i = this.eH.j();
        i.b() || this.fs || this.eJ("CurrentTableLoaded")
    },
    rO: function(n, t) {
        this.px(!n.bH)
    },
    pq: function() {
        this.fs ? this.hg() : this.pr()
    },
    hg: function() {
        var n = this.gK();
        n || this.bo(1);
        this.oI();
        n || this.gs();
        this.ku(!1);
        this.bn(!1);
        this.jM()
    },
    oI: function() {
        this.fj.g();
        this.E(null);
        this.hh(null);
        this.gI = !0
    },
    oH: function(n) {
        if (!n) {
            this.bQ(null);
            _h.u.a = null
        }
    },
    pr: function() {
        this.bn(!1);
        if (!this.eY || this.fj.x.length !== 1 || this.cb() || this.iF) {
            this.y() && (this.y().b = 3);
            var n = !this.cb() && this.fj.x.length > 0 ? this.fj.x[this.fj.x.length - 1] : null;
            var t = this.gK();
            this.fj.g();
            this.kv(n);
            this.E(n);
            t || this.gs()
        }
    },
    rw: function(n, t) {
        if (!this.fJ.q()) {
            this.gG.c(!0);
            return
        }
        var i = !0;
        this.eY && (i = this.eY.M() !== "NotFlagged");
        this.gG.c(i);
        _h.g.a(_a.a.Y, "FlagContextMenuOpenedShow", -1, 0, null)
    },
    rB: function(n, t) {
        var i = this;
        this.lK(function() {
            i.fc.K(i.m())
        })
    },
    rv: function(n, t) {
        if (!this.eI) {
            var i = this;
            this.lK(function() {
                i.fc.I(i.iA)
            })
        }
    },
    lK: function(n) {
        if (this.fc) n();
        else {
            var t = this;
            this.bk(this.m(), function() {
                n()
            })
        }
    },
    rN: function(n, t) {
        if (this.fi.a() === "TouchWide" && this.gW && !this.fc) {
            var i = this;
            this.gW.a(function(n) {
                i.mR(i.gu(n));
                i.fc.L()
            })
        }
    },
    qS: function() {
        if (this.fs) {
            var n = [new _ff.f(_u.R.Ql, "Unread"), new _ff.f(_u.R.Gv, "ToOrCcMe"), new _ff.f(_u.R.Fm, "Flagged")];
            Array.insert(n, 0, new _ff.f(_u.R.Ks, "All"));
            Array.insert(n, 4, new _ff.f(_u.R.EV, "Pinned"));
            this.fF = this.hR.g(n, _a.o.a());
            var t = this.fF.b().p;
            t.x[4].a(!0);
            t.x[0].a(!0)
        }
    },
    qo: function() {
        var n = _y.k.a(this, null, null);
        n.r(!0);
        n.b(this.lU());
        n.f(this.qD());
        n.o(this.oQ());
        n.n();
        this.fs && n.bi(this.iy(), this);
        this.sl(n)
    },
    lH: function() {
        this.fl(this.hR.i(new _j.g(this.lf, _a.a.bu), this.lQ(), new _j.g(this.om, _a.a.bu), this.lN()))
    },
    ql: function(n) {
        n ? this.fl(this.hR.h(new _j.g(this.lf, _a.a.bu), this.lQ(), this.hv, this.lN())) : this.lH()
    },
    qD: function() {
        var n = [];
        if (this.fs) {
            this.im && this.im.a() === this.iP || (this.im = new _y.i(_u.R.IY, this.iP));
            Array.add(n, this.im)
        }
        if (this.fO === 2 || this.fO === 1) {
            var i = this.fO === 1 ? _u.R.PD : _u.R.Vg;
            this.iq && this.iq.a() === this.kA || (this.iq = new _y.i(i, this.kA));
            Array.add(n, this.iq)
        }
        if (this.h() >= 1 && this.fs) {
            this.ii && this.ii.a() === this.B() || (this.ii = new _y.i(_u.R.FM, this.B()));
            Array.add(n, this.ii);
            this.il && this.il.a() === this.gZ || (this.il = new _y.i(_u.R.Dl, this.gZ));
            Array.add(n, this.il);
            this.ij && this.ij.a() === this.K() || (this.ij = new _y.i(_u.R.Ox, this.K()));
            this.ik && this.ik.a() === this.L() || (this.ik = new _y.i(_u.R.Ti, this.L()));
            this.jw || (this.jw = new _y.i(_u.R.LZ, this.kj));
            this.jx || (this.jx = new _y.i(_u.R.SJ, this.iK));
            if (this.fV) Array.add(n, this.jx);
            else {
                Array.add(n, this.ij);
                Array.add(n, this.ik);
                if (this.h() === 1) {
                    var r = _y.F.e(this.m());
                    switch (r) {
                        case "Today":
                            this.hu && this.hu.a() === this.hP || (this.hu = new _y.i(_u.R.Qw, this.hP));
                            Array.add(n, this.hu);
                            break;
                        case "MarkComplete":
                            this.ip && this.ip.a() === this.hO || (this.ip = new _y.i(_u.R.JH, this.hO));
                            Array.add(n, this.ip);
                            break;
                        case "ClearFlag":
                            this.io && this.io.a() === this.gG || (this.io = new _y.i(_y.F.b(), this.gG));
                            Array.add(n, this.io);
                            break;
                        default:
                            break
                    }
                } else {
                    Array.add(n, this.hu);
                    this.qy() && this.fd.a().bH.ShowInferenceUiElements && Array.add(n, this.jw)
                }
                if (!this.rd()) {
                    this.ih && this.ih.a() === this.gy || (this.ih = new _y.i(_u.R.Uo, this.gy));
                    Array.add(n, this.ih)
                }
                var t = this.j();
                if (t && _g.b.a.doesIdEqualName(t, "deleteditems")) {
                    this.ig && this.ig.a() === this.gy || (this.ig = new _y.i(_u.R.FX, this.hE));
                    Array.add(n, this.ig)
                }
            }
        }
        return n
    },
    oQ: function() {
        if (this.fi.a() === "TouchWide") return null;
        if (this.fV) {
            var n = _y.h.b(this.lL);
            return [n]
        } else {
            this.id && this.id.a() === this.oN() || (this.id = new _y.h(_y.b.Q(), _y.b.R(), _u.R.Jd, this.oN()));
            return [this.id]
        }
    },
    lU: function() {
        if (this.fi.a() === "TouchWide")
            if (this.fK.b) {
                this.jv = _y.h.b(this.fK.e());
                this.ju = new _y.h(_y.b.be(), _y.b.bf(), _u.R.S, this.fK.d());
                this.ie = new _y.h(_y.b.bp(), _y.b.bo(), _u.R.CM, this.fK.g());
                this.ie.f({}).Selected = !0;
                return this.fd.c().bH.IsUserCultureRightToLeft ? [this.ju, this.jv, this.ie] : [this.jv, this.ju, this.ie]
            } else {
                this.lD = new _y.h(_y.b.v(), _y.b.w(), _u.R.IY, this.iP);
                this.lE = new _y.h(_y.b.bo(), _y.b.bp(), _u.R.CM, this.fK.g());
                return [this.lD, this.lE]
            }
        else if (this.fV) {
            var n = new _y.h(_y.b.G(), _y.b.bj(), _u.R.IT, this.hv);
            return [n]
        } else {
            this.lC = new _y.h(_y.b.V(), _y.b.W(), _u.R.HC, this.lQ());
            return [this.lC]
        }
    },
    rd: function() {
        var n = this.j();
        return n ? _g.b.a.doesIdEqualName(n, "sentitems") || _g.b.a.doesIdEqualName(n, "junkemail") || _g.b.a.doesIdEqualName(n, "drafts") || _g.b.a.doesIdEqualName(n, "notes") : !0
    },
    mF: function(n, t) {
        switch (t.c) {
            case 2:
                if (this.pI()) return;
                var r = this.gK();
                r || this.bo(1);
                for (var u = !!this.eY, i = 0; i < t.b.length; i++) this.fj.w(t.b[i], this.jo) && this.fj.p(t.b[i], !0);
                this.gT === 1 && !this.fj.x.length && u && this.jz(t.d);
                if (!r) {
                    this.gs();
                    this.bo(0)
                }
                break;
            case 0:
                this.pl(t);
                break
        }
        this.eH.a().x.length || this.pN();
        this.kx()
    },
    qw: function() {
        _j.m.a().b(this.hx);
        this.hx = _j.m.a().a(_lv.b.a, "MailBaseListViewModel.ForceDateRollover", this.kX, 20)
    },
    sP: function(n, t) {
        var i = null;
        switch (t) {
            case "ClearFlag":
                i = _u.R.OC;
                break;
            case "MarkComplete":
                i = _u.R.H;
                break;
            default:
                i = _u.R.Ow;
                break
        }
        var r = this;
        this.bk(n, function(n) {
            n.d(i)
        })
    },
    jz: function(n) {
        this.bo(1);
        if (this.eH.a().x.length) {
            var i = this.fd.a().p();
            var t = i === "Previous" ? n - 1 : n;
            t < 0 ? t = 0 : t >= this.eH.a().x.length && (t = this.eH.a().x.length - 1);
            this.fd.a().p() !== "ReturnToView" || this.fK.f || this.ps();
            this.E(this.eH.a().x[t])
        } else this.E(null);
        this.pM(1)
    },
    pM: function(n) {
        if ((this.fn || this.fi.a() === "TouchWide") && this.gF) {
            this.bo(n);
            this.bb(0);
            this.bb(1);
            this.bo(0)
        }
    },
    qj: function(n, t) {
        if (n && t && Object.getType(n) !== Object.getType(t)) return !1;
        if (n)
            if (_ff.u.isInstanceOfType(n)) return n.N(t);
            else if (_j.L.isInstanceOfType(n)) return n.C(t);
        return n === t
    },
    qd: function() {
        this.fd.a().apcl("ShowSenderOnTopInListView", this.ln);
        this.fd.a().apcl("ShowPreviewTextInListView", this.ll);
        this.fd.a().apcl("ShowReadingPaneOnFirstLoad", this.lm);
        _h.a.c && this.fd.a().apcl("IsFocusedInboxEnabled", this.lb)
    },
    rY: function() {
        this.fd.a().rpcl("ShowSenderOnTopInListView", this.ln);
        this.fd.a().rpcl("ShowPreviewTextInListView", this.ll);
        this.fd.a().rpcl("ShowReadingPaneOnFirstLoad", this.lm);
        _h.a.c && this.fd.a().rpcl("IsFocusedInboxEnabled", this.lb)
    },
    rL: function(n, t) {
        this.fd.a().bH.ShowReadingPaneOnFirstLoad && !this.eY && this.jz(0)
    },
    rM: function(n, t) {
        this.eJ(_lv.b.I)
    },
    rK: function(n, t) {
        this.eJ(_lv.b.i);
        this.eJ(_lv.b.n)
    },
    pi: function(n, t) {
        this.hE.c(this.gy.c(!this.hz()));
        this.eJ(_lv.b.m)
    },
    qQ: function(n) {
        this.eR && !this.eR.z && this.eH && this.eH.bl()
    },
    qO: function(n) {
        _lv.b.j = 2
    },
    sS: function(n) {
        switch (n.c) {
            case 0:
                for (var i = 0; i < n.a.length; i++) {
                    var r = n.a[i];
                    this.gf[r.p()] = this.qL(r)
                }
                break;
            case 2:
                for (var t = 0; t < n.b.length; t++) delete this.gf[n.b[t].p()];
                break;
            case 4:
                this.sp({});
                break
        }
    },
    qL: function(n) {
        if (!this.eH || !this.eH.a()) return -1;
        var t = this.eH.a().m(n, this.jo);
        return t >= 0 ? t + this.eH.h() : -1
    },
    gp: function(n) {
        n || this.sK();
        this.pN();
        this.sR()
    },
    sK: function() {
        _h.I.isInstanceOfType(this.eH) && this.eH.j() ? this.dm(this.eH.j().b()) : this.dm(this.eH.d());
        this.eJ("TableLoading")
    },
    pN: function() {
        if (this.eH.a().x.length > 0) {
            if (this.eI) {
                if (this.eI) {
                    this.dq(14);
                    var r = this.sb();
                    r !== "" && this.bp(r)
                }
            } else {
                this.dq(0);
                if (this.eH.n() !== 4 && this.eH.n() !== 5) {
                    var i = this.sU();
                    i !== "" && this.iC && !this.hH && this.bp(i)
                }
            }
            return
        }
        if (_h.I.isInstanceOfType(this.eH) && this.eH.j()) {
            var t = this.eH.j();
            this.iX = !0;
            if (t.b()) {
                this.dq(13);
                return
            }
            if (t.c()) {
                this.dq(2);
                return
            }
            if (t.a()) {
                this.dq(12);
                return
            }
        }
        if (this.bL()) this.dq(16);
        else if (this.hH) this.dq(0);
        else {
            this.iX = !0;
            var n = this;
            this.eH.N(this.gB, function(t) {
                t !== 1 ? n.dq(t) : n.eH.b() ? n.dq(0) : n.dq(1)
            })
        }
    },
    sR: function() {
        if (this.eI && this.eI.b() && this.eI.b().p()) {
            if (this.eI.f()) {
                this.hM(!1);
                this.mS(!0)
            }
            this.fc && this.fc.m()
        } else if (_h.I.isInstanceOfType(this.eH) && this.eH.j()) {
            var n = this.eH.j();
            this.mS(n.a());
            this.eI && _h.dk.isInstanceOfType(n) ? this.hM(n.r()) : this.hM(!1)
        } else {
            this.hM(!1);
            this.mS(!1)
        }
    },
    rD: function(n) {
        var t = this;
        n.b(function() {
            if (t.eI) {
                t.eI.p().a();
                return !0
            } else if (t.h() >= 1) {
                t.ge();
                return !0
            }
            return !1
        })
    },
    rH: function(n, t) {
        if (this.eI) {
            var i = this.eI.b();
            var r = _a.d.get_utcNow();
            i.o && i.o.s(n, t)
        }
    },
    ph: function(n) {
        if (n && this.eI && _y.D.isInstanceOfType(this.eI.b())) {
            var t = this.eI.b();
            t && t.o && t.o.p(n)
        }
    },
    sM: function() {
        if (this.eR) {
            this.fL = _g.b.a.doesIdEqualName(this.eR.bH.FolderId, "outbox");
            this.iE = _g.b.a.doesIdEqualName(this.eR.bH.FolderId, "notes");
            this.sh(_g.b.a.doesIdEqualName(this.eR.bH.FolderId, "clutter"))
        }
    },
    gH: function(n) {
        this.hN(n, this.r())
    },
    pp: function() {
        if (this.fC)
            if (this.fs) {
                this.fC.b(this.lU());
                this.fC.o(this.oQ());
                this.fC.n()
            } else if (this.fi.a() === "TouchWide") {
            this.fC.o(null);
            this.fC.n();
            if (this.fV) {
                var n = new _y.h(_y.b.G(), _y.b.bj(), _u.R.IT, this.hv);
                this.fC.g(n, 0)
            }
        }
    },
    rt: function() {
        this.gQ = !1;
        this.hm();
        this.fb.a(_y.bO, new _y.bO(["MessageDragEnd"]));
        this.fb.a(_y.dy, new _y.dy(1))
    },
    rA: function(n, t) {
        this.fn || this.fC.b(this.lU())
    },
    ri: function(n) {
        if (this.jN) {
            var r = this.jN.a();
            var i = this.eR.bH.FolderId ? this.eR.bH.FolderId.Id : "";
            if (r.q(i) && !r.p(i)) {
                var t = new _a.l;
                var u = _a.b.b(_a.a.v, _lv.b.K, !1, null);
                t.b("T", Math.round(_a.d.a().e(this.fi.y()) / 1e3));
                this.eH.q() ? t.c("Y", this.fZ) : t.c("N", r.o(i));
                r.s(i);
                u.o = n;
                u.m = t.toString();
                _a.b.a(u)
            }
        }
    },
    rC: function() {
        this.fb.a(_y.ch, new _y.ch)
    },
    rP: function() {
        _a.b.c(_lv.b.a, "TouchMultiSelectButtonClicked");
        this.kt(!0)
    },
    kq: function(n) {
        this.fc ? this.fc.o(n, this.fc.C(), this.eI ? this.eI.u() : null) : this.bk(this.m(), null)
    },
    rZ: function(n, t) {
        n.b().p() ? this.eJ(this.cV()) : this.cl(n, t)
    },
    rJ: function(n, t) {
        this.eJ(_lv.b.c)
    },
    oL: function() {
        this.eJ("SearchContext");
        this.fc && this.fc.m()
    },
    mi: function() {
        this.kf = !0;
        this.gh.a();
        this.kf = !1;
        this.ku(!0);
        this.eH.a().x.length || this.ku(!1)
    },
    rq: function() {
        this.hI ? this.mi() : this.pq();
        this.hI = !this.hI;
        if (this.lP()) {
            var n = this.hI ? _u.R.RI : _u.R.Vr;
            this.fe.p(n)
        }
    },
    rr: function() {
        this.ea() ? this.hg() : this.mi()
    },
    qR: function(n) {
        var i = _j.m.a().i;
        var t = this;
        this.fW.h(1, _u.R.Jy, function(r, u) {
            if (r) {
                _j.m.a().o(i);
                t.fY("HardDelete", n)
            }
        }, !1, null, null, _u.R.Fb)
    },
    hm: function() {
        var n = this.em() && this.gQ;
        this.gR = !!this.eR && this.bI() && this.hb && !n;
        this.pP();
        this.eQ([_lv.b.D, _lv.b.H, "IsViewPortCheckboxChecked", "ShowViewPortCheckbox", "ShowFocusedInboxPivotOptions"])
    },
    sd: function() {
        if (this.eH.m().x.length === this.eH.b()) {
            this.sc();
            _h.g.a(_a.a.bu, "MailLVSelectAllItems", 5, 1, null)
        } else {
            this.bn(!0);
            _h.g.a(_a.a.bu, "MailLVSelectEverything", 5, 1, null)
        }
    },
    jM: function() {
        this.iv && this.iv.a()
    },
    pP: function() {
        this.sq(!this.fy && this.gR && !this.dY() && this.bw() !== this.h() && this.ea())
    },
    mw: function() {
        if (this.fy) {
            this.ki(!0);
            this.ge()
        } else this.pG(!0)
    },
    pg: function() {
        if (this.fy) {
            this.ki(!1);
            this.ge()
        } else this.pG(!1)
    },
    sT: function() {
        this.ir.c(!this.fy);
        this.iZ.c(!this.fy);
        this.iY.c(!this.fy);
        this.gt.c(!this.fy);
        this.hF.c(!this.fy);
        this.hQ.c(!this.fy);
        this.iJ.c(!this.fy);
        this.kp.c(!this.fy);
        this.iQ.c(!this.fy);
        this.ix.c(!this.fy)
    },
    sU: function() {
        var t = "";
        var i = _g.j.c(this.eR);
        if (!_j.h.b(i)) {
            var n = this.eR;
            t = n.bH.TotalCount && n.bH.UnreadCount ? String.format(_u.R.BQ, n.bH.TotalCount, n.bH.UnreadCount, i) : String.format(_u.R.BE, this.eH.a().x.length, i)
        }
        return t
    },
    sb: function() {
        var t = "";
        var i = this.eI.b();
        if (i.o) {
            var n = this.eR;
            t = n.bH.TotalCount && n.bH.UnreadCount ? i.o.b(n.bH.TotalCount, n.bH.UnreadCount) : i.o.b(this.eH.a().x.length, -1)
        }
        return t
    },
    rz: function(n, t) {
        this.eJ("ShowFocusedInboxPivotOptions")
    },
    qT: function() {
        this.jp = this.kb ? [new _ff.f(_u.R.Lo, 0), new _ff.f(_u.R.FU, 1), new _ff.f(_u.R.Ta, -1)] : [new _ff.f(_u.R.Lo, 0), new _ff.f(_u.R.FU, 1)]
    },
    rT: function(n) {
        if ((n || this.jD === 2) && this.eR) {
            var t = new _a.l;
            if (this.gk()) {
                t.c("C", this.fZ);
                t.c("FC", this.eH.q());
                t.c("FUF", this.eH.q() && !this.eH.C());
                var f = _g.b.a.doesIdEqualName(this.eR.bH.FolderId, "clutter");
                t.c("CL", f);
                t.a("GUID", this.eR.bH.FolderId.Id);
                t.a("FN", _g.j.g(this.eR));
                t.a("FV", this.fv.toString());
                t.a("V", this.fO.toString());
                if (!this.fZ) {
                    t.c("TC", this.fA);
                    t.c("S", this.eH.L());
                    t.c("R", !this.eH.h() && this.eH.a().x.length > 0)
                }
                t.c("F", this.eH.C());
                this.fi.y() && t.b("T", Math.round(_a.d.a().e(this.fi.y()) / 1e3));
                this.eH.bb(!0);
                var i = t.toString();
                if (this.jD === 2) this.qu(i);
                else {
                    var r = this.jS();
                    this.ri(r);
                    var u = this.fZ ? new _a.y("Hit") : new _a.y("Miss");
                    _a.b.d(n, u);
                    n.o = r;
                    n.m = i;
                    _a.b.a(n)
                }
            } else this.qt(n, t)
        }
    },
    qt: function(n, t) {
        if (n) {
            t.c("PF", this.eR.c());
            t.c("SF", this.eR.b);
            t.c("AF", _h.a.bi(this.eR));
            t.c("DF", _h.a.S(this.eR));
            n.o = this.jS();
            n.m = t.toString();
            _a.b.a(n)
        }
    },
    qu: function(n) {
        var i = _y.d.d(this.fN);
        var t = _a.p.c(i);
        if (t) {
            t.o = this.jS();
            t.m = n;
            _a.p.a(i)
        }
    },
    rV: function() {
        if (this.fF) {
            this.fF.l(this.oO());
            this.fF.a(0);
            this.jI()
        }
    },
    sL: function(n) {
        _h.a.c && n.bN(this.fv, this.em())
    },
    qE: function() {
        return this.j() || _g.b.a.nameToId("inbox")
    },
    sw: function(n) {
        this.hb = n;
        n || this.bn(!1);
        this.hm();
        this.eJ("IsInMultiselectMode")
    },
    sx: function(n) {
        var i = this.gK();
        this.fy = n;
        if (n) {
            this.bm(!0);
            this.jM()
        }
        if (this.iD) {
            this.mU(!0);
            if (n) {
                this.gb(this.hl.c());
                var t = this.eR;
                t.bH.UnreadCount && t.bH.UnreadCount || this.mU(!1)
            } else this.gb(this.hl.a())
        }
        this.js = n ? _a.d.a() : null;
        this.hm();
        this.sT();
        this.eU(this.cH(), "IsViewPortCheckboxChecked", "ToggleButtonToolTipText");
        i || this.gs()
    },
    gK: function() {
        var n = !this.gF;
        this.bb(0);
        return n
    },
    gs: function() {
        this.bb(1)
    },
    qU: function() {
        if (!_a.o.a().c() && this.kl) {
            var t = _g.a.a();
            var i = _a.bm.a(t.bH.AdMarket, t.o(), this.fg);
            var r = new _a.l;
            r.a("M", i);
            var n = r.toString();
            if (t.c().bH.IsPremiumConsumerMailbox) {
                _a.b.c(_a.a.I, "MlaNLPaidUser", n, 0);
                return
            }
            if (t.bH.IsConsumerChild) {
                _a.b.c(_a.a.I, "MlaNLKid", n, 0);
                return
            }
            if (_a.bm.c(this.fg, i, this.fi.a(), this.fd.c().bH.IsShadowMailbox)) {
                _a.b.c(_a.a.I, "MlaUserOnAllInbox", n, 0);
                this.bq(!0);
                this.kw = this.fg.a().br().ShowAdsNumber ? this.fg.a().br().ShowAdsNumber : 1;
                var u = this;
                this.fb.b(_a.cC, function(n) {
                    u.pc()
                })
            } else if (_a.bm.f(this.fg, i, this.fi.a(), this.fd.c().bH.IsShadowMailbox)) {
                _a.b.c(_a.a.I, "MlaUserOnOtherOnly", n, 0);
                this.kw = this.fg.a().br().ShowAdsNumber ? this.fg.a().br().ShowAdsNumber : 1;
                this.mW = !0
            } else _a.b.c(_a.a.I, "MlaNLFlightOrMarketOrLayout", n, 0)
        }
    },
    pc: function() {
        var n = this;
        this.kl.a(function(t) {
            n.ib = t;
            n.ib.c(n.iS);
            n.eJ("MessageListAdsViewModel")
        })
    },
    sy: function(n) {
        n && this.h() > 0 && this.ge();
        this.iD = n;
        this.bm(n);
        if (n) {
            this.fl(this.hR.k(this.jA, this.lw, this.dY(), this.lN()));
            this.gb(this.hl.a())
        } else {
            this.lH();
            this.gb(this.kL)
        }
        this.fF.i(n);
        this.eJ("IsInTouchNarrowMultiselectView")
    },
    pF: function(n) {
        this.kb ? this.dl(n === -1 ? 2 : n) : this.dl(n)
    }
};
_lv.b.M = function(n, t) {
    this.a = n;
    this.c = t
};
_lv.b.M.prototype = {
    c: null,
    a: 0,
    b: !1
};
_lv.i = function(n, t, i, r, u) {
    this.bi = Function.createDelegate(this, this.bA);
    this.y = Function.createDelegate(this, this.bS);
    this.s = Function.createDelegate(this, this.bs);
    _lv.i.initializeBase(this, [t, i, r, u]);
    this.m = n;
    _dh.a(u, this);
    this.bv();
    this.bT();
    if (this.l.fn) {
        var f = this.m.hw();
        if (f) this.bw(f.MessageSafetyReason === 1 || f.MessageSafetyReason === 2);
        else {
            var e = this.m.hx();
            switch (e) {
                case 5:
                case 12:
                case 11:
                    this.bw(!0);
                    break
            }
        }
        this.cs();
        this.L = !!r && r.a().gu().Enabled;
        this.L && this.bz()
    }
};
_lv.i.prototype = {
    m: null,
    Q: !1,
    L: !1,
    P: null,
    bo: function() {
        return _g.i.isInstanceOfType(this.m) ? this.m.cH() : _lv.g.prototype.bo.call(this)
    },
    bw: function(n) {
        if (this.Q !== n) {
            this.Q = n;
            this.eJ("ShowTrustedSenderGreenShield")
        }
        return n
    },
    bk: function() {
        var t = _h.a.b("msgfolderroot");
        var n = t.f(this.m.bH.ParentFolderId);
        return n ? n.bH.DisplayName : ""
    },
    H: function() {
        return this.m.bT()
    },
    bg: function() {
        return this.m.cE()
    },
    I: function() {
        return _h.cg.a(this.m)
    },
    n: function() {
        return this.m
    },
    N: function() {
        this.t();
        this.m = null
    },
    G: function() {
        this.br(this.l.gc.f(this.n(), this))
    },
    bT: function() {
        this.m.apcl("Importance", this.s);
        this.m.apcl("Categories", this.y);
        this.m.apcl("IconIndex", this.s);
        this.m.apcl("HasAttachments", this.U);
        this.m.apcl("Importance", this.bd);
        this.m.apcl("ReceivedOrRenewTime", this.T);
        this.m.apcl("IsPinned", this.C);
        this.m.apcl("SmimeType", this.be);
        this.m.apcl("AvailableFeaturesFlag", this.bi);
        if (this.l.fn) {
            this.m.apcl("Flag", this.B);
            this.m.apcl("IsRead", this.D);
            this.m.apcl("LikeCount", this.s)
        }
        this.l.fT() && this.m.apcl("SystemCategories", this.y)
    },
    t: function() {
        this.m.rpcl("Importance", this.s);
        this.m.rpcl("Categories", this.y);
        this.m.rpcl("IconIndex", this.s);
        this.m.rpcl("HasAttachments", this.U);
        this.m.rpcl("Importance", this.bd);
        this.m.rpcl("AvailableFeaturesFlag", this.bi);
        if (this.l.fn) {
            this.m.rpcl("Flag", this.B);
            this.m.rpcl("IsRead", this.D);
            this.m.rpcl("LikeCount", this.s)
        }
        this.m.rpcl("ReceivedOrRenewTime", this.T);
        this.m.rpcl("IsPinned", this.C);
        this.m.rpcl("SmimeType", this.be);
        this.l.fT() && this.m.rpcl("SystemCategories", this.y)
    },
    p: function() {
        var n = _h.bi.a(this.m, this.Q, !this.l.gw());
        this.bu(n.c(3));
        this.bt(n.b())
    },
    bS: function(n, t) {
        this.l.fn && this.bV();
        this.l.bI() && this.l.fn || this.bs(n, t)
    },
    bs: function(n, t) {
        this.K() && this.p()
    },
    bz: function() {
        if (_g.x.isInstanceOfType(this.m)) {
            var n = this.m;
            if (n.b() || n.e()) {
                var u = n.b() ? n.b().Mailbox : n.e().Mailbox;
                var r = _h.j.a(u, !1);
                var f = 1;
                var t = 2;
                n && _g.i.isInstanceOfType(n) && n.bH.BlockStatus && (t ^= 2);
                r.b() !== 5 && (t |= 1);
                var i = this;
                this.l.oS(function(n) {
                    var u = n.a(r, t, !0, f, !1, !1, !1);
                    u.b(!1);
                    i.P = u;
                    i.eJ("SenderPhotoViewModel")
                })
            }
        }
    },
    bA: function(n, t) {
        this.l.hn(this.m)
    }
};
_lv.j = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft) {
    this.dD = Function.createDelegate(this, this.gM);
    _lv.j.initializeBase(this, [n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft]);
    this.dF = g;
    _dh.a(g, this)
};
_lv.j.a = function(n, t, i, r, u) {
    var f = _h.N.a(t, i, 2);
    f.e = n;
    f.f = n;
    f.p = r;
    f.t = 1;
    f.r = u;
    return f
};
_lv.j.prototype = {
    dF: null,
    dA: null,
    bu: function(n) {
        if (this.dA !== n) {
            this.dA = n;
            this.eJ("ItemReadingPane")
        }
        return n
    },
    lM: function() {
        if (!this.eH.a().x.length) return "";
        var n = this.gm().length;
        return n <= 1 ? _u.R.Jt : String.format(_u.R.Kx, n)
    },
    jQ: function() {
        return _u.R.KB
    },
    iy: function() {
        return "MailListView.Narrow.MultiSelectBar"
    },
    dN: function() {
        var t;
        var i, r;
        var n = (r = this.dd(i = {
            val: t
        }), t = i.val, r);
        this.eI && n && !t && (n = null);
        return !!n
    },
    W: function() {
        if (this.eI && this.eY) {
            var n = this.eY;
            return _h.d.a().a(n.bH.ItemId.Id)
        } else return _lv.b.prototype.W.call(this)
    },
    r: function() {
        return this.eI ? this.gP() : _lv.b.prototype.r.call(this)
    },
    dE: function() {
        return this.fT() && this.bI() && !!this.eI && this.eI.d() && !!_h.a.b("msgfolderroot").f(this.eR.bH.FolderId)
    },
    bT: function(n) {
        return _g.f.isInstanceOfType(n) ? this.gL(n) : n
    },
    bs: function(n) {
        return _lv.i.isInstanceOfType(n) ? n.m : n
    },
    dy: function(n) {
        return ""
    },
    du: function() {
        _y.lJ.prototype.du.call(this)
    },
    hn: function(n) {
        if (n.bH.AvailableFeaturesFlag > 0) {
            if (!n.dJ) {
                n.bh(2);
                this.pb(n.bH.ItemId)
            }
        } else n.bh(1)
    },
    ml: function(n, t) {
        var r = _a.b.b(_a.a.bA, n ? "ItemListViewMarkAsClutter" : "ItemListViewMarkAsNotClutter", !1, null);
        var u = this.eH.f(t);
        var i = this;
        this.gr.a(function(f) {
            var e = f.a(t, i.j(), n, u, 5);
            e.b(i.ht);
            i.ds(function() {
                _a.g.a.a(e)
            }, t);
            _a.b.a(r)
        })
    },
    gY: function(n, t, i) {
        var e = null;
        var f = null;
        var u = !1;
        if (this.eI && !_j.h.a(this.eI.a())) {
            f = this.eI.Y(null, !1);
            e = this.eI.O();
            t && f.o();
            var v = this.eI.b();
            var p = v.s;
            this.eI && this.eI.a() && !_j.h.a(this.eI.a()) && (f.h = _h.x.d())
        }
        e || (e = this.j());
        var l = new _lm.e(e, f, this.fN, this.fp, this.gi, this.fg, this.lz, this.fv);
        var r = null;
        if (this.eH && this.eH.c().a() === l.a()) {
            r = this.eH;
            this.fA = !0
        } else {
            if (t) {
                var c, h;
                var y = this;
                r = (h = _h.c.j(this.eH.c(), function(n) {
                    return new _lm.c(n, y.fg)
                }, c = {
                    val: u
                }), u = c.val, h);
                r.ed(f)
            } else {
                var s, o;
                var a = this;
                r = (o = _h.c.j(l, function(n) {
                    return new _lm.c(n, a.fg)
                }, s = {
                    val: u
                }), u = s.val, o)
            }
            this.fA = u
        }
        t ? r.O(200) : r.k(new _h.o(0, this.gv()), 200, i);
        this.kE(this.fA, r);
        return r
    },
    mK: function() {
        this.qv(0)
    },
    hK: function(n, t, i) {
        var f;
        var o = (f = new _a.K, f.a = !0, f);
        var e = _a.b.b(_a.a.v, t ? "MailArchive" : "MailMove", !1, o);
        var s = this.eH.f(n);
        var r = new _y.dp(_a.g.a, this.fb, n, this.fh, 2);
        r.a = this.j();
        r.d = this.gl();
        r.b = s;
        r.c = this.eH.g() || this.j();
        this.he = r.i();
        var u = this;
        this.ds(function() {
            var o = _g.b.a.doesIdEqualName(u.eH.e(), "sentitems");
            u.bk(n, function(t) {
                t.b(n, o, o ? _u.R.Iz : _u.R.TV, _u.R.RJ)
            });
            if (i) {
                var s = new _h.cO(r.i(), u.fb, null, _u.R.Oj, _u.R.Kl);
                _h.A.a().c(s)
            }
            r.f();
            var f = u.fH(n);
            u.iz(f);
            e.m = f.toString();
            _a.b.a(e);
            u.fb.a(_a.U, new _a.U(t ? 5 : 14))
        }, n)
    },
    mj: function(n) {
        var t = n;
        if (t && t.length > 0) {
            var u = _a.b.b(_a.a.v, "MailCopy", !1, null);
            var i = new _h.bE(t, this.fh, this.fb);
            i.b(this.kT);
            this.is = i;
            _a.g.a.a(i);
            var r = this.fH(t);
            this.iz(r);
            u.m = r.toString();
            _a.b.a(u);
            this.fb.a(_a.U, new _a.U(7))
        }
    },
    kB: function(n) {
        var t = this.m();
        if (t && t.length > 0 && !this.fL) {
            var r = _g.b.a.doesIdEqualName(this.eR.bH.FolderId, "deleteditems");
            var i = new _h.da(t, this.eH.g() || this.j(), n);
            if (!r) {
                var u = this.eH.f(t);
                i.o = u
            }
            this.md = i;
            var f = this;
            this.ds(function() {
                _a.g.a.a(i)
            }, t);
            this.de();
            r && this.eH.O(200)
        }
        this.de()
    },
    iV: function(n, t) {
        var i = new _h.bt(n, this.j());
        i.p = this.fG();
        i.l = this.j();
        i.q(t);
        i.b(this.ht);
        return i
    },
    lV: function() {
        return 1
    },
    iN: function(n, t) {
        if (t) {
            var i = new _h.dU(t, n, this.eH.g());
            i.l = this.eH.f(t);
            var r = this;
            this.ds(function() {
                _a.g.a.a(i)
            }, t);
            _h.A.a().f();
            this.de()
        }
    },
    fR: function() {
        _lv.b.prototype.fR.call(this);
        this.fi.a() === "Mouse" && (this.eI || this.fb.a(_a.U, new _a.U(19)))
    },
    jI: function() {
        var n = new _h.bm(this.eR.bH.FolderId, null, _h.b.f(), "None", _h.x.a(0, 1), !0, "Pinned", new _h.q("DateTimeReceived", "Descending"), !1, null, null, 0, null, -1, null, !1);
        n.c(this.lh);
        _a.g.a.a(n)
    },
    hd: function(n, t) {
        var h = n ? "MailPin" : "MailUnpin";
        var r;
        var o = (r = new _a.K, r.a = !0, r);
        var e = _a.b.b(_a.a.bT, h, !1, o);
        if (this.mc(t)) {
            var u = this.mp(t);
            u >= 0 && this.jz(u + 1)
        }
        var f = this;
        this.gr.a(function(i) {
            var r = i.i(t, n, f.j(), f.fg);
            _a.g.a.a(r)
        });
        this.pO(n);
        if (!_h.A.a().e()) {
            var s = this.oT(t, n);
            this.fb.a(_a.bl, new _a.bl(7, s, null, null, null, null, n ? _n.b.dr() : _n.b.dF()))
        }
        var i = this.fH(t);
        if (t.length === 1) {
            i.a("id", t[0].bH.ItemId.Id);
            i.a("dt", t[0].cr().o().i());
            i.a("cdt", _a.d.get_utcNow().i())
        }
        e.m = i.toString();
        _a.b.a(e);
        this.fb.a(_a.U, new _a.U(17))
    },
    gd: function(n) {
        var e = this;
        var i = function(n) {
            return e.fp.a === "ReceivedOrRenewTime" ? n.dM() : _h.cg.a(n)
        };
        this.bl(this.eC());
        if (!this.gx) return null;
        var r = this.fp.a === "ReceivedOrRenewTime" ? _g.f.i : null;
        if (this.fi.a() !== "Mouse") {
            var o = new _y.cq;
            return new _y.bm(o, i, n, r, !1)
        }
        if (!this.fp) throw Error.argumentNull("this.SortBy");
        var t;
        switch (this.fp.a) {
            case "Size":
                var f = new _y.iN;
                var b = this;
                return new _y.v(f, function(n) {
                    return n.bH.Size
                }, !1);
            case "From":
                t = new _y.by;
                var w = this,
                    p = this;
                return new _y.bu(t, function(n) {
                    return (n.bU() === 1 || n.bU() === 5) && n.b() ? n.b().Mailbox : null
                }, function(n) {
                    return n && _g.n.b(n) ? n.Name : ""
                }, _u.R.Bz);
            case "DisplayTo":
                t = new _y.by;
                var y = this,
                    k = this;
                return new _y.bu(t, function(n) {
                    return n.bU() === 1 ? n.bH.DisplayTo : null
                }, function(n) {
                    return n
                }, _u.R.Bz);
            case "ItemClass":
                t = new _y.by;
                var nt = this,
                    g = this;
                return new _y.bu(t, function(n) {
                    return n.bH.ItemClass
                }, function(n) {
                    var t = new _y.hI;
                    return t.a(n, null)
                }, _u.R.Rw);
            case "HasAttachments":
                t = new _y.by;
                var d = this,
                    c = this;
                return new _y.bu(t, function(n) {
                    return n.bH.HasAttachments
                }, function(n) {
                    return n ? _u.R.R : _u.R.Nb
                }, _u.R.Nb);
            case "Importance":
                t = new _y.by;
                var h = this,
                    s = this;
                return new _y.bu(t, function(n) {
                    return n.bg()
                }, function(n) {
                    var t = new _y.gc;
                    return t.a(n, !1)
                }, _u.R.Rw);
            case "Flag":
                t = new _y.by;
                var l = this,
                    v = this;
                return new _y.bu(t, function(n) {
                    return n.M()
                }, function(n) {
                    var t = new _y.hH;
                    return t.a(n, null)
                }, _u.R.Rw);
            case "ItemLastModifiedTime":
                var a = this;
                return new _y.bm(new _y.cq, function(n) {
                    return n.S()
                }, n, null, !1);
            default:
                var u = new _y.cq;
                return new _y.bm(u, i, n, r, !1)
        }
    },
    lZ: function(n) {
        for (var f = this.h(), r = [], t = 0; t < f; t++) {
            var i = this.r()[t];
            if (_g.x.isInstanceOfType(i)) {
                var u = i.j();
                u === n && Array.add(r, i)
            }
        }
        return r
    },
    hC: function() {
        return this.fL || this.h() !== 1 || !_g.f.isInstanceOfType(this.eY) ? null : this.eY
    },
    hi: function(n, t) {
        var r = t ? _u.R.Oi : _u.R.SW;
        var u = this;
        this.bk(n, function(n) {
            n.d(r)
        });
        var i = new _h.H(n, t, this.j(), !0, this.eR.b, !1);
        i.b(this.ht);
        i.p = this.fG();
        this.iL = i;
        _a.g.a.a(i)
    },
    ha: function(n, t, i) {
        var o = null;
        this.eR.c() || (o = this.eH.f(t));
        var f = null;
        var r = null;
        var s = this.j();
        if (this.eR.b) {
            var h = _g.b.a.nameToId("deleteditems");
            r = new _y.dp(_a.g.a, this.fb, t, h, 2);
            r.a = s;
            r.b = o;
            r.c = this.eH.g() || this.j()
        } else {
            var e = _lv.j.a(s, t, n, this.fG(), this.gl());
            this.eR.c() ? e.bc = !0 : e.o = o;
            f = e
        }
        var u = this;
        this.ds(function() {
            var e = _g.b.a.doesIdEqualName(u.eH.e(), "sentitems");
            u.bk(t, function(n) {
                n.b(t, e, e ? _u.R.Bp : _u.R.GU, _u.R.QU)
            });
            u.gC.a(t);
            if (i && !u.ft) {
                var n = f;
                var o = new _h.cM(n, u.fb, null, _u.R.Oj, _u.R.Kl);
                _h.A.a().c(o);
                n.D = !0
            }
            r ? r.f() : _a.g.a.a(f)
        }, t)
    },
    hL: function(n) {
        var t = n;
        var i = new _g.B;
        i.c(t.bH.ItemId);
        i.e(t.df() || t.bH.Subject || _wss.i.M);
        i.h(!1);
        i.f(t.bH.Size);
        (t.fN() === "MailIrm" || t.fN() === "MailIrmReplied" || t.fN() === "MailIrmForwarded") && i.s(!0);
        return [i]
    },
    mE: function() {
        this.eI && this.eI.v("InSearchMode", this.dD)
    },
    mG: function() {
        this.eI && this.eI.q("InSearchMode", this.dD)
    },
    gu: function(n) {
        return n.c(this)
    },
    jT: function() {
        return this.eY ? this.eY.bH.ItemId : null
    },
    lW: function() {},
    gL: function(n) {
        return new _lv.i(n, this, this.fi, this.fg, this.dF)
    },
    gM: function(n, t) {
        this.eJ("ShowSearchFolderColumn")
    },
    gP: function() {
        for (var t = this.fj.f(), n = 0; n < t.length; n++) {
            var i = _h.d.a().a(t[n].bH.ItemId.Id);
            i && (t[n] = i)
        }
        return t
    }
};
_lv.z = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st) {
    this.x = n;
    this.C = t;
    this.i = i;
    this.n = r;
    this.v = u;
    this.w = f;
    this.t = e;
    this.G = h;
    this.e = c;
    this.l = o;
    this.j = s;
    this.s = l;
    this.r = a;
    this.q = v;
    this.m = y;
    this.k = p;
    this.f = w;
    this.A = b;
    this.B = k;
    this.o = d;
    this.y = g;
    this.p = nt;
    this.F = tt;
    this.E = it;
    this.u = rt;
    this.h = ft;
    this.g = et;
    this.z = ot;
    this.e.a().jd().Enabled && (this.D = st)
};
_lv.z.prototype = {
    x: null,
    C: null,
    i: null,
    v: null,
    w: null,
    n: null,
    j: null,
    t: null,
    s: null,
    r: null,
    q: null,
    m: null,
    k: null,
    G: null,
    e: null,
    f: null,
    o: null,
    y: null,
    z: null,
    u: null,
    p: null,
    F: null,
    E: null,
    g: null,
    A: null,
    B: null,
    l: null,
    h: null,
    D: null,
    d: function() {
        return new _lv.j(this.x, this.C, this.i, this.n, this.v, this.w, this.t, this.l, this.j, this.e, this.s, this.r, this.q, this.m, this.k, this.f, this.A, this.B, this.o, this.y, this.p, this.u, this.h, this.g, this.z, this.D, !0)
    },
    b: function(n) {
        return new _lv.h(this.x, this.C, this.i, this.n, this.v, this.w, this.t, n, this.G, this.e, this.l, this.j, this.s, this.r, this.q, this.m, this.k, this.f, this.A, this.B, this.o, this.y, this.p, this.u, this.h, this.g, this.z, this.D, !0)
    },
    c: function(n) {
        var t = this;
        this.F.a(function(i) {
            var r = i.a(t.x, t.C, t.i, t.n, t.v, t.w, t.t, t.l, t.j, t.e, t.s, t.r, t.q, t.m, t.k, t.f, t.A, t.B, t.o, t.y, t.p, t.u, t.h, t.g, t.z);
            n(r)
        })
    },
    a: function(n) {
        var t = this;
        this.E.a(function(i) {
            var r = i.a(t.x, t.C, t.i, t.n, t.v, t.w, t.t, t.l, t.j, t.e, t.s, t.r, t.q, t.m, t.k, t.f, t.A, t.B, t.o, t.y, t.p, t.u, t.h, t.g, t.z);
            n(r)
        })
    }
};
_lv.u = function(n, t) {
    _lv.u.initializeBase(this);
    this.b = n;
    this.a = t
};
_lv.u.prototype = {
    b: null,
    a: "Ascending",
    d: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.eJ("DisplayName")
        }
        return n
    },
    c: function(n) {
        if (this.a !== n) {
            this.a = n;
            this.eJ("Order")
        }
        return n
    }
};
_lv.y = function(n, t, i) {
    _lv.y.initializeBase(this);
    this.c = n;
    this.e = t;
    this.f = i;
    this.a = new _j.l;
    this.h();
    this.d(this.a.x[0])
};
_lv.y.prototype = {
    a: null,
    b: null,
    c: null,
    e: !1,
    f: !1,
    l: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.b && this.b.d(!0)
        }
        return n
    },
    d: function(n) {
        _a.c.a(n, "filterOption");
        this.b && this.b.a !== n.a && this.b.d(!1);
        this.l(n)
    },
    g: function() {
        var n = this.i();
        var t = this;
        n.sort(function(n, t) {
            var r = n;
            var i = t;
            return r.b.localeCompare(i.b)
        });
        this.a.j(n)
    },
    j: function(n) {
        for (var t = 0; t < this.a.x.length; t++) {
            var i = this.a.x[t];
            if (i.a.a === n) return i
        }
        return null
    },
    h: function() {
        this.a.a(new _lv.l(_u.R.Ta, new _h.W("All")));
        this.a.a(new _lv.l(_u.R.Ql, new _h.W("Unread")));
        this.a.a(new _lv.l(_u.R.Gv, new _h.W("ToOrCcMe")));
        this.a.a(new _lv.l(_u.R.Fm, new _h.W("Flagged")));
        this.f && this.a.a(new _lv.l(_u.R.Ij, new _h.W("Mentioned")));
        this.e && this.g()
    },
    i: function() {
        var r = [];
        var u = this.c.b().p();
        if (u)
            for (var f = 0; f < u.b(); f++) {
                var e = u.a(f);
                var o = _g.A.g(Number.parseInvariant(e));
                o && Array.add(r, new _lv.l(o, new _h.X("SystemCategory", e)))
            }
        var t = this.c.b().m();
        if (t)
            for (var i = 0; i < t.b(); i++) {
                var n = t.a(i);
                n && this.c.h().c(n) && Array.add(r, new _lv.l(n, new _h.X("UserCategory", n)))
            }
        return r
    }
};
_lv.l = function(n, t) {
    _lv.l.initializeBase(this);
    _a.c.a(n, "contextMenuDisplayName");
    _a.c.a(t, "viewFilter");
    this.b = n;
    this.a = t
};
_lv.l.prototype = {
    a: null,
    b: null,
    c: !1,
    d: function(n) {
        if (this.c !== n) {
            this.c = n;
            this.eJ("IsSelected")
        }
        return n
    }
};
_lv.v = function(n) {
    _lv.v.initializeBase(this);
    this.e = new _j.l;
    this.s();
    this.e.x[0].e(!0);
    this.h = n;
    this.d = this.e.x[0];
    this.f = this.d.b();
    this.g = new _j.l;
    this.u()
};
_lv.v.prototype = {
    e: null,
    g: null,
    d: null,
    f: "Ascending",
    i: null,
    m: 0,
    o: "Ascending",
    h: 0,
    c: function() {
        return this.h
    },
    a: function() {
        return this.d
    },
    b: function() {
        return this.f
    },
    l: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.eJ("CurrentOrder")
        }
        return n
    },
    j: function(n) {
        this.i && this.i.Id || _a.c.k("currentFolderId", "currentFolderId must have valid Id");
        var t = this.d.f();
        switch (this.h) {
            case 1:
                this.d.a() === 1 && (t = _g.D.i(this.i, _h.b.b));
                t === "ConversationLastDeliveryOrRenewTime" && (n || this.f === "Ascending" || _h.l.c(this.i)) && (t = "ConversationLastDeliveryTime");
                break;
            case 4:
            case 5:
            case 2:
            case 3:
                t = this.d.g();
                this.d.a() === 1 && (t = _g.D.a(this.i, _h.b.e));
                t === "ReceivedOrRenewTime" && (n || this.f === "Ascending" || _h.l.c(this.i)) && (t = "DateTimeReceived");
                break;
            default:
                _j.e.c(_a.a.bv, String.format("FolderView type: {0} is not supported", this.h));
                break
        }
        return new _h.q(t, this.f)
    },
    p: function(n) {
        _a.c.a(n, "sortOption");
        this.d && this.d.a() !== n.a() && this.d.e(!1);
        this.d = n;
        this.d.e(!0);
        this.f = n.b();
        this.u()
    },
    q: function(n) {
        for (var t = 0; t < this.e.x.length; t++) {
            var i = this.e.x[t];
            if (i.i === n) {
                this.p(i);
                break
            }
        }
    },
    t: function(n) {
        for (var t = 0; t < this.e.x.length; t++)
            if (this.e.x[t].i === n) return this.e.x[t];
        return null
    },
    n: function(n) {
        for (var t = 0; t < this.g.x.length; t++)
            if (this.g.x[t].a === n) return this.g.x[t];
        return null
    },
    r: function(n) {
        this.l(n ? "Descending" : "Ascending")
    },
    x: function() {
        this.o = this.f;
        this.m = this.d.a()
    },
    w: function() {
        return this.t(this.m)
    },
    v: function() {
        return this.n(this.o)
    },
    s: function() {
        var u = new _lv.m(_u.R.OP, _u.R.Sp, _u.R.Lq, _u.R.Qr, "Descending", 1, _h.b.e, _h.b.b, !0);
        var f = new _lv.m(_u.R.LH, _u.R.ES, _u.R.PW, _u.R.LL, "Ascending", 3, "From", "ConversationUniqueSenders", !0);
        var e = new _lv.m(_u.R.Gf, _u.R.Gf, _u.R.PW, _u.R.LL, "Ascending", 9, "DisplayTo", "ConversationUniqueRecipients", !0);
        var r = new _lv.m(_u.R.Tw, _u.R.Mt, _u.R.PW, _u.R.LL, "Ascending", 8, "Subject", "ConversationTopic", !0);
        var n = new _lv.m(_u.R.Tv, _u.R.Ip, _u.R.Gj, _u.R.QV, "Descending", 7, "Size", "ConversationSize", !0);
        var t = new _lv.m(_u.R.Km, _u.R.o, _u.R.LJ, _u.R.Ug, "Descending", 4, "HasAttachments", "ConversationHasAttachments", !0);
        var i = new _lv.m(_u.R.MX, _u.R.SX, _u.R.E, _u.R.HD, "Descending", 5, "Importance", "ConversationImportance", !0);
        this.e.a(u);
        this.e.a(f);
        this.e.a(e);
        this.e.a(r);
        this.e.a(t);
        this.e.a(i);
        this.e.a(n)
    },
    u: function() {
        if (this.g.x.length) {
            this.g.x[0].d(this.d.c());
            this.g.x[0].c(this.d.b());
            this.g.x[1].d(this.d.d());
            this.g.x[1].c(this.d.b() === "Ascending" ? "Descending" : "Ascending")
        } else {
            this.g.a(new _lv.u(this.d.c(), this.d.b()));
            this.g.a(new _lv.u(this.d.d(), this.d.b() === "Ascending" ? "Descending" : "Ascending"))
        }
    }
};
_lv.m = function(n, t, i, r, u, f, e, o, s) {
    _lv.m.initializeBase(this);
    _a.c.a(n, "contextMenuDisplayName");
    _a.c.a(n, "upperCaseDisplayName");
    _a.c.a(i, "orderOptionOneDisplayText");
    _a.c.a(r, "orderOptionTwoDisplayText");
    _a.c.a(u, "defaultOrderBy");
    _a.c.a(f, "columnId");
    _a.c.a(e, "mailItemUri");
    _a.c.a(o, "conversationUri");
    this.l = n;
    this.t = t;
    this.r = i;
    this.s = r;
    this.p = u;
    this.i = f;
    this.q = e;
    this.o = o;
    this.m = s
};
_lv.m.prototype = {
    i: 0,
    q: "FolderId",
    o: "FolderId",
    l: null,
    t: null,
    r: null,
    s: null,
    p: "Ascending",
    j: !1,
    m: !0,
    a: function() {
        return this.i
    },
    g: function() {
        return this.q
    },
    f: function() {
        return this.o
    },
    b: function() {
        return this.p
    },
    c: function() {
        return this.r
    },
    d: function() {
        return this.s
    },
    h: function() {
        return this.t
    },
    e: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.eJ("IsSelected")
        }
        return n
    }
};
_lv.w = function(n) {
    _lv.w.resolveInheritance();
    this.c = this.q;
    this.e = this.m;
    this.a = this.ck;
    _lv.w.initializeBase(this, [n])
};
_lv.w.prototype = {
    h: !1,
    g: null,
    b: function() {
        return this.h
    },
    d: function(n) {
        if (this.h !== n) {
            this.h = n;
            this.by("IsInAscendingOrder")
        }
        return n
    },
    f: function(n) {
        if (this.g !== n) {
            this.g = n;
            this.by("SelectedSortOptionTitleText")
        }
        return n
    },
    i: function() {
        return this.h && this.g.b() === "Ascending" || !this.h && this.g.b() === "Descending" ? this.g.d() : this.g.c()
    }
};
_lv.r = function(n, t, i, r, u, f, e, o, s) {
    _lv.r.initializeBase(this, [n, t, i, r, u, f, e, o]);
    this.N = s
};
_lv.r.prototype = {
    N: null,
    Z: function() {
        return this.q() ? String.format(_u.R.Rd, this.c().i()) : ""
    }
};
_lv.t = function(n, t, i, r, u, f, e, o) {
    this.bf = Function.createDelegate(this, this.bI);
    this.bc = Function.createDelegate(this, this.a);
    this.bd = Function.createDelegate(this, this.bk);
    this.be = Function.createDelegate(this, this.L);
    this.ba = Function.createDelegate(this, this.bv);
    this.bb = Function.createDelegate(this, this.bx);
    this.B = Function.createDelegate(this, this.bu);
    this.z = _a.a.p;
    this.bh = ["IsFiltered", "FilterByButtonRightImage", "FilterByButtonLabel"];
    this.Z = {};
    _lv.t.initializeBase(this);
    this.H = n;
    this.u = t;
    this.x = i;
    this.y = r;
    this.D = u;
    this.R = f;
    this.Q = e;
    this.W = _g.l.d("inbox").Id;
    if (u) {
        var s = u.a();
        var h = t.dZ();
        this.C = s.b().Enabled;
        this.Y = s.u().Enabled;
        this.bi = h && s.dm().Enabled;
        this.X = _y.d.b(u, r, o, n)
    }
    if (this.C) {
        this.y.b().apcl("UserCategoriesToShowAsFilter", this.B);
        this.y.b().apcl("SystemCategoriesToShowAsFilter", this.B)
    }
    this.s = new _lv.v(this.x.a());
    this.P = new _j.g(this.bb, this.z)
};
_lv.t.prototype = {
    H: null,
    D: null,
    y: null,
    x: null,
    X: !1,
    R: null,
    Q: null,
    W: null,
    E: null,
    G: !1,
    I: !1,
    bm: !1,
    s: null,
    t: null,
    w: null,
    M: null,
    V: null,
    U: null,
    C: !1,
    Y: !1,
    bi: !1,
    c: function() {
        return this.t
    },
    f: function() {
        if (this.h()) return this.w.b.b;
        else if (this.G) return _u.R.FL;
        return _u.R.BI
    },
    u: null,
    p: function(n) {
        this.u = n;
        return n
    },
    g: function() {
        return this.h() ? _n.b.dV() : _n.b.eB()
    },
    bq: function() {
        return this.t.b() ? _n.b.dO() : _n.b.dL()
    },
    j: function() {
        return this.s
    },
    P: null,
    i: function() {
        return this.P
    },
    h: function() {
        return this.w.b.a.a !== "All"
    },
    k: function(n, t) {
        this.w = new _lv.y(this.y, this.C, this.Y);
        this.s = new _lv.v(this.x.a());
        this.s.i = n.c;
        this.s.q(n.f);
        this.s.r(n.g);
        this.K(t);
        this.A()
    },
    r: function(n) {
        for (var t = 0; t < this.w.a.x.length; t++) {
            var i = this.w.a.x[t];
            if (i.a.C(n)) {
                this.bk(i);
                break
            }
        }
        if (t === this.w.a.x.length) throw Error.invalidOperation("The specified ViewFilter " + n.b() + " was not found in filter list.");
    },
    l: function(n, t, i) {
        this.s.i = t.bH.FolderId;
        this.s.h = this.x.a();
        this.s.q(n.f);
        this.s.r(n.g);
        this.A();
        this.bj(!1);
        this.K(t.bH.FolderId)
    },
    d: function(n) {
        this.u.bc(n);
        this.u.bN(2, null);
        _a.g.c().a(_a.U, new _a.U(18))
    },
    n: function(n, t) {
        this.K(t);
        n === "ToOrCcMe" && this.s.d.a() === 9 ? this.e() : this.bC()
    },
    m: function() {
        this.A()
    },
    q: function(n) {
        this.s.h = this.x.a();
        this.A();
        this.K(n)
    },
    b: function(n) {
        var t = "ColumnId_" + n;
        this.Z[t].j.a()
    },
    o: function(n, t, i, r) {
        var u = this.w;
        this.v(u.b.a.b(), !1);
        var e = u.j(r);
        var f = e.a;
        u.d(e);
        this.v(f.b(), !0);
        this.bw(n.bH.FolderId, t, i, f);
        this.N()
    },
    e: function() {
        var n = this.s;
        n.x();
        this.L(n.t(1), !0);
        this.bl(n.n("Descending"), !0);
        this.I = !0
    },
    a: function(n) {
        var i = this.s.h;
        if (i !== n) {
            this.x.d(n, !0);
            var t = new _a.l;
            t.b("F", i);
            t.b("T", n);
            t.a("fv", this.u.c().toString());
            _a.b.c(this.z, "SwitchFolderView", t.toString(), 0)
        }
        this.v(i.toString(), !1);
        this.v(n.toString(), !0);
        this.N()
    },
    bz: function() {
        if (this.C) {
            this.y.b().rpcl("UserCategoriesToShowAsFilter", this.B);
            this.y.b().rpcl("SystemCategoriesToShowAsFilter", this.B)
        }
        _j.S.prototype.bz.call(this)
    },
    bI: function() {
        this.y.a().E(!this.y.a().bH.IsFocusedInboxEnabled);
        _h.f.a(this.y.a().u, this.Q);
        this.E ? this.bn() : this.R.a(this.ba)
    },
    bn: function() {
        this.E.k(this.y.a().bH.IsFocusedInboxEnabled, 5, 1)
    },
    bv: function(n) {
        this.E = n;
        this.bn()
    },
    bC: function() {
        if (this.I) {
            var n = this.s.w();
            if (n) {
                this.L(n, !0);
                this.bl(this.s.v(), !0)
            }
            this.I = !1
        }
    },
    bw: function(n, t, i, r) {
        var e = _g.j.b(n);
        var o = e && (!t || i === 2);
        if (o) {
            var u = n;
            var f = new _h.X(u.b, u.a);
            this.u.bc(f)
        } else this.u.bc(r)
    },
    bu: function(n, t) {
        for (var i = this.t.a().x.length - 1; i >= 0; i--)
            if (_lv.p.isInstanceOfType(this.t.a().x[i])) {
                var r = this.t.a().x[i];
                if (_h.X.isInstanceOfType(r.N.a)) {
                    this.w.a.p(r.N, !0);
                    this.t.a().p(r, !0)
                }
            }
        this.w.g();
        this.br()
    },
    O: function() {
        this.t.d(this.s.f === "Ascending");
        this.t.f(this.s.a());
        this.by("CurrentSortArrow")
    },
    bD: function() {
        this.V = new _fm.n(_u.R.BI);
        this.t.a().a(this.V);
        for (var i = this.w.a, t = 0; t < i.x.length; t++) {
            var n = this.bg(i.x[t]);
            n.N.a.a === "All" && (this.U = n);
            this.t.a().a(n)
        }
    },
    br: function() {
        for (var n = -1, t = 0; t < this.t.a().x.length; t++) {
            var f = this.t.a().x[t];
            if (_lv.p.isInstanceOfType(f)) n = t;
            else if (n >= 0) break
        }
        n++;
        for (var r = this.w.a, i = 0; i < r.x.length; i++) {
            var u = r.x[i];
            if (_h.X.isInstanceOfType(u.a)) {
                this.t.a().t(n, this.bg(u));
                n++
            }
        }
    },
    N: function() {
        this.bX(this.bh)
    },
    bk: function(n) {
        var t = this.w.b.a;
        if (t.C(n.a)) {
            this.v(n.a.b(), !0);
            return
        }
        this.v(t.b(), !1);
        this.w.d(n);
        this.v(n.a.b(), !0);
        this.x.e(n.a);
        this.N()
    },
    bH: function(n) {
        var t = n.a === "Ascending" ? "Descending" : "Ascending";
        this.v("Order_" + this.s.f, !1);
        this.v("Order_" + t, !0);
        this.s.l(n.c(t));
        this.A();
        this.O();
        this.S();
        this.u.bN(4, null)
    },
    S: function() {
        this.x.c(this.s)
    },
    K: function(n) {
        this.s.h = this.x.a();
        this.t = new _lv.w(new Array(0));
        var i = _g.j.b(n) || this.u.Q() !== 3 && _h.l.b(n);
        this.G = _g.j.b(n);
        if (!this.G) {
            this.bD();
            this.t.a().a(new _fm.i);
            this.N()
        }
        var t = _y.fq.a(n, this.D, this.H);
        if (!(t && this.s.h === 4)) {
            this.O();
            this.bG()
        }
        i && this.bp(t);
        if (this.X && this.W === n.Id) {
            this.t.a().a(new _fm.i);
            this.bo()
        }
        this.by("SortByContextMenu");
        this.bm = !i
    },
    bG: function() {
        this.M = new _fm.e(new Array(0));
        for (var t = 0; t < this.s.e.x.length; t++) {
            var n = this.s.e.x[t];
            if (n.m) {
                var f = new(_a.gl.$$(_lv.m))(n, this.be);
                var i = "ColumnId_" + n.i;
                var r = new _lv.r(n.l, null, new _j.g(f.a, this.z), n.j, !1, null, "SortOptionsContextMenuView.SortByDualStateContextMenuItem", i, this);
                this.Z[i] = r;
                this.M.p.a(r)
            }
        }
        var u = new _fm.j(_u.R.Rv, null, this.M);
        this.t.a().a(u)
    },
    L: function(n, t) {
        if (this.s.d.a() === n.i) {
            t || this.bH(this.s.n(this.s.f));
            this.v("ColumnId_" + n.i, !0)
        } else {
            this.bJ(n, t);
            this.O()
        }
        t || this.bj(!0)
    },
    bJ: function(n, t) {
        this.v("ColumnId_" + this.s.d.a(), !1);
        this.s.p(n);
        this.v("ColumnId_" + n.i, !0);
        if (this.s.h !== this.x.a()) this.a(this.s.h);
        else {
            this.A();
            t || this.u.bN(4, null)
        }
        t || this.S()
    },
    bl: function(n, t) {
        var i = n.a;
        if (i === this.s.f) {
            this.v("Order_" + i, !0);
            return
        }
        this.v("Order_" + this.s.f, !1);
        this.v("Order_" + i, !0);
        this.s.l(i);
        this.A();
        if (!t) {
            this.S();
            this.u.bN(4, null)
        }
        this.O()
    },
    bg: function(n) {
        var i = new(_a.gl.$$(_lv.l))(n, this.bd);
        var t = new _j.g(i.a, this.z);
        return new _lv.p(n.b, null, t, n.c, !1, null, null, n.a.b(), n)
    },
    v: function(n, t) {
        for (var o = this.t.a(), u = 0; u < o.x.length; u++) {
            var i = o.x[u];
            var s = i;
            if (_fm.g.isInstanceOfType(i) && s.m === n) {
                s.i(t);
                break
            } else if (_fm.j.isInstanceOfType(i))
                for (var h = i.i.p, r = 0; r < h.x.length; r++) {
                    var e = h.x[r];
                    var f = e;
                    if (_fm.g.isInstanceOfType(e) && f.m === n) {
                        f.i(t);
                        return
                    }
                }
        }
    },
    bt: function(n) {
        return !_y.fq.a(this.s.i, this.D, this.H) && this.x.a() === 4 ? 2 === n : this.x.a() === n
    },
    bs: function() {
        return _h.a.c && this.y.a().bH.IsFocusedInboxEnabled
    },
    A: function() {
        this.u.ex(this.s.j(!!this.u.b()))
    },
    bj: function(n) {
        if (this.u.a() && !this.u.b()) {
            var t = new _a.l;
            t.a("sc", this.s.a().a().toString());
            t.a("so", this.u.t().b);
            t.b("tc", this.u.a().bH.TotalCount);
            t.a("fn", _g.j.g(this.u.a()));
            t.c("ui", n);
            _a.b.c(this.z, "MailSortBy", t.toString(), 0)
        }
    },
    T: function(n, t) {
        var r = new(_a.gl.$$(_g.kn))(n, this.bc);
        return new _fm.g(t, null, new _j.g(r.a, this.z), this.bt(n), !1, null, null, n.toString())
    },
    bp: function(n) {
        var t = new _fm.e(new Array(0));
        var u = this.T(2, _u.R.Tb);
        t.p.a(u);
        var f = this.T(1, _u.R.NW);
        t.p.a(f);
        if (n) {
            var i = this.T(4, _u.R.Em);
            t.p.a(i)
        }
        var r = new _fm.j(_u.R.OR, null, t);
        this.t.a().a(r)
    },
    bo: function() {
        var n = new _fm.g(_u.R.Jf, null, new _j.g(this.bf, this.z), this.bs());
        this.t.a().a(n)
    },
    bx: function() {
        if (this.h()) {
            this.U.j.d();
            _a.b.c(this.z, "SOM_RA")
        }
    }
};
_lv.A = function(n) {
    this.b = n
};
_lv.A.prototype = {
    b: null,
    a: function(n, t, i, r, u, f, e) {
        return new _lv.t(this.b, n, t, i, r, u, f, e)
    }
};
_lv.B = function(n, t, i) {
    this.c = n;
    this.b = t;
    this.a = i
};
_lv.B.prototype = {
    c: null,
    b: null,
    a: 0
};
_lv.f = function(n, t, i, r, u) {
    this.eC = Function.createDelegate(this, this.db);
    _lv.f.initializeBase(this, [n, t, i, r, u]);
    this.eD = "ExpandedConversationListView"
};
_lv.f.prototype = {
    a: null,
    eD: null,
    dd: !1,
    dc: function(n) {
        this.cG();
        this.a = n;
        this.da();
        this.by("Conversation");
        return n
    },
    hv: function(n) {
        if (this.dd !== n) {
            this.dd = n;
            this.fL();
            this.by(_lv.f.e)
        }
        return n
    },
    hu: function() {
        return this.dd && this.u
    },
    fA: function() {
        return !this.i && _j.h.a(this.r()) ? 46 : 0
    },
    fB: function() {
        return this.i && _j.h.a(this.r()) ? 46 : 0
    },
    hj: function() {
        return _n.l.c(this.u, !this.a.bH.UnreadCount)
    },
    ht: function() {
        return _n.l.h(this.u, !this.a.bH.UnreadCount)
    },
    ci: function() {
        return this.x()
    },
    dm: function() {
        return this.i ? this.eE(1) : this.cp(1)
    },
    dn: function() {
        return this.i ? this.cp(1) : this.eE(1)
    },
    fx: function() {
        return this.k.a() !== "Mouse" ? "" : this.a.bH.GlobalMessageCount > 1 ? this.u ? _u.R.DH : _u.R.f : ""
    },
    fE: function() {
        return this.a.bH.UnreadCount > 0 ? _j.h.c(_u.R.Cg, this.a.bH.UnreadCount) : ""
    },
    fz: function() {
        return this.V().bS() ? _u.R.UO : ""
    },
    fC: function() {
        return this.eE(2)
    },
    fw: function() {
        if (this.a.m() && this.a.m().b() > 0) {
            var t = new _y.dD;
            var n = t.a(this.a.m().f, null);
            return _j.h.c(_u.R.PI, n)
        } else return ""
    },
    fD: function() {
        return this.cp(2)
    },
    fy: function() {
        var t = new _b.M;
        var n = t.a(this.a.h(), !0);
        return _j.h.c(_u.R.VO, n)
    },
    cJ: function() {
        this.k.a() === "Mouse" && this.bw !== "GroupConversationListItemView" && this.bw !== "GroupConversationFeedItemView" && this.y(this.n ? "ConversationListItemReadingPaneOffView.Mouse" : "ConversationListItemView.Mouse")
    },
    bz: function() {
        this.cG();
        this.a = null;
        _lv.c.prototype.bz.call(this)
    },
    eE: function(n) {
        var r = new _y.dD;
        if (this.m()) {
            var t = this.a.v() ? r.a(this.a.v().f, null) : "";
            return n === 1 ? _j.h.b(t) ? _u.R.Bz : t : _j.h.c(_u.R.Cz, t)
        } else {
            var i = this.a.g() ? r.a(this.a.g().f, null) : "";
            return n === 1 ? _j.h.b(i) ? _u.R.Bz : i : _j.h.c(_u.R.VD, i)
        }
    },
    r: function() {
        return this.bT ? "" : this.a.bH.ConversationTopic
    },
    s: function() {
        if (this.a) {
            _lv.c.prototype.s.call(this);
            var n = [_lv.f.c, _lv.f.d];
            this.bX(n)
        }
    },
    cC: function() {
        this.bX([_lv.f.e, _lv.f.b, _lv.f.a]);
        this.q(null, null)
    },
    de: function() {
        if (this.a) {
            this.m() ? this.a.apcl("UniqueRecipients", this.E) : this.a.apcl("UniqueSenders", this.E);
            this.a.apcl("UnreadCount", this.eC);
            this.a.apcl("Importance", this.b);
            this.a.apcl("FlagStatus", this.df);
            this.a.apcl("Categories", this.b);
            this.a.apcl("SystemCategories", this.b);
            this.a.apcl("HasAttachments", this.b);
            this.a.apcl("LastDeliveryTime", this.b);
            this.a.apcl("ItemClasses", this.b)
        }
        this.ds = this.m()
    },
    cG: function() {
        if (this.a) {
            this.ds ? this.a.rpcl("UniqueRecipients", this.E) : this.a.rpcl("UniqueSenders", this.E);
            this.a.rpcl("UnreadCount", this.eC);
            this.a.rpcl("Importance", this.b);
            this.a.rpcl("FlagStatus", this.df);
            this.a.rpcl("Categories", this.b);
            this.a.rpcl("SystemCategories", this.b);
            this.a.rpcl("HasAttachments", this.b);
            this.a.rpcl("LastDeliveryTime", this.b);
            this.a.rpcl("ItemClasses", this.b)
        }
    },
    cK: function() {
        if (!this.V() || !this.a) return "";
        for (var u = this.i ? [this.fx(), this.fE(), this.fz(), this.fC(), this.dQ(), this.dP(), this.fw(), this.dO(), this.fD(), this.fy(), this.dR()] : [this.fx(), this.fE(), this.fz(), this.fD(), this.dQ(), this.dP(), this.fw(), this.dO(), this.fC(), this.fy(), this.dR()], r = "", i = u, f = i.length, n = 0; n < f; ++n) {
            var t = i[n];
            t !== "" && (r += t + " ")
        }
        return r
    },
    cm: function() {
        this.c.bg(this.a);
        var t = this.u ? _lv.f.f : _lv.f.g;
        var n = _a.b.b(_a.a.U, t, !1, null);
        _fce.e.prototype.cm.call(this);
        _a.b.a(n)
    },
    db: function(n, t) {
        this.bA(_lv.f.b, _lv.f.a);
        this.q(null, null)
    },
    da: function() {
        if (this.a) {
            this.de();
            this.s();
            this.z.setAttribute("data-convId", this.a.bH.ConversationId.Id);
            this.bX([_lv.f.b, _lv.f.a, _lv.c.b, _lv.c.a])
        }
    },
    fL: function() {}
};
_lv.n = function(n) {
    _lv.n.initializeBase(this, [n])
};
_lv.n.prototype = {
    Y: function() {
        _j.i.prototype.Y.call(this);
        if (this.V()) {
            var n = this.V().l;
            var i = n.fV && (!n.eI || !n.eI.d());
            var t = !!n.eI && n.eI.cR();
            i || t ? this.y("ListItemActionBarView.ClutterViewActionBarTemplate") : this.y(n.fn ? "HoverActionBarView" : "ListItemActionBarView.NonClutterActionBarTemplate")
        }
    }
};
_lv.c = function(n, t, i, r, u) {
    this.eG = Function.createDelegate(this, this.hC);
    this.eF = Function.createDelegate(this, this.cs);
    this.dN = Function.createDelegate(this, this.hB);
    this.dL = Function.createDelegate(this, this.hA);
    this.$$d_internalPostAnimateIn = Function.createDelegate(this, this.internalPostAnimateIn);
    this.df = Function.createDelegate(this, this.hz);
    this.b = Function.createDelegate(this, this.q);
    this.E = Function.createDelegate(this, this.hD);
    this.l = new Array(0);
    _lv.c.initializeBase(this, [n]);
    this.cH = t;
    this.k = i;
    this.dj = r;
    this.cJ()
};
_lv.c.prototype = {
    bi: "none",
    i: !1,
    g: !1,
    n: !1,
    k: null,
    ds: !1,
    dr: !1,
    dX: !1,
    dq: !1,
    p: !1,
    cb: null,
    bQ: null,
    cd: null,
    ea: !1,
    cM: function(n) {
        this.bi !== n && (this.bi = n);
        return n
    },
    bc: function() {
        return _fce.e.prototype.bc.call(this)
    },
    bN: function(n) {
        _fce.e.prototype.bN.call(this, n);
        this.by(_lv.c.p);
        return n
    },
    hx: function() {
        return this.bc() && !this.V().l.hk
    },
    cv: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.s();
            this.by("ShowSenderOnTopOption")
        }
        return n
    },
    cN: function(n) {
        if (this.g !== n) {
            this.g = n;
            this.by(_lv.c.l)
        }
        return n
    },
    dY: function(n) {
        if (!this.V()) return n;
        this.n = n;
        this.cJ();
        if (this.c && this.B) {
            this.c.ea(this);
            this.c.dw(this);
            this.dq = !1
        }
        this.c || (this.dq = !0);
        this.by(_lv.c.j);
        return n
    },
    dl: function() {
        return this.i && !this.m()
    },
    eR: function() {
        return !this.i && !this.m()
    },
    eL: function() {
        return this.i && this.m()
    },
    eQ: function() {
        return !this.i && this.m()
    },
    eI: function() {
        return !this.i && !_j.h.a(this.r())
    },
    eJ: function() {
        return this.i && !_j.h.a(this.r())
    },
    hE: function(n) {
        this.bQ = n;
        this.by(_lv.c.g);
        return n
    },
    hF: function(n) {
        this.cd = n;
        this.by(_lv.c.i);
        return n
    },
    o: function() {
        return this.eI() ? _b.j.b : this.eL() ? _b.j.g : this.dl() ? _b.j.d : null
    },
    bu: function() {
        return this.eJ() ? _b.j.b : this.eQ() ? _b.j.g : this.eR() ? _b.j.d : null
    },
    fP: function(n) {
        this.cb = n;
        this.by(_lv.c.f);
        return n
    },
    dZ: function(n) {
        if (this.dr !== n) {
            this.dr = n;
            this.bX([_lv.c.o, _lv.c.b, _lv.c.a, _lv.c.k])
        }
        return n
    },
    fQ: function(n) {
        if (this.dX !== n) {
            this.dX = n;
            this.by("IsClutterView")
        }
        return n
    },
    dW: function() {
        return this.dr && !this.br()
    },
    dk: function() {
        return this.V().Z() === "Flagged" && !this.br()
    },
    fN: function() {
        return !this.dr && this.V().Z() !== "Flagged" && !this.br()
    },
    cc: function() {
        return !this.c || this.c.ca() > 1 || this.c.es || !this.v && !this.hw()
    },
    dS: function() {
        return !this.c || !this.cc()
    },
    cu: function(n) {
        if (this.p !== n) {
            this.p = n;
            this.ct();
            this.by(_lv.c.n)
        }
        return n
    },
    m: function() {
        return this.bi === "sentitems"
    },
    cH: null,
    dj: null,
    eH: null,
    dQ: function() {
        return this.V().cP()
    },
    dP: function() {
        return this.V().cL()
    },
    dO: function() {
        return this.V().cM()
    },
    dR: function() {
        return this.V().cU()
    },
    hw: function() {
        if (this.e())
            for (var n = 0; n < this.l.length; n++)
                if (this.l[n].q()) return !0;
        return !1
    },
    cf: function(n, t) {
        _lv.e.isInstanceOfType(this.c) && this.cu(this.x() && this.c.dG)
    },
    fs: function(n) {
        if (this.ea) {
            this.fP(this.cK());
            this.ea = !1
        }
    },
    s: function() {
        var n = [_lv.c.c, _lv.c.h];
        this.bX(n);
        this.q(null, null);
        this.eS();
        this.eb()
    },
    ct: function() {},
    cp: function(n) {
        var t = this.r();
        return _j.h.a(t) ? _u.R.VL : n === 1 ? t : this.hy(t)
    },
    hD: function(n, t) {
        if (this.i) {
            this.by(_lv.c.c);
            this.eS()
        } else {
            this.by(_lv.c.c);
            this.eb()
        }
        this.q(null, null)
    },
    H: function() {
        _fce.e.prototype.H.call(this);
        this.eH = this.B ? this.B.a("ReadBar") : null
    },
    cj: function() {
        if (this.k.a() === "Mouse") {
            if (_lv.g.isInstanceOfType(this.V())) {
                var i = this.V();
                i.dg(this.v);
                if (this.v) {
                    var n = null;
                    if (_g.a.a().b().h().j(6)) {
                        n = i.h();
                        n ? Array.contains(this.l, n) || Array.add(this.l, n) : i.apcl(_ta.a.b, this.dL)
                    }
                    if (_g.a.a().b().h().j(5)) {
                        n = i.l.fJ;
                        n && !Array.contains(this.l, n) && Array.add(this.l, n)
                    }
                    for (var t = 0; t < this.l.length; t++) {
                        this.l[t].rpcl("IsShown", this.dN);
                        this.l[t].apcl("IsShown", this.dN)
                    }
                }
            }
            this.fM()
        }
    },
    dG: function() {
        if (this.k.a() === "Mouse") {
            this.fM();
            this.cf(null, null)
        } else this.k.a() === "TouchNarrow" && this.cf(null, null)
    },
    bq: function() {
        _j.bk.prototype.bq.call(this);
        this.fO()
    },
    ex: function(n) {
        _fce.e.prototype.ex.call(this, n);
        _lv.e.isInstanceOfType(this.c) && this.c.us(this)
    },
    hy: function(n) {
        return _j.h.c(_u.R.Oz, n)
    },
    hz: function(n, t) {
        this.bA(_lv.c.a, _lv.c.b);
        this.q(n, t)
    },
    q: function(n, t) {
        this.c && this.V() === this.c.bS() ? this.fP(this.cK()) : this.ea = !0
    },
    bz: function() {
        this.fO();
        this.bJ();
        _fce.e.prototype.bz.call(this)
    },
    fO: function() {
        if (this.k.a() === "Mouse" && _lv.g.isInstanceOfType(this.V())) {
            var t = this.V();
            t.rpcl(_ta.a.b, this.dL);
            for (var n = 0; n < this.l.length; n++) this.l[n].rpcl("IsShown", this.dN)
        }
        Array.clear(this.l)
    },
    bJ: function() {
        if (this.c && _lv.e.isInstanceOfType(this.c)) {
            this.c.rpcl("IsInMultiselectMode", this.eF);
            this.c.rpcl("IsInSelectEverythingMode", this.eG)
        }
    },
    bY: function() {
        if (this.c) {
            if (_lv.e.isInstanceOfType(this.c)) {
                this.c.apcl("IsInMultiselectMode", this.eF);
                this.c.apcl("IsInSelectEverythingMode", this.eG)
            }
            if (this.dq) {
                this.c.ea(this);
                this.c.dw(this);
                this.dq = !1
            }
        }
    },
    cs: function(n, t) {
        this.cf(null, null)
    },
    eS: function() {
        this.hE(this.dm())
    },
    eb: function() {
        this.hF(this.dn())
    },
    hA: function(n, t) {
        var i = this.V().h();
        if (i) {
            Array.add(this.l, i);
            this.V().rpcl(_ta.a.b, this.dL)
        }
    },
    hB: function(n, t) {
        this.bA(_lv.c.d, _lv.c.e)
    },
    hC: function(n, t) {
        _lv.e.isInstanceOfType(this.c) && (this.c.es ? this.t(!0) : this.c.bu.w(this.c.cp(this.V())) || this.t(!1))
    },
    fM: function() {
        this.bX(["IsItemHoveredAndNotShowSelected", "IsItemHoveredAndShowSelected", _lv.c.b, _lv.c.a, _lv.c.k, _lv.c.d, _lv.c.e])
    }
};
_lv.o = function(n, t, i, r, u) {
    this.ek = Function.createDelegate(this, this.fz);
    this.fk = Function.createDelegate(this, this.eo);
    this.el = Function.createDelegate(this, this.dt);
    this.ej = Function.createDelegate(this, this.gW);
    this.ei = Function.createDelegate(this, this.gV);
    this.ed = Function.createDelegate(this, this.gU);
    _lv.o.initializeBase(this, [n, t, i, r, u]);
    this.gT()
};
_lv.o.prototype = {
    a: null,
    d: null,
    cQ: function(n) {
        this.de();
        this.a = n;
        this.en();
        this.by("Item");
        return n
    },
    gS: function() {
        return this.a
    },
    dl: function() {
        return this.bR() && _lv.c.prototype.dl.call(this)
    },
    eR: function() {
        return this.bR() && _lv.c.prototype.eR.call(this)
    },
    eL: function() {
        return this.bR() && _lv.c.prototype.eL.call(this)
    },
    eQ: function() {
        return this.bR() && _lv.c.prototype.eQ.call(this)
    },
    eI: function() {
        return this.bR() ? _lv.c.prototype.eI.call(this) : !_j.h.a(this.r())
    },
    eJ: function() {
        return this.bR() ? _lv.c.prototype.eJ.call(this) : !1
    },
    o: function() {
        return !this.bT && this.a.bH.IsDraft && _j.h.b(this.a.bH.DisplayTo) ? _b.j.o : _lv.c.prototype.o.call(this)
    },
    gQ: function() {
        return this.fw(2)
    },
    gR: function() {
        return this.fx(2)
    },
    dd: null,
    em: null,
    dm: function() {
        return this.fw(1)
    },
    dn: function() {
        return this.fx(1)
    },
    gP: function() {
        return this.a.cL() ? "" : _u.R.DA
    },
    gL: function() {
        if (this.a.bT() && this.a.bT().b() > 0) {
            var t = new _y.dD;
            var n = t.a(this.a.bT().f, null);
            return _j.h.c(_u.R.PI, n)
        } else return ""
    },
    gM: function() {
        var n = new _n.bI;
        return n.a(this.a, null)
    },
    cf: function(n, t) {
        _lv.c.prototype.cf.call(this, n, t);
        _lv.e.isInstanceOfType(this.c) || this.cu(this.x())
    },
    cJ: function() {
        this.k.a() === "Mouse" && this.y(this.n ? "MailListItemReadingPaneOffView.Mouse" : "MailListItemView.Mouse")
    },
    m: function() {
        return this.a.bH.IsDraft || this.bi === "outbox" || _lv.c.prototype.m.call(this)
    },
    bz: function() {
        this.de();
        this.a = null;
        this.d && this.d.rpcl("IsHovered", this.ed);
        _lv.c.prototype.bz.call(this)
    },
    fy: function(n) {
        switch (this.a.bU()) {
            case 1:
            case 5:
                return this.m() ? n === 1 ? _j.h.b(this.a.bH.DisplayTo) ? this.a.bH.IsDraft ? _u.R.Uf : _u.R.Bz : this.a.bH.DisplayTo : _y.cY.d(this.a.bH.DisplayTo) : this.a.g() ? n === 1 ? this.a.g() : _y.cY.c(this.a.g()) : _u.R.Bz;
            case 2:
                return _y.bx.e(this.a.bH.DisplayTo);
            default:
                return ""
        }
    },
    r: function() {
        return this.bT ? "" : this.a.bH.Subject
    },
    s: function() {
        if (this.a) {
            _lv.c.prototype.s.call(this);
            this.bA("ListViewItemFirstLineNarrate", "ListViewItemSecondLineNarrate")
        }
    },
    gV: function(n, t) {
        this.bR() && this.i ? this.eb() : this.eS();
        this.q(null, null)
    },
    gW: function(n, t) {
        this.eb()
    },
    ep: function() {
        if (this.a) {
            this.a.apcl("Subject", this.ei);
            this.bR() ? this.m() ? this.a.apcl("DisplayTo", this.E) : this.a.apcl("From", this.E) : this.a.bU() === 4 && this.a.apcl(this.a.c(), this.ej);
            this.a.apcl("IsReadValue", this.el);
            this.a.apcl("Importance", this.b);
            this.a.apcl("Flag", this.df);
            this.a.apcl("Categories", this.b);
            this.a.apcl("SystemCategories", this.b);
            this.a.apcl("HasAttachments", this.b);
            this.bi === "sentitems" ? this.a.apcl("DateTimeSent", this.b) : this.bi === "drafts" ? this.a.apcl("DateTimeCreated", this.b) : this.a.apcl("DateTimeReceived", this.b);
            this.ds = this.m()
        }
    },
    de: function() {
        if (this.a) {
            this.a.rpcl("Subject", this.ei);
            this.bR() ? this.ds ? this.a.rpcl("DisplayTo", this.E) : this.a.rpcl("From", this.E) : this.a.bU() === 4 && this.a.rpcl(this.a.c(), this.ej);
            this.a.rpcl("IsReadValue", this.el);
            this.a.rpcl("Importance", this.b);
            this.a.rpcl("Flag", this.df);
            this.a.rpcl("Categories", this.b);
            this.a.rpcl("SystemCategories", this.b);
            this.a.rpcl("HasAttachments", this.b);
            this.bi === "sentitems" ? this.a.rpcl("DateTimeSent", this.b) : this.bi === "drafts" ? this.a.rpcl("DateTimeCreated", this.b) : this.a.rpcl("DateTimeReceived", this.b)
        }
    },
    en: function() {
        if (this.a) {
            this.ep();
            this.s();
            if (this.a.bH.ConversationId) {
                this.z.setAttribute("data-convId", this.a.bH.ConversationId.Id);
                this.z.setAttribute("data-time", this.a.jb())
            }
            this.bA(_lv.c.b, _lv.c.a)
        }
    },
    cK: function() {
        if (!this.V() || !this.a) return "";
        for (var u = [this.gP(), this.gQ(), this.dQ(), this.dP(), this.gL(), this.dO(), this.gR(), this.gM(), this.dR()], r = "", i = u, f = i.length, n = 0; n < f; ++n) {
            var t = i[n];
            t !== "" && (r += t + " ")
        }
        return r
    },
    bJ: function() {
        _lv.c.prototype.bJ.call(this);
        this.eo(null)
    },
    dt: function(n, t) {
        this.q(null, null)
    },
    bR: function() {
        return this.bT ? !1 : this.a.bU() === 1 || this.a.bU() === 5 || this.a.bU() === 2
    },
    fw: function(n) {
        if (this.bT) return "";
        switch (this.a.bU()) {
            case 1:
            case 5:
            case 2:
                return this.i ? this.fy(n) : this.cp(n);
            case 4:
                return _j.h.b(this.a.bH.Subject) ? _u.R.Bx : this.a.bH.Subject;
            case 3:
                return _j.h.b(this.a.bH.Subject) ? _u.R.HM : this.a.bH.Subject;
            default:
                return this.a.bH.Subject
        }
    },
    fx: function(n) {
        if (this.bT) return "";
        if (this.a.bU() === 1 || this.a.bU() === 5 || this.a.bU() === 2) return this.i ? this.cp(n) : this.fy(n);
        else if (this.a.bU() === 4) {
            var t = new _n.bi;
            return t.a(this.a.b(), null)
        } else return ""
    },
    gT: function() {
        this.d = new _fce.f(this.cH, this.dj, this.k, _g.a.a());
        this.d.b = 1;
        this.d.e = !0;
        this.d.apcl("IsHovered", this.ed);
        var t = this;
        this.dd = new _j.g(function() {
            t.fl(!0)
        }, this.I());
        var n = this;
        this.em = new _j.g(function() {
            n.fl(!1)
        }, this.I())
    },
    gU: function(n, t) {
        this.d.K || this.eo(null)
    },
    fz: function(n, t) {
        this.d.c(this.w().gj)
    },
    fl: function(n) {
        if (this.gS() && n === this.dl() && _lv.b.isInstanceOfType(this.w()) && !this.w().gQ && this.B && !this.m()) {
            var t = this.B.a(this.dl() ? "FirstLineLabel" : "SecondLineLabel");
            if (t && this.d.X !== t) {
                t.bf("mouseleave", this.fk, "#MailListItemView");
                this.fz(null, null);
                this.w().apcl(_lv.b.k, this.ek);
                this.d.bl(t);
                this.d.j(!0)
            }
        }
    },
    eo: function(n) {
        if ((!n || !this.d.bn() || n.o() !== this.d.bn() && !this.d.bn().contains(n.o())) && this.d.X) {
            _lv.b.isInstanceOfType(this.w()) && this.w().rpcl(_lv.b.k, this.ek);
            this.d.X.bj("mouseleave", "#MailListItemView");
            this.d.j(!1);
            this.d.X.cE(!1);
            this.d.bl(null)
        }
    }
};
_lv.e = function(n, t, i, r, u, f, e, o, s, h) {
    this.oW = Function.createDelegate(this, this.uv);
    this.oX = Function.createDelegate(this, this.uz);
    this.oZ = Function.createDelegate(this, this.rK);
    this.oY = Function.createDelegate(this, this.uB);
    this.mj = Function.createDelegate(this, this.uA);
    _lv.e.resolveInheritance();
    this.d = this.tM;
    this.b = this.hw;
    this.m = this.uH;
    this.r = this.uI;
    _lv.e.initializeBase(this, [n, t, i, r, u, f, o, h]);
    this.gV = e;
    this.eV = i.a() === "TouchNarrow";
    if (i.a() === "Mouse") {
        this.jz(!0);
        this.gI = !0
    } else this.eV && this.jz(!0);
    o && (this.ie = o.a().gA().Enabled);
    this.il = this.eV && _a.o.a().a()
};
_lv.e.prototype = {
    ii: null,
    ms: null,
    pb: !0,
    pc: !1,
    gV: null,
    jU: null,
    ih: !1,
    il: !1,
    ie: !1,
    jW: null,
    dG: !1,
    ik: !1,
    es: !1,
    mp: !0,
    mm: null,
    mt: !1,
    ig: null,
    eV: !1,
    id: null,
    mo: function() {
        return !this.cB && !this.dq() && this.br && this.br.a() && this.br.a().x.length > 0 ? !0 : !1
    },
    c: function() {
        return this.mp
    },
    u: function(n) {
        this.mp = n;
        return n
    },
    jV: function(n) {
        if (this.ih !== n) {
            this.ih = n;
            this.by("PreventClickActionCommands")
        }
        return n
    },
    fw: function(n) {
        this.dG !== n && this.uC(n);
        return n
    },
    uC: function(n) {
        this.dG = n;
        this.ic.e() && (this.da = !n);
        this.il && this.jW && (this.jW.m = !n);
        this.by("IsInMultiselectMode")
    },
    ij: function(n) {
        if (this.es !== n) {
            this.es = n;
            this.nN = n;
            this.by("IsInSelectEverythingMode")
        }
        return n
    },
    mr: function(n) {
        if (this.ik !== n) {
            this.ik = n;
            n ? this.apcl("SelectionCount", this.mj) : this.rpcl("SelectionCount", this.mj)
        }
        return n
    },
    o: function() {
        return this.bN().be()
    },
    a: function() {
        return this.V()
    },
    mn: function() {
        return this.mm
    },
    mq: function(n) {
        if (!this.mm) {
            var t = this;
            this.mm = new _j.g(function() {
                t.z.focus()
            }, this.I());
            this.by("FocusOnListViewCommand")
        }
        return n
    },
    mk: null,
    ml: null,
    f: function(n) {
        this.bB("OnIntializeEvent", n)
    },
    q: function(n) {
        this.bF("OnIntializeEvent", n)
    },
    n: function(n) {
        this.bB("OnItemDisposedEvent", n)
    },
    s: function(n) {
        this.bF("OnItemDisposedEvent", n)
    },
    e: function(n) {
        this.bB("OnDataContextApplied", n)
    },
    p: function(n) {
        this.bF("OnDataContextApplied", n)
    },
    rI: function() {
        return this.ie && this.dG || this.pa()
    },
    ut: function() {
        return this.ie ? !this.bW.a.length : !1
    },
    pa: function() {
        return this.eV && this.dG
    },
    dw: function(n) {
        this.bO("OnIntializeEvent", n);
        _b.b.prototype.dw.call(this, n)
    },
    ea: function(n) {
        _b.b.prototype.ea.call(this, n);
        this.bO("OnItemDisposedEvent", n)
    },
    nX: function() {
        if (_b.s.b === 4) {
            _a.b.g("DD");
            this.mk.a()
        } else if (_b.s.b === 5) {
            _a.b.g("DD");
            this.ml.a()
        }
    },
    er: function() {
        return _lv.b.isInstanceOfType(this.V()) ? this.V() : null
    },
    us: function(n) {
        if (this.ig && this.ig !== n) {
            this.ig.ca(!1);
            this.ig = null
        }
    },
    kr: function(n) {
        _b.b.prototype.kr.call(this, n);
        this.bO("OnItemDisposedEvent", n)
    },
    bz: function() {
        this.rpcl("SelectionCount", this.mj);
        var n = this.er();
        n.rpcl(_lv.b.i, this.oY);
        n.rpcl(_lv.b.l, this.oZ);
        _b.q.prototype.bz.call(this)
    },
    Y: function() {
        _j.i.prototype.Y.call(this);
        this.ce("OnDataContextApplied")
    },
    bC: function() {
        if (this.il) {
            var t = [];
            this.da = !1;
            this.jW = new _lv.x(this.dN, this.oz);
            Array.add(t, this.jW);
            var n;
            return (n = t).concat.apply(n, _j.i.prototype.bC.call(this))
        }
        return _j.i.prototype.bC.call(this)
    },
    ot: function(n, t) {
        var i = !!t && !t.a();
        this.rI() && i ? this.eQ(this.cp(n.V()), n.e(), 1) : _b.b.prototype.ot.call(this, n, t)
    },
    nO: function(n) {
        return this.ie ? !this.gI || n === 1 && !this.dG : _b.b.prototype.nO.call(this, n)
    },
    uB: function(n, t) {
        this.mp = !0
    },
    I: function() {
        return _a.a.dy
    },
    qM: function() {
        return 0
    },
    hz: function() {
        return !1
    },
    rj: function() {
        return !0
    },
    P: function() {
        _b.b.prototype.P.call(this);
        this.eV && this.bn(8192)
    },
    G: function() {
        _b.q.prototype.G.call(this);
        if (this.pb) {
            var n = this.er();
            if (n) {
                if (this.x() && this.x().b() > 0 && !this.br.h()) {
                    _a.o.a().c() || !n.fX || _j.h.a(n.gV) || this.eC(this.br.D(n.gV));
                    if (n.gT === 1) {
                        var i = this.gV.a().bH.ShowReadingPaneOnFirstLoad ? "AutoSelectFirstConversationInListViewOnSignIn" : "DoNotAutoSelectFirstConversationInListViewOnSignIn";
                        var t = _a.b.b(_a.a.Y, i, !1, null);
                        _a.b.a(t);
                        !this.hy() && n.fX ? this.eC(n.lX()) : this.uy() && !this.gV.a().bH.ShowReadingPaneOnFirstLoad && this.cd.a() !== "TouchWide" || n.fX || this.eC(n.lX())
                    }
                    if (!_a.o.a().c()) {
                        n.fX = !1;
                        n.gV = null
                    }
                }
                this.il && n.apcl(_lv.b.i, this.oY);
                _h.a.c && n.apcl(_lv.b.l, this.oZ)
            }
            this.pb = !1
        }
        this.eV || this.dN.b(_y.dF, this.oX);
        this.cd.a() !== "Mouse" && this.dN.b(_a.ff, this.oW)
    },
    M: function() {
        _b.q.prototype.M.call(this);
        this.eV || this.dN.c(_y.dF, this.oX);
        this.cd.a() !== "Mouse" && this.dN.c(_a.ff, this.oW)
    },
    H: function() {
        _b.q.prototype.H.call(this)
    },
    cc: function(n, t) {
        n.bc() && this.il || _b.b.prototype.cc.call(this, n, t)
    },
    oh: function() {
        return _b.b.prototype.oh.call(this) || this.dR().a === "Edit"
    },
    mO: function(n, t, i) {
        if (this.w) {
            var r = this.w.a.c(n);
            if (!r) return;
            var u = !1;
            var f = this.bv() === r;
            !this.eV && document.activeElement && f && (u = r.z.contains(document.activeElement));
            _fce.a.prototype.mO.call(this, n, t, i);
            n !== t && r.ca(!1);
            u && this.cv()
        }
    },
    cN: function(n, t, i) {
        this.by("HasRowsLoadedAtTop");
        var r = t.b;
        t.c === 2 && r.length === 1 && this.uD(r[0]);
        _b.q.prototype.cN.call(this, n, t, i)
    },
    lT: function() {
        _b.q.prototype.lT.call(this);
        this.rK(null, null)
    },
    lS: function(n) {
        var t = _b.q.prototype.lS.call(this, n);
        if (t > 0 && n.V().f()) {
            var i = this.er();
            i && (t += i.bI() ? 30 : 50)
        }
        return t
    },
    gr: function(n) {
        if (this.eV && !this.dE) {
            var t = this.er();
            t.hG || t.kt(!0)
        }
    },
    rK: function(n, t) {
        if (this.cd.a() === "Mouse") {
            this.rJ(this.id, !1);
            this.id = null;
            if (!this.dq()) {
                var i = this.er();
                if (i.eI) return;
                this.id = this.uu(i.fp);
                _h.a.c && this.gV.a().bH.IsFocusedInboxEnabled && this.id && this.id.d(i.mX() && !i.lT())
            }
        }
    },
    rJ: function(n, t) {
        if (n) {
            n.b(!1);
            n.d(!1);
            n.g(t)
        }
    },
    uu: function(n) {
        var i = null;
        var t = 0;
        if (this.bU)
            for (var e = this.bU.x.length; t < e; t++) {
                var r = this.bU.x[t];
                if (_y.fc.isInstanceOfType(r)) {
                    var u = r;
                    i = u;
                    if (u.a() !== "pinned") break
                }
            }
        var f = n.b === "Descending" && n.e();
        this.rJ(i, !t && f);
        return i
    },
    ip: function() {
        this.by("HasRowsLoadedAtTop");
        _fce.a.prototype.ip.call(this)
    },
    rA: function() {
        this.jV(!0);
        this.jU && (this.jU = _j.m.a().b(this.jU));
        var n = this;
        this.jU = _j.m.a().a(this.I(), "PreventClickActionIfNeeded", function() {
            n.jV(!1)
        }, 500)
    },
    rz: function() {
        this.by("HasRowsLoadedAtTop")
    },
    rF: function(n) {
        return !n.x
    },
    nZ: function(n, t, i, r) {
        if (this.ie || this.pa()) switch (t) {
            case 1:
                this.en(n);
                var f = !!r && !r.a();
                if (this.rI() && f) this.eQ(n, this.bu.w(n), 1);
                else if (!f && i) return;
                else this.gC(n);
                break;
            case 2:
            case 3:
                if (!this.jp || !i || this.ca() !== 1) {
                    this.en(n);
                    this.eQ(n, i, t)
                }
                break;
            case 4:
                if (this.ut()) {
                    this.en(n);
                    this.gC(n)
                } else {
                    var u = this.x().h(n, this.cs);
                    u >= 0 && this.ji(u, t)
                }
                break
        } else _b.b.prototype.nZ.call(this, n, t, i, r)
    },
    gC: function(n) {
        _b.b.prototype.gC.call(this, n);
        this.ik && this.fw(!1)
    },
    eQ: function(n, t, i) {
        if (!this.ik) {
            this.pa() ? _b.b.prototype.eQ.call(this, n, t, 2) : _b.b.prototype.eQ.call(this, n, t, i);
            return
        }
        this.es ? this.ux(n, t, i) : this.uw(n, t, i)
    },
    ji: function(n, t) {
        if (this.es) {
            this.ij(!1);
            this.en(this.x().c(0))
        }
        _b.b.prototype.ji.call(this, n, t);
        this.ik && this.fw(!0)
    },
    ob: function(n) {
        this.fl && n.cf(null, null);
        _b.b.prototype.ob.call(this, n)
    },
    ec: function(n, t) {
        if (n.e()) {
            this.ey(t);
            return
        }
        _b.b.prototype.ec.call(this, n, t)
    },
    cv: function() {
        this.br && this.br.i() ? this.mt = !0 : _b.b.prototype.cv.call(this)
    },
    jQ: function(n, t) {
        _b.q.prototype.jQ.call(this, n, t);
        if (this.br && !this.br.i() && this.mt) {
            this.mt = !1;
            this.cv()
        }
    },
    mP: function(n) {
        _fce.a.prototype.mP.call(this, n);
        var i = this.er();
        if (this.es) {
            var t = n.V().cT();
            t.a(i.js) <= 0 && n.t(!0)
        }
    },
    pu: function(n) {
        _lv.f.isInstanceOfType(n) ? n.dc(null) : _lv.o.isInstanceOfType(n) && n.cQ(null);
        n.V() && n.V().N()
    },
    pE: function(n) {
        return !n.V() || n.V().cW()
    },
    jC: function(n, t) {
        var i;
        var f = _a.p.b(this.I(), "LoadReadingPaneOnItemSelection", !0, (i = new _a.K, i.a = !0, i.b = !0, i.e = !0, i.d = !0, i));
        _a.b.d(f, new _a.y(this.gV.a().bH.ShowReadingPaneOnFirstLoad ? "RPOn" : "RPOff"));
        if (!(!!t !== t)) {
            this.pc = t;
            var r;
            var u = (r = new _a.K, r.a = t, r);
            this.ii = _a.b.b(this.I(), "SelectListViewMailItem", !1, u);
            _b.b.prototype.jC.call(this, n, t)
        }
    },
    lj: function() {
        var n = new _a.l;
        n.c("P", this.pc);
        if (this.ii) {
            this.ii.m = n.toString();
            _a.b.a(this.ii);
            this.ii = null
        }
        _b.b.prototype.lj.call(this)
    },
    jE: function(n) {
        var i = n ? "SwipedMailItem" : "UnswipedMailItem";
        var t;
        this.ms = _a.b.b(this.I(), i, !1, (t = new _a.K, t.a = !0, t));
        _b.b.prototype.jE.call(this, n)
    },
    nR: function() {
        _a.b.a(this.ms);
        this.ms = null;
        _b.b.prototype.nR.call(this)
    },
    uz: function(n) {
        this.cv()
    },
    uv: function(n) {
        n === 5 && this.gB(new _a.dT(5), null)
    },
    uy: function() {
        var n = _lv.e.a;
        _lv.e.a = !1;
        return n
    },
    uD: function(n) {
        var i = this.bP(n);
        var r = this.w.a.c(i);
        if (_fce.e.isInstanceOfType(r) && r.v && !this.ru()) {
            var t = this.w.a.c(i + 1);
            if (_fce.e.isInstanceOfType(t)) {
                t.ca(!0);
                this.ig = t
            }
        }
    },
    uA: function(n, t) {
        this.ca() || this.fw(!1)
    },
    ux: function(n, t, i) {
        this.ij(!1);
        this.fR.a();
        t && _b.b.prototype.eQ.call(this, n, t, i)
    },
    uw: function(n, t, i) {
        if (this.ca() === 1) {
            var r = this.bW.b(0);
            t || this.dG || i !== 2 || _b.b.prototype.eQ.call(this, this.cp(r.V()), !0, i);
            if (t && !this.dG) {
                this.fw(!0);
                return
            }
        }
        _b.b.prototype.eQ.call(this, n, t, i);
        t || this.fw(!0)
    }
};
_lv.a = function() {};
_lv.a.$$cctor = function() {
    _lv.a._I()
};
_lv.a.es = function() {
    var n = window.document.createElement("DIV");
    n.innerHTML = "<div>  <span class='owa-color-neutral-orange'></span><span></span> </div><div> <span class='_lv_m'></span> </div><div> <div></div> </div><div> <div autoid=\"_lv_0\" class='_lv_2 ms-bcl-nlr'> <div class='_lv_6 ms-bgc-tp'></div> <button type='button' class='_lv_7 checkboxCol'></button> <div unselectable=\"on\" class='lvitouchContainer _lv_4'> <div class='_lv_b ms-fwt-sl ms-fcl-b'> <div class='_lv_a _lv_c'>  <div class='_lv_r'></div>  <span></span> </div> <div class='_lv_h'> <div class='_lv_n'></div> <div class='_lv_n'></div>   <div class='_lv_n'></div>  <div class='_lv_n'></div>  <div class='_lv_n'></div>  <div class='categories _lv_p'></div>  <div class='_lv_n'></div>  <div class='_lv_n'></div> </div> </div> <div unselectable=\"on\" class='_lv_e ms-font-m'> <div class='_lv_k'>  <span class='_lv_a _lv_f'> <span autoid=\"_lv_1\"></span> </span> <span autoid=\"_lv_2\" class='_lv_l ms-fwt-sb ms-fcl-tp'></span> </div> <span class='_lv_d ms-font-s'></span> </div> <div class='_lv_i ms-fwt-r ms-fcl-ns'> <div unselectable=\"on\" class='_lv_a _lv_j'> <span></span> </div> </div> </div>  <span class='_lv_s'></span> </div> </div><div> <button type='button' class='_lv_z'></button> <button type='button' class='_lv_y ms-fwt-r ms-fcl-ns'></button> </div><div>  <span class='_lv_C ms-fwt-r ms-fcl-nta'></span> <span class='_lv_B ms-fwt-sl ms-fcl-ns'> </span> </div><div> <div class='_lv_J ms-bgc-tl'></div> </div><div>  <div class='_lv_u'> <div class='ms-bgc-tlra'></div> <div>  <div></div> <div></div> </div> <hr class='_lv_N'/> <div class='_lv_I'> <div> <div autoid=\"_lv_4\"></div> <div class='_lv_x'></div> <span class='_lv_E ms-fwt-r ms-fcl-ns'></span> </div> </div> <div class='_lv_A ms-bgc-nlr'></div> <div> </div> </div>  <div></div> </div><div> <div class='_lv_w ms-fwt-r ms-fcl-tp ms-bgc-w ms-bcl-nlr'> <span class='_lv_v'></span> </div> </div><div> <span></span> </div><div> <div class='_lv_K'> <span class='_lv_L ms-fwt-r ms-fcl-w'></span> <button type='button' class='_lv_M'></button> </div> </div><div><div></div></div><div> <div autoid=\"_lv_3\" class='_lv_t'></div>  <div></div>  </div><div> <button type='button' class='_lv_R'></button> <button type='button' class='_lv_Q ms-fwt-r ms-fcl-ns'></button> </div><div>  <span class='_lv_X ms-fwt-r ms-fcl-nta'></span> <span class='_lv_W ms-fwt-sl ms-fcl-ns'> </span> </div><div> <div class='_lv_31 ms-bgc-tl'></div> </div><div>  <div class='_lv_O ms-bcl-nlr'> <div class='_lv_21'> <div> <div class='_lv_U'></div> <div class='_lv_P'></div> <span class='_lv_Z ms-fwt-r ms-fcl-ns'></span> </div> </div> <div class='_lv_V ms-bgc-nlr'></div> </div>  <div></div> </div><div> <div class='_lv_T ms-fwt-r ms-fcl-tp ms-bgc-w ms-bcl-nlr'> <span class='_lv_S'></span> </div> </div><div> <div autoid=\"_lv_5\" class='_lv_11'></div>  <div></div> </div><div> <div class='_lv_41'></div> <div class='_lv_41'></div> </div><div> <button autoid=\"_lv_6\" type='button'></button> </div><div> <button type='button'></button> </div><div> <span class='_lv_g1'></span> </div><div> <div autoid=\"_lv_7\" class='_lv_51 ms-bcl-nlr'> <div class='_lv_91 ms-bgc-tp'></div> <button type='button' class='_lv_a1 checkboxCol'></button> <div unselectable=\"on\" class='lvitouchContainer _lv_71'> <div class='_lv_d1 ms-fwt-sl ms-fcl-b'> <div class='_lv_k1 _lv_l1'> <span></span> </div> <div class='_lv_j1'> <div class='_lv_h1'></div> <div class='_lv_h1'></div>   <div class='_lv_h1'></div>  <div class='_lv_h1'></div>  <div class='categories _lv_o1'></div>  <div class='_lv_h1'></div>  <div class='_lv_h1'></div> </div> </div> <div unselectable=\"on\" class='_lv_e1 ms-font-m'> <div class='_lv_k1 _lv_m1'> <span autoid=\"_lv_8\"></span> </div> <span class='_lv_i1 ms-font-s'></span> </div> <div class='_lv_f1 ms-font-m ms-fcl-ns'> <div unselectable=\"on\" class='_lv_k1 _lv_n1'> <span></span> </div> </div> </div>  <span class='_lv_q1'></span> </div> </div><div> <button type='button' class='_lv_x1'></button> <button type='button' class='_lv_w1 ms-fwt-r ms-fcl-ns'></button> </div><div>  <span class='_lv_A1 ms-fwt-r ms-fcl-nta'></span> <span class='_lv_z1 ms-fwt-sl ms-fcl-ns'> </span> </div><div> <div class='_lv_H1 ms-bgc-tl'></div> </div><div>  <div class='_lv_s1'> <div class='ms-bgc-tlra'></div> <div>  <div></div> <div></div> </div> <hr class='_lv_L1'/> <div class='_lv_G1'> <div> <div></div> <div class='_lv_v1'></div> <span class='_lv_C1 ms-fwt-r ms-fcl-ns'></span> </div> </div> <div class='_lv_y1 ms-bgc-nlr'></div> <div> </div> </div>  <div></div> </div><div> <div class='_lv_u1 ms-fwt-r ms-fcl-tp ms-bgc-w ms-bcl-nlr'> <span class='_lv_t1'></span> </div> </div><div> <div class='_lv_I1'> <span class='_lv_J1 ms-fwt-r ms-fcl-w'></span> <button type='button' class='_lv_K1'></button> </div> </div><div> <div autoid=\"_lv_9\" class='_lv_r1'></div>  <div></div>  </div><div> <button type='button' class='_lv_S1'></button> <button type='button' class='_lv_R1 ms-fwt-r ms-fcl-ns'></button> </div><div>  <span class='_lv_V1 ms-fwt-r ms-fcl-nta'></span> <span class='_lv_U1 ms-fwt-sl ms-fcl-ns'> </span> </div><div> <div class='_lv_12 ms-bgc-tl'></div> </div><div>  <div class='_lv_M1 ms-bcl-nlr'> <div class='_lv_02'> <div> <div class='_lv_P1'></div> <div class='_lv_Q1'></div> <span class='_lv_X1 ms-fwt-r ms-fcl-ns'></span> </div> </div> <div class='_lv_T1 ms-bgc-nlr'></div> </div>  <div></div> </div><div> <div class='_lv_O1 ms-fwt-r ms-fcl-tp ms-bgc-w ms-bcl-nlr'> <span class='_lv_N1'></span> </div> </div><div> <div autoid=\"_lv_a\" class='_lv_Z1'></div>  <div></div> </div><div> <span class='_lv_22'></span> <div class='_lv_42'></div> </div><div> <div class='_lv_62 ms-bcl-nlr'> <div class='_lv_72 _lv_82'></div> <div class='_lv_72 _lv_92'></div> <div class='_lv_72 _lv_a2'></div> </div> </div><div> <div> <div class='_lv_b2'> <div class='_lv_e2'> <span class='_lv_g2'></span> </div> <span class='_lv_f2'></span> </div> <div class='_lv_b2 _lv_d2'> <div class='_lv_e2'> <span class='_lv_g2'></span> </div> <span class='_lv_f2'></span> </div> </div> </div>";
    _j.i.a().appendChild(n);
    return n
};
_lv.a.i = function(n) {
    return n.m
};
_lv.a.dU = function(n) {
    return n.g()
};
_lv.a.bW = function(n) {
    return n.M()
};
_lv.a.dS = function(n) {
    return n.bg()
};
_lv.a.j = function(n) {
    return n.l
};
_lv.a.ck = function(n) {
    return n.go
};
_lv.a.dR = function(n) {
    return n.m()
};
_lv.a.cl = function(n) {
    return 3
};
_lv.a.cd = function(n) {
    return n.bp()
};
_lv.a.ce = function(n) {
    return n.bR()
};
_lv.a.cv = function(n) {
    return n.cb
};
_lv.a.C = function(n) {
    return n.g
};
_lv.a.m = function(n) {
    return n.dX
};
_lv.a.bg = function(n) {
    return n.cB()
};
_lv.a.x = function(n) {
    return n.bH.UnreadCount
};
_lv.a.u = function(n) {
    return n.c
};
_lv.a.y = function(n) {
    return _lv.e.isInstanceOfType(n) ? n.dG : null
};
_lv.a.bu = function(n) {
    return _b.b.isInstanceOfType(n) ? n.eF : null
};
_lv.a.cz = function(n) {
    return n.p
};
_lv.a.bh = function(n) {
    return n.q()
};
_lv.a.bf = function(n) {
    return n.x()
};
_lv.a.dZ = function(n) {
    return n.bS()
};
_lv.a.em = function(n) {
    return n.o()
};
_lv.a.cw = function(n) {
    return n.bQ
};
_lv.a.cb = function(n) {
    return n.x
};
_lv.a.s = function(n) {
    return n.K()
};
_lv.a.cc = function(n) {
    return n.v
};
_lv.a.cx = function(n) {
    return n.bu()
};
_lv.a.cy = function(n) {
    return n.cd
};
_lv.a.ca = function(n) {
    return n.M()
};
_lv.a.dT = function(n) {
    return n.bH.Preview
};
_lv.a.cA = function(n) {
    return n.hx()
};
_lv.a.B = function(n) {
    return n.hc
};
_lv.a.r = function(n) {
    return n.D()
};
_lv.a.v = function(n) {
    return n.C()
};
_lv.a.cs = function(n) {
    return n.qC()
};
_lv.a.dx = function(n) {
    return n.z()
};
_lv.a.du = function(n) {
    return n.f()
};
_lv.a.dt = function(n) {
    return n.e()
};
_lv.a.dF = function(n) {
    return n.cR()
};
_lv.a.dP = function(n) {
    return n.a
};
_lv.a.G = function(n) {
    return n.cZ()
};
_lv.a.cm = function(n) {
    return n.ib
};
_lv.a.da = function(n) {
    return n.X
};
_lv.a.cZ = function(n) {
    return n.V()
};
_lv.a.ef = function(n) {
    return _lv.b.isInstanceOfType(n) ? n.hj : null
};
_lv.a.cp = function(n) {
    return n.gg
};
_lv.a.ch = function(n) {
    return n.gz
};
_lv.a.br = function(n) {
    return n.lH
};
_lv.a.bV = function(n) {
    return n.h()
};
_lv.a.ff = function(n) {
    return n.jR()
};
_lv.a.dw = function(n) {
    return n.cy()
};
_lv.a.cn = function(n) {
    return 0
};
_lv.a.bA = function(n) {
    return n.db()
};
_lv.a.bI = function(n) {
    return n.f()
};
_lv.a.bH = function(n) {
    return n.v()
};
_lv.a.bQ = function(n) {
    return n.s()
};
_lv.a.bq = function(n) {
    return n.dF
};
_lv.a.bF = function(n) {
    return n.e()
};
_lv.a.bo = function(n) {
    return n.E()
};
_lv.a.bG = function(n) {
    return n.i()
};
_lv.a.bp = function(n) {
    return n.bu
};
_lv.a.ci = function(n) {
    return n.gn
};
_lv.a.bn = function(n) {
    return n.hy()
};
_lv.a.eg = function(n) {
    return n.hk
};
_lv.a.bL = function(n) {
    return n.y()
};
_lv.a.ba = function(n) {
    return n.dR()
};
_lv.a.ea = function(n) {
    return n
};
_lv.a.bE = function(n) {
    return n.bd()
};
_lv.a.dy = function(n) {
    return n.bB()
};
_lv.a.cT = function(n) {
    return n.cz
};
_lv.a.cr = function(n) {
    return n.gJ
};
_lv.a.cf = function(n) {
    return n.gU
};
_lv.a.bM = function(n) {
    return n.be()
};
_lv.a.cF = function(n) {
    return n.mo()
};
_lv.a.dA = function(n) {
    return n.bE()
};
_lv.a.dB = function(n) {
    return n.d()
};
_lv.a.ep = function(n) {
    return n.es
};
_lv.a.eh = function(n) {
    return n.gh
};
_lv.a.dr = function(n) {
    return n.fR
};
_lv.a.cq = function(n) {
    return n.oP()
};
_lv.a.I = function(n) {
    return n.lS()
};
_lv.a.cg = function(n) {
    return n.eR
};
_lv.a.bY = function(n) {
    return n.a()
};
_lv.a.bP = function(n) {
    return n.U()
};
_lv.a.dD = function(n) {
    return n.q()
};
_lv.a.cU = function(n) {
    return n.eu
};
_lv.a.dC = function(n) {
    return n.cc()
};
_lv.a.dc = function(n) {
    return n.jj
};
_lv.a.ec = function(n) {
    return n.qA()
};
_lv.a.cI = function(n) {
    return n.fB
};
_lv.a.eX = function(n) {
    return n.I()
};
_lv.a.eW = function(n) {
    return n.H()
};
_lv.a.eV = function(n) {
    return n.B()
};
_lv.a.ee = function(n) {
    return n.gf
};
_lv.a.ed = function(n) {
    return n.mI
};
_lv.a.bN = function(n) {
    return n.K()
};
_lv.a.bO = function(n) {
    return n.L()
};
_lv.a.dv = function(n) {
    return n.bX()
};
_lv.a.eb = function(n) {
    return n.gt
};
_lv.a.dG = function(n) {
    return n.ck()
};
_lv.a.dE = function(n) {
    return n.B()
};
_lv.a.dz = function(n) {
    return n.S()
};
_lv.a.g = function(n) {
    return n.X
};
_lv.a.bs = function(n) {
    return _b.b.isInstanceOfType(n) ? n.eD : null
};
_lv.a.q = function(n) {
    return _b.b.isInstanceOfType(n) ? n.em : null
};
_lv.a.bt = function(n) {
    return _b.b.isInstanceOfType(n) ? n.eE : null
};
_lv.a.di = function(n) {
    return _b.b.isInstanceOfType(n) ? n.ep : null
};
_lv.a.dg = function(n) {
    return _b.b.isInstanceOfType(n) ? n.eo : null
};
_lv.a.dh = function(n) {
    return _b.b.isInstanceOfType(n) ? n.eU : null
};
_lv.a.df = function(n) {
    return _b.b.isInstanceOfType(n) ? n.dY : null
};
_lv.a.de = function(n) {
    return _b.b.isInstanceOfType(n) ? n.ek : null
};
_lv.a.dd = function(n) {
    return _b.b.isInstanceOfType(n) ? n.ej : null
};
_lv.a.fd = function(n) {
    return n.bl
};
_lv.a.fe = function(n) {
    return n.bI
};
_lv.a.k = function(n) {
    return n.m
};
_lv.a.bZ = function(n) {
    return n.bX()
};
_lv.a.bX = function(n) {
    return n.a()
};
_lv.a.dW = function(n) {
    return n.bg()
};
_lv.a.dV = function(n) {
    return n.bT()
};
_lv.a.H = function(n) {
    return n.cL()
};
_lv.a.en = function(n) {
    return n.o()
};
_lv.a.dX = function(n) {
    return n.bA()
};
_lv.a.dY = function(n) {
    return n.bH.Preview
};
_lv.a.fg = function(n) {
    return n.jR()
};
_lv.a.ej = function(n) {
    return n
};
_lv.a.cJ = function(n) {
    return n.dA
};
_lv.a.fa = function(n) {
    return n.G()
};
_lv.a.eZ = function(n) {
    return n.E()
};
_lv.a.eY = function(n) {
    return n.r()
};
_lv.a.eJ = function(n) {
    return n.E()
};
_lv.a.ek = function(n) {
    return n.N
};
_lv.a.fi = function(n) {
    return _lv.t.isInstanceOfType(n) ? n.bq() : null
};
_lv.a.fc = function(n) {
    return n.c()
};
_lv.a.fb = function(n) {
    return n.b()
};
_lv.a.eQ = function(n) {
    return n.t()
};
_lv.a.eR = function(n) {
    return _fm.c.isInstanceOfType(n) ? n.w() : null
};
_lv.a.eP = function(n) {
    return n.o()
};
_lv.a.cX = function(n) {
    return n.q()
};
_lv.a.eA = function(n) {
    return n.q
};
_lv.a.fh = function(n) {
    return n.Z()
};
_lv.a.eK = function(n) {
    return n.O()
};
_lv.a.eO = function(n) {
    return n.j
};
_lv.a.E = function(n) {
    return n.c()
};
_lv.a.eD = function(n) {
    return n.r
};
_lv.a.eE = function(n) {
    return n.u
};
_lv.a.eH = function(n) {
    return n.B
};
_lv.a.eF = function(n) {
    return n.z
};
_lv.a.eG = function(n) {
    return n.A
};
_lv.a.eI = function(n) {
    return n.C
};
_lv.a.eM = function(n) {
    return n.u
};
_lv.a.eN = function(n) {
    return n.s
};
_lv.a.cY = function(n) {
    return n.r
};
_lv.a.co = function(n) {
    return n.hB()
};
_lv.a.dN = function(n) {
    return n.f()
};
_lv.a.bU = function(n) {
    return n.e()
};
_lv.a.dO = function(n) {
    return n.g()
};
_lv.a.cj = function(n) {
    return n.hA()
};
_lv.a.e = function(n, t) {
    n.a(t)
};
_lv.a.h = function(n, t) {
    n.a(t)
};
_lv.a.bl = function(n, t) {
    n.d(t)
};
_lv.a.bk = function(n, t) {
    n.f(t)
};
_lv.a.bm = function(n, t) {
    n.h = t
};
_lv.a.F = function(n, t) {
    n.Q(t)
};
_lv.a.w = function(n, t) {
    n.l(t)
};
_lv.a.bi = function(n, t) {
    n.u(t)
};
_lv.a.n = function(n, t) {
    n.bb(t)
};
_lv.a.cC = function(n, t) {
    n.cu(t)
};
_lv.a.bj = function(n, t) {
    n.p(t)
};
_lv.a.d = function(n, t) {
    n.K(t)
};
_lv.a.A = function(n, t) {
    n.bH(t)
};
_lv.a.Z = function(n, t) {
    n.k(t)
};
_lv.a.t = function(n, t) {
    n.ba(t)
};
_lv.a.dM = function(n, t) {
    n.dp(t)
};
_lv.a.dQ = function(n, t) {
    n.b(t)
};
_lv.a.db = function(n, t) {
    n.a(t)
};
_lv.a.cu = function(n, t) {
    t
};
_lv.a.bC = function(n, t) {
    n.ck(t)
};
_lv.a.bD = function(n, t) {
    n.dt(t)
};
_lv.a.by = function(n, t) {
    n.cV(t)
};
_lv.a.bT = function(n, t) {
    n.bb(t)
};
_lv.a.bz = function(n, t) {
    n.eS(t)
};
_lv.a.bJ = function(n, t) {
    n.E(t)
};
_lv.a.bw = function(n, t) {
    n.bg(t)
};
_lv.a.bK = function(n, t) {
    n.O(t)
};
_lv.a.bx = function(n, t) {
    n.dj(t)
};
_lv.a.ct = function(n, t) {
    n.hh(t)
};
_lv.a.bv = function(n, t) {
    n.eC(t)
};
_lv.a.dq = function(n, t) {
    n.da = t
};
_lv.a.bR = function(n, t) {
    n.Z(t)
};
_lv.a.bc = function(n, t) {
    n.cO(t)
};
_lv.a.bb = function(n, t) {
    n.dn(t)
};
_lv.a.bd = function(n, t) {
    n.df(t)
};
_lv.a.dH = function(n, t) {
    n.bl(t)
};
_lv.a.cV = function(n, t) {
    n.bY(t)
};
_lv.a.be = function(n, t) {
    n.iI(t)
};
_lv.a.bB = function(n, t) {
    n.mb(t)
};
_lv.a.bS = function(n, t) {
    n.bP(t)
};
_lv.a.cG = function(n, t) {
    t
};
_lv.a.dI = function(n, t) {
    n.bm(t)
};
_lv.a.eq = function(n, t) {
    n.fw(t)
};
_lv.a.dJ = function(n, t) {
    n.bn(t)
};
_lv.a.er = function(n, t) {
    n.ij(t)
};
_lv.a.ei = function(n, t) {
    n.gh = t
};
_lv.a.ds = function(n, t) {
    n.md(t)
};
_lv.a.el = function(n, t) {
    n.dc(t)
};
_lv.a.cE = function(n, t) {
    n.cv(t)
};
_lv.a.cD = function(n, t) {
    n.cN(t)
};
_lv.a.cB = function(n, t) {
    n.cM(t)
};
_lv.a.dL = function(n, t) {
    n.bo(t)
};
_lv.a.cW = function(n, t) {
    n.ex(t)
};
_lv.a.dK = function(n, t) {
    n.et(t)
};
_lv.a.dk = function(n, t) {
    n.lG(t)
};
_lv.a.dl = function(n, t) {
    n.to(t)
};
_lv.a.dn = function(n, t) {
    n.jx(t)
};
_lv.a.dm = function(n, t) {
    n.jw(t)
};
_lv.a.dj = function(n, t) {
    n.ju(t)
};
_lv.a.dp = function(n, t) {
    n.jy(t)
};
_lv.a.f = function(n, t) {
    n.l = t
};
_lv.a.l = function(n, t) {
    n.q = t
};
_lv.a.cS = function(n, t) {
    n.m(t)
};
_lv.a.cH = function(n, t) {
    n.bk(t)
};
_lv.a.cR = function(n, t) {
    n.Q(t)
};
_lv.a.eo = function(n, t) {
    n.cQ(t)
};
_lv.a.eS = function(n, t) {
    n.y(t)
};
_lv.a.ez = function(n, t) {
    n.bR(t)
};
_lv.a.eL = function(n, t) {
    n.i(t)
};
_lv.a.eB = function(n, t) {
    n.bJ(t)
};
_lv.a.eC = function(n, t) {
    n.a = t
};
_lv.a.et = function(n, t) {
    n.u(t)
};
_lv.a.eu = function(n, t) {
    n.b = t
};
_lv.a.ex = function(n, t) {
    n.cF(t)
};
_lv.a.ev = function(n, t) {
    n.cB(t)
};
_lv.a.ew = function(n, t) {
    n.cC(t)
};
_lv.a.ey = function(n, t) {
    n.cG(t)
};
_lv.a.eU = function(n, t) {
    n.O(t)
};
_lv.a.eT = function(n, t) {
    n.N(t)
};
_lv.a.cN = function() {
    _lv.a.P || (_lv.a.P = new _b.V);
    return _lv.a.P
};
_lv.a.X = function() {
    _lv.a.T || (_lv.a.T = new _n.ba);
    return _lv.a.T
};
_lv.a.Y = function() {
    _lv.a.U || (_lv.a.U = new _n.B);
    return _lv.a.U
};
_lv.a.D = function() {
    _lv.a.K || (_lv.a.K = new _fce.t);
    return _lv.a.K
};
_lv.a.b = function() {
    _lv.a.J || (_lv.a.J = new _fc.k);
    return _lv.a.J
};
_lv.a.o = function() {
    _lv.a.L || (_lv.a.L = new _fc.q);
    return _lv.a.L
};
_lv.a.p = function() {
    _lv.a.V || (_lv.a.V = new _n.T);
    return _lv.a.V
};
_lv.a.cP = function() {
    _lv.a.R || (_lv.a.R = new _b.bj);
    return _lv.a.R
};
_lv.a.cM = function() {
    _lv.a.O || (_lv.a.O = new _b.bq);
    return _lv.a.O
};
_lv.a.cO = function() {
    _lv.a.Q || (_lv.a.Q = new _b.bK);
    return _lv.a.Q
};
_lv.a.cQ = function() {
    _lv.a.W || (_lv.a.W = new _n.M);
    return _lv.a.W
};
_lv.a.z = function() {
    _lv.a.S || (_lv.a.S = new _y.eL);
    return _lv.a.S
};
_lv.a.cK = function() {
    _lv.a.M || (_lv.a.M = new _fc.t);
    return _lv.a.M
};
_lv.a.cL = function() {
    _lv.a.N || (_lv.a.N = new _fc.l);
    return _lv.a.N
};
_lv.a._I = function() {
    var t = "SortOptionsContextMenuView.SortByDualStateContextMenuItem._tid11";
    new _j.d(t, function() {
        _lv.a.a[t] === undefined && (_lv.a.a[t] = [
            [
                [-1, 0, ["ShowCheckmark"],
                    [_lv.a.eJ], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ],
                [-1, 0, ["ParentSortOptionsManager", "CurrentSortArrow"],
                    [_lv.a.ek, _lv.a.fi], null, "Id", null, _lv.a.h, 1, null, null, null
                ],
                [-1, 5, ["ParentSortOptionsManager", "SortByContextMenu", "IsInAscendingOrder"],
                    [_lv.a.ek, _lv.a.fc, _lv.a.fb], null, "_lv_52", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 0, ["LabelDataContext"],
                    [_lv.a.eQ], null, "DataContext", null, _lv.a.t, 1, null, null, null
                ],
                [0, 0, ["LabelTemplateId"],
                    [_lv.a.eR], null, "TemplateId", null, _lv.a.eS, 1, null, null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[37].cloneNode(!0);
        var r = new _j.c(n.children[1]);
        var i = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [i, r])
    }, "", _lv.r, _fce.p, function(n) {
        return new _fce.p(n, _j.b.Instance.a(_j.j))
    }, !1, !0, !1, 0, _lv.a.a);
    var n = "SortOptionsContextMenuView.SortByDualStateContextMenuItem";
    new _j.d(n, function() {
        _lv.a.a[n] === undefined && (_lv.a.a[n] = [
            [
                [-1, 0, ["IsSelected"],
                    [_lv.a.eP], null, "IsSelected", null, _lv.a.ez, 1, null, null, !1
                ],
                [-1, 0, ["IsChecked"],
                    [_lv.a.cX], _lv.a.eL, "IsChecked", _lv.a.eA, _lv.a.eB, 2, null, null, !1
                ],
                [-1, 0, ["SelectedSortOptionTitleText"],
                    [_lv.a.fh], null, "Title", null, _lv.a.cH, 1, null, null, null
                ],
                [-1, 0, ["ToggleCheckedOnClick"],
                    [_lv.a.eK], null, "ToggleCheckedOnClick", null, _lv.a.eC, 1, null, null, !1
                ],
                [-1, 0, ["Command"],
                    [_lv.a.eO], null, "ClickCommand", null, _lv.a.n, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupCloseCommand"],
                    [_lv.a.E, _lv.a.eD], null, "CloseMenuCommand", null, _lv.a.et, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "ContextMenuPopupId"],
                    [_lv.a.E, _lv.a.eE], null, "ContextMenuPopupId", null, _lv.a.eu, 1, null, null, 0
                ],
                [-1, 0, ["ParentContextMenu", "CustomItemCssClass"],
                    [_lv.a.E, _lv.a.eH], null, "CustomItemCssClass", null, _lv.a.ex, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomActiveItemCssClass"],
                    [_lv.a.E, _lv.a.eF], null, "CustomActiveCssClass", null, _lv.a.ev, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomInactiveItemCssClass"],
                    [_lv.a.E, _lv.a.eG], null, "CustomInactiveCssClass", null, _lv.a.ew, 1, null, null, null
                ],
                [-1, 0, ["ParentContextMenu", "CustomSelectedItemCssClass"],
                    [_lv.a.E, _lv.a.eI], null, "CustomSelectedCssClass", null, _lv.a.ey, 1, null, null, null
                ],
                [-1, 0, ["AriaId"],
                    [_lv.a.eM], null, "AriaId", null, _lv.a.eU, 1, null, null, null
                ],
                [-1, 0, ["AriaLabel"],
                    [_lv.a.eN], null, "AriaLabel", null, _lv.a.cR, 1, null, null, null
                ],
                [-1, 0, ["IsHidden"],
                    [_lv.a.cY], null, "IsHidden", null, _lv.a.d, 1, null, null, !0
                ],
                [-1, 0, ["IsHidden"],
                    [_lv.a.cY], null, "AriaHiddenState", null, _lv.a.eT, 1, null, null, !1
                ],
                [-1, 5, ["IsChecked"],
                    [_lv.a.cX], null, "ms-fwt-sb", null, null, 0, null, null, null
                ]
            ]
        ]);
        var i = _lv.a.c.childNodes[21].cloneNode(!0);
        var t = new _fce.p(i.children[0], _j.b.Instance.a(_j.j));
        t.E("_lv_32 ms-fwt-r ms-font-s");
        t.bN("ms-fcl-np");
        t.bP("ms-fcl-nt");
        t.bc("ms-bgc-tl");
        t.y("SortOptionsContextMenuView.SortByDualStateContextMenuItem._tid11");
        return new _j.a(i, [t]).l({
            FocusControl: t
        })
    }, "", _lv.r, _fce.n, function(n) {
        return new _fce.n(n)
    }, !1, !1, !1, 0, _lv.a.a)
};
MailListViewComponent.registerClass("MailListViewComponent", null, _a.kj, _j.ce);
_lv.g.registerClass("_lv.g", _a.bw, _y.hK, _y.gf, _j.bs, Sys.IDisposable);
_lv.d.registerClass("_lv.d", _lv.g);
_lv.b.registerClass("_lv.b", _y.lJ, _y.bV, _j.bs, Sys.IDisposable, _y.le, _y.C, _bc.w, _a.kW, _y.fg);
_lv.h.registerClass("_lv.h", _lv.b, _ff.t, _y.ks, _y.bV, _j.bs, Sys.IDisposable, _y.le, _y.C, _bc.w, _a.kW, _y.fg);
_lv.p.registerClass("_lv.p", _fm.g);
_lv.k.registerClass("_lv.k", null, _y.lF);
_lv.b.M.registerClass("_lv.b.M");
_lv.i.registerClass("_lv.i", _lv.g);
_lv.j.registerClass("_lv.j", _lv.b, _ff.t, _y.cR, _y.bV, _j.bs, Sys.IDisposable, _y.le, _y.C, _bc.w, _a.kW, _y.fg);
_lv.u.registerClass("_lv.u", _a.bw);
_lv.y.registerClass("_lv.y", _a.bw);
_lv.l.registerClass("_lv.l", _a.bw);
_lv.v.registerClass("_lv.v", _a.bw);
_lv.m.registerClass("_lv.m", _a.bw, _y.li);
_lv.w.registerClass("_lv.w", _fm.e, _y.lw);
_lv.r.registerClass("_lv.r", _fm.g);
_lv.t.registerClass("_lv.t", _j.S, _y.lx);
_lv.c.registerClass("_lv.c", _b.C);
_lv.f.registerClass("_lv.f", _lv.c);
_lv.n.registerClass("_lv.n", _j.c);
_lv.o.registerClass("_lv.o", _lv.c);
_lv.e.registerClass("_lv.e", _b.q, _b.bG);
MailListViewComponent.$$cctor();
_lv.g.a = _a.a.bu;
_lv.h.a = _a.a.cN;
_lv.s.a = _a.a.cP;
_lv.k.d = new _a.d(2015, 0, 1);
_lv.k.a = "FolderId";
_lv.k.b = "Weight";
_lv.k.c = "lvt";
_lv.q.a = null;
_lv.b.b = "FocusedViewFilter";
_lv.b.m = "IsSharedFolder";
_lv.b.G = "SelectionMode";
_lv.b.y = "EventInfo";
_lv.b.o = "ShowInfoMessage";
_lv.b.I = "ShowSenderOnTop";
_lv.b.i = "ShowPreviewText";
_lv.b.n = "ResetListViewRowHeight";
_lv.b.C = "GroupHeadersEnabled";
_lv.b.F = "IsClutterView";
_lv.b.J = "SwipeMenu";
_lv.b.E = "HoveredItem";
_lv.b.k = "EmailContextMenuViewModel";
_lv.b.g = "ItemContextMenuViewModel";
_lv.b.c = "ShowCategoryColumn";
_lv.b.l = "FocusedRollupUnseenCountText";
_lv.b.A = "FocusedRollupUniqueSendersText";
_lv.b.z = "FocusedRollupText";
_lv.b.e = "GroupGenerator";
_lv.b.B = "FolderPermission";
_lv.b.K = "SwitchFrequentlyUsedFolder";
_lv.b.h = "SelectionState";
_lv.b.d = "CurrentTableChanging";
_lv.b.f = "IsSwipeMenuShown";
_lv.b.q = "Folder";
_lv.b.D = "HeaderDisplayText";
_lv.b.H = "ShowSelectionCountInHeader";
_lv.b.a = _a.a.bu;
_lv.b.v = new _a.f(_lv.b.G, _a.ga, _lv.b);
_lv.b.x = new _a.f("ShowInfoMessageType", _h.y, _lv.b);
_lv.b.u = new _a.f("NewMessageCommand", _j.P, _lv.b);
_lv.b.t = new _a.f("NavigateToFolderListCommand", _j.P, _lv.b);
_lv.b.p = new _a.f(_lv.b.y, _ff.r, _lv.b, null, null, _lv.b.L);
_lv.b.w = new _a.f(_lv.b.o, Boolean, _lv.b);
_lv.b.r = !1;
_lv.b.j = 2;
_lv.b.s = !1;
_lv.j.b = _a.a.Y;
_lv.f.b = "ExpansionTwistyImage";
_lv.f.a = "ExpansionTwistyImageHover";
_lv.f.e = "ExpansionTwistyIsHidden";
_lv.f.c = "AriaRoleFirstLine";
_lv.f.d = "AriaRoleSecondLine";
_lv.f.f = "CollapseConversation";
_lv.f.g = "ExpandConversation";
_lv.c.g = "ListViewItemFirstLineValue";
_lv.c.i = "ListViewItemSecondLineValue";
_lv.c.d = "HideActiveStatusBar";
_lv.c.e = "HideInactiveStatusBar";
_lv.c.b = "ShowAsPinnedNotSelectedOrHovered";
_lv.c.a = "ShowAsFlaggedNotSelectedOrHovered";
_lv.c.k = "ShowDefaultListItemBackgroundColor";
_lv.c.c = "ListViewItemFirstLineHighlightCss";
_lv.c.h = "ListViewItemSecondLineHighlightCss";
_lv.c.l = "ShowPreviewTextOption";
_lv.c.f = "AriaLabelValue";
_lv.c.n = "ShowAsChecked";
_lv.c.j = "ReadingPaneIsOff";
_lv.c.p = "SwipeChecked";
_lv.c.o = "ShowAsPinned";
_lv.c.m = "ExtractedActionState";
_lv.e.a = !0;
_lv.a.c = _lv.a.es();
_lv.a.P = null;
_lv.a.T = null;
_lv.a.U = null;
_lv.a.K = null;
_lv.a.J = null;
_lv.a.L = null;
_lv.a.V = null;
_lv.a.R = null;
_lv.a.O = null;
_lv.a.Q = null;
_lv.a.W = null;
_lv.a.S = null;
_lv.a.M = null;
_lv.a.N = null;
_lv.a.a = {};
_lv.a.$$cctor();
Type.registerNamespace("_lv");
_lv.x = function(n, t) {
    this.G = Function.createDelegate(this, this.bW);
    this.E = Function.createDelegate(this, this.bV);
    _lv.x.initializeBase(this, [t]);
    this.r = n
};
_lv.x.prototype = {
    r: null,
    H: 0,
    s: 0,
    bd: function() {
        return "MailSwipeBanner"
    },
    bb: function() {
        _j.bV.prototype.bb.call(this);
        this.o(null, null)
    },
    l: function(n) {
        this.s || this.r.a(_a.bl, n);
        _b.cj.prototype.l.call(this, n);
        this.r.c(_a.df, this.E);
        this.a.t(this.G)
    },
    B: function(n) {
        _b.cj.prototype.B.call(this, n);
        this.s = 0
    },
    bz: function() {
        this.r.c(_a.df, this.E);
        _j.bV.prototype.bz.call(this)
    },
    T: function() {
        return this.s !== 1
    },
    g: function(n, t) {
        _j.s.c(_fce.e.isInstanceOfType(n), "The item must be of type ListViewItem");
        n.bN(t)
    },
    y: function(n) {
        var t = this.a.a();
        switch (n) {
            case 2:
                t.hA().a(!0);
                t.hB().a(!1);
                break;
            case 1:
                t.hA().a(!1);
                t.hB().a(!0);
                break
        }
    },
    R: function(n) {
        _j.s.c(_lv.g.isInstanceOfType(n.V()), "The item must be of type MailBaseListItemViewModel");
        var t = this.a.a();
        t.sN(n.V())
    },
    bm: function(n) {
        _j.s.c(_lv.g.isInstanceOfType(n.V()), "The Swipe Item must be of type MailBaseListItemViewModel");
        var t = this.a.a();
        t.ft = !0;
        _a.b.g("MSW");
        t.hB().d().a();
        t.ft = !1
    },
    bk: function(n) {
        _j.s.c(_lv.g.isInstanceOfType(n.V()), "The Swipe Item must be of type MailBaseListItemViewModel");
        var t = this.a.a();
        t.ft = !0;
        _a.b.g("MSW");
        t.hA().d().a();
        t.ft = !1
    },
    bg: function(n) {
        this.H = this.a.b();
        this.a.d(this.G);
        _b.cj.prototype.bg.call(this, n)
    },
    bf: function(n) {
        this.r.b(_a.df, this.E);
        this.H = this.a.b();
        this.a.d(this.G);
        _b.cj.prototype.bf.call(this, n)
    },
    o: function(n, t) {
        this.A();
        var i = this.a.a();
        this.i = i.hA().b();
        this.p = i.hB().b();
        this.k = i.hA().c();
        this.q = i.hB().c();
        _b.cj.prototype.o.call(this, n, t)
    },
    bW: function() {
        Math.abs(this.a.b() - this.H) > this.n && this.l(new _a.bl(10, "", "", "", null, null, null))
    },
    I: function(n) {
        this.s = 0;
        this.l(new _a.bl(n, "", "", "", null, null, null))
    },
    bV: function(n) {
        if (!this.e || !this.e.V()) {
            this.I(4);
            _j.e.a(_a.a.cb, "Last swiped item or its data context was null when trying to perform undo operation");
            return
        }
        this.s = 1;
        _j.s.c(_lv.g.isInstanceOfType(this.e.V()), "The Swipe Item must be of type MailBaseListItemViewModel");
        var i = this.e.V().cR();
        if (n.a === i) {
            var t = this;
            this.bY(function() {
                if (t.e) {
                    _j.k.a(t.e.z, "display", "");
                    t.g(t.e, !1);
                    t.I(3)
                } else t.I(4)
            })
        } else {
            _j.e.a(_a.a.cb, "Last swiped item was already deleted when trying to perform undo operation");
            this.g(this.e, !1);
            this.I(4)
        }
    },
    bY: function(n) {
        var i = this.e;
        var t = _j.k.K(i.z);
        var f = i.z.children[0];
        _j.k.a(f, _b.o.a(), _fce.u.a(0, 0, !0));
        var r = this;
        var u = function(i) {
            r.S();
            _j.B.c(t, _b.o.b());
            _j.B.b(t, "-webkit-transition", "-webkit-transform .2s ease-out");
            r.bx(t);
            n()
        };
        if (t.length) {
            this.bw(u, 400);
            _j.k.a(i.z, "display", "block");
            _j.B.b(t, "-webkit-transition-duration", "0s");
            this.bv(t, u)
        } else {
            _j.k.a(i.z, "display", "block");
            n()
        }
    }
};
_lv.D = function() {};
_lv.D.load = function() {
    var it = "ConversationListItemView._tid1";
    new _j.d(it, function() {
        _lv.a.a[it] === undefined && (_lv.a.a[it] = [
            [
                [-1, 4, null, null, null, "Text", null, _lv.a.e, 0, null, null, null, _u.R.Uf]
            ],
            [
                [-1, 5, ["Conversation", "UniqueSenders"],
                    [_lv.a.i, _lv.a.dU], null, "_lv_o", null, null, 0, _lv.a.cN(), null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[0].cloneNode(!0);
        var t = new _fc.a(n.children[1]);
        t.a(" ");
        var i = new _fc.a(n.children[0]);
        return new _j.a(n, [i, t])
    }, "", _lv.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 1);
    var tt = "ConversationListItemView._tid2";
    new _j.d(tt, function() {
        _lv.a.a[tt] === undefined && (_lv.a.a[tt] = [
            [
                [-1, 4, null, null, null, "Id", null, _lv.a.h, 0, null, null, null, _n.b.bg()]
            ]
        ]);
        var n = _lv.a.c.childNodes[1].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 2);
    var ut = "ConversationListItemView._tid3";
    new _j.d(ut, function() {
        _lv.a.a[ut] === undefined && (_lv.a.a[ut] = [
            [
                [-1, 0, ["Conversation", "FlagStatus"],
                    [_lv.a.i, _lv.a.bW], null, "Id", null, _lv.a.h, 1, _lv.a.X(), 1, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[1].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 3);
    var rt = "ConversationListItemView._tid4";
    new _j.d(rt, function() {
        _lv.a.a[rt] === undefined && (_lv.a.a[rt] = [
            [
                [-1, 4, null, null, null, "Id", null, _lv.a.h, 0, null, null, null, _n.b.T()]
            ]
        ]);
        var n = _lv.a.c.childNodes[1].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 4);
    var d = "ConversationListItemView._tid5";
    new _j.d(d, function() {
        _lv.a.a[d] === undefined && (_lv.a.a[d] = [
            [
                [-1, 4, null, null, null, "Id", null, _lv.a.h, 0, null, null, null, _n.b.g()]
            ]
        ]);
        var n = _lv.a.c.childNodes[1].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 5);
    var k = "ConversationListItemView._tid6";
    new _j.d(k, function() {
        _lv.a.a[k] === undefined && (_lv.a.a[k] = [
            [
                [-1, 0, ["Conversation", "Importance"],
                    [_lv.a.i, _lv.a.dS], null, "Id", null, _lv.a.h, 1, _lv.a.Y(), !1, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[1].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 6);
    var nt = "ConversationListItemView._tid7";
    new _j.d(nt, function() {
        _lv.a.a[nt] === undefined && (_lv.a.a[nt] = [
            [
                [-1, 0, ["ParentListViewModel", "MasterCategoriesList"],
                    [_lv.a.j, _lv.a.ck], null, "MasterCategoryList", null, _lv.a.bl, 1, null, null, null
                ],
                [-1, 0, ["Conversation", "Categories"],
                    [_lv.a.i, _lv.a.dR], null, "CategoriesList", null, _lv.a.bk, 1, null, null, null
                ],
                [-1, 0, ["ParentListViewModel", "MaxCategoriesToShow"],
                    [_lv.a.j, _lv.a.cl], null, "MaximumCategoriesToShow", null, _lv.a.bm, 0, null, null, 0
                ]
            ]
        ]);
        var t = _lv.a.c.childNodes[2].cloneNode(!0);
        var n = new _b.u(t.children[0], _j.b.Instance.a(_h.e));
        n.a = "catB catConversationNarrowWide";
        return new _j.a(t, [n])
    }, "", _lv.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 7);
    var g = "ConversationListItemView._tid8";
    new _j.d(g, function() {
        _lv.a.a[g] === undefined && (_lv.a.a[g] = [
            [
                [-1, 0, ["SmallIconImage"],
                    [_lv.a.cd], null, "Id", null, _lv.a.h, 1, null, null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[1].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 8);
    var ft = "ConversationListItemView._tid9";
    new _j.d(ft, function() {
        _lv.a.a[ft] === undefined && (_lv.a.a[ft] = [
            [
                [-1, 0, ["SmimeTypeImage"],
                    [_lv.a.ce], null, "Id", null, _lv.a.h, 1, null, null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[1].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 9);
    var lt = "ConversationListItemView";
    new _j.d(lt, function() {
        _lv.a.a[lt] === undefined && (_lv.a.a[lt] = [
            [
                [-1, 1, ["AriaLabelValue"],
                    [_lv.a.cv], null, "AriaLabel", null, _lv.a.F, 1, null, null, null
                ],
                [-1, 5, ["ShowPreviewTextOption"],
                    [_lv.a.C], null, "_lv_3", null, null, 1, null, null, null
                ],
                [-1, 5, ["IsClutterView"],
                    [_lv.a.m], null, "_lv_q", null, null, 1, null, null, null
                ],
                [-1, 5, ["ShowSelectedOrIsTouched"],
                    [_lv.a.bg], null, "ms-bgc-tl:ms-bgc-w", null, null, 1, null, null, null
                ],
                [-1, 5, ["Conversation", "UnreadCount"],
                    [_lv.a.i, _lv.a.x], null, "_lv_5", null, null, 0, _lv.a.D(), null, null
                ],
                [-1, 5, ["ListView", "IsInMultiselectMode"],
                    [_lv.a.u, _lv.a.y], null, "_lv_9", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 5, ["IsClutterView"],
                    [_lv.a.m], null, "ms-bgc-np", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "ImageId", null, _lv.a.w, 0, null, null, null, _n.b.d()],
                [-1, 4, null, null, null, "CheckedImageId", null, _lv.a.bi, 0, null, null, null, _n.b.c()],
                [-1, 1, ["ListView", "ToggleSelectCommand"],
                    [_lv.a.u, _lv.a.bu], null, "ClickCommand", null, _lv.a.n, 1, null, null, null
                ],
                [-1, 1, ["ShowAsChecked"],
                    [_lv.a.cz], _lv.a.cC, "IsChecked", _lv.a.bh, _lv.a.bj, 2, null, null, !1
                ],
                [-1, 1, ["ListView", "IsInMultiselectMode"],
                    [_lv.a.u, _lv.a.y], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ],
                [-1, 5, ["ShowSelected"],
                    [_lv.a.bf], null, "_lv_8", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["HasDrafts"],
                    [_lv.a.dZ], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ],
            [
                [-1, 1, ["ListViewItemFirstLineHighlightCss"],
                    [_lv.a.em], null, "CssClass", null, _lv.a.A, 1, null, null, null
                ],
                [-1, 1, ["ListViewItemFirstLineValue"],
                    [_lv.a.cw], null, "Text", null, _lv.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["ShowAsPinned"],
                    [_lv.a.cb], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ],
            [
                [-1, 0, ["Conversation", "FlagStatus"],
                    [_lv.a.i, _lv.a.bW], null, "IsHidden", null, _lv.a.d, 1, _lv.a.o(), "NotFlagged", !0
                ]
            ],
            [
                [-1, 0, ["TopPropertyIconsToShow"],
                    [_lv.a.s], null, "IsHidden", null, _lv.a.d, 1, new _j.r([_lv.a.p(), _lv.a.b()], [34, null]), null, !0
                ]
            ],
            [
                [-1, 0, ["TopPropertyIconsToShow"],
                    [_lv.a.s], null, "IsHidden", null, _lv.a.d, 1, new _j.r([_lv.a.p(), _lv.a.b()], [2, null]), null, !0
                ]
            ],
            [
                [-1, 0, ["TopPropertyIconsToShow"],
                    [_lv.a.s], null, "IsHidden", null, _lv.a.d, 1, new _j.r([_lv.a.p(), _lv.a.b()], [1, null]), null, !0
                ]
            ],
            [
                [-1, 0, ["TopPropertyIconsToShow"],
                    [_lv.a.s], null, "IsHidden", null, _lv.a.d, 1, new _j.r([_lv.a.p(), _lv.a.b()], [0, null]), null, !0
                ]
            ],
            [
                [-1, 0, ["SmallIcon"],
                    [_lv.a.cc], null, "IsHidden", null, _lv.a.d, 1, _lv.a.o(), -1, !0
                ]
            ],
            [
                [-1, 0, ["TopPropertyIconsToShow"],
                    [_lv.a.s], null, "IsHidden", null, _lv.a.d, 1, new _j.r([_lv.a.p(), _lv.a.b()], [32, null]), null, !0
                ]
            ],
            [
                [-1, 5, ["Conversation", "UnreadCount"],
                    [_lv.a.i, _lv.a.x], null, "ms-fwt-sb ms-fcl-tp", null, null, 0, new _j.r([_lv.a.D(), _lv.a.b()], [null, null]), null, null
                ],
                [-1, 5, ["IsClutterView"],
                    [_lv.a.m], null, "ms-fcl-np", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 5, ["Conversation", "UnreadCount"],
                    [_lv.a.i, _lv.a.x], null, "_lv_g", null, null, 0, new _j.r([_lv.a.cP(), _lv.a.b()], [null, null]), null, null
                ]
            ],
            [
                [-1, 1, ["ListViewItemSecondLineHighlightCss"],
                    [_lv.a.cx], null, "CssClass", null, _lv.a.A, 1, null, null, null
                ],
                [-1, 1, ["ListViewItemSecondLineValue"],
                    [_lv.a.cy], null, "Text", null, _lv.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["Conversation", "UnreadCount"],
                    [_lv.a.i, _lv.a.x], null, "Text", null, _lv.a.e, 1, _lv.a.cM(), 2, null
                ],
                [-1, 5, ["IsClutterView"],
                    [_lv.a.m], null, "ms-fcl-np", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["DateTimeToDisplay"],
                    [_lv.a.ca], null, "Text", null, _lv.a.e, 1, null, null, null
                ],
                [-1, 5, ["Conversation", "UnreadCount"],
                    [_lv.a.i, _lv.a.x], null, "ms-fwt-sb ms-fcl-tp", null, null, 0, new _j.r([_lv.a.D(), _lv.a.b()], [null, null]), null, null
                ],
                [-1, 5, ["IsClutterView"],
                    [_lv.a.m], null, "ms-fcl-np", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["ShowPreviewTextOption"],
                    [_lv.a.C], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ],
                [-1, 0, ["Conversation", "Preview"],
                    [_lv.a.i, _lv.a.dT], null, "Text", null, _lv.a.e, 1, new _j.r([_lv.a.cO(), _lv.a.cQ()], [null, _u.R.Qy]), null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Id", null, _lv.a.h, 0, null, null, null, _b.l.h()],
                [-1, 1, ["SwipeChecked"],
                    [_lv.a.cA], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[3].cloneNode(!0);
        var k = new _fc.d(_j.a.a(n, [0, 3]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var p = new _fc.a(_j.a.a(n, [0, 2, 2, 0, 0]));
        var y = new _fc.a(_j.a.a(n, [0, 2, 1, 1]));
        var v = new _fc.a(_j.a.a(n, [0, 2, 1, 0, 1]));
        var d = new _fc.a(_j.a.a(n, [0, 2, 1, 0, 0, 0]));
        var g = new _j.i(_j.a.a(n, [0, 2, 1, 0, 0]));
        var b = new _j.i(_j.a.a(n, [0, 2, 1]));
        var a = new _j.c(_j.a.a(n, [0, 2, 0, 1, 7]));
        a.y("ConversationListItemView._tid9");
        var l = new _j.c(_j.a.a(n, [0, 2, 0, 1, 6]));
        l.y("ConversationListItemView._tid8");
        var f = new _j.c(_j.a.a(n, [0, 2, 0, 1, 5]));
        f.y("ConversationListItemView._tid7");
        var c = new _j.c(_j.a.a(n, [0, 2, 0, 1, 4]));
        c.y("ConversationListItemView._tid6");
        var u = new _j.c(_j.a.a(n, [0, 2, 0, 1, 3]));
        u.y("ConversationListItemView._tid5");
        var r = new _j.c(_j.a.a(n, [0, 2, 0, 1, 2]));
        r.y("ConversationListItemView._tid4");
        var e = new _j.c(_j.a.a(n, [0, 2, 0, 1, 1]));
        e.y("ConversationListItemView._tid3");
        var h = new _j.c(_j.a.a(n, [0, 2, 0, 1, 0]));
        h.y("ConversationListItemView._tid2");
        var w = new _fc.a(_j.a.a(n, [0, 2, 0, 0, 1]));
        var s = new _j.c(_j.a.a(n, [0, 2, 0, 0, 0]));
        s.y("ConversationListItemView._tid1");
        var i = new _fc.j(_j.a.a(n, [0, 1]));
        i.N(!1);
        i.A(-1);
        var o = new _j.i(_j.a.a(n, [0, 0]));
        var t = new _j.i(n.children[0]);
        t.A(-1);
        t.D(13);
        return new _j.a(n, [t, o, i, s, w, h, e, r, u, c, f, l, a, b, g, d, v, y, p, k]).l({
            MainItemContainer: t,
            ReadBar: o
        }).c(t)
    }, "", _lv.d, _lv.f, function(n) {
        return new _lv.f(n, _j.b.Instance.a(_b.a), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.e))
    }, !1, !1, !1, 0, _lv.a.a, 10);
    var ct = "ConversationListView.Narrow._tida._tidb";
    new _j.d(ct, function() {
        _lv.a.a[ct] === undefined && (_lv.a.a[ct] = [
            [
                [-1, 4, null, null, null, "ImageId", null, _lv.a.w, 0, null, null, null, _n.b.R()],
                [-1, 0, ["LoadMoreCommand"],
                    [_lv.a.B], null, "ClickCommand", null, _lv.a.n, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _lv.a.Z, 0, null, null, null, _u.R.Hd],
                [-1, 0, ["LoadMoreCommand"],
                    [_lv.a.B], null, "ClickCommand", null, _lv.a.n, 1, null, null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[4].cloneNode(!0);
        var i = new _fc.b(n.children[1]);
        var t = new _fc.b(n.children[0]);
        return new _j.a(n, [t, i])
    }, "", _lv.h, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a);
    var vt = "ConversationListView.Narrow._tida._tidc";
    new _j.d(vt, function() {
        _lv.a.a[vt] === undefined && (_lv.a.a[vt] = [
            [
                [-1, 4, null, null, null, "Text", null, _lv.a.e, 0, null, null, null, _u.R.PA],
                [-1, 0, ["ShowInfoMessageType"],
                    [_lv.a.r], null, "IsHidden", null, _lv.a.d, 1, new _j.r([_lv.a.o(), _lv.a.b()], [1, null]), null, !0
                ]
            ],
            [
                [-1, 0, ["ShowInfoMessageType"],
                    [_lv.a.r], null, "Text", null, _lv.a.e, 1, _lv.a.z(), null, null
                ],
                [-1, 5, ["ShowInfoMessage"],
                    [_lv.a.v], null, "_lv_F", null, null, 0, _lv.a.b(), null, null
                ],
                [-1, 5, ["ShowInfoMessageType"],
                    [_lv.a.r], null, "_lv_D", null, null, 0, _lv.a.o(), 13, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[5].cloneNode(!0);
        var i = new _fc.a(n.children[1]);
        var t = new _fc.a(n.children[0]);
        return new _j.a(n, [t, i])
    }, "", _lv.h, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a);
    var at = "ConversationListView.Narrow._tida._tidd";
    new _j.d(at, function() {
        _lv.a.a[at] === undefined && (_lv.a.a[at] = [
            [
                [-1, 0, ["SwipeMenu"],
                    [_lv.a.cs], null, "DataContext", null, _lv.a.t, 1, null, null, null
                ]
            ]
        ]);
        var t = _lv.a.c.childNodes[6].cloneNode(!0);
        var n = new _b.X(t.children[0]);
        return new _j.a(t, [n]).l({
            SwipeMenu: n
        })
    }, "", _lv.h, _b.K, function(n) {
        return new _b.K(n)
    }, !1, !0, !1, 0, _lv.a.a);
    var ot = "ConversationListView.Narrow._tida";
    new _j.d(ot, function() {
        _lv.a.a[ot] === undefined && (_lv.a.a[ot] = [null, [
                [-1, 0, ["FilterBarViewModel"],
                    [_lv.a.dx], null, "DataContext", null, _lv.a.t, 1, null, null, null
                ],
                [0, 0, ["IsHidden"],
                    [_lv.a.du], null, "IsHidden", null, _lv.a.d, 1, null, null, !0
                ],
                [0, 5, ["IsAndroid"],
                    [_lv.a.dt], null, "_lv_G:_lv_H", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 0, ["NativeAdsContainerHeight"],
                    [_lv.a.dF], _lv.a.dM, "Height", _lv.a.dP, _lv.a.dQ, 2, null, null, 0
                ],
                [-1, 0, ["ShouldShowMessageListAds"],
                    [_lv.a.G], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ],
            [
                [-1, 0, ["ShouldShowMessageListAds"],
                    [_lv.a.G], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ],
                [-1, 5, ["MessageListAdsViewModel"],
                    [_lv.a.cm], null, "hidden", null, null, 0, _lv.a.cK(), null, null
                ]
            ],
            [
                [-1, 1, ["TemplatedParent", "DataContext", "ShouldShowMessageListAds"],
                    [_lv.a.da, _lv.a.cZ, _lv.a.ef], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ],
                [-1, 0, ["MessageListAdsViewModel"],
                    [_lv.a.cm], null, "DataContext", null, _lv.a.t, 1, null, null, null
                ]
            ],
            [
                [-1, 5, ["ShouldShowMessageListAds"],
                    [_lv.a.G], null, "hidden", null, null, 0, _lv.a.b(), null, null
                ]
            ],
            [
                [-1, 5, ["ShowInfoMessage"],
                    [_lv.a.v], null, "_lv_F", null, null, 0, null, null, null
                ]
            ], null, null, [
                [-1, 0, ["ShowLoadMore"],
                    [_lv.a.cp], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _lv.a.e, 0, null, null, null, _u.R.Si],
                [-1, 5, ["IsShowSearchComplete"],
                    [_lv.a.ch], null, "_lv_F", null, null, 0, _lv.a.b(), null, null
                ]
            ],
            [
                [-1, 0, ["ShowInfoMessage"],
                    [_lv.a.v], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ],
            [
                [-1, 0, ["ShowInfoMessageType"],
                    [_lv.a.r], null, "AriaLabel", null, _lv.a.F, 1, _lv.a.z(), null, null
                ],
                [-1, 0, ["ShowInfoMessageType"],
                    [_lv.a.r], null, "Text", null, _lv.a.db, 1, _lv.a.z(), null, null
                ]
            ],
            [
                [-1, 1, ["ShouldHideSwipeMenu"],
                    [_lv.a.br], null, "IsHidden", null, _lv.a.d, 1, null, null, !0
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[7].cloneNode(!0);
        var u = new _b.K(n.children[1]);
        u.y("ConversationListView.Narrow._tida._tidd");
        var y = new _b.W(_j.a.a(n, [0, 5]), _j.b.Instance.a(_j.j));
        var o = new _j.c(_j.a.a(n, [0, 4]));
        o.y("ConversationListView.Narrow._tida._tidc");
        var l = new _fc.a(_j.a.a(n, [0, 3, 0, 2]));
        var s = new _j.c(_j.a.a(n, [0, 3, 0, 1]));
        s.y("ConversationListView.Narrow._tida._tidb");
        var c = new _fce.d(_j.a.a(n, [0, 3, 0, 0]));
        var h = new _j.i(_j.a.a(n, [0, 3, 0]));
        var f = new _j.i(_j.a.a(n, [0, 3]));
        var v = new _j.i(_j.a.a(n, [0, 2]));
        var i = new _j.c(_j.a.a(n, [0, 1, 1]));
        i.y("MessageListAdsListView");
        i.L(!0);
        var e = new _j.c(_j.a.a(n, [0, 1, 0]));
        e.y("MessageListAdsPreloadingView");
        var a = new _n.bd(_j.a.a(n, [0, 1]));
        var r = new _j.c(_j.a.a(n, [0, 0]));
        r.y("FilterBarView");
        var t = new _fce.g(n.children[0], _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
        t.b = !0;
        return new _j.a(n, [t, r, a, e, i, v, f, h, c, s, l, o, y, u]).l({
            ScrollRegion: t,
            PullDownContainer: r,
            ElementsCanvas: f,
            ListPanelContainer: h,
            ListPanel: c,
            ListViewSwipeMenuContainer: u
        })
    }, "", _lv.h, _lv.e, function(n) {
        return new _lv.e(n, 33, _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.I), _j.b.Instance.a(_j.o), _j.b.Instance.a(_g.a), _j.b.Instance.a(_a.e), _j.b.Instance.a(_a.x), _j.b.Instance.a(_j.cd.$$(_j.t)))
    }, !1, !0, !1, 0, _lv.a.a);
    var et = "ConversationListView.Narrow.MailGroupHeaderTemplate";
    new _j.d(et, function() {
        _lv.a.a[et] === undefined && (_lv.a.a[et] = [
            [
                [-1, 0, ["Text"],
                    [_lv.a.bV], null, "Text", null, _lv.a.e, 1, null, null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[8].cloneNode(!0);
        var t = new _fc.a(_j.a.a(n, [0, 0]));
        return new _j.a(n, [t])
    }, "", _y.N, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _lv.a.a);
    var ht = "ConversationListView.Narrow.MultiSelectBar._tide";
    new _j.d(ht, function() {
        _lv.a.a[ht] === undefined && (_lv.a.a[ht] = [
            [
                [-1, 4, null, null, null, "Id", null, _lv.a.h, 0, null, null, null, _n.b.cR()]
            ]
        ]);
        var n = _lv.a.c.childNodes[9].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.h, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _lv.a.a);
    var st = "ConversationListView.Narrow.MultiSelectBar";
    new _j.d(st, function() {
        _lv.a.a[st] === undefined && (_lv.a.a[st] = [
            [
                [-1, 0, ["SelectedItemsCountString"],
                    [_lv.a.ff], null, "Text", null, _lv.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["CancelMultiSelectModeInTouchCommand"],
                    [_lv.a.dw], null, "ClickCommand", null, _lv.a.n, 1, null, null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[10].cloneNode(!0);
        var t = new _fc.b(_j.a.a(n, [0, 1]));
        t.y("ConversationListView.Narrow.MultiSelectBar._tide");
        var i = new _fc.a(_j.a.a(n, [0, 0]));
        return new _j.a(n, [i, t])
    }, "", _lv.h, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _lv.a.a);
    var b = "ConversationListView.Narrow";
    new _j.d(b, function() {
        _lv.a.a[b] === undefined && (_lv.a.a[b] = [
            [
                [-1, 0, ["ResetListViewRowHeight"],
                    [_lv.a.cn], _lv.a.cu, "NormalRowHeight", _lv.a.bA, _lv.a.bC, 2, null, null, 0
                ],
                [-1, 0, ["Table"],
                    [_lv.a.bI], null, "TableView", null, _lv.a.bD, 1, null, null, null
                ],
                [-1, 0, ["SelectionMode"],
                    [_lv.a.bH], null, "SelectionMode", null, _lv.a.by, 1, null, null, 0
                ],
                [-1, 0, ["SelectionState"],
                    [_lv.a.bQ], _lv.a.bT, "SelectionState", _lv.a.bq, _lv.a.bz, 2, null, null, 0
                ],
                [-1, 0, ["SelectedItem"],
                    [_lv.a.bF], _lv.a.bJ, "SelectedItem", _lv.a.bo, _lv.a.bw, 2, null, null, null
                ],
                [-1, 0, ["SelectedItems"],
                    [_lv.a.bG], _lv.a.bK, "SelectedItems", _lv.a.bp, _lv.a.bx, 2, null, null, null
                ],
                [-1, 0, ["ItemToSelect"],
                    [_lv.a.ci], _lv.a.ct, "ItemToSelect", _lv.a.bn, _lv.a.bv, 2, null, null, null
                ],
                [-1, 0, ["SwipeEnabled"],
                    [_lv.a.eg], null, "SwipeMenuEnabled", null, _lv.a.dq, 0, _lv.a.b(), null, !1
                ],
                [-1, 0, ["EventInfo"],
                    [_lv.a.bL], _lv.a.bR, "EventInfo", _lv.a.ba, _lv.a.bc, 2, null, null, null
                ],
                [-1, 0, ["ConversationDataConverter"],
                    [_lv.a.ea], null, "DataConverter", null, _lv.a.bb, 1, null, null, null
                ],
                [-1, 0, ["GroupGenerator"],
                    [_lv.a.bE], null, "GroupGenerator", null, _lv.a.bd, 1, null, null, null
                ],
                [-1, 0, ["GroupHeadersEnabled"],
                    [_lv.a.dy], _lv.a.dH, "GroupHeadersEnabled", _lv.a.cT, _lv.a.cV, 2, null, null, !1
                ],
                [-1, 0, ["SortByChangeState"],
                    [_lv.a.cr], null, "SortByChangeState", null, _lv.a.be, 1, null, null, 0
                ],
                [-1, 0, ["CurrentClientDeleteState"],
                    [_lv.a.cf], null, "CurrentClientDeleteState", null, _lv.a.bB, 1, null, null, 0
                ],
                [-1, 0, ["HasRowsLoadedAtTop"],
                    [_lv.a.bM], _lv.a.bS, "HasRowsLoadedAtTop", _lv.a.cF, _lv.a.cG, 2, null, null, !1
                ],
                [-1, 0, ["IsInMultiselectMode"],
                    [_lv.a.dA], _lv.a.dI, "IsInMultiselectMode", _lv.a.y, _lv.a.eq, 2, null, null, !1
                ],
                [-1, 0, ["IsInSelectEverythingMode"],
                    [_lv.a.dB], _lv.a.dJ, "IsInSelectEverythingMode", _lv.a.ep, _lv.a.er, 2, null, null, !1
                ],
                [-1, 0, ["TriggerSelectViewPortItemsCommand"],
                    [_lv.a.eh], _lv.a.ei, "TriggerSelectViewPortItemsCommand", _lv.a.dr, _lv.a.ds, 2, null, null, null
                ]
            ],
            [
                [-1, 0, ["MessageBoxViewModel"],
                    [_lv.a.bP], null, "DataContext", null, _lv.a.t, 1, null, null, null
                ]
            ]
        ]);
        var t = _lv.a.c.childNodes[12].cloneNode(!0);
        var i = new _j.c(t.children[1]);
        i.y("MessageBoxDefaultView");
        var n = new _lv.e(t.children[0], 33, _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.I), _j.b.Instance.a(_j.o), _j.b.Instance.a(_g.a), _j.b.Instance.a(_a.e), _j.b.Instance.a(_a.x), _j.b.Instance.a(_j.cd.$$(_j.t)));
        n.bs = !0;
        n.ch("ConversationListView.Narrow.MailGroupHeaderTemplate");
        n.dl(!0);
        n.bD(!0);
        n.bJ(1);
        n.dc(15);
        n.cF(5);
        n.cA = !0;
        n.dO(!0);
        n.ct = !0;
        n.cy(!0);
        var r = new _b.j(_j.b.Instance.a(_j.cd.$$(_j.t)));
        n.C([r]);
        n.bc(function() {
            var t = _lv.a.c.childNodes[11].cloneNode(!0).childNodes[0];
            var n = new _lv.f(t, _j.b.Instance.a(_b.a), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.e));
            n.U(_j.f.a(["Conversation"], [_lv.a.i], null, "Conversation", null, _lv.a.el, 1)).U(_j.f.a(["ParentListViewModel", "ShowSenderOnTop"], [_lv.a.j, _lv.a.cq], null, "ShowSenderOnTopOption", null, _lv.a.cE, 1, null, null, !1)).U(_j.f.a(["ParentListViewModel", "ShowPreviewText"], [_lv.a.j, _lv.a.I], null, "ShowPreviewTextOption", null, _lv.a.cD, 1, null, null, !1)).U(_j.f.a(["ParentListViewModel", "Folder", "DistinguishedFolderIdName"], [_lv.a.j, _lv.a.cg, _lv.a.bY], null, "DistinguishedFolderIdName", null, _lv.a.cB, 1, null, null, 0));
            n.y("ConversationListItemView");
            return n
        });
        n.y("ConversationListView.Narrow._tida");
        return new _j.a(t, [n, i]).l({
            ListView: n
        })
    }, "", _lv.h, _n.t, function(n) {
        return new _n.t(n, _j.b.Instance.a(_b.d), _j.b.Instance.a(_a.e))
    }, !0, !1, !1, 0, _lv.a.a);
    var f = "MailListItemView._tidl";
    new _j.d(f, function() {
        _lv.a.a[f] === undefined && (_lv.a.a[f] = [
            [
                [-1, 4, null, null, null, "Id", null, _lv.a.h, 0, null, null, null, _n.b.bg()]
            ]
        ]);
        var n = _lv.a.c.childNodes[22].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.i, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 28);
    var u = "MailListItemView._tidm";
    new _j.d(u, function() {
        _lv.a.a[u] === undefined && (_lv.a.a[u] = [
            [
                [-1, 0, ["Item", "Flag", "FlagStatus"],
                    [_lv.a.k, _lv.a.bZ, _lv.a.bX], null, "Id", null, _lv.a.h, 1, _lv.a.X(), 1, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[22].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.i, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 29);
    var o = "MailListItemView._tidn";
    new _j.d(o, function() {
        _lv.a.a[o] === undefined && (_lv.a.a[o] = [
            [
                [-1, 4, null, null, null, "Id", null, _lv.a.h, 0, null, null, null, _n.b.g()]
            ]
        ]);
        var n = _lv.a.c.childNodes[22].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.i, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 30);
    var e = "MailListItemView._tido";
    new _j.d(e, function() {
        _lv.a.a[e] === undefined && (_lv.a.a[e] = [
            [
                [-1, 0, ["Item", "Importance"],
                    [_lv.a.k, _lv.a.dW], null, "Id", null, _lv.a.h, 1, _lv.a.Y(), !1, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[22].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.i, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 31);
    var t = "MailListItemView._tidp";
    new _j.d(t, function() {
        _lv.a.a[t] === undefined && (_lv.a.a[t] = [
            [
                [-1, 0, ["ParentListViewModel", "MasterCategoriesList"],
                    [_lv.a.j, _lv.a.ck], null, "MasterCategoryList", null, _lv.a.bl, 1, null, null, null
                ],
                [-1, 0, ["Item", "Categories"],
                    [_lv.a.k, _lv.a.dV], null, "CategoriesList", null, _lv.a.bk, 1, null, null, null
                ],
                [-1, 0, ["ParentListViewModel", "MaxCategoriesToShow"],
                    [_lv.a.j, _lv.a.cl], null, "MaximumCategoriesToShow", null, _lv.a.bm, 0, null, null, 0
                ]
            ]
        ]);
        var i = _lv.a.c.childNodes[2].cloneNode(!0);
        var n = new _b.u(i.children[0], _j.b.Instance.a(_h.e));
        n.a = "catB catConversationNarrowWide";
        return new _j.a(i, [n])
    }, "", _lv.i, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 32);
    var n = "MailListItemView._tidq";
    new _j.d(n, function() {
        _lv.a.a[n] === undefined && (_lv.a.a[n] = [
            [
                [-1, 0, ["SmallIconImage"],
                    [_lv.a.cd], null, "Id", null, _lv.a.h, 1, null, null, null
                ]
            ]
        ]);
        var t = _lv.a.c.childNodes[22].cloneNode(!0);
        var i = new _fc.d(t.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(t, [i])
    }, "", _lv.i, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 33);
    var r = "MailListItemView._tidr";
    new _j.d(r, function() {
        _lv.a.a[r] === undefined && (_lv.a.a[r] = [
            [
                [-1, 0, ["SmimeTypeImage"],
                    [_lv.a.ce], null, "Id", null, _lv.a.h, 1, null, null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[22].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.i, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a, 34);
    var i = "MailListItemView";
    new _j.d(i, function() {
        _lv.a.a[i] === undefined && (_lv.a.a[i] = [
            [
                [-1, 1, ["AriaLabelValue"],
                    [_lv.a.cv], null, "AriaLabel", null, _lv.a.F, 1, null, null, null
                ],
                [-1, 5, ["ShowPreviewTextOption"],
                    [_lv.a.C], null, "_lv_61", null, null, 1, null, null, null
                ],
                [-1, 5, ["IsClutterView"],
                    [_lv.a.m], null, "_lv_p1", null, null, 1, null, null, null
                ],
                [-1, 5, ["ShowSelectedOrIsTouched"],
                    [_lv.a.bg], null, "ms-bgc-tl:ms-bgc-w", null, null, 1, null, null, null
                ],
                [-1, 5, ["Item", "IsReadValue"],
                    [_lv.a.k, _lv.a.H], null, "_lv_81", null, null, 0, null, null, null
                ],
                [-1, 5, ["ListView", "IsInMultiselectMode"],
                    [_lv.a.u, _lv.a.y], null, "_lv_c1", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 5, ["IsClutterView"],
                    [_lv.a.m], null, "ms-bgc-np", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "ImageId", null, _lv.a.w, 0, null, null, null, _n.b.d()],
                [-1, 4, null, null, null, "CheckedImageId", null, _lv.a.bi, 0, null, null, null, _n.b.c()],
                [-1, 1, ["ListView", "ToggleSelectCommand"],
                    [_lv.a.u, _lv.a.bu], null, "ClickCommand", null, _lv.a.n, 1, null, null, null
                ],
                [-1, 1, ["ShowAsChecked"],
                    [_lv.a.cz], _lv.a.cC, "IsChecked", _lv.a.bh, _lv.a.bj, 2, null, null, !1
                ],
                [-1, 1, ["ListView", "IsInMultiselectMode"],
                    [_lv.a.u, _lv.a.y], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ],
                [-1, 5, ["ShowSelected"],
                    [_lv.a.bf], null, "_lv_b1", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["ListViewItemFirstLineHighlightCss"],
                    [_lv.a.en], null, "CssClass", null, _lv.a.A, 1, null, null, null
                ],
                [-1, 1, ["ListViewItemFirstLineValue"],
                    [_lv.a.cw], null, "Text", null, _lv.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["ShowAsPinned"],
                    [_lv.a.cb], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ],
            [
                [-1, 0, ["Item", "Flag", "FlagStatus"],
                    [_lv.a.k, _lv.a.bZ, _lv.a.bX], null, "IsHidden", null, _lv.a.d, 1, _lv.a.o(), "NotFlagged", !0
                ]
            ],
            [
                [-1, 0, ["TopPropertyIconsToShow"],
                    [_lv.a.s], null, "IsHidden", null, _lv.a.d, 1, new _j.r([_lv.a.p(), _lv.a.b()], [2, null]), null, !0
                ]
            ],
            [
                [-1, 0, ["TopPropertyIconsToShow"],
                    [_lv.a.s], null, "IsHidden", null, _lv.a.d, 1, new _j.r([_lv.a.p(), _lv.a.b()], [1, null]), null, !0
                ]
            ],
            [
                [-1, 0, ["TopPropertyIconsToShow"],
                    [_lv.a.s], null, "IsHidden", null, _lv.a.d, 1, new _j.r([_lv.a.p(), _lv.a.b()], [0, null]), null, !0
                ]
            ],
            [
                [-1, 0, ["SmallIcon"],
                    [_lv.a.cc], null, "IsHidden", null, _lv.a.d, 1, _lv.a.o(), -1, !0
                ]
            ],
            [
                [-1, 0, ["Item", "IsSmimeClass"],
                    [_lv.a.k, _lv.a.dX], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ],
            [
                [-1, 5, ["Item", "IsReadValue"],
                    [_lv.a.k, _lv.a.H], null, "ms-fcl-tp ms-fwt-sb", null, null, 0, _lv.a.b(), null, null
                ],
                [-1, 5, ["IsClutterView"],
                    [_lv.a.m], null, "ms-fcl-np", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["ListViewItemSecondLineHighlightCss"],
                    [_lv.a.cx], null, "CssClass", null, _lv.a.A, 1, null, null, null
                ],
                [-1, 1, ["ListViewItemSecondLineValue"],
                    [_lv.a.cy], null, "Text", null, _lv.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["DateTimeToDisplay"],
                    [_lv.a.ca], null, "Text", null, _lv.a.e, 1, null, null, null
                ],
                [-1, 5, ["Item", "IsReadValue"],
                    [_lv.a.k, _lv.a.H], null, "ms-fcl-tp ms-fwt-sb", null, null, 0, _lv.a.b(), null, null
                ],
                [-1, 5, ["IsClutterView"],
                    [_lv.a.m], null, "ms-fcl-np", null, null, 1, null, null, null
                ]
            ],
            [
                [-1, 1, ["ShowPreviewTextOption"],
                    [_lv.a.C], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ],
                [-1, 0, ["Item", "Preview"],
                    [_lv.a.k, _lv.a.dY], null, "Text", null, _lv.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Id", null, _lv.a.h, 0, null, null, null, _b.l.h()],
                [-1, 1, ["SwipeChecked"],
                    [_lv.a.cA], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[23].cloneNode(!0);
        var p = new _fc.d(_j.a.a(n, [0, 3]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var v = new _fc.a(_j.a.a(n, [0, 2, 2, 0, 0]));
        var a = new _fc.a(_j.a.a(n, [0, 2, 1, 1]));
        var b = new _fc.a(_j.a.a(n, [0, 2, 1, 0, 0]));
        var w = new _j.i(_j.a.a(n, [0, 2, 1]));
        var l = new _j.c(_j.a.a(n, [0, 2, 0, 1, 6]));
        l.y("MailListItemView._tidr");
        var c = new _j.c(_j.a.a(n, [0, 2, 0, 1, 5]));
        c.y("MailListItemView._tidq");
        var f = new _j.c(_j.a.a(n, [0, 2, 0, 1, 4]));
        f.y("MailListItemView._tidp");
        var h = new _j.c(_j.a.a(n, [0, 2, 0, 1, 3]));
        h.y("MailListItemView._tido");
        var u = new _j.c(_j.a.a(n, [0, 2, 0, 1, 2]));
        u.y("MailListItemView._tidn");
        var e = new _j.c(_j.a.a(n, [0, 2, 0, 1, 1]));
        e.y("MailListItemView._tidm");
        var s = new _j.c(_j.a.a(n, [0, 2, 0, 1, 0]));
        s.y("MailListItemView._tidl");
        var y = new _fc.a(_j.a.a(n, [0, 2, 0, 0, 0]));
        var r = new _fc.j(_j.a.a(n, [0, 1]));
        r.N(!1);
        r.A(-1);
        var o = new _j.i(_j.a.a(n, [0, 0]));
        var t = new _j.i(n.children[0]);
        t.A(-1);
        t.D(13);
        return new _j.a(n, [t, o, r, y, s, e, u, h, f, c, l, w, b, a, v, p]).l({
            MainItemContainer: t,
            ReadBar: o
        }).c(t)
    }, "", _lv.i, _lv.o, function(n) {
        return new _lv.o(n, _j.b.Instance.a(_b.a), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.e))
    }, !1, !1, !1, 0, _lv.a.a, 35);
    var s = "MailListView.Narrow._tids._tidt";
    new _j.d(s, function() {
        _lv.a.a[s] === undefined && (_lv.a.a[s] = [
            [
                [-1, 4, null, null, null, "ImageId", null, _lv.a.w, 0, null, null, null, _n.b.R()],
                [-1, 0, ["LoadMoreCommand"],
                    [_lv.a.B], null, "ClickCommand", null, _lv.a.n, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _lv.a.Z, 0, null, null, null, _u.R.Hd],
                [-1, 0, ["LoadMoreCommand"],
                    [_lv.a.B], null, "ClickCommand", null, _lv.a.n, 1, null, null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[24].cloneNode(!0);
        var i = new _fc.b(n.children[1]);
        var t = new _fc.b(n.children[0]);
        return new _j.a(n, [t, i])
    }, "", _lv.j, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a);
    var y = "MailListView.Narrow._tids._tidu";
    new _j.d(y, function() {
        _lv.a.a[y] === undefined && (_lv.a.a[y] = [
            [
                [-1, 4, null, null, null, "Text", null, _lv.a.e, 0, null, null, null, _u.R.PA],
                [-1, 0, ["ShowInfoMessageType"],
                    [_lv.a.r], null, "IsHidden", null, _lv.a.d, 1, new _j.r([_lv.a.o(), _lv.a.b()], [1, null]), null, !0
                ]
            ],
            [
                [-1, 0, ["ShowInfoMessageType"],
                    [_lv.a.r], null, "Text", null, _lv.a.e, 1, _lv.a.z(), null, null
                ],
                [-1, 5, ["ShowInfoMessage"],
                    [_lv.a.v], null, "_lv_D1", null, null, 0, _lv.a.b(), null, null
                ],
                [-1, 5, ["ShowInfoMessageType"],
                    [_lv.a.r], null, "_lv_B1", null, null, 0, _lv.a.o(), 13, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[25].cloneNode(!0);
        var i = new _fc.a(n.children[1]);
        var t = new _fc.a(n.children[0]);
        return new _j.a(n, [t, i])
    }, "", _lv.j, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _lv.a.a);
    var v = "MailListView.Narrow._tids._tidv";
    new _j.d(v, function() {
        _lv.a.a[v] === undefined && (_lv.a.a[v] = [
            [
                [-1, 0, ["SwipeMenu"],
                    [_lv.a.cs], null, "DataContext", null, _lv.a.t, 1, null, null, null
                ]
            ]
        ]);
        var t = _lv.a.c.childNodes[26].cloneNode(!0);
        var n = new _b.X(t.children[0]);
        return new _j.a(t, [n]).l({
            SwipeMenu: n
        })
    }, "", _lv.j, _b.K, function(n) {
        return new _b.K(n)
    }, !1, !0, !1, 0, _lv.a.a);
    var w = "MailListView.Narrow._tids";
    new _j.d(w, function() {
        _lv.a.a[w] === undefined && (_lv.a.a[w] = [null, [
                [-1, 0, ["FilterBarViewModel"],
                    [_lv.a.dx], null, "DataContext", null, _lv.a.t, 1, null, null, null
                ],
                [0, 0, ["IsHidden"],
                    [_lv.a.du], null, "IsHidden", null, _lv.a.d, 1, null, null, !0
                ],
                [0, 5, ["IsAndroid"],
                    [_lv.a.dt], null, "_lv_E1:_lv_F1", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 0, ["NativeAdsContainerHeight"],
                    [_lv.a.dF], _lv.a.dM, "Height", _lv.a.dP, _lv.a.dQ, 2, null, null, 0
                ],
                [-1, 0, ["ShouldShowMessageListAds"],
                    [_lv.a.G], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ],
            [
                [-1, 0, ["ShouldShowMessageListAds"],
                    [_lv.a.G], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ],
                [-1, 5, ["MessageListAdsViewModel"],
                    [_lv.a.cm], null, "hidden", null, null, 0, _lv.a.cK(), null, null
                ]
            ],
            [
                [-1, 1, ["TemplatedParent", "DataContext", "ShouldShowMessageListAds"],
                    [_lv.a.da, _lv.a.cZ, _lv.a.ef], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ],
                [-1, 0, ["MessageListAdsViewModel"],
                    [_lv.a.cm], null, "DataContext", null, _lv.a.t, 1, null, null, null
                ]
            ],
            [
                [-1, 5, ["ShouldShowMessageListAds"],
                    [_lv.a.G], null, "hidden", null, null, 0, _lv.a.b(), null, null
                ]
            ],
            [
                [-1, 5, ["ShowInfoMessage"],
                    [_lv.a.v], null, "_lv_D1", null, null, 0, null, null, null
                ]
            ], null, null, [
                [-1, 0, ["ShowLoadMore"],
                    [_lv.a.cp], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _lv.a.e, 0, null, null, null, _u.R.Si],
                [-1, 5, ["IsShowSearchComplete"],
                    [_lv.a.ch], null, "_lv_D1", null, null, 0, _lv.a.b(), null, null
                ]
            ],
            [
                [-1, 0, ["ShowInfoMessage"],
                    [_lv.a.v], null, "IsHidden", null, _lv.a.d, 1, _lv.a.b(), null, !0
                ]
            ],
            [
                [-1, 0, ["ShowInfoMessageType"],
                    [_lv.a.r], null, "AriaLabel", null, _lv.a.F, 1, _lv.a.z(), null, null
                ],
                [-1, 0, ["ShowInfoMessageType"],
                    [_lv.a.r], null, "Text", null, _lv.a.db, 1, _lv.a.z(), null, null
                ]
            ],
            [
                [-1, 1, ["ShouldHideSwipeMenu"],
                    [_lv.a.br], null, "IsHidden", null, _lv.a.d, 1, null, null, !0
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[27].cloneNode(!0);
        var u = new _b.K(n.children[1]);
        u.y("MailListView.Narrow._tids._tidv");
        var y = new _b.W(_j.a.a(n, [0, 5]), _j.b.Instance.a(_j.j));
        var o = new _j.c(_j.a.a(n, [0, 4]));
        o.y("MailListView.Narrow._tids._tidu");
        var l = new _fc.a(_j.a.a(n, [0, 3, 0, 2]));
        var s = new _j.c(_j.a.a(n, [0, 3, 0, 1]));
        s.y("MailListView.Narrow._tids._tidt");
        var c = new _fce.d(_j.a.a(n, [0, 3, 0, 0]));
        var h = new _j.i(_j.a.a(n, [0, 3, 0]));
        var f = new _j.i(_j.a.a(n, [0, 3]));
        var v = new _j.i(_j.a.a(n, [0, 2]));
        var i = new _j.c(_j.a.a(n, [0, 1, 1]));
        i.y("MessageListAdsListView");
        i.L(!0);
        var e = new _j.c(_j.a.a(n, [0, 1, 0]));
        e.y("MessageListAdsPreloadingView");
        var a = new _n.bd(_j.a.a(n, [0, 1]));
        var r = new _j.c(_j.a.a(n, [0, 0]));
        r.y("FilterBarView");
        var t = new _fce.g(n.children[0], _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
        t.b = !0;
        return new _j.a(n, [t, r, a, e, i, v, f, h, c, s, l, o, y, u]).l({
            ScrollRegion: t,
            PullDownContainer: r,
            ElementsCanvas: f,
            ListPanelContainer: h,
            ListPanel: c,
            ListViewSwipeMenuContainer: u
        })
    }, "", _lv.j, _lv.e, function(n) {
        return new _lv.e(n, 33, _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.I), _j.b.Instance.a(_j.o), _j.b.Instance.a(_g.a), _j.b.Instance.a(_a.e), _j.b.Instance.a(_a.x), _j.b.Instance.a(_j.cd.$$(_j.t)))
    }, !1, !0, !1, 0, _lv.a.a);
    var p = "MailListView.Narrow.MailGroupHeaderTemplate";
    new _j.d(p, function() {
        _lv.a.a[p] === undefined && (_lv.a.a[p] = [
            [
                [-1, 0, ["Text"],
                    [_lv.a.bV], null, "Text", null, _lv.a.e, 1, null, null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[28].cloneNode(!0);
        var t = new _fc.a(_j.a.a(n, [0, 0]));
        return new _j.a(n, [t])
    }, "", _y.N, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _lv.a.a);
    var c = "MailListView.Narrow.MultiSelectBar._tidw";
    new _j.d(c, function() {
        _lv.a.a[c] === undefined && (_lv.a.a[c] = [
            [
                [-1, 4, null, null, null, "Id", null, _lv.a.h, 0, null, null, null, _n.b.cR()]
            ]
        ]);
        var n = _lv.a.c.childNodes[9].cloneNode(!0);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t])
    }, "", _lv.j, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _lv.a.a);
    var h = "MailListView.Narrow.MultiSelectBar";
    new _j.d(h, function() {
        _lv.a.a[h] === undefined && (_lv.a.a[h] = [
            [
                [-1, 0, ["SelectedItemsCountString"],
                    [_lv.a.fg], null, "Text", null, _lv.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["CancelMultiSelectModeInTouchCommand"],
                    [_lv.a.dw], null, "ClickCommand", null, _lv.a.n, 1, null, null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[29].cloneNode(!0);
        var t = new _fc.b(_j.a.a(n, [0, 1]));
        t.y("MailListView.Narrow.MultiSelectBar._tidw");
        var i = new _fc.a(_j.a.a(n, [0, 0]));
        return new _j.a(n, [i, t])
    }, "", _lv.j, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _lv.a.a);
    var a = "MailListView.Narrow";
    new _j.d(a, function() {
        _lv.a.a[a] === undefined && (_lv.a.a[a] = [
            [
                [-1, 0, ["ResetListViewRowHeight"],
                    [_lv.a.cn], _lv.a.cu, "NormalRowHeight", _lv.a.bA, _lv.a.bC, 2, null, null, 0
                ],
                [-1, 0, ["Table"],
                    [_lv.a.bI], null, "TableView", null, _lv.a.bD, 1, null, null, null
                ],
                [-1, 0, ["SelectionMode"],
                    [_lv.a.bH], null, "SelectionMode", null, _lv.a.by, 1, null, null, 0
                ],
                [-1, 0, ["SelectionState"],
                    [_lv.a.bQ], _lv.a.bT, "SelectionState", _lv.a.bq, _lv.a.bz, 2, null, null, 0
                ],
                [-1, 0, ["SelectedItem"],
                    [_lv.a.bF], _lv.a.bJ, "SelectedItem", _lv.a.bo, _lv.a.bw, 2, null, null, null
                ],
                [-1, 0, ["SelectedItems"],
                    [_lv.a.bG], _lv.a.bK, "SelectedItems", _lv.a.bp, _lv.a.bx, 2, null, null, null
                ],
                [-1, 0, ["ItemToSelect"],
                    [_lv.a.ci], _lv.a.ct, "ItemToSelect", _lv.a.bn, _lv.a.bv, 2, null, null, null
                ],
                [-1, 0, ["SwipeEnabled"],
                    [_lv.a.eg], null, "SwipeMenuEnabled", null, _lv.a.dq, 0, _lv.a.b(), null, !1
                ],
                [-1, 0, ["EventInfo"],
                    [_lv.a.bL], _lv.a.bR, "EventInfo", _lv.a.ba, _lv.a.bc, 2, null, null, null
                ],
                [-1, 0, ["ItemDataConverter"],
                    [_lv.a.ej], null, "DataConverter", null, _lv.a.bb, 1, null, null, null
                ],
                [-1, 0, ["GroupGenerator"],
                    [_lv.a.bE], null, "GroupGenerator", null, _lv.a.bd, 1, null, null, null
                ],
                [-1, 0, ["GroupHeadersEnabled"],
                    [_lv.a.dy], _lv.a.dH, "GroupHeadersEnabled", _lv.a.cT, _lv.a.cV, 2, null, null, !1
                ],
                [-1, 0, ["SortByChangeState"],
                    [_lv.a.cr], null, "SortByChangeState", null, _lv.a.be, 1, null, null, 0
                ],
                [-1, 0, ["CurrentClientDeleteState"],
                    [_lv.a.cf], null, "CurrentClientDeleteState", null, _lv.a.bB, 1, null, null, 0
                ],
                [-1, 0, ["HasRowsLoadedAtTop"],
                    [_lv.a.bM], _lv.a.bS, "HasRowsLoadedAtTop", _lv.a.cF, _lv.a.cG, 2, null, null, !1
                ],
                [-1, 0, ["IsInMultiselectMode"],
                    [_lv.a.dA], _lv.a.dI, "IsInMultiselectMode", _lv.a.y, _lv.a.eq, 2, null, null, !1
                ],
                [-1, 0, ["IsInSelectEverythingMode"],
                    [_lv.a.dB], _lv.a.dJ, "IsInSelectEverythingMode", _lv.a.ep, _lv.a.er, 2, null, null, !1
                ],
                [-1, 0, ["TriggerSelectViewPortItemsCommand"],
                    [_lv.a.eh], _lv.a.ei, "TriggerSelectViewPortItemsCommand", _lv.a.dr, _lv.a.ds, 2, null, null, null
                ]
            ],
            [
                [-1, 0, ["MessageBoxViewModel"],
                    [_lv.a.bP], null, "DataContext", null, _lv.a.t, 1, null, null, null
                ]
            ]
        ]);
        var t = _lv.a.c.childNodes[30].cloneNode(!0);
        var i = new _j.c(t.children[1]);
        i.y("MessageBoxDefaultView");
        var n = new _lv.e(t.children[0], 33, _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.I), _j.b.Instance.a(_j.o), _j.b.Instance.a(_g.a), _j.b.Instance.a(_a.e), _j.b.Instance.a(_a.x), _j.b.Instance.a(_j.cd.$$(_j.t)));
        n.bs = !0;
        n.ch("MailListView.Narrow.MailGroupHeaderTemplate");
        n.dl(!0);
        n.bD(!0);
        n.bJ(1);
        n.dc(15);
        n.cF(5);
        n.cA = !0;
        n.dO(!0);
        n.ct = !0;
        n.cy(!0);
        var r = new _b.j(_j.b.Instance.a(_j.cd.$$(_j.t)));
        n.C([r]);
        n.bc(function() {
            var t = _lv.a.c.childNodes[11].cloneNode(!0).childNodes[0];
            var n = new _lv.o(t, _j.b.Instance.a(_b.a), _j.b.Instance.a(_y.a), _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.e));
            n.U(_j.f.a(["Item"], [_lv.a.k], null, "Item", null, _lv.a.eo, 1)).U(_j.f.a(["ParentListViewModel", "ShowSenderOnTop"], [_lv.a.j, _lv.a.cq], null, "ShowSenderOnTopOption", null, _lv.a.cE, 1, null, null, !1)).U(_j.f.a(["ParentListViewModel", "ShowPreviewText"], [_lv.a.j, _lv.a.I], null, "ShowPreviewTextOption", null, _lv.a.cD, 1, null, null, !1)).U(_j.f.a(["ParentListViewModel", "Folder", "DistinguishedFolderIdName"], [_lv.a.j, _lv.a.cg, _lv.a.bY], null, "DistinguishedFolderIdName", null, _lv.a.cB, 1, null, null, 0));
            n.y("MailListItemView");
            return n
        });
        n.y("MailListView.Narrow._tids");
        return new _j.a(t, [n, i]).l({
            ListView: n
        })
    }, "", _lv.j, _n.t, function(n) {
        return new _n.t(n, _j.b.Instance.a(_b.d), _j.b.Instance.a(_a.e))
    }, !0, !1, !1, 0, _lv.a.a);
    var yt = "MessageListAdsPreloadingView.Narrow";
    new _j.d(yt, function() {
        var n = _lv.a.c.childNodes[38].cloneNode(!0);
        return new _j.a(n, [])
    }, "", Object, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _lv.a.a);
    var l = "MailSwipeBanner.Narrow";
    new _j.d(l, function() {
        _lv.a.a[l] === undefined && (_lv.a.a[l] = [
            [
                [-1, 5, ["ShowPreviewText"],
                    [_lv.a.I], null, "_lv_c2", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 5, ["RightSwipeActionViewModel", "IsHidden"],
                    [_lv.a.co, _lv.a.dN], null, "hiddenImportant", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 5, ["RightSwipeActionViewModel", "Image"],
                    [_lv.a.co, _lv.a.bU], null, "hidden", null, null, 0, _lv.a.cL(), null, null
                ]
            ],
            [
                [-1, 0, ["RightSwipeActionViewModel", "Image"],
                    [_lv.a.co, _lv.a.bU], null, "Id", null, _lv.a.h, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["RightSwipeActionViewModel", "Text"],
                    [_lv.a.co, _lv.a.dO], null, "Text", null, _lv.a.e, 1, null, null, null
                ]
            ],
            [
                [-1, 5, ["LeftSwipeActionViewModel", "IsHidden"],
                    [_lv.a.cj, _lv.a.dN], null, "hiddenImportant", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 5, ["LeftSwipeActionViewModel", "Image"],
                    [_lv.a.cj, _lv.a.bU], null, "hidden", null, null, 0, _lv.a.cL(), null, null
                ]
            ],
            [
                [-1, 0, ["LeftSwipeActionViewModel", "Image"],
                    [_lv.a.cj, _lv.a.bU], null, "Id", null, _lv.a.h, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["LeftSwipeActionViewModel", "Text"],
                    [_lv.a.cj, _lv.a.dO], null, "Text", null, _lv.a.e, 1, null, null, null
                ]
            ]
        ]);
        var n = _lv.a.c.childNodes[39].cloneNode(!0);
        var o = new _fc.a(_j.a.a(n, [0, 1, 1]));
        var e = new _fc.d(_j.a.a(n, [0, 1, 0, 0]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var h = new _j.i(_j.a.a(n, [0, 1, 0]));
        var s = new _j.i(_j.a.a(n, [0, 1]));
        var f = new _fc.a(_j.a.a(n, [0, 0, 1]));
        var i = new _fc.d(_j.a.a(n, [0, 0, 0, 0]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        var t = new _j.i(_j.a.a(n, [0, 0, 0]));
        var u = new _j.i(_j.a.a(n, [0, 0]));
        var r = new _j.i(n.children[0]);
        return new _j.a(n, [r, u, t, i, f, s, h, e, o])
    }, "", _lv.b, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _lv.a.a)
};
_lv.x.registerClass("_lv.x", _b.cj);
_lv.D.load();
Type.registerNamespace("_ms");

function MobileShellComponent() {}
MobileShellComponent.$$cctor = function() {
    _a.t.a().a(MobileShellComponent)
};
MobileShellComponent.prototype = {
    b: function(n, t, i) {
        var h = this;
        n.b(_ms.e, function() {
            return new _ms.e(n.a(_g.a), n.d(_a.dc))
        }).a();
        var s = this;
        n.b(_ms.h, function() {
            return new _ms.h(window.document.createElement("div"), n.a(_j.j), n.a(_n.P), n.a(_y.a), n.a(_b.Q), n.a(_j.o), n.a(_a.e))
        });
        var l = this;
        n.b(_ms.d, function() {
            return new _ms.d(n.a(_a.S), n.a(_j.o), n.a(_a.e), n.a(_g.h))
        }).b(_y.bY).a();
        var c = this;
        n.b(_ms.q, function() {
            return new _ms.q(n.a(_j.o))
        }).b(_y.r).a();
        var o = this;
        n.b(_ms.r, function() {
            return new _ms.r
        }).b(_y.hp).a();
        var u = this;
        n.b(_ms.k, function() {
            return new _ms.k
        }).b(IMailModuleRevealMenuViewModel);
        var r = this;
        n.b(_ms.l, function() {
            return new _ms.l
        }).b(IPeopleModuleRevealMenuViewModel);
        var e = this;
        n.b(_ms.i, function() {
            return new _ms.i
        }).b(ICalendarModuleRevealMenuViewModel);
        var f = this;
        n.b(_ms.n, function() {
            return new _ms.n(n.a(_j.j), n.a(_a.Z), n.a(_h.s), n.a(_g.a), n.c(_bc.f), n.a(_j.o), n.a(_a.e), n.a(_a.E), n.d(_y.K), n.a(_ms.e))
        })
    },
    a: function() {
        return null
    }
};
_ms.i = function() {
    _ms.i.initializeBase(this)
};
_ms.i.prototype = {
    b: null,
    a: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.eJ("CalendarShellViewModel")
        }
        return n
    }
};
_ms.f = function(n, t) {
    this.D = Function.createDelegate(this, this.O);
    this.C = Function.createDelegate(this, this.N);
    _ms.f.initializeBase(this);
    this.o = new _fm.e(new Array(0));
    this.k(n);
    this.q = t;
    this.t = this.q.e();
    this.q.a() && (this.y = new _j.g(this.C, _a.a.D));
    if (this.m && this.m.length > 0) {
        this.h(this.m[0].a);
        this.s = this.m[0].a;
        var i = this;
        this.w = new _j.g(function() {
            i.h(i.s)
        }, _a.a.dw)
    }
};
_ms.f.prototype = {
    y: null,
    w: null,
    p: null,
    o: null,
    r: null,
    m: null,
    n: null,
    q: null,
    z: null,
    u: !1,
    t: !1,
    x: !1,
    s: null,
    v: !1,
    G: function() {
        return !0
    },
    E: function() {
        return !0
    },
    g: function() {
        return 0
    },
    a: function(n) {
        return n
    },
    H: function() {
        return null
    },
    l: function(n) {
        if (this.v !== n) {
            this.v = n;
            this.by("IsPinnedFilterOptionHidden")
        }
        return n
    },
    b: function() {
        return this.o
    },
    k: function(n) {
        if (this.m !== n) {
            this.m = n;
            this.Q();
            this.by("FilterOptions")
        }
        return n
    },
    d: function() {
        return this.n
    },
    h: function(n) {
        if (this.n !== n) {
            this.n = n;
            this.K();
            this.by("CurrentFilter")
        }
        return n
    },
    P: function(n) {
        if (this.r !== n) {
            this.r = n;
            this.by("FilterButtonLabel")
        }
        return n
    },
    M: function() {
        this.z = this.q.a() ? _y.b.x() : _y.b.d();
        return this.z
    },
    f: function() {
        return this.u
    },
    i: function(n) {
        if (this.u !== n) {
            this.u = n;
            this.by("IsHidden")
        }
        return n
    },
    e: function() {
        return this.t
    },
    c: function(n) {
        this.p = n;
        this.p.y(new _j.g(this.D, _a.a.D))
    },
    j: function() {
        this.n = this.s;
        this.K()
    },
    N: function() {
        if (this.p) {
            this.i(!0);
            this.p.k().b && this.p.k().a()
        }
    },
    O: function() {
        this.i(!1)
    },
    Q: function() {
        this.o.p.g();
        if (this.m) {
            for (var t = 0; t < this.m.length; t++) {
                var n = this.m[t];
                this.o.p.a(new _fm.g(n.b, null, new _j.g(this.L(n), _a.a.dw), !1, !1, null, null, n.a))
            }
            this.I()
        }
    },
    I: function() {
        for (var i = -1, t = 0; t < this.o.p.x.length; t++) {
            var n = this.o.p.x[t];
            if (n.m === this.n) {
                n.i(!0);
                this.P(n.k);
                i = t
            } else n.i(!1)
        }
        this.x = !!i
    },
    L: function(n) {
        var t = this;
        return function() {
            t.h(n.a)
        }
    },
    K: function() {
        this.I();
        this.bX(["IsFilterOptionHidden", "IsPinnedFilterOptionHidden", "SelectedFilterImage", "IsContextMenuEnabled"])
    }
};
_ms.g = function() {};
_ms.g.c = function() {
    return _fm.b.a(_fm.a.g, _fm.WebfontSizes.a.e)
};
_ms.g.b = function() {
    return _fm.b.a(_fm.a.eA, _fm.WebfontSizes.a.b)
};
_ms.g.a = function() {
    return _fm.b.a(_fm.a.bl, _fm.WebfontSizes.a.e)
};
_ms.g.d = function() {
    return _fm.b.a(_fm.a.M, _fm.WebfontSizes.a.e)
};
_ms.g.e = function() {
    return _fm.b.a(_fm.a.ba, _fm.WebfontSizes.a.d)
};
_ms.g.f = function() {
    return _fm.b.a(_fm.a.fl, _fm.WebfontSizes.a.c)
};
_ms.j = function(n, t) {
    _ms.j.initializeBase(this, [n, t]);
    var i = this;
    this.B = new _j.g(function() {
        i.h("Pinned")
    }, _a.a.dw)
};
_ms.j.prototype = {
    B: null,
    A: 0,
    G: function() {
        return !this.v || this.n === "Pinned"
    },
    E: function() {
        return this.n !== "Pinned"
    },
    g: function() {
        return this.A
    },
    a: function(n) {
        this.A = n;
        this.by("NumberOfPinnedItemsInCurrentFolder");
        return n
    },
    H: function() {
        var n = null;
        var t = this.n;
        switch (t) {
            case "Flagged":
                n = _ms.g.a();
                break;
            case "Unread":
                n = _ms.g.c();
                break;
            case "Pinned":
                n = _ms.g.d();
                break
        }
        return n
    }
};
_ms.k = function() {
    _ms.k.initializeBase(this)
};
_ms.k.prototype = {
    b: null,
    a: function(n) {
        this.b = n;
        return n
    }
};
_ms.p = function() {
    _ms.p.initializeBase(this, [1, "OWAFeedback"]);
    this.a.ci = _ms.p.a()
};
_ms.p.a = function() {
    var t = +new Date;
    var n = _a.w.d();
    return n + "_" + t
};
_ms.e = function(n, t) {
    _ms.e.initializeBase(this);
    this.a = n;
    this.b = t
};
_ms.e.prototype = {
    a: null,
    b: null,
    c: function(n) {
        var t = this;
        this.b.a(function(i) {
            var u = new _ms.p;
            var o = i.a(!1);
            if (o) {
                var r = i.a(!1).content;
                r = r.replace(new RegExp("\r\n", "g"), "");
                u.a.cl = r
            }
            _a.A.b.a(u);
            var s = u.a.ci;
            var f = t.a.c().bH.TenantGuid + "_domainName_" + t.a.c().bH.OrganizationDomain;
            var e = t.d();
            n(e + "&CorrelationID=" + s + "&Tenant=" + f)
        })
    },
    d: function() {
        var t = "en-us";
        var i = _ms.e.a[t];
        var n = this.a.c().bH.UserCulture.toLowerCase();
        n in _ms.e.a && (i = _ms.e.a[n]);
        return this.a.E ? this.a.c().bH.UserVoiceUrl : "https://outlook.uservoice.com/forums/313228"
    }
};
_ms.l = function() {
    _ms.l.initializeBase(this)
};
_ms.l.prototype = {
    b: null,
    a: function(n) {
        if (this.b !== n) {
            this.b = n;
            this.eJ("FilterListViewModel")
        }
        return n
    }
};
_ms.s = function(n, t, i, r) {
    this.j = Function.createDelegate(this, this.o);
    this.i = Function.createDelegate(this, this.k);
    _ms.s.initializeBase(this, [n]);
    this.e = t.g();
    this.c = i.a();
    this.z.style[_b.o.a()] = _b.o.c(0, 0);
    this.z.style[_b.o.d()] = _b.o.a() + " " + "400" + "ms";
    this.f = r
};
_ms.s.prototype = {
    g: null,
    h: null,
    d: !1,
    a: null,
    b: null,
    e: !1,
    c: !1,
    f: null,
    p: function(n) {
        if (this.g !== n) {
            this.g = n;
            this.m();
            this.by("SubpanelTemplateId")
        }
        return n
    },
    l: function(n) {
        if (this.d !== n) {
            this.d = n;
            this.m();
            this.by("IsSubpanelVisible")
        }
        return n
    },
    G: function() {
        _j.i.prototype.G.call(this);
        this.a && this.a.bm()
    },
    M: function() {
        _j.i.prototype.M.call(this);
        this.a && this.a.bx()
    },
    bz: function() {
        this.a && this.a.dispose();
        if (this.b) {
            this.b.bj("click", ".RevealPanel");
            this.b.dispose()
        }
        _j.i.prototype.bz.call(this)
    },
    m: function() {
        if (this.d) {
            var n = this;
            this.f.l(function() {
                n.a || n.n();
                n.a.y(n.g);
                n.h && n.a.ba(n.h);
                n.q()
            })
        } else this.a && this.k()
    },
    q: function() {
        this.a.K(!1);
        this.b.K(!1);
        if (this.c) {
            var n = this.z.offsetWidth - 56;
            this.e && (n = -n);
            this.z.style[_b.o.a()] = _b.o.c(n, 0);
            this.b.z.style.opacity = "0.4";
            var t = this;
            this.bf(_fce.u.b(), function(n) {
                t.bj(_fce.u.b(), ".RevealPanel")
            }, ".RevealPanel")
        }
    },
    k: function() {
        if (this.c) {
            this.z.style[_b.o.a()] = _b.o.c(0, 0);
            this.b.z.style.opacity = "0";
            var n = this;
            this.bf(_fce.u.b(), function(t) {
                n.b.K(!0);
                n.a.K(!0);
                n.bj(_fce.u.b(), ".RevealPanel")
            }, ".RevealPanel")
        } else {
            this.b.K(!0);
            this.a.K(!0)
        }
    },
    n: function() {
        var t = document.createElement("div");
        this.c ? this.z.parentNode.insertBefore(t, this.z) : this.z.nextSibling ? this.z.parentNode.insertBefore(t, this.z.nextSibling) : this.z.parentNode.appendChild(t);
        this.a = this.f.m(t, this.i);
        this.a.K(!0);
        this.a.fe(this);
        this.a.bm();
        t.style.position = "absolute";
        t.style.top = this.z.offsetTop.toString() + "px";
        var i = this.z.offsetLeft + (this.e ? 56 : 0);
        t.style.left = i.toString() + "px";
        t.style.height = this.z.offsetHeight.toString() + "px";
        var r = this.z.offsetWidth - 56;
        t.style.width = r.toString() + "px";
        t.style.backgroundColor = "#fff";
        var n = document.createElement("div");
        this.z.appendChild(n);
        n.style.zIndex = 1005;
        n.style.position = "absolute";
        n.style.left = "0px";
        n.style.right = "0px";
        n.style.top = "0px";
        n.style.bottom = "0px";
        if (this.c) {
            n.style.opacity = "0";
            n.style[_b.o.d()] = "opacity 400ms"
        } else {
            n.style.backgroundColor = "#333";
            n.style.opacity = "0.4"
        }
        this.b = new _j.i(n);
        this.b.K(!0);
        this.b.bf("click", this.j, ".RevealPanel")
    },
    o: function(n) {
        this.l(!1)
    }
};
_ms.h = function(n, t, i, r, u, f, e) {
    this.f = Function.createDelegate(this, this.m);
    this.k = Function.createDelegate(this, this.p);
    _ms.h.initializeBase(this, [n]);
    _a.c.b(i, "animationProvider");
    _a.c.b(r, "owaShell");
    this.y("PrimaryView");
    this.l = t;
    this.g = i;
    this.n = r;
    this.h = u;
    this.e = f;
    this.b = this.e.a();
    this.j = this.e.c();
    this.i = e.a().jR().Enabled;
    n.style.overflowX = "hidden"
};
_ms.h.prototype = {
    g: null,
    l: null,
    h: null,
    d: null,
    n: null,
    e: null,
    c: null,
    b: !1,
    j: !1,
    i: !1,
    u: function() {
        var n = this.g;
        return n.a || (n.a = Function.createDelegate(n, n.b))
    },
    t: function() {
        return this.b ? 44 : 56
    },
    s: function() {
        return this.b ? _u.R.DX : _u.R.CJ
    },
    r: function() {
        return this.i ? !this.j : !0
    },
    o: function(n) {
        if (this.d !== n) {
            this.d = n;
            this.by("ModuleConductorTop")
        }
        return n
    },
    P: function() {
        var n = _j.n.b(_a.a.cB, 2, "PrimaryNarrowView.cs:OnFirstActivate");
        _n.bU.prototype.P.call(this);
        _j.n.a(n)
    },
    Y: function() {
        this.a && this.a.g().rpcl("Top", this.f);
        _n.bU.prototype.Y.call(this);
        this.a && this.a.g().apcl("Top", this.f);
        this.m(null, "")
    },
    H: function() {
        _j.c.prototype.H.call(this);
        var n = this.B.a("PrimaryContainer");
        this.c && this.c.dispose();
        this.c = this.h.a(n.z)
    },
    m: function(n, t) {
        this.a && _y.C.isInstanceOfType(this.a.g().a()) ? this.o(this.a.g().a()) : this.o(null)
    },
    p: function(n, t) {
        return !(_y.Q.isInstanceOfType(n) && _y.d.isInstanceOfType(t)) && !(_y.g.isInstanceOfType(n) && _y.d.isInstanceOfType(t))
    }
};
_ms.m = function(n, t, i, r, u, f, e, o, s, h, c, l) {
    this.q = Function.createDelegate(this, this.v);
    this.r = Function.createDelegate(this, this.x);
    this.u = Function.createDelegate(this, this.bd);
    this.s = Function.createDelegate(this, this.E);
    this.t = Function.createDelegate(this, this.bc);
    _ms.m.initializeBase(this, [n]);
    this.a = t;
    this.e = i;
    this.i = r;
    this.c = o;
    this.w(f, e);
    this.l = l;
    this.h = this.c.e();
    this.f = !s.a().r().Enabled;
    this.p = h.h(_a.cv, 64) || s.a().cy().Enabled;
    this.g = u;
    this.k = new _j.g(this.t, _a.a.cW);
    this.j = new _j.g(this.s, _a.a.cW);
    this.o = new _j.g(this.u, _a.a.cW);
    this.n = new _j.g(this.r, _a.a.cW);
    this.m = new _j.g(this.q, _a.a.cW);
    var a = this;
    c.a(function(n) {
        (n.b() || n.c()) && (a.d = n.a())
    })
};
_ms.m.prototype = {
    a: null,
    e: null,
    i: null,
    k: null,
    j: null,
    o: null,
    n: null,
    m: null,
    g: null,
    c: null,
    f: !1,
    p: !1,
    d: null,
    h: !1,
    l: null,
    w: function(n, t) {
        var i = new _g.g;
        i.MailboxType = "OneOff";
        i.EmailAddress = n.c().bH.UserEmailAddress;
        i.RoutingType = "SMTP";
        i.Name = n.c().bH.UserDisplayName;
        i.SipUri = n.c().bH.UserSipUri || null;
        var r = _h.j.a(i, !1);
        this.b = t.a(r, 8, !1, 5, !1, !1, !1);
        this.b.g(1, [1], "")
    },
    b: null,
    bc: function() {
        this.g();
        this.a.a(_y.bd, new _y.bd);
        this.a.a(_y.bl, new _y.bl(""))
    },
    E: function() {
        var t = this.V();
        if (t) {
            this.a.a(_y.bd, new _y.bd);
            if (this.p) this.a.a(_y.ev, new _y.ev);
            else {
                var n = this;
                this.l.c(function(t) {
                    n.e.a(t, null, null, !1)
                })
            }
        }
    },
    bd: function() {
        this.a.a(_y.bd, new _y.bd);
        var t = new _a.br;
        this.a.a(_a.br, t);
        var n = new _a.cp(this.i.e.d());
        this.a.a(_a.cp, n)
    },
    x: function() {
        this.a.a(_y.bd, new _y.bd);
        this.a.a(_y.cf, new _y.cf(-1))
    },
    v: function() {
        this.a.a(_y.bd, new _y.bd);
        this.a.a(_y.cH, new _y.cH(null))
    }
};
_ms.n = function(n, t, i, r, u, f, e, o, s, h) {
    this.d = n;
    this.c = t;
    this.g = i;
    this.k = r;
    this.a = u;
    this.j = f;
    this.e = e;
    this.f = o;
    this.b = s;
    this.h = h
};
_ms.n.prototype = {
    d: null,
    c: null,
    k: null,
    g: null,
    a: null,
    j: null,
    e: null,
    b: null,
    f: null,
    i: null,
    h: null,
    l: function(n) {
        var t = this;
        this.a.a(function(i) {
            t.i = i;
            n()
        })
    },
    m: function(n, t) {
        return new _ms.m(n, this.d, this.c, this.g, t, this.k, this.i, this.j, this.e, this.f, this.b, this.h)
    }
};
_ms.o = function() {
    _ms.o.initializeBase(this)
};
_ms.o.prototype = {
    f: null,
    g: null,
    h: null,
    i: null,
    a: function(n) {
        if (this.f !== n) {
            this.f = n;
            this.by("BottomActionBarButton1")
        }
        return n
    },
    b: function(n) {
        if (this.g !== n) {
            this.g = n;
            this.by("BottomActionBarButton2")
        }
        return n
    },
    c: function(n) {
        if (this.h !== n) {
            this.h = n;
            this.by("BottomActionBarButton3")
        }
        return n
    },
    d: function(n) {
        if (this.i !== n) {
            this.i = n;
            this.by("BottomActionBarButton4")
        }
        return n
    },
    e: function() {
        return 2
    }
};
_ms.b = function(n, t, i, r) {
    _ms.b.initializeBase(this);
    this.j = n;
    this.k = t;
    this.m = i;
    this.l = r
};
_ms.b.prototype = {
    l: null,
    j: null,
    k: null,
    m: null,
    o: !1,
    n: !1,
    b: function() {
        return this.m
    },
    d: function() {
        return this.l
    },
    i: function(n) {
        if (this.l !== n) {
            this.l = n;
            this.by("Text")
        }
        return n
    },
    f: function() {
        return this.j
    },
    c: function(n) {
        if (this.j !== n) {
            this.j = n;
            this.by("RegularImageId")
        }
        return n
    },
    g: function() {
        return this.k
    },
    h: function(n) {
        if (this.k !== n) {
            this.k = n;
            this.by("SelectedImageId")
        }
        return n
    },
    e: function() {
        return this.o
    },
    a: function(n) {
        if (this.o !== n) {
            this.o = n;
            this.by("IsPrimaryAction")
        }
        return n
    },
    p: function(n) {
        if (this.n !== n) {
            this.n = n;
            this.by("IsHidden")
        }
        return n
    }
};
_ms.d = function(n, t, i, r) {
    _ms.d.initializeBase(this);
    this.o = n;
    this.f = t;
    this.d = i.a().gd().Enabled && !!r.a() && !!r.a().bH.ReactOptinSettings && (r.a().bH.ReactOptinSettings.MailMobileEnabled || r.a().bH.ReactOptinSettings.CalendarMobileEnabled) && r.a().bk() === 2
};
_ms.d.prototype = {
    i: null,
    h: null,
    j: null,
    o: null,
    g: 0,
    f: null,
    m: !1,
    l: null,
    k: null,
    d: !1,
    q: function() {
        this.i || (this.i = new _ms.b(_fm.a.g, _fm.a.g, this.n(0), this.d || !this.f.a() ? "" : _u.R.DL));
        return this.i
    },
    p: function() {
        this.h || (this.h = new _ms.b(_fm.a.E, _fm.a.E, this.n(1), this.d || !this.f.a() ? "" : _u.R.Io));
        return this.h
    },
    r: function() {
        this.j || (this.j = new _ms.b(_fm.a.K, _fm.a.K, this.n(2), this.d || !this.f.a() ? "" : _u.R.Fe));
        return this.j
    },
    e: function() {
        return this.d ? 3 : 1
    },
    a: function(n) {
        if (this.g !== n) {
            this.g = n;
            this.by("ActiveModule")
        }
        return n
    },
    b: function(n) {
        if (this.m !== n) {
            this.m = n;
            this.by("ShowCustomBottomAppBar")
        }
        return n
    },
    t: function(n) {
        if (this.l !== n) {
            this.l = n;
            this.by("CustomBottomAppBarTemplateId")
        }
        return n
    },
    s: function(n) {
        if (this.k !== n) {
            this.k = n;
            this.by("CustomBottomAppBarDataContext")
        }
        return n
    },
    c: function(n, t) {
        this.t(n);
        this.s(t)
    },
    n: function(n) {
        var t = this;
        return new _j.g(function() {
            _j.m.a().c(_a.a.g, "MailBaseListViewModel.NavigateToMailModule", function() {
                t.o.a(_a.W.a(n), null)
            })
        }, _a.a.g)
    }
};
_ms.c = function() {
    this.Z = Function.createDelegate(this, this.bd);
    this.bb = Function.createDelegate(this, this.bf);
    this.ba = Function.createDelegate(this, this.be);
    _ms.c.initializeBase(this);
    this.O = new _j.g(this.ba, _a.a.D);
    this.V = new _j.g(this.bb, _a.a.D);
    this.H = new _j.g(this.Z, _a.a.D)
};
_ms.c.prototype = {
    S: null,
    D: null,
    X: null,
    Y: null,
    T: null,
    Q: null,
    R: 0,
    L: 0,
    N: null,
    E: null,
    C: null,
    U: null,
    W: null,
    H: null,
    O: null,
    V: null,
    M: null,
    P: !0,
    k: function() {
        return this.H
    },
    K: null,
    y: function(n) {
        this.K = n;
        return n
    },
    l: function() {
        return this.S
    },
    a: function(n) {
        if (this.S !== n) {
            this.S = n;
            this.by("LeftNavButton")
        }
        return n
    },
    h: function() {
        return this.D
    },
    c: function(n) {
        if (this.D !== n) {
            this.D = n;
            this.by("RightButton1")
        }
        return n
    },
    n: function() {
        return this.X
    },
    g: function(n) {
        if (this.X !== n) {
            this.X = n;
            this.by("RightButton2")
        }
        return n
    },
    v: function() {
        return this.Y
    },
    I: function(n) {
        if (this.Y !== n) {
            this.Y = n;
            this.by("RightButton3")
        }
        return n
    },
    u: function() {
        return this.T
    },
    i: function(n) {
        if (this.T !== n) {
            this.T = n;
            this.by("OverflowButton")
        }
        return n
    },
    f: function(n) {
        if (this.U !== n) {
            this.U = n;
            this.by("OverflowContextMenu")
        }
        return n
    },
    m: function(n) {
        if (this.W !== n) {
            this.W = n;
            this.by("RightButton1ContextMenu")
        }
        return n
    },
    s: function() {
        return this.Q
    },
    d: function(n) {
        if (this.Q !== n) {
            this.Q = n;
            this.by("Label1")
        }
        return n
    },
    t: function() {
        return this.R
    },
    e: function(n) {
        if (this.R !== n) {
            this.R = n;
            this.by("Label1Align")
        }
        return n
    },
    j: function() {
        return this.L
    },
    b: function(n) {
        if (this.L !== n) {
            this.L = n;
            this.by("Mode")
        }
        return n
    },
    A: function(n) {
        this.M = n;
        return n
    },
    q: function() {
        return this.E
    },
    x: function(n) {
        if (this.E !== n) {
            this.E = n;
            _j.h.a(this.E.H()) && this.E.bc(this.M);
            this.E.bt(this.O);
            this.E.bu(this.V);
            this.by("CalendarSearchVM")
        }
        return n
    },
    w: function() {
        return this.C
    },
    B: function(n) {
        if (this.C !== n) {
            this.C = n;
            _j.h.a(this.C.H()) && this.C.bc(this.M);
            this.C.bt(this.O);
            this.C.bu(this.V);
            this.by("SearchVM")
        }
        return n
    },
    G: function() {
        return this.C ? this.C : this.E
    },
    r: function() {
        return this.P
    },
    z: function(n) {
        if (this.P !== n) {
            this.P = n;
            this.by("IsListViewSeparatorHidden")
        }
        return n
    },
    o: function(n) {
        this.N !== n && (this.N = n)
    },
    p: function(n) {
        this.L === 2 && this.D.d() !== n && this.D.i(n)
    },
    bd: function() {
        if (this.C) this.bc();
        else {
            var n = this;
            this.N(function(t) {
                n.B(t);
                n.bc()
            })
        }
    },
    bc: function() {
        _a.o.a().a() ? this.b(4) : this.b(3);
        this.C.i(!0)
    },
    be: function() {
        this.G() && this.G().p() && this.G().p().b && this.G().p().a();
        if (_a.o.a().a()) {
            this.b(2);
            this.K && this.K.b && this.K.a()
        } else this.b(1)
    },
    bf: function() {
        this.G() && this.G().g("")
    }
};
_ms.q = function(n) {
    this.m = n
};
_ms.q.prototype = {
    m: null,
    j: function(n) {
        var t = new _ms.c;
        t.d(_u.R.Ku);
        if (this.m.a()) {
            t.a(new _ms.b(_fm.a.b, _fm.a.b, null, ""));
            t.c(new _ms.b(_fm.a.b, _fm.a.b, n, _u.R.BG))
        } else {
            t.a(new _ms.b(_fm.a.n, _fm.a.n, n, ""));
            t.c(new _ms.b(_fm.a.b, _fm.a.b, null, ""))
        }
        return t
    },
    d: function(n, t) {
        var i = new _ms.c;
        i.d(_u.R.Nl);
        if (this.m.a()) {
            i.b(2);
            i.a(new _ms.b(_y.b.f(), _y.b.f(), t, ""));
            i.c(new _ms.b(_fm.a.b, _fm.a.b, n, _u.P.K))
        } else {
            i.b(1);
            i.a(new _ms.b(_y.b.e(), _y.b.e(), t, ""));
            i.c(new _ms.b(_y.b.d(), _y.b.d(), i.H, ""))
        }
        return i
    },
    l: function(n, t) {
        var i = new _ms.c;
        if (this.m.a()) {
            i.b(2);
            i.a(new _ms.b(_fm.a.b, _fm.a.b, t, _u.R.Ff));
            i.c(new _ms.b(_fm.a.b, _fm.a.b, n, _u.R.Gq));
            i.D.a(!0)
        } else {
            i.b(1);
            i.a(new _ms.b(_y.b.a(), _y.b.a(), t, ""));
            i.c(new _ms.b(_y.b.c(), _y.b.c(), n, ""))
        }
        return i
    },
    e: function(n) {
        var t = new _ms.c;
        if (this.m.a()) {
            t.b(2);
            t.a(new _ms.b(_y.b.b(), _y.b.b(), n, ""))
        } else {
            t.b(1);
            t.a(new _ms.b(_y.b.a(), _y.b.a(), n, ""))
        }
        return t
    },
    i: function(n, t, i, r) {
        var u = new _ms.c;
        if (this.m.a()) {
            u.b(2);
            u.a(new _ms.b(_y.b.f(), _y.b.f(), n, ""));
            u.I(new _ms.b(_y.b.j(), _y.b.j(), t, ""))
        } else {
            u.b(1);
            u.a(new _ms.b(_y.b.e(), _y.b.e(), n, ""));
            u.c(new _ms.b(_y.b.d(), _y.b.d(), u.H, ""));
            u.I(new _ms.b(_y.b.i(), _y.b.i(), t, ""));
            u.M = String.format("{0}: {1}", _u.R.En, r)
        }
        u.g(new _ms.b(_y.b.bu(), _y.b.bu(), i, ""));
        u.z(!1);
        u.d(r);
        return u
    },
    k: function(n, t, i, r) {
        var u = new _ms.c;
        if (this.m.a()) {
            u.b(2);
            u.a(new _ms.b(null, null, n, _u.R.Ff));
            u.c(i ? null : u.c(new _ms.b(null, null, t, _u.R.RI)))
        } else {
            u.b(1);
            u.c(new _ms.b(_y.b.bn(), _y.b.bn(), n, ""));
            u.a(i ? null : u.a(new _ms.b(_y.b.bz(), _y.b.bz(), t, "")))
        }
        u.d(r);
        return u
    },
    h: function(n, t, i, r) {
        var u = new _ms.c;
        if (this.m.a()) {
            u.a(new _ms.b(_y.b.f(), _y.b.f(), n, ""));
            u.I(new _ms.b(_y.b.j(), _y.b.j(), t, ""))
        } else {
            u.a(new _ms.b(_y.b.e(), _y.b.e(), n, ""));
            u.I(new _ms.b(_y.b.i(), _y.b.i(), t, ""));
            u.c(new _ms.b(_y.b.d(), _y.b.d(), u.H, ""))
        }
        u.g(new _ms.b(_y.b.G(), _y.b.G(), i, ""));
        u.d(r);
        return u
    },
    b: function() {
        return new _ms.c
    },
    a: function(n, t, i, r) {
        return new _ms.b(n, t, i, r)
    },
    g: function(n, t) {
        return new _ms.j(n, t)
    },
    c: function() {
        return new _ms.o
    },
    f: function(n, t) {
        return new _ms.f(n, t)
    }
};
_ms.r = function() {};
_ms.r.prototype = {
    f: null,
    h: null,
    i: null,
    j: null,
    k: null,
    g: null,
    n: null,
    o: null,
    p: null,
    q: null,
    l: null,
    d: function(n, t, i, r, u) {
        this.n = n;
        this.o = t;
        this.p = i;
        this.q = r;
        this.l = u
    },
    a: function() {
        this.e().a(this.m());
        this.e().b(this.t());
        this.e().c(this.u());
        this.e().d(this.r());
        return this.e()
    },
    c: function() {
        this.e().a(this.m());
        this.e().b(null);
        this.e().c(null);
        this.e().d(this.r());
        return this.e()
    },
    b: function(n) {
        this.e().a(n ? this.m() : this.s());
        return this.e()
    },
    e: function() {
        this.f || (this.f = new _ms.o);
        return this.f
    },
    m: function() {
        this.h || (this.h = new _ms.b(_y.b.br(), _y.b.br(), this.n, ""));
        return this.h
    },
    s: function() {
        this.i || (this.i = new _ms.b(_y.b.bq(), _y.b.bq(), this.o, ""));
        return this.i
    },
    t: function() {
        this.j || (this.j = new _ms.b(_y.b.p(), _y.b.p(), this.p, ""));
        return this.j
    },
    u: function() {
        this.k || (this.k = new _ms.b(_y.b.o(), _y.b.o(), this.q, ""));
        return this.k
    },
    r: function() {
        this.g || (this.g = new _ms.b(_y.b.s(), _y.b.s(), this.l, ""));
        return this.g
    }
};
_ms.a = function() {};
_ms.a.$$cctor = function() {
    _ms.a._I()
};
_ms.a.bl = function() {
    var n = window.document.createElement("DIV");
    n.innerHTML = "<div> <div class='_ms_2 ms-bgc-w'> <div class='_ms_3'> <span autoid=\"_ms_0\" class='ms-fcl-w _ms_8'></span>  <div autoid=\"_ms_1\" class='_ms_5 ms-bgc-tp'></div>  <div autoid=\"_ms_2\" class='_ms_4 ms-bgc-nlra'></div> <div class='_ms_6 ms-bgc-w'></div>  <div></div> </div> </div>  <div></div> <div></div> </div><div> <button autoid=\"_ms_3\" type='button' class='_ms_b'></button> <button autoid=\"_ms_4\" type='button' class='_ms_b'></button> <button autoid=\"_ms_5\" type='button' class='_ms_b'></button> </div><div> <div class='_ms_c ms-bgc-nta'></div> <div class='flex _ms_9'></div>  <div class='ms-bgc-tp _ms_d'></div> </div><div> <button type='button' class='_ms_f'></button> <button type='button' class='_ms_f'></button> <button type='button' class='_ms_f'></button> </div><div> <div class='_ms_g ms-bgc-nlr'></div> <div class='_ms_e ms-bgc-w'></div>  <div class='ms-bgc-tp _ms_h'></div> </div><div> <div class='_ms_l ms-bgc-nta'></div> <div class='flex _ms_i'> <button autoid=\"_ms_6\" type='button' class='ms-fcl-ns _ms_j'></button> <button autoid=\"_ms_7\" type='button' class='ms-fcl-ns'></button> <button autoid=\"_ms_8\" type='button' class='ms-fcl-ns'></button> <button autoid=\"_ms_9\" type='button' class='ms-fcl-ns _ms_k'></button> </div> </div><div> <div class='flex _ms_m'>  <button autoid=\"_ms_a\" type='button' class='ms-fcl-w'></button> <span autoid=\"_ms_b\" class='_ms_n ms-fcl-w ms-font-xl ms-fwt-r'></span> <button autoid=\"_ms_c\" type='button' class='ms-fcl-w'></button> <button autoid=\"_ms_d\" type='button' class='ms-fcl-w'></button> <button autoid=\"_ms_e\" type='button' class='ms-fcl-w'></button> <button autoid=\"_ms_f\" type='button' class='ms-fcl-w _ms_o'></button> </div> <div class='_ms_p ms-bgc-w'> </div> </div><div> <div class='flex _ms_q'> <button autoid=\"_ms_g\" type='button'></button> <span autoid=\"_ms_h\" class='_ms_r ms-fcl-w ms-font-l ms-fwt-sb'></span> <button autoid=\"_ms_i\" type='button'></button> <button autoid=\"_ms_j\" type='button'></button> <button autoid=\"_ms_k\" type='button'></button> <button autoid=\"_ms_l\" type='button'></button> </div> <div class='_ms_y ms-bgc-w'> </div> </div><div> <div></div> </div><div> <span class='_ms_C _ms_G'></span> <span class='_ms_D'></span> </div><div> <span class='_ms_C'></span> <span class='_ms_F ms-fwt-r'></span>  </div><div> <span class='_ms_K'></span> <span class='_ms_F ms-fwt-r'></span>  </div><div> <span class='_ms_J'></span> </div><div>  <button type='button' class='ms-fcl-tp _ms_B'></button> <div class='_ms_z'>  <button type='button' class='ms-fcl-tp'></button>  <button type='button' class='filterButton ms-fcl-tp'></button>  <div class='_ms_H ms-bgc-tp'> <button type='button' class='ms-fcl-w'></button> <button type='button' class='_ms_I ms-fcl-w'></button> </div> </div> </div><div> <span class='_ms_Y'> <div class='personaPhoto'></div> </span> <span class='_ms_Z'> <span class='_ms_01 ms-font-xl ms-fwt-r ms-fcl-np detailsLabel bidi'></span> <span class='_ms_11 ms-fwt-r ms-fcl-ns detailsLabel bidi'></span> </span> </div><div> <div class='ms-bgc-w _ms_M'> <div class='_ms_W'> <div class='_ms_N'> <div class='_ms_X'></div> <button type='button' class='_ms_O'></button> </div> <div> <button type='button' class='_ms_R ms-fcl-np ms-fwt-sb ms-font-m'></button> </div> <div></div> <div class='_ms_Q ms-bcl-nl ms-fcl-ns ms-font-m'> <button type='button' class='_ms_R ms-fcl-ns ms-font-m'></button> <button type='button' class='_ms_R ms-fcl-ns ms-font-m'></button> <button type='button' class='_ms_R ms-fcl-ns ms-font-m'></button> <button type='button' class='_ms_R ms-fcl-ns ms-font-m'></button> </div> </div> </div> </div><div>  <div autoid=\"_ms_m\" class='_ms_31 ms-bg-color-themePrimary'></div>  </div>";
    _j.i.a().appendChild(n);
    return n
};
_ms.a.bw = function(n) {
    return n.E
};
_ms.a.bV = function(n) {
    return n.d
};
_ms.a.bP = function(n) {
    return n.b
};
_ms.a.bR = function(n) {
    return n.s()
};
_ms.a.bQ = function(n) {
    return n.r()
};
_ms.a.O = function(n) {
    return n.j()
};
_ms.a.Z = function(n) {
    return n.d
};
_ms.a.bi = function(n) {
    return n.u()
};
_ms.a.bS = function(n) {
    return n.t()
};
_ms.a.bD = function(n) {
    return n.e()
};
_ms.a.cw = function(n) {
    return n.bR()
};
_ms.a.bO = function(n) {
    return 48
};
_ms.a.bu = function(n) {
    return n.t
};
_ms.a.ct = function(n) {
    return n.a()
};
_ms.a.bx = function(n) {
    return n.g()
};
_ms.a.cz = function(n) {
    return n.q
};
_ms.a.cy = function(n) {
    return n.b()
};
_ms.a.cx = function(n) {
    return n.i
};
_ms.a.cA = function(n) {
    return n.l
};
_ms.a.cH = function(n) {
    return n.l
};
_ms.a.bT = function(n) {
    return n.u()
};
_ms.a.bU = function(n) {
    return n.k
};
_ms.a.bz = function(n) {
    return n.w
};
_ms.a.cn = function(n) {
    return n.r
};
_ms.a.bq = function(n) {
    return n.c()
};
_ms.a.co = function(n) {
    return n.y
};
_ms.a.ck = function(n) {
    return n.q
};
_ms.a.cl = function(n) {
    return n.x
};
_ms.a.cm = function(n) {
    return n.p
};
_ms.a.by = function(n) {
    return n.s
};
_ms.a.be = function(n) {
    return n.q()
};
_ms.a.i = function(n) {
    return n.b()
};
_ms.a.h = function(n) {
    return n.f()
};
_ms.a.m = function(n) {
    return n.g()
};
_ms.a.f = function(n) {
    return n.d()
};
_ms.a.d = function(n) {
    return n.V()
};
_ms.a.o = function(n) {
    return _ms.d.isInstanceOfType(n) ? n.g : null
};
_ms.a.bd = function(n) {
    return n.p()
};
_ms.a.bf = function(n) {
    return n.r()
};
_ms.a.F = function(n) {
    return _ms.d.isInstanceOfType(n) ? n.m : null
};
_ms.a.bg = function(n) {
    return n.k
};
_ms.a.bh = function(n) {
    return _ms.d.isInstanceOfType(n) ? n.l : null
};
_ms.a.cf = function(n) {
    return n.f
};
_ms.a.cg = function(n) {
    return n.g
};
_ms.a.ch = function(n) {
    return n.h
};
_ms.a.ci = function(n) {
    return n.i
};
_ms.a.N = function(n) {
    return n.l()
};
_ms.a.M = function(n) {
    return n.s()
};
_ms.a.Q = function(n) {
    return n.h()
};
_ms.a.r = function(n) {
    return n.X
};
_ms.a.H = function(n) {
    return _ms.c.isInstanceOfType(n) ? n.W : null
};
_ms.a.w = function(n) {
    return n.q()
};
_ms.a.t = function(n) {
    return n.k()
};
_ms.a.R = function(n) {
    return n.n()
};
_ms.a.S = function(n) {
    return n.v()
};
_ms.a.P = function(n) {
    return n.u()
};
_ms.a.G = function(n) {
    return _ms.c.isInstanceOfType(n) ? n.U : null
};
_ms.a.L = function(n) {
    return n.r()
};
_ms.a.J = function(n) {
    return n.t()
};
_ms.a.bC = function(n) {
    return n.e()
};
_ms.a.Y = function(n) {
    return n.b
};
_ms.a.bj = function(n) {
    return n.a
};
_ms.a.cq = function(n) {
    return n.d
};
_ms.a.cr = function(n) {
    return n.e
};
_ms.a.cE = function(n) {
    return n.d
};
_ms.a.V = function(n) {
    return n.g()
};
_ms.a.T = function(n) {
    return n.r
};
_ms.a.X = function(n) {
    return n.H()
};
_ms.a.bL = function(n) {
    return n.M()
};
_ms.a.W = function(n) {
    return n.y
};
_ms.a.bI = function(n) {
    return n.t
};
_ms.a.bH = function(n) {
    return n.m
};
_ms.a.bK = function(n) {
    return n.G()
};
_ms.a.bM = function(n) {
    return _ms.j.isInstanceOfType(n) ? n.B : null
};
_ms.a.U = function(n) {
    return n.x
};
_ms.a.E = function(n) {
    return n.o
};
_ms.a.bJ = function(n) {
    return n.E()
};
_ms.a.bG = function(n) {
    return n.w
};
_ms.a.bN = function(n) {
    return n.b
};
_ms.a.bF = function(n) {
    return n.b
};
_ms.a.cu = function(n) {
    return n.d()
};
_ms.a.cv = function(n) {
    return n.Q()
};
_ms.a.bX = function(n) {
    return n.h
};
_ms.a.bY = function(n) {
    return n.b
};
_ms.a.ca = function(n) {
    return n.k
};
_ms.a.ba = function(n) {
    return n.d
};
_ms.a.bA = function(n) {
    return n.K
};
_ms.a.bv = function(n) {
    return n.a()
};
_ms.a.cD = function(n) {
    return n.b
};
_ms.a.cC = function(n) {
    return n.eA()
};
_ms.a.bZ = function(n) {
    return n.j
};
_ms.a.cd = function(n) {
    return n.o
};
_ms.a.ce = function(n) {
    return n.c
};
_ms.a.bt = function(n) {
    return n.c()
};
_ms.a.cb = function(n) {
    return n.m
};
_ms.a.bb = function(n) {
    return n.f
};
_ms.a.cc = function(n) {
    return n.n
};
_ms.a.bB = function(n, t) {
    n.bc(t)
};
_ms.a.bW = function(n, t) {
    n.l(t)
};
_ms.a.cj = function(n, t) {
    n.a(t)
};
_ms.a.l = function(n, t) {
    n.K(t)
};
_ms.a.bc = function(n, t) {
    n.c(t)
};
_ms.a.b = function(n, t) {
    n.ba(t)
};
_ms.a.bE = function(n, t) {
    n.b(t)
};
_ms.a.cK = function(n, t) {
    n.bu(t)
};
_ms.a.cJ = function(n, t) {
    n.b(t)
};
_ms.a.cI = function(n, t) {
    n.c(t)
};
_ms.a.cB = function(n, t) {
    n.O(t)
};
_ms.a.cL = function(n, t) {
    n.y(t)
};
_ms.a.cM = function(n, t) {
    n.g = t
};
_ms.a.cN = function(n, t) {
    n.q = t
};
_ms.a.cp = function(n, t) {
    n.f(t)
};
_ms.a.bs = function(n, t) {
    n.a(t)
};
_ms.a.bp = function(n, t) {
    n.o(t)
};
_ms.a.br = function(n, t) {
    n.j(t)
};
_ms.a.bo = function(n, t) {
    n.n(t)
};
_ms.a.bn = function(n, t) {
    n.m(t)
};
_ms.a.c = function(n, t) {
    n.bb(t)
};
_ms.a.e = function(n, t) {
    n.l(t)
};
_ms.a.j = function(n, t) {
    n.r(t)
};
_ms.a.p = function(n, t) {
    n.bk(t)
};
_ms.a.k = function(n, t) {
    n.k(t)
};
_ms.a.K = function(n, t) {
    n.y(t)
};
_ms.a.I = function(n, t) {
    n.bQ(t)
};
_ms.a.s = function(n, t) {
    n.a(t)
};
_ms.a.v = function(n, t) {
    n.c(t)
};
_ms.a.x = function(n, t) {
    n.m(t)
};
_ms.a.u = function(n, t) {
    n.j(t)
};
_ms.a.cF = function(n, t) {
    n.f(t)
};
_ms.a.cs = function(n, t) {
    n.e = t
};
_ms.a.cG = function(n, t) {
    n.g(t)
};
_ms.a.D = function(n, t) {
    n.a(t)
};
_ms.a.bm = function(n, t) {
    n.q(t)
};
_ms.a.n = function() {
    _ms.a.A || (_ms.a.A = new _fc.q);
    return _ms.a.A
};
_ms.a.q = function() {
    _ms.a.y || (_ms.a.y = new _fc.k);
    return _ms.a.y
};
_ms.a.bk = function() {
    _ms.a.z || (_ms.a.z = new _fce.t);
    return _ms.a.z
};
_ms.a.C = function() {
    _ms.a.B || (_ms.a.B = new _fc.l);
    return _ms.a.B
};
_ms.a._I = function() {
    var l = "BottomAppBarModuleSwitcherView._tid1";
    new _j.d(l, function() {
        _ms.a.a[l] === undefined && (_ms.a.a[l] = [
            [
                [-1, 0, ["BottomAppBarMailButton"],
                    [_ms.a.be], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Title", null, _ms.a.p, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Text", null, _ms.a.k, 1, null, null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-ns", null, null, 1, new _j.r([_ms.a.n(), _ms.a.q()], [0, null]), null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-tp", null, null, 1, _ms.a.n(), 0, null
                ]
            ],
            [
                [-1, 0, ["BottomAppBarCalendarButton"],
                    [_ms.a.bd], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Title", null, _ms.a.p, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Text", null, _ms.a.k, 1, null, null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-ns", null, null, 1, new _j.r([_ms.a.n(), _ms.a.q()], [1, null]), null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-tp", null, null, 1, _ms.a.n(), 1, null
                ]
            ],
            [
                [-1, 0, ["BottomAppBarPeopleButton"],
                    [_ms.a.bf], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Title", null, _ms.a.p, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Text", null, _ms.a.k, 1, null, null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-ns", null, null, 1, new _j.r([_ms.a.n(), _ms.a.q()], [2, null]), null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-tp", null, null, 1, _ms.a.n(), 2, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[1].cloneNode(!0);
        var r = new _fc.b(n.children[2]);
        r.h("_ms_a ms-fwt-r");
        r.L(!0);
        var i = new _fc.b(n.children[1]);
        i.h("_ms_a ms-fwt-r");
        i.L(!0);
        var t = new _fc.b(n.children[0]);
        t.h("_ms_a ms-fwt-r");
        t.L(!0);
        return new _j.a(n, [t, i, r])
    }, "", _ms.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _ms.a.a);
    var a = "BottomAppBarModuleSwitcherView";
    new _j.d(a, function() {
        _ms.a.a[a] === undefined && (_ms.a.a[a] = [
            [
                [-1, 1, ["DataContext", "ShowCustomBottomAppBar"],
                    [_ms.a.d, _ms.a.F], null, "IsHidden", null, _ms.a.l, 1, null, null, !0
                ]
            ],
            [
                [-1, 1, ["DataContext", "ShowCustomBottomAppBar"],
                    [_ms.a.d, _ms.a.F], null, "IsHidden", null, _ms.a.l, 1, _ms.a.q(), null, !0
                ],
                [-1, 1, ["DataContext", "CustomBottomAppBarTemplateId"],
                    [_ms.a.d, _ms.a.bh], null, "TemplateId", null, _ms.a.K, 1, null, null, null
                ],
                [-1, 0, ["CustomBottomAppBarDataContext"],
                    [_ms.a.bg], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[2].cloneNode(!0);
        var i = new _j.c(n.children[2]);
        var t = new _j.c(n.children[1]);
        t.y("BottomAppBarModuleSwitcherView._tid1");
        return new _j.a(n, [t, i])
    }, "", _ms.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _ms.a.a);
    var h = "BottomAppBarReactModuleSwitcherView._tid2";
    new _j.d(h, function() {
        _ms.a.a[h] === undefined && (_ms.a.a[h] = [
            [
                [-1, 0, ["BottomAppBarMailButton"],
                    [_ms.a.be], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-ns", null, null, 1, new _j.r([_ms.a.n(), _ms.a.q()], [0, null]), null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-tp", null, null, 1, _ms.a.n(), 0, null
                ]
            ],
            [
                [-1, 0, ["BottomAppBarCalendarButton"],
                    [_ms.a.bd], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-ns", null, null, 1, new _j.r([_ms.a.n(), _ms.a.q()], [1, null]), null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-tp", null, null, 1, _ms.a.n(), 1, null
                ]
            ],
            [
                [-1, 0, ["BottomAppBarPeopleButton"],
                    [_ms.a.bf], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-ns", null, null, 1, new _j.r([_ms.a.n(), _ms.a.q()], [2, null]), null, null
                ],
                [0, 5, ["DataContext", "ActiveModule"],
                    [_ms.a.d, _ms.a.o], null, "ms-fcl-tp", null, null, 1, _ms.a.n(), 2, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[3].cloneNode(!0);
        var r = new _fc.b(n.children[2]);
        r.L(!0);
        var i = new _fc.b(n.children[1]);
        i.L(!0);
        var t = new _fc.b(n.children[0]);
        t.L(!0);
        return new _j.a(n, [t, i, r])
    }, "", _ms.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _ms.a.a);
    var c = "BottomAppBarReactModuleSwitcherView";
    new _j.d(c, function() {
        _ms.a.a[c] === undefined && (_ms.a.a[c] = [
            [
                [-1, 1, ["DataContext", "ShowCustomBottomAppBar"],
                    [_ms.a.d, _ms.a.F], null, "IsHidden", null, _ms.a.l, 1, null, null, !0
                ]
            ],
            [
                [-1, 1, ["DataContext", "ShowCustomBottomAppBar"],
                    [_ms.a.d, _ms.a.F], null, "IsHidden", null, _ms.a.l, 1, _ms.a.q(), null, !0
                ],
                [-1, 1, ["DataContext", "CustomBottomAppBarTemplateId"],
                    [_ms.a.d, _ms.a.bh], null, "TemplateId", null, _ms.a.K, 1, null, null, null
                ],
                [-1, 0, ["CustomBottomAppBarDataContext"],
                    [_ms.a.bg], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[4].cloneNode(!0);
        var i = new _j.c(n.children[2]);
        var t = new _j.c(n.children[1]);
        t.y("BottomAppBarReactModuleSwitcherView._tid2");
        return new _j.a(n, [t, i])
    }, "", _ms.d, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _ms.a.a);
    var p = "BottomActionBarView";
    new _j.d(p, function() {
        _ms.a.a[p] === undefined && (_ms.a.a[p] = [
            [
                [-1, 0, ["BottomActionBarButton1"],
                    [_ms.a.cf], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["BottomActionBarButton2"],
                    [_ms.a.cg], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["BottomActionBarButton3"],
                    [_ms.a.ch], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "ActionSource", null, _ms.a.I, 0, null, null, null, "AB"],
                [-1, 0, ["BottomActionBarButton4"],
                    [_ms.a.ci], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[5].cloneNode(!0);
        var r = new _fc.b(_j.a.a(n, [1, 3]));
        r.f("ms-fcl-ns");
        r.e("ms-fcl-nta");
        r.L(!0);
        var u = new _fc.b(_j.a.a(n, [1, 2]));
        u.f("ms-fcl-ns");
        u.e("ms-fcl-nta");
        u.L(!0);
        var t = new _fc.b(_j.a.a(n, [1, 1]));
        t.f("ms-fcl-ns");
        t.e("ms-fcl-nta");
        t.L(!0);
        var i = new _fc.b(_j.a.a(n, [1, 0]));
        i.f("ms-fcl-ns");
        i.e("ms-fcl-nta");
        i.L(!0);
        return new _j.a(n, [i, t, u, r])
    }, "", _ms.o, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _ms.a.a);
    var w = "TopAppBarAndroidView";
    new _j.d(w, function() {
        _ms.a.a[w] === undefined && (_ms.a.a[w] = [
            [
                [-1, 0, ["LeftNavButton"],
                    [_ms.a.N], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Title", null, _ms.a.p, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Text", null, _ms.a.k, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["Label1"],
                    [_ms.a.M], null, "Text", null, _ms.a.s, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "ActionSource", null, _ms.a.I, 0, null, null, null, "AB"],
                [-1, 0, ["RightButton1"],
                    [_ms.a.Q], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Title", null, _ms.a.p, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Text", null, _ms.a.k, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["RightButton2"],
                    [_ms.a.R], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Title", null, _ms.a.p, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Text", null, _ms.a.k, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["RightButton3"],
                    [_ms.a.S], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Title", null, _ms.a.p, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Text", null, _ms.a.k, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["OverflowButton"],
                    [_ms.a.P], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["IsListViewSeparatorHidden"],
                    [_ms.a.L], null, "IsHidden", null, _ms.a.l, 1, null, null, !0
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[6].cloneNode(!0);
        var s = new _j.i(n.children[1]);
        var u = new _fc.b(_j.a.a(n, [0, 5]));
        u.e("ms-bgc-ts");
        u.L(!0);
        var t = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        t.W(_j.f.a(["TemplatedParent", "DataContext", "OverflowContextMenu"], [_ms.a.r, _ms.a.d, _ms.a.G], null, "MenuDataContext", null, _ms.a.v, 1)).W(_j.f.a(["TemplatedParent", "DataContext", "OverflowContextMenu", "IsShown"], [_ms.a.r, _ms.a.d, _ms.a.G, _ms.a.w], _ms.a.x, "IsShown", _ms.a.t, _ms.a.u, 2, null, null, !1));
        t.a = 3;
        t.b = 5;
        u.C([t]);
        var e = new _fc.b(_j.a.a(n, [0, 4]));
        e.e("ms-bgc-ts");
        e.L(!0);
        var f = new _fc.b(_j.a.a(n, [0, 3]));
        f.e("ms-bgc-ts");
        f.L(!0);
        var i = new _fc.b(_j.a.a(n, [0, 2]));
        i.e("ms-bgc-ts");
        i.L(!0);
        var r = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        r.W(_j.f.a(["TemplatedParent", "DataContext", "RightButton1ContextMenu"], [_ms.a.r, _ms.a.d, _ms.a.H], null, "MenuDataContext", null, _ms.a.v, 1)).W(_j.f.a(["TemplatedParent", "DataContext", "RightButton1ContextMenu", "IsShown"], [_ms.a.r, _ms.a.d, _ms.a.H, _ms.a.w], _ms.a.x, "IsShown", _ms.a.t, _ms.a.u, 2, null, null, !1));
        r.a = 3;
        r.b = 5;
        i.C([r]);
        var h = new _fc.a(_j.a.a(n, [0, 1]));
        var o = new _fc.b(_j.a.a(n, [0, 0]));
        o.e("ms-bgc-ts");
        return new _j.a(n, [o, h, i, f, e, u, s])
    }, "", _y.cX, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _ms.a.a);
    var v = "TopAppBarIOSView";
    new _j.d(v, function() {
        _ms.a.a[v] === undefined && (_ms.a.a[v] = [
            [
                [-1, 0, ["LeftNavButton"],
                    [_ms.a.N], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Title", null, _ms.a.p, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Text", null, _ms.a.k, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["Label1"],
                    [_ms.a.M], null, "Text", null, _ms.a.s, 1, null, null, null
                ],
                [-1, 5, ["Label1Align"],
                    [_ms.a.J], null, "_ms_s", null, null, 0, _ms.a.n(), 1, null
                ],
                [-1, 5, ["Label1Align"],
                    [_ms.a.J], null, "_ms_t", null, null, 0, _ms.a.n(), 2, null
                ],
                [-1, 5, ["Label1Align"],
                    [_ms.a.J], null, "_ms_u", null, null, 0, _ms.a.n(), 3, null
                ]
            ],
            [
                [-1, 4, null, null, null, "ActionSource", null, _ms.a.I, 0, null, null, null, "AB"],
                [-1, 0, ["RightButton1"],
                    [_ms.a.Q], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Title", null, _ms.a.p, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Text", null, _ms.a.k, 1, null, null, null
                ],
                [0, 5, ["IsPrimaryAction"],
                    [_ms.a.bC], null, "ms-fwt-sb", null, null, 0, null, null, null
                ]
            ],
            [
                [-1, 0, ["RightButton2"],
                    [_ms.a.R], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Title", null, _ms.a.p, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Text", null, _ms.a.k, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["RightButton3"],
                    [_ms.a.S], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["ClickCommand"],
                    [_ms.a.i], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Title", null, _ms.a.p, 1, null, null, null
                ],
                [0, 0, ["Text"],
                    [_ms.a.f], null, "Text", null, _ms.a.k, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["OverflowButton"],
                    [_ms.a.P], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["RegularImageId"],
                    [_ms.a.h], null, "ImageId", null, _ms.a.e, 1, null, null, null
                ],
                [0, 0, ["SelectedImageId"],
                    [_ms.a.m], null, "PressedImageId", null, _ms.a.j, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["IsListViewSeparatorHidden"],
                    [_ms.a.L], null, "IsHidden", null, _ms.a.l, 1, null, null, !0
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[7].cloneNode(!0);
        var s = new _j.i(n.children[1]);
        var r = new _fc.b(_j.a.a(n, [0, 5]));
        r.f("ms-fcl-w");
        r.e("ms-fcl-tt");
        r.L(!0);
        var e = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        e.W(_j.f.a(["TemplatedParent", "DataContext", "OverflowContextMenu"], [_ms.a.r, _ms.a.d, _ms.a.G], null, "MenuDataContext", null, _ms.a.v, 1)).W(_j.f.a(["TemplatedParent", "DataContext", "OverflowContextMenu", "IsShown"], [_ms.a.r, _ms.a.d, _ms.a.G, _ms.a.w], _ms.a.x, "IsShown", _ms.a.t, _ms.a.u, 2, null, null, !1));
        e.a = 3;
        e.b = 5;
        r.C([e]);
        var u = new _fc.b(_j.a.a(n, [0, 4]));
        u.f("ms-fcl-w");
        u.e("ms-fcl-tt");
        u.L(!0);
        var o = new _fc.b(_j.a.a(n, [0, 3]));
        o.f("ms-fcl-w");
        o.e("ms-fcl-tt");
        o.L(!0);
        var t = new _fc.b(_j.a.a(n, [0, 2]));
        t.f("ms-fcl-w");
        t.h("_ms_v ms-fwt-r _ms_w _ms_x");
        t.e("ms-fcl-tt");
        t.L(!0);
        var f = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        f.W(_j.f.a(["TemplatedParent", "DataContext", "RightButton1ContextMenu"], [_ms.a.r, _ms.a.d, _ms.a.H], null, "MenuDataContext", null, _ms.a.v, 1)).W(_j.f.a(["TemplatedParent", "DataContext", "RightButton1ContextMenu", "IsShown"], [_ms.a.r, _ms.a.d, _ms.a.H, _ms.a.w], _ms.a.x, "IsShown", _ms.a.t, _ms.a.u, 2, null, null, !1));
        f.a = 3;
        f.b = 5;
        t.C([f]);
        var h = new _fc.a(_j.a.a(n, [0, 1]));
        var i = new _fc.b(_j.a.a(n, [0, 0]));
        i.f("ms-fcl-w");
        i.h("_ms_v ms-fwt-r _ms_w _ms_x");
        i.e("ms-fcl-tt");
        i.L(!0);
        return new _j.a(n, [i, h, t, o, u, r, s])
    }, "", _y.cX, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _ms.a.a);
    var y = "MailModuleRevealMenu";
    new _j.d(y, function() {
        _ms.a.a[y] === undefined && (_ms.a.a[y] = [
            [
                [-1, 0, ["MailNavigation", "FolderForest", "FolderTrees"],
                    [_ms.a.Y, _ms.a.bj, _ms.a.cq], null, "DataSource", null, _ms.a.cF, 1, null, null, null
                ],
                [-1, 0, ["MailNavigation", "FolderForest", "SelectedTree"],
                    [_ms.a.Y, _ms.a.bj, _ms.a.cr], _ms.a.cs, "SelectedTreeData", _ms.a.cE, _ms.a.cG, 2, null, null, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[8].cloneNode(!0);
        var t = new _n.C(n.children[0], _j.b.Instance.a(_n.d));
        return new _j.a(n, [t])
    }, "", _ms.k, _j.c, function(n) {
        return new _j.c(n)
    }, !0, !1, !1, 0, _ms.a.a);
    var s = "FilterBarView._tid7";
    new _j.d(s, function() {
        _ms.a.a[s] === undefined && (_ms.a.a[s] = [
            [
                [-1, 4, null, null, null, "Id", null, _ms.a.D, 0, null, null, null, _ms.g.e()]
            ],
            [
                [-1, 0, ["NumberOfPinnedItemsInCurrentFolder"],
                    [_ms.a.V], null, "IsHidden", null, _ms.a.l, 1, _ms.a.bk(), null, !0
                ],
                [-1, 0, ["NumberOfPinnedItemsInCurrentFolder"],
                    [_ms.a.V], null, "Text", null, _ms.a.s, 1, null, null, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[9].cloneNode(!0);
        var i = new _fc.a(n.children[1]);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, i])
    }, "", _ms.f, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _ms.a.a);
    var i = "FilterBarView._tid8";
    new _j.d(i, function() {
        _ms.a.a[i] === undefined && (_ms.a.a[i] = [
            [
                [-1, 4, null, null, null, "Id", null, _ms.a.D, 0, null, null, null, _ms.g.b()]
            ],
            [
                [-1, 0, ["FilterButtonLabel"],
                    [_ms.a.T], null, "Text", null, _ms.a.s, 1, null, null, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[10].cloneNode(!0);
        var r = new _fc.a(n.children[1]);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, r])
    }, "", _ms.f, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _ms.a.a);
    var r = "FilterBarView._tid9";
    new _j.d(r, function() {
        _ms.a.a[r] === undefined && (_ms.a.a[r] = [
            [
                [-1, 0, ["SelectedFilterImage"],
                    [_ms.a.X], null, "IsHidden", null, _ms.a.l, 1, _ms.a.C(), null, !0
                ],
                [-1, 0, ["SelectedFilterImage"],
                    [_ms.a.X], null, "Id", null, _ms.a.D, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["FilterButtonLabel"],
                    [_ms.a.T], null, "Text", null, _ms.a.s, 1, null, null, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[11].cloneNode(!0);
        var i = new _fc.a(n.children[1]);
        var t = new _fc.d(n.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(n, [t, i])
    }, "", _ms.f, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _ms.a.a);
    var n = "FilterBarView._tida";
    new _j.d(n, function() {
        _ms.a.a[n] === undefined && (_ms.a.a[n] = [
            [
                [-1, 4, null, null, null, "Id", null, _ms.a.D, 0, null, null, null, _ms.g.f()]
            ]
        ]);
        var t = _ms.a.g.childNodes[12].cloneNode(!0);
        var i = new _fc.d(t.children[0], _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        return new _j.a(t, [i])
    }, "", _ms.f, _fc.b, function(n) {
        return new _fc.b(n)
    }, !1, !0, !1, 0, _ms.a.a);
    var t = "FilterBarView";
    new _j.d(t, function() {
        _ms.a.a[t] === undefined && (_ms.a.a[t] = [
            [
                [-1, 4, null, null, null, "Text", null, _ms.a.k, 0, null, null, null, _u.R.ME],
                [-1, 0, ["SearchImageId"],
                    [_ms.a.bL], null, "ImageId", null, _ms.a.e, 0, null, null, null
                ],
                [-1, 0, ["SearchButtonClickedCommand"],
                    [_ms.a.W], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [-1, 0, ["SearchButtonClickedCommand"],
                    [_ms.a.W], null, "IsHidden", null, _ms.a.l, 1, _ms.a.C(), null, !0
                ]
            ],
            [
                [-1, 5, ["IsAndroid"],
                    [_ms.a.bI], null, "_ms_E", null, null, 0, null, null, null
                ],
                [-1, 5, ["FilterOptions"],
                    [_ms.a.bH], null, "_ms_L", null, null, 0, _ms.a.C(), null, null
                ]
            ],
            [
                [-1, 0, ["IsPinnedFilterOptionHidden"],
                    [_ms.a.bK], null, "IsHidden", null, _ms.a.l, 1, null, null, !0
                ],
                [-1, 0, ["PinFilterButtonClickedCommand"],
                    [_ms.a.bM], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["IsFilterOptionHidden"],
                    [_ms.a.U], null, "IsHidden", null, _ms.a.l, 1, null, null, !0
                ]
            ],
            [
                [-1, 5, ["IsFilterOptionHidden"],
                    [_ms.a.U], null, "_ms_L", null, null, 0, _ms.a.q(), null, null
                ]
            ], null, [
                [-1, 0, ["ClearFilterClickedCommand"],
                    [_ms.a.bG], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[13].cloneNode(!0);
        var e = new _fc.b(_j.a.a(n, [1, 2, 1]));
        e.e("ms-fcl-tt");
        e.y("FilterBarView._tida");
        var i = new _fc.b(_j.a.a(n, [1, 2, 0]));
        i.e("ms-fcl-tt");
        var o = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        o.U(_j.f.a(["FilterContextMenu"], [_ms.a.E], null, "MenuDataContext", null, _ms.a.v, 1)).U(_j.f.a(["FilterContextMenu", "IsShown"], [_ms.a.E, _ms.a.w], _ms.a.x, "IsShown", _ms.a.t, _ms.a.u, 2, null, null, !1)).U(_j.f.a(["IsContextMenuEnabled"], [_ms.a.bJ], null, "IsEnabled", null, _ms.a.bm, 1, null, null, !1));
        o.a = 3;
        i.C([o]);
        i.y("FilterBarView._tid9");
        var h = new _j.i(_j.a.a(n, [1, 2]));
        var r = new _fc.b(_j.a.a(n, [1, 1]));
        r.e("ms-fcl-tt");
        var u = new _fce.f(_j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        u.U(_j.f.a(["FilterContextMenu"], [_ms.a.E], null, "MenuDataContext", null, _ms.a.v, 1)).U(_j.f.a(["FilterContextMenu", "IsShown"], [_ms.a.E, _ms.a.w], _ms.a.x, "IsShown", _ms.a.t, _ms.a.u, 2, null, null, !1));
        u.a = 3;
        r.C([u]);
        r.y("FilterBarView._tid8");
        var f = new _fc.b(_j.a.a(n, [1, 0]));
        f.e("ms-fcl-tt");
        f.y("FilterBarView._tid7");
        var c = new _j.i(n.children[1]);
        var s = new _fc.b(n.children[0]);
        s.h("ms-font-m ms-fwt-sl _ms_A");
        return new _j.a(n, [s, c, f, r, h, i, e])
    }, "", _ms.f, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !1, !1, 0, _ms.a.a);
    var e = "PeopleModuleRevealMenu";
    new _j.d(e, function() {
        _ms.a.a[e] === undefined && (_ms.a.a[e] = [
            [
                [-1, 0, ["FilterListViewModel"],
                    [_ms.a.bN], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ]
            ]
        ]);
        var t = _ms.a.g.childNodes[8].cloneNode(!0);
        var n = new _j.c(t.children[0]);
        n.y("FilterListView");
        return new _j.a(t, [n])
    }, "", _ms.l, _j.c, function(n) {
        return new _j.c(n)
    }, !0, !1, !1, 0, _ms.a.a);
    var o = "CalendarModuleRevealMenu";
    new _j.d(o, function() {
        _ms.a.a[o] === undefined && (_ms.a.a[o] = [
            [
                [-1, 0, ["CalendarShellViewModel"],
                    [_ms.a.bF], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ]
            ]
        ]);
        var t = _ms.a.g.childNodes[8].cloneNode(!0);
        var n = new _j.c(t.children[0]);
        n.y("CalendarRevealMenuPickerTouchNarrowView");
        return new _j.a(t, [n])
    }, "", _ms.i, _j.c, function(n) {
        return new _j.c(n)
    }, !0, !1, !1, 0, _ms.a.a);
    var u = "RevealSubPanel._tidb";
    new _j.d(u, function() {
        _ms.a.a[u] === undefined && (_ms.a.a[u] = [null, [
                [-1, 0, ["Row1DisplayText"],
                    [_ms.a.cu], null, "Text", null, _ms.a.s, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["Row2DisplayText"],
                    [_ms.a.cv], null, "Text", null, _ms.a.s, 1, null, null, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[14].cloneNode(!0);
        var i = new _fc.a(_j.a.a(n, [1, 1]));
        var r = new _fc.a(_j.a.a(n, [1, 0]));
        var t = new _j.c(_j.a.a(n, [0, 0]));
        t.y("PersonaView.PersonaPhoto");
        return new _j.a(n, [t, r, i])
    }, "", _bc.l, _j.c, function(n) {
        return new _j.c(n)
    }, !1, !0, !1, 0, _ms.a.a);
    var f = "RevealSubPanel";
    new _j.d(f, function() {
        _ms.a.a[f] === undefined && (_ms.a.a[f] = [
            [
                [-1, 5, ["IsAndroid"],
                    [_ms.a.bX], null, "_ms_21", null, null, 1, null, null, null
                ]
            ], null, [
                [-1, 1, ["MeBasePersonaViewModel"],
                    [_ms.a.bY], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "ImageId", null, _ms.a.e, 0, null, null, null, _fm.a.Z],
                [-1, 1, ["OpenOptionsCommand"],
                    [_ms.a.ca], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _ms.a.k, 0, null, null, null, _u.R.Eg],
                [-1, 4, null, null, null, "ImageId", null, _ms.a.e, 0, null, null, null, _y.e.v()],
                [-1, 1, ["ClientOptInCommand"],
                    [_ms.a.ba], null, "IsHidden", null, _ms.a.l, 1, _ms.a.C(), null, !0
                ],
                [-1, 1, ["ClientOptInCommand"],
                    [_ms.a.ba], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [-1, 5, ["ShowMobileReactOptinToggle"],
                    [_ms.a.bA], null, "_ms_U", null, null, 0, _ms.a.q(), null, null
                ]
            ],
            [
                [-1, 0, ["CurrentModule", "ModuleViewModel", "RevealMenuViewModel"],
                    [_ms.a.bv, _ms.a.cD, _ms.a.cC], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _ms.a.k, 0, null, null, null, _u.R.Cm],
                [-1, 4, null, null, null, "ImageId", null, _ms.a.e, 0, null, null, null, _fm.a.g],
                [-1, 1, ["OpenFeedbackCommand"],
                    [_ms.a.bZ], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _ms.a.k, 0, null, null, null, _u.R.OW],
                [-1, 1, ["SignOutCommand"],
                    [_ms.a.cd], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [-1, 1, ["UserAgent", "PALEnabled"],
                    [_ms.a.ce, _ms.a.bt], null, "IsHidden", null, _ms.a.l, 1, null, null, !0
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _ms.a.k, 0, null, null, null, _u.R.v],
                [-1, 1, ["ReportErrorCommand"],
                    [_ms.a.cb], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [-1, 1, ["HideDiagnostics"],
                    [_ms.a.bb], null, "IsHidden", null, _ms.a.l, 1, null, null, !0
                ]
            ],
            [
                [-1, 4, null, null, null, "Text", null, _ms.a.k, 0, null, null, null, _u.R.Hl],
                [-1, 1, ["ShowDiagnosticsCommand"],
                    [_ms.a.cc], null, "ClickCommand", null, _ms.a.c, 1, null, null, null
                ],
                [-1, 1, ["HideDiagnostics"],
                    [_ms.a.bb], null, "IsHidden", null, _ms.a.l, 1, null, null, !0
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[15].cloneNode(!0);
        var r = new _fc.b(_j.a.a(n, [0, 0, 3, 3]));
        r.j("_ms_S");
        r.h("_ms_V");
        var i = new _fc.b(_j.a.a(n, [0, 0, 3, 2]));
        i.j("_ms_S");
        i.h("_ms_V");
        var t = new _fc.b(_j.a.a(n, [0, 0, 3, 1]));
        t.j("_ms_S");
        t.h("_ms_V");
        var s = new _fc.b(_j.a.a(n, [0, 0, 3, 0]));
        s.j("_ms_S");
        var l = new _n.h(_j.a.a(n, [0, 0, 2]), _j.b.Instance.a(_n.d), _j.b.Instance.a(_b.a));
        var o = new _fc.b(_j.a.a(n, [0, 0, 1, 0]));
        o.j("_ms_T");
        var u = new _fc.b(_j.a.a(n, [0, 0, 0, 1]));
        u.j("_ms_P ms-fcl-ns-b");
        var e = new _j.c(_j.a.a(n, [0, 0, 0, 0]));
        e.y("RevealSubPanel._tidb");
        var c = new _fce.g(_j.a.a(n, [0, 0]), _j.b.Instance.a(_j.p), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_j.j));
        var h = new _j.i(n.children[0]);
        return new _j.a(n, [h, c, e, u, o, l, s, t, i, r])
    }, "", _y.j, _ms.m, function(n) {
        return new _ms.m(n, _j.b.Instance.a(_j.j), _j.b.Instance.a(_a.Z), _j.b.Instance.a(_h.s), _j.b.Instance.a(Function), _j.b.Instance.a(_g.a), _j.b.Instance.a(_bc.f), _j.b.Instance.a(_j.o), _j.b.Instance.a(_a.e), _j.b.Instance.a(_a.E), _j.b.Instance.a(_j.cd.$$(_y.K)), _j.b.Instance.a(_ms.e))
    }, !1, !1, !1, 0, _ms.a.a)
};
MobileShellComponent.registerClass("MobileShellComponent", null, _a.kj, _j.ce);
_ms.i.registerClass("_ms.i", _a.bw, ICalendarModuleRevealMenuViewModel, IRevealMenuViewModel);
_ms.f.registerClass("_ms.f", _j.S, _y.kT, _j.bs, Sys.IDisposable);
_ms.j.registerClass("_ms.j", _ms.f, _y.kT, _j.bs, Sys.IDisposable);
_ms.k.registerClass("_ms.k", _a.bw, IMailModuleRevealMenuViewModel, IRevealMenuViewModel);
_ms.p.registerClass("_ms.p", _a.bt);
_ms.e.registerClass("_ms.e", _a.bw);
_ms.l.registerClass("_ms.l", _a.bw, IPeopleModuleRevealMenuViewModel, IRevealMenuViewModel);
_ms.s.registerClass("_ms.s", _j.i);
_ms.h.registerClass("_ms.h", _n.bU);
_ms.m.registerClass("_ms.m", _j.c);
_ms.n.registerClass("_ms.n");
_ms.o.registerClass("_ms.o", _j.S, _y.jP, _y.jQ, Sys.IDisposable);
_ms.b.registerClass("_ms.b", _j.S, _y.jO);
_ms.d.registerClass("_ms.d", _j.S, _y.jQ, Sys.IDisposable, _y.bY);
_ms.c.registerClass("_ms.c", _j.S, _y.cX, Sys.IDisposable);
_ms.q.registerClass("_ms.q", null, _y.r);
_ms.r.registerClass("_ms.r", null, _y.hp);
MobileShellComponent.$$cctor();
_ms.e.a = {
    "bg-bg": "bg-BG%3B3375",
    "cs-cz": "cs-cz%3B3376",
    "en-us": "en-us%3B3369",
    "es-es": "es-es%3B3373",
    "et-ee": "et-EE%3B3377",
    "hr-hr": "hr-HR%3B3378",
    "hu-hu": "hu-HU%3B3379",
    "ja-jp": "ja-jp%3B3372",
    "lt-lt": "lt-LT%3B3380",
    "lv-lv": "lv-LV%3B3381",
    "pl-pl": "pl-PL%3B3382",
    "pt-br": "pt-br%3B3383",
    "pt-pt": "pt-PT%3B3384",
    "ro-ro": "ro-RO%3B3385",
    "ru-ru": "ru-ru%3B3386",
    "sl-si": "sl-sl%3B3387",
    "sr-latn-rs": "sr-latn-rs%3B3388",
    "sv-se": "sv-SE%3B3389",
    "th-th": "th-TH%3B3390",
    "tr-tr": "tr-TR%3B3391",
    "uk-ua": "uk-ua%3B3392",
    "zh-cn": "zh-sg%3B3393",
    "zh-sg": "zh-sg%3B3393"
};
_ms.a.g = _ms.a.bl();
_ms.a.A = null;
_ms.a.y = null;
_ms.a.z = null;
_ms.a.B = null;
_ms.a.a = {};
_ms.a.$$cctor();
Type.registerNamespace("_ms");
_ms.t = function() {};
_ms.t.load = function() {
    var t = "PrimaryView.Narrow";
    new _j.d(t, function() {
        _ms.a.a[t] === undefined && (_ms.a.a[t] = [
            [
                [-1, 0, ["IsRevealMenuShown"],
                    [_ms.a.bw], _ms.a.bB, "IsSubpanelVisible", _ms.a.bV, _ms.a.bW, 2, null, null, !1
                ],
                [-1, 5, ["IsIos"],
                    [_ms.a.bP], null, "_ms_7", null, null, 1, null, null, null
                ]
            ], null, [
                [-1, 1, ["MowaEndOfLifeNotification"],
                    [_ms.a.bR], null, "Html", null, _ms.a.cj, 1, null, null, null
                ],
                [-1, 1, ["IsMowaEndOfLifeNotificationHidden"],
                    [_ms.a.bQ], null, "IsHidden", null, _ms.a.l, 1, null, null, !0
                ]
            ],
            [
                [-1, 1, ["ModuleConductorTop", "TopAppBarViewModel"],
                    [_ms.a.Z, _ms.a.bi], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 3, ["TopAppBarHeight"],
                    [_ms.a.bS], null, _fce.c.b, null, null, 1, null, null, null
                ],
                [0, 0, ["Mode"],
                    [_ms.a.O], null, "Mode", null, _ms.a.bc, 1, null, null, 0
                ]
            ],
            [
                [-1, 1, ["ModuleConductorTop", "BottomAppBarViewModel"],
                    [_ms.a.Z, _ms.a.cw], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 3, ["BottomAppBarHeight"],
                    [_ms.a.bO], null, _fce.c.b, null, null, 1, null, null, null
                ],
                [0, 0, ["Mode"],
                    [_ms.a.bD], null, "Mode", null, _ms.a.bE, 1, null, null, 0
                ]
            ],
            [
                [-1, 0, ["AppStatusBarViewModel"],
                    [_ms.a.bu], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["IsHidden"],
                    [_ms.a.ct], null, "IsHidden", null, _ms.a.l, 1, null, null, !0
                ]
            ],
            [
                [-1, 1, ["TransitionProvider"],
                    [_ms.a.bT], null, "TransitionProvider", null, _ms.a.cM, 0, null, null, null
                ],
                [-1, 1, ["ViewDeactivationResolver"],
                    [_ms.a.bU], null, "ViewDeactivationResolver", null, _ms.a.cN, 0, null, null, null
                ],
                [-1, 0, ["ModuleConductor"],
                    [_ms.a.bx], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["PreventModuleViewActivation"],
                    [_ms.a.cz], null, "PreventFirstViewNavigation", null, _ms.a.cK, 1, null, null, !1
                ],
                [0, 0, ["ActiveNavigationStack"],
                    [_ms.a.cy], null, "ActiveNavigationStack", null, _ms.a.cJ, 1, null, null, null
                ],
                [0, 0, ["ActiveItems"],
                    [_ms.a.cx], null, "ActiveItems", null, _ms.a.cI, 1, null, null, null
                ],
                [0, 0, ["TransitionInProgress"],
                    [_ms.a.cA], _ms.a.cB, "TransitionInProgress", _ms.a.cH, _ms.a.cL, 2, null, null, !1
                ]
            ],
            [
                [-1, 0, ["RepromptViewModel"],
                    [_ms.a.bz], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["IsShown"],
                    [_ms.a.cn], _ms.a.cp, "IsShown", _ms.a.bq, _ms.a.bs, 2, null, null, !1
                ],
                [0, 0, ["Title"],
                    [_ms.a.co], null, "DialogTitle", null, _ms.a.bp, 1, null, null, null
                ],
                [0, 0, ["CloseCommand"],
                    [_ms.a.ck], null, "CloseCommand", null, _ms.a.br, 1, null, null, null
                ],
                [0, 0, ["ContentDataContext"],
                    [_ms.a.cl], null, "ContentDataContext", null, _ms.a.bo, 1, null, null, null
                ],
                [0, 0, ["FooterButtons"],
                    [_ms.a.cm], null, "ButtonDataList", null, _ms.a.bn, 1, null, null, null
                ]
            ],
            [
                [-1, 0, ["OwaUserConfigurationUpdatedViewModel"],
                    [_ms.a.by], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ]
            ]
        ]);
        var n = _ms.a.g.childNodes[0].cloneNode(!0);
        var s = new _j.c(n.children[2]);
        s.L(!0);
        s.y("OwaUserConfigurationUpdatedView");
        var c = new _fce.m(n.children[1], _j.b.Instance.a(_fc.f), _j.b.Instance.a(_j.j), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        c.b("PasswordPromptView");
        var o = new _n.g(_j.a.a(n, [0, 0, 4]), _j.b.Instance.a(_n.f), _j.b.Instance.a(_b.a));
        o.eK(_fce.c.a, 4);
        o.z.parentNode.removeChild(o.z);
        var i = new _j.c(_j.a.a(n, [0, 0, 3]));
        i.L(!0);
        i.eK(_fce.c.a, 2);
        i.eK(_fce.c.b, 0);
        i.y("AppStatusBarView");
        i.z.parentNode.removeChild(i.z);
        var u = new _n.bC(_j.a.a(n, [0, 0, 2]));
        u.cn(!0);
        u.eK(_fce.c.a, 2);
        u.L(!0);
        u.z.parentNode.removeChild(u.z);
        var f = new _n.A(_j.a.a(n, [0, 0, 1]));
        f.cn(!0);
        f.eK(_fce.c.a, 0);
        f.L(!0);
        f.z.parentNode.removeChild(f.z);
        var e = new _b.p(_j.a.a(n, [0, 0, 0]), _j.b.Instance.a(_a.e));
        e.eK(_fce.c.a, 0);
        e.eK(_fce.c.b, 50);
        e.z.parentNode.removeChild(e.z);
        var r = new _fce.c(_j.a.a(n, [0, 0]), _j.b.Instance.a(_ff.a), _j.b.Instance.a(_ff.b));
        r.b(2);
        var h = new _ms.s(n.children[0], _j.b.Instance.a(_ff.b), _j.b.Instance.a(_j.o), _j.b.Instance.a(_ms.n));
        h.p("RevealSubPanel");
        r.a.a(e);
        r.a.a(f);
        r.a.a(u);
        r.a.a(i);
        r.a.a(o);
        return new _j.a(n, [h, r, e, f, u, i, o, c, s]).l({
            PrimaryContainer: r
        })
    }, "", _y.j, _ms.h, function(n) {
        return new _ms.h(n, _j.b.Instance.a(_j.j), _j.b.Instance.a(_n.bf), _j.b.Instance.a(_y.a), _j.b.Instance.a(_b.Q), _j.b.Instance.a(_j.o), _j.b.Instance.a(_a.e))
    }, !0, !1, !1, 0, _ms.a.a);
    var n = "ScreenView.Narrow";
    new _j.d(n, function() {
        _ms.a.a[n] === undefined && (_ms.a.a[n] = [
            [
                [-1, 0, ["TopAppBarViewModel"],
                    [_ms.a.bi], null, "DataContext", null, _ms.a.b, 1, null, null, null
                ],
                [0, 0, ["Mode"],
                    [_ms.a.O], null, "Mode", null, _ms.a.bc, 1, null, null, 0
                ]
            ]
        ]);
        var i = _ms.a.g.childNodes[16].cloneNode(!0);
        var t = new _n.A(i.children[0]);
        t.cn(!0);
        t.L(!0);
        return new _j.a(i, [t])
    }, "", _y.C, _n.z, function(n) {
        return new _n.z(n, _j.b.Instance.a(_j.bF.$$(_j.c)).a(null), _j.b.Instance.a(_b.a))
    }, !1, !1, !1, 0, _ms.a.a)
};
_ms.t.load();

function BootReadingPaneComponent() {}
BootReadingPaneComponent.$$cctor = function() {
    _a.t.a().a(BootReadingPaneComponent)
};
BootReadingPaneComponent.prototype = {
    b: function(n, t, i) {
        var r = this;
        n.b(_brp.b, function() {
            return new _brp.b(n.a(_a.x), n.c(_h.cI), n.a(_h.Y), i, n.c(_h.bC))
        }).b(IConversationItemPartsFactory).a()
    },
    a: function() {
        return null
    }
};
Type.registerNamespace("_brp");
_brp.a = function(n, t, i, r, u, f, e) {
    this.X = Function.createDelegate(this, this.cl);
    this.bj = Function.createDelegate(this, this.cb);
    this.bl = Function.createDelegate(this, this.ci);
    this.bk = Function.createDelegate(this, this.cc);
    this.bm = Function.createDelegate(this, this.cn);
    this.bn = Function.createDelegate(this, this.co);
    this.W = Function.createDelegate(this, this.ck);
    this.V = Function.createDelegate(this, this.cj);
    this.H = Function.createDelegate(this, this.cg);
    this.bc = undefined;
    this.R = new Sys.EventHandlerList;
    this.E = new Sys.EventHandlerList;
    _brp.a.initializeBase(this);
    this.A = t;
    this.M = n;
    this.bs = i;
    this.I = {};
    this.G = {};
    this.b = new _j.l;
    this.b.d(this.H);
    this.ba = u;
    this.bp = f;
    this.Z = e;
    if (r) {
        this.B = r;
        this.bh = r.q();
        this.bB = r.i() || r.r()
    }
};
_brp.a.c = function(n, t) {
    for (var u = 0; u < n.x.length; u++) {
        var e = n.x[u];
        var i = e.a();
        if (i)
            for (var r = 0; r < i.b(); r++) {
                var f = _h.d.a().a(i.a(r).bH.ItemId.Id);
                if (f) {
                    t(f);
                    if (f.dh) return !0
                }
            }
    }
    return !1
};
_brp.a.d = function(n) {
    if (n)
        for (var r = n.x.length - 1; r >= 0; --r)
            for (var i = n.x[r], t = i.a().b() - 1; t >= 0; --t) {
                var u = i.a().a(t);
                i.a().o(t)
            }
};
_brp.a.b = function(n, t) {
    for (var u = 0; u < n.x.length; u++) {
        var i = n.x[u];
        if (i && i.a())
            for (var r = 0; r < i.a().b(); r++)
                if (i.a().a(r).bH.ItemId.Id === t) return i
    }
    return null
};
_brp.a.prototype = {
    M: 0,
    D: 20,
    b: null,
    y: null,
    x: null,
    bs: !1,
    B: null,
    bp: null,
    A: null,
    bt: null,
    bE: 0,
    bD: 0,
    K: !1,
    G: null,
    I: null,
    bC: !1,
    bF: !1,
    bb: !1,
    be: !1,
    Y: null,
    bw: !1,
    S: "",
    C: !1,
    L: null,
    ba: null,
    e: null,
    bd: !1,
    bv: 0,
    O: !1,
    bf: !1,
    P: null,
    U: 0,
    T: 0,
    bh: !1,
    bB: !1,
    Z: null,
    o: function() {
        return this.A
    },
    g: function() {
        return this.b.x.length
    },
    a: function() {
        return this.b
    },
    d: function() {
        return this.K
    },
    bS: function(n) {
        this.K = n;
        this.eJ("Loading");
        return n
    },
    j: function() {
        return this.be
    },
    bA: function(n) {
        if (this.be !== n) {
            this.be = n;
            this.eJ("IsLoadMoreInProgress")
        }
        return n
    },
    f: function() {
        return this.bb
    },
    bi: function(n) {
        if (this.bb !== n) {
            this.bb = n;
            this.eJ("CanLoadMore")
        }
        return n
    },
    p: function() {
        return this.bw
    },
    h: function(n) {
        this.bw = n;
        return n
    },
    c: function() {
        return this.Y
    },
    v: function(n) {
        this.C = n;
        return n
    },
    s: function() {
        return this.S
    },
    r: function() {
        throw Error.notImplemented();
    },
    k: function(n) {
        return this.I[n]
    },
    z: function() {
        var n = this.E.getHandler("update");
        n && n();
        this.dispose()
    },
    Q: function() {},
    q: function(n) {
        if (this.D >= 100) {
            this.bi(!1);
            return !1
        } else {
            this.D = Math.min(this.D + 10, 100);
            var t = this.e || this.y;
            this.O = !0;
            this.N(t, 200, n);
            this.bA(!0);
            return !0
        }
    },
    l: function(n, t, i) {
        this.bo();
        this.bi(!1);
        var r = this.e || this.y;
        this.bf = !0;
        this.bc = t;
        this.bd = i;
        this.N(r, 200, n)
    },
    t: function(n) {
        var t = _brp.a.c(this.b, n);
        this.C = t || this.C
    },
    n: function(n) {
        return this.C ? !0 : this.e ? this.bq(n, this.e.V(), this.e.bH.GlobalUnreadCount, this.e.bH.GlobalMessageCount) : this.K ? this.bq(n, this.P, this.U, this.T) : this.bq(n, this.bt, this.bE, this.bD)
    },
    i: function(n, t, i) {
        if (this.A.Id !== n.bH.ConversationId.Id) throw Error.argument("conversation.Id");
        if (this.C) {
            this.l(i);
            return !0
        }
        if (this.n(n)) {
            this.N(n, t, i);
            return !0
        } else if (this.K) {
            i && this.E.addHandler("update", i);
            return !0
        }
        return !1
    },
    w: function(n, t) {
        if (this.A.Id !== n.bH.ConversationId.Id) throw Error.argument("conversation.Id");
        if (this.B && this.B.a().g().Enabled) {
            if (this.y) this.N(n, 203, t);
            else if (!this.L) {
                this.P = n.V();
                this.U = n.bH.GlobalUnreadCount;
                this.T = n.bH.GlobalMessageCount;
                this.L = t;
                this.bP(n)
            }
        } else this.N(n, 201, t)
    },
    m: function(n, t) {
        return null
    },
    u: function(n) {
        return null
    },
    bG: function(n) {
        var t = this.bH(n, this.M, this.e);
        this.x = t;
        this.x.b(this.V);
        this.x.c(this.W)
    },
    bI: function(n, t) {
        if (this.ba) {
            var r = !n && !!t.TailoredXpEntitiesChangeNumber;
            var i = !!n && n.fP() < t.TailoredXpEntitiesChangeNumber;
            if (r || i) {
                var u = this;
                this.ba.a(function(n) {
                    var i = new _g.e;
                    i.Id = t.ItemId.Id;
                    i.ChangeKey = t.ItemId.ChangeKey;
                    var r = n.a(204, i);
                    _a.g.a.a(r)
                })
            }
        }
    },
    bK: function(n, t, i, r) {
        var u = new Sys.StringBuilder;
        u.append("Error encountered while attempting to merge new nodes into conversation:\n");
        u.append(t);
        u.append("\n\nAction.Error information:\n");
        u.append(n);
        u.append("\nExisting Nodes in Conversation:\n");
        u.append(i);
        u.append("\nNew Nodes being Merged:\n");
        u.append(r);
        return u.toString()
    },
    bx: function(n) {
        var i = n.k[0];
        var t = i.Conversation.ConversationNodes;
        t || (t = []);
        var f = t.length;
        this.bi(!(t.length < this.D));
        var r = {};
        this.bh && this.cp(t, r);
        var e = n.G ? n.G.message : "no action error (success)";
        this.bN(t, this.b, e);
        var u = "";
        f === i.Conversation.TotalConversationNodesCount && (u = i.Conversation.SyncState);
        this.bh && this.ca(r);
        return u
    },
    bP: function(n) {
        this.y = n;
        var t = this.bH("", 201, n);
        t.c(this.bn);
        t.a(this.bm);
        _a.g.a.a(t)
    },
    ck: function(n) {
        if (n === this.x) {
            var t = this.E.getHandler("update");
            this.Y = n.G;
            this.bz();
            this.S = this.bx(n);
            this.bU();
            t && t();
            this.e && this.bu()
        }
    },
    cj: function(n) {
        this.bR(n, "OnGetConversationItemActionFailed");
        if (n === this.x) {
            var i = this.E.getHandler("update");
            this.Y = n.G;
            if (n.G) {
                var t = n;
                var u = t.Q;
                if (u) {
                    var r = t.N.Body.ResponseMessages.Items[0];
                    !_j.h.a(r.StackTrace)
                }
            }
            this.bz();
            i && i();
            this.e && this.bu()
        }
    },
    co: function(n) {
        if (this.b) {
            this.S = this.bx(n);
            this.bU()
        }
    },
    cn: function(n) {
        this.bR(n, "OnPrefetchGetConversationItemActionCompleted");
        if (this.L) {
            this.L();
            this.L = null
        }
    },
    bg: function(n, t) {
        t.InternetMessageId && n.n(t.InternetMessageId);
        t.ParentInternetMessageId && n.q(t.ParentInternetMessageId);
        t.QuotedTextList && n.r(new _a.j(t.QuotedTextList));
        t.IsQuotedTextChanged && n.o(t.IsQuotedTextChanged);
        t.HasQuotedText && n.k(!0);
        var r = this,
            u = this,
            i = this;
        _h.Q.a(n.a().f, t.Items, function(n) {
            return n.bH.ItemId.Id
        }, function(n) {
            return n.ItemId.Id
        }, function(n, t) {
            if (n) {
                i.bT(n, t);
                return n
            } else {
                var r = _h.d.a().a(t.ItemId.Id);
                if (r) {
                    i.bT(r, t);
                    return r
                } else try {
                    var u = t;
                    i.bI(null, u);
                    i.bL(u);
                    return _g.f.a(t)
                } catch (f) {
                    i.bZ(t);
                    throw f;
                }
            }
        }, !0, !1, _brp.a.a)
    },
    by: function() {
        if (!this.b.x.length && !this.bF) {
            _h.x.b().a(this.A.Id, 2, this.bk);
            _h.x.b().a(this.A.Id, 1, this.bl);
            this.bF = !0
        }
    },
    bY: function() {
        if (!this.bC) {
            _h.x.b().b(this.A.Id, 2, this.bk);
            _h.x.b().b(this.A.Id, 1, this.bl);
            this.bC = !0
        }
    },
    cg: function(n, t) {
        var e = t.a;
        var f = t.b;
        if (f)
            for (var o = f, c = o.length, r = 0; r < c; ++r) {
                var l = o[r];
                this.cf(l)
            }
        if (e)
            for (var u = e, h = u.length, i = 0; i < h; ++i) {
                var s = u[i];
                this.ce(s)
            }
    },
    bo: function() {
        _brp.a.d(this.b)
    },
    bQ: function(n) {
        this.b.p(n, !0)
    },
    bJ: function(n) {
        return _brp.a.b(this.b, n)
    },
    eL: function() {
        this.by();
        this.bz();
        this.e = null;
        this.bo();
        this.b.e(this.H);
        var n;
        _a.h.a(n = {
            val: this.b
        }), this.b = n.val;
        this.I = null;
        this.E = null;
        this.R = null;
        _a.gd.prototype.eL.call(this)
    },
    bR: function(n, t) {
        if (n.G) {
            var r = n.G;
            var u = r;
            var i = n;
            if (u.ExceptionName === "OwaSerializationException") {
                _j.e.c(_brp.a.a, "OwaSerializationException source: " + t);
                this.bM("RPLogGCISerializationException", i)
            }
            if (i.h() === "ErrorInvalidIdEmpty") {
                _j.e.c(_brp.a.a, "ErrorInvalidIdEmpty source: " + t);
                this.bM("RPLogGCIEmptyId", i)
            }
        }
    },
    bM: function(n, t) {
        var r;
        try {
            var f = t.Q.request.parameters;
            var i = f.Body.Conversations[0].ConversationId;
            r = !i || _j.h.a(i.Id) ? "NullOrEmpty Id" : i.Id
        } catch (e) {
            r = "Exception getting Id"
        }
        var u = new _a.l;
        u.a("c", r);
        _a.b.c(_brp.a.a, n, u.toString(), 0)
    },
    ca: function(n) {
        for (var r = 0; r < this.b.x.length; ++r) {
            var t = this.b.x[r];
            var i = [];
            t.bH.InternetMessageId in n && (i = n[t.bH.InternetMessageId]);
            !i.length && !t.b().x.length || this.bN(i, t.b(), "OOF Message Merge Error")
        }
    },
    N: function(n, t, i) {
        this.e = n;
        this.bv = t;
        i && this.R.addHandler("update", i);
        this.K || this.bu()
    },
    bq: function(n, t, i, r) {
        if (t) {
            if (!n.V()) return !0;
            if (t.a(n.V()) > 0) return !1
        }
        return !t || !n.V() ? !0 : t.a(n.V()) < 0 || i !== n.bH.GlobalUnreadCount || r !== n.bH.GlobalMessageCount ? !0 : !1
    },
    cp: function(n, t) {
        for (var h = new Array(0), e = n.length - 1; e >= 0; --e) {
            var i = n[e];
            if (i.Items[0].ItemClass === "IPM.Note.Rules.OofTemplate.Microsoft") {
                i.ParentInternetMessageId in t || (t[i.ParentInternetMessageId] = []);
                Array.insert(t[i.ParentInternetMessageId], 0, i)
            } else h.push(i.InternetMessageId)
        }
        for (var c = Object.keys(t), s = c, a = s.length, f = 0; f < a; ++f) {
            var u = s[f];
            if (Array.indexOf(h, u) !== -1)
                for (var o = t[u], l = o.length, r = 0; r < l; r++) Array.remove(n, o[r]);
            else delete t[u]
        }
    },
    bN: function(n, t, i) {
        try {
            var f = this,
                e = this,
                r = this;
            _h.Q.a(t, n, function(n) {
                return n.bH.InternetMessageId
            }, function(n) {
                return n.InternetMessageId
            }, function(n, t) {
                var i = n ? n : new _g.ce;
                r.bg(i, t);
                return i
            }, !0, !1, _brp.a.a)
        } catch (u) {
            _a.c.o(u, this.bK(i, _g.fe.a(this.y), _g.fe.b(t), _g.fe.c(n)))
        }
    },
    bu: function() {
        this.y = this.e;
        this.M = this.bv;
        this.E = this.R;
        this.P = this.y.V();
        this.U = this.y.bH.GlobalUnreadCount;
        this.T = this.y.bH.GlobalMessageCount;
        var n = this.O || this.bf || this.C ? "" : this.S;
        this.bG(n);
        this.e = null;
        this.R = new Sys.EventHandlerList;
        this.O = !1;
        this.bf = !1;
        this.C = !1;
        this.bS(!0);
        this.bA(this.O);
        _a.g.a.a(this.x)
    },
    bz: function() {
        this.E = new Sys.EventHandlerList;
        if (this.x) {
            this.x.T(this.V);
            this.x.U(this.W);
            this.x = null
        }
        this.bS(!1);
        this.bA(!1)
    },
    bZ: function(n) {
        var t;
        try {
            t = JSON.stringify(n)
        } catch (i) {
            _j.e.b(_brp.a.a, "CIP.MCN Error: " + i.message);
            return
        }
        _j.e.b(_brp.a.a, "CIP.MCN Json: {0}", t)
    },
    bT: function(n, t) {
        this.bI(n, t);
        this.bL(t);
        this.B.a().cg().Enabled && this.br(n, t, _h.v.d());
        this.B.a().dh().Enabled && this.br(n, t, _h.v.e());
        this.B.a().df().Enabled && this.br(n, t, _g.c.bs());
        if (t.ContainsOnlyMandatoryProperties) n.dX(t);
        else {
            t.Subject = n.bH.Subject;
            if (n.cf() && !n.cf().bH.IsTruncated && t.UniqueBody && t.UniqueBody.IsTruncated) {
                var u = new _g.t(n.cf().a() === "HTML" ? "HTML" : "Text", n.cf().bH.Value);
                u.IsTruncated = !0;
                t.UniqueBody = u
            }
            if (n.ck()) {
                var r = new _g.t(n.ck().a() === "HTML" ? "HTML" : "Text", n.ck().bH.Value);
                r.IsTruncated = n.ck().bH.IsTruncated;
                t.NormalizedBody = r
            }
            if (n.X()) {
                var i = new _g.t(n.X().a() === "HTML" ? "HTML" : "Text", n.X().bH.Value);
                i.IsTruncated = n.X().bH.IsTruncated;
                t.Body = i
            }!t.QuotedTextList && n.dt() && (t.QuotedTextList = n.dt().e());
            n.l(t)
        }
    },
    cf: function(n) {
        var t = n;
        delete this.I[t.bH.InternetMessageId];
        t.a().m();
        t.a().q(this.bj);
        this.by()
    },
    ce: function(n) {
        var t = n;
        this.I[t.bH.InternetMessageId] = t;
        for (var i = 0; i < t.a().b(); i++) {
            var r = t.a().a(i);
            this.bO(r, t)
        }
        t.a().p(this.bj);
        this.bY()
    },
    cb: function(n, t) {
        var r = t.a;
        var u = t.b;
        var i = null;
        if (u && u.length) {
            i = this.G[u[0].bH.ItemId.Id];
            for (var o = u, l = o.length, f = 0; f < l; ++f) {
                var a = o[f];
                this.cm(a)
            }
        }
        if (r && r.length) {
            i || (i = this.bJ(r[0].bH.ItemId.Id));
            for (var s = r, c = s.length, e = 0; e < c; ++e) {
                var h = s[e];
                this.bO(h, i)
            }
        }
        i && !i.a().b() && this.bQ(i)
    },
    cm: function(n) {
        var t = n;
        delete this.G[t.bH.ItemId.Id];
        _h.d.a().c(t.bH.ItemId.Id);
        t.dC(this.X)
    },
    bO: function(n, t) {
        this.G[n.bH.ItemId.Id] = t;
        _h.d.a().d(n.bH.ItemId.Id) ? _h.d.a().e(n.bH.ItemId.Id) : _h.d.a().b(n.bH.ItemId.Id, n);
        n.dE(this.X)
    },
    cl: function(n, t) {
        var i = n;
        i.dC(this.X);
        var r = this.G[i.bH.ItemId.Id];
        r && r.a().k(i)
    },
    cc: function(n, t) {
        for (var f = n, i = 0; i < f.a().b(); i++) {
            var e = f.a().a(i).Id;
            var r = this.G[e];
            var u = _h.d.a().a(e);
            u && r && r.a().k(u)
        }
    },
    ci: function(n, t) {
        var r = n;
        var i = t;
        i.a === "UnreadCount" ? this.ch(r) : i.a === "GlobalUnreadCount" && this.cd(r)
    },
    ch: function(n) {
        var r = !1;
        if (n.bH.UnreadCount === n.a().b()) r = !1;
        else if (n.bH.UnreadCount) return;
        else r = !0;
        for (var i = 0; i < n.a().b(); i++) {
            var t = _h.d.a().a(n.a().a(i).Id);
            t && t.dj() && t.h(r)
        }
    },
    cd: function(n) {
        var r = !1;
        if (n.bH.GlobalUnreadCount === n.e().b()) r = !1;
        else if (n.bH.GlobalUnreadCount) return;
        else r = !0;
        for (var i = 0; i < n.e().b(); i++) {
            var t = _h.d.a().a(n.e().a(i).Id);
            t && t.dj() && t.h(r)
        }
    },
    bH: function(n, t, i) {
        var r = _h.bc.a(t, i.bH.ConversationId.Id, i.bH.ConversationId.ChangeKey, this.D, i.V(), null, "ItemPart", n, !this.bs, this.bc, this.bd, 0, "", this.B, this.bp, this.bB);
        r.o = i.bp();
        return r
    },
    bU: function() {
        this.bt = this.P;
        this.bD = this.T;
        this.bE = this.U
    },
    br: function(n, t, i) {
        if (t && t.ExtendedProperty)
            for (var o = t.ExtendedProperty, s = o.length, u = 0; u < s; ++u) {
                var h = o[u];
                var r = h.ExtendedFieldURI;
                if (r && r.PropertySetId === i.PropertySetId && r.PropertyTag === i.PropertyTag && r.PropertyId === i.PropertyId && r.PropertyName === i.PropertyName && r.DistinguishedPropertySetId === i.DistinguishedPropertySetId) return
            }
        if (n && n.bV()) {
            var e = _g.c.a(n.bV().e(), i);
            if (e) {
                var f = new _g.T;
                f.ExtendedFieldURI = i;
                f.Value = e.bH.Value;
                t.ExtendedProperty = t.ExtendedProperty.concat(f)
            }
        }
    },
    bL: function(n) {
        if (this.Z && n && _h.v.i(this.B, n)) {
            var t = this;
            this.Z.a(function(n) {
                n.b(_a.d.a())
            })
        }
    }
};
_brp.b = function(n, t, i, r, u) {
    n.a().bp().Enabled && (this.c = t);
    this.f = i;
    this.e = n;
    this.d = r;
    n.a().ek().Enabled && (this.b = u)
};
_brp.b.prototype = {
    c: null,
    f: null,
    e: null,
    d: null,
    b: null,
    a: function(n, t) {
        return new _brp.a(n, t, this.f.a(), this.e, this.c, this.d, this.b)
    }
};
BootReadingPaneComponent.registerClass("BootReadingPaneComponent", null, _a.kj, _j.ce);
_brp.a.registerClass("_brp.a", _a.co, _h.bP, IConversationItemParts, _j.bs, Sys.IDisposable);
_brp.b.registerClass("_brp.b", null, IConversationItemPartsFactory);
BootReadingPaneComponent.$$cctor();
_brp.a.a = _a.a.U;
/*! Hammer.JS - v2.0.6 - 2016-01-06
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the  license */
! function(a, b, c, d) {
    "use strict";

    function e(a, b, c) {
        return setTimeout(j(a, c), b)
    }

    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }

    function g(a, b, c) {
        var e;
        if (a)
            if (a.forEach) a.forEach(b, c);
            else if (a.length !== d)
            for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
        else
            for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function h(b, c, d) {
        var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
        return function() {
            var c = new Error("get-stack-trace"),
                d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                f = a.console && (a.console.warn || a.console.log);
            return f && f.call(a.console, e, d), b.apply(this, arguments)
        }
    }

    function i(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && ha(d, c)
    }

    function j(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }

    function k(a, b) {
        return typeof a == ka ? a.apply(b ? b[0] || d : d, b) : a
    }

    function l(a, b) {
        return a === d ? b : a
    }

    function m(a, b, c) {
        g(q(b), function(b) {
            a.addEventListener(b, c, !1)
        })
    }

    function n(a, b, c) {
        g(q(b), function(b) {
            a.removeEventListener(b, c, !1)
        })
    }

    function o(a, b) {
        for (; a;) {
            if (a == b) return !0;
            a = a.parentNode
        }
        return !1
    }

    function p(a, b) {
        return a.indexOf(b) > -1
    }

    function q(a) {
        return a.trim().split(/\s+/g)
    }

    function r(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b) return d;
            d++
        }
        return -1
    }

    function s(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
        }
        return c && (d = b ? d.sort(function(a, c) {
            return a[b] > c[b]
        }) : d.sort()), d
    }

    function u(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ia.length;) {
            if (c = ia[g], e = c ? c + f : b, e in a) return e;
            g++
        }
        return d
    }

    function v() {
        return qa++
    }

    function w(b) {
        var c = b.ownerDocument || b;
        return c.defaultView || c.parentWindow || a
    }

    function x(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) {
            k(a.options.enable, [a]) && c.handler(b)
        }, this.init()
    }

    function y(a) {
        var b, c = a.options.inputClass;
        return new(b = c ? c : ta ? M : ua ? P : sa ? R : L)(a, z)
    }

    function z(a, b, c) {
        var d = c.pointers.length,
            e = c.changedPointers.length,
            f = b & Aa && d - e === 0,
            g = b & (Ca | Da) && d - e === 0;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function A(a, b) {
        var c = a.session,
            d = b.pointers,
            e = d.length;
        c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput,
            g = c.firstMultiple,
            h = g ? g.center : f.center,
            i = b.center = E(d);
        b.timeStamp = na(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
        var j = F(b.deltaTime, b.deltaX, b.deltaY);
        b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = ma(j.x) > ma(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
        var k = a.element;
        o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
    }

    function B(a, b) {
        var c = b.center,
            d = a.offsetDelta || {},
            e = a.prevDelta || {},
            f = a.prevInput || {};
        (b.eventType === Aa || f.eventType === Ca) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function C(a, b) {
        var c, e, f, g, h = a.lastInterval || b,
            i = b.timeStamp - h.timeStamp;
        if (b.eventType != Da && (i > za || h.velocity === d)) {
            var j = b.deltaX - h.deltaX,
                k = b.deltaY - h.deltaY,
                l = F(i, j, k);
            e = l.x, f = l.y, c = ma(l.x) > ma(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
        } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }

    function D(a) {
        for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
            clientX: la(a.pointers[c].clientX),
            clientY: la(a.pointers[c].clientY)
        }, c++;
        return {
            timeStamp: na(),
            pointers: b,
            center: E(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        }
    }

    function E(a) {
        var b = a.length;
        if (1 === b) return {
            x: la(a[0].clientX),
            y: la(a[0].clientY)
        };
        for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
        return {
            x: la(c / b),
            y: la(d / b)
        }
    }

    function F(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        }
    }

    function G(a, b) {
        return a === b ? Ea : ma(a) >= ma(b) ? 0 > a ? Fa : Ga : 0 > b ? Ha : Ia
    }

    function H(a, b, c) {
        c || (c = Ma);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }

    function I(a, b, c) {
        c || (c = Ma);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }

    function J(a, b) {
        return I(b[1], b[0], Na) + I(a[1], a[0], Na)
    }

    function K(a, b) {
        return H(b[0], b[1], Na) / H(a[0], a[1], Na)
    }

    function L() {
        this.evEl = Pa, this.evWin = Qa, this.allow = !0, this.pressed = !1, x.apply(this, arguments)
    }

    function M() {
        this.evEl = Ta, this.evWin = Ua, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function N() {
        this.evTarget = Wa, this.evWin = Xa, this.started = !1, x.apply(this, arguments)
    }

    function O(a, b) {
        var c = s(a.touches),
            d = s(a.changedTouches);
        return b & (Ca | Da) && (c = t(c.concat(d), "identifier", !0)), [c, d]
    }

    function P() {
        this.evTarget = Za, this.targetIds = {}, x.apply(this, arguments)
    }

    function Q(a, b) {
        var c = s(a.touches),
            d = this.targetIds;
        if (b & (Aa | Ba) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
        var e, f, g = s(a.changedTouches),
            h = [],
            i = this.target;
        if (f = c.filter(function(a) {
                return o(a.target, i)
            }), b === Aa)
            for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ca | Da) && delete d[g[e].identifier], e++;
        return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
    }

    function R() {
        x.apply(this, arguments);
        var a = j(this.handler, this);
        this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a)
    }

    function S(a, b) {
        this.manager = a, this.set(b)
    }

    function T(a) {
        if (p(a, db)) return db;
        var b = p(a, eb),
            c = p(a, fb);
        return b && c ? db : b || c ? b ? eb : fb : p(a, cb) ? cb : bb
    }

    function U(a) {
        this.options = ha({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = gb, this.simultaneous = {}, this.requireFail = []
    }

    function V(a) {
        return a & lb ? "cancel" : a & jb ? "end" : a & ib ? "move" : a & hb ? "start" : ""
    }

    function W(a) {
        return a == Ia ? "down" : a == Ha ? "up" : a == Fa ? "left" : a == Ga ? "right" : ""
    }

    function X(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }

    function Y() {
        U.apply(this, arguments)
    }

    function Z() {
        Y.apply(this, arguments), this.pX = null, this.pY = null
    }

    function $() {
        Y.apply(this, arguments)
    }

    function _() {
        U.apply(this, arguments), this._timer = null, this._input = null
    }

    function aa() {
        Y.apply(this, arguments)
    }

    function ba() {
        Y.apply(this, arguments)
    }

    function ca() {
        U.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function da(a, b) {
        return b = b || {}, b.recognizers = l(b.recognizers, da.defaults.preset), new ea(a, b)
    }

    function ea(a, b) {
        this.options = ha({}, da.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = y(this), this.touchAction = new S(this, this.options.touchAction), fa(this, !0), g(this.options.recognizers, function(a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
        }, this)
    }

    function fa(a, b) {
        var c = a.element;
        c.style && g(a.options.cssProps, function(a, d) {
            c.style[u(c.style, d)] = b ? a : ""
        })
    }

    function ga(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }
    var ha, ia = ["", "webkit", "Moz", "MS", "ms", "o"],
        ja = b.createElement("div"),
        ka = "function",
        la = Math.round,
        ma = Math.abs,
        na = Date.now;
    ha = "function" != typeof Object.assign ? function(a) {
        if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var e = arguments[c];
            if (e !== d && null !== e)
                for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f])
        }
        return b
    } : Object.assign;
    var oa = h(function(a, b, c) {
            for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
            return a
        }, "extend", "Use `assign`."),
        pa = h(function(a, b) {
            return oa(a, b, !0)
        }, "merge", "Use `assign`."),
        qa = 1,
        ra = /mobile|tablet|ip(ad|hone|od)|android/i,
        sa = "ontouchstart" in a,
        ta = u(a, "PointerEvent") !== d,
        ua = sa && ra.test(navigator.userAgent),
        va = "touch",
        wa = "pen",
        xa = "mouse",
        ya = "kinect",
        za = 25,
        Aa = 1,
        Ba = 2,
        Ca = 4,
        Da = 8,
        Ea = 1,
        Fa = 2,
        Ga = 4,
        Ha = 8,
        Ia = 16,
        Ja = Fa | Ga,
        Ka = Ha | Ia,
        La = Ja | Ka,
        Ma = ["x", "y"],
        Na = ["clientX", "clientY"];
    x.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler)
        }
    };
    var Oa = {
            mousedown: Aa,
            mousemove: Ba,
            mouseup: Ca
        },
        Pa = "mousedown",
        Qa = "mousemove mouseup";
    i(L, x, {
        handler: function(a) {
            var b = Oa[a.type];
            b & Aa && 0 === a.button && (this.pressed = !0), b & Ba && 1 !== a.which && (b = Ca), this.pressed && this.allow && (b & Ca && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: xa,
                srcEvent: a
            }))
        }
    });
    var Ra = {
            pointerdown: Aa,
            pointermove: Ba,
            pointerup: Ca,
            pointercancel: Da,
            pointerout: Da
        },
        Sa = {
            2: va,
            3: wa,
            4: xa,
            5: ya
        },
        Ta = "pointerdown",
        Ua = "pointermove pointerup pointercancel";
    a.MSPointerEvent && !a.PointerEvent && (Ta = "MSPointerDown", Ua = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
        handler: function(a) {
            var b = this.store,
                c = !1,
                d = a.type.toLowerCase().replace("ms", ""),
                e = Ra[d],
                f = Sa[a.pointerType] || a.pointerType,
                g = f == va,
                h = r(b, a.pointerId, "pointerId");
            e & Aa && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ca | Da) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var Va = {
            touchstart: Aa,
            touchmove: Ba,
            touchend: Ca,
            touchcancel: Da
        },
        Wa = "touchstart",
        Xa = "touchstart touchmove touchend touchcancel";
    i(N, x, {
        handler: function(a) {
            var b = Va[a.type];
            if (b === Aa && (this.started = !0), this.started) {
                var c = O.call(this, a, b);
                b & (Ca | Da) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: va,
                    srcEvent: a
                })
            }
        }
    });
    var Ya = {
            touchstart: Aa,
            touchmove: Ba,
            touchend: Ca,
            touchcancel: Da
        },
        Za = "touchstart touchmove touchend touchcancel";
    i(P, x, {
        handler: function(a) {
            var b = Ya[a.type],
                c = Q.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: va,
                srcEvent: a
            })
        }
    }), i(R, x, {
        handler: function(a, b, c) {
            var d = c.pointerType == va,
                e = c.pointerType == xa;
            if (d) this.mouse.allow = !1;
            else if (e && !this.mouse.allow) return;
            b & (Ca | Da) && (this.mouse.allow = !0), this.callback(a, b, c)
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var $a = u(ja.style, "touchAction"),
        _a = $a !== d,
        ab = "compute",
        bb = "auto",
        cb = "manipulation",
        db = "none",
        eb = "pan-x",
        fb = "pan-y";
    S.prototype = {
        set: function(a) {
            a == ab && (a = this.compute()), _a && this.manager.element.style && (this.manager.element.style[$a] = a), this.actions = a.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var a = [];
            return g(this.manager.recognizers, function(b) {
                k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }), T(a.join(" "))
        },
        preventDefaults: function(a) {
            if (!_a) {
                var b = a.srcEvent,
                    c = a.offsetDirection;
                if (this.manager.session.prevented) return void b.preventDefault();
                var d = this.actions,
                    e = p(d, db),
                    f = p(d, fb),
                    g = p(d, eb);
                if (e) {
                    var h = 1 === a.pointers.length,
                        i = a.distance < 2,
                        j = a.deltaTime < 250;
                    if (h && i && j) return
                }
                if (!g || !f) return e || f && c & Ja || g && c & Ka ? this.preventSrc(b) : void 0
            }
        },
        preventSrc: function(a) {
            this.manager.session.prevented = !0, a.preventDefault()
        }
    };
    var gb = 1,
        hb = 2,
        ib = 4,
        jb = 8,
        kb = jb,
        lb = 16,
        mb = 32;
    U.prototype = {
        defaults: {},
        set: function(a) {
            return ha(this.options, a), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(a) {
            if (f(a, "recognizeWith", this)) return this;
            var b = this.simultaneous;
            return a = X(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
        },
        dropRecognizeWith: function(a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = X(a, this), delete this.simultaneous[a.id], this)
        },
        requireFailure: function(a) {
            if (f(a, "requireFailure", this)) return this;
            var b = this.requireFail;
            return a = X(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
        },
        dropRequireFailure: function(a) {
            if (f(a, "dropRequireFailure", this)) return this;
            a = X(a, this);
            var b = r(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id]
        },
        emit: function(a) {
            function b(b) {
                c.manager.emit(b, a)
            }
            var c = this,
                d = this.state;
            jb > d && b(c.options.event + V(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= jb && b(c.options.event + V(d))
        },
        tryEmit: function(a) {
            return this.canEmit() ? this.emit(a) : void(this.state = mb)
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (mb | gb))) return !1;
                a++
            }
            return !0
        },
        recognize: function(a) {
            var b = ha({}, a);
            return k(this.options.enable, [this, b]) ? (this.state & (kb | lb | mb) && (this.state = gb), this.state = this.process(b), void(this.state & (hb | ib | jb | lb) && this.tryEmit(b))) : (this.reset(), void(this.state = mb))
        },
        process: function(a) {},
        getTouchAction: function() {},
        reset: function() {}
    }, i(Y, U, {
        defaults: {
            pointers: 1
        },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        },
        process: function(a) {
            var b = this.state,
                c = a.eventType,
                d = b & (hb | ib),
                e = this.attrTest(a);
            return d && (c & Da || !e) ? b | lb : d || e ? c & Ca ? b | jb : b & hb ? b | ib : hb : mb
        }
    }), i(Z, Y, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: La
        },
        getTouchAction: function() {
            var a = this.options.direction,
                b = [];
            return a & Ja && b.push(fb), a & Ka && b.push(eb), b
        },
        directionTest: function(a) {
            var b = this.options,
                c = !0,
                d = a.distance,
                e = a.direction,
                f = a.deltaX,
                g = a.deltaY;
            return e & b.direction || (b.direction & Ja ? (e = 0 === f ? Ea : 0 > f ? Fa : Ga, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ea : 0 > g ? Ha : Ia, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
        },
        attrTest: function(a) {
            return Y.prototype.attrTest.call(this, a) && (this.state & hb || !(this.state & hb) && this.directionTest(a))
        },
        emit: function(a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = W(a.direction);
            b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a)
        }
    }), i($, Y, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [db]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & hb)
        },
        emit: function(a) {
            if (1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                a.additionalEvent = this.options.event + b
            }
            this._super.emit.call(this, a)
        }
    }), i(_, U, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [bb]
        },
        process: function(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Ca | Da) && !f) this.reset();
            else if (a.eventType & Aa) this.reset(), this._timer = e(function() {
                this.state = kb, this.tryEmit()
            }, b.time, this);
            else if (a.eventType & Ca) return kb;
            return mb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(a) {
            this.state === kb && (a && a.eventType & Ca ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = na(), this.manager.emit(this.options.event, this._input)))
        }
    }), i(aa, Y, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [db]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & hb)
        }
    }), i(ba, Y, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Ja | Ka,
            pointers: 1
        },
        getTouchAction: function() {
            return Z.prototype.getTouchAction.call(this)
        },
        attrTest: function(a) {
            var b, c = this.options.direction;
            return c & (Ja | Ka) ? b = a.overallVelocity : c & Ja ? b = a.overallVelocityX : c & Ka && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && ma(b) > this.options.velocity && a.eventType & Ca
        },
        emit: function(a) {
            var b = W(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
        }
    }), i(ca, U, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [cb]
        },
        process: function(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & Aa && 0 === this.count) return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ca) return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                    h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                var i = this.count % b.taps;
                if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function() {
                    this.state = kb, this.tryEmit()
                }, b.interval, this), hb) : kb
            }
            return mb
        },
        failTimeout: function() {
            return this._timer = e(function() {
                this.state = mb
            }, this.options.interval, this), mb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == kb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), da.VERSION = "2.0.6", da.defaults = {
        domEvents: !1,
        touchAction: ab,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [aa, {
                enable: !1
            }],
            [$, {
                    enable: !1
                },
                ["rotate"]
            ],
            [ba, {
                direction: Ja
            }],
            [Z, {
                    direction: Ja
                },
                ["swipe"]
            ],
            [ca],
            [ca, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [_]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var nb = 1,
        ob = 2;
    ea.prototype = {
        set: function(a) {
            return ha(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
        },
        stop: function(a) {
            this.session.stopped = a ? ob : nb
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers,
                    e = b.curRecognizer;
                (!e || e && e.state & kb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;) c = d[f], b.stopped === ob || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (hb | ib | jb) && (e = b.curRecognizer = c), f++
            }
        },
        get: function(a) {
            if (a instanceof U) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a) return b[c];
            return null
        },
        add: function(a) {
            if (f(a, "add", this)) return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
        },
        remove: function(a) {
            if (f(a, "remove", this)) return this;
            if (a = this.get(a)) {
                var b = this.recognizers,
                    c = r(b, a); - 1 !== c && (b.splice(c, 1), this.touchAction.update())
            }
            return this
        },
        on: function(a, b) {
            var c = this.handlers;
            return g(q(a), function(a) {
                c[a] = c[a] || [], c[a].push(b)
            }), this
        },
        off: function(a, b) {
            var c = this.handlers;
            return g(q(a), function(a) {
                b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
            }), this
        },
        emit: function(a, b) {
            this.options.domEvents && ga(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function() {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;) c[d](b), d++
            }
        },
        destroy: function() {
            this.element && fa(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, ha(da, {
        INPUT_START: Aa,
        INPUT_MOVE: Ba,
        INPUT_END: Ca,
        INPUT_CANCEL: Da,
        STATE_POSSIBLE: gb,
        STATE_BEGAN: hb,
        STATE_CHANGED: ib,
        STATE_ENDED: jb,
        STATE_RECOGNIZED: kb,
        STATE_CANCELLED: lb,
        STATE_FAILED: mb,
        DIRECTION_NONE: Ea,
        DIRECTION_LEFT: Fa,
        DIRECTION_RIGHT: Ga,
        DIRECTION_UP: Ha,
        DIRECTION_DOWN: Ia,
        DIRECTION_HORIZONTAL: Ja,
        DIRECTION_VERTICAL: Ka,
        DIRECTION_ALL: La,
        Manager: ea,
        Input: x,
        TouchAction: S,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: U,
        AttrRecognizer: Y,
        Tap: ca,
        Pan: Z,
        Swipe: ba,
        Pinch: $,
        Rotate: aa,
        Press: _,
        on: m,
        off: n,
        each: g,
        merge: pa,
        extend: oa,
        assign: ha,
        inherit: i,
        bindFn: j,
        prefixed: u
    });
    var pb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
    pb.Hammer = da, "function" == typeof define && define.amd ? define(function() {
        return da
    }) : "undefined" != typeof module && module.exports ? module.exports = da : a[c] = da
}(window, document, "Hammer");
//# sourceMappingURL=hammer.min.map;
window.scriptsLoaded['boot.worldwide.3.narrow.js'] = 1;
window.scriptProcessEnd = window.scriptProcessEnd || {};
window.scriptProcessEnd['boot.worldwide.3.narrow.js'] = (new Date()).getTime();