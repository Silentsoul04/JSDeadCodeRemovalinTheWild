(function() {
    function o() {
        sb_st(function() {
            i("100%");
            Lib.CssClass.contains(sj_b, t) || Lib.CssClass.add(sj_b, t)
        }, 0)
    }

    function s(n) {
        var i = n[0],
            u = n[1],
            t = n[2];
        t != 0 && r()
    }

    function r() {
        Lib.CssClass.contains(sj_b, t) && Lib.CssClass.remove(sj_b, t)
    }

    function i(t) {
        n.style.width = t;
        n.style.height = t
    }

    function u() {
        r();
        i("0")
    }

    function f(n) {
        return n !== "undefined"
    }
    var n = sj_ce("div", "b_lbOverlay"),
        t = "b_lbShow",
        e, h;
    f(typeof Lib) && f(typeof Lib.CssClass) && (u(), sj_be(n, "click", s), sj_evt.bind("autosuggestHide", s), sj_evt.bind("AS.RequestSent", o), sj_evt.bind("AS.Navigate", function() {
        r();
        i("0")
    }), f(typeof _w.sa_config) && _w.sa_config.ol || sj_evt.bind("AS.bootload", o), e = _ge("hp_container"), h = e ? e : sj_b, h.appendChild(n), sj_be(n, "transitionend", function() {
        var n = Lib.CssClass.contains(sj_b, t);
        sj_evt.fire("qflb_anim", n);
        n || i("0")
    }), sj_evt.bind("ajax.load", u, 1, 1), sj_evt.bind("ajax.unload", u, 1, 1), _w.onbeforeunload = function() {
        r();
        i("0")
    })
})()