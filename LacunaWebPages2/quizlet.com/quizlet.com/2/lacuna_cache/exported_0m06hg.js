
        (function(g, b) {___jdce_logger("lacuna_cache/exported_0m06hg.js", 10, 2965);
            b.getCsToken = function() {___jdce_logger("lacuna_cache/exported_0m06hg.js", 54, 295);
                var a;
                a = g.cookie.match("(?:^|;)\\s*" + b.cstokenName.replace(/[\-\[\]{}()*+?.,\\^$|#\s]/g, "$&") + "=([^;]*)");
                return null !== a ? decodeURIComponent(a[1]) : null
            };
            b.appendCstokenToForm = function(a) {___jdce_logger("lacuna_cache/exported_0m06hg.js", 333, 529);
                var d = b.getCsToken();
                d ? (b.setHiddenFormElement(a, "cstoken", d), b.addCsTokenDebugging(a)) : Rollbar.warning("csrf_cookie_missing")
            };
            b.setHiddenFormElement = function(a, b, e) {___jdce_logger("lacuna_cache/exported_0m06hg.js", 568, 1013);
                var c = !1;
                if (a.querySelectorAll) {
                    var f = a.querySelectorAll("input[type='hidden'][name='" + b + "']");
                    if (0 < f.length)
                        for (var c = !0, h = 0; h < f.length; h++) f[h].value = e
                }
                c || (c = g.createElement("input"), c.type = "hidden", c.name = b, c.value = e, a.appendChild(c))
            };
            b.addCsTokenDebugging = function(a) {___jdce_logger("lacuna_cache/exported_0m06hg.js", 1051, 1321);
                b.setHiddenFormElement(a, "cstokenV2", b.getCsTokenV2());
                b.setHiddenFormElement(a, "cstokenFieldCount", "" + b.getFormFieldCount(a, "cstoken"));
                b.setHiddenFormElement(a, "cstokenSetByJs", "1")
            };
            b.getCsTokenV2 = function() {___jdce_logger("lacuna_cache/exported_0m06hg.js", 1352, 1707);
                for (var a = b.cstokenName + "=", d = document.cookie ? document.cookie.split(/;\s*/) : [], e = [], c = 0; c < d.length; c++) {
                    var f = d[c];
                    f && 0 === f.indexOf(a) &&
                        e.push(f.substr(a.length))
                }
                return e.join(";")
            };
            b.getFormFieldCount = function(a, b) {___jdce_logger("lacuna_cache/exported_0m06hg.js", 1743, 1933);
                for (var e = 0, c = 0; c < a.elements.length; c++) "hidden" === a.elements[c].type && a.elements[c].name === b && e++;
                return e
            };
            var k = function(a) {___jdce_logger("lacuna_cache/exported_0m06hg.js", 1955, 2183);
                a = a.target || a.srcElement;
                var d = a.method.toLowerCase();
                "post" !== d && "put" !== d && "delete" !== d && "patch" !== d || b.appendCstokenToForm(a)
            };
            "addEventListener" in g ? g.addEventListener("submit", k, !1) : g.attachEvent && g.attachEvent("onsubmit", k);
            b.willHaveMootools && QWait("mootools", function() {___jdce_logger("lacuna_cache/exported_0m06hg.js", 2360, 2954);
                var a = function() {___jdce_logger("lacuna_cache/exported_0m06hg.js", 2397, 2882);
                    var a =
                        b.getCsToken();
                    Request.prototype.options.headers = {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "text/javascript, text/html, application/xml, text/xml, */*",
                        "Cs-Token": a
                    };
                    Request.prototype.options.data = {
                        cstoken: a
                    }
                };
                a();
                setInterval(a, 3E3)
            })
        })(document, Quizlet);
    