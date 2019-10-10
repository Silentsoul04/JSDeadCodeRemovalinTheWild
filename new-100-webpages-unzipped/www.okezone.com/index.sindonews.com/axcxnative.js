var opts = {
        domain: atob("c2luZG9uZXdzLmNvbQ==")
    },
    user_cookie_v = muc();

function ue(e) {
    try {
        return encodeURIComponent(e)
    } catch (n) {
        return escape(e)
    }
}

function gbc(e) {
    var n, t = document.cookie,
        r = e + "=",
        o = t.indexOf("; " + r);
    if (-1 == o) {
        if (0 != (o = t.indexOf(r))) return null
    } else o += 2;
    return -1 == (n = t.indexOf(";", o)) && (n = t.length), ue(t.substring(o + r.length, n))
}

function sbc(e, n, t) {
    var r = new Date,
        o = this.dom();
    r.setTime(r.getTime() + 1e3 * t), document.cookie = e + "=" + escape(n) + (t ? "; expires=" + r.toGMTString() : "") + (o && o.length > 0 ? "; domain=." + o : "") + "; path=/"
}

function dom() {
    if ("string" == typeof this.opts.domain) return this.opts.domain;
    var e = window.location.host;
    return "www." == e.substr(0, 4) ? e.substr(4) : e
}

function gc(e, n, t, r) {
    var o = "",
        i = 0;
    try {
        o = this.gbc(e)
    } catch (e) {}
    return null != o && 0 != o.length || (o = n, i = 1), sbc(e, o, r), o + "&" + t + "_flag=" + i
}

function r() {
    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
}

function muc() {
    return r() + r() + (new Date).getTime().toString(16) + r() + r()
}

function map(e, n) {
    var t = [];
    for (var r in e) e.hasOwnProperty(r) && t.push(n.call(this, r, e[r]));
    return t
}

function screen_params(e, n) {
    try {
        return e + "x" + n + "x" + screen.colorDepth
    } catch (e) {}
    return ""
}

function random_number() {
    return Math.round(21474836747 * Math.random())
}

function time() {
    var e = new Date;
    return e.getTime() + "&time_zone_offset=" + e.getTimezoneOffset()
}

function domain() {
    return "string" == typeof opts.domain ? opts.domain : ""
}

function user_lang() {
    return window.navigator.userLanguage || window.navigator.language
}

function axsindo(e, n, t, r, o, i, a, u) {
    return atob("aHR0cHM6Ly9jZXJ0aWZ5LmFsZXhhbWV0cmljcy5jb20vYXRyay5naWY=") + "?" + ("frame_height=" + e) + ("&frame_width=" + n + "&iframe=0") + ("&title=" + t) + ("&time=" + time()) + ("&screen_params=" + screen_params(n, e) + "&java_enabled=0&cookie_enabled=1") + ("&ref_url=" + r) + ("&host_url=" + o) + ("&random_number=" + random_number()) + ("&sess_cookie=" + gc(i, u, "sess_cookie", 1800)) + ("&user_cookie=" + gc(a, u, "user_cookie", 31622400)) + ("&dynamic=true&domain=" + domain() + "&account=p03zj1aEsk00MA&jsv=20130128") + ("&user_lang=" + user_lang())
}

function cxsindo(e, n, t, r) {
    return atob("aHR0cHM6Ly9zYi5zY29yZWNhcmRyZXNlYXJjaC5jb20vYg==") + "?c1=2&c2=9013027" + ("&ns__t=" + e + "&ns_c=UTF-8&cv=3.1") + ("&c8=" + n) + ("&c7=" + t) + ("&c9=" + r)
}