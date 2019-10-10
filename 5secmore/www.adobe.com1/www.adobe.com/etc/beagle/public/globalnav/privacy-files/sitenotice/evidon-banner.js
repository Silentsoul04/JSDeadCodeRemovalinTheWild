(function() {
    var n = "_evidon_banner",
        u = "_evh-ric-c",
        x = "_evh-learn",
        y = "_evh-ric-l",
        b = "_evidon-background",
        C = "_evidon-title",
        z = "_evidon-message",
        v = "_evidon-collapse-message",
        w = "_evidon-decline-button",
        a = "_evidon-accept-button",
        B = "_evidon-option-button",
        A = 800;
    var l = 4,
        h = 8,
        t = 10,
        e = 11,
        r = 13,
        k = 31;
    var f = "evidon-background",
        g = "evidon-banner",
        s = "evidon-banner-title",
        p = "evidon-banner-message",
        i = "evidon-banner-collapse-message",
        o = "evidon-banner-image",
        m = "evidon-banner-icon",
        j = "evidon-banner-declinebutton",
        d = "evidon-banner-acceptbutton",
        q = "evidon-banner-optionbutton";
    var c = function() {
        var F = this,
            L = document,
            G = null,
            D = false,
            E = false;

        function N() {
            if (L.documentMode === undefined) {
                return 0
            } else {
                return L.documentMode
            }
        }

        function I(P) {
            window.evidon.notice.consentGiven(true, true, true)
        }

        function K(P) {
            window.evidon.notice.dropPixel(k);
            window.evidon.notice.declineGiven()
        }

        function H(P) {
            window.evidon.notice.dropPixel(e);
            I(P)
        }

        function O(P) {
            var Q = window.evidon.notice;
            Q.dropPixel(r);
            Q.showOptions();
            if (D) {
                F.closeConsentBanner();
                window.evidon.events.subscribe("l2closed", function(R) {
                    F.showConsentBanner()
                }, 1)
            }
        }

        function J(P) {
            var Q = window.evidon.notice;
            if (Q.closeConsentEnabled) {
                Q.dropPixel(t);
                Q.consentGiven(true)
            } else {
                Q.closeGiven()
            }
        }

        function M(P, Q) {
            return P.indexOf(Q, P.length - Q.length) !== -1
        }
        this.isOnBanner = function(P) {
            if (!P) {
                return false
            } else {
                if (P.id && P.id == n) {
                    return true
                } else {
                    if (P.localName.toLowerCase() == "html") {
                        return false
                    } else {
                        if (!P.parentElement) {
                            return false
                        } else {
                            return F.isOnBanner(P.parentElement)
                        }
                    }
                }
            }
        };
        this.closeConsentBanner = function() {
            var P = L.getElementById(n),
                R = 100;
            if (!P) {
                return
            }
            P.style.cssText = P.style.cssText.replace(/opacity.*!important;/, "");
            var Q = setInterval(function() {
                R -= 10;
                P.style.opacity = (R / 100);
                P.style.filter = "alpha(opacity=" + R + ")";
                if (R <= 0) {
                    clearInterval(Q);
                    P.style.display = "none"
                }
            }, 50)
        };
        this.showConsentBanner = function() {
            var P = L.getElementById(n),
                R = 0;
            if (!P) {
                return
            }
            P.style.cssText = P.style.cssText.replace(/opacity.*!important;/, "opacity: 0 !important;");
            P.style.display = "block";
            var Q = setInterval(function() {
                R += 10;
                P.style.opacity = (R / 100);
                P.style.filter = "alpha(opacity=" + R + ")";
                if (R >= 100) {
                    clearInterval(Q)
                }
            }, 50)
        };
        this.getBannerStyle = function() {
            var P = (D) ? G.mobileBannerStyle : G.bannerStyle;
            if (!M(P, ";")) {
                P += ";"
            }
            if (P.indexOf("position:") === -1) {
                P += "position:fixed;"
            }
            if (P.indexOf("z-index") === -1) {
                P += "z-index:2147483647;"
            }
            if (N() == "9") {
                P = P.replace("position:fixed", "position:absolute")
            } else {
                P = P.replace("position:absolute", "position:fixed")
            }
            return P
        };
        this.createDeclineButton = function() {
            var P = L.createElement("button");
            P.id = w;
            P.className = j;
            P.style.cssText = (D) ? G.mobileDeclineButtonStyle : G.declineButtonStyle;
            P.onclick = K;
            P.tabIndex = 0;
            return P
        };
        this.createAcceptButton = function() {
            var P = L.createElement("BUTTON");
            P.id = a;
            P.className = d;
            P.style.cssText = (D) ? G.mobileAcceptButtonStyle : G.acceptButtonStyle;
            P.onclick = H;
            P.tabIndex = 0;
            return P
        };
        this.createOptionButton = function() {
            var P = L.createElement("BUTTON");
            P.id = B;
            P.className = q;
            P.style.cssText = (D) ? G.mobileOptionButtonStyle : G.optionButtonStyle;
            P.onclick = O;
            P.tabIndex = 0;
            return P
        };
        this.createCloseIcon = function() {
            var P = null;
            var Q = (D) ? G.mobileCloseIconStyle : G.closeIconStyle;
            if (N() == 0 || N() >= 9) {
                var U = "http://www.w3.org/2000/svg";
                P = L.createElementNS("http://www.w3.org/2000/svg", "svg");
                P.setAttribute("style", Q);
                P.setAttribute("viewBox", "0 0 14 12");
                P.setAttribute("id", u);
                P.setAttribute("version", "1.1");
                P.setAttribute("xmlns", U);
                P.setAttribute("class", m);
                P.setAttribute("tabindex", "0");
                P.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
                var R = L.createElementNS(U, "g");
                R.id = "__ghostery-close-icon-svg";
                R.setAttribute("stroke", "none");
                R.setAttribute("fill", "none");
                R.setAttribute("fill-rule", "evenodd");
                R.setAttribute("stroke-linecap", "square");
                var S = L.createElementNS(U, "g");
                S.id = "__ghostery-close-icon-box";
                S.setAttribute("transform", "translate(-1410.000000, -643.000000)");
                S.setAttribute("stroke", (D) ? G.mobileCloseIconStroke : G.closeIconStroke);
                S.setAttribute("stroke-width", (D) ? G.mobileCloseIconWidth : G.closeIconWidth);
                var T = L.createElementNS(U, "g");
                T.id = "__ghostery-close-icon-svg";
                T.setAttribute("transform", "translate(1411.000000, 643.000000)");
                var V = L.createElementNS(U, "path");
                V.id = "__ghostery-close-icon-line1";
                V.setAttribute("d", "M0.5,0.5 L11.5679722,11.5679722");
                var W = L.createElementNS(U, "path");
                W.id = "__ghostery-close-icon-line2";
                W.setAttribute("d", "M0.5,0.5 L11.5679722,11.5679722");
                W.setAttribute("transform", "translate(6.000000, 6.000000) scale(-1, 1) translate(-6.000000, -6.000000) ");
                T.appendChild(V);
                T.appendChild(W);
                S.appendChild(T);
                R.appendChild(S);
                P.appendChild(R)
            } else {
                P = L.createElement("img");
                P.id = u;
                P.style.cssText = Q;
                P.src = "//c.evidon.com/pub/ric-close.png";
                P.alt = "close";
                P.tabIndex = 0
            }
            P.onclick = J;
            return P
        };
        this.createBanner = function() {
            var Q = L.createElement("div");
            Q.id = n;
            Q.className = g;
            Q.tabIndex - 0;
            L.getElementsByTagName("body")[0].appendChild(Q);
            Q.style.cssText = F.getBannerStyle();
            var ab = (D ? G.mobileShowTitle : G.showTitle);
            var ad = null;
            if (ab) {
                ad = L.createElement("div");
                ad.id = C;
                ad.className = s;
                ad.style.cssText = (D) ? G.mobileTitleStyle : G.titleStyle;
                Q.appendChild(ad)
            }
            var Y = L.createElement("div");
            Y.id = z;
            Y.className = p;
            Y.style.cssText = (D) ? G.mobileMessageStyle : G.messageStyle;
            Q.appendChild(Y);
            if (D && G.mobileShowCollapseMessage) {
                if (ad) {
                    ad.style.display = "none"
                }
                Y.style.display = "none";
                var S = L.createElement("div");
                S.id = v;
                S.className = i;
                S.style.cssText = G.mobileCollapseMessageStyle;
                S.onclick = function() {
                    S.style.display = "none";
                    Y.style.display = "";
                    if (ad) {
                        ad.style.display = ""
                    }
                };
                Q.appendChild(S)
            }
            if (D) {
                if (G.mobileShowDeclineButton) {
                    Q.appendChild(F.createDeclineButton())
                }
                if (G.mobileShowAcceptButton) {
                    Q.appendChild(F.createAcceptButton())
                }
                if (G.mobileShowCloseIcon) {
                    Q.appendChild(this.createCloseIcon())
                }
                if (G.mobileShowOptionButton !== undefined && G.mobileShowOptionButton) {
                    Q.appendChild(this.createOptionButton())
                }
                if (G.mobileShowIcon && G.mobileBannerIcon) {
                    var W = L.createElement("img");
                    W.className = o;
                    W.style.cssText = G.mobileIconStyle;
                    W.src = G.mobileBannerIcon;
                    Q.appendChild(W)
                }
            } else {
                if (G.showDeclineButton) {
                    Q.appendChild(this.createDeclineButton())
                }
                if (G.showAcceptButton) {
                    Q.appendChild(this.createAcceptButton())
                }
                if (G.showCloseIcon) {
                    Q.appendChild(this.createCloseIcon())
                }
                if (G.showOptionButton !== undefined && G.showOptionButton) {
                    Q.appendChild(this.createOptionButton())
                }
                if (G.showIcon && G.bannerIcon) {
                    var W = L.createElement("img");
                    W.className = o;
                    W.style.cssText = G.iconStyle;
                    W.src = G.bannerIcon;
                    Q.appendChild(W)
                }
            }
            if (window.evidon.notice.iabEnabled && window.evidon.notice.getPreferencesDialogV2Enabled()) {
                Q.style.paddingBottom = "14px";
                Q.style.paddingTop = "14px";
                var X = L.createElement("div");
                X.style.cssText = "position:absolute; bottom:0; left:0; width:100%; padding:2px; text-align:center;";
                Q.appendChild(X);
                var U = L.createElement("button");
                U.id = "iabpurposebutton";
                U.style.cssText = "background-color:transparent; border:0; font-size: .9em; margin:2px 6px; cursor:pointer;";
                U.onclick = function() {
                    window.evidon.notice.showPreferencesDialog(1)
                };
                X.appendChild(U);
                var V = L.createElement("button");
                V.id = "iabvendorbutton";
                V.style.cssText = "background-color:transparent; border:0; font-size: .9em; margin:2px 6px; cursor:pointer;";
                V.onclick = function() {
                    window.evidon.notice.showPreferencesDialog(1, 1)
                };
                X.appendChild(V)
            }
            var aa = D ? G.mobileShowBackground : G.showBackground;
            if (aa) {
                var P = L.createElement("DIV");
                P.id = b;
                P.className = f;
                P.style.cssText = D ? G.mobileBackgroundStyle : G.backgroundStyle;
                L.getElementsByTagName("body")[0].appendChild(P);
                var R = Q.style.cssText;
                var Z = R.indexOf("z-index");
                if (Z === -1) {
                    Q.style.cssText += "z-index:2147483647;"
                } else {
                    var ac = R.split(";");
                    for (var T = 0; T < ac.length; T++) {
                        Z = ac[T].indexOf("z-index");
                        if (Z > -1) {
                            ac[T] = "z-index:2147483647";
                            break
                        }
                    }
                    Q.style.cssText = ac.join(";")
                }
            }
        };
        this.setTextValues = function(af) {
            if (!af) {
                return
            }
            if (!E) {
                return
            }
            var U = window.evidon.notice;
            U.dropPixel(l);
            var R = document.getElementById(w);
            var P = document.getElementById(a);
            var V = document.getElementById(B);
            var ad = (D) ? af.mobileBannerTitle : af.bannerTitle;
            var T = (D) ? af.mobileBannerMessage : af.bannerMessage;
            var Z = (D) ? G.mobileShowCollapseMessage : false;
            var S = (D) ? af.mobileDeclineButtonText : af.declineButtonText;
            var Q = (D) ? af.mobileAcceptButtonText : af.acceptButtonText;
            var W = (D) ? af.mobileOptionButton : af.optionButton;
            if (!W) {
                W = (D) ? af.mobileOptionButtonText : af.optionButtonText
            }
            var aa = (D) ? G.mobileShowDeclineButton : G.showDeclineButton;
            var Y = (D) ? G.mobileShowAcceptButton : G.showAcceptButton;
            var ab = (D) ? G.mobileShowOptionButton : G.showOptionButton;
            var ac = document.getElementById(C);
            if (ac) {
                ac.innerHTML = U.formatTranslation(ad)
            }
            document.getElementById(z).innerHTML = U.formatTranslation(T);
            if (Z) {
                document.getElementById(v).innerHTML = U.formatTranslation(ad)
            }
            if (aa && R && S) {
                R.innerHTML = S
            } else {
                if (R && !S) {
                    R.style.display = "none"
                }
            }
            if (Y && P && Q) {
                P.innerHTML = Q
            } else {
                if (P && !Q) {
                    P.style.display = "none"
                }
            }
            if (V && ab && W) {
                V.innerHTML = W
            } else {
                if (V) {
                    V.style.display = "none"
                }
            }
            if (document.getElementById("iabpurposebutton")) {
                var ae = (D) ? "mobilesnL2L3ShowPurposes" : "snL2L3ShowPurposes";
                var X = (af.hasOwnProperty(ae)) ? af[ae] : "Show Purposes";
                document.getElementById("iabpurposebutton").innerHTML = X
            }
            if (document.getElementById("iabvendorbutton")) {
                var ae = (D) ? "mobilesnL2L3ShowVendors" : "snL2L3ShowVendors";
                var ag = (af.hasOwnProperty(ae)) ? af[ae] : "Show Vendors";
                document.getElementById("iabvendorbutton").innerHTML = ag
            }
        };
        this.createNotice = function() {
            if (E) {
                return
            }
            G = window.evidon.notice.getBannerStyle();
            if (!G) {
                return
            }
            D = window.evidon.notice.isMobile();
            F.createBanner();
            E = true;
            var P = window.evidon.notice.getTranslations();
            if (null != P) {
                F.setTextValues(P)
            }
        };
        this.destroyNotice = function() {
            var Q = document.getElementById(n);
            if (Q) {
                Q.style.display = "none";
                try {
                    Q.parentElement.removeChild(Q)
                } catch (R) {}
            }
            var P = document.getElementById(b);
            if (P) {
                P.style.display = "none";
                try {
                    P.parentElement.removeChild(P)
                } catch (R) {}
            }
        };
        this.scaleForMobile = function() {
            if (window.innerHeight < A && window.innerWidth < A) {
                return
            }
            var P = L.getElementById(n),
                Q = Math.max(window.innerWidth / screen.width, window.innerHeight / screen.height);
            if (P && (P.style.zoom !== undefined)) {
                P.style.display = "";
                P.style.cssText += "zoom: " + (Q <= 2 ? Q : 2) + "!important;"
            }
        }
    };
    window.evidon.banner = new c();
    window.evidon.banner.createNotice()
})();