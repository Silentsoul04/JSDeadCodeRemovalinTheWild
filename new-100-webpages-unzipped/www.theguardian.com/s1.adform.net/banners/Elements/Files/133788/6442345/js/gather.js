function BBTimeline() {
    TimelineMax.apply(this, arguments), this.addPosition = 0, this.mode = "offset", this.children = []
}
var bb = bb || {};
Object.create || (Object.create = function(a, b) {
    function c() {}
    if ("object" != typeof a && "function" != typeof a) throw new TypeError;
    if (null === a) throw new Error;
    if ("undefined" != typeof b) throw new Error;
    return c.prototype = a, new c
}), BBTimeline.prototype = Object.create(TimelineMax.prototype), BBTimeline.prototype.constructor = BBTimeline, BBTimeline.prototype.add = function(a) {
    var b;
    if ("end" == this.mode) b = this.duration() + this.addPosition;
    else if ("absolute" == this.mode) b = this.addPosition;
    else {
        var c = this.children.concat().sort(function(a, b) {
                return a.index - b.index
            }),
            d = c[c.length - 1];
        b = d ? d.position : 0, "offset" == this.mode ? b += this.addPosition : "chain" == this.mode && (b += d.duration + this.addPosition)
    }
    return TimelineMax.prototype.add.call(this, a, b), this.children.push({
        position: b,
        duration: a.duration ? a.duration() : 0,
        index: this.children.length
    }), this.locked || (this.addPosition = 0, this.mode = "offset"), this
}, BBTimeline.prototype.set = function() {
    return this.add(TweenLite.set(arguments[0], arguments[1]), arguments[2])
}, BBTimeline.prototype.to = function() {
    return this.add(TweenLite.to(arguments[0], arguments[1], arguments[2]), arguments[3])
}, BBTimeline.prototype.from = function() {
    return this.add(TweenLite.from(arguments[0], arguments[1], arguments[2]), arguments[3])
}, BBTimeline.prototype.fromTo = function() {
    return this.add(TweenLite.fromTo(arguments[0], arguments[1], arguments[2], arguments[3]), arguments[4])
}, BBTimeline.prototype.staggerTo = function() {
    return this.add((new TimelineMax).staggerTo(arguments[0], arguments[1], arguments[2], arguments[3]), arguments[4])
}, BBTimeline.prototype.staggerFrom = function() {
    return this.add((new TimelineMax).staggerFrom(arguments[0], arguments[1], arguments[2], arguments[3]), arguments[4])
}, BBTimeline.prototype.staggerFromTo = function() {
    return this.add((new TimelineMax).staggerFromTo(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), arguments[5])
}, BBTimeline.prototype.lock = function(a, b) {
    return this.mode = a, this.addPosition = b || 0, this.locked = !0, this
}, BBTimeline.prototype.offset = function(a) {
    return this.mode = "offset", this.addPosition = a || 0, this.locked = !1, this
}, BBTimeline.prototype.chain = function(a) {
    return this.mode = "chain", this.addPosition = a || 0, this.locked = !1, this
}, BBTimeline.prototype.end = function(a) {
    return this.mode = "end", this.addPosition = a || 0, this.locked = !1, this
}, BBTimeline.prototype.absolute = function(a) {
    return this.mode = "absolute", this.addPosition = a || 0, this.locked = !1, this
}, BBTimeline.prototype.loop = function(a, b) {
    var c = 0,
        d = this;
    return this.add(function() {
        c++ < a && d.seek(b || "loop")
    })
}, BBTimeline.prototype.start = function(a) {
    return this.add(function() {
        a.play()
    })
}, BBTimeline.prototype.stagger = function() {
    return this.add((new TimelineMax).add(arguments[0], 0, "normal", arguments[1]))
};
var bb = bb || {};
bb.image_cache = {}, bb.defaults = {}, bb.createElement = function(a) {
    function f() {
        b.appendChildren = function(a) {
            for (var b = 0; b < a.length; ++b) this.appendChild(a[b]);
            return this
        }, b.set = function(a) {
            return TweenLite.set(this, a), this
        }, b.to = function(a, b) {
            return TweenLite.to(this, a, b), this
        }, b.from = function(a, b) {
            return TweenLite.from(this, a, b), this
        }, b.fromTo = function(a, b, c) {
            return TweenLite.fromTo(this, a, b, c), this
        }, b.get = function(a) {
            return this._gsTransform && this._gsTransform[a] || this._gsTransform && 0 === this._gsTransform[a] ? this._gsTransform[a] : "px" == this.style[a].slice(-2) ? parseFloat(this.style[a]) : this.style[a]
        }, b.centerX = b.centerHorizontal = function() {
            return TweenLite.set(this, {
                left: 0,
                right: 0,
                marginLeft: "auto",
                marginRight: "auto"
            }), this
        }, b.centerY = b.centerVertical = function() {
            return TweenLite.set(this, {
                top: 0,
                bottom: 0,
                marginTop: "auto",
                marginBottom: "auto"
            }), this
        }, b.center = function() {
            return TweenLite.set(this, {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto"
            }), this
        }, b.putInContainer = function(a) {
            this.container = bb.createElement({
                left: this.get("left"),
                top: this.get("top"),
                width: this.get("width"),
                height: this.get("height"),
                overflow: a || "hidden",
                parent: this.parentNode
            }), this.set({
                left: 0,
                top: 0
            }), this.container.appendChild(this)
        }, a.id && (b.id = a.id), a.insertBefore ? a.insertBefore.parentNode.insertBefore(b, a.insertBefore) : a.insertAfter ? a.insertAfter.parentNode.insertBefore(b, a.insertAfter.nextElementSibling) : a.parent && a.parent.appendChild(b), a.center && b.center(), a.centerX && b.centerX(), a.centerY && b.centerY(), a.centerHorizontal && b.centerHorizontal(), a.centerVertical && b.centerVertical(), a.innerHTML && (b.innerHTML = a.innerHTML), a = bb.deleteProps(a, ["ns", "innerHTML", "retina", "parent", "id", "type", "autoplay", "loop", "controls", "muted", "poster", "preload", "sources", "center", "centerHorizontal", "centerVertical", "centerY", "centerX", "insertBefore", "insertAfter"]), TweenLite.set(b, a)
    }

    function g(a, b) {
        var c = bb.image_cache[a];
        c ? b && h.apply(c) : ( /*console.log("Image " + a + " has not been preloaded."),*/ c = document.createElement("img"), c.src = a, b && (c.onload = h), bb.image_cache[a] = c)
    }

    function h() {
        var b = ".svg" == this.src.slice(-4);
        b && document.body.appendChild(this), a.width = a.width || Math.round(a.retina ? this.width / 2 : this.width), a.height = a.height || Math.round(a.retina ? this.height / 2 : this.height), a.backgroundImage = "url(" + this.src + ")", f(), b && document.body.removeChild(this)
    }
    a = a || {}, a = bb.combineObjects({
        type: "div",
        position: "absolute",
        force3D: !0
    }, bb.defaults, a);
    var b = a.ns ? document.createElementNS(a.ns, a.type) : document.createElement(a.type);
    switch (a.type) {
        case "canvas":
            b.width = a.width, b.height = a.height;
            break;
        case "video":
            a.autoplay && (b.autoplay = a.autoplay), a.loop && (b.loop = a.loop), a.controls && (b.controls = a.controls), a.muted && (b.muted = a.muted), a.poster && (b.poster = a.poster), a.preload && (b.preload = a.preload)
    }
    if (a.sources)
        for (var c = a.sources, d = 0; d < c.length; d++) {
            var e = document.createElement("source");
            e.src = c[d].url, e.type = c[d].type, b.appendChild(e)
        }
    return a.backgroundImage ? (b.style.backgroundSize = a.backgroundSize || "contain", b.style.backgroundRepeat = a.backgroundRepeat || "no-repeat", g(a.backgroundImage, !0)) : f(), b
}, bb.preloadImages = function(a, b, c) {
    for (var d = 0, e = null, f = [], g = 0; g < a.length; ++g) e = document.createElement("img"), e.src = e.shortSrc = a[g], f.push(e), e.onload = function() {
        d++, bb.image_cache[this.shortSrc] = this, d == a.length && (c ? b.call(c, f) : b(f))
    };
    0 === a.length && (c ? b.call(c) : b())
}, bb.include = function(a, b) {
    console.log("#include '" + a + "'");
    var c = document.createElement("script");
    c.type = "text/javascript", c.src = a, document.head.appendChild(c), c.onload = b ? b : function() {
        console.log("Resource loaded: " + c.src)
    }, c.onerror = function() {
        console.log("Oops! Could not load resource '" + a + "'")
    }
}, bb.combineObjects = function() {
    var a = {};
    for (var b in arguments) {
        var c = arguments[b];
        for (var d in c) a[d] = c[d]
    }
    return a
}, bb.deleteProps = function(a, b) {
    var c = bb.combineObjects({}, a);
    for (var d in b) delete c[b[d]];
    return c
}, window.console || (window.console = {
    log: function() {}
});
var bb = bb || {};
bb.utils = {
    dist: function(a, b, c, d) {
        return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d))
    },
    angle: function(a, b, c, d) {
        return Math.atan2(d - b, c - a)
    },
    norm: function(a, b, c, d) {
        var e = (a - b) / (c - b);
        return d ? bb.utils.clamp(e, 0, 1) : e
    },
    lerp: function(a, b, c, d) {
        var e = (c - b) * a + b;
        return d ? bb.utils.clamp(e, b, c) : e
    },
    map: function(a, b, c, d, e, f) {
        return bb.utils.lerp(bb.utils.norm(a, b, c, f), d, e, f)
    },
    clamp: function(a, b, c) {
        return Math.min(Math.max(a, Math.min(b, c)), Math.max(b, c))
    },
    inRange: function(a, b, c) {
        return a >= Math.min(b, c) && a <= Math.max(b, c)
    },
    random: function() {
        return bb.randomSeed ? (bb.randomSeed = (bb.utils.a * bb.randomSeed + bb.utils.c) % bb.utils.m, bb.randomSeed / bb.utils.m) : Math.random()
    },
    a: 1664525,
    c: 1013904223,
    m: Math.pow(2, 32),
    randomRange: function(a, b) {
        return a + bb.utils.random() * (b - a)
    },
    randomInt: function(a, b) {
        return Math.floor(a + bb.utils.random() * (b - a + 1))
    },
    toDegrees: function(a) {
        return 180 * a / Math.PI
    },
    toRadians: function(a) {
        return a * Math.PI / 180
    },
    sign: function(a) {
        return a > 0 ? 1 : 0 === a ? 0 : -1
    },
    roundToPlaces: function(a, b) {
        var c = Math.pow(10, b);
        return Math.round(a * c) / c
    },
    roundToNearest: function(a, b) {
        return Math.round(a / b) * b
    },
    shortestArc: function(a, b) {
        return Math.abs(b - a) < Math.PI ? b - a : b > a ? b - a - 2 * Math.PI : b - a + 2 * Math.PI
    },
    wrap: function(a, b) {
        return (a % b + b) % b
    },
    lerpColor: function(a, b, c) {
        var d = bb.utils.hexToRGB(b),
            e = bb.utils.hexToRGB(c),
            f = {
                r: Math.round(bb.utils.lerp(a, d.r, e.r)),
                g: Math.round(bb.utils.lerp(a, d.g, e.g)),
                b: Math.round(bb.utils.lerp(a, d.b, e.b))
            };
        return bb.utils.rgbToHex(f.r, f.g, f.b)
    },
    rgbToHex: function(a, b, c) {
        return "#" + ((1 << 24) + (a << 16) + (b << 8) + c).toString(16).slice(1)
    },
    hexToRGB: function(a) {
        var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        a = a.replace(b, function(a, b, c, d) {
            return b + b + c + c + d + d
        });
        var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
        return c ? {
            r: parseInt(c[1], 16),
            g: parseInt(c[2], 16),
            b: parseInt(c[3], 16)
        } : null
    },
    pad: function(a, b) {
        for (var c = a.toString(); c.length < b;) c = "0" + c;
        return c
    },
    createRect: function(top, right, bottom, left) {
        return "rect(" + top + "px," + right + "px," + bottom + "px," + left + "px)";
    },
    sort_by: function(field, reverse) {
        var key = function(x) {
            return x[field];
        };
        reverse = !reverse ? 1 : -1;
        return function(a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        };
    },
    setBoxShadow: function(obj, x, y, blur, spread, rgba) {
        var prefixes = ['-webkit-box-shadow', '-moz-box-shadow', 'box-shadow'];
        for (var i = 0; i < prefixes.length; i++) {
            obj.style[prefixes[i]] = x + "px " + y + "px " + blur + "px " + spread + "px " + rgba;
        }
    }
}