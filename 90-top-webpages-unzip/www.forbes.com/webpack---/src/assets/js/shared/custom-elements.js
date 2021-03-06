/* eslint-disable */
/*
 * This is almost directly copied from @webcomponents/custom-elements minified custom elements.
 * Look for @changed annotations to see what changes were made and why. Blame AMP for this terrible idea
 */
'use strict';
(function() {
	var curr;
    function c() {
        function a() {
            b.C = !0;
            b.b(f.childNodes)
        }
        var b = this;
        this.a = new Map;
        this.j = new Map;
        this.h = new Map;
        this.m = new Set;
        this.v = new MutationObserver(this.A.bind(this));
        this.f = null;
        this.B = new Set;
        this.enableFlush = !0;
        this.C = !1;
        this.G = this.c(f);
		window.HTMLImports ? window.HTMLImports.whenReady(a) : a()
		curr = this;
    }

    function g() {
		/* @changed
		 * Changed from `return window.customElements` to avoid conflicts when AMP custom element polyfill loads and clobbers it
		 */
        return curr;
    }

    function k(a) {
        if (!/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a) || -1 !== q.indexOf(a)) return Error("The element name '" + a + "' is not valid.")
    }

    function l(a,
        b, d, e) {
        var c = g();
        a = r.call(a, b, d);
        (b = c.a.get(b.toLowerCase())) && c.D(a, b, e);
        c.c(a);
        return a
    }

    function m(a, b, d, e) {
        b = b.toLowerCase();
        var c = a.getAttribute(b);
        e.call(a, b, d);
        1 == a.__$CE_upgraded && (e = g().a.get(a.localName), d = e.w, (e = e.i) && 0 <= d.indexOf(b) && (d = a.getAttribute(b), d !== c && e.call(a, b, c, d, null)))
    }
    var f = document,
        h = window;
    if (g() && (g().g = function() {}, !g().forcePolyfill)) return;
    var q = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ");
    c.prototype.K = function(a, b) {
        function d(a) {
            var b = g[a];
            if (void 0 !== b && "function" !== typeof b) throw Error(c + " '" + a + "' is not a Function");
            return b
        }
        if ("function" !== typeof b) throw new TypeError("constructor must be a Constructor");
        var e = k(a);
        if (e) throw e;
        if (this.a.has(a)) throw Error("An element with name '" + a + "' is already defined");
        if (this.j.has(b)) throw Error("Definition failed for '" + a + "': The constructor is already used.");
        var c = a,
            g = b.prototype;
        if ("object" !== typeof g) throw new TypeError("Definition failed for '" +
            a + "': constructor.prototype must be an object");
        var e = d("connectedCallback"),
            h = d("disconnectedCallback"),
            n = d("attributeChangedCallback");
        this.a.set(c, {
            name: a,
            localName: c,
            constructor: b,
            o: e,
            s: h,
            i: n,
            w: n && b.observedAttributes || []
        });
        this.j.set(b, c);
        this.C && this.b(f.childNodes);
        if (a = this.h.get(c)) a.resolve(void 0), this.h.delete(c)
    };
    c.prototype.get = function(a) {
        return (a = this.a.get(a)) ? a.constructor : void 0
    };
    c.prototype.L = function(a) {
        var b = k(a);
        if (b) return Promise.reject(b);
        if (this.a.has(a)) return Promise.resolve();
        if (b = this.h.get(a)) return b.M;
        var d, e = new Promise(function(a) {
                d = a
            }),
            b = {
                M: e,
                resolve: d
            };
        this.h.set(a, b);
        return e
    };
    c.prototype.g = function() {
        this.enableFlush && (this.l(this.G.takeRecords()), this.A(this.v.takeRecords()), this.m.forEach(function(a) {
            this.l(a.takeRecords())
        }, this))
    };
    c.prototype.I = function(a) {
        this.f = a
    };
    c.prototype.c = function(a) {
        if (null != a.__$CE_observer) return a.__$CE_observer;
        a.__$CE_observer = new MutationObserver(this.l.bind(this));
        a.__$CE_observer.observe(a, {
            childList: !0,
            subtree: !0
        });
        this.enableFlush &&
            this.m.add(a.__$CE_observer);
        return a.__$CE_observer
    };
    c.prototype.J = function(a) {
        null != a.__$CE_observer && (a.__$CE_observer.disconnect(), this.enableFlush && this.m.delete(a.__$CE_observer), a.__$CE_observer = null)
    };
    c.prototype.l = function(a) {
        for (var b = 0; b < a.length; b++) {
            var d = a[b];
            if ("childList" === d.type) {
                var e = d.removedNodes;
                this.b(d.addedNodes);
                this.H(e)
            }
        }
    };
    c.prototype.b = function(a, b) {
        b = b || new Set;
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (e.nodeType === Node.ELEMENT_NODE) {
                this.J(e);
                e = f.createTreeWalker(e,
                    NodeFilter.SHOW_ELEMENT, null, !1);
                do this.F(e.currentNode, b); while (e.nextNode())
            }
        }
    };
    c.prototype.F = function(a, b) {
        if (!b.has(a)) {
            b.add(a);
            var d = this.a.get(a.localName);
            if (d) {
                a.__$CE_upgraded || this.D(a, d, !0);
                var e;
                if (e = a.__$CE_upgraded && !a.__$CE_attached) a: {
                    e = a;do {
                        if (e.__$CE_attached || e.nodeType === Node.DOCUMENT_NODE) {
                            e = !0;
                            break a
                        }
                        e = e.parentNode || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
                    } while (e);e = !1
                }
                e && (a.__$CE_attached = !0, d.o && d.o.call(a))
            }
            a.shadowRoot && this.b(a.shadowRoot.childNodes, b);
            "LINK" ===
            a.tagName && a.rel && -1 !== a.rel.toLowerCase().split(" ").indexOf("import") && this.u(a, b)
        }
    };
    c.prototype.u = function(a, b) {
        var d = a.import;
        if (d) b.has(d) || (b.add(d), d.__$CE_observer || this.c(d), this.b(d.childNodes, b));
        else if (b = a.href, !this.B.has(b)) {
            this.B.add(b);
            var e = this,
                c = function() {
                    a.removeEventListener("load", c);
                    a.import.__$CE_observer || e.c(a.import);
                    e.b(a.import.childNodes)
                };
            a.addEventListener("load", c)
        }
    };
    c.prototype.H = function(a) {
        for (var b = 0; b < a.length; b++) {
            var d = a[b];
            if (d.nodeType === Node.ELEMENT_NODE) {
                this.c(d);
                d = f.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, null, !1);
                do {
                    var e = d.currentNode;
                    if (e.__$CE_upgraded && e.__$CE_attached) {
                        e.__$CE_attached = !1;
                        var c = this.a.get(e.localName);
                        c && c.s && c.s.call(e)
                    }
                } while (d.nextNode())
            }
        }
    };
    c.prototype.D = function(a, b, d) {
        a.__proto__ = b.constructor.prototype;
        d && (this.I(a), new b.constructor, a.__$CE_upgraded = !0, console.assert(!this.f));
        d = b.w;
        if ((b = b.i) && 0 < d.length) {
            this.v.observe(a, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: d
            });
            for (var e = 0; e < d.length; e++) {
                var c = d[e];
                if (a.hasAttribute(c)) {
                    var f =
                        a.getAttribute(c);
                    b.call(a, c, null, f, null)
                }
            }
        }
    };
    c.prototype.A = function(a) {
        for (var b = 0; b < a.length; b++) {
            var d = a[b];
            if ("attributes" === d.type) {
                var e = d.target,
                    c = this.a.get(e.localName),
                    f = d.attributeName,
                    g = d.oldValue,
                    h = e.getAttribute(f);
                h !== g && c.i.call(e, f, g, h, d.attributeNamespace)
            }
        }
	};
	/* @changed
	 * Wrapped in an "isWriteable" if statement to avoid erroring out when the AMP custom element polyfill loads in and clobbers the custom
	 * element registry with a read-only property
	 */
	if ((Object.getOwnPropertyDescriptor(window, 'CustomElementRegistry') || {}).writable !== false) {
		window.CustomElementRegistry = c;
	}
    c.prototype.define = c.prototype.K;
    c.prototype.get = c.prototype.get;
    c.prototype.whenDefined = c.prototype.L;
    c.prototype.flush = c.prototype.g;
    c.prototype.polyfilled = !0;
    c.prototype._observeRoot = c.prototype.c;
    c.prototype._addImport = c.prototype.u;
	var t = h.HTMLElement;
    h.HTMLElement = function() {
        var a = g();
        if (a.f) {
            var b = a.f;
            a.f = null;
            return b
        }
        if (this.constructor) return a = a.j.get(this.constructor), l(f, a, void 0, !1);
        throw Error("Unknown constructor. Did you call customElements.define()?");
    };
    h.HTMLElement.prototype = Object.create(t.prototype, {
        constructor: {
            value: h.HTMLElement,
            configurable: !0,
            writable: !0
        }
    });
    var r = f.createElement;
    f.createElement = function(a, b) {
        return l(f, a, b, !0)
    };
    var u = f.createElementNS;
    f.createElementNS =
        function(a, b) {
            return "http://www.w3.org/1999/xhtml" === a ? f.createElement(b) : u.call(f, a, b)
        };
    var p = Element.prototype.attachShadow;
    p && Object.defineProperty(Element.prototype, "attachShadow", {
        value: function(a) {
            a = p.call(this, a);
            g().c(a);
            return a
        }
    });
    var v = f.importNode;
    f.importNode = function(a, b) {
        a = v.call(f, a, b);
        g().b(a.nodeType === Node.ELEMENT_NODE ? [a] : a.childNodes);
        return a
    };
    var w = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(a, b) {
        m(this, a, b, w)
    };
    var x = Element.prototype.removeAttribute;
    Element.prototype.removeAttribute = function(a) {
        m(this, a, null, x)
    };
    Object.defineProperty(window, "customElements", {
        value: new c,
        configurable: !0,
        enumerable: !0
    });
    window.CustomElements = {
        takeRecords: function() {
            g().g && g().g()
        }
	}
})();

//# sourceMappingURL=custom-elements.min.js.map



// WEBPACK FOOTER //
// ./src/assets/js/shared/custom-elements.js