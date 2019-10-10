define(["idcta-v2/idCookie", "idcta-v2/id-config", "idcta-v2/logger"], function(t, e, n) {
    function i(i) {
        try {
            if (this.id = null, this.element = null, this.ctaLink = null, this.ctaName = null, c(i)) {
                this.id = i.id, this.element = document.getElementById(i.id), i.blq ? (this.ctaLink = document.getElementById(i["link-id"]) ? document.getElementById(i["link-id"]) : this.element.getElementsByTagName("a")[0], this.ctaName = i["name-id"] ? document.getElementById(i["name-id"]) : this.element.getElementsByTagName("span")[1]) : (this.ctaLink = document.getElementById("idcta-link"), this.ctaName = this.element.getElementsByTagName("span")[0]);
                var l = this;
                i.publiclyCacheable === !0 && (t.getInstance().hasCookie() ? e.getConfigAsync().then(function(e) {
                    e.status_url && l.ctaLink.href !== e.status_url && (l.ctaLink.href = e.status_url), a(l, t.getInstance())
                }) : e.getConfigAsync().then(function(t) {
                    t.signin_url && (l.ctaLink.href = t.signin_url), l.ctaName.innerText = t.translation_signedout
                }))
            }
        } catch (t) {
            n.logCaughtError(t)
        }
    }

    function a(t, i) {
        return e.getConfigAsync().then(function(e) {
            var n = i.getNameFromCookie() || e.translation_signedin,
                a = e.translation_signedin;
            n && (a = l(n, 14)), t.element.className = t.element.className + " idcta-signedin", t.ctaName.innerText = a
        }).catch(function(t) {
            n.logCaughtError(t)
        })
    }

    function l(t, e) {
        return t.length > e ? t.substring(0, e - 1) + "…" : t
    }

    function c(t) {
        return !!document.getElementById(t.id) && (!(!t.blq && !document.getElementById("idcta-link")) && !(t.blq && !document.getElementById(t["link-id"])))
    }
    var s = {};
    return s.Statusbar = i, s.updateForAuthorisedState = a, s
});
//# sourceMappingURL=statusbar.js.map