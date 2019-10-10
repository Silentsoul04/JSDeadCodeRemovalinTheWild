function pug_attr(t, e, n, f) {
    return !1 !== e && null != e && (e || "class" !== t && "style" !== t) ? !0 === e ? " " + (f ? t : t + '="' + t + '"') : ("function" == typeof e.toJSON && (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'") : ""
}

function pug_classes(s, r) {
    return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == typeof s ? pug_classes_object(s) : s || ""
}

function pug_classes_array(r, a) {
    for (var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++)(s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), e = e + u + s, u = " ");
    return e
}

function pug_classes_object(r) {
    var a = "",
        n = "";
    for (var o in r) o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, n = " ");
    return a
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
    (function(row, rowLetterId, rowTitle, showDescription, svgIcons) {
        pug_mixins["iconPreview"] = pug_interp = function(item) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            if (item.type === 'video') {
                pug_html = pug_html + "\u003Cdiv class=\"card__icon card__icon--preview\"\u003E" + (null == (pug_interp = svgIcons.play) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E";
            }
        };






        pug_mixins["previewLarge"] = pug_interp = function(item, rowTitle, rowLetterId) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Ca" + (" class=\"preview ratio16x9\"" + pug_attr("href", item.url, true, false) + pug_attr("aria-label", item.title, true, false) + pug_attr("data-ga-track", (rowTitle === 'editors picks') ? `Cover Story - ${item.type} - Position 0 - ${item.title}` : `Channel - Block ${rowLetterId} - ${rowTitle} - ${item.type} - Position ${item.trackingIndex} - ${item.title}`, true, false)) + "\u003E\u003Cdiv class=\"preview__overflow-wrapper\"\u003E";
            if ((rowTitle === 'editors picks')) {
                pug_html = pug_html + "\u003Cdiv" + (" class=\"preview__image preview__image--non-progressive\"" + pug_attr("style", pug_style(`background-image: url(${item.image})`), true, false)) + "\u003E\u003C\u002Fdiv\u003E";
            } else {
                pug_html = pug_html + "\u003Cprogressive-image" + (" class=\"preview__image\"" + pug_attr("background-image", item.image, true, false)) + "\u003E\u003C\u002Fprogressive-image\u003E";
            }
            pug_mixins["iconPreview"](item, rowTitle, rowLetterId);
            pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            if ((item.eyebrows)) {
                pug_html = pug_html + "\u003Ch3" + (pug_attr("class", pug_classes(["preview__eyebrows", (rowTitle !== 'editors picks') ? 'preview__eyebrows--mobile-left' : ''], [false, true]), false, false)) + "\u003E\u003Cspan" + (pug_attr("class", pug_classes([item.color ? `preview__eyebrows--color-${item.color}` : ''], [true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = item.eyebrows) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E";
            }
            pug_mixins["photoCreditLarge"](item);
            pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["card--large__color-bar", item.color ? `card__color--${item.color}` : ''], [false, true]), false, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
        };
        pug_mixins["previewSmall"] = pug_interp = function(item, rowTitle, rowLetterId, isList) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Ca" + (" class=\"preview ratio16x9\"" + pug_attr("href", item.url, true, false) + pug_attr("aria-label", item.title, true, false) + pug_attr("data-ga-track", isList ? `Homepage Forbes List - ${item.title}` : `Channel - Block ${rowLetterId} - ${rowTitle} - ${item.type} - Position ${item.trackingIndex} - ${item.title}`, true, false)) + "\u003E\u003Cprogressive-image" + (" class=\"preview__image\"" + pug_attr("background-image", item.image, true, false)) + "\u003E\u003C\u002Fprogressive-image\u003E";
            pug_mixins["iconPreview"](item, rowTitle, rowLetterId);
            pug_html = pug_html + "\u003C\u002Fa\u003E";
        };
        pug_mixins["photoCreditLarge"] = pug_interp = function(item) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            if ((item.photoCredit)) {
                pug_html = pug_html + "\u003Cdiv class=\"card__photocredit--large\"\u003E" + (pug_escape(null == (pug_interp = item.photoCredit) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
            }
        };
        pug_mixins["photoCreditSmall"] = pug_interp = function(item) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            if ((item.photoCredit)) {
                pug_html = pug_html + "\u003Cdiv class=\"card__photocredit--small\"\u003E" + (pug_escape(null == (pug_interp = item.photoCredit) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
            }
        };
        pug_mixins["previewText"] = pug_interp = function(item) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Cdiv class=\"preview\"\u003E\u003Ca" + (" class=\"preview__link ratio1x2\"" + pug_attr("href", item.url, true, false) + pug_attr("aria-label", item.title, true, false) + pug_attr("data-ga-track", `Channel - Block ${rowLetterId} - ${rowTitle} - ${item.type} - Position ${item.trackingIndex} - ${item.title}`, true, false)) + "\u003E\u003Cprogressive-image" + (" class=\"preview__image\"" + pug_attr("background-image", item.image, true, false)) + "\u003E\u003C\u002Fprogressive-image\u003E";
            pug_mixins["iconPreview"](item, rowTitle, rowLetterId);
            pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
        };
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
        pug_mixins["bylineStatsLarge"] = pug_interp = function(item, rowTitle, rowLetterId) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Cp class=\"byline-stats byline-stats--large\"\u003E";
            pug_mixins["byline"](item, rowTitle, rowLetterId);
            pug_html = pug_html + "\u003C\u002Fp\u003E";
        };
        pug_mixins["bylineStatsSmall"] = pug_interp = function(item, rowTitle, rowLetterId) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Cp class=\"byline-stats byline-stats--small\"\u003E";
            pug_mixins["byline"](item, rowTitle, rowLetterId);
            pug_html = pug_html + "\u003C\u002Fp\u003E";
        };
        pug_mixins["iconPreview"] = pug_interp = function(item) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            if (item.type === 'video') {
                pug_html = pug_html + "\u003Cdiv class=\"card__icon card__icon--preview\"\u003E" + (null == (pug_interp = svgIcons.play) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E";
            }
        };






        pug_mixins["brandvoice"] = pug_interp = function(item) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Cspan class=\"brand\"\u003E" + (pug_escape(null == (pug_interp = item.brandVoiceBrand) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"brand-voice\"\u003E" + (pug_escape(null == (pug_interp = ' BRANDVOICE') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
        };
        pug_mixins["paidContentLabel"] = pug_interp = function(item) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Cspan class=\"paid-content__brand-name\"\u003E" + (pug_escape(null == (pug_interp = item.paidContentData.brandName) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"paid-content__type\"" + pug_attr("style", pug_style({
                'color': item.paidContentData.primaryColor
            }), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = ` ${item.paidContentData.label}`) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
        };
        pug_mixins["card"] = pug_interp = function(item, type, showDescription, rowTitle, rowLetterId, csfBlock, index) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["card", item.cardClass, {
                'csf-block': csfBlock
            }, {
                'channel__content__lazy-item': type === 'small'
            }, {
                'channel__content__lazy-item-delay-400': type === 'small' && index !== 0
            }], [false, true, true, true, true]), false, false) + pug_attr("data-video-id", item.videoId, true, false) + pug_attr("data-video-title", item.videoTitle, true, false)) + "\u003E";
            switch (type) {
                case 'large':
                    pug_mixins["cardLarge"](item, showDescription, rowTitle, rowLetterId);
                    break;
                case 'small':
                    pug_mixins["cardSmall"](item, rowTitle, rowLetterId);
                    break;
                case 'text':
                    pug_mixins["cardText"](item, rowTitle, rowLetterId);
                    break;
                case 'smallForbesLists':
                    pug_mixins["cardSmallForbesLists"](item);
                    break;
            }
            pug_html = pug_html + "\u003C\u002Fdiv\u003E";
        };
        pug_mixins["cardLarge"] = pug_interp = function(item, showDescription = false, rowTitle, rowLetterId) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_mixins["previewLarge"](item, rowTitle, rowLetterId);
            if ((item.brandVoiceBrand)) {
                pug_html = pug_html + "\u003Cdiv class=\"card--large__brand-voice-container brand-voice-label\"\u003E";
                pug_mixins["brandvoice"](item);
                pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            }
            if ((item.paidContentData)) {
                pug_html = pug_html + "\u003Cdiv class=\"card--large__paid-content-container card--paid-content-label\"\u003E";
                pug_mixins["paidContentLabel"](item);
                pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            } else
            if ((item.isInsights)) {
                pug_html = pug_html + "\u003Cdiv class=\"card--large__insights card__insights\"\u003E" + (pug_escape(null == (pug_interp = 'FORBES INSIGHTS') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
            }
            pug_html = pug_html + "\u003Cdiv class=\"card--large__title\"\u003E\u003Ca" + (pug_attr("class", pug_classes(["headlink", "h1--dense", item.color ? `card__color--${item.color}` : ''], [false, false, true]), false, false) + pug_attr("href", item.url, true, false) + pug_attr("data-ga-track", (rowTitle === 'editors picks') ? `Cover Story - ${item.type} - Position 0 - ${item.title}` : `Channel - Block ${rowLetterId} - ${rowTitle} - ${item.type} - Position ${item.trackingIndex} - ${item.title}`, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
            if ((item.video)) {
                pug_html = pug_html + "\u003Cspan class=\"byline__duration\"\u003E| " + (pug_escape(null == (pug_interp = item.video.duration || '') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
            }
            pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            if ((item.author)) {
                if ((((item.paidContentData || {}).showByline) || !item.paidContentData)) {
                    pug_mixins["bylineStatsLarge"](item, rowTitle, rowLetterId);
                }
            }
            if ((showDescription)) {
                pug_html = pug_html + "\u003Ch2 class=\"card__description\"\u003E" + (pug_escape(null == (pug_interp = item.description) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
            }
            pug_mixins["photoCreditLarge"](item);
        };
        pug_mixins["cardSmall"] = pug_interp = function(item, rowTitle, rowLetterId) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            if ((!item.isMobile)) {
                pug_mixins["previewSmall"](item, rowTitle, rowLetterId, false);
            }
            pug_mixins["photoCreditSmall"](item);
            if ((item.brandVoiceBrand)) {
                pug_html = pug_html + "\u003Cdiv class=\"card--small__brand-voice-container brand-voice-label\"\u003E";
                pug_mixins["brandvoice"](item);
                pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            }
            if ((item.paidContentData)) {
                pug_html = pug_html + "\u003Cdiv class=\"card--small__paid-content-container card--paid-content-label\"\u003E";
                pug_mixins["paidContentLabel"](item);
                pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            } else
            if ((item.isInsights)) {
                pug_html = pug_html + "\u003Cdiv class=\"card--small__insights card__insights\"\u003E" + (pug_escape(null == (pug_interp = 'FORBES INSIGHTS') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
            }
            pug_html = pug_html + "\u003Ca" + (" class=\"headlink\"" + pug_attr("href", item.url, true, false) + pug_attr("data-ga-track", `Channel - Block ${rowLetterId} - ${rowTitle} - ${item.type} - Position ${item.trackingIndex} - ${item.title}`, true, false)) + "\u003E\u003Ch3 class=\"h3--dense\"\u003E";
            if ((item.video)) {
                pug_html = pug_html + "\u003Cspan class=\"card__watch-video\"\u003E" + (pug_escape(null == (pug_interp = 'Watch: ') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
            }
            pug_html = pug_html + ("\u003Cspan\u003E" + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)));
            if ((item.video)) {
                pug_html = pug_html + "\u003Cspan class=\"byline__duration\"\u003E| " + (pug_escape(null == (pug_interp = item.video.duration || '') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
            }
            pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E\u003C\u002Fa\u003E";
            if ((item.author)) {
                if ((((item.paidContentData || {}).showByline) || !item.paidContentData)) {
                    pug_mixins["bylineStatsSmall"](item, rowTitle, rowLetterId);
                }
            }
        };
        pug_mixins["cardText"] = pug_interp = function(item, rowTitle, rowLetterId) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            if ((item.image && !item.isMobile)) {
                pug_mixins["previewText"](item);
            }
            pug_html = pug_html + "\u003Cdiv class=\"card__text\"\u003E";
            if ((item.brandVoiceBrand)) {
                pug_html = pug_html + "\u003Cdiv class=\"card--text__brand-voice-container brand-voice-label\"\u003E";
                pug_mixins["brandvoice"](item);
                pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            }
            if ((item.paidContentData)) {
                pug_html = pug_html + "\u003Cdiv class=\"card--text__paid-content-container card--paid-content-label\"\u003E";
                pug_mixins["paidContentLabel"](item);
                pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            } else
            if ((item.isInsights)) {
                pug_html = pug_html + "\u003Cdiv class=\"card--text__insights card__insights\"\u003E" + (pug_escape(null == (pug_interp = 'FORBES INSIGHTS') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
            }
            pug_html = pug_html + "\u003Ca" + (" class=\"headlink h4--dense\"" + pug_attr("href", item.url, true, false) + pug_attr("data-ga-track", `Channel - Block ${rowLetterId} - ${rowTitle} - ${item.type} - Position ${item.trackingIndex} - ${item.title}`, true, false)) + "\u003E";
            if ((item.video)) {
                pug_html = pug_html + "\u003Cspan class=\"card__watch-video\"\u003E" + (pug_escape(null == (pug_interp = 'Watch: ') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
            }
            pug_html = pug_html + "\u003Cspan\u003E" + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
            if ((item.video)) {
                pug_html = pug_html + "\u003Cspan class=\"byline__duration\"\u003E| " + (pug_escape(null == (pug_interp = item.video.duration || '') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
            }
            pug_mixins["byline"](item, rowTitle, rowLetterId);
            pug_html = pug_html + "\u003C\u002Fdiv\u003E";
        };
        pug_mixins["cardSmallForbesLists"] = pug_interp = function(item) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_mixins["previewSmall"](item, null, null, true);
            pug_html = pug_html + "\u003Ch2 class=\"card__fl-logo\"\u003EFORBES&nbsp;\u003Cspan\u003E" + (pug_escape(null == (pug_interp = item.eyebrows) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh2\u003E\u003Ca" + (" class=\"headlink\"" + pug_attr("href", item.url, true, false) + pug_attr("data-ga-track", `Homepage Forbes List - ${item.title}`, true, false)) + "\u003E\u003Ch3 class=\"h3--dense\"\u003E" + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fa\u003E\u003Cp class=\"body--dense list--description\"\u003E" + (pug_escape(null == (pug_interp = item.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Ca" + (" class=\"card__fl-link\"" + pug_attr("href", item.url, true, false) + pug_attr("data-ga-track", `Homepage Forbes List - View List - ${item.title}`, true, false)) + "\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = item.linkLabel) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E" + (null == (pug_interp = svgIcons.arrowRight) ? "" : pug_interp) + "\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
        };
        pug_mixins["ntvLoadingPlaceholder"] = pug_interp = function(isChannel) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Cdiv class=\"ntv-loading\"\u003E\u003Cdiv" + (pug_attr("class", pug_classes(["ntv-loading__image", isChannel ? 'ratio1x2' : 'ratio16x9'], [false, true]), false, false)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"ntv-loading__text\"\u003E\u003Cdiv class=\"ntv-loading__small-text\"\u003E\u003C\u002Fdiv\u003E";
            var i = 0
            var numLines = isChannel ? 3 : 4
            pug_html = pug_html + "\u003Cul\u003E";
            while (++i <= numLines) {
                pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes([`ntv-loading__large-text ntv-loading__large-text--${i}`], [true]), false, false)) + "\u003E\u003C\u002Fli\u003E";
            }
            pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
        };
        pug_mixins["channelSidebar"] = pug_interp = function(row, index) {
            var block = (this && this.block),
                attributes = (this && this.attributes) || {};
            pug_html = pug_html + "\u003Cdiv class=\"channel__sidebar\"\u003E";
            // iterate row.blocks[0].items.smallCards
            ;
            (function() {
                var $$obj = row.blocks[0].items.smallCards;
                if ('number' == typeof $$obj.length) {
                    for (var position = 0, $$l = $$obj.length; position < $$l; position++) {
                        var smallCard = $$obj[position];
                        pug_mixins["card"](smallCard, 'small', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter, null, position);
                    }
                } else {
                    var $$l = 0;
                    for (var position in $$obj) {
                        $$l++;
                        var smallCard = $$obj[position];
                        pug_mixins["card"](smallCard, 'small', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter, null, position);
                    }
                }
            }).call(this);

            pug_html = pug_html + "\u003C\u002Fdiv\u003E";
        };
        if ((row.blocks || []).length > 0) {
            pug_html = pug_html + "\u003Cdiv class=\"channel__content\"\u003E\u003Cdiv class=\"channel__content__lazy-item\"\u003E";
            pug_mixins["card"](row.blocks[0].items.largeCard, 'large', false, row.title, row.rowIdLetter);
            pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            pug_mixins["channelSidebar"](row);
            pug_html = pug_html + "\u003Cdiv class=\"channel__divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"channel__columns channel__content__lazy-item channel__content__lazy-item-delay-600\"\u003E\u003Cdiv class=\"channel__column\"\u003E\u003Cdiv" + (" class=\"fbs-ad--ntv-mobchannel-wrapper fbs-ad--progressive\"" + pug_attr("data-custom-targeting", `ntv-channel:${row.title.replace(/(-? ?RD|(New))/g, '').toLowerCase().trim()}`, true, false)) + "\u003E";
            pug_mixins["ntvLoadingPlaceholder"](true);
            pug_html = pug_html + "\u003C\u002Fdiv\u003E";
            // iterate row.blocks[0].items.leftColumn.listCards
            ;
            (function() {
                var $$obj = row.blocks[0].items.leftColumn.listCards;
                if ('number' == typeof $$obj.length) {
                    for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
                        var listCard = $$obj[pug_index2];
                        pug_mixins["card"](listCard, 'text', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter);
                    }
                } else {
                    var $$l = 0;
                    for (var pug_index2 in $$obj) {
                        $$l++;
                        var listCard = $$obj[pug_index2];
                        pug_mixins["card"](listCard, 'text', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter);
                    }
                }
            }).call(this);

            pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"channel__column\"\u003E";
            // iterate row.blocks[0].items.rightColumn.listCards
            ;
            (function() {
                var $$obj = row.blocks[0].items.rightColumn.listCards;
                if ('number' == typeof $$obj.length) {
                    for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
                        var listCard = $$obj[pug_index3];
                        pug_mixins["card"](listCard, 'text', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter);
                    }
                } else {
                    var $$l = 0;
                    for (var pug_index3 in $$obj) {
                        $$l++;
                        var listCard = $$obj[pug_index3];
                        pug_mixins["card"](listCard, 'text', showDescription = false, rowTitle = row.title, rowLetterId = row.rowIdLetter);
                    }
                }
            }).call(this);

            pug_html = pug_html + "\u003Cdiv" + (" class=\"fbs-ad--ntv-deskchannel-wrapper fbs-ad--progressive\"" + " tabindex=\"-1\" aria-hidden=\"true\"" + pug_attr("data-custom-targeting", `ntv-channel:${row.title.replace(/(-? ?RD|(New))/g, '').toLowerCase().trim()}`, true, false)) + "\u003E";
            pug_mixins["ntvLoadingPlaceholder"](true);
            pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cbutton class=\"channel__show-more-btn\"\u003E\u003Cspan\u003EShow More\u003C\u002Fspan\u003E\u003Cspan\u003E" + (null == (pug_interp = svgIcons.arrowRight) ? "" : pug_interp) + "\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
        }
    }.call(this, "row" in locals_for_with ? locals_for_with.row : typeof row !== "undefined" ? row : undefined, "rowLetterId" in locals_for_with ? locals_for_with.rowLetterId : typeof rowLetterId !== "undefined" ? rowLetterId : undefined, "rowTitle" in locals_for_with ? locals_for_with.rowTitle : typeof rowTitle !== "undefined" ? rowTitle : undefined, "showDescription" in locals_for_with ? locals_for_with.showDescription : typeof showDescription !== "undefined" ? showDescription : undefined, "svgIcons" in locals_for_with ? locals_for_with.svgIcons : typeof svgIcons !== "undefined" ? svgIcons : undefined));;
    return pug_html;
}


// WEBPACK FOOTER //
// ./dist/templates/_homepageChannelContent.js