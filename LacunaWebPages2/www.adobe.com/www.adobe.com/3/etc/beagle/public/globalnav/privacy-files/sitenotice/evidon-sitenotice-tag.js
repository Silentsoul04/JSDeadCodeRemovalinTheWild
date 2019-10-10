(function() {
    if (!Object.keys) {
        Object.keys = (function() {
            var aC = Object.prototype.hasOwnProperty,
                aB = !({
                    toString: null
                }).propertyIsEnumerable("toString"),
                az = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                aA = az.length;
            return function(aE) {
                if (typeof aE !== "function" && (typeof aE !== "object" || aE === null)) {
                    throw new TypeError("Object.keys called on non-object")
                }
                var aG = [],
                    aF, aD;
                for (aF in aE) {
                    if (aC.call(aE, aF)) {
                        aG.push(aF)
                    }
                }
                if (aB) {
                    for (aD = 0; aD < aA; aD++) {
                        if (aC.call(aE, az[aD])) {
                            aG.push(az[aD])
                        }
                    }
                }
                return aG
            }
        }())
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = (function(aC, aA, aB) {
            return function az(aG, aD) {
                if (this === null || this === undefined) {
                    throw TypeError("Array.prototype.indexOf called on null or undefined")
                }
                var aH = aC(this),
                    aF = aH.length >>> 0,
                    aE = aB(aD | 0, aF);
                if (aE < 0) {
                    aE = aA(0, aF + aE)
                } else {
                    if (aE >= aF) {
                        return -1
                    }
                }
                if (aG === void 0) {
                    for (; aE !== aF; ++aE) {
                        if (aH[aE] === void 0 && aE in aH) {
                            return aE
                        }
                    }
                } else {
                    if (aG !== aG) {
                        for (; aE !== aF; ++aE) {
                            if (aH[aE] !== aH[aE]) {
                                return aE
                            }
                        }
                    } else {
                        for (; aE !== aF; ++aE) {
                            if (aH[aE] === aG) {
                                return aE
                            }
                        }
                    }
                }
                return -1
            }
        })(Object, Math.max, Math.min)
    }
    if (!Array.isArray) {
        Array.isArray = function(az) {
            return Object.prototype.toString.call(az) === "[object Array]"
        }
    }
    if (!Object.isEmpty) {
        Object.isEmpty = function(aA) {
            if (!aA) {
                return true
            } else {
                for (var az in aA) {
                    if (aA.hasOwnProperty(az)) {
                        return false
                    }
                }
                return true
            }
        }
    }
    var w = '//www.adobe.com/etc/beagle/public/globalnav/privacy-files',
        au = w + "/sitenotice/",
        z = au + window.evidon.id,
        b = 1,
        a = 2,
        F = 1,
        D = 2,
        E = 3,
        S = 1,
        R = 2,
        T = 3,
        A = "_evidon_consent_cookie",
        B = "_evidon_consent_ls_",
        aw = "_evidon_suppress_notification_cookie",
        am = "//l.betrad.com/site/v3/",
        aj = "https://optoutapi.evidon.com/site/",
        W = "https://l3.evidon.com/site/",
        M = "https://l3.evidon.com/dataRequest/",
        ay = "vendorlist.js",
        l = "evidon-banner.js",
        m = "evidon-barrier.js",
        Q = "evidon-gdpr-overlay.js",
        an = "evidon-preferences-dialog.js",
        y = "evidon-cmp.js",
        x = "https://iabmap.evidon.com/iabevidonmapping.js",
        t = 1,
        N = 2,
        J = 3,
        O = 4,
        ak = "_evidon-overlay",
        V = "_evidon-l3",
        ar = 30,
        ax = "evidonConsentGiven",
        r = "_evh-button",
        ac = "_evh-link",
        ai = "_evh-newvendor-indicator",
        v = "_evidon-button-text",
        af = "_evidon-link-text",
        ab = "evidon-notice-link",
        ag = 800;
    var Y = "evidon-consent-link",
        ae = "evidon-consent-link-text",
        ad = "evidon-consent-link-image",
        o = "evidon-consent-button",
        u = "evidon-consent-button-text",
        s = "evidon-consent-button-image";
    var aq = 1,
        ao = 17,
        at = 20,
        al = 21,
        ah = 22,
        k = 26,
        U = 6,
        P = 7,
        G = 23;
    var aa = 2,
        q = 3,
        Z = 15,
        p = 16;
    var H = "{company}",
        C = "{consentToolUrl}",
        ap = "{privacyPolicy}";
    var e = "adobe-marketing-cloud-audience-manager",
        d = "adobe-marketing-cloud-analytics",
        g = "adobe-experience-platform",
        i = "adobe-marketing-cloud-target",
        j = "adobe-video-analytics",
        c = "adobe-marketing-cloud-media-optimizer-formerly-adlens",
        h = "livefyre",
        f = "adobe-marketing-cloud-campaign";
    var L = {
        BANNER_SCRIPT: "fallback-banner.js",
        BARRIER_SCRIPT: "fallback-barrier.js",
        L2_SCRIPT: "fallback-gdpr-overlay.js"
    };
    var K = [3247];
    var n = function() {
        var aB = null,
            az = false,
            aC = false,
            aA = false,
            aG = this;

        function aD() {
            window.evidon.notice.dropPixel(p);
            window.evidon.notice.showOptions();
            if (aA) {
                window.evidon.notice._updateConsentedVendors();
                aG.hideNewVendorIndicator()
            }
        }

        function aF(aL, aI) {
            var aJ = aL.indexOf(aI);
            if (aJ === -1) {
                return null
            }
            var aK = aL.substr(aJ);
            aJ = aK.indexOf(":");
            aK = aK.substr(aJ + 1);
            aJ = aK.indexOf(";");
            if (aJ === -1) {
                return aK
            } else {
                return aK.substr(0, aJ)
            }
        }

        function aH(aM) {
            var aL = aM.split(";");
            var aI = {};
            for (var aJ = 0; aJ < aL.length; aJ++) {
                var aK = aL[aJ].split(":");
                if (aK.length !== 2) {
                    continue
                }
                aI[aK[0]] = aK[1]
            }
            return aI
        }

        function aE() {
            if (az || !aB) {
                return
            }
            var aJ = document,
                aQ = window.evidon.notice.isMobile(),
                aI = aJ.createElement("div");
            aI.id = r;
            aI.className = o;
            aI.innerHTML = "<style> @media print {#_evh-ric,#_evh-link { display:none !important; } } </style>";
            aI.tabIndex = 0;
            var aT = (aQ) ? aB.mobileButtonStyle : aB.buttonStyle;
            var aR = aJ.createElement("a");
            aR.id = ac;
            aR.style.cssText = aT;
            var aU = (aQ) ? aB.mobileShowIcon : aB.showIcon;
            if (aU) {
                var aN = aJ.createElement("img");
                aN.src = aB.buttonIcon;
                aN.className = s;
                var aW = "border:0;display:inline;vertical-align:middle;margin-right:10px;";
                var aL = aF(aB.buttonStyle, "height");
                if (aL) {
                    var aK = parseFloat(aL);
                    var aZ = aL.replace(aK, "");
                    aK = parseInt(aK * 0.6, 10);
                    aW += "height:" + aK + aZ + ";"
                }
                aN.style.cssText = aW;
                aR.appendChild(aN)
            }
            var aV = (aQ) ? aB.mobileShowText : aB.showText;
            if (aV) {
                var aX = aJ.createElement("span");
                aX.id = v;
                aX.className = u;
                aX.style.cssText = "vertical-align:middle !important;";
                aR.appendChild(aX)
            }
            aR.onclick = aD;
            var aS = aH(aT);
            var aM = aS.left === undefined ? "left" : "right";
            var a0 = aS.top === undefined ? "top" : "bottom";
            var aP = "display: none; position: absolute;" + aM + ":-10px;" + a0 + ":-10px;width: 23px; height: 23px;";
            var aO = document.createElement("img");
            aO.id = ai;
            aO.src = "//c.evidon.com/sitenotice/images/evidon-change-alert.png";
            aO.style.cssText = aP;
            aR.appendChild(aO);
            aI.appendChild(aR);
            document.body.appendChild(aI);
            var aY = window.evidon.notice.getTranslations();
            if (aY) {
                aG.setButtonText(aY)
            }
            if (aQ) {
                aG.scaleForMobile()
            }
            az = true
        }
        window.onbeforeprint = function() {
            var aI = document.getElementById(r);
            aI.style.display = "none"
        };
        window.onafterprint = function() {
            var aI = document.getElementById(r);
            aI.style.display = ""
        };
        this.scaleForMobile = function() {
            if (window.innerHeight < ag && window.innerWidth < ag) {
                return
            }
            var aI = document.getElementById(r),
                aJ = Math.max(window.innerWidth / screen.width, window.innerHeight / screen.height);
            if (aI && (aI.style.zoom !== undefined)) {
                aI.style.cssText += "zoom: " + (aJ <= 2 ? aJ : 2) + "!important;"
            }
        };
        this.setButtonText = function(aK) {
            if (!aK) {
                return
            }
            window.evidon.notice.dropPixel(q);
            var aJ = window.evidon.notice.isMobile();
            if (az) {
                var aI = document.getElementById(v);
                if (aI) {
                    aI.innerHTML = (aJ) ? aK.mobileButtonText : aK.buttonText;
                    aC = true
                }
            }
        };
        this.createButton = function(aI) {
            if (!aI) {
                aB = window.evidon.notice.getButtonStyle()
            } else {
                aB = aI
            }
            if (aB) {
                aE()
            }
        };
        this.showNewVendorIndicator = function() {
            var aI = document.getElementById(ai);
            if (!aI) {
                return
            }
            aI.style.display = "";
            aA = true
        };
        this.hideNewVendorIndicator = function() {
            var aI = document.getElementById(ai);
            if (!aI) {
                return
            }
            aI.style.display = "none";
            aA = false
        }
    };
    var X = function() {
        var aA = null,
            az = false,
            aD = this;

        function aB() {
            if (az || !aA) {
                return
            }
            var aG = document,
                aJ = window.evidon.notice.isMobile(),
                aK = aG.createElement("a");
            aK.href = "#";
            aK.className = Y;
            aK.tabIndex = 0;
            var aL = aG.createElement("span");
            aL.id = af;
            aL.className = ae;
            if (aJ && aA.mobileShowIcon && aA.mobileLinkIcon) {
                var aI = aG.createElement("img");
                aI.src = aA.mobileLinkIcon;
                aI.style.cssText = "vertical-align:bottom;";
                aI.className = ad;
                aK.appendChild(aI);
                aL.style.cssText = "margin-left: 6px;"
            } else {
                if (!aJ && aA.showIcon && aA.linkIcon) {
                    var aI = aG.createElement("img");
                    aI.src = aA.linkIcon;
                    aI.className = ad;
                    aI.style.cssText = "vertical-align:bottom;";
                    aK.appendChild(aI);
                    aL.style.cssText = "margin-left: 6px;"
                }
            }
            aK.appendChild(aL);
            if (aJ) {
                aK.style.cssText = aA.mobileLinkStyle
            } else {
                aK.style.cssText = aA.linkStyle
            }
            var aF = [];
            if (aG.getElementsByClassName !== undefined) {
                aF = aG.getElementsByClassName(ab)
            } else {
                aF = aG.querySelectorAll("." + ab)
            }
            if (aF.length === 0) {
                console.log("Evidon -- " + ab + " not found on page, cant display the consent link.")
            }
            for (var aH = 0; aH < aF.length; aH++) {
                var aE = aK.cloneNode(true);
                aE.onclick = aC;
                aF[aH].appendChild(aE)
            }
            az = true;
            var aM = window.evidon.notice.getTranslations();
            if (aM) {
                aD.setLinkText(aM)
            }
        }

        function aC() {
            window.evidon.notice.dropPixel(Z);
            window.evidon.notice.showOptions()
        }
        this.setLinkText = function(aJ) {
            if (!az || !aJ) {
                return
            }
            window.evidon.notice.dropPixel(aa);
            var aG = window.evidon.notice.isMobile();
            var aH = null,
                aE = document,
                aI = (aG) ? aJ.mobileLinkText : aJ.linkText;
            if (aE.getElementsByClassName !== undefined) {
                aH = aE.getElementsByClassName(ae)
            } else {
                aH = aE.querySelectorAll("." + ae)
            }
            if (aI) {
                for (var aF = 0; aF < aH.length; aF++) {
                    aH[aF].innerText = aI
                }
            }
        };
        this.createLink = function(aE) {
            if (aE) {
                aA = aE
            } else {
                aA = window.evidon.notice.getLinkStyle()
            }
            if (!aA) {
                return
            }
            aB()
        }
    };
    var av = function() {
        this.translations = {};
        this.country = null;
        this.themes = null;
        this.languageCode = null;
        this.languageRoot = null;
        this.companyId = window.evidon.id;
        this.activeTranslations = null;
        this.activeTranslationId = 0;
        this.settings = null;
        this.domain = null;
        this.path = null;
        this.activeSettings = null, this.consentTypeId = 0, this.privacyAccessTypeId = 0, this.consentRequired = false, this.consentDuration = 13, this.consentIsGiven = false, this.L2Enabled = false, this.gdprEnabled = false, this.dataRightsType = 0, this.rightsLink = "", this.closeConsentEnabled = false, this.scrollConsentEnabled = false, this.pageclickConsentEnabled = false, this.navigationConsentEnabled = false;
        this.activeVendorId = -1;
        this.activeDomain = null;
        this.pixelsDropped = [];
        this.scriptsLoaded = [];
        this.tagManagerEventFired = false;
        this.consentCallbackExecuted = false;
        this.closeCallbackExecuted = false;
        this.declineCallbackExecuted = false;
        this.navigationStack = [];
        this.blockDomainCheck = false;
        this.shouldSupportAmp = false;
        this.customerUserId = (typeof window.evidon.userid !== "undefined") ? window.evidon.userid : null;
        this.vendorList = null;
        this.shouldCallCMP = true;
        var aD = this;
        this._getAttributeValue = function(aJ, aL) {
            var aI = aJ.attributes,
                aM = null;
            for (var aK = 0; aK < aI.length; aK++) {
                if (aI[aK].localName == aL) {
                    aM = aI[aK].value;
                    break
                }
            }
            return aM
        };
        this._trackScrolling = function() {
            if (!aD.scrollConsentEnabled) {
                return
            } else {
                var aI = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if (aI === 0 || aI > ar) {
                    aD.consentGiven(true);
                    aD.dropPixel(at)
                }
            }
        };
        this._trackClicking = function(aI) {
            if (!aD.pageclickConsentEnabled) {
                return
            }
            if (!aI || !aI.target) {
                return
            }
            if (!window.evidon.banner) {
                return
            }
            if (window.evidon.banner.isOnBanner(aI.target)) {
                return
            }
            if (window.evidon.gdprL2 && window.evidon.gdprL2.isOnBanner(aI.target)) {
                return
            }
            aD.consentGiven(true);
            aD.dropPixel(al)
        };
        this._hookConsentEvents = function() {
            if (document.readyState == "complete") {
                setTimeout(function() {
                    if (window.addEventListener) {
                        window.addEventListener("scroll", aD._trackScrolling, false);
                        window.addEventListener("click", aD._trackClicking, false)
                    } else {
                        window.attachEvent("onscroll", aD._trackScrolling);
                        window.attachEvent("onclick", aD._trackClicking)
                    }
                }, 500)
            } else {
                if (window.addEventListener) {
                    window.addEventListener("load", aD._hookConsentEvents, false)
                } else {
                    window.attachEvent("onload", aD._hookConsentEvents)
                }
            }
        };
        this._detachEventTracking = function() {
            aD.pageclickConsentEnabled = false;
            aD.scrollConsentEnabled = false;
            try {
                if (window.removeEventListener !== undefined) {
                    window.removeEventListener("click", aD._trackClicking, false)
                } else {
                    window.detachEvent("onclick", aD._trackClicking, false)
                }
                if (window.removeEventListener !== undefined) {
                    window.removeEventListener("scroll", aD._trackScrolling, false)
                } else {
                    window.detachEvent("onscroll", aD._trackScrolling, false)
                }
            } catch (aI) {}
        };
        if (window.addEventListener) {
            window.addEventListener("resize", function() {
                aD.showNotice()
            })
        } else {
            window.attachEvent("onresize", function() {
                aD.showNotice()
            })
        }
        this._isDomReady = function() {
            if (document.readyState == "loading") {
                console.log("dom not ready, setting event");
                document.addEventListener("DOMContentLoaded", function() {
                    console.log("dom ready, triggering load");
                    try {
                        document.removeEventListener("DOMContentLoaded")
                    } catch (aI) {}
                    aD.showNotice()
                }, false);
                return false
            } else {
                return true
            }
        };
        var aG = document.getElementById("evidon-notice");
        if (aG) {
            var aH = aG.src;
            var aF = aH.indexOf(".com");
            if (aF !== -1) {
                aH = aH.substr(0, aF + 4);
                w = '//www.adobe.com/etc/beagle/public/globalnav/privacy-files';
                au = w + "/sitenotice/";
                z = au + window.evidon.id
            }
            var az = this._getAttributeValue(aG, "data-options");
            if (az) {
                if (az.indexOf("block-domain-check") > -1) {
                    this.blockDomainCheck = true
                }
                if (az.indexOf("amp-support") > -1) {
                    this.shouldSupportAmp = true
                }
            }
        }
        var aC = (window.navigator.languages && window.navigator.languages.length > 0) ? window.navigator.languages[0] : (window.navigator.userLanguage || window.navigator.language);
        if (aC) {
            this.activateTranslations(aC.toLowerCase())
        }
        if (!this.blockDomainCheck) {
            this.setDomain(null, true)
        }
        if (this._isConsentGiven() && this.activeSettings && this.vendorList) {
            this._runConsentCallback()
        }
        var aB = window.addEventListener ? "addEventListener" : "attachEvent";
        var aA = window[aB];
        var aE = aB == "attachEvent" ? "onmessage" : "message";
        aA(aE, function(aJ) {
            var aK = aJ.message ? "message" : "data";
            var aI = aJ[aK];
            if (aI == "acceptclicked") {
                aD._closeL3()
            }
        }, false)
    };
    av.prototype._isScriptLoaded = function(aA) {
        for (var az = 0; az < this.scriptsLoaded.length; az++) {
            if (this.scriptsLoaded[az] == aA) {
                return true
            }
        }
        return false
    };
    av.prototype._getRootDomain = function(az) {
        var aC = az;
        var aB = aC.split(".");
        if (aB.length === 2) {
            aC = aB[0]
        } else {
            if (aB.length >= 3) {
                var aA = aB[aB.length - 2];
                if (this._isTwoPartTLD(aA)) {
                    aC = aB[aB.length - 3]
                } else {
                    aC = aA
                }
            }
        }
        return aC
    };
    av.prototype._isTwoPartTLD = function(aB) {
        var aA = ["co", "com", "info", "web", "info", "gov", "edu", "biz", "net", "org"];
        var az = ["uk", "us", "fr", "es", "de", "at", "au", "ae", "be", "br", "ca", "ch", "cn", "co", "cz", "dk", "eg", "eu", "fi", "gb", "gr", "hk", "hr", "hu", "ie", "in", "jp", "mx", "nl", "no", "nz", "pl", "ro", "ru", "se"];
        return (aA.indexOf(aB) !== -1 || az.indexOf(aB) !== -1)
    };
    av.prototype._getTLD = function(az) {
        var aB = az.split("."),
            aC = "";
        if (aB && aB.length > 1) {
            var aC = aB[aB.length - 1];
            if (aB.length >= 3) {
                var aA = aB[aB.length - 2];
                if (this._isTwoPartTLD(aA)) {
                    aC = aA + "." + aC
                }
            }
        }
        return aC
    };
    av.prototype.appendScript = function(aG, az) {
        var aC, aF = document.createElement("script"),
            aE = aB();

        function aB() {
            return document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0]
        }

        function aD() {
            aF.onload = aF.onreadystatechange = null;
            az()
        }
        if (this._isScriptLoaded(aG)) {
            if (az) {
                az()
            }
        } else {
            aF.async = true;
            aF.src = aG;
            aF.charset = "utf-8";
            if (az) {
                aF.onreadystatechange = function() {
                    if (!aC && (this.readyState == "loaded" || this.readyState == "complete")) {
                        aC = true;
                        aD()
                    }
                };
                aF.onload = aD
            }
            try {
                aE.parentElement.insertBefore(aF, aE);
                this.scriptsLoaded.push(aG)
            } catch (aA) {
                console.log(aA)
            }
        }
    };
    av.prototype._getSettings = function() {
        var aJ = this;
        if (!this.domain) {
            return null
        }

        function aB(aV, aW) {
            if (!aV || !aW) {
                return false
            } else {
                return aV.substr(aV.length - aW.length) === aW
            }
        }

        function aD(aV) {
            var aZ = [];
            for (var aW in aJ.settings) {
                aW = aW.toLowerCase();
                var aX = aW.split("|")[0];
                if (!aB(aX, "/")) {
                    aX += "/"
                }
                var aY = aV.toLowerCase();
                if (!aB(aY, "/")) {
                    aY += "/"
                }
                if (aX.indexOf(aY) === 0) {
                    aZ.push(aW)
                }
            }
            return aZ
        }
        var aH = aD(this.domain),
            aO = aJ._getRootDomain(aJ.domain),
            aU = aJ._getTLD(this.domain);
        var aS = aJ.domain.substr(0, aJ.domain.indexOf(aO)) + aO + ".*";
        aH = aH.concat(aD(aS));
        aH = aH.concat(aD(aO + "." + aU));
        aH = aH.concat(aD(aO + ".*"));
        if (aH.length === 1) {
            aJ.activeDomain = aH[0].split("|")[0];
            return this.settings[aH[0]]
        } else {
            if (aH.length > 1) {
                aH.sort(function(aV, aW) {
                    return (aW.length - aV.length)
                });
                var aF = aJ.domain + this.path,
                    aQ = aO + "." + aU + this.path,
                    aM = [];
                for (var aE = 0; aE < aH.length; aE++) {
                    var aG = aH[aE];
                    if (aG.indexOf("|") !== -1) {
                        aG = aG.substr(0, aG.indexOf("|"))
                    }
                    if (aG.indexOf("*") !== -1) {
                        aG = aG.replace("*", aU)
                    }
                    if (aF.indexOf(aG) !== -1) {
                        aM.push(aH[aE])
                    }
                }
                if (aM.length === 0) {
                    return null
                } else {
                    if (aM.length === 1) {
                        aJ.activeDomain = aM[0].split("|")[0];
                        return aJ.settings[aM[0]]
                    } else {
                        var az = aJ.country.id,
                            aT = null;
                        var aC = [],
                            aR = [],
                            aI = 0,
                            aP = 0;
                        if (!aB(aF, "/")) {
                            aF += "/"
                        }
                        if (!aB(aQ, "/")) {
                            aQ += "/"
                        }
                        for (var aE = 0; aE < aM.length; aE++) {
                            var aK = aM[aE];
                            var aL = aK.split("|")[0];
                            if (aL.indexOf("*") !== -1) {
                                aL = aL.replace("*", aU)
                            }
                            if (!aB(aL, "/")) {
                                aL += "/"
                            }
                            if (aF.indexOf(aL) === 0 && aL.length >= aI) {
                                aC.push(aK);
                                if (aI === 0) {
                                    aI = aL.length
                                }
                            } else {
                                if (aQ.indexOf(aL) !== -1 && aL.length >= aP) {
                                    aR.push(aK);
                                    aP = aL.length
                                }
                            }
                        }
                        if (aC.length === 0 && aR.length >= 0) {
                            if (aR.length === 1) {
                                aT = aJ.settings[aR[0]];
                                aJ.activeDomain = aR[0].split("|")[0]
                            } else {
                                aM = aR
                            }
                        } else {
                            if (aC.length === 1) {
                                aT = aJ.settings[aC[0]];
                                aJ.activeDomain = aC[0].split("|")[0]
                            } else {
                                if (aC.length > 1) {
                                    aM = aC
                                }
                            }
                        }
                        if (!aT) {
                            for (var aE = 0; aE < aM.length; aE++) {
                                if (aJ.settings[aM[aE]].countries.hasOwnProperty(az)) {
                                    aT = aJ.settings[aM[aE]];
                                    aJ.activeDomain = aM[aE].split("|")[0];
                                    break
                                }
                            }
                        }
                        if (!aT) {
                            var aA = 0;
                            for (var aE = 0; aE < aM.length; aE++) {
                                var aN = aJ.settings[aM[aE]];
                                if (aN.hasOwnProperty("defaultCountry")) {
                                    if (aN.defaultCountry != 0) {
                                        aA = aN.defaultCountry;
                                        break
                                    }
                                }
                            }
                            if (aA !== 0) {
                                for (var aE = 0; aE < aM.length; aE++) {
                                    var aN = aJ.settings[aM[aE]];
                                    if (aN.countries.hasOwnProperty(aA)) {
                                        aT = aN;
                                        aJ.activeDomain = aM[aE].split("|")[0]
                                    }
                                }
                            }
                        }
                        if (!aT) {
                            aT = aJ.settings[aM[0]];
                            aJ.activeDomain = aM[0].split("|")[0]
                        }
                        return aT
                    }
                }
            }
        }
        return null
    };
    av.prototype._getDefaultConsentCookieData = function(az, aG, aC) {
        var aF = this.activeSettings,
            aA = {},
            aI = {},
            aB = {};
        if (az) {
            aA[this.activeCountryId] = az
        } else {
            aA[this.activeCountryId] = true
        }
        if (aG === true) {
            var aH = this.getActiveVendors();
            var aE = {};
            for (var aD = 0; aD < aH.length; aD++) {
                aE[aH[aD]] = true
            }
            aI[this.activeCountryId] = aE
        } else {
            if (typeof aG === "object") {
                aI[this.activeCountryId] = aG
            }
        }
        if (aC) {
            aB[this.activeCountryId] = aC
        } else {
            aB[this.activeCountryId] = true
        }
        return {
            consent_date: new Date().toISOString(),
            categories: aA,
            vendors: aI,
            cookies: aB
        }
    };
    av.prototype._getConsentCookieExpDate = function(aA) {
        var az = aA ? new Date(aA) : new Date();
        var aB = (this.consentDuration > 0) ? this.consentDuration : 12;
        az.setMonth(az.getMonth() + aB);
        return az
    };
    av.prototype._getConsentCookieDomainPath = function() {
        var aA = "/";
        var aC = this.activeSettings;
        var az = aC.hasOwnProperty("includeSubdomains") ? aC.includeSubdomains : 0;
        if (az === 2) {
            aA = this.activeDomain;
            if (!aA) {
                console.error("Attempted to set a cookie without a valid settings object");
                return
            }
            var aB = aA.indexOf("/");
            if (aB !== -1) {
                aA = aA.substring(aB)
            }
            aA = window.location.pathname.substr(0, aA.length)
        }
        return aA
    };
    av.prototype._getConsentCookieDomain = function() {
        var aA = this.activeSettings;
        var az = aA.hasOwnProperty("includeSubdomains") ? aA.includeSubdomains : 0;
        if (az === 1) {
            return "." + this._getRootDomain(this.domain) + "." + this._getTLD(this.domain)
        }
        return null
    };
    av.prototype._isConsentGiven = function() {
        var az = this._getConsentCookie();
        return (null !== az)
    };
    av.prototype._deleteConsentCookie = function() {
        var az = this._getConsentCookieDomain();
        var aB = this._getConsentCookieDomainPath();
        var aA = new Date(1970, 1, 1);
        this._removeLocalStorageItem(B + this.activeSettings.id);
        this._writeCookie(A, "", aA.toUTCString(), aB, az)
    };
    av.prototype.getConsentData = function() {
        var az = this._getConsentLocalStorage();
        if (!az) {
            az = this._getConsentCookie()
        }
        if (!az) {
            az = {
                name: null,
                value: null
            }
        }
        return az
    };
    av.prototype._getConsentLocalStorage = function() {
        var aB = B + this.activeSettings.id;
        var az = this._readLocalStorage(aB);
        try {
            az = JSON.parse(az)
        } catch (aA) {}
        return {
            name: aB,
            value: az
        }
    };
    av.prototype._getConsentCookie = function() {
        return this._getCookie(A)
    };
    av.prototype._setConsentCookie = function(aF, az, aG, aD) {
        var aA = this._getDefaultConsentCookieData(az, aG, aD);
        var aC = this._getConsentCookieExpDate(aF);
        var aE = this._getConsentCookieDomainPath();
        var aB = this._getConsentCookieDomain();
        if (aF) {
            aA.consent_date = aF.toISOString()
        }
        if (this._writeLocalStorage(B + this.activeSettings.id, JSON.stringify(aA))) {
            delete(aA.categories);
            delete(aA.vendors);
            delete(aA.cookies)
        }
        if (!this._writeCookie(A, JSON.stringify(aA), aC.toUTCString(), aE, aB)) {
            return false
        }
        return aA
    };
    av.prototype._updateConsentData = function(aE, aC) {
        var az = this.getConsentData().value;
        var aB = this._getConsentCookieExpDate(new Date(az.consent_date));
        var aD = this._getConsentCookieDomainPath();
        var aA = this._getConsentCookieDomain();
        if (!az.hasOwnProperty(aE) || !az[aE].hasOwnProperty(this.activeCountryId)) {
            return
        }
        az[aE][this.activeCountryId] = aC;
        if (this._writeLocalStorage(B + this.activeSettings.id, JSON.stringify(az))) {
            delete(az.categories);
            delete(az.vendors);
            delete(az.cookies)
        }
        this._writeCookie(A, JSON.stringify(az), aB.toUTCString(), aD, aA)
    };
    av.prototype._updateConsentedCategories = function(az) {
        this._updateConsentData("categories", az)
    };
    av.prototype._updateConsentedCookies = function(az) {
        this._updateConsentData("cookies", az)
    };
    av.prototype._updateConsentedVendors = function(aD) {
        var aB = this.getConsentData().value;
        var az = aB.vendors[this.activeCountryId];
        if (!aD) {
            var aA = this.getActiveVendors();
            aD = this._getNewVendors(aA, az)
        }
        var aE = {};
        if (Array.isArray(az)) {
            for (var aC = 0; aC < az.length; aC++) {
                aE[az[aC]] = true
            }
        } else {
            if (typeof az === "object") {
                for (var aF in az) {
                    aE[aF] = az[aF]
                }
            }
        }
        if (Array.isArray(aD)) {
            for (var aC = 0; aC < aD.length; aC++) {
                aE[aD[aC]] = true
            }
        } else {
            if (typeof aD === "object") {
                for (var aF in aD) {
                    aE[aF] = aD[aF]
                }
            }
        }
        this._updateConsentData("vendors", aE)
    };
    av.prototype._getSuppressionCookie = function() {
        return this._getCookie(aw)
    };
    av.prototype._createListFromItem = function(aA) {
        var aC = [];
        try {
            for (var aB in aA) {
                if (aA[aB] === true) {
                    aC.push(aB.toLowerCase())
                }
            }
        } catch (az) {}
        return aC.join()
    };
    av.prototype._runAdobeOptIn = function(aA, aD) {
        if (window.adobe && window.adobe.optIn) {
            if (aA && aA.hasOwnProperty("all")) {
                adobe.optIn.approveAll()
            } else {
                var az = [],
                    aB = [];
                for (var aC in aD) {
                    switch (aC) {
                        case c:
                            if (aD[aC] === true) {
                                az.push(adobe.OptInCategories.ADCLOUD)
                            } else {
                                aB.push(adobe.OptInCategories.ADCLOUD)
                            }
                            break;
                        case d:
                            if (aD[aC] === true) {
                                az.push(adobe.OptInCategories.ANALYTICS)
                            } else {
                                aB.push(adobe.OptInCategories.ANALYTICS)
                            }
                            break;
                        case e:
                            if (aD[aC] === true) {
                                az.push(adobe.OptInCategories.AAM)
                            } else {
                                aB.push(adobe.OptInCategories.AAM)
                            }
                            break;
                        case f:
                            if (aD[aC] === true) {
                                az.push(adobe.OptInCategories.CAMPAIGN)
                            } else {
                                aB.push(adobe.OptInCategories.CAMPAIGN)
                            }
                            break;
                        case g:
                            if (aD[aC] === true) {
                                az.push(adobe.OptInCategories.ECID)
                            } else {
                                aB.push(adobe.OptInCategories.ECID)
                            }
                            break;
                        case h:
                            if (aD[aC] === true) {
                                az.push(adobe.OptInCategories.LIVEFYRE)
                            } else {
                                aB.push(adobe.OptInCategories.LIVEFYRE)
                            }
                            break;
                        case i:
                            if (aD[aC] === true) {
                                az.push(adobe.OptInCategories.TARGET)
                            } else {
                                aB.push(adobe.OptInCategories.TARGET)
                            }
                            break;
                        case j:
                            if (aD[aC] === true) {
                                az.push(adobe.OptInCategories.VIDEO_ANALYTICS)
                            } else {
                                aB.push(adobe.OptInCategories.VIDEO_ANALYTICS)
                            }
                            break
                    }
                }
                if (az.length > 0) {
                    adobe.optIn.approve(az)
                }
                if (aB.length > 0) {
                    adobe.optIn.deny(aB)
                }
            }
        }
    };
    av.prototype._triggerTagManagerEvent = function(az, aF, aB) {
        if (this.tagManagerEventFired) {
            return
        }
        var aE = (aF) ? this._createListFromItem(aF) : "";
        var aA = (az) ? this._createListFromItem(az) : "";
        try {
            var aC = window.dataLayer || [];
            aC.push({
                event: ax,
                consentCategories: aA,
                consentVendors: aE
            })
        } catch (aD) {}
        try {
            if (window.utag) {
                window.utag.link({
                    event_name: ax,
                    consent_categories: aA,
                    consent_vendors: aE
                })
            }
        } catch (aD) {}
        try {
            if (window.tC) {
                tC.event[ax](this, {
                    consent_categories: aA,
                    consent_vendors: aE
                })
            }
        } catch (aD) {}
        this.tagManagerEventFired = true
    };
    av.prototype._getCategoriesReturnObject = function(az) {
        var aA = {};
        if (typeof az === "undefined") {
            az = (this._getConsentedCategories() || {})
        }
        if (!az) {
            az = {}
        }
        if (az === true || this.consentDetailCategories === false) {
            aA = {
                all: true
            }
        } else {
            if (Object.isEmpty(az)) {
                az.all = true
            }
            aA = az
        }
        return aA
    };
    av.prototype._getVendorsReturnObject = function(aB) {
        if (this.consentDetailVendors === false) {
            return {
                all: true
            }
        }
        if (typeof aB === "undefined") {
            aB = (this._getConsentedVendors() || {})
        }
        if (aB === true) {
            return {
                all: true
            }
        } else {
            var aC = {};
            if (Array.isArray(aB)) {
                for (var az = 0; az < aB.length; az++) {
                    var aA = aB[az];
                    if (this.vendorList.hasOwnProperty(aA) === false) {
                        console.error("Vendor " + aA + " not found in vendorList");
                        continue
                    }
                    aC[this.vendorList[aA]] = true
                }
            } else {
                if (typeof aB === "object") {
                    if (Object.isEmpty(aB)) {
                        aC = {
                            all: true
                        }
                    } else {
                        for (var aA in aB) {
                            if (this.vendorList.hasOwnProperty(aA) === false) {
                                console.error("Vendor " + aA + " not found in vendorList");
                                continue
                            }
                            aC[this.vendorList[aA]] = aB[aA]
                        }
                    }
                } else {
                    console.error("vendors object not recognized", aB)
                }
            }
            return aC
        }
    };
    av.prototype._getCookiesReturnObject = function(az) {
        var aA = {};
        if (typeof az === "undefined") {
            az = (this._getConsentedCookies() || {})
        }
        if (az === true) {
            aA = {
                all: true
            }
        } else {
            if (typeof az === "object") {
                if (Object.isEmpty(az)) {
                    az.all = true
                }
                aA = az
            }
        }
        return aA
    };
    av.prototype._runConsentCallback = function(az, aB, aA) {
        this.consentIsGiven = true;
        if (this.consentCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        az = this._getCategoriesReturnObject(az);
        aB = this._getVendorsReturnObject(aB);
        aA = this._getCookiesReturnObject(aA);
        if (window.evidon && window.evidon.priorConsentCallback) {
            window.evidon.priorConsentCallback(az, aB, aA)
        }
        if (window.__cmp && this.iabEnabled && this.shouldCallCMP) {
            __cmp("consentGiven");
            __cmp("saveConsent")
        }
        this.consentCallbackExecuted = true;
        this._triggerTagManagerEvent(az, aB, aA);
        this._runAdobeOptIn(az, aB)
    };
    av.prototype._runCloseCallback = function() {
        this.consentIsGiven = false;
        if (this.closeCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        if (window.evidon && window.evidon.closeCallback) {
            window.evidon.closeCallback()
        }
        if (window.evidon && window.evidon.cmp) {
            window.evidon.cmp.consentClosed()
        }
        this.closeCallbackExecuted = true
    };
    av.prototype._runDeclineCallback = function() {
        this.consentIsGiven = false;
        if (this.declineCallbackExecuted && !this.shouldSupportAmp) {
            return
        }
        if (window.evidon && window.evidon.consentDeclinedCallback) {
            window.evidon.consentDeclinedCallback()
        }
        if (window.evidon && window.evidon.cmp) {
            window.evidon.cmp.consentDeclined()
        }
        this.declineCallbackExecuted = true
    };
    av.prototype._getLegacyNoticeType = function() {
        if (this.consentTypeId == F) {
            if (this.privacyAccessTypeId == b) {
                return 0
            } else {
                if (this.privacyAccessTypeId == a) {
                    return t
                }
            }
        } else {
            if (this.consentTypeId == D) {
                if (this.privacyAccessTypeId == b) {
                    return O
                } else {
                    if (this.privacyAccessTypeId == a) {
                        return N
                    }
                }
            } else {
                if (this.consentTypeId == E) {
                    return J
                }
            }
        }
        return 0
    };
    av.prototype._closeL3 = function() {
        var az = document.getElementById(ak);
        var aA = document.getElementById(V);
        if (az) {
            az.style.display = "none";
            az.style.opacity = "0";
            setTimeout(function() {
                try {
                    az.parentElement.removeChild(az)
                } catch (aB) {
                    console.log(aB)
                }
            }, 200)
        }
        if (aA) {
            aA.style.display = "none";
            aA.style.opacity = 0;
            setTimeout(function() {
                try {
                    aA.parentElement.removeChild(aA)
                } catch (aB) {
                    console.log(aB)
                }
            }, 200)
        }
    };
    av.prototype._navigationConsentGiven = function() {
        if (!this.navigationConsentEnabled) {
            return false
        }
        var aA = document.referrer;
        var az = this.activeDomain;
        if (az.substr(az.length - 1) === "/") {
            az = az.substr(0, az.length - 1)
        }
        if (aA && aA != document.URL && aA.indexOf(az) > -1) {
            this.dropPixel(ah);
            return true
        } else {
            return false
        }
    };
    av.prototype._setTranslationValues = function(aC, aD) {
        for (var aB in aC) {
            var az = aC[aB];
            if (typeof az === "object") {
                var aA = az.id;
                aC[aB] = aD[aA]
            }
        }
        return aC
    };
    av.prototype._setActiveTranslations = function() {
        if (!this.languageRoot || !this.translations) {
            return
        }
        if (!this.activeSettings) {
            if (!this.translations.hasOwnProperty(this.languageRoot)) {
                this.activateTranslations(this.languageCode || this.languageRoot)
            }
        } else {
            var aC = this.activeSettings;
            if (aC.translations.hasOwnProperty(this.languageRoot)) {
                if (this.translations.hasOwnProperty(this.languageRoot)) {
                    var aD = aC.translations[this.languageRoot];
                    var aA = 0;
                    if (aD.hasOwnProperty(this.languageCode)) {
                        aA = aD[this.languageCode]
                    } else {
                        if (aD.hasOwnProperty(this.languageRoot)) {
                            aA = aD[this.languageRoot]
                        } else {
                            if (this.languageRoot == "en" && aD.hasOwnProperty("en-us")) {
                                aA = aD["en-us"]
                            } else {
                                function az(aF) {
                                    for (var aE in aF) {
                                        return aE
                                    }
                                }
                                var aB = az(aD);
                                if (aB) {
                                    aA = aD[aB]
                                }
                            }
                        }
                    }
                    if (aA) {
                        this.activeTranslationId = aA;
                        var aD = this.translations[this.languageRoot];
                        if (aD.hasOwnProperty("items")) {
                            this.activeTranslations = this._setTranslationValues(aD[aA], aD.items)
                        } else {
                            this.activeTranslations = aD[aA]
                        }
                    }
                } else {
                    this.activateTranslations(this.languageCode || this.languageRoot)
                }
            } else {
                this.activateTranslations(aC.defaultTranslation.code)
            }
        }
    };
    av.prototype.dropPixel = function(az, aC) {
        var aB = window.evidon.id;
        var aE = this.activeSettings.id;
        var aA = this.activeCountryId;
        var aF = am;
        if (aF.substr(aF.length - 1) !== "/") {
            aF += "/"
        }
        aF += aB + "/" + aE + "/" + aA + "/" + az + "/" + this.consentTypeId + "/" + this.privacyAccessTypeId;
        if (this.activeTranslationId != 0) {
            aF += "/" + this.activeTranslationId
        }
        if (this.pixelsDropped.indexOf(aF) === -1 || aC) {
            this.pixelsDropped.push(aF);
            aF += "?consent=" + ((this.consentIsGiven) ? "1" : "0");
            if (this.customerUserId) {
                aF += "&u=" + encodeURI(this.customerUserId)
            }
            var aD = new Image(0, 0);
            aD.style.display = "none";
            aD.src = aF
        }
    };
    av.prototype.consentGiven = function(aA, az, aD, aC) {
        var aB = false;
        if (!this._isConsentGiven() && !this.shouldSupportAmp) {
            aB = this._setConsentCookie(null, az, aD, aC)
        } else {
            aB = this._isConsentGiven()
        }
        this._runConsentCallback(az, aD, aC);
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
        if (aB) {
            if (aA === undefined || aA === false) {
                this.dropPixel(k)
            }
            this.navigationStack = [];
            this.showNotice()
        } else {
            if (this.shouldSupportAmp) {} else {
                console.error("Unable to set ConsentCookie")
            }
        }
    };
    av.prototype.closeGiven = function() {
        this._runCloseCallback();
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
    };
    av.prototype.declineGiven = function() {
        this._runDeclineCallback();
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
            if (window.evidon.banner) {
                window.evidon.banner.destroyNotice()
            }
            if (window.evidon.barrier) {
                window.evidon.barrier.destroyNotice()
            }
        }
    };
    av.prototype.getConsentUrl = function() {
        var az = window.evidon.id;
        var aC = this.activeSettings.id;
        var aA = this.activeCountryId;
        var aB = this.languageCode;
        return W + az + "/" + aC + "/" + aA + "?lang=" + aB
    };
    av.prototype.getGDPRRequestUrl = function() {
        var az = window.evidon.id;
        var aB = this.activeSettings.id;
        var aA = this.activeCountryId;
        return M + az + "/" + aB + "/" + aA
    };
    av.prototype.getPrivacyPolicyLink = function() {
        if (!this.activeCountryId) {
            return "#"
        }
        var aA = this.activeSettings;
        var az = aA.countries[this.activeCountryId];
        if (az && aA.privacyLinks && aA.privacyLinks.hasOwnProperty(az.privacyLinkId)) {
            return this.activeSettings.privacyLinks[az.privacyLinkId]
        }
        return "#"
    };
    av.prototype.showPreferencesDialog = function(aA, aB) {
        var az = this;
        if (!window.evidon.preferencesDialog) {
            this.appendScript(au + an, function() {
                az.showPreferencesDialog(aA, aB)
            });
            this.dropPixel(P)
        } else {
            if (aA && !isNaN(aA)) {
                window.evidon.preferencesDialog.TAB_INDEX = aA
            }
            if (aB && !isNaN(aB)) {
                window.evidon.preferencesDialog.TAB_SECONDARY_INDEX = aB
            }
            window.evidon.preferencesDialog.init()
        }
    };
    av.prototype.showOptionPanel = function(aA) {
        var az = this;
        if (!window.evidon.gdprL2) {
            if (K.indexOf(this.companyId) > -1) {
                this.appendScript(au + L.L2_SCRIPT, function() {
                    az.showOptionPanel(aA)
                })
            } else {
                this.appendScript(au + Q, function() {
                    az.showOptionPanel(aA)
                })
            }
            this.dropPixel(P)
        } else {
            window.evidon.gdprL2.showOverlay(aA)
        }
    };
    av.prototype.showOptions = function(aA, az, aB) {
        if (this.L2Enabled) {
            if (this.getPreferencesDialogV2Enabled()) {
                this.showPreferencesDialog(az, aB)
            } else {
                this.showOptionPanel(aA)
            }
        } else {
            this.showConsentTool(aA)
        }
    };
    av.prototype.showConsentTool = function(aE) {
        var aB = (this.activeSettings.consentDisplayType === undefined) ? 1 : (this.activeSettings.consentDisplayType || 1);
        var aF = (aB == S || (aB == T && window.location.protocol.indexOf("https") === -1));
        if (aF) {
            var az = document.createElement("div");
            az.style.cssText = "background-color: #000000; opacity:.7; position:fixed;top:0;left:0;bottom:0;right:0; z-index:2147483640;";
            az.id = ak;
            document.body.appendChild(az);
            var aC = document.createElement("div");
            aC.id = V;
            if (this.isMobile()) {
                aC.style.cssText = "position:absolute; top:0;left:0; bottom:0; right:0;;z-index:2147483647; padding: 28px 0 0 0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-y:scroll;"
            } else {
                aC.style.cssText = "position:fixed; top: 10%;left:20%; width:60%;height:80%;z-index:2147483647; padding: 28px 0 0 0;"
            }
            var aA = document.createElement("button");
            aA.style.cssText = "position:absolute; top:4px;right:8px;color:white; background:transparent;font-size:12px;border:0; psdding:4px;cursor:pointer;padding:0;";
            aA.innerHTML = this.activeTranslations.gdprl2Close + "&nbsp; &#x2716;";
            aA.onclick = this._closeL3;
            aC.appendChild(aA);
            var aD = document.createElement("iframe");
            aD.id = "_evidon-consent-frame";
            aD.scrolling = "yes";
            aD.seamless = "seamless";
            aD.frameBorder = "0";
            aD.src = this.getConsentUrl();
            aD.style.cssText = "width:100%; height:100%;";
            aD.onload = function() {
                document.getElementById(V).style.position = "fixed"
            };
            aC.appendChild(aD);
            document.body.appendChild(aC)
        } else {
            window.open(this.getConsentUrl(), "L3")
        }
        this.dropPixel(U)
    };
    av.prototype.isMobile = function() {
        var az = navigator.userAgent;
        return (/ip(hone|od)|(android).+mobile|opera m(ob|in)i/i).test(az) || (/Android/).test(az) || (/iPhone/).test(az) || (/iPad/).test(az)
    };
    av.prototype.showNotice = function() {
        if (!this.settings) {
            if (window.evidon.settings !== undefined && window.evidon.settings) {
                this.settings = window.evidon.settings
            } else {
                return
            }
        }
        if (!this.country) {
            if (window.evidon.location) {
                this.country = window.evidon.location
            }
        }
        if (!this.country) {
            return
        }
        this.activeSettings = this._getSettings();
        if (!this.activeSettings) {
            return
        }
        var aE = this.country.id;
        var aD = null;
        if (this.activeSettings.countries.hasOwnProperty(aE)) {
            aD = this.activeSettings.countries[aE];
            this.activeCountryId = aE
        } else {
            aD = this.activeSettings.countries[this.activeSettings.defaultCountry];
            this.activeCountryId = this.activeSettings.defaultCountry
        }
        if (!aD) {
            console.log("No consent settings found for the country: " + aE);
            return
        }
        if (!this._isDomReady()) {
            return
        }
        if (!this.themes) {
            this.themes = (window.evidon.themes || null)
        }
        if (!this.themes) {
            return
        }
        if (!this.vendorList) {
            if (this.activeSettings.vendorLinks) {
                this.vendorList = this.activeSettings.vendorLinks
            } else {
                this.getVendorList();
                return
            }
        }
        var az = "";
        var aA = "";
        if (aD.hasOwnProperty("consentTemplate") && window.evidon.consentTemplates) {
            var aB = aD.consentTemplate;
            var aC = window.evidon.consentTemplates[aB];
            this.iabEnabled = aC.iabEnabled || false;
            this.consentTypeId = aC.consentid;
            this.privacyAccessTypeId = aC.accessid;
            this.consentRequired = (aC.consentRequired === undefined ? aC.duration > 0 : aC.consentRequired);
            this.consentDuration = aC.duration;
            this.L2Enabled = (aC.l2enabled === undefined) ? false : aC.l2enabled;
            this.gdprEnabled = (aC.gdprEnabled === undefined) ? false : aC.gdprEnabled;
            this.adChoicesEnabled = aC.adChoicesEnabled === undefined ? true : aC.adChoicesEnabled == 1;
            this.closeConsentEnabled = (aC.closeConsentEnabled === undefined) ? true : aC.closeConsentEnabled;
            az = (aC.consentactions === undefined) ? "" : aC.consentactions;
            aA = aC.consentDetailLevel === undefined ? "cv" : aC.consentDetailLevel
        } else {
            this.iabEnabled = aD.iabEnabled || false;
            this.consentTypeId = aD.consentid;
            this.privacyAccessTypeId = aD.accessid;
            this.consentRequired = (aD.consentRequired === undefined ? aD.duration > 0 : aD.consentRequired);
            this.consentDuration = aD.duration;
            this.L2Enabled = (aD.l2enabled === undefined) ? false : aD.l2enabled;
            this.gdprEnabled = (aD.gdprEnabled === undefined) ? false : aD.gdprEnabled;
            this.closeConsentEnabled = aD.closeConsentEnabled === undefined ? true : aD.closeConsentEnabled;
            this.adChoicesEnabled = true;
            az = aD.consentactions;
            aA = "cv"
        }
        this.dataRightsType = aD.dataRightsType === undefined ? 0 : aD.dataRightsType;
        var aG = (aD.rightslinkId === undefined) ? 0 : aD.rightslinkId;
        if (aG === 0) {
            this.rightsLink = ""
        } else {
            if (this.activeSettings.hasOwnProperty("rightsLinks")) {
                if (this.activeSettings.rightsLinks.hasOwnProperty(aG)) {
                    this.rightsLink = this.activeSettings.rightsLinks[aG]
                } else {
                    this.rightsLink = ""
                }
            } else {
                this.rightsLink = ""
            }
        }
        var aF = (aD.pubvendorsLinkId === undefined) ? 0 : aD.pubvendorsLinkId;
        if (aF === 0) {
            this.pubvendorsLink = null
        } else {
            this.pubvendorsLink = this.activeSettings.pubvendorsLinks[aF]
        }
        if (az && this.consentRequired) {
            this.scrollConsentEnabled = (az.indexOf("s") !== -1);
            this.navigationConsentEnabled = (az.indexOf("n") !== -1);
            this.pageclickConsentEnabled = (az.indexOf("p") !== -1)
        } else {
            this.scrollConsentEnabled = false;
            this.navigationConsentEnabled = false;
            this.pageclickConsentEnabled = false
        }
        this.consentDetailCategories = aA.indexOf("c") > -1;
        this.consentDetailVendors = aA.indexOf("v") > -1;
        this.activeVendorId = aD.vendor;
        this._setActiveTranslations();
        if (!this._isConsentGiven() && this._navigationConsentGiven()) {
            this.consentGiven(true)
        } else {
            if (this.consentRequired == false) {
                this._runConsentCallback()
            }
        }
        this.dropPixel(aq);
        var aJ = this._isConsentGiven();
        var aI = this._getSuppressionCookie();
        if (this.iabEnabled) {
            this.appendScript(x);
            this.appendScript(au + y);
            if (window.__cmp) {
                window.__cmp("setSuppression", aI !== null)
            } else {
                console.error("unable to find __cmp stub")
            }
        }
        if (this.consentTypeId != F && !aJ && !aI) {
            if (this.consentTypeId === D) {
                if (K.indexOf(this.companyId) > -1) {
                    this.appendScript(au + L.BANNER_SCRIPT)
                } else {
                    this.appendScript(au + l)
                }
                this._hookConsentEvents();
                if (this.activeTranslations && window.evidon.banner) {
                    window.evidon.banner.setTextValues(this.activeTranslations)
                }
            } else {
                if (this.consentTypeId === E) {
                    if (K.indexOf(this.companyId) > -1) {
                        this.appendScript(au + L.BARRIER_SCRIPT)
                    } else {
                        this.appendScript(au + m)
                    }
                    if (this.activeTranslations && window.evidon.barrier) {
                        window.evidon.barrier.setTextValues(this.activeTranslations)
                    }
                }
            }
        } else {
            if (!aI) {
                this._runConsentCallback()
            }
            if (this.privacyAccessTypeId == a) {
                var aH = this.getButtonStyle();
                if (aH && window.evidon.button) {
                    window.evidon.button.createButton(aH);
                    if (this.activeTranslations) {
                        window.evidon.button.setButtonText(this.activeTranslations)
                    }
                }
            }
            this.checkConsentedVendors()
        }
        if (this.privacyAccessTypeId == b) {
            aH = this.getLinkStyle();
            if (aH && window.evidon.link) {
                window.evidon.link.createLink(aH);
                if (this.activeTranslations) {
                    window.evidon.link.setLinkText(this.activeTranslations)
                }
            }
        }
        window.evidon.events._fireEvent("loaded", null)
    };
    av.prototype.checkConsentedVendors = function() {
        var aA = this.getActiveVendors();
        var az = this._getConsentedVendors();
        var aB = this._getNewVendors(aA, az);
        if (aB.length > 0 && typeof this.newVendorCallback === "function") {
            this.newVendorCallback(aB)
        }
    };
    av.prototype.getActiveVendors = function() {
        if (!this.activeSettings || !this.activeSettings.hasOwnProperty("vendors")) {
            return
        }
        var az = this.activeVendorId;
        if (az === -1 || !this.activeSettings.vendors.hasOwnProperty(az)) {
            return null
        }
        return this.activeSettings.vendors[az]
    };
    av.prototype._getConsentedCategories = function() {
        return this._getConsentDataSpecific("categories")
    };
    av.prototype._getConsentedCookies = function() {
        return this._getConsentDataSpecific("cookies")
    };
    av.prototype._getConsentedVendors = function() {
        return this._getConsentDataSpecific("vendors")
    };
    av.prototype._getConsentDataSpecific = function(aA) {
        var az = this._getConsentDataFromLocalStorage(aA);
        if (!az) {
            az = this._getConsentDataFromCookie(aA)
        }
        if (!az) {
            return null
        }
        return az
    };
    av.prototype._getConsentDataFromLocalStorage = function(aA) {
        var az = this._readLocalStorage(B + this.activeSettings.id);
        if (!az) {
            return null
        }
        az = JSON.parse(az);
        if (az.hasOwnProperty(aA) && az[aA].hasOwnProperty(this.activeCountryId)) {
            return az[aA][this.activeCountryId]
        }
        return null
    };
    av.prototype._getConsentDataFromCookie = function(aC) {
        var az = this._getConsentCookie();
        if (!az || !az.value) {
            return null
        }
        var aB = az.value;
        if (typeof aB === "string") {
            var aA = new Date(unescape(aB));
            aB = this._setConsentCookie(aA)
        } else {
            if (typeof aB === "object") {
                if (aB.hasOwnProperty(aC)) {
                    this._setConsentCookie(new Date(aB.consent_date))
                }
            }
        }
        if (aB.hasOwnProperty(aC) && aB[aC].hasOwnProperty(this.activeCountryId)) {
            return aB[aC][this.activeCountryId]
        }
        return null
    };
    av.prototype._getNewVendors = function(aB, az) {
        if (!aB || !az) {
            return []
        }
        var aA = [];
        if (Array.isArray(az)) {
            aA = az
        } else {
            for (var aE in az) {
                aA.push(parseInt(aE))
            }
        }
        var aD = [];
        for (var aC = 0; aC < aB.length; aC++) {
            var aE = aB[aC];
            if (aA.indexOf(aE) === -1) {
                aD.push(aE)
            }
        }
        return aD
    };
    av.prototype.setLocation = function(az) {
        this.country = az;
        if (!this.langaugeRoot) {
            this.activateTranslations(az.defaultLanguage)
        }
        this.showNotice()
    };
    av.prototype.setThemes = function(az) {
        this.themes = az;
        this.showNotice()
    };
    av.prototype.getVendorList = function() {
        this.appendScript(au + ay)
    };
    av.prototype.setVendorList = function(az) {
        this.vendorList = az;
        this.showNotice()
    };
    av.prototype.activateTranslations = function(az) {
        if (az === undefined || !az) {
            return
        }
        this.languageCode = az;
        this.languageRoot = az;
        var aA = this.languageCode.indexOf("-");
        if (aA !== -1) {
            this.languageRoot = this.languageCode.substr(0, aA)
        }
        if (this.translations.hasOwnProperty(this.languageRoot)) {
            this._setActiveTranslations();
            this.showNotice()
        } else {
            var aB = z + "/translations/" + this.languageRoot + ".js";
            this.appendScript(aB);
            this.activeTranslations = null
        }
    };
    av.prototype.setDomain = function(az, aD) {
        if (!az) {
            this.domain = window.location.hostname.toLowerCase();
            this.path = window.location.pathname.toLowerCase();
            var aA = this.path.lastIndexOf("/");
            if (aA > -1) {
                var aB = this.path.indexOf(".", aA);
                if (aB > -1) {
                    this.path = this.path.substr(0, aA)
                }
            }
        } else {
            az = az.toLowerCase();
            var aB = az.indexOf("://");
            if (aB !== -1) {
                az = az.substr(aB + 3)
            }
            aB = az.indexOf("/");
            if (aB === -1) {
                this.domain = az;
                this.path = "/"
            } else {
                this.domain = az.substr(0, aB);
                az = az.substr(aB);
                aB = az.indexOf("?");
                if (aB !== -1) {
                    az = az.substr(0, aB)
                }
                this.path = az
            }
        }
        if (aD === undefined || !aD) {
            var aC = this._getRootDomain(this.domain);
            aC = aC.replace(".", "");
            var aE = (window.evidon.test !== undefined) ? window.evidon.test : false;
            var aF = z + "/" + aC + ((aE) ? "/test" : "") + "/settings.js";
            this.appendScript(aF)
        }
        this.showNotice()
    };
    av.prototype.addTranslation = function(az, aA) {
        this.translations[az] = aA;
        this.showNotice()
    };
    av.prototype.loadSettings = function(az) {
        this.settings = az;
        this.showNotice()
    };
    av.prototype.getBannerStyle = function() {
        if (this.consentTypeId !== D) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].banner
        } else {
            return null
        }
    };
    av.prototype.getConsentTypeStyle = function() {
        var az = this.getBarrierStyle();
        if (!az) {
            az = this.getBannerStyle()
        }
        return az
    };
    av.prototype.getBarrierStyle = function() {
        if (this.consentTypeId !== E) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].barrier
        } else {
            return null
        }
    };
    av.prototype.getButtonStyle = function() {
        if (this.privacyAccessTypeId !== a) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].button
        } else {
            return null
        }
    };
    av.prototype.getLinkStyle = function() {
        if (this.privacyAccessTypeId !== b) {
            return null
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].link
        } else {
            return null
        }
    };
    av.prototype.getL2Style = function() {
        if (!this.L2Enabled) {
            return
        }
        if (!this.themes) {
            this.themes = window.evidon.themes
        }
        if (!this.themes) {
            return null
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
            return this.themes[this.activeSettings.themeId].l2
        } else {
            return null
        }
    };
    av.prototype.getPreferencesDialogV2Enabled = function() {
        var az = this.getL2Style();
        if (!az) {
            return false
        }
        return this.isMobile() ? az.mobileEnablePreferencesDialogV2 : az.enablePreferencesDialogV2
    };
    av.prototype.getTranslations = function() {
        return this.activeTranslations
    };
    av.prototype.formatTranslation = function(aF) {
        var aD = new RegExp(H, "g"),
            aC = new RegExp(C, "g"),
            aE = new RegExp(ap, "g"),
            az = this.getConsentUrl(),
            aB = this.getPrivacyPolicyLink(),
            aA = this.activeSettings.division || "";
        aF = aF.replace(aD, aA).replace(aC, az).replace(aE, aB);
        return aF
    };
    av.prototype.dropSuppressionCookie = function(aC, aE) {
        var az = {
            date: new Date()
        };
        var aB = new Date();
        aB.setDate(aB.getDate() + aC);
        var aD = this._getConsentCookieDomainPath();
        var aA = this._getConsentCookieDomain();
        this._writeCookie(aw, JSON.stringify(az), aB.toUTCString(), aD, aA);
        return az
    };
    av.prototype._getCookie = function(aC) {
        var aA = this._readCookies();
        for (var aB = 0; aB < aA.length; aB++) {
            var az = aA[aB];
            if (az.name === aC) {
                return az
            }
        }
        return null
    };
    av.prototype._readCookies = function() {
        var aA = document.cookie.split(";");
        var aB = [];
        for (var aD = 0; aD < aA.length; aD++) {
            var aF = aA[aD];
            var aE = aF.slice(0, aF.indexOf("=")).replace(/^\s+|\s+$/g, "");
            var aG = aF.slice(aF.indexOf("=") + 1);
            var az = {
                name: aE
            };
            try {
                az.value = JSON.parse(aG)
            } catch (aC) {
                az.value = aG
            }
            aB.push(az)
        }
        return aB
    };
    av.prototype._writeCookie = function(aD, aF, aC, aE, aB) {
        var aA = [aD + "=" + aF];
        if (typeof aC === "string") {
            aA.push("expires=" + aC)
        }
        aA.push("path=" + aE);
        if (typeof aB === "string") {
            aA.push("domain=" + aB)
        }
        var az = aA.join("; ");
        document.cookie = az;
        return (document.cookie.indexOf(aD) > -1)
    };
    av.prototype._readLocalStorage = function(aA) {
        try {
            if (!window.localStorage) {
                return false
            }
        } catch (az) {
            return false
        }
        return window.localStorage.getItem(aA)
    };
    av.prototype._writeLocalStorage = function(aA, aB) {
        try {
            if (!window.localStorage) {
                return false
            }
        } catch (az) {
            return false
        }
        window.localStorage.setItem(aA, aB);
        return window.localStorage.getItem(aA) !== null
    };
    av.prototype._removeLocalStorageItem = function(az) {
        if (!window.localStorage) {
            return
        }
        window.localStorage.removeItem(az)
    };
    av.prototype.withdrawConsent = function() {
        this._deleteConsentCookie();
        this.consentIsGiven = false;
        this.dropPixel(G);
        if (window.evidon.consentWithdrawnCallback) {
            window.evidon.consentWithdrawnCallback()
        }
    };
    av.prototype.newVendorCallback = function(az) {
        if (window.evidon.button) {
            window.evidon.button.showNewVendorIndicator()
        }
        if (window.evidon.cmp && window.evidon.cmp.consentString) {
            window.evidon.cmp.newVendorCallback(az)
        }
    };
    av.prototype.getOptOutApiUrl = function() {
        return aj
    };
    av.prototype.pushNavigationScreen = function(az) {
        this.navigationStack.push(az)
    };
    av.prototype.popNavigationScreen = function() {
        if (this.navigationStack.length < 1) {
            return null
        }
        var az = this.navigationStack.pop();
        return az
    };
    av.prototype.getNavigationScreenStackCount = function() {
        return this.navigationStack.length
    };
    av.prototype.setUserIdentifier = function(az) {
        this.customerUserId = az
    };
    var I = function() {
        this.subscriptions = {};
        this.subscribe = function(aA, az, aB) {
            if (!this.subscriptions.hasOwnProperty(aA)) {
                this.subscriptions[aA] = []
            }
            if (!aB) {
                aB = -1
            }
            this.subscriptions[aA].push({
                callback: az,
                limit: aB
            })
        };
        this._fireEvent = function(aA, az) {
            if (!this.subscriptions.hasOwnProperty(aA)) {
                return
            }
            var aD = this.subscriptions[aA];
            for (var aB = 0; aB < aD.length; aB++) {
                var aC = aD[aB];
                if (aC.callback && typeof aC.callback === "function") {
                    aC.callback.call(null, az);
                    if (aC.limit === -1) {
                        continue
                    }
                    aC.limit--;
                    if (aC.limit === 0) {
                        aD.splice(aB, 1);
                        aB--
                    }
                }
            }
        }
    };
    if (!window.evidon.events) {
        window.evidon.events = new I()
    }
    if (!window.evidon.notice) {
        window.evidon.notice = new av()
    }
    if (!window.evidon.button) {
        window.evidon.button = new n()
    }
    if (!window.evidon.link) {
        window.evidon.link = new X()
    }
    window.evidon.events._fireEvent("apiReady", null)
})();