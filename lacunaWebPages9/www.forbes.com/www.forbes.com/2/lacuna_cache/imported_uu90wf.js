webpackJsonp([0], {
  10: function(t, e, i) {
    ! function(e, i) {
      t.exports = i()
    }("undefined" != typeof self && self, function() {
      return function(t) {
        function e(n) {
          if (i[n]) return i[n].exports;
          var s = i[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports
        }
        var i = {};
        return e.m = t, e.c = i, e.d = function(t, i, n) {
          e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
          })
        }, e.n = function(t) {
          var i = t && t.__esModule ? function() {} : function() {};
          return e.d(i, "a", i), i
        }, e.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 20)
      }([function(t, e, i) {
        "use strict";

        function n(t, e) {
          var i = function(t) {
            var e = l({}, t);
            return delete e.serverDomEngine, delete e.isServerPrerender, e
          };
          if (t) return t.originalConfig = i(t), t;
          var n;
          if (d)
            if (e.id && (n = (window.FbsCarouselConfig || {})[e.id]));
            else {
              var s = e.getAttribute(h);
              n = s && (window.FbsCarouselConfig || {})[s]
            } return n && (n.originalConfig = i(n)), n || c.a
        }

        function s(t, e) {
          var i = l({}, t),
            n = function() {
              i.slidesToScroll = Math.min(i.inView || 1, i.slidesToScroll || 1), i.currentOffset = Math.max(0, Math.min(i.currentOffset, i.inView - 1))
            };
          if (e || (i = l({}, c.a, t)), i.isServerPrerender || !d || !f) {
            if (i.isServerPrerender) {
              for (var a = i.inView, r = !1 === i.enabled, o = (i.breakpoints || []).slice(0); o.length;) {
                var u = o.shift();
                r = r || !1 === u.config.enabled, u.config.inView > a && (a = u.config.inView)
              }
              i.inView = a, i.hasDisabledBreakpoint = r
            }
            return n(), i
          }
          if ((i.breakpoints || []).length)
            for (var h = 0; h < i.breakpoints.length; h++) {
              var p = i.breakpoints[h];
              if (p.breakpoint && window.matchMedia(p.breakpoint.substr(7)).matches) {
                i = s(l({}, i, v, p.config), !0);
                break
              }
            }
          return n(), i
        }

        function a(t, e) {
          return t[r(e, t.length)]
        }

        function r(t, e) {
          for (; t < e;) t += e;
          return (e + t) % e
        }

        function o(t, e, i) {
          return t > e ? [t - e, i - t + e] : [i - e + t, e - t]
        }
        i.d(e, "e", function() {
          return u
        }), i.d(e, "a", function() {
          return h
        }), e.b = n, e.c = s, e.g = a, e.f = r, e.d = o;
        var c = i(1),
          l = this && this.__assign || Object.assign || function(t) {},
          d = "undefined" != typeof window,
          u = "undefined" != typeof document,
          h = "data-fbs-carousel-config-id",
          v = {
            breakpoints: []
          },
          f = d && !!window.matchMedia
      }, function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
          return n
        });
        var n = {
          currentOffset: 0,
          inView: 1,
          speed: 500,
          showControls: !0,
          imagePreloadAttribute: "data-bg-image",
          initialIndex: 0,
          isServerPrerender: !1
        }
      }, function(t, e, i) {
        "use strict";

        function n(t, e) {
          var i, n = d.e ? document : e.serverDomEngine,
            s = {
              __slides: new Map,
              __order: [],
              __index: e.initialIndex || 0
            },
            o = [],
            u = "";
          t.classList.add("fbs-slider"), t.id ? u = "#" + t.id : t.hasAttribute(d.a) ? (u = t.getAttribute(d.a), t.classList.add(u)) : (u = "_" + r(s.__slides), t.setAttribute(d.a, u), t.classList.add(u));
          for (var h = 0; h < t.children.length; h++) {
            var m = t.children.item(h);
            if (m.classList.contains(g)) {
              if (s.__controls) {
                m.remove(), h--;
                continue
              }
              var _ = m.querySelector("." + w),
                y = m.querySelector("." + b);
              s.__controls = {
                __wrapper: m,
                __left: _,
                __right: y
              }
            } else if (m.classList.contains(f)) {
              if (i) {
                m.remove(), h--;
                continue
              }
              i = m
            } else o.push(m)
          }
          var L = function(i, n) {
            i.forEach(function(i) {
              if (e.slides) {
                for (var o = void 0, c = i.getAttribute(x), l = 0; l < e.slides.length; l++)
                  if (c && c === e.slides[l].id) {
                    o = e.slides[l];
                    break
                  } o ? (o.domNode = i, s.__slides.set(o.id, o)) : i.remove()
              } else {
                var d = {
                  id: r(s.__slides),
                  domNode: i,
                  scope: {}
                };
                a(d, e), s.__slides.set(d.id, d), s.__order.push(d.id)
              }
              n && t.removeChild(i)
            })
          };
          if (i ? (s.__track = i.querySelector("." + p), L(Array.prototype.slice.call(s.__track.children)), o.forEach(function(t) {
              t.remove()
            })) : (L(o, !0), i = n.createElement("div"), i.classList.add(f), s.__track = n.createElement("div"), s.__track.classList.add(p), i.appendChild(s.__track), t.insertBefore(i, t.childNodes[0])), s.__wrapper = i, s.__controls || (s.__controls = {}), e.slides)
            for (var h = 0; h < e.slides.length; h++) {
              var k = {};
              e.slides[h].id || (k.id = r(s.__slides)), s.__slides.has(k.id) || (k = v({}, k, e.slides[h]), s.__slides.set(k.id, k)), s.__order.push(k.id)
            }
          return e.looping && e.inView + 2 * e.slidesToScroll > s.__order.length && (e.looping = !1), s.__active_slides = c(t, s, e, !0), Object(l.a)(t, e, s, u), s
        }

        function s(t, e) {}

        function a(t, e) {
          var i, n = d.e ? document : e.serverDomEngine;
          if (t.domNode) i = t.domNode;
          else if (t.textContent) {
            var s = n.createElement("div");
            s.innerHTML = t.textContent, delete t.textContent, s.firstElementChild.classList.contains(m) && (s = s.firstElementChild), i = s
          } else e.slideGenerator ? i = e.slideGenerator(t.scope, d.e ? document : e.serverDomEngine) : (console.error("WARNING: Slide " + t.id + " was generated with no content! Provide a generator function."), i = n.createElement("div"));
          if (i.classList.add(m), i.setAttribute(x, t.id), !e.isServerPrerender) {
            var a = e.imagePreloadAttribute.split("-").filter(function(t) {
              return "data" !== t.toLowerCase()
            }).map(function(t, e) {
              return 0 === e ? t : "" + t.slice(0, 1).toUpperCase() + t.slice(1)
            }).join("");
            if (i.imagesPreloaded !== a) {
              for (var r = i.querySelectorAll("*[" + e.imagePreloadAttribute + "]"), o = 0; o < r.length; o++) r[o].style.backgroundImage = "url(" + r[o].dataset[a] + ")";
              i.imagesPreloaded = a
            }
          }
          return t.domNode = i, i.fbsCalledback || e.slideGeneratedCallback && (e.slideGeneratedCallback(t), i.fbsCalledback = !0), i
        }

        function r(t) {
          var e;
          do {
            e = (1e20 * Math.random()).toString(28)
          } while (t.has(e));
          return e
        }

        function o(t, e, i) {
          var n = i.showControls && !1 !== i.enabled;
          if (n && !e.__controls.__wrapper) {
            var a = d.e ? document : i.serverDomEngine;
            e.__controls = s(e.__controls, a), t.insertBefore(e.__controls.__wrapper, e.__wrapper.nextSibling)
          } else e.__controls.__wrapper && (n ? t.classList.remove(_) : t.classList.add(_));
          var r = function(t, e) {
              e ? t.classList.remove(y) : t.classList.add(y)
            },
            o = e.__controls.__left,
            c = e.__controls.__right;
          o && r(o, !(!i.looping && 0 === e.__index || i.isServerPrerender)), c && r(c, !(!i.looping && e.__index + i.inView === e.__order.length || i.isServerPrerender))
        }

        function c(t, e, i, n) {
          void 0 === n && (n = !1);
          var s = [],
            r = i.isServerPrerender ? e.__index : e.__index - i.slidesToScroll;
          i.looping || (r = Math.max(0, r));
          var c = e.__index + i.inView + (i.isServerPrerender ? 0 : i.slidesToScroll);
          i.looping || (c = Math.min(e.__order.length, c)), (!1 === i.enabled || i.isServerPrerender && i.hasDisabledBreakpoint) && (r = 0, c = e.__order.length);
          for (var l = 0; l < e.__track.childNodes.length; l++) e.__track.removeChild(e.__track.childNodes[0]), l--;
          n && (e.__viewWidth = e.__wrapper.getBoundingClientRect().width, e.__slideWidth = e.__viewWidth / i.inView, i.isServerPrerender || !1 === i.enabled ? e.__track.style.width = "100%" : e.__track.style.width = e.__slideWidth * (c - r) + "px");
          var u = -e.__slideWidth * i.slidesToScroll;
          i.looping || (u = -e.__slideWidth * Math.min(i.slidesToScroll, e.__index)), (i.isServerPrerender || !1 === i.enabled) && (u = 0), e.__track.style.transform = "translateX(" + u + "px)", e.__translationOffset = u;
          for (var l = r; l < c; l++) {
            var h = Object(d.g)(e.__order, l),
              v = e.__slides.get(h),
              f = a(v, i),
              p = l >= e.__index && l < e.__index + i.inView;
            s.push({
              inView: p,
              slideData: v
            }), p && l === e.__index + i.currentOffset ? f.classList.add("active", "primary") : p ? (f.classList.add("active"), f.classList.remove("primary")) : f.classList.remove("active", "primary"), i.isServerPrerender || !1 === i.enabled ? !1 === i.enabled && (f.style.width = "") : f.style.width = e.__slideWidth + "px", e.__track.appendChild(f)
          }
          return s.length === (e.__active_slides || []).length || i.isServerPrerender || !1 === i.enabled || (e.__track.style.width = e.__slideWidth * (c - r) + "px"), o(t, e, i), s
        }
        i.d(e, "e", function() {}), i.d(e, "d", function() {}), i.d(e, "a", function() {}), i.d(e, "c", function() {}), i.d(e, "b", function() {}), e.g = n, e.f = r, e.h = c;
        var l = i(4),
          d = i(0),
          u = i(5),
          h = i.n(u),
          v = this && this.__assign || Object.assign || function(t) {},
          f = "fbs-slider__slides-wrapper",
          p = "fbs-slider__slides",
          m = "fbs-slider__slide",
          g = "fbs-slider__controls",
          _ = "fbs-slider--no-controls",
          w = "fbs-slider__control-left",
          b = "fbs-slider__control-right",
          y = "disabled",
          x = "data-fbs-carousel-slide-id",
          L = "data-fbs-carousel-prerender-styles"
      }, function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
          return r
        });
        var n = i(0),
          s = i(2),
          a = this && this.__assign || Object.assign || function(t) {},
          r = function() {
            function t(t, e) {
              this.el = t, this.isAnimating = !1, this.__config = e
            }
            return t.prototype.init = function() {
              this.el && (this.loadConfiguration(this.__config), this.loadState(), this.el.classList.add("fbs-slider--initialized"), this.registerEvents(), this.triggerEvent("sliderInitialized", {
                currentSlide: this.getCurrentSlide()
              }))
            }, t.prototype.uninit = function() {}, t.prototype.loadConfiguration = function(t) {
              this.__config = Object(n.b)(t, this.el), this.__active_config = Object(n.c)(this.__config)
            }, t.prototype.loadState = function() {
              this.__state = Object(s.g)(this.el, this.__active_config)
            }, t.prototype.registerEvents = function() {
              var t = this;
              this.__state.__controls.__left && this.__state.__controls.__left.addEventListener("click", function() {}), this.__state.__controls.__right && this.__state.__controls.__right.addEventListener("click", function() {}), this.handleSwipe(), "undefined" != typeof window && (window.addEventListener("resize", this.resize.bind(this)), window.addEventListener("orientationchange", this.resize.bind(this)))
            }, t.prototype.unregisterEvents = function() {}, t.prototype.go = function(e) {
              var i = this;
              void 0 === e && (e = 0);
              var a = e;
              if (this.isAnimating) return !1;
              if (this.__active_config.looping || (this.__state.__index + a < 0 && (a = -this.__state.__index), this.__state.__index + a + this.__active_config.inView > this.__state.__order.length && (a = Math.max(0, this.__state.__order.length - (this.__state.__index + this.__active_config.inView)))), !1 === this.__active_config.enabled || a % this.__state.__order.length == 0) return !1;
              var r = this.getCurrentSlide(),
                o = this.__state.__slides.get(Object(n.g)(this.__state.__order, this.__state.__index + a + this.__active_config.currentOffset));
              this.triggerEvent("slideChangeStart", {
                currentSlide: r,
                targetSlide: o
              });
              var c = function() {
                  i.__state.__index = Object(n.f)(i.__state.__index + a, i.__state.__order.length), i.__state.__active_slides = Object(s.h)(i.el, i.__state, i.__active_config, !1), i.triggerEvent("slideChanged", {
                    previousSlide: r,
                    currentSlide: o
                  })
                }.bind(this),
                l = Object(n.d)(this.__state.__index, Object(n.f)(this.__state.__index + a, this.__state.__order.length), this.__state.__order.length);
              if (this.__active_config.looping && l[0] > this.__active_config.slidesToScroll && l[1] > this.__active_config.slidesToScroll || !this.__active_config.looping && Math.abs(a) > this.__active_config.slidesToScroll) return c(), !0;
              this.isAnimating = !0, this.__state.__track.classList.add(t.ANIMATING_CLASS);
              var d = this.__active_config.looping ? l[0] > l[1] ? l[1] : -l[0] : a,
                u = this.__state.__translationOffset - this.__state.__slideWidth * d;
              return setTimeout(function() {
                i.__state.__track.style.transform = "translateX(" + u + "px)"
              }, 0), setTimeout(function() {
                i.isAnimating = !1, i.__state.__track.classList.remove(t.ANIMATING_CLASS), c()
              }, this.__active_config.speed), !0
            }, t.prototype.goPrev = function() {
              return this.go(-this.__active_config.slidesToScroll)
            }, t.prototype.goNext = function() {}, t.prototype.goToIndex = function(t) {}, t.prototype.goToSlideById = function(t) {}, t.prototype.handleSwipe = function() {
              function t(t, e) {}
              var e = this,
                i = 0,
                n = 0,
                s = 0,
                a = 50;
              this.el.addEventListener("touchstart", function(t) {}, !1), this.el.addEventListener("touchend", function(a) {}, !1)
            }, t.prototype.triggerEvent = function(t, e) {
              "undefined" != typeof CustomEvent && this.el.dispatchEvent(new CustomEvent(t, {
                detail: a({}, e, {
                  activeSlides: this.__state.__active_slides
                })
              }))
            }, t.prototype.resize = function() {}, t.prototype.getCurrentSlide = function() {
              return this.__state.__slides.get(this.__state.__order[this.__state.__index + this.__active_config.currentOffset])
            }, t.prototype.getActiveSlides = function() {
              return this.__state.__active_slides
            }, t.prototype.addSlides = function(t, e, i) {}, t.prototype.addSlide = function(t, e, i) {}, t.prototype.removeSlides = function(t, e) {}, t.prototype.removeSlide = function(t, e) {}, t.prototype.removeSlidesByIndex = function(t, e) {}, t.prototype.removeSlideByIndex = function(t, e) {}, t.prototype.getEl = function() {}, t.ANIMATING_CLASS = "is-animating", t
          }()
      }, function(t, e, i) {
        "use strict";

        function n(t, e, i, n) {
          if (e.isServerPrerender) {
            var c = e.hasDisabledBreakpoint ? 0 : i.__index,
              l = e.hasDisabledBreakpoint ? i.__active_slides.length : i.__index + e.inView,
              d = [];
            (e.originalConfig.slides || []).length ? i.__order.slice(c, l).forEach(function(t, n) {}) : (e.originalConfig.slides = [], i.__order.forEach(function(t, n) {}));
            for (var u = a.e ? document : e.serverDomEngine, h = u.createElement("style"), v = 0 === n.indexOf("#") ? n : "." + n, f = "\n\t\t\tfbs-carousel {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t" + v + " ." + r.e + " {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t", p = 0, m = [{
                config: o({}, s.a, Object.keys(e.originalConfig).length > 0 ? e.originalConfig : e)
              }], g = [f], _ = function(t) {}; m.length > 0;) ! function() {}();
            h.setAttribute(r.b, ""), h.setAttribute("type", "text/css"), h.innerHTML = g.join("\n").replace(/\t/gi, ""), t.insertBefore(h, t.firstElementChild);
            var w = u.createElement("script");
            w.appendChild(u.createTextNode(("\n\t\twindow.FbsCarouselConfig = window.FbsCarouselConfig || {};\n\t\twindow.FbsCarouselConfig['" + v.slice(1) + "'] = " + JSON.stringify(e.originalConfig) + ";\n\t\t").replace(/\t/gi, ""))), t.appendChild(w)
          }
        }
        e.a = n;
        var s = i(1),
          a = i(0),
          r = i(2),
          o = this && this.__assign || Object.assign || function(t) {}
      }, function(t, e) {
        t.exports = {
          arrowLeft: '<svg class="fs-icon fs-icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 10h16v2h-16z"/><path transform="rotate(-45.001 4.5 8.877)" d="M.5 7.9h8v2h-8z"/><path transform="rotate(45.001 4.5 13.124)" d="M.5 12.1h8v2h-8z"/></svg>',
          arrowRight: '<svg class="fs-icon fs-icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(-180 8.964 11)" d="M1 10h16v2H1z"/><path transform="rotate(134.999 14.965 13.124)" d="M11 12.1h8v2h-8z"/><path transform="rotate(-134.999 14.965 8.877)" d="M11 7.9h8v2h-8z"/></svg>',
          chevronDown: '<svg class="fs-icon fs-icon--chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/><path transform="rotate(-45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/></svg>',
          chevronLeft: '<svg class="fs-icon fs-icon--chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-45.001 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/><path transform="rotate(45.001 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/></svg>',
          chevronRight: '<svg class="fs-icon fs-icon--chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(134.999 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/><path transform="rotate(-134.999 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/></svg>',
          chevronUp: '<svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/><path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/></svg>',
          close: '<svg class="fs-icon fs-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(45.001 10 10)" d="M2 9h16v2H2z"/><path transform="rotate(134.999 10 10)" d="M2 9h16v2H2z"/></svg>',
          forbesLogo: '<svg class="fs-icon fs-icon--forbes-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 54"><path d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z"/></svg>',
          hamburger: '<svg class="fs-icon fs-icon--hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 5.5h16v2H2zM2 9.5h16v2H2zM2 13.5h16v2H2z"/></svg>',
          play: '<svg class="fs-icon fs-icon--play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 2v16.9l11.1-8.5z"/></svg>',
          search: '<svg class="fs-icon fs-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="2" cx="8.5" cy="9" r="6"/><path transform="rotate(45.001 14.922 15.421)" d="M12 14.4h5.9v2H12z"/></svg>'
        }
      }, function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
          return a
        });
        var n = i(3),
          s = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function(t, e) {} || function(t, e) {};
            return function(e, i) {
              function n() {
                this.constructor = e
              }
              t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
          }(),
          a = function(t) {
            function e(e) {
              var i = t.call(this) || this;
              return i.carousel = new n.a(i), i
            }
            return s(e, t), e.prototype.connectedCallback = function() {
              this.carousel.init()
            }, e.prototype.disconnectedCallback = function() {}, Object.defineProperty(e.prototype, "currentSlide", {
              get: function() {
                return this.carousel.getCurrentSlide()
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(e.prototype, "activeSlides", {
              get: function() {
                return this.carousel.getActiveSlides()
              },
              enumerable: !0,
              configurable: !0
            }), e.prototype.rerender = function() {}, e.prototype.prevSlide = function() {
              return this.carousel.goPrev()
            }, e.prototype.nextSlide = function() {}, e.prototype.go = function(t) {}, e.prototype.goToIndex = function(t) {}, e.prototype.goToSlideById = function(t) {}, e.prototype.addSlide = function(t, e, i) {}, e.prototype.addSlides = function(t, e, i) {}, e.prototype.removeSlide = function(t, e) {}, e.prototype.removeSlides = function(t, e) {}, e.prototype.removeSlideByIndex = function(t, e) {}, e.prototype.removeSlidesByIndex = function(t, e) {}, e
          }(HTMLElement)
      }, , , , , , , , , , , , , , function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = i(21);
        i.d(e, "FbsCarousel", function() {}), i.d(e, "FbsCarouselComponent", function() {
          return n.b
        })
      }, function(t, e, i) {
        "use strict";
        var n = i(3);
        i.d(e, "a", function() {});
        var s = i(6);
        i.d(e, "b", function() {
          return s.a
        })
      }])
    })
  },
  126: function(t, e, i) {
    "use strict";
    i.d(e, "b", function() {
      return o
    }), i.d(e, "c", function() {}), i.d(e, "a", function() {
      return d
    });
    var n = i(296),
      s = i(298),
      a = i(300),
      r = document.querySelector(".data-viz__active-number"),
      o = document.querySelector(".data-viz__list"),
      c = new s.a(o, r),
      l = new a.a,
      d = new n.a(l, c)
  },
  127: function(t, e) {
    t.exports = {
      amazonBooks: '<svg class="fs-icon fs-icon--amazon-books" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 6.1s3.8-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1zM10.5 6.1s3.9-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1z"/></svg>',
      arrowDown: '<svg class="fs-icon fs-icon--arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#020202" d="M30 60l25-30H40V0H20v30H5l25 30z"/></svg>',
      arrowLeft: '<svg class="fs-icon fs-icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 10h16v2h-16z"/><path transform="rotate(-45.001 4.5 8.877)" d="M.5 7.9h8v2h-8z"/><path transform="rotate(45.001 4.5 13.124)" d="M.5 12.1h8v2h-8z"/></svg>',
      arrowRight: '<svg class="fs-icon fs-icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(-180 8.964 11)" d="M1 10h16v2H1z"/><path transform="rotate(134.999 14.965 13.124)" d="M11 12.1h8v2h-8z"/><path transform="rotate(-134.999 14.965 8.877)" d="M11 7.9h8v2h-8z"/></svg>',
      arrowUp: '<svg class="fs-icon fs-icon--arrow-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#020202" d="M30 0L5 30h15v30h20V30h15L30 0z"/></svg>',
      chevronDown: '<svg class="fs-icon fs-icon--chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/><path transform="rotate(-45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/></svg>',
      chevronLeft: '<svg class="fs-icon fs-icon--chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-45.001 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/><path transform="rotate(45.001 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/></svg>',
      chevronRight: '<svg class="fs-icon fs-icon--chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(134.999 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/><path transform="rotate(-134.999 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/></svg>',
      chevronUp: '<svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/><path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/></svg>',
      clock: '<svg class="fs-icon fs-icon--clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.9 13.1l-2.7-2.7V6.7h1.7v3l2.3 2.3-1.3 1.1zM10 3.3a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4zM10 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/></svg>',
      close: '<svg class="fs-icon fs-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(45.001 10 10)" d="M2 9h16v2H2z"/><path transform="rotate(134.999 10 10)" d="M2 9h16v2H2z"/></svg>',
      email: '<svg class="fs-icon fs-icon--email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF106_" d="M17 15.2H3.2l5.2-4.3.6.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4l.6-.5 5.2 4.4zm.6-9.2v8l-4.8-4 4.8-4zm-15 8V6l4.8 4-4.8 4zm7.8-3.6c-.2.2-.4.2-.6 0L3.6 5.2h13l-6.2 5.2z"/></svg>',
      facebook: '<svg class="fs-icon fs-icon--facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M32.9 49H25V30h-3.9v-6.6H25v-3.9c0-5.4 2.2-8.5 8.5-8.5h5.2v6.6h-3.3c-2.5 0-2.6.9-2.6 2.6v3.3h5.9l-.5 6.5H33v19h-.1z"/></svg>',
      flame: '<svg class="fs-icon fs-icon--flame" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.7 6.2C8.7 3.6 10.6 1 10.6 1 6.7 3.2 5.8 6.7 6.8 11 5.4 9.8 5.2 8.5 5.2 6.7c-1.8 1.9-2.1 3.9-2 6.1.2 3.5 3.1 6.2 6.6 6.2 3.4 0 6.2-2.8 6.4-6.2.1-2.9-1.1-5-3.5-6.6zM9.8 17c-.6 0-1.2-.1-1.7-.3-.7-.3-1.3-.7-1.8-1.3h.1c2-.3 3.7-1.8 4-3.8.1.3.1.6.1.9 0 .9-.2 1.7-.6 2.4 1.4-.8 2.4-2.3 2.4-4.1 0-1.2-.4-2.3-1.2-3.1 2 .5 3.5 2.4 3.5 4.5 0 2.7-2.1 4.8-4.8 4.8z"/></svg>',
      forbesF: '<svg class="fs-icon fs-icon--forbes-f" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.5 7l-.8.2C15 4.9 13.8 3.7 12 3.7H9.5C9.4 5 9.4 7 9.4 9.9h1.7c.9 0 1.6-.7 1.9-2.1h.6V13H13c-.3-1.4-.9-2.1-1.9-2.2H9.4c0 1.6.1 3.1.2 4.4.1.7.2 1.2.4 1.5.2.3.6.5 1.1.6l.8.1v.6H3.6v-.6l.7-.1c.9-.1 1.4-.8 1.5-2.1.3-3.3.3-6.5 0-9.6-.1-1.3-.6-2-1.5-2.1l-.7-.2v-.6h12.8l.1 4.3z"/></svg>',
      forbesLogo: '<svg class="fs-icon fs-icon--forbes-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 54"><path d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z"/></svg>',
      georgiaUaquo: '<svg class="fs-icon fs-icon--georgia-uaquo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#010101" d="M9.9 9.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.6-5.3L2.3 19l-.8-1 6.8-7.2.6-.6c.3-.2.6-.4 1-.4zm0-7.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.5-5.3-7.5 5.3-.8-1 6.8-7.2c.1-.2.4-.3.7-.6.1-.2.5-.3.8-.3z"/></svg>',
      hamburger: '<svg class="fs-icon fs-icon--hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 5.5h16v2H2zM2 9.5h16v2H2zM2 13.5h16v2H2z"/></svg>',
      info: '<svg class="fs-icon fs-icon--info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#010101" d="M28.3 38.4h3.3v-10h-3.3v10zM30 13.3c-9.2 0-16.7 7.5-16.7 16.7S20.8 46.7 30 46.7 46.7 39.2 46.7 30 39.2 13.3 30 13.3zm0 30.1c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4 13.4 6 13.4 13.4-6 13.4-13.4 13.4zM28.3 25h3.3v-3.3h-3.3V25z"/></svg>',
      instagram: '<svg class="fs-icon fs-icon--instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" d="M38.6 46.3H21.4c-4.3 0-7.7-3.5-7.7-7.7V21.4c0-4.3 3.5-7.7 7.7-7.7h17.1c4.3 0 7.7 3.5 7.7 7.7v17.1c.1 4.3-3.4 7.8-7.6 7.8z"/><circle fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" cx="30" cy="30" r="7.4"/><circle cx="38.7" cy="19.3" r="1.8"/></svg>',
      linkedin: '<svg class="fs-icon fs-icon--linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M44.9 33.2v11h-6.4V34c0-2.6-.9-4.3-3.2-4.3-1.8 0-2.8 1.2-3.3 2.3-.2.4-.2 1-.2 1.6v10.7h-6.4s.1-17.4 0-19.2h6.4V27.9v-.1c.8-1.3 2.4-3.2 5.8-3.2 4.1 0 7.3 2.7 7.3 8.6zM18.7 15.8c-2.2 0-3.6 1.4-3.6 3.3 0 1.8 1.4 3.3 3.5 3.3 2.2 0 3.6-1.5 3.6-3.3 0-1.9-1.3-3.3-3.5-3.3zm-3.2 28.4h6.4V25h-6.4v19.2z"/></svg>',
      phone: '<svg class="fs-icon fs-icon--phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF14E_" d="M2.6 7.6c-.2-.8-.1-1.5.3-2.3S3.7 4 4.4 3.7c.2-.1.4-.1.6.1l3 3c.3.3.2.5 0 .8-.5.6-.8 1-.8 1.3s.2.7.8 1.3c.4.5 1.2 1.2 2.2 2 .6.5 1 .4 1.4-.1.3-.5.5-.7.7-.7s.5.1.9.5l.9.6c.3.2.7.5 1 .7.4.3.7.5.9.6.4.3.4.6.2.9-1.8 2.5-3.9 2.9-6.4 1.2-2.9-2.1-5.1-4.5-6.6-7.1 0-.1-.1-.3-.4-.8l-.2-.2v-.2zm7.2-3.4c1.5.1 2.7.7 3.7 1.7s1.6 2.3 1.7 3.8c0 .3-.1.5-.4.5-.3 0-.5-.1-.5-.4-.1-1.2-.6-2.3-1.5-3.1-.9-.9-1.9-1.4-3.1-1.5-.1 0-.2 0-.3-.1-.1-.2-.2-.3-.2-.4 0-.3.2-.5.6-.5zm-.3-1.8c0-.3.2-.4.5-.4 2.1.1 3.9.8 5.3 2.2s2.2 3.2 2.2 5.3c0 .3-.1.5-.4.5-.1 0-.2 0-.3-.1-.1-.1-.2-.2-.2-.3-.1-1.9-.7-3.5-2-4.7s-2.8-1.9-4.7-2c-.1 0-.2 0-.3-.1-.1-.2-.1-.3-.1-.4z"/></svg>',
      play: '<svg class="fs-icon fs-icon--play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 2v16.9l11.1-8.5z"/></svg>',
      previewEye: '<svg class="fs-icon fs-icon--preview-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 4.1C5.9 4.1 2.3 6.5.5 10c1.8 3.6 5.4 6 9.5 6s7.7-2.4 9.5-5.9c-1.8-3.6-5.4-6-9.5-6zm4.7 3.2c1.1.7 2.1 1.7 2.8 2.8-.7 1.1-1.7 2.1-2.8 2.8-1.4.9-3 1.4-4.7 1.4-1.7 0-3.3-.5-4.7-1.4-1.1-.7-2.1-1.7-2.8-2.8.8-1.2 1.7-2.1 2.8-2.8.1 0 .1-.1.2-.1-.1.4-.3 1-.3 1.6 0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8c0-.6-.1-1.1-.3-1.6 0 0 .1 0 .2.1zm-5.1 1c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z"/></svg>',
      reddit: '<svg class="fs-icon fs-icon--reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30"/><path fill="#FFF" d="M50 30c0-2.4-2-4.4-4.4-4.4-1.2 0-2.2.5-3 1.2-3-2.2-7.1-3.6-11.7-3.7l2-9.4 6.5 1.4c.1 1.7 1.4 3 3.1 3 1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1c-1.2 0-2.3.7-2.8 1.7l-7.3-1.5c-.2 0-.4 0-.6.1-.2.1-.3.3-.3.5l-2.2 10.5c-4.7.1-8.8 1.5-11.9 3.7-.8-.8-1.9-1.2-3-1.2-2.4 0-4.4 2-4.4 4.4 0 1.8 1.1 3.3 2.6 4-.1.4-.1.9-.1 1.3 0 6.7 7.8 12.2 17.5 12.2s17.5-5.5 17.5-12.2c0-.4 0-.9-.1-1.3 1.5-.8 2.6-2.3 2.6-4.1zm-30 3.1c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7.1-3.1-1.3-3.1-3.1zm17.4 8.3c-2.1 2.1-6.2 2.3-7.4 2.3-1.2 0-5.3-.2-7.4-2.3-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0 1.3 1.3 4.2 1.8 6.3 1.8s4.9-.5 6.3-1.8c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1zm-.5-5.1c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z"/></svg>',
      reply: '<svg class="fs-icon fs-icon--reply" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3.3 2.8C1.5 7.5 7.7 9.8 13 9V5.6l5.5 6.2-5.5 6.1v-3.4c-3.5.1-6.3-.7-8.2-2.1-3-2.2-3.8-5.8-1.5-9.6z"/></svg>',
      rss: '<svg class="fs-icon fs-icon--rss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.2 13.6c-.6 0-1.1.2-1.5.6-.5.5-.7 1-.7 1.6 0 .6.2 1.1.6 1.5.5.5 1 .7 1.6.7.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5s-.2-1.1-.6-1.5c-.4-.6-.9-.8-1.5-.8zm0 0M9.2 10.8c-.9-.9-1.8-1.6-2.9-2.1-1.1-.5-2.3-.8-3.5-.9h-.1c-.2 0-.3.1-.5.2-.1.1-.2.3-.2.5V10c0 .2.1.4.2.5.1.1.3.2.5.2 1.7.2 3.2.9 4.4 2.1C8.3 14 9 15.5 9.2 17.2c0 .2.1.3.2.5.2.2.3.3.5.3h1.5c.2 0 .4-.1.5-.2.1-.2.2-.3.2-.5-.1-1.2-.4-2.4-.9-3.5-.4-1.2-1.1-2.1-2-3zm0 0"/><path d="M16.6 11.5c-.8-1.8-1.9-3.4-3.3-4.8s-3-2.5-4.8-3.3C6.6 2.6 4.7 2.1 2.8 2c-.3 0-.4.1-.6.2-.1.1-.2.3-.2.5v1.6c0 .2.1.4.2.5.1.2.3.3.5.3 1.6.1 3.2.5 4.6 1.2 1.5.7 2.7 1.6 3.8 2.6 1.1 1.1 2 2.4 2.6 3.8.7 1.5 1.1 3 1.1 4.6 0 .2.1.3.2.5.1.1.3.2.5.2h1.6c.2 0 .4-.1.5-.2.2-.2.2-.3.2-.5.1-2-.4-3.9-1.2-5.8zm0 0"/></svg>',
      search: '<svg class="fs-icon fs-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="2" cx="8.5" cy="9" r="6"/><path transform="rotate(45.001 14.922 15.421)" d="M12 14.4h5.9v2H12z"/></svg>',
      share: '<svg class="fs-icon fs-icon--share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#010101" d="M34 19.6V4.9L59.2 28 34 51.2V36.5C17.3 32.9 1.8 38.5.8 55.4-1 40.8 3.9 31.1 11.3 25.5c6.3-4.8 15.2-6.6 22.7-5.9z"/></svg>',
      snapchat: '<svg class="fs-icon fs-icon--snapchat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M47.7 38.3c-.2-.2-.4-.4-.7-.4-2.3-.4-3.9-1.7-5-3s-1.7-2.5-1.7-2.6v-.1c-.1-.2-.3-.5-.3-.7v-.4c.2-.6.3-.8 1.3-1.1 0 0 .1 0 .3-.1.1 0 .2-.1.3-.1.7-.3 1.4-.6 1.9-1.1.2-.2.5-.6.5-1-.1-.4-.2-.8-.6-1.1-.6-.4-1.6-.2-2.2 0-.4.1-1.2.5-1.5.1v-.5c.1-1.9.3-3.8 0-5.6-.1-.6-.2-1.1-.5-1.6-.9-2.1-2.3-3.6-3.9-4.5-1.4-.8-3-1.2-4.6-1.3-1.6-.1-3.3.1-4.9.6-.5.2-1 .4-1.4.7-1.7.9-3 2.4-3.9 4.5-.2.5-.4 1.1-.5 1.6-.3 1.9-.1 3.8 0 5.6v.5c-.3.3-1.2 0-1.5-.1-.7-.2-1.6-.4-2.2 0-.4.3-.5.6-.6 1.1-.1.3.2.7.5 1 .5.5 1.2.8 1.9 1.1.1 0 .2.1.3.1.2.1.2.1.3.1 1 .3 1.1.6 1.3 1.1 0 .1.1.2 0 .4 0 .2-.2.4-.3.7 0 .1-.6 1.3-1.7 2.6s-2.8 2.7-5 3c-.3 0-.5.2-.7.4-.2.2-.3.5-.2.8v.2c0 .1 0 .1.1.2.2.5.8.9 1.6 1.3.8.3 1.8.6 3.1.8 0 .1.1.4.1.6 0 .1.1.3.1.4 0 .1.1.3.1.4.1.2.2.5.4.7.2.1.4.2.8.2h.4c.1 0 .3 0 .4-.1.2 0 .5-.1.8-.1.3 0 .6-.1 1-.1h.6c.2 0 .4 0 .6.1.8.1 1.5.6 2.4 1.2 1.9 1.3 3.5 2 5.2 2 1.7 0 3.4-.7 5.2-2 .8-.6 1.6-1.1 2.4-1.2.2 0 .4-.1.6-.1h.6c.4 0 .7 0 1 .1.3 0 .6.1.8.1.2 0 .3.1.4.1h.4c.3 0 .6-.1.8-.2.3-.2.4-.4.4-.7 0-.2.1-.3.1-.4 0-.1.1-.3.1-.4 0-.2.1-.4.1-.6 1.3-.2 2.3-.5 3.1-.8.9-.4 1.4-.8 1.6-1.3 0-.1.1-.2.1-.2V39c.2-.2.1-.5-.1-.7z"/></svg>',
      twitter: '<svg class="fs-icon fs-icon--twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M22.2 38.9c-3.4-.3-6.1-1.7-7.5-5.1h3.6c-3.9-1.4-5.6-4.3-5.9-8.4 1.2.6 2.3.7 3.5.7-2.1-1.6-3.6-3.4-3.7-6.1-.1-1.5.5-2.8 1.3-4 4.4 5 9.7 8.3 16.5 8.9v-2.7c.1-1.9.6-3.6 1.9-5.1 2.5-2.8 6.9-3.1 9.8-.7.2.2.5.4.7.6.2.2.4.2.7.2 1.1-.3 2-.9 3-1.4.5-.3 1.1-.6 1.7-1-.4 1.1-.9 2-1.5 2.8-.6.8-1.3 1.6-2.2 2.2 1.6-.2 3.2-.6 4.8-1.1-.3.4-.6.8-.9 1.1l-2.7 2.4c-.1.1-.2.3-.2.4.1 3.3-.6 6.5-1.9 9.6-1.9 4.2-4.7 7.5-8.6 9.9-2.5 1.5-5.2 2.4-8.1 2.9-5.5.8-10.5-.5-15.1-3.3-.1 0-.1-.1-.2-.1h.2c1.1.5 2.2.4 3.3.3 2.3-.2 4.5-.9 6.6-2.1l.9-.6v-.3z"/></svg>',
      website: '<svg class="fs-icon fs-icon--website" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF10E_" d="M14.7 7.4l2.8 2.6v.4h-1.9V17h-3.7v-4.2H8.1V17H4.4v-6.6H2.5V10L10 3l2.8 2.6v-.9h1.9z"/></svg>',
      youtube: '<svg class="fs-icon fs-icon--youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.2 12.5V7.7l4.6 2.4-4.6 2.4zm9.5-7.3c-.7-.7-1.4-.7-1.7-.7-2.4-.2-6-.2-6-.2s-3.6 0-6 .2c-.3 0-1.1 0-1.7.7-.5.5-.6 1.7-.6 1.7s-.2 1.4-.2 2.8V11c0 1.4.2 2.8.2 2.8s.2 1.2.7 1.7c.6.6 1.4.5 1.8.6 1.4.1 5.8.2 5.8.2s3.6 0 6-.2c.3 0 1.1 0 1.7-.7.5-.5.7-1.7.7-1.7s.2-1.4.2-2.8V9.7c0-1.4-.2-2.8-.2-2.8s-.2-1.2-.7-1.7z"/></svg>'
    }
  },
  128: function(t, e, i) {
    ! function(e, i) {
      t.exports = i()
    }(window, function() {
      return function(t) {
        function e(n) {
          if (i[n]) return i[n].exports;
          var s = i[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports
        }
        var i = {};
        return e.m = t, e.c = i, e.d = function(t, i, n) {}, e.r = function(t) {}, e.t = function(t, i) {}, e.n = function(t) {}, e.o = function(t, e) {}, e.p = "", e(e.s = 0)
      }([function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = function() {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
          }
          return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
          }
        }();
        e.default = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          t && new s(t, e <= 0 ? 2 : e, i).init()
        };
        var s = function() {
          function t(e, i, n) {
            ! function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.element = e, this.numLines = i, this.allowResize = n, this.prevWidth = 0, this.prevHeight = 0, this.textCtx = !1, this.LINE_CLAMP_RULES = {
              LINE_CLAMP: "-webkit-line-clamp",
              BOX: "-webkit-box",
              BOX_ORIENT: "-webkit-box-orient"
            }
          }
          return n(t, [{
            key: "init",
            value: function() {
              if (this.LINE_CLAMP_RULES.LINE_CLAMP in document.body.style) this.element.style.display = this.LINE_CLAMP_RULES.BOX, this.element.style[this.LINE_CLAMP_RULES.BOX_ORIENT] = "vertical", this.element.style[this.LINE_CLAMP_RULES.LINE_CLAMP] = this.numLines;
              else {
                var t = document.createElement("canvas");
                this.textCtx = t.getContext("2d"), this.clamp(), this.allowResize && requestAnimationFrame(this.resize.bind(this))
              }
            }
          }, {
            key: "clamp",
            value: function() {}
          }, {
            key: "resize",
            value: function() {}
          }]), t
        }()
      }])
    })
  },
  19: function(t, e, i) {
    "use strict";

    function n(t) {}
    e.a = n
  },
  2: function(t, e, i) {
    "use strict";

    function n(t) {
      var e = t.getBoundingClientRect(),
        i = e.bottom;
      return !document.documentElement.classList.contains("et-on") && i - window.innerHeight < .25 * window.innerHeight
    }

    function s(t) {
      n(t) ? t.display() : g.push(t)
    }

    function a() {}

    function r(t, e) {
      if ("ntv-home" !== e && "ntv-deskchannel" !== e) var i = 0,
        n = setInterval(function() {
          var e = t.querySelector("iframe"),
            s = !1;
          e && !e.hasAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), s = !0), !s && (e || i++ < 100) && clearInterval(n)
        }, 100)
    }

    function o(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "300x250",
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "311139641",
        n = document.querySelector(".fbs-ad--" + t + "-wrapper");
      if (n) {
        var s = document.createElement("div");
        s.setAttribute("id", t), n.appendChild(s);
        var a = document.createElement("script");
        a.text = "\n\t\t\ttry {\n\t\t\t\twindow._mNHandle.queue.push(function () {\n\t\t\t\t\twindow._mNDetails.loadTag('" + t + "', '" + e + "', '" + i + "');\n\t\t\t\t});\n\t\t\t} catch (error) {}\n\t\t", n.appendChild(a)
      }
    }

    function c(t) {}

    function l(t) {}

    function d(t) {}

    function u(t, e) {
      w[e] && t && t.addEventListener("render", w[e])
    }

    function h(t) {
      for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document, i = arguments[2], n = e.classList, a = n && n.contains("ad-rail"), o = a ? i : t, c = e.querySelectorAll(".fbs-ad--" + o + "-wrapper"), l = 0; l < c.length; l++) ! function(e) {
        var n = document.createElement("fbs-ad");
        ["progressive", "batched"].forEach(function(t) {
          c[e].classList.contains("fbs-ad--" + t) && n.setAttribute(t, !0)
        }), n.getAttribute("progressive") && !n.getAttribute("batched") && setTimeout(function() {
          s(n)
        }, 100), n.setAttribute("position", t), c[e].dataset.customTargeting && n.setAttribute("custom-targeting", c[e].dataset.customTargeting), i && n.setAttribute("ad-id", i), r(n, t), "ntv-home" === !t && "ntv-deskchannel" === !t && (c[e].hasAttribute("aria-hidden") || (c[e].setAttribute("aria-hidden", "true"), c[e].setAttribute("role", "presentation"))), u(n, t), c[e].appendChild(n)
      }(l)
    }
    e.c = o, i.d(e, "a", function() {
      return _
    }), e.b = h;
    var v = (i(14), i(1)),
      f = (i.n(v), i(0)),
      p = i(4),
      m = i(5),
      g = [];
    window.addEventListener("scroll", Object(p.a)(a));
    var _ = new m.a,
      w = {
        top: c,
        "spon-logo": l,
        mobile: d,
        "mobile-sticky": d
      };
    f.x || function() {
      v.isMobile ? (f.w || h("mobile", document, "mobile-sticky"), h("mobilex"), h("mobilerec"), h("spon-logo"), h("ntv-mobhome"), h("ntv-mobchannel"), h("mobsearch"), o("mobile-medianet")) : (h("top"), h("rec"), h("recx"), h("text"), h("topx"), h("spon-logo"), h("ntv-home"), h("ntv-deskchannel"), h("bottom"), h("moreon"), o("body-medianet"))
    }()
  },
  293: function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = (i(60), i(2), i(7), i(6), i(92)),
      s = (i.n(n), i(294), i(295), i(301), i(303)),
      a = (i.n(s), i(304)),
      r = (i.n(a), i(305), i(307)),
      o = (i.n(r), i(308));
    i.n(o)
  },
  294: function(t, e, i) {
    "use strict";
    var n = i(10);
    i.n(n);
    customElements.define("fbs-carousel", n.FbsCarouselComponent), document.addEventListener("DOMContentLoaded", function() {
      var t = ".featured__slide-bg",
        e = "featured__bg-image--current",
        i = "fbs-slider__slide--current",
        n = document.querySelector(".featured__carousel"),
        s = void 0;
      n && (n.addEventListener("slideChangeStart", function(n) {
        s.domNode.classList.remove(i), s = n.detail.targetSlide, s.domNode.classList.add(i);
        var a = document.querySelector("." + e),
          r = document.querySelector(".featured__bg-image--next"),
          o = s.domNode.querySelector(t);
        r.style.backgroundImage = "url(" + o.dataset.bgImage + ")", r.style.display = "block", a.classList.add("featured__bg-image--fade"), setTimeout(function() {
          r.classList.remove("featured__bg-image--next"), r.classList.add(e), a.style.display = "none", a.classList.remove("featured__bg-image--fade"), a.classList.add("featured__bg-image--next"), a.classList.remove(e)
        }, 500)
      }), n.addEventListener("sliderResized", function(t) {}), function() {
        if (n.activeSlides.length) {
          n.querySelector(".fbs-slider__controls").classList.add("fs-content"), s = n.currentSlide;
          var a = s.domNode.querySelector(t),
            r = document.querySelector("." + e);
          s.domNode.classList.add(i), r.style.backgroundImage = "url(" + a.dataset.bgImage + ")", 5 === n.activeSlides.length && n.prevSlide()
        }
      }())
    })
  },
  295: function(t, e, i) {
    "use strict";

    function n(t) {
      if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i
      }
      return Array.from(t)
    }
    var s = i(0),
      a = i(126);
    document.addEventListener("DOMContentLoaded", function() {
      function t(t) {}

      function e(e) {
        [].concat(n((e || document).getElementsByClassName("card--video"))).forEach(function(e) {})
      }
      var i = document.querySelector("body"),
        r = document.getElementById("modal__box"),
        o = document.getElementsByClassName("modal__content")[0],
        c = [].concat(n(document.querySelectorAll("fbs-carousel"))),
        l = r.querySelector(".close");
      e(), c.forEach(function(t) {
        t.addEventListener("slideChanged", function() {
          e()
        })
      }), document.addEventListener("fbs-channel-response", function(t) {}), l && l.addEventListener("click", function() {}), window.addEventListener("click", function(t) {})
    })
  },
  296: function(t, e, i) {
    "use strict";

    function n(t) {}

    function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var a = i(297),
      r = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      o = null,
      c = function() {
        function t(e, i) {
          return s(this, t), o || (o = this), this.dataVizModel = e, this.dataVizView = i, this.dataVizCanvas = new a.a, this.dataVizCanvas.init(), this.currentDataVizList = {}, this.newDataVizList = {}, this.dataIndex = 0, this.timer = null, o
        }
        return r(t, [{
          key: "getNewData",
          value: function() {
            return (this.dataVizModel.dataModel.data[this.dataIndex] || {}).pages || []
          }
        }, {
          key: "getNewPageInfo",
          value: function() {
            return this.dataVizModel.dataModel.pageInfo || {}
          }
        }, {
          key: "getActiveUsers",
          value: function() {
            return Math.max(0, (this.dataVizModel.dataModel.data[this.dataIndex] || {}).siteVisits || 0)
          }
        }, {
          key: "mapNewData",
          value: function(t, e) {
            var i = this,
              n = 0;
            return t.forEach(function(t) {
              i.newDataVizList[t.id] || (i.newDataVizList[t.id] = {
                index: n,
                views: t.val.toLocaleString(),
                pageInfo: e[t.id]
              }, n++)
            })
          }
        }, {
          key: "leave",
          value: function(t, e) {}
        }, {
          key: "reposition",
          value: function(t, e) {}
        }, {
          key: "enter",
          value: function(t, e) {}
        }, {
          key: "renderUpdatedUsersAndCanvas",
          value: function() {
            this.dataVizView.renderUsers(this.getActiveUsers()), this.dataVizCanvas.changeNumber(this.getActiveUsers())
          }
        }, {
          key: "renderUpdatedList",
          value: function() {}
        }, {
          key: "renderInitialList",
          value: function() {
            var t = this;
            if (0 === Object.keys(this.currentDataVizList).length) {
              Object.keys(this.newDataVizList).forEach(function(e) {
                t.dataVizView.loadInitialList(e, t.newDataVizList), t.dataVizView.hideItemsOutOfView()
              })
            }
            this.renderUpdatedUsersAndCanvas()
          }
        }, {
          key: "renderMobileList",
          value: function() {}
        }, {
          key: "updateData",
          value: function(t) {}
        }, {
          key: "getData",
          value: function(t) {}
        }, {
          key: "clearTimer",
          value: function() {}
        }, {
          key: "startTimer",
          value: function(t) {
            var e = this;
            this.timer || this.hasData() && (this.timer = setInterval(function() {}, 5e3))
          }
        }, {
          key: "hasData",
          value: function() {
            return this.dataVizModel.dataModel && this.dataVizModel.dataModel.data
          }
        }, {
          key: "initializeMobileList",
          value: function() {}
        }, {
          key: "initialize",
          value: function() {
            this.hasData() && (this.mapNewData(this.getNewData(), this.getNewPageInfo()), this.renderInitialList(), 0 === Object.keys(this.currentDataVizList).length && (this.currentDataVizList = this.newDataVizList), this.startTimer())
          }
        }]), t
      }();
    e.a = c
  },
  297: function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var s = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = function() {
        function t() {
          n(this, t), this.ANGLE_BETWEEN_MARKS = Math.PI / 20, this.RANGE_MIN = 0, this.RANGE_MAX = Math.PI, this.FPS = 30, this.INTERVAL = 1e3 / this.FPS, this.PI = Math.PI, this.TWO_PI = 2 * Math.PI, this.TOTAL_ITERATIONS = {
            IDLE: 10,
            OVERDRIVE: 1.5
          }, this.ANIMATION_AMPLITUDES = {
            IDLE: 80,
            OVERDRIVE: 50
          }, this.OVERDRIVE_THRESHOLD = 5e3, this.ANIMATION_TYPES = {
            IDLE: "IDLE",
            OVERDRIVE: "OVERDRIVE"
          }, this.GAUGE_RADIUS = 30, this.GAUGE_MARK_LENGTH = 50, this.NEEDLE_LENGTH = 60, this.NEEDLE_BASE_WIDTH = 2, this.NEEDLE_TIP_WIDTH = 1, this.NEEDLE_FILLSTYLE = "#6e6e6e", this.BACKGROUND_COLOR = "#fcfcfc", this.STANDARD_MARK_WIDTH = 1, this.CLOSE_MARK_WIDTH = 2, this.MATCHING_MARK_WIDTH = 3, this.MIN_USER_COUNT = 0, this.MAX_USER_COUNT = 6e4, this.canvas = null, this.ctx = null, this.lastTime = performance.now(), this.currentAngle = 0, this.nextAngle = 0, this.currentPerfectAngle = 0, this.currentValueIndex = 0, this.idleOffset = 0, this.idleDirection = 1, this.currentIteration = 0, this.startValue = 0, this.changeInValue = 0, this.totalIterations = this.TOTAL_ITERATIONS.IDLE, this.animationAmplitude = this.ANIMATION_AMPLITUDES.IDLE
        }
        return s(t, [{
          key: "easeOutCubic",
          value: function() {
            return this.changeInValue * (Math.pow(this.currentIteration / this.totalIterations - 1, 3) + 1) + this.startValue
          }
        }, {
          key: "drawGauge",
          value: function() {
            for (var t = 2; t < 19; t++) {
              this.ctx.save();
              var e = t * this.ANGLE_BETWEEN_MARKS,
                i = 1 - Math.abs(this.currentAngle - e) / this.PI,
                n = 0;
              if (t > 13) {
                var s = 255 * (1 - .15 * (18 - t));
                n = "rgba(" + s + ", 0, 0, " + s / 255 + ")"
              } else n = "#ccc";
              this.ctx.lineWidth = this.STANDARD_MARK_WIDTH, i >= .99 ? this.ctx.lineWidth = this.MATCHING_MARK_WIDTH : i >= .93 && (this.ctx.lineWidth = this.CLOSE_MARK_WIDTH), this.ctx.translate(this.canvas.width / 2, this.canvas.height - 10), this.ctx.rotate(e), this.ctx.beginPath(), this.ctx.moveTo(-this.GAUGE_RADIUS, 0), this.ctx.lineTo(-this.GAUGE_MARK_LENGTH, 0), this.ctx.strokeStyle = n, this.ctx.stroke(), this.ctx.restore()
            }
          }
        }, {
          key: "drawNeedle",
          value: function() {
            this.ctx.save(), this.ctx.translate(this.canvas.width / 2, this.canvas.height - 10), this.ctx.rotate(this.currentAngle), this.ctx.beginPath(), this.ctx.moveTo(0, this.NEEDLE_BASE_WIDTH), this.ctx.lineTo(0, -this.NEEDLE_BASE_WIDTH), this.ctx.lineTo(-this.NEEDLE_LENGTH, -this.NEEDLE_TIP_WIDTH), this.ctx.lineTo(-this.NEEDLE_LENGTH, this.NEEDLE_TIP_WIDTH), this.ctx.fillStyle = this.NEEDLE_FILLSTYLE, this.ctx.closePath(), this.ctx.fill(), this.ctx.beginPath(), this.ctx.arc(-this.NEEDLE_LENGTH, 0, this.NEEDLE_TIP_WIDTH, 0, this.TWO_PI), this.ctx.fill(), this.ctx.restore()
          }
        }, {
          key: "clear",
          value: function() {
            this.ctx.save(), this.ctx.fillStyle = this.BACKGROUND_COLOR, this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore()
          }
        }, {
          key: "tick",
          value: function() {
            var t = performance.now(),
              e = t - this.lastTime;
            return e > this.INTERVAL && (this.lastTime = t - e % this.INTERVAL, !0)
          }
        }, {
          key: "drawLabels",
          value: function() {
            this.ctx.font = '9px "Work Sans"', this.ctx.fillStyle = "#737373", this.ctx.fillText("0", 15, 60), this.ctx.fillText("60k", 90, 60)
          }
        }, {
          key: "draw",
          value: function() {
            this.clear(), this.drawGauge(), this.drawLabels(), this.drawNeedle()
          }
        }, {
          key: "update",
          value: function() {
            this.tick() && (this.currentIteration++, this.currentIteration < this.totalIterations ? (this.currentAngle = this.easeOutCubic(), this.draw()) : (this.idleOffset = Math.random() / this.animationAmplitude, this.idleDirection *= -1, this.currentIteration = 0, this.nextAngle = this.currentPerfectAngle + this.idleOffset * this.idleDirection, this.startValue = this.currentAngle, this.changeInValue = this.nextAngle - this.currentAngle)), this.currentIteration < this.totalIterations && requestAnimationFrame(this.update.bind(this))
          }
        }, {
          key: "setNeedleAnimation",
          value: function(t) {
            this.animationAmplitude = this.ANIMATION_AMPLITUDES[t], this.totalIterations = this.TOTAL_ITERATIONS[t]
          }
        }, {
          key: "changeNumber",
          value: function(e) {
            var i = e > this.MAX_USER_COUNT ? this.MAX_USER_COUNT : e;
            i >= this.MAX_USER_COUNT - this.OVERDRIVE_THRESHOLD ? this.setNeedleAnimation(this.ANIMATION_TYPES.OVERDRIVE) : this.setNeedleAnimation(this.ANIMATION_TYPES.IDLE), this.currentPerfectAngle = t.mapNumberOntoRange(i, this.MIN_USER_COUNT, this.MAX_USER_COUNT, this.RANGE_MIN, this.RANGE_MAX), this.idleOffset = Math.random() / this.animationAmplitude, this.idleDirection = 1, this.nextAngle = this.currentPerfectAngle + this.idleOffset * this.idleDirection, this.currentIteration = 0, this.startValue = this.currentAngle, this.changeInValue = this.nextAngle - this.currentAngle, requestAnimationFrame(this.update.bind(this))
          }
        }, {
          key: "init",
          value: function() {
            this.canvas = document.querySelector(".data-viz__canvas-gauge"), this.canvas && (this.ctx = this.canvas.getContext("2d"), this.draw(), this.changeNumber(this.MIN_USER_COUNT))
          }
        }], [{
          key: "mapNumberOntoRange",
          value: function(t, e, i, n, s) {
            return (t - e) * (s - n) / (i - e) + n
          }
        }]), t
      }();
    e.a = a
  },
  298: function(t, e, i) {
    "use strict";

    function n(t) {
      if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i
      }
      return Array.from(t)
    }

    function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var a = i(127),
      r = (i.n(a), i(128)),
      o = i.n(r),
      c = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      l = i(299),
      d = function() {
        function t(e, i) {
          s(this, t), this.easeInCubic = function(t, e, i, n) {
            return t /= n, i * Math.pow(t, 3) + e
          }, this.easeOutCubic = function(t, e, i, n) {
            return t /= n, t--, i * (Math.pow(t, 3) + 1) + e
          }, this.dataVizList = e, this.dataVizActiveUsers = i, this.updateListItemHeight(), this.easeInOptions = {
            easingFn: this.easeInCubic,
            useEasing: !0,
            useGrouping: !0,
            separator: ",",
            decimal: "."
          }, this.noEasingOptions = {
            useEasing: !1,
            useGrouping: !0,
            separator: ",",
            decimal: "."
          }, this.easeOutOptions = {
            easingFn: this.easeOutCubic,
            useEasing: !0,
            useGrouping: !0,
            separator: ",",
            decimal: "."
          };
          var n = document.createElement("canvas");
          this.textCtx = n.getContext("2d")
        }
        return c(t, [{
          key: "updateListItemHeight",
          value: function() {
            document.body.clientWidth <= 480 ? this.listItemHeight = 75 : document.body.clientWidth <= 1024 ? this.listItemHeight = 90 : this.listItemHeight = 100
          }
        }, {
          key: "countUp",
          value: function(t, e, i, n, s) {
            var a = new l(this.dataVizActiveUsers, t, e, 0, i, n);
            a.error ? this.dataVizActiveUsers.innerText = e : a.start(s)
          }
        }, {
          key: "renderUsers",
          value: function(t) {
            var e = this,
              i = parseInt(this.dataVizActiveUsers.innerText.replace(",", ""), 10) || 0,
              n = (i + t) / 2,
              s = Math.max(0, i < t ? t - 50 : t + 50),
              a = function() {
                e.countUp(s, t, 1, e.easeOutOptions)
              },
              r = function() {
                e.countUp(n, s, 1.5, e.noEasingOptions, a)
              };
            this.countUp(i, n, 2.5, this.easeInOptions, r)
          }
        }, {
          key: "setInitialAnimation",
          value: function(t) {
            var e = this;
            t.style.transform = "translateY(1500px)", requestAnimationFrame(function() {
              t.style.transform = "translateY(" + t.dataset.index * e.listItemHeight + "px)"
            })
          }
        }, {
          key: "hideItemsOutOfView",
          value: function() {
            this.resetHiddenItems();
            var t = Math.floor(this.dataVizList.clientHeight / this.listItemHeight);
            [].concat(n(this.dataVizList.querySelectorAll("li"))).forEach(function(e) {
              e.dataset.index >= t && e.classList.add("data-viz__hide")
            });
            var e = this.dataVizList.querySelector('[data-index="' + (t - 1) + '"]');
            e && e.classList.add("data-viz__hide-border-bottom")
          }
        }, {
          key: "resetHiddenItems",
          value: function() {
            var t = this.dataVizList.querySelector(".data-viz__hide-border-bottom");
            t && t.classList.remove("data-viz__hide-border-bottom"), [].concat(n(this.dataVizList.querySelectorAll(".data-viz__hide"))).forEach(function(t) {
              t.classList.remove("data-viz__hide")
            })
          }
        }, {
          key: "loadInitialList",
          value: function(e, i) {
            var n = t.createListItem(e, i);
            this.setInitialAnimation(n), this.dataVizList.appendChild(n), setTimeout(function() {
              var t = n.querySelector(".data-viz__title");
              o()(t, 2, !1)
            })
          }
        }, {
          key: "loadMobileList",
          value: function(e, i, n) {}
        }, {
          key: "leaving",
          value: function(t) {}
        }, {
          key: "repositioning",
          value: function(e, i, n) {}
        }, {
          key: "entering",
          value: function(e, i) {}
        }], [{
          key: "createNumberContainer",
          value: function(t) {
            var e = document.createElement("div");
            e.classList.add("data-viz__number-container");
            var i = document.createElement("h4"),
              n = document.createTextNode(t.views);
            i.classList.add("data-viz__value"), i.appendChild(n);
            var s = document.createElement("div");
            return s.setAttribute("class", "data-viz__arrow-wrapper"), s.innerHTML = a.play, e.append(i, s), e
          }
        }, {
          key: "createBrandVoiceContainer",
          value: function(t) {}
        }, {
          key: "createForbesInsightsContainer",
          value: function() {}
        }, {
          key: "createPaidContentContainer",
          value: function(t) {}
        }, {
          key: "createTitleContainer",
          value: function(e) {
            var i = document.createElement("div");
            i.classList.add("data-viz__title-container");
            var n = document.createElement("a"),
              s = document.createTextNode(e.pageInfo.title);
            if (n.setAttribute("href", e.pageInfo.url), n.setAttribute("data-ga-track", "Trending - Article - " + e.pageInfo.title), n.setAttribute("title", e.pageInfo.title), n.classList.add("data-viz__title", "body--dense-merriweather"), n.appendChild(s), e.pageInfo.advoiceBrand) {
              var a = t.createBrandVoiceContainer(e);
              i.append(a, n)
            } else if ("insights" === e.blogType) {
              var r = t.createForbesInsightsContainer();
              i.append(r, n)
            } else if (e.paidContentData) {
              var o = t.createPaidContentContainer(e);
              i.append(o, n)
            } else i.append(n);
            return i
          }
        }, {
          key: "createListItem",
          value: function(e, i) {
            var n = i[e],
              s = t.createNumberContainer(n),
              a = t.createTitleContainer(n),
              r = document.createElement("li");
            return r.setAttribute("data-index", n.index), r.setAttribute("data-key", e), r.classList.add("data-viz__item"), r.append(s, a), r
          }
        }, {
          key: "updateViewNumber",
          value: function(t, e, i, n) {}
        }, {
          key: "updateArrowDirection",
          value: function(t, e) {}
        }]), t
      }();
    e.a = d
  },
  299: function(t, e, i) {
    var n, s;
    ! function(a, r) {
      n = r, void 0 !== (s = "function" == typeof n ? n.call(e, i, e, t) : n) && (t.exports = s)
    }(0, function(t, e, i) {
      return function(t, e, i, n, s, a) {
        function r(t) {
          var e, i, n, s, a, r, o = t < 0;
          if (t = Math.abs(t).toFixed(l.decimals), t += "", e = t.split("."), i = e[0], n = e.length > 1 ? l.options.decimal + e[1] : "", l.options.useGrouping) {
            for (s = "", a = 0, r = i.length; a < r; ++a) 0 !== a && a % 3 == 0 && (s = l.options.separator + s), s = i[r - a - 1] + s;
            i = s
          }
          return l.options.numerals.length && (i = i.replace(/[0-9]/g, function(t) {}), n = n.replace(/[0-9]/g, function(t) {})), (o ? "-" : "") + l.options.prefix + i + n + l.options.suffix
        }

        function o(t, e, i, n) {}

        function c(t) {
          return "number" == typeof t && !isNaN(t)
        }
        var l = this;
        if (l.version = function() {}, l.options = {
            useEasing: !0,
            useGrouping: !0,
            separator: ",",
            decimal: ".",
            easingFn: o,
            formattingFn: r,
            prefix: "",
            suffix: "",
            numerals: []
          }, a && "object" == typeof a)
          for (var d in l.options) a.hasOwnProperty(d) && null !== a[d] && (l.options[d] = a[d]);
        "" === l.options.separator ? l.options.useGrouping = !1 : l.options.separator = "" + l.options.separator;
        for (var u = 0, h = ["webkit", "moz", "ms", "o"], v = 0; v < h.length && !window.requestAnimationFrame; ++v) window.requestAnimationFrame = window[h[v] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[h[v] + "CancelAnimationFrame"] || window[h[v] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {}), l.initialize = function() {
          return !(!l.initialized && (l.error = "", l.d = "string" == typeof t ? document.getElementById(t) : t, l.d ? (l.startVal = Number(e), l.endVal = Number(i), c(l.startVal) && c(l.endVal) ? (l.decimals = Math.max(0, n || 0), l.dec = Math.pow(10, l.decimals), l.duration = 1e3 * Number(s) || 2e3, l.countDown = l.startVal > l.endVal, l.frameVal = l.startVal, l.initialized = !0, 0) : (l.error = "[CountUp] startVal (" + e + ") or endVal (" + i + ") is not a number", 1)) : (l.error = "[CountUp] target is null or undefined", 1)))
        }, l.printValue = function(t) {
          var e = l.options.formattingFn(t);
          "INPUT" === l.d.tagName ? this.d.value = e : "text" === l.d.tagName || "tspan" === l.d.tagName ? this.d.textContent = e : this.d.innerHTML = e
        }, l.count = function(t) {
          l.startTime || (l.startTime = t), l.timestamp = t;
          var e = t - l.startTime;
          l.remaining = l.duration - e, l.options.useEasing ? l.countDown ? l.frameVal = l.startVal - l.options.easingFn(e, 0, l.startVal - l.endVal, l.duration) : l.frameVal = l.options.easingFn(e, l.startVal, l.endVal - l.startVal, l.duration) : l.countDown ? l.frameVal = l.startVal - (l.startVal - l.endVal) * (e / l.duration) : l.frameVal = l.startVal + (l.endVal - l.startVal) * (e / l.duration), l.countDown ? l.frameVal = l.frameVal < l.endVal ? l.endVal : l.frameVal : l.frameVal = l.frameVal > l.endVal ? l.endVal : l.frameVal, l.frameVal = Math.round(l.frameVal * l.dec) / l.dec, l.printValue(l.frameVal), e < l.duration ? l.rAF = requestAnimationFrame(l.count) : l.callback && l.callback()
        }, l.start = function(t) {
          l.initialize() && (l.callback = t, l.rAF = requestAnimationFrame(l.count))
        }, l.pauseResume = function() {}, l.reset = function() {}, l.update = function(t) {}, l.initialize() && l.printValue(l.startVal)
      }
    })
  },
  300: function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var s = i(0),
      a = i(19),
      r = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      o = function() {
        function t() {
          n(this, t), this.dataModel = s.y.dataVizModel
        }
        return r(t, [{
          key: "refetchData",
          value: function() {}
        }]), t
      }();
    e.a = o
  },
  301: function(t, e, i) {
    "use strict";

    function n(t) {}
    var s = i(128),
      a = i.n(s),
      r = i(1),
      o = (i.n(r), i(126)),
      c = i(0),
      l = i(4),
      d = i(19),
      u = i(302);
    document.addEventListener("DOMContentLoaded", function() {
      function t() {}

      function e() {}

      function i() {}

      function s() {}

      function h() {}

      function v() {}
      var f = document.querySelector(".channel__sidebar--pop-picks"),
        p = f.querySelector(".pop-picks__nav-btn--popular"),
        m = f.querySelector(".pop-picks__nav-btn--picks"),
        g = f.querySelector(".pop-picks__content--popular"),
        _ = f.querySelector(".pop-picks__content--picks"),
        w = !0,
        b = null,
        y = void 0;
      ! function() {
        o.a.hasData() ? r.isMobile || r.isTablet ? o.a.initializeMobileList() : o.a.initialize() : v()
      }(),
      function() {
        r.isMobile || r.isTablet || (window.addEventListener("focus", function() {}), window.addEventListener("blur", function() {}), o.b && (o.b.addEventListener("mouseenter", Object(l.a)(function() {})), o.b.addEventListener("mouseleave", Object(l.a)(function() {})))), window.addEventListener("resize", Object(l.a)(function() {}, 200)), p.onclick = h, m.onclick = v
      }(),
      function() {
        "usa" !== c.v && o.b.classList.add("data-viz__list--international")
      }()
    })
  },
  302: function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {}

    function s(t) {}

    function a(t) {}

    function r(t) {}
    e.a = r;
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {} : function(t) {},
      c = Object.prototype.hasOwnProperty,
      l = /["&<>]/
  },
  303: function(t, e) {
    function i(t) {
      if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i
      }
      return Array.from(t)
    }
    document.addEventListener("DOMContentLoaded", function() {
      [].concat(i(document.querySelectorAll(".brand-voice-label"))).forEach(function(t) {})
    })
  },
  304: function(t, e) {
    document.addEventListener("DOMContentLoaded", function() {
      var t = document.querySelector(".edition-dropdown"),
        e = document.querySelector(".edition-dropdown__button");
      e && e.addEventListener("click", function() {})
    })
  },
  305: function(t, e, i) {
    "use strict";

    function n(t) {
      if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i
      }
      return Array.from(t)
    }
    var s = i(127),
      a = (i.n(s), i(4)),
      r = i(0),
      o = i(1),
      c = (i.n(o), i(2)),
      l = i(306);
    document.addEventListener("DOMContentLoaded", function() {
      function t(t) {}

      function e() {}
      var i = r.y.lazyLoadData,
        d = function(t) {},
        u = [].concat(n(document.querySelectorAll(".channel--normal"))),
        h = void 0;
      h = Object(a.a)(e, 200), window.addEventListener("scroll", h)
    })
  },
  306: function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {}

    function s(t, e) {}

    function a(t, e) {}

    function r(t) {}

    function o(t) {}

    function c(t) {}

    function l(t) {}
    e.a = l;
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {} : function(t) {},
      u = Object.prototype.hasOwnProperty,
      h = /["&<>]/
  },
  307: function(t, e) {
    document.addEventListener("DOMContentLoaded", function() {
      function t() {}
      var e = document.querySelector(".consumer__mktoForm"),
        i = document.querySelector(".consumer-marketing__confirmation");
      e && (! function() {}(), t())
    })
  },
  308: function(t, e) {
    document.addEventListener("DOMContentLoaded", function() {
      function t() {}

      function e() {}
      var i = document.querySelector(".error-banner__close"),
        n = document.querySelector(".error-banner__search-input");
      i && i.addEventListener("click", t), n && n.addEventListener("keyup", function(t) {})
    })
  },
  4: function(t, e, i) {
    "use strict";

    function n(t, e, i) {
      var n = this,
        s = void 0,
        a = void 0;
      return e || (e = 100),
        function() {}
    }
    e.a = n
  },
  5: function(t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var s = function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      a = function() {
        function t() {
          n(this, t), this.observers = []
        }
        return s(t, [{
          key: "subscribe",
          value: function(t) {
            this.observers.push(t)
          }
        }, {
          key: "unsubscribe",
          value: function(t) {}
        }, {
          key: "notify",
          value: function(t) {}
        }]), t
      }();
    e.a = a
  },
  6: function(t, e, i) {
    "use strict";
    var n = i(1);
    i.n(n);
    document.addEventListener("DOMContentLoaded", function() {
      function t(t) {}

      function e(t) {}
      var i = document.querySelector("html"),
        s = document.querySelector("body"),
        a = document.querySelector(".search-modal"),
        r = document.querySelector(".search-modal__input"),
        o = a.querySelector(".search-modal__icon--close-circle"),
        c = document.querySelector(".header .icon--search"),
        l = document.querySelector(".search-modal__submit");
      r && (r.value = ""), c && (c.addEventListener("click", function(e) {}), c.addEventListener("keyup", function(e) {})), o && (o.addEventListener("click", function() {}), o.addEventListener("keyup", function(t) {})), l && (l.addEventListener("click", function(t) {}), l.addEventListener("keyup", function(t) {}))
    })
  },
  60: function(t, e, i) {
    "use strict";
    var n = i(0),
      s = Object.assign || function(t) {},
      a = n.y.authorSlug,
      r = n.y.blogSlug,
      o = n.y.channelColor,
      c = n.y.channelId,
      l = n.y.channelName,
      d = n.y.edittools,
      u = n.y.is404,
      h = n.y.name,
      v = n.y.sectionId,
      f = n.y.subBlog,
      p = n.y.subBlogLocation,
      m = n.y.variantUri;
    document.addEventListener("DOMContentLoaded", function() {
      function t() {
        return -1 !== document.cookie.indexOf("forbeseditor")
      }

      function e() {}

      function i() {}

      function n() {}

      function g() {}

      function _(t) {}

      function w(t) {}

      function b() {}

      function y() {}

      function x(t) {}

      function L() {}
      var k = document.getElementsByTagName("html")[0],
        z = document.getElementsByTagName("head")[0],
        E = document.querySelector("body>.main-content>main"),
        S = {},
        C = !1;
      ! function() {
        t() && e() && L()
      }()
    })
  },
  7: function(t, e, i) {
    "use strict";

    function n(t) {
      if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i
      }
      return Array.from(t)
    }
    var s = i(1),
      a = (i.n(s), i(2)),
      r = i(0);
    document.addEventListener("DOMContentLoaded", function() {
      function t() {}

      function e() {}

      function i(t) {}

      function o() {}

      function c() {}

      function l() {}

      function d() {}

      function u(t) {}

      function h(t) {}

      function v(t) {}
      var f = document.querySelector(".header"),
        p = document.querySelector(".header__nav"),
        m = f.querySelector(".icon--hamburger"),
        g = f.querySelector(".icon--close"),
        _ = "header__nav--is-open",
        w = "header__nav--is-closed",
        b = [].concat(n(document.querySelectorAll(".header__channel"))),
        y = [].concat(n(document.querySelectorAll(".header__section"))),
        x = [].concat(n(document.querySelectorAll(".header__title"))),
        L = document.querySelector(".header__subnav"),
        k = f.querySelector(".icon--search"),
        z = document.querySelector(".header__channels").lastChild,
        E = "header__channel--is-open",
        S = "header__channel--is-closed",
        C = document.querySelector("body"),
        A = "body__prevent-scrolling",
        M = void 0;
      m && (m.addEventListener("click", function() {}), m.addEventListener("keyup", function(e) {})), g && (g.addEventListener("click", function() {}), g.addEventListener("keyup", function(t) {})), s.isMobile || s.isTablet ? b.forEach(function(t) {}) : ([].concat(n(b), n(y)).forEach(function(t) {
        t.classList.contains("header__channel") ? [].concat(n(t.querySelectorAll(".header__section"))).length > 1 ? t.classList.add("header__hoverable") : t.classList.add("header__channel--no-sections") : t.classList.add("header__hoverable"), t.addEventListener("mouseenter", function() {})
      }), x.forEach(function(t) {
        t.addEventListener("focus", function(t) {})
      }), k && k.addEventListener("focus", function() {}));
      var I = 0,
        V = document.querySelector(".fbs-ad--top-wrapper"),
        T = "fbs-ad--top-wrapper--up",
        O = "fbs-ad--top-wrapper--sticky",
        D = "header__nav--up",
        N = document.querySelector(".main-content--body"),
        H = 7,
        B = !0;
      a.a.subscribe(h), s.isMobile ? N.style.paddingTop = 0 : V && !r.t ? V.classList.add("fbs-ad--top-wrapper--desktop") : window.addEventListener("scroll", l),
        function() {
          if (r.h && r.g) {
            var t = document.querySelectorAll(".header__channels .header__channel");
            document.querySelector(".channel__indicator").classList.add("channel__indicator--" + r.g), t.forEach(function(e) {}), v(t)
          }
        }()
    })
  },
  92: function(t, e) {
    document.addEventListener("DOMContentLoaded", function() {
      document.addEventListener("fbs-ad-render", function(t) {})
    })
  }
}, [293]);
//# sourceMappingURL=homepage-0d4322602e6c9a46b771.js.map