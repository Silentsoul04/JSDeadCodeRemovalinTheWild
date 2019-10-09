var HamburgerMenu;
(function() {
    function d(r, u) {
        r && u && u.request.responseText && (n.innerHTML = "", u.appendTo(n), t(i, "b_hide"), a = !0, f())
    }

    function g(n) {
        return _w.location.search.length > 1 && n.push(_w.location.search.substring(1)), n
    }

    function nt() {
        var i = [],
            r, t, u;
        g(i);
        i.push("IID=" + n.getAttribute("_iid"));
        i.push("IG=" + _G.IG);
        r = _w.Feedback;
        r && r.Bootstrap && i.push("fbnb=1");
        t = "/Identity/Hamburger?n=1&" + i.join("&");
        u = "&ru=" + encodeURIComponent(_w.location.href);
        t.length + u.length < 2048 && (t = t + u);
        (n.getAttribute("data-isimages") == "1" || /^\/images\/search$/i.test(_w.location.pathname)) && (t = t + "&src=img");
        sj_ajax(t, {
            callback: d
        })
    }

    function f() {
        if (!a) {
            nt();
            return
        }
        e && r(e, "notrans");
        t(i, h);
        r(i, c);
        t(n, h);
        r(n, c);
        v || (l.style.position = "fixed", l.style.overflowY = "hidden");
        t(n, s);
        r(n, o);
        t(i, w);
        r(i, p);
        _ge("HBMenu").setAttribute("aria-hidden", "false");
        u.setAttribute("aria-expanded", "true");
        sj_evt.fire("onHBReady");
        Log.Log("Show", b, k)
    }

    function tt() {
        f();
        var n = _ge("bawhead");
        n != null && HamburgerMobileFlyout.toggle(n, !0)
    }

    function it() {
        typeof sj_b != "undefined" && u && n && i && (v = sj_b.className.indexOf("hp") >= 0, _w.getComputedStyle && _w.getComputedStyle(sj_b).direction === "rtl" && (t(n, "flyouttop_ltr"), r(n, "flyouttop_rtl"), o = "slidein_rtl", s = "slideout_rtl"), sj_be(u, y, function(n) {
            sj_sp(n);
            f()
        }), sj_evt.bind("BingAtWork:OpenHamburgerGleam", tt), t(u, "b_hide"), sj_evt.fire("onHBVis"))
    }
    var u = _ge("mHamburger"),
        n = _ge("HBFlyoutTop"),
        i = _ge("HBFlyoutBehind"),
        e = _ge("b_tq_header"),
        y = "click",
        o = "slidein_ltr",
        s = "slideout_ltr",
        p = "fade-in",
        w = "fade-out",
        h = "flyHide",
        c = "flyShow",
        b = "Flyout",
        k = "Hamburger",
        r = Lib.CssClass.add,
        t = Lib.CssClass.remove,
        l = _d.body.parentNode,
        a = !1,
        v;
    it()
})(HamburgerMenu || (HamburgerMenu = {}))