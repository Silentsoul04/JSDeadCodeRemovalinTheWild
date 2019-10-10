define(["require", "exports", "tslib", "react", "modules/clean/react/css"], function(e, t, n, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var a = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onAnimationIteration = function(e) {
                e.currentTarget && e.currentTarget.classList.add("zeus-arrow-button__pause")
            }, t.onMouseEnter = function(e) {
                e.currentTarget && e.currentTarget.addEventListener("animationiteration", t.onAnimationIteration)
            }, t.onMouseLeave = function(e) {
                e.currentTarget && (e.currentTarget.classList.remove("zeus-arrow-button__pause"), e.currentTarget.removeEventListener("animationiteration", t.onAnimationIteration))
            }, t
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                n = e.ariaLabel,
                o = e.onClick;
            return r.default.createElement("button", {
                "aria-label": n,
                className: t ? t + " zeus-arrow-button" : "zeus-arrow-button",
                onClick: o,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            }, r.default.createElement("svg", {
                width: "24",
                height: "36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, r.default.createElement("path", {
                d: "M12.456 34.144c2.112-3.696 7.008-8.064 10.992-9.552v-3.408c-4.128 1.632-8.256 5.328-10.272 8.16V.016h-2.88v29.328C8.328 26.512 4.248 22.816.12 21.232v3.36c3.984 1.44 8.784 5.856 10.896 9.552h1.44z",
                fill: "#FFE7AA"
            })), r.default.createElement("svg", {
                width: "24",
                height: "36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, r.default.createElement("path", {
                d: "M12.456 34.144c2.112-3.696 7.008-8.064 10.992-9.552v-3.408c-4.128 1.632-8.256 5.328-10.272 8.16V.016h-2.88v29.328C8.328 26.512 4.248 22.816.12 21.232v3.36c3.984 1.44 8.784 5.856 10.896 9.552h1.44z",
                fill: "#FFE7AA"
            })))
        }, t
    })(r.default.PureComponent);
    t.ZeusArrowButton = o.requireCssWithComponent(a, ["/static/css/index/components/zeus_arrow_button-vflknw2-O.css"])
});
//# sourceMappingURL=zeus_arrow_button.min.js-vflusD8MA.map