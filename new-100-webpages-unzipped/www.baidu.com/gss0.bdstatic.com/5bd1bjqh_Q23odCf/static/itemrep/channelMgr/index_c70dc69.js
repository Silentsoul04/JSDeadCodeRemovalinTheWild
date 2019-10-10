rain.rainshell("channelMgr#v1.0.6", function(define, require, rain, $topDom, currentId) {
    define("rainModule/channelMgr/index_" + currentId, function() {
        function h(h, v) {
            var g = this;
            g.mine = [], g.rec = [], g.viewTpl = "", g.hasDiff = !1, g.origId = v, g.finalId = v, g.origTabs = [], g.redDotNum = 0, h && h.tabs && h.tabs.item && h.tabs.item.length ? (this.init(h), this.bindEvent()) : (this.offlineInit(), this.offlineEvent())
        }
        return h.prototype = {
            constructor: h,
            init: function(h) {
                var v = this;
                v.mine = h.tabs.item, h.unadded && (v.rec = h.unadded.item), v.judgeData(v.mine), v.judgeData(v.rec), v.origTabs = v.mine.concat(), v.initTpl(), v.viewTpl = v.wrapper
            },
            judgeData: function(h) {
                $.each(h, function(v, g) {
                    g.id && g.name || h.splice(v, 1)
                })
            },
            initTpl: function() {
                var h = this,
                    v = 0 === h.rec.length ? "已全部添加" : "点击添加栏目";
                h.wrapper = $('<div id="channel_mgrview" class="rn-channelMgr"></div>'), h.head = $('<div class="channel-head"></div>'), h.content = $('<div class="channel-content"></div>'), h.back = $('<a class="back"></a>'), h.head.append(h.back).append("<h1>栏目管理</h1>"), h.mineChannel = $('<div class="content mine"><p class="desc">已添加栏目</p></div>'), h.recChannel = $('<div class="content rec"><p class="desc">可添加栏目<span class="hint">' + v + "</span></p></div>"), h.mineItems = h.fillItems(h.mine, "mine"), h.recItems = h.fillItems(h.rec, "rec"), h.mineChannel.append(h.mineItems), h.recChannel.append(h.recItems), h.content.append(h.mineChannel).append(h.recChannel), h.wrapper.append(h.head).append(h.content)
            },
            fillItems: function(h, v) {
                var g = this,
                    b = $('<ul class="items" data-type="' + v + '"></ul>'),
                    w = "";
                if (h)
                    for (var i = 0; i < h.length; i++) w = +h[i].newTip ? " red-dot" : "", w += +h[i].can_be_deleted ? "" : " cannot-del", b.append('<li class="channel-item' + w + '" data-id="' + h[i].id + '"><span class="name">' + h[i].name + "</span></li>"), "rec" === v && +h[i].newTip && g.redDotNum++;
                return b
            },
            bindEvent: function() {
                var h = this;
                h.back.on("click", function() {
                    h.hasDiff = h.hasDiff || h.judgeDiff(h.origTabs, h.mine), rain.event.fire("rainModule/channelMgr", "back", {
                        data: {
                            tabs: h.mine,
                            unadded: h.rec
                        },
                        hasDiff: h.hasDiff,
                        finalId: h.finalId,
                        redDotNum: h.redDotNum
                    })
                }), h.content.on("click", ".channel-item", function() {
                    var v = this,
                        g = $(v).data("id"),
                        b = $(v).find(".name")[0].innerHTML,
                        w = $(v).parent().data("type"),
                        k = $(this).index(),
                        T = {};
                    $(v).hasClass("cannot-del") || h.clicking || (h.clicking = !0, "mine" === w ? ($(v).hasClass("red-dot") && ($(v).removeClass("red-dot"), h.mine[k].newTip = 0, h.hasDiff = !0, rain.event.fire("rainModule/channelMgr", "redClick", {
                        id: g,
                        name: b,
                        newTip: "0"
                    })), h.animate(v, h.mineItems, h.recItems, 0).done(function() {
                        h.clicking = !1, h.finalId = h.getFinalTabId(h.origTabs, h.mine)
                    }), T = h.mine.splice(k, 1), h.rec.unshift(T[0])) : ($(v).hasClass("red-dot") && ($(v).removeClass("red-dot"), h.rec[k].newTip = 0, h.redDotNum--, h.hasDiff = !0, rain.event.fire("rainModule/channelMgr", "redClick", {
                        id: g,
                        name: b,
                        newTip: "0"
                    })), h.animate(v, h.recItems, h.mineItems, 1).done(function() {
                        h.clicking = !1, h.finalId = h.getFinalTabId(h.origTabs, h.mine)
                    }), T = h.rec.splice(k, 1), h.mine.push(T[0])), 0 === h.rec.length ? h.recChannel.find(".hint")[0].innerHTML = "已全部添加" : 1 === h.rec.length && (h.recChannel.find(".hint")[0].innerHTML = "点击添加栏目"))
                })
            },
            judgeDiff: function(h, v) {
                var g = !1,
                    b = h.length,
                    w = v.length;
                if (b === w)
                    for (var i = 0; w > i; i++) $.inArray(v[i], h) < 0 && (g = !0);
                else g = !0;
                return g
            },
            getFinalTabId: function(h, v) {
                for (var g = this, b = v.length, w = !1, k = 1, i = 0; b > i; i++) $.inArray(v[i], h) < 0 && (w = !0);
                if (w) k = v[b - 1].id;
                else
                    for (var i = 0; b > i; i++) + v[i].id === g.origId && (k = g.origId);
                return k
            },
            animate: function(h, v, g, b) {
                function w(h, v) {
                    for (var g = v ? 1 : 0, i = 0; i < h.length; i++) _ = $(h[i]), j = _.index(), (j + 1) % 4 === g ? (L = 3 * R.width, A = -R.height) : (L = -R.width, A = 0), v || (L = -L, A = -A), _.css({
                        "-webkit-transition": "-webkit-transform .5s ease",
                        "-webkit-transform": "translate3d(" + L + "px, " + A + "px, 0)"
                    }), z = z.add(_)
                }

                function k(h, v) {
                    h.css({
                        "-webkit-transition": "-webkit-transform .5s ease",
                        "-webkit-transform": "translate3d(0, " + v * R.height + "px, 0)"
                    }), z = z.add(h), H -= R.height
                }
                var T, M, C, _, j, y, E = g.find(".channel-item"),
                    N = v.find(".channel-item"),
                    F = 0,
                    H = 0,
                    L = 0,
                    A = 0,
                    R = $(h).offset(),
                    z = $(h),
                    B = $.Deferred();
                if (0 != b && 1 != b) return B.resolve(), B;
                if (T = E.eq(0 === b ? 0 : -1), T.length ? (F = $(T).offset().left - R.left, H = $(T).offset().top - R.top) : (F = 13 - R.left, H = $(g).offset().top + 7 - R.top), 1 === b) {
                    var G = $(T).index();
                    (G + 1) % 4 === 0 ? (F -= 3 * R.width, H += R.height) : F += R.width
                }
                return y = $(h).index(), M = N.filter(function() {
                    return $(this).index() > y
                }), w(M, 1), C = 0 === b ? E : [], w(C, 0), b && E.length % 4 === 0 ? k(v.parent(), 1) : b || N.length % 4 !== 1 || k(g.parent(), -1), $(h).css({
                    "-webkit-transition": "-webkit-transform .5s ease",
                    "-webkit-transform": "translate3d(" + F + "px, " + H + "px, 0)"
                }), $(h).one("webkitTransitionEnd", function() {
                    0 === b ? T.length ? T.before(h) : g.prepend(h) : T.after(h), z.css({
                        "-webkit-transform": null,
                        "-webkit-transition": null
                    }), B.resolve()
                }), B
            },
            offlineInit: function() {
                var h = this,
                    v = '<div id="channel_offline" class="rn-channelMgr"><div class="channel-head"><a class="back"></a><h1>栏目管理</h1></div><div class="c-offline-home"><div class ="icons"></div><p>网络不给力，请稍后重试</p><div class="refresh"></div></div></div>';
                h.viewTpl = $(v)
            },
            offlineEvent: function() {
                var h = this;
                h.viewTpl.on("click", ".back", function() {
                    rain.event.fire("rainModule/channelMgr", "back")
                }).on("click", ".refresh", function() {
                    rain.event.fire("rainModule/channelMgr", "offlineRefresh")
                })
            }
        }, h
    }), require(["rainModule/channelMgr/index_" + currentId], function(h) {
        rain.event.listen("rainModule/channelMgr", "channelMgrTpl", function(v) {
            v.dom.append(new h(v.item, v.id).viewTpl)
        })
    })
});