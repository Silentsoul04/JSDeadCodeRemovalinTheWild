var sj_anim = function(n) {
    var s = 25,
        t = this,
        c, u, h, f, e, o, l, i, r;
    t.init = function(n, s, a, v, y) {
        if (c = n, e = s, o = a, l = v, r = y, v == 0) {
            f = h;
            r && r();
            return
        }
        i || (i = e);
        u || t.start()
    };
    t.start = function() {
        h = sb_gt();
        f = Math.abs(o - i) / l * s;
        u = setInterval(t.next, s)
    };
    t.stop = function() {
        clearInterval(u);
        u = 0
    };
    t.next = function() {
        var u = sb_gt() - h,
            s = u >= f;
        i = e + (o - e) * u / f;
        s && (t.stop(), i = o);
        n(c, i);
        s && r && r()
    };
    t.getInterval = function() {
        return s
    }
}