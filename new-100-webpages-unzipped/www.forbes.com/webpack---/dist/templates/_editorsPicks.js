function pug_attr(t, e, n, f) {
    return !1 !== e && null != e && (e || "class" !== t && "style" !== t) ? !0 === e ? " " + (f ? t : t + '="' + t + '"') : ("function" == typeof e.toJSON && (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'") : ""
}

function pug_escape(e) {
    var a = "" + e,
        t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for (r = t.index, c = 0; r < a.length; r++) {
        switch (a.charCodeAt(r)) {
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n
    }
    return c !== r ? s + a.substring(c, r) : s
}
var pug_has_own_property = Object.prototype.hasOwnProperty;
var pug_match_html = /["&<>]/;

function pug_style(r) {
    if (!r) return "";
    if ("object" == typeof r) {
        var t = "";
        for (var e in r) pug_has_own_property.call(r, e) && (t = t + e + ":" + r[e] + ";");
        return t
    }
    return r + ""
}
export function template(locals) {
    var pug_html = "",
        pug_mixins = {},
        pug_interp;;
    var locals_for_with = (locals || {});
    (function(picksData) {
        pug_mixins["bylineAuthor"] = pug_interp = function(author, rowTitle, rowLetterId, trackingIndex, isCoAuthor) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            if (((author || {}).name)) {
                pug_html = pug_html + "\u003Cdiv class=\"byline__author\"\u003E";
                if ((isCoAuthor)) {
                    pug_html = pug_html + "\u003Cspan class=\"byline__by-space\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003Cspan class=\"byline__by\"\u003Eand\u003C\u002Fspan\u003E";
                } else {
                    pug_html = pug_html + "\u003Cspan class=\"byline__by\"\u003EBy\u003C\u002Fspan\u003E";
                }
                pug_html = pug_html + "\u003Ca" + (" class=\"byline__author-name\"" + pug_attr("href", author.url, true, false) + pug_attr("data-ga-track", (rowTitle === 'editors picks') ? `Cover Story - Position 0 - ${author.name}` : `Channel - Block ${rowLetterId} - ${rowTitle} - Position ${trackingIndex} - ${author.name}`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = author.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
                if ((author.displayType)) {
                    pug_html = pug_html + "\u003Cspan class=\"byline__author-type\"\u003E" + (pug_escape(null == (pug_interp = author.displayType) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
                }
                pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            }
        };
        pug_mixins["byline"] = pug_interp = function(item, rowTitle, rowLetterId) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            if ((item.type !== 'video')) {
                pug_html = pug_html + "\u003Cspan class=\"byline\"\u003E\u003Cdiv class=\"byline__author-group\"\u003E";
                pug_mixins["bylineAuthor"](item.author, rowTitle, rowLetterId, item.trackingIndex || 0, false);
                // iterate (item.coAuthors || [])
                ;
                (function() {
                    var $$obj = (item.coAuthors || []);
                    if ('number' == typeof $$obj.length) {
                        for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
                            var coAuthor = $$obj[pug_index0];
                            pug_mixins["bylineAuthor"](coAuthor, rowTitle, rowLetterId, item.trackingIndex || 0, true);
                        }
                    } else {
                        var $$l = 0;
                        for (var pug_index0 in $$obj) {
                            $$l++;
                            var coAuthor = $$obj[pug_index0];
                            pug_mixins["bylineAuthor"](coAuthor, rowTitle, rowLetterId, item.trackingIndex || 0, true);
                        }
                    }
                }).call(this);

                pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E";
            }
        };












        pug_mixins["icon"] = pug_interp = function(iconName) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            switch (iconName) {
                case 'amazon-books':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--amazon-books\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M1 6.1s3.8-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1zM10.5 6.1s3.9-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'arrowLeft':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--arrow-left\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M2.5 10h16v2h-16z\"\u002F\u003E\u003Cpath transform=\"rotate(-45.001 4.5 8.877)\" d=\"M.5 7.9h8v2h-8z\"\u002F\u003E\u003Cpath transform=\"rotate(45.001 4.5 13.124)\" d=\"M.5 12.1h8v2h-8z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'arrowRight':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--arrow-right\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath transform=\"rotate(-180 8.964 11)\" d=\"M1 10h16v2H1z\"\u002F\u003E\u003Cpath transform=\"rotate(134.999 14.965 13.124)\" d=\"M11 12.1h8v2h-8z\"\u002F\u003E\u003Cpath transform=\"rotate(-134.999 14.965 8.877)\" d=\"M11 7.9h8v2h-8z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'arrowUp':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--arrow-up\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath fill=\"#020202\" d=\"M30 0L5 30h15v30h20V30h15L30 0z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'arrowDown':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--arrow-down\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath fill=\"#020202\" d=\"M30 60l25-30H40V0H20v30H5l25 30z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'chevronDown':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--chevron-down\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 19.8 19.8\"\u003E\u003Cpath transform=\"rotate(-134.999 7.586 10.187)\" d=\"M2.8 9h9.5v2.4H2.8z\"\u002F\u003E\u003Cpath transform=\"rotate(-45.001 12.615 10.187)\" d=\"M7.9 9h9.5v2.4H7.9z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'chevronLeft':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--chevron-left\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 19.8 19.8\"\u003E\u003Cpath transform=\"rotate(-45.001 10.1 7.672)\" d=\"M5.4 6.5h9.5v2.4H5.4z\"\u002F\u003E\u003Cpath transform=\"rotate(45.001 10.1 12.701)\" d=\"M5.4 11.5h9.5v2.4H5.4z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'chevronRight':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--chevron-right\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 19.8 19.8\"\u003E\u003Cpath transform=\"rotate(134.999 10.1 12.701)\" d=\"M5.4 11.5h9.5v2.4H5.4z\"\u002F\u003E\u003Cpath transform=\"rotate(-134.999 10.1 7.672)\" d=\"M5.4 6.5h9.5v2.4H5.4z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'chevronUp':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--chevron-up\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 19.8 19.8\"\u003E\u003Cpath transform=\"rotate(45.001 12.615 10.187)\" d=\"M7.9 9h9.5v2.4H7.9z\"\u002F\u003E\u003Cpath transform=\"rotate(134.999 7.586 10.187)\" d=\"M2.8 9h9.5v2.4H2.8z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'clock':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--clock\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M11.9 13.1l-2.7-2.7V6.7h1.7v3l2.3 2.3-1.3 1.1zM10 3.3a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4zM10 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'close':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--close\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath transform=\"rotate(45.001 10 10)\" d=\"M2 9h16v2H2z\"\u002F\u003E\u003Cpath transform=\"rotate(134.999 10 10)\" d=\"M2 9h16v2H2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'email':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--email\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath class=\"fs-icon fs-icon--_xF106_\" d=\"M17 15.2H3.2l5.2-4.3.6.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4l.6-.5 5.2 4.4zm.6-9.2v8l-4.8-4 4.8-4zm-15 8V6l4.8 4-4.8 4zm7.8-3.6c-.2.2-.4.2-.6 0L3.6 5.2h13l-6.2 5.2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'facebook':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--facebook\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath d=\"M32.9 49H25V30h-3.9v-6.6H25v-3.9c0-5.4 2.2-8.5 8.5-8.5h5.2v6.6h-3.3c-2.5 0-2.6.9-2.6 2.6v3.3h5.9l-.5 6.5H33v19h-.1z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'forbesF':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--forbes-f\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M16.5 7l-.8.2C15 4.9 13.8 3.7 12 3.7H9.5C9.4 5 9.4 7 9.4 9.9h1.7c.9 0 1.6-.7 1.9-2.1h.6V13H13c-.3-1.4-.9-2.1-1.9-2.2H9.4c0 1.6.1 3.1.2 4.4.1.7.2 1.2.4 1.5.2.3.6.5 1.1.6l.8.1v.6H3.6v-.6l.7-.1c.9-.1 1.4-.8 1.5-2.1.3-3.3.3-6.5 0-9.6-.1-1.3-.6-2-1.5-2.1l-.7-.2v-.6h12.8l.1 4.3z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'forbesLogo':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--forbes-logo\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 200 54\"\u003E\u003Cpath d=\"M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'georgia-uaquo':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--georgia-uaquo\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath fill=\"#010101\" d=\"M9.9 9.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.6-5.3L2.3 19l-.8-1 6.8-7.2.6-.6c.3-.2.6-.4 1-.4zm0-7.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.5-5.3-7.5 5.3-.8-1 6.8-7.2c.1-.2.4-.3.7-.6.1-.2.5-.3.8-.3z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'hamburger':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--hamburger\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M2 5.5h16v2H2zM2 9.5h16v2H2zM2 13.5h16v2H2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'info':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--info\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath fill=\"#010101\" d=\"M28.3 38.4h3.3v-10h-3.3v10zM30 13.3c-9.2 0-16.7 7.5-16.7 16.7S20.8 46.7 30 46.7 46.7 39.2 46.7 30 39.2 13.3 30 13.3zm0 30.1c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4 13.4 6 13.4 13.4-6 13.4-13.4 13.4zM28.3 25h3.3v-3.3h-3.3V25z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'instagram':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--instagram\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath fill=\"none\" stroke=\"#000\" stroke-width=\"3\" stroke-miterlimit=\"10\" d=\"M38.6 46.3H21.4c-4.3 0-7.7-3.5-7.7-7.7V21.4c0-4.3 3.5-7.7 7.7-7.7h17.1c4.3 0 7.7 3.5 7.7 7.7v17.1c.1 4.3-3.4 7.8-7.6 7.8z\"\u002F\u003E\u003Ccircle fill=\"none\" stroke=\"#000\" stroke-width=\"3\" stroke-miterlimit=\"10\" cx=\"30\" cy=\"30\" r=\"7.4\"\u002F\u003E\u003Ccircle cx=\"38.7\" cy=\"19.3\" r=\"1.8\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'linkedin':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--linkedin\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath d=\"M44.9 33.2v11h-6.4V34c0-2.6-.9-4.3-3.2-4.3-1.8 0-2.8 1.2-3.3 2.3-.2.4-.2 1-.2 1.6v10.7h-6.4s.1-17.4 0-19.2h6.4V27.9v-.1c.8-1.3 2.4-3.2 5.8-3.2 4.1 0 7.3 2.7 7.3 8.6zM18.7 15.8c-2.2 0-3.6 1.4-3.6 3.3 0 1.8 1.4 3.3 3.5 3.3 2.2 0 3.6-1.5 3.6-3.3 0-1.9-1.3-3.3-3.5-3.3zm-3.2 28.4h6.4V25h-6.4v19.2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'phone':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--phone\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath class=\"fs-icon fs-icon--_xF14E_\" d=\"M2.6 7.6c-.2-.8-.1-1.5.3-2.3S3.7 4 4.4 3.7c.2-.1.4-.1.6.1l3 3c.3.3.2.5 0 .8-.5.6-.8 1-.8 1.3s.2.7.8 1.3c.4.5 1.2 1.2 2.2 2 .6.5 1 .4 1.4-.1.3-.5.5-.7.7-.7s.5.1.9.5l.9.6c.3.2.7.5 1 .7.4.3.7.5.9.6.4.3.4.6.2.9-1.8 2.5-3.9 2.9-6.4 1.2-2.9-2.1-5.1-4.5-6.6-7.1 0-.1-.1-.3-.4-.8l-.2-.2v-.2zm7.2-3.4c1.5.1 2.7.7 3.7 1.7s1.6 2.3 1.7 3.8c0 .3-.1.5-.4.5-.3 0-.5-.1-.5-.4-.1-1.2-.6-2.3-1.5-3.1-.9-.9-1.9-1.4-3.1-1.5-.1 0-.2 0-.3-.1-.1-.2-.2-.3-.2-.4 0-.3.2-.5.6-.5zm-.3-1.8c0-.3.2-.4.5-.4 2.1.1 3.9.8 5.3 2.2s2.2 3.2 2.2 5.3c0 .3-.1.5-.4.5-.1 0-.2 0-.3-.1-.1-.1-.2-.2-.2-.3-.1-1.9-.7-3.5-2-4.7s-2.8-1.9-4.7-2c-.1 0-.2 0-.3-.1-.1-.2-.1-.3-.1-.4z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'play':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--play\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M7 2v16.9l11.1-8.5z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'preview-eye':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--preview-eye\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M10 4.1C5.9 4.1 2.3 6.5.5 10c1.8 3.6 5.4 6 9.5 6s7.7-2.4 9.5-5.9c-1.8-3.6-5.4-6-9.5-6zm4.7 3.2c1.1.7 2.1 1.7 2.8 2.8-.7 1.1-1.7 2.1-2.8 2.8-1.4.9-3 1.4-4.7 1.4-1.7 0-3.3-.5-4.7-1.4-1.1-.7-2.1-1.7-2.8-2.8.8-1.2 1.7-2.1 2.8-2.8.1 0 .1-.1.2-.1-.1.4-.3 1-.3 1.6 0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8c0-.6-.1-1.1-.3-1.6 0 0 .1 0 .2.1zm-5.1 1c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'reddit':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--reddit\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Ccircle cx=\"30\" cy=\"30\" r=\"30\"\u002F\u003E\u003Cpath fill=\"#FFF\" d=\"M50 30c0-2.4-2-4.4-4.4-4.4-1.2 0-2.2.5-3 1.2-3-2.2-7.1-3.6-11.7-3.7l2-9.4 6.5 1.4c.1 1.7 1.4 3 3.1 3 1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1c-1.2 0-2.3.7-2.8 1.7l-7.3-1.5c-.2 0-.4 0-.6.1-.2.1-.3.3-.3.5l-2.2 10.5c-4.7.1-8.8 1.5-11.9 3.7-.8-.8-1.9-1.2-3-1.2-2.4 0-4.4 2-4.4 4.4 0 1.8 1.1 3.3 2.6 4-.1.4-.1.9-.1 1.3 0 6.7 7.8 12.2 17.5 12.2s17.5-5.5 17.5-12.2c0-.4 0-.9-.1-1.3 1.5-.8 2.6-2.3 2.6-4.1zm-30 3.1c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7.1-3.1-1.3-3.1-3.1zm17.4 8.3c-2.1 2.1-6.2 2.3-7.4 2.3-1.2 0-5.3-.2-7.4-2.3-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0 1.3 1.3 4.2 1.8 6.3 1.8s4.9-.5 6.3-1.8c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1zm-.5-5.1c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'rss':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--rss\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M4.2 13.6c-.6 0-1.1.2-1.5.6-.5.5-.7 1-.7 1.6 0 .6.2 1.1.6 1.5.5.5 1 .7 1.6.7.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5s-.2-1.1-.6-1.5c-.4-.6-.9-.8-1.5-.8zm0 0M9.2 10.8c-.9-.9-1.8-1.6-2.9-2.1-1.1-.5-2.3-.8-3.5-.9h-.1c-.2 0-.3.1-.5.2-.1.1-.2.3-.2.5V10c0 .2.1.4.2.5.1.1.3.2.5.2 1.7.2 3.2.9 4.4 2.1C8.3 14 9 15.5 9.2 17.2c0 .2.1.3.2.5.2.2.3.3.5.3h1.5c.2 0 .4-.1.5-.2.1-.2.2-.3.2-.5-.1-1.2-.4-2.4-.9-3.5-.4-1.2-1.1-2.1-2-3zm0 0\"\u002F\u003E\u003Cpath d=\"M16.6 11.5c-.8-1.8-1.9-3.4-3.3-4.8s-3-2.5-4.8-3.3C6.6 2.6 4.7 2.1 2.8 2c-.3 0-.4.1-.6.2-.1.1-.2.3-.2.5v1.6c0 .2.1.4.2.5.1.2.3.3.5.3 1.6.1 3.2.5 4.6 1.2 1.5.7 2.7 1.6 3.8 2.6 1.1 1.1 2 2.4 2.6 3.8.7 1.5 1.1 3 1.1 4.6 0 .2.1.3.2.5.1.1.3.2.5.2h1.6c.2 0 .4-.1.5-.2.2-.2.2-.3.2-.5.1-2-.4-3.9-1.2-5.8zm0 0\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'star':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--star\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\"\u003E\u003Cpath d=\"M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z\"\u003E\u003C\u002Fpath\u003E\u003Cpath fill=\"none\" d=\"M0 0h18v18H0z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'search':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--search\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Ccircle fill=\"none\" stroke=\"#000\" stroke-width=\"2\" cx=\"8.5\" cy=\"9\" r=\"6\"\u002F\u003E\u003Cpath transform=\"rotate(45.001 14.922 15.421)\" d=\"M12 14.4h5.9v2H12z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'snapchat':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--snapchat\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath d=\"M47.7 38.3c-.2-.2-.4-.4-.7-.4-2.3-.4-3.9-1.7-5-3s-1.7-2.5-1.7-2.6v-.1c-.1-.2-.3-.5-.3-.7v-.4c.2-.6.3-.8 1.3-1.1 0 0 .1 0 .3-.1.1 0 .2-.1.3-.1.7-.3 1.4-.6 1.9-1.1.2-.2.5-.6.5-1-.1-.4-.2-.8-.6-1.1-.6-.4-1.6-.2-2.2 0-.4.1-1.2.5-1.5.1v-.5c.1-1.9.3-3.8 0-5.6-.1-.6-.2-1.1-.5-1.6-.9-2.1-2.3-3.6-3.9-4.5-1.4-.8-3-1.2-4.6-1.3-1.6-.1-3.3.1-4.9.6-.5.2-1 .4-1.4.7-1.7.9-3 2.4-3.9 4.5-.2.5-.4 1.1-.5 1.6-.3 1.9-.1 3.8 0 5.6v.5c-.3.3-1.2 0-1.5-.1-.7-.2-1.6-.4-2.2 0-.4.3-.5.6-.6 1.1-.1.3.2.7.5 1 .5.5 1.2.8 1.9 1.1.1 0 .2.1.3.1.2.1.2.1.3.1 1 .3 1.1.6 1.3 1.1 0 .1.1.2 0 .4 0 .2-.2.4-.3.7 0 .1-.6 1.3-1.7 2.6s-2.8 2.7-5 3c-.3 0-.5.2-.7.4-.2.2-.3.5-.2.8v.2c0 .1 0 .1.1.2.2.5.8.9 1.6 1.3.8.3 1.8.6 3.1.8 0 .1.1.4.1.6 0 .1.1.3.1.4 0 .1.1.3.1.4.1.2.2.5.4.7.2.1.4.2.8.2h.4c.1 0 .3 0 .4-.1.2 0 .5-.1.8-.1.3 0 .6-.1 1-.1h.6c.2 0 .4 0 .6.1.8.1 1.5.6 2.4 1.2 1.9 1.3 3.5 2 5.2 2 1.7 0 3.4-.7 5.2-2 .8-.6 1.6-1.1 2.4-1.2.2 0 .4-.1.6-.1h.6c.4 0 .7 0 1 .1.3 0 .6.1.8.1.2 0 .3.1.4.1h.4c.3 0 .6-.1.8-.2.3-.2.4-.4.4-.7 0-.2.1-.3.1-.4 0-.1.1-.3.1-.4 0-.2.1-.4.1-.6 1.3-.2 2.3-.5 3.1-.8.9-.4 1.4-.8 1.6-1.3 0-.1.1-.2.1-.2V39c.2-.2.1-.5-.1-.7z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'twitter':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--twitter\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath d=\"M22.2 38.9c-3.4-.3-6.1-1.7-7.5-5.1h3.6c-3.9-1.4-5.6-4.3-5.9-8.4 1.2.6 2.3.7 3.5.7-2.1-1.6-3.6-3.4-3.7-6.1-.1-1.5.5-2.8 1.3-4 4.4 5 9.7 8.3 16.5 8.9v-2.7c.1-1.9.6-3.6 1.9-5.1 2.5-2.8 6.9-3.1 9.8-.7.2.2.5.4.7.6.2.2.4.2.7.2 1.1-.3 2-.9 3-1.4.5-.3 1.1-.6 1.7-1-.4 1.1-.9 2-1.5 2.8-.6.8-1.3 1.6-2.2 2.2 1.6-.2 3.2-.6 4.8-1.1-.3.4-.6.8-.9 1.1l-2.7 2.4c-.1.1-.2.3-.2.4.1 3.3-.6 6.5-1.9 9.6-1.9 4.2-4.7 7.5-8.6 9.9-2.5 1.5-5.2 2.4-8.1 2.9-5.5.8-10.5-.5-15.1-3.3-.1 0-.1-.1-.2-.1h.2c1.1.5 2.2.4 3.3.3 2.3-.2 4.5-.9 6.6-2.1l.9-.6v-.3z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'website':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--website\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath class=\"fs-icon fs-icon--_xF10E_\" d=\"M14.7 7.4l2.8 2.6v.4h-1.9V17h-3.7v-4.2H8.1V17H4.4v-6.6H2.5V10L10 3l2.8 2.6v-.9h1.9z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'youtube':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--youtube\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M8.2 12.5V7.7l4.6 2.4-4.6 2.4zm9.5-7.3c-.7-.7-1.4-.7-1.7-.7-2.4-.2-6-.2-6-.2s-3.6 0-6 .2c-.3 0-1.1 0-1.7.7-.5.5-.6 1.7-.6 1.7s-.2 1.4-.2 2.8V11c0 1.4.2 2.8.2 2.8s.2 1.2.7 1.7c.6.6 1.4.5 1.8.6 1.4.1 5.8.2 5.8.2s3.6 0 6-.2c.3 0 1.1 0 1.7-.7.5-.5.7-1.7.7-1.7s.2-1.4.2-2.8V9.7c0-1.4-.2-2.8-.2-2.8s-.2-1.2-.7-1.7z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
                case 'sharrow':
                    pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--share\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath fill=\"#010101\" d=\"M34 19.6V4.9L59.2 28 34 51.2V36.5C17.3 32.9 1.8 38.5.8 55.4-1 40.8 3.9 31.1 11.3 25.5c6.3-4.8 15.2-6.6 22.7-5.9z\"\u002F\u003E\u003C\u002Fsvg\u003E";
                    break;
            }
        };
        pug_mixins["paidContentLabel"] = pug_interp = function(pick) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Cspan class=\"data-viz__paid-content-name\"\u003E" + (pug_escape(null == (pug_interp = pick.paidContentData.brandName) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"data-viz__paid-content-logo\"" + pug_attr("style", pug_style({
                'color': pick.paidContentData.primaryColor
            }), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = ` ${pick.paidContentData.label}`) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
        };
        pug_mixins["pickItem"] = pug_interp = function(pick) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Cdiv class=\"editors-pick\"\u003E\u003Cdiv class=\"data-viz__timestamp\"\u003E" + (pug_escape(null == (pug_interp = pick.timestamp) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
            if ((pick.paidContentData)) {
                pug_html = pug_html + "\u003Cdiv class=\"data-viz__paid-content-container\"\u003E";
                pug_mixins["paidContentLabel"](pick);
                pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            }
            pug_html = pug_html + "\u003Ca" + (" class=\"data-viz__title\"" + pug_attr("href", pick.uri, true, false) + pug_attr("title", pick.title, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = pick.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
            pug_mixins["byline"](pick, 'test', 'test');
            pug_html = pug_html + "\u003C\u002Fdiv\u003E";
        };
        if ((picksData)) {
            pug_html = pug_html + "\u003Cdiv class=\"editors-picks\"\u003E";
            // iterate picksData
            ;
            (function() {
                var $$obj = picksData;
                if ('number' == typeof $$obj.length) {
                    for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
                        var pick = $$obj[pug_index1];
                        pug_mixins["pickItem"](pick);
                    }
                } else {
                    var $$l = 0;
                    for (var pug_index1 in $$obj) {
                        $$l++;
                        var pick = $$obj[pug_index1];
                        pug_mixins["pickItem"](pick);
                    }
                }
            }).call(this);

            pug_html = pug_html + "\u003Ca class=\"editors-picks__see-all\" href=\"https:\u002F\u002Fwww.forbes.com\u002Feditors-picks\u002F\"\u003E\u003Cspan\u003ESee All\u003C\u002Fspan\u003E";
            pug_mixins["icon"]('arrowRight');
            pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
        }
    }.call(this, "picksData" in locals_for_with ? locals_for_with.picksData : typeof picksData !== "undefined" ? picksData : undefined));;
    return pug_html;
}


// WEBPACK FOOTER //
// ./dist/templates/_editorsPicks.js