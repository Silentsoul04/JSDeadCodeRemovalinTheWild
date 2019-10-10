
                (function() {
                    var dc = document.cookie,
                        pbf = dc.match(/pbf[^a-zA-Z0-9]([^^]*)[0-9a-z]{8}/),
                        c = pbf != null ? decodeURIComponent(pbf[1]) : "",
                        cls_CB = 110,
                        lS = localStorage.getItem("gh_APPBNR"),
                        doc = document,
                        getBitFlag = function(piDec, piPos) {
                            if (piDec != null && piDec.length > 0 && piDec.charAt(0) == '#') {
                                var len = piDec.length,
                                    q = piPos % 4,
                                    hP = Math.floor(piPos / 4) + 1,
                                    aHP = len - hP,
                                    hV = parseInt(piDec.substring(aHP, aHP + 1), 16),
                                    hF = 1 << q;
                                return ((hV & hF) == hF) ? 1 : 0;
                            }
                        };
                    if (getBitFlag(c, cls_CB) || lS == null || lS == "0") {
                        var ghAppBnr = doc.getElementById("gh-appBanner"),
                            appLC = lS || 0;
                        var cD = new Date(),
                            pD = new Date(appLC),
                            mS = cD - pD,
                            days = Math.floor(mS / (24 * 60 * 60 * 1000));
                        var appbnr = JSON.parse(doc.getElementById("gh-appbnr").value),
                            rfr = doc.referrer,
                            cF = appbnr.REFERRER,
                            regex = new RegExp(cF),
                            nOD = appbnr.NUMBEROFDAYS;
                        var epnParam = /[?&]rmv[Ss][Bb]=true/.test(decodeURIComponent(decodeURIComponent(window.location.search)));
                        if (days >= nOD && (!navigator.userAgent.match(appbnr.USERAGENT) && !epnParam) /* &&(rfr!=null&&rfr==""||rfr!= null&&regex.test(rfr)) */ ) {
                            ghAppBnr.style.display = "block";
                        } else {
                            ghAppBnr.style.display = "none";
                        }
                    }
                })();
            