
        (function(e) {
            var t = e.document;
            BOOMR = e.BOOMR || {};
            BOOMR.plugins = BOOMR.plugins || {};
            var n = {
                localStorageTestKey: "TorbitLSTest",
                pageTags: [],
                pageConversions: [],
                initHasRun: false
            };
            BOOMR.plugins.pageMeta = {
                init: function(r) {
                    initHasRun = true;
                    try {
                        localStorage.setItem(n.localStorageTestKey, n.localStorageTestKey);
                        localStorage.removeItem(n.localStorageTestKey);
                        BOOMR.addVar("ls", 1)
                    } catch (i) {
                        BOOMR.addVar("ls", 0)
                    }
                    if (e.location.protocol == "https:") BOOMR.addVar("prt", 1);
                    else BOOMR.addVar("prt", 0);
                    BOOMR.addVar("ref", t.referrer);
                    if (e.performance && e.performance.memory) {
                        for (m_name in e.performance.memory) {
                            if (e.performance.memory.hasOwnProperty(m_name)) {
                                BOOMR.addVar(m_name, e.performance.memory[m_name])
                            }
                        }
                    }
                    BOOMR.addVar("wH", e.innerHeight || t.body.clientHeight || t.documentElement.clientHeight);
                    BOOMR.addVar("tags", n.pageTags.join("|"));
                    return this
                },
                addTag: function(e) {
                    n.pageTags.push(e);
                    if (!n.initHasRun) {
                        return
                    }
                    BOOMR.addVar("tags", n.pageTags.join("|"))
                },
                addConversion: function(e, t) {
                    var r = e;
                    if (t && (t > 0 || t.length > 0)) r = e + "=" + t;
                    n.pageConversions.push(r);
                    BOOMR.addVar("conversion", n.pageConversions.join("|"))
                },
                is_complete: function() {
                    return true
                }
            }
        })(window);
        (function(e) {
            try {
                e._tbq = e._tbq || [];
                _tbq.push = function(e) {
                    if (e.length < 1 || !e[0]) return;
                    switch (e[0]) {
                        case "tag":
                            if (e.length < 2) return;
                            BOOMR.plugins.pageMeta.addTag(e[1]);
                            break;
                        case "startTimer":
                            if (e.length < 2) return;
                            BOOMR.plugins.customEvents.startTimer(e[1]);
                            break;
                        case "endTimer":
                            if (e.length < 2) return;
                            BOOMR.plugins.customEvents.endTimer(e[1]);
                            break
                    }
                };
                for (i in _tbq) {
                    if (_tbq.hasOwnProperty(i) && i != "push") {
                        _tbq.push(_tbq[i]);
                        delete _tbq[i]
                    }
                }
            } catch (t) {}
        })(window);
    